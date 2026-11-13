'use strict';
// Charged Particles in Matter: the demo's PSTAR table, depth span, track dose bins and the readings it builds on the shared core.
const assert = require('node:assert');
const path = require('node:path');
const { core } = require('./demo_source.cjs');
const V = require(path.join(__dirname, '../../demos/lib/vdstop.js'));
const c = core('charged-particles', 'PSTAR_MM,depthSpan,depositTrack,stats,doseAt,at,stopDepth,layerEdges,splitTrack,layerBudget');

let n = 0;
const within = (a, b, d, w) => assert(Math.abs(a - b) <= d, `${w || ''}: expected ${b} ± ${d}, got ${a}`);
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('the PSTAR table the demo prints agrees with the model within 0.2 mm', () => {
  assert.equal(c.PSTAR_MM.length, 19);
  for (const [E, mm] of c.PSTAR_MM) within(V.range(E, 'water') * 10, mm, 0.2, `R(${E})`);
});

group('depth span covers the end of range, and the slab', () => {
  for (const E of [70, 150, 230]) { const z = c.depthSpan(V, { T: E }), R = V.range(E, 'water'); assert(z > R * 1.1 && z < R * 1.4, `${E}: ${z}`); assert.equal(z, Math.round(z)); }
  const z = c.depthSpan(V, { T: 150, layers: [{ m: 'lead', t: 1 }] }); assert(z > V.range(150, 'water') - V.wet(1, 'lead', 150) + 1);
});

group('track dose bins conserve energy: deposited + carried away = beam energy', () => {
  let s = 3; const rng = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const dz = 0.1, bins = new Float64Array(250); let carried = 0, N = 300;
  for (let i = 0; i < N; i++) { const t = V.track({ T: 150 }, rng); c.depositTrack(t, bins, dz, V.GAMMA); const last = t.pts[t.pts.length - 1][2]; carried += t.absorbed ? (1 - V.GAMMA) * last : last; }
  near(bins.reduce((a, b) => a + b, 0) + carried, 150 * N, 1e-9, 'energy');
  /* and the tracks' dose (MeV cm²/g) follows the broad beam curve in the plateau */
  const D = V.dose({ T: 150, zmax: 25, dz: 0.01 });
  let mc = 0, mod = 0; for (let k = 10; k < 100; k++) { mc += bins[k] / N / dz; mod += c.doseAt(D, (k + 0.5) * dz); }
  near(mc, mod, 0.05, 'plateau dose from the tracks');
});

group('stats and interpolation', () => {
  const st = c.stats([1, 2, 3, 4]); assert.equal(st.m, 2.5); near(st.sd, Math.sqrt(5 / 3), 1e-12, 'sd');
  const D = { z: [0, 1, 2], d: [1, 3, 5], e: [10, 6, 2] }; assert.equal(c.doseAt(D, 0.5), 2); assert.equal(c.at(D, D.e, 1.5), 4);
});

group('body layers: the new NIST tissues and inflated lung', () => {
  /* Z/A from the NIST STAR compositions by weight; skin, brain, cortical bone (2026-11-13) */
  const want = { skin: [1.10, 72.7, 0.54932], brain: [1.03, 73.3, 0.55422], cortical: [1.85, 106.4, 0.52130], lunginf: [0.26, 75.3, 0.54965] };
  for (const [k, [rho, I, za]] of Object.entries(want)) { const M = V.mat(k); assert.equal(M.rho, rho); assert.equal(M.I, I); assert.equal(M.ZA, za); }
  /* no density correction: inflated lung stops per gram exactly as lung tissue, and its range in cm is longer by 1.05/0.26 */
  near(V.S(150, 'lunginf'), V.S(150, 'lung'), 1e-12, 'S/ρ');
  near(V.range(150, 'lunginf') / 0.26, V.range(150, 'lung') / 1.05 * 1.05 / 0.26, 1e-12, 'range');
});

