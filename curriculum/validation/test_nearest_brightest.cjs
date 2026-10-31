'use strict';
// Stellar Evolution, Nearest and brightest: the HYG subset and its counts.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('hr-diagram', 'REAL_STARS,REAL_MV_SUN,realSet,realStats,realMedian');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };

test('sets: 317 stars within 10 pc, the 100 brightest, 7 in both', () => {
  assert.equal(C.realSet('near').length, 317); assert.equal(C.realSet('bright').length, 100); assert.equal(C.realSet('both').length, 410);
  assert(C.realSet('near').every((s) => s.d < 10)); assert(C.realSet('bright').every((s) => s.V <= 2.6));
});
test('distance modulus: M_V = V − 5 log₁₀(d/10 pc) for every star, rounded to 0.01 (distances to 0.001 pc)', () => {
  for (const s of C.realSet('both')) assert(Math.abs(s.V - 5 * Math.log10(s.d / 10) - s.MV) < 0.008, s.name);
});
test('the nearest are mostly less luminous than the Sun, the brightest nearly all more luminous', () => {
  const a = C.realStats(C.realSet('near')), b = C.realStats(C.realSet('bright'));
  assert.equal(a.brighter + a.fainter, a.n); assert(a.fainter / a.n > 0.9); assert(b.brighter >= 99);
  assert(a.medMV > 10 && b.medMV < 0); assert(b.medD > 5 * a.medD);
});
test('median: odd and even lists', () => { assert.equal(C.realMedian([3, 1, 2]), 2); assert.equal(C.realMedian([4, 1, 2, 3]), 2.5); });
console.log(`${n} tests passed`);
