'use strict';
// Linear Regression and Correlation (2026-11-19): the least squares fit against a hand computed set and the book's printed
// results (OpenStax Introductory Statistics 2e, chapter 12: the third exam/final exam line, r, s, the outlier and the line
// without it, the SCUBA, ice cream and CPI lines), the 95 % critical values of r against the book's whole table, the least
// squares line beating every other line, the shuffle test (Type I rate near 5 %, close to the t test), the standard errors
// against a simulation, the simulated labs (k, g, R recovered), parsing and rounding.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdstats.js'), ctx, { timeout: 5000 });
const core = readDemo('regression').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { SETS, dataFor, fitOf, sseOf, lineThrough, corr, shuffler, shuffleP, shuffleTest, without, parseXY, withSE, physics, G_ACC };', ctx, { timeout: 60000 });
const c = ctx.C, ST = ctx.VDSTATS;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);

group('a set worked by hand: (1, 2), (2, 3), (3, 5), (4, 4), (5, 6): b = 0.9, a = 1.3, r = 0.9, SSE = 1.9, s = √(1.9/3)', () => {
  const F = c.fitOf([1, 2, 3, 4, 5], [2, 3, 5, 4, 6]);
  near(F.slope, 0.9, 1e-12, 'b'); near(F.intercept, 1.3, 1e-12, 'a'); near(F.r, 0.9, 1e-12, 'r'); near(F.sse, 1.9, 1e-12, 'SSE');
  near(F.s, Math.sqrt(1.9 / 3), 1e-12, 's'); near(F.sst, 10, 1e-12, 'SST'); near(F.r2, 1 - 1.9 / 10, 1e-12, 'r² = 1 − SSE/SST');
  near(F.seSlope, Math.sqrt(1.9 / 3) / Math.sqrt(10), 1e-12, 'SE b'); near(F.seIntercept, Math.sqrt(1.9 / 3) * Math.sqrt(1 / 5 + 9 / 10), 1e-12, 'SE a');
  near(F.t, 0.9 * Math.sqrt(3) / Math.sqrt(1 - 0.81), 1e-12, 't');
});

group('the book: third exam/final exam, ŷ = −173.51 + 4.83x, r = 0.6631, s = 16.4, p = 0.026, (65, 175) an outlier; without it −355.19 + 7.39x, r = 0.9121', () => {
  const d = c.dataFor('exam', 1), F = c.fitOf(d.x, d.y);
  near(F.intercept, -173.51, 0.005, 'a'); near(F.slope, 4.83, 0.005, 'b'); near(F.r, 0.6631, 0.00005, 'r'); near(F.s, 16.4, 0.05, 's');
  near(F.p, 0.026, 0.0005, 'p'); near(F.rcrit, 0.602, 0.0005, 'critical value df 9'); assert(F.sig, 'significant');
  assert.deepStrictEqual(Array.from(F.outliers), [0], 'only (65, 175) is at least 2s from the line');
  near(F.residuals[0], 35, 0.5, 'its residual, 35 in the book'); assert(F.residuals[0] >= 2 * F.s && 2 * F.s > 32.8 && 2 * F.s < 32.9, '2s = 32.8');
  const G = c.without(d.x, d.y, 0);
  near(G.intercept, -355.19, 0.005, 'a without'); near(G.slope, 7.39, 0.005, 'b without'); near(G.r, 0.9121, 0.00005, 'r without');
  near(F.intercept + F.slope * 73, 178.89, 0.01, 'ŷ(73), 179.08 in the book from the rounded coefficients');
  near(-173.51 + 4.83 * 73, 179.08, 1e-9, 'the book\'s rounded arithmetic');
});

