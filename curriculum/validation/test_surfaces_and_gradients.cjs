'use strict';
// Surfaces and Gradients (2026-11-19): exact partial derivatives of a typed z = f(x, y), the gradient and directional derivative,
// the tangent plane, the second derivative test and the critical points it sorts, Lagrange multipliers on a constraint, values
// along paths into a point, level curves by marching squares and a particle rolling in a potential, each against closed forms.
// The demo's core runs in the same context as the shared math library (demos/lib/vdmath.js).
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
const core = readDemo('surfaces-and-gradients').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.c = { sgRead, sgNumber, sgAt, sgDu, sgPlane, sgKind, sgCritical, sgMarch, sgChains, sgLevels, sgProject, sgLambda, sgLagrange, sgConstrained, sgPath, sgRoll, sgEnergy, sgPathRead, sgChain };', ctx, { timeout: 20000 });
const c = ctx.c, M = ctx.VDMATH, PI = Math.PI;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);

group('exact partial derivatives from the typed formula', () => {
  const s = c.sgRead('x^2 y + sin(x y)');
  for (const [x, y] of [[0.3, -1.2], [2, 0.5]]) {
    const j = c.sgAt(s, x, y);
    near(j.fx, 2 * x * y + y * Math.cos(x * y), 1e-14, 'fx'); near(j.fy, x * x + x * Math.cos(x * y), 1e-14, 'fy');
    near(j.fxx, 2 * y - y * y * Math.sin(x * y), 1e-14, 'fxx'); near(j.fyy, -x * x * Math.sin(x * y), 1e-14, 'fyy');
    near(j.fxy, 2 * x + Math.cos(x * y) - x * y * Math.sin(x * y), 1e-14, 'fxy');
  }
  assert.strictEqual(M.text(c.sgRead('x^3 - 3x + y^3 - 3y').tree.fx), '3x² − 3');
  assert.throws(() => c.sgRead('x + z')); assert.throws(() => c.sgRead('alert(1)'));
  near(c.sgNumber('2pi'), 2 * PI, 1e-15, 'c box');
});

group('ideal gas P = 8.314T/V: ∂P/∂V = −nRT/V², ∂P/∂T = nR/V at 20 L, 300 K', () => {
  const j = c.sgAt(c.sgRead('8.314y/x'), 20, 300);
  near(j.f, 8.314 * 300 / 20, 1e-14, 'P'); near(j.fx, -8.314 * 300 / 400, 1e-14, 'dP/dV'); near(j.fy, 8.314 / 20, 1e-14, 'dP/dT');
  near(c.sgPlane(j, 21, 301), j.f + j.fx + j.fy, 1e-14, 'tangent plane');
});

group('directional derivative: |∇f| along ∇f, 0 along the level curve, −|∇f| downhill', () => {
  const s = c.sgRead('400e^(-(x^2 + y^2)/2) + 250e^(-((x - 2)^2 + (y - 1.5)^2))'), j = c.sgAt(s, -1, -0.8);
  near(c.sgDu(j, j.dir), j.grad, 1e-14, 'max'); near(c.sgDu(j, j.dir + PI / 2), 0, 1e-12, 'level'); near(c.sgDu(j, j.dir + PI), -j.grad, 1e-14, 'min');
  const e = Math.exp(-0.82) * 400, e2 = 250 * Math.exp(-(9 + 2.3 * 2.3));
  near(j.fx, e * 1 + e2 * -2 * (-3), 1e-12, 'hill fx'); near(j.fy, e * 0.8 + e2 * -2 * (-2.3), 1e-12, 'hill fy');
  /* the level curve through the point is perpendicular to ∇f: f stays put to second order along (−fy, fx) */
  const t = 1e-4, u = [-j.fy / j.grad, j.fx / j.grad];
  assert(Math.abs(s.f(-1 + t * u[0], -0.8 + t * u[1]) - j.f) < 1e-5);
});

