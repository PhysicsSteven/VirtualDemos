'use strict';
// Slope Fields and Euler's Method: Euler's steps are exactly the recurrence, the accurate solution matches the closed forms of
// every preset that has one (cooling, decay, RC, linear and quadratic drag, logistic, t − y, e^t), it lands on the times it is
// asked for, it stops at a blowup, the equilibria and their stability are the known ones, and the mystery draws stay in range.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const c = (() => {
  const ctx = {};
  vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
  const src = readDemo('slope-fields').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
  vm.runInNewContext(src + '\nglobalThis.R = { readEquation, euler, eulerSteps, solve, yAt, equilibria, mysteryCup, mysteryCulture, cupSrc, cultureSrc, cupReadings };', ctx, { timeout: 20000 });
  return ctx.R;
})();
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const g = 9.81;

group('reading the box: t and y, pasted left sides, autonomous or not', () => {
  const e = c.readEquation('dy/dt = -0.1(y - 20)');
  assert.strictEqual(e.text, '−0.1(y − 20)'); assert.strictEqual(e.auto, true); near(e.f(3, 90), -7, 1e-15, 'slope at 90');
  assert.strictEqual(c.readEquation('t - y').auto, false);
  assert.strictEqual(c.readEquation("y' = y(1 - y/1000)").auto, true);
  for (const bad of ['x + y', 'alert(1)', 'constructor', 'y $ 2']) assert.throws(() => c.readEquation(bad), bad);
});

group('Euler: the recurrence exactly; (1 + h)^n for y′ = y; T∞ + (T₀ − T∞)(1 − kh)^n for cooling', () => {
  const f = c.readEquation('y').f;
  const r = c.euler(f, 0, 1, 0.5, 2); assert.deepStrictEqual(Array.from(r.y), [1, 1.5, 2.25]);
  near(c.euler(f, 0, 1, 0.1, 10).y[10], Math.pow(1.1, 10), 1e-14, '(1.1)^10');
  near(c.euler(f, 0, 1, 0.01, 100).y[100], Math.pow(1.01, 100), 1e-13, '(1.01)^100');
  const cool = c.readEquation('-0.1(y - 20)').f, e = c.euler(cool, 0, 90, 5, 6);
  for (let i = 0; i <= 6; i++) near(e.y[i], 20 + 70 * Math.pow(0.5, i), 1e-14, 'cooling step ' + i);
  near(e.y[6], 21.09375, 1e-14, 'cooling at 30 min'); assert.strictEqual(e.t[6], 30);
  assert.strictEqual(c.eulerSteps(0, 30, 5), 6); assert.strictEqual(c.eulerSteps(0, 1, 0.1), 10); assert.strictEqual(c.eulerSteps(0, 1, 0.3), 3);
  assert.strictEqual(c.eulerSteps(0, 1, 0.01), 100); assert.strictEqual(c.eulerSteps(5, 1, 1), 0); assert.strictEqual(c.eulerSteps(0, 1e9, 1e-9), 5000);
});

group('accurate solution matches closed forms to 1e-8', () => {
  const cases = [
    ['-0.1(y - 20)', 0, 90, (t) => 20 + 70 * Math.exp(-0.1 * t), [5, 30, 45]],
    ['-ln(2)/6 y', 0, 800, (t) => 800 * Math.pow(0.5, t / 6), [6, 12, 24]],
    ['-y/2', 0, 12, (t) => 12 * Math.exp(-t / 2), [2, 8]],
    ['(12 - y)/2', 0, 0, (t) => 12 * (1 - Math.exp(-t / 2)), [2, 8]],
    [`${g} - 2y`, 0, 0, (t) => g / 2 * (1 - Math.exp(-2 * t)), [0.5, 3]],
    [`${g}(1 - (y/55)^2)`, 0, 0, (t) => 55 * Math.tanh(g * t / 55), [2, 10, 20]],
    [`${g}(1 - (y/55)^2)`, 0, 75, (t) => 55 / Math.tanh(g * t / 55 + Math.atanh(55 / 75)), [2, 20]],
    ['0.5y(1 - y/1000)', 0, 50, (t) => 1000 / (1 + 19 * Math.exp(-0.5 * t)), [5, 20, 25]],
    ['t - y', -2, 4, (t) => t - 1 + 7 * Math.exp(-(t + 2)), [0, 4, -3]],
    ['y', 0, 1, (t) => Math.exp(t), [1, -1]],
  ];
  for (const [s, t0, y0, exact, ts] of cases) {
    const f = c.readEquation(s).f;
    for (const t of ts) near(c.yAt(f, t0, y0, t), exact(t), 1e-8, `${s} at t = ${t}`);
  }
  near(c.yAt(c.readEquation('y').f, 0, 1, 1), Math.E, 1e-9, 'e');
});

group('accurate solution lands on the asked times exactly and returns their values in order', () => {
  const f = c.readEquation('-0.1(y - 20)').f, stops = [5, 10, 15, 20, 25, 30], r = c.solve(f, 0, 90, 30, { stops });
  assert.strictEqual(r.at.length, 6);
  stops.forEach((t, i) => { assert(r.t.includes(t), 'lands on ' + t); near(r.at[i], 20 + 70 * Math.exp(-0.1 * t), 1e-9, 'value at ' + t); });
  const b = c.solve(f, 10, 20 + 70 * Math.exp(-1), 0); near(b.y[b.y.length - 1], 90, 1e-9, 'backward to t = 0'); assert.strictEqual(b.t[b.t.length - 1], 0);
});

