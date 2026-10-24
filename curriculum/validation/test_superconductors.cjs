'use strict';
// Superconductors and the Meissner effect: Table 9.5 data, Equation 9.39, the sphere's field and moment, the perfect conductor.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('superconductors', 'MU0,R_SAMPLE,METALS,bc,sample,psi');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)) || Math.abs(a - b) <= 1e-12, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('Table 9.5 values (OpenStax Vol. 3): Pb 7.2 K, 0.080 T; Sn 3.7 K, 0.031 T; Al 1.2 K, 0.011 T; Zn 0.87 K, 0.0053 T', () => {
  const T95 = { Pb: [7.2, 80], Sn: [3.7, 31], In: [3.4, 29], Hg: [4.2, 41], Al: [1.2, 11], Ga: [1.1, 5.1], Zn: [0.87, 5.3] };
  for (const k in T95) { assert.strictEqual(c.METALS[k].Tc, T95[k][0], k + ' Tc'); assert.strictEqual(c.METALS[k].Bc0, T95[k][1], k + ' Bc0'); }
});
group('Equation 9.39: Bc(T) = Bc(0)[1 − (T/Tc)²], zero at and above Tc; lead at 4.2 K is 52.78 mT', () => {
  near(c.bc('Pb', 0), 80, 1e-12); near(c.bc('Pb', 4.2), 80 * (1 - (4.2 / 7.2) ** 2), 1e-12); near(c.bc('Pb', 4.2), 52.7778, 1e-5);
  assert.strictEqual(c.bc('Pb', 7.2), 0); assert.strictEqual(c.bc('Sn', 5), 0);
});
group('Meissner state: no field inside, m = −2πR³B/μ0 (−12.500 mA·m² for 20 mT), equator field 1.5B, pole field 0', () => {
  const s = c.sample('Pb', 'sc', 4.2, 20, null);
  assert.strictEqual(s.phase, 'meissner'); near(s.Bin, 0, 0); near(s.moment, -2 * Math.PI * c.R_SAMPLE ** 3 * 0.020 / c.MU0, 1e-12); near(s.moment * 1e3, -12.5, 1e-8);
  near(s.Beq, 30, 1e-12); near(s.Bpole, 0, 0);
});
group('intermediate state from (2/3)Bc to Bc: equator field held at Bc, moment falls linearly to zero, continuous at both ends', () => {
  const Bc = c.bc('Pb', 4.2);
  for (const B of [2 / 3 * Bc + 1e-9, 40, 45, 50, Bc - 1e-9]) { const s = c.sample('Pb', 'sc', 4.2, B, null); assert.strictEqual(s.phase, 'intermediate'); near(s.Beq, Bc, 1e-9, 'equator'); }
  near(c.sample('Pb', 'sc', 4.2, 2 / 3 * Bc + 1e-9, null).moment, c.sample('Pb', 'sc', 4.2, 2 / 3 * Bc, null).moment, 1e-6, 'onset');
  near(c.sample('Pb', 'sc', 4.2, Bc - 1e-9, null).moment, 0, 1e-6, 'end'); assert.strictEqual(c.sample('Pb', 'sc', 4.2, Bc, null).phase, 'normal');
});
group('normal metal (above Tc or above Bc): field passes through, zero moment', () => {
  for (const [s, B] of [[c.sample('Pb', 'sc', 9, 20, null), 20], [c.sample('Sn', 'sc', 2, 30, null), 30]]) { near(s.Bin, B, 0); near(s.moment, 0, 0); near(s.Beq, s.Bin, 1e-12); }
});
group('perfect conductor: flux frozen at cooling; cooled in 20 mT then field off leaves +12.500 mA·m² and −10 mT at the equator', () => {
  const s = c.sample('Pb', 'pc', 4.2, 0, 20); near(s.Bin, 20, 0); near(s.moment * 1e3, 12.5, 1e-8); near(s.Beq, -10, 1e-12);
  const z = c.sample('Pb', 'pc', 4.2, 20, 0); near(z.moment, c.sample('Pb', 'sc', 4.2, 20, null).moment, 1e-12, 'zero field cooled matches the Meissner state');
});
group('stream function: continuous at the surface, uniform far away, and its contours carry the exact field (finite differences)', () => {
  const s = c.sample('Pb', 'sc', 4.2, 20, null);
  for (const th of [0.3, 0.9, 1.4]) { const x = Math.sin(th), z = Math.cos(th); near(c.psi(s, 20, x * (1 + 1e-9), z * (1 + 1e-9)), c.psi(s, 20, x * (1 - 1e-9), z * (1 - 1e-9)), 1e-6, 'surface'); }
  near(c.psi(s, 20, 3, 400) / (20 * 9 / 2), 1, 1e-6, 'far field');
  /* B_z = (1/ρ) ∂ψ/∂ρ; at the equator just outside, 1.5 × 20 mT */
  const h = 1e-6, r = 1 + 1e-4; near((c.psi(s, 20, r + h, 0) - c.psi(s, 20, r - h, 0)) / (2 * h) / r, 30, 1e-3, 'equator field from ψ');
});
console.log(`${n} groups passed`);
