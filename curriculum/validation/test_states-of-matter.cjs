'use strict';
// States of Matter: argon units, the molecular dynamics (energy and enthalpy bookkeeping, phases), the beaker heating curve.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('states-of-matter', 'AR,TAU_PS,KJMOL,ATM,POW,mdMake,mdStep,mdKE,mdTemp,mdEnthalpy,mdBonds,mdPhases,SUBSTANCES,stages,beakerState,coveredState,beakerCSV,atomsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const shares = (ph) => { const k = [0, 0, 0]; for (const p of ph) k[p]++; return k.map((v) => v / ph.length); };

group('argon units: τ = σ√(m/ε) = 2.151 ps, ε per atom = 0.9977 kJ/mol, ε/σ³ = 416 atm', () => {
  near(c.TAU_PS, 2.1514, 2e-4, 'tau'); near(c.KJMOL, 120 * 8.314462618 / 1000, 1e-9, 'kJ/mol'); near(c.ATM, 416.0, 1e-3, 'atm');
  near(c.POW, c.KJMOL / c.TAU_PS * 1000, 1e-12, 'power unit');
});
group('no heater: velocity Verlet keeps the enthalpy KE + U + PV constant (crystal under the piston)', () => {
  const S = c.mdMake({ kind: 'crystal', T0: 0.4, P: 0.04 }), H0 = c.mdEnthalpy(S);
  for (let i = 0; i < 1500; i++) c.mdStep(S, 0);
  assert(Math.abs(c.mdEnthalpy(S) - H0) / S.N < 2e-3, `drift ${(c.mdEnthalpy(S) - H0) / S.N} ε per atom`);
  assert.equal(S.N, 432);
});
group('heater: the enthalpy rises by exactly the heat added (first law at constant pressure)', () => {
  const S = c.mdMake({ kind: 'crystal', T0: 0.4, P: 0.04 }), H0 = c.mdEnthalpy(S);
  for (let i = 0; i < 1500; i++) c.mdStep(S, 0.02);
  near(S.Q / S.N, 0.02 * 1500 * 0.005, 1e-9, 'heat delivered at the set power');
  assert(Math.abs(c.mdEnthalpy(S) - H0 - S.Q) / S.N < 3e-3, `ΔH − Q = ${(c.mdEnthalpy(S) - H0 - S.Q) / S.N} ε per atom`);
});
group('the fcc crystal reads as solid with about 10 bonds per atom; a hot sample reads as liquid and vapor', () => {
  const S = c.mdMake({ kind: 'crystal', T0: 0.3, P: 0.04 });
  for (let i = 0; i < 300; i++) c.mdStep(S, 0);
  const sh = shares(c.mdPhases(S)); assert(sh[0] > 0.8, `solid share ${sh[0]}`);
  const nb = 2 * c.mdBonds(S) / S.N; assert(nb > 9 && nb < 12, `bonds per atom ${nb}`);
  const V = c.mdMake({ kind: 'vapor', T0: 1.4, P: 0.04 });
  for (let i = 0; i < 300; i++) c.mdStep(V, 0);
  const sv = shares(c.mdPhases(V)); assert(sv[2] > 0.8, `vapor share ${sv[2]}`); assert(sv[0] < 0.02, `solid share in vapor ${sv[0]}`);
  near(c.mdTemp(V), 1.4, 0.1, 'vapor temperature');
});
group('beaker: 200 g of ice from −20 °C needs 8.36 kJ, 66.8 kJ, 83.72 kJ and 451.2 kJ (Q = mcΔT, Q = mL)', () => {
  const st = c.stages('water', 0.2, -20).map((g) => +(g.Q1 - g.Q0).toFixed(6));
  assert.deepEqual(st, [8360, 66800, 83720, 451200]);
  const mid = c.beakerState('water', 0.2, -20, 8360 + 33400); assert.equal(mid.T, 0); near(mid.mS, 0.1, 1e-12, 'half melted');
  const boil = c.beakerState('water', 0.2, -20, 158880 + 225600); assert.equal(boil.T, 100); near(boil.mL, 0.1, 1e-12, 'half boiled away');
  near(c.beakerState('water', 0.2, -20, 75160 + 41860).T, 50, 1e-12, 'water halfway');
  const e = c.stages('ethanol', 0.2, 20).map((g) => +(g.Q1 - g.Q0).toFixed(6)); assert.deepEqual(e, [+(0.2 * 2450 * 58.3).toFixed(6), 170800]);
  assert(c.beakerState('water', 0.2, -20, 1e7).done);
});
group('covered beaker: the same as the open one until it boils, then its mass stays 200 g at 100 °C', () => {
  for (const Q of [5000, 50000, 120000]) assert.deepEqual(c.coveredState('water', 0.2, -20, Q), c.beakerState('water', 0.2, -20, Q));
  for (const Q of [158880 + 225600, 1e7]) { const r = c.coveredState('water', 0.2, -20, Q); assert.equal(r.T, 100); near(r.mS + r.mL + r.mV, 0.2, 1e-12, 'mass kept'); assert(!r.done); }
});
group('CSV headers for the worksheets', () => {
  const b = c.beakerCSV([{ t: '10', T: '-15.2', m: '200.0' }], { substance: 'Water', m0: 200, P: 500, T0: -20 }).trim().split('\n');
  assert.equal(b[b.indexOf('row,t_s,T_C,m_g') + 1], '1,10,-15.2,200.0');
  const a = c.atomsCSV([{ t: '0.100', Q: '1.00', T: '60.0', U: '-5.50', s: '80', l: '20', v: '0' }], { N: 432, P: 17 }).trim().split('\n');
  assert.equal(a[a.indexOf('row,t_ns,Q_kJ_per_mol,T_K,U_kJ_per_mol,solid_pct,liquid_pct,vapor_pct') + 1], '1,0.100,1.00,60.0,-5.50,80,20,0');
});
console.log(`${n} states of matter test groups passed`);