group('stops: a blowup (y′ = y², y(0) = 1 reaches infinity at t = 1) and a square root of a negative', () => {
  const r = c.solve(c.readEquation('y^2').f, 0, 1, 2, { cap: 1e6 });
  assert.notStrictEqual(r.end, 'done'); const tl = r.t[r.t.length - 1]; assert(tl < 1 && tl > 0.999, 'stops just before t = 1: ' + tl);
  const s = c.solve(c.readEquation('-sqrt(y)').f, 0, 1, 5);   /* y = (1 − t/2)², reaching 0 at t = 2, then sqrt of a negative */
  near(c.yAt(c.readEquation('-sqrt(y)').f, 0, 1, 1), 0.25, 1e-7, 'sqrt decay at t = 1'); assert.notStrictEqual(s.end, 'done');
});

group('equilibria: values and stability of every autonomous preset', () => {
  const eq = (s, lo, hi) => c.equilibria((y) => c.readEquation(s).f(0, y), lo, hi);
  let r = eq('-0.1(y - 20)', 0, 100); assert.strictEqual(r.list.length, 1); near(r.list[0].y, 20, 1e-12); assert.strictEqual(r.list[0].kind, 'stable');
  r = eq('(12 - y)/2', 0, 14); near(r.list[0].y, 12, 1e-12); assert.strictEqual(r.list[0].kind, 'stable');
  r = eq(`${g} - 2y`, 0, 7); near(r.list[0].y, 4.905, 1e-12); assert.strictEqual(r.list[0].kind, 'stable');
  r = eq(`${g}(1 - (y/55)^2)`, 0, 80); assert.strictEqual(r.list.length, 1); near(r.list[0].y, 55, 1e-12);
  r = eq(`${g}(1 - (y/55)^2)`, -80, 80); assert.strictEqual(r.list.map((q) => q.kind).join(), ['unstable', 'stable'].join()); near(r.list[0].y, -55, 1e-12);
  r = eq('0.5y(1 - y/1000)', 0, 1200); assert.strictEqual(r.list.map((q) => q.kind).join(), ['unstable', 'stable'].join()); assert.strictEqual(r.list[0].y, 0); near(r.list[1].y, 1000, 1e-12);
  r = eq('0.5y(1 - y/1000) - 100', 0, 1200); assert.strictEqual(r.list.map((q) => q.kind).join(), ['unstable', 'stable'].join());
  near(r.list[0].y, 500 - Math.sqrt(50000), 1e-12, '276.4'); near(r.list[1].y, 500 + Math.sqrt(50000), 1e-12, '723.6');
  r = eq('y - y^3', -2, 2); assert.strictEqual(r.list.map((q) => q.kind).join(), ['stable', 'unstable', 'stable'].join()); near(r.list[0].y, -1, 1e-12); assert.strictEqual(r.list[1].y, 0); near(r.list[2].y, 1, 1e-12);
  r = eq('(y - 2)^2', 0, 5); assert.strictEqual(r.list.length, 1); near(r.list[0].y, 2, 1e-6); assert.strictEqual(r.list[0].kind, 'semistable');
  r = eq('-ln(2)/6 y', 0, 1000); near(r.list[0].y, 0, 1e-12); assert.strictEqual(r.list[0].kind, 'stable');
  assert.strictEqual(eq('0y', 0, 1).all, true); assert.strictEqual(eq('y^2 + 1', -5, 5).list.length, 0);
  r = eq('0.5y(1 - y/1000) - 130', 0, 1200); assert.strictEqual(r.list.length, 0, 'harvesting above 125 a day leaves no equilibrium');
});

group('the logistic curve is steepest at K/2 (its inflection point)', () => {
  const f = c.readEquation('0.5y(1 - y/1000)').f;
  let best = 0, at = 0; for (let y = 0; y <= 1000; y += 1) { const s = f(0, y); if (s > best) { best = s; at = y; } }
  assert.strictEqual(at, 500); near(best, 125, 1e-15, 'rK/4');
});

group('mystery draws: in range, their equations read back, the readings follow the cooling law', () => {
  let s = 1; const rand = () => { s = (s * 16807) % 2147483647; return (s - 1) / 2147483646; };
  for (let i = 0; i < 200; i++) {
    const m = c.mysteryCup(rand); assert(m.k >= 0.04 && m.k <= 0.09 && m.Ta >= 18 && m.Ta <= 26, JSON.stringify(m));
    const e = c.readEquation(c.cupSrc(m)); near(e.f(0, m.Ta + 10), -10 * m.k, 1e-12, 'cup slope');
    const d = c.cupReadings(m); assert.strictEqual(d.length, 9); assert.strictEqual(d[0][1], 92);
    for (const [t, y] of d) assert(Math.abs(y - (m.Ta + (92 - m.Ta) * Math.exp(-m.k * t))) <= 0.05 + 1e-9);
    const u = c.mysteryCulture(rand); assert(u.r >= 0.3 && u.r <= 0.6 && u.K >= 60 && u.K <= 140, JSON.stringify(u));
    const q = c.equilibria((y) => c.readEquation(c.cultureSrc(u)).f(0, y), 0, 200); near(q.list[1].y, u.K, 1e-12, 'carrying capacity');
  }
});

console.log(`slope-fields: ${n} groups passed`);
