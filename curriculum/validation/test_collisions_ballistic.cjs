'use strict';
// Collisions and Momentum, Ballistic pendulum: the catch, the rise and the RK4 swing against hand results and the exact period.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('collisions', 'G,ballisticCatch,ballisticRise,ballisticSpeed,pendulumSwing,swingAt');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const close = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
// exact period of a simple pendulum with amplitude θ₀: T = 4√(L/g) K(sin(θ₀/2)), K(k) = π / (2 AGM(1, √(1 − k²)))
function agm(a, b) { for (let i = 0; i < 40; i++) [a, b] = [(a + b) / 2, Math.sqrt(a * b)]; return a; }
const exactT = (L, th0) => 4 * Math.sqrt(L / C.G) * Math.PI / (2 * agm(1, Math.cos(th0 / 2)));

test('rifle preset: 10 g at 300 m/s into 2 kg: V, h, θ and the energy kept', () => {
  const c = C.ballisticCatch(0.01, 2, 300), r = C.ballisticRise(c.V, 1);
  close(c.V, 3 / 2.01, 1e-12); close(c.p1, c.p0, 1e-12, 'momentum through the catch');
  close(c.K0, 450, 1e-9); close(c.K1 / c.K0, 0.01 / 2.01, 1e-12, 'kept m/(m + M)');
  close(r.h, (3 / 2.01) ** 2 / (2 * 9.81), 1e-12); close(r.h, 0.11354, 5e-6);
  close(r.th * 180 / Math.PI, 27.6, 0.05); assert(!r.over);
  close(C.ballisticSpeed(0.01, 2, r.h), 300, 1e-9, 'speed back from the rise');
});
test('catcher preset: 25 g at 5 m/s into 250 g on 30 cm rods: 1.05 cm, 15.2°, 1/11 kept', () => {
  const c = C.ballisticCatch(0.025, 0.25, 5), r = C.ballisticRise(c.V, 0.3);
  close(c.V, 0.125 / 0.275, 1e-12); close(r.h * 100, 1.053, 1e-3); close(r.th * 180 / Math.PI, 15.2, 0.05); close(c.kept, 1 / 11, 1e-12);
});
test('over the top when V² ≥ 4gL; the overtop preset goes round', () => {
  const c = C.ballisticCatch(0.05, 1, 400), r = C.ballisticRise(c.V, 0.5);
  assert(r.over); close(c.V, 20 / 1.05, 1e-12); assert(c.V * c.V > 4 * 9.81 * 0.5);
  assert(!C.ballisticRise(Math.sqrt(4 * 9.81 * 0.5) * 0.999, 0.5).over);
});
test('RK4 swing: the top reached matches h = V²/2g, energy kept, period matches the exact elliptic period', () => {
  for (const [L, V] of [[1, 1.4925], [0.3, 0.4545], [2, 5], [0.5, 2.5]]) {
    const sw = C.pendulumSwing(L, V / L, 0.001, 30), r = C.ballisticRise(V, L);
    let thMax = 0, eMax = 0;
    for (let i = 0; i < sw.n; i++) { thMax = Math.max(thMax, sw.ths[i]); const E = 0.5 * (L * sw.ws[i]) ** 2 + 9.81 * L * (1 - Math.cos(sw.ths[i])); eMax = Math.max(eMax, Math.abs(E - 0.5 * V * V)); }
    close(thMax, r.th, 1e-5, `top at L ${L}`); assert(eMax < 1e-9 * V * V + 1e-12, `energy drift ${eMax}`);
    close(sw.T, exactT(L, r.th), 2e-6 * sw.T, `period at L ${L}`);
    // a quarter period up to the top (used for the pointer), interpolated
    close(C.swingAt(sw, sw.T / 4)[0], r.th, 1e-6); close(C.swingAt(sw, sw.T / 4)[1], 0, 1e-4);
  }
});
test('over the top: one turn takes ∮dθ/ω, ω² = ω₀² − (2g/L)(1 − cos θ)', () => {
  const L = 0.5, V = 20 / 1.05, w0 = V / L, sw = C.pendulumSwing(L, w0, 0.001, 30);
  let T = 0; const N = 200000; for (let i = 0; i < N; i++) { const th = (i + 0.5) / N * 2 * Math.PI; T += (2 * Math.PI / N) / Math.sqrt(w0 * w0 - 2 * 9.81 / L * (1 - Math.cos(th))); }
  close(sw.T, T, 1e-7); close(C.swingAt(sw, sw.T / 2)[0], Math.PI, 1e-6, 'top at half a turn');
});
test('small swing: period near 2π√(L/g)', () => {
  const sw = C.pendulumSwing(1, 0.001, 0.001, 30); close(sw.T, 2 * Math.PI * Math.sqrt(1 / 9.81), 1e-6);
});
console.log(`${n} tests passed`);
