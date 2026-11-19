'use strict';
/* Diffusion and Osmosis: the constants against constants.js, x_rms = √(2Dt) and the book's glucose and cornea values (College Physics 2e
   12.7), the layer solution against Fick's law, van 't Hoff and the U tube, saline and the red cell, and the Starling forces. */
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const C = core('osmosis', 'RGAS,G,T0,MMHG,DIFF,xrms,tFor,layerC,layerQ,lagTime,erfc,fickJ,vantHoff,uEq,uDrive,MNACL,salineOsm,RBC_A,RBC_V0,RBC_B,sphereV,cellV,lysisOsm,capP,nfp,crossAt,meanNfp');
const near = (a, b, rel, msg) => assert.ok(Math.abs(a - b) <= rel * Math.abs(b) + 1e-300, `${msg}: ${a} against ${b} (allowed ${rel * 100}%)`);
let n = 0; const ok = (s) => { n++; console.log(`ok ${n} ${s}`); };

/* 1. constants equal demos/lib/constants.js */
{
  near(C.RGAS, VDC.NA * VDC.kB, 1e-15, 'R = NA kB'); near(C.RGAS, 8.314462618, 1e-9, 'R');
  near(C.G, VDC.g, 0, 'g'); near(C.MMHG, VDC.mmHg, 0, 'mm Hg'); near(C.T0, 273.15, 0, '0 °C');
  const D = C.DIFF;
  near(D.H2air, VDC.DH2air, 0, 'H2 in air'); near(D.O2air, VDC.DO2air, 0, 'O2 in air'); near(D.O2water, VDC.DO2water, 0, 'O2 in water');
  near(D.glucose, VDC.DGlucose, 0, 'glucose'); near(D.hemoglobin, VDC.DHemoglobin, 0, 'hemoglobin'); near(D.DNA, VDC.DDNA, 0, 'DNA');
  ok('diffusion constants, R, g, mm Hg equal constants.js');
}

/* 2. x_rms = √(2Dt): glucose takes 7.5e4 s = 21 h for 1.0 cm (book example); O2 through a 0.500 mm tear layer 125 s; perfume 1.41 mm in 1 s */
{
  const t = C.tFor(C.DIFF.glucose, 0.010);
  near(t, 7.46e4, 1e-3, 'glucose, 1.0 cm'); near(t / 3600, 20.7, 2e-3, 'in hours (book: 21 h)');
  near(C.tFor(C.DIFF.O2water, 0.500e-3), 125, 1e-12, 'cornea, 0.500 mm');
  near(C.tFor(C.DIFF.O2water, 0.200e-3), 20, 1e-12, 'cornea, 0.200 mm');
  near(C.xrms(1.00e-6, 1), 1.414e-3, 1e-3, 'perfume in 1 s');
  near(C.tFor(1e-9, 2e-3) / C.tFor(1e-9, 1e-3), 4, 1e-12, 'twice as far, four times as long');
  ok('glucose 21 h, cornea 125 s and 20 s, perfume 1.41 mm, t grows as x²');
}

/* 3. the layer: starts empty, ends straight, dQ/dt = −D ∂c/∂x at the far side, and Q tends to D t/L − L/6 (lag time L²/6D) */
{
  const D = 1e-9, L = 500e-6, tl = C.lagTime(D, L);
  near(tl, 41.67, 1e-3, 'lag time');
  assert.ok(C.layerC(L / 2, 1e-3, D, L) < 1e-6, 'empty at first');
  const ts = 0.02 * L * L / D;   /* where the code switches from the image form to the series: both agree */
  near(C.layerQ(ts * (1 - 1e-9), D, L), C.layerQ(ts * (1 + 1e-9), D, L), 1e-6, 'Q continuous at the switch');
  for (const x of [0.05, 0.2, 0.4]) assert.ok(Math.abs(C.layerC(x * L, ts * (1 - 1e-9), D, L) - C.layerC(x * L, ts * (1 + 1e-9), D, L)) < 1e-6, `c continuous at ${x}`);
  near(C.erfc(0.5), 0.4795001221869535, 1.2e-7, 'erfc(0.5)'); near(C.erfc(-1), 1.8427007929497148, 1.2e-7, 'erfc(-1)');
  for (const x of [0.1, 0.5, 0.9]) near(C.layerC(x * L, 50 * tl, D, L), 1 - x, 1e-9, `steady profile at ${x}`);
  for (const f of [0.5, 1, 2, 5]) {
    const t = f * tl, dt = 1e-3 * tl, dx = 1e-4 * L;
    const dQ = (C.layerQ(t + dt, D, L) - C.layerQ(t - dt, D, L)) / (2 * dt), flux = -D * (C.layerC(L, t, D, L) - C.layerC(L - dx, t, D, L)) / dx;
    near(dQ, flux, 2e-3, `flux at t = ${f} lag times`);
  }
  near(C.layerQ(50 * tl, D, L), D * 50 * tl / L - L / 6, 1e-9, 'late: straight line crossing at the lag time');
  near(C.fickJ(D, 1, L), D / L, 0, 'J = DΔC/L');
  ok('Crank layer: early image form joins the series, flux matches, lag time L²/6D');
}

