'use strict';
// Independent Newtonian checks; Sun centered axes do not rotate but their origin accelerates.
const assert = require('node:assert/strict'), { core } = require('./demo_source.cjs');
const C = core('lagrange-points', 'lagrange,gradOmega,rotToSun,sunToRot,rotToBary,twoBody,circularAt,makeParticle,advance,jacobi,deriv');
let count = 0; const test = (name, fn) => { fn(); count++; console.log('PASS', name); };
const near = (a, b, tol = 1e-9) => assert(Number.isFinite(a) && Math.abs(a - b) < tol, `${a} != ${b}`);
const mus = [3.0035e-6, 0.0009537, 0.01215, 0.5];
test('equilibria independently bracket the three collinear force zeros', () => {
 for (const mu of mus) {
  // Direct gravitational/centrifugal force, independently of the quintic implementation.
  const force = x => x - (1 - mu) * (x + mu) / Math.abs(x + mu) ** 3 - mu * (x - 1 + mu) / Math.abs(x - 1 + mu) ** 3;
  const L = C.lagrange(mu), eps = 1e-8;
  for (const [name, lo0, hi0] of [['L1', -mu + eps, 1 - mu - eps], ['L2', 1 - mu + eps, 3], ['L3', -3, -mu - eps]]) {
   let lo = lo0, hi = hi0;
   for (let i = 0; i < 100; i++) { const mid = (lo + hi) / 2; if (force(mid) > 0) hi = mid; else lo = mid; }
   near(L[name].x, (lo + hi) / 2, 1e-12);
  }
  for (const name of ['L4', 'L5']) {
   near(Math.hypot(L[name].x + mu, L[name].y), 1); near(Math.hypot(L[name].x - 1 + mu, L[name].y), 1);
   for (const v of C.gradOmega(mu, L[name].x, L[name].y)) near(v, 0);
  }
 }
});
test('Sun frame acceleration equals direct gravity plus the indirect term', () => {
 for (const mu of mus) for (const t of [0, 0.7, 4]) {
  const s = [0.3, 0.8, -0.1, 0.2], dt = 1e-5, h = C.rotToSun(mu, s, t);
  const ds = []; C.deriv(mu, s, ds);
  const shifted = sign => C.rotToSun(mu, s.map((x, i) => x + sign * dt * ds[i]), t + sign * dt);
  const plus = shifted(1), minus = shifted(-1), p = [Math.cos(t), Math.sin(t)], r = Math.hypot(h[0], h[1]), r2 = Math.hypot(h[0] - p[0], h[1] - p[1]);
  for (let i = 0; i < 2; i++) {
   near((plus[i] - minus[i]) / (2 * dt), h[i + 2], 1e-9);
   const expected = -(1 - mu) * h[i] / r ** 3 - mu * (h[i] - p[i]) / r2 ** 3 - mu * p[i];
   near((plus[i + 2] - minus[i + 2]) / (2 * dt), expected, 1e-9);
  }
  C.sunToRot(mu, h, t).forEach((v, i) => near(v, s[i]));
 }
});
test('Jacobi equals -2(E - Lz) plus the stated potential constant', () => {
 for (const mu of mus) for (const t of [0, 1.2]) {
  const s = [0.3, 0.8, -0.1, 0.2], h = C.rotToBary(mu, s, t);
  const c = Math.cos(t), sn = Math.sin(t), r1 = Math.hypot(h[0] + mu * c, h[1] + mu * sn), r2 = Math.hypot(h[0] - (1 - mu) * c, h[1] - (1 - mu) * sn);
  const E = (h[2] ** 2 + h[3] ** 2) / 2 - (1 - mu) / r1 - mu / r2, L = h[0] * h[3] - h[1] * h[2];
  near(C.jacobi(mu, s), -2 * (E - L) + mu * (1 - mu));
 }
});
test('adaptive trajectories preserve Jacobi and converge when tolerance is tightened', () => {
 for (const mu of mus) {
  const a = C.makeParticle(0.3, 0.8, -0.1, 0.2), b = C.makeParticle(0.3, 0.8, -0.1, 0.2), c0 = C.jacobi(mu, a.s);
  C.advance(mu, a, 1, { tol: 1e-10, hMax: 0.02 }); C.advance(mu, b, 1, { tol: 1e-12, hMax: 0.01 });
  assert(a.alive && b.alive); near(a.t, 1); near(b.t, 1);
  near(C.jacobi(mu, b.s), c0, 2e-9); a.s.forEach((v, i) => near(v, b.s[i], 2e-8));
 }
});
test('Sun centered circular launches recover independent Kepler elements', () => {
 for (const mu of mus) for (const r of [0.4, 0.8, 1.4]) {
  const state = C.circularAt(mu, r, 0), orbit = C.twoBody(mu, state);
  near(state[3], Math.sqrt((1 - mu) / r)); near(orbit.A, r); near(orbit.e, 0);
  near(orbit.eps, -(1 - mu) / (2 * r)); near(orbit.T, 2 * Math.PI * Math.sqrt(r ** 3 / (1 - mu)));
 }
});
console.log(`${count} Lagrange point groups passed`);
