'use strict';
// Atoms in a Magnetic Field: μ = IA = (e/2m)L for Bohr orbits, U = m_l μ_B B, Landé g, Stern–Gerlach deflection, Zeeman patterns.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('magnetic-moments', 'E,HBAR,ME,MU_B,HC,AMU,KB,G_S,bohrOrbit,orbital,lande,ATOMS,sgStates,sgZ,SG_L1,peakSpeed,meanSpeedBeam,threeJ,zeeman,zeemanStep,LINES');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('Bohr orbits: μ = IA = n μ_B, L = nħ, μ/L = e/2m_e for every n (§8.2)', () => {
  for (let k = 1; k <= 6; k++) { const b = c.bohrOrbit(k); near(b.mu, k * c.MU_B, 1e-8, `μ n=${k}`); near(b.L, k * c.HBAR, 1e-8, `L n=${k}`); near(b.ratio, c.E / (2 * c.ME), 1e-8, 'μ/L'); }
  near(c.bohrOrbit(1).I, 1.05e-3, 0.01, 'I for n = 1 is about 1.05 mA');
  near(c.MU_B, c.E * c.HBAR / (2 * c.ME), 1e-9, 'μ_B = eħ/2m_e');
});
group('quantum orbital moment: |L| = √(l(l+1))ħ, μ_z = −m μ_B, U = m μ_B B, 3d angles', () => {
  const q = c.orbital(2, 1, 1); near(q.Lmag, Math.sqrt(6) * c.HBAR, 1e-12); near(q.muz, -c.MU_B, 1e-12); near(q.U, c.MU_B, 1e-12);
  near(q.theta * 180 / Math.PI, 65.905, 1e-4, 'θ for l = 2, m = 1 (OpenStax gives 65.9°)');
  near(c.orbital(1, 1, 0).theta * 180 / Math.PI, 45, 1e-9, 'l = 1, m = 1 at 45°');
  near(c.orbital(2, 2, 2).U / c.E * 1000, 0.2315353, 1e-6, "U for m = 2 in 2 T is 4 × 0.0578838 meV");
});
group('Landé g: S states give g_s, singlets 1, O ³P₂ 1.5, Fe ⁵D₄ 1.5, Na ²P₃/₂ 4/3 and ²P₁/₂ 2/3 (to the g_s correction)', () => {
  near(c.lande(0, 0.5, 0.5), c.G_S, 1e-12); near(c.lande(2, 0, 2), 1, 1e-12); near(c.lande(1, 1, 2), 1.50116, 1e-5); near(c.lande(2, 2, 4), 1.50116, 1e-5);
  near(c.lande(1, 0.5, 1.5), 1.33411, 1e-5); near(c.lande(1, 0.5, 0.5), 0.66589, 1e-5);
});
group('Stern–Gerlach: 2J + 1 spots, symmetric; deflection formula; 1922 silver splits by about 0.1 mm at the deposit peak', () => {
  for (const [k, ns] of [['Ag', 2], ['H', 2], ['O', 5], ['Cr', 7], ['Fe', 9], ['noSpin', 3]]) { const st = c.sgStates(k); assert.equal(st.length, ns, k); assert(Math.abs(st.reduce((a, q) => a + q.muz, 0)) < 1e-9 * 9.2740100657e-24, 'symmetric'); }
  const mu = c.sgStates('Ag')[1].muz, z = c.sgZ(mu, 1000, 107.8682, 600, 0); near(z, mu * 1000 / (107.8682 * c.AMU) * c.SG_L1 * c.SG_L1 / 2 / 3.6e5, 1e-12);
  const v = c.peakSpeed(1320, 107.8682), sep = 2 * Math.abs(c.sgZ(mu, 1000, 107.8682, v, 0)); near(sep * 1000, 0.10402, 1e-4, 'separation in mm');
  near(Math.abs(c.sgZ(c.MU_B * c.G_S / 2, 1000, 107.8682, v, 0)), c.MU_B * c.G_S / 2 * 1000 * c.SG_L1 ** 2 / (12 * c.KB * 1320), 1e-9, 'z = μG L²/12kT at the peak');
  /* the deposit peak: z density ∝ z⁻³ exp(−K/(α² z)) peaks at v² = 6kT/M (checked numerically) */
  const M = 107.8682 * c.AMU, a2 = 2 * c.KB * 1320 / M; let best = 0, bz = 0; for (let i = 1; i < 20000; i++) { const zz = i * 1e-8, K = 1, p = Math.pow(zz, -3) * Math.exp(-K / (a2 * zz)); if (p > best) { best = p; bz = zz; } }
  near(1 / bz, 6 * c.KB * 1320 / M, 2e-3, 'peak speed squared');
  near(c.meanSpeedBeam(1320, 107.8682), 0.75 * Math.sqrt(2 * Math.PI * c.KB * 1320 / M), 1e-12);
});
group('3j symbols: known values and sum rules', () => {
  near(c.threeJ(1, 1, 0, 1, -1, 0), 1 / Math.sqrt(3), 1e-12); near(c.threeJ(0.5, 0.5, 1, 0.5, 0.5, -1), -1 / Math.sqrt(3), 1e-12); near(c.threeJ(1, 1, 0, 0, 0, 0), -1 / Math.sqrt(3), 1e-12);
  near(c.threeJ(2, 1, 1, 0, 0, 0), Math.sqrt(2 / 15), 1e-12, '(2 1 1; 0 0 0)');
  for (const [ju, jl] of [[2, 1], [1.5, 0.5], [0.5, 0.5], [1, 0]]) { let s = 0; for (let mu = -ju; mu <= ju; mu++) for (let ml = -jl; ml <= jl; ml++) for (let q = -1; q <= 1; q++) s += c.threeJ(ju, 1, jl, -mu, q, ml) ** 2; near(s, 1, 1e-12, `Σ = 1 for ${ju}→${jl}`); }
});
group('Zeeman: normal triplet spaced λ²μ_B B/hc (Cd 19.35 pm at 1 T); along the field two lines; Na D₁ four and D₂ six lines', () => {
  const r = c.zeeman('cd', 1, 'across'); assert.equal(r.comps.length, 3); const st = c.zeemanStep(643.847, 1).dLam_pm; near(st, 19.346, 1e-3);
  near(r.comps[2].shift_pm - r.comps[1].shift_pm, st, 1e-9); near(r.comps[1].shift_pm, 0, 1e-9);
  near(r.comps[1].rel, 2 * r.comps[0].rel, 1e-9, 'across: π twice each σ');
  const al = c.zeeman('cd', 1, 'along'); assert.equal(al.comps.length, 2); near(al.comps[0].rel, al.comps[1].rel, 1e-12);
  assert.equal(c.zeeman('h', 1, 'across').comps.length, 3); near(c.zeeman('h', 1, 'across').comps[2].shift_pm, c.zeemanStep(121.567, 1).dLam_pm, 1e-9);
  assert.equal(c.zeeman('naD1', 1, 'across').comps.length, 4); assert.equal(c.zeeman('naD2', 1, 'across').comps.length, 6);
  const d1 = c.zeeman('naD1', 1, 'across').comps.map((q) => q.dE / (c.MU_B)); near(Math.max(...d1), 0.66589 / 2 + c.G_S / 2, 1e-5, 'D₁ outer = (g_P + g_S)/2 μ_B B');
  assert.equal(c.zeeman('cd', 0, 'across').comps.length, 1, 'no field: one line');
});
console.log(`${n} groups passed`);
