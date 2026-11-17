'use strict';
// Finding Exoplanets: limb darkened transits and, in the Two stars switch (2026-10-31), eclipsing binaries: the light curve of two
// luminous stars, both velocity curves, and the analysis the Eclipsing Binary Stars worksheet asks for.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('exoplanets', 'TAU,DAY,AU,R_SUN,GM_SUN,U1,U2,I,blocked,solveE,T_SUN,ebLight,ebFlux,ebK,ebA,ebMasses,ebRadii,ebT2');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
const abs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('limb darkening and Kepler\'s equation', () => {
  /* a small planet at the center hides k² × I(0)/(1 − u₁/3 − u₂/6) = 1.215 k² of the light */
  near(c.blocked(0, 0.01), 1e-4 / (1 - c.U1 / 3 - c.U2 / 6), 2e-3, 'small planet at center');
  abs(c.blocked(1.2, 0.1), 0, 0, 'clear of the star'); abs(c.blocked(0, 2), 1, 3e-4, 'star fully covered');
  for (const e of [0, 0.3, 0.8]) for (const M of [0.1, 1, 3, 6]) { const E = c.solveE(M, e); abs(E - e * Math.sin(E), M, 1e-12, `Kepler e ${e}`); }
});

group('two stars: light', () => {
  /* twin stars, centered: one star is hidden, so half the light */
  abs(c.ebFlux(0, 0, true, 1, 1, 5772, 5772), 0.5, 2e-4, 'twins');
  /* a total eclipse of the smaller star leaves exactly the larger one's light, L₁/(L₁ + L₂) */
  const L1 = c.ebLight(1, 5772), L2 = c.ebLight(0.3, 3300); abs(L1, 1, 1e-12, 'the Sun');
  abs(c.ebFlux(0, 0, false, 1, 0.3, 5772, 3300), L1 / (L1 + L2), 1e-12, 'total eclipse');
  /* out of eclipse: everything */
  abs(c.ebFlux(3 * c.R_SUN, 0, true, 1, 0.3, 5772, 3300), 1, 0, 'out of eclipse');
  /* the star 2 temperature back from the total eclipse */
  abs(c.ebT2(5772, 1, 0.3, L1 / (L1 + L2)), 3300, 1e-6, 'T₂ from the flat bottom');
  /* equal areas hidden: the eclipse depths go as the surface brightness, T⁴ */
  const d1 = 1 - c.ebFlux(0, 0.2 * c.R_SUN, true, 1, 1, 8000, 5000), d2 = 1 - c.ebFlux(0, 0.2 * c.R_SUN, false, 1, 1, 8000, 5000);
  near(d1 / d2, (8000 / 5000) ** 4, 1e-9, 'depth ratio');
});

group('two stars: velocities and masses', () => {
  const Per = 1.6646 * c.DAY, K = c.ebK(Per, 1, 0.3, Math.PI / 2, 0);
  near(K.K1 / K.K2, 0.3, 1e-12, 'K₁/K₂ = M₂/M₁');
  /* K₁ + K₂ is the relative orbital speed 2πa/P for a circular orbit, edge on */
  near(K.K1 + K.K2, c.TAU * c.ebA(Per, 1.3) / Per, 1e-12, 'relative speed');
  const m = c.ebMasses(Per, K.K1, K.K2, 0); near(m.M1, 1, 1e-12, 'M₁'); near(m.M2, 0.3, 1e-12, 'M₂');
  /* inclined: the velocities give M sin³i */
  const i = 80 * Math.PI / 180, Ki = c.ebK(Per, 1, 0.3, i, 0), mi = c.ebMasses(Per, Ki.K1, Ki.K2, 0); near(mi.M1, Math.sin(i) ** 3, 1e-12, 'M₁ sin³i');
  /* eccentric */
  const Ke = c.ebK(5 * c.DAY, 1.5, 1.2, Math.PI / 2, 0.3), me = c.ebMasses(5 * c.DAY, Ke.K1, Ke.K2, 0.3); near(me.M1, 1.5, 1e-12, 'eccentric M₁'); near(me.M2, 1.2, 1e-12, 'eccentric M₂');
  /* the Sun and Earth: 1 AU in a year */
  near(c.ebA(365.25 * c.DAY, 1), c.AU, 2e-5, 'Kepler III');
});

