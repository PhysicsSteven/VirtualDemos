'use strict';
// Photon Interactions in Matter: the XCOM sums against NIST SRD 126, Klein–Nishina, energy transfer and g, where each process wins,
// the slab Monte Carlo against e^(−μt), and the X-ray tube half value layers against SpekPy's own.
const assert = require('node:assert'), fs = require('node:fs'), path = require('node:path'), vm = require('node:vm');
const { core, readLib } = require('./demo_source.cjs');
const c = core('photon-interactions', 'MEC2,RE,NA,useData,elem,material,matCS,muRho,muTr,muEn,muSRD,kleinNishina,knSigmaExact,incohTransfer,crossing,evansLine,equivalentZ,mcSlab,tubeSpectrum,filtered,airKerma,hvl,meanEnergy,effectiveEnergy,perAtom,electronDensity');
const dctx = {}; vm.runInNewContext(readLib('photondata.js'), dctx, { timeout: 5000 }); const D = dctx.VDPHOTON; c.useData(D);

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
const abs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants: CODATA 2022, the same as the Compton demo', () => {
  const k = core('compton', 'MEC2,RE');
  assert.strictEqual(c.MEC2, k.MEC2); near(c.RE, k.RE * 100, 1e-12, 'r_e in cm'); assert.strictEqual(c.NA, 6.02214076e23);
});

group('the data file: 92 elements from 1 keV to 100 MeV, 15 materials, compositions summing to 1', () => {
  for (let Z = 1; Z <= 92; Z++) { const e = c.elem(Z); assert(e.E[0] <= 1.0001 && e.E[e.E.length - 1] >= 99999, `Z ${Z} range`); }
  assert.strictEqual(D.mats.length, 15);
  for (const m of D.mats) { const s = Object.values(m.w).reduce((a, b) => a + b, 0); abs(s, 1, 2e-4, `${m.key} weights`); }
});

group('XCOM sums match the SRD 126 μ/ρ table of every material', () => {
  for (const m of D.mats) { const M = c.material(m.key), rel = [];
    for (const row of M.en) { const [E, mu] = row; if (E > 2e4) continue; rel.push(Math.abs(c.muRho(M, E) / mu - 1)); }
    rel.sort((a, b) => a - b); const med = rel[rel.length >> 1];
    assert(med < 0.002, `${m.key}: median ${med}`); }
  /* water and air everywhere to 0.1 % */
  /* (rows at an absorption edge come in pairs at the same energy, below and above it: those are left out) */
  const edge = (rows, i) => (i > 0 && rows[i - 1][0] === rows[i][0]) || (i + 1 < rows.length && rows[i + 1][0] === rows[i][0]);
  for (const key of ['water', 'air']) c.material(key).en.forEach(([E, mu], i, rows) => { if (E <= 2e4 && !edge(rows, i)) near(c.muRho(c.material(key), E), mu, 1e-3, `${key} at ${E} keV`); });
});

group('printed SRD 126 values (Hubbell and Seltzer, Tables 3 and 4)', () => {
  /* [material, keV, μ/ρ, μ_en/ρ] copied from the NIST tables */
  for (const [m, E, mu, en] of [['water', 30, 0.3756, 0.1557], ['water', 100, 0.1707, 0.02546], ['water', 1250, 0.06323, 0.02965], ['water', 10000, 0.02219, 0.01566],
    ['air', 1250, 0.05687, 0.02666], ['pb', 100, 5.549, 1.976], ['pb', 1000, 0.07102, 0.03654], ['bone', 30, 1.331, 1.070], ['concrete', 1250, 0.05807, 0.02716]]) {
    near(c.muRho(m, E), mu, 2e-3, `${m} μ/ρ at ${E} keV`); near(c.muEn(c.material(m), E), en, 1e-9, `${m} μ_en/ρ at ${E} keV`); }
});

group('the gamma spectroscopy demo\'s attenuation agrees', () => {
  const g = core('gamma-spectroscopy', 'GSCORE').GSCORE();
  for (const [k, E] of [['pb', 661.657], ['pb', 1332.492], ['al', 661.657], ['cu', 1000]]) near(c.muRho(k, E), g.muMass(k, E), 0.01, `${k} at ${E} keV`);
});

