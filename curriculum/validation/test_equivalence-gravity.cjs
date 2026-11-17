'use strict';
// Equivalence and Tests of Gravity: the windowless room (fall time, scale, tides), light across an accelerating box, starlight
// bending at the 1919 eclipse (the Sun's place, the stars, the 1920 results and VLBI), and Mercury's perihelion.
const assert = require('node:assert');
const VDC = require('../../demos/lib/constants.js');
const { core } = require('./demo_source.cjs');
const c = core('equivalence-gravity', 'C,G_STD,GMSUN,RSUN,AU,REARTH,GMEARTH,A_MERC,E_MERC,P_MERC,LB,ARCSEC,fallTime,ballY,scaleN,tideCloser,gAt,lightDrop,lightTilt,deflectGR,deflectNewton,deflectGamma,LIMB,MEASURED,VLBI,sunAt,JD1919,sunRadiusArcsec,STARS,offset,impact,precGRorbit,perCentury,PLANETS,OBSERVED,planetSum,kepler,orbitPos');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const rel = (a, b, tol, w) => assert(Math.abs(a / b - 1) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants match demos/lib/constants.js (CODATA 2022, IAU 2015, IUGG, JPL, NASA)', () => {
  assert.strictEqual(c.C, VDC.c); assert.strictEqual(c.G_STD, VDC.g); assert.strictEqual(c.GMSUN, VDC.GMsun); assert.strictEqual(c.RSUN, VDC.Rsun);
  assert.strictEqual(c.AU, VDC.au); assert.strictEqual(c.REARTH, VDC.RearthMean); assert.strictEqual(c.GMEARTH, VDC.GMearth);
  assert.strictEqual(c.A_MERC, VDC.aMerc); assert.strictEqual(c.E_MERC, VDC.eMerc); assert.strictEqual(c.P_MERC, VDC.PMerc); assert.strictEqual(c.LB, VDC.lb);
  rel(c.ARCSEC * 206264.80624709636, 1, 1e-15, 'arcsecond');
});
group('the room: same fall time and scale reading for a = g; fall time √(2h/a); free fall floats; 68 kg at 1.1 g reads 74.8 kg', () => {
  near(c.fallTime(1.5, 9.81), 0.553, 1e-3, '1.5 m'); assert.strictEqual(c.fallTime(1.5, 0), Infinity); near(c.ballY(1.5, 9.81, c.fallTime(1.5, 9.81)), 0, 1e-12, 'lands');
  near(c.ballY(1.5, 9.81, 0.3), 1.5 - 0.5 * 9.81 * 0.09, 1e-14, 'half way'); near(c.ballY(1.5, 0, 2), 1.5, 1e-15, 'floats');
  near(c.scaleN(70, 9.81), 686.7, 1e-12, 'weight'); near(c.scaleN(68, 1.1 * 9.81) / 9.81, 74.8, 1e-12, '1.1 g'); near(68 / c.LB, 149.9, 1e-3, '150 lb');
});
group('tides: w·h/R closer; 3 m room 0.71 µm, 1,000 km room 23.5 cm; g falls 9.4 × 10⁻⁷ over 3 m; g at the surface 9.82', () => {
  near(c.tideCloser(3, 1.5) * 1e6, 0.706, 1e-3, '3 m'); near(c.tideCloser(1e6, 1.5) * 100, 23.54, 1e-3, '1000 km');
  near(1 - c.gAt(3) / c.gAt(0), 2 * 3 / c.REARTH, 1e-9, 'gradient 2h/R'); near(c.gAt(0), 9.820, 1e-3, 'GM/R²');
  /* exact geometry check: two lines to the center from points w apart at radius R, after falling h, are w(R − h)/R apart */
  const R = c.REARTH, w = 1e6, h = 1.5; near(w - w * (R - h) / R, c.tideCloser(w, h), 1e-9, 'similar triangles');
});
group('light across a box: L/c = 10.0 ns for 3 m; drop ½a(L/c)² = 4.9 × 10⁻¹⁶ m at g; tilt aL/c² = 2 × drop/L; half a meter at 10¹⁵ g', () => {
  near(3 / c.C * 1e9, 10.007, 1e-4, 'crossing'); rel(c.lightDrop(3, 9.81), 4.912e-16, 1e-3, 'drop at g'); rel(c.lightTilt(3, 9.81), 2 * c.lightDrop(3, 9.81) / 3, 1e-12, 'tilt');
  near(c.lightDrop(3, 1e15 * 9.81), 0.491, 1e-3, '10¹⁵ g'); rel(c.lightDrop(3, 2e10) / c.lightDrop(3, 1e10), 2, 1e-12, 'linear in a');
});
group('bending: 4GM/(c²b) = 1.751″ at the Sun\'s edge; Newton gives half; γ form; falls as 1/b', () => {
  near(c.LIMB, 1.7512, 1e-4, 'limb'); rel(c.deflectNewton(c.RSUN), c.LIMB / 2, 1e-15, 'half'); rel(c.deflectGamma(c.RSUN, 1), c.LIMB, 1e-15, 'γ = 1');
  rel(c.deflectGamma(c.RSUN, 0), c.LIMB / 2, 1e-15, 'γ = 0'); rel(c.deflectGR(2 * c.RSUN), c.LIMB / 2, 1e-15, '1/b');
});
group('1919 results: Sobral 1.98 ± 0.12″ is 1.9σ from Einstein and 9.2σ from Newton; Príncipe 1.61 ± 0.30″ is 0.5σ and 2.4σ; VLBI γ within 0.4σ of 1', () => {
  const [S, P] = c.MEASURED; assert.strictEqual(S.d, 1.98); assert.strictEqual(S.e, 0.12); assert.strictEqual(P.d, 1.61); assert.strictEqual(P.e, 0.30);
  near((S.d - c.LIMB) / S.e, 1.91, 0.01, 'Sobral vs GR'); near((S.d - c.LIMB / 2) / S.e, 9.21, 0.01, 'Sobral vs Newton');
  near((c.LIMB - P.d) / P.e, 0.47, 0.01, 'Príncipe vs GR'); near((P.d - c.LIMB / 2) / P.e, 2.45, 0.01, 'Príncipe vs Newton');
  near((1 - c.VLBI.gamma) / c.VLBI.e, 0.378, 0.01, 'VLBI');
});
group('the Sun on 1919 May 29 13:06 UT: RA 67.50°, Dec +21.83° (J2000), 1.0139 au, radius 946″; the Hyades stars 1.1° to 3.3° away', () => {
  const s = c.sunAt(c.JD1919); near(s.ra, 67.500, 2e-3, 'RA'); near(s.dec, 21.829, 2e-3, 'Dec'); near(s.R, 1.01388, 1e-4, 'distance'); near(c.sunRadiusArcsec(s.R), 946.1, 1e-3, 'radius');
  /* Meeus 1998 example 25.a: 1992 Oct 13.0 TD, apparent λ 199.90988° (the low precision theory), R 0.99766 au */
  const m = c.sunAt(2448908.5); near(m.R, 0.99766, 1e-5, 'Meeus R');
  for (const st of c.STARS) { const o = c.offset(s, st); assert(o.theta > 1.0 && o.theta < 3.3, 'star within 3.3°'); assert(st[2] <= 5.5, 'V ≤ 5.5'); }
  const o = c.offset(s, [s.ra, s.dec + 2]); near(o.theta, 2, 1e-9, 'north'); near(o.x, 0, 1e-9, 'x'); near(o.y, Math.tan(2 * Math.PI / 180) * 180 / Math.PI, 1e-9, 'gnomonic y');
  near(c.deflectGR(c.impact(1.128, s.R)), 0.408, 2e-3, 'nearest star');
});
group('Mercury: 0.1035″ an orbit, 42.98″ a century; planets 531.50″; observed 574.10 − 531.50 = 42.60 ± 0.65″, 0.6σ from Einstein', () => {
  near(c.precGRorbit(), 0.10352, 1e-4, 'per orbit'); near(c.perCentury(c.precGRorbit()), 42.98, 1e-3, 'per century'); near(c.planetSum(), 531.499, 1e-9, 'planets');
  const gap = c.OBSERVED.v - c.planetSum(); near(gap, 42.601, 1e-9, 'gap'); near((c.perCentury(c.precGRorbit()) - gap) / c.OBSERVED.e, 0.585, 0.01, 'σ');
  near(1296000 / c.perCentury(c.precGRorbit()) / 1e6 * 100, 3.015, 1e-3, 'a full turn in 3.0 million years');
});
group('Kepler: E − e sin E = M; perihelion at 0.3075 au, aphelion 0.4667 au; the turn angle w turns the ellipse', () => {
  for (const M of [0.1, 1, 2, 3, 5]) { const E = c.kepler(M, c.E_MERC); near(E - c.E_MERC * Math.sin(E), M, 1e-13, 'M = ' + M); }
  const p = c.orbitPos(c.A_MERC, c.E_MERC, 0, 0); near(p[0], c.A_MERC * (1 - c.E_MERC), 1e-12, 'perihelion'); near(p[1], 0, 1e-15, 'on the axis');
  const a = c.orbitPos(c.A_MERC, c.E_MERC, 0, Math.PI); near(-a[0], 0.46670, 1e-4, 'aphelion');
  const q = c.orbitPos(c.A_MERC, c.E_MERC, Math.PI / 2, 0); near(q[1], c.A_MERC * (1 - c.E_MERC), 1e-12, 'turned 90°');
});
console.log(`${n} groups passed`);
