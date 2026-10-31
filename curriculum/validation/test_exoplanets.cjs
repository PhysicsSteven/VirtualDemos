'use strict';
// Finding Exoplanets: limb darkened transits and, in the Two stars switch (2026-10-31), eclipsing binaries: the light curve of two
// luminous stars, both velocity curves, and the analysis the Eclipsing Binary Stars worksheet asks for.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('exoplanets', 'TAU,DAY,AU,R_SUN,GM_SUN,U1,U2,I,blocked,solveE,T_SUN,ebLight,ebFlux,ebK,ebA,ebMasses,ebRadii,ebT2');

let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.abs(b), `${w || ''}: expected ${b}, got ${a}`);
const abs = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b} ± ${tol}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('limb darkening and Kepler\'s equation', () => {
  /* a small planet at the center hides k² × I(0)/(1 − u₁/3 − u₂/6) = 1.215 k² of the light */
  near(c.blocked(0, 0.01), 1e-4 / (1 - c.U1 / 3 - c.U2 / 6), 2e-3, 'small planet at center');
  abs(c.blocked(1.2, 0.1), 0, 0, 'clear of the star'); abs(c.blocked(0, 2), 1, 3e-4, 'star fully covered');
  for (const e of [0, 0.3, 0.8]) for (const M of [0.1, 1, 3, 6]) { const E = c.solveE(M, e); abs(E - e * Math.sin(E), M, 1e-12, `Kepler e ${e}`); }
});

group('two stars: light', () => {
  /* twin stars, centered: one star is hidden, so half the light */
  abs(c.ebFlux(0, 0, true, 1, 1, 5772, 5772), 0.5, 2e-4, 'twins');
  /* a total eclipse of the smaller star leaves exactly the larger one's light, L₁/(L₁ + L₂) */
  const L1 = c.ebLight(1, 5772), L2 = c.ebLight(0.3, 3300); abs(L1, 1, 1e-12, 'the Sun');
  abs(c.ebFlux(0, 0, false, 1, 0.3, 5772, 3300), L1 / (L1 + L2), 1e-12, 'total eclipse');
  /* out of eclipse: everything */
  abs(c.ebFlux(3 * c.R_SUN, 0, true, 1, 0.3, 5772, 3300), 1, 0, 'out of eclipse');
  /* the star 2 temperature back from the total eclipse */
  abs(c.ebT2(5772, 1, 0.3, L1 / (L1 + L2)), 3300, 1e-6, 'T₂ from the flat bottom');
  /* equal areas hidden: the eclipse depths go as the surface brightness, T⁴ */
  const d1 = 1 - c.ebFlux(0, 0.2 * c.R_SUN, true, 1, 1, 8000, 5000), d2 = 1 - c.ebFlux(0, 0.2 * c.R_SUN, false, 1, 1, 8000, 5000);
  near(d1 / d2, (8000 / 5000) ** 4, 1e-9, 'depth ratio');
});

group('two stars: velocities and masses', () => {
  const Per = 1.6646 * c.DAY, K = c.ebK(Per, 1, 0.3, Math.PI / 2, 0);
  near(K.K1 / K.K2, 0.3, 1e-12, 'K₁/K₂ = M₂/M₁');
  /* K₁ + K₂ is the relative orbital speed 2πa/P for a circular orbit, edge on */
  near(K.K1 + K.K2, c.TAU * c.ebA(Per, 1.3) / Per, 1e-12, 'relative speed');
  const m = c.ebMasses(Per, K.K1, K.K2, 0); near(m.M1, 1, 1e-12, 'M₁'); near(m.M2, 0.3, 1e-12, 'M₂');
  /* inclined: the velocities give M sin³i */
  const i = 80 * Math.PI / 180, Ki = c.ebK(Per, 1, 0.3, i, 0), mi = c.ebMasses(Per, Ki.K1, Ki.K2, 0); near(mi.M1, Math.sin(i) ** 3, 1e-12, 'M₁ sin³i');
  /* eccentric */
  const Ke = c.ebK(5 * c.DAY, 1.5, 1.2, Math.PI / 2, 0.3), me = c.ebMasses(5 * c.DAY, Ke.K1, Ke.K2, 0.3); near(me.M1, 1.5, 1e-12, 'eccentric M₁'); near(me.M2, 1.2, 1e-12, 'eccentric M₂');
  /* the Sun and Earth: 1 AU in a year */
  near(c.ebA(365.25 * c.DAY, 1), c.AU, 2e-5, 'Kepler III');
});

group('two stars: radii from the contact times (straight line approximation)', () => {
  /* central eclipse, circular orbit: the true contact times on the curved orbit give radii within 1.5% of the true ones at a = 6.5 R☉ */
  const Per = 1.6646 * c.DAY, a = c.ebA(Per, 1.3), K = c.ebK(Per, 1, 0.3, Math.PI / 2, 0);
  const t14 = Per / Math.PI * Math.asin(1.3 * c.R_SUN / a), t23 = Per / Math.PI * Math.asin(0.7 * c.R_SUN / a), r = c.ebRadii(K.K1, K.K2, t14, t23);
  near(r.big, 1, 0.015, 'R₁'); near(r.small, 0.3, 0.015, 'R₂');
  /* in the limit of a wide orbit the approximation is exact */
  const P2 = 400 * c.DAY, a2 = c.ebA(P2, 1.3), K2 = c.ebK(P2, 1, 0.3, Math.PI / 2, 0);
  const r2 = c.ebRadii(K2.K1, K2.K2, P2 / Math.PI * Math.asin(1.3 * c.R_SUN / a2), P2 / Math.PI * Math.asin(0.7 * c.R_SUN / a2));
  near(r2.big, 1, 1e-4, 'wide R₁'); near(r2.small, 0.3, 1e-4, 'wide R₂');
});

console.log(`${n} groups passed`);
