'use strict';
// Hypothesis Tests: each kind of test gives the book's statistic and p value on a hand checked sample; with H0 true the
// fraction of studies rejected is near alpha (z and t tests exactly in theory, proportions approximately); the theory power
// is alpha at the null, matches a direct formula for z, and agrees with simulation for every kind; the noncentral t power
// matches a brute force simulation of (Z + lambda)/sqrt(V/df); seeded runs repeat.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdstats.js'), ctx, { timeout: 5000 });
const src = readDemo('hypothesis-tests').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(src + '\nglobalThis.R = { simulate, analyze, nullDist, pFor, reject, critical, theoryDf, normalPower, tPower, power, lambdaOf, hash, studySeed, runSeed, runStudies, tallyRun };', ctx, { timeout: 60000 });
const c = ctx.R, ST = ctx.VDSTATS;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const G = 9.81;

group('one mean, t: the book\'s statistic and p value on a hand checked sample', () => {
  const x = [9.78, 9.85, 9.83, 9.80, 9.86, 9.79, 9.84, 9.82, 9.87, 9.81];   /* mean 9.825, s = 0.0303 */
  const m = x.reduce((a, b) => a + b) / 10, s = Math.sqrt(x.reduce((a, v) => a + (v - m) ** 2, 0) / 9), t = (m - G) / (s / Math.sqrt(10));
  const A = c.analyze({ kind: 't1', mu0: G, n: 10, tail: 'two' }, { x });
  near(A.stat, t, 1e-12, 't'); near(A.df, 9, 0, 'df'); near(A.est, 9.825, 1e-12, 'mean');
  near(A.p, 2 * (1 - ST.dist.t(9).cdf(t)), 1e-12, 'p');
  near(t, 1.5667, 1e-3, 't value');
  const R = c.analyze({ kind: 't1', mu0: G, n: 10, tail: 'right' }, { x }); near(R.p, A.p / 2, 1e-12, 'right tail is half');
});

group('one mean z, proportions, two means (z and Welch), matched pairs', () => {
  const z = c.analyze({ kind: 'z1', mu0: G, sigma: 0.03, n: 4, tail: 'left' }, { x: [9.78, 9.80, 9.79, 9.81] });
  near(z.stat, (9.795 - G) / 0.015, 1e-10, 'z1'); near(z.p, ST.dist.normal().cdf(-1), 1e-9, 'z1 p');
  const p = c.analyze({ kind: 'p1', mu0: 0.8, n: 10, tail: 'right' }, { x: [1, 1, 1, 1, 1, 1, 1, 1, 1, 0] });
  near(p.stat, (0.9 - 0.8) / Math.sqrt(0.16 / 10), 1e-12, 'p1 z'); near(p.x, 9, 0, 'count');
  const a = [2, 4, 6], b = [1, 2, 3, 4];
  const z2 = c.analyze({ kind: 'z2', sigma: 2, sigma2: 1, n: 3, n2: 4, tail: 'two' }, { a, b });
  near(z2.stat, (4 - 2.5) / Math.sqrt(4 / 3 + 1 / 4), 1e-12, 'z2');
  const t2 = c.analyze({ kind: 't2', n: 3, n2: 4, tail: 'two' }, { a, b }), v1 = 4 / 3, v2 = (5 / 3) / 4;
  near(t2.stat, 1.5 / Math.sqrt(v1 + v2), 1e-12, 'Welch t'); near(t2.df, (v1 + v2) ** 2 / (v1 * v1 / 2 + v2 * v2 / 3), 1e-12, 'Welch df');
  const p2 = c.analyze({ kind: 'p2', n: 4, n2: 4, tail: 'two' }, { a: [1, 1, 1, 0], b: [1, 0, 0, 0] });
  near(p2.pooled, 0.5, 0, 'pooled'); near(p2.stat, 0.5 / Math.sqrt(0.25 * 0.5), 1e-12, 'two proportions');
  const pr = c.analyze({ kind: 'pair', n: 3, tail: 'two' }, { d: [1, 2, 3] }); near(pr.stat, 2 / (1 / Math.sqrt(3)), 1e-12, 'paired t'); near(pr.df, 2, 0, 'paired df');
});

group('critical values and the decision rule', () => {
  near(c.critical(0, 'two', 0.05)[1], 1.959964, 1e-6, 'z two'); near(c.critical(9, 'two', 0.05)[1], 2.262157, 1e-6, 't9 two');
  near(c.critical(0, 'left', 0.05)[0], -1.644854, 1e-6, 'z left'); assert.strictEqual(c.critical(0, 'left', 0.05)[1], Infinity);
  assert(c.reject(0.049, 0.05) && !c.reject(0.05, 0.05) && !c.reject(0.2, 0.1));
});

