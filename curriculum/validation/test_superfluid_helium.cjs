'use strict';
// Superfluid Helium: the ITS-90 vapor pressure equation against the tabulated pressures, the interpolation through the table rows,
// the fountain height against its small ΔT limit, the pump down energy balance, and the torsion pendulum's two limits.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('superfluid-helium', 'T_LAMBDA,M_HE,R_GAS,G_ACC,RHON,ENT,P_LAMBDA,pchip,rhonFrac,density,entropy,heatCap,latent,tFromP,vaporP,pumpRates,fountainHeight,torsionPeriod');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('Vapor pressure: the ITS-90 equation matches Donnelly and Barenghi Table 17.3 within 0.1 % from 1.4 K to 4.2 K', () => {
  const tab = [[1.4, 281.9], [1.6, 746.5], [1.8, 1638], [1.9, 2299], [2.0, 3130], [2.05, 3613], [2.1, 4141], [2.15, 4716], [2.2, 5335], [3.0, 24050], [4.2, 99230]];
  for (const [T, P] of tab) near(c.vaporP(T), P, 1e-3, `P(${T} K)`);
});
group('The two ITS-90 branches meet at the lambda point; the normal boiling point is 4.222 K', () => {
  near(c.tFromP(c.P_LAMBDA), c.T_LAMBDA, 1e-4, 'T at P_lambda (below)');
  near(c.tFromP(c.P_LAMBDA + 1e-6), c.T_LAMBDA, 1e-4, 'T at P_lambda (above)');
  near(c.tFromP(101325), 4.2221, 1e-4, 'normal boiling point');
  near(c.tFromP(c.vaporP(1.7)), 1.7, 1e-9, 'vaporP inverts tFromP');
});
group('Interpolation passes through every table row and stays monotone between rows', () => {
  for (const [T, v] of c.RHON) near(c.pchip(c.RHON, T), v, 1e-12, `rho_n/rho at ${T}`);
  for (const [T, s] of c.ENT) near(c.entropy(T), s * 1000, 1e-9, `S at ${T}`);
  let prev = -1; for (let T = 1.0; T < c.T_LAMBDA; T += 0.001) { const v = c.rhonFrac(T); assert(v >= prev - 1e-15, `rho_n/rho falls at ${T}`); prev = v; }
  assert.strictEqual(c.rhonFrac(2.3), 1);
});
group('Fountain: for small ΔT the column is h = SΔT/g; it grows with ΔT and is zero with no heating', () => {
  for (const T of [1.2, 1.6, 2.0]) near(c.fountainHeight(T, 1e-6), c.entropy(T) * 1e-6 / c.G_ACC, 1e-3, `small ΔT at ${T} K`);
  assert.strictEqual(c.fountainHeight(1.6, 0), 0);
  near(c.fountainHeight(1.6, 0.01), 0.292, 0.01, '1.6 K, 10 mK: about 29 cm');
  assert(c.fountainHeight(1.6, 0.02) > c.fountainHeight(1.6, 0.01));
});
group('Pump down: the evaporation rate is the pumped gas flow PS/(RT); with no pumping the heat leak warms the bath at Q/(nC)', () => {
  const T = 3.0, nmol = 25, Sp = 0.005, Q = 0.02, r = c.pumpRates(T, nmol, Sp, Q, 293.15);
  near(r[2], Sp * c.vaporP(T) / (c.R_GAS * 293.15), 1e-12, 'ndot'); near(r[1], -r[2], 1e-12, 'dn/dt');
  near(r[0], (Q - c.latent(T) * r[2]) / (nmol * c.heatCap(T)), 1e-12, 'dT/dt');
  near(c.pumpRates(T, nmol, 0, Q, 293.15)[0], Q / (nmol * c.heatCap(T)), 1e-12, 'no pump');
  /* the bath stops cooling where the latent heat carried off equals the heat leak */
  let lo = 1.0, hi = 4.2; for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (c.pumpRates(m, nmol, Sp, Q, 293.15)[0] < 0) hi = m; else lo = m; }
  const Ts = (lo + hi) / 2; near(c.latent(Ts) * Sp * c.vaporP(Ts) / (c.R_GAS * 293.15), Q, 1e-6, 'steady state balance');
  assert(Ts < 1.4, `a 5 L/s pump against 20 mW gets below 1.4 K (got ${Ts})`);
});
group('Spinning disks: the period is the bare stack\'s near 1 K and takes the full helium moment at and above the lambda point', () => {
  const I0 = 1e-6, IHe = 0.1e-6, k = 4 * Math.PI ** 2 * I0 / 400;
  near(c.torsionPeriod(1.0, I0, IHe, k), 20 * Math.sqrt(1 + c.rhonFrac(1.0) * 0.1), 1e-12, '1.0 K');
  assert(c.torsionPeriod(1.0, I0, IHe, k) < 20.01);
  near(c.torsionPeriod(c.T_LAMBDA, I0, IHe, k), 20 * Math.sqrt(1 + 0.1 * c.density(c.T_LAMBDA) / c.density(1.0)), 1e-12, 'lambda point');
  let prev = 0; for (let T = 1.0; T <= 2.17; T += 0.01) { const P = c.torsionPeriod(T, I0, IHe, k); assert(P > prev, `period rises with T at ${T}`); prev = P; }
});
group('Constants equal demos/lib/constants.js', () => {
  near(c.R_GAS, 8.314462618, 1e-9, 'R'); assert.strictEqual(c.G_ACC, 9.81); near(c.M_HE, 4.0026e-3, 0, 'M_He');
});
console.log(`superfluid-helium: ${n} groups passed`);
