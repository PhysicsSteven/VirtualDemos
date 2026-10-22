'use strict';
// Falling Ball Viscometer: Stokes limit, wall factor, high Re drag, the gate timing and the fit for η.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('viscometer', 'dragCorr,G,FLUIDS,BALLS,VI_VERSION,wallK,reynolds,drag,stokesV,terminal,accel,rk4,respTime,gateTimes,fitOrigin,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('wall factor: K(0) = 1; small λ matches Faxén 1/(1 − 2.104λ); grows with λ', () => {
  near(c.wallK(0), 1, 1e-15); near(c.wallK(0.01), 1 / (1 - 2.104 * 0.01 + 2.09e-6), 2e-4); assert(c.wallK(0.25) > c.wallK(0.1));
});
group('tiny ball in a huge tube: terminal speed → Stokes 2Δρ g r²/(9η)', () => {
  const fl = c.FLUIDS.glycerol, d = 2e-4; near(c.terminal(d, 7800, fl, 1e3), c.stokesV(d, 7800, fl), 2e-4);   // Re ~ 1e-5: the inertial term adds 0.008%
  near(c.stokesV(1e-3, 7800, fl), 2 * (7800 - 1261) * 9.81 * 0.0005 ** 2 / (9 * 1.41), 1e-12);
});
group('at terminal speed weight − buoyancy = drag; drag = ½ρv²A C_D', () => {
  for (const [fk, b, d, D] of [['glycerol', 'steel', 3e-3, 0.04], ['oil', 'glass', 6e-3, 0.1], ['water', 'steel', 6e-3, 0.04]]) {
    const fl = c.FLUIDS[fk], rb = c.BALLS[b].rho, v = c.terminal(d, rb, fl, D), V = Math.PI * d ** 3 / 6;
    near(c.drag(v, d, fl, D), (rb - fl.rho) * V * 9.81, 1e-10, fk); assert(Math.abs(c.accel(v, d, rb, fl, D)) < 1e-9);
  }
  const fl = c.FLUIDS.water, d = 6e-3, v = 1.0, Re = c.reynolds(fl.rho, v, d, fl.eta);
  near(c.drag(v, d, fl, 1e9), 0.5 * fl.rho * v * v * Math.PI * d * d / 4 * (24 / Re) * c.dragCorr(Re), 1e-6, 'C_D form');
});
group('gate time between the marks = 0.200 m / v_t once terminal; floating ball rises', () => {
  const fl = c.FLUIDS.glycerol, g = c.gateTimes(3e-3, 7800, fl, 0.04); near(g.dt, 0.2 / c.terminal(3e-3, 7800, fl, 0.04), 1e-9);
  const u = c.gateTimes(6e-3, 1140, fl, 0.04); assert(u.up); near(u.dt, 0.2 / Math.abs(c.terminal(6e-3, 1140, fl, 0.04)), 1e-6);
  const w = c.gateTimes(6e-3, 7800, c.FLUIDS.water, 0.04); assert(w.dt > 0.2 / c.terminal(6e-3, 7800, c.FLUIDS.water, 0.04), 'water: still accelerating at mark A');
});
group('drag curve: Oseen at low Re, its pieces meet within 1%, C_D ≈ 0.44 near Re 1500', () => {
  near(c.dragCorr(0.005), 1 + 3 * 0.005 / 16, 1e-15);
  for (const R of [0.01, 20, 260, 1500]) near(c.dragCorr(R * (1 + 1e-9)), c.dragCorr(R), 1e-2, `join at ${R}`);   // the published pieces meet to within 1%
  near(c.dragCorr(1500) * 24 / 1500, 0.44, 0.01, 'C_D');
});
group('v against d² fit with wall-corrected speeds returns η to 1% for small balls in glycerol', () => {
  const fl = c.FLUIDS.glycerol, D = 0.1, xs = [], ys = [];
  for (const dmm of [1, 1.5, 2, 2.5, 3]) { const d = dmm / 1000, t = Math.round(c.gateTimes(d, 7800, fl, D).dt * 100) / 100; xs.push(d * d); ys.push(0.2 / t * c.wallK(d / D)); }
  near((7800 - 1261) * 9.81 / (18 * c.fitOrigin(xs, ys).b), 1.41, 1e-2);
  const L = c.readingsCSV([{ liquid: 'glycerol', rhoF: '1261', ball: 'steel', rhoB: '7800', D: '40', d: '3.0', t: '10.63' }], { version: c.VI_VERSION }).trim().split('\n');
  const h = L.indexOf('row,liquid,rho_liquid_kg_m3,ball,rho_ball_kg_m3,tube_D_mm,d_mm,t_s,v_m_per_s'); assert(h > 0); assert.equal(L[h + 1], '1,glycerol,1261,steel,7800,40,3.0,10.63,0.0188147');
});
console.log(`${n} viscometer test groups passed`);
