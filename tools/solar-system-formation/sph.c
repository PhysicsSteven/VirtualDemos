/* Building a Solar System, chapter 5: the Moon-forming impact, by smoothed particle hydrodynamics (SPH), at low resolution in the
   spirit of the first such simulations (Benz, Slattery and Cameron 1986, 3000 particles).

   Two bodies, each an iron core under a rock mantle, made of equal mass particles. Each body is first let settle on its own
   (velocities damped, internal energy held) into balance between its pressure and its gravity. Then they collide. Every particle feels the gravity of
   every other (direct sum, softened over the particles' size) and the pressure of its neighbors (standard SPH: a cubic spline
   kernel, density by summation, the Monaghan 1992 artificial viscosity with alpha 1 and beta 2 so shocks heat the material).
   Pressure from the Tillotson equation of state (Tillotson 1962) with the iron and granite constants of Melosh (1989, table AII.3);
   material in tension is given zero pressure (a fluid has no strength). Leapfrog steps, all particles on the same step, set by the
   Courant condition and the accelerations.

   Build:  cc -O2 -fopenmp -o sph sph.c -lm
   Run:    ./sph setup.txt out.bin
   setup.txt, one "key value" per line: N (particles in all), Mt and Mi (target and impactor mass, Earth masses), core (iron mass
   fraction), angle (impact angle from head on, degrees), vinf (speed at infinity, km/s), u0 (starting internal energy, J/kg),
   relax (settling steps per body), hours (time to run after contact), every (minutes between saved frames), seed.
   out.bin: frames of [double t (s), int n, then n × (float x, y, z (m), vx, vy, vz (m/s), u (J/kg), rho (kg/m³), int material)],
   material 0 iron, 1 rock; particles 0..Nt-1 the target, the rest the impactor. A summary goes to stderr. */
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#define G 6.67430e-11          /* CODATA 2022 */
#define M_EARTH 5.9722e24      /* kg, from GM = 3.986004e14 m³/s² (demos/lib/constants.js) */
#define NGB 50.0               /* neighbors each particle aims for */

typedef struct { double rho0, A, B, E0, a, b, alpha, beta, Eiv, Ecv; } Till;
/* Melosh (1989), Impact Cratering, table AII.3 */
static const Till MAT[2] = {
  { 7800, 1.279e11, 1.05e11, 9.5e6, 0.5, 1.5, 5, 5, 2.4e6, 8.67e6 },   /* iron */
  { 2680, 1.8e10, 1.8e10, 1.6e7, 0.5, 1.3, 5, 5, 3.5e6, 1.8e7 } };     /* granite */

static int N; static double *x, *v, *a, *u, *du, *rho, *P, *cs, *h, *m; static int *mat, *nn;

static double tillotson(int k, double r, double e) {
  const Till *T = &MAT[k]; double eta = r / T->rho0, mu = eta - 1, w = e / (T->E0 * eta * eta) + 1;
  double Pc = (T->a + T->b / w) * r * e + T->A * mu + T->B * mu * mu;
  if (r >= T->rho0 || e <= T->Eiv) return Pc;
  double z = 1 / eta - 1, Pe = T->a * r * e + (T->b * r * e / w + T->A * mu * exp(-T->beta * z)) * exp(-T->alpha * z * z);
  if (e >= T->Ecv) return Pe;
  return ((e - T->Eiv) * Pe + (T->Ecv - e) * Pc) / (T->Ecv - T->Eiv);
}
static void eos(int i) {
  const Till *T = &MAT[mat[i]]; double r = rho[i], e = u[i], p = tillotson(mat[i], r, e);
  /* sound speed: c² = ∂P/∂ρ at fixed u + (P/ρ²) ∂P/∂u, from small differences, never below a tenth of the cold bulk value */
  double dr = 1e-4 * r, de = 1e-4 * fabs(e) + 1, dpr = (tillotson(mat[i], r + dr, e) - tillotson(mat[i], r - dr, e)) / (2 * dr);
  double dpe = (tillotson(mat[i], r, e + de) - tillotson(mat[i], r, e - de)) / (2 * de), c2 = dpr + (p > 0 ? p : 0) / (r * r) * dpe;
  if (c2 < 0.1 * T->A / T->rho0) c2 = 0.1 * T->A / T->rho0;
  P[i] = p > 0 ? p : 0; cs[i] = sqrt(c2);
}
/* the cubic spline kernel (Monaghan and Lattanzio 1985), support 2h */
static inline double W(double r, double hh) { double q = r / hh, s = 1 / (M_PI * hh * hh * hh); return q < 1 ? s * (1 - 1.5 * q * q + 0.75 * q * q * q) : q < 2 ? s * 0.25 * (2 - q) * (2 - q) * (2 - q) : 0; }
static inline double dW(double r, double hh) { double q = r / hh, s = 1 / (M_PI * hh * hh * hh * hh); return q < 1 ? s * (-3 * q + 2.25 * q * q) : q < 2 ? -s * 0.75 * (2 - q) * (2 - q) : 0; }

