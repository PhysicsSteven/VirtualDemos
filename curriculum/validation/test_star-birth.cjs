'use strict';
// Star Birth (2026-11-17): the Jeans mass and the moving virial cloud, spin up and the disk edge, the cocoon's Wien peak, and the
// protostar's core temperature with the brown dwarf limit, checked against the lesson's worked examples, textbook values and limits.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('star-birth', 'G,KB,M_U,ME,HBAR,WIEN,MSUN,MJUP,RSUN,RJUP,AU,YR,MYR,MU_MOL,MU_ION,MU_E,rhoOf,pressure,soundSq,jeansMass,jeansLength,cloudRadius,freeFall,cloudAccel,cloudStep,spinUp,diskRadius,keplerP,wienPeak,laneEmden,LE,RHOC_MEAN,N15,KDEG,coreT,coreTmax,minMass,igniteRadius');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js', () => {
  assert.strictEqual(c.G, VDC.G); assert.strictEqual(c.KB, VDC.kB); assert.strictEqual(c.M_U, VDC.u); assert.strictEqual(c.ME, VDC.me);
  assert.strictEqual(c.HBAR, VDC.hbar); assert.strictEqual(c.WIEN, VDC.wienB); assert.strictEqual(c.MU_MOL, VDC.muSolarH2);
  near(c.MSUN, VDC.Msun, 1e-15, 'Msun'); near(c.MJUP, VDC.GMjup / VDC.G, 1e-15, 'Mjup');
  assert.strictEqual(c.RSUN, VDC.Rsun); assert.strictEqual(c.RJUP, VDC.Rjup); assert.strictEqual(c.AU, VDC.au); assert.strictEqual(c.YR, VDC.yr);
});

group('cold and dense: pressure and the Jeans mass', () => {
  /* Ex7: same density, 10 K against 10,000 K: the cold gas pushes 1,000 times more weakly */
  near(c.pressure(1e4, 10) / c.pressure(1e4, 1e4), 1e-3, 1e-12, 'Ex7');
  /* P = nkT: 10,000 per cm³ at 10 K is 1.38 × 10⁻¹² Pa */
  near(c.pressure(1e4, 10), 1e10 * 1.380649e-23 * 10, 1e-12, 'nkT');
  /* the Jeans mass at 10 K and 10⁴ per cm³ (Carroll and Ostlie eq. 12.14 with μ = 2.33): about 5.5 M☉ */
  near(c.jeansMass(10, 1e4) / c.MSUN, 5.46, 0.005, 'M_J');
  /* scaling: M_J ∝ T^{3/2} n^{−1/2} */
  near(c.jeansMass(40, 1e4) / c.jeansMass(10, 1e4), 8, 1e-12, 'T^1.5');
  near(c.jeansMass(10, 4e4) / c.jeansMass(10, 1e4), 0.5, 1e-12, 'n^-0.5');
  /* the same core at 10,000 K needs (1,000)^{3/2} ≈ 31,600 times more mass */
  near(c.jeansMass(1e4, 1e4) / c.jeansMass(10, 1e4), Math.pow(1000, 1.5), 1e-12, 'hot core');
  /* a cloud holding exactly the Jeans mass has radius equal to the Jeans length and stands still: R̈ = 0 */
  const MJ = c.jeansMass(10, 1e4), R = c.cloudRadius(MJ, 1e4);
  near(R, c.jeansLength(10, 1e4), 1e-12, 'R = λ_J at M_J');
  assert(Math.abs(c.cloudAccel(R, MJ, 10)) < 1e-12 * c.G * MJ / (R * R), 'equilibrium at M_J');
  assert(c.cloudAccel(R, 2 * MJ, 10) < 0 && c.cloudAccel(R, 0.5 * MJ, 10) > 0, 'heavier falls, lighter spreads');
  /* the free fall time at 10⁴ per cm³: 0.338 Myr */
  near(c.freeFall(c.rhoOf(1e4)) / c.MYR, 0.338, 0.005, 't_ff');
});

group('a pressureless cloud falls in one free fall time', () => {
  /* T → 0: the Verlet cloud reaches the center at t_ff = √(3π/(32Gρ)) */
  const M = 10 * c.MSUN, R0 = c.cloudRadius(M, 1e4), tff = c.freeFall(c.rhoOf(1e4));
  let st = { R: R0, V: 0, t: 0 }; const dt = tff / 2e5;
  while (st.R > 1e-3 * R0) st = c.cloudStep(st, M, 1e-9, dt);
  near(st.t, tff, 2e-3, 'free fall');
  /* energy: ½V² − (3/5)GM/R is kept */
  let s2 = { R: R0, V: 0, t: 0 }; for (let i = 0; i < 1e5; i++) s2 = c.cloudStep(s2, M, 1e-9, dt);
  near(0.3 * s2.V * s2.V - 0.6 * c.G * M / s2.R, -0.6 * c.G * M / R0, 1e-6, 'energy');
});

