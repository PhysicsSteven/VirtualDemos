'use strict';
// Riemann Sums and Integrals (2026-11-19): the sums of each rule against closed forms, the exact integral from the
// antiderivative (and numerically where there is none), the order of each rule (slopes −1, −2, −2, −4 on log axes, with the
// leading error constants of OpenStax Calculus Vol 2 3.6), improper integrals, and the trapezoid rule over a table.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
const core = readDemo('integrals').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { RULES, riemann, pieceAt, refIntegral, exactIntegral, errorSeries, improper, parseTable, tableSum, slopeOf };', ctx, { timeout: 20000 });
const c = ctx.C, M = ctx.VDMATH;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * (1 + Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const P = (s) => { const r = M.parse(s); return { node: r.node, v: r.v, f: M.compile(r.node, [r.v]) }; };

group('sums by hand: x² on [0, 2] with n = 4 (OpenStax 5.1): left 1.75, right 3.75, midpoint 2.625, trapezoid 2.75, Simpson 8/3', () => {
  const f = (x) => x * x;
  near(c.riemann(f, 0, 2, 4, 'left'), 1.75, 1e-15, 'left'); near(c.riemann(f, 0, 2, 4, 'right'), 3.75, 1e-15, 'right');
  near(c.riemann(f, 0, 2, 4, 'mid'), 2.625, 1e-15, 'mid'); near(c.riemann(f, 0, 2, 4, 'trap'), 2.75, 1e-15, 'trap');
  near(c.riemann(f, 0, 2, 4, 'simp'), 8 / 3, 1e-15, 'simpson'); near(c.riemann(f, 0, 2, 3, 'simp'), 8 / 3, 1e-15, 'odd n raised to 4');
  /* closed forms for x² on [0, 1]: L = (n−1)(2n−1)/(6n²), R = (n+1)(2n+1)/(6n²), T = (L + R)/2 */
  for (const k of [1, 5, 50, 1000]) {
    near(c.riemann(f, 0, 1, k, 'left'), (k - 1) * (2 * k - 1) / (6 * k * k), 1e-13, `L${k}`);
    near(c.riemann(f, 0, 1, k, 'right'), (k + 1) * (2 * k + 1) / (6 * k * k), 1e-13, `R${k}`);
    near(c.riemann(f, 0, 1, k, 'mid'), 1 / 3 - 1 / (12 * k * k), 1e-13, `M${k}`);
    near(c.riemann(f, 0, 1, k, 'trap'), 1 / 3 + 1 / (6 * k * k), 1e-13, `T${k}`);
  }
});

group('the pieces drawn: flat tops at the sample point, trapezoid lines, Simpson parabolas through three points', () => {
  const f = (x) => Math.exp(x / 2);
  near(c.pieceAt(f, 0, 3, 4, 'left', 1.0), f(0.75), 1e-15, 'left'); near(c.pieceAt(f, 0, 3, 4, 'right', 1.0), f(1.5), 1e-15, 'right');
  near(c.pieceAt(f, 0, 3, 4, 'mid', 1.0), f(1.125), 1e-15, 'mid'); near(c.pieceAt(f, 0, 3, 4, 'trap', 0.75), f(0.75), 1e-15, 'trap node');
  for (const x of [0, 0.75, 1.5]) near(c.pieceAt(f, 0, 3, 4, 'simp', x), f(x), 1e-14, `simp node ${x}`);
  const g = (x) => x * x * x - x;   /* a parabola through three points of a cubic: area under it is Simpson's sum, exact for cubics */
  let s = 0; const m = 20000; for (let i = 0; i < m; i++) s += c.pieceAt(g, 0, 2, 2, 'simp', (i + 0.5) / m * 2) * 2 / m;
  near(s, c.riemann(g, 0, 2, 2, 'simp'), 1e-8, 'area under the parabolas');
});

group('exact integrals from the antiderivative, and numerical where there is none', () => {
  const cases = [['e^(x/2)', 0, 3, 2 * (Math.exp(1.5) - 1), 'exact'], ['sin(x)', 0, 3 * Math.PI / 2, 1, 'exact'], ['x^3 - 3x^2 + 2x + 1', 0, 3, 5.25, 'exact'],
    ['200x', 0, 0.3, 9, 'exact'], ['1500 sin(pi t/0.008)', 0, 0.008, 2 * 1500 * 0.008 / Math.PI, 'exact'], ['0.02e^(-t/0.5)', 0, 2, 0.01 * (1 - Math.exp(-4)), 'exact'],
    ['t^2 - 4t + 3', 0, 4, 4 / 3, 'exact'], ['cos(x)', 0, 2 * Math.PI, 0, 'exact'], ['1/x', 1, Math.E, 1, 'exact'], ['x e^x', 0, 1, 1, 'numeric'], ['|x|', -1, 2, 2.5, 'numeric']];
  for (const [s, a, b, want, how] of cases) { const p = P(s), r = c.exactIntegral(p.node, p.v, a, b); assert.strictEqual(r.how, how, s); near(r.value, want, 1e-12, s); }
  /* between curves: √x − x² on [0, 1] is 1/3 */
  const fg = M.mkAdd([M.parse('sqrt(x)').node, M.mkMul([M.num(-1), M.parse('x^2').node])]);
  const r = c.exactIntegral(fg, 'x', 0, 1); assert.strictEqual(r.how, 'exact'); near(r.value, 1 / 3, 1e-14, 'between');
  /* the bell curve: √(π/2)·erf(3/√2) from 0 to 3, erf by its Taylor series */
  const erf = (z) => { let s = 0, t = z; for (let k = 0; k < 80; k++) { s += t / (2 * k + 1); t *= -z * z / (k + 1); } return 2 / Math.sqrt(Math.PI) * s; };
  const bell = P('e^(-x^2/2)'), rb = c.exactIntegral(bell.node, bell.v, 0, 3);
  assert.strictEqual(rb.how, 'numeric'); near(rb.value, Math.sqrt(Math.PI / 2) * erf(3 / Math.SQRT2), 1e-13, 'bell');
  /* a pole between the limits: F(b) − F(a) is not the integral */
  const pole = P('1/x^2'), rp = c.exactIntegral(pole.node, pole.v, -1, 1); assert.strictEqual(rp.how, 'diverges');
});

group('order of each rule: error slopes −1, −1, −2, −2, −4 on log axes, and the leading error terms', () => {
  const p = P('e^(x/2)'), I = 2 * (Math.exp(1.5) - 1), want = { left: -1, right: -1, mid: -2, trap: -2, simp: -4 };
  for (const r of c.RULES) { const s = c.errorSeries(p.f, 0, 3, I, r, I); near(s.slope, want[r], 0.01, r); }
  /* leading terms (b − a = 3, f = e^(x/2)): left −(b−a)(f(b)−f(a))/(2n); trapezoid (b−a)²(f′(b)−f′(a))/(12n²);
     midpoint −½ of the trapezoid's; Simpson (b−a)⁴(f‴(b)−f‴(a))/(180n⁴) */
  const fb = Math.exp(1.5), fa = 1, n = 512, ns = 64;
  near((c.riemann(p.f, 0, 3, n, 'left') - I) * n, -3 * (fb - fa) / 2, 2e-3, 'left constant');
  near((c.riemann(p.f, 0, 3, n, 'trap') - I) * n * n, 9 * (fb - fa) / 2 / 12, 1e-5, 'trapezoid constant');
  near((c.riemann(p.f, 0, 3, n, 'mid') - I) * n * n, -9 * (fb - fa) / 2 / 24, 1e-5, 'midpoint constant');
  near((c.riemann(p.f, 0, 3, ns, 'simp') - I) * Math.pow(ns, 4), 81 * (fb - fa) / 8 / 180, 1e-3, 'Simpson constant');
  /* Simpson is exact for a cubic: every error at rounding */
  const cub = P('x^3 - 3x^2 + 2x + 1'), sc = c.errorSeries(cub.f, 0, 3, 5.25, 'simp', 5.25); assert(sc.exact, 'Simpson exact for a cubic');
  const tc = c.errorSeries(cub.f, 0, 3, 5.25, 'trap', 5.25); near(tc.slope, -2, 0.01, 'trapezoid on the cubic');
  /* √x has an infinite slope at 0: Simpson falls to order 1.5 */
  const sq = P('sqrt(x)'), ss = c.errorSeries(sq.f, 0, 1, 2 / 3, 'simp', 2 / 3); near(ss.slope, -1.5, 0.02, 'Simpson on √x');
});

group('improper integrals: 1/x² from 1 converges to 1, e^(−x) to 1, the charge to I₀RC = 0.01 C, the bell curve to √(π/2); 1/x grows', () => {
  const run = (s, a) => { const p = P(s), F = M.antiderivative(p.node, p.v); return c.improper(p.f, F ? M.compile(F, [p.v]) : null, a); };
  const a = run('1/x^2', 1); assert.strictEqual(a.status, 'converges'); near(a.limit, 1, 1e-11, '1/x²');
  const b = run('e^(-x)', 0); assert.strictEqual(b.status, 'converges'); near(b.limit, 1, 1e-12, 'e^-x');
  const q = run('0.02e^(-t/0.5)', 0); assert.strictEqual(q.status, 'converges'); near(q.limit, 0.01, 1e-12, 'charge');
  const g = run('e^(-x^2/2)', 0); assert.strictEqual(g.status, 'converges'); near(g.limit, Math.sqrt(Math.PI / 2), 1e-10, 'bell to infinity');
  const d = run('1/x', 1); assert.strictEqual(d.status, 'grows'); near(d.A[d.A.length - 1], Math.log(1 + 1e12), 1e-12, 'ln b');
  const o = run('sin(x)', 0); assert.notStrictEqual(o.status, 'converges', 'sin x does not settle');
});

group('a table of readings: the force pulse gives J = 8.14 N·s by trapezoids; uneven spacing; bad tables are reported', () => {
  const t = c.parseTable('# t (s), F (N)\n0.000, 0\n0.001, 180\n0.002, 620\n0.003, 1150\n0.004, 1480\n0.005, 1560\n0.006, 1390\n0.007, 1010\n0.008, 560\n0.009, 190\n0.010, 0');
  assert.strictEqual(t.xs.length, 11); near(c.tableSum(t.xs, t.ys, 'trap'), 8.14, 1e-13, 'impulse');
  near(c.tableSum(t.xs, t.ys, 'left'), 8.14, 1e-13, 'left equals trapezoid when the ends are zero');
  const u = c.parseTable('0 0\n1 1\n3 9'); near(c.tableSum(u.xs, u.ys, 'trap'), 0.5 + 10, 1e-15, 'uneven');
  assert.strictEqual(c.parseTable('0 0\n1').error, 'pair'); assert.strictEqual(c.parseTable('0 0\n0 1').error, 'order');
  assert.strictEqual(c.parseTable('x y\n0 0').error, 'few'); assert.strictEqual(c.parseTable('0 0\n1 abc').error, 'number');
});

group('the Fundamental Theorem: the slope of F(x) = ∫ from 0 to x of cos equals cos x', () => {
  const F = (x) => c.refIntegral(Math.cos, 0, x);
  for (const x of [0.3, 1.2, 2.9, 5]) near(c.slopeOf(F, x, 1e-4), Math.cos(x), 1e-8, `x = ${x}`);
  near(F(Math.PI / 2), 1, 1e-14, 'F(π/2) = 1');
});

console.log(`integrals: ${n} groups passed`);
