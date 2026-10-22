'use strict';
// Rocket Propulsion: the rocket equation, gravity losses and waiting on the pad, exact solution against a numerical integration.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('rocket', 'G,flight');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('deep space: Δv = u ln(m0/m_dry), independent of the burn rate', () => {
  for (const b of [50, 200, 500]) { const F = c.flight({ md: 1000, mf: 9000, u: 2500, b, g: 0 }); near(F.vBurnout, 2500 * Math.log(10), 1e-9); near(F.dvIdeal, F.vBurnout, 1e-9); }
});
group('gravity takes g × (time off the pad) from the speed', () => {
  const F = c.flight({ md: 1000, mf: 9000, u: 2500, b: 200, g: c.G }); near(F.dvIdeal - F.vBurnout, c.G * 45, 1e-9);
  const S = c.flight({ md: 1000, mf: 9000, u: 2500, b: 60, g: c.G }); assert(S.vBurnout < F.vBurnout && S.yTop < F.yTop, 'slow burn ends slower and lower');
});
group('too heavy: waits on the pad until thrust = weight, then flies from the lighter mass', () => {
  const p = { md: 1000, mf: 18000, u: 2500, b: 70, g: c.G }, F = c.flight(p), m1 = 2500 * 70 / c.G;
  near(F.t0, (19000 - m1) / 70, 1e-9); assert.equal(F.at(F.t0 * 0.5).v, 0);
  near(F.vBurnout, 2500 * Math.log(m1 / 1000) - c.G * (F.tb - F.t0), 1e-7);
  assert(!c.flight({ md: 1000, mf: 9000, u: 500, b: 10, g: c.G }).lifts, "thrust below even the dry weight");
});
group('exact v and y match a direct integration of m dv/dt = u b − m g', () => {
  const p = { md: 800, mf: 6000, u: 3000, b: 150, g: c.G }, F = c.flight(p);
  let t = 0, v = 0, y = 0, m = 6800; const dt = 1e-4;
  while (t < F.tb - 1e-9) { const a = (k) => p.u * p.b / (m - p.b * k) - c.G; const a1 = a(0), a2 = a(dt / 2), a3 = a(dt);
    y += v * dt + dt * dt * (a1 + 2 * a2) / 6; v += dt * (a1 + 4 * a2 + a3) / 6; m -= p.b * dt; t += dt; }
  near(v, F.vBurnout, 1e-3); near(y, F.yBurnout, 1e-2);
  near(F.at(F.tb + 10).v, F.vBurnout - 10 * c.G, 1e-9); near(F.yTop, F.yBurnout + F.vBurnout ** 2 / (2 * c.G), 1e-6);
});
console.log(`${n} rocket test groups passed`);
