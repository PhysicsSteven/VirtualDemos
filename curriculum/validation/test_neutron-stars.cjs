'use strict';
// Neutron Stars and Pulsars (2026-11-17): density, spin up and field growth by conservation, the lighthouse geometry, and spin down,
// checked against the lesson's worked examples, the ATNF catalogue's derived values for the Crab and limits worked by hand.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const VDC = require('../../demos/lib/constants.js');
const c = core('neutron-stars', 'G,C,MU0,MSUN,YR,DAY,LSUN,TAU,DEG,I_NS,R_NS,RHO_NUC,density,spinUp,fieldUp,vEquator,breakupP,freeFall,cosTheta,beamI,pulseAt,pulseWidth,beamingFraction,eRot,eDot,charAge,bDipole,pLater');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
const abs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('constants equal demos/lib/constants.js', () => {
  assert.strictEqual(c.G, VDC.G); assert.strictEqual(c.C, VDC.c); assert.strictEqual(c.MU0, VDC.mu0); assert.strictEqual(c.MSUN, VDC.Msun);
  assert.strictEqual(c.YR, VDC.yr); assert.strictEqual(c.DAY, VDC.day); assert.strictEqual(c.LSUN, VDC.Lsun);
  near(c.RHO_NUC, 0.16e45 * VDC.u, 1e-15, 'nuclear density');
});

group('a city sized nucleus: density', () => {
  /* Ex26: 2.0 M☉ in 12 km is 5.5 × 10¹⁷ kg/m³; the exit ticket: 1.5 M☉ in 11 km (3.0 × 10³⁰ kg) is 5.4 × 10¹⁷ */
  near(c.density(2.0, 12e3), 5.5e17, 0.01, 'Ex26');
  near(c.density(1.5, 11e3), 5.4e17, 0.01, 'exit ticket');
  /* about twice the density of a nucleus */
  assert(c.density(1.4, 1e4) / c.RHO_NUC > 2 && c.density(1.4, 1e4) / c.RHO_NUC < 3, 'compared with a nucleus');
  /* the Sun's mean density 1,410 kg/m³ */
  near(c.density(1, VDC.Rsun), 1410, 0.003, 'the Sun');
});

group('spin up and field growth', () => {
  /* Ex27: 2,000 km turning once a day collapses to 10 km: f = 200, period 86,400/40,000 = 2.16 s */
  near(c.spinUp(c.DAY, 2e6, 1e4), 2.16, 1e-12, 'Ex27');
  /* the in class question: 1,000 km, 12 h, to 10 km: 4.32 s; the exit ticket: f = 500, one day: 0.3456 s */
  near(c.spinUp(c.DAY / 2, 1e6, 1e4), 4.32, 1e-12, 'ask'); near(c.spinUp(c.DAY, 5e6, 1e4), 0.3456, 1e-12, 'exit ticket');
  /* the field grows by the same factor the period falls: B P is kept */
  for (const R of [1e7, 1e6, 3e4, 1e4]) near(c.fieldUp(1000, 2e6, R) * c.spinUp(c.DAY, 2e6, R), 1000 * c.DAY, 1e-12, 'B P kept');
  /* no shrink, no change */
  abs(c.spinUp(5, 3e6, 3e6), 5, 0, 'no shrink'); abs(c.fieldUp(7, 3e6, 3e6), 7, 0, 'no shrink');
  /* angular momentum k M R² ω and flux B πR² are both kept */
  const R0 = 2e6, R = 1e4, w0 = c.TAU / c.DAY, w = c.TAU / c.spinUp(c.DAY, R0, R);
  near(R * R * w, R0 * R0 * w0, 1e-12, 'L kept'); near(c.fieldUp(1000, R0, R) * R * R, 1000 * R0 * R0, 1e-12, 'flux kept');
});

group('speeds and limits', () => {
  /* Ex28: the Crab at 30 turns a second and 10 km: equator 1,900 km/s */
  near(c.vEquator(1e4, 1 / 30) / 1000, 1885, 1e-3, 'Ex28');
  /* breakup of a 1.4 M☉, 10 km ball: 2π√(R³/GM) = 0.461 ms; the Sun collapsed to 10 km would spin at 0.453 ms, faster */
  near(c.breakupP(1.4, 1e4) * 1e3, 0.4611, 1e-3, 'breakup');
  assert(c.spinUp(25.38 * c.DAY, 6.957e8, 1e4) < c.breakupP(1.4, 1e4), 'the Sun collapsed spins past breakup');
  /* the breakup equator speed is the orbital speed √(GM/R) */
  near(c.vEquator(1e4, c.breakupP(1.4, 1e4)), Math.sqrt(c.G * 1.4 * c.MSUN / 1e4), 1e-12, 'orbital speed');
  /* free fall time √(3π/(32Gρ)) = (π/2)√(R³/(2GM)) */
  near(c.freeFall(1.4, 2e6), Math.PI / 2 * Math.sqrt(8e18 / (2 * c.G * 1.4 * c.MSUN)), 1e-12, 'free fall');
});

