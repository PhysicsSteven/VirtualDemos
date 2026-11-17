'use strict';
// Starlight: the inverse square law, magnitudes, absolute magnitude and the census. Known values from the lesson plan (Stars and
// Galaxies, Unit 1, Days 5 and 9: Ex17 to Ex21 and Ex35) and from the HYG data the demo uses.
const assert = require('node:assert');
const path = require('node:path');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('starlight', 'AU,PC,MV_SUN,MV_MOON,MV_VENUS,brightRatio,equalDist,ratioFromMag,magFromRatio,appMag,distOf,sunMag,absFromL,seeDist,bvTemp');
require(path.join(__dirname, '../../demos/starlight-data/stars.js'));
const D = globalThis.VD_STARLIGHT;

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js', () => {
  for (const [k, v] of [['AU', 'au'], ['MV_SUN', 'MVsun'], ['MV_MOON', 'mVmoon'], ['MV_VENUS', 'mVvenus']]) assert.strictEqual(c[k], VDC[v], k);
  near(c.PC, VDC.pc, 1e-12, 'pc');
});

group('inverse square: Ex17 the Sun from Jupiter is 1/27; Ex18 4/9 = 0.44; Ex19 equal at 5 times; Ex35 3,162 times and 3.2 × 10¹⁰ in volume', () => {
  near(c.brightRatio(1, 5.2, 1, 1), 1 / 27.04, 1e-9, 'Ex17'); near(c.brightRatio(4, 3, 1, 1), 4 / 9, 1e-12, 'Ex18');
  near(c.equalDist(25, 1, 1), 5, 1e-12, 'Ex19'); near(c.brightRatio(25, 5, 1, 1), 1, 1e-12, 'Ex19 check');
  const d = c.equalDist(1e4, 1e-3, 1); near(d, 3162.28, 1e-5, 'Ex35 distance'); near(d ** 3, 3.16e10, 1e-3, 'Ex35 volume');
  near(c.brightRatio(1, 2, 1, 1), 0.25, 1e-15, 'twice as far'); near(c.brightRatio(1, 10, 1, 1), 0.01, 1e-15, 'ten times');
});

group('magnitudes (Pogson): 5 mag = 100 exactly; 1 mag = 2.512; Ex20 2 against 7 is 100, 0 against 15 is 10⁶; 3 against 13 is 10,000', () => {
  near(c.ratioFromMag(5), 100, 1e-14); near(c.ratioFromMag(1), 2.5119, 1e-4); near(c.ratioFromMag(15), 1e6, 1e-12); near(c.ratioFromMag(10), 1e4, 1e-12);
  near(c.magFromRatio(100), -5, 1e-14, 'inverse'); near(c.magFromRatio(c.brightRatio(4, 3, 1, 1)), 0.880, 1e-3, 'Ex18 in magnitudes');
});

group('absolute magnitude: Ex21 m − M = 10 is 1,000 pc; m − M = −5 is 1 pc; the Sun is −26.76 from 1 au and 4.81 at 10 pc', () => {
  near(c.distOf(10, 0), 1000, 1e-12, 'Ex21'); near(c.distOf(-5, 0), 1, 1e-12, 'check in'); near(c.appMag(3, 10), 3, 1e-15, 'at 10 pc m = M');
  near(c.sunMag(), -26.76, 2e-4, 'Sun'); near(c.appMag(1.454, 2.6371), -1.44, 2e-3, 'Sirius from HYG M and d');
  near(c.seeDist(1, 6), 17.3, 2e-3, 'a Sun is a naked eye star out to 17 pc'); near(c.seeDist(1e4, 6) / c.seeDist(1e-3, 6), 3162.28, 1e-5, 'Ex35 again');
});

group('colors: Ballesteros B − V to temperature gives about 5,800 K for the Sun (B − V = 0.65) and about 10,000 K for Vega', () => {
  near(c.bvTemp(0.65), 5800, 0.02, 'Sun'); near(c.bvTemp(0), 10000, 0.05, 'Vega'); assert(c.bvTemp(1.5) < 4000, 'M star');
});

group('HYG data: 4 stars brighter than magnitude 0, about 5,000 to 6 and three times as many to 6 as to 5; Proxima is nearest', () => {
  const cnt = (m) => D.sky.filter((r) => r[2] / 100 <= m).length;
  assert.strictEqual(cnt(0), 4); near(cnt(6), 5070, 1e-9, 'to 6'); near(cnt(6) / cnt(5), 3.10, 0.01, 'ratio');
  assert.strictEqual(D.near[0][0], 'Proxima Centauri'); near(Math.hypot(D.near[0][1], D.near[0][2], D.near[0][3]), 1.296, 1e-3, 'Proxima');
});

group('census: of the 324 HYG stars within 10 pc, about two thirds are M dwarfs and few outshine the Sun; nearly every naked eye star does', () => {
  const N = D.near.length, M = D.near.filter((r) => r[6] === 'M').length, lum = D.near.filter((r) => r[7] > 1).length, seen = D.near.filter((r) => r[4] <= 6).length;
  assert.strictEqual(N, 324); near(M / N, 0.676, 0.01, 'M share'); assert(lum / N < 0.07, 'luminous share ' + lum / N); assert(seen === 50, 'visible within 10 pc ' + seen);
  const e = Object.values(D.eye), eN = e.reduce((a, b) => a + b[0], 0), eL = e.reduce((a, b) => a + b[1], 0);
  assert.strictEqual(eN, 5070); assert(eL / eN > 0.95, 'naked eye stars more luminous than the Sun: ' + eL / eN);
});

console.log(`${n} groups passed`);
