'use strict';
// Charged Particles in Matter: the demo's PSTAR table, depth span, track dose bins and the readings it builds on the shared core.
const assert = require('node:assert');
const path = require('node:path');
const { core } = require('./demo_source.cjs');
const V = require(path.join(__dirname, '../../demos/lib/vdstop.js'));
const c = core('charged-particles', 'PSTAR_MM,depthSpan,depositTrack,stats,doseAt,at');

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

console.log(`${n} groups passed`);