group('theory power: alpha at the null; the z formula; the noncentral t against brute force', () => {
  for (const tail of ['two', 'left', 'right']) for (const a of [0.1, 0.05, 0.01]) {
    near(c.normalPower(0, 1, tail, a), a, 1e-12, `z null ${tail} ${a}`);
    for (const df of [1, 4, 9, 30]) near(c.tPower(0, df, tail, a), a, 2e-6, `t null df ${df} ${tail} ${a}`);
  }
  const N = ST.dist.normal();
  near(c.normalPower(2.5, 1, 'right', 0.05), 1 - N.cdf(1.644854 - 2.5), 1e-6, 'z right power');
  near(c.normalPower(1, 1, 'two', 0.05), 1 - N.cdf(1.959964 - 1) + N.cdf(-1.959964 - 1), 1e-6, 'z two power');
  /* noncentral t: simulate T = (Z + λ)/sqrt(V/df) directly */
  const r = ST.rng(11), df = 6, lam = 2, cr = ST.dist.t(df).inv(0.975), M = 200000; let k = 0;
  for (let i = 0; i < M; i++) { let v = 0; for (let j = 0; j < df; j++) { const g = r.normal(); v += g * g; } const T = (r.normal() + lam) / Math.sqrt(v / df); if (Math.abs(T) > cr) k++; }
  const f = k / M, se = Math.sqrt(f * (1 - f) / M);
  near(c.tPower(lam, df, 'two', 0.05), f, 4 * se, 'noncentral t power');
});

/* the settings of each setup in the demo, with its true value moved as needed */
const SET = {
  t1: { kind: 't1', mu0: G, n: 10, sigma: 0.06, tail: 'two', alpha: 0.05 },
  z1: { kind: 'z1', mu0: G, n: 8, sigma: 0.03, tail: 'left', alpha: 0.05 },
  p1: { kind: 'p1', mu0: 0.8, n: 150, tail: 'right', alpha: 0.05 },
  z2: { kind: 'z2', mu0: 0, n: 10, n2: 10, sigma: 2, sigma2: 2, base: 2006, tail: 'two', alpha: 0.05 },
  t2: { kind: 't2', mu0: 0, n: 12, n2: 8, sigma: 0.08, sigma2: 0.15, base: 2.006, tail: 'two', alpha: 0.05 },
  p2: { kind: 'p2', mu0: 0, n: 200, n2: 200, base: 0.8, tail: 'two', alpha: 0.05 },
  pair: { kind: 'pair', mu0: 0, n: 10, sigma: 3, base: 1800, spreadUnits: 300, tail: 'two', alpha: 0.05 },
};
const rate = (P, M, seed) => { const run = c.runStudies(P, ST.rng(seed), M); return c.tallyRun(run, P.tail, P.alpha) / M; };

group('Type I error rate near alpha with H0 true (8,000 studies each)', () => {
  const M = 8000;
  for (const [k, P0] of Object.entries(SET)) {
    const P = Object.assign({}, P0, { truth: P0.mu0 }), f = rate(P, M, 5 + k.length), se = Math.sqrt(0.05 * 0.95 / M);
    const tol = k === 'p1' || k === 'p2' ? 4 * se + 0.012 : 4 * se;   /* proportions: the normal approximation and whole counts */
    near(f, 0.05, tol, `Type I rate ${k}`);
    near(c.power(P), k === 't2' ? 0.05 : 0.05, k === 't2' ? 2e-3 : 1e-6, `theory at the null ${k}`);
  }
});

group('power: theory against 6,000 simulated studies at a false H0', () => {
  const M = 6000, truths = { t1: G + 0.05, z1: 9.79, p1: 0.85, z2: 1.5, t2: 0.1, p2: 0.06, pair: 2 };
  for (const [k, P0] of Object.entries(SET)) {
    const P = Object.assign({}, P0, { truth: truths[k] }), f = rate(P, M, 99), th = c.power(P), se = Math.sqrt(th * (1 - th) / M);
    const tol = k === 't2' || k === 'p1' || k === 'p2' ? 4 * se + 0.015 : 4 * se;   /* the approximations stated on the page */
    near(f, th, tol, `power ${k}`);
  }
  /* more data, more power; a bigger effect, more power */
  const P = Object.assign({}, SET.t1, { truth: G + 0.04 });
  assert(c.power(Object.assign({}, P, { n: 20 })) > c.power(P) && c.power(Object.assign({}, P, { truth: G + 0.08 })) > c.power(P));
});

group('the opening study (Pendulum g, draw 1) and seeded runs repeat', () => {
  const P = Object.assign({}, SET.t1, { truth: G });
  const A1 = c.analyze(P, c.simulate(P, ST.rng(c.studySeed('g', 1)))), A2 = c.analyze(P, c.simulate(P, ST.rng(c.studySeed('g', 1))));
  assert.strictEqual(A1.stat, A2.stat); assert.strictEqual(A1.df, 9);
  const r1 = c.runStudies(P, ST.rng(c.runSeed('g', 1)), 1000), r2 = c.runStudies(P, ST.rng(c.runSeed('g', 1)), 1000);
  assert.deepStrictEqual(Array.from(r1.stat), Array.from(r2.stat));
  /* the same studies at a smaller alpha reject a subset */
  assert(c.tallyRun(r1, 'two', 0.01) <= c.tallyRun(r1, 'two', 0.05) && c.tallyRun(r1, 'two', 0.05) <= c.tallyRun(r1, 'two', 0.1));
  console.log('  opening study: t =', A1.stat.toFixed(3), 'p =', A1.p.toFixed(4), '; Type I at 0.10, 0.05, 0.01 in 1,000:', [0.1, 0.05, 0.01].map((a) => c.tallyRun(r1, 'two', a)).join(', '));
});
console.log(`${n} groups passed`);
