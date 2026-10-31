'use strict';
// Magnetic Fields of Currents, Magnets and Oersted's compass (OpenStax Vol 2 §11.1): pole model and Oersted's needle.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('currents-fields', 'MU0,CM,poleB,poleForceX,oerstedB,oerstedAngle,wireB,solField,axisExact,idealSol,coilI,fieldI,IRON_MU,IRON_MS,demagFactor,coreState,acCurrent');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('poles: B points away from N, toward S; inverse square', () => {
  const [bx] = c.poleB([[0, 0, 1]], 2, 0), [bx2] = c.poleB([[0, 0, 1]], 4, 0); assert(bx > 0); near(bx / bx2, 4, 1e-12);
  const [sx] = c.poleB([[0, 0, -1]], 2, 0); assert(sx < 0);
});
group('two magnets: unlike poles facing attract, like poles repel, weaker with distance', () => {
  const A = [[-7, 0, -1], [-1, 0, 1]], Batt = [[1, 0, -1], [7, 0, 1]], Brep = [[1, 0, 1], [7, 0, -1]];
  assert(c.poleForceX(A, Batt) < 0); assert(c.poleForceX(A, Brep) > 0); near(c.poleForceX(A, Brep), -c.poleForceX(A, Batt), 1e-12, 'flipping B reverses the force');
  const far = [[3, 0, -1], [9, 0, 1]]; assert(Math.abs(c.poleForceX(A, far)) < Math.abs(c.poleForceX(A, Batt)));
  near(c.poleForceX(A, Batt), -c.poleForceX(Batt, A), 1e-12, "Newton's third law");
});
group("Oersted: B = μ₀I/(2πh); θ = atan(B/B_E); matches the wire field used elsewhere in the demo", () => {
  near(c.oerstedB(3, 0.03), 2e-5, 1e-9, '3 A at 3 cm gives 20 µT'); near(c.oerstedAngle(3, 0.03, 20e-6), Math.PI / 4, 1e-9, 'equal fields: 45°');
  near(c.oerstedAngle(-3, 0.03, 20e-6), -Math.PI / 4, 1e-9); assert.equal(c.oerstedAngle(0, 0.03, 20e-6), 0);
  near(Math.tan(c.oerstedAngle(5, 0.02, 25e-6)), c.oerstedB(5, 0.02) / 25e-6, 1e-12);
});
group('electromagnet: demagnetizing factor of a spheroid (sphere 1/3, Osborn values, long and flat limits)', () => {
  near(c.demagFactor(1), 1 / 3, 1e-12, 'sphere'); near(c.demagFactor(1 + 1e-4), 1 / 3, 1e-4, 'continuous above 1'); near(c.demagFactor(1 - 1e-4), 1 / 3, 1e-4, 'continuous below 1');
  near(c.demagFactor(5), 0.05582, 1e-3, 'prolate, 5 to 1'); near(c.demagFactor(10), 0.02029, 1e-3, 'prolate, 10 to 1');
  const m = 1000; near(c.demagFactor(m), (Math.log(2 * m) - 1) / (m * m), 1e-3, 'long needle: (ln 2m − 1)/m²');
  near(c.demagFactor(1e-4), 1, 1e-3, 'flat disk: N → 1');
  let prev = 1; for (const r of [0.1, 0.5, 1, 2, 5, 20]) { const N = c.demagFactor(r); assert(N < prev && N > 0, 'falls as the core gets longer'); prev = N; }
});
group('electromagnet: M = (μr − 1)H₀/(1 + (μr − 1)N_d), capped at M_s; the core adds ML/N to each turn', () => {
  const sol = { N: 40, L: 10, R: 1, I: 2 }, cs = c.coreState(sol, 2), H0 = c.axisExact(sol, 0) / c.MU0;
  near(cs.H0, H0, 1e-12); near(cs.chi, 999 / (1 + 999 * c.demagFactor(5)), 1e-12); near(cs.M, cs.chi * H0, 1e-12); assert(!cs.sat);
  near(cs.Ieff, 2 + cs.M * 0.10 / 40, 1e-12); near(cs.gain, cs.Ieff / 2, 1e-12); near(cs.gain, 18.257, 1e-3, 'the preset: about 18 times');
  const big = c.coreState({ N: 200, L: 20, R: 0.25, I: 20 }, 20); assert(big.sat); near(Math.abs(big.M), c.IRON_MS, 1e-12, 'saturated at M_s');
  near(c.coreState(sol, -2).M, -cs.M, 1e-12, 'reversing the current reverses M');
  /* the field everywhere is the coil's own field times the gain */
  const withCore = { ...sol, Ieff: cs.Ieff };
  for (const [z, y] of [[0, 0], [3, 0.4], [8, 0], [0, 4], [-6, 2]]) { const a = c.solField(sol, z, y), b = c.solField(withCore, z, y); near(b[0], a[0] * cs.gain, 1e-12); near(b[1], a[1] * cs.gain, 1e-12); }
  near(c.idealSol(withCore), c.idealSol(sol), 1e-12, 'μ₀nI stays the coil alone');
  /* long thin core: B in the middle ≈ μ₀(nI + M) */
  const lng = { N: 400, L: 40, R: 0.5, I: 0.2 }, cl = c.coreState(lng, 0.2); assert(!cl.sat);
  near(c.axisExact({ ...lng, Ieff: cl.Ieff }, 0), c.MU0 * (400 / 0.40 * 0.2 + cl.M), 2e-3, 'μ₀(nI + M)');
});
group('electromagnet: slow AC supply I₀ sin 2πft', () => {
  near(c.acCurrent(2, 0.5, 0.5), 2, 1e-12, 'peak a quarter period in'); assert(Math.abs(c.acCurrent(2, 0.5, 1)) < 1e-12); near(c.acCurrent(2, 0.5, 1.5), -2, 1e-12, 'reversed half a period later');
  near(c.coilI({ I: 3, It: -1 }), -1, 1e-12); near(c.coilI({ I: 3 }), 3, 1e-12); near(c.fieldI({ I: 3, It: -1, Ieff: -9 }), -9, 1e-12);
});
console.log(`${n} currents fields magnets test groups passed`);
