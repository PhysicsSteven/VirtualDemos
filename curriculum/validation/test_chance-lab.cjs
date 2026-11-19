'use strict';
// Chance Lab: the exact probabilities by counting outcomes match the book's (cards, dice, the candy cup, with and without
// replacement), the rules hold exactly, the distributions of X have the book's means and SDs (B(10, 0.25), the hypergeometric
// ten cards, B(3, 1/6) and the chuck-a-luck profit, the sum of two dice), the seeded trials repeat, and over many trials the
// relative frequencies and averages land within a few standard errors of the probabilities and expected values.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const c = (() => {
  const ctx = {};
  vm.runInNewContext(readLib('vdstats.js'), ctx, { timeout: 5000 });
  const src = readDemo('chance-lab').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
  vm.runInNewContext(src + '\nglobalThis.R = { config, EVENTS, XVARS, evById, xById, allowed, drawTrial, theory, frac, pdf, moments, profit, tally, addTrial, sampleStats, CAP };', ctx, { timeout: 20000 });
  ctx.R.VDSTATS = ctx.VDSTATS;
  return ctx.R;
})();
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const th = (cfg, a, b) => c.theory(cfg, c.evById(cfg, a), c.evById(cfg, b));

group('cards: first and second diamond, independent with replacement, 12/51 without', () => {
  const w = c.config({ kind: 'cards', n: 10, repl: true }), wo = c.config({ kind: 'cards', n: 10, repl: false });
  let t = th(w, 'd1', 'd2'); assert.strictEqual(t.N, 52 * 52); assert.deepStrictEqual(Array.from(c.frac(t.a, t.N)), [1, 4]);
  assert.deepStrictEqual(Array.from(c.frac(t.ab, t.a)), [1, 4]); assert.strictEqual(t.ab * t.N, t.a * t.b, 'independent');
  t = th(wo, 'd1', 'd2'); assert.strictEqual(t.N, 52 * 51); assert.deepStrictEqual(Array.from(c.frac(t.b, t.N)), [1, 4], 'P(second diamond) is still 1/4');
  assert.deepStrictEqual(Array.from(c.frac(t.ab, t.a)), [4, 17], 'P(B|A) = 12/51 = 4/17'); assert.notStrictEqual(t.ab * t.N, t.a * t.b);
});

group('one card: heart and face card independent (3/52); heart and diamond mutually exclusive', () => {
  const one = c.config({ kind: 'cards', n: 1, repl: true });
  const t = th(one, 'h1', 'f1'); assert.deepStrictEqual(Array.from(c.frac(t.ab, t.N)), [3, 52]); assert.strictEqual(t.ab * t.N, t.a * t.b);
  assert.strictEqual(th(one, 'h1', 'd1').ab, 0);
  assert.strictEqual(c.allowed(one, c.evById(one, 'd2')), false, 'a second card needs two draws');
});

group('two dice: 8 or more and doubles (15/36, 6/36, 3/36); 7 and doubles exclusive; 7 and first die 6 independent', () => {
  const d = c.config({ kind: 'dice', n: 2, bet: 6 });
  let t = th(d, 's8', 'dbl'); assert.strictEqual(t.N, 36); assert.strictEqual(t.a, 15); assert.strictEqual(t.b, 6); assert.strictEqual(t.ab, 3);
  // addition rule: P(A or B) by counting equals P(A) + P(B) − P(A and B)
  let either = 0; for (let i = 1; i <= 6; i++) for (let j = 1; j <= 6; j++) if (i + j >= 8 || i === j) either++;
  assert.strictEqual(either, t.a + t.b - t.ab);
  assert.strictEqual(th(d, 's7', 'dbl').ab, 0);
  t = th(d, 's7', 'm1'); assert.strictEqual(t.ab * t.N, t.a * t.b, 'sum 7 and first die 6 are independent');
});

group('candy cup: P(R1 and G2) = (12/40)(8/40) with replacement, (12/40)(8/39) without', () => {
  const w = c.config({ kind: 'cup', repl: true }), wo = c.config({ kind: 'cup', repl: false });
  assert.strictEqual(w.pop.length, 40); assert.strictEqual(w.n, 2);
  let t = th(w, 'R1', 'G2'); near(t.ab / t.N, 12 / 40 * 8 / 40, 1e-15, 'with'); near(t.ab / t.a, 8 / 40, 1e-15, 'P(G2|R1) with');
  t = th(wo, 'R1', 'G2'); near(t.ab / t.N, 12 / 40 * 8 / 39, 1e-15, 'without'); near(t.ab / t.a, 8 / 39, 1e-15, 'P(G2|R1) without');
  t = th(wo, 'noY', 'dbl'); near(t.a / t.N, 34 / 40 * 33 / 39, 1e-15, 'no yellows');
  near(t.b / t.N, [12, 8, 8, 6, 4, 2].reduce((s, k) => s + k * (k - 1), 0) / (40 * 39), 1e-15, 'doubles without');
});

