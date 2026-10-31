'use strict';
// Spectra Explorer, Atom models mode: six models of hydrogen under one photon beam (PhET Models of the Hydrogen Atom).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const C = core('spectra', 'AM_RH,AM_HC,AM_RATES,BOHR_A0,BOHR_ALPHA,BOHR_C,HS_ME,amLevel,amLine,amThomsonNm,amCollapseTime,amClassical,amRadial,amRadInt,amRate,amLifetime,amAbsorbN,amAbsorbL,amDecay');
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-300, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
let n = 0; function group(name, f) { f(); n++; console.log('PASS', name); }

group('R_H = R∞/(1 + m_e/m_p) = 10 967 758.3 m⁻¹; hcR_H = 13.5983 eV', () => {
  near(C.AM_RH, 10967758.34, 2e-9); near(-C.amLevel(1), 13.59829, 1e-5);
});
group('lines against NIST vacuum wavelengths (fine structure averaged): Lyman α 121.567, Hα 656.46, Hβ 486.27 nm, within 0.02 nm', () => {
  for (const [u, l, nm] of [[2, 1, 121.567], [3, 1, 102.572], [3, 2, 656.46], [4, 2, 486.27], [5, 2, 434.17]]) assert(Math.abs(C.amLine(u, l).nm - nm) < 0.02, `${u}→${l}`);
});
group('Thomson: one line at 2πa₀/α = 45.563 nm when R = a₀, scaling as R^(3/2); ω² = ke²/(m_e R³) checked directly', () => {
  near(C.amThomsonNm(C.BOHR_A0), 45.5634, 1e-5);
  near(C.amThomsonNm(4 * C.BOHR_A0), 8 * 45.5634, 1e-5);
  const R = 0.2e-9, ke2 = 8.9875517862e9 * 1.602176634e-19 ** 2, w = Math.sqrt(ke2 / (C.HS_ME * R ** 3));
  near(C.amThomsonNm(0.2), 2 * Math.PI * C.BOHR_C / w * 1e9, 1e-6);
});
group('classical collapse: r³ = r₀³ − 4r_e²ct, 1.556e-11 s from a₀, radius falling and wavelength shortening', () => {
  const T = C.amCollapseTime(C.BOHR_A0 * 1e-9); near(T, 1.5562e-11, 2e-4);
  const a = C.amClassical(0, C.BOHR_A0 * 1e-9), b = C.amClassical(T / 2, C.BOHR_A0 * 1e-9), c = C.amClassical(T * 1.0001, C.BOHR_A0 * 1e-9);
  near(a.nm, 45.5634, 1e-5); near(b.r, C.BOHR_A0 * 1e-9 * Math.cbrt(0.5), 1e-9); assert(b.nm < a.nm && c.done);
});
group('radial functions are normalized; ⟨1s|r|2p⟩ = 128√6/243 a_μ exactly', () => {
  for (const [nn, l] of [[1, 0], [2, 1], [3, 0], [4, 2], [6, 5], [6, 0]]) { let s = 0; const h = 0.005; for (let r = h / 2; r < 300; r += h) s += C.amRadial(nn, l, r) ** 2 * r * r * h; near(s, 1, 1e-6, `${nn}${l}`); }
  near(C.amRadInt(2, 1, 1, 0), 128 * Math.sqrt(6) / 243, 1e-10);
});
group('rates against NIST ASD (Wiese and Fuhr 2009): 2p→1s 6.2649e8, 3p→1s 1.6725e8, 3d→2p 6.4651e7, 3p→2s 2.2448e7 s⁻¹, within 0.05 %', () => {
  near(C.amRate(2, 1, 1, 0), 6.2649e8, 5e-4); near(C.amRate(3, 1, 1, 0), 1.6725e8, 5e-4);
  near(C.amRate(3, 2, 2, 1), 6.4651e7, 5e-4); near(C.amRate(3, 1, 2, 0), 2.2448e7, 5e-4);
});
group('lifetimes: 2p 1.596 ns, 3s 158 ns, 3p 5.27 ns, 3d 15.5 ns; 2s two photon 0.12 s; 1s forever', () => {
  near(C.amLifetime(2, 1), 1.596e-9, 1e-3); near(C.amLifetime(3, 0), 1.584e-7, 2e-3); near(C.amLifetime(3, 1), 5.27e-9, 2e-3); near(C.amLifetime(3, 2), 1.547e-8, 2e-3);
  near(C.amLifetime(2, 0), 0.1215, 2e-3); assert(C.amLifetime(1, 0) === Infinity);
});
group('selection rule: no rate unless l changes by one; 2s has no one photon way down', () => {
  assert(C.amRate(3, 0, 1, 0) === 0 && C.amRate(3, 2, 1, 0) === 0 && C.amRate(2, 0, 1, 0) === 0);
  assert(C.AM_RATES['2,0'].length === 0 && C.amDecay(2, 0, 0.5) === null);
  for (const k in C.AM_RATES) for (const d of C.AM_RATES[k]) assert(Math.abs(d.l - +k.split(',')[1]) === 1);
});
group('absorption picks the nearest line within the lamp spread, ionizes above the binding energy, and 1s goes only to p states', () => {
  assert(C.amAbsorbN(1, C.amLine(2, 1).eV, 0.006) === 2 && C.amAbsorbN(1, C.amLine(3, 2).eV, 0.006) === 0);
  assert(C.amAbsorbN(2, C.amLine(3, 2).eV * 1.004, 0.006) === 3 && C.amAbsorbN(2, C.amLine(3, 2).eV * 1.01, 0.006) === 0);
  assert(C.amAbsorbN(1, 13.7, 0.006) === 'ion' && C.amAbsorbN(2, 3.5, 0.006) === 'ion');
  for (const u of [0, 0.3, 0.99]) assert(C.amAbsorbL(1, 0, 3, u) === 1);
});
group('branching ratios sum to one and follow A: 3p goes to 1s 88.2 % of the time', () => {
  const ds = C.AM_RATES['3,1'], tot = ds.reduce((s, d) => s + d.A, 0), to1 = ds.find((d) => d.n === 1).A / tot;
  near(to1, 0.8817, 1e-3);
  assert(C.amDecay(3, 1, to1 - 1e-9).n === 1 && C.amDecay(3, 1, to1 + 1e-9).n === 2);
});
console.log(`${n} groups passed`);
