'use strict';
// Superfluid Helium: the ITS-90 vapor pressure equation against the tabulated pressures, the interpolation through the table rows,
// the fountain height against its small ΔT limit, the pump down energy balance, and the torsion pendulum's two limits.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('superfluid-helium', 'meltP,tcHe3,he3Rate,GAMMA3,HE3_A,HE3_AB,HE3_NEEL,HE3_MIN,HE3_PCP,T_LAMBDA,M_HE,R_GAS,G_ACC,RHON,ENT,P_LAMBDA,pchip,rhonFrac,density,entropy,heatCap,latent,tFromP,vaporP,pumpRates,fountainHeight,torsionPeriod');
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
group('Helium 3 melting curve: PLTS-2000 reproduces its own fixed points (minimum, A, A to B, Néel) to 10 Pa', () => {
  for (const q of [c.HE3_MIN, c.HE3_A, c.HE3_AB, c.HE3_NEEL]) near(c.meltP(q.T), q.P, 3e-6, `P at ${q.T} K`);
  near(c.meltP(1.0), 3.99914e6, 1e-6, '1 K'); const h = 1e-5; assert(Math.abs(c.meltP(c.HE3_MIN.T + h) - c.meltP(c.HE3_MIN.T - h)) < 1, 'flat at the minimum');
  assert(c.meltP(0.002) > c.meltP(0.01), 'below the minimum, colder means higher pressure (dP/dT < 0)');
});
group('Helium 3 superfluid boundary: 0.908 mK at zero pressure, and it meets the melting curve within 5 µK of the A point', () => {
  near(c.tcHe3(0), 0.908e-3, 2e-3, 'Tc(0)'); near(c.tcHe3(c.HE3_PCP.P), c.HE3_PCP.T, 1e-3, 'polycritical point'); near(c.tcHe3(c.HE3_A.P), c.HE3_A.T, 2e-3, 'A point');
  let prev = 0; for (let P = 0; P <= 34e5; P += 1e5) { const t = c.tcHe3(P); assert(t > prev, `Tc rises with P at ${P}`); prev = t; }
});
group('Pomeranchuk cooling: entropy balance. With no heat leak, freezing x of the liquid from T1 to T2 needs x = γ(T1 − T2)/(ln 2 − γT2)', () => {
  const n = 0.05, xd = 0.1 / 3600; let T = 0.02, x = 0; const h = 0.5;
  while (T > 0.003) { const a = c.he3Rate(T, x, xd, 0, n), b = c.he3Rate(T + a * h, x + xd * h, xd, 0, n); T += (a + b) / 2 * h; x += xd * h; }
  const g = c.GAMMA3; near(x, g * (0.02 - T) / (Math.LN2 - g * T), 2e-3, 'solid share');
  /* with a heat leak the cell stops where the cooling power n R (ln 2 − γT) T ẋ equals the leak */
  const Q = 40e-9; let lo = 1e-4, hi = 0.02; for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (c.he3Rate(m, 0.1, xd, Q, n) > 0) lo = m; else hi = m; }
  const Ts = (lo + hi) / 2; near(n * c.R_GAS * (Math.LN2 - g * Ts) * Ts * xd, Q, 1e-6, 'balance'); assert(Ts > 0.003 && Ts < 0.01, `40 nW stops it at ${Ts}`);
});
group('Constants equal demos/lib/constants.js', () => {
  near(c.R_GAS, 8.314462618, 1e-9, 'R'); assert.strictEqual(c.G_ACC, 9.81); near(c.M_HE, 4.0026e-3, 0, 'M_He');
});
console.log(`superfluid-helium: ${n} groups passed`);
