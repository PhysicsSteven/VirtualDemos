'use strict';
// Chi-Square Tests: the book's examples come out as the book prints them (11.2, 11.3, 11.4, 11.6, 11.8, 11.9, 11.11), Mendel's
// peas give 0.470, the Poisson grouping keeps every expected count at least 5, the simulated sources have the right rates (and
// dead time loses counts as n/(1 + nτ)), and under H₀ the simulated statistics have the chi square mean df, variance 2df and a
// rejection rate near α, with the simulated p value close to the curve's.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const c = (() => {
  const ctx = {};
  vm.runInNewContext(readLib('vdstats.js'), ctx, { timeout: 5000 });
  const src = readDemo('chi-square-tests').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
  vm.runInNewContext(src + '\nglobalThis.R = { BOOK, gof, table, poissonBins, binProbs, binCounts, poissonTest, dieRolls, decayCounts, dieCoinTable, timings, multinomial, NULLS, simP };', ctx, { timeout: 20000 });
  ctx.R.VDSTATS = ctx.VDSTATS;
  return ctx.R;
})();
const V = c.VDSTATS;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);

group('goodness of fit: book Examples 11.2, 11.3, 11.4 and Mendel 1866', () => {
  const B = c.BOOK;
  let r = c.gof(B.absent.obs, B.absent.probs); near(r.chi2, 3, 1e-12, '11.2'); near(r.p, 0.5578, 5e-5, '11.2 p'); assert.strictEqual(r.df, 4);
  r = c.gof(B.stream.obs, B.stream.probs); near(r.chi2, 29.65, 0.005, '11.3'); near(r.p, 0.000006, 0.5e-6, '11.3 p');
  r = c.gof(B.coins.obs, B.coins.probs); near(r.chi2, 2.14, 1e-12, '11.4'); near(r.p, 0.3430, 5e-5, '11.4 p'); assert.strictEqual(r.df, 2);
  r = c.gof(B.mendel.obs, B.mendel.probs); near(r.chi2, 0.4700, 5e-5, 'Mendel'); near(r.p, 0.9254, 5e-5, 'Mendel p'); assert.strictEqual(r.small, 0);
  near(r.exp[3], 34.75, 1e-12, 'Mendel E wrinkled green');
});

group('tables: book Examples 11.6 (independence), 11.8 and 11.9 (homogeneity)', () => {
  const B = c.BOOK;
  let r = c.table(B.volunteer.table); near(r.chi2, 12.9909, 5e-5, '11.6'); near(r.p, 0.0113, 5e-5, '11.6 p'); assert.strictEqual(r.df, 4);
  near(r.exp[0][0], 90.57, 0.005, '11.6 expected');
  r = c.table(B.living.table); near(r.chi2, 10.1287, 5e-5, '11.8'); near(r.p, 0.0175, 5e-5, '11.8 p'); assert.strictEqual(r.df, 3);
  r = c.table(B.counselors.table); near(r.chi2, 3.2603, 5e-5, '11.9'); near(r.p, 0.1959, 5e-5, '11.9 p');
  r = c.table(B.anxiety.table); near(r.exp[0][0], 22.09, 0.005, '11.7 expected'); near(r.exp[2][3], 8.19, 0.005, '11.7 expected low need'); assert.strictEqual(r.small, 0);
  const v = V.chisqVar(B.post.s, B.post.n, B.post.sigma0, 'left'); near(v.chi2, 5.67, 0.005, '11.11'); near(v.p, 0.000042, 0.5e-6, '11.11 p');
});

