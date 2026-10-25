'use strict';
// The Bragg Peak: the measured 6 MV photon curve, the spread out peak's layers and weights, and the reading helpers, on the shared core.
const assert = require('node:assert');
const path = require('node:path');
const { core } = require('./demo_source.cjs');
const V = require(path.join(__dirname, '../../demos/lib/vdstop.js'));
const c = core('bragg-peak', 'PDD_PTS,PH,photonPDD,layerList,sobpWeights,meanOver,readAt,distalAt,proximalAt');

let n = 0;
const within = (a, b, d, w) => assert(Math.abs(a - b) <= d, `${w || ''}: expected ${b} ± ${d}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('6 MV photons: the fitted curve passes within 0.05 % of the measured points, with d_max at 1.5 cm', () => {
  assert.deepEqual(c.PDD_PTS, [[0, 50.7], [1.5, 100], [6.6, 80], [10, 66.8], [15.2, 50]]);
  for (const [d, v] of c.PDD_PTS) within(c.photonPDD(d), v, 0.06, `PDD(${d})`);
  let dm = 0, best = 0; for (let d = 0; d <= 4; d += 0.001) if (c.photonPDD(d) > best) { best = c.photonPDD(d); dm = d; }
  within(dm, 1.5, 0.05, 'd_max (cm)'); within(best, 100, 1e-6, 'maximum');
  /* BJR Supplement 25 reference: 67.5 % at 10 cm and 80 % at 6.7 cm; the VitalBeam beam is within 1 % of them */
  within(c.photonPDD(10), 67.5, 1, 'D10 against BJR 25'); within(c.photonPDD(6.7), 80, 1, 'd80 against BJR 25');
  for (let d = 2; d < 30; d += 0.5) assert(c.photonPDD(d + 0.5) < c.photonPDD(d), 'falls past d_max');
});

group('energy layers: from one straggling width past the target down to its near edge, at the CSDA energies', () => {
  const L = c.layerList(V, { m: 'water', zp: 10, zd: 15, step: 0.3 });
  assert.equal(L.length, 18);
  within(L[0].R - 15, V.sigmaR(V.energy(15, 'water'), 'water'), 1e-9, 'deepest layer offset');
  assert(L[L.length - 1].R >= 10 - 1e-9 && L[L.length - 1].R < 10.3, 'shallowest layer at the near edge');
  for (const l of L) within(V.range(l.E, 'water'), l.R, 1e-6, 'energy from range');
  for (let k = 1; k < L.length; k++) within(L[k - 1].R - L[k].R, 0.3, 1e-9, 'spacing');
  /* in bone, ranges are physical depths: R ρ is the range in g/cm² */
  const B = c.layerList(V, { m: 'bone', zp: 5, zd: 8, step: 0.5 }); for (const l of B) within(V.range(l.E, 'bone'), l.R * 1.85, 1e-6, 'bone');
});

group('spread out peak: fitted weights flat to within 2.5 % over the target, distal 90 % at its end, deepest layer heaviest', () => {
  const zmax = 20, L = c.layerList(V, { m: 'water', zp: 10, zd: 15, step: 0.3 }), C = L.map((l) => V.dose({ T: l.E, dz: zmax / 600, zmax, ns: 64 }));
  const z = C[0].z, s = c.sobpWeights(C.map((x) => x.d), z, 10, 15, 'fit', 3000);
  let mn = Infinity, mx = 0; for (let i = 0; i < z.length; i++) if (z[i] >= 10 && z[i] <= 15) { mn = Math.min(mn, s.d[i]); mx = Math.max(mx, s.d[i]); }
  assert(mn > 0.975 && mx < 1.025, `flat: ${mn} to ${mx}`); within(c.meanOver(Array.from(z), Array.from(s.d), 10, 15), 1, 0.002, 'mean over the target');
  within(c.distalAt(Array.from(z), Array.from(s.d), 0.9), 15, 0.15, 'distal 90 %');
  for (const w of s.w) assert(w >= 0, 'weights stay positive'); assert.equal(s.w.indexOf(Math.max(...s.w)), 0, 'deepest heaviest');
  /* entrance dose about 60 % of the target dose for a 5 cm modulation ending at 15 cm */
  assert(s.d[0] > 0.55 && s.d[0] < 0.7, `entrance ${s.d[0]}`);
  /* equal weights: the dose leans toward the front */
  const e = c.sobpWeights(C.map((x) => x.d), z, 10, 15, 'equal'); assert(c.readAt(z, e.d, 10.5) > 1.2 * c.readAt(z, e.d, 14.5), 'equal weights tilt');
  /* a wider target costs more entrance dose */
  const ent = [13, 9, 5].map((zp) => { const LL = c.layerList(V, { m: 'water', zp, zd: 15, step: 0.3 }), CC = LL.map((l) => V.dose({ T: l.E, dz: zmax / 600, zmax, ns: 64 }));
    return c.sobpWeights(CC.map((x) => x.d), CC[0].z, zp, 15, 'fit', 3000).d[0]; });
  assert(ent[0] < ent[1] && ent[1] < ent[2], `entrance rises with width: ${ent}`);
});

group('reading helpers: interpolation, mean, distal and proximal levels', () => {
  const z = [0, 1, 2, 3, 4], d = [0.2, 0.6, 1.0, 0.5, 0];
  within(c.readAt(z, d, 1.5), 0.8, 1e-12, 'readAt'); within(c.meanOver(z, d, 0, 2), 0.6, 1e-12, 'meanOver');
  within(c.distalAt(z, d, 0.75), 2.5, 1e-12, 'distal'); within(c.proximalAt(z, d, 0.8), 1.5, 1e-12, 'proximal');
});

console.log(`${n} groups passed`);
