/* Building a Solar System, chapter 4: the giant impact stage. The same integrator as nbody.cjs (read its header for the method),
   in C so that runs of a hundred million years take hours, not days. curriculum/validation/test_solar-system-formation.cjs runs
   both on the same start and checks that they agree.

   Build:  cc -O2 -o nbody nbody.c -lm
   Run:    ./nbody start.txt out.jsonl [steps] [checkpoint.txt]
   start.txt: first line "dt t0 t_end snap_every GMsun GMearth R_sun enc", then one line per body: "id m(Earth masses) R(AU) x y z vx vy vz"
   (heliocentric, AU and AU/yr), optionally followed by the ids of the starting bodies it is made of. Output: one JSON object per line:
   {"snap":t,...} every snap_every years and {"event":...} for each impact. With a checkpoint file, the whole state is written there
   (in the start file's format) every million years, so a run can go on from it: ./nbody checkpoint.txt more.jsonl -1 checkpoint.txt */
#define _GNU_SOURCE
#include <stdio.h>
#include <stdlib.h>
#include <string.h>
#include <math.h>

#define NMAX 64
static int n; static double GMS, ME, RSUN, ENC, SUN_NEAR = 0.15, EJECT = 100, DT;
static int id[NMAX]; static double mu[NMAX], Rb[NMAX], q[3 * NMAX], u[3 * NMAX];
static int of[NMAX][NMAX], nof[NMAX];
static double hRK = 0; static long nWH = 0, nRK = 0;
static FILE *out;

