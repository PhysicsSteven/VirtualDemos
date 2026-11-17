'use strict';
// The Milky Way and Spiral Arms: Shapley's globular cluster survey on the Harris (2010) catalog, the galactic year and the mass
// inside the Sun's orbit, Kepler's third law, the rotation curve, the winding of material arms and the density wave's timing.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('milky-way', 'AU,PC,YR,LY,KPC,KPC_LY,LY_AU,R0,V0,MV_SUN,ZSUN,KPC_KMS_MYR,G_KPC,RV,IR_EBV,GC,toGal,rrLum,dimming,rrBright,measuredDist,median,survey,ORDER,visibleCount,lyToKpc,periodMyr,massVR,massKepler,keplerRaw,vMeasured,vGhost,vCirc,omega,omegaKms,materialPitch,armAngle,armG,patternRate,G_MEAN,armInterval,corotation,metalFraction,PITCH_W');
let n = 0;
const rel = (a, b, tol, w) => assert(Math.abs(a / b - 1) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const V = (k) => VDC[k];

group('constants equal demos/lib/constants.js; 1 kpc = 3,261.56 ly, 1 ly = 63,241 AU, 977.79 Myr per kpc/(km/s)', () => {
  assert.equal(c.R0, V('R0gal')); assert.equal(c.V0, V('vcSun')); assert.equal(c.MV_SUN, V('MVsun')); assert.equal(c.ZSUN, V('Zsun'));
  assert.equal(c.AU, V('au')); assert.equal(c.LY, V('ly')); rel(c.PC, V('pc'), 1e-15);
  near(c.KPC_LY, 3261.56, 0.01, 'kpc in ly'); near(c.LY_AU, 63241.08, 0.01, 'ly in AU'); near(c.KPC_KMS_MYR, 977.79, 0.01, 'kpc/(km/s)');
  rel(c.G_KPC, 4.3009e-6, 1e-4, 'G in kpc (km/s)² / M☉');
});
group('catalog: 157 Harris clusters, 141 seen without infrared (E(B−V) ≤ 1.5); positions from l, b, d', () => {
  assert.equal(c.GC.length, 157); assert.equal(c.visibleCount(false), 141); assert.equal(c.visibleCount(true), 157);
  const p = c.toGal(0, 0, c.R0); near(Math.hypot(p.x, p.y, p.z), 0, 1e-12, 'a cluster at l = 0, d = R₀ is at the center');
  for (const g of c.GC) { const q = c.toGal(g[1], g[2], g[3]); near(Math.hypot(q.x + c.R0, q.y, q.z), g[3], 1e-9, g[0]); }
  for (let k = 1; k < c.ORDER.length; k++) assert(c.rrBright(c.GC[c.ORDER[k - 1]], true) >= c.rrBright(c.GC[c.ORDER[k]], true), 'brightest first');
});
group('RR Lyrae: L = 10^(−0.4(0.16[Fe/H] + 0.84 − 4.81)), 48.3 L☉ at [Fe/H] = −1.5; d = √(L/b) recovers the true distance', () => {
  rel(c.rrLum(-1.5), 48.306, 1e-4, 'L at −1.5'); rel(c.rrLum(null), c.rrLum(-1.5), 1e-15);
  for (const g of c.GC.slice(0, 40)) { rel(c.measuredDist(g, c.rrLum(g[4]), true), g[3], 1e-12, g[0]);
    rel(c.measuredDist(g, c.rrLum(g[4]), false), g[3] * Math.pow(10, 0.2 * 3.1 * g[5]), 1e-12, 'dust makes it look farther ' + g[0]); }
  rel(c.dimming(1), Math.pow(10, -1.24), 1e-12, 'A_V = 3.1 E(B−V)');
});
group("Shapley: the first 20 clusters all lie toward Sagittarius; all 141 at the book's L = 50 L☉ put the center 7.59 kpc (24,765 ly) away; Shapley's L = 80 without dust 16.3 kpc", () => {
  const s20 = c.survey(20, 50, true, false); assert.equal(s20.n, 20); assert.equal(s20.toward, 20); near(s20.dist, 3.24, 0.01, '20 clusters');
  const all = c.survey(999, 50, true, false); assert.equal(all.n, 141); assert.equal(all.toward, 125); near(all.dist, 7.593, 0.001, '141'); near(all.dist * c.KPC_LY, 24765, 3, 'ly');
  near(all.lon < 180 ? all.lon : all.lon - 360, 0, 6, 'toward l ≈ 0');
  const ir = c.survey(999, 50, true, true); assert.equal(ir.n, 157); near(ir.dist, 7.355, 0.001, 'with the infrared');
  const sh = c.survey(999, 80, false, false); near(sh.dist, 16.28, 0.01, 'Shapley'); near(sh.dist * c.KPC_LY, 53084, 30, 'Shapley ly');
  near(c.median([3, 1, 2]), 2, 0, 'median odd'); near(c.median([4, 1, 2, 3]), 2.5, 0, 'median even');
});
group("galactic year: 2πR₀/v₀ = 219.4 Myr, 20.8 laps in 4.57 Gyr; the book's star at 40,000 ly and 230 km/s: 327.6 Myr, 1.51 × 10¹¹ M☉; v²r/G = Kepler", () => {
  near(c.periodMyr(c.R0, c.V0), 219.4, 0.05, 'the Sun'); near(4570 / c.periodMyr(c.R0, c.V0), 20.8, 0.05, 'laps');
  const r = c.lyToKpc(40000); near(c.periodMyr(r, 230), 327.6, 0.05, 'period'); rel(c.massVR(r, 230), 1.508e11, 1e-3, 'v²r/G');
  rel(c.massKepler(r, 230), c.massVR(r, 230), 1e-9, 'a³/P² gives the same mass'); rel(c.keplerRaw(r, 230), c.massVR(r, 230) * 0.9999206, 2e-4, 'a³/P² in AU and Julian years');
  near(c.vMeasured(8.122), 229, 1e-12, 'Eilers at 8.122 kpc'); near(c.vGhost(c.R0), c.V0, 1e-12); rel(c.vGhost(4 * c.R0), c.V0 / 2, 1e-12, 'Kepler falls as 1/√r');
});
group('arms: a material arm winds from 18° to 3.35° in 500 Myr and 0.97° in 2 Gyr; the profile, pattern rate, corotation and arm crossings', () => {
  near(c.materialPitch(c.R0, 0), 18, 1e-9); near(c.materialPitch(c.R0, 500), 3.35, 0.01, '500 Myr'); near(c.materialPitch(c.R0, 2000), 0.97, 0.01, '2 Gyr');
  near(c.armG(5, c.armAngle(5)), 1, 1e-12, 'peak on the arm'); near(c.armG(5, c.armAngle(5) + Math.PI / 2), 0, 1e-12, 'zero between');
  near(c.G_MEAN, 231 / 1024, 1e-9, 'mean of ((1 + cos)/2)⁶ = C(12,6)/2¹²');
  near(c.corotation(25) * c.KPC_LY, 29697, 2, 'corotation at 25 km/s/kpc'); near(c.corotation(28) * c.KPC_LY, 26475, 2, 'at 28');
  rel(c.omegaKms(c.corotation(25)), 25, 1e-9); near(c.armInterval(c.R0, 25, 3), 1843, 1, 'arm crossings at the Sun');
  near(c.patternRate(c.corotation(25), 0, 25, 3), 0, 1e-12, 'no drift at corotation');
  near(c.vCirc(100), 229, 0.02, 'flat far out'); rel(c.metalFraction(-1), 0.00134, 1e-12, 'Z = Z☉ 10^[Fe/H]');
});
console.log(`all ${n} groups passed`);
