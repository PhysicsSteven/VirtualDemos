'use strict';
// Rotating Frames: the ball seen from the turning table against a direct integration of Newton's law in that frame (Coriolis and
// centrifugal terms), the rolling ball against an integration of the ball's spin with the no slip condition, the edge time, and
// the Foucault pendulum's exact solution against RK4, its turn rate Ω sin λ and the sidereal day.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('rotating-frames', 'RF_OMEGA_E,RF_STELLAR,rfRot,rfZx,rfRoom,rfLaunchRoom,rfToTable,rfCoriolis,rfCentrifugal,rfEdgeTime,rfFoucault,rfTurnTime,rfDegPerHour');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const D = Math.PI / 180, RPM = 2 * Math.PI / 60;
/* RK4 on a state array */
function rk4(f, y, t1, steps) { const h = t1 / steps; let t = 0; y = y.slice();
  for (let s = 0; s < steps; s++) { const k1 = f(t, y), k2 = f(t + h / 2, y.map((v, i) => v + h / 2 * k1[i])), k3 = f(t + h / 2, y.map((v, i) => v + h / 2 * k2[i])), k4 = f(t + h, y.map((v, i) => v + h * k3[i]));
    y = y.map((v, i) => v + h / 6 * (k1[i] + 2 * k2[i] + 2 * k3[i] + k4[i])); t += h; } return y; }

