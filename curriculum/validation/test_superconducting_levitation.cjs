'use strict';
// Superconducting Levitation: loop formulas against limits, the ring model against the image method for an ideal superconductor,
// flux pinning after field cooling, energy balance on a closed path, and convergence with the number of rings.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('superconducting-levitation', 'MU0,NR,ellipKE,mutual,dMutual,build,magFlux,cool,warm,step,force,fluxAt,imageForce');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const G = 9.81, RHO = 7500;
const preset = (o) => Object.assign({ R: 0.015, H: 0.010, a: 0.005, l: 0.005, Br: 1.3, jc: 1e8 }, o || {});

group('Elliptic integrals and loop formulas: K(0) = E(0) = π/2, far field M = μ0πa²b²/(2d³), dM/dd matches a difference', () => {
  const [K, E] = c.ellipKE(0); near(K, Math.PI / 2, 1e-14); near(E, Math.PI / 2, 1e-14);
  near(c.ellipKE(0.5)[0], 1.8540746773013719, 1e-12, 'K(1/2)'); near(c.ellipKE(0.5)[1], 1.3506438810476755, 1e-12, 'E(1/2)');
  near(c.mutual(1e-3, 2e-3, 1), c.MU0 * Math.PI * 1e-6 * 4e-6 / 2, 1e-4, 'far field (Maxwell\'s formula loses about five digits to cancellation this far out)');
  near(c.mutual(0.01, 0.007, 0.004), c.mutual(0.007, 0.01, -0.004), 1e-12, 'symmetric');
  const h = 1e-7; near(c.dMutual(0.01, 0.007, 0.004), (c.mutual(0.01, 0.007, 0.004 + h) - c.mutual(0.01, 0.007, 0.004 - h)) / (2 * h), 1e-6, 'derivative');
});
group("The magnet's flux through a distant loop equals a point dipole's, m = BrV/μ0", () => {
  const M = c.build(preset()), out = new Float64Array(M.n); c.magFlux(M, 0.2, out);
  const k = M.n - 1, rg = M.rings[k], m = 1.3 * Math.PI * 25e-6 * 0.005 / c.MU0, d = 0.2 - rg.z;
  near(out[k], c.MU0 * m * rg.r ** 2 / (2 * (rg.r ** 2 + d * d) ** 1.5), 1e-3, 'dipole flux');
});
group('A large, ideal (no jc limit) zero field cooled puck repels a small magnet like its mirror image, 3μ0m²/(32πh⁴): the ring model\'s error is first order in the cell size (it halves when the cells halve), and the extrapolation to zero cell size lands within 4 %', () => {
  const m = 1.3 * Math.PI * 1e-6 * 0.001 / c.MU0, F = {};
  for (const nr of [40, 80]) { const M = c.build(preset({ R: 0.08, H: 0.01, a: 0.001, l: 0.001, jc: 1e20, nr, nz: nr / 8 })); c.cool(M, 1);
    F[nr] = [0.012, 0.008].map((h) => { c.step(M, h); return c.force(M) / c.imageForce(m, h); }); }
  for (const k of [0, 1]) { const e40 = 1 - F[40][k], e80 = 1 - F[80][k]; assert(e80 > 0 && e80 < 0.6 * e40 && e80 > 0.4 * e40, `first order: ${e40} then ${e80}`); near(2 * F[80][k] - F[40][k], 1, 0.04, 'extrapolated'); }
});
group('Field cooled at 5 mm: no force there; raised it is pulled back, lowered it is pushed back; it can hang under the puck', () => {
  const o = preset(), M = c.build(o), z0 = o.l / 2 + 0.005, W = RHO * Math.PI * o.a * o.a * o.l * G; c.cool(M, z0); c.step(M, z0);
  assert(Math.abs(c.force(M)) < 1e-9, `force at the cooling gap ${c.force(M)}`);
  c.step(M, z0 + 0.002); const up = c.force(M); c.step(M, z0); c.step(M, z0 - 0.002); const dn = c.force(M);
  assert(up < -W && dn > W, `pull ${up}, push ${dn}, weight ${W}`);
});
group('Zero field cooled: below jc the motion is reversible (no loss); pushed close, the work done on a closed path equals the energy lost plus the energy left in trapped currents', () => {
  const o = preset(), M = c.build(o), l2 = o.l / 2; c.cool(M, 0.25);
  for (let z = 0.06; z >= l2 + 0.012; z -= 1e-4) c.step(M, z); const F1 = c.force(M);
  for (let z = l2 + 0.012; z <= 0.06; z += 1e-4) c.step(M, z);
  for (let z = 0.06; z >= l2 + 0.012; z -= 1e-4) c.step(M, z);
  assert(M.loss < 1e-12, `loss ${M.loss}`); near(c.force(M), F1, 1e-9, 'same force');
  /* stored energy of the puck's currents, U = ½ IᵀLI: the force is −dU/dz, so the hand's work on a closed path is the loss plus the energy left in trapped currents */
  const U = (M) => { let e = 0; for (let p = 0; p < M.n; p++) for (let q = 0; q < M.n; q++) e += 0.5 * M.I[p] * M.L[p * M.n + q] * M.I[q]; return e; };
  const M2 = c.build(o); c.cool(M2, 0.25); let work = 0, zp = 0.03; c.step(M2, zp); let Fp = c.force(M2); const U0 = U(M2);
  const path = []; for (let z = 0.03; z >= l2 + 0.0005; z -= 5e-5) path.push(z); for (let z = l2 + 0.0005; z <= 0.03; z += 5e-5) path.push(z); path.push(0.03);
  for (const z of path) { c.step(M2, z); const F = c.force(M2); work += -(F + Fp) / 2 * (z - zp); zp = z; Fp = F; }
  assert(M2.loss > 1e-5, `loss ${M2.loss}`); near(work, M2.loss + U(M2) - U0, 0.02, 'work = loss + stored energy change');
});
group('The default rings (15 across) agree with twice as many each way within 6 % (the error is first order in the cell size) (force at 2, 5, 10 mm after lowering from far away)', () => {
  const f = (nr, nz) => { const o = preset({ nr, nz }), M = c.build(o), l2 = o.l / 2, out = {}; c.cool(M, 0.25);
    for (let z = 0.05; z >= l2 + 0.002 - 1e-9; z -= 1e-4) { c.step(M, z); for (const g of [10, 5, 2]) if (Math.abs(z - l2 - g / 1000) < 5e-5) out[g] = c.force(M); } return out; };
  const a = f(), b = f(30, 20); for (const g of [10, 5, 2]) near(a[g], b[g], 0.06, `gap ${g} mm`);
});
group('Warm puck: no currents and no force', () => { const o = preset(), M = c.build(o); c.cool(M, 0.01); c.step(M, 0.006); c.warm(M); c.step(M, 0.006); assert.strictEqual(c.force(M), 0); });
console.log(`${n} groups passed`);
