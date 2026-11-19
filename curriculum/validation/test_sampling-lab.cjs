'use strict';
// Sampling Lab (2026-11-19): the simulated hall of 400, the five sampling methods (sizes, strata, clusters, systematic steps,
// the convenience pool), repeatable streams, bias and spread of each method against the exact finite population values, the
// study (random assignment balances the lurking variable; self selection does not), and the central limit theorem: the spread
// of means and sums of n draws with replacement against σ/√n and √n σ, and the skew against γ/√n.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdstats.js'), ctx, { timeout: 5000 });
const core = readDemo('sampling-lab').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { N, NR, NC, SAMPLE_N, STRATA, CLUSTERS, CONV_POOL, METHODS, POPS, BY_DOOR, makePopulation, popStats, drawSample, methodRng, meanOf, summary, stratumOf, clusterOf, makeStudy, runStudy, studyRng, optIn, cltRng, cltSample, predict, within };', ctx, { timeout: 20000 });
const c = ctx.C, V = ctx.VDSTATS;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);

group('populations: 400 values each, rounded as stated, the same for the same draw set, μ and σ by the population formulas', () => {
  for (const pop of c.POPS) {
    const P = c.makePopulation(pop, 1), Q = c.makePopulation(pop, 1), R = c.makePopulation(pop, 2);
    assert.strictEqual(P.x.length, 400); assert.deepStrictEqual(Array.from(P.x), Array.from(Q.x)); assert.notDeepStrictEqual(Array.from(P.x), Array.from(R.x));
    for (const v of P.x) near(v, Math.round(v * 10 ** P.dec) / 10 ** P.dec, 1e-9, pop + ' rounding');
    const mu = P.x.reduce((s, v) => s + v, 0) / 400, sig = Math.sqrt(P.x.reduce((s, v) => s + (v - mu) ** 2, 0) / 400);
    near(P.mu, mu, 1e-9, pop + ' mu'); near(P.sigma, sig, 1e-9, pop + ' sigma');
  }
  const coins = c.makePopulation('coins', 1); assert(coins.x.every((v) => Number.isInteger(v) && v >= 0), 'cents are whole');
  assert(coins.skew > 0.5, 'pocket change is right skewed'); assert(c.makePopulation('react', 1).skew > 1, 'reaction times are right skewed');
  assert(Math.abs(c.makePopulation('arrive', 1).skew) < 0.3, 'arrival seconds are nearly symmetric');
  const a = c.makePopulation('arrive', 1); assert(a.min >= 0 && a.max <= 60, 'uniform on 0 to 60');
});

group('the five methods: 20 distinct seats each, 5 per section, two whole blocks, every 20th seat, the 50 nearest the door', () => {
  const r = c.methodRng(1, 'coins', 'srs');
  for (let k = 0; k < 200; k++) {
    for (const m of c.METHODS) {
      const s = c.drawSample(m, r).seats; assert.strictEqual(s.length, 20, m); assert.strictEqual(new Set(s).size, 20, m + ' distinct');
      assert(s.every((i) => i >= 0 && i < 400), m + ' in the hall');
    }
    const st = c.drawSample('strat', r).seats, per = [0, 0, 0, 0]; for (const i of st) per[c.stratumOf(i)]++; assert.deepStrictEqual(per, [5, 5, 5, 5]);
    const cl = c.drawSample('cluster', r), blocks = new Set(cl.seats.map(c.clusterOf)); assert.strictEqual(blocks.size, 2, 'two blocks'); assert.deepStrictEqual([...blocks].sort((p, q) => p - q), Array.from(cl.clusters).sort((p, q) => p - q));
    const sy = c.drawSample('sys', r); assert(sy.start >= 0 && sy.start < 20); sy.seats.forEach((i, j) => assert.strictEqual(i, sy.start + 20 * j));
    const pool = new Set(Array.from(c.BY_DOOR).slice(0, 50)); assert(c.drawSample('conv', r).seats.every((i) => pool.has(i)), 'convenience from the 50 by the door');
  }
});

group('each method has its own stream: its 100th sample is the same whatever was drawn before', () => {
  const a = c.methodRng(1, 'coins', 'srs'); let x; for (let k = 0; k < 100; k++) x = c.drawSample('srs', a).seats;
  const other = c.methodRng(1, 'coins', 'conv'); for (let k = 0; k < 37; k++) c.drawSample('conv', other);
  const b = c.methodRng(1, 'coins', 'srs'); let y; for (let k = 0; k < 100; k++) y = c.drawSample('srs', b).seats;
  assert.deepStrictEqual(Array.from(x), Array.from(y));
});

