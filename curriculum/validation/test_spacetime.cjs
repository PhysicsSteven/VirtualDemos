'use strict';
// Spacetime Diagrams: the Lorentz boost keeps the interval, composes by the velocity addition rule, and gives time
// dilation, length contraction and the twin result (OpenStax Vol 3 ch. 5). The page has no core markers, so pick() takes
// its functions by name, with the state S they read given as a prelude.
const assert = require('node:assert');
const { pick } = require('./demo_source.cjs');
const load = (beta) => pick('spacetime', 'gammaOf,boost,properTimes,pointAtTau,rodCorners,rodMeasure', `const S = { beta: ${beta}, L0: 5, rodT: 2 };`);
const c = load(0.6);
let n = 0;
const close = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }

group('γ = 1/√(1 − β²): 1.25 at 0.6c; the boost keeps t² − x² for every event', () => {
  close(c.gammaOf(0.6), 1.25, 1e-15); close(c.gammaOf(0), 1, 0);
  for (const b of [-0.9, -0.3, 0.5, 0.99]) for (const [t, x] of [[1, 0], [3, -2], [-1, 4], [2, 2]]) {
    const [tp, xp] = c.boost(t, x, b); close(tp * tp - xp * xp, t * t - x * x, 1e-11, `β ${b} (${t}, ${x})`);
  }
  // light stays light: x = t maps to x′ = t′, with the Doppler factor √((1 − β)/(1 + β))
  const [tp, xp] = c.boost(1, 1, 0.6); close(tp, xp, 1e-15); close(tp, 0.5, 1e-15);
});

group('two boosts are one boost at (β₁ + β₂)/(1 + β₁β₂); boosting back undoes it', () => {
  const b1 = 0.5, b2 = 0.7, b12 = (b1 + b2) / (1 + b1 * b2);
  for (const [t, x] of [[2, 1], [-1, 3]]) {
    const a = c.boost(...c.boost(t, x, b1), b2), d = c.boost(t, x, b12);
    close(a[0], d[0], 1e-12); close(a[1], d[1], 1e-12);
    const back = c.boost(...c.boost(t, x, 0.8), -0.8); close(back[0], t, 1e-12); close(back[1], x, 1e-12);
  }
  close(b12, 1.2 / 1.35, 1e-15); assert(b12 < 1);
});

group('time dilation and simultaneity: a clock moving at β ticks 1/γ as fast; events simultaneous in S are not in S′', () => {
  const [tp] = c.boost(10, 6, 0.6); close(tp, 8, 1e-12, 'the rocket clock reads 8 when Home reads 10');
  const a = c.boost(0, 0, 0.6), b = c.boost(0, 5, 0.6); close(b[0] - a[0], -1.25 * 0.6 * 5, 1e-12, 'Δt′ = −γβΔx');
});

group('twins: Home ages T, the traveler T/γ; proper time along a path and the point at a given proper time', () => {
  const T = 10, b = 0.6, home = [[0, 0], [T, 0]], twin = [[0, 0], [T / 2, b * T / 2], [T, 0]];
  close(c.properTimes(home)[1], T, 1e-15); const tw = c.properTimes(twin); close(tw[2], T / c.gammaOf(b), 1e-12);
  const p = c.pointAtTau(twin, tw, 6); close(p.t, 7.5, 1e-12); close(p.x, 3 - 0.6 * 2.5, 1e-12); assert.equal(p.seg, 2);
  // a light speed leg has zero proper time
  close(c.properTimes([[0, 0], [3, 3]])[1], 0, 0);
});

group('the rod: L₀/γ long in S at one lab time, L₀ long in S′ at one rocket time (length contraction)', () => {
  for (const beta of [0.3, 0.6, 0.9]) {
    const d = load(beta), g = d.gammaOf(beta), r = d.rodMeasure();
    close(r.frontS[0], r.back[0], 1e-15); close(r.frontS[1] - r.back[1], 5 / g, 1e-12, 'S length');
    const bp = d.boost(...r.back, beta), fp = d.boost(...r.frontP, beta);
    close(fp[0], bp[0], 1e-12, 'same t′'); close(fp[1] - bp[1], 5, 1e-12, 'S′ length L₀');
    // the rod's sides are worldlines at speed β
    const cs = d.rodCorners(1); close((cs[1][1] - cs[0][1]) / (cs[1][0] - cs[0][0]), beta, 1e-15);
  }
});

console.log(`${n} spacetime test groups passed`);
