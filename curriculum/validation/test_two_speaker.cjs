'use strict';
// Two Speaker Interference: two point sources in free field, loud where r₂ − r₁ = mλ, quiet at (m + ½)λ (OpenStax Vol 1 §16.5, §17.2, §17.3).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('two-speaker', 'P_REF,L1M,AMP,soundSpeed,wavelength,dist,pressure,level,yForPathDiff,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('speed of sound 331 m/s √(T/273 K): 343.0 m/s at 20 °C, so 686 Hz has λ = 0.500 m', () => {
  near(c.soundSpeed(20), 343.0, 2e-4); near(c.soundSpeed(-0.15), 331, 1e-12); near(c.wavelength(686, 20), 0.5, 2e-4);
});
group('one speaker: 80 dB at 1 m, 6.02 dB less for each doubling of distance', () => {
  for (const r of [1, 2, 4, 8]) near(c.level(c.pressure(r, 0.5, 686, 1, 20, 0, false)), 80 - 20 * Math.log10(r), 1e-9, `r = ${r}`);
});
group('superposition: pressure is the sum of two a e^{−ikr}/r; in phase on the centre line gives +6.02 dB', () => {
  const x = 4, p1 = c.pressure(x, 0, 686, 1, 20, 0, false), p = c.pressure(x, 0, 686, 1, 20, 0, true);
  near(Math.hypot(p.re, p.im), 2 * Math.hypot(p1.re, p1.im), 1e-12);
  near(c.level(p) - c.level(p1), 20 * Math.log10(2), 1e-9);
  const q = c.pressure(x, 0, 686, 1, 20, Math.PI, true); assert(Math.hypot(q.re, q.im) < 1e-12, 'wired backwards: silent on the centre line');
});
group('quiet lines: at r₂ − r₁ = (m + ½)λ the level dips far below the loud lines, which lie at mλ', () => {
  const lam = c.wavelength(686, 20), d = 1, x = 4;
  for (const m of [0, 1]) {
    const yq = c.yForPathDiff(x, d, (m + 0.5) * lam), pq = c.pressure(x, yq, 686, d, 20, 0, true);
    near(pq.r2 - pq.r1, (m + 0.5) * lam, 1e-9, 'path difference');
    /* not zero: the farther speaker is weaker by r₁/r₂ */
    near(Math.hypot(pq.re, pq.im), c.AMP * (1 / pq.r1 - 1 / pq.r2), 1e-9, 'residual at a quiet spot');
    const yl = c.yForPathDiff(x, d, (m + 1) * lam); if (isFinite(yl)) { const pl = c.pressure(x, yl, 686, d, 20, 0, true); near(Math.hypot(pl.re, pl.im), c.AMP * (1 / pl.r1 + 1 / pl.r2), 1e-9, 'loud'); }
    assert(c.level(pq) < c.level(c.pressure(x, 0, 686, d, 20, 0, true)) - 25, 'deep dip');
  }
  assert(Number.isNaN(c.yForPathDiff(x, 0.4, 0.75 * lam * 2)), 'no line beyond r₂ − r₁ = d');
});
group('the dips found by a walk sit at the predicted path differences', () => {
  const lam = c.wavelength(500, 20), d = 1.5, x = 3; const ys = [], Ls = [];
  for (let y = -4; y <= 4; y += 0.0005) { ys.push(y); Ls.push(c.level(c.pressure(x, y, 500, d, 20, 0, true))); }
  const dips = []; for (let i = 1; i < Ls.length - 1; i++) if (Ls[i] < Ls[i - 1] && Ls[i] <= Ls[i + 1]) dips.push(ys[i]);
  const pred = [-2.5, -1.5, -0.5, 0.5, 1.5, 2.5].map((m) => c.yForPathDiff(x, d, m * lam)).filter(isFinite);
  assert.equal(dips.length, pred.length);
  dips.forEach((y, i) => assert(Math.abs(y - pred[i]) < 0.01, `dip ${y} against ${pred[i]}`));
});
group('CSV header', () => {
  const csv = c.readingsCSV([{ f: '686', d: '1.00', s2: 'in phase', t: '20', x: '4.000', y: '0.000', r1: '4.031', r2: '4.031', L: '79.9' }], { version: 'x' });
  const lines = csv.trim().split('\n'); assert.equal(lines.find((l) => l[0] !== '#'), 'row,f_Hz,d_m,speaker2,temp_C,x_m,y_m,r1_m,r2_m,level_dB');
  assert.equal(lines[lines.length - 1], '1,686,1.00,in phase,20,4.000,0.000,4.031,4.031,79.9');
});
console.log(`${n} groups passed`);
