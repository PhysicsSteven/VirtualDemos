'use strict';
// Inverse Square Force Lab: Newton's and Coulomb's laws against hand results, and the inverse square scaling.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('force-lab', 'FL_G,FL_K,FL_E,FL_MODES,flForce,flRadius,flDrawR');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const rel = (a, b, tol, msg) => assert(Math.abs(a / b - 1) <= tol, `${msg || ''} expected ${b}, got ${a}`);

test('constants: G and k = 1/(4πε₀) from CODATA 2022, e exact', () => {
  assert.equal(C.FL_G, 6.67430e-11); rel(C.FL_K, 1 / (4 * Math.PI * 8.8541878188e-12), 1e-10); assert.equal(C.FL_E, 1.602176634e-19);
});
test('gravity: two 500 kg balls 3.0 m apart pull with 1.854 × 10⁻⁶ N (attraction is negative)', () => {
  rel(C.flForce('grav', 500, 500, 3), -6.67430e-11 * 250000 / 9, 1e-14); rel(C.flForce('grav', 500, 500, 3), -1.85397e-6, 1e-5);
});
test('Coulomb: ±2 μC at 4.0 cm attract with 22.47 N; like charges repel with the same size', () => {
  rel(C.flForce('coul', 2, -2, 4), -22.4689, 1e-5); rel(C.flForce('coul', -2, -2, 4), 22.4689, 1e-5); rel(C.flForce('coul', 4, 1, 4), 22.4689, 1e-5);
});
test('atomic scale: a proton and an electron at the Bohr radius, 8.239 × 10⁻⁸ N', () => {
  rel(-C.flForce('atom', 1, -1, 52.9177210544), 8.2387e-8, 1e-4);
});
test('inverse square: doubling r quarters F, doubling one body doubles F, swapping bodies changes nothing', () => {
  for (const m of ['grav', 'coul', 'atom']) {
    const L = C.FL_MODES[m].len, a = m === 'grav' ? 300 : 3, b = m === 'grav' ? 700 : -5;
    rel(C.flForce(m, a, b, L / 10) / C.flForce(m, a, b, L / 5), 4, 1e-12, m);
    rel(C.flForce(m, 2 * a, b, L / 7) / C.flForce(m, a, b, L / 7), 2, 1e-12, m);
    rel(C.flForce(m, a, b, L / 3), C.flForce(m, b, a, L / 3), 1e-15, m);
  }
});
test('a 1000 kg lead sphere has radius 27.6 cm (11 340 kg/m³); Same size draws every mass that big', () => {
  rel(C.flRadius(1000), Math.cbrt(3000 / (4 * Math.PI * 11340)), 1e-12); rel(C.flRadius(1000), 0.2761, 1e-3);
  assert.equal(C.flDrawR('grav', 5, true), C.flDrawR('grav', 1000, false));
});
console.log(`${n} tests passed`);
