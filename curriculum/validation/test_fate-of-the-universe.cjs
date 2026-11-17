'use strict';
// The Fate of the Universe: the Friedmann equation with matter, radiation, dark energy (w) and curvature; the fates; ages and
// turnarounds; luminosity distance and the Pantheon+ supernova fit; triangles on curved space and the CMB spot size; the far future.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('fate-of-the-universe', 'PLANCK,HUBBLE_GYR,C_KMS,GLY_PER_MPC,omegaRad,rhoCrit,atomsPerM3,model,planck,deTerm,E2,accel,qDecel,aMax,aMin,fate,history,aAt,hubbleAt,dist,distAt,mu,DLempty,SN,snFit,snBins,snGrid,curvR,triAngle,curvSign,spotDeg,evapYears,ripBefore,eventHorizon');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const rel = (a, b, tol, w) => assert(Math.abs(a / b - 1) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const P = c.planck(), XP = c.history(P);

group('units and today: 1/H₀ = 977.79/H₀ Gyr, ρ_c = 3H₀²/(8πG) = 8.53 × 10⁻²⁷ kg/m³ (5.10 H atoms per m³) at 67.4; models close', () => {
  near(c.HUBBLE_GYR, 977.792, 1e-5, '977.79');
  rel(c.rhoCrit(67.4), 8.5332e-27, 1e-3, 'ρ_c'); near(c.atomsPerM3(67.4), 5.10, 0.002, 'atoms');
  rel(c.rhoCrit(70) / c.rhoCrit(35), 4, 1e-12, 'ρ_c ∝ H₀²');
  for (const [Om, Ode, w] of [[0.3, 0.7, -1], [2, 0, -1], [0.1, 1.5, -1.3], [0, 0, -1]]) { const m = c.model(Om, Ode, w); near(m.Or + m.Om + m.Ode + m.Ok, 1, 1e-14, 'closure');
    near(c.E2(m, 1), 1, 1e-12, 'E(1) = 1'); }
  near(P.Ok, 0, 1e-15, 'Planck flat'); rel(c.omegaRad(67.4), 9.14e-5, 0.01, 'Ω_r with N_eff 3.046');
});
group('Friedmann: E² = Ω_r/a⁴ + Ω_m/a³ + Ω_k/a² + Ω_DE a^(−3(1+w)); ä/a and q = −äa/ȧ² by the acceleration equation', () => {
  const m = c.model(0.3, 0.8, -0.8); for (const a of [0.2, 1, 3]) {
    near(c.E2(m, a), m.Or / a ** 4 + m.Om / a ** 3 + m.Ok / a ** 2 + m.Ode * a ** (-3 * 0.2), 1e-12, 'E² at ' + a);
    /* the acceleration equation is the a-derivative of the Friedmann equation: d(a²E²/2)/da = a × accel */
    const d = 1e-5, lhs = ((a + d) ** 2 * c.E2(m, a + d) - (a - d) ** 2 * c.E2(m, a - d)) / (4 * d); near(lhs, a * c.accel(m, a), 1e-7, 'ä from E² at ' + a); }
  near(c.qDecel(c.model(1, 0), 1), 0.5 + c.omegaRad(), 1e-3, 'q = 1/2 for matter'); assert(c.qDecel(P, 1) < 0, 'Planck speeds up today');
  near(c.qDecel(P, 1), c.omegaRad() + PLANCKq(), 1e-9, 'q₀ Planck');
  function PLANCKq() { return P.Om / 2 - P.Ode; }
});
group('ages: Planck 13.79 Gyr (Planck 2018: 13.787 ± 0.020), matter only ≈ 2/(3H₀), empty 1/H₀; speeding up began 6.1 Gyr ago', () => {
  near(XP.age, 13.79, 0.0015, 'Planck age'); near(c.history(c.model(1, 0)).age, 2 / 3 * c.HUBBLE_GYR / 67.4, 2e-4, 'matter only (radiation shortens it 0.01%)');
  const m0 = c.model(0, 0); m0.Or = 0; m0.Ok = 1; rel(c.history(m0).age, c.HUBBLE_GYR / 67.4, 2e-4, 'empty: 1/H₀');
  assert(c.history(c.model(0, 0)).age < c.HUBBLE_GYR / 67.4, 'radiation alone makes it younger');
  near(XP.tAccel, -6.10, 0.01, 'start of speeding up'); near(XP.tEq, -3.50, 0.01, 'dark energy overtook matter');
  /* both happen exactly where the formulas say: ä = 0 at a³ = Ω_m/(2Ω_Λ), equal densities at a³ = Ω_m/Ω_Λ (radiation aside) */
  near(c.aAt(XP, XP.tEq), Math.cbrt(P.Om / P.Ode), 1e-4, 'a at equality'); near(c.aAt(XP, XP.tAccel), Math.cbrt(P.Om / (2 * P.Ode)), 2e-3, 'a at ä = 0');
  near(c.aAt(XP, 0), 1, 1e-12, 'a today'); rel(c.hubbleAt(XP, 0), 67.4, 1e-9, 'H today');
});
group('fates: Ω_m = 2 crunches (largest size 2 at +37.3 Gyr, crunch at +82.9 Gyr); Ω_Λ = 2, Ω_m = 0.3 bounces; w < −1 rips', () => {
  const m = c.model(2, 0), X = c.history(m, 200); assert.equal(X.fate, 'crunch');
  near(X.aTop, 2 * (1 - 1e-4), 2e-4, 'a_max = Ω_m/(Ω_m − 1)'); near(X.tTurn, 37.29, 0.02, 'turnaround'); near(X.tEnd, 82.86, 0.05, 'crunch');
  near(X.tEnd + X.age, 2 * (X.tTurn + X.age), 2e-3, 'symmetric: the crunch comes twice the turnaround time after the Big Bang');
  /* closed matter only universe in closed form: t_max = (π/2) Ω_m/(Ω_m − 1)^(3/2)/H₀ */
  rel(X.tTurn + X.age, Math.PI / 2 * 2 / 1 * c.HUBBLE_GYR / 67.4, 2e-3, 'closed form turnaround');
  assert.equal(c.fate(c.model(0.3, 2)), 'bounce'); assert(c.aMin(c.model(0.3, 2)) > 0);
  assert.equal(c.fate(P), 'accel'); assert.equal(c.fate(c.model(0.315, 0)), 'coast'); assert.equal(c.fate(c.model(0.315, 0.685, -1.5)), 'rip');
  assert.equal(c.fate(c.model(1 - c.omegaRad(), 0)), 'coast', 'critical'); assert.equal(c.fate(c.model(1, 0)), 'crunch', 'radiation tips Ω_m = 1 over');
});
group('Big Rip: with dark energy only, t_rip = 2/(3|1 + w| H₀) exactly; with Planck matter, w = −1.5, 22.7 Gyr from now', () => {
  for (const w of [-1.5, -1.2]) { const m = c.model(0, 1 - c.omegaRad(), w); const X = c.history(m, 400);
    rel(X.tEnd, 2 / (3 * Math.abs(1 + w)) * c.HUBBLE_GYR / 67.4, 0.01, 'dark energy only, w = ' + w); }
  const X = c.history(c.model(0.315, 0.685 - c.omegaRad(), -1.5)); near(X.tEnd, 22.72, 0.02, 'rip with matter');
  assert(X.tEnd < 2 / (3 * 0.5 * Math.sqrt(0.685)) * c.HUBBLE_GYR / 67.4, 'matter makes it sooner than Caldwell’s estimate');
  rel(c.ripBefore(1, -1.5), Math.sqrt(2 * 3.5) / (6 * Math.PI * 0.5), 1e-12, 'Caldwell 2003 formula');
});
group('distances: low z D_L = cz/H₀; empty universe D_L = (c/H₀) z(1 + z/2); open/closed sinh/sin; Planck 0.5 → 1.195 × matter only', () => {
  const z = 1e-4; rel(c.distAt(P, z).DL, c.C_KMS * z / 67.4, 2e-4, 'Hubble law');
  const E = c.model(0, 0); E.Or = 0; E.Ok = 1; for (const zz of [0.5, 1, 2]) rel(c.distAt(E, zz).DL, c.DLempty(67.4, zz), 2e-5, 'empty at ' + zz);
  /* Einstein–de Sitter: D_L = (2c/H₀)(1 + z)(1 − 1/√(1 + z)) */
  const M = c.model(1, 0); M.Or = 0; M.Ok = 0; for (const zz of [0.5, 2]) rel(c.distAt(M, zz).DL, 2 * c.C_KMS / 67.4 * (1 + zz) * (1 - 1 / Math.sqrt(1 + zz)), 2e-5, 'EdS ' + zz);
  near(c.distAt(P, 0.5).DL / c.distAt(c.model(1, 0), 0.5).DL, 1.195, 0.001, 'farther'); near((c.distAt(c.model(1, 0), 0.5).DL / c.distAt(P, 0.5).DL) ** 2, 0.70, 0.005, '70% as bright');
  near(c.mu(10e-6), 0, 1e-12, 'μ = 0 at 10 pc');
});
group('supernovae: 1,473 Pantheon+ SNe (z > 0.01); Planck χ² 678 against matter only 1,327; best fit near Ω_m 0.33, Ω_Λ 0.58; regions', () => {
  assert.equal(c.SN.length, 1473); for (const [z, u, e] of c.SN) assert(z > 0.01 && z < 2.3 && u > 30 && u < 47 && e > 0 && e < 1.5);
  const fp = c.snFit(P), fm = c.snFit(c.model(1, 0)); near(fp.chi2, 678.4, 0.001, 'χ² Planck'); near(fm.chi2, 1326.6, 0.001, 'χ² matter');
  /* the free offset is the weighted mean of the differences: the fit is not changed by shifting every μ */
  const fp2 = c.snFit(P); fp2.mm.forEach((v, i) => fp2.mm[i] = v); near(fp2.off, fp.off, 1e-12, 'repeat');
  const t0 = Date.now(), g = c.snGrid(-1); assert(Date.now() - t0 < 8000, 'grid time');
  near(g.best[0], 0.333, 0.04, 'best Ω_m'); near(g.best[1], 0.583, 0.07, 'best Ω_Λ');
  const at = (Om, Ode) => c.snFit(c.model(Om, Ode)).chi2 - g.min; assert(at(1, 0) > 100, 'matter only far outside'); assert(at(0.315, 0.685) < 6.18, 'Planck inside 2σ');
  const b = c.snBins(); assert(b.length >= 20); const tot = b.reduce((s, x) => s + x.n, 0); assert.equal(tot, 1473, 'every supernova in a bin');
  /* bins are means of the difference from an empty universe, so they lie on the data: compare with Planck's curve */
  for (const x of b) if (x.n > 30) near(x.mu - c.mu(c.distAt(P, x.z).DL) - fp.off, 0, 0.1, 'bin at z = ' + x.z.toFixed(3));
});
group('curved space: R = (c/H₀)/√|Ω_k|; triangle angles cos A = cos k/(1 + cos k) (sphere), cosh (saddle); 270° globe triangle', () => {
  const m = c.model(0.315, 1); rel(c.curvR(m), c.C_KMS / 67.4 / Math.sqrt(-m.Ok) * c.GLY_PER_MPC, 1e-12, 'R'); near(c.curvR(m), 25.84, 0.002, 'R = 25.84 Gly');
  near(c.triAngle(1, Math.PI / 2) * 180 / Math.PI, 90, 1e-9, 'globe triangle'); near(c.triAngle(1, 2 * Math.PI / 3) * 180 / Math.PI, 180, 1e-6, 'great circle');
  near(c.triAngle(0, 3), Math.PI / 3, 1e-15, 'flat 60°');
  for (const k of [0.01, 0.5, 1.5]) { assert(c.triAngle(1, k) > Math.PI / 3 && c.triAngle(-1, k) < Math.PI / 3);
    /* angle excess = area/R² (Gauss–Bonnet) checked at small k: area of the equilateral triangle ≈ (√3/4)k² */
    if (k === 0.01) near((3 * c.triAngle(1, k) - Math.PI) / (Math.sqrt(3) / 4 * k * k), 1, 1e-3, 'Gauss–Bonnet'); }
  assert.equal(c.curvSign(P), 0); assert.equal(c.curvSign(m), 1); assert.equal(c.curvSign(c.model(0.3, 0)), -1);
});
group('CMB spots: θ* = r*/D_M(z* = 1089.92) = 0.597° for Planck (Planck 2018 100θ* = 1.04110, 0.5965°); bigger closed, smaller open', () => {
  near(c.spotDeg(P), 0.5969, 0.0005, 'Planck'); rel(c.PLANCK.theta100 / 100 * 180 / Math.PI, 0.59650, 1e-4, 'Planck θ*');
  assert(c.spotDeg(c.model(0.315, 0.8)) > c.spotDeg(P) && c.spotDeg(c.model(0.315, 0.5)) < c.spotDeg(P));
  near(c.distAt(P, 1089.92).DM, 13864, 0.002, 'D_M to last scattering (Mpc)');
});
group('far future: Hawking evaporation 2.1 × 10⁶⁷ yr for 1 M☉ (∝ M³); event horizon 16.7 Gly for Planck; T = T₀/a', () => {
  rel(c.evapYears(1), 2.095e67, 0.002, '1 solar mass'); rel(c.evapYears(10) / c.evapYears(1), 1000, 1e-12, 'M³');
  near(c.eventHorizon(P) * c.GLY_PER_MPC, 16.68, 0.003, 'event horizon');
  /* de Sitter alone: event horizon = c/H₀ exactly */
  const D = c.model(0, 1); D.Or = 0; D.Ok = 0; rel(c.eventHorizon(D), c.C_KMS / 67.4, 1e-6, 'de Sitter horizon');
  assert.equal(c.eventHorizon(c.model(2, 0)), Infinity);
});
console.log(`${n} groups passed`);
