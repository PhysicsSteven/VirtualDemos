'use strict';
// Displacement Current: Ampère–Maxwell for a charging parallel plate capacitor.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('displacement-current', 'EPS0,MU0,PLATE_R,GAP,WIRE_A,CAP,current,charge,fieldE,dispEnclosed,fieldB,enclosed');
let n = 0;
const rel = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('capacitance and RC charging: I = dq/dt, q → CV', () => {
  rel(c.CAP, c.EPS0 * Math.PI * 0.05 ** 2 / 0.002, 1e-15); rel(c.CAP, 34.77e-12, 1e-3);
  const V = 100, R = 1e6, t = 12e-6, h = 1e-10;
  rel((c.charge(V, R, t + h) - c.charge(V, R, t - h)) / (2 * h), c.current(V, R, t), 1e-6, 'I = dq/dt');
  rel(c.charge(V, R, 50 * R * c.CAP), c.CAP * V, 1e-12);
});
group('displacement current ε0 dΦE/dt through the gap equals the wire current', () => {
  const V = 100, R = 1e6, t = 5e-6, h = 1e-10, A = Math.PI * c.PLATE_R ** 2;
  const dPhi = (c.fieldE(c.charge(V, R, t + h)) - c.fieldE(c.charge(V, R, t - h))) * A / (2 * h);
  rel(c.EPS0 * dPhi, c.current(V, R, t), 1e-6);
  rel(c.dispEnclosed(1, 0.025), 0.25, 1e-12, 'share r²/R²'); assert.equal(c.dispEnclosed(1, 0.08), 1);
});
group('Ampère–Maxwell: the flat disk and the bag give the same ∮B·dl; B matches inside and outside', () => {
  const I = 7e-5;
  for (const r of [0.01, 0.03, 0.07]) {
    const flat = c.enclosed(I, r, -0.05, 'flat'), bag = c.enclosed(I, r, -0.05, 'bag');
    rel(flat.Ic + flat.Id, I, 1e-12); rel(bag.Ic + bag.Id, I, 1e-12); assert.equal(bag.Ic, 0);
    rel(2 * Math.PI * r * c.fieldB(I, r, false), c.MU0 * I, 1e-12);
  }
  for (const r of [0.01, 0.04, 0.05, 0.08]) { const e = c.enclosed(I, r, 0, 'flat'); rel(2 * Math.PI * r * c.fieldB(I, r, true), c.MU0 * (e.Ic + e.Id), 1e-12); }
  rel(c.fieldB(I, 0.05, true), c.fieldB(I, 0.05, false), 1e-12, 'continuous at the plate edge');
  rel(c.fieldB(I, 0.07, true), c.fieldB(I, 0.07, false), 1e-12, 'same outside the plates');
  rel(c.fieldB(I, 0.02, true) / c.fieldB(I, 0.01, true), 2, 1e-12, 'linear in r inside');
});
console.log(`${n} displacement-current test groups passed`);
