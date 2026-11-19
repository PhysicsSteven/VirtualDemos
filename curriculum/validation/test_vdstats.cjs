'use strict';
// The shared statistics library demos/lib/vdstats.js: distribution values against printed table values (normal, t, chi-square,
// F critical values to the table's digits), discrete pmfs and cdfs against direct sums, the book's quartile and percentile
// rules, least squares against a hand worked data set, and the tests against known textbook results.
const assert = require('node:assert');
const vm = require('node:vm');
const { readLib } = require('./demo_source.cjs');
const S = (() => { const d = {}; vm.runInNewContext(readLib('vdstats.js') + ';globalThis.M = VDSTATS;', d, { timeout: 5000 }); return d.M; })();
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, msg) => assert.ok(Math.abs(a - b) <= tol, `${msg}: ${a} vs ${b}`);

group('critical values match the printed tables', () => {
  near(S.dist.normal().inv(0.975), 1.959964, 1e-6, 'z .975');
  near(S.dist.normal().cdf(1), 0.841345, 1e-6, 'Phi(1)');
  near(S.dist.normal(100, 15).cdf(130), 0.977250, 1e-6, 'Phi(2)');
  near(S.dist.t(10).inv(0.975), 2.228139, 1e-6, 't10');
  near(S.dist.t(1).inv(0.975), 12.706205, 1e-5, 't1');
  near(S.dist.t(29).inv(0.95), 1.699127, 1e-6, 't29 .95');
  near(S.dist.chisq(5).inv(0.95), 11.070498, 1e-5, 'chi2 5');
  near(S.dist.chisq(1).inv(0.95), 3.841459, 1e-6, 'chi2 1');
  near(S.dist.chisq(30).inv(0.99), 50.892181, 1e-5, 'chi2 30');
  near(S.dist.f(2, 10).inv(0.95), 4.102821, 1e-5, 'F 2,10');
  near(S.dist.f(5, 20).inv(0.99), 4.102685, 1e-5, 'F 5,20 .99');
  near(S.dist.f(3, 12).cdf(3.4903), 0.95, 1e-4, 'F 3,12');
});

group('densities integrate to 1 and pmfs sum to 1, means and sds right', () => {
  for (const D of [S.dist.t(4), S.dist.chisq(3), S.dist.f(4, 9), S.dist.exponential(0.5), S.dist.normal(2, 3)]) {
    let s = 0; const h = 0.001; for (let x = -60; x < 200; x += h) s += D.pdf(x + h / 2) * h; near(s, 1, 2e-3, 'pdf area');
  }
  const cases = [S.dist.binomial(20, 0.3), S.dist.poisson(4.2), S.dist.hypergeometric(52, 13, 5), S.dist.geometric(0.2)];
  for (const D of cases) {
    let s = 0, m = 0, v = 0; for (let k = 0; k < 400; k++) { const p = D.pmf(k); s += p; m += k * p; }
    for (let k = 0; k < 400; k++) v += (k - m) ** 2 * D.pmf(k);
    near(s, 1, 1e-9, 'pmf sum'); near(m, D.mean, 1e-8, 'mean'); near(Math.sqrt(v), D.sd, 1e-8, 'sd');
    let c = 0; for (let k = 0; k <= 6; k++) c += D.pmf(k); near(D.cdf(6), c, 1e-10, 'cdf(6)');
  }
  near(S.dist.binomial(20, 0.41).cdf(12), 0.9738, 1e-4, 'book 4.3 binomial');
  near(S.dist.poisson(3).cdf(1), 0.1991, 1e-4, 'Poisson 3 P(X<=1)');
  near(S.dist.binomial(10, 0.5).inv(0.5), 5, 0, 'binomial median');
});