static void stumpff(double z, double *c2, double *c3) {
  if (z > 1e-3) { double s = sqrt(z), sn, cn; sincos(s, &sn, &cn); *c2 = (1 - cn) / z; *c3 = (s - sn) / (s * z); }
  else if (z < -1e-3) { double s = sqrt(-z); *c2 = (cosh(s) - 1) / -z; *c3 = (sinh(s) - s) / (s * -z); }
  else { *c2 = 0.5 - z / 24 + z * z / 720 - z * z * z / 40320; *c3 = 1.0 / 6 - z / 120 + z * z / 5040 - z * z * z / 362880; }
}
static double chiPrev[NMAX];
static int kepler(double *x, double *v, double m, double dt, double *warm) {
  double x0 = x[0], y0 = x[1], z0 = x[2], vx = v[0], vy = v[1], vz = v[2];
  double r0 = sqrt(x0 * x0 + y0 * y0 + z0 * z0), v2 = vx * vx + vy * vy + vz * vz, rv = x0 * vx + y0 * vy + z0 * vz;
  double alpha = 2 / r0 - v2 / m, smu = sqrt(m), d0 = rv / smu, chi = (warm && *warm != 0) ? *warm : smu * dt / r0, c2, c3; int ok = 0;
  for (int it = 0; it < 60; it++) {
    double chi2 = chi * chi; stumpff(alpha * chi2, &c2, &c3);
    double F = d0 * chi2 * c2 + (1 - alpha * r0) * chi2 * chi * c3 + r0 * chi - smu * dt;
    double Fp = d0 * chi * (1 - alpha * chi2 * c3) + (1 - alpha * r0) * chi2 * c2 + r0;
    double Fpp = d0 * (1 - alpha * chi2 * c2) + (1 - alpha * r0) * chi * (1 - alpha * chi2 * c3);
    double disc = fabs(16 * Fp * Fp - 20 * F * Fpp), den = Fp + (Fp >= 0 ? 1 : -1) * sqrt(disc), d = 5 * F / den;
    chi -= d; if (fabs(d) < 1e-9 * fmax(1, fabs(chi))) { ok = 1; break; }   /* Laguerre converges at least quadratically: the error left is below 1e-18 */
  }
  if (!ok) return 0;
  if (warm) *warm = chi;
  double chi2 = chi * chi; stumpff(alpha * chi2, &c2, &c3);
  double f = 1 - chi2 / r0 * c2, g = dt - chi2 * chi / smu * c3;
  double nx = f * x0 + g * vx, ny = f * y0 + g * vy, nz = f * z0 + g * vz, r = sqrt(nx * nx + ny * ny + nz * nz);
  double fd = smu / (r * r0) * (alpha * chi2 * chi * c3 - chi), gd = 1 - chi2 / r * c2;
  x[0] = nx; x[1] = ny; x[2] = nz; v[0] = fd * x0 + gd * vx; v[1] = fd * y0 + gd * vy; v[2] = fd * z0 + gd * vz;
  return 1;
}
static void kick(double h) {
  for (int i = 0; i < n; i++) { if (!mu[i]) continue; double *a = q + 3 * i;
    for (int j = i + 1; j < n; j++) { if (!mu[j]) continue; double *b = q + 3 * j, dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2], r2 = dx * dx + dy * dy + dz * dz, f = h / (r2 * sqrt(r2));
      u[3 * i] += mu[j] * f * dx; u[3 * i + 1] += mu[j] * f * dy; u[3 * i + 2] += mu[j] * f * dz; u[3 * j] -= mu[i] * f * dx; u[3 * j + 1] -= mu[i] * f * dy; u[3 * j + 2] -= mu[i] * f * dz; } }
}
static void sunDrift(double h) {
  double px = 0, py = 0, pz = 0;
  for (int i = 0; i < n; i++) { px += mu[i] * u[3 * i]; py += mu[i] * u[3 * i + 1]; pz += mu[i] * u[3 * i + 2]; }
  px *= h / GMS; py *= h / GMS; pz *= h / GMS;
  for (int i = 0; i < n; i++) { if (!mu[i]) continue; q[3 * i] += px; q[3 * i + 1] += py; q[3 * i + 2] += pz; }
}
static int needsRK(void) {
  double ri[NMAX], hb[NMAX];
  for (int i = 0; i < n; i++) { if (!mu[i]) continue; double *a = q + 3 * i; ri[i] = sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]); if (ri[i] < SUN_NEAR) return 1; hb[i] = cbrt(mu[i] / (3 * GMS)); }
  for (int i = 0; i < n; i++) { if (!mu[i]) continue; double *a = q + 3 * i, *va = u + 3 * i;
    for (int j = i + 1; j < n; j++) { if (!mu[j]) continue; double *b = q + 3 * j, *vb = u + 3 * j;
      double dx = b[0] - a[0], dy = b[1] - a[1], dz = b[2] - a[2], dvx = vb[0] - va[0], dvy = vb[1] - va[1], dvz = vb[2] - va[2];
      double lim = ENC * (hb[i] + hb[j]) * 0.5 * (ri[i] + ri[j]) + Rb[i] + Rb[j], r2 = dx * dx + dy * dy + dz * dz, v2 = dvx * dvx + dvy * dvy + dvz * dvz;
      if (r2 > 2 * (lim * lim + v2 * DT * DT)) continue;   /* (lim + v dt)² ≤ 2 (lim² + v² dt²): no square root for far pairs */
      double tc = v2 > 0 ? -(dx * dvx + dy * dvy + dz * dvz) / v2 : 0; tc = fmax(0, fmin(DT, tc));
      double ex = dx + dvx * tc, ey = dy + dvy * tc, ez = dz + dvz * tc;
      if (ex * ex + ey * ey + ez * ez < lim * lim) return 1; } }
  return 0;
}
static double t = 0;
static void whStep(void) {
  kick(DT / 2); sunDrift(DT / 2);
  for (int i = 0; i < n; i++) if (mu[i] && !kepler(q + 3 * i, u + 3 * i, GMS, DT, chiPrev + i)) { fprintf(stderr, "kepler failed body %d t %g\n", id[i], t); exit(2); }
  sunDrift(DT / 2); kick(DT / 2); t += DT; nWH++;
}
/* ---------- direct integration (Dormand–Prince 5(4)) in barycentric coordinates, Sun at index 0 ---------- */
#define NY (6 * (NMAX + 1))
static double MU(int i) { return i ? mu[i - 1] : GMS; }
static void toBary(double *y) {
  double mt = GMS, sx = 0, sy = 0, sz = 0, px = 0, py = 0, pz = 0;
  for (int i = 0; i < n; i++) { mt += mu[i]; sx += mu[i] * q[3 * i]; sy += mu[i] * q[3 * i + 1]; sz += mu[i] * q[3 * i + 2]; px += mu[i] * u[3 * i]; py += mu[i] * u[3 * i + 1]; pz += mu[i] * u[3 * i + 2]; }
  double X0 = -sx / mt, Y0 = -sy / mt, Z0 = -sz / mt; y[0] = X0; y[1] = Y0; y[2] = Z0; y[3] = -px / GMS; y[4] = -py / GMS; y[5] = -pz / GMS;
  for (int i = 0; i < n; i++) { int k = 6 * (i + 1); y[k] = q[3 * i] + X0; y[k + 1] = q[3 * i + 1] + Y0; y[k + 2] = q[3 * i + 2] + Z0; y[k + 3] = u[3 * i]; y[k + 4] = u[3 * i + 1]; y[k + 5] = u[3 * i + 2]; }
}
static void fromBary(const double *y) {
  for (int i = 0; i < n; i++) { int k = 6 * (i + 1); q[3 * i] = y[k] - y[0]; q[3 * i + 1] = y[k + 1] - y[1]; q[3 * i + 2] = y[k + 2] - y[2]; u[3 * i] = y[k + 3]; u[3 * i + 1] = y[k + 4]; u[3 * i + 2] = y[k + 5]; }
}
static void deriv(const double *y, double *dy) {
  int m = n + 1;
  for (int i = 0; i < m; i++) { int k = 6 * i; dy[k] = y[k + 3]; dy[k + 1] = y[k + 4]; dy[k + 2] = y[k + 5]; dy[k + 3] = dy[k + 4] = dy[k + 5] = 0; }
  for (int i = 0; i < m; i++) { double mi = MU(i); if (!mi) continue; int a = 6 * i;
    for (int j = i + 1; j < m; j++) { double mj = MU(j); if (!mj) continue; int b = 6 * j; double dx = y[b] - y[a], dy_ = y[b + 1] - y[a + 1], dz = y[b + 2] - y[a + 2], r2 = dx * dx + dy_ * dy_ + dz * dz, f = 1 / (r2 * sqrt(r2));
      dy[a + 3] += mj * f * dx; dy[a + 4] += mj * f * dy_; dy[a + 5] += mj * f * dz; dy[b + 3] -= mi * f * dx; dy[b + 4] -= mi * f * dy_; dy[b + 5] -= mi * f * dz; } }
}
static const double A[7][6] = { {0}, {1.0 / 5}, {3.0 / 40, 9.0 / 40}, {44.0 / 45, -56.0 / 15, 32.0 / 9}, {19372.0 / 6561, -25360.0 / 2187, 64448.0 / 6561, -212.0 / 729},
  {9017.0 / 3168, -355.0 / 33, 46732.0 / 5247, 49.0 / 176, -5103.0 / 18656}, {35.0 / 384, 0, 500.0 / 1113, 125.0 / 192, -2187.0 / 6784, 11.0 / 84} };
