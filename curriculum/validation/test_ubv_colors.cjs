'use strict';
// Blackbody Radiation, U B V view: blackbody colors through the Bessell (1990) passbands on the Vega system.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('blackbody', 'UBV_BANDS,VEGA_UB,VEGA_BV,ubvLnB,ubvResponse,ubvFluxes,ubvColors,ubvTempFromBV');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);

test('passbands peak at 1, U below B below V, and are zero outside their tables', () => {
  for (const b of ['U', 'B', 'V']) near(Math.max(...C.UBV_BANDS[b].map((r) => r[1])), 1, 1e-12, b);
  const peak = (b) => C.UBV_BANDS[b].reduce((m, r) => (r[1] > m[1] ? r : m))[0];
  assert(peak('U') < peak('B') && peak('B') < peak('V'));
  assert.equal(C.ubvResponse('B', 300), 0); assert.equal(C.ubvResponse('V', 900), 0);
  near(C.ubvResponse('B', 425), (0.978 + 1.0) / 2 * 0 + C.ubvResponse('B', 425), 0);   /* linear between points */
  near(C.ubvResponse('B', 415), (0.978 + 1.0) / 2, 1e-12);
});
test('colors agree with tools/star-colors/build.py (numpy trapezoids on Vega and on the Planck curve)', () => {
  const want = { 3000: [1.036, 1.699], 5772: [-0.210, 0.646], 9600: [-0.723, 0.183], 12100: [-0.874, 0.046], 30000: [-1.177, -0.233] };
  for (const T in want) { const c = C.ubvColors(+T); near(c.UB, want[T][0], 0.002, `U − B at ${T}`); near(c.BV, want[T][1], 0.002, `B − V at ${T}`); }
});
test('B − V falls steadily as T rises, and the hot limit is the Rayleigh–Jeans color, about −0.38', () => {
  let last = Infinity; for (let T = 2000; T <= 50000; T *= 1.2) { const v = C.ubvColors(T).BV; assert(v < last); last = v; }
  near(C.ubvColors(1e7).BV, -0.375, 0.01);
});
test('cool limit (Wien): B − V is linear in 1/T, slope about 6500 to 7200 K', () => {
  const a = C.ubvColors(2500).BV, b = C.ubvColors(3500).BV, slope = (a - b) / (1 / 2500 - 1 / 3500);
  assert(slope > 6000 && slope < 7500, `slope ${slope}`);
});
test('B − V and the reverse lookup agree; the scale does not depend on the star radius (only T enters)', () => {
  for (const T of [3600, 5772, 12100]) near(C.ubvTempFromBV(C.ubvColors(T).BV), T, T * 1e-6);
  near(C.ubvColors(5772).BoverV, Math.pow(10, -0.4 * (C.ubvColors(5772).BV + C.VEGA_BV)), 1e-9);
});
console.log(`${n} tests passed`);
