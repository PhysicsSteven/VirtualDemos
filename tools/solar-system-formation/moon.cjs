/* Reads sph.c's frames and finds what the impact left: the planet, a disk of material in orbit around it, and what escaped;
   then the Moon that disk would make, from the formula Ida, Canup and Stewart (1997) fitted to their N-body runs of disks
   gathering into moons: M_moon ≈ 1.9 L_D / √(G M_p a_R) − 1.1 M_D (the mass that escapes while the moon gathers is left out).
   a_R = 2.9 R_p, the Roche limit for rock of the Moon's density. The classification follows Canup and Asphaug (2001): a particle
   is in the planet if it is inside the planet's radius or on an orbit that dips below it; in the disk if it is bound and its
   orbit stays outside; escaping if it is unbound. The planet's radius comes from its mass at Earth's mean density, and the steps
   are repeated until nothing changes. Usage: node moon.cjs out.bin [nt] -> a summary (JSON) on stdout. */
const fs = require('fs');
const G = 6.6743e-11, M_EARTH = 5.9722e24, RHO_EARTH = 5513, M_MOON = 7.346e22, L_EM = 3.5e34;   /* L_EM: today's Earth Moon angular momentum, kg m²/s (Canup 2004) */
function frames(file) {
  const b = fs.readFileSync(file), F = []; let o = 0;
  while (o + 12 <= b.length) { const t = b.readDoubleLE(o), n = b.readInt32LE(o + 8); o += 12; const f = { t, n, x: new Float64Array(3 * n), v: new Float64Array(3 * n), u: new Float64Array(n), rho: new Float64Array(n), mat: new Int32Array(n) };
    if (o + n * 36 > b.length) break;
    for (let i = 0; i < n; i++) { for (let c = 0; c < 3; c++) { f.x[3 * i + c] = b.readFloatLE(o + 4 * c); f.v[3 * i + c] = b.readFloatLE(o + 12 + 4 * c); } f.u[i] = b.readFloatLE(o + 24); f.rho[i] = b.readFloatLE(o + 28); f.mat[i] = b.readInt32LE(o + 32); o += 36; }
    F.push(f); }
  return F;
}
/* m: particle mass (all equal) */
function classify(f, m) {
  const n = f.n, cls = new Int8Array(n);   /* 0 planet, 1 disk, 2 escaping */
  /* start: the planet is everything within 1.5 Earth radii of the iron's center */
  let c = [0, 0, 0], cv = [0, 0, 0], k = 0; for (let i = 0; i < n; i++) if (f.mat[i] === 0) { for (let q = 0; q < 3; q++) { c[q] += f.x[3 * i + q]; cv[q] += f.v[3 * i + q]; } k++; }
  c = c.map((s) => s / k); cv = cv.map((s) => s / k);
  for (let i = 0; i < n; i++) cls[i] = Math.hypot(f.x[3 * i] - c[0], f.x[3 * i + 1] - c[1], f.x[3 * i + 2] - c[2]) < 1.5 * 6.371e6 ? 0 : 1;
  let Mp = 0, Rp = 0;
  for (let it = 0; it < 30; it++) {
    Mp = 0; c = [0, 0, 0]; cv = [0, 0, 0]; for (let i = 0; i < n; i++) if (cls[i] === 0) { Mp += m; for (let q = 0; q < 3; q++) { c[q] += m * f.x[3 * i + q]; cv[q] += m * f.v[3 * i + q]; } }
    c = c.map((s) => s / Mp); cv = cv.map((s) => s / Mp); Rp = Math.cbrt(3 * Mp / (4 * Math.PI * RHO_EARTH));
    let changed = 0;
    for (let i = 0; i < n; i++) {
      const r = [0, 1, 2].map((q) => f.x[3 * i + q] - c[q]), w = [0, 1, 2].map((q) => f.v[3 * i + q] - cv[q]), rr = Math.hypot(...r), v2 = w[0] ** 2 + w[1] ** 2 + w[2] ** 2;
      let k2;
      if (rr < Rp) k2 = 0;
      else { const E = v2 / 2 - G * Mp / rr; if (E >= 0) k2 = 2; else { const hx = r[1] * w[2] - r[2] * w[1], hy = r[2] * w[0] - r[0] * w[2], hz = r[0] * w[1] - r[1] * w[0], h2 = hx * hx + hy * hy + hz * hz;
        const a = -G * Mp / (2 * E), e = Math.sqrt(Math.max(0, 1 + 2 * E * h2 / (G * Mp) ** 2)); k2 = a * (1 - e) > Rp ? 1 : 0; } }
      if (k2 !== cls[i]) { cls[i] = k2; changed++; }
    }
    if (!changed) break;
  }
  /* the disk's mass, its angular momentum about the planet, its iron; the whole system's angular momentum */
  let MD = 0, LDv = [0, 0, 0], MFe = 0, Mesc = 0, Lt = [0, 0, 0], Mt = 0, ct = [0, 0, 0], cvt = [0, 0, 0];
  for (let i = 0; i < n; i++) { Mt += m; for (let q = 0; q < 3; q++) { ct[q] += m * f.x[3 * i + q]; cvt[q] += m * f.v[3 * i + q]; } }
  ct = ct.map((s) => s / Mt); cvt = cvt.map((s) => s / Mt);
  const cross = (r, w) => [r[1] * w[2] - r[2] * w[1], r[2] * w[0] - r[0] * w[2], r[0] * w[1] - r[1] * w[0]];
  for (let i = 0; i < n; i++) {
    const L = cross([0, 1, 2].map((q) => f.x[3 * i + q] - ct[q]), [0, 1, 2].map((q) => f.v[3 * i + q] - cvt[q])); for (let q = 0; q < 3; q++) Lt[q] += m * L[q];
    if (cls[i] === 1) { MD += m; if (f.mat[i] === 0) MFe += m; const l = cross([0, 1, 2].map((q) => f.x[3 * i + q] - c[q]), [0, 1, 2].map((q) => f.v[3 * i + q] - cv[q])); for (let q = 0; q < 3; q++) LDv[q] += m * l[q]; }
    if (cls[i] === 2) Mesc += m;
  }
  const LD = Math.hypot(...LDv), aR = 2.9 * Rp, Mmoon = 1.9 * LD / Math.sqrt(G * Mp * aR) - 1.1 * MD;
  return { cls, Mp, Rp, MD, MFe, Mesc, LD, Ltot: Math.hypot(...Lt), Mmoon };
}
if (require.main === module) {
  const F = frames(process.argv[2]), f = F[F.length - 1], Mtot = +(process.argv[3] || 1) * M_EARTH, m = Mtot / f.n, r = classify(f, m);
  console.log(JSON.stringify({ frames: F.length, t_h: +(f.t / 3600).toFixed(2), planet_ME: +(r.Mp / M_EARTH).toFixed(4), Rp_km: Math.round(r.Rp / 1e3), disk_MMoon: +(r.MD / M_MOON).toFixed(3),
    disk_iron_fraction: +(r.MFe / Math.max(r.MD, 1)).toFixed(3), escaped_MMoon: +(r.Mesc / M_MOON).toFixed(3), L_over_LEM: +(r.Ltot / L_EM).toFixed(3), moon_MMoon: +(r.Mmoon / M_MOON).toFixed(3),
    disk_particles: [...r.cls].filter((k) => k === 1).length }, null, 1));
}
module.exports = { frames, classify };
