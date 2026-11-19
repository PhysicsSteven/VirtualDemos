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
const b = core('equilibrium', 'G,forearm,bentBack');
group('forearm (College Physics 2e 9.6): torques about the elbow, the book\'s numbers, forces balance at every angle', () => {
  const r = b.forearm(2.5, 4, 0.04, 0.16, 0.38, 0.33, 90);
  // the biceps along its line to a shoulder 0.33 m up leans 6.9°; its vertical part matches the book's vertical biceps: 470.88 N with g = 9.81
  near(r.FB * r.e[1], (2.5 * 0.16 + 4 * 0.38) * b.G / 0.04, 1e-12, 'vertical part = book value');
  near(-r.FE[1], (2.5 * 0.16 + 4 * 0.38) * b.G / 0.04 - 6.5 * b.G, 1e-12, 'elbow pushes down 407 N');
  assert.equal(Math.round(-r.FE[1]), 407); near(r.tilt, Math.atan(0.04 / 0.33) * 180 / Math.PI, 1e-12, 'tilt');
  for (const el of [30, 60, 90, 120, 150]) for (const [ma, mb, r1] of [[2.5, 4, 0.04], [1, 0, 0.02], [4, 20, 0.08]]) {
    const q = b.forearm(ma, mb, r1, 0.16, 0.38, 0.33, el);
    near(q.FB * q.e[0] + q.FE[0], 0, 1e-12, 'ΣFx'); near(q.FB * q.e[1] + q.FE[1] - (ma + mb) * b.G, 0, 1e-12, 'ΣFy');
    const u = q.u, about = (px, py) => (q.I[0] - px) * q.FB * q.e[1] - (q.I[1] - py) * q.FB * q.e[0] - (0.16 * u[0] - px) * ma * b.G - (0.38 * u[0] - px) * mb * b.G + (0 - px) * q.FE[1] - (0 - py) * q.FE[0];
    for (const [px, py] of [[0, 0], [0.2, 0.1], [-0.3, 0.33]]) near(about(px, py), 0, 1e-9, `Στ about (${px}, ${py}) at ${el}°`);
    // F_B = torque of the weights over the biceps lever arm, the perpendicular distance from the elbow to its line
    const O = [0, 0.33], dist = Math.abs(q.I[0] * O[1] - q.I[1] * O[0]) / Math.hypot(O[0] - q.I[0], O[1] - q.I[1]);
    near(q.arm, dist, 1e-12, 'lever arm'); near(q.FB, (ma * 0.16 + mb * 0.38) * b.G * u[0] / dist, 1e-12);
  }
  assert(b.forearm(2.5, 4, 0.04, 0.16, 0.38, 0.33, 150).FB > b.forearm(2.5, 4, 0.04, 0.16, 0.38, 0.33, 30).FB, 'opening the elbow takes more pull');
});
group('bent back (College Physics 2e 9.6): F_B = 4.20 kN, F_V = 4.66 kN at 38.0°, about 5 times the weight', () => {
  const s61 = Math.sin(61 * Math.PI / 180), r = b.bentBack(55, 30, 0.35 / s61, 0.5 / s61, 0.08, 61);
  near(r.FB, (0.35 * 55 + 0.5 * 30) * b.G / 0.08, 1e-12); assert.equal(Math.round(r.FB / 10) * 10, 4200);
  assert.equal(Math.round(r.FVmag / 10) * 10, 4660); assert.equal(r.FVang.toFixed(1), '38.0'); assert.equal(r.ratio.toFixed(2), '5.04');
  near(r.FV[0], r.FB * Math.cos(29 * Math.PI / 180), 1e-12, 'book: F_Vx = F_B cos 29.0°'); near(r.FV[1], 85 * b.G + r.FB * Math.sin(29 * Math.PI / 180), 1e-12, 'F_Vy');
  near(b.bentBack(55, 30, 0.4, 0.57, 0.08, 0).FB, 0, 1e-12, 'upright: no muscle force');
});
console.log(`${n} equilibrium test groups passed`);