group('protostar and disk: shrink, spin up, Wien', () => {
  /* Ex8: 10,000 AU to the Sun's size, 0.0093 AU across: shrink 1.1 × 10⁶, density up 1.3 × 10¹⁸ */
  const f = 10000 / 0.0093; near(f, 1.08e6, 0.005, 'Ex8 shrink'); near(f ** 3, 1.24e18, 0.01, 'Ex8 density (1.1e6 cubed is 1.3e18)');
  near(2 * c.RSUN / c.AU, 0.0093, 0.001, 'the Sun across in AU');
  /* Ex9: once a million years at 10,000 AU, to 100 AU across: once every 100 years */
  near(c.spinUp(c.MYR, 10000, 100) / c.YR, 100, 1e-12, 'Ex9');
  /* the disk edge is where spin and orbit periods agree: the spin period there equals the Kepler period */
  for (const P0 of [1, 5, 10]) {
    const rd = c.diskRadius(10000 * c.AU, P0 * c.MYR, c.MSUN);
    near(c.spinUp(P0 * c.MYR, 10000 * c.AU, 2 * rd), c.keplerP(rd, c.MSUN), 1e-10, 'edge ' + P0);
  }
  /* the default core, once every 5 Myr: edge 25 AU; once every 10 Myr: 6.25 AU (∝ 1/P0²) */
  near(c.diskRadius(10000 * c.AU, 5 * c.MYR, c.MSUN) / c.AU, 25.0, 0.003, 'edge 5 Myr');
  near(c.diskRadius(10000 * c.AU, 5 * c.MYR, c.MSUN) / c.diskRadius(10000 * c.AU, 10 * c.MYR, c.MSUN), 4, 1e-12, '1/P0²');
  /* Kepler: 1 AU around 1 M☉ is one year (to the Gaussian year, 365.2569 d) */
  near(c.keplerP(c.AU, c.MSUN) / 86400, 365.2569, 1e-5, 'Kepler year');
  /* the cocoon at 300 K glows at 9.66 µm (the lesson rounds Wien's constant: 9,700 nm) */
  near(c.wienPeak(300) * 1e6, 9.659, 1e-3, 'Wien');
});

group('ignition: the n = 3/2 polytrope and the brown dwarf limit', () => {
  /* Lane Emden n = 3/2: ξ₁ = 3.65375, −ξ₁²θ′ = 2.71406, ρ_c/ρ̄ = 5.99071, N = 0.42422 (Chandrasekhar 1939; Horedt 2004) */
  near(c.LE.xi1, 3.65375, 2e-5, 'ξ1'); near(-c.LE.xi1 * c.LE.xi1 * c.LE.dth, 2.71406, 2e-5, 'mass');
  near(c.RHOC_MEAN, 5.99071, 2e-5, 'ρc/ρ̄'); near(c.N15, 0.42422, 2e-4, 'N');
  /* n = 1 has the exact solution sin ξ/ξ: ξ₁ = π */
  near(c.laneEmden(1).xi1, Math.PI, 1e-6, 'n = 1');
  /* ionized solar gas: μ_ion = 1/(X + Y/4 + Z/16) = 1.2483, μ_e = 2/(1 + X) = 1.1507 */
  near(c.MU_ION, 1.2483, 1e-4, 'μ_ion'); near(c.MU_E, 1.1507, 1e-4, 'μ_e');
  /* far from degeneracy (big R) the core is an ideal gas: T_c ∝ M/R, so doubling R halves T_c */
  const M = c.MSUN, T1 = c.coreT(M, 100 * c.RSUN), T2 = c.coreT(M, 200 * c.RSUN); near(T1 / T2, 2, 2e-3, 'ideal limit');
  /* and equals the polytrope's ideal value N G M μ ρ_c^{2/3}... checked against μ = 1/(1/μ_ion + 1/μ_e) at 100 R☉ */
  const mu = 1 / (1 / c.MU_ION + 1 / c.MU_E), rho = c.RHOC_MEAN * 3 * M / (4 * Math.PI * (100 * c.RSUN) ** 3);
  near(T1, c.N15 * c.G * Math.cbrt(M) * 100 * c.RSUN * Math.pow(rho, 2 / 3) * mu * c.M_U / c.KB, 1e-4, 'ideal value');
  /* the Sun's mass rises to tens of millions of K, far past the fusion line; 50 Jupiters peaks below 3 MK */
  assert(c.coreTmax(c.MSUN).T > 3e7, 'a Sun is a star');
  assert(c.coreTmax(50 * c.MJUP).T < 3e6, '50 Jupiters is a brown dwarf');
  /* the lightest star for a 3 MK threshold (Burrows and Liebert 1993): 0.078 M☉; the textbook's 0.08 M☉ */
  near(c.minMass(3e6) / c.MSUN, 0.078, 0.02, 'minimum mass');
  /* Ex10: 0.08 M☉ is about 80 Jupiters (84 with the IAU masses) */
  near(0.08 * c.MSUN / c.MJUP, 83.8, 0.002, 'Ex10');
  /* a hotter threshold needs more mass */
  assert(c.minMass(1e7) > c.minMass(3e6), 'monotonic');
  /* the ignition radius really has T_c at the threshold */
  const Ri = c.igniteRadius(c.MSUN, 3e6, 20 * c.RSUN); near(c.coreT(c.MSUN, Ri), 3e6, 1e-6, 'ignition radius');
  assert.strictEqual(c.igniteRadius(50 * c.MJUP, 3e6, 20 * c.RSUN), null, 'no ignition');
});

console.log(`test_star-birth: ${n} groups passed`);
