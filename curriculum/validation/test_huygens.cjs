'use strict';
// Huygens's Principle: v = c/n (OpenStax Vol 3 §1.1) and wavelet constructions of reflection, refraction and diffraction (§1.6).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('huygens', 'C_LIGHT,MEDIA,speedIn,transitTime,lagBehindVacuum,refractAngle,criticalAngle,fronts,waveletRadius,openingField,farIntensity,firstDark');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('Table 1.1 and v = c/n; Example 1.1: zircon 1.56 × 10⁸ m/s', () => {
  near(c.C_LIGHT, 2.99792458e8, 0); for (const [k, v] of Object.entries({ air: 1.000293, water: 1.333, ethanol: 1.361, crown: 1.52, flint: 1.66, zircon: 1.923, diamond: 2.419 })) near(c.MEDIA[k].n, v, 0, k);
  near(3.00e8 / c.MEDIA.zircon.n, 1.56e8, 0.002); near(c.speedIn(1.923), c.C_LIGHT / 1.923, 1e-15);
  near(c.transitTime(1, 1), 3.3356e-9, 1e-4); near(c.transitTime(2.419, 1) / c.transitTime(1, 1), 2.419, 1e-12); near(c.lagBehindVacuum(1.000293, 1), 0.293e-3 / c.C_LIGHT, 1e-9); assert(c.lagBehindVacuum(1.000293, 1) < 1e-12);
  near(1 - 1.333 / 1.361, 0.0206, 0.01, 'ethanol is 2.1 % slower than water');
});
group('Snell from the wavelets: sin θ1/v1 = sin θ2/v2; critical angle; reflection', () => {
  const th2 = c.refractAngle(1.000293, 1.52, 40 * Math.PI / 180); near(Math.sin(40 * Math.PI / 180) / c.speedIn(1.000293), Math.sin(th2) / c.speedIn(1.52), 1e-12); assert(th2 < 40 * Math.PI / 180);
  near(c.criticalAngle(1.52, 1.000293) * 180 / Math.PI, 41.155, 1e-3); assert.equal(c.refractAngle(1.52, 1.000293, 42 * Math.PI / 180), null); assert.equal(c.criticalAngle(1, 1.5), null);
  const f = c.fronts(1, 1.52, 0.6, 3); near(Math.atan2(f.kr[0], f.kr[1]), 0.6, 1e-12, 'angle of reflection equals angle of incidence');
});
group('the transmitted and reflected fronts are tangent to every wavelet', () => {
  for (const [n1, n2, th] of [[1, 1.52, 0.7], [1.333, 2.419, 0.3], [1.52, 1.000293, 0.5]]) {
    const D = 7.3, f = c.fronts(n1, n2, th, D);
    for (const x of [-6, -2.5, 0, 1.7, 4]) {
      if (x * Math.sin(th) >= D) continue;
      const r2 = c.waveletRadius(n1, n2, th, D, x, 2), r1 = c.waveletRadius(n1, n2, th, D, x, 1);
      near(Math.abs(f.Dt - (f.k2[0] * x)), r2, 1e-12, 'distance from the wavelet centre to the transmitted front');
      near(Math.abs(f.Dr - (f.kr[0] * x)), r1, 1e-12, 'distance to the reflected front');
    }
  }
});
group('opening: the far field of the wavelet sum is the single slit pattern, dark at sin θ = λ/a', () => {
  const a = 4, M = 400; near(c.farIntensity(0, a, M), 1, 1e-12);
  for (const th of [0.1, 0.2, 0.35]) { const b = Math.PI * a * Math.sin(th); near(c.farIntensity(th, a, M), (Math.sin(b) / b) ** 2, 1e-3, `θ = ${th}`); }
  assert(c.farIntensity(c.firstDark(a), a, M) < 1e-4); assert.equal(c.firstDark(0.8), null);
  /* a narrow opening sends out a nearly circular wave: at 20 λ the amplitude 57° off axis is still over 80 % of that straight ahead,
     and it follows the slit factor |sin β/β| */
  const amp = (th) => { let m = 0; for (let t = 0; t < 1; t += 0.02) m = Math.max(m, Math.abs(c.openingField(20 * Math.cos(th), 20 * Math.sin(th), t, 0.4, 40))); return m; };
  const b1 = Math.PI * 0.4 * Math.sin(1.0); assert(amp(1.0) / amp(0) > 0.8); near(amp(1.0) / amp(0), Math.abs(Math.sin(b1) / b1), 0.03);
});
console.log(`${n} groups passed`);
