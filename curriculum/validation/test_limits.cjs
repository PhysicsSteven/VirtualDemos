'use strict';
// Limits (2026-11-19): one sided limits by closing in (holes, jumps, blow ups, oscillation, squeeze), limits at infinity,
// horizontal and slant asymptotes, L'Hôpital's rule on the parsed quotient, the largest δ for an ε and the N for limits at
// infinity, all against closed forms (OpenStax Calculus Vol 1 2.1 to 2.5, 4.6, 4.8).
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
const core = readDemo('limits').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { sideSeq, aitken, classify, limitSide, limitBoth, splitQuotient, lhopital, deltaFor, nFor, slant };', ctx, { timeout: 20000 });
const c = ctx.C, M = ctx.VDMATH;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * (1 + Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const P = (s) => { const r = M.parse(s); return { node: r.node, v: r.v, f: M.compile(r.node, [r.v]) }; };
const lim = (s, a) => c.limitBoth(P(s).f, a);
const g = 9.81;

group('two sided limits that exist: sin x/x, (1 − cos x)/x², a hole, (eˣ − 1 − x)/x², a line, x sin(1/x) (OpenStax 2.2, 2.3)', () => {
  for (const [s, a, L] of [['sin(x)/x', 0, 1], ['(1 - cos(x))/x^2', 0, 0.5], ['(x^2 - 1)/(x - 1)', 1, 2], ['(e^x - 1 - x)/x^2', 0, 0.5], ['2x + 1', 1, 3], ['x^2', 2, 4], ['x sin(1/x)', 0, 0], ['tan(x)/x', 0, 1], ['(sqrt(x + 4) - 2)/x', 0, 0.25]]) {
    const r = lim(s, a); assert(r.both.kind === 'value', s + ' settles'); near(r.both.L, L, 1e-8, s); assert(r.both.err < 1e-6, s + ' error estimate');
  }
});

group('average velocity → instantaneous velocity: [y(2 + Δt) − y(2)]/Δt → 2g for y = ½gt² (OpenStax 2.1)', () => {
  const s = `${g / 2}((2 + x)^2 - 4)/x`, r = lim(s, 0); near(r.both.L, 2 * g, 1e-9, 'v(2 s)');
  const lh = c.lhopital(P(s).node, 'x', 0); assert(lh.kind === 'lhopital' && lh.steps.length === 2, 'one round'); near(lh.L, 19.62, 1e-12, '19.62 m/s');
});

group('one sided limits: a jump, blow ups, undefined sides, oscillation (OpenStax 2.2, 2.4)', () => {
  let r = lim('5(1 + sign(t))/2', 0); assert(r.left.kind === 'value' && r.right.kind === 'value' && r.both.kind === 'differ', 'jump');
  near(r.left.L, 0, 1e-12, 'left 0'); near(r.right.L, 5, 1e-12, 'right 5');
  r = lim('1/x', 0); assert(r.left.kind === '-inf' && r.right.kind === 'inf' && r.both.kind === 'none', '1/x');
  r = lim('1/x^2', 0); assert(r.both.kind === 'inf', '1/x² → ∞');
  r = lim('1/sqrt(1 - x^2)', 1); assert(r.left.kind === 'inf' && r.right.kind === 'undef', 'γ as v → c');
  r = lim('(3x^2 + 1)/(x^2 - 4)', 2); assert(r.left.kind === '-inf' && r.right.kind === 'inf', 'vertical asymptote x = 2');
  r = lim('tan(x)', Math.PI / 2); assert(r.left.kind === 'inf' && r.right.kind === '-inf', 'tan at π/2');
  r = lim('sin(1/x)', 0); assert(r.left.kind === 'osc' && r.right.kind === 'osc', 'sin(1/x)');
  r = lim('x ln(x)', 0); assert(r.left.kind === 'undef' && r.right.kind === 'value', 'x ln x'); near(r.right.L, 0, 1e-9, '0⁺');
  r = lim('ln(x)', 0); assert(r.right.kind === '-inf', 'ln x → −∞ (slowly)');
  r = lim('sqrt(x)', 0); assert(r.right.kind === 'value', '√x'); near(r.right.L, 0, 1e-9, '√x → 0');
});

group('limits at infinity and asymptotes (OpenStax 4.6)', () => {
  for (const [s, a, L] of [['(3x^2 + 1)/(x^2 - 4)', Infinity, 3], ['(3x^2 + 1)/(x^2 - 4)', -Infinity, 3], ['sin(x)/x', Infinity, 0], ['e^x', -Infinity, 0], [`50(1 - e^(-${g}t/50))`, Infinity, 50], ['(2x + 1)/sqrt(x^2 + 1)', Infinity, 2], ['(2x + 1)/sqrt(x^2 + 1)', -Infinity, -2], ['atan(x)', Infinity, Math.PI / 2]]) {
    const r = lim(s, a); assert(r.both.kind === 'value', s + ' at ' + a); near(r.both.L, L, 1e-8, s + ' at ' + a);
  }
  assert(lim('e^x', Infinity).both.kind === 'inf' && lim('ln(x)', Infinity).both.kind === 'inf' && lim('x sin(x)', Infinity).both.kind === 'osc', 'no limit');
  let sl = c.slant(P('(x^2 + 1)/x').f, 1); near(sl.m, 1, 0, 'slant m'); near(sl.b, 0, 1e-9, 'slant b');
  sl = c.slant(P('(2x^3 - x + 5)/(x^2 + 1)').f, 1); near(sl.m, 2, 0, 'm = 2'); near(sl.b, 0, 1e-9, 'b = 0');
  sl = c.slant(P('(x^2 + 3x + 1)/(x + 1)').f, -1); near(sl.m, 1, 0, 'm = 1 at −∞'); near(sl.b, 2, 1e-8, 'b = 2');
  assert(c.slant(P('(3x^2 + 1)/(x^2 - 4)').f, 1) === null, 'no slant when the limit is finite');
});

group("L'Hôpital's rule exactly on the formulas (OpenStax 4.8)", () => {
  const steps = (s, a) => { const p = P(s); return c.lhopital(p.node, p.v, a); };
  let r = steps('sin(x)/x', 0); assert(r.kind === 'lhopital' && r.steps.length === 2 && r.L === 1, 'sin x/x once');
  r = steps('(1 - cos(x))/x^2', 0); assert(r.kind === 'lhopital' && r.steps.length === 3 && r.L === 0.5, 'twice');
  r = steps('(e^x - 1 - x)/x^2', 0); assert(r.steps.length === 3 && r.L === 0.5, '(eˣ − 1 − x)/x² twice');
  r = steps('(x^2 - 1)/(x - 1)', 1); assert(r.L === 2, 'hole');
  r = steps('(x^3 - 8)/(x - 2)', 2); assert(r.L === 12, '3x² at 2');
  r = steps('1/x', 0); assert(r.kind === 'blowup', '1/0'); r = steps('(x + 1)/(x - 2)', 0); assert(r.kind === 'direct' && r.L === -0.5, 'not 0/0');
  assert(steps('x^2', 0) === null, 'not a quotient');
  const q = c.splitQuotient(P('sin(x)/x^2').node); assert(M.text(q.num) === 'sin(x)' && M.text(q.den) === 'x²', 'split');
});

group('the largest δ for an ε, and N at infinity (OpenStax 2.5)', () => {
  for (const e of [0.5, 0.1, 0.01]) near(c.deltaFor(P('2x + 1').f, 1, 3, e, [-1, 1], 2).delta, e / 2, 1e-12, 'δ = ε/2 at ' + e);
  for (const e of [0.5, 0.05]) near(c.deltaFor(P('x^2').f, 2, 4, e, [-1, 1], 2).delta, Math.sqrt(4 + e) - 2, 1e-12, 'δ = √(4 + ε) − 2');
  const r = c.deltaFor(P('x^2').f, 2, 4, 0.5, [-1], 2); near(r.delta, 2 - Math.sqrt(3.5), 1e-12, 'left side only: 2 − √(4 − ε)');
  near(c.deltaFor(P('(x^2 - 1)/(x - 1)').f, 1, 2, 0.3, [-1, 1], 3).delta, 0.3, 1e-12, 'the hole: δ = ε');
  /* sin δ/δ = 1 − ε: δ from Newton's method on the closed form */
  let d = 0.3; for (let i = 0; i < 50; i++) { const F = Math.sin(d) / d - 0.99, dF = (d * Math.cos(d) - Math.sin(d)) / (d * d); d -= F / dF; }
  near(c.deltaFor(P('sin(x)/x').f, 0, 1, 0.01, [-1, 1], 5).delta, d, 1e-10, 'sin x/x');
  near(c.deltaFor(P('5(1 + sign(t))/2').f, 0, 5, 0.5, [1], 2).delta, 2, 0, 'right of a jump: the whole view');
  assert(c.deltaFor(P('5(1 + sign(t))/2').f, 0, 5, 0.5, [1], 2).capped, 'capped at the view');
  near(c.nFor(P('(3x^2 + 1)/(x^2 - 4)').f, 1, 3, 0.1).N, Math.sqrt(4 + 13 / 0.1), 1e-10, 'N = √(4 + 13/ε)');
  near(c.nFor(P(`50(1 - e^(-${g}t/50))`).f, 1, 50, 1).N, (50 / g) * Math.log(50), 1e-10, 'terminal: t = (v_T/g) ln(v_T/ε)');
});

group('no aliasing: sin(π/x) at 0 and sin(πx) at ∞ swing, although x = 2⁻ᵏ and 2ᵏ hit only their zeros (2026-11-22)', () => {
  for (const [s, a] of [['sin(pi/x)', 0], ['cos(pi/x)', 0], ['sin(pi/(x - 1))', 1], ['sin(pi x)', Infinity], ['cos(2pi x)', -Infinity]]) {
    const r = lim(s, a); assert(r.both.kind !== 'value', s + ' has no limit, got ' + r.both.L);
  }
  for (const [s, a, L] of [['x cos(pi/x)', 0, 0], ['sin(pi x)/x', Infinity, 0], ['(1 + x)^(1/x)', 0, Math.E]]) { const r = lim(s, a); assert(r.both.kind === 'value', s); near(r.both.L, L, 1e-8, s); }
});

console.log(`limits: ${n} groups passed`);
