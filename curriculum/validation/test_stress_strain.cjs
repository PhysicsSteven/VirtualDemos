'use strict';
// Stress and Strain: Hooke's law region, yield, permanent set on unloading, fracture, and the Y fit.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('stress-strain', 'G,LEN,SS_VERSION,MATS,flow,invFlow,loadAt,area,extension,fitLine,readingsCSV');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('elastic: ΔL = FL/(AY) below the yield stress, and it returns to zero', () => {
  const M = c.MATS.steel, A = c.area(0.5), F = 3 * c.G, r = c.loadAt(M, F / A, 0);
  near(c.extension(r.e), F * c.LEN / (A * M.Y), 1e-12); assert.equal(r.ep, 0);
  near(A, Math.PI * 0.25e-6 / 4 * 1, 1e-15);
});
group('flow curve: starts at the yield stress, rises to the strength; invFlow inverts it', () => {
  for (const M of Object.values(c.MATS)) {
    near(c.flow(M, 0), M.sy, 1e-12); near(c.flow(M, 1), M.su, 1e-12);
    for (const s of [M.sy * 1.01, (M.sy + M.su) / 2, M.su * 0.999]) near(c.flow(M, c.invFlow(M, s)), s, 1e-9);
  }
});
group('past yield: permanent set; unloading follows the elastic slope; reloading stays elastic up to the new flow stress', () => {
  const M = c.MATS.copper, s = 150e6, r = c.loadAt(M, s, 0); assert(r.ep > 0);
  const off = c.loadAt(M, 0, r.ep); near(off.e, r.ep, 1e-15, 'set left at zero load'); near(r.e - off.e, s / M.Y, 1e-12, 'unloading slope Y');
  const again = c.loadAt(M, 140e6, r.ep); near(again.ep, r.ep, 1e-15, 'no new plastic strain below the old peak');
});
group('fracture at the tensile strength', () => { const M = c.MATS.aluminium; assert(c.loadAt(M, M.su, 0).broke); assert(!c.loadAt(M, M.su * 0.99, 0).broke); });
group('fit of F against ΔL recovers Y from exact elastic readings rounded like the dial', () => {
  const M = c.MATS.mystery, A = c.area(0.6), xs = [], ys = [];
  for (const m of [1, 2, 3, 4, 5]) { const F = m * c.G, dL = Math.round(c.extension(c.loadAt(M, F / A, 0).e) * 1e6) / 1e6; xs.push(dL); ys.push(F); }
  const fit = c.fitLine(xs, ys); near(fit.b * c.LEN / A, M.Y, 2e-3);
});
group('CSV: metadata and F from the mass', () => {
  const L = c.readingsCSV([{ m: '2.0', d: '0.50', dL: '0.999' }], { version: c.SS_VERSION, material: 'Mild steel' }).trim().split('\n');
  assert.equal(L[1], `# demo version,${c.SS_VERSION}`); const h = L.indexOf('row,m_kg,d_mm,dL_mm,F_N'); assert.equal(L[h + 1], '1,2.0,0.50,0.999,19.62');
});
console.log(`${n} stress-strain test groups passed`);
