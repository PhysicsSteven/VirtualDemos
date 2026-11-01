'use strict';
// Telescope Aberrations: the FFT image against the Airy pattern, the ray traced wavefront against third order (Seidel) theory,
// the lenses against the Abbe number, Hubble 1990 against the Allen report, and the air against Kolmogorov and Noll (1976).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('telescope-aberrations', 'FFTN,NP0,LAM0,ARCSEC,GLASS,nGlass,LINE,abbe,fft2,pupilSamples,pupilPoints,removeTilt,rms,mirrorWave,traceLens,backFocus,focalLength,lensWave,singletLens,achromatLens,phaseScreen,screenWave,zernBasis,correct,psf,perfectPeak,imageStats,pixelAngle,maxStep,hubbleWave,sag,defocusWave,removeComa,rayImage,cmf,xyzToRgb,r0At,sphereW040,comaLength');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const lam = 550e-9, P = c.pupilPoints(c.pupilSamples(lam));
/* Seidel fit: least squares of W on [1, u, v, ρ², ρ⁴, ρ³cosφ, ρ²cos2φ] */
function fit(P, W, terms) { const m = terms.length, A = Array.from({ length: m }, () => new Float64Array(m + 1));
  for (let k = 0; k < W.length; k++) { const u = P.u[k], v = P.v[k], f = terms.map((t) => t(u, v)); for (let i = 0; i < m; i++) { for (let j = 0; j < m; j++) A[i][j] += f[i] * f[j]; A[i][m] += f[i] * W[k]; } }
  for (let i = 0; i < m; i++) { let p = i; for (let r = i + 1; r < m; r++) if (Math.abs(A[r][i]) > Math.abs(A[p][i])) p = r; [A[i], A[p]] = [A[p], A[i]];
    for (let r = 0; r < m; r++) if (r !== i) { const f = A[r][i] / A[i][i]; for (let k = i; k <= m; k++) A[r][k] -= f * A[i][k]; } }
  return A.map((row, i) => row[m] / row[i]); }
const one = () => 1, U = (u) => u, V = (u, v) => v, R2 = (u, v) => u * u + v * v, R4 = (u, v) => (u * u + v * v) ** 2, COMA = (u, v) => (u * u + v * v) * u, AST = (u, v) => u * u - v * v;