group('two stars: radii from the contact times (straight line approximation)', () => {
  /* central eclipse, circular orbit: the true contact times on the curved orbit give radii within 1.5% of the true ones at a = 6.5 R☉ */
  const Per = 1.6646 * c.DAY, a = c.ebA(Per, 1.3), K = c.ebK(Per, 1, 0.3, Math.PI / 2, 0);
  const t14 = Per / Math.PI * Math.asin(1.3 * c.R_SUN / a), t23 = Per / Math.PI * Math.asin(0.7 * c.R_SUN / a), r = c.ebRadii(K.K1, K.K2, t14, t23);
  near(r.big, 1, 0.015, 'R₁'); near(r.small, 0.3, 0.015, 'R₂');
  /* in the limit of a wide orbit the approximation is exact */
  const P2 = 400 * c.DAY, a2 = c.ebA(P2, 1.3), K2 = c.ebK(P2, 1, 0.3, Math.PI / 2, 0);
  const r2 = c.ebRadii(K2.K1, K2.K2, P2 / Math.PI * Math.asin(1.3 * c.R_SUN / a2), P2 / Math.PI * Math.asin(0.7 * c.R_SUN / a2));
  near(r2.big, 1, 1e-4, 'wide R₁'); near(r2.small, 0.3, 1e-4, 'wide R₂');
});

group('transmission spectra: scale height and molecular weight', () => {
  const t = core('exoplanets', 'K_B,M_U,scaleHeight,N_FEATURE,ATM,altH,specDepth,featureEst,specCurve,ch4Frac,RAY_LAM,SPEC_LO,SPEC_HI,R_SUN');
  const VDC = require('../../demos/lib/constants.js');
  /* constants equal constants.js */
  abs(t.K_B, VDC.kB, 0, 'k_B'); abs(t.M_U, VDC.u, 0, 'm_u');
  abs(t.ATM.h2he.mu, VDC.muSolarH2, 0, 'μ H2 + He'); abs(t.ATM.h2o.mu, VDC.MH2Ou, 0, 'μ H2O'); abs(t.ATM.n2.mu, VDC.MN2u, 0, 'μ N2'); abs(t.ATM.co2.mu, VDC.MCO2u, 0, 'μ CO2');
  /* Earth's air at 288 K: H = kT/(μ m_u g) = 8.43 km (the textbook 8.4 km) */
  abs(t.scaleHeight(288, VDC.Mair * 1000, VDC.g) / 1000, 8.43, 0.01, 'H of air at 288 K');
  /* H ∝ T/(μ g) */
  near(t.scaleHeight(2000, 2.33, 10) / t.scaleHeight(1000, 2.33, 10), 2, 1e-12, 'H ∝ T');
  near(t.scaleHeight(1000, 2.33, 20) / t.scaleHeight(1000, 2.33, 10), 0.5, 1e-12, 'H ∝ 1/g');
  /* the hot Jupiter WASP-39 b (Mancini 2018): g = 4.26 m/s², H near 980 km */
  const RJ = 7.1492e7, Rp = 1.279 * RJ, g = 1.26686534e17 * 0.281 / (Rp * Rp);
  abs(g, 4.26, 0.01, 'WASP-39 b gravity'); abs(t.scaleHeight(1166, 2.33, g) / 1000, 977, 3, 'WASP-39 b H');
  /* the tallest band of every gas is N_FEATURE scale heights above the windows (at its center, within 5% from overlaps) */
  for (const gas of Object.keys(t.ATM)) {
    const top = Math.max(...t.ATM[gas].bands.map((b) => t.altH(b[1], gas, 500, 0)));
    abs(top, t.N_FEATURE, 0.1, `tallest ${gas} band`);
  }
  /* features shrink as 1/μ: from H2 + He to CO2 at the same T and g, 44.009/2.33 = 18.9 times */
  const Rs = 0.939 * t.R_SUN, peak = (gas) => { const H = t.scaleHeight(1166, t.ATM[gas].mu, g), c = t.specCurve(Rp, Rs, H, gas, 1166, 0), lo = Math.min(...c.map((p) => p[1])); return Math.max(...t.ATM[gas].bands.map((b) => t.specDepth(b[1], Rp, Rs, H, gas, 1166, 0))) - lo; };
  near(peak('h2he') / peak('co2'), 44.009 / 2.33, 0.03, 'feature ratio H2 + He / CO2');
  abs(44.009 / 2.33, 18.9, 0.05, 'μ ratio');
  /* and the feature agrees with the estimate n·2 R_p H/R_s² to a few percent (the second order term (H/R_s)² and overlaps) */
  near(peak('h2he'), t.featureEst(Rp, Rs, t.scaleHeight(1166, 2.33, g)), 0.06, 'feature size vs n·2RpH/Rs²');
  /* Rayleigh slope: far blue of every band, dz/d ln λ → −4H */
  const z1 = t.altH(0.1, 'co2', 300, 0), z2 = t.altH(0.1 * Math.E, 'co2', 300, 0); abs(z1 - z2, 4, 0.1, 'Rayleigh slope −4H per e fold');
  /* an opaque cloud deck above every band flattens the spectrum completely */
  const flat = t.specCurve(Rp, Rs, 1e6, 'h2he', 1166, 6); abs(Math.max(...flat.map((p) => p[1])) - Math.min(...flat.map((p) => p[1])), 0, 1e-15, 'cloudy spectrum is flat');
  /* with no atmosphere (H = 0) the depth is the light curve's (R_p/R_s)² at every wavelength */
  abs(t.specDepth(1.4, Rp, Rs, 0, 'h2he', 1166, 0), (Rp / Rs) ** 2, 1e-18, 'H = 0');
  /* methane shows below about 1,000 K and gives way to CO above */
  assert(t.ch4Frac(600) > 0.99 && t.ch4Frac(1400) < 0.01, 'CH4 switch'); abs(t.ch4Frac(1000), 0.5, 1e-12, 'CH4 midpoint');
  assert(t.altH(3.3, 'h2he', 600, 0) > 1.9 && t.altH(3.3, 'h2he', 1500, 0) < 0.5, 'the 3.3 µm methane band comes and goes with T');
  /* the band positions asked for are where the bands are */
  for (const [gas, lam] of [['h2o', 1.4], ['h2o', 1.9], ['h2o', 2.7], ['co2', 4.3], ['co2', 15], ['h2he', 0.589], ['h2he', 3.3]]) {
    const at = t.altH(lam, gas, 500, 0), off = Math.min(t.altH(lam * 0.85, gas, 500, 0), t.altH(lam * 1.15, gas, 500, 0)); assert(at > off + 0.5, `band at ${lam} µm in ${gas}: ${at} vs ${off}`);
  }
  assert(t.SPEC_LO === 0.3 && t.SPEC_HI === 20, 'range');
});