static void density(void) {
  #pragma omp parallel for schedule(dynamic, 16)
  for (int i = 0; i < N; i++) {
    double s = 0; int c = 0;
    for (int j = 0; j < N; j++) { double dx = x[3*i] - x[3*j], dy = x[3*i+1] - x[3*j+1], dz = x[3*i+2] - x[3*j+2], r2 = dx*dx + dy*dy + dz*dz, hh = 0.5 * (h[i] + h[j]);
      if (r2 < 4 * hh * hh) { s += m[j] * W(sqrt(r2), hh); if (r2 < 4 * h[i] * h[i]) c++; } }
    rho[i] = s; nn[i] = c; eos(i);
  }
}
static void forces(void) {
  #pragma omp parallel for schedule(dynamic, 16)
  for (int i = 0; i < N; i++) {
    double ax = 0, ay = 0, az = 0, de = 0, pi = P[i] / (rho[i] * rho[i]);
    for (int j = 0; j < N; j++) { if (j == i) continue;
      double dx = x[3*i] - x[3*j], dy = x[3*i+1] - x[3*j+1], dz = x[3*i+2] - x[3*j+2], r2 = dx*dx + dy*dy + dz*dz, hh = 0.5 * (h[i] + h[j]), eps = 0.5 * hh;
      double g = G * m[j] / ((r2 + eps * eps) * sqrt(r2 + eps * eps)); ax -= g * dx; ay -= g * dy; az -= g * dz;
      if (r2 >= 4 * hh * hh) continue;
      double r = sqrt(r2), dvx = v[3*i] - v[3*j], dvy = v[3*i+1] - v[3*j+1], dvz = v[3*i+2] - v[3*j+2], vr = dvx*dx + dvy*dy + dvz*dz, visc = 0;
      if (vr < 0) { double mu = hh * vr / (r2 + 0.01 * hh * hh); visc = (-1.0 * 0.5 * (cs[i] + cs[j]) * mu + 2.0 * mu * mu) / (0.5 * (rho[i] + rho[j])); }
      double f = m[j] * (pi + P[j] / (rho[j] * rho[j]) + visc) * dW(r, hh) / (r > 0 ? r : 1);
      ax -= f * dx; ay -= f * dy; az -= f * dz; de += 0.5 * f * vr;
    }
    a[3*i] = ax; a[3*i+1] = ay; a[3*i+2] = az; du[i] = de;
  }
}
static void smooth(void) { for (int i = 0; i < N; i++) { double f = 0.5 * (1 + cbrt(NGB / (nn[i] > 1 ? nn[i] : 1))); if (f < 0.8) f = 0.8; if (f > 1.25) f = 1.25; h[i] *= f; if (h[i] > 3e7) h[i] = 3e7; } }
static double timestep(void) {
  double dt = 1e9;
  for (int i = 0; i < N; i++) { double vs = 0; /* fastest approach of a neighbor is folded into the sound speed with the viscosity's factor */
    double an = sqrt(a[3*i]*a[3*i] + a[3*i+1]*a[3*i+1] + a[3*i+2]*a[3*i+2]), t1 = 0.3 * h[i] / (cs[i] * 2.2 + vs), t2 = 0.3 * sqrt(h[i] / (an + 1e-30));
    if (t1 < dt) dt = t1; if (t2 < dt) dt = t2; }
  return dt;
}
static void step(double dt, double damp) {
  for (int i = 0; i < 3 * N; i++) v[i] += 0.5 * dt * a[i];
  for (int i = 0; i < N; i++) { u[i] += 0.5 * dt * du[i]; if (u[i] < 1e3) u[i] = 1e3; }
  for (int i = 0; i < 3 * N; i++) x[i] += dt * v[i];
  density(); smooth(); density(); forces();
  for (int i = 0; i < 3 * N; i++) v[i] = (v[i] + 0.5 * dt * a[i]) * damp;
  for (int i = 0; i < N; i++) { u[i] += 0.5 * dt * du[i]; if (u[i] < 1e3) u[i] = 1e3; }
}
static unsigned long long rs = 1; static double rnd(void) { rs = rs * 6364136223846793005ULL + 1442695040888963407ULL; return (rs >> 11) * (1.0 / 9007199254740992.0); }
/* one body of n particles: an iron core (fraction fc of the mass) under a granite mantle, placed on cubic lattices at the two
   materials' uncompressed densities, each lattice turned at random; returns the outer radius */