group('distributions of X: the book\'s means and SDs', () => {
  let m = c.moments(c.pdf(c.config({ kind: 'cards', n: 10, repl: true }), c.xById(c.config({ kind: 'cards' }), 'diam')));
  near(m.mu, 2.5, 1e-12, 'B(10, .25) mean'); near(m.sd, Math.sqrt(10 * 0.25 * 0.75), 1e-12, 'B(10, .25) sd'); near(m.sd, 1.3693, 5e-5, '1.3693');
  m = c.moments(c.pdf(c.config({ kind: 'cards', n: 10, repl: false }), c.xById(c.config({ kind: 'cards' }), 'diam')));
  near(m.mu, 2.5, 1e-12, 'hypergeometric mean'); near(m.sd, Math.sqrt(2.5 * 0.75 * 42 / 51), 1e-12, 'hypergeometric sd'); near(m.sd, 1.2426, 5e-5, '1.2426');
  const d3 = c.config({ kind: 'dice', n: 3, bet: 6 }), P = c.pdf(d3, c.xById(d3, 'match'));
  near(P[0].p, 125 / 216, 1e-12, 'no match'); near(P[3].p, 1 / 216, 1e-12, 'three');
  m = c.moments(P); near(m.mu, 0.5, 1e-12, 'matches mean'); near(m.sd, Math.sqrt(3 * 5 / 36), 1e-12, 'matches sd');
  const y = c.moments(P, c.profit); near(y.mu, -17 / 216, 1e-12, 'chuck-a-luck expected profit'); near(y.mu, -0.0787, 5e-5, '-0.0787');
  const d2 = c.config({ kind: 'dice', n: 2 }), S2 = c.pdf(d2, c.xById(d2, 'sum'));
  assert.strictEqual(S2.length, 11); near(S2[5].p, 6 / 36, 1e-15, 'P(7)'); m = c.moments(S2); near(m.mu, 7, 1e-12, 'sum mean'); near(m.sd, Math.sqrt(35 / 6), 1e-12, 'sum sd');
  near(S2.reduce((s, r) => s + r.p, 0), 1, 1e-12, 'sums to 1');
});

group('seeded trials repeat; draws without replacement never repeat a card', () => {
  const wo = c.config({ kind: 'cards', n: 10, repl: false });
  const a = c.VDSTATS.rng(1), b = c.VDSTATS.rng(1);
  for (let i = 0; i < 200; i++) { const x = c.drawTrial(wo, a), y = c.drawTrial(wo, b); assert.deepStrictEqual(x, y); assert.strictEqual(new Set(x).size, 10); }
});

group('long run: relative frequencies and averages within 4 standard errors after 100,000 trials', () => {
  for (const [cfg, A, B, X] of [[c.config({ kind: 'cards', n: 10, repl: false }), 'd1', 'd2', 'diam'], [c.config({ kind: 'dice', n: 3, bet: 6 }), 'm1', 'any', 'match'], [c.config({ kind: 'cup', repl: false }), 'R1', 'G2', 'red']]) {
    const T = c.tally(), r = c.VDSTATS.rng(1), eA = c.evById(cfg, A), eB = c.evById(cfg, B), xv = c.xById(cfg, X), t = c.theory(cfg, eA, eB), P = c.pdf(cfg, xv), m = c.moments(P);
    for (let i = 0; i < c.CAP; i++) c.addTrial(T, cfg, eA, eB, xv, c.drawTrial(cfg, r));
    const pA = t.a / t.N, se = Math.sqrt(pA * (1 - pA) / T.n);
    near(T.a / T.n, pA, 4 * se, cfg.kind + ' rf A'); near(T.rfA[T.n - 1], T.a / T.n, 1e-6, 'series end');
    const s = c.sampleStats(T); near(s.mean, m.mu, 4 * m.sd / Math.sqrt(T.n), cfg.kind + ' mean'); near(s.sd, m.sd, 0.02, cfg.kind + ' sd');
    const pBA = t.ab / t.a; near(T.ab / T.a, pBA, 4 * Math.sqrt(pBA * (1 - pBA) / T.a), cfg.kind + ' B given A');
  }
});
console.log(`chance-lab: ${n} groups passed`);
