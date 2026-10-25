'use strict';
// Dosimetry: NIST and ESTAR data, Klein–Nishina, kerma and dose with charged particle equilibrium, the Monte Carlo, and a TRS-398 style
// calibration that closes on itself.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('dosimetry', 'MEC2,ZA_WATER,NA,MEV_PER_G_TO_GY,muRho,muenRho,sColW,sRadW,sColA,csdaW,tAfter,knTotal,knDsdT,tMaxCompton,cosElectron,comptonMeans,collisionLoss,kernel,kcol,dose,beta,dmax,mcSetup,mcRun,mcDose,rng32,gauss,rhoAir,KEY,swairProton,CHAMBERS,CAV,kQproton,dEff,uPulsed,fPulsed,fContinuous,ksTwoVoltage,ksBoagExact,kTP,kPol,nDw,chargeReading,protonRef');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('tables: NIST water at its own rows, ESTAR water and air spot values, CSDA range by integrating 1/S_tot', () => {
  near(c.muRho(1.25), 0.06323, 1e-9, 'μ/ρ 1.25 MeV'); near(c.muenRho(1.25), 0.02965, 1e-9, 'μen/ρ 1.25 MeV');
  near(c.sColW(1), 1.849, 1e-9, 'water S_col 1 MeV'); near(c.csdaW(1), 0.4367, 1e-9, 'water CSDA 1 MeV'); near(c.csdaW(10), 4.975, 1e-9, 'water CSDA 10 MeV');
  near(c.sColA(1), 1.661, 1e-9, 'air S_col 1 MeV');
  /* the range table agrees with ∫ dT/S_tot between rows (ESTAR's own definition) */
  let R = c.csdaW(0.5); for (let T = 0.5; T < 2 - 1e-9; T += 0.001) { const t = T + 0.0005; R += 0.001 / (c.sColW(t) + c.sRadW(t)); }
  near(R, c.csdaW(2), 2e-3, 'range from 0.5 to 2 MeV');
  near(c.tAfter(1, c.csdaW(1) - c.csdaW(0.5)), 0.5, 1e-4, 'energy left after a path');
});

group('Klein–Nishina: dσ/dT integrates to the total σ; μ_C/ρ is within 0.4 % of NIST μ/ρ from 0.5 to 1.25 MeV and 1.1 % at 2 MeV', () => {
  for (const E of [0.2, 0.5, 1.25, 2, 4]) {
    const Tm = c.tMaxCompton(E), N = 40000; let s = 0; for (let i = 0; i < N; i++) s += c.knDsdT(E, (i + 0.5) / N * Tm) * Tm / N;
    near(s, c.knTotal(E), 2e-4, `σ at ${E} MeV`);
  }
  near(c.knTotal(1e-4 * c.MEC2), 8 * Math.PI / 3 * Math.pow(2.8179403205e-13, 2), 1e-3, 'Thomson limit');
  for (const E of [0.5, 1.25]) near(c.knTotal(E) * c.ZA_WATER * c.NA, c.muRho(E), 4e-3, `μ_C at ${E}`);
  near(c.knTotal(2) * c.ZA_WATER * c.NA, c.muRho(2), 1.1e-2, 'μ_C at 2');
  near(c.cosElectron(1.25, c.tMaxCompton(1.25) * 0.999999), 1, 1e-4, 'the most energetic electron goes straight on');
  assert(c.cosElectron(1.25, 0.001) < 0.1, 'a slow electron goes out sideways');
});

group('μ_en from Compton electrons and ESTAR collision losses matches NIST μ_en/ρ within 0.2 % from 0.5 to 1.25 MeV and 1 % at 0.2 and 2 MeV', () => {
  for (const [E, tol] of [[0.2, 1e-2], [0.5, 2e-3], [1.25, 2e-3], [2, 1e-2]]) {
    const m = c.comptonMeans(E), muC = c.knTotal(E) * c.ZA_WATER * c.NA;
    near(muC * m.Tmean / E * m.colShare, c.muenRho(E), tol, `μ_en at ${E}`);
  }
  near(c.comptonMeans(1.25).Tmean, 0.588, 2e-3, 'mean Compton electron energy for 1.25 MeV');
});

