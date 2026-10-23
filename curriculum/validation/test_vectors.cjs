'use strict';
// Vectors and Relative Motion: vector algebra identities and the river crossing.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('vectors', 'add,sub,scale,dot,crossZ,mag,angleDeg,fromPolar,between,projection,river,straightAcross,currentAt,meanCurrent,riverPos,G_FT,ftForces,ftHolds,forceTable,ftHeld,FT_GEOM,ftPlay,ftRest');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
group('components and polar form round trip; angle 0 to 360 counterclockwise from +x', () => {
  near(c.mag([3, 4]), 5, 1e-15); near(c.angleDeg([3, 4]), 53.13010235415598, 1e-12);
  for (const [r, d] of [[5, 0], [2, 90], [3, 135], [4, 200], [1, 315]]) { const v = c.fromPolar(r, d); near(c.mag(v), r, 1e-12); near(c.angleDeg(v), d, 1e-9); }
  near(c.angleDeg([-1, -1]), 225, 1e-12); near(c.angleDeg([0, -2]), 270, 1e-12);
});
group('sum and difference by components; triangle inequality; A − B = A + (−B)', () => {
  const A = [5, 1], B = [-2, 4];
  assert.deepEqual(c.add(A, B), [3, 5]); assert.deepEqual(c.sub(A, B), c.add(A, c.scale(-1, B)));
  assert(c.mag(c.add(A, B)) <= c.mag(A) + c.mag(B)); near(c.mag(c.add([2, 0], [3, 0])), 5, 0, 'parallel: magnitudes add');
});
group('dot and cross: component forms equal |A||B| cos φ and sin φ; anticommuting cross; projection', () => {
  const A = [5, 1], B = [2, 4], ph = c.between(A, B) * Math.PI / 180;
  near(c.dot(A, B), 14, 0); near(c.mag(A) * c.mag(B) * Math.cos(ph), 14, 1e-12);
  near(c.crossZ(A, B), 18, 0); near(c.mag(A) * c.mag(B) * Math.sin(ph), 18, 1e-12); near(c.crossZ(B, A), -18, 0);
  near(c.dot([1, 0], [0, 7]), 0, 0); near(c.projection(A, B), 14 / Math.sqrt(20), 1e-12);
});
group('river: v_boat,shore = v_boat,water + v_water,shore; crossing time, drift, straight across', () => {
  const r = c.river(1.5, 2.5, 0, 60); near(r.t, 24, 1e-12); near(r.drift, 36, 1e-12); near(r.speed, Math.hypot(1.5, 2.5), 1e-12);
  const a = c.straightAcross(1.5, 2.5); near(a, Math.asin(0.6) * 180 / Math.PI, 1e-12);
  const q = c.river(1.5, 2.5, a, 60); near(q.drift, 0, 1e-9); near(q.t, 60 / 2, 1e-9, 'v_y = √(2.5² − 1.5²) = 2');
  assert(Number.isNaN(c.straightAcross(3, 2))); assert.equal(c.river(1, 2, 90, 60).t, Infinity);
});
group('slower near the banks: u(y) = 4u y(W − y)/W², drift uses the 2u/3 average, the path is exact', () => {
  near(c.currentAt(1.5, 30, 60, 'banks'), 1.5, 1e-15); near(c.currentAt(1.5, 0, 60, 'banks'), 0, 0); near(c.meanCurrent(1.5, 'banks'), 1, 1e-15);
  const r = c.river(1.5, 2.5, 0, 60, 'banks'); near(r.t, 24, 1e-12); near(r.drift, 24, 1e-12);
  // numerical integration of dx/dt = v_bx + u(y(t)) agrees with the closed form at every time
  const th = 20, R2 = c.river(1.5, 2.5, th, 60, 'banks'), vy = R2.vbw[1], N = 200000, h = R2.t / N; let x = 0;
  for (let i = 0; i < N; i++) { const ym = vy * (i + 0.5) * h; x += (R2.vbw[0] + c.currentAt(1.5, ym, 60, 'banks')) * h; }
  near(x, R2.drift, 1e-6); const q = c.riverPos(1.5, 2.5, th, 60, 'banks', R2.t); near(q[0], R2.drift, 1e-9); near(q[1], 60, 1e-9);
  const a = c.straightAcross(1.5, 2.5, 'banks'); near(a, Math.asin(1 / 2.5) * 180 / Math.PI, 1e-12); near(c.river(1.5, 2.5, a, 60, 'banks').drift, 0, 1e-9);
  near(c.riverPos(1.5, 2.5, 0, 60, 'uniform', 10)[0], 15, 1e-12);
});
group('force table: F = mg along each string; the equilibrant is −(the sum of the others); the ring centers when the forces cancel', () => {
  const g = c.G_FT; near(g, 9.81, 0);
  const s = [{ m: 0.150, deg: 20 }, { m: 0.200, deg: 110 }], R = c.add(c.fromPolar(0.150 * g, 20), c.fromPolar(0.200 * g, 110));
  const t = c.forceTable(s.concat([{ m: 0.1, deg: 0 }]), 0);
  near(t.Emag, c.mag(R), 1e-12); near(t.Edeg, (c.angleDeg(R) + 180) % 360, 1e-9); near(t.Em, c.mag(R) / g, 1e-12);
  // perpendicular strings: |R| = g √(m1² + m2²)
  near(c.forceTable([{ m: 0.3, deg: 0 }, { m: 0.4, deg: 90 }, { m: 0, deg: 0 }], 0).Em, 0.5, 1e-12);
  // the exact equilibrant balances with ideal pulleys; one gram more on a string does not
  const ex = s.concat([{ m: t.Em, deg: t.Edeg }]); assert(c.ftHolds(ex, 0)); assert(c.forceTable(ex, 0).net < 1e-12);
  assert(!c.ftHolds([{ m: 0.151, deg: 20 }, s[1], ex[2]], 0));
  // three equal masses 120° apart balance; two strings balance only when equal and opposite
  assert(c.ftHolds([{ m: 0.2, deg: 0 }, { m: 0.2, deg: 120 }, { m: 0.2, deg: 240 }], 0));
  assert(c.ftHolds([{ m: 0.2, deg: 30 }, { m: 0.2, deg: 210 }], 0)); assert(!c.ftHolds([{ m: 0.2, deg: 30 }, { m: 0.2, deg: 200 }], 0));
});
group('force table friction: centered exactly when some tensions within mg ± f add to zero', () => {
  const g = c.G_FT, f = 0.001 * g;   // up to the weight of 1 g on each pulley
  const base = [{ m: 0.2, deg: 0 }, { m: 0.2, deg: 120 }, { m: 0.2, deg: 240 }];
  // strings 120° apart: extra mass δ on string 1 is taken up while δ g ≤ 2f (string 1 by −f, strings 2 and 3 by +f each: f + 2f cos 60° = 2f)
  const at = (dm) => c.ftHolds([{ m: 0.2 + dm, deg: 0 }, base[1], base[2]], f);
  assert(at(0.0019) && at(0.002 - 1e-9) && !at(0.0021) && at(-0.0019) && !at(-0.0021));
  // the same limit sideways: string 1 turned by a small angle is held while its sideways pull is within f(|sin 120°| + |sin 240°|) = √3 f
  const turn = (d) => c.ftHolds([{ m: 0.2, deg: d }, base[1], base[2]], f), lim = Math.asin(Math.sqrt(3) * 0.001 / 0.2) * 180 / Math.PI;
  assert(!turn(2 * lim)); assert(turn(0.5 * lim));
  // brute force: whenever ftHolds says centered, a grid of tension shifts within ± f gets the net force down to the grid's resolution
  const rnd = (() => { let sd = 7; return () => { sd = (sd * 16807) % 2147483647; return (sd - 1) / 2147483646; }; })();
  let yes = 0, no = 0;
  for (let trial = 0; trial < 300; trial++) {
    const st = [0, 1].map(() => ({ m: 0.05 + rnd() * 0.3, deg: Math.round(rnd() * 360) }));
    const t = c.forceTable(st.concat([{ m: 0, deg: 0 }]), 0);
    st.push({ m: t.Em + (rnd() - 0.5) * 0.008, deg: t.Edeg + (rnd() - 0.5) * 4 });
    const S = c.ftForces(st).reduce(c.add, [0, 0]), u = st.map((q) => c.fromPolar(1, q.deg));
    let best = Infinity; const N = 120;
    for (let a = 0; a <= N; a++) for (let b = 0; b <= N; b++) {
      const P = c.add(S, c.add(c.scale(f * (2 * a / N - 1), u[0]), c.scale(f * (2 * b / N - 1), u[1])));
      const d3 = Math.max(-f, Math.min(f, -c.dot(P, u[2]))); best = Math.min(best, c.mag(c.add(P, c.scale(d3, u[2]))));
    }
    const h = c.ftHolds(st, f);
    if (h) { yes++; assert(best <= 2 * f / N + 1e-12, `trial ${trial}: centered, but the best residual is ${best}`); }
    else { no++; assert(best > 1e-6 * f, `trial ${trial}: off center, but a grid balance exists`); }
  }
  assert(yes > 20 && no > 20, `both cases sampled (${yes}, ${no})`);
  assert(!c.ftHolds([{ m: 0.2 + 1e-6, deg: 0 }, base[1], base[2]], 0));
});
group('force table ring: the pin\'s play; pin out, the ring rests at the weighted geometric median of the pulleys', () => {
  const g = c.G_FT, R = c.FT_GEOM.R; near(c.ftPlay(), 0.020 - 0.0015 - 0.004, 1e-15);
  // balanced strings: the ring stays at the center with the pin out
  const bal = c.ftRest([{ m: 0.2, deg: 0 }, { m: 0.2, deg: 120 }, { m: 0.2, deg: 240 }], 0);
  assert(bal.held && !bal.rim && c.mag(bal.x) === 0);
  // centered within friction (ftHolds) is exactly when the ring does not move with the pin out
  const f = 0.001 * g, near3 = (dm) => [{ m: 0.2 + dm, deg: 0 }, { m: 0.2, deg: 120 }, { m: 0.2, deg: 240 }];
  for (const dm of [0.0019, 0.0021, -0.0021, 0.01]) { const r = c.ftRest(near3(dm), f); assert.equal(c.mag(r.x) === 0, c.ftHolds(near3(dm), f), `dm ${dm}`); }
  // ideal pulleys: at rest the pulls along the actual strings cancel, and the point agrees with Weiszfeld\'s iteration
  const weis = (st) => { const P = st.map((q) => c.fromPolar(R, q.deg)); let x = [1e-3, 1.3e-3];
    for (let k = 0; k < 20000; k++) { let nx = [0, 0], d = 0; P.forEach((p, i) => { const L = c.mag(c.sub(p, x)); nx = c.add(nx, c.scale(st[i].m / L, p)); d += st[i].m / L; }); x = c.scale(1 / d, nx); } return x; };
  for (const st of [[{ m: 0.15, deg: 20 }, { m: 0.2, deg: 110 }, { m: 0.29, deg: 253 }], [{ m: 0.1, deg: 40 }, { m: 0.15, deg: 160 }, { m: 0.12, deg: 270 }, { m: 0.08, deg: 4 }]]) {
    const r = c.ftRest(st, 0); assert(r.held && !r.rim); assert(c.mag(r.S) < 1e-6 * g, `net at rest ${c.mag(r.S)}`);
    near(c.mag(c.sub(r.x, weis(st))), 0, 1e-7, 'Weiszfeld');
  }
  // equal weights on three pulleys: the Fermat point, where the strings meet at 120°
  const fe = c.ftRest([{ m: 0.2, deg: 10 }, { m: 0.2, deg: 100 }, { m: 0.2, deg: 220 }], 0), u = fe.F.map((F) => c.scale(1 / c.mag(F), F));
  for (const [i, j] of [[0, 1], [1, 2], [2, 0]]) near(Math.acos(c.dot(u[i], u[j])) * 180 / Math.PI, 120, 1e-4, 'Fermat');
  // one string outweighs the others: the ring runs toward its pulley and is stopped at 0.8 R
  const run = c.ftRest([{ m: 0.4, deg: 0 }, { m: 0.1, deg: 120 }, { m: 0.1, deg: 240 }], c.G_FT * 0.001);
  assert(run.rim && !run.held); near(c.mag(run.x), 0.8 * R, 1e-12); near(run.x[1], 0, 1e-9);
  // with friction the ring stops at a place the friction can hold, before (or at) the ideal rest point
  const st = [{ m: 0.15, deg: 20 }, { m: 0.2, deg: 110 }, { m: 0.29, deg: 253 }], rf = c.ftRest(st, 0.002 * g), r0 = c.ftRest(st, 0);
  assert(rf.held && c.ftHeld(rf.S, rf.F.map((F) => c.scale(1 / c.mag(F), F)), 0.002 * g)); assert(c.mag(rf.x) <= c.mag(r0.x) + 1e-9 && c.mag(rf.x) > 0.5 * c.mag(r0.x));
});
console.log(`${n} vectors test groups passed`);
