'use strict';
// Taylor Polynomials and Series (2026-11-19): exact coefficients, the 1% ranges, Lagrange's bound, radii of convergence from the
// complex plane, and series built by substitution, differentiation and integration. The core runs on the shared vdmath.js.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
const coreSrc = readDemo('taylor').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(coreSrc + '\nglobalThis.c = { readFn, makeTaylor, ensure, coeffs, polyAt, exactCoeff, lagrange, goodWithin, singularities, rootTest, ccompile, baseSeries, seriesSub, seriesDiff, seriesInt, seriesMulX, qval, FACT };', ctx, { timeout: 20000 });
const c = ctx.c, M = ctx.VDMATH;
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const T = (s) => { const r = c.readFn(s); assert(r.node, s); return Object.assign(c.makeTaylor(r.node, r.v), { v: r.v }); };
const ex = (t, k, a) => { const e = c.exactCoeff(t, k, a); assert(e.k === 'n' && e.p !== undefined, `coefficient ${k} not exact`); return e.p + '/' + e.q; };

group('sin θ: exact coefficients 1, −1/6, 1/120, −1/5040; the variable θ is read', () => {
  const t = T('sin(θ)'); assert.equal(t.v, 'theta');
  assert.deepEqual([1, 3, 5, 7].map((k) => ex(t, k, 0)), ['1/1', '-1/6', '1/120', '-1/5040']);
  assert.deepEqual([0, 2, 4].map((k) => ex(t, k, 0)), ['0/1', '0/1', '0/1']);
});
group('sin θ within 1%: θ out to 0.24410 rad (13.99°); θ − θ³/6 out to 1.00779 rad (57.74°)', () => {
  const t = T('sin(θ)');
  const g1 = c.goodWithin(Math.sin, c.coeffs(t, 0, 1), 0, 0.01, 3.4), g3 = c.goodWithin(Math.sin, c.coeffs(t, 0, 3), 0, 0.01, 3.4);
  near(g1.hi, 0.244097, 1e-5, 'n=1'); near(-g1.lo, 0.244097, 1e-5, 'symmetric');
  near(g1.hi * 180 / Math.PI, 13.986, 1e-3, 'degrees'); near(g3.hi, 1.007793, 1e-5, 'n=3'); near(g3.hi * 180 / Math.PI, 57.742, 1e-3, 'deg');
  /* exactly at the edge the relative error is 1% */
  near((g1.hi - Math.sin(g1.hi)) / Math.sin(g1.hi), 0.01, 1e-6, 'edge');
});
group('the pendulum period at those angles (worksheet): T/T₀ = 2K(sin(θ₀/2))/π is 1.00374 at 13.99° and 1.0674 at 57.74°; 1% longer at 22.9°', () => {
  const K = (k) => { let a = 1, b = Math.sqrt(1 - k * k); for (let i = 0; i < 30; i++) [a, b] = [(a + b) / 2, Math.sqrt(a * b)]; return Math.PI / (2 * a); };
  const r = (deg) => 2 * K(Math.sin(deg * Math.PI / 360)) / Math.PI;
  near(r(13.986), 1.003737, 2e-6, '14 deg'); near(r(57.742), 1.067437, 2e-6, '58 deg');
  let lo = 1, hi = 60; for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (r(m) < 1.01) lo = m; else hi = m; } near(lo, 22.85, 2e-3, '1% angle');
});
group('Lagrange bound holds and is sharp for sin: |sin x − T₃(x)| ≤ sin(x) x⁴/24 at x = 0.5 and 1', () => {
  const t = T('sin(x)'), c3 = c.coeffs(t, 0, 3);
  for (const x of [0.5, 1]) { const e = Math.abs(Math.sin(x) - c.polyAt(c3, 0, x)), B = c.lagrange(t, 3, 0, x); assert(e <= B, `x=${x}`); near(B, Math.sin(x) * Math.pow(x, 4) / 24, 1e-12, 'f⁗ = sin, so M = sin x'); }
  const te = T('e^x'), c4 = c.coeffs(te, 0, 4); near(c.lagrange(te, 4, 0, 1), Math.E / 120, 1e-12, 'e: M = e on [0, 1]'); assert(Math.abs(Math.E - c.polyAt(c4, 0, 1)) <= Math.E / 120);
});
group('physics presets: relativistic K, binomial, gravity, dipole coefficients', () => {
  const r = T('1/sqrt(1 - v^2) - 1'); assert.equal(r.v, 'v'); assert.deepEqual([2, 4, 6].map((k) => ex(r, k, 0)), ['1/2', '3/8', '5/16']);
  const gr = c.goodWithin(r.F[0], c.coeffs(r, 0, 2), 0, 0.01, 1.1); near(gr.hi, 0.11536, 1e-4, 'Newton within 1% to 0.115c');
  const b = T('(1 + x)^(1/2)'); assert.deepEqual([1, 2, 3].map((k) => ex(b, k, 0)), ['1/2', '-1/8', '1/16']);
  const g = T('1/(1 + h)^2'); assert.deepEqual([1, 2, 3].map((k) => ex(g, k, 0)), ['-2/1', '3/1', '-4/1']);
  const h = 400 / 6371.0088; near(g.F[0](h), 0.885339, 1e-5, 'g at 400 km'); near(c.polyAt(c.coeffs(g, 0, 1), 0, h), 0.874431, 1e-5, '1 − 2h/R');
  const d = T('1/(1 - x)^2 - 1/(1 + x)^2'); assert.deepEqual([1, 2, 3, 5].map((k) => ex(d, k, 0)), ['4/1', '0/1', '8/1', '12/1']);
  const s = T('sqrt(x)'); near(c.polyAt(c.coeffs(s, 4, 1), 4, 4.1), 2.025, 1e-12, 'sqrt 4.1 linear'); assert.equal(ex(s, 2, 4), '-1/64');
  const r2 = c.exactCoeff(s, 0, 2); assert(!(r2.k === 'n' && r2.p !== undefined), '√2 is not taken for a fraction'); near(r2.k === 'n' ? r2.v : Math.SQRT2, Math.SQRT2, 1e-15, 'sqrt 2');
});
group('radius of convergence: the nearest singular point in the complex plane', () => {
  const R = (s, a) => { const t = T(s); return c.singularities(t.node, t.v, a); };
  const p = R('1/(1 + x^2)', 0); near(p.R, 1, 1e-10, '±i'); assert.equal(p.pts[0].kind, 'pole'); near(Math.abs(p.pts[0].im), 1, 1e-10, 'at i');
  near(R('1/(1 + x^2)', 1).R, Math.SQRT2, 1e-10, 'a=1'); near(R('atan(x)', 0).R, 1, 1e-10, 'arctan');
  near(R('ln(1 + x)', 0).R, 1, 1e-10, 'ln'); near(R('sqrt(x)', 4).R, 4, 1e-10, 'sqrt'); near(R('tan(x)', 0).R, Math.PI / 2, 1e-10, 'tan');
  near(R('1/sqrt(1 - v^2) - 1', 0).R, 1, 1e-10, 'v = c'); near(R('1/(1 + h)^2', 0).R, 1, 1e-10, 'h = −R'); near(R('asin(x)', 0.5).R, 0.5, 1e-10, 'asin');
  near(R('1/(2 + sin(x))', 0).R, Math.hypot(Math.PI / 2, Math.acosh(2)), 1e-9, 'complex poles of 1/(2 + sin x)');
  for (const s of ['e^x', 'sin(x)', 'sin(x)/x', 'cos(x) e^(-x^2)', 'x^5 - 3x']) assert.equal(R(s, 0.7).R, Infinity, s);
  near(R('abs(x)', 2).R, 2, 1e-10, 'corner');
});
group('the root test from the terms tends to R; complex continuation is right', () => {
  const t = T('1/(1 + x^2)'); near(c.rootTest(c.coeffs(t, 0, 20)).R, 1, 1e-12, 'geometric');
  const s = c.ccompile(T('sin(x)').node, 'x')([0, 1]); near(s[0], 0, 1e-15, 're'); near(s[1], Math.sinh(1), 1e-14, 'sin i = i sinh 1');
  const e = c.ccompile(T('ln(1 + x)').node, 'x')([0, 1]); near(e[0], Math.log(Math.SQRT2), 1e-14, 'ln(1 + i)'); near(e[1], Math.PI / 4, 1e-14, 'arg');
  const q = c.ccompile(T('atan(x)').node, 'x')([0.5, 0]); near(q[0], Math.atan(0.5), 1e-14, 'atan real'); near(q[1], 0, 1e-14, 'im');
});
group('Build a series: arctan, ln(1 + x), e^(−x²), 1/(1 − x)², and how R changes', () => {
  const q = (S, k) => S.c[k].map(String).join('/');
  let A = c.seriesInt(c.seriesSub(c.baseSeries('geom'), -1, 2));
  assert.deepEqual([1, 3, 5, 7].map((k) => q(A, k)), ['1/1', '-1/3', '1/5', '-1/7']); assert.equal(A.R, 1);
  const L = c.seriesInt(c.seriesSub(c.baseSeries('geom'), -1, 1)); assert.deepEqual([1, 2, 3].map((k) => q(L, k)), ['1/1', '-1/2', '1/3']);
  const G = c.seriesSub(c.baseSeries('exp'), -1, 2); assert.deepEqual([2, 4, 6].map((k) => q(G, k)), ['-1/1', '1/2', '-1/6']); assert.equal(G.R, Infinity);
  const D = c.seriesDiff(c.baseSeries('geom')); assert.deepEqual([0, 1, 4].map((k) => q(D, k)), ['1/1', '2/1', '5/1']);
  assert.equal(c.seriesSub(c.baseSeries('geom'), 2, 1).R, 0.5); assert.equal(c.seriesSub(c.baseSeries('geom'), 1, 2).R, 1);
  const X = c.seriesMulX(D); assert.deepEqual([1, 2, 3].map((k) => q(X, k)), ['1/1', '2/1', '3/1']);
  /* the built arctan series sums to arctan: 25 terms at x = 0.5 */
  let sum = 0; for (let k = 0; k < 40; k++) sum += c.qval(A.c[k]) * Math.pow(0.5, k); near(sum, Math.atan(0.5), 1e-12, 'sum');
  const sin = c.baseSeries('sin'); assert.equal(q(sin, 9), '1/362880'); assert.equal(q(c.baseSeries('cos'), 6), '-1/720');
});
console.log(`${n} groups passed`);
