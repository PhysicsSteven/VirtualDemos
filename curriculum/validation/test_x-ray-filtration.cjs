'use strict';
// Shells and X-Rays, tube view: filtration, air kerma and half value layer (Medical Physics module, 2026-10-25).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('shells-and-x-rays', 'tabLL,MU_AL,MU_CU,MUEN_AIR,filterT,airKerma,hvl,meanEnergy,CFR_HVL,kramersE');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('tables return NIST SRD 126 values at grid points and jump at the K edges', () => {
  near(c.tabLL(c.MU_AL, 30), 1.128, 1e-9); near(c.tabLL(c.MU_CU, 100), 0.4584, 1e-9); near(c.tabLL(c.MUEN_AIR, 60), 0.03041, 1e-9);
  assert(c.tabLL(c.MU_CU, 8.97) < 40 && c.tabLL(c.MU_CU, 8.99) > 270, 'Cu K edge 8.9789 keV');
  assert(c.tabLL(c.MU_AL, 1.55) < 400 && c.tabLL(c.MU_AL, 1.57) > 3800, 'Al K edge 1.5596 keV');
  const m = Math.sqrt(30 * 40); near(c.tabLL(c.MU_AL, m), Math.sqrt(1.128 * 0.5685), 1e-9, 'log–log midpoint');
});
group('filter transmission e^(−μρx): 1 mm Al at 30 keV', () => near(c.filterT(30000, 1, 0), Math.exp(-1.128 * 2.699 * 0.1), 1e-12));
group('HVL definition: K(al + HVL) = K(al)/2; HVL grows with filtration and voltage (beam hardening)', () => {
  const h = c.hvl(74, 80, 2.5, 0); near(c.airKerma(74, 80, 2.5 + h, 0) / c.airKerma(74, 80, 2.5, 0), 0.5, 1e-6);
  near(h, 2.20, 0.01, 'W 80 kV 2.5 mm Al');
  const h2 = c.hvl(74, 80, 2.5 + h, 0); assert(h2 > h, 'second HVL larger'); near(h / h2, 0.652, 0.01, 'homogeneity');
  let last = 0; for (const al of [1, 2, 3, 4, 6]) { const v = c.hvl(74, 80, al, 0); assert(v > last); last = v; }
  last = 0; for (const kV of [50, 60, 70, 80, 90, 100]) { const v = c.hvl(74, kV, 2.5, 0); assert(v > last); last = v; }
  assert(c.hvl(74, 80, 2.5, 0.1) > c.hvl(74, 80, 2.5, 0) + 1, '0.1 mm Cu hardens strongly');
});
group('21 CFR 1020.30 table, systems made on or after 2006-06-10', () => { assert.equal(c.CFR_HVL[80], 2.9); assert.equal(c.CFR_HVL[100], 3.6); assert.equal(c.CFR_HVL[60], 1.5); });
console.log(`${n} groups passed`);
