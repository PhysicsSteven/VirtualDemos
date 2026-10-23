'use strict';
// Magnetic Fields of Currents, Magnets and Oersted's compass (OpenStax Vol 2 §11.1): pole model and Oersted's needle.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('currents-fields', 'MU0,poleB,poleForceX,oerstedB,oerstedAngle,wireB');
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
console.log(`${n} currents fields magnets test groups passed`);
