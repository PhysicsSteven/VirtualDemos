'use strict';
// Pendulum: small-angle period, exact large-angle period, the rod, the integrator, the g fit.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('pendulum', 'PD_VERSION,ellipK,effLen,smallT,exactT,rk4,fitLine,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('K(0) = π/2; exact period → 2π√(L/g) for small swings; 90° is 18.0% longer', () => {
  near(c.ellipK(0), Math.PI / 2, 1e-15); near(c.smallT(1, 9.81, false), 2.006066, 1e-6);
  near(c.exactT(1, 9.81, false, 1e-4), c.smallT(1, 9.81, false), 1e-8);
  near(c.exactT(1, 9.81, false, Math.PI / 2) / c.smallT(1, 9.81, false), 1.18034, 1e-5);
  const th = 0.3; near(c.exactT(1, 9.81, false, th) / c.smallT(1, 9.81, false), 1 + th * th / 16 + 11 * th ** 4 / 3072, 1e-6, 'series');
});
group('uniform rod about its end: like a simple pendulum 2L/3 long', () => { near(c.smallT(1, 9.81, true), 2 * Math.PI * Math.sqrt(2 / (3 * 9.81)), 1e-12); });
group('RK4 with 1 ms steps reproduces the exact period to well under a millisecond, even at 150°', () => {
  for (const deg of [8, 90, 150]) {
    const th0 = deg * Math.PI / 180, w0sq = 9.81; let s = { th: th0, w: 0 }, t = 0, cross = [];
    while (cross.length < 3) { const pr = s; s = c.rk4(s, w0sq, 0, 1e-3); t += 1e-3; if (pr.th * s.th < 0) cross.push(t - 1e-3 * Math.abs(s.th) / (Math.abs(pr.th) + Math.abs(s.th))); }
    assert(Math.abs((cross[2] - cross[0]) - c.exactT(1, 9.81, false, th0)) < 2e-4, `${deg}°`);
  }
});
group('fit of T² against L gives g', () => {
  const xs = [0.4, 0.8, 1.2, 1.6], ys = xs.map((L) => Math.round(c.smallT(L, 3.71, false) * 1000) ** 2 / 1e6);
  near(4 * Math.PI ** 2 / c.fitLine(xs, ys).b, 3.71, 2e-3);
  const L = c.readingsCSV([{ type: 'bob', L: '1.00', A: '8', m: '0.20', T: '2.009' }], { version: c.PD_VERSION, g: '9.81 m/s2' }).trim().split('\n');
  const h = L.indexOf('row,type,L_m,theta0_deg,m_kg,T_s,T2_s2'); assert.equal(L[h + 1], '1,bob,1.00,8,0.20,2.009,4.03608');
});
console.log(`${n} pendulum test groups passed`);