test('constants: Ω = 7.2921151e-5 rad/s, sidereal day 86 164.099 s = 23 h 56 min 4.099 s', () => {
  near(C.RF_OMEGA_E, 7.2921151467e-5, 1e-15); near(C.RF_STELLAR, 86164.0989, 1e-3); near(C.RF_STELLAR - (23 * 3600 + 56 * 60), 4.0989, 1e-3);
});
test('sliding ball: straight line in the room; seen from the table it obeys a′ = −2Ω×v′ + Ω²r′ (RK4 in the turning frame)', () => {
  for (const om of [10, -10, 30]) for (const [p0, u, by] of [[[0, -1.76], [0, 2], 'room'], [[0, -1.76], [0, 2], 'rider'], [[0, 0], [0.3, 1.5], 'room'], [[0, -1], [0, 0], 'rider']]) {
    const Om = om * RPM, v0 = by === 'rider' ? C.rfLaunchRoom(p0, u, Om) : u, t1 = 1.3;
    const R = C.rfRoom(p0, v0, Om, 'slide', t1); near(R.r[0], p0[0] + v0[0] * t1, 1e-12); near(R.r[1], p0[1] + v0[1] * t1, 1e-12);
    const T0 = C.rfToTable(p0, v0, Om, 0);
    if (by === 'rider') { near(T0.v[0], u[0], 1e-12, 'a rider measures the throw as given'); near(T0.v[1], u[1], 1e-12); }
    const fr = (t, y) => { const c = C.rfCoriolis([y[2], y[3]], Om), e = C.rfCentrifugal([y[0], y[1]], Om); return [y[2], y[3], c[0] + e[0], c[1] + e[1]]; };
    const y = rk4(fr, [T0.r[0], T0.r[1], T0.v[0], T0.v[1]], t1, 4000), Tb = C.rfToTable(R.r, R.v, Om, t1);
    near(y[0], Tb.r[0], 1e-9); near(y[1], Tb.r[1], 1e-9); near(y[2], Tb.v[0], 1e-9); near(y[3], Tb.v[1], 1e-9);
  }
});
test('Coriolis is at right angles to v′ and to the right of it when the table turns counterclockwise; centrifugal points out', () => {
  const Om = 1, v = [0, 2], c = C.rfCoriolis(v, Om); near(c[0] * v[0] + c[1] * v[1], 0, 1e-15); near(Math.hypot(c[0], c[1]), 4, 1e-15); assert(c[0] > 0, 'to the right of +y is +x');
  const e = C.rfCentrifugal([1.5, 0], 2); near(e[0], 6, 1e-15); near(e[1], 0, 1e-15);
});
test('rolling ball: dv/dt = (2/7)Ω ẑ×v from the no slip condition and the torque, checked by integrating the spin', () => {
  /* state: r, v (from the closed form), ω horizontal (integrated): I dω/dt = (−a ẑ) × F, F = m dv/dt; no slip: v − a ω × ẑ = Ω ẑ × r */
  const a = 0.03, k = 2 / 5;   /* radius (m) and I = k m a² */
  for (const om of [20, -12]) { const Om = om * RPM, p0 = [0.2, -0.4], v0 = [0.5, 0.3];
    const w = (rr, vv) => { const z = C.rfZx(rr); /* ω × ẑ = (ω_y, −ω_x) for horizontal ω; solve ω from the no slip condition */ const q = [(vv[0] - Om * z[0]) / a, (vv[1] - Om * z[1]) / a]; return [-q[1], q[0]]; };
    let om0 = w(p0, v0);
    const f = (t, y) => { const R = C.rfRoom(p0, v0, Om, 'roll', t), F = R.a;   /* per unit mass */
      /* torque per unit mass: (−a ẑ) × F = −a (−F_y, F_x) */ const tq = [a * F[1], -a * F[0]]; return [tq[0] / (k * a * a), tq[1] / (k * a * a)]; };
    const t1 = 4.7, y = rk4(f, om0, t1, 3000), R = C.rfRoom(p0, v0, Om, 'roll', t1), zr = C.rfZx(R.r);
    const slip = [R.v[0] - a * y[1] - Om * zr[0], R.v[1] + a * y[0] - Om * zr[1]];   /* v − a ω × ẑ − Ω ẑ × r */
    near(Math.hypot(slip[0], slip[1]), 0, 1e-8, 'contact point does not slip');
    /* and the closed form position is the integral of its velocity */
    const yr = rk4((t) => { const q = C.rfRoom(p0, v0, Om, 'roll', t).v; return [q[0], q[1]]; }, p0, t1, 3000); near(yr[0], R.r[0], 1e-9); near(yr[1], R.r[1], 1e-9);
    /* circles at 2Ω/7: back to its start after 7π/|Ω| */
    const Bk = C.rfRoom(p0, v0, Om, 'roll', 7 * Math.PI / Math.abs(Om)); near(Bk.r[0], p0[0], 1e-9); near(Bk.r[1], p0[1], 1e-9);
  }
});
test('a ball rolling at rest in the room stays put (spinning) while the table turns under it', () => {
  const R = C.rfRoom([0.7, 0.1], [0, 0], 2, 'roll', 13); near(R.r[0], 0.7, 1e-12); near(R.r[1], 0.1, 1e-12);
});
test('edge time: straight lines by geometry, the rolling circle by its own position', () => {
  near(C.rfEdgeTime([0, -1.76], [0, 2], 1, 'slide', 2), (2 + 1.76) / 2, 1e-12);
  near(C.rfEdgeTime([0, 0], [1.5, 0], 1, 'slide', 2), 2 / 1.5, 1e-12);
  assert.equal(C.rfEdgeTime([0, 0], [0, 0], 1, 'slide', 2), Infinity);
  const Om = 20 * RPM, te = C.rfEdgeTime([0, 0], [0, 0.5], Om, 'roll', 2); assert.equal(te, Infinity, 'circle of diameter 1.67 m stays on a 2 m table');
  const t2 = C.rfEdgeTime([0, 0], [0, 1.0], Om, 'roll', 2), q = C.rfRoom([0, 0], [0, 1.0], Om, 'roll', t2).r; near(Math.hypot(q[0], q[1]), 2, 1e-9);
  for (let t = 0; t < t2 * 0.999; t += t2 / 200) { const s = C.rfRoom([0, 0], [0, 1.0], Om, 'roll', t).r; assert(Math.hypot(s[0], s[1]) < 2); }
});
test('Foucault: the exact solution matches RK4 of x″ = 2Ωz y′ − ω0² x, y″ = −2Ωz x′ − ω0² y', () => {
  for (const [lat, spin, start] of [[48.846, 1, 'edge'], [48.846, 1000, 'edge'], [-33.87, 1000, 'push'], [90, 300, 'push'], [0, 1000, 'edge']]) {
    const o = { L: 67, lat: lat * D, A: 3, start, az: Math.PI / 2, spin }, F = C.rfFoucault(o), Oz = spin * C.RF_OMEGA_E * Math.sin(lat * D), w0 = Math.sqrt(9.81 / 67);
    near(F.Oz, Oz, 1e-18); near(F.w0, w0, 1e-15);
    const s0 = F.at(0); near(s0.x, start === 'edge' ? 0 : 0, 1e-12); near(s0.y, start === 'edge' ? 3 : 0, 1e-12); near(s0.vx, 0, 1e-12); near(s0.vy, start === 'push' ? 3 * w0 : 0, 1e-12);
    const f = (t, y) => [y[2], y[3], 2 * Oz * y[3] - w0 * w0 * y[0], -2 * Oz * y[2] - w0 * w0 * y[1]], t1 = 60;
    const y = rk4(f, [s0.x, s0.y, s0.vx, s0.vy], t1, 20000), s = F.at(t1);
    near(y[0], s.x, 1e-7); near(y[1], s.y, 1e-7); near(y[2], s.vx, 1e-7); near(y[3], s.vy, 1e-7);
  }
});
test('Foucault: the plane turns at −Ω sin λ, read at the farthest out points; clockwise in the north, counterclockwise in the south', () => {
  for (const [lat, start] of [[48.846, 'edge'], [-33.87, 'edge'], [60, 'push'], [90, 'edge']]) {
    const F = C.rfFoucault({ L: 67, lat: lat * D, A: 3, start, az: Math.PI / 2, spin: 1 });
    for (const k of [10, 1000, 6000]) { const t = F.apex(k), s = F.at(t), r = Math.hypot(s.x, s.y);
      near(r, start === 'push' ? 3 * F.w0 / F.w : 3, 1e-9, 'farthest out: A, or A ω0/ω when pushed');
      let a = Math.atan2(s.y, s.x) - Math.PI / 2 + F.Oz * t; a = a - Math.PI * Math.round(a / Math.PI); near(a, 0, 1e-9, 'azimuth = start − Ωz t (mod π)'); }
  }
});
test('turn time T⋆/sin λ: Paris 31.8 h, North Pole 23.93 h, Sydney 42.9 h, never at the equator; 15.04° sin λ per hour', () => {
  near(C.rfTurnTime(48.846 * D) / 3600, 31.79, 0.01); near(C.rfTurnTime(90 * D) / 3600, 23.934, 0.001); near(C.rfTurnTime(-33.87 * D) / 3600, 42.95, 0.01);
  assert.equal(C.rfTurnTime(0), Infinity); near(C.rfDegPerHour(90 * D), 15.041, 0.001); near(C.rfDegPerHour(48.846 * D), 11.32, 0.01);
  near(C.rfTurnTime(48.846 * D, 1000), C.rfTurnTime(48.846 * D) / 1000, 1e-9);
  near(C.rfFoucault({ L: 67, lat: 0.5, A: 1, start: 'edge', az: 0 }).period, 16.42, 0.01, 'Panthéon swing period 2π√(67/9.81)');
});
console.log(`${n} tests passed`);
