'use strict';
// Inside the Sun: the homologous thermostat (n = 3 polytrope, pp chain Gamow rate), the 4 ¹H → ⁴He mass deficit, lifetimes,
// the random walk numbers and the solar neutrino numbers. Known values from the lesson plan (Stars and Galaxies, Unit 1, Days 3
// and 4) and from the sources cited in the demo.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('inside-the-sun', 'E_G_KEV,tauPP,nuPP,fusionRatio,xEq,relaxTime,thermoStep,EGRAV,DM_U,Q_MEV,MASS_FRAC,ENU_MEV,massLoss,heliumRate,hydrogenRate,lifetime,coalTime,kelvinTime,walkTime,firstPassage,walkSteps,rmsDistance,thomsonTime,SUNPROF,SUNCZ,nuFlux,SNO_CC,SNO_NC,TC0,RHOC0,C_LIGHT,GM_SUN,R_SUN,L_SUN,AU,YR,MH1,MHE4');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const MYR = 1e6 * c.YR, MSUN = c.GM_SUN / 6.67430e-11;

group('constants equal demos/lib/constants.js', () => {
  for (const [k, v] of [['C_LIGHT', 'c'], ['GM_SUN', 'GMsun'], ['R_SUN', 'Rsun'], ['L_SUN', 'Lsun'], ['AU', 'au'], ['YR', 'yr'], ['MH1', 'mH1u'], ['MHE4', 'mHe4u'], ['TC0', 'TcSun'], ['RHOC0', 'rhocSun']]) assert.strictEqual(c[k], VDC[v], k);
});

group('Gamow energy for p + p is 493 keV and τ = 33.8 T6^(−1/3) (Clayton); ν = d ln ε/d ln T ≈ 3.8 at 15.7 MK', () => {
  near(c.E_G_KEV, 493.1, 1e-3, 'E_G');
  near(c.tauPP(1e6), 33.81, 2e-3, 'τ at 1 MK');
  near(c.tauPP(8e6) / c.tauPP(1e6), 0.5, 1e-12, 'τ ∝ T^(−1/3)');
  near(c.nuPP(c.TC0), 3.83, 5e-3, 'ν at the center');
});

group('fusion power: 1 L☉ today; a 3 % squeeze gives 1.23 L☉; the power law limit is (3 + ν) for a small squeeze', () => {
  near(c.fusionRatio(1, 1, 1), 1, 1e-15, 'today');
  near(c.fusionRatio(0.97, 1 / 0.97, 1), 1.2305, 1e-3, '3 % squeeze');
  const e = 1e-5, slope = Math.log(c.fusionRatio(1 - e, 1 / (1 - e), 1)) / -Math.log(1 - e);
  near(slope, 3 + c.nuPP(c.TC0), 1e-4, 'd ln L / d ln(1/x) = 3 + ν');
  near(c.fusionRatio(1, 1, 1.5), 1.5, 1e-15, 'knob multiplies');
});

group('equilibria: xEq(1) = 1; a faster fusion knob gives a bigger, cooler core that makes exactly L☉', () => {
  near(c.xEq(1), 1, 1e-9, 'xEq(1)');
  const x = c.xEq(1.5); assert(x > 1); near(c.fusionRatio(x, 1 / x, 1.5), 1, 1e-9, 'balance at xEq(1.5)');
  const y = c.xEq(0.7); assert(y < 1); near(c.fusionRatio(y, 1 / y, 0.7), 1, 1e-9, 'balance at xEq(0.7)');
});

group('energy: |E| = (3/4) GM²/R (n = 3 polytrope, virial); Kelvin time GM²/(RL) is 31.4 Myr; relaxation |E|/((3+ν)L) is 3.4 Myr', () => {
  near(c.EGRAV, 0.75 * c.GM_SUN * MSUN / c.R_SUN, 1e-12, '|E|');
  near(c.kelvinTime() / MYR, 31.40, 1e-3, 'Kelvin');
  near(c.relaxTime() / MYR, 3.447, 2e-3, 'relaxation');
});

group('thermostat run: a 3 % squeeze returns to R0 (to 1e-4 in 40 Myr) and the decay matches the linear time; the lid runs away', () => {
  let s = { x: 0.97, th: 1 / 0.97 }; const dt = 0.005 * MYR;
  let t = 0, t1 = null; const d0 = 0.03;
  while (t < 40 * MYR) { s = c.thermoStep(s, dt, 1, false); t += dt; if (t1 === null && Math.abs(1 - s.x) < d0 / Math.E) t1 = t; }
  assert(Math.abs(1 - s.x) < 1e-4, 'returns: x = ' + s.x); near(s.th, 1 / s.x, 1e-12, 'θ = 1/x without a lid');
  near(t1 / c.relaxTime(), 1, 0.12, 'first e-fold near the linear time (nonlinear at 3 %)');
  /* energy bookkeeping: E(t) − E(0) = ∫(L_fus − L) dt, checked over the run */
  let s2 = { x: 0.97, th: 1 / 0.97 }, inte = 0; const E = (x) => -c.EGRAV / x;
  for (let k = 0; k < 2000; k++) { const a = c.fusionRatio(s2.x, s2.th, 1) - 1; const nx = c.thermoStep(s2, dt, 1, false); const b = c.fusionRatio(nx.x, nx.th, 1) - 1; inte += 0.5 * (a + b) * c.L_SUN * dt; s2 = nx; }
  near(E(s2.x) - E(0.97), inte, 1e-4, 'dE/dt = L_fus − L');
  let L = { x: 0.99, th: 1 / 0.99 }, tl = 0; while (c.fusionRatio(L.x, L.th, 1) < 100 && tl < 1e3 * MYR) { L = c.thermoStep(L, dt, 1, true); tl += dt; }
  assert(c.fusionRatio(L.x, L.th, 1) >= 100 && L.x === 0.99, 'lid: x fixed and fusion reaches 100 L☉'); assert(tl < 40 * MYR, 'runaway within 40 Myr: ' + tl / MYR);
});

