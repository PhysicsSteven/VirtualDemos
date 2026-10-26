'use strict';
// Shared stopping power core (demos/lib/vdstop.js): Bethe against NIST PSTAR, range tables, straggling, the Bragg curve, WET,
// scattering and the Monte Carlo histories, which the Medical Physics demos use.
const assert = require('node:assert');
const path = require('node:path');
const V = require(path.join(__dirname, '../../demos/lib/vdstop.js'));

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
const within = (a, b, d, w) => assert(Math.abs(a - b) <= d, `${w || ''}: expected ${b} ± ${d}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

/* NIST PSTAR CSDA ranges of protons in liquid water (mm), as tabulated on the UCL proton therapy wiki ("Proton ranges",
   calculated from PSTAR); the same table is printed in the charged-particles demo and its worksheet */
const PSTAR = { 10: 1.23, 20: 4.26, 30: 8.85, 40: 14.89, 50: 22.27, 60: 30.93, 70: 40.80, 80: 51.84, 90: 63.98, 100: 77.18, 120: 106.6,
  140: 139.8, 150: 157.7, 160: 176.5, 180: 216.5, 200: 259.6, 220: 305.5, 230: 329.5, 250: 379.4 };

group('PSTAR materials', () => {
  const M = V.MATS;
  assert.equal(M.water.I, 75.0); assert.equal(M.water.rho, 1.0); near(M.water.ZA, 0.55509, 1e-4, 'water Z/A');
  assert.equal(M.pmma.I, 74.0); assert.equal(M.pmma.rho, 1.19); assert.equal(M.bone.I, 91.9); assert.equal(M.bone.rho, 1.85);
  assert.equal(M.air.I, 85.7); assert.equal(M.graphite.rho, 1.70); assert.equal(M.beryllium.I, 63.7); assert.equal(M.aluminum.I, 166.0);
  assert.equal(M.copper.I, 322.0); assert.equal(M.lead.I, 823.0);
  near(M.aluminum.ZA, 13 / 26.9815, 1e-4, 'Al Z/A'); near(M.lead.ZA, 82 / 207.2, 1e-4, 'Pb Z/A');
});

group('CSDA ranges in water within 0.2 mm of PSTAR, 10 to 250 MeV', () => {
  for (const [E, r] of Object.entries(PSTAR)) within(V.range(+E, 'water') * 10, r, 0.2, `R(${E} MeV)`);
});

group('stopping power: Bethe values, 1/β² growth to low energy, and the inverse', () => {
  near(V.S(100, 'water'), 7.29, 0.003, 'S(100 MeV)');
  near(V.S(10, 'water'), 45.9, 0.005, 'S(10 MeV)');
  for (let E = 2; E < 300; E *= 1.3) assert(V.S(E, 'water') > V.S(E * 1.3, 'water'), 'falls with energy');
  for (const E of [5, 50, 150, 226.7]) near(V.energy(V.range(E, 'water'), 'water'), E, 1e-6, 'energy(range(E))');
  /* dR/dE = 1/S: the table's slope matches the stopping power */
  for (const E of [20, 100, 200]) { const h = 0.01; near((V.range(E + h, 'water') - V.range(E - h, 'water')) / (2 * h), 1 / V.S(E, 'water'), 1e-4, 'dR/dE'); }
  /* same velocity scaling: R_ion(T) = (M/M_p)/z² R_p(T M_p/M) */
  const Mp = V.PARTS.proton.M;
  for (const id of ['alpha', 'carbon']) { const P = V.PARTS[id], T = P.A * 150;
    near(V.range(T, 'water', id), P.M / Mp / (P.z * P.z) * V.range(T * Mp / P.M, 'water'), 0.003, `${id} scaling`); }
});

group('Bragg–Kleeman fit of the PSTAR table gives p near 1.75 and Bortfeld\'s α', () => {
  const Es = Object.keys(PSTAR).map(Number).filter((E) => E >= 70 && E <= 230), Rs = Es.map((E) => PSTAR[E] / 10);
  const f = V.bk(Es, Rs);
  within(f.p, 1.75, 0.04, 'p'); within(f.alpha, 0.0022, 0.0006, 'alpha (cm MeV^-p)');
});

group('straggling: Bohr σ_R near 1.1 % of the range, matching the Monte Carlo spread', () => {
  for (const E of [70, 150, 226.7]) { const r = V.sigmaR(E, 'water') / V.range(E, 'water'); assert(r > 0.010 && r < 0.0125, `σ_R/R at ${E}: ${r}`); }
  /* Bortfeld 1997: σ ≈ 0.012 R^0.935 cm; Bohr with the relativistic factor is within 8 % of it */
  for (const E of [70, 150, 226.7]) { const R = V.range(E, 'water'); near(V.sigmaR(E, 'water'), 0.012 * Math.pow(R, 0.935), 0.09, 'Bortfeld fit'); }
  let s = 7; const rng = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const ends = []; for (let i = 0; i < 1500; i++) { const t = V.track({ T: 150, nuclear: false }, rng); ends.push(t.end); }
  const m = ends.reduce((a, b) => a + b) / ends.length, sd = Math.sqrt(ends.reduce((a, b) => a + (b - m) ** 2, 0) / (ends.length - 1));
  /* the projected end point is a little short of the path length (detour factor ≈ 0.998) */
  within(m, V.range(150, 'water'), 0.03, 'mean end point (cm)'); near(sd, V.sigmaR(150, 'water'), 0.08, 'spread of end points');
});

group('Bragg curve: R80 at the CSDA range, a sharp peak, nuclear losses', () => {
  for (const E of [70, 100, 150, 200, 226.7]) {
    const D = V.dose({ T: E, zmax: 35, dz: 0.01 });
    within(V.distal(D.z, D.d, 0.8), D.R0, 0.02, `R80 at ${E} MeV (cm)`);
    assert(V.distal(D.z, D.d, 0.9) < V.distal(D.z, D.d, 0.8), 'R90 before R80');
    const pe = Math.max(...D.d) / D.d[0]; assert(pe > 3 && pe < 7, `peak to entrance ${pe}`);
  }
  /* the entrance dose is the stopping power at full energy plus the nuclear share there */
  const D = V.dose({ T: 150, zmax: 20, dz: 0.01 }), R0 = D.R0;
  near(D.d[0], V.S(150, 'water') + V.GAMMA * V.BETA / (1 + V.BETA * R0) * 150, 0.002, 'entrance dose');
  near(D.phi[0], 1, 1e-6, 'fluence at entry'); near(D.phi[Math.round(R0 / 2 / 0.01)], (1 + V.BETA * R0 / 2) / (1 + V.BETA * R0), 1e-3, 'fluence half way');
  /* no straggling: the curve follows S at the residual range up to the end */
  const P = V.dose({ T: 100, straggle: false, zmax: 9, dz: 0.01 }); assert(Math.max(...P.d) / P.d[0] > 10, 'unsmeared peak is sharp');
  /* the plateau rises smoothly to the peak for every ion, however small its straggling (a coarse quadrature once made carbon's ripple) */
  for (const [id, T] of [['proton', 150], ['alpha', 600], ['carbon', 3480]]) { const C = V.dose({ T, p: id, nuclear: false, zmax: 20, dz: 0.02 }), ip = C.d.indexOf(Math.max(...C.d));
    for (let i = 1; i <= ip; i++) assert(C.d[i] >= C.d[i - 1] * 0.9999, `${id} dose rises to the peak (z = ${C.z[i]})`); }
  /* a wider energy spread lowers and widens the peak but keeps R80 */
  const Q = V.dose({ T: 150, spread: 0.01, zmax: 20, dz: 0.01 }); assert(Math.max(...Q.d) < Math.max(...D.d)); within(V.distal(Q.z, Q.d, 0.8), R0, 0.03, 'R80 with spread');
});

group('water equivalent thickness and range shift', () => {
  near(V.wet(2, 'bone', 150) / 2, V.rsp('bone', 150), 0.01, 'WET/t near the stopping power ratio');
  const D0 = V.dose({ T: 150, zmax: 20, dz: 0.01 }), D1 = V.dose({ T: 150, zmax: 20, dz: 0.01, layers: [{ m: 'bone', t: 2 }] });
  within(V.distal(D0.z, D0.d, 0.8) - V.distal(D1.z, D1.d, 0.8), V.wet(2, 'bone', 150) - 2, 0.02, 'range pulled back by WET − t');
  /* a whole tissue medium (one layer thicker than the range): R80 at the CSDA range in that tissue */
  for (const m of ['muscle', 'adipose', 'bone']) { const D = V.dose({ T: 150, layers: [{ m, t: 40 }], zmax: 25, dz: 0.01 }); within(V.distal(D.z, D.d, 0.8), V.range(150, m) / V.mat(m).rho, 0.03, `R80 in ${m} (cm)`); }
  near(V.rsp('pmma', 150), 1.16, 0.01, 'PMMA relative stopping power'); near(V.rsp('graphite', 150) / 1.70, 0.90, 0.02, 'graphite mass ratio');
});

group('scattering: Highland angle and the lateral spread at the end of range', () => {
  /* PDG: θ₀ = 13.6 MeV/(βcp) √(x/X₀) [1 + 0.038 ln(x/(X₀β²))] */
  const T = 150, M = 938.27208943, pv = T * (T + 2 * M) / (T + M), b2 = 1 - Math.pow(M / (T + M), 2), t = 1 / 36.08;
  near(V.theta0(1, 'water', T), 13.6 / pv * Math.sqrt(t) * (1 + 0.038 * Math.log(t / b2)), 1e-9, 'Highland');
  const s = V.sigmaX({ T: 150 }, V.range(150, 'water'));
  assert(s / V.range(150, 'water') > 0.018 && s / V.range(150, 'water') < 0.026, `σx at the end ≈ 2 % of R: ${s}`);
});

group('energy is conserved: without nuclear losses the depth dose integrates to T (the last 1 MeV per nucleon included), and track() survives as dose()', () => {
  for (const T of [10, 70, 150]) { const o = V.dose({ T, nuclear: false, zmax: V.range(T, 'water') + 2, dz: 0.0005, ns: 400 });
    let s = 0; for (let i = 1; i < o.z.length; i++) s += (o.d[i] + o.d[i - 1]) / 2 * (o.z[i] - o.z[i - 1]); near(s, T, 2e-5, `∫ d dz at ${T} MeV`); }
  const A = V.dose({ T: 600, p: 'alpha', nuclear: false, zmax: V.range(600, 'water', 'alpha') + 2, dz: 0.001, ns: 400 });
  let sa = 0; for (let i = 1; i < A.z.length; i++) sa += (A.d[i] + A.d[i - 1]) / 2 * 0.001; near(sa, 600, 1e-3, 'alpha');
  const P = V.dose({ T: 100, straggle: false, nuclear: false, zmax: 9, dz: 0.001 }); let sp = 0; for (let i = 0; i < P.z.length; i++) sp += P.d[i] * 0.001; near(sp, 100, 2e-3, 'unsmeared');
  let r = 7; const rng = () => (r = (r * 16807) % 2147483647) / 2147483647;
  for (const T of [150, 230]) { let k = 0; const n = 3000; for (let i = 0; i < n; i++) if (!V.track({ T }, rng).absorbed) k++;
    const want = 1 / (1 + V.BETA * V.range(T, 'water')); within(k / n, want, 4 * Math.sqrt(want * (1 - want) / n), `track survival at ${T} MeV`); }
});

console.log(`${n} groups passed`);