static double build(int off, int n, double M, double fc, double u0) {
  int nc = (int)lround(n * fc); double mp = M / n, Rc = cbrt(3 * fc * M / (4 * M_PI * MAT[0].rho0)), R = cbrt(Rc * Rc * Rc + 3 * (1 - fc) * M / (4 * M_PI * MAT[1].rho0));
  int k = off;
  for (int part = 0; part < 2; part++) {
    int want = part ? n - nc : nc; double r0 = part ? Rc : 0, r1 = part ? R : Rc;
    /* lattice spacing for this material's particle density; grow the sphere until it holds the count wanted */
    double d = cbrt(mp / MAT[part].rho0), th = 2 * M_PI * rnd(), ph = 2 * M_PI * rnd(); int got = 0;
    double *buf = malloc(sizeof(double) * 3 * want * 2 + 3000); int cap = want * 2 + 1000;
    for (double sc = 1.0; ; sc *= 1.002) { got = 0; double s0 = r0, s1 = r1 * sc; int L = (int)(s1 / d) + 2;
      for (int ix = -L; ix <= L && got < cap; ix++) for (int iy = -L; iy <= L && got < cap; iy++) for (int iz = -L; iz <= L && got < cap; iz++) {
        double px = ix * d + 0.25 * d, py = iy * d + 0.25 * d, pz = iz * d + 0.25 * d;
        double qx = px * cos(th) - py * sin(th), qy = px * sin(th) + py * cos(th), qz = pz; double ry = qy * cos(ph) - qz * sin(ph), rz = qy * sin(ph) + qz * cos(ph);
        double rr = sqrt(qx * qx + ry * ry + rz * rz); if (rr >= s0 && rr < s1) { buf[3*got] = qx; buf[3*got+1] = ry; buf[3*got+2] = rz; got++; } }
      if (got >= want) break; }
    /* keep the innermost "want" points */
    for (int i = 0; i < want; i++) { int best = i; double br = 1e300; for (int j = i; j < got; j++) { double rr = buf[3*j]*buf[3*j] + buf[3*j+1]*buf[3*j+1] + buf[3*j+2]*buf[3*j+2]; if (rr < br) { br = rr; best = j; } }
      for (int c = 0; c < 3; c++) { double t = buf[3*i+c]; buf[3*i+c] = buf[3*best+c]; buf[3*best+c] = t; }
      for (int c = 0; c < 3; c++) x[3*k+c] = buf[3*i+c]; mat[k] = part; m[k] = mp; u[k] = u0; h[k] = 1.3 * d; for (int c = 0; c < 3; c++) v[3*k+c] = 0; k++; }
    free(buf);
  }
  return R;
}
static void com(int i0, int i1, double *c, double *cv) { double M = 0; for (int q = 0; q < 3; q++) c[q] = cv[q] = 0;
  for (int i = i0; i < i1; i++) { M += m[i]; for (int q = 0; q < 3; q++) { c[q] += m[i] * x[3*i+q]; cv[q] += m[i] * v[3*i+q]; } } for (int q = 0; q < 3; q++) { c[q] /= M; cv[q] /= M; } }
