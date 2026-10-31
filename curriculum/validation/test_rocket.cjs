'use strict';
// Rocket Propulsion: the rocket equation, gravity losses and waiting on the pad, exact solution against a numerical integration.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('rocket', 'G,flight,stagedFlight');
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
group('two stages: no casing equals one stage; each stage adds u ln(before/after); numerical integration agrees', () => {
  for (const g of [0, c.G]) {
    const A = c.flight({ md: 1000, mf: 9000, u: 2500, b: 200, g }), B = c.stagedFlight({ md: 1000, mf: 4000, mc: 0, mf1: 5000, u: 2500, b: 200, g });
    for (const t of [0, 7, 24.9, 25, 25.1, 44, 45, 80, 300]) { const a = A.at(t), b = B.at(t); near(b.v, a.v, 1e-8, `v at ${t}`); near(b.y, a.y, 1e-6, `y at ${t}`); near(b.m, a.m, 1e-9); if (t !== 45 && t !== 0) near(b.a, a.a, 1e-9, `a at ${t}`); }   /* at the instants of ignition and cutoff the two report different sides */
  }
  const p = { md: 1000, mf: 2000, mc: 1000, mf1: 7000, u: 2500, b: 200 }, S0 = c.stagedFlight({ ...p, g: 0 });
  near(S0.dv1, 2500 * Math.log(11 / 4), 1e-9); near(S0.dv2, 2500 * Math.log(3), 1e-9); near(S0.vBurnout, S0.dv1 + S0.dv2, 1e-8, 'deep space');
  near(S0.dvSingle, 2500 * Math.log(5.5), 1e-9); assert(S0.dvIdeal > S0.dvSingle);
  near(S0.at(S0.t1).m, 3000, 1e-9, 'casing gone at separation'); near(S0.at(S0.t1 - 1e-9).m, 4000, 1e-5);
  near(S0.casing(S0.t1 + 20).v, S0.vSep, 1e-12, 'the casing coasts on in deep space');
  // with gravity: step m dv/dt = u b − m g through both burns and the drop
  const S1 = c.stagedFlight({ ...p, g: c.G }); let v = 0, y = 0, m = 11000; const dt = 1e-4;
  for (let t = 0; t < S1.tb - 1e-9; t += dt) { if (Math.abs(t - S1.t1) < dt / 2) m -= p.mc; const a = p.u * p.b / m - c.G; v += a * dt; y += v * dt; m -= p.b * dt; }
  near(v, S1.vBurnout, 0.05, 'burnout speed'); near(y, S1.yBurnout, 3, 'burnout height');
  // a first stage too heavy to lift waits on the pad; the lighter upper stage lifts at once after the drop
  const H = c.stagedFlight({ md: 1000, mf: 3000, mc: 5000, mf1: 20000, u: 2500, b: 50, g: c.G });
  near(H.t0, (29000 - 125000 / c.G) / 50, 1e-9, 'lifts when m g = u b'); assert(H.lifts);
});
console.log(`${n} rocket test groups passed`);
