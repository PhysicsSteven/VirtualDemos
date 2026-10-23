'use strict';
// Elevator: trip profile, apparent weight N = m(g + a), the snapped cable.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('elevator', 'G,FLOOR,trip,stateAt,duration,scaleN,snapSegs');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('a trip ends at rest exactly at the target floor; cruises at top speed', () => {
  for (const [y0, y1, a, v] of [[0, 30, 1.5, 3], [30, 0, 1, 6], [6, 9, 2, 6], [0, 3, 0.2, 0.5]]) {
    const s = c.trip(y0, y1, a, v), e = c.stateAt(s, y0, 0, c.duration(s) + 1); near(e.y, y1, 1e-12); near(e.v, 0, 1e-12); assert(e.done);
    const mid = c.stateAt(s, y0, 0, c.duration(s) / 2); assert(Math.abs(mid.v) <= v + 1e-12);
  }
  const s = c.trip(0, 30, 1.5, 3); near(c.stateAt(s, 0, 0, 5).v, 3, 1e-12); near(c.duration(s), 2 + 30 / 3 - 2 + 2, 1e-12);
});
group('jerk limited trips: end exactly at the floor, acceleration continuous, never above a, jerk never above J', () => {
  for (const [y0, y1, a, v, J] of [[0, 30, 1.5, 3, 2], [30, 0, 1, 6, 1], [6, 9, 2, 6, 0.5], [0, 3, 0.2, 0.5, 10], [0, 3, 3, 6, 2], [9, 6, 1.5, 3, 2], [0, 30, 3, 6, 0.5]]) {
    const s = c.trip(y0, y1, a, v, J), T = c.duration(s), e = c.stateAt(s, y0, 0, T + 1);
    near(e.y, y1, 1e-12, 'lands'); near(e.v, 0, 1e-12, 'stops'); assert(e.done);
    let prev = c.stateAt(s, y0, 0, 0);
    near(prev.a, 0, 1e-15, 'starts with zero acceleration');
    for (let i = 1; i <= 4000; i++) {
      const st = c.stateAt(s, y0, 0, T * i / 4000);
      assert(Math.abs(st.a) <= a + 1e-12, `|a| <= a: ${st.a}`); assert(Math.abs(st.v) <= v + 1e-12, `|v| <= vmax`);
      assert(Math.abs(st.a - prev.a) <= J * T / 4000 + 1e-9, `jerk bounded at ${i}`); assert(Math.sign(y1 - y0) * st.v >= -1e-12, 'never reverses');
      prev = st;
    }
    near(c.stateAt(s, y0, 0, T - 1e-9).a, 0, 1e-6, 'acceleration back to zero at arrival');
  }
  // a long trip: jerk 2 m/s³, a 1.5 m/s², 3 m/s over 30 m: ramp 0.75 s, hold 1.25 s, cruise 30/3 − (3/1.5 + 0.75) = 7.25 s
  const s = c.trip(0, 30, 1.5, 3, 2); near(c.duration(s), 2 * (0.75 + 1.25 + 0.75) + 7.25, 1e-12);
  near(c.stateAt(s, 0, 0, 0.375).a, 0.75, 1e-12); near(c.stateAt(s, 0, 0, 5).v, 3, 1e-12);
  // a short trip that never reaches a: acceleration is a triangle, vp = (D² J / 4)^(1/3)
  const t = c.trip(0, 0.5, 3, 6, 1), vp = Math.cbrt(0.25 / 4); near(c.duration(t), 4 * Math.sqrt(vp / 1), 1e-12);
  // instant (J = Infinity) is the textbook trip
  near(c.duration(c.trip(0, 30, 1.5, 3, Infinity)), c.duration(c.trip(0, 30, 1.5, 3)), 1e-15);
});
group('scale reads m(g + a): more speeding up going up, mg at constant speed, zero in free fall', () => {
  near(c.scaleN(60, 1.5), 60 * (9.81 + 1.5), 1e-12); near(c.scaleN(60, 0), 60 * 9.81, 1e-12); near(c.scaleN(60, -9.81), 0, 1e-12); near(c.scaleN(60, -12), 0, 1e-12);
});
group('cable snaps: free fall, then the brake stops the car above the pit', () => {
  for (const [y, v] of [[20, -3], [25, -6], [10, 3], [6, -3], [28, 6]]) {
    const s = c.snapSegs(y, v), e = c.stateAt(s, y, v, c.duration(s) + 1); near(e.v, 0, 1e-9, `${y},${v}`); assert(e.y >= 1 - 1e-6, `stops above the pit ${y},${v}: ${e.y}`);
    assert.equal(s[0].a, -9.81);
  }
});
console.log(`${n} elevator test groups passed`);
