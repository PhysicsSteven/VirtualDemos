'use strict';
// Confidence Intervals (2026-11-19): the true values (pendulum period from g = 9.81, Malus's law), the book's intervals (z, t,
// proportion, plus four, with the book's 8.1 to 8.3 examples), capture rates over many simulated samples (95 % for z and t
// from a normal population, the exact undercoverage of z with s at small n, 90 and 99 %), widths 2zσ/√n, and repeatable streams.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('constants.js'), ctx, { timeout: 5000 });
vm.runInNewContext(readLib('vdstats.js'), ctx, { timeout: 5000 });
const core = readDemo('confidence-intervals').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { G_SITE, POPS, population, sampleRng, drawSample, interval, estimate, captures, coverage, knownWidth, zsCoverage, malus };', ctx, { timeout: 20000 });
const c = ctx.C, V = ctx.VDSTATS;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
const many = (pop, angle, nn, k, seed = 9) => { const P = c.population(pop, angle), r = c.sampleRng(seed, pop, angle, nn), s = []; for (let i = 0; i < k; i++) s.push(c.drawSample(P, nn, r)); return { P, s }; };

group('true values: T = 2π√(L/g) = 2.006 s with the site g; p = cos²θ', () => {
  assert.strictEqual(c.G_SITE, 9.81, 'g from constants.js');
  near(c.population('pendulum', 0).truth, 2 * Math.PI * Math.sqrt(1 / 9.81), 1e-15, 'period'); near(c.population('pendulum', 0).truth, 2.00607, 1e-5, 'period value');
  near(c.malus(60), 0.25, 1e-15, 'cos² 60°'); near(c.malus(0), 1, 0, 'cos² 0'); near(c.population('polar', 72).truth, Math.cos(72 * Math.PI / 180) ** 2, 1e-15, '72°');
});

group('the book\'s intervals: 8.1 z, 8.2 t, 8.3 proportion and plus four', () => {
  const z = c.interval({ sigma: 3 }, { mean: 68, n: 36 }, 'z', 0.90); near(z.lo, 67.1775, 1e-3, 'z 90 % (book 8.1: x̄ 68, σ 3, n 36)'); near(z.hi, 68.8225, 1e-3, 'z hi');
  const t = c.interval({}, { mean: 8.2267, s: 1.6722, n: 15 }, 't', 0.95); near(t.E, 0.926, 1e-3, 't EBM (book 8.2)');
  const zs = c.interval({}, { mean: 10, s: 2, n: 9 }, 'zs', 0.95); near(zs.E, 1.959964 * 2 / 3, 1e-5, 'z with s');
  const p = c.interval({}, { x: 421, n: 500 }, 'prop', 0.95); near(p.lo, 0.810, 1e-3, 'prop lo (book 8.3)'); near(p.hi, 0.874, 1e-3, 'prop hi');
  for (const [k, f, smp] of [['z', (q) => V.zInterval(5, 0.08, 7, q), { mean: 5, n: 7 }], ['t', (q) => V.tInterval(5, 0.3, 7, q), { mean: 5, s: 0.3, n: 7 }], ['prop', (q) => V.propInterval(9, 40, q), { x: 9, n: 40 }], ['plus4', (q) => V.plusFourInterval(9, 40, q), { x: 9, n: 40 }]])
    for (const q of [0.8, 0.9, 0.95, 0.99]) { const a = c.interval({ sigma: 0.08 }, smp, k, q), b = f(q); near(a.lo, b.lo, 1e-12, k + ' same as vdstats'); near(a.hi, b.hi, 1e-12, k + ' same as vdstats'); }
  const p4 = c.interval({}, { x: 6, n: 25 }, 'plus4', 0.95); near(p4.phat, 8 / 29, 1e-12, 'plus four p′'); near(p4.lo, 0.113, 1e-3, 'plus four lo'); near(p4.hi, 0.438, 1e-3, 'plus four hi');
});

group('capture rates over 20,000 samples of a normal population: z and t at 95 %, 90 % and 99 %; z with s undercovers exactly as P(|T| ≤ z)', () => {
  const se = (p) => Math.sqrt(p * (1 - p) / 20000) * 4;
  for (const nn of [4, 10, 30]) {
    const { P, s } = many('pendulum', 0, nn, 20000);
    for (const cl of [0.90, 0.95, 0.99]) {
      near(c.coverage(P, s, 'z', cl).rate, cl, se(cl), `z n=${nn} ${cl}`);
      near(c.coverage(P, s, 't', cl).rate, cl, se(cl), `t n=${nn} ${cl}`);
      const want = c.zsCoverage(nn, cl); near(c.coverage(P, s, 'zs', cl).rate, want, se(want), `z with s n=${nn} ${cl}`);
    }
    near(c.coverage(P, s, 'z', 0.95).meanWidth, c.knownWidth(P, nn, 0.95), 1e-12, 'z width is 2zσ/√n');
  }
  near(c.zsCoverage(4, 0.95), 0.8551, 0.0005, 'z with s at n = 4 catches about 85.5 %');
  near(c.knownWidth({ sigma: 0.08 }, 16, 0.95), 2 * 1.959964 * 0.02, 1e-5, 'width 2zσ/√n');
});

group('skewed decay times: t undercovers at n = 5 and recovers by n = 40', () => {
  const a = many('decay', 0, 5, 20000), b = many('decay', 0, 40, 20000);
  const ra = c.coverage(a.P, a.s, 't', 0.95).rate, rb = c.coverage(b.P, b.s, 't', 0.95).rate;
  assert(ra < 0.93, 'n = 5 undercovers: ' + ra); assert(rb > ra && Math.abs(rb - 0.95) < 0.02, 'n = 40 near 95 %: ' + rb);
});

group('proportions: the normal approximation at n = 50, p = 0.25 is near 95 %; at n = 15, p = 0.095 plus four does far better', () => {
  const a = many('polar', 60, 50, 20000); near(c.coverage(a.P, a.s, 'prop', 0.95).rate, 0.95, 0.025, 'normal approximation n = 50');
  const b = many('polar', 72, 15, 20000), r1 = c.coverage(b.P, b.s, 'prop', 0.95).rate, r4 = c.coverage(b.P, b.s, 'plus4', 0.95).rate;
  assert(r1 < 0.85, 'normal approximation undercovers: ' + r1); assert(Math.abs(r4 - 0.95) < Math.abs(r1 - 0.95), 'plus four closer: ' + r4);
  assert(b.s.every((x) => Number.isInteger(x.x) && x.x >= 0 && x.x <= 15), 'counts are whole');
});

group('streams repeat: the same draw set, population, angle and n give the same samples', () => {
  const a = many('pendulum', 60, 10, 50, 1).s, b = many('pendulum', 60, 10, 50, 1).s;
  assert.deepStrictEqual(a.map((x) => x.mean), b.map((x) => x.mean)); assert.notDeepStrictEqual(a.map((x) => x.mean), many('pendulum', 60, 10, 50, 2).s.map((x) => x.mean));
});
console.log(`${n} groups passed`);
