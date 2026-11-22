'use strict';
// Vector Fields, Work and Curl (2026-11-19): exact derivatives of a typed field, line integrals along straight pieces and
// arcs, path independence, Green's theorem in both forms, the outflow of a small box, the potential and its grid, each
// against closed forms. The demo's core runs in the same context as the shared math library (demos/lib/vdmath.js).
const assert = require('node:assert');
const vm = require('node:vm');
const { readDemo, readLib } = require('./demo_source.cjs');
const ctx = {};
vm.runInNewContext(readLib('vdmath.js'), ctx, { timeout: 5000 });
const core = readDemo('vector-fields').match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/)[1];
vm.runInNewContext(core + '\nglobalThis.c = { makeField, buildPath, pathInt, partials, workTo, greens, boxFlux, potentialAt, curlCheck, potentialGrid, areaInt, singularInside };', ctx, { timeout: 20000 });
const c = ctx.c, M = ctx.VDMATH, PI = Math.PI;
let n = 0;
function group(name, f) { f(); n++; console.log('PASS', name); }
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
const F = (p, q) => c.makeField(p, q);
const P = (shape, o) => c.buildPath(shape, Object.assign({ A: [0, 0], B: [3, 2], C: [0, 0], R: 1 }, o));

group('exact curl and divergence from the typed formulas', () => {
  const t = (f, k) => M.text(f.tree[k]);
  assert.strictEqual(t(F('-y', 'x'), 'curl'), '2'); assert.strictEqual(t(F('-y', 'x'), 'div'), '0');
  assert.strictEqual(t(F('y', '0'), 'curl'), '−1');
  assert.strictEqual(t(F('x', 'y'), 'div'), '2');
  assert.strictEqual(t(F('x^2 y', 'x y^3'), 'curl'), 'y³ − x²');
  assert(F('0', '-9.81').curl0 && F('2x y', 'x^2').curl0, 'gradient fields have curl exactly 0');
  const wire = F('-y/(x^2+y^2)', 'x/(x^2+y^2)');
  for (const [x, y] of [[1, 0.3], [-2, 1.5], [0.2, -0.7]]) near(wire.curl(x, y), 0, 1e-12, 'wire curl'), near(wire.div(x, y), 0, 1e-12, 'wire div');
  assert.throws(() => F('x + z', 'y')); assert.throws(() => F('alert(1)', 'y'));
});

group('work in uniform gravity: −9.81 N × rise, on every path (−19.62 J from (0, 0) to (3, 2))', () => {
  const g = F('0', '-9.81');
  for (const s of ['line', 'xy', 'yx', 'half']) near(c.pathInt(g, P(s)), -19.62, 1e-10, s);
  near(c.pathInt(g, P('line', { rev: true })), 19.62, 1e-10, 'reversed');
  near(c.pathInt(g, P('circle', { C: [1, 1], R: 1 })), 0, 1e-10, 'loop');
});

group('a swirl F = (−y, x): 0, +6 and −6 J on the three paths; 2πR² around a circle, 8R² around a square', () => {
  const s = F('-y', 'x');
  near(c.pathInt(s, P('line')), 0, 1e-10, 'line'); near(c.pathInt(s, P('xy')), 6, 1e-10, 'xy'); near(c.pathInt(s, P('yx')), -6, 1e-10, 'yx');
  for (const R of [0.5, 1, 2.3]) {
    const G = c.greens(s, P('circle', { C: [1, 1], R }));
    near(G.circ, 2 * PI * R * R, 1e-9, 'circulation'); near(G.curlSum, 2 * PI * R * R, 1e-9, 'summed curl'); near(G.flux, 0, 1e-9, 'flux'); near(G.divSum, 0, 1e-9, 'div sum');
    assert.strictEqual(G.sing, null);
  }
  const Gs = c.greens(s, P('square', { C: [-1, 0.5], R: 0.75 })); near(Gs.circ, 8 * 0.75 * 0.75, 1e-9, 'square'); near(Gs.curlSum, 4.5, 1e-9, 'square curl');
  const Gr = c.greens(s, P('circle', { C: [0, 0], R: 1, rev: true })); near(Gr.circ, -2 * PI, 1e-9, 'clockwise'); assert.strictEqual(Gr.orient, -1); near(Gr.orient * Gr.curlSum, -2 * PI, 1e-9, 'Green clockwise');
});

