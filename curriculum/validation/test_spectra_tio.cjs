'use strict';
// Spectra Explorer, Hydrogen in stars: titanium oxide in cool stars from chemical equilibrium (NIST-JANAF dissociation constants,
// Asplund et al. 2009 abundances). Checks the fits against the JANAF tables, conservation of every element, and the limits.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('spectra', 'TIO_LOGK,TIO_EPS,TIO_PG,TIO_BANDS,tioLogK,tioChem,tioTrans,tioDepth,hsShares,hsPeak');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);

/* log₁₀K (N/m² to the power Δn) worked straight from the NIST-JANAF tables (Chase 1998) as copied in chemcat 1.0.0:
   ΔG° = Σν[ΔfH°(298.15) − T·gef(T)], at 2000, 3000, 3500, 4000, 5000 and 6000 K */
const JANAF = {
  H2: [-0.5765, 3.3979, 4.5434, 5.4059, 6.6174, 7.4265],
  CO: [-16.1619, -6.6460, -3.9165, -1.8640, 1.0207, 2.9554],
  OH: [-0.7225, 3.1792, 4.3047, 5.1530, 6.3486, 7.1524],
  H2O: [-2.2905, 6.1085, 8.5233, 10.3398, 12.8916, 14.5999],
  TiO: [-6.3929, -0.4555, 1.2613, 2.5607, 4.4073, 5.6660],
  TiO2: [-9.9762, 1.3221, 4.5762, 7.0326, 10.5097, 12.8675],
  TiI: [-9.8010, -3.6129, -1.8110, -0.4464, 1.4862, 2.7900]
};
const TS = [2000, 3000, 3500, 4000, 5000, 6000];

test('the log K fits match the JANAF tables within 0.002 dex from 2000 to 6000 K', () => {
  for (const k in JANAF) TS.forEach((T, i) => near(C.tioLogK(k, T), JANAF[k][i], 0.002, `${k} at ${T} K`));
});
test('TiO: dlog₁₀K/dθ near −D₀ in eV (JANAF D₀ = 6.88 eV; measured 6.87 ± 0.07 eV), and above 6000 K a straight line in θ', () => {
  const s = (T1, T2) => (C.tioLogK('TiO', T2) - C.tioLogK('TiO', T1)) / (5040 / T2 - 5040 / T1);
  const sl = s(3000, 3100);   /* the reaction enthalpy at 3000 K, a little above D₀ */
  assert(sl < -6.7 && sl > -7.3, `slope ${sl}`);
  near(s(8000, 9000), s(10000, 20000), 1e-9, 'straight line above 6000 K');
  near(C.tioLogK('TiO', 6000.0001), C.tioLogK('TiO', 5999.9999), 1e-5, 'continuous at 6000 K');
});
test('every element is conserved: titanium shares and oxygen shares add to 1', () => {
  for (const T of [3000, 3500, 4000, 5000, 5772, 9500, 30000]) for (const Pe of [1, 20, 1000]) {
    const r = C.tioChem(T, Pe);
    near(r.tio + r.ti + r.tiII + r.tio2, 1, 1e-12, `Ti at ${T} K`);
    const oTi = C.TIO_EPS.Ti / C.TIO_EPS.O * (r.tio + 2 * r.tio2);
    near(r.oFree + r.oCO + r.oOH + r.oH2O + oTi, 1, 1e-9, `O at ${T} K, Pe ${Pe}`);
  }
});
test('the gas pressure adds up: p_H + p_H2 + p_He = Pg (trace elements left out)', () => {
  for (const T of [3000, 4000, 6000]) { const r = C.tioChem(T, 20), PN = r.pH + 2 * r.pH2; near((r.pH + r.pH2 + C.TIO_EPS.He * PN) / C.TIO_PG, 1, 1e-12); }
});
test('cool gas: CO takes all the carbon (C/O = 0.55), so TiO forms from the oxygen left over', () => {
  const r = C.tioChem(3000, 20);
  near(r.oCO, C.TIO_EPS.C / C.TIO_EPS.O, 1e-3);
  assert(r.oH2O > 0.2, `water holds ${r.oH2O} of the oxygen at 3000 K`);
});
test('TiO is strong in M stars, weak in K stars, gone in the Sun and hotter stars (Pe = 20 N/m², Pg = 10⁴ N/m²)', () => {
  const f = (T) => C.tioChem(T, 20).tio;
  assert(f(3000) > 0.3 && f(3000) < 0.5, `3000 K ${f(3000)}`);
  assert(f(3500) > 0.05 && f(3500) < 0.1, `3500 K ${f(3500)}`);
  assert(f(4000) > 1e-3 && f(4000) < 1e-2, `4000 K ${f(4000)}`);
  assert(f(5772) < 1e-5, `Sun ${f(5772)}`);
  let last = 1; for (let T = 3000; T <= 30000; T *= 1.02) { const v = f(T); assert(v < last, `not falling at ${T}`); last = v; }
  near(C.tioDepth(3000, 20), 1, 1e-12, 'darkest at 3000 K');
  assert(C.tioDepth(3500, 20) > 0.6 && C.tioDepth(3800, 20) > 0.2 && C.tioDepth(4000, 20) < 0.1, 'M strong, late K faint');
  assert(C.tioDepth(4100, 20) === 0 && C.tioDepth(5772, 20) === 0 && C.tioDepth(9500, 20) === 0, 'gone above about 4000 K');
});
test('titanium itself ionizes in hotter stars (6.83 eV), more so at low electron pressure', () => {
  assert(C.tioChem(3000, 20).tiII < 1e-4 && C.tioChem(5772, 20).tiII > 0.9);
  assert(C.tioChem(5000, 1).tiII > C.tioChem(5000, 100).tiII);
  assert(C.tioChem(5000, 100).tio > C.tioChem(5000, 1).tio, 'more electrons, more neutral Ti, more TiO');
});
test('more gas pressure makes more molecules', () => {
  assert(C.tioChem(3500, 20, 1e5).tio > C.tioChem(3500, 20, 1e4).tio && C.tioChem(3500, 20, 1e4).tio > C.tioChem(3500, 20, 1e3).tio);
});
test('band heads: in order, inside 450 to 720 nm, each a sharp violet edge fading to the red', () => {
  for (let i = 1; i < C.TIO_BANDS.length; i++) assert(C.TIO_BANDS[i][0] > C.TIO_BANDS[i - 1][0]);
  for (const [h] of C.TIO_BANDS) {
    assert(h > 450 && h < 720);
    near(C.tioTrans(h - 0.01, 1) / C.tioTrans(h + 0.01, 1), 1 / 0.2, 2.5, `edge at ${h}`);
  }
  near(C.tioTrans(600, 0), 1, 0); near(C.tioTrans(440, 1), 1, 0);
});
test('the hydrogen numbers are untouched (Carroll and Ostlie peak near 9900 K)', () => {
  near(C.hsPeak(20), 9900, 60);
});
console.log(`${n} tests passed`);
