'use strict';
// Spectral Classes: Boltzmann and Saha for H, He, Ca, Na and Fe, the TiO equilibrium from spectra.html, Wien's law and the class
// boundaries. Known values from Carroll and Ostlie, An Introduction to Modern Astrophysics (2nd ed.), §8.1 (Balmer lines strongest
// near 9,900 K at P_e = 20 N/m²; hydrogen half ionized near 9,600 K), OpenStax Astronomy 2e Table 17.2, and the lesson plan.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('spectral-classes', 'KB,HP,ME,EV,WIEN,ELEM,saha,stages,boltz,LINES,absorbers,hShares,peakT,wienPeak,CLASSES,classOf,tioShare');
const sp = core('spectra', 'tioChem');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js', () => {
  for (const [k, v] of [['KB', 'kB'], ['HP', 'h'], ['ME', 'me'], ['EV', 'e'], ['WIEN', 'wienB']]) assert.strictEqual(c[k], VDC[v], k);
});

group('Boltzmann: N2/N1 for hydrogen is g2/g1 exp(−10.2 eV/kT): 5.0 × 10⁻⁹ in the Sun, 2.9 × 10⁻⁵ at 10,000 K', () => {
  near(c.boltz(5772, 10.19881, 8, 2), 4 * Math.exp(-10.19881 * c.EV / (c.KB * 5772)), 1e-12, 'formula');
  near(c.hShares(5772, 20).r21, 4.98e-9, 2e-3, 'Sun'); near(c.hShares(10000, 20).r21, 2.90e-5, 2e-3, '10,000 K');
});

group('Saha: hydrogen half ionized near 9,600 K at P_e = 20 N/m² (Carroll and Ostlie); shares add to 1', () => {
  near(c.hShares(9600, 20).fion, 0.522, 5e-3, '9,600 K');
  for (const el of Object.keys(c.ELEM)) for (const T of [3000, 6000, 12000, 30000]) near(c.stages(el, T, 20).reduce((a, b) => a + b, 0), 1, 1e-12, el);
  const h = c.hShares(7000, 20); near(h.f1 + h.f2 + h.fion, 1, 1e-12, 'hydrogen');
  assert(c.hShares(9600, 2).fion > c.hShares(9600, 200).fion, 'thinner gas ionizes more');
});

group('why hydrogen peaks at A: n = 2 hydrogen is largest at 9,870 K (C&O 9,900 K), lower in thinner gas, higher in denser', () => {
  const pk = c.peakT((T) => c.hShares(T, 20).f2); near(pk, 9900, 0.005, 'peak'); assert.strictEqual(c.classOf(pk), 'A');
  assert(c.peakT((T) => c.hShares(T, 1).f2) < pk && c.peakT((T) => c.hShares(T, 200).f2) > pk, 'pressure');
  near(c.peakT((T) => c.absorbers(c.LINES[0], T, 20)), pk, 1e-4, 'Balmer line peak');
});

group('Payne: Ca II in the Sun, Ca III by 12,000 K; He I lines peak in B stars, He II in O; Ca II absorbers near 6,300 K; Ca I, Na I and Fe I strongest cool', () => {
  const ca = c.stages('Ca', 5772, 20); assert(ca[1] > 0.98, 'Sun Ca II ' + ca[1]); assert(c.stages('Ca', 12000, 20)[2] > 0.99, 'Ca III');
  const L = (id) => c.LINES.find((l) => l.id === id), pk = (id) => c.peakT((T) => c.absorbers(L(id), T, 20));
  assert.strictEqual(c.classOf(pk('HeI')), 'B'); assert.strictEqual(c.classOf(pk('HeII')), 'O'); near(pk('CaII'), 6340, 0.01, 'Ca II absorbers peak (late F; observed lines peak cooler, where H⁻ opacity falls)');
  for (const id of ['CaI', 'NaI', 'FeI']) assert(pk(id) < 2600, id);
  assert(c.stages('He', 40000, 20)[2] > 0.98, 'He III at 40,000 K');
});

group('TiO: the copy agrees with demos/spectra.html; 9 % of titanium is TiO at 3,500 K, a millionth in the Sun', () => {
  for (const T of [2600, 3500, 4500, 5772, 8000]) near(c.tioShare(T, 20), sp.tioChem(T, 20).tio, 1e-12, 'T ' + T);
  near(c.tioShare(3500, 20), 0.0856, 2e-3, '3,500 K'); assert(c.tioShare(5772, 20) < 2e-6, 'Sun');
});

group('Wien and classes: 828 nm at 3,500 K, 502 nm at 5,772 K; OBAFGKM boundaries from OpenStax Table 17.2', () => {
  near(c.wienPeak(3500), 827.93, 1e-5); near(c.wienPeak(5772), 502.04, 1e-5);
  assert.deepStrictEqual([3500, 4500, 5772, 7000, 9600, 20000, 40000].map(c.classOf).join(''), 'MKGFABO');
  assert.strictEqual(c.classOf(10000), 'B'); assert.strictEqual(c.classOf(9999), 'A'); assert.strictEqual(c.classOf(30000), 'O');
});

console.log(`${n} groups passed`);
