'use strict';
// Reasons for Seasons, Sidereal and solar days and Sundial and clock: the solar day from the spin and the orbit, the planets
// against the NASA fact sheets' lengths of day, the counting of turns and noons, and the equation of time against its known extremes.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('seasons', 'SD_PLANETS,SD_D,SD_H,sdSolar,sdPerYear,sdAngles,sdNext,sdCount,sdKepler,sdSun,sdDayLength');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);

test('Earth: one turn against the stars (86 164.0989 s) and the sidereal year give the 86 400 s mean solar day', () => {
  const E = C.SD_PLANETS.earth; near(C.sdSolar(E.rot, E.orb), 86400, 0.05);
  const y = C.sdPerYear(E.rot, E.orb); near(y.sid - y.sol, 1, 1e-12); near(y.sol, 365.256, 1e-3);
});
test('every planet: the solar day from the formula matches the NASA fact sheet length of day to its last digit', () => {
  for (const k of Object.keys(C.SD_PLANETS)) {
    const P = C.SD_PLANETS[k], s = C.sdSolar(P.rot, P.orb), rel = Math.abs(s - P.lod) / P.lod;
    assert(rel < 2e-4, `${k}: ${s / 3600} h against ${P.lod / 3600} h`);
  }
  near(C.sdSolar(C.SD_PLANETS.venus.rot, C.SD_PLANETS.venus.orb) / C.SD_D, 116.75, 0.01);
  near(C.sdSolar(C.SD_PLANETS.mercury.rot, C.SD_PLANETS.mercury.orb) / C.SD_PLANETS.mercury.orb, 2, 0.001);
});
test('toy planets: N turns a year give N − 1 noons forward and N + 1 backward; one turn a year never has a noon', () => {
  const d = 24 * 3600;
  for (const N of [2, 4, 10, 30]) {
    near(C.sdPerYear(d, N * d).sol, N - 1, 1e-12); near(C.sdPerYear(-d, N * d).sol, N + 1, 1e-12);
    near(C.sdSolar(d, N * d), d * N / (N - 1), 1e-6);
  }
  assert.equal(C.sdSolar(d, d), Infinity); assert.equal(C.sdNext(5, d, d, 'sol'), Infinity);
});
test('the marked spot faces the star at every sidereal day and the Sun at every solar day; the counts after one year', () => {
  const d = 24 * 3600, rot = d, orb = 4 * d, sol = C.sdSolar(rot, orb);
  for (let k = 1; k <= 8; k++) {
    let A = C.sdAngles(k * rot, rot, orb); near(Math.cos(A.spot - Math.PI / 2), 1, 1e-12);
    A = C.sdAngles(k * sol, rot, orb); near(Math.cos(A.spot - (A.orbit + Math.PI)), 1, 1e-12);
  }
  near(C.sdNext(0, rot, orb, 'sid'), d, 1e-9); near(C.sdNext(d, rot, orb, 'sid'), 2 * d, 1e-6); near(C.sdNext(0, rot, orb, 'sol'), sol, 1e-9);
  const c = C.sdCount(orb, rot, orb); assert.equal(c.sid, 4); assert.equal(c.sol, 3);
});
test("Kepler's equation is solved to machine precision", () => {
  for (const e of [0, 0.0167, 0.1, 0.5]) for (let M = 0; M < 6.3; M += 0.37) { const E = C.sdKepler(M, e); near(E - e * Math.sin(E), M, 1e-13); }
});
test('equation of time 2026: −14.2 min near 11 Feb, +16.4 min near 3 Nov, +3.7 min in mid May, −6.5 min in late July; zero with no tilt and a circle', () => {
  const eot = (n) => C.sdSun(n + 0.5, 0.0167086, 23.4393).eot, range = (a, b, f) => { let m = [Infinity, -1, -Infinity, -1]; for (let n = a; n <= b; n++) { const v = eot(n); if (v < m[0]) m = [v, n, m[2], m[3]]; if (v > m[2]) m = [m[0], m[1], v, n]; } return m; };
  let m = range(20, 70); near(m[0], -14.2, 0.15); assert(Math.abs(m[1] - 41) <= 2, `minimum on day ${m[1]}`);
  m = range(280, 330); near(m[2], 16.4, 0.15); assert(Math.abs(m[3] - 306) <= 2, `maximum on day ${m[3]}`);
  m = range(110, 170); near(m[2], 3.7, 0.15);
  m = range(180, 240); near(m[0], -6.5, 0.15);
  for (let k = 0; k < 365; k += 17) near(C.sdSun(k, 0, 0).eot, 0, 1e-9);
});
test('solar day lengths 2026: about 24 h + 30 s near the December solstice, 24 h − 21 s in mid September, 86 400 s on average', () => {
  const L = (n) => C.sdDayLength(n, 0.0167086, 23.4393) - 86400; let hi = -1e9, lo = 1e9, s = 0;
  for (let n = 0; n < 365; n++) { const v = L(n); hi = Math.max(hi, v); lo = Math.min(lo, v); s += v; }
  near(hi, 29.9, 0.6); near(lo, -21.3, 0.6); near(s / 365, 0, 0.05);
  near(L(354), 29.9, 1); near(L(258), -21.3, 1);
});
test("the Sun's declination reaches ± the tilt at the solstices", () => {
  let hi = -90, lo = 90; for (let n = 0; n < 365; n += 0.25) { const d = C.sdSun(n, 0.0167086, 23.4393).dec; hi = Math.max(hi, d); lo = Math.min(lo, d); }
  near(hi, 23.4393, 1e-3); near(lo, -23.4393, 1e-3);
});
console.log(`${n} tests passed`);