group('body layers: where the beam stops, and the depth shown', () => {
  /* water only: the CSDA range; a stack: each layer's own range table, then water */
  near(c.stopDepth(V, { T: 150 }), V.range(150, 'water'), 1e-12, 'water');
  const lay = [{ m: 'skin', t: 0.2 }, { m: 'adipose', t: 1 }], E = V.after(V.after(150, 0.2 * 1.1, 'skin'), 0.92, 'adipose');
  near(c.stopDepth(V, { T: 150, layers: lay }), 1.2 + V.range(E, 'water'), 1e-12, 'stack');
  /* stopping inside a layer: 100 MeV through skin and skull into 12 cm of brain stops in the brain */
  const sk = [{ m: 'skin', t: 0.5 }, { m: 'cortical', t: 0.7 }, { m: 'brain', t: 12 }], z = c.stopDepth(V, { T: 100, layers: sk });
  assert(z > 1.2 && z < 13.2, `skull ${z}`); near(z, 1.2 + V.range(V.after(V.after(100, 0.55, 'skin'), 0.7 * 1.85, 'cortical'), 'brain') / 1.03, 1e-12, 'in the brain');
  assert(c.depthSpan(V, { T: 100, layers: sk }) < 13.2, 'the depth shown ends past the stop, not at the end of the brain');
  /* zero thickness layers are no layers */
  assert.deepEqual(c.layerEdges([{ m: 'skin', t: 0 }, { m: 'muscle', t: 2 }, { m: 'lung', t: 0 }]), [0, 2]);
  near(c.stopDepth(V, { T: 150, layers: [{ m: 'skin', t: 0 }] }), V.range(150, 'water'), 1e-12, 'zero');
});

group('body layers: the energy budget adds up to the beam energy', () => {
  const chest = [{ m: 'skin', t: 0.2 }, { m: 'adipose', t: 1 }, { m: 'muscle', t: 1.5 }, { m: 'cortical', t: 0.8 }, { m: 'lunginf', t: 6 }];
  for (const o of [{ T: 150, nuclear: false, layers: chest }, { T: 150, nuclear: false, straggle: false, layers: chest }, { T: 70, nuclear: false, layers: [{ m: 'skin', t: 0.5 }, { m: 'cortical', t: 0.7 }, { m: 'brain', t: 12 }] },
    { T: 150 * 12, p: 'carbon', layers: chest }, { T: 100, nuclear: false, straggle: false }]) {
    const B = c.layerBudget(V, o, c.depthSpan(V, o)), tot = B.reduce((a, q) => a + q.E, 0);
    near(tot, o.T, 2e-3, `sum ${JSON.stringify(o).slice(0, 60)}`);   /* each layer's stopping power ratio is taken at one energy: 0.1 % */
    for (const q of B) assert(q.E >= 0 && isFinite(q.E), 'each layer');
  }
  /* with straggling off the budget is integrated in √r: it agrees with the smooth curve's to 0.1 % */
  const o = { T: 150, layers: [{ m: 'skin', t: 0.2 }, { m: 'adipose', t: 1 }] }, a = c.layerBudget(V, Object.assign({ straggle: false }, o), 19), b = c.layerBudget(V, o, 19);
  for (let k = 0; k < 2; k++) near(a[k].E, b[k].E, 1e-3, `thin layer ${k}`);
  /* nuclear reactions: the energy carried away is (1 − γ) of what the removed protons carried; between 3 and 6 % of 150 MeV here */
  const away = 150 - b.reduce((s, q) => s + q.E, 0); assert(away > 0.03 * 150 && away < 0.06 * 150, `away ${away}`);
  /* the first layer's mean dose equals the curve's entrance dose times the skin to water ratio (1 % over 2 mm) */
  const d0 = V.dose(Object.assign({ zmax: 1, dz: 0.001 }, o)).d[0]; near(b[0].E / (1.1 * 0.2), d0, 0.01, 'skin dose');
});

group('body layers: a track split by layer conserves energy', () => {
  let s = 7; const rng = () => (s = (s * 16807) % 2147483647) / 2147483647;
  const lay = [{ m: 'skin', t: 0.2 }, { m: 'cortical', t: 0.8 }, { m: 'lunginf', t: 6 }], edges = c.layerEdges(lay), acc = new Float64Array(edges.length); let carried = 0;
  for (let i = 0; i < 100; i++) { const t = V.track({ T: 150, layers: lay, zmax: 30 }, rng); c.splitTrack(t, edges, acc, V.GAMMA); const last = t.pts[t.pts.length - 1][2]; carried += t.absorbed ? (1 - V.GAMMA) * last : last; }
  near(acc.reduce((a, b) => a + b, 0) + carried, 150 * 100, 1e-9, 'energy');
});

group('vdstop dose() with z0 gives the same curve at the same depths', () => {
  const lay = [{ m: 'cortical', t: 1 }], A = V.dose({ T: 150, layers: lay, zmax: 20, dz: 0.05 }), B = V.dose({ T: 150, layers: lay, z0: 10, zmax: 20, dz: 0.05 });
  for (let i = 0; i < B.d.length; i += 10) near(B.d[i], A.d[200 + i], 1e-9, `z ${B.z[i]}`);
});

console.log(`${n} groups passed`);