group('Poisson grouping: every expected count at least 5, the bins cover every count, df = bins − 2', () => {
  for (const [nn, m] of [[100, 4], [50, 2], [200, 25 / 1.5], [500, 8], [100, 0.7]]) {
    const bins = c.poissonBins(nn, m), p = c.binProbs(bins, m);
    near(p.reduce((s, v) => s + v, 0), 1, 1e-12, 'probabilities add to 1');
    for (const v of p) assert(nn * v >= 5 - 1e-9, `E ${nn * v} < 5 for n ${nn}, m ${m}`);
    assert.strictEqual(bins[0].lo, 0); assert.strictEqual(bins[bins.length - 1].hi, Infinity);
    for (let i = 1; i < bins.length; i++) assert.strictEqual(bins[i].lo, bins[i - 1].hi + 1);
  }
  const bins = c.poissonBins(100, 4); assert.strictEqual(JSON.stringify(bins.map((b) => [b.lo, b.hi === Infinity ? 'inf' : b.hi])), JSON.stringify([[0, 1], [2, 2], [3, 3], [4, 4], [5, 5], [6, 6], [7, 7], [8, 'inf']]));
  const t = c.poissonTest([0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 4, 4, 3, 5]); assert.strictEqual(t.df, t.obs.length - 2);
});

group('simulated sources: a fair die, a Poisson counter, dead time n/(1 + nτ), stopwatch spread', () => {
  const r = V.rng(5), d = c.dieRolls(600000, 1 / 6, r); for (const k of d) near(k / 600000, 1 / 6, 0.003, 'fair face');
  const L = c.dieRolls(400000, 0.25, r); near(L[5] / 400000, 0.25, 0.003, 'loaded six'); near(L[0] / 400000, 0.15, 0.003, 'other face');
  const counts = c.decayCounts(20000, 4, 0, r); near(V.mean(counts), 4, 0.05, 'Poisson mean'); near(V.variance(counts), 4, 0.15, 'Poisson variance');
  const dead = c.decayCounts(20000, 25, 0.02, r), m = V.mean(dead); near(m, 25 / (1 + 25 * 0.02), 0.1, 'dead time rate');
  assert(V.variance(dead) < 0.6 * m, 'dead time makes the counts more even than Poisson');
  const tm = c.timings(20000, 2.006, 0.07, r); near(V.sd(tm), Math.sqrt(0.07 ** 2 + 0.01 ** 2 / 12), 0.002, 'stopwatch spread with rounding');
  for (const v of tm.slice(0, 50)) near(v * 100, Math.round(v * 100), 1e-9, 'rounded to 0.01 s');
  const mn = c.multinomial(1000, [0.5, 0.3, 0.2], r); assert.strictEqual(mn.reduce((s, v) => s + v, 0), 1000);
});

group('under H₀ the simulated statistics follow the chi square curve: mean df, variance 2df, Type I rate near α', () => {
  const r = V.rng(11), N = 20000;
  const cases = [['gof die 60', 5, () => c.NULLS.gof({ n: 60, probs: [1, 1, 1, 1, 1, 1].map(() => 1 / 6) }, r)],
    ['Mendel 556', 3, () => c.NULLS.gof({ n: 556, probs: c.BOOK.mendel.probs }, r)],
    ['independence 3 × 3', 4, () => c.NULLS.indep({ obs: c.BOOK.volunteer.table, n: 839 }, r)],
    ['homogeneity 2 × 4', 3, () => c.NULLS.homog({ obs: c.BOOK.living.table, n: 550 }, r)],
    ['single variance n = 20', 19, () => c.NULLS.var({ n: 20, sigma0: 0.05 }, r)]];
  for (const [name, df, sim] of cases) {
    const x = Array.from({ length: N }, sim), crit = V.dist.chisq(df).inv(0.95), rate = x.filter((v) => v > crit).length / N;
    near(V.mean(x), df, 4 * Math.sqrt(2 * df / N) + 0.02 * df, name + ' mean'); near(V.variance(x), 2 * df, 0.12 * 2 * df, name + ' variance');
    near(rate, 0.05, 0.01, name + ' Type I rate');
  }
  const t = c.poissonTest(c.decayCounts(100, 4, 0, V.rng(1))), x = Array.from({ length: N }, () => c.NULLS.poisson({ counts: new Array(100), mean: t.mean, bins: t.bins }, r));
  near(V.mean(x), t.df, 0.35, 'Poisson null mean near bins − 2');
  const sp = c.simP(Float64Array.from(x), N, t.chi2, 'right'); near(sp, t.p, 0.03, 'simulated p near the curve');
});
console.log(`chi-square-tests: ${n} groups passed`);
