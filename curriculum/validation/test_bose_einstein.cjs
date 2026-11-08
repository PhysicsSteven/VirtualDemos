'use strict';
// Bose–Einstein Condensation: the level count of the box, the chemical potential solve (atom number conserved, hot and cold
// limits), the thermal wavelength and the three dimensional Tc against known values, the two dimensional thermodynamic limit,
// the tail above QMAX against the exact sum, the level sampling, and the normalizations of the ground state and velocity densities.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('bose-einstein', 'H_PLANCK,KB,AMU,HBAR,ATOMS,massOf,QMAX,levels,e1,lambdaT,packetSigma,degeneracyT,tc3dBox,tcTrap,erfc,tail,countAtoms,solveX,occupations,assignLevels,groundDensity,groundMomentum1,velocityDensity');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const mRb = c.massOf('rb87'), L = 10e-6;

group('Levels: every (nx, ny) pair with nx² + ny² ≤ QMAX is counted once; the ground state q = 2 is alone, q = 5 holds (1,2) and (2,1), q = 50 holds (1,7), (5,5), (7,1)', () => {
  const { Q, G, pairs, n: m } = c.levels(); let total = 0; for (let i = 0; i < m; i++) total += G[i];
  let count = 0; const nmax = Math.floor(Math.sqrt(c.QMAX)); for (let a = 1; a <= nmax; a++) for (let b = 1; a * a + b * b <= c.QMAX; b++) count++;
  assert.strictEqual(total, count); assert.strictEqual(Q[0], 2); assert.strictEqual(G[0], 1);
  const at = (q) => { for (let i = 0; i < m; i++) if (Q[i] === q) return i; return -1; };
  assert.strictEqual(G[at(5)], 2); assert.strictEqual(JSON.stringify(Array.from(pairs[at(50)]).sort((x, y) => x - y)), "[1,5,7]");
  for (let i = 1; i < m; i++) assert(Q[i] > Q[i - 1], 'sorted');
});
group('Thermal wavelength: rubidium 87 at 1 µK gives 0.187 µm; the packet spread is λ/(2√2π); the degeneracy temperature of 100 atoms in a 10 µm box is 35.1 nK', () => {
  near(c.lambdaT(mRb, 1e-6), 1.873e-7, 2e-3); near(c.packetSigma(mRb, 1e-6), 1.873e-7 / (2 * Math.sqrt(2 * Math.PI)), 2e-3);
  const Td = c.degeneracyT(100, L, mRb); near(Td, 3.51e-8, 3e-3); near(100 * c.lambdaT(mRb, Td) ** 2 / (L * L), 1, 1e-9, 'nλ² = 1 there');
});
group('Three dimensional ideal gas: liquid helium 4 at 0.1451 g/cm³ gives Tc = 3.13 K; the JILA density 2.5e12 per cm³ of rubidium gives 34 nK; the trap formula gives kTc = 0.94 ħω N^(1/3)', () => {
  near(c.tc3dBox(145.1 / c.massOf('he4'), c.massOf('he4')), 3.13, 0.01); near(c.tc3dBox(2.5e18, mRb), 3.4e-8, 0.02);
  near(c.tcTrap(2000, 2 * Math.PI * 100, mRb), 0.9405 * c.HBAR * 2 * Math.PI * 100 * Math.cbrt(2000) / c.KB, 1e-3);
});
group('Chemical potential: the occupations add up to N at every temperature; hot it is the Boltzmann value ln(Z/N); cold N0 → N and x → 1/N', () => {
  for (const T of [1e-6, 1e-7, 3e-8, 1e-8, 1e-9]) { const o = c.occupations(100, mRb, L, T); near(o.inLevels + o.above, 100, 1e-9, `N at ${T}`); assert(o.x > 0 && o.mu < 2 * o.e1, 'μ below the ground state'); }
  const hot = c.occupations(100, mRb, L, 1e-6), a = hot.a; let Z = 0; const { Q, G } = c.levels(); for (let i = 0; i < Q.length; i++) { const u = a * (Q[i] - 2); if (u > 40) break; Z += G[i] * Math.exp(-u); }
  near(hot.x, Math.log(Z / 100), 0.01, 'Boltzmann x (the Bose correction is about z/2 = 1.7 % of x here)'); assert(hot.frac < 1e-3);
  const cold = c.occupations(100, mRb, L, 1e-9); assert(cold.frac > 0.97 && cold.frac < 1); near(cold.x, 1 / cold.n0, 6e-3, 'x ≈ 1/N0');
});
group('Two dimensional thermodynamic limit: for many atoms in a big box, nλ² = −ln(1 − e^(−x)) within 4 % while the gas is still classical to degenerate', () => {
  for (const T of [4e-7, 1e-7, 5e-8]) { const o = c.occupations(2000, mRb, 40e-6, T); near(o.nLambda2, -Math.log(1 - Math.exp(-o.x)), 0.04, `T = ${T} (finite size: 2000 atoms are within 3 %)`); }
});
group('The tail above QMAX: Weyl density counts match the exact sum over the same range to 0.3 % (checked on levels 100,000 to 200,000 at a hot temperature)', () => {
  const { Q, G } = c.levels(), a = 1 / 20000, x = 3;   /* kT/e1 = 20,000: the cut is far beyond QMAX */
  let exact = 0; for (let i = 0; i < Q.length; i++) if (Q[i] > 100000) exact += G[i] / (Math.exp(a * (Q[i] - 2) + x) - 1);
  let weyl = 0; const dq = 1; for (let q = 100000; q <= 200000; q += dq) weyl += (Math.PI / 4 - 0.5 / Math.sqrt(q)) / (Math.exp(a * (q - 2) + x) - 1) * dq;
  near(weyl, exact, 3e-3, 'Weyl vs exact on a finite range');
  const t = c.tail(a, x); let numeric = 0; for (let q = 200000; q <= 2000000; q += 2) numeric += (Math.PI / 4 - 0.5 / Math.sqrt(q)) / (Math.exp(a * (q - 2) + x) - 1) * 2;
  near(t, numeric, 2e-3, 'closed form tail vs numeric integral');
  const o = c.occupations(400, mRb, 20e-6, 1e-6); assert(o.above > 0 && o.above < 0.01 * 400, 'a hot big box uses the tail a little'); near(o.inLevels + o.above, 400, 1e-9);
});
group('Sampling: atoms with the smallest random numbers sit in the ground state, their share matching N0/N; every atom gets a level', () => {
  const o = c.occupations(100, mRb, L, 1e-8), u = new Float64Array(100); for (let i = 0; i < 100; i++) u[i] = (i + 0.5) / 100;
  const lv = c.assignLevels(o, u); let g = 0; for (let i = 0; i < 100; i++) { if (lv[i] === 0) g++; assert(lv[i] >= 0); }
  near(g, 100 * o.frac, 0.05, 'ground share'); assert(lv[0] === 0 && lv[99] > 0);
});
group('Densities: the ground state density integrates to N0; |φ̃₁(k)|² integrates to 1 and is finite at k = π/L; the velocity density integrates to N', () => {
  const n0 = 37; let s = 0; const m = 400; for (let i = 0; i < m; i++) for (let j = 0; j < m; j++) s += c.groundDensity(n0, L, (i + 0.5) * L / m, (j + 0.5) * L / m) * (L / m) ** 2; near(s, n0, 1e-6);
  let sk = 0; for (let k = -4e7; k <= 4e7; k += 500) sk += c.groundMomentum1(k, L) * 500; near(sk, 1, 1e-3);
  assert(isFinite(c.groundMomentum1(Math.PI / L, L)) && Math.abs(c.groundMomentum1(Math.PI / L * (1 + 1e-6), L) / c.groundMomentum1(Math.PI / L, L) - 1) < 1e-3, 'removable point');
  const o = c.occupations(100, mRb, L, 2e-8), vmax = 0.03, nv = 600; let sv = 0; const dv = 2 * vmax / nv;
  for (let i = 0; i < nv; i++) for (let j = 0; j < nv; j++) sv += c.velocityDensity(o, mRb, L, -vmax + (i + 0.5) * dv, -vmax + (j + 0.5) * dv) * dv * dv;
  near(sv, 100, 0.01, 'velocity density integrates to N');
});
console.log(`${n} groups passed`);