group('second derivative test: x³ − 3x + y³ − 3y has a pit at (1, 1), a peak at (−1, −1) and two saddles', () => {
  const s = c.sgRead('x^3 - 3x + y^3 - 3y'), cr = c.sgCritical(s, [-2.3, 2.3, -2.3, 2.3]);
  assert.strictEqual(cr.length, 4);
  const at = (x, y) => cr.find((q) => q.x === x && q.y === y);
  assert.strictEqual(at(1, 1).kind, 'min'); near(at(1, 1).f, -4, 1e-14); near(at(1, 1).D, 36, 1e-12);
  assert.strictEqual(at(-1, -1).kind, 'max'); near(at(-1, -1).f, 4, 1e-14);
  assert.strictEqual(at(1, -1).kind, 'saddle'); near(at(1, -1).D, -36, 1e-12); assert.strictEqual(at(-1, 1).kind, 'saddle');
});

group('double well U = (x² − 1)² + y²: pits at (±1, 0) with D = 16, a saddle at the origin with D = −8', () => {
  const cr = c.sgCritical(c.sgRead('(x^2 - 1)^2 + y^2'), [-1.7, 1.7, -1.7, 1.7]);
  assert.strictEqual(cr.length, 3);
  const o = cr.find((q) => q.x === 0 && q.y === 0); assert.strictEqual(o.kind, 'saddle'); near(o.D, -8, 1e-14); near(o.f, 1, 1e-15);
  for (const x of [1, -1]) { const q = cr.find((p) => p.x === x && p.y === 0); assert.strictEqual(q.kind, 'min'); near(q.D, 16, 1e-13); near(q.f, 0, 1e-15); }
});

group('two equal charges: a saddle of V halfway, V = 2kq/d, E = 0; the monkey saddle has D = 0', () => {
  const kq = 898.8, s = c.sgRead(`${kq}/sqrt((x - 1)^2 + y^2) + ${kq}/sqrt((x + 1)^2 + y^2)`), cr = c.sgCritical(s, [-2.5, 2.5, -2.5, 2.5]);
  assert.strictEqual(cr.length, 1); assert.strictEqual(cr[0].kind, 'saddle'); near(cr[0].x, 0, 1e-12); near(cr[0].f, 2 * kq, 1e-13);
  near(cr[0].fxx, 4 * kq, 1e-12, 'Vxx = 2kq·2/d³'); near(cr[0].fyy, -2 * kq, 1e-12, 'Vyy = −2kq/d³');
  const d = c.sgAt(c.sgRead(`${kq}/sqrt((x - 1)^2 + y^2) - ${kq}/sqrt((x + 1)^2 + y^2)`), 0, 0);
  near(d.fx, 2 * kq, 1e-14, 'dipole: E = −2kq/d² at the middle'); near(d.fy, 0, 1e-14);
  const m = c.sgCritical(c.sgRead('x^3 - 3x y^2'), [-1.5, 1.5, -1.5, 1.5]);
  assert.strictEqual(m.length, 1); assert.strictEqual(m[0].kind, 'flat'); assert(m[0].D === 0);
});

group('Lagrange: xy on x + y = 4 is largest at (2, 2) with λ = 2; the bead on a hoop balances at (0, ±1), λ = ±4.905', () => {
  const f = c.sgRead('x y'), g = c.sgRead('x + y'), r = c.sgLagrange(f, g, 4, 0.8, 3.2);
  near(r.x, 2, 1e-12); near(r.y, 2, 1e-12); near(r.lam, 2, 1e-12); near(r.f, 4, 1e-12);
  const U = c.sgRead('9.81y'), h = c.sgRead('x^2 + y^2');
  const lo = c.sgLagrange(U, h, 1, 0.3, -0.9), hi = c.sgLagrange(U, h, 1, 0.3, 0.9);
  near(lo.y, -1, 1e-12); near(lo.lam, -4.905, 1e-12); near(hi.y, 1, 1e-12); near(hi.lam, 4.905, 1e-12);
  /* the traced circle and the extremes found along it */
  const n = 120, x0 = -1.6, sx = 3.2 / n, F = new Float64Array((n + 1) * (n + 1));
  for (let j = 0; j <= n; j++) for (let i = 0; i <= n; i++) F[i + j * (n + 1)] = h.f(x0 + i * sx, x0 + j * sx);
  const ch = c.sgChains(c.sgMarch(F, n, n, 1)); assert.strictEqual(ch.length, 1); assert(ch[0].closed, 'the circle closes');
  const cv = { closed: true, pts: ch[0].pts.map((p) => c.sgProject(h, 1, x0 + p[0] * sx, x0 + p[1] * sx)) };
  for (const p of cv.pts) near(Math.hypot(p[0], p[1]), 1, 1e-12, 'projected onto the circle');
  const ex = c.sgConstrained(U, h, 1, [cv], 3.2); assert.strictEqual(ex.length, 2);
  assert.strictEqual(ex[0].kind, 'max'); near(ex[0].y, 1, 1e-12); assert.strictEqual(ex[1].kind, 'min'); near(ex[1].lam, -4.905, 1e-12);
  const L = c.sgLambda(f, g, 2, 2); near(L.angle, 0, 1e-12); near(c.sgLambda(f, g, 1, 3).angle, Math.atan2(2, 4), 1e-12);
});

