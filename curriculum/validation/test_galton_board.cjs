'use strict';
// Galton Board: the binomial probabilities against exact counts, their mean and spread, and the seeded sampling.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('galton-board', 'gbPmf,gbMean,gbSd,gbNormal,gbRng,gbPath,gbStats');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const choose = (N, k) => { let c = 1; for (let i = 1; i <= k; i++) c = c * (N - k + i) / i; return c; };

test('four fair rows: 1 : 4 : 6 : 4 : 1 out of 16 (a row of Pascal\'s triangle)', () => {
  C.gbPmf(4, 0.5).forEach((q, k) => near(q, [1, 4, 6, 4, 1][k] / 16, 1e-14));
});
test('12 fair rows: 924 ways to make 6, P(6) = 924/4096', () => {
  near(C.gbPmf(12, 0.5)[6], 924 / 4096, 1e-14); assert.equal(choose(12, 6), 924);
});
test('every board sums to 1, with mean np and variance np(1 − p); p = 0 and p = 1 put every ball in an end bin', () => {
  for (const N of [1, 2, 7, 12, 20]) for (const p of [0, 0.1, 0.33, 0.5, 0.7, 1]) {
    const P = C.gbPmf(N, p), s = P.reduce((a, b) => a + b, 0), m = P.reduce((a, q, k) => a + k * q, 0), v = P.reduce((a, q, k) => a + q * (k - m) ** 2, 0);
    near(s, 1, 1e-12); near(m, C.gbMean(N, p), 1e-11); near(Math.sqrt(v), C.gbSd(N, p), 1e-7);
    P.forEach((q, k) => near(q, choose(N, k) * p ** k * (1 - p) ** (N - k), 1e-12));
  }
  assert.equal(C.gbPmf(5, 0)[0], 1); assert.equal(C.gbPmf(5, 1)[5], 1);
});
test('preset numbers: tilted board mean 8.4 and spread 1.59; 20 rows: bins 8 to 12 hold 73.7%', () => {
  near(C.gbMean(12, 0.7), 8.4, 1e-12); near(C.gbSd(12, 0.7), 1.587, 5e-4); near(C.gbSd(20, 0.5), Math.sqrt(5), 1e-12);
  const P = C.gbPmf(20, 0.5); near(P.slice(8, 13).reduce((a, b) => a + b, 0), 0.7368, 5e-4);
  const Q = C.gbPmf(12, 0.5); near(Q[5] + Q[6] + Q[7], 0.6123, 5e-4);
});
test('normal density: integrates to 1 and peaks at 1/(σ√(2π))', () => {
  let s = 0; for (let x = -20; x <= 40; x += 0.01) s += C.gbNormal(x, 10, 2.236) * 0.01; near(s, 1, 1e-6);
  near(C.gbNormal(10, 10, 2), 1 / (2 * Math.sqrt(2 * Math.PI)), 1e-15);
});
test('sampling: 200 000 seeded balls on 12 rows at p = 0.7 match the binomial (mean, spread, each bin within 5σ)', () => {
  const r = C.gbRng(12345), counts = new Array(13).fill(0), N = 200000;
  for (let i = 0; i < N; i++) counts[C.gbPath(12, 0.7, r).reduce((a, b) => a + b, 0)]++;
  const st = C.gbStats(counts), P = C.gbPmf(12, 0.7);
  assert.equal(st.N, N); near(st.mean, 8.4, 5 * 1.587 / Math.sqrt(N)); near(st.sd, 1.587, 0.01);
  counts.forEach((c, k) => near(c, N * P[k], 5 * Math.sqrt(N * P[k] * (1 - P[k])) + 1e-9, `bin ${k}`));
});
test('sample statistics: mean and N − 1 standard deviation by hand; the generator is repeatable and in [0, 1)', () => {
  const st = C.gbStats([1, 0, 3]); near(st.mean, 1.5, 1e-15); near(st.sd, Math.sqrt((1.5 ** 2 + 3 * 0.25) / 3), 1e-15);
  const a = C.gbRng(7), b = C.gbRng(7); for (let i = 0; i < 1000; i++) { const x = a(); assert.equal(x, b()); assert(x >= 0 && x < 1); }
});
console.log(`${n} tests passed`);
