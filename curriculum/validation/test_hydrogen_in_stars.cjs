'use strict';
// Spectra Explorer, Hydrogen in stars: Boltzmann and Saha populations of hydrogen (Carroll and Ostlie §8.1).
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('spectra', 'HS_K,HS_H,HS_ME,HS_EV,HS_CHI,hsBoltz,hsSaha,hsShares,hsPeak');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);

test('Boltzmann: N₂/N₁ = 4 e^(−10.2 eV/kT); 4 at very high T; Carroll and Ostlie give 5.06e-9 at 5777 K (10.2 eV)', () => {
  near(C.hsBoltz(1e12), 4, 1e-6);
  near(C.hsBoltz(5777) / 5.06e-9, 1, 0.03);
  near(Math.log(C.hsBoltz(10000) / 4) * C.HS_K * 10000 / C.HS_EV, -0.75 * 13.598434, 1e-9);
});
test('Saha: N_II/N_I = 1 near 9500 K at Pe = 20 N/m², and goes as 1/Pe', () => {
  let lo = 7000, hi = 12000; for (let i = 0; i < 60; i++) { const m = (lo + hi) / 2; if (C.hsSaha(m, 20) < 1) lo = m; else hi = m; }
  assert(lo > 9200 && lo < 9800, `half ionized at ${lo}`);
  near(C.hsSaha(8000, 2) / C.hsSaha(8000, 20), 10, 1e-9);
});
test('the shares add to 1 and N₂/N_total peaks near 9900 K at Pe = 20 N/m² (Carroll and Ostlie)', () => {
  for (const T of [4000, 9900, 25000]) { const s = C.hsShares(T, 20); near(s.f1 + s.f2 + s.fion, 1, 1e-12); }
  near(C.hsPeak(20), 9900, 60);
});
test('more electron pressure pushes ionization and the Balmer peak to hotter stars', () => {
  assert(C.hsPeak(2) < C.hsPeak(20) && C.hsPeak(20) < C.hsPeak(200));
  assert(C.hsShares(C.hsPeak(200), 200).f2 > C.hsShares(C.hsPeak(20), 20).f2);
});
console.log(`${n} tests passed`);
