'use strict';
// Rainbows: water's dispersion, the ray through a drop against independent geometry, Descartes' least deviation against a brute
// force search, Fresnel shares adding to 1, the sky's brightness (energy, the bows, the dark band) and the sky geometry.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('rainbows', 'rbN,rbAngles,rbDev,rbSky,rbSkyRefl,rbBow,rbFresnel,rbShare,rbPath,rbProfile,rbThetaAt,rbThetaVec,rbTop,rbSun');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const D = Math.PI / 180, deg = (x) => x / D;

test('water at 20 °C (Daimon and Masumura 2007): n(589.3 nm) = 1.3334, normal dispersion over 400 to 700 nm', () => {
  near(C.rbN(589.3), 1.33335, 5e-5); near(C.rbN(400), 1.34356, 5e-5); near(C.rbN(700), 1.33052, 5e-5);
  for (let l = 400; l < 700; l += 10) assert(C.rbN(l) > C.rbN(l + 10));
  near(C.rbN(589.3), 1.3330, 5e-4, 'handbook value at 20 °C');   /* CRC: 1.33299; the formula's own fit is within 4e-4 */
});
test('Snell at entry, and the path: every point on the drop, each chord makes angle r with the normal at both ends', () => {
  for (const nn of [1.331, 1.3436, 1.5]) for (const b of [0.1, 0.5, 0.86, 0.99, -0.7]) for (const k of [0, 1, 2, 3, 4]) {
    const a = C.rbAngles(b, nn); near(Math.sin(a.i), nn * Math.sin(a.r), 1e-12);
    const P = C.rbPath(b, nn, k); assert.equal(P.pts.length, k + 2);
    P.pts.forEach((q) => near(Math.hypot(q[0], q[1]), 1, 1e-12));
    near(P.pts[0][1], b, 1e-12, 'enters at height b');
    for (let j = 0; j + 1 < P.pts.length; j++) { const A = P.pts[j], B = P.pts[j + 1], u = [B[0] - A[0], B[1] - A[1]], L = Math.hypot(u[0], u[1]);
      near(Math.abs(u[0] * A[0] + u[1] * A[1]) / L, Math.cos(a.r), 1e-9, 'angle with the normal at the start');
      near(Math.abs(u[0] * B[0] + u[1] * B[1]) / L, Math.cos(a.r), 1e-9, 'angle with the normal at the end'); }
  }
});
test('the leaving direction from an independent vector trace (Snell in vector form, mirror reflections) matches −D', () => {
  const refr = (d, nrm, eta) => { const c = -(d[0] * nrm[0] + d[1] * nrm[1]), k = 1 - eta * eta * (1 - c * c); return [eta * d[0] + (eta * c - Math.sqrt(k)) * nrm[0], eta * d[1] + (eta * c - Math.sqrt(k)) * nrm[1]]; };
  for (const nn of [1.3305, 1.3436]) for (const b of [0.2, 0.6, 0.86, 0.95]) for (const k of [1, 2, 3]) {
    let p = [-Math.sqrt(1 - b * b), b], d = refr([1, 0], [p[0], p[1]], 1 / nn);
    for (let j = 0; j < k; j++) { const t = -2 * (p[0] * d[0] + p[1] * d[1]); p = [p[0] + t * d[0], p[1] + t * d[1]]; const c = d[0] * p[0] + d[1] * p[1]; d = [d[0] - 2 * c * p[0], d[1] - 2 * c * p[1]]; }
    const t = -2 * (p[0] * d[0] + p[1] * d[1]); p = [p[0] + t * d[0], p[1] + t * d[1]];
    const out = refr(d, [-p[0], -p[1]], nn), P = C.rbPath(b, nn, k);
    near(out[0], P.out[0], 1e-9); near(out[1], P.out[1], 1e-9); near(P.pts[k + 1][0], p[0], 1e-9); near(P.pts[k + 1][1], p[1], 1e-9);
  }
});
test('Descartes: least deviation from cos² i = (n² − 1)/(k² + 2k) equals a brute force search; 42.03° and 50.98° at 589 nm', () => {
  for (const l of [400, 500, 589, 700]) for (const k of [1, 2, 3, 4]) {
    const nn = C.rbN(l), bw = C.rbBow(nn, k); let best = 1e9;
    for (let x = 0; x <= 1; x += 1e-5) best = Math.min(best, C.rbDev(x, nn, k));
    near(bw.D, best, 1e-8);
  }
  near(deg(C.rbBow(C.rbN(589), 1).theta), 42.03, 0.01); near(deg(C.rbBow(C.rbN(589), 1).D), 137.97, 0.01);
  near(deg(C.rbBow(C.rbN(589), 2).theta), 50.98, 0.01); near(deg(C.rbBow(C.rbN(589), 1).i), 59.4, 0.05);
  near(deg(C.rbBow(C.rbN(589), 3).theta), 138.39, 0.01, 'third order: 41.6° from the Sun');
});
test('order of colors: primary red outside (42.44° against 40.57°), secondary red inside (50.24° against 53.62°)', () => {
  const p = (l, k) => deg(C.rbBow(C.rbN(l), k).theta);
  near(p(700, 1), 42.44, 0.01); near(p(400, 1), 40.57, 0.01); near(p(700, 2), 50.24, 0.01); near(p(400, 2), 53.62, 0.01);
  assert(p(700, 1) > p(400, 1) && p(700, 2) < p(400, 2));
  near(p(700, 2) - p(700, 1), 7.80, 0.01, 'dark band, red to red');
});
test('one reflection never leaves beyond the bow; two never inside the secondary', () => {
  const nn = C.rbN(589), t1 = C.rbBow(nn, 1).theta, t2 = C.rbBow(nn, 2).theta;
  for (let b = 0; b <= 1; b += 1e-4) { assert(C.rbSky(b, nn, 1) <= t1 + 1e-12); assert(C.rbSky(b, nn, 2) >= t2 - 1e-12); }
  near(C.rbSkyRefl(Math.sin(30 * D)), 60 * D, 1e-12);
});
test('Fresnel: ((n − 1)/(n + 1))² at normal incidence, zero for p at Brewster, and all orders together carry all the light', () => {
  const nn = 1.3333, F0 = C.rbFresnel(0, nn); near(F0.s, ((nn - 1) / (nn + 1)) ** 2, 1e-12); near(F0.p, F0.s, 1e-12);
  near(C.rbFresnel(Math.atan(nn), nn).p, 0, 1e-15);
  for (const b of [0, 0.3, 0.86, 0.99]) { let s = C.rbShare(b, nn, -1).avg; for (let k = 0; k < 400; k++) s += C.rbShare(b, nn, k).avg; near(s, 1, 1e-9); }
  const sh = C.rbShare(C.rbBow(C.rbN(589), 1).b, C.rbN(589), 1); near(sh.avg, 0.0456, 5e-4, 'light on the rainbow ray');
  assert((sh.s - sh.p) / (sh.s + sh.p) > 0.9, 'the bow ray is strongly polarized');
});
test('sky brightness: energy kept, primary peak at the bow, dark band darker than both sides', () => {
  const P = C.rbProfile({ N: 6000, dLam: 20, maxDeg: 180, dDeg: 0.05, sunDeg: 0 });
  let tot = 0; for (let j = 0; j < P.n; j++) tot += P.power[j];
  const nl = P.lams.length, nn = C.rbN(500); let exp = 0; for (let q = 0; q < 6000; q++) { const b = Math.sqrt((q + 0.5) / 6000); exp += (C.rbShare(b, nn, -1).avg + C.rbShare(b, nn, 1).avg + C.rbShare(b, nn, 2).avg) / 6000; }
  near(tot / nl, exp, 2e-3, 'share of the light sent into the three orders');
  const S = C.rbProfile({ N: 12000, dLam: 5, maxDeg: 90 }), Y = (t) => S.Y[Math.round(t / S.dDeg)];
  let jm = 0; for (let j = 600; j < 1000; j++) if (S.Y[j] > S.Y[jm]) jm = j;
  assert(jm * S.dDeg > 41 && jm * S.dDeg < 42.6, `primary peak at ${jm * S.dDeg}`);
  const band = Math.max(Y(43.5), Y(46), Y(49));
  assert(band < Y(30) / 4 && band < Y(52) / 4, 'dark band');
  assert(Y(30) > Y(60), 'brighter inside the primary than outside the secondary');
});
test('sky geometry: the antisolar point is h below the horizon; a bow of radius θ tops out at θ − h', () => {
  for (const h of [0, 10 * D, 30 * D]) { near(C.rbThetaAt(0, -h, h), 0, 1e-7); near(C.rbThetaAt(0, 42 * D - h, h), 42 * D, 1e-12); near(C.rbThetaVec([0, Math.cos(h), -Math.sin(h)], h), 0, 1e-7); }
  near(C.rbThetaAt(90 * D, 0, 0), 90 * D, 1e-12); near(C.rbTop(42.03, 45), -2.97, 1e-12);
  near(C.rbSun(2.897771955e-3 / 5772 * 1e9), 1, 1e-12, 'sunlight scaled to 1 at its Wien peak');
});
console.log(`${n} tests passed`);
