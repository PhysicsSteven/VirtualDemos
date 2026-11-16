'use strict';
// CT Image Reconstruction: exact projections (the integral of p over s is μ × area, a disc's chord is 2√(a² − t²)), the Poisson
// sampler's mean and variance, filtered backprojection returning the phantom's CT numbers, simple backprojection of a wire
// following b = A/r, the point spread growing in proportion to the detector bin width, image noise falling as 1/√N₀, the
// sampling rule, and streaks from too few views.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('ct-reconstruction', 'FOV,MU_W,MU_BONE,MU_W_WIRE,WIRE_R,hu,muOf,phantom,muAt,ellProj,geometry,binS,rng,poisson,project,filterKernel,filterView,backproject,valueAt,fwhm,roiStats,viewsNeeded,windowAt,uniformMask,rmsError');
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); console.log('PASS', name); }
function recon(key, K, spanDeg, ds, win, N0, simple, seed) {
  const ph = c.phantom(key), g = c.geometry(K, spanDeg * Math.PI / 180, ds), ker = c.filterKernel(g.M, ds, win), r = c.rng(seed || 1), Q = [];
  for (let k = 0; k < K; k++) { const p = c.project(ph, g, k, N0 || 0, r); Q.push(simple ? p : Float64Array.from(c.filterView(p, ker))); }
  return { g, Q, ph };
}