static void settle(int i0, int i1, int steps) {
  /* run one body alone, with its velocities damped, so it settles into balance */
  int keepN = N; double *X = x, *V = v, *A = a, *U = u, *D = du, *R = rho, *PP = P, *C = cs, *Hh = h, *Mm = m; int *Mt = mat, *Nn = nn;
  N = i1 - i0; x += 3 * i0; v += 3 * i0; a += 3 * i0; u += i0; du += i0; rho += i0; P += i0; cs += i0; h += i0; m += i0; mat += i0; nn += i0;
  for (int k = 0; k < 3; k++) density(), smooth(); density(); forces();
  /* while settling, the internal energy is held at its starting value: the damped jiggling would otherwise heat the body */
  double *u0 = malloc(8 * N); memcpy(u0, u, 8 * N);
  for (int s = 0; s < steps; s++) { double dt = timestep(); step(dt, 0.9); memcpy(u, u0, 8 * N); }
  free(u0);
  N = keepN; x = X; v = V; a = A; u = U; du = D; rho = R; P = PP; cs = C; h = Hh; m = Mm; mat = Mt; nn = Nn;
}
static void frame(FILE *f, double t) {
  fwrite(&t, sizeof t, 1, f); fwrite(&N, sizeof N, 1, f);
  for (int i = 0; i < N; i++) { float q[8] = { x[3*i], x[3*i+1], x[3*i+2], v[3*i], v[3*i+1], v[3*i+2], u[i], rho[i] }; fwrite(q, sizeof(float), 8, f); fwrite(&mat[i], sizeof(int), 1, f); }
  fflush(f);
}
int main(int argc, char **argv) {
  if (argc < 3) { fprintf(stderr, "usage: sph setup.txt out.bin\n"); return 1; }
  double Nt = 4000, Mt = 0.89, Mi = 0.11, fc = 0.3, ang = 45, vinf = 0, u0 = 1e6, relax = 600, hours = 24, every = 15, seed = 1;
  FILE *s = fopen(argv[1], "r"); char key[64]; double val;
  while (s && fscanf(s, "%63s %lf", key, &val) == 2) {
    if (!strcmp(key, "N")) Nt = val; else if (!strcmp(key, "Mt")) Mt = val; else if (!strcmp(key, "Mi")) Mi = val; else if (!strcmp(key, "core")) fc = val;
    else if (!strcmp(key, "angle")) ang = val; else if (!strcmp(key, "vinf")) vinf = val; else if (!strcmp(key, "u0")) u0 = val; else if (!strcmp(key, "relax")) relax = val;
    else if (!strcmp(key, "hours")) hours = val; else if (!strcmp(key, "every")) every = val; else if (!strcmp(key, "seed")) seed = val; }
  if (s) fclose(s); rs = (unsigned long long)seed * 2654435761ULL + 1;
  N = (int)Nt; int ni = (int)lround(N * Mi / (Mt + Mi)), nt = N - ni;
  x = calloc(3 * N, 8); v = calloc(3 * N, 8); a = calloc(3 * N, 8); u = calloc(N, 8); du = calloc(N, 8); rho = calloc(N, 8); P = calloc(N, 8); cs = calloc(N, 8); h = calloc(N, 8); m = calloc(N, 8);
  mat = calloc(N, sizeof(int)); nn = calloc(N, sizeof(int));
  double Rt = build(0, nt, Mt * M_EARTH, fc, u0), Ri = build(nt, ni, Mi * M_EARTH, fc, u0);
  settle(0, nt, (int)relax); settle(nt, N, (int)relax);
  /* radii after settling: the radius holding all but the outermost 1 % of each body's particles, measured from its center */
  double c[3], cv[3], R2[2];
  for (int b = 0; b < 2; b++) { int i0 = b ? nt : 0, i1 = b ? N : nt; com(i0, i1, c, cv); int n = i1 - i0; double *rr = malloc(8 * n);
    for (int i = i0; i < i1; i++) { rr[i - i0] = sqrt(pow(x[3*i] - c[0], 2) + pow(x[3*i+1] - c[1], 2) + pow(x[3*i+2] - c[2], 2)); for (int q = 0; q < 3; q++) { x[3*i+q] -= c[q]; v[3*i+q] = 0; } }
    for (int i = 0; i < n; i++) for (int j = i + 1; j < n; j++) if (rr[j] < rr[i]) { double t = rr[i]; rr[i] = rr[j]; rr[j] = t; }
    R2[b] = rr[(int)(0.99 * (n - 1))] + 0.5 * h[i1 - 1]; free(rr); }
  Rt = R2[0]; Ri = R2[1];
  /* the impactor's start: 4 contact distances away, on the two body orbit that touches at contact with the given angle */
  double Mtk = Mt * M_EARTH, Mik = Mi * M_EARTH, GM = G * (Mtk + Mik), Rc = Rt + Ri, vimp = sqrt(vinf * vinf * 1e6 + 2 * GM / Rc), Lr = Rc * vimp * sin(ang * M_PI / 180);
  double r0 = 4 * Rc, v0 = sqrt(vinf * vinf * 1e6 + 2 * GM / r0), vt = Lr / r0, vr = -sqrt(v0 * v0 - vt * vt);
  /* relative position along x, relative velocity (vr along x, vt along y); split between the bodies about their center of mass */
  for (int i = 0; i < N; i++) { int imp = i >= nt; double f = imp ? Mtk / (Mtk + Mik) : -Mik / (Mtk + Mik);
    x[3*i] += f * r0; v[3*i] += f * vr; v[3*i+1] += f * vt; }
  fprintf(stderr, "target %d particles R %.0f km, impactor %d particles R %.0f km, v_imp %.3f km/s (v_esc %.3f), angle %.0f, start %.0f km\n", nt, Rt / 1e3, ni, Ri / 1e3, vimp / 1e3, sqrt(2 * GM / Rc) / 1e3, ang, r0 / 1e3);
  /* time of contact on the two body orbit (Kepler, parabolic or hyperbolic): found by stepping the two point masses */
  double px = r0, py = 0, qx = vr, qy = vt, tc = 0; while (sqrt(px*px + py*py) > Rc) { double rr = sqrt(px*px + py*py), dt = 1e-3 * rr / sqrt(qx*qx + qy*qy); qx -= GM * px / (rr*rr*rr) * dt; qy -= GM * py / (rr*rr*rr) * dt; px += qx * dt; py += qy * dt; tc += dt; }
  fprintf(stderr, "contact at about %.2f h\n", tc / 3600);
  FILE *out = fopen(argv[2], "wb"); for (int k = 0; k < 3; k++) density(), smooth(); density(); forces();
  double t = 0, tend = tc + hours * 3600, next = tc - every * 60 * floor(tc / (every * 60)); long k = 0;   /* frames on whole steps of 'every' from contact */
  while (t < tend) { if (t >= next) { frame(out, t - tc); next += every * 60; } double dt = timestep(); step(dt, 1.0); t += dt; k++;
    if (k % 200 == 0) fprintf(stderr, "t %.2f h after contact, dt %.1f s, step %ld\n", (t - tc) / 3600, dt, k); }
  frame(out, t - tc); fclose(out); return 0;
}
