'use strict';
// One Way ANOVA: a group rescaled from its shape has exactly the sample mean and standard deviation set; F from VDSTATS.anova1
// equals n·gap²·Σ(j − c)²/(k − 1)/s² for equally spaced means and one spread (nd²/s² for k = 3); with H0 true the fraction of
// null studies above the critical F is near alpha, and the mean of the null F is near dfw/(dfw − 2); the two variances test
// gives F = s₁²/s₂² and its false alarm rate is near alpha for each tail.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdstats.js'), ctx, { timeout: 5000 });
const src = readDemo('anova').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(src + '\nglobalThis.R = { shape, groupOf, spacedMeans, fSpaced, nullAnovaF, nullVarF, critF, pOfF, hash };', ctx, { timeout: 60000 });
const c = ctx.R, ST = ctx.VDSTATS;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);

group('a group has exactly the mean and standard deviation set', () => {
  const z = c.shape(ST.rng(3), 8), g = c.groupOf(z, 2006, 6);
  near(ST.mean(g), 2006, 1e-9, 'mean'); near(ST.sd(g), 6, 1e-12, 'sd'); assert.strictEqual(g.length, 8);
});

group('F for equally spaced means: n·gap²·Σ(j − c)²/(k − 1)/s²; the opening setup gives 8·16/36', () => {
  for (const [k, nn, gap, s] of [[3, 8, 4, 6], [4, 6, 0.03, 0.05], [5, 10, 0.4, 0.8], [3, 5, 3, 4]]) {
    const ms = c.spacedMeans(k, 100, gap), gs = ms.map((m, j) => c.groupOf(c.shape(ST.rng(10 + j), nn), m, s));
    const a = ST.anova1(gs); near(a.F, c.fSpaced(k, nn, gap, s), 1e-9 * a.F + 1e-12, `k ${k}`);
    near(a.msw, s * s, 1e-9 * s * s, 'MS within is s²'); near(a.dfb, k - 1, 0, 'dfb'); near(a.dfw, k * nn - k, 0, 'dfw');
  }
  near(c.fSpaced(3, 8, 4, 6), 128 / 36, 1e-12, 'opening F 3.556');
  const a = ST.anova1(c.spacedMeans(3, 2006, 4).map((m, j) => c.groupOf(c.shape(ST.rng(j), 8), m, 6)));
  near(a.p, 1 - ST.dist.f(2, 21).cdf(128 / 36), 1e-12, 'opening p'); near(a.p, 0.0468, 5e-4, 'opening p value');
  near(c.fSpaced(3, 8, 0, 6), 0, 0, 'equal means');
});

group('null ANOVA studies: false alarm rate near alpha, mean F near dfw/(dfw − 2)', () => {
  const r = ST.rng(c.hash('null test')), M = 10000, F = Array.from({ length: M }, () => c.nullAnovaF(r, 3, 8));
  for (const a of [0.1, 0.05, 0.01]) { const cr = c.critF(2, 21, a, 'right')[1], f = F.filter((v) => v > cr).length / M; near(f, a, 4 * Math.sqrt(a * (1 - a) / M), `alpha ${a}`); }
  near(ST.mean(F), 21 / 19, 0.05, 'mean F');
  near(c.critF(2, 21, 0.05, 'right')[1], 3.4668, 1e-3, 'F crit table value (2, 21)');
  near(c.critF(4, 45, 0.05, 'right')[1], 2.5787, 1e-3, 'F crit (4, 45)');
});

group('two variances: F = s₁²/s₂², each tail rejects about alpha with H0 true', () => {
  const a = [1, 2, 3, 4, 5], b = [2, 2.5, 3, 3.5, 4], t = ST.fTest2(a, b, 'two');
  near(t.F, 2.5 / 0.625, 1e-12, 'F'); near(c.pOfF(t.F, 4, 4, 'two'), t.p, 1e-12, 'p');
  const r = ST.rng(5), M = 10000, F = Array.from({ length: M }, () => c.nullVarF(r, 10, 10));
  for (const tail of ['two', 'left', 'right']) {
    const [lo, hi] = c.critF(9, 9, 0.05, tail), f = F.filter((v) => v > hi || v < lo).length / M;
    near(f, 0.05, 4 * Math.sqrt(0.05 * 0.95 / M), `tail ${tail}`);
  }
  near(c.critF(9, 9, 0.05, 'right')[1], 3.1789, 1e-3, 'F crit (9, 9)');
});
console.log(`${n} groups passed`);
