'use strict';
// Velocity, Momentum and Energy Near c: velocity addition (§5.6), p = γmv = Ft under a steady force (§5.8), K = (γ − 1)mc² and
// E² = (pc)² + (mc²)² for the electron flight (§5.9).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('relativistic-motion', 'C,E_CH,PARTICLES,gammaOf,addVel,galileo,gateTimes,MARK,GAP,steady,flight,FLIGHT,VOLTS');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('velocity addition: 0.6c + 0.5c = 0.846c; light stays at c; never past c; small speeds add as Galileo said', () => {
  near(c.addVel(0.6, 0.5), 1.1 / 1.3, 1e-15, '0.6 + 0.5');
  for (const v of [0, 0.3, 0.6, 0.95]) near(c.addVel(v, 1), 1, 1e-15, `light from ${v}`);
  for (let v = 0; v <= 0.95; v += 0.05) for (let u = 0; u <= 0.99; u += 0.03) assert(c.addVel(v, u) < 1 && c.addVel(v, u) <= c.galileo(v, u) + 1e-15);
  near(c.addVel(1e-4, 2e-4), 3e-4, 1e-7, 'slow');
  /* the inverse transformation gives back the launch speed: u′ = (u − v)/(1 − uv) */
  const u = c.addVel(0.7, 0.4); near((u - 0.7) / (1 - u * 0.7), 0.4, 1e-14, 'inverse');
  /* the worksheet's straight line: u − u′ = v(1 − uu′) */
  for (const up of [0.1, 0.5, 0.9]) { const uu = c.addVel(0.45, up); near(uu - up, 0.45 * (1 - uu * up), 1e-14, 'line'); }
});
group('beacons: 3.000 light seconds apart, a body at speed s crosses in 3/s seconds, launch mark 0.6 ls before A', () => {
  assert.equal(c.GAP, 3); assert.equal(c.MARK, -0.6);
  const g = c.gateTimes(0.5); near(g.dt, 6, 1e-15); near(g.tA, 1.2, 1e-15); near(g.tB, 7.2, 1e-15);
  near(c.gateTimes(1).dt, 3, 1e-15, 'light'); assert.equal(c.gateTimes(0), null);
});
group('steady force: p = Ft, v → c, γ = 1 + Fx/mc², early motion is Newtonian', () => {
  for (const k of Object.keys(c.PARTICLES)) for (const E of [0.1, 1, 10]) for (const t of [1e-12, 1e-9, 1e-7, 1e-5]) {
    const s = c.steady(k, E, t), P = c.PARTICLES[k], m = P.mc2 * 1e6 * c.E_CH / (c.C * c.C);
    near(s.F, P.q * c.E_CH * E * 1e6, 1e-15, 'F = qE');
    near(s.gamma * m * s.beta * c.C, s.F * t, 1e-10, `p = γmv = Ft (${k})`);
    near(s.gamma, c.gammaOf(s.beta), 1e-6, 'γ from v'); assert(s.beta < 1);
    near(s.gamma - 1, s.F * s.x / (P.mc2 * 1e6 * c.E_CH), 1e-9, 'work = kinetic energy');
  }
  /* electron, 1 MV/m: F/(mc) = 0.5867 per ns */
  near(c.steady('e', 1, 1e-9).k * 1e-9, 0.58668, 1e-4, 'k for the electron');
  /* dx/dt = v, checked numerically */
  const a = c.steady('p', 5, 2e-7), b = c.steady('p', 5, 2e-7 + 1e-13); near((b.x - a.x) / 1e-13, a.beta * c.C, 1e-5, 'dx/dt');
  /* tiny times: Newton's x = ½(F/m)t² */
  const s = c.steady('e', 1, 1e-12), m = 0.51099895e6 * c.E_CH / (c.C * c.C); near(s.x, 0.5 * s.F / m * 1e-24, 1e-5, 'Newton limit');
});
group('electron flight: K = qV, γ = 1 + K/mc², E² − (pc)² = (mc²)², flight time and bend radius', () => {
  for (const k of Object.keys(c.PARTICLES)) for (const V of c.VOLTS) {
    const f = c.flight(k, V, 0.05), P = c.PARTICLES[k];
    near(f.K, P.q * V, 1e-15); assert(Math.abs(f.E * f.E - f.pc * f.pc - P.mc2 * P.mc2) <= 1e-13 * f.E * f.E, `invariant ${k} ${V}`);
    near(f.pc, f.gamma * f.beta * P.mc2, 1e-9, 'pc = γβmc²'); near(f.t_ns, c.FLIGHT / (f.beta * c.C) * 1e9, 1e-12, 't'); assert(f.beta < 1);
    /* r = p/(qeB) in SI */
    const p = f.pc * 1e6 * c.E_CH / c.C; near(f.r_m, p / (P.q * c.E_CH * 0.05), 1e-12, 'r');
  }
  /* Bertozzi's 1964 points (Am. J. Phys. 32, 551, Table I): at 0.5 MeV v/c = 0.863 (theory), at 15 MeV 0.9995 */
  near(c.flight('e', 0.5, 0.05).beta, 0.8629, 1e-3, '0.5 MeV'); near(c.flight('e', 15, 0.05).beta, 0.99945, 1e-4, '15 MeV');
  /* light would take 8.400 m / c = 28.02 ns */
  assert(c.flight('e', 10000, 0.05).t_ns > 28.019 && c.flight('e', 10000, 0.05).t_ns < 28.021);
  /* Newton: ½mv² = K overshoots c for K > mc²/2 */
  assert(c.flight('e', 1, 0.05).newtonBeta > 1 && c.flight('e', 0.2, 0.05).newtonBeta < 1);
  /* a 1 MeV electron in 0.05 T bends on a 9.49 cm circle */
  near(c.flight('e', 1, 0.05).r_m, 0.09487, 1e-3, 'radius');
});
group('the About claims: muon decay share over 8.400 m, radiated energy against the work done', () => {
  const tau = 2.1969811e-6, mu = (V) => { const f = c.flight('mu', V, 0.05); return 1 - Math.exp(-(f.t_ns * 1e-9 / f.gamma) / tau); };
  assert(mu(10) > 0.025 && mu(10) < 0.035, `10 MeV: ${mu(10)}`); for (const V of [100, 200, 500, 1000, 10000]) assert(mu(V) < 0.01, `${V}: ${mu(V)}`); near(mu(1), 0.088, 0.005, '1 MV'); assert(mu(0.01) > 0.5, `0.01: ${mu(0.01)}`);
  /* Larmor (linear motion, proper acceleration F/m constant): P = q²(F/m)²/(6πε₀c³); compare P t with the work γ − 1 at the
     shortest step the demo offers (a quarter of mc/F, rounded down to 1, 2 or 5) for the electron in the strongest field */
  const eps0 = 8.8541878128e-12, s = c.steady('e', 10, 0), m = 0.51099895e6 * c.E_CH / (c.C * c.C), Pw = Math.pow(c.E_CH * s.F / m, 2) / (6 * Math.PI * eps0 * Math.pow(c.C, 3));
  const t = 0.1 * 0.25 / s.k, w = c.steady('e', 10, t), work = w.K_MeV * 1e6 * c.E_CH; assert(Pw * t / work < 1e-10, `${Pw * t / work}`);
});
console.log(`${n} groups passed`);