group('the book: SCUBA ŷ = 127.24 − 1.11x; ice cream cones; CPI ŷ = −3204 + 1.662x, r = 0.8694, s = 25.4, no outliers', () => {
  let d = c.dataFor('scuba', 1), F = c.fitOf(d.x, d.y);
  near(F.intercept, 127.24, 0.005, 'scuba a'); near(F.slope, -1.11, 0.005, 'scuba b');
  d = c.dataFor('cpi', 1); F = c.fitOf(d.x, d.y);
  near(F.intercept, -3204, 0.5, 'cpi a'); near(F.slope, 1.662, 0.0005, 'cpi b'); near(F.r, 0.8694, 0.00005, 'cpi r'); near(F.s, 25.4, 0.05, 'cpi s');
  near(F.rcrit, 0.532, 0.0005, 'critical value df 12'); assert.strictEqual(F.outliers.length, 0, 'no outliers in the CPI example');
  d = c.dataFor('ice', 1); F = c.fitOf(d.x, d.y); assert(F.r > 0.97 && F.sig, 'ice cream: strong and significant');
  assert(F.intercept + F.slope * 57 < 0, 'ice cream line goes below zero cones under 58 °F');
});

group('95 % critical values of r: the whole table in the book (§12.4) to three decimals, except df 11, printed 0.555 there and 0.553 exactly', () => {
  const tab = { 1: 0.997, 2: 0.950, 3: 0.878, 4: 0.811, 5: 0.754, 6: 0.707, 7: 0.666, 8: 0.632, 9: 0.602, 10: 0.576, 11: 0.555, 12: 0.532, 13: 0.514, 14: 0.497,
    15: 0.482, 16: 0.468, 17: 0.456, 18: 0.444, 19: 0.433, 20: 0.423, 21: 0.413, 22: 0.404, 23: 0.396, 24: 0.388, 25: 0.381, 26: 0.374, 27: 0.367, 28: 0.361,
    29: 0.355, 30: 0.349, 40: 0.304, 50: 0.273, 60: 0.250, 70: 0.232, 80: 0.217, 90: 0.205, 100: 0.195 };
  for (const [df, v] of Object.entries(tab)) {
    const x = Array.from({ length: +df + 2 }, (_, i) => i), y = x.map((v2) => (v2 * 7919) % 13);
    const F = c.fitOf(x, y); near(Math.round(F.rcrit * 1000) / 1000, df === '11' ? 0.553 : v, 1e-9, `df ${df}`);
  }
});

group('least squares beats every other line: SSE grows away from (a, b), and equals the sum of squared residuals', () => {
  const d = c.dataFor('exam', 1), F = c.fitOf(d.x, d.y);
  near(c.sseOf(d.x, d.y, F.intercept, F.slope), F.sse, 1e-8, 'SSE');
  const R = ST.rng(5);
  for (let k = 0; k < 2000; k++) { const a = F.intercept + R.normal(0, 30), b = F.slope + R.normal(0, 0.5); assert(c.sseOf(d.x, d.y, a, b) >= F.sse - 1e-9, 'a line beat least squares'); }
  near(c.sseOf(d.x, d.y, ST.mean(d.y), 0), F.sst, 1e-8, 'the flat line at ȳ gives SST');
  const L = c.lineThrough(1, 2, 3, 8); near(L.b, 3, 1e-12, 'line through two points'); near(L.a, -1, 1e-12, 'its intercept');
});

group('shuffle test: repeatable from the draw, p close to the t test, and about 5 % false alarms with no relationship', () => {
  const d = c.dataFor('exam', 1), F = c.fitOf(d.x, d.y);
  const A = c.shuffleTest(d.x, d.y, 1000, 1), B = c.shuffleTest(d.x, d.y, 1000, 1);
  assert.deepStrictEqual(Array.from(A.rs), Array.from(B.rs), 'same draw, same shuffles');
  const big = c.shuffleTest(d.x, d.y, 20000, 3); near(big.p, F.p, 0.01, 'shuffle p against t test p');
  const R = ST.rng(11); let reject = 0, rejT = 0; const N = 400;
  for (let k = 0; k < N; k++) {
    const x = Array.from({ length: 12 }, () => R.normal()), y = Array.from({ length: 12 }, () => R.normal());
    if (c.shuffleTest(x, y, 200, k + 1).p <= 0.05) reject++;
    if (c.fitOf(x, y).p <= 0.05) rejT++;
  }
  near(reject / N, 0.05, 0.035, 'shuffle Type I rate'); near(rejT / N, 0.05, 0.035, 't test Type I rate');
  near(c.shuffleP([0.1, -0.5, 0.5, 0.2], 0.5), 0.5, 1e-12, 'ties count as extreme');
});