group('Klein–Nishina: the numeric integral matches the closed form; Thomson at low energy', () => {
  for (const E of [1, 10, 100, 661.657, 1250, 1e4, 1e5]) near(c.kleinNishina(E).sigma, c.knSigmaExact(E), 2e-5, `σ at ${E} keV`);
  { const k = 1 / c.MEC2; near(c.knSigmaExact(1) / (8 * Math.PI / 3 * c.RE ** 2), 1 - 2 * k + 26 / 5 * k * k, 1e-6, 'Thomson limit at 1 keV'); }
  /* the mean share of hν given to the electron at 1 MeV, 0.440 (Attix Fig. 7.7) */
  abs(c.kleinNishina(1000).frac, 0.440, 0.002, '⟨T⟩/hν at 1 MeV');
});

group('energy transfer: g from the two tables is near zero for water below 1 MeV and grows above', () => {
  const w = c.material('water'), g = (E) => 1 - c.muEn(w, E) / c.muTr(w, E).total;
  abs(g(100), 0, 0.002, 'water 100 keV'); abs(g(1000), 0.0025, 0.002, 'water 1 MeV'); abs(g(10000), 0.037, 0.006, 'water 10 MeV');
  assert(c.muTr(w, 1000).total < c.muRho(w, 1000)); assert(c.muEn(w, 100) <= c.muTr(w, 100).total * 1.002);
  /* Pb below its K edge is mostly photoelectric, and the L fluorescence carries little: μ_tr/μ near 1 at 30 keV */
  const pb = c.material('pb'); assert(c.muTr(pb, 30).total / c.muRho(pb, 30) > 0.8);
});

group('which process wins: the crossings', () => {
  abs(c.crossing(c.material('water'), 'pe'), 28.0, 1.0, 'water photoelectric = Compton (keV)');
  abs(c.crossing(c.material('pb'), 'pe'), 556, 15, 'lead photoelectric = Compton');
  abs(c.crossing(c.material('water'), 'pair') / 1000, 24.1, 1.0, 'water Compton = pair (MeV)');
  abs(c.crossing(c.material('pb'), 'pair') / 1000, 4.75, 0.2, 'lead Compton = pair');
  abs(c.equivalentZ(c.material('water'), 'pe'), 7.5, 0.15, 'water equivalent Z');
  const pe = c.evansLine('pe'); for (let i = 1; i < pe.length; i++) if (pe[i][1] && pe[i - 1][1] && pe[i][0] > 10) assert(pe[i][1] >= pe[i - 1][1] * 0.9, `pe line rises with Z at ${pe[i][0]}`);
});

group('per atom and per electron: water has 3.343e23 electrons per gram', () => {
  near(c.electronDensity(c.material('water')), 3.343e23, 1e-3, 'electrons/g');
});

group('slab Monte Carlo: uncollided photons match e^(−μt) within counting error', () => {
  let u = 0, N = 0, ex = 0; for (let s = 1; s <= 10; s++) { const r = c.mcSlab({ mat: 'water', E: 661.657, t: 20, N: 10000, seed: s * 7919 }); u += r.uncollided; N += r.N; ex = r.narrow; }
  abs(u / N, ex, 4 * Math.sqrt(ex * (1 - ex) / N), 'narrow beam T');
  const r = c.mcSlab({ mat: 'water', E: 661.657, t: 20, N: 20000, seed: 7 }); abs(r.B, 2.49, 0.1, 'water 661.657 keV 20 cm buildup');
  assert(r.B > 1 && r.transmitted >= r.uncollided);
  const l = c.mcSlab({ mat: 'pb', E: 661.657, t: 3, N: 20000, seed: 7 }); abs(l.B, 2.09, 0.1, 'lead 3 cm buildup');
});

group('X-ray tube: half value layers match SpekPy 2.5.4 (80 kVp, 2.5 mm Al: HVL₁ 2.740, HVL₂ 4.093 mm Al)', () => {
  const s = c.filtered(c.tubeSpectrum(80), [{ mat: 'al', mm: 2.5 }]), h = c.hvl(s, 'al');
  abs(h.hvl1, 2.740, 0.006, 'HVL₁'); abs(h.hvl2, 4.093, 0.008, 'HVL₂'); abs(c.meanEnergy(s), 42.98, 0.1, 'mean energy');
  /* more filtration hardens the beam: HVL₁ rises, h rises toward 1 */
  const s2 = c.filtered(c.tubeSpectrum(80), [{ mat: 'al', mm: 2.5 }, { mat: 'cu', mm: 0.3 }]), h2 = c.hvl(s2, 'al');
  assert(h2.hvl1 > h.hvl1 && h2.h > h.h && h2.h < 1);
  /* the effective energy gives the same HVL in Al */
  const Ee = c.effectiveEnergy(h.hvl1, 'al', 80); near(Math.log(2) / (c.muRho('al', Ee) * 2.699) * 10, h.hvl1, 2e-3, 'Eeff');
});

console.log(`${n} groups passed`);
