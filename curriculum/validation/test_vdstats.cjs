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
  const p4 = S.plusFourInterval(6, 25, 0.95); near(p4.phat, 8 / 29, 1e-12, 'plus four p′'); near(p4.lo, 0.113, 1e-3, 'plus four lo (book 8.3: 6 of 25 smokers)'); near(p4.hi, 0.438, 1e-3, 'plus four hi');
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
group('two means with known sigmas: z by the formula of 10.2', () => {
  const r = S.zTest2s(3, 0.33, 20, 2.9, 0.36, 20, 'right');
  const z = 0.1 / Math.sqrt(0.33 * 0.33 / 20 + 0.36 * 0.36 / 20); near(r.z, z, 1e-12, 'z'); near(r.z, 0.91575, 1e-4, 'z value');
  near(r.p, 1 - S.dist.normal().cdf(z), 1e-12, 'right p'); near(S.zTest2s(3, 0.33, 20, 2.9, 0.36, 20, 'two').p, 2 * r.p, 1e-12, 'two sided p');
  near(S.zTest2s(5, 1, 4, 4, 1, 4, 'two', 1).z, 0, 1e-15, 'hypothesized difference');
});
group('test of a single variance (book Example 11.11: n = 25, s = 3.5, sigma0 = 7.2, left tail)', () => {
  const v = S.chisqVar(3.5, 25, 7.2, 'left'); near(v.chi2, 5.6713, 1e-4, 'chi2'); near(v.df, 24, 0, 'df'); near(v.p, 0.000042, 0.5e-6, 'p');
  const r = S.chisqVar(13.2, 15, 12.2); near(r.chi2, 14 * 13.2 * 13.2 / (12.2 * 12.2), 1e-12, 'right tail default'); near(r.p, 1 - S.dist.chisq(14).cdf(r.chi2), 1e-12, 'p right');
});
group('reference values (scipy 2026-11-22) in the tails and at small and fractional df, to 1e-9 relative', () => {
  const rel = (a, b, msg) => assert.ok(Math.abs(a - b) <= 1e-9 * Math.abs(b), `${msg}: ${a} vs ${b}`);
  rel(S.dist.normal().cdf(-8), 6.22096057427174e-16, 'S.dist.normal().cdf(-8)');
  rel(S.dist.normal().cdf(-3), 0.0013498980316300933, 'S.dist.normal().cdf(-3)');
  rel(S.dist.normal().inv(1e-6), -4.753424308822899, 'S.dist.normal().inv(1e-6)');
  rel(S.dist.t(1).inv(0.995), 63.656741162871526, 'S.dist.t(1).inv(0.995)');
  rel(S.dist.t(2).inv(0.975), 4.302652729749462, 'S.dist.t(2).inv(0.975)');
  rel(S.dist.t(3).inv(0.9), 1.637744353696209, 'S.dist.t(3).inv(0.9)');
  rel(S.dist.t(4.5).inv(0.99), 3.527050890626092, 'S.dist.t(4.5).inv(0.99)');
  rel(S.dist.t(32.7).inv(0.975), 2.0352246120879887, 'S.dist.t(32.7).inv(0.975)');
  rel(S.dist.t(1000).inv(0.995), 2.580754698065951, 'S.dist.t(1000).inv(0.995)');
  rel(S.dist.t(1).cdf(-50), 0.006365349100972797, 'S.dist.t(1).cdf(-50)');
  rel(S.dist.t(2).cdf(-10), 0.004926228511662845, 'S.dist.t(2).cdf(-10)');
  rel(S.dist.t(3).cdf(0.001), 0.5003675525152695, 'S.dist.t(3).cdf(0.001)');
  rel(S.dist.t(5).cdf(-6), 0.0009230691447970072, 'S.dist.t(5).cdf(-6)');
  rel(S.dist.t(30).cdf(4), 0.9998090771819581, 'S.dist.t(30).cdf(4)');
  rel(S.dist.chisq(1).cdf(0.0001), 0.007978712629263208, 'S.dist.chisq(1).cdf(0.0001)');
  rel(S.dist.chisq(1).cdf(20), 0.999992255783569, 'S.dist.chisq(1).cdf(20)');
  rel(S.dist.chisq(2).cdf(0.5), 0.22119921692859512, 'S.dist.chisq(2).cdf(0.5)');
  rel(S.dist.chisq(3).cdf(15), 0.9981833510334277, 'S.dist.chisq(3).cdf(15)');
  rel(S.dist.chisq(10).cdf(40), 0.9999830552560699, 'S.dist.chisq(10).cdf(40)');
  rel(S.dist.chisq(100).cdf(150), 0.9990960679576459, 'S.dist.chisq(100).cdf(150)');
  rel(S.dist.chisq(1).inv(0.005), 3.9270422220515944e-05, 'S.dist.chisq(1).inv(0.005)');
  rel(S.dist.chisq(2).inv(0.99), 9.21034037197618, 'S.dist.chisq(2).inv(0.99)');
  rel(S.dist.chisq(4).inv(0.001), 0.09080403553897909, 'S.dist.chisq(4).inv(0.001)');
  rel(S.dist.chisq(100).inv(0.975), 129.5611971858366, 'S.dist.chisq(100).inv(0.975)');
  rel(S.dist.f(1, 1).cdf(0.01), 0.06345103486110713, 'S.dist.f(1, 1).cdf(0.01)');
  rel(S.dist.f(1, 100).cdf(7), 0.9905318160073319, 'S.dist.f(1, 100).cdf(7)');
  rel(S.dist.f(10, 3).cdf(0.2), 0.022613922751096284, 'S.dist.f(10, 3).cdf(0.2)');
  rel(S.dist.f(40, 40).cdf(2), 0.9845037696435702, 'S.dist.f(40, 40).cdf(2)');
  rel(S.dist.f(1, 1).inv(0.95), 161.4476387975882, 'S.dist.f(1, 1).inv(0.95)');
  rel(S.dist.f(10, 3).inv(0.05), 0.26966790366849686, 'S.dist.f(10, 3).inv(0.05)');
  rel(S.dist.f(1, 100).inv(0.99), 6.895301030578023, 'S.dist.f(1, 100).inv(0.99)');
  rel(S.dist.binomial(1000, 0.5).cdf(450), 0.0008652680424881513, 'S.dist.binomial(1000, 0.5).cdf(450)');
  rel(S.dist.binomial(100, 0.01).pmf(5), 0.002897787123761478, 'S.dist.binomial(100, 0.01).pmf(5)');
  rel(S.dist.poisson(0.001).cdf(0), 0.999000499833375, 'S.dist.poisson(0.001).cdf(0)');
  rel(S.dist.poisson(100).cdf(60), 1.0812218170244006e-05, 'S.dist.poisson(100).cdf(60)');
  rel(S.dist.hypergeometric(60, 20, 59).pmf(20), 0.6666666666666666, 'S.dist.hypergeometric(60, 20, 59).pmf(20)');
  rel(S.dist.geometric(1 / 6).cdf(10), 0.8384944171101543, 'S.dist.geometric(1 / 6).cdf(10)');
  for (const df of [1, 2, 5, 30, 1000]) near(S.dist.t(df).inv(0.5), 0, 1e-11, `t(${df}) median is 0`);
  for (const df of [1, 3, 30]) near(S.dist.t(df).cdf(-2) + S.dist.t(df).cdf(2), 1, 1e-15, 't symmetry');
});
group("k-th percentile by the book's 2.3 rule: a whole position takes that value, otherwise the two neighbors' average", () => {
  const a = []; for (let v = 1; v <= 49; v++) a.push(v * 2);   /* 2, 4, ..., 98; n + 1 = 50 */
  near(S.quantile(a, 50), 50, 1e-12, 'i = 25 is whole: the 25th value');
  near(S.quantile(a, 49.8), (48 + 50) / 2, 1e-12, 'i = 24.9: average of the 24th and 25th values (Example 2.16 pattern)');
  near(S.quantile(a, 1), 2, 1e-12, 'below position 1: the smallest');
  near(S.quantile(a, 99), 98, 1e-12, 'past position n: the largest');
  near(S.quantile([1, 2, 3, 4], 50), 2.5, 1e-12, 'i = 2.5: average of 2 and 3');
});
console.log(`${n} groups passed`);
