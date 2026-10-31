'use strict';
// Millikan Oil Drop: air (Sutherland viscosity, mean free path, ideal gas density), the slip correction, terminal speeds against
// a direct force balance, the radius and charge recovered from the two speeds (both methods), Brownian statistics (Einstein).
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('millikan', 'mkEta,mkLambda,mkAir,mkSlip,mkDrop,mkVel,mkHoldE,mkRadius,mkCharge,mkRng,mkGauss,mkStep,MK_E,MK_G,MK_D');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const rel = (a, b, tol, msg) => assert(Math.abs(a / b - 1) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const air = C.mkAir(23, 101325), RHO = 886;

test('air at 23 °C and 1 atm: η from Sutherland, λ = 67.3 nm (the reference point), density from the ideal gas law', () => {
  near(C.mkEta(273.15), 1.716e-5, 1e-12);
  rel(air.eta, 1.8275e-5, 5e-4, 'η(23 °C)');              /* handbook air at 23 °C: 1.83 × 10⁻⁵ Pa·s */
  near(air.lam, 67.3e-9, 1e-15);
  rel(air.rho, 1.1922, 1e-3, 'ρ_air');
  rel(C.mkAir(23, 50662.5).lam, 2 * 67.3e-9, 1e-12, 'λ ∝ 1/p');
  assert(C.mkAir(35, 101325).lam > air.lam && C.mkAir(35, 101325).eta > air.eta);
});
test('slip correction: C → 1 for big drops, the Allen and Raabe value at Kn = 0.1 and the free molecule limit', () => {
  near(C.mkSlip(1e-3, air.lam), 1, 1e-4);
  near(C.mkSlip(air.lam / 0.1, air.lam), 1 + 0.1 * (1.155 + 0.471 * Math.exp(-5.96)), 1e-12);
  const kn = 50; rel(C.mkSlip(air.lam / kn, air.lam), 1 + kn * (1.155 + 0.471 * Math.exp(-0.596 / kn)), 1e-12);
  for (let r = 0.2e-6; r < 2e-6; r += 0.1e-6) assert(C.mkSlip(r, air.lam) > C.mkSlip(r + 0.1e-6, air.lam));
});
test('terminal velocity: the forces balance (drag + qE + weight − buoyancy = 0), and the plain Stokes speed for C = 1', () => {
  for (const r of [0.35e-6, 0.6e-6, 1e-6]) for (const q of [0, -C.MK_E, -5 * C.MK_E, 3 * C.MK_E]) for (const E of [0, -6e4, 7.9e4]) {
    const d = C.mkDrop(r, RHO, air), v = C.mkVel(d, q, E), drag = -6 * Math.PI * air.eta * r * v / d.Cc;
    const vol = 4 / 3 * Math.PI * r ** 3;
    near(drag + q * E - vol * RHO * C.MK_G + vol * air.rho * C.MK_G, 0, 1e-25, 'force balance');
  }
  const r = 0.6e-6, d = C.mkDrop(r, RHO, air), stokes = 2 * r * r * (RHO - air.rho) * C.MK_G / (9 * air.eta);
  rel(-C.mkVel(d, 0, 0), stokes * d.Cc, 1e-12, 'v = C × Stokes');
  rel(stokes, 3.7998e-5, 1e-3, 'Stokes fall speed of a 0.6 µm drop');
});
test('the drop reaches its terminal speed in microseconds, so the model can skip the transient', () => {
  const d = C.mkDrop(1e-6, RHO, air); assert(d.m * d.mob < 2e-5, `τ = ${d.m * d.mob}`);
});
test('radius from the fall speed: inverts the model, with and without the slip correction', () => {
  for (const r of [0.35e-6, 0.5e-6, 0.8e-6, 1e-6]) for (const a of [air, C.mkAir(30, 45000)]) {
    const d = C.mkDrop(r, RHO, a), vf = -C.mkVel(d, 0, 0);
    rel(C.mkRadius(vf, RHO, a, true), r, 1e-10, 'with slip');
    const r0 = C.mkRadius(vf, RHO, a, false); assert(r0 > r, 'plain Stokes overestimates r');
    rel(r0, r * Math.sqrt(d.Cc), 1e-12, 'r0 = r √C');
  }
});
test('charge from the two speeds, rising, falling and held still, for every charge 1 to 12 e of either sign', () => {
  for (const r of [0.4e-6, 0.7e-6, 1e-6]) for (let k = 1; k <= 12; k++) for (const sgn of [-1, 1]) {
    const q = sgn * k * C.MK_E, d = C.mkDrop(r, RHO, air), vf = -C.mkVel(d, 0, 0);
    for (const V of [150, 450]) for (const pol of [1, -1]) {
      const E = -pol * V / C.MK_D, vE = C.mkVel(d, q, E), c = C.mkCharge(vf, vE, E, RHO, air, true);
      rel(c.q, q, 1e-9, 'q'); rel(c.r, r, 1e-9, 'r');
    }
    const Eh = C.mkHoldE(d, q); near(C.mkVel(d, q, Eh), 0, 1e-18, 'held still');
    rel(C.mkCharge(vf, 0, Eh, RHO, air, true).q, q, 1e-9, 'balancing method');
  }
});
test('without the slip correction the charges come out too big, by C^(3/2)', () => {
  const r = 0.4e-6, q = -3 * C.MK_E, d = C.mkDrop(r, RHO, air), vf = -C.mkVel(d, 0, 0), E = -500 / C.MK_D, vE = C.mkVel(d, q, E);
  const c0 = C.mkCharge(vf, vE, E, RHO, air, false); rel(c0.q / q, Math.pow(d.Cc, 1.5), 1e-9);
});
test('Brownian motion: the spread of steps is √(2DΔt) (Einstein 1905) and the mean drift is the terminal speed', () => {
  const rnd = C.mkRng(42), d = C.mkDrop(0.4e-6, RHO, air), dt = 0.5, N = 20000, v = C.mkVel(d, 0, 0);
  let s1 = 0, s2 = 0, x2 = 0;
  for (let i = 0; i < N; i++) { const p = { x: 0, y: 0 }; C.mkStep(p, d, 0, 0, dt, rnd); s1 += p.y; s2 += (p.y - v * dt) ** 2; x2 += p.x * p.x; }
  const sig = Math.sqrt(2 * d.Dif * dt);
  rel(s1 / N, v * dt, 0.05, 'mean drift'); rel(Math.sqrt(s2 / N), sig, 0.02, 'σ vertical'); rel(Math.sqrt(x2 / N), sig, 0.02, 'σ sideways');
  rel(d.Dif, 1.380649e-23 * air.T * d.Cc / (6 * Math.PI * air.eta * 0.4e-6), 1e-12, 'D = kT C/(6πηr)');
});
test('the seeded generator repeats, and its normal deviates have mean 0 and variance 1', () => {
  const a = C.mkRng(7), b = C.mkRng(7); for (let i = 0; i < 10; i++) assert.equal(a(), b());
  const r = C.mkRng(3); let m = 0, v = 0; const N = 40000; for (let i = 0; i < N; i++) { const g = C.mkGauss(r); m += g; v += g * g; }
  near(m / N, 0, 0.02); near(v / N, 1, 0.03);
});
console.log(`${n} tests pass`);
