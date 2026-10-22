'use strict';
// Charging by Induction: two conducting spheres and a point charge solved with Kelvin images.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('induction', 'EPS0,K,image,solve,sigma,potentialAt');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const A = { c: 0, r: 0.05 }, B = { c: 0.11, r: 0.05 }, nC = 1e-9;
const onSurface = (sol, S, th) => c.potentialAt(sol.charges, S.c + S.r * Math.cos(th) * (1 + 1e-7), S.r * Math.sin(th) * (1 + 1e-7));
group('single grounded sphere: induced charge −q r/d (B far away)', () => {
  const s = c.solve({ q0: 10 * nC, x0: -0.1, A, B: { c: 50, r: 0.05 }, QA: 0, QB: 0, wire: false, gA: true, gB: false });
  near(s.QA / nC, -5, 1e-6);
});
group('connected spheres are one equipotential with zero total; Gauss gives each net charge', () => {
  const s = c.solve({ q0: 10 * nC, x0: -0.1, A, B, QA: 0, QB: 0, wire: true, gA: false, gB: false });
  near(s.QA + s.QB, 0, 1e-20); assert(s.QA < 0);
  for (const th of [0, 1, 2, 3]) { near(onSurface(s, A, th), s.VA, 1e-3 * Math.abs(s.VA)); near(onSurface(s, B, th), s.VA, 1e-3 * Math.abs(s.VA)); }
  let tot = 0; const N = 3000; for (let i = 0; i < N; i++) { const th = Math.PI * (i + 0.5) / N; tot += c.sigma(s.charges, A, th) * 2 * Math.PI * A.r * A.r * Math.sin(th) * Math.PI / N; }
  near(tot / nC, s.QA / nC, 2e-3);
});
group('isolated spheres keep their totals; the charge left after induction survives removing the rod', () => {
  const s = c.solve({ q0: 10 * nC, x0: -0.1, A, B, QA: 0, QB: 0, wire: true, gA: false, gB: false });
  const far = { c: 0.3, r: 0.05 }, t = c.solve({ q0: 0, x0: null, A, B: far, QA: s.QA, QB: s.QB, wire: false, gA: false, gB: false });
  near(t.QA, s.QA, 1e-20); near(t.QB, s.QB, 1e-20); near(onSurface(t, A, 0.4), t.VA, 1e-3 * Math.abs(t.VA));
});
group('equal spheres in contact share charge equally; an isolated sphere alone has V = kQ/R', () => {
  const s = c.solve({ q0: 0, x0: null, A, B: { c: 0.1001, r: 0.05 }, QA: 10 * nC, QB: 0, wire: true, gA: false, gB: false });
  near(s.QA / nC, 5, 1e-6);
  const one = c.solve({ q0: 0, x0: null, A, B: { c: 1e3, r: 0.05 }, QA: 10 * nC, QB: 0, wire: false, gA: false, gB: false });
  near(one.VA, c.K * 10 * nC / 0.05, 1e-3 * one.VA);
});
console.log(`${n} induction test groups passed`);
