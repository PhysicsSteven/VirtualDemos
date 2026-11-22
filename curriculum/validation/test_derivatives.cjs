'use strict';
// Functions and Their Derivatives: the parser reads what students type (implied multiplication, function powers, pasted
// "y =", Unicode signs), the symbolic derivatives agree with finite differences for a spread of functions, the printed formulas
// are the tidy ones, unfinished input still graphs, nothing typed is ever run as code, and the integral matches known areas
// and stops at a pole. Secant to tangent: the difference quotient tends to f′, the MVT points are exact; Newton's method doubles
// its correct digits near a simple root and fails as the textbook says (cycle, flat tangent, jump to another root).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('derivatives', 'parse,parseLive,derivative,text,compile,integral,cumulative,diffQuot,mvtPoints,newtonSteps,newtonRoot,correctDigits');
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const T = (s, k = 0) => { const r = c.parse(s); let e = r.node; for (let i = 0; i < k; i++) e = c.derivative(e); return c.text(e, r.v); };

group('reading: precedence, implied multiplication, function forms, pasted prefixes', () => {
  const same = [['-x^2', '−x²'], ['2x^2+3x+1', '2x² + 3x + 1'], ['x^-2', '1/x²'], ['sin x', 'sin(x)'], ['sin 2x', 'sin(2x)'],
    ['sin^2(x)', 'sin(x)²'], ['sin^-1(x)', 'arcsin(x)'], ['y = 3x^2', '3x²'], ['f(x)=x²+1', 'x² + 1'], ['3·x − 2', '3x − 2'],
    ['|x|', '|x|'], ['sqrt(x)', '√x'], ['x**3', 'x³'], ['πx', 'π·x'], ['e^x', 'e^x'], ['2^3^2', '512'], ['1/2x', 'x/2'], ['20 - 4.905t^2', '−4.905t² + 20']];
  for (const [s, w] of same) assert.strictEqual(T(s), w, s);
  assert.strictEqual(c.parse('5 - 9.81t').v, 't');
  for (const bad of ['x t', 'y + 1', 'sin(x))', 'x $ 2', 'alert(1)', 'constructor', '__proto__']) assert.throws(() => c.parse(bad), bad);
});

group('derivatives: exact formulas', () => {
  const want = [['x^3 - 3x', 1, '3x² − 3'], ['x^3 - 3x', 2, '6x'], ['sin(x)', 2, '−sin(x)'], ['e^(-x^2/2)', 1, '−x·e^(−x²/2)'],
    ['20 - 4.905t^2', 1, '−9.81t'], ['20 - 4.905t^2', 2, '−9.81'], ['20 - 4.905t^2', 3, '0'], ['ln(x)', 1, '1/x'], ['log(x)', 1, '1/(x·ln(10))'],
    ['sqrt(x)', 1, '1/(2√x)'], ['tan(x)', 1, 'sec(x)²'], ['atan(x)', 1, '1/(x² + 1)'], ['x^x', 1, 'x^x·(ln(x) + 1)'], ['2^x', 1, '2^x·ln(2)'],
    ['|x|', 1, 'sign(x)'], ['x/3', 1, '1/3'], ['0.1x^3', 1, '0.3x²'], ['x e^x', 2, '2e^x + x·e^x']];
  for (const [s, k, w] of want) assert.strictEqual(T(s, k), w, `${s} (${k})`);
});

group('derivatives: agree with central differences at many points', () => {
  const fs = ['x^3 - 3x', 'sin(x)', 'e^(-x^2/2)', 'e^(-0.3x) cos(4x)', 'x^2 sin(x)', 'ln(x)', 'log(x)', 'sqrt(x)', 'cbrt(x)', 'x^(2/3)',
    'tan(x)', 'sec(x)', 'csc(x)', 'cot(x)', 'asin(x/2)', 'acos(x/2)', 'atan(x)', 'sinh(x)', 'cosh(x)', 'tanh(x)', 'x^x', '2^x', '1/(1+x^2)',
    'sin(x)/x', 'e^(sin(x))', 'ln(1+x^2)', '(x+1)^5', 'sqrt(1+x^2)', '|x - 0.3|'];
  for (const s of fs) {
    const r = c.parse(s), f = [r.node]; for (let k = 0; k < 3; k++) f.push(c.derivative(f[k]));
    const g = f.map(c.compile);
    for (const x of [-1.3, -0.4, 0.55, 0.9, 1.7]) for (let k = 0; k < 3; k++) {
      const h = 1e-4, num = (g[k](x + h) - g[k](x - h)) / (2 * h), ex = g[k + 1](x);
      if (!isFinite(num) || !isFinite(ex)) continue;
      assert(Math.abs(num - ex) <= 1e-5 * (1 + Math.abs(ex)), `${s}, derivative ${k + 1} at ${x}: ${ex} vs ${num}`);
    }
  }
  /* an odd root of a negative number is real, an even root is not */
  assert(Math.abs(c.compile(c.parse('cbrt(x)').node)(-8) + 2) < 1e-12);
  assert(Number.isNaN(c.compile(c.parse('sqrt(x)').node)(-4)));
});

group('typing: unfinished input graphs what is done; real mistakes are reported', () => {
  const live = (s) => { const r = c.parseLive(s); return r.node ? c.text(r.node, r.v) + (r.partial ? ' …' : '') : 'error ' + r.error.code; };
  assert.strictEqual(live('x^2 +'), 'x² …');
  assert.strictEqual(live('sin(x'), 'sin(x) …');
  assert.strictEqual(live('(x+1)(x-1'), '(x + 1)·(x − 1) …');
  assert.strictEqual(live('|x'), '|x| …');
  assert.strictEqual(live('x^2 + y'), 'error name');
  assert.strictEqual(live('sin(x))'), 'error close');
  assert(c.parseLive('   ').empty);
});