group('limits: xy/(x² + y²) is m/(1 + m²) along y = mx; x²y/(x⁴ + y²) is ½ on y = x² and → 0 on lines', () => {
  const s = c.sgRead('x y/(x^2 + y^2)');
  assert(!isFinite(s.f(0, 0)));
  for (const m of [0, 1, 2, -0.5]) { const p = c.sgPath('line', 0, 0, m); for (const t of [1, 1e-3, 1e-6]) near(s.f(...p(t)), m / (1 + m * m), 1e-14, 'm = ' + m); }
  near(s.f(...c.sgPath('yaxis', 0, 0)(1e-6)), 0, 1e-12); near(s.f(...c.sgPath('diag', 0, 0)(1e-6)), 0.5, 1e-12);
  const q = c.sgRead('x^2 y/(x^4 + y^2)');
  for (const t of [0.5, 1e-3, 1e-6]) near(q.f(...c.sgPath('parab', 0, 0)(t)), 0.5, 1e-14, 'parabola');
  assert(Math.abs(q.f(...c.sgPath('line', 0, 0, 1)(1e-6))) < 2e-6);
  near(c.sgRead('sin(x^2 + y^2)/(x^2 + y^2)').f(...c.sgPath('diag', 0, 0)(1e-6)), 1, 1e-12);
});

group('nice contour levels', () => {
  const lv = c.sgLevels(0, 4500, 12); assert.strictEqual(lv.step, 500); assert.strictEqual(lv.levels.length, 10);
  assert.deepStrictEqual(Array.from(c.sgLevels(-0.6, 0.6, 12).levels).slice(0, 3), [-0.6, -0.5, -0.4]);
});

group('a particle in U = (x² − 1)² + y²: energy kept without drag, settles in a pit with drag', () => {
  const s = c.sgRead('(x^2 - 1)^2 + y^2');
  let st = [-0.12, 0.9, 0, 0]; const E0 = c.sgEnergy(s, st);
  for (let i = 0; i < 10000; i++) st = c.sgRoll(s, st, 1e-3, 0);
  const E = c.sgEnergy(s, st); near(E.U + E.K, E0.U + E0.K, 1e-9, 'energy');
  st = [-0.12, 0.9, 0, 0]; for (let i = 0; i < 60000; i++) st = c.sgRoll(s, st, 1e-3, 0.3);
  near(st[0], -1, 1e-3, 'settles at x = −1'); near(st[1], 0, 1e-3, 'y = 0');
});
group('the chain rule along a path: f_x x′ + f_y y′ against the derivative of the composite and the centered difference', () => {
  /* closed forms: x² + y² on the unit circle is constant; xy on (t, t²) is t³ */
  const ci = c.sgChain(c.sgRead('x^2 + y^2'), c.sgPathRead('cos t', 'sin t'), 0.7, 1e-4); near(ci.dzdt, 0, 1e-14, 'circle'); near(ci.tx, -ci.ty, 1e-14, 'terms cancel');
  const cu = c.sgChain(c.sgRead('x y'), c.sgPathRead('t', 't^2'), 1.5, 1e-4); near(cu.dzdt, 3 * 1.5 * 1.5, 1e-14, 't³'); near(cu.tx, 1.5 * 1.5, 1e-14); near(cu.ty, 2 * 1.5 * 1.5, 1e-14);
  near(cu.diff, 6.75, 1e-8, 'centered difference'); near(cu.diff - cu.dzdt, 1e-8, 5e-11, 'error h² z‴/6 = 1e-8');
  /* any typed pair: the chain rule equals the exact derivative of f(x(t), y(t)) built by substitution */
  for (const [f, xs, ys] of [['x^2 y + sin(x y)', 'cos(2t)', 't^3 - t'], ['e^(-(x^2 + y^2)/2)', '1 + t', 'ln(2 + t)']]) {
    const s = c.sgRead(f), r = c.sgPathRead(xs, ys), z = M.subst(M.subst(s.tree.f, 'x', r.tree.x), 'y', r.tree.y), dz = M.compile(M.derivative(z, 't'), ['t']);
    for (const t of [0.3, 1.1]) { const q = c.sgChain(s, r, t, 1e-5); near(q.dzdt, dz(t), 1e-12, f); near(q.diff, q.dzdt, 1e-8, f + ' difference'); }
  }
  assert.throws(() => c.sgPathRead('x + t', 't'));
});