group('Values: μ of water, bone and tungsten at 60 keV from NIST SRD 126; HU of water 0 and of air −1000', () => {
  near(c.MU_W, 0.2059, 1e-12); near(c.MU_BONE, 0.604416, 1e-9); near(c.MU_W_WIRE, 71.6609, 1e-9);
  close(c.hu(c.MU_W), 0, 1e-12); close(c.hu(0), -1000, 1e-12); close(c.hu(c.muOf(37)), 37, 1e-9);
});
group('Projections: a disc gives 2μ√(a² − t²); every view integrates to Σ μ × area; a bin reports the mean over its width', () => {
  const e = { x: 1, y: -2, A: 3, B: 3, al: 0, v: 0.5 };
  for (const th of [0, 0.7, 2]) { const off = Math.cos(th) - 2 * Math.sin(th); for (const t of [0, 1, 2.5]) near(c.ellProj(e, th, off + t, off + t), 2 * 0.5 * Math.sqrt(9 - t * t), 1e-12, 'chord'); }
  for (const key of ['head', 'water', 'res', 'wire']) {
    const ph = c.phantom(key), g = c.geometry(9, Math.PI, key === 'wire' ? 0.005 : 0.05); let area = 0; for (const q of ph) area += Math.PI * q.A * q.B * q.v;
    for (let k = 0; k < 9; k++) { const p = c.project(ph, g, k, 0); let s = 0; for (const v of p) s += v * g.ds; near(s, area, 1e-7, key + ' view ' + k); }
  }
  const g = c.geometry(1, Math.PI, 0.1), p = c.project([e], g, 0, 0), j = 140, s = c.binS(g, j); let m = 0; const n = 2000;
  for (let i = 0; i < n; i++) m += c.ellProj(e, 0, s - 0.05 + (i + 0.5) * 0.1 / n, s - 0.05 + (i + 0.5) * 0.1 / n) / n; near(p[j], m, 1e-6, 'bin mean');
  assert.strictEqual(g.M % 2, 1, 'the middle bin sits on the axis'); close(c.binS(g, (g.M - 1) / 2), 0, 1e-12);
});
group('Photon counts: Poisson mean and variance equal λ, below and above the PTRS switch at 30', () => {
  for (const lam of [2.5, 29, 31, 400, 1e5]) { const r = c.rng(11); let s = 0, s2 = 0; const n = 200000; for (let i = 0; i < n; i++) { const k = c.poisson(lam, r); s += k; s2 += k * k; }
    const m = s / n, v = s2 / n - m * m; close(m, lam, 5 * Math.sqrt(lam / n), 'mean ' + lam); near(v, lam, 0.03, 'variance ' + lam); }
});
group('Filtered backprojection gives the Shepp–Logan CT numbers (brain +20, ventricle 0, ellipse +30, skull +1000 HU)', () => {
  const R = recon('head', 360, 180, 0.1, 'ramp');
  for (const [x, y, h, tol] of [[0, -4.25, 20, 0.6], [2.2, 0, 0, 0.6], [0, 3.5, 30, 0.6], [-4.5, 4, 20, 0.6], [0, 8.95, 1000, 15]]) {
    close(c.hu(c.valueAt(R.Q, R.g, x, y)), h, tol, `(${x}, ${y})`); close(c.hu(c.muAt(R.ph, x, y)), h, 1e-9, 'truth'); }
  const R2 = recon('water', 360, 180, 0.1, 'hann'); close(c.hu(c.valueAt(R2.Q, R2.g, 0, 0)), 0, 0.5, 'water, Hann'); close(c.hu(c.valueAt(R2.Q, R2.g, -4.33, 2.5)), 10, 1, 'disc +10 HU');
});
group('Grid backprojection matches backprojection at points', () => {
  const R = recon('head', 60, 180, 0.2, 'ramp'), n = 16, img = new Float64Array(n * n), h = 1.6;
  for (let k = 0; k < 60; k++) c.backproject(img, n, -12.8, -12.8, h, R.Q[k], R.g, k, R.g.dth);
  for (const [r, i] of [[3, 4], [8, 8], [12, 2]]) near(img[r * n + i], c.valueAt(R.Q, R.g, -12.8 + (i + 0.5) * h, -12.8 + (n - r - 0.5) * h), 1e-9, `pixel ${r},${i}`);
});
group('Simple backprojection of the wire: b = A/r with A = μ π a² (0.02251 cm): within 4 % at points from 1 to 6 cm, within 1.5 % around a circle (720 views; farther out the 720 spokes spread apart)', () => {
  const R = recon('wire', 720, 180, 0.1, 'ramp', 0, true), A = c.MU_W_WIRE * Math.PI * c.WIRE_R ** 2; near(A, 0.022513, 1e-4);
  for (const r of [1, 2, 4, 6]) { near(c.valueAt(R.Q, R.g, r, 0), A / r, 0.04, 'r ' + r); near(c.valueAt(R.Q, R.g, 0, r), A / r, 0.04, 'up r ' + r);
    let m = 0; const n = 360; for (let i = 0; i < n; i++) m += c.valueAt(R.Q, R.g, r * Math.cos(2 * Math.PI * i / n), r * Math.sin(2 * Math.PI * i / n)) * r / n; near(m, A, 0.015, 'ring ' + r); }
});
group('Point spread: FWHM ∝ bin width (1.12 bins with the ramp, 1.87 with Hann); Hann wider than Shepp–Logan wider than ramp', () => {
  const w = {}; for (const f of ['ramp', 'shepp', 'hann']) for (const ds of [0.05, 0.1, 0.2]) { const R = recon('wire', 720, 180, ds, f); w[f + ds] = c.fwhm(R.Q, R.g, 0, 0); }
  for (const f of ['ramp', 'shepp', 'hann']) { near(w[f + 0.1], 2 * w[f + 0.05], 0.02, f + ' 2x'); near(w[f + 0.2], 2 * w[f + 0.1], 0.02, f + ' 2x again'); }
  close(w['ramp0.1'] / 0.1, 1.12, 0.02, 'ramp'); close(w['hann0.1'] / 0.1, 1.87, 0.02, 'hann'); assert(w['hann0.1'] > w['shepp0.1'] && w['shepp0.1'] > w['ramp0.1']);
});
group('Noise: the ROI standard deviation falls as 1/√N₀ (slope −0.5 on a log scale) and the mean stays at 0 HU', () => {
  const sd = []; const N = [1e4, 1e5, 1e6, 1e7];
  for (const n0 of N) { const R = recon('water', 180, 180, 0.1, 'ramp', n0, false, 3), s = c.roiStats(R.Q, R.g, 0, 0, 2); sd.push(1000 * s.sd / c.MU_W); close(c.hu(s.mean), 0, 4 * 1000 * s.sd / c.MU_W / Math.sqrt(s.n / 30), 'mean ' + n0); }
  const slope = (Math.log(sd[3]) - Math.log(sd[0])) / (Math.log(1e7) - Math.log(1e4)); close(slope, -0.5, 0.03, 'slope');
  const H = recon('water', 180, 180, 0.1, 'hann', 1e5, false, 3), R = recon('water', 180, 180, 0.1, 'ramp', 1e5, false, 3);
  assert(c.roiStats(H.Q, H.g, 0, 0, 2).sd < 0.7 * c.roiStats(R.Q, R.g, 0, 0, 2).sd, 'Hann is quieter than the ramp');
});
group('Sampling: the rule asks for (π/2) D/Δs views; far fewer views leave streaks, more than the rule leave almost none', () => {
  near(c.viewsNeeded(18.4, 0.1), 289.03, 1e-4);
  const U = c.uniformMask(c.phantom('head'), 128, -12.8, -12.8, 0.2), err = (K) => { const R = recon('head', K, 180, 0.1, 'ramp'), img = new Float64Array(128 * 128);
    for (let k = 0; k < K; k++) c.backproject(img, 128, -12.8, -12.8, 0.2, R.Q[k], R.g, k, R.g.dth); return c.rmsError(img, U); };
  const e18 = err(18), e90 = err(90), e360 = err(360); assert(e18 > 3 * e90 && e90 > 2 * e360, `errors ${e18}, ${e90}, ${e360}`); assert(e360 < 3, 'clean at 360 views: ' + e360);
});
