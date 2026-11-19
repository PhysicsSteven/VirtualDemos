'use strict';
// Families of Functions (2026-11-19): the unit circle and phasors, a·f(b(x − c)) + d and where each point lands, the formula
// of g, one to one checks and the horizontal line test, inverses by bisection with slope 1/slope (OpenStax Calculus Vol 1 3.7),
// and exponential decay with its half life, all against closed forms.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
const core = readDemo('function-families').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { phasor, transformed, mapPoint, substNode, transformNode, effects, oneToOne, inverseAt, inverseSlope, decay };', ctx, { timeout: 20000 });
const c = ctx.C, M = ctx.VDMATH;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * (1 + Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const P = (s) => { const r = M.parse(s); return { node: r.node, v: r.v, f: M.compile(r.node, [r.v]) }; };
const PI = Math.PI;

group('unit circle: special angles, sin² + cos² = 1, arc length = θ on the unit circle (OpenStax 1.3)', () => {
  const at = (th) => c.phasor(1, 1, 0, th);
  near(at(PI / 6).y, 0.5, 1e-15, 'sin π/6'); near(at(PI / 6).x, Math.sqrt(3) / 2, 1e-15, 'cos π/6');
  near(at(PI / 4).x, Math.SQRT1_2, 1e-15, 'cos π/4'); near(at(PI / 2).y, 1, 1e-15, 'sin π/2'); near(at(PI).x, -1, 1e-15, 'cos π');
  near(at(2 * PI / 3).x, -0.5, 1e-15, 'cos 2π/3');
  for (const th of [-3, 0.3, 1, 2.5, 7, 20]) { const p = at(th); near(p.x * p.x + p.y * p.y, 1, 1e-15, 'pythagoras ' + th); near(p.arc, th, 1e-15, 'arc ' + th); }
  near(c.phasor(2.5, 1, 0, 1).arc, 2.5, 1e-15, 's = rθ');
  near(180 / PI, 57.29577951308232, 1e-15, 'one radian in degrees');
});

group('phasor x = A cos(ωt + φ): period, frequency, velocity, and the phasor setup (A = 0.10 m, ω = π rad/s, φ = π/3)', () => {
  const p0 = c.phasor(0.1, PI, PI / 3, 0);
  near(p0.x, 0.05, 1e-14, 'x(0) = A cos(π/3)'); near(p0.T, 2, 1e-15, 'T = 2 s'); near(p0.f, 0.5, 1e-15, 'f = 0.5 Hz');
  near(p0.vx, -0.1 * PI * Math.sin(PI / 3), 1e-15, 'v(0)');
  const p1 = c.phasor(0.1, PI, PI / 3, 2); near(p1.x, p0.x, 1e-14, 'one period later'); near(p1.vx, p0.vx, 1e-13, 'v one period later');
  /* the velocity is the slope of x(t): central difference */
  const h = 1e-6, xs = (t) => c.phasor(0.1, PI, PI / 3, t).x;
  near((xs(0.37 + h) - xs(0.37 - h)) / (2 * h), c.phasor(0.1, PI, PI / 3, 0.37).vx, 1e-8, 'v = dx/dt');
});

group('stretch and shift: g(x) = a·f(b(x − c)) + d, points land at (c + x/b, a·y + d), and the formula of g', () => {
  const sq = P('x^2'), g = c.transformed(sq.f, 2, 1, 1, -3);
  near(g(1), -3, 1e-15, 'vertex'); near(g(3), 5, 1e-15, '2(2)² − 3'); near(g(0), -1, 1e-15, 'g(0)');
  for (const [a, b, cc, d] of [[2, 1, 1, -3], [-0.5, 3, -2, 1], [1, -1, 2, 1], [3, PI, 1 / 3, 0]]) {
    const f = (x) => Math.sin(x) + x * x / 7, gg = c.transformed(f, a, b, cc, d);
    for (const x of [-2, 0.3, 1.7]) { const [X, Y] = c.mapPoint(x, f(x), a, b, cc, d); near(gg(X), Y, 1e-14, `landing ${a},${b},${cc},${d} at ${x}`); }
  }
  const t1 = M.text(c.transformNode(sq.node, 'x', 2, 1, 1, -3)); assert(/2\(x − 1\)² − 3/.test(t1), 'g text ' + t1);
  const sn = P('sin(x)'), gn = c.transformNode(sn.node, 'x', 2, 2, PI / 4, 0), gf = M.compile(gn, ['x']);
  for (const x of [0, 0.5, 1.3]) near(gf(x), 2 * Math.sin(2 * x - PI / 2), 1e-14, '2 sin(2x − π/2) at ' + x);
  const rt = P('sqrt(x)'), gr = M.compile(c.transformNode(rt.node, 'x', 1, -1, 2, 1), ['x']);
  near(gr(1), 2, 1e-15, '√(2 − 1) + 1'); assert(isNaN(gr(3)), 'domain x ≤ 2');
  const e = c.effects(2, 2, PI / 4, -1);
  assert(e.a.kind === 'more' && e.a.by === 2 && e.b.kind === 'more' && e.b.by === 0.5 && e.c.dir === 'right' && e.d.dir === 'down', 'effects');
  const e2 = c.effects(-0.5, -1, 0, 0); assert(e2.a.flip && e2.a.kind === 'less' && e2.b.flip && e2.b.kind === 'none' && e2.c.dir === 'none', 'flips');
});

group('SHM as a transform of cos t: A = 3 cm, ω = π rad/s, c = 1/3 s gives T = 2 s and φ = −π/3', () => {
  const cs = P('cos(t)'), g = c.transformed(cs.f, 3, PI, 1 / 3, 0);
  for (const t of [0, 0.4, 1.9]) near(g(t), 3 * Math.cos(PI * t - PI / 3), 1e-14, 'x(t) at ' + t);
  near(g(1 / 3), 3, 1e-15, 'first peak at t = c'); near(g(1 / 3 + 2), 3, 1e-14, 'one period later');
});

group('exponential decay: V = 5e^(−t/2): τ = 2 s, half life τ ln 2 = 1.386 s, V halves every half life', () => {
  const ex = P('e^t'), g = c.transformed(ex.f, 5, -0.5, 0, 0), d = c.decay(-0.5);
  near(d.tau, 2, 1e-15, 'tau'); near(d.half, 2 * Math.LN2, 1e-15, 'half life'); near(d.half, 1.3862943611198906, 1e-15, '1.386 s');
  for (let k = 1; k <= 4; k++) near(g(k * d.half), 5 / Math.pow(2, k), 1e-14, 'halves ' + k);
});

group('inverses: one to one checks, the horizontal line test, f⁻¹ by bisection and slope 1/slope (OpenStax 1.4, 3.7)', () => {
  const sq = P('x^2'), o = c.oneToOne(sq.f, 0, 2);
  assert(o.ok && o.dir === 1, 'x² on [0, 2]');
  const bad = c.oneToOne(sq.f, -2, 2); assert(!bad.ok && bad.why === 'turns', 'x² on [−2, 2] fails');
  near(sq.f(bad.x1), bad.y, 1e-12, 'x1 on the line'); near(sq.f(bad.x2), bad.y, 1e-12, 'x2 on the line'); assert(bad.x1 < 0 && bad.x2 > 0 && Math.abs(bad.x1 + bad.x2) < 1e-9, 'x2 = −x1');
  assert(c.oneToOne(P('e^(-t)').f, 0, 3).dir === -1, 'e^(−t) falls');
  assert(!c.oneToOne(P('ln(x)').f, -1, 2).ok, 'ln undefined below 0');
  near(c.inverseAt(sq.f, 2, 0, 2), Math.SQRT2, 1e-15, '√2'); assert(isNaN(c.inverseAt(sq.f, 5, 0, 2)), 'outside the range');
  const ex = P('e^x'); for (const y of [0.1, 1, 2.5, 4.9]) near(c.inverseAt(ex.f, y, -3, 1.6), Math.log(y), 1e-14, 'ln ' + y);
  const sn = P('sin(x)'); for (const y of [-0.9, 0, 0.5, 0.99]) near(c.inverseAt(sn.f, y, -PI / 2, PI / 2), Math.asin(y), 1e-14, 'arcsin ' + y);
  /* slope of the inverse = 1 / slope of f at the mirrored point */
  const cu = P('x^3 + x'), dcu = M.compile(M.derivative(cu.node, 'x'), ['x']);
  near(c.inverseAt(cu.f, 2, -1.5, 1.5), 1, 1e-15, 'f⁻¹(2) = 1'); near(dcu(1), 4, 1e-15, "f'(1) = 4");
  near(c.inverseSlope(cu.f, 2, -1.5, 1.5, 1e-6), 0.25, 1e-8, '(f⁻¹)′(2) = 1/4');
  for (const y of [0.5, 2, 3]) near(c.inverseSlope(ex.f, y, -3, 1.6, 1e-6 * y), 1 / y, 1e-7, 'd ln y = 1/y at ' + y);
  near(c.inverseSlope(sn.f, 0.5, -PI / 2, PI / 2, 1e-6), 1 / Math.sqrt(0.75), 1e-7, 'arcsin slope 1/√(1 − y²)');
  const dk = P('e^(-t)'); near(c.inverseAt(dk.f, 0.5, 0, 3), Math.LN2, 1e-15, 'half left after ln 2 s');
  near(c.inverseSlope(dk.f, 0.5, 0, 3, 1e-7), -2, 1e-7, 'dt/dN = −τ/N');
});

console.log(`function-families: ${n} groups passed`);
