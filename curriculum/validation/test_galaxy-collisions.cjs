'use strict';
// Galaxy Collisions: the restricted three body model of Toomre and Toomre (1972). Units, Plummer pull and circular speeds,
// the parabolic encounter against Barker's equation, energy kept by the leapfrog, a lone disk that stays a disk, the Milky Way and
// Andromeda first pass (van der Marel et al. 2012), the tidal ratio (Ex22) and why stars miss (Ex21).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('galaxy-collisions', 'PC,LY,KPC,GMSUN,RSUN,KPC_LY,GU,KMS,NSTAR,RINGS,plummerAcc,vcirc,setup,makeDisk,coreAcc,starAcc,step,sep,relV,coreEnergy,parabolaTime,tidalRatio,grainModel,hitChance,tailShare,stolen');
let n = 0;
const rel = (a, b, tol, w) => assert(Math.abs(a / b - 1) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const R1 = 15, A1 = 2, M1 = 1e11;
function encounter(m2, q, t1 = 0, t2 = 0) { const M2 = M1 * m2, R2 = R1 * Math.sqrt(m2); return c.setup({ gal: [{ M: M1, a: A1, R: R1, tilt: t1, turn: 0 }, { M: M2, a: A1 * Math.sqrt(m2), R: R2, tilt: t2, turn: 0 }], q, r0: Math.max(5 * q, 4 * (R1 + R2)) }); }
function lg(vt) { return c.setup({ gal: [{ M: 1.0e12, a: 20, R: 18, tilt: 30, turn: 0 }, { M: 1.5e12, a: 25, R: 22, tilt: 120, turn: 40 }], rel: { x: 770, y: 0, z: 0, vx: -109.3 * c.KMS, vy: vt * c.KMS, vz: 0 } }); }
function closest(g, dt, tmax) { const sys = { g, stars: [], t: 0 }; let best = [0, Infinity]; while (sys.t < tmax) { c.step(sys, dt); const d = c.sep(g); if (d < best[1]) best = [sys.t, d]; } return best; }

group('units: G = 4.4985 × 10⁻¹² kpc³/(M☉ Myr²), 1 km/s = 1.0227 × 10⁻³ kpc/Myr; constants equal constants.js', () => {
  rel(c.GU, 4.4985e-12, 1e-4); rel(c.KMS, 1.02271e-3, 1e-5); assert.equal(c.GMSUN, VDC.GMsun); assert.equal(c.RSUN, VDC.Rsun); assert.equal(c.LY, VDC.ly); rel(c.PC, VDC.pc, 1e-15);
});
group('Plummer: the pull far away is GM/r²; the circular speed at 15 kpc is 167.1 km/s; Newton\'s third law between the centers', () => {
  const a = c.plummerAcc(1e11, 2, 1000, 0, 0); rel(-a[0], c.GU * 1e11 / 1e6, 1e-5, 'far pull (1 + a²/r²)^(−3/2)');
  near(c.vcirc(1e11, 2, 15), 167.1, 0.05, 'v_c at 15 kpc'); rel(c.vcirc(1e11, 2, 15) ** 2 * c.KMS ** 2, -c.plummerAcc(1e11, 2, 15, 0, 0)[0] * 15, 1e-12, 'v²/r = pull');
  const g = encounter(0.25, 30), A = c.coreAcc(g); for (let j = 0; j < 3; j++) near(g[0].M * A[0][j] + g[1].M * A[1][j], 0, 1e-12 * g[0].M * Math.abs(A[0][0]), 'action = reaction');
  near(g[0].M * g[0].p[0] + g[1].M * g[1].p[0], 0, 1e-3, 'center of mass at 0'); near(g[0].M * g[0].v[1] + g[1].M * g[1].v[1], 0, 1e-9, 'no total momentum');
});
group("the encounter: a parabola to q = 25 kpc, closest 25.16 kpc (the softening widens it) at 869.5 Myr (Barker gives 869.7 for point masses); energy kept to 10⁻⁸", () => {
  const g = encounter(1, 25), e0 = c.coreEnergy(g); near(e0 / Math.abs(c.GU * 1e22 / 100), 0, 1e-3, 'energy about 0 at the start (parabola, softened)');
  const [t, d] = closest(g, 0.5, 1500); near(d, 25.16, 0.02, 'closest'); near(t, 869.5, 0.6, 'time'); near(c.parabolaTime(25, 125, 2e11), 869.7, 0.1, 'Barker');
  assert(Math.abs(c.coreEnergy(g) - e0) <= 1e-8 * c.GU * 1e22 / 25, 'energy drift');
});
group('a lone disk stays a disk: rings keep their radius to 0.1% over 1 Gyr; 1,200 stars in 12 rings from 0.2 R to R', () => {
  const g = c.setup({ gal: [{ M: M1, a: A1, R: R1, tilt: 0, turn: 0 }, { M: 1e-6, a: 1, R: 1, tilt: 0, turn: 0 }], rel: { x: 1e6, y: 0, z: 0, vx: 0, vy: 0, vz: 0 } });
  const stars = c.makeDisk(g[0], c.NSTAR, 0, 11); assert.equal(stars.length, 1200); const sys = { g, stars, t: 0 };
  for (const s of stars) assert(s.r0 >= 0.2 * R1 - 1e-12 && s.r0 <= R1 + 1e-12 && s.ring >= 0 && s.ring < c.RINGS);
  for (let i = 0; i < 2000; i++) c.step(sys, 0.5);
  let worst = 0; for (const s of stars) { const r = Math.hypot(s.p[0] - g[0].p[0], s.p[1] - g[0].p[1], s.p[2] - g[0].p[2]); worst = Math.max(worst, Math.abs(r / s.r0 - 1)); }
  assert(worst < 1e-3, 'worst ring drift ' + worst); assert.equal(c.tailShare(sys, 0), 0); assert.equal(c.stolen(sys, 0), 0);
});
group('a close prograde pass throws out tails; a retrograde one barely does', () => {
  const run = (t1) => { const g = encounter(1, 25, t1, t1); const sys = { g, stars: c.makeDisk(g[0], 600, 0, 11).concat(c.makeDisk(g[1], 600, 1, 29)), t: 0 }; while (sys.t < 1400) c.step(sys, 0.5); return c.tailShare(sys, 0); };
  const pro = run(0), retro = run(180); assert(pro > 0.15, 'prograde tail share ' + pro); assert(retro < pro / 3, 'retrograde ' + retro + ' vs ' + pro);
});
group('the Milky Way and Andromeda: first pass 3.85 Gyr at 17.3 kpc (van der Marel 2012: 3.87 Gyr); with 57 km/s sideways 4.30 Gyr at 100 kpc', () => {
  let [t, d] = closest(lg(17.0), 1, 6000); near(t, 3853, 3, 'time'); near(d, 17.3, 0.2, 'distance');
  [t, d] = closest(lg(57.0), 1, 6000); near(t, 4303, 3, 'time 57'); near(d, 100.3, 0.3, 'distance 57');
});
group('Ex22 tides: ((60,000 + 5,000)/(60,000 − 5,000))² = 1.397; Ex21 a sand grain Sun: the next star 51 km away; a hit is 5.4 × 10⁻¹³', () => {
  near(c.tidalRatio(60000, 5000), 1.397, 0.001); const m = c.grainModel(1.5, 5); near(m.km, 51.0, 0.05, 'km'); rel(m.widths, 3.40e7, 2e-3, 'widths');
  rel(c.hitChance(5, 1000), 5.44e-13, 3e-3, 'chance');
});
console.log(`all ${n} groups passed`);
