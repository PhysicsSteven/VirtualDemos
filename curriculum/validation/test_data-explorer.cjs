'use strict';
// Data Explorer (2026-11-19): the book's data sets give the book's numbers (OpenStax Introductory Statistics 2e 1.3, 2.1 to 2.7),
// frequency tables (value and class) with relative and cumulative relative frequency, the stemplot (leaf unit, empty stems,
// cut not rounded), the book's start and width rule, describe() against hand computed values, and the simulated sets
// (seeded: draw 1 always the same; their spread near the simulated σ over many draws).
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdstats.js'), ctx, { timeout: 5000 });
const core = readDemo('data-explorer').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { BOOK, SIM, simulate, decimalsOf, dataDecimals, parseData, modes, describe, freqByValue, bins, freqByClass, autoBins, stemplot, zScore };', ctx, { timeout: 20000 });
const c = ctx.C;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const same = (a, b, w) => assert.strictEqual(JSON.stringify(Array.from(a)), JSON.stringify(b), w);
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);

group('book data sets have the book\'s sizes', () => {
  const want = { work: 20, dean: 31, market: 21, soccer: 100, cpi: 120, homes: 13, er: 40, baseball: 25 };
  for (const k in want) assert.strictEqual(c.BOOK[k].values.length, want[k], k);
});
group('1.3 work hours: frequency of 2 is 3, relative 0.15; cumulative relative frequency ends at 1', () => {
  const t = c.freqByValue(c.BOOK.work.values);
  same(t.map((r) => r.lo), [2, 3, 4, 5, 6, 7]);
  same(t.map((r) => r.f), [3, 5, 3, 6, 2, 1]);
  near(t[0].rf, 0.15, 1e-15, 'rf'); near(t[1].rf, 0.25, 1e-15, 'rf 3'); near(t[t.length - 1].crf, 1, 1e-15, 'crf');
});
group('1.3 and 2.2 soccer heights: start 59.95, width 2 gives 5, 3, 15, 40, 17, 12, 7, 1; under 65.95 is 23 %', () => {
  const t = c.freqByClass(c.BOOK.soccer.values, 59.95, 2);
  same(t.map((r) => r.f), [5, 3, 15, 40, 17, 12, 7, 1]);
  near(t[2].crf, 0.23, 1e-12, 'crf'); near(t[0].lo, 59.95, 1e-12); near(t[7].hi, 75.95, 1e-12);
});
group('a value on a boundary goes in the bar to its right; the largest value is always counted', () => {
  const h = c.bins([1, 2, 3, 4], 1, 1);
  same(Array.from(h.counts), [1, 1, 1, 1]);
  const g = c.bins([0.1, 0.2, 0.3], 0.1, 0.1);   /* rounding: 0.3 is not lost below an edge */
  same(Array.from(g.counts), [1, 1, 1]);
});
group('2.1 exam scores stemplot: stems 3 to 10, leaf unit 1, the book\'s leaves', () => {
  const s = c.stemplot(c.BOOK.dean.values);
  assert.strictEqual(s.unit, 1);
  same(s.rows.map((r) => r.stem), ['3', '4', '5', '6', '7', '8', '9', '10']);
  same(s.rows.map((r) => r.leaves.map((l) => l.leaf).join('')), ['3', '299', '355', '1378899', '2348', '03888', '0244446', '0']);
});
group('2.1 supermarket distances: leaf unit 0.1, empty stems 7 to 11 kept, 12 | 3', () => {
  const s = c.stemplot(c.BOOK.market.values);
  near(s.unit, 0.1, 1e-15);
  same(s.rows.map((r) => r.stem), ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']);
  same(s.rows.map((r) => r.leaves.length), [2, 3, 5, 6, 2, 2, 0, 0, 0, 0, 0, 1]);
  assert.strictEqual(s.rows[11].leaves[0].leaf, 3);
});
group('stemplot cuts digits past the leaf unit and handles negative stems', () => {
  const s = c.stemplot([181.7, 231.407, 202.416]);   /* CPI style: leaf unit 1, stems the tens */
  assert.strictEqual(s.unit, 1); assert.strictEqual(s.rows[0].stem, '18'); assert.strictEqual(s.rows[0].leaves[0].leaf, 1);
  const t = c.stemplot([-12, -3, 4, 15]);
  same(t.rows.map((r) => r.stem), ['−1', '−0', '0', '1']);
});
group('2.3 home prices: median 488,800, Q1 308,750, Q3 649,000, IQR 340,250; fences −201,625 and 1,159,375, so only 5,500,000 is an outlier', () => {
  const d = c.describe(c.BOOK.homes.values);
  assert.strictEqual(d.median, 488800); assert.strictEqual(d.q1, 308750); assert.strictEqual(d.q3, 649000); assert.strictEqual(d.iqr, 340250);
  same(Array.from(d.outliers), [5500000]); near(d.lo, -201625, 1e-6, 'lower fence');
  near(d.hi, 649000 + 1.5 * 340250, 1e-6, 'upper fence');
});
group('2.3 location example: 1; 1; 2; 2; 4; 6; 6.8; 7.2; 8; 8.3; 9; 10; 10; 11.5 gives Q1 2, median 7, Q3 9', () => {
  const d = c.describe([1, 11.5, 6, 7.2, 4, 8, 9, 10, 6.8, 8.3, 2, 2, 10, 1]);
  same([d.min, d.q1, d.median, d.q3, d.max], [1, 2, 7, 9, 11.5]);
});
group('2.5 emergency room ages: mean 23.575 (book 23.6), median 24; 2.7 baseball: mean 30.68, s 6.09', () => {
  const e = c.describe(c.BOOK.er.values); near(e.mean, 23.575, 1e-12, 'mean'); assert.strictEqual(e.median, 24);
  const b = c.describe(c.BOOK.baseball.values); near(b.mean, 30.68, 1e-12, 'mean'); near(b.sd, 6.09, 0.005, 's');
});
group('describe by hand: 2, 4, 4, 4, 5, 5, 7, 9', () => {
  const d = c.describe([2, 4, 4, 4, 5, 5, 7, 9]);
  near(d.mean, 5, 1e-15); near(d.sd, Math.sqrt(32 / 7), 1e-14, 's'); assert.strictEqual(d.median, 4.5);
  assert.strictEqual(d.q1, 4); assert.strictEqual(d.q3, 6); same(Array.from(d.modes.values), [4]); assert.strictEqual(d.modes.count, 3);
  assert.strictEqual(d.range, 7); same(Array.from(d.outliers), []);
  near(c.zScore(9, d.mean, d.sd), 4 / Math.sqrt(32 / 7), 1e-14, 'z');
});
group('one outlier moves the mean and s but not the median or IQR (the worksheet\'s idea)', () => {
  const a = c.simulate('pendulum', 1), d0 = c.describe(a), i = a.indexOf(Math.max(...a)), b = a.slice(); b[i] = 8;
  const d1 = c.describe(b);
  near(d1.mean - d0.mean, (8 - a[i]) / a.length, 1e-12, 'mean shift = change/n');
  assert.strictEqual(d1.median, d0.median); assert.strictEqual(d1.q1, d0.q1); assert.strictEqual(d1.q3, d0.q3);
  assert(d1.sd > 5 * d0.sd, 's grows'); assert(d1.outliers.includes(8));
});
group('the book\'s start rule: integers from 2 start at 1.5; tenths from 1.1 start at 1.05', () => {
  near(c.autoBins([2, 3, 7]).start, 1.5, 1e-12); near(c.autoBins([1.1, 2.3, 6.7]).start, 1.05, 1e-12);
  const w = c.autoBins(c.BOOK.dean.values).width; assert([1, 2, 2.5, 5, 10, 20, 25, 50].includes(w), 'width ' + w);
});
group('decimals and typed data', () => {
  assert.strictEqual(c.decimalsOf(208.49), 2); assert.strictEqual(c.dataDecimals([1, 2.5, 3.25]), 2); assert.strictEqual(c.decimalsOf(-0.05), 2);
  const r = c.parseData('1; 2,3\n4\t5 −6 x'); same(Array.from(r.values), [1, 2, 3, 4, 5, -6]); same(Array.from(r.bad), ['x']);
});
group('simulated sets: draw 1 is fixed; the pendulum scatter is near σ = 0.06 s, the counts near mean 3.2', () => {
  same(Array.from(c.simulate('pendulum', 1)), Array.from(c.simulate('pendulum', 1)));
  assert.notDeepStrictEqual(Array.from(c.simulate('pendulum', 1)), Array.from(c.simulate('pendulum', 2)));
  let all = [], cnt = [];
  for (let d = 1; d <= 200; d++) { all = all.concat(Array.from(c.simulate('pendulum', d))); cnt = cnt.concat(Array.from(c.simulate('decay', d))); }
  const s = ctx.VDSTATS.sd(all), m = ctx.VDSTATS.mean(all);
  near(m, 2.000, 0.004, 'pendulum mean'); near(s, 0.06, 0.003, 'pendulum sd');
  near(ctx.VDSTATS.mean(cnt), 3.2, 0.1, 'decay mean'); assert(cnt.every((k) => k >= 0 && Number.isInteger(k)));
  assert(ctx.VDSTATS.skew(cnt) > 0.3, 'counts skew right');
  const laps = c.simulate('laps', 1); assert.strictEqual(laps.length, 20);
});
console.log(`data-explorer: ${n} groups passed`);
