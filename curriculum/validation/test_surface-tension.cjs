'use strict';
/* Surface Tension and Capillarity: the constants against constants.js, capillary rise and the book's tree sap example, the gauge
   pressure in drops and bubbles (the soap bubble example in College Physics 2e 11.8: 740 Pa), two connected bubbles, the Washburn rise, the needle and
   the sliding wire, and the exact meniscus against a wall. */
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const C = core('surface-tension', 'G,MMHG,LIQ,METAL,capRise,capLength,washA,washT,washH,dropP,bubbleP,capR,capV,capH,capHofR,pipeK,bubblesStep,needleW,holdMax,tilt,dMax,menZ,menX,filmF,wireMass');
const near = (a, b, rel, msg) => assert.ok(Math.abs(a - b) <= rel * Math.abs(b) + 1e-300, `${msg}: ${a} against ${b} (allowed ${rel * 100}%)`);
let n = 0; const ok = (s) => { n++; console.log(`ok ${n} ${s}`); };

/* 1. constants equal demos/lib/constants.js */
{
  near(C.G, VDC.g, 0, 'g'); near(C.MMHG, VDC.mmHg, 0, 'mm Hg');
  const L = C.LIQ;
  near(L.water20.gam, VDC.gamWater20, 0, 'water 20 °C'); near(L.water0.gam, VDC.gamWater0, 0, 'water 0 °C'); near(L.water100.gam, VDC.gamWater100, 0, 'water 100 °C');
  near(L.soap.gam, VDC.gamSoap, 0, 'soapy water'); near(L.ethanol.gam, VDC.gamEthanol, 0, 'ethanol'); near(L.glycerin.gam, VDC.gamGlycerin, 0, 'glycerin');
  near(L.olive.gam, VDC.gamOlive, 0, 'olive oil'); near(L.mercury.gam, VDC.gamHg, 0, 'mercury'); near(L.blood.gam, VDC.gamBlood, 0, 'blood');
  near(L.tissue.gam, VDC.gamTissue, 0, 'tissue fluid'); near(L.plasma.gam, VDC.gamPlasma, 0, 'plasma'); near(L.sap.gam, VDC.gamWater20, 0, 'sap taken as water');
  assert.equal(L.mercury.th.glass, VDC.thHgGlass); assert.equal(L.water20.th.glass, 0, 'water on glass: 0° (Table 11.4)');
  assert.equal(L.water20.th.paraffin, VDC.thWaterParaffin); assert.equal(L.water20.th.silver, VDC.thWaterSilver);
  ok('surface tensions and contact angles equal constants.js');
}

/* 2. capillary rise: water climbs, mercury sinks, h grows as 1/r; the book's tree sap example and its xylem problem */
{
  const w = C.LIQ.water20;
  near(C.capRise(w.gam, 0, w.rho, 0.25e-3), 0.05937, 1e-3, 'water in a 0.25 mm glass tube');
  near(C.capRise(w.gam, 0, w.rho, 0.5e-3) * 2, C.capRise(w.gam, 0, w.rho, 0.25e-3), 1e-12, 'half the radius, twice the height');
  assert.ok(C.capRise(C.LIQ.mercury.gam, 140, C.LIQ.mercury.rho, 1e-3) < 0, 'mercury is pushed down');
  assert.equal(C.capRise(w.gam, 90, w.rho, 1e-3), 0, 'silver, 90°: flat, exactly (the readouts show 0, not 10⁻¹² μm)');
  const s = C.LIQ.sap;
  near(2 * s.gam / (s.rho * C.G * 100), 1.41e-7, 3e-3, 'radius that would lift sap 100 m (book: 1.41e-7 m)');
  near(C.capRise(s.gam, 0, s.rho, 2.5e-5), 0.565, 1e-3, 'xylem of radius 2.50e-5 m lifts sap 0.565 m');
  near(C.capRise(w.gam, 107, w.rho, 1e-3) / C.capRise(w.gam, 0, w.rho, 1e-3) * 5.00, -1.46, 3e-3, 'water 5.00 cm in glass: -1.46 cm in paraffin');
  near(C.capLength(w.gam, w.rho), 2.724e-3, 1e-3, 'capillary length of water');
  ok('h = 2γcosθ/(ρgr): 59.4 mm, 0.565 m sap, mercury down, paraffin -1.46 cm');
}