group('integral: known areas, and it stops at a pole', () => {
  const f = (s) => c.compile(c.parse(s).node), near = (a, b, t) => assert(Math.abs(a - b) <= t, `${a} vs ${b}`);
  near(c.integral(f('sin(x)'), 0, Math.PI), 2, 1e-9);
  near(c.integral(f('1/x'), 1, Math.E), 1, 1e-9);
  near(c.integral(f('e^(-x^2/2)'), 0, 40), Math.sqrt(Math.PI / 2), 1e-8);
  near(c.integral(f('|x|'), -1, 2), 2.5, 1e-9);
  near(c.integral(f('sign(x)'), -1, 2), 1, 1e-9);
  near(c.integral(f('x^2'), 3, 0), -9, 1e-9);
  assert(Number.isNaN(c.integral(f('1/x'), 1, -1)), 'the area under 1/x across 0 diverges');
  const xs = Float64Array.from({ length: 9 }, (_, i) => -2 + 0.5 * i), F = c.cumulative(f('1/x'), xs, 1, 1);
  for (let i = 0; i < xs.length; i++) if (xs[i] > 0) near(F[i], Math.log(xs[i]), 1e-9); else assert(Number.isNaN(F[i]));
});

const fd = (s) => { const r = c.parse(s); return [c.compile(r.node), c.compile(c.derivative(r.node))]; };
group('secant to tangent: the difference quotient tends to f′(x); the MVT points', () => {
  const [f, d] = fd('x^3 - 3x');
  assert.strictEqual(c.diffQuot(f, 1, 1), 4);
  let prev = Infinity;
  for (const h of [1, 0.1, 0.01, 0.001]) { const e = Math.abs(c.diffQuot(f, 1, h) - d(1)); assert(e < prev, `error shrinks at h = ${h}`); prev = e; }
  assert(Math.abs(c.diffQuot(f, 1, 1e-6) - 0) < 1e-5);
  const m = (f(2) - f(-2)) / 4, pts = c.mvtPoints(d, -2, 2, m);
  assert.strictEqual(pts.length, 2);
  for (const [p, w] of [[pts[0], -2 / Math.sqrt(3)], [pts[1], 2 / Math.sqrt(3)]]) assert(Math.abs(p - w) < 1e-12, `${p} vs ${w}`);
  const [fa, da] = fd('|x|');
  assert.strictEqual(c.mvtPoints(da, -1, 2, (fa(2) - fa(-1)) / 3).length, 0, '|x| has no MVT point: the theorem needs f′ everywhere between');
  const [fb, db] = fd('20 - 4.905t^2'), avg = (fb(2) - fb(0)) / 2, cs = c.mvtPoints(db, 0, 2, avg);
  assert(cs.length === 1 && Math.abs(cs[0] - 1) < 1e-12, 'a falling ball has its average velocity at the midpoint time');
  assert(!c.mvtPoints(da, -1, 2, (fa(2) - fa(-1)) / 3).all, '|x| is not marked every c');
  for (const [s, x0, h] of [['3x + 1', 0.3, 0.7], ['2x', 1, 0.5], ['5 - x', -2, 3]]) {
    const [fl, dl] = fd(s), r = c.mvtPoints(dl, x0, x0 + h, c.diffQuot(fl, x0, h));
    assert(r.all === true && r.length === 0, s + ': on a straight line every c is a mean value point (2026-11-22)');
  }
  assert(c.mvtPoints(da, 0, 0.0005, c.diffQuot(fa, 0, 0.0005)).all === true, '|x| from its corner to the right: every c inside works');
});

group("Newton's method: digits double near a simple root, and the textbook failures", () => {
  const [f, d] = fd('x^2 - 2'), r = c.newtonSteps(f, d, 1, 20);
  assert.strictEqual(r.stop, 'root');
  assert.strictEqual(r.xs.slice(0, 6).map((x) => c.correctDigits(x, Math.SQRT2)).join(), '0,1,2,5,11,16');
  assert(Math.abs(c.newtonRoot(f, d, 1) - Math.SQRT2) <= 2 * Number.EPSILON);
  const [fk, dk] = fd('x - 0.6sin(x) - 1'), E = c.newtonRoot(fk, dk, 1);
  assert(Math.abs(E - 0.6 * Math.sin(E) - 1) < 1e-15 && Math.abs(E - 1.5997485482) < 1e-9, `Kepler E ${E}`);
  const [fc, dc] = fd('x^3 - 2x + 2');
  assert.strictEqual(c.newtonSteps(fc, dc, 0, 20).stop, 'cycle');
  assert(Number.isNaN(c.newtonRoot(fc, dc, 0)));
  { const x = c.newtonRoot(fc, dc, -1.5); assert(Math.abs(x + 1.7692923542386) < 1e-12 && Math.abs(fc(x)) < 1e-14, `cubic root ${x}`); }
  const [ff, dff] = fd('x^3 - 3x');
  assert.strictEqual(c.newtonSteps(ff, dff, 1, 20).stop, 'flat');
  assert(Math.abs(c.newtonRoot(ff, dff, 2.5) - Math.sqrt(3)) < 1e-15);
  const [fs, ds] = fd('sin(x)');
  assert(Math.abs(c.newtonRoot(fs, ds, 1.5) + 4 * Math.PI) < 1e-12, 'from 1.5 it jumps past π to −4π');
  assert(Math.abs(c.newtonRoot(fs, ds, 2.5) - Math.PI) < 1e-15);
  assert.strictEqual(c.correctDigits(1, 1), 16);
  assert.strictEqual(c.correctDigits(1e-5, 0), 5);
});

console.log(`derivatives: ${n} groups passed`);
