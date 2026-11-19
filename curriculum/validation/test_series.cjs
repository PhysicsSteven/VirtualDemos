'use strict';
// Sequences and Series (2026-11-19): the partial sums against closed forms (geometric, telescoping, the bouncing ball), the
// sums the demo finds against known values (π²/6, ζ(3), ln 2, π/4, e, 2 ln 2, (π coth π − 1)/2, Σ n!/nⁿ), which test decides
// convergence or divergence for each setup, the alternating series bound at every N, the integral test bounds, the harmonic
// sum passing 10 at N = 12,367, the book stack passing 2 at 31 books, and sequence limits with N(ε).
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
const core = readDemo('series').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { NMAX, partialSums, cvz, gauss, integ, tailIntegral, analyze, firstPast, seqLimit, nEps };', ctx, { timeout: 20000 });
const c = ctx.C, M = ctx.VDMATH;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * (1 + Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const P = (s) => { const r = M.parse(s, { vars: ['n'] }); const d1 = M.derivative(r.node, 'n'), d3 = M.derivative(M.derivative(d1, 'n'), 'n'); return { f: M.compile(r.node, ['n']), d1: M.compile(d1, ['n']), d3: M.compile(d3, ['n']) }; };
const A = (s, n0) => { const p = P(s); return c.analyze(p.f, n0, p.d1, p.d3); };
const G = 9.81;

group('partial sums: geometric a r^(n−1) sums to a(1 − rᴺ)/(1 − r); telescoping 1/(n(n+1)) to 1 − 1/(N+1); harmonic H₁₀ = 7381/2520', () => {
  const g = P('2(0.64)^n').f, S = c.partialSums(g, 1, 60);
  for (const N of [1, 2, 3, 10, 60]) near(S[N - 1], 2 * 0.64 * (1 - Math.pow(0.64, N)) / 0.36, 1e-15, `bounce N=${N}`);
  const t = c.partialSums(P('1/(n(n+1))').f, 1, 1000);
  for (const N of [1, 5, 1000]) near(t[N - 1], 1 - 1 / (N + 1), 1e-15, `telescope ${N}`);
  near(c.partialSums(P('1/n').f, 1, 10)[9], 7381 / 2520, 1e-15, 'H10');
  /* Kahan: a million terms of 1/n against ln N + γ + 1/(2N) − 1/(12N²) */
  const H = c.partialSums(P('1/n').f, 1, 1e6), N = 1e6;
  near(H[N - 1], Math.log(N) + 0.5772156649015329 + 1 / (2 * N) - 1 / (12 * N * N), 1e-15, 'H(10⁶)');
});

group('the bouncing ball: distance 32/9 m (4.556 m with the first drop), time 8√(2/g) s (4.064 s with the first fall)', () => {
  const d = A('2(0.64)^n', 1); assert.strictEqual(d.status, 'converges'); assert.strictEqual(d.test, 'ratio'); near(d.rho, 0.64, 1e-9, 'ρ');
  near(d.S, 32 / 9, 1e-15, 'distance'); near(1 + d.S, 41 / 9, 1e-15, 'total distance');
  const t = A('2sqrt(2/9.81) 0.8^n', 1); near(t.S, 8 * Math.sqrt(2 / G), 1e-14, 'time'); near(t.S + Math.sqrt(2 / G), 4.0637, 1e-4, 'total time');
  near(Math.sqrt(2 / G), 0.4515, 1e-4, 'first fall');
  near(A('1/2^n', 1).S, 1, 1e-15, 'Zeno');
  near(A('e^(-n/2)', 0).S, 1 / (1 - Math.exp(-0.5)), 1e-14, 'partition function'); near(1 / (1 - Math.exp(-0.5)), 2.5415, 1e-4, 'Z');
});

group('sums found against known values: π²/6, ζ(3), ζ(3/2), (π coth π − 1)/2, e, 2, ln 2, π/4, 2 ln 2, Σ n!/nⁿ, −η(1/2) = (1 − √2)|ζ(1/2)|', () => {
  const want = [['1/n^2', 1, Math.PI ** 2 / 6, 'integral'], ['1/n^3', 1, 1.2020569031595942, 'integral'], ['1/n^1.5', 1, 2.612375348685488, 'integral'],
    ['1/(n^2+1)', 1, (Math.PI / Math.tanh(Math.PI) - 1) / 2, 'integral'], ['1/(n(n+1))', 1, 1, 'integral'], ['1/n!', 0, Math.E, 'ratio'], ['n/2^n', 1, 2, 'ratio'],
    ['(-1)^(n+1)/n', 1, Math.LN2, 'alternating'], ['(-1)^n/(2n+1)', 0, Math.PI / 4, 'alternating'], ['2(-1)^(n+1)/n', 1, 2 * Math.LN2, 'alternating'],
    ['n!/n^n', 1, 1.879853862175259, 'ratio'], ['(-1)^n/sqrt(n)', 1, (1 - Math.SQRT2) * 1.4603545088095868, 'alternating']];
  for (const [s, n0, v, test] of want) { const r = A(s, n0); assert.strictEqual(r.status, 'converges', s); assert.strictEqual(r.test, test, s); near(r.S, v, 2e-13, s); }
});

group('divergence, and which test says so: terms not going to 0, ρ > 1, and the integral test for 1/n, 1/√n, 1/(2n − 1), 1/(n ln n), 1/ln n', () => {
  for (const s of ['n/(n+1)', '(-1)^n', 'sin(n)', 'cos(1/n)']) assert.strictEqual(A(s, 1).test, 'divergence', s);
  for (const s of ['2^n', 'n!/2^n', '1.1^n/n']) { const r = A(s, 1); assert.strictEqual(r.status, 'diverges', s); assert.strictEqual(r.test, 'ratio', s); }
  for (const [s, n0] of [['1/n', 1], ['1/sqrt(n)', 1], ['1/(2n-1)', 1], ['1/(2n)', 1], ['1/(n ln(n))', 2], ['1/ln(n)', 2]]) { const r = A(s, n0); assert.strictEqual(r.status, 'diverges', s); assert.strictEqual(r.test, 'integral', s); }
  assert.strictEqual(A('1/n^1.01', 1).status, 'unknown');   /* converges, but the integral is still changing at 10³⁰⁰: no claim */
  assert.strictEqual(A('sin(n)/n^2', 1).status, 'unknown');  /* no test here applies to it */
  assert.strictEqual(A('1/(n-3)', 1).status, 'undefined');
});

group('the ratio test limit: 2ρ(k) − ρ(k/2) gives 0.64, 1/2, 1/e, 0 and 1 for a p series', () => {
  near(A('n/2^n', 1).rho, 0.5, 1e-5, 'n/2^n'); near(A('n!/n^n', 1).rho, 1 / Math.E, 1e-3, 'n!/n^n');
  assert(A('1/n!', 0).rho < 1e-6, '1/n!'); near(A('1/n^2', 1).rho, 1, 1e-6, '1/n²'); near(A('1/n', 1).rho, 1, 1e-6, '1/n');
});

group('the alternating series bound |S − S_N| ≤ |a(N+1)| at every N up to 2000, for ln 2, π/4 and 2 ln 2', () => {
  for (const [s, n0, S] of [['(-1)^(n+1)/n', 1, Math.LN2], ['(-1)^n/(2n+1)', 0, Math.PI / 4], ['2(-1)^(n+1)/n', 1, 2 * Math.LN2]]) {
    const f = P(s).f, PS = c.partialSums(f, n0, 2001);
    for (let i = 0; i < 2000; i++) assert(Math.abs(S - PS[i]) <= Math.abs(f(n0 + i + 1)), `${s} N=${n0 + i}`);
    near(Math.abs(S - PS[0]), Math.abs(f(n0 + 1)) - Math.abs(S - PS[1]), 1e-15, 'S between S_N and S_N+1');
  }
  /* Leibniz: the error after N terms is about 1/(4N) */
  const f = P('(-1)^n/(2n+1)').f, PS = c.partialSums(f, 0, 1e6);
  near(Math.abs(Math.PI / 4 - PS[1e6 - 1]) * 4e6, 1, 1e-5, 'Leibniz error');
  near(c.cvz((k) => 1 / (k + 1), 40), Math.LN2, 1e-15, 'cvz ln 2');
});

group('the integral test: ∫ from N to ∞ of 1/x² = 1/N, of e^(−x/2) = 2e^(−N/2); S_N + ∫ from N+1 ≤ S ≤ S_N + ∫ from N', () => {
  const g = P('1/n^2').f;
  for (const N of [1, 5, 10, 1000]) { const t = c.tailIntegral(g, N); assert.strictEqual(t.status, 'converges'); near(t.value, 1 / N, 1e-13, `1/x² from ${N}`); }
  near(c.tailIntegral(P('e^(-n/2)').f, 3).value, 2 * Math.exp(-1.5), 1e-13, 'e^(−x/2)');
  near(c.integ(g, 1, 7), 1 - 1 / 7, 1e-14, '∫ 1 to 7'); near(c.integ(P('1/n').f, 1, 1e6), Math.log(1e6), 1e-13, 'ln 10⁶');
  const PS = c.partialSums(g, 1, 100), S = Math.PI ** 2 / 6;
  for (const N of [1, 2, 5, 20, 100]) { const lo = PS[N - 1] + 1 / (N + 1), hi = PS[N - 1] + 1 / N; assert(lo <= S && S <= hi, `N=${N}`); }
  assert.strictEqual(c.tailIntegral(P('1/n').f, 10).status, 'diverges'); assert.strictEqual(c.tailIntegral(P('1/(n ln(n))').f, 10).status, 'diverges');
  /* a million terms of 1/(n ln n) from 2 add only about 3.4 (the setup's hint) */
  near(c.partialSums(P('1/(n ln(n))').f, 2, 1e6 - 1)[1e6 - 2], 3.42, 3e-3, 'nlogn');
});

group('passing a total: H_N first passes 10 at N = 12,367; half of it passes 2 at 31 books (and 1 at 4)', () => {
  const h = c.firstPast(P('1/n').f, 1, 10, 1e7); assert.strictEqual(h.N, 12367); assert(h.S > 10 && h.S - 1 / 12367 < 10);
  assert.strictEqual(c.firstPast(P('1/(2n)').f, 1, 2, 1e7).N, 31); assert.strictEqual(c.firstPast(P('1/(2n)').f, 1, 1, 1e7).N, 4);
  assert.strictEqual(c.firstPast(P('1/2^n').f, 1, 1, 1e5), null);
});

group('sequences: (1 + 1/n)ⁿ → e, n^(1/n) → 1, sin(n)/n and 0.64ⁿ → 0, (−1)ⁿ n/(n+1) and (−1)ⁿ have no limit, n² grows; N(ε)', () => {
  const L = (s) => c.seqLimit(P(s).f);
  near(L('(1+1/n)^n').L, Math.E, 1e-7, 'e'); near(L('n^(1/n)').L, 1, 1e-6, 'root');
  assert.strictEqual(L('sin(n)/n').L, 0); assert.strictEqual(L('0.64^n').L, 0);
  assert.strictEqual(L('(-1)^n n/(n+1)').status, 'none'); assert.strictEqual(L('(-1)^n').status, 'none'); assert.strictEqual(L('n^2').status, 'infinite');
  assert.strictEqual(L('1/ln(n)').status, 'slow');
  /* e − (1 + 1/n)ⁿ < 0.05 first at n = 27: e − a(26) = 0.0502, e − a(27) = 0.0484 */
  assert.strictEqual(c.nEps(P('(1+1/n)^n').f, 1, Math.E, 0.05, 1e5), 27);
  /* 0.64ⁿ < 0.01 from n = 11 (0.64¹⁰ = 0.0115, 0.64¹¹ = 0.0074) */
  assert.strictEqual(c.nEps(P('0.64^n').f, 0, 0, 0.01, 1e5), 11);
  assert.strictEqual(c.nEps(P('(-1)^n n/(n+1)').f, 1, 1, 0.5, 1e5), null);
});

console.log(`series: ${n} groups passed`);
