'use strict';
// Vectors and Relative Motion: vector algebra identities and the river crossing.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('vectors', 'add,sub,scale,dot,crossZ,mag,angleDeg,fromPolar,between,projection,river,straightAcross');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('components and polar form round trip; angle 0 to 360 counterclockwise from +x', () => {
  near(c.mag([3, 4]), 5, 1e-15); near(c.angleDeg([3, 4]), 53.13010235415598, 1e-12);
  for (const [r, d] of [[5, 0], [2, 90], [3, 135], [4, 200], [1, 315]]) { const v = c.fromPolar(r, d); near(c.mag(v), r, 1e-12); near(c.angleDeg(v), d, 1e-9); }
  near(c.angleDeg([-1, -1]), 225, 1e-12); near(c.angleDeg([0, -2]), 270, 1e-12);
});
group('sum and difference by components; triangle inequality; A − B = A + (−B)', () => {
  const A = [5, 1], B = [-2, 4];
  assert.deepEqual(c.add(A, B), [3, 5]); assert.deepEqual(c.sub(A, B), c.add(A, c.scale(-1, B)));
  assert(c.mag(c.add(A, B)) <= c.mag(A) + c.mag(B)); near(c.mag(c.add([2, 0], [3, 0])), 5, 0, 'parallel: magnitudes add');
});
group('dot and cross: component forms equal |A||B| cos φ and sin φ; anticommuting cross; projection', () => {
  const A = [5, 1], B = [2, 4], ph = c.between(A, B) * Math.PI / 180;
  near(c.dot(A, B), 14, 0); near(c.mag(A) * c.mag(B) * Math.cos(ph), 14, 1e-12);
  near(c.crossZ(A, B), 18, 0); near(c.mag(A) * c.mag(B) * Math.sin(ph), 18, 1e-12); near(c.crossZ(B, A), -18, 0);
  near(c.dot([1, 0], [0, 7]), 0, 0); near(c.projection(A, B), 14 / Math.sqrt(20), 1e-12);
});
group('river: v_boat,shore = v_boat,water + v_water,shore; crossing time, drift, straight across', () => {
  const r = c.river(1.5, 2.5, 0, 60); near(r.t, 24, 1e-12); near(r.drift, 36, 1e-12); near(r.speed, Math.hypot(1.5, 2.5), 1e-12);
  const a = c.straightAcross(1.5, 2.5); near(a, Math.asin(0.6) * 180 / Math.PI, 1e-12);
  const q = c.river(1.5, 2.5, a, 60); near(q.drift, 0, 1e-9); near(q.t, 60 / 2, 1e-9, 'v_y = √(2.5² − 1.5²) = 2');
  assert(Number.isNaN(c.straightAcross(3, 2))); assert.equal(c.river(1, 2, 90, 60).t, Infinity);
});
console.log(`${n} vectors test groups passed`);
