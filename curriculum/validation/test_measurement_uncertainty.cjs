'use strict';
// Measurement Uncertainty: the exact period against a series in θ₀ and the small angle limit, the bob's bottom offset, the
// seeded draws (repeatable, mean near zero, spread 0.05 s per press), rounding to the timer's digit, the statistics and the
// least squares fit (exact line, standard errors against a hand worked case), and the propagated uncertainty in g.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('measurement-uncertainty', 'G_EARTH,BOB_D,PRESS_SIGMA,L_RES,TIMERS,agm,periodSmall,periodExact,trueLength,mulberry32,gauss,roundTo,periodDecimals,timeSwings,stats,linfit,gFromPeriod,gUncertainty,periodUncertainty,rk4');
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); console.log('PASS', name); }
const D = Math.PI / 180;

group('Exact period: the small angle limit, the series 1 + θ²/16 + 11θ⁴/3072, 40° is 3.13 % longer, 90° is 1.18034 T₀', () => {
  near(c.periodExact(1, 9.81, 1e-6), c.periodSmall(1, 9.81), 1e-12, 'limit');
  const th = 10 * D; near(c.periodExact(1, 9.81, th) / c.periodSmall(1, 9.81), 1 + th * th / 16 + 11 * th ** 4 / 3072, 1e-7, 'series at 10°');
  near(c.periodExact(1, 9.81, 40 * D) / c.periodSmall(1, 9.81), 1.031341, 1e-6, '40°');
  near(c.periodExact(1, 9.81, 90 * D) / c.periodSmall(1, 9.81), 1.18034, 1e-5, '90°');
  near(c.periodSmall(1, 9.81), 2.006067, 1e-6, '2π√(1/9.81)');
});
group('Length read to the bottom of the bob is too long by the radius, 3.0 cm', () => {
  near(c.trueLength(1, 'bottom'), 0.97, 1e-12); assert.strictEqual(c.trueLength(1, 'center'), 1); assert.strictEqual(c.BOB_D, 0.06);
});
group('Draws: the same seed gives the same timings; press errors have mean 0 and standard deviation 0.05 s; the photogate has none', () => {
  const o = { L: 1, th0: 5, mark: 'center', timer: 'hand', N: 10, g: 9.81 };
  const a = c.mulberry32(7), b = c.mulberry32(7); for (let i = 0; i < 5; i++) assert.strictEqual(c.timeSwings(o, a).t, c.timeSwings(o, b).t);
  const r = c.mulberry32(1), es = []; for (let i = 0; i < 40000; i++) es.push(c.PRESS_SIGMA * c.gauss(r));
  const st = c.stats(es); assert(Math.abs(st.mean) < 0.001, 'mean ' + st.mean); near(st.s, 0.05, 0.02, 'spread');
  const g = c.timeSwings(Object.assign({}, o, { timer: 'gate' }), c.mulberry32(3)); near(g.t, Math.round(g.tTrue * 1000) / 1000, 1e-12, 'gate rounds only');
  const h = c.timeSwings(o, c.mulberry32(3)); near(h.t * 100, Math.round(h.t * 100), 1e-9, 'hand reads to 0.01 s');
});
group('Timing N swings: the spread of t is the same for every N, so the spread of T = t/N falls as 1/N', () => {
  const sp = (N) => { const r = c.mulberry32(11), Ts = []; for (let i = 0; i < 4000; i++) Ts.push(c.timeSwings({ L: 1, th0: 5, mark: 'center', timer: 'hand', N, g: 9.81 }, r).T); return c.stats(Ts).s; };
  near(sp(1), 0.05 * Math.SQRT2, 0.05, 'N = 1'); near(sp(10), 0.005 * Math.SQRT2, 0.06, 'N = 10');
});
group('Statistics and the fit: s with n − 1, s/√n; an exact line is recovered; standard errors match a hand worked case', () => {
  const st = c.stats([2, 4, 4, 4, 5, 5, 7, 9]); near(st.mean, 5, 1e-12); near(st.s, Math.sqrt(32 / 7), 1e-12); near(st.se, Math.sqrt(32 / 7) / Math.sqrt(8), 1e-12);
  const xs = [0.4, 0.6, 0.8, 1.0], ys = xs.map((x) => 4.0243 * x - 0.12); const f = c.linfit(xs, ys); near(f.m, 4.0243, 1e-12); near(f.b, -0.12, 1e-10); near(f.xint, 0.12 / 4.0243, 1e-10);
  const g = c.linfit([1, 2, 3, 4], [2, 4, 5, 8]); near(g.m, 1.9, 1e-12); near(g.b, 0, 1e-9, 'b'); near(g.sm, Math.sqrt(0.7 / 2 / 5), 1e-12, 'sm'); near(g.sb, Math.sqrt(0.35 * (1 / 4 + 6.25 / 5)), 1e-12, 'sb');
});
group('g from one length and its propagated uncertainty; the reading offset gives a T² = 0 crossing at +3.0 cm and leaves the slope alone', () => {
  near(c.gFromPeriod(1, c.periodSmall(1, 9.81)), 9.81, 1e-12);
  near(c.gUncertainty(1, 0.0005, 2, 0.002), c.gFromPeriod(1, 2) * Math.sqrt(0.0005 ** 2 + 0.002 ** 2), 1e-12);
  const xs = [0.4, 0.6, 0.8, 1.0, 1.2, 1.4, 1.6], ys = xs.map((x) => c.periodSmall(c.trueLength(x, 'bottom'), 9.81) ** 2), f = c.linfit(xs, ys);
  near(4 * Math.PI * Math.PI / f.m, 9.81, 1e-9, 'slope gives g'); near(f.xint, 0.03, 1e-9, 'offset');
  assert.strictEqual(c.periodUncertainty({ n: 10, se: 0 }, 'gate', 1), 0.0005); assert.strictEqual(c.periodUncertainty({ n: 10, se: 0.01 }, 'hand', 10), 0.01);
  assert.strictEqual(c.periodDecimals('hand', 1), 2); assert.strictEqual(c.periodDecimals('hand', 10), 3); assert.strictEqual(c.periodDecimals('gate', 20), 5);
});
/* Many timings (2026-11-19): the histogram and normal check on the statistics library, and the separate random stream */
const vm = require('node:vm'), { readLib } = require('./demo_source.cjs');
const ST = (() => { const d = {}; vm.runInNewContext(readLib('vdstats.js') + ';globalThis.M = VDSTATS;', d, { timeout: 5000 }); return d.M; })();
const h = core('measurement-uncertainty', 'normalCheck,gridHistogram,timeSwings,mulberry32,gFromPeriod,stats');
group('Many timings: a normal sample has about 68.3 % within ±s and 95.4 % within ±2s, a straight quantile plot, and the shares are counted exactly', () => {
  const r = ST.rng(11), xs = []; for (let i = 0; i < 20000; i++) xs.push(2 + 0.07 * r.normal());
  const m = h.normalCheck(xs, ST); near(m.P1, 0.682689, 1e-5, 'P1'); near(m.P2, 0.954500, 1e-5, 'P2');
  near(m.in1 / m.n, 0.6827, 0.02, 'in1'); near(m.in2 / m.n, 0.9545, 0.005, 'in2'); assert(m.r > 0.999, 'quantile plot r ' + m.r);
  const k = h.normalCheck([1, 2, 3, 4, 5], ST); assert.strictEqual(k.in1, 3); assert.strictEqual(k.in2, 5);   /* s = 1.581: 2, 3, 4 within ±s */
  near(k.q[0][0], ST.dist.normal().inv(0.1), 1e-12, 'first normal score Φ⁻¹(0.5/5)'); assert(Math.abs(k.q[2][0]) < 1e-9, 'middle score'); near(k.r, 0.997171, 1e-5, 'r for 1..5 (Python statistics.correlation)');
  const u = []; for (let i = 0; i < 4000; i++) u.push(r()); assert(h.normalCheck(u, ST).r < h.normalCheck(xs.slice(0, 4000), ST).r, 'a uniform sample bends the plot more');
});
group('Many timings: grid histogram bins hold every value once, edges halfway between timer readings', () => {
  const xs = [2.00, 2.01, 2.01, 2.13, 1.87, 2.05]; const b = h.gridHistogram(xs, 0.01, 30);
  assert.strictEqual(b.counts.reduce((a, c) => a + c, 0), xs.length); near(b.width, 0.01, 1e-12); near(b.edges[0], 1.865, 1e-9, 'first edge');
  const b5 = h.gridHistogram(xs, 0.01, 10); near(b5.width, 0.05, 1e-12, 'k = 5'); assert.strictEqual(b5.counts.reduce((a, c) => a + c, 0), xs.length);
  for (const x of xs) { const j = b5.counts.findIndex((_, i) => x > b5.edges[i] && x < b5.edges[i + 1]); assert(j >= 0, 'inside a bin ' + x); }
});
group('Many timings: 100 hand timings of one swing scatter with s = √2 × 0.05 s, and the mean of g from each timing sits above 4π²L/T̄² by 3s²/T̄²', () => {
  const o = { L: 1, th0: 5, mark: 'center', timer: 'hand', N: 1, g: 9.81 }, rr = ST.rng(0x5EED0001), Ts = [];
  for (let i = 0; i < 20000; i++) Ts.push(h.timeSwings(o, rr).T);
  const st = h.stats(Ts); near(st.s, Math.sqrt(2 * 0.05 ** 2 + 0.01 ** 2 / 12), 0.03, 's'); near(st.mean, c.periodExact(1, 9.81, 5 * D), 1.5e-3, 'mean (6 standard errors)');
  /* g = 4π²L/T² is not linear in T: the mean of the g of each timing sits above 4π²L/T̄² by about 3 s²/T̄² (0.37 % here) */
  const gs = h.stats(Ts.map((T) => h.gFromPeriod(1, T))); near(gs.mean, h.gFromPeriod(1, st.mean) * (1 + 3 * st.s ** 2 / st.mean ** 2), 1e-3, 'mean g');
  /* the separate stream: draw set 1's own generator gives the same first timing whether or not the 100 were made */
  const a = h.timeSwings(o, h.mulberry32(1)).t, rm = ST.rng(0x5EED0001); for (let i = 0; i < 100; i++) h.timeSwings(o, rm); assert.strictEqual(h.timeSwings(o, h.mulberry32(1)).t, a);
});
group('The motion for the picture keeps the exact period: θ returns to θ₀ after one period at 40°', () => {
  const T = c.periodExact(1, 9.81, 40 * D); let y = [40 * D, 0]; const n = Math.round(T / 0.001), h = T / n; for (let i = 0; i < n; i++) y = c.rk4(y, h, 9.81);
  near(y[0], 40 * D, 1e-8, 'angle'); assert(Math.abs(y[1]) < 1e-7, 'speed');
});
