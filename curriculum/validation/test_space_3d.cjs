'use strict';
// Vectors and Surfaces in Space (2026-11-19): dot and cross products, the angle between vectors, a line meeting a plane, the
// reflected ray, rectangular, cylindrical and spherical coordinates (physics convention, theta from +z), the quadric surfaces and
// their traces, the Mach cone and the dish focus, each against closed forms and the numbers the setups quote.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo } = require('./demo_source.cjs');
const core = readDemo('space-3d').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
const ctx = {};
vm.runInNewContext(core + '\nglobalThis.c = { spDot, spCross, spLen, spAdd, spScale, spAngle, spMeet, spDist, spLinePlaneAngle, spReflect, spPhi, spToCyl, spToSph, spFromCyl, spFromSph, spQuadric, spTraceEq, spConic, spMach };', ctx, { timeout: 5000 });
const c = ctx.c, PI = Math.PI, DEG = PI / 180;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const nearV = (a, b, tol, w) => a.forEach((x, i) => near(x, b[i], tol, `${w} [${i}]`));

group('dot and cross products, the angle, the parallelogram', () => {
  const a = [2, 1, 0.5], b = [0.5, 2, 1.5];
  near(c.spDot(a, b), 3.75, 1e-15, 'a . b');
  nearV(c.spCross(a, b), [0.5, -2.75, 3.5], 1e-15, 'a x b');
  const x = c.spCross(a, b); near(c.spDot(x, a), 0, 1e-15, 'perp a'); near(c.spDot(x, b), 0, 1e-15, 'perp b');
  const th = c.spAngle(a, b); near(Math.cos(th), 3.75 / (c.spLen(a) * c.spLen(b)), 1e-14, 'cos');
  near(c.spLen(x), c.spLen(a) * c.spLen(b) * Math.sin(th), 1e-14, 'area');
  near(th / DEG, 50.06, 5e-4, 'angle shown');
  nearV(c.spCross([1, 0, 0], [0, 1, 0]), [0, 0, 1], 0, 'right hand rule');
  nearV(c.spCross(b, a), c.spScale(x, -1), 1e-15, 'anticommutes');
  near(c.spAngle([1, 0, 0], [1, 1e-9, 0]), 1e-9, 1e-12, 'small angle by atan2');
});

group('physics: torque, the magnetic force, work', () => {
  nearV(c.spCross([0.3, 0, 0], [0, 20, 10]), [0, -3, 6], 1e-15, 'torque');
  near(c.spLen([0, -3, 6]), Math.sqrt(45), 1e-15, '|tau|');
  const e = 1.602176634e-19, F = c.spScale(c.spCross([2, 0, 1], [0, 0, 0.5]), e * 1e5);
  nearV(F, [0, -1.602176634e-14, 0], 1e-15, 'qv x B');
  near(c.spDot(F, [2e5, 0, 1e5]), 0, 1e-15, 'no work by B');
  near(c.spDot([30, 0, 10], [4, 2, 0]), 120, 1e-15, 'W = F . d');
});

group('a line meets a plane, and the reflected ray', () => {
  const m = c.spMeet([1, -2, 1], [1, 2, 1], [1, 1, 1], [1, 1, 1]);
  near(m.t, 0.75, 1e-15, 't'); nearV(m.P, [1.75, -0.5, 1.75], 1e-15, 'P');
  near(c.spDist(m.P, [1, 1, 1], [1, 1, 1]), 0, 1e-15, 'on plane');
  near(c.spLinePlaneAngle([1, 2, 1], [1, 1, 1]), Math.asin(4 / Math.sqrt(18)), 1e-14, 'angle');
  assert(c.spMeet([0, 0, 1], [1, 0, 0], [0, 0, 0], [0, 0, 1]).parallel, 'parallel');
  assert(c.spMeet([0, 0, 0], [1, 1, 0], [0, 0, 0], [0, 0, 1]).inPlane, 'in plane');
  const R = c.spReflect([1, 0.3, -1], [0, 0, 1]); nearV(R, [1, 0.3, 1], 1e-15, 'mirror');
  near(c.spLinePlaneAngle(R, [0, 0, 1]), c.spLinePlaneAngle([1, 0.3, -1], [0, 0, 1]), 1e-15, 'equal angles');
  near(c.spLen(c.spReflect([2, -1, 3], [1, 2, 2])), c.spLen([2, -1, 3]), 1e-15, 'length kept');
});

