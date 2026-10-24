'use strict';
// Gyroscope: the exact heavy symmetric top against conservation laws, steady precession and the fast top formula.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('gyroscope', 'G,MW,RW,KS,GY_VERSION,tops,phidot,deriv,rk4,energy,steadyRate,fastTop,start,fitLine,readingsCSV,deriv,retune,ueff,steadyTilt');
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
group('live change: spin by a motor keeps θ, θ\', φ\'; sliding the wheel keeps the angular momentum about the pivot', () => {
  const L = (c, s) => { const sn = Math.sin(s.th), cs = Math.cos(s.th), pd = c3.phidot(c, s.th), e = [sn, 0, cs], et = [cs, 0, -sn], ep = [0, 1, 0];
    /* φ = 0 frame: transverse ω = θ' e_θ + φ' sinθ e_φ; axial L = I_s w3 */
    return [0, 1, 2].map((i) => c.I1 * (s.thd * et[i] + pd * sn * ep[i]) + c.Is * c.w3 * e[i]); };
  const c3 = c, sim = c.start(0.5, 0.1, 1500, 0, false); let s = sim.s; for (let i = 0; i < 1234; i++) s = c.rk4(sim.c, s, 2e-4);
  const a = { c: sim.c, s }, b = c.retune(a, 0.5, 0.1, 3000);
  near(b.s.thd, s.thd, 1e-12); near(c.phidot(b.c, b.s.th), c.phidot(a.c, s.th), 1e-12); near(b.c.w3, 100 * Math.PI, 1e-12);
  const d = c.retune(a, 0.5, 0.15, 1500), L0 = L(a.c, s), L1 = L(d.c, d.s);
  for (let i = 0; i < 3; i++) assert(Math.abs(L1[i] - L0[i]) < 1e-12 * Math.hypot(...L0), 'L about the pivot');
});
group('steady tilt: level for the steady start, and the axle wobbles about the new one after the spin is changed', () => {
  const sim = c.start(0.5, 0.1, 1500, 0, true); near(c.steadyTilt(sim.c), Math.PI / 2, 1e-9);
  const b = c.retune(sim, 0.5, 0.1, 3000), eq = c.steadyTilt(b.c); assert(eq < Math.PI / 2, 'more spin: steady tilt above level');
  /* after doubling the spin the precession rate is twice the steady one, so it rises; the steady tilt satisfies θ'' = 0 */
  assert(Math.abs(c.deriv(b.c, { th: eq, thd: 0, ph: 0 }).thd) < 1e-6);
  let s = b.s, lo = 9, hi = -9; for (let i = 0; i < 20000; i++) { s = c.rk4(b.c, s, 2e-4); lo = Math.min(lo, s.th); hi = Math.max(hi, s.th); }
  assert(lo < eq && eq < hi, 'wobbles about it'); near(lo, eq - (Math.PI / 2 - eq), 0.05, 'nearly symmetric about it');
  console.log('   1500 → 3000 rpm: steady tilt', ((Math.PI / 2 - eq) * 180 / Math.PI).toFixed(2), '° above level; wobble', ((Math.PI / 2 - hi) * 180 / Math.PI).toFixed(2), 'to', ((Math.PI / 2 - lo) * 180 / Math.PI).toFixed(2), '°');
});
console.log(`${n} gyroscope test groups passed`);