/* 3. drops and bubbles: P = 2γ/r and 4γ/r; Example: 740 Pa = 5.55 mm Hg (book 5.56 with 133 Pa per mm Hg) */
{
  const P = C.bubbleP(C.LIQ.soap.gam, 2.00e-4);
  near(P, 740, 1e-12, 'soap bubble of radius 0.200 mm'); near(P / C.MMHG, 5.55, 1e-3, 'in mm Hg');
  near(C.bubbleP(0.037, 2.5e-4), 592, 1e-12, 'alveolus of radius 0.250 mm as a soap bubble');
  near(C.bubbleP(0.037, 0.015), 9.87, 1e-3, '1.50 cm bubble'); near(C.bubbleP(0.037, 0.04), 3.70, 1e-12, '4.00 cm bubble');
  near(C.dropP(0.0728, 1e-6), 145600, 1e-12, 'fog droplet of radius 1 μm');
  near(C.dropP(0.0728, 1e-3) * 2, C.bubbleP(0.0728, 1e-3), 1e-15, 'a bubble has two surfaces');
  ok('740 Pa = 5.55 mm Hg, 592 Pa alveolus, 9.87 and 3.70 Pa, 146 kPa fog droplet');
}

/* 4. spherical caps and two bubbles on a pipe: the small one empties into the big one, air is conserved */
{
  const a = 2e-3;
  for (const h of [1e-4, 1e-3, 2e-3, 5e-3]) near(C.capH(a, C.capV(a, h)), h, 1e-9, 'cap height from volume');
  near(C.capR(a, a), a, 1e-12, 'a half sphere has R = a');
  near(C.capHofR(a, 0.01), 0.01 + Math.sqrt(1e-4 - a * a), 1e-12, 'the bigger cap');
  const st = { V1: C.capV(a, C.capHofR(a, 0.015)), V2: C.capV(a, C.capHofR(a, 0.04)) }, V = st.V1 + st.V2, k = C.pipeK(a, 0.1);
  for (let i = 0; i < 4000; i++) C.bubblesStep(st, 0.037, a, k, 0.05);
  near(st.V1 + st.V2, V, 1e-9, 'air conserved');
  assert.ok(C.capH(a, st.V1) < a * 1.01, `small bubble emptied to a flat film or less: h ${C.capH(a, st.V1)}`);
  ok('caps invert; small bubble empties into the big one; air conserved');
}

/* 5. Washburn rise with gravity: t(h) and h(t) are inverses, it ends at the static height, and t90 for water in 0.25 mm glass */
{
  const w = C.LIQ.water20, H = C.capRise(w.gam, 0, w.rho, 0.25e-3), A = C.washA(0.25e-3, w.eta, w.rho);
  for (const f of [0.1, 0.5, 0.9, 0.99]) near(C.washH(C.washT(f * H, H, A), H, A), f * H, 1e-9, `h(t(h)) at ${f}`);
  near(C.washH(1e6, H, A), H, 1e-9, 'ends at the static height');
  near(C.washT(0.9 * H, H, A), 1.09, 0.01, 't90 for water, r = 0.25 mm');
  ok('Washburn: inverse pair, settles at h, t90 = 1.09 s');
}

/* 6. needle and sliding wire: weight against 2γL, the largest steel needle, F = 2γl for the ethanol film */
{
  const w = C.needleW(C.METAL.steel, 1e-3, 0.04);
  near(w, 2.404e-3, 1e-3, '1 mm by 4 cm steel needle'); near(C.holdMax(0.0728, 0.04), 5.824e-3, 1e-12, '2γL');
  near(Math.sin(C.tilt(w, 0.0728, 0.04)), w / 5.824e-3, 1e-12, 'w = 2γL sin(tilt)');
  assert.ok(Number.isNaN(C.tilt(1, 0.0728, 0.04)), 'too heavy: no tilt holds it');
  near(C.dMax(0.0728, C.METAL.steel), 1.557e-3, 1e-3, 'largest steel needle diameter on water');
  near(C.needleW(C.METAL.steel, C.dMax(0.0728, 7800), 0.04), C.holdMax(0.0728, 0.04), 1e-12, 'at dMax the weight equals 2γL');
  near(C.filmF(C.LIQ.ethanol.gam, 0.035), 1.561e-3, 1e-3, 'ethanol film on a 3.50 cm wire');
  ok('needle 2.40 mN against 5.82 mN, dmax 1.56 mm, ethanol wire 1.56 mN');
}

/* 7. the meniscus against a wall: slope tan(φ) everywhere, and height √2 lc for θ = 0 */
{
  const lc = 2.724e-3;
  near(C.menZ(lc, Math.PI / 2), Math.SQRT2 * lc, 1e-12, 'height at a wetted wall');
  for (const ph of [0.2, 0.7, 1.2, 1.5]) { const e = 1e-6, dz = C.menZ(lc, ph + e) - C.menZ(lc, ph - e), dx = C.menX(lc, ph + e) - C.menX(lc, ph - e); near(dz / dx, Math.tan(ph), 1e-6, `slope at φ = ${ph}`); }
  ok('meniscus: slope tan φ, wall height √2 lc');
}
console.log(`all ${n} groups passed`);