group('kerma and dose: G integrates to 1, D builds up from 0, past the buildup D/K_col = β > 1 and is constant (TCPE)', () => {
  for (const E of [0.5, 1.25, 4]) {
    const K = c.kernel(E); let s = 0; for (let k = 0; k <= K.nx; k++) s += K.G[k] * K.dx; near(s, 1, 1e-9, `∫G at ${E}`);
    near(c.dose(E, 1e10, 0, K), 0, 1, `D(0) at ${E}`); assert(c.dose(E, 1e10, 0, K) === 0);
    const b = c.beta(E, K), r1 = c.dose(E, 1e10, 1.2 * K.Rmax, K) / c.kcol(E, 1e10, 1.2 * K.Rmax), r2 = c.dose(E, 1e10, 3 * K.Rmax, K) / c.kcol(E, 1e10, 3 * K.Rmax);
    near(r1, b, 2e-3, `β at 1.2 R, ${E} MeV`); near(r2, b, 2e-3, `β at 3 R, ${E} MeV`);
    assert(b > 1 && b < 1 + c.muRho(E) * K.Rmax, `1 < β < 1 + μR at ${E}`);
    const dm = c.dmax(E, K); assert(dm > 0.8 * K.Rmax && dm <= K.Rmax * 1.001, `d_max near R_max at ${E}: ${dm} against ${K.Rmax}`);
  }
  const K = c.kernel(1.25);
  near(c.kcol(1.25, 1e10, 0), 1e10 * 1.25 * 0.02965 * 1.602176634e-10, 1e-12, 'K_col at the surface, Gy');
  near(c.kcol(1.25, 1e10, 10) / c.kcol(1.25, 1e10, 0), Math.exp(-0.6323), 1e-12, 'e^(−μz)');
  near(K.Rmax, 0.4574, 2e-3, '60Co: CSDA range of the 1.04 MeV electron');
  near(c.dmax(1.25, K), 0.450, 0.01, '60Co d_max of the model');
  /* energy conservation: the dose under the curve to a deep depth equals the kerma under it, less what is carried past the end */
  let Ds = 0, Ks = 0; const zz = 30, dz = 0.01; for (let z = dz / 2; z < zz; z += dz) { Ds += c.dose(1.25, 1, z, K) * dz; Ks += c.kcol(1.25, 1, z) * dz; }
  near(Ds, Ks, 2e-3, 'deposited = transferred (collision part)');
});

group('Monte Carlo: histories reproduce the model dose past the buildup within their uncertainty and the model β', () => {
  const E = 1.25, K = c.kernel(E), st = c.mcSetup(E, 0.05, 1.2), rng = c.rng32(7);
  c.mcRun(st, 400000, rng);
  const md = c.mcDose(st, 1e10);
  for (const b of md) if (b.z > 0.6 && b.z < 1.1) { const d = c.dose(E, 1e10, b.z, K); assert(Math.abs(b.D - d) < 4 * b.u + 0.004 * d, `bin ${b.z}: MC ${b.D} ± ${b.u}, model ${d}`); }
  assert(md[0].D < 0.3 * md[12].D, 'the first bin is low: the buildup');
  const g = c.rng32(1); let s = 0, s2 = 0; for (let i = 0; i < 20000; i++) { const x = c.gauss(g); s += x; s2 += x * x; } near(s2 / 20000, 1, 0.03, 'unit Gaussian'); assert(Math.abs(s / 20000) < 0.03);
});

group('air density and k_TP: 1.2041 kg/m³ at 20 °C and 101.325 kPa; k_TP undoes the density change to 1 part in 10⁵', () => {
  near(c.rhoAir(20, 101.325), 1.2041, 1e-4, 'ρ_air');
  for (const [T, P] of [[22.3, 100.82], [18, 102], [25, 99.5]]) near(c.kTP(T, P) * c.rhoAir(T, P), c.rhoAir(20, 101.325), 1e-5, `k_TP at ${T}, ${P}`);
  near(c.kTP(20, 101.325), 1, 1e-15, 'reference conditions');
});

group('TRS-398 key data: s_w,air fit, k_Q from its definition, N_D,w near 20 nC/Gy for a 0.6 cm³ chamber', () => {
  near(c.swairProton(10), 1.137 - 4.3e-4 + 1.84e-4, 1e-12, 's_w,air at R_res 10');
  near(c.kQproton('ptw30013', 13.77), c.swairProton(13.77) * 34.23 / (1.133 * 33.97 * 0.982), 1e-12, 'k_Q formula');
  for (const ch of Object.keys(c.CHAMBERS)) { const k = c.kQproton(ch, 5); assert(k > 1.02 && k < 1.05, `${ch} k_Q ${k}`); }
  near(c.kQproton('ptw30013', 5, 34.44) / c.kQproton('ptw30013', 5), 34.44 / 34.23, 1e-12, 'ICRU 90 W_air');
  const sens = 1 / c.nDw('ptw30013') * 1e9; assert(sens > 18 && sens < 21, `response ${sens} nC/Gy (PTW gives 20 nC/Gy nominal)`);
  const r = c.protonRef(150); near(r.Rp, 15.77, 1e-9, 'PSTAR 150 MeV'); assert(r.zref === 2); near(r.Rres, 13.77, 1e-9);
  const r70 = c.protonRef(70); assert(r70.zref === 1, '70 MeV: R_res at 2 g/cm² is under 5, so z_ref is 1 g/cm²');
});

