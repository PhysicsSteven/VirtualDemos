'use strict';
// Between the Stars (2026-11-17): dust dimming and reddening, Rayleigh scattering in air, the ionizing light of a hot star and its
// Strömgren sphere, and the 21 cm line, checked against the lesson's worked examples, published values and limits.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('between-the-stars', 'H,C,KB,EV,RYEV,ME,MP,M_U,MH1U,RSUN,YR,LY,TSUN,FHI,A21,ALPHA_B,NH_AV,M_H,E_ION,avOf,RV,LAM_V,ccm,tauAir,G_STD,AIR_COLUMN,sigmaAirV,rayleigh,aRel,letThrough,LAM_B,reddening,distanceError,massPerKm3,nAir,planck,photonTail,photonScale,ZETA3,qIon,qAll,stromgren,BALMER,LAM21,E21,TSTAR,LIFE,UPPER,flipsPerSecond,fObs,vFromF,sigmaV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js', () => {
  assert.strictEqual(c.H, VDC.h); assert.strictEqual(c.C, VDC.c); assert.strictEqual(c.KB, VDC.kB); assert.strictEqual(c.EV, VDC.eV);
  assert.strictEqual(c.RYEV, VDC.RyeV); assert.strictEqual(c.ME, VDC.me); assert.strictEqual(c.MP, VDC.mp); assert.strictEqual(c.M_U, VDC.u);
  assert.strictEqual(c.MH1U, VDC.mH1u); assert.strictEqual(c.RSUN, VDC.Rsun); assert.strictEqual(c.YR, VDC.yr); assert.strictEqual(c.LY, VDC.ly);
  assert.strictEqual(c.TSUN, VDC.Tsun); assert.strictEqual(c.G_STD, VDC.g);
  assert.strictEqual(c.FHI, VDC.fHI); assert.strictEqual(c.A21, VDC.A21); assert.strictEqual(c.ALPHA_B, VDC.alphaB); assert.strictEqual(c.NH_AV, VDC.NHperAV);
});

group('how empty is space (Ex4)', () => {
  /* one hydrogen atom per cm³ in a cube 1 km on a side: 10¹⁵ atoms, 1.7 × 10⁻¹² kg */
  near(c.massPerKm3(1), 1.67e-12, 0.003, 'Ex4');
  /* room air, 20 °C and 1 atm: 2.50 × 10¹⁹ molecules per cm³ (the lesson's "about 3 × 10¹⁹") */
  near(c.nAir, 2.503e19, 0.001, 'air');
});

group('dust: dimming and reddening', () => {
  /* Cardelli, Clayton and Mathis: A/A_V = 1 exactly at x = 1.82 µm⁻¹, and the curve joins its pieces at 1.1 and 3.3 µm⁻¹ */
  near(c.ccm(c.LAM_V), 1, 1e-12, 'V');
  near(c.ccm(1000 / 1.1 - 1e-6), c.ccm(1000 / 1.1 + 1e-6), 2e-3, 'join 1.1');
  near(c.ccm(1000 / 3.3 - 1e-6), c.ccm(1000 / 3.3 + 1e-6), 2e-3, 'join 3.3');
  /* blue is dimmed more than red: A_B/A_V = 1.32, A(700 nm)/A_V = 0.75; their R_V = A_V/E(B−V) comes back as 3.1 */
  near(c.ccm(440), 1.3245, 1e-3, 'A_B'); near(c.ccm(700), 0.750, 2e-3, 'A_700');
  near(1 / c.reddening(1, 'dust'), 3.08, 0.01, 'R_V back');
  /* the infrared power law A ∝ λ^−1.61 */
  near(c.ccm(2200) / c.ccm(1100), Math.pow(2, -1.61), 1e-9, 'IR');
  /* the dimming of a column: 2.21 × 10²¹ atoms per cm² is one magnitude; a kiloparsec at 1 per cm³ is 1.40 mag */
  near(c.avOf(1, 2.21e21 / 100, 'dust'), 1, 1e-12, 'one mag'); near(c.avOf(1, VDC.pc * 1000, 'dust'), 1.396, 0.001, 'kpc');
  /* Ex5: 1/10 through means 2.5 magnitudes, and a distance √10 = 3.16 times too big; 1/100: 10 times */
  near(c.letThrough(c.LAM_V, 2.5, 'dust'), 0.1, 1e-12, 'Ex5 f'); near(c.distanceError(0.1), Math.sqrt(10), 1e-12, 'Ex5');
  near(c.distanceError(c.letThrough(c.LAM_V, 5, 'dust')), 10, 1e-12, 'Ex5 ask');
  /* the exit ticket: 1/4 through, distance twice as big */
  near(c.distanceError(0.25), 2, 1e-12, 'exit ticket');
  /* no dust lets everything through */
  assert.strictEqual(c.letThrough(500, 0, 'dust'), 1);
});

group('air: Rayleigh scattering and the sunset', () => {
  /* Hansen and Travis 1974: the optical depth straight up is 0.0973 at 550 nm, and goes nearly as λ⁻⁴ */
  near(c.tauAir(550), 0.0973, 0.001, 'τ 550');
  near(c.tauAir(400) / c.tauAir(800), 16, 0.06, 'nearly λ⁻⁴');
  /* the air column above 1 m², p/(m g): 2.15 × 10²⁵ molecules per cm², so σ(550) = 4.5 × 10⁻²⁷ cm² */
  near(c.AIR_COLUMN, 2.147e25, 0.001, 'column'); near(c.sigmaAirV(), 4.55e-27, 0.003, 'σ');
  /* straight up, one atmosphere's worth: A_V = 1.0857 τ */
  near(c.avOf(1, c.AIR_COLUMN / 100, 'air'), 2.5 * Math.LOG10E * c.tauAir(c.LAM_V), 1e-12, 'zenith');
  /* air reddens more steeply than dust: A_B/A_V bigger */
  assert(c.rayleigh(440) > c.ccm(440), 'air bluer');
});

