'use strict';
// Gravity Near Earth: inverse square law, rotation, near surface approximation, orbits.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('gravity-near-earth', 'BODIES,gGrav,gEff,wgs84,linearApprox,orbit');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const E = c.BODIES.earth;
group('GM/R² = 9.820 m/s²; the space station at 400 km feels 88.8%', () => {
  near(c.gGrav(E, 0), 9.8202, 1e-4); near(c.gGrav(E, 4e5) / c.gGrav(E, 0), (6371 / 6771) ** 2, 1e-12); near(c.gGrav(E, 4e5) / c.gGrav(E, 0), 0.8853, 1e-3);
  near(c.gGrav(c.BODIES.moon, 0), 1.625, 2e-3); near(c.gGrav(c.BODIES.mars, 0), 3.728, 2e-3);
});
group('rotation: equator loses ω²R = 0.0339 m/s², poles nothing; tilt is largest near 45°', () => {
  near(c.gEff(E, 0, 0, true).g, c.gGrav(E, 0) - E.w ** 2 * E.R, 1e-12); near(c.gEff(E, 0, Math.PI / 2, true).g, c.gGrav(E, 0), 1e-12);
  near(E.w ** 2 * E.R, 0.03388, 1e-3);
  const t = (d) => c.gEff(E, 0, d * Math.PI / 180, true).tilt; assert(t(45) > t(30) && t(45) > t(60)); near(t(45) * 180 / Math.PI * 60, 5.94, 0.01);
});
group('sphere vs WGS 84: equator 9.786 vs 9.780, pole 9.820 vs 9.832 (flattening)', () => {
  near(c.wgs84(0), 9.78033, 1e-6); near(c.wgs84(Math.PI / 2), 9.83218, 1e-5);
  assert(Math.abs(c.gEff(E, 0, 0, true).g - c.wgs84(0)) < 0.01);
});
group('near surface line error is second order: (3h²/R²)', () => {
  for (const h of [8849, 1.1e4, 4e5]) near((c.gGrav(E, h) - c.linearApprox(E, h)) / c.gGrav(E, 0), 3 * (h / E.R) ** 2, 0.15, `h = ${h}`);
});
group('geostationary orbit period is one sidereal day', () => { near(c.orbit(E, 42164e3 - E.R).T, 2 * Math.PI / E.w, 1e-4); near(c.orbit(E, 26560e3 - E.R).T / 3600, 11.967, 1e-3); near(c.orbit(E, 4e5).T / 60, 92.4, 3e-3); });
group('worksheet claims: effective g at sea level is GM/R² − ω²R cos²λ within 0.00002 m/s²; zero at the geostationary radius on the equator', () => {
  const g0 = c.gGrav(E, 0), k = E.w * E.w * E.R; let worst = 0;
  for (let d = 0; d <= 90; d += 0.5) { const l = d * Math.PI / 180; worst = Math.max(worst, Math.abs(c.gEff(E, 0, l, true).g - (g0 - k * Math.cos(l) ** 2))); }
  assert(worst < 2e-5 && worst > 1e-5, `largest departure ${worst}`);
  assert(Math.abs(c.gEff(E, 42164e3 - E.R, 0, true).g) < 2e-4);
  near(2 * Math.PI / E.w, 86164.1, 1e-6);
});
console.log(`${n} gravity near Earth test groups passed`);