group('running total: half way along the swirl\'s x then y path the work is 0, then rises linearly to 6', () => {
  const s = F('-y', 'x'), p = P('xy'), pre = c.partials(s, p);
  near(c.workTo(s, p, pre, 3), 0, 1e-10, 'end of first leg'); near(c.workTo(s, p, pre, 4), 3, 1e-10, 'mid second leg'); near(c.workTo(s, p, pre, p.len), 6, 1e-10, 'end');
});

group('point mass F = −r̂/r²: the work is 1/r_B − 1/r_A on every path, 0 around any loop, potential 1/r', () => {
  const m = F('-x/(x^2+y^2)^(3/2)', '-y/(x^2+y^2)^(3/2)');
  for (const s of ['line', 'half', 'xy']) near(c.pathInt(m, P(s, { A: [3, 0], B: [1, 0] })), 2 / 3, 1e-9, s);
  near(c.pathInt(m, P('xy', { A: [2, 1], B: [-1, 2] })), 1 / Math.sqrt(5) - 1 / Math.sqrt(5), 1e-9, 'same radius');
  near(c.pathInt(m, P('circle', { C: [0.3, 0], R: 1 })), 0, 1e-9, 'loop around the mass');
  near(c.potentialAt(m, [1, 0], 1, [2, 3]), 1 / Math.sqrt(13), 1e-9, 'f = 1/r');
  const g = c.potentialGrid(m, -3, 3, -2.5, 2.5, 48, 40, [1, 0], 1); assert(g.ok, 'point mass has a potential on a grid around it');
  const k = (i, j) => g.f[j * 49 + i]; near(k(40, 20), 1 / 2, 1e-4, 'grid f at (2, 0)');
  assert(c.curlCheck(m, -3, 3, -2.5, 2.5, 30).free);
});

group('the long wire: curl 0, but 2π around the wire and 0 around a loop beside it; no potential around it', () => {
  const w = F('-y/(x^2+y^2)', 'x/(x^2+y^2)');
  for (const [C, R] of [[[0, 0], 1.5], [[0.4, -0.2], 1], [[0, 0], 0.01]]) near(c.pathInt(w, P('circle', { C, R })), 2 * PI, 1e-9, 'around');
  near(c.pathInt(w, P('square', { C: [0.2, 0.1], R: 2 })), 2 * PI, 1e-9, 'square around');
  near(c.pathInt(w, P('circle', { C: [3, 0], R: 1 })), 0, 1e-9, 'beside');
  const G = c.greens(w, P('circle', { C: [0.3, 0.2], R: 1 })); assert(G.sing, 'the wire is found inside'); near(G.curlSum, 0, 1e-6, 'curl sum away from the wire');
  assert(c.curlCheck(w, -3, 3, -2, 2, 30).free, 'curl free in view');
  assert(!c.potentialGrid(w, -3, 3, -2.5, 2.5, 40, 32, [1, 0], 0).ok, 'no single valued potential around the wire');
  assert(c.potentialGrid(w, 1, 4, 1, 3, 30, 20, [2, 2], 0).ok, 'a potential (the angle) in a region away from the wire');
  near(c.potentialAt(w, [1, 0], 0, [0, 1]), PI / 2, 1e-9, 'f = θ');
});

group('Green\'s theorem, flux form: F = (x, y) has flux 2 × area; box outflow ÷ area = div', () => {
  const s = F('x', 'y');
  const G = c.greens(s, P('circle', { C: [0.4, 0.2], R: 1.2 })); near(G.flux, 2 * PI * 1.44, 1e-9, 'flux'); near(G.divSum, 2 * PI * 1.44, 1e-9, 'div sum'); near(G.circ, 0, 1e-9, 'no circulation');
  const q = F('x^2', 'y'); for (const h of [0.1, 0.8]) near(c.boxFlux(q, 1, 1, h) / (h * h), 3, 1e-9, 'box (x², y) at (1, 1)');
  const e = F('sin(x) y', 'x y^2'); const h = 1e-3; near(c.boxFlux(e, 0.7, -0.4, h) / (h * h), e.div(0.7, -0.4), 1e-6, 'small box → div');
  near(c.boxFlux(F('-y', 'x'), 0.5, 0.5, 0.4), 0, 1e-12, 'rotation has no outflow');
});