group('nebulae: ionizing photons and the Strömgren sphere', () => {
  /* hydrogen's ionization energy with the reduced mass: 13.598 eV (NIST 13.598434), the edge at 91.18 nm */
  near(c.E_ION / c.EV, 13.598434, 2e-5, 'E_ion'); near(c.H * c.C / c.E_ION * 1e9, 91.18, 1e-4, 'edge');
  /* the series for ∫ x²/(eˣ − 1) from 0 is 2ζ(3) */
  near(c.photonTail(1e-12), 2 * c.ZETA3, 1e-5, 'whole Planck photon integral (the series stops at 400 terms; real stars have x₀ > 3)');
  /* checked by direct integration at x₀ = 5 */
  { let s = 0; const h = 1e-4; for (let x = 5 + h / 2; x < 80; x += h) s += x * x / Math.expm1(x) * h; near(c.photonTail(5), s, 1e-7, 'tail at 5'); }
  /* the total photon rate of the Sun as a blackbody: 4πR² × 1.5205 × 10¹⁵ T³ per m²: about 1.7 × 10⁴⁵ per second */
  near(c.qAll(5772, c.RSUN) / (4 * Math.PI * c.RSUN ** 2), 1.5205e15 * 5772 ** 3, 1e-4, 'photon flux');
  /* a 40,000 K, 10 R☉ star: about 1.2 × 10⁴⁹ ionizing photons a second, a fifth of all its photons (an O7 star gives 10^48.6 to 10^49) */
  near(c.qIon(40000, 10 * c.RSUN), 1.22e49, 0.01, 'O star'); near(c.qIon(40000, 10 * c.RSUN) / c.qAll(40000, 10 * c.RSUN), 0.206, 0.01, 'share');
  /* a 12,000 K B star ionizes thousands of times less; the Sun about 10⁻⁹ of its photons */
  assert(c.qIon(12000, 3 * c.RSUN) < 1e-4 * c.qIon(40000, 10 * c.RSUN), 'B star');
  assert(c.qIon(5772, c.RSUN) / c.qAll(5772, c.RSUN) < 1e-9, 'Sun');
  /* Strömgren: R_S ∝ Q^{1/3} n^{−2/3}; Q = 10⁴⁹ at n = 100 gives (3Q/(4πn²α_B))^{1/3} = 9.73 × 10¹⁸ cm = 3.15 pc */
  near(c.stromgren(1e49, 100) / VDC.pc, 3.154, 0.001, 'R_S');
  near(c.stromgren(8e49, 100) / c.stromgren(1e49, 100), 2, 1e-12, 'Q^1/3'); near(c.stromgren(1e49, 800) / c.stromgren(1e49, 100), 0.25, 1e-12, 'n^-2/3');
  /* recombinations inside it equal the ionizing photons */
  { const R = c.stromgren(1e49, 100) * 100; near(4 / 3 * Math.PI * R ** 3 * 100 * 100 * c.ALPHA_B, 1e49, 1e-12, 'balance'); }
  /* the Balmer lines: Hα is the strongest, 2.86 times Hβ (case B) */
  assert.strictEqual(c.BALMER[0][0], 656.28); assert.strictEqual(c.BALMER[0][2], 2.86);
});

group('the 21 cm line', () => {
  /* Ex6: f = c/λ with λ = 0.21 m: 1.4 GHz; the exact line is 21.106 cm */
  near(c.C / 0.21 / 1e9, 1.43, 0.002, 'Ex6'); near(c.LAM21 * 100, 21.106, 1e-5, 'λ');
  /* the photon energy 5.874 µeV and its temperature 0.0682 K */
  near(c.E21 / c.EV * 1e6, 5.8743, 1e-4, 'ΔE'); near(c.TSTAR, 0.06817, 1e-3, 'T*');
  /* one atom waits 1/A = 11.0 million years (the lesson: about 10 million) */
  near(c.LIFE / c.YR / 1e6, 10.99, 1e-3, 'lifetime');
  /* flips each second scale with N; the Galaxy's 8 × 10⁶⁶ atoms: 1.7 × 10⁵² a second */
  near(c.flipsPerSecond(8e66), 0.75 * 8e66 * 2.8843e-15, 1e-12, 'galaxy'); near(c.flipsPerSecond(2) / c.flipsPerSecond(1), 2, 1e-12, 'linear');
  /* Doppler: 50 km/s away lowers the frequency by 0.237 MHz; reading the shift back gives 50 km/s */
  near(c.FHI - c.fObs(5e4), 236858.7, 1e-6, 'shift'); near(c.vFromF(c.fObs(5e4)), 5e4, 1e-9, 'round trip');
  assert.strictEqual(c.fObs(0), c.FHI);
  /* thermal width at 100 K: √(kT/m_H) = 0.908 km/s */
  near(c.sigmaV(100) / 1000, 0.9083, 1e-3, 'σ_v');
});

console.log(`test_between-the-stars: ${n} groups passed`);
