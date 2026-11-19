'use strict';
// Solids of Revolution (2026-11-19): the integrals the slice sums close in on, against the OpenStax closed forms for disks,
// washers, shells, cross sections, arc length and surface area; the sums converging as n doubles (midpoint sums by 4 each
// doubling, the chord chain from below); the cone's (3/10)MR² by disks and by shells and the sphere's (2/5)MR²; and the
// real objects: the bowl of water (288π cm³) and the vase.
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
const src = readDemo('solids-of-revolution');
const core = src.match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.C = { SHAPES, radii, density, sliceSum, integral, maxRadius };', ctx, { timeout: 20000 });
const C = ctx.C, M = ctx.VDMATH, PI = Math.PI;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * (1 + Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const mk = (f, g, axis, k, a, b, shape) => {
  const F = M.parse(f, { vars: ['x'] }).node, G = M.parse(g || '0', { vars: ['x'] }).node;
  return { f: M.compile(F, ['x']), g: M.compile(G, ['x']), fp: M.compile(M.derivative(F, 'x'), ['x']), axis, k, a, b, shape };
};

group('disks and washers: √x on [0, 4] gives 8π, x over x² gives 2π/15, x² about y = −1 gives 13π/15, 1/x on [1, 10] gives 0.9π', () => {
  near(C.integral('disks', mk('sqrt(x)', '0', 'h', 0, 0, 4)), 8 * PI, 1e-12, 'sqrt');
  near(C.integral('disks', mk('x', 'x^2', 'h', 0, 0, 1)), 2 * PI / 15, 1e-12, 'washer');
  near(C.integral('disks', mk('x^2', '0', 'h', -1, 0, 1)), 13 * PI / 15, 1e-12, 'about y = −1');
  near(C.integral('disks', mk('1/x', '0', 'h', 0, 1, 10)), 0.9 * PI, 1e-12, 'horn');
  /* a region across the axis has no hole: R is the farther curve */
  const q = C.radii({ f: () => 2, g: () => -1, k: 0 }, 0); assert.strictEqual(q.R, 2); assert.strictEqual(q.r, 0);
});

group('shells: 2x − x² about the y axis gives 8π/3, about x = −1 gives 16π/3', () => {
  near(C.integral('shells', mk('2x - x^2', '0', 'v', 0, 0, 2)), 8 * PI / 3, 1e-12, 'y axis');
  near(C.integral('shells', mk('2x - x^2', '0', 'v', -1, 0, 2)), 16 * PI / 3, 1e-12, 'x = −1');
});

group('cross sections on the unit disk: squares 16/3, semicircles 2π/3; triangles on 1 − x²: 4√3/15', () => {
  const disk = (s) => mk('sqrt(1 - x^2)', '-sqrt(1 - x^2)', 'h', 0, -1, 1, s);
  near(C.integral('cross', disk('square')), 16 / 3, 1e-9, 'squares');
  near(C.integral('cross', disk('semi')), 2 * PI / 3, 1e-9, 'semicircles');
  near(C.integral('cross', mk('1 - x^2', '0', 'h', 0, -1, 1, 'tri')), 4 * Math.sqrt(3) / 15, 1e-12, 'triangles');
});

group('arc length: x^(3/2) on [0, 4] is (8/27)(10^(3/2) − 1); the catenary 10 cosh(x/10) on [−10, 10] is 20 sinh 1', () => {
  const P = mk('x^(3/2)', '0', 'h', 0, 0, 4), L = 8 / 27 * (Math.pow(10, 1.5) - 1);
  near(C.integral('arc', P), L, 1e-12, 'x^1.5');
  near(C.integral('arc', mk('10cosh(x/10) - 10', '0', 'h', 0, -10, 10)), 20 * Math.sinh(1), 1e-12, 'catenary');
  /* a chain of chords is never longer than the curve, and grows toward it */
  let prev = 0;
  for (let k = 0; k <= 10; k++) { const s = C.sliceSum('arc', P, 1 << k); assert(s <= L + 1e-12 && s >= prev - 1e-12, `chain ${1 << k}`); prev = s; }
  near(C.sliceSum('arc', P, 1), Math.hypot(4, 8), 1e-15, 'one chord');
});

group('surface area: the cone x/2 on [0, 2] is π√5 (exact for any n), the unit sphere 4π, a frustum band π(r₀ + r₁)L', () => {
  const cone = mk('x/2', '0', 'h', 0, 0, 2);
  for (const k of [1, 3, 17]) near(C.sliceSum('surface', cone, k), PI * Math.sqrt(5), 1e-14, `cone n=${k}`);
  near(C.integral('surface', cone), PI * Math.sqrt(5), 1e-12, 'cone integral');
  const S = mk('sqrt(1 - x^2)', '0', 'h', 0, -1, 1);
  near(C.integral('surface', S), 4 * PI, 1e-12, 'sphere');
  near(C.sliceSum('surface', S, 4096), 4 * PI, 1e-4, 'sphere bands');
  near(C.integral('surface', mk('x', '0', 'h', 0, 0, 2)), 2 * PI * Math.sqrt(8), 1e-12, 'y = x');
});

group('midpoint slice sums close in on the integral, the error falling by about 4 each doubling of n', () => {
  for (const [m, P] of [['disks', mk('x^2', '0', 'h', -1, 0, 1)], ['shells', mk('2x - x^2', '0', 'v', -1, 0, 2)], ['disks', mk('4 + 1.5sin(x/2.5)', '0', 'h', 0, 0, 25)]]) {
    const I = C.integral(m, P), e1 = Math.abs(C.sliceSum(m, P, 64) - I), e2 = Math.abs(C.sliceSum(m, P, 128) - I);
    assert(e1 > 0 && e2 < e1, m); near(e1 / e2, 4, 0.02, m + ' ratio');
  }
  /* πx is a straight line, so the midpoint sum of √x disks is exact for every n; one shell of 2x − x² by hand */
  near(C.sliceSum('disks', mk('sqrt(x)', '0', 'h', 0, 0, 4), 3), 8 * PI, 1e-14, 'sqrt exact');
  near(C.sliceSum('shells', mk('2x - x^2', '0', 'v', 0, 0, 2), 1), 2 * PI * 1 * 1 * 2, 1e-15, 'one shell');
});

group('moments of inertia: the cone (3/10)MR² by disks and by shells, the sphere (2/5)MR²; 0.006 and 0.008 kg·m² for 2 kg, R = 0.1 m', () => {
  const cone = mk('0.1(1 - x/0.3)', '0', 'h', 0, 0, 0.3);
  const V = C.integral('disks', cone), I = C.integral('Idisks', cone), R = C.maxRadius('Idisks', cone);
  near(R, 0.1, 1e-15, 'R'); near(V, PI * 0.01 * 0.3 / 3, 1e-12, 'cone volume'); near(I / V / (R * R), 0.3, 1e-12, 'cone disks');
  near(2 * I / V, 0.006, 1e-12, 'cone I');
  const up = mk('0.3(1 - x/0.1)', '0', 'v', 0, 0, 0.1);
  const Vs = C.integral('shells', up), Is = C.integral('Ishells', up);
  near(Vs, V, 1e-12, 'same volume'); near(Is / Vs / Math.pow(C.maxRadius('Ishells', up), 2), 0.3, 1e-12, 'cone shells');
  const sph = mk('sqrt(0.01 - x^2)', '0', 'h', 0, -0.1, 0.1);
  const Vb = C.integral('disks', sph), Ib = C.integral('Idisks', sph);
  near(Vb, 4 / 3 * PI * 0.001, 1e-9, 'sphere volume'); near(C.maxRadius('Idisks', sph), 0.1, 1e-6, 'sphere R (0.1² rounds past 0.01)'); near(Ib / Vb / 0.01, 0.4, 1e-9, 'sphere'); near(2 * Ib / Vb, 0.008, 1e-9, 'sphere I');
});

group('real objects: water 6 cm deep in a 10 cm bowl is πh²(3R − h)/3 = 288π cm³; the vase 4 + 1.5 sin(x/2.5) holds 1,514 mL', () => {
  near(C.integral('shells', mk('6', '10 - sqrt(100 - x^2)', 'v', 0, 0, Math.sqrt(84))), 288 * PI, 1e-9, 'bowl');
  const vase = PI * (400 + 30 * (1 - Math.cos(10)) + 2.25 * (12.5 - 2.5 * Math.sin(20) / 4));
  near(C.integral('disks', mk('4 + 1.5sin(x/2.5)', '0', 'h', 0, 0, 25)), vase, 1e-12, 'vase'); near(vase, 1514.2894944, 1e-10, 'vase value');
});

group('the presets: every exact value written on the page equals the integral the demo finds', () => {
  const block = src.match(/const PRESETS = \{([\s\S]*?)\n  \};/)[1];
  const PRE = vm.runInNewContext('const PI = Math.PI; ({' + block + '})', {});
  let k = 0;
  for (const [name, p] of Object.entries(PRE)) {
    if (!p.ex) continue;
    const ev = (s) => M.compile(M.parse(s, { vars: [] }).node, [])();
    const P = mk(p.f, p.g, p.axis, ev(p.k), ev(p.a), ev(p.b), p.shape);
    near(C.integral(p.m, P), p.ex.v, 1e-9, name); k++;
  }
  assert(k >= 12, 'presets with exact values: ' + k);
});

console.log(`test_solids_of_revolution: ${n} groups passed`);