group('source and sink: 2π out of the source, 0 net out of a loop around both, 0 from a box away from them', () => {
  const v = F('(x+1)/((x+1)^2+y^2) - (x-1)/((x-1)^2+y^2)', 'y/((x+1)^2+y^2) - y/((x-1)^2+y^2)');
  const G = c.greens(v, P('circle', { C: [-1, 0], R: 0.6 })); near(G.flux, 2 * PI, 1e-9, 'source'); assert(G.sing, 'the source is flagged');
  near(c.greens(v, P('circle', { C: [1, 0], R: 0.5 })).flux, -2 * PI, 1e-9, 'sink');
  near(c.greens(v, P('circle', { C: [0, 0], R: 2 })).flux, 0, 1e-9, 'both');
  near(c.boxFlux(v, 0, 1, 0.4), 0, 1e-9, 'box away'); near(c.boxFlux(v, -1, 0.05, 0.4), 2 * PI, 1e-9, 'box over the source');
  near(c.potentialAt(v, [0, 0], 0, [2, 0.5]), Math.log(Math.hypot(3, 0.5)) - Math.log(Math.hypot(1, 0.5)), 1e-9, 'φ = ln r₁ − ln r₂');
});

group('shear flow and rigid rotation: curl −1 and 2ω, circulation = curl × area', () => {
  const sh = F('y', '0'); near(c.greens(sh, P('square', { C: [0, 0], R: 1 })).circ, -4, 1e-9, 'shear square');
  near(sh.curl(0.3, 2), -1, 0, 'shear curl');
});

group('a freehand loop: a polygon close to a circle gives Green\'s sums to three figures', () => {
  const s = F('-y', 'x'), pts = [];
  for (let i = 0; i <= 200; i++) { const t = 2 * PI * i / 200; pts.push([Math.cos(t), Math.sin(t)]); } pts[200] = pts[0].slice();
  const p = c.buildPath('free', { pts }); assert(p.closed); assert.strictEqual(p.orient, 1);
  const G = c.greens(s, p), area = 100 * Math.sin(2 * PI / 200);   /* the polygon's area */
  near(G.circ, 2 * area, 1e-9, 'exact along the straight pieces'); near(G.curlSum, 2 * area, 2e-3, 'grid sum');
});

group('dipole and spreading flow are conservative, the swirl is not', () => {
  const d = F('(x+1)/((x+1)^2+y^2)^(3/2) - (x-1)/((x-1)^2+y^2)^(3/2)', 'y/((x+1)^2+y^2)^(3/2) - y/((x-1)^2+y^2)^(3/2)');
  assert(c.curlCheck(d, -3, 3, -2, 2, 30).free); assert(c.potentialGrid(d, -3, 3, -2.2, 2.2, 50, 36, [0, 0], 0).ok, 'dipole potential');
  near(c.potentialAt(d, [0, 0], 0, [0.5, 0.5]), -(1 / Math.hypot(1.5, 0.5) - 1 / Math.hypot(0.5, 0.5)), 1e-9, 'f = −V');
  const sw = c.curlCheck(F('-y', 'x'), -1, 1, -1, 1, 10); assert(!sw.free); near(sw.at[2], 2, 1e-12, 'swirl curl');
  near(c.potentialAt(F('x', 'y'), [0, 0], 0, [1, 2]), 2.5, 1e-10, 'f = r²/2');
});

group('a loop around the point mass: circulation 0, flux −2π/R, and the divergent ∬ div dA ends as undefined, not a hang', () => {
  /* F = −r̂/r² in the plane has div F = 1/r³, whose integral over a disk about the origin diverges (2026-11-22: it used to stall the page) */
  const m = F('-x/(x^2+y^2)^(3/2)', '-y/(x^2+y^2)^(3/2)');
  for (const [sh, R, flux] of [['circle', 1.5, -2 * PI / 1.5], ['square', 1, null]]) {
    const t0 = Date.now(), G = c.greens(m, P(sh, { C: [0, 0], R }));
    assert(Date.now() - t0 < 10000, sh + ' took ' + (Date.now() - t0) + ' ms');
    near(G.circ, 0, 1e-9, sh + ' circulation'); assert.strictEqual(G.curlSum, 0, sh + ' curl sum'); assert(Number.isNaN(G.divSum), sh + ' div sum ' + G.divSum);
    assert(G.sing, sh + ' finds the mass'); if (flux !== null) near(G.flux, flux, 1e-9, 'flux −2π/R');
  }
});

console.log(`${n} groups passed`);
