'use strict';
// Static Equilibrium Sandbox: a beam on 0, 1 or 2 supports that only push up, with any loads.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('equilibrium', 'G,seesaw,plank,beamSandbox');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('one support: balanced exactly when the center of mass is over it, and it carries the whole weight', () => {
  const r = c.beamSandbox(4, 10, [2], [{ m: 20, x: 1 }, { m: 10, x: 4 }]); assert.equal(r.tips, null); near(r.xc, 2, 1e-12); near(r.F[0], 40 * c.G, 1e-12);
  const h = c.beamSandbox(4, 20, [1.5], [{ m: 10, x: 0.5 }]); assert.equal(h.tips, null, 'the beam\'s own weight balances the load');
  const u = c.beamSandbox(4, 10, [2], [{ m: 20, x: 1 }, { m: 10, x: 3.5 }]); assert.equal(u.tips, 'left'); near(u.tau, 5 * c.G, 1e-12, 'net torque about the pivot');
  assert.equal(c.beamSandbox(4, 10, [2], [{ m: 20, x: 3 }]).tips, 'right');
});
group('one support agrees with seesaw() about a central pivot', () => {
  const loads = [{ m: 40, x: -1.5 }, { m: 30, x: 1.6 }], r = c.seesaw(20, loads), b = c.beamSandbox(5, 20, [2.5], loads.map((l) => ({ m: l.m, x: l.x + 2.5 })));
  near(b.tau, r.tau, 1e-12); assert.equal(b.tips, r.tau > 0 ? 'left' : 'right');
});
group('two supports agree with plank(): F1 + F2 = W, torques vanish about any point, tips when a support would pull', () => {
  for (const [L, mb, a, b, loads] of [[4, 10, 1, 3, [{ m: 50, x: 3.5 }, { m: 20, x: 1.5 }]], [4, 20, 0.5, 2.5, [{ m: 60, x: 3.6 }]], [5, 0, 1.5, 3.5, [{ m: 60, x: 0 }]]]) {
    const r = c.beamSandbox(L, mb, [b, a], loads), q = c.plank(L, mb, a, b, loads);
    near(r.F[0], q.F1, 1e-12, 'F1'); near(r.F[1], q.F2, 1e-12, 'F2'); assert.equal(r.tips, q.tips); near(r.F[0] + r.F[1], r.W, 1e-12);
    for (const x0 of [0, 1.3, L]) { const tau = r.F[0] * (a - x0) + r.F[1] * (b - x0) - c.G * [{ m: mb, x: L / 2 }, ...loads].reduce((s, l) => s + l.m * (l.x - x0), 0); near(tau, 0, 1e-9, `torque about ${x0}`); }
  }
});
group('two supports hold exactly when the center of mass lies between them', () => {
  const at = (x) => c.beamSandbox(4, 10, [1, 3], [{ m: 50, x }, { m: 20, x: 1.5 }]);
  assert.equal(at(3.5).tips, null); assert(at(3.5).xc > 1 && at(3.5).xc < 3);
  assert.equal(at(4).tips, 'right'); assert(at(4).xc > 3);
  const edge = c.beamSandbox(4, 0, [1, 3], [{ m: 10, x: 3 }]); assert.equal(edge.tips, null); near(edge.F[0], 0, 1e-12, 'all the weight on the right support');
  const t = at(4); near(t.tau, -t.W * (t.xc - 3), 1e-12, 'net torque about the right support');
});
group('no support: it falls; supports at the same place act as one', () => {
  assert(c.beamSandbox(4, 10, [], [{ m: 5, x: 1 }]).falls);
  const r = c.beamSandbox(4, 10, [2, 2], [{ m: 20, x: 1 }, { m: 10, x: 4 }]); assert.equal(r.tips, null); assert.equal(r.F.length, 1);
});
console.log(`${n} equilibrium sandbox test groups passed`);
