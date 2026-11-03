/* Builds demos/solar-system-formation-data/moon.js, chapter 5's data, from one sph.c run.
   Usage: node moonframes.cjs out.bin setup.txt > ../../demos/solar-system-formation-data/moon.js
   Keeps the frames every 15 minutes up to 4 hours after contact, every 30 minutes to 8 hours, then every hour, and the ones before
   contact every 30 minutes (the page is about 1.6 MB). Positions in the center of mass frame are rounded to 4 km (16 bit numbers, ±131,000 km; particles
   farther out are flagged as gone); internal energy is kept as a 0 to 255 step on a log scale from 10⁵ to 10⁸ J/kg, for the glow.
   The summary (planet, disk, escaped, the Moon the disk would make) is moon.cjs's, on the last frame. */
const fs = require('fs'), { frames, classify } = require('./moon.cjs');
const [file, setup] = process.argv.slice(2);
const S = { N: 4000, Mt: 0.89, Mi: 0.11, core: 0.3, angle: 45, vinf: 0, u0: 1e6 };
for (const L of fs.readFileSync(setup, 'utf8').split('\n')) { const [k, v] = L.trim().split(/\s+/); if (k) S[k] = +v; }
const M_EARTH = 5.9722e24, M_MOON = 7.346e22, L_EM = 3.5e34, Q = 4000, LIM = 32767 * Q;
const F = frames(file), n = F[0].n, nt = n - Math.round(n * S.Mi / (S.Mt + S.Mi)), m = (S.Mt + S.Mi) * M_EARTH / n;
const gap = (t) => 60 * (t < 0 ? 30 : t <= 4 * 3600 ? 15 : t <= 8 * 3600 ? 30 : 60);
let lastT = -Infinity; const keep = F.filter((f, i) => { if (i === F.length - 1 || f.t - lastT >= gap(f.t) - 61) { lastT = f.t; return true; } return false; });
const b64 = (a) => Buffer.from(a.buffer, a.byteOffset, a.byteLength).toString('base64');
const out = { n, nt, setup: S, frames: [] };
out.mat = b64(Uint8Array.from({ length: n }, (_, i) => (i >= nt ? 2 : 0) + F[0].mat[i]));   /* 0 Earth iron, 1 Earth rock, 2 Theia iron, 3 Theia rock */
for (const f of keep) {
  let c = [0, 0, 0]; for (let i = 0; i < n; i++) for (let q = 0; q < 3; q++) c[q] += f.x[3 * i + q] / n;
  const p = new Int16Array(3 * n), e = new Uint8Array(n);
  for (let i = 0; i < n; i++) { const r = [0, 1, 2].map((q) => f.x[3 * i + q] - c[q]), far = r.some((z) => Math.abs(z) > LIM);
    for (let q = 0; q < 3; q++) p[3 * i + q] = far ? -32768 : Math.round(r[q] / Q);
    e[i] = Math.max(0, Math.min(255, Math.round(255 * (Math.log10(Math.max(f.u[i], 1e5)) - 5) / 3))); }
  out.frames.push([Math.round(f.t), b64(p), b64(e)]);
}
/* when Theia's iron is back inside Earth: the first frame after contact with the median of its iron particles within Earth's radius
   of the center of Earth's own iron (the page's captions follow it) */
let ironBack = null;
for (const f of F) { if (f.t <= 0) continue; let c = [0, 0, 0], k = 0; for (let i = 0; i < nt; i++) if (f.mat[i] === 0) { for (let q = 0; q < 3; q++) c[q] += f.x[3 * i + q]; k++; }
  c = c.map((v) => v / k); const d = []; for (let i = nt; i < n; i++) if (f.mat[i] === 0) d.push(Math.hypot(f.x[3 * i] - c[0], f.x[3 * i + 1] - c[1], f.x[3 * i + 2] - c[2])); d.sort((x, y) => x - y);
  if (f.t > 3600 && d[d.length >> 1] < 6.371e6) { ironBack = Math.round(f.t); break; } }
const last = F[F.length - 1], r = classify(last, m);
let fromTheia = 0; for (let i = nt; i < n; i++) if (r.cls[i] === 1) fromTheia += m;
out.cls = b64(Uint8Array.from(r.cls));
out.summary = { planet: +(r.Mp / M_EARTH).toPrecision(3), Rp: Math.round(r.Rp / 1e3), disk: +(r.MD / M_MOON).toPrecision(2), diskTheia: +(fromTheia / Math.max(r.MD, 1)).toFixed(2),
  diskIron: +(r.MFe / Math.max(r.MD, 1)).toFixed(2), escaped: +(r.Mesc / M_MOON).toPrecision(2), L: +(r.Ltot / L_EM).toPrecision(3), moon: +(r.Mmoon / M_MOON).toPrecision(2),
  diskN: [...r.cls].filter((k) => k === 1).length, ironBack };
process.stdout.write('/* Building a Solar System, chapter 5: the Moon-forming impact, one run of tools/solar-system-formation/sph.c made into this file by\n'
  + '   moonframes.cjs. Simulated data: frames [t after contact (s), positions (16 bit, 4 km steps, base64), internal energy (log steps)]. */\n'
  + 'window.VD_SSF_MOON = ' + JSON.stringify(out) + ';\n');
