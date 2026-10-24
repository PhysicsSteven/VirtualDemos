'use strict';
// Heat Capacities of Gases: Q = nC_V ΔT at constant volume, Q = nC_P ΔT at constant pressure, C_P − C_V = R, the energy split, Rüchardt's period.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('gas-heat-capacity', 'R,P_ATM,GASES,cvOf,cpOf,gammaOf,AIR_GAMMA,heatState,split,ruchardt,ballX,BALL_M,TUBE_A,G_STD,DAMP_TAU,CYL_A');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('Table 2.3 values: monatomic C_V = 1.5 R (γ = 5/3), N₂ 2.5 R (γ = 1.4), CO₂ 3.48 R', () => {
  near(c.cvOf('Ar'), 1.5 * c.R, 1e-12); near(c.gammaOf('He'), 5 / 3, 1e-12); near(c.gammaOf('N2'), 1.4, 1e-12); near(c.cvOf('CO2') / c.R, 3.48, 1e-12);
  near(c.AIR_GAMMA, 1015 / 721, 1e-12); near(c.cpOf('O2') - c.cvOf('O2'), c.R, 1e-12);
});
group('locked piston: volume fixed, Q = nC_V ΔT, W = 0, ΔU = Q, P rises as T', () => {
  const s0 = c.heatState('Ar', 0.1, 'V', 0), s = c.heatState('Ar', 0.1, 'V', 100);
  near(s.T - 20, 100 / (0.1 * 1.5 * c.R), 1e-12, 'ΔT'); near(s.V, s0.V, 1e-15, 'V'); near(s.W, 0, 1e-15, 'W'); near(s.dU, 100, 1e-9, 'ΔU');
  near(s.P / c.P_ATM, (s.T + 273.15) / 293.15, 1e-12, 'P ∝ T'); near(s0.V, 0.1 * c.R * 293.15 / c.P_ATM, 1e-12, 'V0');
});
group('free piston: P fixed, Q = nC_P ΔT, W = PΔV = nRΔT, ΔU = Q − W (first law)', () => {
  const s = c.heatState('N2', 0.2, 'P', 250), dT = s.T - 20;
  near(dT, 250 / (0.2 * 3.5 * c.R), 1e-12, 'ΔT'); near(s.W, 0.2 * c.R * dT, 1e-9, 'W'); near(s.dU, 250 - s.W, 1e-9, 'first law'); near(s.P, c.P_ATM, 1e-15, 'P');
  near(s.h - s.h0, (s.V - s.V0) / c.CYL_A, 1e-12, 'height');
});
group('equipartition split adds up to the heat delivered, in both modes and for every gas', () => {
  for (const g of Object.keys(c.GASES)) for (const m of ['V', 'P']) { const s = c.heatState(g, 0.1, m, 80), sp = c.split(g, 0.1, m, s.T - 20); near(sp.trans + sp.rot + sp.vib + sp.work, 80, 1e-9, `${g} ${m}`); assert(sp.vib >= 0 && sp.rot >= 0); }
  const ar = c.split('Ar', 1, 'V', 1); assert.equal(ar.rot, 0); assert.equal(ar.vib, 0);
});
group('Rüchardt: ω² = γPA²/(mV), P = P_atm + mg/A; 10 L of dry air swings in about 1.06 s; T² ∝ V', () => {
  const r = c.ruchardt('air', 0.010); near(r.P, c.P_ATM + c.BALL_M * c.G_STD / c.TUBE_A, 1e-12, 'P');
  near(r.omega * r.omega, r.gamma * r.P * c.TUBE_A * c.TUBE_A / (c.BALL_M * 0.010), 1e-12, 'ω²'); near(r.T0, 1.0623, 2e-3, 'period');
  const r2 = c.ruchardt('air', 0.020); near(r2.T0 * r2.T0 / (r.T0 * r.T0), 2, 1e-12, 'T² ∝ V'); assert((r.Td - r.T0) / r.T0 < 5e-4, 'damping shift under 0.05% at 10 L'); const r20 = c.ruchardt('air', 0.020); assert((r20.Td - r20.T0) / r20.T0 < 1e-3, 'under 0.1% at 20 L');
  near(c.ballX(r, 0.01, 0), 0.01, 1e-12, 'start');
});
console.log(`${n} groups passed`);
