'use strict';
/* Timbre and Harmonics: sampling, aliasing, windows, leakage, converter noise and the anti-alias filter (2026-11-16). */
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const T = core('timbre', 'TAU,FS_MIN,FS_MAX,BW_ORDER,aliasSigned,aliasFreq,butterH,windowW,gaussRng,sampleRecord,fft,ampSpectrum,noiseBin,specStats');
let pass = 0; const ok = (name, fn) => { fn(); pass++; console.log('ok', name); };
const { TAU } = T;
const near = (a, b, tol, m) => assert(Math.abs(a - b) <= tol, `${m || ''} ${a} vs ${b}`);

ok('alias: a 440 Hz tone at 460 Hz reads 20 Hz; folding about fs/2 and fs', () => {
  near(T.aliasFreq(440, 460), 20, 1e-9);
  near(T.aliasFreq(440, 440), 0, 1e-9);
  near(T.aliasFreq(1100, 2000), 900, 1e-9);
  near(T.aliasFreq(3080, 2000), 920, 1e-9);
  near(T.aliasFreq(300, 2000), 300, 1e-9);
  for (let f = 1; f < 5000; f += 37.3) { const fa = T.aliasFreq(f, 1234); assert(fa >= 0 && fa <= 617 + 1e-9); }
});
ok('alias: the samples of f and of its signed alias f′ are the same numbers', () => {
  for (const [f, fs] of [[440, 460], [1100, 2000], [3080, 2000], [700, 8000]]) {
    const fp = T.aliasSigned(f, fs);
    for (let k = 0; k < 50; k++) near(Math.sin(TAU * f * k / fs + 0.7), Math.sin(TAU * fp * k / fs + 0.7), 1e-9);
  }
});
ok('Butterworth: |H| = 1/√(1 + (f/fc)^2m), −3 dB at fc, 1 at f = 0', () => {
  for (const m of [1, 2, 4, 8]) for (const u of [0, 0.3, 1, 1.25, 2.5]) near(T.butterH(u * 800, 800, m).mag, 1 / Math.sqrt(1 + Math.pow(u, 2 * m)), 1e-12, `m ${m} u ${u}`);
  near(20 * Math.log10(T.butterH(800, 800, 8).mag), -3.0103, 1e-3);
  /* first order: phase −atan(f/fc) */
  near(T.butterH(800, 800, 1).ph, -Math.PI / 4, 1e-12);
});
ok('FFT equals the direct DFT', () => {
  const N = 64, x = Array.from({ length: N }, (_, k) => Math.sin(0.37 * k) + 0.2 * Math.cos(1.9 * k));
  const re = Float64Array.from(x), im = new Float64Array(N); T.fft(re, im);
  for (const k of [0, 1, 5, 31, 32, 50]) { let r = 0, i = 0; for (let n = 0; n < N; n++) { r += x[n] * Math.cos(TAU * k * n / N); i -= x[n] * Math.sin(TAU * k * n / N); } near(re[k], r, 1e-9); near(im[k], i, 1e-9); }
});
ok('a sine with whole cycles in the record reads its amplitude exactly in its bin, both windows, no leakage with the rectangle', () => {
  const fs = 8000, N = 256, f = 14 * fs / N, a = 0.6;
  for (const w of ['rect', 'hann']) {
    const A = T.ampSpectrum(T.sampleRecord([{ f, a, ph: 0.3 }], fs, N, 0), T.windowW(w, N));
    near(A[14], a, 1e-12, w);
    if (w === 'rect') { for (let k = 0; k <= N / 2; k++) if (k !== 14) assert(A[k] < 1e-12); }
    else { near(A[13], a / 2, 1e-12); near(A[15], a / 2, 1e-12); }
  }
});
ok('leakage: halfway between bins the rectangle loses 3.92 dB and the Hann window 1.42 dB (scalloping loss)', () => {
  const fs = 8000, N = 1024, f = 100.5 * fs / N;
  const R = T.ampSpectrum(T.sampleRecord([{ f, a: 1, ph: 0 }], fs, N, 0), T.windowW('rect', N));
  const H = T.ampSpectrum(T.sampleRecord([{ f, a: 1, ph: 0 }], fs, N, 0), T.windowW('hann', N));
  near(20 * Math.log10(Math.max(R[100], R[101])), 20 * Math.log10(2 / Math.PI), 0.02);
  near(20 * Math.log10(Math.max(H[100], H[101])), -1.42, 0.02);
});
ok('aliased tone shows up at its alias frequency in the spectrum', () => {
  const fs = 460, N = 256, st = T.specStats(T.ampSpectrum(T.sampleRecord([{ f: 440, a: 1, ph: 0 }], fs, N, 0), T.windowW('rect', N)), fs, [20]);
  assert(Math.abs(st.fPeak - 20) <= st.df / 2 + 1e-9, `peak ${st.fPeak}`);
});
ok('converter noise: the measured floor matches 2σ√(Σw²)/Σw, and falls 3 dB per doubling of N', () => {
  for (const w of ['rect', 'hann']) {
    for (const N of [256, 1024]) {
      let s = 0; const K = 20;
      for (let seed = 1; seed <= K; seed++) { const A = T.ampSpectrum(T.sampleRecord([], 8000, N, 0.05, seed), T.windowW(w, N)); const st = T.specStats(A, 8000, []); s += st.floor * st.floor; }
      near(20 * Math.log10(Math.sqrt(s / K)), 20 * Math.log10(T.noiseBin(0.05, T.windowW(w, N))), 0.3, `${w} ${N}`);
    }
  }
  near(20 * Math.log10(T.noiseBin(0.05, T.windowW('rect', 512)) / T.noiseBin(0.05, T.windowW('rect', 256))), -10 * Math.log10(2), 1e-9);
});
ok('noise generator: reproducible, mean 0 and variance 1', () => {
  const g1 = T.gaussRng(7), g2 = T.gaussRng(7); let s = 0, s2 = 0; const n = 200000;
  for (let i = 0; i < n; i++) { const v = g1(); assert.strictEqual(v, g2()); s += v; s2 += v * v; }
  near(s / n, 0, 0.01); near(s2 / n, 1, 0.01);
});
console.log(pass, 'passed');