group('rectangular, cylindrical and spherical coordinates (physics convention)', () => {
  const P = c.spFromSph(2, 50 * DEG, 35 * DEG);
  near(P[2], 2 * Math.cos(50 * DEG), 1e-15, 'z = r cos theta');
  nearV(c.spToSph(P), [2, 50 * DEG, 35 * DEG], 1e-14, 'round trip sph');
  nearV(c.spToCyl(c.spFromCyl(1.41, 20 * DEG, 0.513)), [1.41, 20 * DEG, 0.513], 1e-14, 'round trip cyl');
  nearV(c.spToSph([1, 1, 1]), [Math.sqrt(3), Math.acos(1 / Math.sqrt(3)), PI / 4], 1e-14, '(1, 1, 1)');
  near(c.spPhi(0, -1), 1.5 * PI, 1e-15, 'phi in [0, 2pi)');
  nearV(c.spToSph([0, 0, -2]), [2, PI, 0], 1e-15, 'south pole');
  const ke = 8.9875517862e9; assert.strictEqual((ke * 1e-9 / 1.5).toPrecision(4), '5.992', 'V = kq/r at 1.5 m');
  assert.strictEqual((ke * 1e-9 / 2.25).toPrecision(4), '3.994', 'E = kq/r^2');
});

group('quadric traces and their names', () => {
  const kind = (t, a, b, cc, ax, k) => c.spConic(c.spTraceEq(c.spQuadric(t, a, b, cc), ax, k), 3).kind;
  assert.strictEqual(kind('ell', 2, 1.5, 1, 'z', 0), 'ellipse');
  assert.strictEqual(kind('ell', 1.5, 1.5, 1, 'z', 0.5), 'circle');
  assert.strictEqual(kind('ell', 2, 1.5, 1, 'z', 1), 'point');
  assert.strictEqual(kind('ell', 2, 1.5, 1, 'z', 1.2), 'none');
  assert.strictEqual(kind('hyp1', 1.2, 1.2, 1.6, 'z', 0), 'circle');
  assert.strictEqual(kind('hyp1', 1.2, 1.2, 1.6, 'x', 0), 'hyperbola');
  assert.strictEqual(kind('hyp1', 1.2, 1.2, 1.6, 'x', 1.2), 'two crossing lines');
  assert.strictEqual(kind('hyp2', 1, 1, 1, 'z', 0.5), 'none');
  assert.strictEqual(kind('hyp2', 1, 1, 1, 'z', 2), 'circle');
  assert.strictEqual(kind('cone', 1, 1, 1, 'z', 0), 'point');
  assert.strictEqual(kind('cone', 1, 1, 1, 'x', 0), 'two crossing lines');
  assert.strictEqual(kind('par', 2.4, 2.4, 1.2, 'x', 0), 'parabola');
  assert.strictEqual(kind('hpar', 1, 1, 1, 'z', 0), 'two crossing lines');
  assert.strictEqual(kind('hpar', 1, 1, 1, 'z', 1), 'hyperbola');
  const e = c.spConic(c.spTraceEq(c.spQuadric('ell', 2, 1.5, 1), 'z', 0.6), 3);
  near(e.A, 2 * 0.8, 1e-14, 'semi axis A'); near(e.B, 1.5 * 0.8, 1e-14, 'semi axis B');
  for (const p of e.curves[0]) near(p[0] ** 2 / 4 + p[1] ** 2 / 2.25 + 0.36, 1, 1e-13, 'on ellipsoid');
  const h = c.spConic(c.spTraceEq(c.spQuadric('hyp1', 1.2, 1.2, 1.6), 'x', 0), 3);
  for (const cv of h.curves) for (const p of cv) near(p[0] ** 2 / 1.44 - p[1] ** 2 / 2.56, 1, 1e-12, 'on hyperbola');
});

group('the Mach cone and the dish focus', () => {
  near(c.spMach(2) / DEG, 30, 1e-14, 'Mach 2 half angle');
  near(c.spMach(1), PI / 2, 1e-15, 'Mach 1');
  const a = 2.4, cc = 1.2, f = a * a / (4 * cc); near(f, 1.2, 1e-15, 'focus');
  /* a ray parallel to the axis reflects through the focus: z = x²/(4f) */
  for (const x of [-1.6, -0.8, 0.8, 1.6]) {
    const z = cc * x * x / (a * a), nrm = [-2 * cc * x / (a * a), 0, 1], R = c.spReflect([0, 0, -1], nrm), t = -x / R[0];
    near(z + t * R[2], f, 1e-13, 'through focus');
  }
});

console.log(`${n} groups passed`);
