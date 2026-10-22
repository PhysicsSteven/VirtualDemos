'use strict';
// Gyroscope: the exact heavy symmetric top against conservation laws, steady precession and the fast top formula.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('gyroscope', 'G,MW,RW,KS,GY_VERSION,tops,phidot,deriv,rk4,energy,steadyRate,fastTop,start,fitLine,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
function run(sim, T, h = 2e-4) { let s = sim.s; const out = []; for (let t = 0; t < T; t += h) { s = c.rk4(sim.c, s, h); out.push([t + h, s]); } return out; }
group('moments: disk I_s = ½MR², I_1 = I_s/2 + Md²', () => {
  const t = c.tops(0.5, 0.1); near(t.Is, 9e-4, 1e-12); near(t.I1, 4.5e-4 + 5e-3, 1e-12); near(t.Mgd, 0.4905, 1e-12);
});
group('horizontal steady precession: Ω = Mgd/(I_s ω_s) exactly, and the axle stays level', () => {
  const sim = c.start(0.5, 0.1, 1500, 0, true); near(c.phidot(sim.c, sim.s.th), c.fastTop(sim.c), 1e-12);
  const tr = run(sim, 3); for (const [, s] of tr) assert(Math.abs(s.th - Math.PI / 2) < 1e-9, 'level');
  near(tr[tr.length - 1][1].ph, c.fastTop(sim.c) * tr[tr.length - 1][0], 1e-8, 'φ');
});
group('tilted steady precession root is steady; energy is conserved to 1e-9 in a slow, wobbly run', () => {
  const sim = c.start(0.905, 0.12, 3000, 20 * Math.PI / 180, true), th0 = sim.s.th, tr = run(sim, 2);
  for (const [, s] of tr) assert(Math.abs(s.th - th0) < 1e-8);
  const w = c.start(0.5, 0.1, 800, 0, false), E0 = c.energy(w.c, w.s); const tw = run(w, 5);
  for (const [, s] of tw) assert(Math.abs(c.energy(w.c, s) - E0) < 1e-9 * Math.abs(w.c.Mgd));
});
group('released from rest, fast spin: average precession = fast top value (0.998 of it), dip ≈ 2 I1 Mgd/(I_s ω_s)²', () => {
  const sim = c.start(0.5, 0.1, 3000, 0, false), tr = run(sim, 4), F = c.fitLine(tr.map((q) => q[0]), tr.map((q) => q[1].ph));
  console.log('   mean rate / fast top =', (F.b / c.fastTop(sim.c)).toFixed(5));
  near(F.b, c.fastTop(sim.c), 5e-3, 'mean rate');
  const dip = Math.max(...tr.map(([, s]) => s.th - Math.PI / 2)); near(dip, 2 * sim.c.I1 * sim.c.Mgd / (sim.c.Is * sim.c.w3) ** 2, 0.03, 'dip');
});
group('no spin: it falls like a pendulum from the top', () => {
  const sim = c.start(0.5, 0.1, 0, 0, false), tr = run(sim, 1.5); assert(tr.some(([, s]) => s.th > 2.6));
});
group('fit of Ω against 1/ω_s returns Mgd/I_s; CSV', () => {
  const k = 0.62, xs = [], ys = [];
  for (const rpm of [2000, 3000, 4000, 5000, 6000]) { const sim = c.start(k, 0.1, rpm, 0, false); const P = Math.round(2 * Math.PI / c.fastTop(sim.c) * 100) / 100; xs.push(1 / sim.c.w3); ys.push(2 * Math.PI / P); }
  near(0.5 * 9.81 * 0.1 / c.fitLine(xs, ys).b, k * 0.5 * 0.0036, 3e-3, 'I_s');
  const L = c.readingsCSV([{ wheel: 'disk', start: 'rest', tilt: '0', rpm: '3000', d: '0.10', P: '3.62' }], { version: c.GY_VERSION }).trim().split('\n');
  const h = L.indexOf('row,wheel,start,tilt_deg,spin_rpm,d_m,P_s,Omega_rad_per_s,inv_spin_s'); assert(h > 0); assert.equal(L[h + 1], '1,disk,rest,0,3000,0.10,3.62,1.73569,0.0031831');
});
console.log(`${n} gyroscope test groups passed`);
