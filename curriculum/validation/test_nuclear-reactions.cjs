'use strict';
// Nuclear Reactions, Fission and Fusion: Q values from AME2020 masses against OpenStax and published values, thresholds,
// relativistic two body kinematics, the fission neutron distribution, the critical sphere, the Gamow peak and reaction rates, dose.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('nuclear-reactions', 'massU,massMeV,reaction,kin2,barrier,nuDist,sampleNu,rng,nextGen,NU_THERMAL_U235,sphereGen,resample,uniformBall,kStats,MAT,lamT,sphereMass,V_N,PAIRS,redMass,gamowE,kT,gamowPeakE,gamowWidth,gamowMeasure,gamowF,sigvS,S_PP,sigvDT,sunNp,YEAR,SOURCES,doseRate,doseOver,muLin,halfValue,wRneutron,FISSION_E,E_FISSION');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const R = (inn, out) => c.reaction(inn, out);

group('OpenStax §10.4 to §10.6: Example 10.7 (²³⁹Pu α decay 5.25 MeV), Example 10.9 (²³⁸U fission 171.2 MeV), D + T 17.6 MeV', () => {
  close(R([[94, 239]], [[92, 235], [2, 4]]).Q, 5.25, 0.01, 'Example 10.7');
  close(R([[92, 238]], [[38, 95], [54, 140], [0, 1, 3]]).Q, 171.2, 0.1, 'Example 10.9');
  close(R([[1, 2], [1, 3]], [[0, 1], [2, 4]]).Q, 17.589, 0.001, 'D + T (17.6 MeV in §10.6; 17.589 MeV from AME2020)');
  close(c.massU(92, 238), 238.050784, 3e-6, 'm(²³⁸U) as in Example 10.9'); close(c.massU(0, 1), 1.008665, 1e-6, 'm(n)');
  close(c.massU(94, 239), 239.052157, 6e-6, 'm(²³⁹Pu): Example 10.7 uses an older value, AME2020 gives 239.0521617');
});
group('famous reactions: published Q values (MeV)', () => {
  for (const [inn, out, Q, tol, w] of [
    [[[2, 4], [7, 14]], [[1, 1], [8, 17]], -1.192, 0.001, 'Rutherford ¹⁴N(α,p)¹⁷O'],
    [[[1, 1], [3, 7]], [[2, 4, 2]], 17.346, 0.001, 'Cockcroft and Walton ⁷Li(p,α)⁴He'],
    [[[2, 4], [4, 9]], [[0, 1], [6, 12]], 5.702, 0.001, 'Chadwick ⁹Be(α,n)¹²C'],
    [[[1, 2], [1, 2]], [[0, 1], [2, 3]], 3.269, 0.001, 'D(d,n)³He'],
    [[[1, 2], [1, 2]], [[1, 1], [1, 3]], 4.033, 0.001, 'D(d,p)T'],
    [[[0, 1], [92, 235]], [[56, 141], [36, 92], [0, 1, 3]], 173.3, 0.1, '²³⁵U + n → ¹⁴¹Ba + ⁹²Kr + 3n (Reed: 173.3 MeV)'],
    [[[0, 1], [3, 6]], [[2, 4], [1, 3]], 4.783, 0.001, '⁶Li(n,t)α'],
    [[[0, 0], [1, 2]], [[0, 1], [1, 1]], -2.2246, 0.0002, 'deuteron binding energy, γ + d → n + p'],
    [[[1, 1], [1, 3]], [[0, 1], [2, 3]], -0.7638, 0.0002, '³H(p,n)³He'],
  ]) close(R(inn, out).Q, Q, tol, w);
});
group('conservation: unbalanced reactions have no Q; electrons cancel (atomic masses) when the charge balances', () => {
  const r = R([[2, 4], [7, 14]], [[1, 1], [8, 16]]); assert.equal(r.balanced, false); assert(Number.isNaN(r.Q));
  const s = R([[2, 4], [7, 14]], [[0, 1], [9, 17]]); assert.equal(s.balanced, true); assert.equal(s.Zin, s.Zout); assert.equal(s.Ain, s.Aout);
  /* Q from nuclear masses equals Q from atomic masses when Z balances (electron binding left out): nuclear = atomic − Z m_e */
  const me = 0.51099895, nucQ = (c.massMeV(2, 4) - 2 * me) + (c.massMeV(7, 14) - 7 * me) - (c.massMeV(1, 1) - me) - (c.massMeV(8, 17) - 8 * me);
  close(nucQ, R([[2, 4], [7, 14]], [[1, 1], [8, 17]]).Q, 1e-9, 'electron masses cancel');
});
group('threshold: K_th = −Q(Σm before + Σm after)/(2m_target); nonrelativistic −Q(1 + m_a/m_A) agrees to 0.1%', () => {
  const r = R([[2, 4], [7, 14]], [[1, 1], [8, 17]]); close(r.Kth, 1.533, 0.001, 'Rutherford threshold'); near(r.KthNR, r.Kth, 1e-3);
  const t = R([[1, 1], [1, 3]], [[0, 1], [2, 3]]); close(t.Kth, 1.019, 0.001, '³H(p,n) threshold 1.019 MeV');
  /* at threshold the products move together: the invariant mass equals the sum of the product masses */
  const m = c.massMeV, k = c.kin2(m(1, 1), m(1, 3), m(0, 1), m(2, 3), t.Kth * (1 + 1e-9), 0); for (const s of k.sols) near(s.Kb / (s.Kb + s.KB), m(0, 1) / (m(0, 1) + m(2, 3)), 1e-3, 'products share the centre of mass velocity');
  const above = c.kin2(m(1, 1), m(1, 3), m(0, 1), m(2, 3), t.Kth + 1e-6, 0); assert(above.ok);
});
group('two body kinematics: energy and momentum conserved at every angle; two groups near threshold; decay at rest', () => {
  const m = c.massMeV;
  for (const [ma, mA, mb, mB, K] of [[m(2, 4), m(7, 14), m(1, 1), m(8, 17), 7.69], [m(1, 2), m(1, 3), m(0, 1), m(2, 4), 0.1], [m(1, 1), m(1, 3), m(0, 1), m(2, 3), 1.1], [0, m(1, 2), m(0, 1), m(1, 1), 3]]) {
    const Q = ma + mA - mb - mB, p = Math.sqrt(K * (K + 2 * ma));
    for (let th = 0; th <= 180; th += 15) { const q = c.kin2(ma, mA, mb, mB, K, th * Math.PI / 180);
      for (const s of q.sols) { close(s.Kb + s.KB, K + Q, 1e-9, 'energy'); close(s.th, th * Math.PI / 180, 1e-6, 'angle');
        const pb = Math.sqrt(s.Kb * (s.Kb + 2 * mb)), EB = s.KB + mB, pB = Math.sqrt(EB * EB - mB * mB);
        close(pb * Math.cos(s.th) + pB * Math.cos(s.thB), p, 1e-6, 'momentum along the beam'); close(pb * Math.sin(s.th) + pB * Math.sin(s.thB), 0, 1e-6, 'momentum across'); } }
  }
  const tp = c.kin2(m(1, 1), m(1, 3), m(0, 1), m(2, 3), 1.1, 20 * Math.PI / 180); assert.equal(tp.sols.length, 2, 'near threshold two neutron groups at 20°');
  close(tp.thMax * 180 / Math.PI, 54.21, 0.01, 'largest neutron angle'); assert.equal(c.kin2(m(1, 1), m(1, 3), m(0, 1), m(2, 3), 1.1, 60 * Math.PI / 180).sols.length, 0);
  /* α decay of ²³⁹Pu: the α takes Q m_U/(m_U + m_α) nonrelativistically */
  const d = c.kin2(0, m(94, 239), m(2, 4), m(92, 235), 0, 1); const Q = m(94, 239) - m(2, 4) - m(92, 235);
  near(d.sols[0].Kb, Q * m(92, 235) / (m(92, 235) + m(2, 4)), 2e-4, 'α energy in decay'); close(d.sols[0].Kb + d.sols[0].KB, Q, 1e-9);
});
group('Coulomb barrier with R = 1.2 fm A^(1/3): D + T 444 keV, p + p 600 keV', () => {
  close(c.barrier(1, 2, 1, 3), 0.444, 0.001); close(c.barrier(1, 1, 1, 1), 0.600, 0.001); assert.equal(c.barrier(0, 1, 92, 235), 0);
});
group('Terrell neutron number distribution: sums to 1, mean ν̄, width 1.08; sampled mean; generations grow as k^g on average', () => {
  for (const nb of [2.4355, 2.57, 3.09]) { const D = c.nuDist(nb); near(D.p.reduce((s, v) => s + v, 0), 1, 1e-12); near(D.p.reduce((s, v, i) => s + v * i, 0), nb, 1e-9, 'mean'); }
  const D = c.nuDist(c.NU_THERMAL_U235), r = c.rng(3); let s = 0; const N = 200000; for (let i = 0; i < N; i++) s += c.sampleNu(D, r); close(s / N, 2.4355, 0.01, 'sampled mean');
  const v = D.p.reduce((a, p, i) => a + p * (i - 2.4355) ** 2, 0); close(Math.sqrt(v), 1.08, 0.08, 'standard deviation near σ');
  for (const k of [0.9, 1, 1.1]) { let tot = 0; for (let seed = 1; seed <= 300; seed++) { const rr = c.rng(seed); let M = 100; for (let g = 0; g < 10; g++) M = c.nextGen(M, k, D, c.NU_THERMAL_U235, rr).born; tot += M; }
    near(tot / 300, 100 * Math.pow(k, 10), 0.08, `mean after 10 generations, k = ${k}`); }
});
group('fission energy: Lamarsh Table 3.6 sums to 207 MeV released, 195 MeV deposited without neutrinos; OpenStax uses 200 MeV', () => {
  assert.equal(c.FISSION_E.reduce((s, x) => s + x[1], 0), 207); assert.equal(c.FISSION_E.reduce((s, x) => s + x[2], 0), 195); assert.equal(c.E_FISSION, 200);
  /* OpenStax Example 10.10: 1.00 kg of ²³⁵U at 200 MeV per fission gives 8.2 × 10¹³ J */
  close(1000 / 235.04 * 6.02214076e23 * 200 * 1.602176634e-13 / 1e13, 8.2, 0.05, 'Example 10.10');
});
group('critical sphere: k rises with R, k = 1 between 8.0 and 8.6 cm for ²³⁵U (about 46 kg, MCNP6 46 kg) and 4.5 to 5.0 cm for ²³⁹Pu', () => {
  const run = (mat, R, seed) => { const m = c.MAT[mat], D = c.nuDist(m.nu), r = c.rng(seed); let sites = Array.from({ length: 4000 }, () => c.uniformBall(R, r)); const ks = [];
    for (let g = 0; g < 30; g++) { const o = c.sphereGen(sites, R, m, D, r); ks.push(o.k); sites = c.resample(o.bank, 4000, R, r); } return c.kStats(ks, 5); };
  const a = run('u235', 8.0, 1), b = run('u235', 8.6, 2), p1 = run('pu239', 4.5, 3), p2 = run('pu239', 5.0, 4);
  assert(a.k < 1 && b.k > 1, `U: k(8.0) = ${a.k}, k(8.6) = ${b.k}`); assert(p1.k < 1 && p2.k > 1, `Pu: k(4.5) = ${p1.k}, k(5.0) = ${p2.k}`);
  assert(run('u235', 4, 5).k < run('u235', 12, 6).k, 'bigger is more reactive');
  /* a huge sphere loses almost nothing, so k tends to ν̄ (no capture in the model) */
  close(run('u235', 200, 7).k, 2.57, 0.08, 'k → ν̄ for an infinite sphere');
  close(c.lamT(c.MAT.u235), 4.13, 0.01, 'λ_T'); close(c.sphereMass(c.MAT.u235, 8.37), 46.4, 0.3, 'mass of an 8.37 cm sphere');
  close(c.V_N, 1.692e9, 0.002e9, 'speed of a 1.5 MeV neutron');
});
group('Gamow peak: E_G (p + p) = 493 keV; the measured peak is E₀ = (E_G(kT)²/4)^(1/3); width near the Gaussian value', () => {
  close(c.gamowE(c.PAIRS.pp) * 1000, 493.1, 0.2); close(c.gamowE(c.PAIRS.dt) * 1000, 1182.2, 0.3, 'D + T');
  for (const [P, T] of [['pp', 1.57e7], ['dt', 1.5e8], ['pc', 2e7]]) { const EG = c.gamowE(c.PAIRS[P]), kt = c.kT(T), m = c.gamowMeasure(EG, kt);
    near(m.E0, c.gamowPeakE(EG, kt), 1e-6, `${P} peak`); near(m.fwhm, Math.sqrt(Math.log(2)) * c.gamowWidth(EG, kt), 0.06, `${P} FWHM vs Gaussian`); }
  close(c.gamowPeakE(c.gamowE(c.PAIRS.pp), c.kT(1.57e7)) * 1000, 6.09, 0.01, 'Sun: E₀ ≈ 6 keV');
  /* E₀ ∝ T^(2/3) */
  const r = c.gamowPeakE(1, c.kT(8e7)) / c.gamowPeakE(1, c.kT(1e7)); near(r, 4, 1e-9, 'T × 8 → E₀ × 4');
});
group('reaction rates: Bosch and Hale D + T table values; p + p sets a solar proton lifetime of billions of years', () => {
  const keV = (t) => t / 1000 / 8.617333262e-11;
  for (const [t, v] of [[1, 6.857e-21], [10, 1.136e-16], [20, 4.330e-16], [50, 8.649e-16]]) near(c.sigvDT(keV(t)), v, 2e-3, `D + T at ${t} keV`);
  assert(Number.isNaN(c.sigvDT(keV(0.1))));
  const pp = c.sigvS(c.PAIRS.pp, c.S_PP, 1.57e7), tau = 1 / (c.sunNp() * pp) / c.YEAR; assert(tau > 1e9 && tau < 3e10, `proton lifetime ${tau} y`);
  assert(c.sigvDT(1.5e8) / c.sigvS(c.PAIRS.pp, c.S_PP, 1.5e8) > 1e20, 'D + T is vastly faster than p + p');
});
group('dose: inverse square, exponential shield with NIST μ; Cs-137 by hand: 0.851 × 10⁹/(4π 10⁴ cm²) × 0.6617 MeV × 0.03227 cm²/g', () => {
  const d1 = c.doseRate('cs137', 1e9, 1, 'none', 0), d2 = c.doseRate('cs137', 1e9, 2, 'none', 0); near(d1 / d2, 4, 1e-12, 'inverse square');
  near(c.doseRate('cs137', 2e9, 1, 'none', 0) / d1, 2, 1e-12, 'proportional to activity');
  close(d1 * 1e6, 0.851e9 / (4 * Math.PI * 1e4) * 0.661657 * 0.0322727 * 1.602176634e-10 * 3600 * 1e6, 0.05, 'µGy/h per GBq at 1 m in tissue (83.4)');
  close(c.doseRate('co60', 1e9, 1, 'none', 0) * 1e6, 337, 1, 'Co-60');
  const hv = c.halfValue('lead', 0.661657); near(c.doseRate('cs137', 1e9, 1, 'lead', hv) / d1, 0.5, 1e-9, 'one half value layer halves it');
  close(c.muLin('lead', 1.0), 0.07102 * 11.35, 1e-9, 'lead μ at 1 MeV, NIST'); close(c.muLin('water', 0.5), 0.09687, 1e-9, 'water μ at 0.5 MeV');
  /* dose over a long exposure to a decaying source: Ḋ₀ τ */
  const r0 = c.doseRate('tc99m', 7.4e8, 1, 'none', 0), half = c.SOURCES.tc99m.half; near(c.doseOver(r0, 1e9, half), r0 / 3600 * half / Math.LN2, 1e-9, 'total dose');
  near(c.doseOver(r0, 1, half), r0 / 3600, 1e-4, 'short exposure ≈ rate × time');
  close(c.wRneutron(1), 20.7, 0.05, 'ICRP 103 neutron w_R at 1 MeV');
});
console.log(`${n} groups passed`);
