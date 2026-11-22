'use strict';
// Distribution Explorer (2026-11-19): the book's probabilities and calculator commands (OpenStax Introductory Statistics 2e,
// chapters 4 to 6, 8, 11 and 13), the percentiles, the comparison curves, the seeded samplers against their distributions, and
// every number the setups' hints state.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdstats.js'), ctx, { timeout: 5000 });
const src = readDemo('distribution-explorer');
const core = src.match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
const presets = src.match(/const PRESETS = (\{[\s\S]*?\n  \});/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { FAM, legal, prob, cnum, tiText, percentile, compares, cmpProb, sampler, viewRange, PRESETS: ' + presets + ' };', ctx, { timeout: 20000 });
const c = ctx.C, V = ctx.VDSTATS;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const D = (fam, q) => c.FAM[fam].make(c.legal(fam, q));
const P = (k) => { const s = c.PRESETS[k]; return c.prob(D(s.fam, s.q), c.FAM[s.fam].discrete, s.tail, s.a, s.b); };
const choose = (a, b) => { let r = 1; for (let i = 1; i <= b; i++) r = r * (a - b + i) / i; return r; };

group('book values: normalcdf(65, 1E99, 63, 5) = 0.3446, binomcdf(20, 0.41, 12) = 0.9738, geometpdf(0.173, 10) = 0.0313', () => {
  near(P('exam'), 0.3446, 5e-5, 'exam'); near(P('workers'), 0.9738, 5e-5, 'workers'); near(P('virus'), 0.0313, 5e-5, 'virus');
});
group('book values: poissoncdf(147, 160) = 0.8666, smile 0.6957, postal 0.7135, Fcdf(0.134, 1E99, 2, 12) = 0.8759', () => {
  near(P('emails'), 0.8666, 5e-5, 'emails'); near(P('smile'), 16 / 23, 1e-12, 'smile'); near(16 / 23, 0.6957, 5e-5);
  near(P('postal'), 1 - Math.exp(-1.25), 1e-9, 'postal'); near(P('postal'), 0.7135, 5e-5); near(P('anova'), 0.8759, 5e-5, 'anova');
});
group('hypergeometric committee: P(X ≥ 5) by direct counting', () => {
  let want = 0; for (let x = 5; x <= 7; x++) want += choose(15, x) * choose(18, 7 - x) / choose(33, 7);
  near(P('committee'), want, 1e-12, 'committee');
});
group('t, chi square and normal hint numbers', () => {
  const t14 = D('t', { df: 14 }); near(t14.inv(0.975), 2.145, 5e-4, 'invT'); near(P('invT'), 0.95, 2e-4, 'between');
  const x10 = D('chisq', { df: 10 }); near(x10.inv(0.95), 18.307, 5e-4, 'chi crit'); near(P('chi'), 0.05, 1e-4); near(x10.sd, Math.sqrt(20), 1e-9);
  near(P('tGrows'), 0.1476, 5e-5, 't df1'); near(1 - V.dist.normal(0, 1).cdf(2), 0.0228, 5e-5, 'z');
  const t30 = D('t', { df: 30 }); assert(Math.abs((1 - t30.cdf(2)) - 0.0228) < 0.01 && Math.abs((1 - t30.cdf(2)) - 0.0228) > 0.001, 'df 30 differs in the third place');
  near(P('rule'), 0.9545, 5e-5, 'rule'); near(P('waits'), Math.exp(-3.2), 1e-9); near(P('waits'), 0.0408, 5e-5);
  near(P('waits'), V.dist.poisson(3.2).cdf(0), 1e-12, 'zero counts'); near(P('pend'), 0.9044, 5e-5, 'pendulum');
  near(D('uniform', { A: -0.05, B: 0.05 }).sd, 0.1 / Math.sqrt(12), 1e-12); near(0.1 / Math.sqrt(12), 0.0289, 5e-5);
  near(D('geometric', { p: 0.173 }).mean, 5.78, 5e-3, 'geometric mean'); near(D('exponential', { m: 0.25 }).sd, 4, 1e-9);
});
group('calculator text as the book writes it', () => {
  const s = (k) => { const p = c.PRESETS[k]; return c.tiText(p.fam, c.legal(p.fam, p.q), p.tail, p.a, p.b); };
  assert.strictEqual(s('exam'), 'normalcdf(65, 1E99, 63, 5)'); assert.strictEqual(s('workers'), 'binomcdf(20, 0.41, 12)');
  assert.strictEqual(s('virus'), 'geometpdf(0.173, 10)'); assert.strictEqual(s('emails'), 'poissoncdf(147, 160)');
  assert.strictEqual(s('anova'), 'Fcdf(0.134, 1E99, 2, 12)'); assert.strictEqual(s('counts'), '1 − poissoncdf(3.2, 5)');
  assert.strictEqual(s('binApprox'), 'binomcdf(50, 0.1, 7) − binomcdf(50, 0.1, 2)');
  assert.strictEqual(s('postal'), '1 − e^(−0.25·5)'); assert.strictEqual(s('round'), '(0.02 − (−0.02))·1/(0.05 − (−0.05))'); assert.strictEqual(s('smile'), '(18 − 2)·1/(23 − 0)'); assert.strictEqual(s('rule'), 'normalcdf(−2, 2, 0, 1)');
  assert.strictEqual(c.percentile('t', { df: 14 }, D('t', { df: 14 }), 0.975).how, 'invT(0.975, 14)');
  assert.strictEqual(c.percentile('normal', { mu: 63, sigma: 5 }, D('normal', { mu: 63, sigma: 5 }), 0.9).how, 'invNorm(0.9, 63, 5)');
});
group('discrete events include their ends; continuous probabilities of the whole line are 1', () => {
  const B = D('binomial', { n: 10, p: 0.3 });
  near(c.prob(B, true, 'between', 3, 3), B.pmf(3), 1e-12); near(c.prob(B, true, 'right', 0, 0), 1, 1e-12);
  near(c.prob(B, true, 'left', 0, 10), 1, 1e-12); near(c.prob(B, true, 'between', 2.5, 4.5), B.pmf(3) + B.pmf(4), 1e-12);
  for (const f of ['uniform', 'exponential', 'normal', 't', 'chisq', 'f']) near(c.prob(D(f, {}), false, 'left', 0, 1e9), 1, 1e-9, f);
});
group('comparisons: the continuity correction, the binomial for drawing with replacement, t to normal', () => {
  const q = { n: 50, p: 0.1 }, B = D('binomial', q), C = c.compares('binomial', q, B);
  const N = V.dist.normal(5, Math.sqrt(4.5)); near(c.cmpProb(C[0], true, 'between', 3, 7), N.cdf(7.5) - N.cdf(2.5), 1e-12, 'cc');
  near(c.cmpProb(C[1], true, 'between', 3, 7), V.dist.poisson(5).cdf(7) - V.dist.poisson(5).cdf(2), 1e-12, 'poisson');
  const H = c.compares('hypergeometric', { N: 33, K: 15, n: 7 }, D('hypergeometric', { N: 33, K: 15, n: 7 }));
  near(H[0].D.mean, 7 * 15 / 33, 1e-12);
  const t1000 = D('t', { df: 1000 }); near(t1000.cdf(1.96), V.dist.normal(0, 1).cdf(1.96), 1e-3, 't to z');
});
group('legal parameters: whole numbers, K and n at most N, b above a', () => {
  const h = c.legal('hypergeometric', { N: 10.4, K: 40, n: 12 }); assert.deepStrictEqual([h.N, h.K, h.n], [10, 10, 10]);
  const u = c.legal('uniform', { A: 5, B: 2 }); assert(u.B > u.A);
  assert.strictEqual(c.cnum(Infinity), '1E99'); assert.strictEqual(c.cnum(-2.5), '−2.5'); assert.strictEqual(c.cnum(0.000012), '1.2E−5'); assert.strictEqual(c.cnum(1234567), '1.235E6');
});
group('seeded samplers match their distributions over 20,000 draws', () => {
  const cases = [['binomial', { n: 20, p: 0.41 }], ['geometric', { p: 0.173 }], ['hypergeometric', { N: 33, K: 15, n: 7 }], ['poisson', { mu: 3.2 }],
    ['uniform', { A: 0, B: 23 }], ['exponential', { m: 0.25 }], ['normal', { mu: 63, sigma: 5 }], ['t', { df: 14 }], ['chisq', { df: 10 }], ['f', { d1: 5, d2: 20 }]];
  for (const [f, q0] of cases) {
    const q = c.legal(f, q0), Dd = c.FAM[f].make(q), s = c.sampler(f, q, V.rng(7)), xs = [];
    for (let i = 0; i < 20000; i++) xs.push(s());
    const m = V.mean(xs), sd = V.sd(xs);
    near(m, Dd.mean, 4 * Dd.sd / Math.sqrt(20000) + 1e-9, f + ' mean');
    near(sd, Dd.sd, 0.05 * Dd.sd, f + ' sd');
    const med = Dd.inv(0.5), below = xs.filter((x) => x <= med).length / 20000;
    if (!c.FAM[f].discrete) near(below, 0.5, 0.015, f + ' median');
  }
});
group('every setup gives a legal state, a view that holds the event, and finite numbers', () => {
  for (const k in c.PRESETS) {
    const p = c.PRESETS[k], q = c.legal(p.fam, p.q), Dd = c.FAM[p.fam].make(q), v = c.viewRange(p.fam, q, Dd, c.compares(p.fam, q, Dd));
    assert(isFinite(v[0]) && isFinite(v[1]) && v[1] > v[0], k + ' view');
    const pr = c.prob(Dd, c.FAM[p.fam].discrete, p.tail, p.a, p.b); assert(pr > 0 && pr < 1, k + ' prob ' + pr);
  }
});
group('calculator text for an event outside the support reads 0, never a negative length (S2 2026-11-22)', () => {
  assert.strictEqual(c.tiText('uniform', { A: 0, B: 23 }, 'between', 30, 40), '(23 − 23)·1/(23 − 0)');
  assert.strictEqual(c.tiText('uniform', { A: 0, B: 23 }, 'between', -10, -5), '(0 − 0)·1/(23 − 0)');
  assert.strictEqual(c.tiText('uniform', { A: 0, B: 23 }, 'between', 2, 5), '(5 − 2)·1/(23 − 0)');
  assert.strictEqual(c.tiText('exponential', { m: 0.25 }, 'right', -2, 0), 'e^(−0.25·0)');
});
console.log(`distribution-explorer: ${n} groups passed`);