group('the lighthouse: angles and pulse widths', () => {
  const D = c.DEG;
  /* seen from the spin axis the angle to the pole is always α */
  for (const ph of [0, 1, 2, 3]) near(Math.acos(c.cosTheta(30 * D, 0, ph)), 30 * D, 1e-9, 'from the pole');
  /* an orthogonal rotator seen edge on: each beam's pulse is 2ρ wide */
  near(c.pulseWidth(90 * D, 90 * D, 10 * D, false), 20 * D, 1e-12, 'W = 2ρ'); near(c.pulseWidth(90 * D, 90 * D, 10 * D, true), 20 * D, 1e-12, 'W = 2ρ second');
  /* misses and always on */
  abs(c.pulseWidth(20 * D, 75 * D, 12 * D, false), 0, 0, 'miss'); abs(c.pulseWidth(20 * D, 75 * D, 12 * D, true), 0, 0, 'miss 2');
  abs(c.pulseWidth(5 * D, 3 * D, 12 * D, false), c.TAU, 0, 'always on');
  /* the formula's width matches where pulseAt is nonzero, scanned over a turn */
  for (const [a, z, r] of [[45, 45, 10], [30, 34, 12], [84, 88, 12], [60, 50, 25]]) for (const sec of [false, true]) {
    const W = c.pulseWidth(a * D, z * D, r * D, sec), N = 200000; let on = 0;
    for (let j = 0; j < N; j++) { const ph = c.TAU * (j + 0.5) / N, cc = Math.max(-1, Math.min(1, c.cosTheta(a * D, z * D, ph))); if (Math.acos(sec ? -cc : cc) < r * D) on++; }
    abs(on / N * c.TAU, W, 2e-4, `scan ${a} ${z} ${r} ${sec}`);
  }
  /* beaming fraction: an orthogonal rotator sweeps the band sin ρ; an aligned one two caps 1 − cos ρ */
  near(c.beamingFraction(90 * D, 10 * D), Math.sin(10 * D), 1e-12, 'band'); near(c.beamingFraction(0, 10 * D), 1 - Math.cos(10 * D), 1e-12, 'caps');
  /* a Monte Carlo check of the union for a middle tilt */
  let hit = 0; const M = 400000;
  for (let j = 0; j < M; j++) { const z = Math.acos(1 - 2 * (j + 0.5) / M); if (Math.abs(z - 40 * D) < 15 * D || Math.abs(z - 140 * D) < 15 * D) hit++; }
  near(c.beamingFraction(40 * D, 15 * D), hit / M, 1e-4, 'union');
  /* a pulse peaks at 1 straight down the beam */
  abs(c.pulseAt(30 * D, 30 * D, 12 * D, 0), 1, 1e-12, 'on axis');
});

group('spin down: the Crab against the ATNF catalogue', () => {
  const P = 0.0333924123, Pd = 4.20972e-13;
  /* the catalogue gives Edot 4.5 × 10³⁸ erg/s, age 1.26 × 10³ yr, B 3.79 × 10¹² G (I = 10⁴⁵ g cm², R = 10 km) */
  near(c.eDot(P, Pd), 4.46e31, 0.005, 'Ė');
  near(c.charAge(P, Pd) / c.YR, 1257, 0.002, 'τ');
  near(c.bDipole(P, Pd) * 1e4, 3.79e12, 0.003, 'B');
  /* B = 3.2 × 10¹⁵ √(PṖ) T for the canonical star */
  near(c.bDipole(1, 1e-15) / Math.sqrt(1e-15), 3.2e15, 0.002, '3.2e15');
  /* Ė is the loss of spin energy: −dE/dt with dE/dP = −4π²I/P³ */
  near(c.eDot(P, Pd), -(c.eRot(P + 1e-9) - c.eRot(P - 1e-9)) / 2e-9 * Pd, 1e-6, 'Ė = −dE/dt');
  /* a braking index 3 track keeps P Ṗ: P(t)² = P² + 2PṖt, and its slope is PṖ/P(t) */
  const t = 1e4 * c.YR, Pt = c.pLater(P, Pd, t), h = 1 * c.YR;
  near((c.pLater(P, Pd, t + h) - c.pLater(P, Pd, t - h)) / (2 * h) * Pt, P * Pd, 1e-6, 'P Ṗ kept');
  /* back one characteristic age it spun infinitely fast */
  abs(c.pLater(P, Pd, -c.charAge(P, Pd)), 0, 1e-9, 'birth at τ');
  /* the Crab's birth period on this track, 972 yr ago: 15.9 ms */
  near(c.pLater(P, Pd, -972 * c.YR) * 1e3, 15.9, 0.01, 'birth period');
});

console.log(`${n} groups passed`);
