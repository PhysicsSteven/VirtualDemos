'use strict';
// Michelson Interferometer: two point images of the source, fringe counting with the mirror and with a gas cell, air's index.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('michelson', 'T_STD,P_STD,ROOM,nm1Std,nm1Air,vacFromStdAir,nRoom,lamInRoom,SOURCES,GEO,ARCMIN,images,geoDiff,opd,monoI,order,fringesPassed,whiteBands,whiteXYZ,lineCoefs,monoFast,bandCoefs,whiteFast,VALVE,valveStep');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)) || Math.abs(a - b) <= 1e-15, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const red = c.SOURCES.red.lines;

group('air: Ciddor (1996) standard air 2.7653e-4 at 632.99 nm; agrees with Edlén (1966) to 1e-4 across the visible', () => {
  near(c.nm1Std(632.991), 2.76530e-4, 2e-5, 'Ciddor at 633');
  const edlen = (l) => { const s2 = 1e6 / (l * l); return (8342.13 + 2406030 / (130 - s2) + 15997 / (38.9 - s2)) * 1e-8; };
  for (const l of [400, 450, 500, 550, 600, 650, 700]) near(c.nm1Std(l), edlen(l), 1e-4, `Edlén at ${l}`);
  assert(c.nm1Std(450) > c.nm1Std(650), 'normal dispersion');
});
group('air: n − 1 in proportion to P at constant T (and to 1/T); 2.7181e-4 in the room (20 °C, 101.325 kPa)', () => {
  const a = c.nm1Air(632.991, 101.325, 20); near(a, 2.76530e-4 * 288.15 / 293.15, 2e-5, 'room');
  for (const P of [0, 10, 25.3, 50, 77.7, 101.325]) near(c.nm1Air(632.991, P, 20), a * P / 101.325, 1e-12, `linear at ${P}`);
  near(c.nm1Air(632.991, 101.325, 15), c.nm1Std(632.991), 1e-12, 'standard');
});
group('wavelengths: He–Ne red 632.816 nm in standard air is 632.991 nm in vacuum; 632.819 nm in the 20 °C room', () => {
  near(red[0].lam, 632.991, 2e-6, 'vacuum'); near(c.vacFromStdAir(632.816) / (1 + c.nm1Std(c.vacFromStdAir(632.816))), 632.816, 1e-12, 'round trip');
  near(c.lamInRoom(red[0].lam), 632.8189, 1e-6, 'room');
  near(c.SOURCES.na.lines[1].lam - c.SOURCES.na.lines[0].lam, 0.597, 2e-3, 'sodium split');
});
group('geometry: untilted, the two images are 2d apart on the axis; the path difference at the centre is exactly 2d', () => {
  for (const d of [-100, 0, 0.3, 56.8, 850]) { const im = c.images(d, 0, 0); near(im.S1[2] - im.S2[2], 2 * d * 1e-6, 1e-9, `images ${d}`); near(c.geoDiff(im, 0, 0), 2 * d * 1e-6, 1e-9, `centre ${d}`); }
  const im = c.images(0, 0, 0); near(im.S2[2], c.GEO.a + 2 * c.GEO.L0 + c.GEO.b, 1e-15, 'z of S2'); assert.strictEqual(im.S2[0], 0);
});
group('rings: path difference 2d cos θ to second order; bright rings at the angles 2d(1 − cos θ) = pλ', () => {
  const d = 456.8, im = c.images(d, 0, 0), z = im.S2[2];
  for (const r of [0.005, 0.02, 0.04]) { const g = c.geoDiff(im, r, 0), th = Math.atan(r / z); near(g, 2 * d * 1e-6 * Math.cos(th), 3e-3, `2d cos θ at r = ${r}`); }
  /* the first ring out from the centre: the order falls by one */
  const lam = red[0].lam, o0 = c.order(red, c.geoDiff(im, 0, 0), false, 0); let r = 0; while (c.order(red, c.geoDiff(im, r, 0), false, 0) > Math.floor(o0) - 1 + 1e-12 && r < 0.05) r += 1e-6;
  const nr = c.nRoom(lam), th = Math.acos((Math.floor(o0) - 1) * lam * 1e-9 / (nr * 2 * d * 1e-6)), z2 = (im.S1[2] + im.S2[2]) / 2;
  near(r, z2 * Math.tan(th), 1e-2, 'first dark to bright ring radius');
});
group('tilt: at equal paths the fringes are straight and spaced λz/s, with s = 2Rα the sideways shift of the image', () => {
  const al = 0.5, im = c.images(0, al, 0), R = c.GEO.L0 + c.GEO.a, s = R * Math.sin(2 * al * c.ARCMIN);
  near(im.S2[0], s, 1e-12, 'shift');
  const z = im.S1[2], lamA = c.lamInRoom(red[0].lam) * 1e-9; let x = 0; const o0 = c.order(red, c.geoDiff(im, 0, 0), false, 0);
  while (c.order(red, c.geoDiff(im, x, 0), false, 0) - o0 < 1) x += 1e-7;
  near(x, lamA * z / s, 2e-3, 'spacing');
  /* straight: along y the order hardly changes */
  assert(Math.abs(c.order(red, c.geoDiff(im, 0, 0.03), false, 0) - o0) < 0.15, 'straight fringes');
});
group('counting the mirror: N = 2Δd/λ (λ in the room\'s air); the counter counts whichever way', () => {
  const lam = red[0].lam, o = (d) => c.order(red, c.geoDiff(c.images(d, 0, 0), 0, 0), false, 0);
  near(o(100) - o(0), 2 * 100e-6 / (c.lamInRoom(lam) * 1e-9), 1e-9, 'order change');
  let N = 0, prev = o(56.8); for (let m = 56.8; m <= 56.8 + 63.3 + 1e-9; m += 0.1) { const x = o(m); N += c.fringesPassed(prev, x); prev = x; }
  assert(N === 200 || N === 199 || N === 201, `200 fringes over 63.3 μm, got ${N}`);
  let back = 0; prev = o(120.1); for (let m = 120.1; m >= 56.8 - 1e-9; m -= 0.1) { const x = o(m); back += c.fringesPassed(prev, x); prev = x; }
  assert(Math.abs(back - N) <= 1, 'backwards counts the same');
  assert.strictEqual(c.fringesPassed(3.9, 4.1), 1); assert.strictEqual(c.fringesPassed(4.1, 3.9), 1); assert.strictEqual(c.fringesPassed(4.1, 4.9), 0); assert.strictEqual(c.fringesPassed(1.2, 6.3), 5);
});
group('gas cell: pumping out 5.00 cm of room air passes 2L(n − 1)/λ = 42.94 fringes at 632.99 nm, linear in P', () => {
  const lam = red[0].lam, g = c.geoDiff(c.images(156.8, 0, 0), 0, 0), o = (P) => c.order(red, g, true, P);
  const N = o(0) - o(101.325); near(N, 2 * 0.05 * c.nm1Air(lam, 101.325, 20) / (lam * 1e-9), 1e-9, 'count'); near(N, 42.94, 1e-3, '42.94');
  for (const P of [20, 50, 80]) near(o(0) - o(P), N * P / 101.325, 1e-9, `linear at ${P}`);
  near(c.opd(g, lam, true, 101.325), c.nRoom(lam) * g, 1e-12, 'room air in the cell changes nothing');
});
group('intensity: equal paths bright, half a wavelength dark; two lines 2:1 give visibility 1/3 at the beat; fast paths match', () => {
  near(c.monoI(red, 0, false, 0), 1, 1e-12, 'bright'); const lam = red[0].lam * 1e-9 / c.nRoom(red[0].lam); near(c.monoI(red, lam / 2, false, 0), 0, 1e-12, 'dark');
  const na = c.SOURCES.na.lines, s = 1 / (na[0].lam * 1e-9) - 1 / (na[1].lam * 1e-9), gB = 1 / (2 * s * c.nRoom(589));
  let hi = 0, lo = 1; for (let k = 0; k <= 7000; k++) { const v = c.monoI(na, gB + k * 1e-10, false, 0); hi = Math.max(hi, v); lo = Math.min(lo, v); }
  near((hi - lo) / (hi + lo), 1 / 3, 2e-3, 'visibility at the beat'); near(gB / 2 * 1e6, 145.4, 2e-3, 'first fade at d = 145 μm'); near(gB * 1e6, 290.8, 2e-3, 'then every λ²/2Δλ = 0.29 mm of mirror travel');
  for (const P of [0, 50]) for (const g of [0, 1.234e-6, 3.3e-4]) { const cf = c.lineCoefs(na, true, P); near(c.monoFast(cf, g), c.monoI(na, g, true, P), 1e-9, 'fast mono'); }
  const W = c.whiteBands(5), bc = c.bandCoefs(W, true, 40);
  for (const g of [0, 3e-7, 2e-5]) { const a = c.whiteXYZ(W, g, true, 40), b = c.whiteFast(bc, g); for (let i = 0; i < 3; i++) near(b[i], a[i], 1e-9, 'fast white'); }
});
group('white light: equal paths give the source\'s own white (Y = 1); far from it the fringes wash out to half; colour near 0.3 μm', () => {
  const W = c.whiteBands(5); near(c.whiteXYZ(W, 0, false, 0)[1], 1, 1e-12, 'Y at zero');
  for (const g of [2e-5, 1e-4, 6e-4]) near(c.whiteXYZ(W, g, false, 0)[1], 0.5, 2e-3, `washed out at ${g}`);
  assert(c.whiteXYZ(W, 2.75e-7, false, 0)[1] < 0.2, 'first dark band near half a wavelength');
  near(c.order(red, 0, false, 0), 0, 1e-12, 'order zero at equal paths');
});
group('valves: pump to 2 Pa with τ = 4 s; needle valve 1.0 kPa/s, easing over the last 2 kPa; never past the room', () => {
  near(c.valveStep(100, 'pump', 4), 100 / Math.E, 1e-12, 'pump'); near(c.valveStep(0.003, 'pump', 10), 0.002, 1e-12, 'floor');
  near(c.valveStep(10, 'vent', 5), 15, 1e-12, 'vent rate'); let P = 0; for (let t = 0; t < 400; t += 0.05) P = c.valveStep(P, 'vent', 0.05);
  near(P, 101.325, 1e-9, 'reaches room'); assert(c.valveStep(101.325, 'vent', 1) === 101.325); near(c.valveStep(50, 'closed', 9), 50, 0, 'closed');
  let a = 98, b = 98; a = c.valveStep(a, 'vent', 2); for (let i = 0; i < 40; i++) b = c.valveStep(b, 'vent', 0.05); near(a, b, 1e-9, 'step size does not matter');
});
console.log(`${n} groups passed`);