group('the book’s quartiles, percentiles and outlier fences', () => {
  /* Introductory Statistics example 2.15 style: 1 1 2 2 4 6 6.8 7.2 8 8.3 9 10 10 11.5 */
  const a = [1, 1, 2, 2, 4, 6, 6.8, 7.2, 8, 8.3, 9, 10, 10, 11.5];
  const f = S.fiveNum(a); assert.deepStrictEqual([f.min, f.q1, f.med, f.q3, f.max], [1, 2, 7, 9, 11.5]);
  const b = [1, 2, 3, 4, 5, 6, 7]; const g = S.fiveNum(b); assert.deepStrictEqual([g.q1, g.med, g.q3], [2, 4, 6]);
  near(S.percentileRank([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 5), 45, 1e-12, 'percentile rank');
  near(S.sd([2, 4, 4, 4, 5, 5, 7, 9]), Math.sqrt(32 / 7), 1e-12, 'sample sd');
  const fe = S.iqrFences(a); near(fe.lo, -8.5, 1e-12, 'fence lo'); near(fe.hi, 19.5, 1e-12, 'fence hi');
});

group('least squares, r, its t test and standard errors', () => {
  const x = [1, 2, 3, 4, 5], y = [2, 4, 5, 4, 5];
  const L = S.linreg(x, y);
  near(L.slope, 0.6, 1e-12, 'slope'); near(L.intercept, 2.2, 1e-12, 'intercept');
  near(L.r, 0.6 * Math.sqrt(10 / 6), 1e-12, 'r'); near(L.sse, 2.4, 1e-12, 'sse');
  near(L.s, Math.sqrt(0.8), 1e-12, 's'); near(L.seSlope, Math.sqrt(0.8 / 10), 1e-12, 'se slope');
  near(L.p, 2 * (1 - S.dist.t(3).cdf(L.t)), 1e-12, 'p');
});

group('tests and intervals', () => {
  const t1 = S.tTest1s(5.2, 1.2, 25, 5, 'right'); near(t1.t, 0.833333, 1e-6, 't'); near(t1.df, 24, 0, 'df');
  const ci = S.tInterval(8.2286, 1.6722, 15, 0.95); near(ci.E, 0.926, 1e-3, 'book 8.2 t interval');
  const pr = S.propInterval(421, 500, 0.95); near(pr.lo, 0.810, 1e-3, 'prop lo'); near(pr.hi, 0.874, 1e-3, 'prop hi');
  const g = S.chisqGOF([10, 12, 8, 14, 9, 7], [10, 10, 10, 10, 10, 10]); near(g.chi2, 3.4, 1e-12, 'gof'); near(g.df, 5, 0, 'df');
  const ind = S.chisqIndep([[10, 20], [30, 40]]); near(ind.chi2, 0.79365, 1e-4, 'indep');
  const an = S.anova1([[1, 2, 3], [2, 3, 4], [5, 6, 7]]); near(an.F, 13, 1e-12, 'F'); near(an.dfb, 2, 0, 'dfb'); near(an.dfw, 6, 0, 'dfw');
  const w = S.tTest2s(10, 2, 15, 9, 3, 20); near(w.df, 32.7, 0.1, 'Welch df');
});

group('seeded draws: repeatable, right mean and spread', () => {
  const r = S.rng(7), r2 = S.rng(7); assert.strictEqual(r(), r2());
  const a = S.rng(3); const z = Array.from({ length: 40000 }, () => a.normal());
  near(S.mean(z), 0, 0.02, 'normal mean'); near(S.sd(z), 1, 0.02, 'normal sd');
  const p = Array.from({ length: 20000 }, () => a.poisson(50)); near(S.mean(p), 50, 0.3, 'Poisson mean'); near(S.variance(p), 50, 2, 'Poisson var');
  const q = Array.from({ length: 20000 }, () => a.poisson(3)); near(S.mean(q), 3, 0.05, 'Poisson 3 mean');
  const b = Array.from({ length: 20000 }, () => a.binomial(200, 0.3)); near(S.mean(b), 60, 0.3, 'binomial mean');
});
console.log(`${n} groups passed`);
