'use strict';
// Static Equilibrium: ΣF = 0 and Στ = 0 for a seesaw, a plank on two supports, a sign on a strut and cable, and a ladder.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('equilibrium', 'G,seesaw,plank,sign,ladder');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('seesaw: balanced when m1 x1 + m2 x2 = 0; pivot carries the whole weight', () => {
  const r = c.seesaw(20, [{ m: 40, x: -1.5 }, { m: 30, x: 2 }]); assert(r.balanced); near(r.P, 90 * c.G, 1e-12);
  assert(c.seesaw(20, [{ m: 40, x: -1.5 }, { m: 30, x: 1.6 }]).tau > 0, 'left side heavier: counterclockwise');
});
group('plank: F1 + F2 = W, torques about any point vanish; tips when a support would pull', () => {
  const L = 4, mb = 20, a = 0.5, b = 2.5, loads = [{ m: 60, x: 1.5 }], r = c.plank(L, mb, a, b, loads);
  near(r.F1 + r.F2, 80 * c.G, 1e-12);
  for (const q of [0, 1.3, 4]) { const tau = r.F1 * (a - q) + r.F2 * (b - q) - mb * c.G * (L / 2 - q) - 60 * c.G * (1.5 - q); near(tau, 0, 1e-9, `torque about ${q}`); }
  assert.equal(c.plank(L, mb, a, b, [{ m: 60, x: 3.6 }]).tips, 'right'); assert.equal(c.plank(L, mb, 1.5, 3.5, [{ m: 60, x: 0 }]).tips, 'left');
});
group('sign: T sin θ L balances the weights; hinge supplies the rest', () => {
  const r = c.sign(2, 5, 25, 1.8, 1); near(r.T * Math.sin(r.th) * 2, c.G * (5 + 25 * 1.8), 1e-12);
  near(r.Hx - r.T * Math.cos(r.th), 0, 1e-12); near(r.Hy + r.T * Math.sin(r.th), 30 * c.G, 1e-12);
  assert(c.sign(2, 5, 25, 1.8, 0.3).T > r.T, 'shallower cable, more tension');
});
group('ladder: wall push equals the friction needed; slips below the critical angle', () => {
  const r = c.ladder(5, 15, 70, 0.5, 60, 0.4); near(r.N, 85 * c.G, 1e-12); near(r.fs, r.Nw, 0);
  const th = 60 * Math.PI / 180; near(r.Nw * 5 * Math.sin(th), c.G * Math.cos(th) * (15 * 2.5 + 70 * 2.5), 1e-12, 'torques about the foot');
  const k = c.ladder(5, 15, 70, 0.5, r.thMin, 0.4); near(k.fs, k.fmax, 1e-9, 'at the critical angle friction is at its limit');
  assert(c.ladder(5, 15, 70, 0.5, r.thMin - 1, 0.4).slips && !c.ladder(5, 15, 70, 0.5, r.thMin + 1, 0.4).slips);
});
console.log(`${n} equilibrium test groups passed`);