group('bias and spread over 4,000 samples: simple random against the exact finite population standard error; stratified tighter, cluster wider, convenience biased', () => {
  for (const pop of ['coins', 'react']) {
    const P = c.makePopulation(pop, 1), res = {};
    for (const m of c.METHODS) { const r = c.methodRng(5, pop, m), e = []; for (let k = 0; k < 4000; k++) e.push(c.meanOf(P, c.drawSample(m, r).seats)); res[m] = c.summary(e, P.mu); }
    const se = P.sigma / Math.sqrt(20) * Math.sqrt((400 - 20) / (400 - 1));   /* without replacement from N = 400 */
    near(res.srs.sd, se, 0.04 * se, pop + ' SRS spread against σ/√n·√((N − n)/(N − 1))');
    near(res.srs.bias, 0, 4 * se / Math.sqrt(4000), pop + ' SRS unbiased');
    near(res.strat.bias, 0, 4 * res.strat.sd / Math.sqrt(4000), pop + ' stratified unbiased');
    near(res.cluster.bias, 0, 4 * res.cluster.sd / Math.sqrt(4000), pop + ' cluster unbiased');
    assert(res.strat.sd < res.srs.sd, pop + ' stratified tighter'); assert(res.cluster.sd > 1.3 * res.srs.sd, pop + ' cluster wider');
    assert(res.conv.bias > 0.5 * P.sigma, pop + ' convenience biased up by more than σ/2: ' + res.conv.bias);
  }
});

group('the study: random assignment is 200 and 200 and centers on the true effect; self selection is biased by study hours', () => {
  const St = c.makeStudy(1);
  for (const effect of [0, 4]) {
    const rr = c.studyRng(1, 'random'), rs = c.studyRng(1, 'self'), dr = [], ds = [], hr = [], hs = [];
    for (let k = 0; k < 400; k++) {
      const a = c.runStudy(St, 'random', effect, rr); assert.strictEqual(a.nt, 200); dr.push(a.diff); hr.push(a.hoursT - a.hoursC);
      const b = c.runStudy(St, 'self', effect, rs); ds.push(b.diff); hs.push(b.hoursT - b.hoursC);
    }
    const R = c.summary(dr, effect); near(R.bias, 0, 4 * R.sd / 20, 'randomized centers on the effect ' + effect);
    near(V.mean(hr), 0, 4 * V.sd(hr) / 20, 'randomized balances study hours');
    assert(V.mean(ds) - effect > 10, 'self selected shows a false gain of more than 10 points'); assert(V.mean(hs) > 4, 'the volunteers study more hours');
  }
  /* the same stream with a different effect: every difference moves by exactly the effect */
  const a = c.runStudy(St, 'self', 0, c.studyRng(1, 'self')), b = c.runStudy(St, 'self', 7, c.studyRng(1, 'self'));
  near(b.diff - a.diff, 7, 1e-9, 'difference shifts by the effect');
  near(c.optIn(6), 0.5, 1e-12, 'half join at 6 hours');
});

group('central limit theorem: 20,000 samples with replacement; spread σ/√n and √n σ, center μ and nμ, skew γ/√n, 95.4 % within 2 SE', () => {
  for (const pop of ['react', 'coins', 'arrive']) {
    const P = c.makePopulation(pop, 1);
    for (const nn of [1, 4, 10, 30]) {
      const r = c.cltRng(1, pop, nn), m = [], s = []; for (let k = 0; k < 20000; k++) { const x = c.cltSample(P, nn, r); m.push(x.mean); s.push(x.sum); near(x.sum, x.mean * nn, 1e-9, 'sum = n x̄'); }
      const pr = c.predict(P, nn);
      near(V.sd(m), pr.sdMean, 0.025 * pr.sdMean, `${pop} n=${nn} σ/√n`); near(V.sd(s), pr.sdSum, 0.025 * pr.sdSum, `${pop} n=${nn} √n σ`);
      near(V.mean(m), P.mu, 4 * pr.sdMean / Math.sqrt(20000), `${pop} n=${nn} μ`); near(V.mean(s), nn * P.mu, 4 * pr.sdSum / Math.sqrt(20000), `${pop} n=${nn} nμ`);
      near(V.skew(m), pr.skewMean, 0.12 + 0.1 * Math.abs(pr.skewMean), `${pop} n=${nn} skew γ/√n`);
      if (nn === 30) near(c.within(m, P.mu, pr.sdMean, 2), 0.9545, 0.012, `${pop} within 2 SE at n = 30`);
    }
  }
  near(c.predict({ mu: 3, sigma: 2, skew: 1.5 }, 9).sdMean, 2 / 3, 1e-15, 'σ/√n'); near(c.predict({ mu: 3, sigma: 2, skew: 1.5 }, 9).sdSum, 6, 1e-15, '√n σ');
});
console.log(`${n} groups passed`);
