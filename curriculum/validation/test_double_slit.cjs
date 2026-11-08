'use strict';
// Double Slit: de Broglie wavelengths (with the relativistic electron), the Fresnel integrals against tabulated values and a
// direct quadrature, the Fresnel pattern going over to the Fraunhofer formula far away, fringe spacing λL/d, missing orders,
// flux conservation, and the detection sampler.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('double-slit', 'H,ME,C,M_C60,photon,electron,massive,fresnel,slitAmp,buildPattern,sampleFrom,sampleHit,mixture,predict,fraunhofer');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300), `${w || ''}: expected ${b}, got ${a}`);
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('de Broglie: 100 V electrons 0.1226 nm, 100 kV 3.70 pm (relativistic), C₆₀ at 220 m/s 2.5 pm (Arndt et al. 1999)', () => {
  near(c.electron(100).lam * 1e9, 0.122642, 1e-4); near(c.electron(100).lamNR * 1e9, 0.122643, 1e-4);
  near(c.electron(1e5).lam * 1e12, 3.7014, 1e-4, '100 kV'); near(c.electron(1e5).lamNR * 1e12, 3.8783, 1e-4, 'nonrelativistic would be 3.88 pm');
  // v from p and the total energy: v = pc²/E, below c; γ − 1 = K/mc²
  const e = c.electron(1e6); assert(e.v < c.C); near(1 / Math.sqrt(1 - (e.v / c.C) ** 2) - 1, e.K / (c.ME * c.C * c.C), 1e-10);
  near(c.massive(c.M_C60, 220).lam * 1e12, 2.52, 2e-3); near(c.photon(500).p, c.H / 500e-9, 1e-15);
});

group('Fresnel integrals: 12 digit values (mpmath fresnelc, fresnels), C(∞) = S(∞) = ½, odd, and a direct Simpson quadrature', () => {
  const tab = [[0.5, 0.492344225871, 0.0647324328600], [1, 0.779893400377, 0.438259147390], [1.5, 0.445261176040, 0.697504960082], [2, 0.488253406075, 0.343415678364], [3, 0.605720789298, 0.496312998967]];
  for (const [x, C, S] of tab) { const f = c.fresnel(x); close(f[0], C, 2e-10, `C(${x})`); close(f[1], S, 2e-10, `S(${x})`); }
  const big = c.fresnel(400); close(big[0], 0.5, 1e-3); close(big[1], 0.5, 1e-3);
  const m = c.fresnel(-1.2), p = c.fresnel(1.2); close(m[0], -p[0], 0); close(m[1], -p[1], 0);
  for (const x of [0.3, 1.49, 1.51, 2.7, 5.5]) {
    const N = 20000, h = x / N; let sc = 0, ss = 0;
    for (let i = 0; i <= N; i++) { const t = i * h, w = i === 0 || i === N ? 1 : i % 2 ? 4 : 2; sc += w * Math.cos(Math.PI * t * t / 2); ss += w * Math.sin(Math.PI * t * t / 2); }
    const f = c.fresnel(x); close(f[0], sc * h / 3, 1e-11, `C(${x}) quadrature`); close(f[1], ss * h / 3, 1e-11, `S(${x}) quadrature`);
  }
});

const both = [true, true];
group('far from the slits the Fresnel pattern becomes the Fraunhofer pattern cos²(πd sinθ/λ) · sinc²(πa sinθ/λ)', () => {
  const o = { lam: 600e-9, L: 20, a: 20e-6, d: 100e-6, Y: 0.4, open: both }, pat = c.buildPattern(o);
  assert(c.predict(o.lam, o.L, o.a, o.d).ff < 0.003, 'far field number');
  const j0 = pat.M / 2, I0 = pat.I12[j0];
  for (let j = j0; j < pat.M; j += 37) {
    const y = pat.y[j]; if (y > 0.3) break;
    close(pat.I12[j] / I0, c.fraunhofer(y / Math.hypot(y, o.L), o.lam, o.a, o.d), 0.01, `y ${y.toFixed(4)}`);
  }
});

