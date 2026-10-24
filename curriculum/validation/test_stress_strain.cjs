'use strict';
// Stress and Strain: Hooke's law region, yield, permanent set on unloading, fracture, and the Y fit.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('stress-strain', 'G,LEN,SS_VERSION,MATS,flow,invFlow,loadAt,area,extension,fitLine,readingsCSV,SB_MATS,SHEAR_SOLIDS,BULK_LIQUIDS,BULK_SOLIDS,SH_L,SH_A,SH_FMAX,CELL_D,CELL_H,CUBE_A,CELL_A,BULK_FMAX,shearDx,bulkDp,volStrain,pistonDx,cubeStrain,sbCSV');
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
group('shear and bulk moduli are OpenStax Vol. 1 Table 12.1 (×10¹⁰ Pa)', () => {
  const T = { aluminium: [2.5, 7.5], brass: [3.5, 6.0], copper: [4.4, 14.0], steel: [7.5, 16.0], lead: [0.6, 4.1], glass: [2.5, 5.0], granite: [2.0, 4.5] };
  for (const [k, [Sm, Bm]] of Object.entries(T)) { near(c.SB_MATS[k].S, Sm * 1e10, 1e-12, k + ' S'); near(c.SB_MATS[k].B, Bm * 1e10, 1e-12, k + ' B'); }
  const L = { water: 0.22, ethanol: 0.09, acetone: 0.07, glycerin: 0.45, mercury: 2.5 };
  for (const [k, Bm] of Object.entries(L)) { near(c.SB_MATS[k].B, Bm * 1e10, 1e-12, k); assert(c.SB_MATS[k].liquid); }
  assert(!c.SHEAR_SOLIDS.includes('lead'), 'lead would flow at 20 MPa of shear');
  for (const k of [...c.SHEAR_SOLIDS, ...c.BULK_SOLIDS, ...c.BULK_LIQUIDS]) assert(c.SB_MATS[k], k);
});
group('shear: S = (F/A)/(Δx/L) recovered; stress at full force is 20 MPa', () => {
  near(c.SH_FMAX / c.SH_A, 20e6, 1e-12);
  for (const k of c.SHEAR_SOLIDS) { const M = c.SB_MATS[k], F = 12345, dx = c.shearDx(F, M.S); near((F / c.SH_A) / (dx / c.SH_L), M.S, 1e-12, k); }
  near(c.shearDx(30e3, 2.5e10) * 1e6, 24.0, 1e-12, 'aluminium at 30 kN moves 24.0 µm');
});
group('bulk: Δp = F/A, ΔV/V₀ = −Δp/B, piston and cube readings consistent', () => {
  near(c.CELL_A, Math.PI * 0.02 ** 2, 1e-12); assert(c.BULK_FMAX / c.CELL_A < 20e6);
  const F = 20e3, w = c.SB_MATS.water;
  near(c.pistonDx(F, w.B) / c.CELL_H, (F / c.CELL_A) / w.B, 1e-12, 'piston fraction = Δp/B');
  near(c.pistonDx(F, w.B) * 1000, 0.7234, 1e-3, 'water at 20 kN: 0.723 mm');
  const st = c.SB_MATS.steel, e = c.cubeStrain(F, st.B);
  near((1 + e) ** 3 - 1, c.volStrain(F, st.B), 1e-12, 'cube edge cubed gives the volume');
  near(-e * 1e6, (F / c.CELL_A) / st.B / 3 * 1e6, 1e-4, 'Δa/a ≈ −Δp/(3B) for small strain');
  near(c.cubeStrain(0, st.B), 0, 1e-15);
});
group('shear and bulk CSV columns', () => {
  const L = c.sbCSV([{ test: 'shear', name: 'Aluminum', F: '30.00', dx: '24.0', pdx: '', ue: '' }, { test: 'bulk', name: 'Steel', F: '20.00', dx: '', pdx: '', ue: '-33.2' }], { version: c.SS_VERSION, material: 'Aluminum; Steel' }).trim().split('\n');
  const h = L.indexOf('row,test,sample,F_kN,shear_dx_um,piston_dx_mm,gauge_strain_ue'); assert(h > 0);
  assert.equal(L[h + 1], '1,shear,Aluminum,30.00,24.0,,'); assert.equal(L[h + 2], '2,bulk,Steel,20.00,,,-33.2');
});
console.log(`${n} stress-strain test groups passed`);