/* 4. van 't Hoff and the U tube: 1 mmol/L sugar at 20 °C gives 2.44 kPa (24.8 cm of water); with dilution it stops at Δh = 18.9 cm */
{
  const T = 293.15, Pi = C.vantHoff(1, 1, T);
  near(Pi, 2437.4, 1e-4, 'Π = cRT'); near(Pi / (1000 * C.G), 0.2485, 1e-3, 'Π/ρg');
  const H0 = 0.30, x = C.uEq(1, 1, 0, T, H0, 1000, 0);
  assert.ok(Math.abs(C.uDrive(1, 1, 0, T, H0, 1000, 0, x)) < 1e-6, 'drive zero at equilibrium');
  near(2 * x, 0.189, 3e-3, 'Δh with dilution');
  assert.ok(2 * x < Pi / (1000 * C.G), 'dilution makes it stop lower than Π/ρg');
  near(C.uEq(2, 1, 0, T, H0, 1000, 0), C.uEq(1, 2, 0, T, H0, 1000, 0), 1e-9, 'salt (i = 2) acts like twice the sugar');
  assert.ok(Math.abs(C.uEq(1, 1, 1, T, H0, 1000, 0)) < 1e-15, 'same on both sides: nothing moves');
  assert.ok(C.uEq(1, 1, 0, T, H0, 1000, 4000) < 0, 'a piston above Π pushes water back: reverse osmosis');
  ok('Π = 2.44 kPa, column 24.8 cm, stops at 18.9 cm; i = 2; reverse osmosis');
}

/* 5. saline and the red cell: 0.9 % is 308 mOsm/L; the cell keeps V0 there, swells below, bursts at 158 mOsm/L (0.46 %) */
{
  near(C.salineOsm(0.9), 308.0, 1e-3, '0.9 % saline');
  const c0 = C.salineOsm(0.9);
  near(C.cellV(c0, c0), C.RBC_V0, 1e-12, 'isotonic: no change');
  assert.ok(C.cellV(c0, c0 / 2) > C.RBC_V0 && C.cellV(c0, 2 * c0) < C.RBC_V0, 'swells in hypotonic, shrinks in hypertonic');
  near(C.sphereV(C.RBC_A), 147.5, 1e-3, 'sphere of 135 μm²');
  const lys = C.lysisOsm(c0);
  near(C.cellV(c0, lys), C.sphereV(C.RBC_A), 1e-12, 'bursts when it reaches the sphere');
  near(lys, 158, 3e-3, 'burst osmolarity'); near(lys * C.MNACL / 20000, 0.46, 0.01, 'as % NaCl');
  near(C.cellV(c0, 1e9), C.RBC_V0 * C.RBC_B, 1e-6, 'in strong brine it shrinks to the solids');
  ok('308 mOsm/L; swell and shrink; bursts below 158 mOsm/L = 0.46 % NaCl');
}

/* 6. Starling: OpenStax A&P 2e 20.3 (35 and 18 mm Hg against 25): +10 and −7; Guyton's values: +13 and −7 */
{
  near(C.nfp(35, 0, 25, 0), 10, 0, 'arterial end'); near(C.nfp(18, 0, 25, 0), -7, 0, 'venous end');
  near(C.crossAt(35, 18, 0, 25, 0), 10 / 17, 1e-12, 'no net flow 10/17 of the way');
  near(C.nfp(30, -3, 28, 8), 13, 0, 'Guyton arterial'); near(C.nfp(10, -3, 28, 8), -7, 0, 'Guyton venous');
  near(C.meanNfp(35, 18, 0, 25, 0), 1.5, 1e-12, 'mean over the length');
  near(C.capP(35, 18, 0.5), 26.5, 0, 'halfway');
  ok('NFP +10/−7 (A&P), +13/−7 (Guyton), crossing at 59 %');
}
console.log(`all ${n} groups passed`);
