'use strict';
// Holography: recording |R + O|² on a thin plate and reconstructing by exact angular spectrum propagation (2D slice).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('holography', 'TAU,RAD,PLATE_W,WINDOW,hankel0,recording,fringePlate,fringeSpace,maxima,fft,reconstruct,fieldAt,sweep,angular,detector,beamAngles,pointImage,angleHist,objectPoints');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)) || Math.abs(a - b) <= 1e-12, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('Hankel H0(x) = J0 + iY0 from its asymptotic series: J0(50) = 0.0558123277, Y0(50) = −0.0980649954 (tables)', () => {
  const h = c.hankel0(50); near(h[0], 0.0558123277, 2e-9, 'J0'); near(h[1], -0.0980649954, 2e-9, 'Y0');
  const g = c.hankel0(1e5); near(Math.hypot(g[0], g[1]), Math.sqrt(2 / (Math.PI * 1e5)), 1e-9, '|H0| far away');
});
group('FFT: a forward and inverse transform give the input back; a single tone lands in one bin', () => {
  const N = 1024, re = new Float64Array(N), im = new Float64Array(N); for (let i = 0; i < N; i++) { re[i] = Math.cos(2 * Math.PI * 37 * i / N); im[i] = Math.sin(2 * Math.PI * 37 * i / N); }
  const r0 = Float64Array.from(re); c.fft(re, im, false); near(re[37], N, 1e-9, 'bin 37'); near(Math.abs(re[36]) + Math.abs(im[38]), 0, 1e-9, 'others');
  c.fft(re, im, true); for (let i = 0; i < N; i += 97) near(re[i], r0[i], 1e-12, 'inverse');
});
group('two plane waves: fringes on the plate λ/|sin θr − sin θo|; symmetric beams give λ/(2 sin(θ/2)) (OpenStax §3.1 and §4.7)', () => {
  for (const th of [10, 30, 60]) {
    const rec = c.recording({ lam1: 633e-9, thr: th / 2, K: 1, obj: { kind: 'plane', tho: -th / 2 } }), mx = c.maxima(rec, -20e-6, 20e-6);
    near((mx[mx.length - 1] - mx[0]) / (mx.length - 1), c.fringeSpace(633e-9, th), 1e-6, `spacing at ${th}°`);
    near(c.fringeSpace(633e-9, th), c.fringePlate(633e-9, th / 2, -th / 2), 1e-12, 'formulas agree');
  }
  near(c.fringeSpace(633e-9, 30), 1.22296e-6, 1e-5, '633 nm, 30°');
  const rec = c.recording({ lam1: 532e-9, thr: 25, K: 4, obj: { kind: 'plane', tho: 0 } }), mx = c.maxima(rec, -10e-6, 10e-6);
  near((mx[mx.length - 1] - mx[0]) / (mx.length - 1), 532e-9 / Math.sin(25 * c.RAD), 1e-6, 'unsymmetric');
});
group('recording: with beam ratio K the intensity swings between (1 ± 1/√K)², visibility 2√K/(1 + K)', () => {
  const rec = c.recording({ lam1: 633e-9, thr: 20, K: 4, obj: { kind: 'plane', tho: 0 } }); let lo = 9, hi = 0;
  for (let x = 0; x < 5e-6; x += 1e-9) { const v = rec.intensity(x); lo = Math.min(lo, v); hi = Math.max(hi, v); }
  near(hi, 2.25, 1e-5, 'max'); near(lo, 0.25, 1e-4, 'min'); near((hi - lo) / (hi + lo), 2 * 2 / 5, 1e-4, 'visibility');
  const pts = c.recording({ lam1: 633e-9, thr: 20, K: 4, obj: { kind: 'points', pts: c.objectPoints('one', 20e-3) } }), o = pts.obj(0);
  near(Math.hypot(o[0], o[1]) ** 2, 0.25, 1e-12, 'point object intensity 1/K at the plate centre');
});
group('plane wave hologram: the light leaves at the grating equation angles, sin θ = sin θi ± (λ2/λ1)(sin θo − sin θr), and the power adds up', () => {
  const rec = c.recording({ lam1: 633e-9, thr: 25, K: 4, obj: { kind: 'plane', tho: 0 } });
  for (const lam2 of [450e-9, 633e-9, 700e-9]) {
    const R = c.reconstruct(rec, lam2, 25), ba = c.beamAngles(633e-9, 25, 0, lam2, 25);
    for (const k of ['zero', 'image', 'conj']) { let best = 0, at = 0; for (let a = ba[k] - 0.2; a <= ba[k] + 0.2; a += 0.002) { const p = c.detector(R, a, 0.02); if (p > best) { best = p; at = a; } } near(at, ba[k], 0.004 / Math.max(1, Math.abs(ba[k])), `${k} at ${lam2 * 1e9} nm`); }
    /* the power through the plate: the mean of t², with t = I/I_max = (1.25 + cos)/2.25, is (1.25² + 0.5)/2.25² = 0.40741, before the obliquity weights */
    const A = c.angular(R, 4000); let tot = 0; for (const v of A.P) tot += v;
    assert(tot > 0.38 && tot < 0.42, `total ${tot}`);
  }
  near(c.beamAngles(633e-9, 25, 0, 633e-9, 25).image, 0, 1e-12, 'same light: the image beam is the object beam');
  assert(Number.isNaN(c.beamAngles(633e-9, 30, -30, 633e-9, 30).conj), 'conjugate cannot leave the plate when sin > 1');
});
group('point hologram, same light: the traced back light focuses exactly where the point was (virtual image); lit from the other side, a real image in front', () => {
  const q = { x: 0, z: -20e-3 }, rec = c.recording({ lam1: 633e-9, thr: 20, K: 4, obj: { kind: 'points', pts: [q] } });
  const peak = (R, z) => { const I = c.fieldAt(R, z); let m = 0, at = 0; for (let i = 0; i < R.N; i++) if (I[i] > m) { m = I[i]; at = (i - R.N / 2) * R.dx; } return { m, at }; };
  const scan = (R, z0) => { let best = { m: 0 }; for (let z = z0 - 0.6e-3; z <= z0 + 0.6e-3; z += 0.05e-3) { const p = peak(R, z); if (p.m > best.m) best = Object.assign(p, { z }); } return best; };
  const V = scan(c.reconstruct(rec, 633e-9, 20), -20e-3); near(V.z, -20e-3, 0.06e-3 / 20e-3, 'virtual depth'); assert(Math.abs(V.at) < 0.5e-6, `virtual x ${V.at}`);
  const Rr = scan(c.reconstruct(rec, 633e-9, -20), 20e-3); near(Rr.z, 20e-3, 0.06e-3 / 20e-3, 'real depth'); assert(Math.abs(Rr.at) < 0.5e-6, `real x ${Rr.at}`);
  const pv = c.pointImage(633e-9, 20, q, 633e-9, 20, 1), pr = c.pointImage(633e-9, 20, q, 633e-9, -20, -1);
  near(pv.z, -20e-3, 1e-12, 'predicted virtual'); near(pr.z, 20e-3, 1e-12, 'predicted real'); near(pv.x, 0, 1e-12); near(pr.x, 0, 1e-12);
  /* the focus is as narrow as the plate allows: first zero at λz/W = 4.2 μm */
  const R = c.reconstruct(rec, 633e-9, 20), I = c.fieldAt(R, -20e-3), i0 = R.N / 2, k = Math.round(633e-9 * 20e-3 / c.PLATE_W / R.dx);
  assert(I[i0 + k] < 0.05 * I[i0], `first dark ring ${I[i0 + k] / I[i0]}`);
});
group('another wavelength: the image moves to depth z0 (λ1/λ2) cos³α and sideways; the exact field agrees with the ray prediction', () => {
  const q = { x: 0, z: -20e-3 }, rec = c.recording({ lam1: 633e-9, thr: 20, K: 4, obj: { kind: 'points', pts: [q] } });
  for (const lam2 of [450e-9, 532e-9, 700e-9]) {
    const pr = c.pointImage(633e-9, 20, q, lam2, 20, 1), R = c.reconstruct(rec, lam2, 20); let best = { m: 0 };
    for (let z = pr.z - 0.5e-3; z <= pr.z + 0.5e-3; z += 0.025e-3) { const I = c.fieldAt(R, z); let m = 0, at = 0; for (let i = 0; i < R.N; i++) if (I[i] > m) { m = I[i]; at = (i - R.N / 2) * R.dx; } if (m > best.m) best = { m, at, z }; }
    near(best.z, pr.z, 0.1e-3 / Math.abs(pr.z), `depth at ${lam2 * 1e9} nm`); near(best.at, pr.x, 5e-6 / Math.abs(pr.x || 1), `x at ${lam2 * 1e9} nm`);
    const mu = lam2 / 633e-9, s = Math.sin(20 * c.RAD) * (1 - mu); near(pr.z, -20e-3 / mu * Math.pow(1 - s * s, 1.5), 1e-12, 'formula');
  }
});
group('sweep (the map) gives the same light as fieldAt plane by plane', () => {
  const rec = c.recording({ lam1: 633e-9, thr: 20, K: 4, obj: { kind: 'points', pts: c.objectPoints('three', 20e-3) } }), R = c.reconstruct(rec, 532e-9, 20), sw = c.sweep(R, -10e-3, 2.5e-3);
  for (let i = 0; i < 5; i++) { const { z, I } = sw.next(), J = Float64Array.from(I), K = c.fieldAt(R, z); for (let n2 = 0; n2 < R.N; n2 += 4099) near(J[n2], K[n2], 1e-7, `plane ${z}`); }
});
console.log(`${n} groups passed`);
