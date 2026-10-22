'use strict';
// Speeding Up on a Curve: tangential and centripetal parts, slip time.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('nonuniform-circular', 'G,stateAt,slipTime');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('from rest: v = a_t t, a_c = v²/r, |a| = √(a_t² + a_c²), arc length ½a_t t²', () => {
  const q = c.stateAt(0, 2, 60, 5); near(q.v, 10, 1e-12); near(q.ac, 100 / 60, 1e-12); near(q.a, Math.hypot(2, 100 / 60), 1e-12); near(q.s, 25, 1e-12); near(q.th, 25 / 60, 1e-12);
  near(c.stateAt(0, 2, 60, 0).ang, Math.PI / 2, 1e-12);
});
group('slip happens when the total acceleration reaches μs g', () => {
  for (const [v0, at, r, mu] of [[0, 2, 60, 0.7], [20, -3, 60, 0.7], [0, 5, 100, 0.5], [25, -4, 80, 0.9]]) {
    const ts = c.slipTime(v0, at, r, mu); if (ts == null || ts === 0) continue;   // 0: |a_t| alone is already more than μs g const q = c.stateAt(v0, at, r, ts); near(q.a, mu * 9.81, 1e-9, `${v0},${at}`);
  }
  assert.equal(c.slipTime(0, 7, 60, 0.7), 0); assert.equal(c.slipTime(0, 5, 100, 0.5), 0); assert.equal(c.slipTime(10, -2, 60, 0.7), null);
});
group('braking stops the car at v₀/|a_t| and then a = 0', () => { const q = c.stateAt(20, -4, 60, 6); near(q.v, 0, 1e-12); near(q.a, 0, 1e-12); near(q.s, 50, 1e-12); });
console.log(`${n} nonuniform circular motion test groups passed`);