group('standard errors of slope and intercept match the spread of fits to repeated simulated data', () => {
  const x = [0, 1, 2, 3, 4, 5, 6, 7], R = ST.rng(21), bs = [], as = []; let se = 0;
  for (let k = 0; k < 4000; k++) { const y = x.map((v) => 2 + 0.5 * v + R.normal(0, 1)); const F = c.fitOf(x, y); bs.push(F.slope); as.push(F.intercept); }
  const sxx = 42, sigB = 1 / Math.sqrt(sxx), sigA = Math.sqrt(1 / 8 + 3.5 * 3.5 / sxx);
  near(ST.sd(bs), sigB, 0.02 * sigB * 3, 'SD of slopes'); near(ST.sd(as), sigA, 0.02 * sigA * 3, 'SD of intercepts'); se;
});

group('the simulated labs give back k = 25.0 N/m, g = 9.81 m/s², R = 47.0 Ω within about 3 SE, and a bob mass slope near 0', () => {
  for (const seed of [1, 2, 3, 4, 5]) for (const key of ['spring', 'pendulum', 'ohm', 'mass']) {
    const d = c.dataFor(key, seed), F = c.fitOf(d.x, d.y), ph = c.physics(key, F);
    assert(Math.abs(ph.v - ph.truth) < 3.5 * ph.se, `${key} draw ${seed}: ${ph.v} ± ${ph.se} against ${ph.truth}`);
    assert.deepStrictEqual(c.dataFor(key, seed), d, 'the same draw gives the same data');
  }
  assert.strictEqual(c.G_ACC, 9.81, 'g from constants.js');
  const m = c.dataFor('mass', 1), F = c.fitOf(m.x, m.y); assert(!F.sig, 'draw 1: the bob mass makes no significant difference');
  assert.notDeepStrictEqual(c.dataFor('spring', 1), c.dataFor('spring', 2), 'a new draw changes the data');
});

group('edge cases: too few points, every x the same, every y the same, a perfect line', () => {
  assert.strictEqual(c.fitOf([1, 2], [1, 2]), null, 'two points');
  assert.strictEqual(c.fitOf([3, 3, 3], [1, 2, 4]), null, 'every x the same');
  const flat = c.fitOf([1, 2, 3, 4], [5, 5, 5, 5]); assert(flat.flat && !isFinite(flat.r) && flat.slope === 0, 'every y the same');
  const line = c.fitOf([1, 2, 3, 4], [3, 5, 7, 9]); assert(line.exact && line.r === 1 && line.p === 0 && line.outliers.length === 0, 'a perfect line');
});

group('typed tables and the value ± SE rounding', () => {
  const P = c.parseXY('# x, y\n1, 2\n2 3\n3\t5\n\n4;4'); assert.deepStrictEqual([Array.from(P.xs), Array.from(P.ys)], [[1, 2, 3, 4], [2, 3, 5, 4]]);
  assert.strictEqual(c.parseXY('1, 2\n2, 3').error, 'few'); assert.strictEqual(c.parseXY('1, 2\n2\n3, 4').error, 'pair');
  assert.strictEqual(c.parseXY('x, y\n1, 2\n2, 3\n3, 4').xs.length, 3, 'a heading line is skipped');
  assert.strictEqual(c.parseXY('1, 2\n2, b\n3, 4').error, 'number');
  assert.deepStrictEqual({ ...c.withSE(4.8274, 1.8164) }, { v: '4.8', e: '1.8' }); assert.deepStrictEqual({ ...c.withSE(9.7746, 0.1123) }, { v: '9.77', e: '0.11' });
  assert.deepStrictEqual({ ...c.withSE(-173.51, 124.3) }, { v: '-170', e: '120' });
});
console.log(`regression: ${n} groups passed`);