group('weighing two stars (Binary Stars, 2026-11-17): Kepler, the seesaw, L = M⁴ and the Doppler shift', () => {
  const w = core('exoplanets', 'YR_K,keplerMass,seesaw,msLum,msStar,dopplerLam,HALPHA,C_LIGHT,ebA,ebK,ebLight,DAY,AU,TAU');
  /* the year of the law is the period of 1 AU about 1 M☉: 365.2569 d (the sidereal year without the Earth's own mass) */
  near(w.YR_K / w.DAY, 365.2569, 1e-6, 'Kepler year');
  abs(w.keplerMass(1, 1), 1, 0, 'Earth and Sun');
  /* the lesson's numbers: 23 AU and 80 yr give 1.9 M☉; 8 AU and 4 yr give 32 M☉; 6 AU and 6 yr give 6 M☉ */
  near(w.keplerMass(23, 80), 12167 / 6400, 1e-12, 'Alpha Cen, lesson'); abs(w.keplerMass(8, 4), 32, 1e-12, '8 AU, 4 yr'); abs(w.keplerMass(6, 6), 6, 1e-12, '6 AU, 6 yr');
  /* any period from Kepler's law gives back the masses */
  for (const [M1, M2, Pd] of [[1, 0.3, 1.66], [1.0788, 0.9092, 79.762 * 365.25], [2, 4, 2191]]) {
    const a = w.ebA(Pd * w.DAY, M1 + M2) / w.AU; near(w.keplerMass(a, Pd * w.DAY / w.YR_K), M1 + M2, 1e-12, 'a³/P²');
    const s = w.seesaw(a, M1, M2); near(s.a1 * M1, s.a2 * M2, 1e-12, 'M1 a1 = M2 a2'); near(s.a1 + s.a2, a, 1e-12, 'a1 + a2 = a');
    /* the velocity amplitudes split the same way: K1/K2 = a1/a2 */
    const K = w.ebK(Pd * w.DAY, M1, M2, 1, 0); near(K.K1 / K.K2, s.a1 / s.a2, 1e-12, 'K1/K2 = a1/a2');
  }
  /* the seesaw example: twice as far is half the mass */
  const s = w.seesaw(6, 2, 4); near(s.a1 / s.a2, 2, 1e-12, 'Ex29');
  /* L = M⁴, and the simple main sequence star sits on it */
  abs(w.msLum(3), 81, 1e-12, '3 M☉'); near(w.msLum(0.2), 0.0016, 1e-12, '0.2 M☉'); near(w.msLum(1.5), 5.0625, 1e-12, '1.5 M☉');
  for (const M of [0.5, 1, 2, 4]) { const m = w.msStar(M); near(w.ebLight(m.r, m.t), w.msLum(M), 0.01, `main sequence star of ${M} M☉`); }
  /* Ex30: a 0.066 nm swing of Hα is 30 km/s */
  near(w.C_LIGHT, 299792458, 0, 'c'); near((w.dopplerLam(656.3, 30160) - 656.3), 0.066, 2e-3, 'Ex30');
  abs(w.dopplerLam(w.HALPHA, 0), w.HALPHA, 0, 'at rest');
});

console.log(`${n} groups passed`);
