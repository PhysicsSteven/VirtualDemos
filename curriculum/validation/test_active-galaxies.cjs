'use strict';
// Active Galaxies and Quasars: the light crossing size limit (a flash and a switch on seen from a glowing ball), accretion power
// L = η ṁ c², the Eddington limit, the thin disk temperature with Wien's law, and apparent superluminal motion.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('active-galaxies', 'C,G,MP,SIGT,SIGMA,WIEN_B,AU,YR,LY,MSUN,LSUN,HOUR,DAY,ETA,flashShape,stepShape,spreadTime,maxSize,lum,eddington,rs,diskT,diskTmax,wienPeak,apparent,bestAngle,maxApparent');
let n = 0;
const rel = (a, b, tol, w) => assert(Math.abs(a / b - 1) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js', () => {
  assert.equal(c.C, VDC.c); assert.equal(c.G, VDC.G); assert.equal(c.MP, VDC.mp); assert.equal(c.SIGT, VDC.sigmaT); assert.equal(c.SIGMA, VDC.sigma);
  assert.equal(c.WIEN_B, VDC.wienB); assert.equal(c.AU, VDC.au); assert.equal(c.YR, VDC.yr); assert.equal(c.LY, VDC.ly); assert.equal(c.LSUN, VDC.Lsun); rel(c.MSUN, VDC.Msun, 1e-15);
});
group('size limit: a change in 1 hour means at most 1.08 × 10⁹ km = 7.21 AU (Ex25: 7.2 AU); a week 1,212 AU = 0.0192 ly', () => {
  rel(c.maxSize(c.HOUR) / 1000, 1.0793e9, 1e-4, 'km'); near(c.maxSize(c.HOUR) / c.AU, 7.214, 0.001, 'AU');
  near(c.maxSize(7 * c.DAY) / c.AU, 1212.0, 0.1, 'week AU'); near(c.maxSize(7 * c.DAY) / c.LY, 0.01916, 1e-4, 'week ly');
  rel(c.spreadTime(c.LY), c.YR, 1e-15, 'a light year ball spreads a flash over a year');
});
group('the flash: brightness ∝ the area of the slice now seen, zero before and after D/c, peak at D/2c, area under it = the volume', () => {
  const D = c.maxSize(c.HOUR), t = c.HOUR; near(c.flashShape(-1, D), 0, 0); near(c.flashShape(1.0001 * t, D), 0, 0); near(c.flashShape(t / 2, D), 1, 1e-12);
  let s = 0; const N = 20000; for (let i = 0; i < N; i++) s += c.flashShape((i + 0.5) / N * t, D) / N; near(s, 2 / 3, 1e-6, 'mean of 1 − x² over the ball = 2/3');
  near(c.stepShape(0, D), 0, 0); near(c.stepShape(t / 2, D), 0.5, 1e-12, 'half seen lit at D/2c'); near(c.stepShape(2 * t, D), 1, 1e-12);
  for (let i = 1; i < 50; i++) { const a = (i - 0.5) / 50 * t, b = (i + 0.5) / 50 * t; near((c.stepShape(b, D) - c.stepShape(a, D)) / (b - a) * t, 1.5 * c.flashShape(i / 50 * t, D), 3e-3, 'the step is the flash added up'); }
});
group('accretion: 1 M☉/yr at η = 0.10 gives 5.66 × 10³⁸ W = 1.48 × 10¹² L☉ (Ex26); fusion at 0.7% is 14 times less (Ex27); η for spin 0 and maximal spin', () => {
  rel(c.lum(1, 0.1), 5.663e38, 1e-3, 'L'); rel(c.lum(1, 0.1) / c.LSUN, 1.479e12, 1e-3, 'L☉'); near(c.ETA.ten / c.ETA.fusion, 14.29, 0.01, 'ratio');
  near(c.ETA.still, 0.0572, 1e-4, '1 − √(8/9)'); near(c.ETA.spin, 0.4226, 1e-4, '1 − 1/√3');
});
group('Eddington: 1.257 × 10³¹ W per M☉ (32,839 L☉); 10 M☉/yr onto 10⁸ M☉ is 4.50 times the limit', () => {
  rel(c.eddington(1), 1.25707e31, 1e-5, 'L_Edd'); near(c.eddington(1) / c.LSUN, 32839, 2, 'L☉'); near(c.lum(10, 0.1) / c.eddington(1e8), 4.505, 0.002, 'edd preset');
  near(c.lum(0.1, 0.1) / c.eddington(1e7), 0.4505, 0.0002, 'small preset at the same share');
});
group('the thin disk: r_s = 2.95 × 10⁸ km for 10⁸ M☉; peak T = 1.09 × 10⁵ K at 4.08 r_s; T ∝ M^(−1/4) at a fixed Eddington share; Wien', () => {
  rel(c.rs(1e8) / 1000, 2.9533e8, 1e-4, 'r_s'); const a = c.diskTmax(1e8, 1); rel(a.T, 1.09e5, 5e-3, 'T max'); near(a.r / c.rs(1e8), 4.083, 0.01, '49/36 r_in = 4.083 r_s');
  const b = c.diskTmax(1e7, 0.1); rel(b.T / a.T, Math.pow(10, 0.25), 1e-6, 'M^(−1/4)'); near(c.diskT(3 * c.rs(1e8), 1e8, 1), 0, 0, 'zero at the inner edge');
  near(c.wienPeak(1e8) * 1e9, 0.0290, 1e-4, 'Wien for 10⁸ K (Ex13)');
});
group('superluminal: v_app = β sin θ/(1 − β cos θ); M87 at 0.99 c and 17°: 5.43 c, light a year apart arrives 0.0533 yr apart; the best angle gives γβ = 7.02 c', () => {
  const th = 17 * Math.PI / 180; near(c.apparent(0.99, th), 5.435, 0.001, '17°'); near(1 - 0.99 * Math.cos(th), 0.0533, 1e-4, 'arrival spacing');
  near(c.bestAngle(0.99) * 180 / Math.PI, 8.11, 0.01, 'cos θ = β'); near(c.maxApparent(0.99), 7.018, 0.001, 'γβ'); near(c.apparent(0.99, c.bestAngle(0.99)), c.maxApparent(0.99), 1e-12);
  near(c.apparent(0.99, Math.PI / 2), 0.99, 1e-12, 'side on'); for (let t = 1; t < 90; t += 7) assert(c.apparent(0.99, t * Math.PI / 180) <= c.maxApparent(0.99) + 1e-12);
});
console.log(`all ${n} groups passed`);
