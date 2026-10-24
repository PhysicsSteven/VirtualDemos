'use strict';
// Molecules: Bonds and Spectra: the NaCl ionic bond (OpenStax §9.1), Morse curves from measured constants, rotation and vibration
// levels (§9.2), and the HCl infrared band against measured line positions.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('molecules', 'KE2,CM_EV,MASS,NACL,ionA,ionTerms,ionU,ionMin,nForD,crossBare,crossR,MOLS,HCL37,isotope,mu,G,Bv,Dv,nuVib,term,transition,IfromB,rFromB,kFromNu,De,morseA,morse,antiMorse,levelE,bandLines,absorb,peakNear');
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const nearAbs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); console.log('PASS', name); }

group('§9.1 NaCl: ΔE = 5.14 − 3.62 = 1.52 eV; Coulomb energy at 0.236 nm is −6.10 eV; without repulsion the depth would be 4.58 eV', () => {
  const t = c.ionTerms(0.236, 19); nearAbs(t.dE, 1.52, 1e-12, 'ΔE'); nearAbs(t.coul, -6.10, 0.005, 'Coulomb'); nearAbs(t.dE + t.coul, -4.58, 0.005, 'no repulsion');
  near(c.KE2, 1.43996, 1e-5, 'ke² in eV nm');
});
group('§9.1 NaCl: the minimum sits at the measured 0.236 nm for every exponent; n ≈ 19 gives the measured 4.26 eV', () => {
  for (const n of [6, 9, 12, 19, 24]) { const m = c.ionMin(n); nearAbs(m.r0, 0.236, 1e-6, `r0 for n ${n}`); nearAbs(m.D, 4.5815 - 6.1015 / n, 2e-4, `D for n ${n}`); }
  near(c.nForD(), 18.976, 1e-3, 'n for 4.26 eV'); nearAbs(c.ionMin(c.nForD()).D, 4.26, 1e-9); nearAbs(c.ionMin(19).D, 4.260, 5e-4);
  assert(c.ionMin(9).D < c.ionMin(19).D, 'a softer repulsion gives a shallower well');
});
group('§9.1 NaCl: electron transfer pays off inside r = ke²/ΔE = 0.947 nm; the repulsion is negligible there; far away the ions sit 1.52 eV up', () => {
  near(c.crossBare(), 0.9473, 1e-4); near(c.crossR(19), c.crossBare(), 1e-9); nearAbs(c.ionU(1e6, 19), 1.52, 1e-5);
  assert(c.ionU(0.12, 19) > 0, 'strong repulsion at short range'); assert(c.ionU(0.12, 19, false) < -10, 'no repulsion: collapse');
});
group('constants: B_e = h/(8π²cμr_e²) reproduces each tabulated r_e within 0.01 %', () => {
  for (const k in c.MOLS) { const m = c.MOLS[k]; near(c.rFromB(m.Be, c.mu(m)), m.re, 1e-4, k); }
  near(c.mu(c.MOLS.HCl), 0.979593, 1e-6, 'μ H35Cl'); near(c.mu(c.HCL37), 0.981077, 1e-6, 'μ H37Cl'); near(c.mu(c.MOLS.H2), 0.503913, 1e-6, 'μ H2');
});
group('covalent: Morse well depth D_e = D₀ + G(0); H₂ D_e = 4.747 eV, zero point 0.269 eV; minimum at r_e; curvature gives k = μ(2πcωe)²', () => {
  const H = c.MOLS.H2; nearAbs(c.De(H), 4.747, 0.001); nearAbs(c.G(H, 0) * c.CM_EV, 0.269, 0.001); nearAbs(c.De(H) - c.G(H, 0) * c.CM_EV, H.D0, 1e-12);
  for (const k in c.MOLS) { const m = c.MOLS[k]; nearAbs(c.morse(m, m.re), -c.De(m), 1e-12, k); const h = 1e-5, k2 = (c.morse(m, m.re + h) - 2 * c.morse(m, m.re) + c.morse(m, m.re - h)) / (h * h) * 1.602176634e-19 / 1e-18;
    near(k2, c.kFromNu(m.we, c.mu(m)), 1e-4, `k ${k}`); nearAbs(c.morse(m, 50 * m.re), 0, 1e-6); assert(c.antiMorse(m, m.re) > 0, 'antibonding is repulsive'); }
  near(c.kFromNu(c.MOLS.HCl.we, c.mu(c.MOLS.HCl)), 516.3, 1e-3, 'k HCl');
  nearAbs(c.levelE(H, 0), -H.D0, 1e-12);
});
group('§9.2 rigid rotor and harmonic oscillator: equal spacing hf; E_rot = l(l + 1)ħ²/2I; lines hf ± 2B m with no line at hf', () => {
  const m = c.MOLS.HCl, B = c.Bv(m, 0), hf = c.nuVib(m);
  for (let J = 0; J < 6; J++) { nearAbs(c.term(m, 2, J, 'book') - c.term(m, 1, J, 'book'), hf, 1e-9); nearAbs(c.term(m, 0, J, 'book') - c.term(m, 0, 0, 'book'), J * (J + 1) * B, 1e-9); }
  for (let J = 0; J < 8; J++) { nearAbs(c.transition(m, 0, J, 1, 1, 'book').nu, hf + 2 * B * (J + 1), 1e-9); if (J) nearAbs(c.transition(m, 0, J, 1, -1, 'book').nu, hf - 2 * B * J, 1e-9); }
  nearAbs(B * c.CM_EV, 1.294e-3, 1e-6, 'ħ²/2I in eV'); nearAbs(2 * B * c.CM_EV, 0.0026, 1e-4, 'line spacing ħ²/I ≈ 0.0026 eV');
  near(c.IfromB(B), 2.681e-47, 1e-3, 'I of HCl');
});
group('§9.2 selection rules: Δl = ±1 only; no absorption by molecules without a dipole', () => {
  const m = c.MOLS.HCl; assert(c.transition(m, 0, 2, 1, 1).allowed); assert(c.transition(m, 0, 2, 1, -1).allowed); assert(!c.transition(m, 0, 2, 1, 0).allowed); assert(!c.transition(m, 0, 2, 1, 2).allowed);
  assert(!c.transition(m, 0, 0, 1, -1).allowed, 'P(0) does not exist'); assert(!c.transition(c.MOLS.N2, 0, 1, 1, 1).allowed, 'N2 has no dipole');
  nearAbs(c.transition(m, 0, 0, 0, 1).nu, 20.878, 0.002, 'pure rotation J 0 → 1 of H35Cl (measured 625.9 GHz = 20.878 cm⁻¹)');
});
group('HCl band from the measured constants: band origin 2885.977 cm⁻¹ and lines R(0) 2906.25, R(1) 2925.90, P(1) 2865.10, P(2) 2843.62 cm⁻¹', () => {
  const m = c.MOLS.HCl; nearAbs(c.nuVib(m), 2885.977, 0.002, 'ν0');
  const want = [[0, 1, 2906.25], [1, 1, 2925.90], [1, -1, 2865.10], [2, -1, 2843.62]]; for (const [J, d, nu] of want) nearAbs(c.transition(m, 0, J, 1, d).nu, nu, 0.02, `J ${J} Δl ${d}`);
  const r = c.Bv(m, 1) - c.Bv(m, 0); assert(r < 0 && r > -0.32, 'B falls in v = 1, so R lines crowd and P lines spread');
});
group('H³⁷Cl: isotope scaling gives the measured band origin 2883.88 cm⁻¹ and R(0) 2904.11, P(1) 2863.03 cm⁻¹', () => {
  const m = c.HCL37; nearAbs(c.nuVib(m), 2883.88, 0.02, 'ν0'); nearAbs(c.transition(m, 0, 0, 1, 1).nu, 2904.11, 0.02); nearAbs(c.transition(m, 0, 1, 1, -1).nu, 2863.03, 0.02);
  const rho = Math.sqrt(c.mu(c.MOLS.HCl) / c.mu(m)); near(m.we / c.MOLS.HCl.we, rho, 1e-12); near(m.Be / c.MOLS.HCl.Be, rho * rho, 1e-12);
});
group('band intensities at 300 K: strongest lines R(2) and R(3), P(3) strongest in P; isotope pairs 3.1 : 1; hotter gas spreads the band', () => {
  const L = c.bandLines(300, 'both'), s35 = L.filter((l) => l.iso === 'H35Cl'), top = s35.reduce((a, b) => (b.S > a.S ? b : a));
  assert(top.br === 'R' && (top.J === 2 || top.J === 3), `strongest ${top.br}(${top.J})`);
  const P = s35.filter((l) => l.br === 'P').reduce((a, b) => (b.S > a.S ? b : a)); assert.equal(P.J, 3);
  const a = L.find((l) => l.iso === 'H35Cl' && l.br === 'R' && l.J === 2), b = L.find((l) => l.iso === 'H37Cl' && l.br === 'R' && l.J === 2); near(a.S / b.S, 0.7576 / 0.2424, 0.01, 'abundance ratio');
  const hot = c.bandLines(1000, '35').filter((l) => l.br === 'R').reduce((x, y) => (y.S > x.S ? y : x)); assert(hot.J >= 4, 'peak moves out at 1000 K');
});
group('spectrometer: the peak finder returns the center of the nearest line when lines are resolved, and the broadened band keeps its area', () => {
  const L = c.bandLines(300, 'both');
  for (const [nu, want] of [[2907, 2906.248], [2864.6, 2865.099], [2904.5, 2904.112], [2863.5, 2863.025], [3015.9, 3014.41]]) nearAbs(c.peakNear(L, nu, 0.3).nu, want, 0.01, `peak near ${nu}`);
  const area = (fw) => { let s = 0; for (let x = 2500; x < 3200; x += 0.01) s += c.absorb(L, x, fw) * 0.01; return s; }; near(area(0.3), area(2), 1e-3, 'area');
  const tot = L.reduce((s, l) => s + l.S, 0); near(area(1), tot, 1e-3, 'area = sum of strengths');
});
