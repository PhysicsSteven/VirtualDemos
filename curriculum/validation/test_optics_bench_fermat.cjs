'use strict';
// Optics Bench, Fermat: the quickest path from A to B obeys Snell's law (and equal angles off a mirror), and the traced Snell ray from A
// through the quickest crossing point reaches B. Feynman Lectures Vol I ch. 26.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('optics-bench', 'C_CM_NS,fermatTime,fermatSlope,fermatBest,fermatAngles,snell,sellmeier,GLASSES');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const CASES = [[[-10, 8], [8, -8], 1, 1.333], [[-10, 8], [8, -8], 1.333, 1], [[-3, 2], [12, -9], 1, 2.417], [[5, 6], [-7, -3], 1.5168, 1], [[-12, 10], [-2, -1], 1, 1.62]];
const rad = (d) => d * Math.PI / 180;

group('the time on a path: (n1 |AP| + n2 |PB|)/c, with c = 29.9792458 cm/ns', () => {
  near(c.C_CM_NS, 29.9792458, 0, 'c');
  near(c.fermatTime([0, 3], [4, -3], 0, 1, 1, false), (3 + 5) / 29.9792458, 1e-15, '3 + 5 cm in vacuum');
  near(c.fermatTime([0, 3], [4, -3], 0, 1, 1.5, false), (3 + 7.5) / 29.9792458, 1e-15, 'n2 = 1.5');
  near(c.fermatTime([0, 3], [4, 3], 0, 1.33, 9, true), 1.33 * 8 / 29.9792458, 1e-15, 'mirror: n2 ignored');
});

group('the quickest crossing point obeys Snell\'s law, n1 sin θ1 = n2 sin θ2, and every other point is slower', () => {
  for (const [A, B, n1, n2] of CASES) {
    const x = c.fermatBest(A, B, n1, n2, false), [t1, t2] = c.fermatAngles(A, B, x);
    near(n1 * Math.sin(rad(t1)), n2 * Math.sin(rad(t2)), 1e-10, 'Snell');
    assert(Math.abs(c.fermatSlope(A, B, x, n1, n2, false)) < 1e-12, 'dt/dx = 0');
    const tb = c.fermatTime(A, B, x, n1, n2, false);
    for (const dx of [-5, -0.5, -0.01, 0.01, 0.5, 5]) assert(c.fermatTime(A, B, x + dx, n1, n2, false) > tb, `slower at ${dx}`);
    /* the slope against a central difference */
    const h = 1e-5, xs = x + 1.7; near(c.fermatSlope(A, B, xs, n1, n2, false), (c.fermatTime(A, B, xs + h, n1, n2, false) - c.fermatTime(A, B, xs - h, n1, n2, false)) / (2 * h), 1e-7, 'slope');
  }
});

group('a ray from A refracted by the bench\'s own Snell routine at the quickest point goes through B', () => {
  for (const [A, B, n1, n2] of CASES) {
    const x = c.fermatBest(A, B, n1, n2, false), L = Math.hypot(x - A[0], A[1]), d = [(x - A[0]) / L, -A[1] / L], t = c.snell(d, [0, 1], n1, n2);
    assert(t, 'no total internal reflection on the quickest path');
    const s = -B[1] / -t[1]; near(x + s * t[0], B[0], 1e-9, 'lands on B');
  }
});

group('off a mirror: the quickest path makes equal angles, and goes through the image of B', () => {
  for (const [A, B] of [[[-10, 8], [8, 8]], [[-4, 2], [9, 7]], [[3, 5], [-6, 1]]]) {
    const x = c.fermatBest(A, B, 1, 1, true), [t1, t2] = c.fermatAngles(A, B, x);
    near(t1, t2, 1e-10, 'equal angles');
    assert(Math.abs(c.fermatSlope(A, B, x, 1.33, 1, true)) < 1e-12, 'dt/dx = 0 for any n');
    near(c.fermatTime(A, B, x, 1, 1, true), Math.hypot(B[0] - A[0], B[1] + A[1]) / 29.9792458, 1e-12, 'length to the image of B');
  }
});

group('the indices used: water 1.3335 and diamond 2.417 at 589.3 nm from the bench\'s Sellmeier formulas', () => {
  near(c.sellmeier(c.GLASSES.water, 589.3), 1.3335, 2e-4, 'water');
  near(c.sellmeier(c.GLASSES.diamond, 589.3), 2.417, 1e-3, 'diamond');
});
console.log(`${n} groups passed`);