group('chain rule setups: the numbers in the hints', () => {
  const r4 = (x) => +x.toPrecision(4), KQ = r4(8.9875517862e9 * 1e-9 * 100), RG = r4(8.314462618);
  /* the hiker on a 1.2 km circle around the 400 m summit, t in minutes */
  const hill = c.sgRead('400e^(-(x^2 + y^2)/2) + 250e^(-((x - 2)^2 + (y - 1.5)^2))'), hr = c.sgPathRead('1.2cos(t/20)', '1.2sin(t/20)'), H = 1e-4 * 40 * PI;
  let q = c.sgChain(hill, hr, 0, H); assert.strictEqual(r4(q.z), 208.6); assert.strictEqual(r4(q.dzdt), 2.501); assert.strictEqual(q.tx, 0);
  near(Math.hypot(hr.dx(0), hr.dy(0)) * 1000, 60, 1e-12, '60 m/min');
  /* the 400 m summit alone adds nothing on the circle (one of its level curves) */
  const top = c.sgRead('400e^(-(x^2 + y^2)/2)'); for (const t of [3, 50, 101]) near(c.sgChain(top, hr, t, H).dzdt, 0, 1e-12, 'level curve');
  let best = [-1e9, 0], hi = [-1e9, 0];
  for (let i = 0; i <= 40000; i++) { const t = 40 * PI * i / 40000, p = c.sgChain(hill, hr, t, H); if (p.dzdt > best[0]) best = [p.dzdt, t]; if (p.z > hi[0]) hi = [p.z, t]; }
  assert.strictEqual(r4(best[0]), 3.356); assert.strictEqual(r4(best[1]), 4.822); assert.strictEqual(r4(hi[0]), 240.8); assert.strictEqual(+hi[1].toPrecision(3), 12.9);
  near(c.sgChain(hill, hr, hi[1], H).dzdt, 0, 2e-3, 'top of the walk');
  /* the gas heated and expanding, t in minutes */
  const gas = c.sgRead(`${RG}y/x`), gr = c.sgPathRead('20 + 0.2t', '300 + 1.5t');
  q = c.sgChain(gas, gr, 0, 0.01); assert.strictEqual(r4(q.tx), -1.247); assert.strictEqual(r4(q.ty), 0.6236); assert.strictEqual(r4(q.dzdt), -0.6236); assert.strictEqual(r4(q.z), 124.7);
  assert.strictEqual(r4(gas.f(gr.x(100), gr.y(100))), 93.53);
  /* a test charge at 0.5 cm/µs along y = 0.8 cm past the dipole, t in µs: dV/dt = −E · v */
  const dip = c.sgRead(`${KQ}/sqrt((x - 1)^2 + y^2) - ${KQ}/sqrt((x + 1)^2 + y^2)`), dr = c.sgPathRead('-3 + 0.5t', '0.8');
  q = c.sgChain(dip, dr, 0, 12e-4); assert.strictEqual(r4(q.dzdt), -63.44);
  q = c.sgChain(dip, dr, 6, 12e-4); near(q.z, 0, 1e-12); assert.strictEqual(r4(q.dzdt), 428.0);
  near(q.dzdt, 2 * KQ / Math.pow(1.64, 1.5) * 0.5, 1e-12, '−E · v with E = −2kq/r³ at the midpoint');
  let lo = [1e9, 0]; for (let i = 0; i <= 120000; i++) { const t = 12 * i / 120000, v = dip.f(dr.x(t), dr.y(t)); if (v < lo[0]) lo = [v, t]; }
  assert.strictEqual(r4(lo[0]), -714.9); assert.strictEqual(r4(lo[1]), 3.806);
});
console.log(`${n} groups passed`);