group('dark fringes at sin θ = (m + ½)λ/d, so fringes are λL/d apart; the 5th order is missing when d = 5a', () => {
  const o = { lam: 532e-9, L: 2, a: 10e-6, d: 50e-6, Y: 0.15, open: both }, pat = c.buildPattern(o), pr = c.predict(o.lam, o.L, o.a, o.d);
  near(pr.dy, 532e-9 * 2 / 50e-6, 1e-15);
  // the zeros of cos² are not moved by the single slit envelope (the maxima are pulled slightly inward by it, so test the zeros)
  const mins = []; for (let j = 1; j < pat.M; j++) if (pat.I12[j] < pat.I12[j - 1] && pat.I12[j] <= pat.I12[j + 1] && pat.y[j] > 0 && pat.y[j] < 3 * pr.dy) mins.push(pat.y[j]);
  assert.equal(mins.length, 3, 'three dark fringes in the first three orders');
  mins.forEach((y, m) => close(y, pr.minima[m].y, 2 * pat.h + 1e-4 * y, `dark fringe ${m}`));
  for (let i = 1; i < mins.length; i++) near(mins[i] - mins[i - 1], pr.dy, 0.003, 'spacing');
  const m5 = pr.maxima.find((m) => m.m === 5); assert(m5.missing); assert(!pr.maxima.find((m) => m.m === 4).missing);
  assert.equal(pr.nBright, 9, 'nine bright fringes inside the central envelope');
  near(pr.env, o.L * Math.tan(Math.asin(o.lam / o.a)), 1e-15, 'envelope zero at sin θ = λ/a');
});

group('flux: both slits together carry the sum of what each slit carries alone (the cross term integrates to zero)', () => {
  const o = { lam: 600e-9, L: 1, a: 30e-6, d: 120e-6, Y: 0.5, open: both }, pat = c.buildPattern(o);
  near(pat.F12, pat.F1 + pat.F2, 0.01); near(pat.F1, pat.F2, 1e-6, 'two equal slits');
  // one slit closed: the two slit pattern is the single slit pattern
  const one = c.buildPattern(Object.assign({}, o, { open: [true, false] })); for (let j = 0; j <= one.M; j += 501) close(one.I12[j], one.I1[j], 1e-15);
  // Fresnel propagation keeps the flux: ∫|U|² dy = λL·a for a slit of width a; the demo's amplitude carries a factor
  // k = √(2/λL), so its flux is k²λL·a = 2a
  near(pat.F1, 2 * o.a, 0.01, 'single slit flux');
});

group('detections follow the pattern; a which slit detector (η = 1) washes the fringes out', () => {
  const o = { lam: 600e-9, L: 1, a: 20e-6, d: 100e-6, Y: 0.05, open: both }, pat = c.buildPattern(o);
  let seed = 7; const rnd = () => ((seed = (seed * 16807) % 2147483647) / 2147483647);
  const N = 60000, bins = 40, hist = new Array(bins).fill(0);
  for (let i = 0; i < N; i++) { const h = c.sampleHit(pat, 0, rnd); hist[Math.min(bins - 1, Math.floor((h.y + o.Y) / (2 * o.Y) * bins))]++; }
  for (let b = 0; b < bins; b++) {
    const lo = Math.round(b * pat.M / bins), hi = Math.round((b + 1) * pat.M / bins), want = N * (pat.C12[hi] - pat.C12[lo]) / pat.F12;
    assert(Math.abs(hist[b] - want) < 5 * Math.sqrt(want + 1) + 5, `bin ${b}: ${hist[b]} vs ${want.toFixed(0)}`);
  }
  const mx = c.mixture(pat, 1); for (let j = 0; j <= pat.M; j += 97) close(mx.P[j], pat.I1[j] + pat.I2[j], 1e-15);
  const h1 = c.sampleHit(pat, 1, rnd); assert(h1.slit === 1 || h1.slit === 2);
});

console.log(`${n} double slit test groups passed`);
