'use strict';
// Circular Motion: centripetal force supplied by a string, friction, a banked road, or the track and gravity.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('circular-motion', 'G,accel,tension,flatMax,bank,loop,loopMin,speedState,slipTime');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('a = v²/r and T = mv²/r', () => { near(c.accel(3, 1), 9, 1e-12); near(c.tension(0.5, 3, 1), 4.5, 1e-12); });
group('flat curve: friction needed mv²/r equals μs mg at v = √(μs g r)', () => { const v = c.flatMax(0.7, 50); near(1200 * c.accel(v, 50), 0.7 * 1200 * 9.81, 1e-9); });
group('banked curve: no friction at the ideal speed; limits where |f| = μs N; force balance', () => {
  const b = c.bank(1200, 20, 50, 25, 0.3), th = 25 * Math.PI / 180;
  near(b.N * Math.sin(th) + b.f * Math.cos(th), 1200 * 400 / 50, 1e-8, 'horizontal: m v²/r'); near(b.N * Math.cos(th) - b.f * Math.sin(th), 1200 * 9.81, 1e-8, 'vertical: mg');
  near(c.bank(1200, b.vIdeal, 50, 25, 0.3).f, 0, 1e-9);
  const hi = c.bank(1200, b.vmax, 50, 25, 0.3), lo = c.bank(1200, b.vmin, 50, 25, 0.3);
  near(hi.f, 0.3 * hi.N, 1e-8); near(lo.f, -0.3 * lo.N, 1e-8); assert(b.vmin < b.vIdeal && b.vIdeal < b.vmax);
  assert.equal(c.bank(1, 10, 50, 50, 1).vmax, Infinity, 'μs tan θ ≥ 1: no top speed'); assert.equal(c.bank(1, 10, 50, 10, 0.5).vmin, 0);
});
group('vertical loop: energy sets the speed; N = m(v²/r + g cos φ); √(5gr) just keeps contact at the top', () => {
  const r = 1.5, v0 = c.loopMin(r), top = c.loop(0.5, v0, r, 180);
  near(top.v, Math.sqrt(9.81 * r), 1e-9); near(top.N, 0, 1e-9);
  const b = c.loop(0.5, 9, r, 0); near(b.N, 0.5 * (81 / r + 9.81), 1e-12);
  const side = c.loop(0.5, 9, r, 90); near(side.v * side.v, 81 - 2 * 9.81 * r, 1e-9); near(side.N, 0.5 * side.v * side.v / r, 1e-12);
  assert(c.loop(0.5, 3, r, 120).stalls);
});
group('speeding up or braking: v = v0 + a_t t, a_c = v²/r, |a| = √(a_t² + a_c²); slip when |a| reaches μs g', () => {
  const q = c.speedState(0, 2, 60, 5); near(q.v, 10, 1e-12); near(q.ac, 100 / 60, 1e-12); near(q.a, Math.hypot(2, 100 / 60), 1e-12); near(q.th, 25 / 60, 1e-12);
  const ts = c.slipTime(0, 2, 60, 0.7); near(c.speedState(0, 2, 60, ts).a, 0.7 * 9.81, 1e-9); near(ts, 9.9267, 1e-4);
  assert.equal(c.slipTime(0, 7, 60, 0.7), 0); assert.equal(c.slipTime(10, -2, 60, 0.7), null); assert.equal(c.slipTime(20.3, -2, 60, 0.7), 0);
  const b = c.speedState(20, -4, 60, 6); near(b.v, 0, 1e-12); near(b.a, 0, 1e-12); near(b.s, 50, 1e-12);
});
console.log(`${n} circular-motion test groups passed`);
