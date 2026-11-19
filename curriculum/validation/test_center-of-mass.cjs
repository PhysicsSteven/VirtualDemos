'use strict';
// Center of Mass: weighted average, the exploding firework's CM parabola, the boat.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('center-of-mass', 'G,centre,firework,boatShift,adaptSimpson,laminaStrips,laminaExact,pappusVolumes,pinTip');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('centre of mass is the mass weighted average', () => {
  const C = c.centre([{ m: 2, x: 0.25, y: 0.3 }, { m: 1, x: 0.75, y: 0.45 }, { m: 1, x: 0.6, y: 0.12 }]); near(C.x, (0.5 + 0.75 + 0.6) / 4, 1e-15); near(C.y, (0.6 + 0.45 + 0.12) / 4, 1e-15); near(C.M, 4, 1e-15);
});
group('firework: CM of the pieces follows the unexploded parabola until the first piece lands', () => {
  for (const [fr, u, phi] of [[0.5, 8, 0], [0.3, 12, 0.6], [0.8, 20, -1.2], [0.5, 0, 0]]) {
    const F = c.firework(20, Math.PI / 3, fr, u, phi), tEnd = Math.min(F.a.tLand, F.b.tLand);
    for (const s of [0, 0.3, 0.7, 1].map((k) => k * tEnd)) { const a = F.at(F.a, s), b = F.at(F.b, s), w = F.whole(F.tTop + s); near(fr * a.x + (1 - fr) * b.x, w.x, 1e-12); near(fr * a.y + (1 - fr) * b.y, w.y, 1e-12); }
    near(F.at(F.a, F.a.tLand).y, 0, 1e-9); near(F.at(F.b, F.b.tLand).y, 0, 1e-9);
  }
  // horizontal split: both land together and the mass weighted landing point is the original range
  const F = c.firework(20, Math.PI / 3, 0.3, 10, 0); near(F.a.tLand, F.b.tLand, 1e-12); near(0.3 * F.at(F.a, F.a.tLand).x + 0.7 * F.at(F.b, F.b.tLand).x, F.whole(F.tWhole).x, 1e-12);
  near(F.whole(F.tWhole).x, 400 * Math.sin(2 * Math.PI / 3) / 9.81, 1e-12);
});
group('boat: the CM stays put; shift = −mL/(m + M)', () => {
  const m = 70, M = 150, L = 4, xb = c.boatShift(m, M, L), xp0 = -L / 2, xp1 = xb + L / 2; near(m * xp0 + M * 0, m * xp1 + M * xb, 1e-12); near(xb, -70 * 4 / 220, 1e-15);
});
group('plate bounded by curves: area, moments and balance point against closed forms (OpenStax Calculus Vol 1, 6.6)', () => {
  const zero = () => 0, s = 7.85;
  /* semicircle of radius r: A = πr²/2, x̄ = 0, ȳ = 4r/(3π) */
  const r = 0.3, semi = (x) => Math.sqrt(Math.max(0, r * r - x * x));
  let E = c.laminaExact(semi, zero, -r, r, s); near(E.A, Math.PI * r * r / 2, 1e-10, 'semicircle A'); near(E.xbar, 0, 1e-10, 'semicircle x̄'); near(E.ybar, 4 * r / (3 * Math.PI), 1e-9, 'semicircle ȳ');
  near(E.M, s * Math.PI * r * r / 2, 1e-10, 'M = σA'); near(E.Mx, s * 2 * r ** 3 / 3, 1e-9, 'semicircle M_x = σ·2r³/3');
  /* right triangle, legs 0.6 along x and 0.4 along y: centroid at a third of each leg */
  E = c.laminaExact((x) => 0.4 * (1 - x / 0.6), zero, 0, 0.6, s); near(E.A, 0.12, 1e-12, 'triangle A'); near(E.xbar, 0.2, 1e-12, 'triangle x̄'); near(E.ybar, 0.4 / 3, 1e-12, 'triangle ȳ');
  /* between y = x and y = x² on [0, 1]: A = 1/6, M_y/σ = 1/12, M_x/σ = 1/15, so (1/2, 2/5) */
  E = c.laminaExact((x) => x, (x) => x * x, 0, 1, 1); near(E.A, 1 / 6, 1e-12); near(E.My, 1 / 12, 1e-12); near(E.Mx, 1 / 15, 1e-12); near(E.xbar, 0.5, 1e-12); near(E.ybar, 0.4, 1e-12);
  /* a quarter circle in the first quadrant: x̄ = ȳ = 4r/(3π) */
  E = c.laminaExact(semi, zero, 0, r, 1); near(E.xbar, 4 * r / (3 * Math.PI), 1e-9, 'quarter x̄'); near(E.ybar, 4 * r / (3 * Math.PI), 1e-9, 'quarter ȳ');
});
group('plate bounded by curves: the strip sums, each strip at its middle, against their closed forms in n', () => {
  /* between y = x and y = x² with n midpoint strips: A_n = 1/6 + 1/(12n²), M_y,n = 1/12 + 1/(24n²) (so x̄_n = 1/2 exactly),
     M_x,n = ½[2/15 + 1/(12n²) − 7/(240n⁴)] */
  for (const n of [1, 2, 8, 37, 1000]) {
    const St = c.laminaStrips((x) => x, (x) => x * x, 0, 1, n, 1);
    near(St.A, 1 / 6 + 1 / (12 * n * n), 1e-13, 'A_' + n); near(St.My, 1 / 12 + 1 / (24 * n * n), 1e-13, 'My_' + n); near(St.xbar, 0.5, 1e-13, 'x̄_' + n);
    near(St.Mx, 0.5 * (2 / 15 + 1 / (12 * n * n) - 7 / (240 * n ** 4)), 1e-13, 'Mx_' + n);
    assert.strictEqual(St.strips.length, n);
  }
  const St = c.laminaStrips((x) => x, (x) => x * x, 0, 1, 8, 7.85); near(St.ybar, 0.4007539971, 1e-9, 'ȳ_8'); near(St.M, 7.85 * (1 / 6 + 1 / 768), 1e-13, 'M_8');
});
group('Pappus: volume = 2π × (distance the centroid travels) × area, against washers and shells', () => {
  const zero = () => 0, r = 0.3, semi = (x) => Math.sqrt(Math.max(0, r * r - x * x));
  let V = c.pappusVolumes(semi, zero, -r, r, 'x'); near(V.pappus, 4 / 3 * Math.PI * r ** 3, 1e-9, 'sphere'); near(V.direct, 4 / 3 * Math.PI * r ** 3, 1e-9, 'sphere, washers');
  V = c.pappusVolumes((x) => 0.4 * (1 - x / 0.6), zero, 0, 0.6, 'x'); near(V.pappus, Math.PI * 0.6 * 0.16 / 3, 1e-12, 'cone about x'); near(V.direct, V.pappus, 1e-12);
  V = c.pappusVolumes((x) => x, (x) => x * x, 0, 1, 'y'); near(V.pappus, Math.PI / 6, 1e-12, 'about y'); near(V.direct, Math.PI / 6, 1e-12, 'shells');
  V = c.pappusVolumes((x) => x, (x) => x * x, 0, 1, 'x'); near(V.pappus, 2 * Math.PI / 15, 1e-12, 'about x'); near(V.direct, 2 * Math.PI / 15, 1e-12, 'washers');
  /* a torus: a disk of radius 0.1 centered 0.5 from the y axis, spun about it: V = 2π² R r² */
  const R = 0.5, a = 0.1, top = (x) => Math.sqrt(Math.max(0, a * a - (x - R) ** 2)), bot = (x) => -top(x);
  V = c.pappusVolumes(top, bot, R - a, R + a, 'y'); near(V.pappus, 2 * Math.PI ** 2 * R * a * a, 1e-9, 'torus');
});
group('balancing on a pin: no torque at the balance point; the tipping rate is Mgd/I with I from the strips', () => {
  const zero = () => 0, r = 0.3, semi = (x) => Math.sqrt(Math.max(0, r * r - x * x)), s = 7.85;
  /* the pin at the middle of the straight edge: d = 4r/(3π), and I about the diameter is σπr⁴/8 */
  let P = c.pinTip(semi, zero, -r, r, 0, 0, s); near(P.d, 4 * r / (3 * Math.PI), 1e-9); near(P.I, s * Math.PI * r ** 4 / 8, 1e-9, 'I about the diameter');
  near(P.alpha0, P.E.M * c.G * P.d / P.I, 1e-12); near(P.nx, 0, 1e-9); near(P.ny, 1, 1e-12);
  /* at the balance point there is no torque */
  P = c.pinTip((x) => x, (x) => x * x, 0, 1, 0.5, 0.4, s); near(P.d, 0, 1e-9); near(P.alpha0, 0, 1e-9);
  /* the rectangle 0.6 × 0.4 on a pin at its left edge's middle: I about the short axis through the edge is M(0.6)²/3; d = 0.3 */
  P = c.pinTip(() => 0.4, zero, 0, 0.6, 0, 0.2, s); const M = s * 0.24; near(P.d, 0.3, 1e-12); near(P.I, M * 0.36 / 3, 1e-12, 'rectangle I'); near(P.alpha0, M * 9.81 * 0.3 / (M * 0.12), 1e-12);
});
console.log(`${n} centre of mass test groups passed`);
