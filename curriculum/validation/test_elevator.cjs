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
