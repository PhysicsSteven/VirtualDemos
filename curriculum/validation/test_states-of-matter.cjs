'use strict';
// States of Matter: argon units, the molecular dynamics (energy and enthalpy bookkeeping, phases), the beaker heating curve.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('states-of-matter', 'AR,TAU_PS,KJMOL,ATM,POW,mdMake,mdStep,mdKE,mdTemp,mdEnthalpy,mdBonds,mdPhases,SUBSTANCES,stages,beakerState,coveredState,beakerCSV,atomsCSV,PHASE,phaseAt,solveT,transitions,VAP_TAU,VAP_RATE,psat,vaporDensity,dewPoint,boilingPoint,isaPressure,vaporStep,airPressure');
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
group('phase diagram: the reference equations meet at the triple and critical points and give the measured fixed points', () => {
  const W = c.PHASE.water, C = c.PHASE.co2;
  /* water (IAPWS): every boundary passes through the triple point; the vapor pressure ends at the critical point */
  near(W.sat(273.16), 611.657, 1e-6, 'sat at Tt'); near(W.sub(273.16), 611.657, 1e-12, 'sub at Tt'); near(W.melt(273.16), 611.657, 1e-12, 'melt at Tt'); near(W.sat(647.096), 22.064e6, 1e-12, 'sat at Tc');
  /* boiling at 1 atm 373.124 K (ITS-90), 2.3392 kPa at 20 C, ice at -20 C 103.26 Pa, ice Ih meets ice III at 251.165 K and 208.566 MPa */
  near(c.boilingPoint(101325), 373.124, 2e-6, 'normal boiling point'); near(W.sat(293.15), 2339.2, 1e-4, 'p_sat 20 C'); near(W.sub(253.15), 103.24, 1e-3, 'ice -20 C');
  near(W.melt(251.165), 208.566e6, 1e-5, 'Ih-III'); near(c.transitions('water', 101325).melt, 273.1525, 2e-7, 'ice melts 0.0025 C at 1 atm');
  /* the melting line leans left: more pressure, lower melting point (about -0.0074 K per atm) */
  const d = c.transitions('water', 101325 * 101).melt - c.transitions('water', 101325).melt; assert(d < -0.7 && d > -0.8, 'melting point drop over 100 atm ' + d);
  /* carbon dioxide (Span and Wagner 1996) */
  near(C.sat(216.592), 0.51795e6, 1e-4, 'co2 sat at Tt'); near(C.sub(216.592), 0.51795e6, 1e-12); near(C.melt(216.592), 0.51795e6, 1e-12); near(C.sat(304.1282), 7.3773e6, 1e-12);
  near(c.transitions('co2', 101325).subl, 194.686, 2e-5, 'dry ice sublimes at -78.46 C'); near(C.sat(273.15), 3.4851e6, 1e-4, 'co2 vapor pressure at 0 C');
  assert.strictEqual(c.transitions('co2', 101325).boil, null); assert.strictEqual(c.transitions('co2', 101325).melt, null);
  /* phases on each side of each boundary */
  assert.strictEqual(c.phaseAt('water', 263.15, 101325), 'solid'); assert.strictEqual(c.phaseAt('water', 300, 101325), 'liquid'); assert.strictEqual(c.phaseAt('water', 400, 101325), 'gas');
  assert.strictEqual(c.phaseAt('water', 263.15, 200e6), 'liquid', 'ice melts under pressure'); assert.strictEqual(c.phaseAt('water', 263.15, 100), 'gas');
  assert.strictEqual(c.phaseAt('water', 680, 30e6), 'super'); assert.strictEqual(c.phaseAt('water', 680, 1e6), 'gas');
  assert.strictEqual(c.phaseAt('co2', 180, 101325), 'solid'); assert.strictEqual(c.phaseAt('co2', 250, 101325), 'gas'); assert.strictEqual(c.phaseAt('co2', 250, 5e6), 'liquid');
  assert.strictEqual(c.phaseAt('co2', 300, 7e8), 'solid'); assert.strictEqual(c.phaseAt('co2', 320, 2e7), 'super');
  /* above the critical pressure nothing boils; below the triple point pressure the solid sublimes */
  assert.strictEqual(c.transitions('water', 30e6).boil, null); assert(c.transitions('water', 100).subl < 273.16 && c.transitions('water', 100).melt === null);
  /* every transition temperature sits on its boundary */
  for (const [sub, P] of [['water', 1e3], ['water', 101325], ['water', 1e7], ['co2', 1e6], ['co2', 1e8], ['water', 10], ['co2', 1e4]]) {
    const tr = c.transitions(sub, P), S = c.PHASE[sub];
    if (tr.melt != null) near(S.melt(tr.melt), P, 1e-9, sub + ' melt'); if (tr.boil != null) near(S.sat(tr.boil), P, 1e-9, sub + ' boil'); if (tr.subl != null) near(S.sub(tr.subl), P, 1e-9, sub + ' subl');
  }
});
group('vapor: the jar saturates at p_sat, humidity and dew point, boiling at the outside pressure (altitude, pressure cooker)', () => {
  /* ideal gas vapor density: 17.29 g/m3 saturated at 20 C */
  near(c.vaporDensity(c.psat(293.15), 293.15) * 1000, 17.29, 1e-3);
  /* dew point inverts p_sat; over ice below the triple point */
  near(c.dewPoint(c.psat(288.15)), 288.15, 1e-9); near(c.dewPoint(c.psat(263.15)), 263.15, 1e-9); assert(Number.isNaN(c.dewPoint(0)));
  /* standard atmosphere: Denver (1609 m) 83.4 kPa, boils 94.6 C; Everest (8849 m) 31.4 kPa, boils 70.2 C; pressure cooker 2 atm, 120.6 C */
  near(c.isaPressure(0), 101325, 1e-12); near(c.isaPressure(1609), 83431, 1e-4); near(c.isaPressure(8849), 31439, 1e-4);
  near(c.boilingPoint(c.isaPressure(1609)) - 273.15, 94.62, 1e-3); near(c.boilingPoint(c.isaPressure(8849)) - 273.15, 70.18, 1e-3); near(c.boilingPoint(2 * 101325) - 273.15, 120.63, 1e-3);
  /* sealed jar of dry air at 20 C: p climbs as 1 - exp(-t/tau) and never passes p_sat; the air pressure follows T */
  const env = { sealed: true, Pout: 101325, Ts: 293.15, Ps: 101325 }, st = { T: 293.15, Tset: 293.15, p: 0, boil: false };
  for (let i = 0; i < 100; i++) c.vaporStep(st, c.VAP_TAU / 100, env);
  near(st.p, c.psat(293.15) * (1 - Math.exp(-1)), 1e-9, 'one time constant');
  for (let i = 0; i < 4000; i++) c.vaporStep(st, 0.01, env); near(st.p, c.psat(293.15), 1e-6, 'saturated');
  near(c.airPressure(env, 353.15), 101325 * 353.15 / 293.15, 1e-12);
  /* cool it: T follows the thermostat at VAP_RATE, and the vapor follows p_sat down, the rest condensing as dew */
  st.Tset = 278.15; let tmax = 0, dew = 0; for (let i = 0; i < 2000; i++) { c.vaporStep(st, 0.01, env); tmax = Math.max(tmax, st.p / c.psat(st.T)); if (st.cond) dew++; }
  near(st.T, 278.15, 1e-12); assert(tmax <= 1 + 1e-12, 'relative humidity above 100 %: ' + tmax); assert(dew > 500, 'dew while cooling'); near(st.p, c.psat(278.15), 1e-12);
  /* sealed: never boils even at 130 C; open: T stops at the boiling point and it boils */
  st.Tset = 403.15; for (let i = 0; i < 10000; i++) c.vaporStep(st, 0.01, env); assert(!st.boil && st.T > 403.14 && c.airPressure(env, st.T) + st.p > c.psat(st.T));
  const op = { T: 293.15, Tset: 383.15, p: 0, boil: false }, envO = { sealed: false, Pout: c.isaPressure(8849), Ts: 293.15, Ps: 101325 };
  for (let i = 0; i < 6000; i++) c.vaporStep(op, 0.01, envO); assert(op.boil); near(op.T, c.boilingPoint(envO.Pout), 1e-12); near(op.p, envO.Pout, 1e-6, 'vapor pressure = outside pressure while boiling');
  op.Tset = 333.15; c.vaporStep(op, 0.01, envO); assert(!op.boil, 'stops boiling when cooled');
});
console.log(`${n} states of matter test groups passed`);
