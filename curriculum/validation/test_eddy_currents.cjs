'use strict';
// Eddy Currents: linear magnetic drag in a thin-walled pipe, the fall, Lenz's sign, energy.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('eddy-currents', 'G,MU0,LEN,PIPES,sigmaAt,dragK,fall,fallTime,ringEmf');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1e-12, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const M = 0.0122;
group('drag constant: k = 45 μ0² m² σ w /(1024 a⁴); in proportion to σ, w and m²', () => {
  const k = c.dragK(1.6, 5.96e7, 1.6e-3, 0.0103); near(k, 45 * c.MU0 ** 2 * 2.56 * 5.96e7 * 1.6e-3 / (1024 * 0.0103 ** 4), 1e-12);
  near(c.dragK(3.2, 5.96e7, 1.6e-3, 0.0103) / k, 4, 1e-12); near(c.dragK(1.6, 2 * 5.96e7, 1.6e-3, 0.0103) / k, 2, 1e-12);
});
group('fall with linear drag: v → Mg/k, y matches the integral of v; plastic is free fall', () => {
  const k = 1.5, f = c.fall(M, k, 50); near(f.v, M * c.G / k, 1e-9);
  const t = 0.7, h = 1e-6; near((c.fall(M, k, t + h).y - c.fall(M, k, t - h).y) / (2 * h), c.fall(M, k, t).v, 1e-6);
  near(c.fall(M, k, c.fallTime(M, k, 1)).y, 1, 1e-9); near(c.fallTime(M, 0, 1), Math.sqrt(2 / c.G), 1e-12);
  assert(c.fallTime(M, 1.5, 1) > c.fallTime(M, 0.95, 1));
});
group('energy: Mg L = ½Mv² + heat, heat = ∫kv² dt', () => {
  const k = 1.2, tf = c.fallTime(M, k, 1); let heat = 0; const N = 200000; for (let i = 0; i < N; i++) { const v = c.fall(M, k, (i + 0.5) * tf / N).v; heat += k * v * v * tf / N; }
  near(heat + 0.5 * M * c.fall(M, k, tf).v ** 2, M * c.G * 1, 1e-6);
});
group('Lenz: rings above a falling N-down magnet circulate clockwise seen from above, rings below anticlockwise; none at the magnet', () => {
  assert(c.ringEmf(1.6, 0.01, 0.02, 0.1) < 0); assert(c.ringEmf(1.6, 0.01, -0.02, 0.1) > 0); assert.equal(c.ringEmf(1.6, 0.01, 0, 0.1), 0);
  const a = 0.01, z = 0.013, h = 1e-7, Phi = (z) => -c.MU0 * 1.6 * a * a / (2 * (z * z + a * a) ** 1.5);
  near(c.ringEmf(1.6, a, z, 0.1), -0.1 * (Phi(z + h) - Phi(z - h)) / (2 * h), 1e-6, 'ε = −v dΦ/dz');
});
group('conductivity: copper at 20 °C, colder conducts better; liquid nitrogen about 7×', () => {
  const cu = c.PIPES[0]; near(c.sigmaAt(cu, 20), 5.96e7, 1e-12); assert(c.sigmaAt(cu, 0) > c.sigmaAt(cu, 20)); near(c.sigmaAt(cu, -196) / 5.96e7, 7.2, 1e-12); assert.equal(c.sigmaAt(c.PIPES[2], 20), 0);
});
group('conductivity below −50 °C: continuous at −50 °C, resistivity a straight line in T down to −196 °C (both metals)', () => {
  for (const P of c.PIPES.slice(0, 2)) {
    near(c.sigmaAt(P, -50 - 1e-9), c.sigmaAt(P, -50), 1e-9, P.name + ' at −50 °C');
    near(1 / c.sigmaAt(P, -123), 0.5 * (1 / c.sigmaAt(P, -50) + 1 / c.sigmaAt(P, -196)), 1e-12, P.name + ' midpoint');
    near(1 / c.sigmaAt(P, -50) - 1 / c.sigmaAt(P, -100), 1 / c.sigmaAt(P, -100) - 1 / c.sigmaAt(P, -150), 1e-9, P.name + ' equal steps');
    let prev = c.sigmaAt(P, 100); for (let T = 99; T >= -196; T--) { const s = c.sigmaAt(P, T); assert(s > prev, P.name + ' colder conducts better at ' + T); prev = s; }
  }
});
console.log(`${n} eddy-currents test groups passed`);
