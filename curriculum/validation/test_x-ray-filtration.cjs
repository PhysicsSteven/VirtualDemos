'use strict';
// Shells and X-Rays, tube view: filtration, air kerma and half value layer (Medical Physics module). Since 2026-10-26 the tube uses
// the shared SpekPy spectra and XCOM / SRD 126 data in photondata.js, as Photon Interactions does; the spectra themselves are checked
// against SpekPy in test_shells-and-x-rays.cjs. This file keeps the filtration checks: the data, the HVL definition, beam hardening
// and the 21 CFR table.
const assert = require('node:assert'), vm = require('node:vm');
const { core, readLib } = require('./demo_source.cjs');
const c = core('shells-and-x-rays', 'useData,muRhoZ,muEnAir,filterT,airKerma,hvl,meanEnergy,beamOK,CFR_HVL,RHO_AL');
const dctx = {}; vm.runInNewContext(readLib('photondata.js'), dctx, { timeout: 5000 }); c.useData(dctx.VDPHOTON);
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('data: XCOM μ/ρ near NIST SRD 126 at its grid points, jumps at the K edges; μ_en/ρ of air from SRD 126', () => {
  near(c.muRhoZ(13, 30), 1.128, 0.005, 'Al 30 keV'); near(c.muRhoZ(29, 100), 0.4584, 0.005, 'Cu 100 keV'); near(c.muEnAir(60), 0.03041, 1e-6, 'air 60 keV');
  assert(c.muRhoZ(29, 8.97) < 40 && c.muRhoZ(29, 8.99) > 270, 'Cu K edge 8.9789 keV');
  assert(c.muRhoZ(13, 1.55) < 400 && c.muRhoZ(13, 1.57) > 3800, 'Al K edge 1.5596 keV');
});
group('filter transmission e^(−(μ/ρ)ρx): 1 mm Al at 30 keV', () => near(c.filterT(30000, 1, 0), Math.exp(-c.muRhoZ(13, 30) * c.RHO_AL * 0.1), 1e-12));
group('HVL definition: K(al + HVL) = K(al)/2; HVL₁ 2.74 mm Al at 80 kV behind 2.5 mm Al (SpekPy 2.743); hardening with filtration and voltage', () => {
  const h = c.hvl(74, 80, 2.5, 0);
  near(c.airKerma(74, 80, 2.5 + h.h1, 0) / c.airKerma(74, 80, 2.5, 0), 0.5, 1e-6, 'half');
  near(c.airKerma(74, 80, 2.5 + h.h1 + h.h2, 0) / c.airKerma(74, 80, 2.5, 0), 0.25, 1e-6, 'quarter');
  near(h.h1, 2.7426, 0.003, 'HVL₁'); near(h.h1 / h.h2, 2.7426 / 4.0944, 0.005, 'homogeneity 0.670');
  let last = 0; for (const al of [1, 2, 3, 4, 6]) { const v = c.hvl(74, 80, al, 0).h1; assert(v > last, 'more aluminum, harder'); last = v; }
  last = 0; for (const kV of [50, 60, 70, 80, 90, 100]) { const v = c.hvl(74, kV, 2.5, 0).h1; assert(v > last, 'higher voltage, harder'); last = v; }
  assert(c.hvl(74, 80, 2.5, 0.1).h1 > h.h1 + 1, '0.1 mm Cu hardens strongly');
  assert(c.meanEnergy(74, 80, 4, 0) > c.meanEnergy(74, 80, 2.5, 0), 'filtration raises the mean energy');
});
group('21 CFR 1020.30 table, systems made on or after 2006-06-10; at 80 kV, 2.5 mm Al alone falls short of 2.9 mm', () => {
  assert.equal(c.CFR_HVL[80], 2.9); assert.equal(c.CFR_HVL[100], 3.6); assert.equal(c.CFR_HVL[60], 1.5);
  assert(c.hvl(74, 80, 2.5, 0).h1 < c.CFR_HVL[80], 'HVL₁ 2.74 < 2.9: 2.5 mm Al alone falls short at 80 kV');
});
console.log(`${n} groups passed`);
