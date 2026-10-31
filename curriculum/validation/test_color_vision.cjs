'use strict';
// Color Vision: cone signals from the CIE 1931 functions and the HPE matrix, the lamp calibration, metamers and the filter.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('color-vision', 'CV_L0,CV_N,CV_HPE,CV_WHITE,CV_LAMPS,CV_LW,CV_LXYZ,CV_YMAX,cvCmf,cvLms,cvXYZ,cvGrid,cvSpectrum,cvBulb,cvPlanck,cvD65,cvRGB,cvLin,cvMatch,cvSolve');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const lmsOf = (o) => C.cvLms(C.cvXYZ(C.cvSpectrum(o)));

test('HPE matrix sends D65 white to L = M = S = 1 (it is normalized to D65)', () => {
  C.cvLms(C.CV_WHITE).forEach((v) => near(v, 1, 3e-4));
});
test('CIE 1931 fit: ȳ peaks near 555 nm at 1.00; cone peaks fall in the long, middle and short wavelengths', () => {
  near(C.CV_YMAX, 1, 0.003); let best = [0, 0, 0], at = [0, 0, 0];
  for (let l = 380; l <= 780; l++) { const v = C.cvLms(C.cvCmf(l)); for (let k = 0; k < 3; k++) if (v[k] > best[k]) { best[k] = v[k]; at[k] = l; } }
  assert(at[0] > 565 && at[0] < 585, `L ${at[0]}`); assert(at[1] > 535 && at[1] < 555, `M ${at[1]}`); assert(at[2] > 435 && at[2] < 455, `S ${at[2]}`);
});
test('three lamps at 100% give the D65 white exactly: XYZ (0.950, 1, 1.089), L = M = S = 1, sRGB #ffffff', () => {
  const xyz = C.cvXYZ(C.cvSpectrum({ mode: 'rgb', r: 1, g: 1, b: 1 })); xyz.forEach((v, i) => near(v, C.CV_WHITE[i], 1e-10));
  lmsOf({ mode: 'rgb', r: 1, g: 1, b: 1 }).forEach((v) => near(v, 1, 3e-4)); assert.equal(C.cvRGB(xyz).join(), '255,255,255');
  assert(C.CV_LW.every((w) => w > 0));
});
test('mixing is additive: the cone signals of red + green are the sums of each alone; half power halves them', () => {
  const a = lmsOf({ mode: 'rgb', r: 1, g: 0, b: 0 }), b = lmsOf({ mode: 'rgb', r: 0, g: 1, b: 0 }), ab = lmsOf({ mode: 'rgb', r: 1, g: 1, b: 0 }), h = lmsOf({ mode: 'rgb', r: 0.5, g: 0.5, b: 0 });
  for (let k = 0; k < 3; k++) { near(ab[k], a[k] + b[k], 1e-12); near(h[k], ab[k] / 2, 1e-12); }
  assert(ab[2] < 0.04 * ab[0], 'red + green barely excites S');
});
test('one wavelength at 100% has Y = ȳ(λ)/ȳmax: 1.00 near 555 nm, far less at 450 and 650 nm', () => {
  near(C.cvXYZ(C.cvSpectrum({ mode: 'mono', lam: 555, pow: 1 }))[1], 1, 0.003);
  near(C.cvXYZ(C.cvSpectrum({ mode: 'mono', lam: 450, pow: 1 }))[1], C.cvCmf(450)[1] / C.CV_YMAX, 1e-12);
  assert(C.cvXYZ(C.cvSpectrum({ mode: 'mono', lam: 650, pow: 1 }))[1] < 0.12);
});
test('metamers: the lamp mix found for a wavelength has its cone signals (580 nm nearly, 600 nm with a little blue negative); 490 nm needs negative red', () => {
  for (const lam of [520, 560, 580, 600]) {
    const xyz = C.cvXYZ(C.cvSpectrum({ mode: 'mono', lam, pow: 0.3 })), lv = C.cvMatch(xyz), tgt = C.cvLms(xyz);
    const mix = lmsOf({ mode: 'rgb', r: lv[0], g: lv[1], b: lv[2] }); for (let k = 0; k < 3; k++) near(mix[k], tgt[k], 1e-9, `${lam} nm`);
  }
  const l580 = C.cvMatch(C.cvXYZ(C.cvSpectrum({ mode: 'mono', lam: 580, pow: 1 }))); assert(l580[2] < 0 && l580[2] > -0.05 * Math.max(...l580));
  const l490 = C.cvMatch(C.cvXYZ(C.cvSpectrum({ mode: 'mono', lam: 490, pow: 1 }))); assert(l490[0] < -0.05 * Math.max(...l490), 'negative red for 490 nm');
});
test('bulbs: Planck c₂ = 1.438 776 877 × 10⁻² m·K (CODATA 2022) peaks at b/T (Wien, 1015 nm at 2856 K); D65 is 100 at 560 nm; a bare bulb has Y = 1', () => {
  let best = 0, at = 0; for (let l = 500; l <= 2000; l++) { const v = C.cvPlanck(l, 2856); if (v > best) { best = v; at = l; } } near(at, 2.897771955e6 / 2856, 1);
  assert.equal(C.cvD65(560), 100); for (const k of ['inc', 'day']) near(C.cvXYZ(C.cvBulb(k))[1], 1, 1e-12);
  const inc = C.cvLms(C.cvXYZ(C.cvBulb('inc'))); assert(inc[0] > inc[1] && inc[1] > inc[2], 'incandescent is reddish: L > M > S');
});
test('filters only take light away: band pass 600 to 700 nm leaves exactly the bulb inside and nothing outside; a narrow 589 nm filter gives the 589 nm hue', () => {
  const bare = C.cvBulb('inc'), f = C.cvSpectrum({ mode: 'bulb', bulb: 'inc', filt: true, c: 650, w: 100 });
  for (let i = 0; i < C.CV_N; i++) { const l = C.CV_L0 + i; near(f[i], l >= 600 && l <= 700 ? bare[i] : 0, 0); }
  const nar = C.cvLms(C.cvXYZ(C.cvSpectrum({ mode: 'bulb', bulb: 'inc', filt: true, c: 589, w: 10 }))), mono = C.cvLms(C.cvCmf(589));
  near(nar[0] / nar[1], mono[0] / mono[1], 0.02); near(nar[2] / nar[0], mono[2] / mono[0], 0.002);
});
console.log(`${n} tests passed`);
