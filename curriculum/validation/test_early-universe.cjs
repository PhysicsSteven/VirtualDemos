'use strict';
// The Big Bang and the Early Universe: Friedmann expansion and ages, Hubble's law on the galaxy grid, the thermal clock and g*,
// the neutron to proton ratio and helium, and the microwave background (Planck's law, Wien, photon density, COBE FIRAS).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('early-universe', 'PLANCK,HUBBLE_GYR,GYR_S,YR_S,KB_EV,omegaGamma,omegaRad,model,Ea,Hof,expansion,aAt,tauAt,qDecel,galaxyAt,MARKED,properDist,gStar,thermalClock,tempAt,timeAt,Tof,kTeV,ERAS,npEq,XnEq,bbn,XnAt,nucleons,sampleCount,B_nu,B_lam,WIEN_B,WIEN_NU,nGamma,uGamma,FIRAS,firasModel,fitFiras,wavenumberHz,TAU_N,DM_NP');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const rel = (a, b, tol, w) => assert(Math.abs(a / b - 1) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

const X = {}; for (const k of ['lcdm', 'matter', 'empty', 'desitter']) X[k] = c.expansion(c.model(k));
const K = c.thermalClock();

group('units: 1/H₀ = 977.79/H₀ Gyr; Ω_γ h² = 2.47 × 10⁻⁵ for T₀ = 2.7255 K; Ω_r includes 3.046 neutrino species', () => {
  near(c.HUBBLE_GYR, 977.792, 1e-5, '977.79 Gyr km/s/Mpc');
  rel(c.omegaGamma() * 0.674 * 0.674, 2.4728e-5, 2e-3, 'Ω_γ h²');
  rel(c.omegaRad() / c.omegaGamma(), 1 + 7 / 8 * Math.pow(4 / 11, 4 / 3) * 3.046, 1e-12, 'Ω_r/Ω_γ');
  const m = c.model('lcdm'); near(m.Or + m.Om + m.Ok + m.OL, 1, 1e-14, 'flat'); near(m.OL, 0.685, 2e-4, 'Ω_Λ');
});
group('ages: Planck ΛCDM 13.79 Gyr (Planck 2018: 13.787 ± 0.020); matter only 2/(3H₀); empty 1/H₀; de Sitter no beginning', () => {
  near(X.lcdm.age, 13.79, 0.002, 'ΛCDM age'); near(X.matter.age, 2 / 3 * c.HUBBLE_GYR / 67.4, 1e-7, 'Einstein–de Sitter');
  near(X.empty.age, c.HUBBLE_GYR / 67.4, 1e-7, 'Milne'); assert.equal(X.desitter.age, Infinity);
  const m70 = c.expansion(c.model('matter', 70)); near(m70.age, 2 / 3 * c.HUBBLE_GYR / 70, 1e-7, 'H₀ = 70');
  assert(X.matter.age < X.lcdm.age && X.lcdm.age < X.empty.age, 'order of ages');
});
group('a(t): a = 1 today; slope H₀ today in every model; exact forms t^(2/3), linear, exponential; round trip a ↔ t', () => {
  for (const k in X) { near(c.aAt(X[k], 0), 1, 1e-12, k);
    const d = 1e-3, slope = (Math.log(c.aAt(X[k], d)) - Math.log(c.aAt(X[k], -d))) / (2 * d); near(slope, 67.4 / c.HUBBLE_GYR, 1e-6, `H₀ ${k}`); }
  for (const tau of [-9, -5, 3, 15]) {
    near(c.aAt(X.matter, tau), Math.pow((X.matter.age + tau) / X.matter.age, 2 / 3), 1e-6, `matter ${tau}`);
    near(c.aAt(X.empty, tau), (X.empty.age + tau) / X.empty.age, 1e-6, `empty ${tau}`);
    near(c.aAt(X.desitter, tau), Math.exp(tau * 67.4 / c.HUBBLE_GYR), 1e-6, `de Sitter ${tau}`); }
  assert.equal(c.aAt(X.matter, -10), 0, 'before the Big Bang');
  for (const a of [0.01, 0.3, 0.5, 2]) near(c.aAt(X.lcdm, c.tauAt(X.lcdm, a)), a, 1e-6, `round trip ${a}`);
  near(c.tauAt(X.lcdm, 0.5), -7.95, 0.003, 'a = 0.5 about 7.95 Gyr ago');
  near(c.qDecel(c.model('lcdm'), 1), 0.315 / 2 - 0.685, 1e-3, 'q₀ = Ω_m/2 − Ω_Λ'); near(c.qDecel(c.model('matter'), 0.3), 0.5, 1e-12, 'q = 1/2');
});
group("Hubble's law on the galaxy grid: Δd/Δt = H d for every marked galaxy, from any home galaxy", () => {
  for (const home of [[0, 0], [5, -2]]) {
    const h = c.galaxyAt(...home), t1 = 0, t2 = 0.1, a1 = c.aAt(X.lcdm, t1), a2 = c.aAt(X.lcdm, t2);
    for (const [, i, j] of c.MARKED) { const g = c.galaxyAt(i, j), d1 = c.properDist(a1, g, h), d2 = c.properDist(a2, g, h), v = (d2 - d1) / (t2 - t1) * c.HUBBLE_GYR;
      near(v / ((d1 + d2) / 2), 67.4, 0.005, 'H from a 0.1 Gyr step'); }
  }
});
group('g*: 106.75 above the top quark, 10.75 between the muon and the electron, 3.38 (energy) and 3.91 (entropy) today', () => {
  near(c.gStar(1e7), 106.75, 0.002, 'hot'); near(c.gStar(3), 10.75, 0.01, '3 MeV');
  near(c.gStar(1e-6), 2 + 7 / 8 * 6 * Math.pow(4 / 11, 4 / 3) * 3.046 / 3, 1e-6, 'today'); near(c.gStar(1e-6, 1), 2 + 7 / 8 * 6 * 4 / 11, 1e-6, 'entropy today');
});
group('the thermal clock: t ≈ 2.42 s/√g* (kT/MeV)⁻² in the radiation era; T ∝ t^(−1/2) then t^(−2/3); age; decoupling', () => {
  rel(c.timeAt(K, c.Tof(3e6)), 2.42 / Math.sqrt(10.75) / 9, 0.03, 'kT = 3 MeV');
  rel(c.timeAt(K, c.Tof(1e12)), 2.42 / Math.sqrt(106.75) / 1e12, 0.01, 'kT = 1 TeV');
  const slope = (t1, t2) => (Math.log(c.tempAt(K, t2)) - Math.log(c.tempAt(K, t1))) / (Math.log(t2) - Math.log(t1));
  near(slope(1e-30, 1e-20), -0.5, 1e-3, 'radiation era'); near(slope(1e15, 3e16), -2 / 3, 0.01, 'matter era');
  near(K.t[K.n] / c.GYR_S, X.lcdm.age, 2e-4, 'clock age matches the Friedmann age');
  near(c.timeAt(K, 2.7255 * (1 + 1089.92)) / c.YR_S / 1e3, 372, 0.02, 'z* ≈ 1090 about 370 000 years (book: 370 000 to 380 000)');
  near(c.tempAt(K, 1e8 * c.YR_S), 76, 0.15, 'about 60 to 80 K at 10⁸ years (book: 60 K)');
  rel(c.Tof(938.27e6), 1.0888e13, 1e-3, 'proton threshold'); rel(c.Tof(0.511e6), 5.93e9, 1e-3, 'electron threshold'); rel(c.kTeV(1e32), 8.617e27, 1e-3, 'book: 10³² K is about 10¹⁹ GeV');
  assert(c.ERAS.length === 8 && c.ERAS[4][1] === 10 && c.ERAS[4][2] === 1200, 'book eras');
});
group('neutrons and protons: n/p = e^(−1.293/kT); Y = 2(n/p)/(1 + n/p); decay with τ = 878.4 s', () => {
  near(c.npEq(0.8), Math.exp(-1.29333 / 0.8), 1e-12); near(c.npEq(0.8), 0.1986, 1e-3, 'about 1/5');
  const r = c.bbn({ kTf: 0.8, tau: 878.4, tD: 180 }, K); near(r.Y, 2 * r.npD / (1 + r.npD), 1e-12, 'Y from n/p');
  near(r.tf, 1.17, 0.02, 'freeze out at about 1 s'); near(r.Y, 0.270, 0.002, 'Y at the defaults'); near(r.kTD, 0.0835, 0.01, 'kT at 3 minutes');
  near(r.XD, r.Xf * Math.exp(-(180 - r.tf) / 878.4), 1e-12, 'decay law');
  const lo = c.bbn({ kTf: 0.7, tau: 878.4, tD: 180 }, K), longer = c.bbn({ kTf: 0.8, tau: 1000, tD: 180 }, K), later = c.bbn({ kTf: 0.8, tau: 878.4, tD: 300 }, K);
  assert(lo.Y < r.Y && longer.Y > r.Y && later.Y < r.Y, 'Y rises with kT_f and τ, falls with t_D'); near(c.bbn({ kTf: 0.75, tau: 878.4, tD: 180 }, K).Y, 0.247, 0.004, 'kT_f = 0.75 MeV gives about the observed 0.245');
  const none = c.bbn({ kTf: 0.8, tau: 1e30, tD: 180 }, K); near(none.Y, 2 * c.npEq(0.8) / (1 + c.npEq(0.8)), 1e-9, 'no decay');
});
group('the nucleon sample: counts follow equilibrium, freeze out and decay; helium takes pairs of neutrons; mean Y matches', () => {
  let Ys = 0, nf = 0; const o = { kTf: 0.8, tau: 878.4, tD: 180 }, r = c.bbn(o, K);
  for (let s = 1; s <= 40; s++) { const N = c.nucleons(2000, s), k = c.sampleCount(N, o, K, 1e4); Ys += k.Y; nf += k.nF;
    assert.equal(k.n + k.p + 4 * k.He, 2000, 'nucleons conserved'); assert(k.n <= 1, 'at most one neutron left over'); }
  near(Ys / 40, r.Y, 0.02, 'mean Y of 40 runs'); near(nf / 40 / 2000, r.Xf, 0.02, 'neutron share at freeze out');
  const N = c.nucleons(20000, 3); near(c.sampleCount(N, o, K, 0.05).n / 20000, c.XnEq(c.kTeV(c.tempAt(K, 0.05)) * 1e-6), 0.02, 'equilibrium early');
});
group('the microwave background: Wien peaks, 411 photons per cm³, ∫B dν = σT⁴/π, stretching keeps a blackbody, FIRAS fits 2.725 K', () => {
  near(c.WIEN_B / 2.7255 * 1e3, 1.0632, 1e-3, 'λ_max today (mm)'); near(c.WIEN_NU * 2.7255 / 1e9, 160.23, 1e-3, 'ν_max today (GHz)');
  near(c.nGamma(2.7255) * 1e-6, 410.7, 1e-3, 'photons per cm³'); near(2.7255 * (1 + 1089.92), 2973.2, 1e-4, 'T at decoupling');
  let s = 0; const T = 3000; for (let i = 1; i <= 20000; i++) { const nu = i * 5e11; s += c.B_nu(nu, T) * 5e11; } rel(s, 5.670374419e-8 * Math.pow(T, 4) / Math.PI, 2e-3, 'Stefan–Boltzmann');
  for (const z of [1, 10, 1089.92]) for (const nu of [1e10, 1.6e11, 5e11]) rel(c.B_nu(nu * (1 + z), 2.7255 * (1 + z)), Math.pow(1 + z, 3) * c.B_nu(nu, 2.7255), 1e-10, 'stretched blackbody');
  assert.equal(c.FIRAS.length, 43); for (const r of c.FIRAS) near(r[1] - c.firasModel(r[0], 2.725), r[2] / 1000, 0.01, `FIRAS ${r[0]} = BB(2.725) + residual (within 10 kJy/sr: the file used older constants)`);
  const fit = c.fitFiras(); near(fit.T, 2.725, 2e-4, 'fit'); assert(fit.chi2 / fit.dof < 1.5, 'good fit');
});
console.log(`All ${n} groups passed.`);
