'use strict';
// Granular Flow: the contact model against exact results (resting overlap, restitution, sliding into rolling, settling speed),
// then each apparatus against what its setup text says it shows. The runs are seeded, so they repeat exactly. About a minute.
const assert = require('node:assert/strict');
const { readDemo } = require('./demo_source.cjs');
/* the CORE block compiled as a plain function: the long seeded runs go several times faster than inside a vm context */
const coreFast = (name, names) => { const src = readDemo(name), m = src.match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/); return new Function(m[1] + `\nreturn {${names}};`)(); };
const C = coreFast('granular-flow', 'gfNew,gfBody,gfAdd,gfReady,gfStep,gfSettle,gfDragF,gfZeta,gfRestitution,gfDrum,gfShaker,gfShear,gfSlide,gfFrame,gfFlip,gfKind,gfMean,gfKE,gfMaxOverlap,gfFroude,gfCriticalRpm,GF_LIQ,GF_MAT,GF_G');
let n = 0;
const test = (name, fn) => { const t0 = Date.now(); fn(); n++; console.log('PASS', name, `(${((Date.now() - t0) / 1000).toFixed(1)} s)`); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b} ± ${tol}, got ${a}`);
const run = (set, T) => { const s = set.s; while (s.t < T) C.gfStep(s, set.drive); return s; };
const A = { shape: 'angular', mat: 'sand' };

/* one free bead on a wall bead 2 km across, which is flat to it (it drops 5 µm over 10 cm) */
function onFloor(disk, mr) {
  const s = C.gfNew(10, { box: [-0.3, -0.02, 0.3, 0.05], disk, wallMu: 0.5, wallMr: 0 });
  const b = C.gfBody(s, 0, 0); C.gfAdd(s, 0, -1000, 2000, 255, b);
  const i = C.gfAdd(s, 0, 0.002, 0.004, 0, -1, 2500, 0.5, mr); C.gfReady(s); return { s, i };
}
test('a bead at rest on the floor sinks in by m g / kn', () => {
  for (const disk of [true, false]) { const { s, i } = onFloor(disk, 0);
    for (let k = 0; k < 40000; k++) C.gfStep(s, null);
    const del = 0.002 - s.y[i]; near(del, s.m[i] * C.GF_G / s.p.kn, 2e-3 * del + 1e-12, disk ? 'disk' : 'sphere');
    assert(del / 0.004 < 0.002, 'overlap stays tiny'); }
});
test('two beads meeting head on part with a coefficient of restitution of about 0.5, momentum kept', () => {
  /* the damping is set for e = 0.5 at this time step (gfZeta); where the first touch falls within a step moves e by a few hundredths */
  const es = [];
  for (const gap of [0.0001, 0.00013, 0.00017, 0.0002, 0.00024]) {
    const s = C.gfNew(4, { box: [-0.05, -0.05, 0.05, 0.05] });
    const a = C.gfAdd(s, -0.002 - gap, 0, 0.004, 0, -1, 2500, 0, 0), b = C.gfAdd(s, 0.002 + gap, 0, 0.004, 0, -1, 2500, 0, 0);
    C.gfReady(s); s.p.g = 0; s.vx[a] = 0.1; s.vx[b] = -0.1;
    for (let k = 0; k < 200; k++) C.gfStep(s, null);
    const e = (s.vx[b] - s.vx[a]) / 0.2; es.push(e); assert(e > 0.45 && e < 0.62, String(e));
    near(s.m[a] * s.vx[a] + s.m[b] * s.vx[b], 0, 1e-15, 'momentum');
  }
  near(es.reduce((p, q) => p + q, 0) / es.length, 0.5, 0.06, 'mean');
});
test('a bead slid along the floor with no spin ends up rolling at v0/(1 + I/mr²): 2/3 v0 for a disk, 5/7 v0 for a sphere', () => {
  for (const [disk, want] of [[true, 2 / 3], [false, 5 / 7]]) { const { s, i } = onFloor(disk, 0);
    for (let k = 0; k < 20000; k++) C.gfStep(s, null);
    s.vx[i] = 0.2; s.w[i] = 0; for (let k = 0; k < 6000; k++) C.gfStep(s, null);
    near(s.vx[i] / 0.2, want, 0.01, disk ? 'disk' : 'sphere'); near(-s.w[i] * s.r[i], s.vx[i], 0.002, 'rolls without slipping'); }
});
test('a sphere falling through glycerol reaches the Schiller and Naumann settling speed; Stokes law in the slow limit', () => {
  const L = C.GF_LIQ.g75;
  for (const [d, rho] of [[0.002, 2650], [0.003, 7850]]) {
    const s = C.gfNew(4, { box: [-0.01, -1, 0.01, 0.01], fluid: { rho: L[0], mu: L[1] }, disk: false }); C.gfBody(s, 0, 0);
    const i = C.gfAdd(s, 0, 0, d, 0, -1, rho, 0.4, 0.02); C.gfReady(s); s.p.dt = 1e-4;
    for (let k = 0; k < 20000; k++) C.gfStep(s, null);
    const v = C.gfSettle(d, rho, L[0], L[1], C.GF_G); near(-s.vy[i], v, 0.002 * v);
    const Re = L[0] * v * d / L[1], W = (rho - L[0]) * C.GF_G * Math.PI * d ** 3 / 6; near(W, 3 * Math.PI * L[1] * d * v * C.gfDragF(Re), 1e-6 * W, 'force balance'); }
  const vs = C.gfSettle(1e-4, 2500, 1261.3, 1.412, C.GF_G); near(vs, (2500 - 1261.3) * C.GF_G * 1e-8 / (18 * 1.412), 1e-9, 'Stokes');
  assert(C.gfSettle(0.003, 7850, L[0], L[1], C.GF_G) / C.gfSettle(0.003, 2500, L[0], L[1], C.GF_G) > 3, 'steel at least three times glass');
  const r4 = C.gfSettle(0.004, 2650, L[0], L[1], C.GF_G) / C.gfSettle(0.002, 2650, L[0], L[1], C.GF_G); near(r4, 2.5, 0.1, '4 mm against 2 mm sand');
});
test('liquid and material data as cited; damping ratio from e; Froude number and the critical rate', () => {
  assert.deepEqual([...C.GF_LIQ.g75], [1195.5, 0.0355]); assert.deepEqual([...C.GF_LIQ.g100], [1261.3, 1.412]); assert.equal(C.GF_MAT.steel, 7850);
  near(C.gfRestitution(C.gfZeta(0.5)), 0.5, 1e-6); near(C.gfRestitution(0), 1, 1e-3);
  near(C.gfCriticalRpm(0.07, C.GF_G), 113.0, 0.1); near(C.gfFroude(200, 0.07, C.GF_G), 3.13, 0.01); near(C.gfFroude(C.gfCriticalRpm(0.3, 9.81), 0.3, 9.81), 1, 1e-12);
});
test('Brazil nut: at Γ = 2.5 the 12 mm bead climbs from the floor to near the top; at Γ = 0.8 it never moves', () => {
  const up = C.gfShaker({ Gamma: 2.5 }), s = run(up, 6), h = C.gfMean(s, 0, (i) => s.y[i] - s.bodies[0].oy);
  assert(h > 0.035, `intruder at ${h}`);
  const st = C.gfShaker({ Gamma: 0.8 }), s2 = run(st, 3); near(C.gfMean(s2, 0, (i) => s2.y[i] - s2.bodies[0].oy), 0.006, 0.001);
  assert(C.gfMaxOverlap(s) < 0.1, 'overlaps stay small while shaking');
});
const fromMiddle = (s, k) => { const cx = C.gfMean(s, null, (i) => s.x[i]), cy = C.gfMean(s, null, (i) => s.y[i]); return C.gfMean(s, k, (i) => Math.hypot(s.x[i] - cx, s.y[i] - cy)); };
test('drum, two sizes at 15 rpm: after 20 s the small beads gather in the middle of the bed and the big ones round it', () => {
  const s = run(C.gfDrum({}), 20); assert(fromMiddle(s, 1) - fromMiddle(s, 0) > 0.004, `${fromMiddle(s, 1)} ${fromMiddle(s, 0)}`);
  assert.equal(s.lost, 0);
});
test('drum, three sizes: in order of size from the middle out', () => {
  const s = run(C.gfDrum({ kinds: [C.gfKind(160, 2.5, 0.4), C.gfKind(70, 4, 0.4), C.gfKind(30, 6.5, 0.4)] }), 20);
  const d = [0, 1, 2].map((k) => fromMiddle(s, k)); assert(d[0] < d[1] && d[1] < d[2], d.join(' '));
});
test('drum at 200 rpm: the beads ride round stuck to the wall; at 130 rpm (above the critical 113) they still tumble', () => {
  const s = run(C.gfDrum({ rpm: 200 }), 4); let ring = 0, all = 0;
  for (let i = 0; i < s.n; i++) if (!s.wall[i]) { all++; if (Math.hypot(s.x[i], s.y[i]) > 0.045) ring++; }
  assert(ring / all > 0.97, `${ring}/${all}`); assert(Math.abs(C.gfMean(s, null, (i) => s.y[i])) < 0.01, 'centred');
  const t = run(C.gfDrum({ rpm: 130 }), 4); assert(C.gfMean(t, null, (i) => t.y[i]) < -0.02, 'still a tumbling bed');
});
test('shear box: big beads rise toward the lid', () => {
  const s = run(C.gfShear({ U: 0.5 }), 8); assert(C.gfMean(s, 1, (i) => s.y[i]) - C.gfMean(s, 0, (i) => s.y[i]) > 0.003);
});
test('landslide at 30°: the big stones run out farther and leave fewer behind on the slope; nothing flies out', () => {
  const set = C.gfSlide({ kinds: [C.gfKind(320, 4, 0.5, A), C.gfKind(50, 9, 0.5, A)] }), s = run(set, 6);
  assert(C.gfMean(s, 1, (i) => s.x[i]) > C.gfMean(s, 0, (i) => s.x[i])); assert.equal(s.lost, 0);
  assert(C.gfKE(s) < 1e-12, 'at rest after 6 s');
});
test('landslide at 25°: angular sand leaves far more on the slope than smooth glass beads', () => {
  const left = (kind) => { const set = C.gfSlide({ alpha: 25, kinds: [kind] }), s = run(set, 6); let k = 0; for (let i = 0; i < s.n; i++) if (!s.wall[i] && s.x[i] < set.geo.xB - 0.01) k++; return k; };
  const sand = left(C.gfKind(400, 5, 0.5, A)), beads = left(C.gfKind(400, 5, 0.1));
  assert(sand > 80 && sand > 4 * beads, `${sand} ${beads}`);
});
test('sand picture: flipped, the steel lands below the glass, and the 4 mm sand below the 2 mm sand', () => {
  const h = (kinds) => { const set = C.gfFrame({ kinds }); C.gfFlip(set); const s = run(set, 14); assert.equal(s.flip, null); near(s.bodies[0].th, Math.PI, 1e-12);
    return [0, 1].map((k) => C.gfMean(s, k, (i) => s.y[i] + 0.06)); };
  const d = h([C.gfKind(150, 3, 0.4, { mat: 'steel' }), C.gfKind(150, 3, 0.4, { mat: 'glass' })]); assert(d[0] < d[1], d.join(' '));
  const f = h([C.gfKind(200, 2, 0.4, { mat: 'sand' }), C.gfKind(50, 4, 0.4, { mat: 'sand' })]); assert(f[1] < f[0], f.join(' '));
});
test('acrylic beads (1190 kg/m³) float up in 90 % glycerol (1235 kg/m³) and stay down in water', () => {
  for (const [liq, up] of [['g90', true], ['water', false]]) { const set = C.gfFrame({ liquid: liq, kinds: [C.gfKind(40, 3, 0.4, { mat: 'acrylic' })], settle: 0 });
    const s = set.s, y0 = C.gfMean(s, 0, (i) => s.y[i]); run(set, 3); assert.equal(C.gfMean(s, 0, (i) => s.y[i]) > y0 + 0.002, up, liq); }
});
console.log(`${n} tests passed`);