group('recombination: Boag pulsed and continuous, the two voltage formulas against the exact solution', () => {
  near(c.fPulsed(1e-6), 1 - 0.5e-6, 1e-9, 'f → 1 − u/2'); near(c.fPulsed(1), Math.log(2), 1e-12, 'f(1) = ln 2');
  near(c.dEff(3.05e-3, 0.55e-3), 2.776e-3, 1e-3, 'Farmer equivalent gap');
  const rho = c.rhoAir(20, 101.325);
  const u400 = c.uPulsed(1e-3, rho, 34.23, 400), u200 = c.uPulsed(1e-3, rho, 34.23, 200); near(u200, 2 * u400, 1e-12, 'u ∝ 1/V'); near(c.uPulsed(2e-3, rho, 34.23, 400), 2 * u400, 1e-12, 'u ∝ dose per pulse');
  for (const dpp of [0.5e-3, 1e-3, 3e-3]) {
    const f1 = c.fPulsed(c.uPulsed(dpp, rho, 34.23, 400)), f2 = c.fPulsed(c.uPulsed(dpp, rho, 34.23, 200));
    near(c.ksBoagExact(f1, f2, 400, 200), 1 / f1, 1e-9, 'exact inversion');
    near(c.ksTwoVoltage(f1, f2, 400, 200, true), 1 / f1, 1e-3, `TRS-398 pulsed coefficients at ${dpp * 1e3} mGy (a fit to Boag, good to 0.1 %)`);
    near(c.ksTwoVoltage(f1, c.fPulsed(c.uPulsed(dpp, rho, 34.23, 100)), 400, 100, true), 1 / f1, 1e-3, "4:1");
  }
  /* each row of coefficients gives k_s = 1 when M1 = M2 */
  for (const r of [2, 2.5, 3, 3.5, 4, 5]) near(c.ksTwoVoltage(1, 1, r, 1, true), 1, 1.5e-3, `row ${r}`);
  const fc1 = c.fContinuous(1 / 60, rho, 33.97, 400), fc2 = c.fContinuous(1 / 60, rho, 33.97, 200);
  assert(1 - fc1 < 1e-4, `60Co at 1 Gy/min hardly recombines: ${1 - fc1}`); near(c.ksTwoVoltage(fc1, fc2, 400, 200, false), 1 / fc1, 1e-9, 'continuous formula exact for 1/V² law');
});

group('calibration closes: M k_TP k_pol k_s N_D,w k_Q gives back the delivered dose; N_D,w from 60Co gives back the certificate', () => {
  for (const ch of Object.keys(c.CHAMBERS)) for (const Ep of [70, 150, 225]) {
    const r = c.protonRef(Ep), beam = { kind: 'proton', Rres: r.Rres, W: 34.23, dPulse: 1e-3 }, o = { ch, T: 22.3, P: 100.82, V: 400, sign: 1, delta: 0.001, Dw: 1, beam };
    const p = c.chargeReading(o).M, m = c.chargeReading({ ...o, sign: -1 }).M, h = c.chargeReading({ ...o, V: 200 }).M;
    const kp = c.kPol(p, m, p), ksE = c.ksBoagExact(p, h, 400, 200), ksT = c.ksTwoVoltage(p, h, 400, 200, true);
    near(kp, 1 / 1.001, 1e-12, 'k_pol');
    near(p * c.kTP(22.3, 100.82) * kp * ksE * c.nDw(ch) * c.kQproton(ch, r.Rres), 1, 1e-5, `${ch} ${Ep} MeV exact k_s`);
    near(p * c.kTP(22.3, 100.82) * kp * ksT * c.nDw(ch) * c.kQproton(ch, r.Rres), 1, 5e-4, `${ch} ${Ep} MeV TRS-398 k_s`);
  }
  const o = { ch: 'ne2571', T: 20.6, P: 101.48, V: 400, sign: 1, delta: 0.0005, Dw: 1, beam: { kind: 'co60', rate: 0.5 / 60 } };
  const p = c.chargeReading(o).M, m = c.chargeReading({ ...o, sign: -1 }).M, h = c.chargeReading({ ...o, V: 200 }).M;
  const Mc = p * c.kTP(20.6, 101.48) * c.kPol(p, m, p) * c.ksTwoVoltage(p, h, 400, 200, false);
  near(1 / Mc, c.nDw('ne2571'), 1e-5, 'N_D,w from the laboratory');
  /* Bragg–Gray: the cavity dose times s_w,air p_Q is the water dose */
  const q = c.chargeReading(o); near(q.dAir * c.KEY.S_CO * c.CHAMBERS.ne2571.pCo, 1, 1e-12, 'Bragg–Gray');
  near(q.Qsat, q.dAir * c.rhoAir(20.6, 101.48) * c.CAV.V / 33.97, 1e-12, 'Q = D_air m e/W');
});

console.log(`dosimetry: ${n} groups passed`);
