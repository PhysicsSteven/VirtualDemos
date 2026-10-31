'use strict';
// Color Vision: cone signals from the CIE 1931 functions and the HPE matrix, the lamp calibration, metamers and the filter.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('color-vision', 'CV_L0,CV_N,CV_HPE,CV_WHITE,CV_LAMPS,CV_LW,CV_LXYZ,CV_YMAX,cvCmf,cvLms,cvXYZ,cvGrid,cvSpectrum,cvBulb,cvPlanck,cvD65,cvRGB,cvLin,cvMatch,cvSolve,cvFilterT,cvFilters,cvThrough,cvSource,cvPigR,cvKS,cvKSinv,cvMixR,cvShadowScale,cvLampX,cvInPerson,cvBlocked,cvStageLook,cvStageSpec,CV_PIG_HI,CV_PIG_LO,CV_STAGE_D,CV_LAMPS');
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
test('colored filters: red light on a green filter and red then green stacked pass nothing; yellow then cyan pass only the green third', () => {
  near(C.cvXYZ(C.cvSpectrum({ mode: 'rgb', r: 1, g: 0, b: 0, fa: 'green' }))[1], 0, 2e-3);
  const rg = C.cvSpectrum({ mode: 'bulb', bulb: 'inc', filt: false, fa: 'red', fb: 'green' }); assert(rg.every((v) => v === 0));
  const yc = C.cvSpectrum({ mode: 'bulb', bulb: 'day', filt: false, fa: 'yellow', fb: 'cyan' }), g = C.cvSpectrum({ mode: 'bulb', bulb: 'day', filt: false, fa: 'green' });
  for (let i = 0; i < C.CV_N; i++) assert.equal(yc[i], g[i]);
  for (const [a, b, c] of [['yellow', 'magenta', 'red'], ['cyan', 'magenta', 'blue']]) {
    const s1 = C.cvSpectrum({ mode: 'bulb', bulb: 'day', fa: a, fb: b }), s2 = C.cvSpectrum({ mode: 'bulb', bulb: 'day', fa: c }); for (let i = 0; i < C.CV_N; i++) assert.equal(s1[i], s2[i], `${a} + ${b}`);
  }
  for (const l of [400, 499, 500, 599, 600, 700]) { const k = l < 500 ? 0 : l < 600 ? 1 : 2; for (const [n1, n2] of [['yellow', 'blue'], ['cyan', 'red'], ['magenta', 'green']]) assert.equal(C.cvFilterT(n1, l), C.cvFilterT(n2, l) ? 0 : 1, `${n1} at ${l}`); }
  const order1 = C.cvSpectrum({ mode: 'bulb', bulb: 'inc', fa: 'yellow', fb: 'magenta' }), order2 = C.cvSpectrum({ mode: 'bulb', bulb: 'inc', fa: 'magenta', fb: 'yellow' });
  for (let i = 0; i < C.CV_N; i++) assert.equal(order1[i], order2[i], 'order does not matter');
});
test('white lamps through magenta keep the red and blue lamps (to within 0.2%) and lose the green; 580 nm is stopped by red, the red + green yellow is not', () => {
  const m = C.cvLms(C.cvXYZ(C.cvSpectrum({ mode: 'rgb', r: 1, g: 1, b: 1, fa: 'magenta' }))), rb = lmsOf({ mode: 'rgb', r: 1, g: 0, b: 1 });
  for (let k = 0; k < 3; k++) near(m[k], rb[k], 2e-3 * Math.max(...rb));
  assert.equal(C.cvXYZ(C.cvSpectrum({ mode: 'mono', lam: 580, pow: 1, fa: 'red' }))[1], 0);
  const ry = C.cvXYZ(C.cvSpectrum({ mode: 'rgb', r: 1, g: 1, b: 0, fa: 'red' }))[1], r = C.cvXYZ(C.cvSpectrum({ mode: 'rgb', r: 1, g: 0, b: 0 }))[1]; near(ry, r, 2e-3 * r);
  assert.equal(C.cvFilters({ mode: 'bulb', filt: true, c: 650, w: 100, fa: 'none', fb: 'red' }).length, 2);
});
// ---- Paints and Stage lights ----
const paint = (parts, lit = 'day') => ({ mode: 'paint', parts, lit });
const stage = (o) => Object.assign({ mode: 'stage', r: 1, g: 1, b: 1, dist: 1.5, spacing: 1, px: 0, costume: 'white', backdrop: 'white', probe: [0.6, 1.7] }, o);
test('model pigments: white flat at 0.88, black 0.04 to within 0.005 (the band edges overlap); each colored pigment reflects 0.88 in the middle of its own thirds and 0.04 in the middle of the others (to 0.006)', () => {
  for (let l = 380; l <= 780; l += 10) { near(C.cvPigR('white', l), C.CV_PIG_HI, 1e-15); near(C.cvPigR('black', l), C.CV_PIG_LO, 0.005); }
  const mid = [450, 550, 650], refl = { red: [0, 0, 1], green: [0, 1, 0], blue: [1, 0, 0], yellow: [0, 1, 1], cyan: [1, 1, 0], magenta: [1, 0, 1] };
  for (const [n, t] of Object.entries(refl)) mid.forEach((l, j) => near(C.cvPigR(n, l), t[j] ? C.CV_PIG_HI : C.CV_PIG_LO, 6e-3, `${n} at ${l}`));
});
test('Kubelka–Munk: R ↔ K/S round trip; one paint alone, or two parts of one, gives its own reflectance; the mix lies between and K/S is the average', () => {
  for (const R of [0.01, 0.04, 0.3, 0.5, 0.88, 0.99]) near(C.cvKSinv(C.cvKS(R)), R, 1e-12);
  const c = C.cvMixR({ cyan: 2 }); for (let i = 0; i < C.CV_N; i += 7) near(c[i], C.cvPigR('cyan', C.CV_L0 + i), 1e-12);
  const m = C.cvMixR({ cyan: 1, yellow: 3 });
  for (let i = 0; i < C.CV_N; i += 5) { const l = C.CV_L0 + i, a = C.cvPigR('cyan', l), b = C.cvPigR('yellow', l);
    near(C.cvKS(m[i]), 0.25 * C.cvKS(a) + 0.75 * C.cvKS(b), 1e-9); assert(m[i] >= Math.min(a, b) - 1e-12 && m[i] <= Math.max(a, b) + 1e-12); }
  const none = C.cvMixR({}); near(none[100], C.CV_PIG_HI, 1e-15);
});
test('paints subtract: cyan + yellow look green (M largest, S small), magenta + yellow red, cyan + magenta blue; all three a dark gray near 0.1', () => {
  const cy = lmsOf(paint({ cyan: 1, yellow: 1 })), my = lmsOf(paint({ magenta: 1, yellow: 1 })), cm = lmsOf(paint({ cyan: 1, magenta: 1 }));
  assert(cy[1] > cy[0] && cy[2] < 0.2 * cy[1]); assert(my[0] > my[1] && my[0] > my[2]); assert(cm[2] > 5 * cm[1] && cm[2] > 5 * cm[0]);
  const all = lmsOf(paint({ cyan: 1, magenta: 1, yellow: 1 })); all.forEach((v) => assert(v > 0.08 && v < 0.14, `CMY ${v}`));
  near(C.cvXYZ(C.cvSpectrum(paint({ cyan: 1, magenta: 1, yellow: 1 })))[1], 0.112, 0.001);
  const bare = C.cvXYZ(C.cvSpectrum(paint({}))); near(bare[1], C.CV_PIG_HI, 1e-9);   /* the bare board is the white pigment: Y = 0.88 */
});
test('paint under a bulb: the light reaching the eye is bulb × reflectance; blue paint loses most of its S signal under 2856 K', () => {
  const R = C.cvMixR({ cyan: 1, magenta: 1 }), B = C.cvBulb('inc'), sp = C.cvSpectrum(paint({ cyan: 1, magenta: 1 }, 'inc'));
  for (let i = 0; i < C.CV_N; i += 3) near(sp[i], R[i] * B[i], 1e-15);
  const d = lmsOf(paint({ cyan: 1, magenta: 1 })), inc = lmsOf(paint({ cyan: 1, magenta: 1 }, 'inc')); assert(inc[2] < 0.35 * d[2]);
});
test('shadow geometry: m = D/(D − d); a shadow point maps back through the performer to the lamp along one straight line', () => {
  near(C.cvShadowScale(1.5), 1.6, 1e-15); near(C.cvShadowScale(3), 4, 1e-15); near(C.cvShadowScale(0), 1, 1e-15);
  const o = stage({ dist: 1.2, spacing: 0.8, px: 0.3 });
  for (const [u, z] of [[0, 1.58], [0, 1.1], [-0.4, 1.7], [0.25, 1.0]]) { assert(C.cvInPerson(u, z), `${u}, ${z} in the performer`);
    for (let k = 0; k < 3; k++) { const xk = C.cvLampX(k, o.spacing), m = C.cvShadowScale(o.dist), X = xk + (o.px + u - xk) * m, Z = z * m;
      assert((C.cvBlocked(o, X, Z) >> k) & 1, `lamp ${k} shadow of ${u}, ${z}`);
      /* collinear: lamp (xk, 0, depth 0), performer point (depth D − d), shadow (depth D) */
      near((o.px + u - xk) / (C.CV_STAGE_D - o.dist), (X - xk) / C.CV_STAGE_D, 1e-12); near(z / (C.CV_STAGE_D - o.dist), Z / C.CV_STAGE_D, 1e-12); } }
  assert.equal(C.cvBlocked(o, 2.9, 0.2), 0, 'far from every shadow');
});
test('colored shadows on white: light in a shadow is exactly the other lamps; three full lamps on a perfect reflector give white; overlaps of all three are black', () => {
  const o = stage({}); for (let b = 0; b < 8; b++) { const sp = C.cvStageSpec(o, b, 'white'), rgb = C.cvSource({ mode: 'rgb', r: b & 1 ? 0 : 1, g: b & 2 ? 0 : 1, b: b & 4 ? 0 : 1 });
    for (let i = 0; i < C.CV_N; i += 4) near(sp[i], C.CV_PIG_HI * rgb[i], 1e-15); }
  assert.equal(JSON.stringify(C.cvStageLook(o)), JSON.stringify({ on: 'backdrop', pig: 'white', blocked: 1 }));
  const cyan = lmsOf(o); assert(cyan[1] > cyan[0] && cyan[2] > cyan[0], 'the red lamp shadow looks cyan');
  assert(C.cvStageSpec(o, 7, 'white').every((v) => v === 0));
  assert.equal(C.cvStageLook(stage({ r: 1, g: 1, b: 0, probe: [0.3, 2.2] })).blocked, 3);
});
test('colored objects in colored light: red costume in green light nearly black (Y < 0.04); yellow costume in magenta light reads red; the ring on the performer sees every lamp', () => {
  const rg = stage({ r: 0, g: 1, b: 0, costume: 'red', probe: [0, 1.15] }); assert.equal(C.cvStageLook(rg).on, 'performer');
  assert(C.cvXYZ(C.cvSpectrum(rg))[1] < 0.04);
  const ym = lmsOf(stage({ r: 1, g: 0, b: 1, costume: 'yellow', probe: [0, 1.15] })); assert(ym[0] > 2 * ym[1] && ym[2] < 0.1);
  const blue = stage({ backdrop: 'blue', probe: [-0.7, 2.1] }); assert.equal(C.cvStageLook(blue).blocked, 4); near(C.cvXYZ(C.cvSpectrum(blue))[1], 0.039, 0.001);
});
console.log(`${n} tests passed`);