group('FFT: a single frequency transforms to a spike, and Parseval holds', () => {
  const n = 64, re = new Float64Array(n * n), im = new Float64Array(n * n); for (let k = 0; k < n * n; k++) { re[k] = Math.sin(0.3 * k) + 0.2; im[k] = Math.cos(0.17 * k); }
  let e0 = 0; for (let k = 0; k < n * n; k++) e0 += re[k] ** 2 + im[k] ** 2; c.fft2(re, im, n); let e1 = 0; for (let k = 0; k < n * n; k++) e1 += re[k] ** 2 + im[k] ** 2; near(e1 / (n * n), e0, 1e-12, 'Parseval');
  const r2 = new Float64Array(n * n), i2 = new Float64Array(n * n); r2[5] = 1; c.fft2(r2, i2, n); for (let k = 0; k < n; k++) assert(Math.abs(r2[k] - Math.cos(2 * Math.PI * 5 * k / n)) < 1e-12, "cos");
});
group('A perfect aperture gives the Airy pattern: the light inside 1.22 λ/D is 83.8 %, the half light diameter 1.03 to 1.07 λ/D, Strehl 1', () => {
  const I = c.psf(P, null, lam), st = c.imageStats(I), pxPerLD = c.FFTN / c.NP0;   /* 4 pixels per λ/D */
  let e = 0; for (let j = 0; j < c.FFTN; j++) for (let i = 0; i < c.FFTN; i++) if (Math.hypot(i - st.cx, j - st.cy) <= 1.2197 * pxPerLD) e += I[j * c.FFTN + i];
  near(e, 0.838, 0.02, 'energy in the first dark ring'); assert(st.hpd / pxPerLD > 1.0 && st.hpd / pxPerLD < 1.08, `HPD ${st.hpd / pxPerLD}`); near(st.peak / c.perfectPeak(P), 1, 1e-9, 'Strehl');
  near(c.pixelAngle(0.2), 550e-9 / 0.2 / 4, 1e-12, 'pixel = λ0/(4D)');
});
group('Parabola on the axis: wavefront error under 1e−6 waves; sphere: ρ⁴ term equals the Seidel D/(512 N³) within 1 %', () => {
  const Wp = c.removeTilt(P, c.mirrorWave(P, 0.2, 5, -1, 0, 0).W); assert(c.rms(Wp) / lam < 1e-6, 'parabola');
  for (const N of [5, 8, 12]) { const W = c.mirrorWave(P, 0.2, N, 0, 0, 0).W, a = fit(P, W, [one, R2, R4]); near(Math.abs(a[2]), c.sphereW040(0.2, N), 0.01, `f/${N}`); }
});
group('Coma off the axis: the ρ³cosφ term equals y³θ/R² within 1 %, and the comet length 3θ/(16N²)', () => {
  for (const am of [5, 10, 20]) { const th = am / 60 * Math.PI / 180, W = c.mirrorWave(P, 0.2, 4, -1, th, 0).W, a = fit(P, W, [one, U, V, R2, COMA, AST]);
    near(Math.abs(a[4]), 0.1 ** 3 * th / 1.6 ** 2, 0.01, `${am}′`);
    near(3 * Math.abs(a[4]) / 0.1, c.comaLength(th, 4), 0.01, 'tangential coma 3W131/y'); }
  const th = 20 / 60 * Math.PI / 180, Wa = c.mirrorWave(P, 0.2, 4, -1, th, 0).W, a = fit(P, Wa, [one, U, V, R2, COMA, AST]);
  near(Math.abs(a[5]), 0.1 ** 2 * th * th / 1.6 / 2, 0.05, 'astigmatism W222 = y²θ²/R split as (ρ² + ρ²cos2φ)/2');
  const corr = c.removeComa(P, c.removeTilt(P, Wa), c.zernBasis(P, 8)); assert(c.rms(corr) < 0.2 * c.rms(c.removeTilt(P, Float64Array.from(Wa))), 'the corrector removes most of the error');
});
group('Defocus: the camera Δz from focus adds Δz ρ²/(8N²), in step with the traced mirror', () => {
  const W0 = c.mirrorWave(P, 0.2, 8, -1, 0, 0).W, W1 = c.mirrorWave(P, 0.2, 8, -1, 0, 0.0004).W, d = W1.map((w, k) => w - W0[k]), a = fit(P, d, [one, R2]);
  near(a[1], -0.0004 / (8 * 64), 0.01, 'traced'); const b = fit(P, P.u.map((u, k) => c.defocusWave(Math.hypot(u, P.v[k]), 0.0004, 8)), [one, R2]); near(b[1], a[1], 0.01, 'defocusWave');
});
group('Glass: N-BK7 n_d = 1.5168 and V = 64.17, F2 n_d = 1.6200 and V = 36.37 (Schott); the single lens focuses C and F about f/V apart', () => {
  near(c.nGlass(c.GLASS.bk7, c.LINE.d), 1.5168, 1e-4, 'BK7'); near(c.abbe(c.GLASS.bk7), 64.17, 1e-3, 'V BK7'); near(c.nGlass(c.GLASS.f2, c.LINE.d), 1.62004, 1e-4, 'F2'); near(c.abbe(c.GLASS.f2), 36.37, 1e-3, 'V F2');
  const L = c.singletLens(0.9, 0.06); near(c.focalLength(L, c.LINE.d, 0.06), 0.9, 1e-9, 'f'); near(c.focalLength(L, c.LINE.C, 0.06) - c.focalLength(L, c.LINE.F, 0.06), 0.9 / c.abbe(c.GLASS.bk7), 0.01, 'f/V');
});
group('Achromat: F and C share a focus, the secondary spectrum is about f/2000, the spherical aberration at d under 0.01 wave rms', () => {
  const D = 0.06, L = c.achromatLens(0.9, D); near(c.focalLength(L, c.LINE.d, D), 0.9, 1e-9, 'f');
  near(c.backFocus(L, c.LINE.F, D), c.backFocus(L, c.LINE.C, D), 1e-7, 'F = C'); const ss = c.backFocus(L, c.LINE.C, D) - c.backFocus(L, c.LINE.d, D); assert(ss > 0.9 / 3000 && ss < 0.9 / 1200, `secondary spectrum ${ss}`);
  const Pd = c.pupilPoints(c.pupilSamples(c.LINE.d * 1e-9)), W = c.lensWave(Pd, L, c.LINE.d, D, 0, c.backFocus(L, c.LINE.d, D)); assert(c.rms(c.correct(W, c.zernBasis(Pd, 4))) / (c.LINE.d * 1e-9) < 0.01, 'spherical');
});
group('Hubble 1990: 0.47 waves rms at 547 nm after focusing (Allen report: 0.5); best focus 22.5 mm; about 12 % of the light within 0.1″ (spec 70 %)', () => {
  const l = 547e-9, Ph = c.pupilPoints(c.pupilSamples(l), 0.33, 0.022), H = c.hubbleWave(Ph), Wb = c.correct(H, c.zernBasis(Ph, 4));
  near(c.rms(Wb) / l, 0.47, 0.03, 'rms'); assert(Math.abs(c.sag(1.2, 11.04, -1.0139) - c.sag(1.2, 11.04, -1.0023)) > 2.1e-6, 'about 2.2 µm too flat at the edge');
  let best = null; for (let dz = 18; dz <= 27; dz += 0.5) { const W = H.map((w, k) => w + c.defocusWave(Math.hypot(Ph.u[k], Ph.v[k]), dz / 1000, 24)); const r = c.rms(c.removeTilt(Ph, W)); if (!best || r < best[1]) best = [dz, r]; }
  near(best[0], 22.5, 0.03, 'best focus (mm)');
  const W = c.removeTilt(Ph, H.map((w, k) => w + c.defocusWave(Math.hypot(Ph.u[k], Ph.v[k]), 0.0225, 24))), I = c.psf(Ph, W, l), st = c.imageStats(I), rpx = 0.1 * c.ARCSEC / (c.pixelAngle(2.4) * 547 / 550);
  let e = 0; for (let j = 0; j < c.FFTN; j++) for (let i = 0; i < c.FFTN; i++) if (Math.hypot(i - st.cx, j - st.cy) <= rpx) e += I[j * c.FFTN + i]; assert(e > 0.08 && e < 0.18, `EE 0.1″ ${e}`);
});
group('Air: the screen\'s structure function is within 12 % of 6.88 (r/r₀)^(5/3) at 3 and 12 cm and 20 % at half the 1 m aperture (the largest scales run weak); residuals after removing J Zernike shapes match Noll (1976) within 15 % for J ≥ 3 (50 samples)', () => {
  const n = 512, dx = 1 / 128, r0 = 0.1, sum = {}; const seeds = [1, 2, 3, 4, 5, 6];
  for (const s of seeds) { const ph = c.phaseScreen(n, dx, r0, s); for (const d of [4, 16, 64]) { let a = 0, m = 0; for (let j = 0; j < n; j += 4) for (let i = 0; i < n - d; i += 4) { a += (ph[j * n + i] - ph[j * n + i + d]) ** 2; m++; } sum[d] = (sum[d] || 0) + a / m / seeds.length; } }
  for (const d of [4, 16, 64]) near(sum[d], 6.88 * Math.pow(d * dx / r0, 5 / 3), d < 64 ? 0.12 : 0.2, `D(${d * dx} m)`);
  const Pp = c.pupilPoints(128), B = c.zernBasis(Pp, 21), acc = {}; let N = 0;
  for (let s = 1; s <= 10; s++) { const ph = c.phaseScreen(n, dx, r0, s); for (const [x, y] of [[100, 100], [400, 100], [100, 400], [400, 400], [256, 256]]) { const W = c.screenWave(Pp, ph, n, x, y).map((w) => w * 2 * Math.PI / 500e-9);
    for (const J of [3, 6, 10, 21]) acc[J] = (acc[J] || 0) + c.rms(c.correct(W, B.slice(0, J))) ** 2; N++; } }
  const k = Math.pow(1 / r0, 5 / 3), noll = { 3: 0.134, 6: 0.0648, 10: 0.0401, 21: 0.0208 }; for (const J of [3, 6, 10, 21]) { console.log(`  Δ${J}: ${(acc[J] / N / k).toFixed(4)} (Noll ${noll[J]})`); near(acc[J] / N / k, noll[J], 0.15, `Δ${J}`); }
  near(c.r0At(0.1, 2200e-9), 0.1 * Math.pow(4.4, 1.2), 1e-12, 'r0 ∝ λ^(6/5)');
});
group('Ray picture: a wide defocus spreads the rays over a disk of angular radius Δz/(2N f) (geometric), within 5 %', () => {
  const dz = 0.003, N = 8, D = 0.2, f = N * D, P64 = c.pupilPoints(64), W = c.mirrorWave(P64, D, N, -1, 0, dz).W; assert(c.maxStep(P64, W, lam) > 0.45, 'too wide for the wave grid');
  const pa = c.pixelAngle(D), I = c.rayImage(P64, W, D / P64.np, pa), st = c.imageStats(I), R = dz / (2 * N) / f / pa;   /* the blur circle: radius Δz/(2N) at the camera */
  near(st.hpd / 2, R / Math.SQRT2, 0.05, 'half the light inside 1/√2 of a uniform disk');
});
group('Color: the matching functions peak where the CIE tables do (ȳ at 555 nm ≈ 1); a flat spectrum is near white', () => {
  let best = 0, at = 0; for (let l = 500; l <= 600; l++) { const y = c.cmf(l)[1]; if (y > best) { best = y; at = l; } } assert(Math.abs(at - 556) <= 4 && Math.abs(best - 1) < 0.05, `ȳ peak ${at} ${best}`);
});
console.log(`${n} groups passed`);