group('mass deficit: 4 m(¹H) − m(⁴He) = 0.0286967 u = 0.712 %, 26.73 MeV (lesson: 0.7 %)', () => {
  near(c.DM_U, 0.0286967, 1e-6, 'Δm'); near(c.MASS_FRAC, 0.007118, 1e-3, 'fraction'); near(c.Q_MEV, 26.731, 1e-4, 'Q');
});

group('the Sun loses L/c² = 4.26 × 10⁹ kg/s, fuses 6.10 × 10¹¹ kg of hydrogen a second, and lasts 10.5 Gyr (lesson: about 10)', () => {
  near(c.massLoss(c.L_SUN), 4.259e9, 1e-3, 'L/c²');
  near(c.hydrogenRate(c.L_SUN), 6.104e11, 2e-3, 'hydrogen');
  near(c.lifetime(MSUN, c.L_SUN) / c.YR, 1.053e10, 2e-3, 'lifetime');
  near(c.lifetime(2 * MSUN, 16 * c.L_SUN) / c.lifetime(MSUN, c.L_SUN), 1 / 8, 1e-12, 'Ex14 is an eighth of the Sun');
  near(c.lifetime(2 * 2.0e30, 16 * 3.8e26) / c.YR, 1.3e9, 0.03, 'lesson Ex14 with its rounded constants: 1.3 billion years');
  near(c.massLoss(25 * 3.8e26), 1.06e11, 0.01, 'lesson Ex10: Sirius 1.1 × 10¹¹ kg/s');
  near(c.coalTime() / c.YR, 4824, 2e-3, 'a coal Sun lasts thousands of years');
});

group('random walk: lesson Ex15 (100 steps → 10 m), Ex16 (0.5 mm steps → 2.0 × 10²⁴ steps, about 10⁵ yr)', () => {
  near(c.rmsDistance(100, 1), 10, 1e-15, 'Ex15'); near(c.rmsDistance(400, 1), 20, 1e-15, 'check in');
  near(c.walkSteps(7.0e8, 5e-4), 1.96e24, 1e-3, 'Ex16 N'); near(c.walkTime(7.0e8, 5e-4) / c.YR, 1.036e5, 2e-3, 'Ex16 t');
  near(c.firstPassage(7e8, 5e-4), c.walkTime(7e8, 5e-4) / 2, 1e-15, 'first passage is half');
  const tT = c.thomsonTime() / c.YR; assert(tT > 2e3 && tT < 1e4, 'electron scattering alone: ' + tT + ' yr'); assert(tT < 1.7e5, 'shorter than the real walk');
});

group('the model Sun (MESA, 4.57 Gyr): T_c = 15.7 MK, ρ_c ≈ 150 g/cm³, 99 % of the fusion inside 0.26 R☉, base of the convection zone 0.73', () => {
  const P = c.SUNPROF; near(Math.pow(10, P[0][1]), 1.566e7, 5e-3, 'central T'); near(Math.pow(10, P[0][2]), 151, 0.02, 'central ρ');
  const i = P.findIndex((r) => r[4] >= 0.99); assert(P[i][0] <= 0.275 && P[i][0] >= 0.225, '99 % radius ' + P[i][0]);
  near(c.SUNCZ, 0.731, 2e-3, 'CZ base'); assert(P.every((r, k) => !k || r[1] <= P[k - 1][1]), 'T falls outward');
});

group('neutrinos: R☉/c = 2.32 s, au/c = 499.0 s, 6.5 × 10¹⁴ per m² per s at Earth; SNO electron share 0.346', () => {
  near(c.R_SUN / c.C_LIGHT, 2.3206, 1e-4); near(c.AU / c.C_LIGHT, 499.005, 1e-5);
  near(c.nuFlux(), 6.485e14, 2e-3, 'flux'); near(c.nuFlux(), 2 * c.L_SUN / ((c.Q_MEV - c.ENU_MEV) * 1.602176634e-13) / (4 * Math.PI * c.AU * c.AU), 1e-12);
  near(c.SNO_CC / c.SNO_NC, 0.3458, 1e-3, 'SNO');
});

console.log(`${n} groups passed`);