static const double B5[7] = {35.0 / 384, 0, 500.0 / 1113, 125.0 / 192, -2187.0 / 6784, 11.0 / 84, 0}, B4[7] = {5179.0 / 57600, 0, 7571.0 / 16695, 393.0 / 640, -92097.0 / 339200, 187.0 / 2100, 1.0 / 40};
#define TOL 1.0
static double hLimit(const double *y) {
  double h = 1e300; int m = n + 1;
  for (int i = 0; i < m; i++) { if (i && !mu[i - 1]) continue; int a = 6 * i;
    for (int j = i + 1; j < m; j++) { if (!mu[j - 1]) continue; int b = 6 * j;
      double dx = y[b] - y[a], dy = y[b + 1] - y[a + 1], dz = y[b + 2] - y[a + 2], dvx = y[b + 3] - y[a + 3], dvy = y[b + 4] - y[a + 4], dvz = y[b + 5] - y[a + 5];
      double r = sqrt(dx * dx + dy * dy + dz * dz), v = sqrt(dvx * dvx + dvy * dvy + dvz * dvz) + 1e-30, rr = r - (i ? Rb[i - 1] : RSUN) - Rb[j - 1];
      h = fmin(h, 0.1 * fmax(rr, 0.02 * r) / v); } }
  return h;
}
static void elementsOf(const double *y, int i, double *el);
static void merge(double *y, int i, int j) {
  int a = 6 * (i + 1), b = 6 * (j + 1); double mi = mu[i], mj = mu[j], m = mi + mj;
  for (int c = 0; c < 6; c++) { y[a + c] = (mi * y[a + c] + mj * y[b + c]) / m; y[b + c] = 0; }
  mu[i] = m; mu[j] = 0; Rb[i] = cbrt(Rb[i] * Rb[i] * Rb[i] + Rb[j] * Rb[j] * Rb[j]); Rb[j] = 0;
  for (int k = 0; k < nof[j]; k++) of[i][nof[i]++] = of[j][k]; nof[j] = 0;
}
static void collide(double *y, double tt) {
  for (int i = 0; i < n; i++) { if (!mu[i]) continue; int a = 6 * (i + 1);
    double hx = y[a] - y[0], hy = y[a + 1] - y[1], hz = y[a + 2] - y[2], hr = sqrt(hx * hx + hy * hy + hz * hz);
    if (hr < RSUN + Rb[i]) { fprintf(out, "{\"event\":\"sun\",\"t\":%.6f,\"id\":%d,\"m\":%.6g}\n", tt, id[i], mu[i] / ME);
      double ms = GMS + mu[i]; for (int c = 3; c < 6; c++) y[c] = (GMS * y[c] + mu[i] * y[a + c]) / ms; mu[i] = 0; Rb[i] = 0; nof[i] = 0; for (int c = 0; c < 6; c++) y[a + c] = 0; continue; }
    for (int j = i + 1; j < n; j++) { if (!mu[j]) continue; int b = 6 * (j + 1);
      double dx = y[b] - y[a], dy = y[b + 1] - y[a + 1], dz = y[b + 2] - y[a + 2], r = sqrt(dx * dx + dy * dy + dz * dz), Rs = Rb[i] + Rb[j];
      if (r >= Rs) continue;
      double dvx = y[b + 3] - y[a + 3], dvy = y[b + 4] - y[a + 4], dvz = y[b + 5] - y[a + 5], v = sqrt(dvx * dvx + dvy * dvy + dvz * dvz);
      double rv = dx * dvx + dy * dvy + dz * dvz, disc = rv * rv - v * v * (r * r - Rs * Rs), tb = (rv + sqrt(fmax(0, disc))) / (v * v);
      double cx = dx - dvx * tb, cy = dy - dvy * tb, cz = dz - dvz * tb, cr = sqrt(cx * cx + cy * cy + cz * cz);
      double cosA = fabs(cx * dvx + cy * dvy + cz * dvz) / (cr * v), angle = acos(fmin(1, cosA)) * 180 / M_PI, vesc = sqrt(2 * (mu[i] + mu[j]) / Rs);
      int big = mu[i] >= mu[j] ? i : j, sm = big == i ? j : i; double sg = big == i ? 1 : -1, el[6];
      elementsOf(y, big, el);
      fprintf(out, "{\"event\":\"merge\",\"t\":%.6f,\"target\":%d,\"impactor\":%d,\"mT\":%.6g,\"mI\":%.6g,\"vImp\":%.6g,\"vEsc\":%.6g,\"angle\":%.4g,\"a\":%.6g,\"rel\":{\"x\":[%.9g,%.9g,%.9g],\"v\":[%.9g,%.9g,%.9g]}}\n",
        tt, id[big], id[sm], mu[big] / ME, mu[sm] / ME, v, vesc, angle, el[0], sg * cx, sg * cy, sg * cz, sg * dvx, sg * dvy, sg * dvz);
      merge(y, big, sm); fflush(out);
      if (!mu[i]) break;
    }
  }
}
static void rkStep(void) {
  static double y[NY], k[7][NY], yt[NY], y5[NY]; int N = 6 * (n + 1);
  toBary(y); double tt = 0, h = fmin(DT, hRK > 0 ? hRK : DT);
  while (tt < DT) {
    h = fmin(h, fmin(DT - tt, hLimit(y)));
    deriv(y, k[0]);
    for (int s = 1; s < 7; s++) { for (int m = 0; m < N; m++) { double acc = y[m]; for (int r = 0; r < s; r++) acc += h * A[s][r] * k[r][m]; yt[m] = acc; } deriv(yt, k[s]); }
    double err = 0;
    for (int m = 0; m < N; m++) { double s5 = y[m], s4 = y[m]; for (int r = 0; r < 7; r++) { s5 += h * B5[r] * k[r][m]; s4 += h * B4[r] * k[r][m]; } y5[m] = s5;
      double sc = 1e-12 + fabs(s5) * 1e-12, e = fabs(s5 - s4) / sc; if (e > err) err = e; }   /* about 1e-12 relative, AU and AU/yr */
    if (err <= TOL || h < 1e-12) { tt += h; memcpy(y, y5, sizeof(double) * N); nRK++; collide(y, t + tt); h *= fmin(5, 0.9 * pow(TOL / fmax(err, 1e-300), 0.2)); }
    else h *= fmax(0.1, 0.9 * pow(TOL / err, 0.2));
  }
  hRK = h; fromBary(y); t += DT;
}
static void elementsOf(const double *y, int i, double *el) {
  int a = 6 * (i + 1); double m = GMS + mu[i];
  double x = y[a] - y[0], yy = y[a + 1] - y[1], z = y[a + 2] - y[2], vx = y[a + 3] - y[3], vy = y[a + 4] - y[4], vz = y[a + 5] - y[5];
  double r = sqrt(x * x + yy * yy + z * z), v2 = vx * vx + vy * vy + vz * vz, hx = yy * vz - z * vy, hy = z * vx - x * vz, hz = x * vy - yy * vx, h = sqrt(hx * hx + hy * hy + hz * hz);
  double aa = 1 / (2 / r - v2 / m), rv = x * vx + yy * vy + z * vz;
  double ex = (vy * hz - vz * hy) / m - x / r, ey = (vz * hx - vx * hz) / m - yy / r, ez = (vx * hy - vy * hx) / m - z / r, e = sqrt(ex * ex + ey * ey + ez * ez);
  double inc = acos(fmax(-1, fmin(1, hz / h))), node = atan2(hx, -hy), varpi = e > 1e-12 ? atan2(ey, ex) : 0, lam = 0;
  if (aa > 0 && e < 1) { double cE = (1 - r / aa) / e, sE = rv / (e * sqrt(m * aa)), E = atan2(sE, cE); lam = E - e * sin(E) + varpi; }
  lam = fmod(fmod(lam, 2 * M_PI) + 2 * M_PI, 2 * M_PI);
  el[0] = aa; el[1] = e; el[2] = inc; el[3] = node; el[4] = varpi; el[5] = lam;
}
static double energy(void) {
  double y[NY]; toBary(y); double E = 0; int m = n + 1;
  for (int i = 0; i < m; i++) { double mi = MU(i); if (!mi) continue; int k = 6 * i; E += 0.5 * mi * (y[k + 3] * y[k + 3] + y[k + 4] * y[k + 4] + y[k + 5] * y[k + 5]);
    for (int j = i + 1; j < m; j++) { double mj = MU(j); if (!mj) continue; int b = 6 * j; double dx = y[b] - y[k], dy = y[b + 1] - y[k + 1], dz = y[b + 2] - y[k + 2]; E -= mi * mj / sqrt(dx * dx + dy * dy + dz * dz); } }
  return E;
}
static void snap(double E0) {
  double y[NY]; toBary(y);
  fprintf(out, "{\"snap\":%.1f,\"dE\":%.3g,\"wh\":%ld,\"rk\":%ld,\"b\":[", t, (energy() - E0) / E0, nWH, nRK);
  int first = 1;
  for (int i = 0; i < n; i++) { if (!mu[i]) continue; double el[6]; elementsOf(y, i, el);
    fprintf(out, "%s{\"id\":%d,\"m\":%.6g,\"R\":%.6g,\"a\":%.7g,\"e\":%.5g,\"i\":%.5g,\"O\":%.5g,\"w\":%.5g,\"l\":%.5g,\"of\":[", first ? "" : ",", id[i], mu[i] / ME, Rb[i], el[0], el[1], el[2], el[3], el[4], el[5]);
    for (int k = 0; k < nof[i]; k++) fprintf(out, "%s%d", k ? "," : "", of[i][k]);
    fprintf(out, "]}"); first = 0; }
  fprintf(out, "]}\n"); fflush(out);
}
/* the whole state, in the start file's format (heliocentric velocities), written to a new file then renamed over the old one */
static void checkpoint(const char *path, double tend, double every) {
  char tmp[1024]; snprintf(tmp, sizeof tmp, "%s.new", path); FILE *c = fopen(tmp, "w"); if (!c) return;
  double px = 0, py = 0, pz = 0; for (int i = 0; i < n; i++) { px += mu[i] * u[3 * i]; py += mu[i] * u[3 * i + 1]; pz += mu[i] * u[3 * i + 2]; }
  double vs[3] = { -px / GMS, -py / GMS, -pz / GMS };   /* the Sun's barycentric velocity */
  fprintf(c, "%.17g %.17g %.17g %.17g %.17g %.17g %.17g %.17g\n", DT, t, tend, every, GMS, ME, RSUN, ENC);
  for (int i = 0; i < n; i++) { if (!mu[i]) continue;
    fprintf(c, "%d %.17g %.17g %.17g %.17g %.17g %.17g %.17g %.17g", id[i], mu[i] / ME, Rb[i], q[3 * i], q[3 * i + 1], q[3 * i + 2], u[3 * i] - vs[0], u[3 * i + 1] - vs[1], u[3 * i + 2] - vs[2]);
    for (int k = 0; k < nof[i]; k++) fprintf(c, " %d", of[i][k]); fprintf(c, "\n"); }
  fclose(c); rename(tmp, path);
}
int main(int argc, char **argv) {
  if (argc < 3) { fprintf(stderr, "usage: nbody start.txt out.jsonl [steps_for_test]\n"); return 1; }
  FILE *f = fopen(argv[1], "r"); double t0, tend, every; char line[8192];
  if (!f || !fgets(line, sizeof line, f) || sscanf(line, "%lf %lf %lf %lf %lf %lf %lf %lf", &DT, &t0, &tend, &every, &GMS, &ME, &RSUN, &ENC) != 8) return 1;
  double hb[3 * NMAX], vb[3 * NMAX]; n = 0;
  while (n < NMAX && fgets(line, sizeof line, f)) {
    double v[9]; char *p = line, *e; int k;
    for (k = 0; k < 9; k++) { v[k] = strtod(p, &e); if (e == p) break; p = e; }
    if (k < 9) continue;
    id[n] = (int)v[0]; mu[n] = v[1] * ME; Rb[n] = v[2]; for (int c = 0; c < 3; c++) { hb[3 * n + c] = v[3 + c]; vb[3 * n + c] = v[6 + c]; }
    nof[n] = 0; for (;;) { long x = strtol(p, &e, 10); if (e == p) break; of[n][nof[n]++] = (int)x; p = e; }
    if (!nof[n]) { of[n][0] = id[n]; nof[n] = 1; }
    n++; }
  fclose(f);
  /* heliocentric velocities to barycentric (the democratic heliocentric momenta) */
  double px = 0, py = 0, pz = 0, mt = GMS; for (int i = 0; i < n; i++) { px += mu[i] * vb[3 * i]; py += mu[i] * vb[3 * i + 1]; pz += mu[i] * vb[3 * i + 2]; mt += mu[i]; }
  for (int i = 0; i < n; i++) { memcpy(q + 3 * i, hb + 3 * i, 3 * sizeof(double)); u[3 * i] = vb[3 * i] - px / mt; u[3 * i + 1] = vb[3 * i + 1] - py / mt; u[3 * i + 2] = vb[3 * i + 2] - pz / mt; }
  out = fopen(argv[2], "w"); t = t0;
  long steps = argc > 3 ? atol(argv[3]) : -1; const char *ck = argc > 4 ? argv[4] : NULL;
  double E0 = energy(), next = t0, nextCk = t0 + 1e6; long k = 0;
  while (t < tend - 1e-9 && (steps < 0 || k < steps)) {
    if (t >= next - 1e-9) { snap(E0); next += every; }
    if (ck && t >= nextCk - 1e-9) { checkpoint(ck, tend, every); nextCk += 1e6; }
    if (needsRK()) rkStep(); else whStep();
    if ((++k & 1023) == 0) for (int i = 0; i < n; i++) { if (!mu[i]) continue; double *a = q + 3 * i, r = sqrt(a[0] * a[0] + a[1] * a[1] + a[2] * a[2]);
      if (r > EJECT) { double v2 = u[3 * i] * u[3 * i] + u[3 * i + 1] * u[3 * i + 1] + u[3 * i + 2] * u[3 * i + 2]; if (v2 / 2 - GMS / r > 0) { fprintf(out, "{\"event\":\"ejected\",\"t\":%.6f,\"id\":%d,\"m\":%.6g}\n", t, id[i], mu[i] / ME); mu[i] = 0; Rb[i] = 0; nof[i] = 0; } } }
  }
  snap(E0);
  fclose(out); return 0;
}
