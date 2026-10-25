'use strict';
// Ball Launched from a Moving Cart: locks every figure quoted in notes/src/cart-launch.md, the TeacherKeys answers and the
// relative-motion worksheet key to the CORE, plus the physics it rests on (independent components, ½ a T² miss, incline).
// Figures that depend on g are computed from the CORE's own G, so the suite passes whichever value the file carries; the
// printed figures the notes quote are checked only when G is the value they were written for (9.81).
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('cart-launch', 'G,CATCH,MOUTH,TOPN,HALF,cartAccel,cartAt,ballFree,downTo,flightTime,landing,ballAt');
const G = c.G;
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol, `${w || ''}: expected ${b}, got ${a}`);
const printed = (x, d, s, w) => assert.strictEqual(x.toFixed(d), s, `${w || ''}: printed ${x.toFixed(d)}, quoted ${s}`);
const deg = Math.PI / 180;
function group(name, f) { f(); n++; console.log('PASS', name); }
const quotedG = Math.abs(G - 9.81) < 1e-12;   // the notes, keys and handout were written with g = 9.81 m/s²
console.log(`CORE g = ${G} m/s²${quotedG ? '' : ' (not 9.81: the printed figures of the notes and keys are skipped)'}`);

// the presets as the page defines them (demos/cart-launch.html PRESETS)
const STEADY = { v: 1.2, u: 4, phi: 0, ac: 0 }, REST = { v: 0, u: 4, phi: 0, ac: 0 };
const PUSH = { v: 1.2, u: 4, phi: 0, ac: 1.5 }, BRAKE = { v: 1.2, u: 4, phi: 0, ac: -1.5 }, INCLINE = { v: 0.5, u: 4, phi: 15 * deg, ac: 0 };

group('constants the notes and handout quote: catch within 2 cm, launcher mouth 16 cm above the track, cart half length 16 cm', () => {
  assert.strictEqual(c.CATCH, 0.02); assert.strictEqual(c.MOUTH, 0.16); assert.strictEqual(c.HALF, 0.16); assert.strictEqual(c.TOPN, -0.05);
  assert(G > 9.8 && G < 9.82, 'g is a standard value');
});

group('Steady cart (notes step 2, key Q1): T = 2u/g, apex u²/2g, ball and cart both move vT, caught', () => {
  const T = c.flightTime(STEADY);
  near(T, 2 * 4 / G, 1e-14, 'T = 2u/g');
  near(c.ballFree(STEADY, T / 2).n, 16 / (2 * G), 1e-12, 'apex u²/2g');
  near(c.ballFree(STEADY, T).s, 1.2 * T, 1e-12); near(c.cartAt(STEADY, T).s, 1.2 * T, 1e-12);
  const L = c.landing(STEADY); assert.strictEqual(L.kind, 'caught'); near(L.miss, 0, 1e-14);
  if (quotedG) {
    printed(T, 3, '0.815', 'time in the air readout'); printed(T, 4, '0.8155', 'key Q1 T');
    /* key Q1 prints the highest point as 0.816 m: 16/19.62 = 0.81549 m, which is 0.815 to three decimals (0.82 in the worksheet key) */
    printed(16 / (2 * G), 3, '0.815', 'highest point u²/2g'); printed(16 / (2 * G), 2, '0.82'); printed(1.2 * T, 3, '0.979', 'notes: both move 0.979 m');
  }
  // Cart at rest: the same flight, straight up and down
  near(c.flightTime(REST), T, 0); near(c.ballFree(REST, T).s, 0, 0); near(c.ballFree(REST, T / 2).n, 16 / (2 * G), 1e-12);
});

group('key Q2 (g independent): launch velocity relative to the ground 4.18 m/s at 73.3°; worksheet 4.27 m/s at 69.4°, 5.00 m/s at 53.1°', () => {
  for (const [v, spd, ang] of [[1.2, '4.18', '73.3'], [1.5, '4.27', '69.4'], [3.0, '5.00', '53.1']]) {
    const b = c.ballFree({ v, u: 4, phi: 0, ac: 0 }, 0);
    printed(Math.hypot(b.vs, b.vn), 2, spd, `|v| for v = ${v}`); printed(Math.atan2(b.vn, b.vs) / deg, 1, ang, `angle for v = ${v}`);
  }
});

group('Cart speeds up (notes step 4, key Q3): cart moves 1.477 m, ball 0.979 m, ball comes down ½ a T² = 0.499 m behind, lands on the track', () => {
  const T = c.flightTime(PUSH), miss = c.ballFree(PUSH, T).s - c.cartAt(PUSH, T).s;
  near(miss, -0.5 * 1.5 * T * T, 1e-12, '-½ a T²');
  near(c.cartAt(PUSH, T).s, 1.2 * T + 0.75 * T * T, 1e-12);
  const L = c.landing(PUSH); assert.strictEqual(L.kind, 'track'); assert(L.miss < -c.HALF, 'well behind the cart');
  near(c.ballFree(PUSH, L.t).n, -c.MOUTH, 1e-12, 'on the track surface');
  if (quotedG) { printed(c.cartAt(PUSH, T).s, 3, '1.477'); printed(c.ballFree(PUSH, T).s, 3, '0.979'); printed(-miss, 3, '0.499'); printed(-miss, 2, '0.50'); }
});

group('Cart brakes (notes step 4): the cart stops after v²/2|a| = 0.48 m (g independent) and the ball lands ahead', () => {
  const T = c.flightTime(BRAKE), k = c.cartAt(BRAKE, T);
  assert(T > 1.2 / 1.5, 'the cart stops before the ball comes down');
  near(k.s, 1.2 * 1.2 / (2 * 1.5), 1e-12); printed(k.s, 2, '0.48'); assert.strictEqual(k.v, 0); assert.strictEqual(k.a, 0);
  near(c.cartAt(BRAKE, T + 5).s, k.s, 0, 'stays stopped');
  const L = c.landing(BRAKE); assert(L.miss > 0, 'ahead of the launcher'); assert.notStrictEqual(L.kind, 'caught');
  // before the stop, the miss is +½|a|T²: worksheet series at v = 3.0 m/s
  for (const a of [-3, -2, -1, 1, 2, 3]) {
    const P = { v: 3, u: 4, phi: 0, ac: a }, Tf = c.flightTime(P);
    near(c.ballFree(P, Tf).s - c.cartAt(P, Tf).s, -0.5 * a * Tf * Tf, 1e-12, `a = ${a}`);
  }
});

group('Frictionless incline (notes step 5, key Q4): both accelerate at g sin θ along the track, T = 2u/(g cos θ) = 0.844 s at 15°, caught', () => {
  near(c.cartAccel(INCLINE), G * Math.sin(15 * deg), 1e-15); near(c.ballFree(INCLINE, 0).as, G * Math.sin(15 * deg), 1e-15);
  near(c.ballFree(INCLINE, 0).an, -G * Math.cos(15 * deg), 1e-15);
  const T = c.flightTime(INCLINE); near(T, 8 / (G * Math.cos(15 * deg)), 1e-14);
  if (quotedG) printed(T, 3, '0.844');
  assert.strictEqual(c.landing(INCLINE).kind, 'caught'); near(c.landing(INCLINE).miss, 0, 1e-13);
  // before the launch the cart already rolls at g sin θ; the launch leaves its speed unchanged
  near(c.cartAt(INCLINE, -0.5).a, G * Math.sin(15 * deg), 1e-15); near(c.cartAt(INCLINE, 0).v, 0.5, 0);
});

group('worksheet key, Steady cart series: t = 0.815 s at every v, ball and cart move 0.408 ... 2.446 m, Δx = 0.0 cm, in the launcher', () => {
  const moves = ['0.000', '0.408', '0.815', '1.223', '1.631', '2.039', '2.446'];
  [0, 0.5, 1, 1.5, 2, 2.5, 3].forEach((v, i) => {
    const P = { v, u: 4, phi: 0, ac: 0 }, T = c.flightTime(P), xb = c.ballFree(P, T).s, xc = c.cartAt(P, T).s;
    near(xb, xc, 1e-12); assert.strictEqual(c.landing(P).kind, 'caught'); printed(100 * (xb - xc), 1, '0.0');
    if (quotedG) { printed(T, 3, '0.815', `t at v = ${v}`); printed(xb, 3, moves[i], `ball moves at v = ${v}`); }
  });
  // the key's fit of ball moves against v: slope T (0.81543 s from the 3 decimal readouts), intercept 0
  if (quotedG) {
    const T = c.flightTime(STEADY), xs = [0, 0.5, 1, 1.5, 2, 2.5, 3], ys = xs.map((v) => +(v * T).toFixed(3));
    const mx = 1.5, my = ys.reduce((s, y) => s + y, 0) / 7;
    const slope = xs.reduce((s, x, i) => s + (x - mx) * (ys[i] - my), 0) / xs.reduce((s, x) => s + (x - mx) ** 2, 0);
    printed(slope, 5, '0.81543', 'fitted slope'); near(my - slope * mx, 0, 5e-5, 'intercept 0.0000');
    printed(8 / slope, 3, '9.811', 'g from the slope');
  }
});

group('worksheet key, accelerating cart series (v = 3.0): cart moves 1.449 ... 3.444 m, Δx = ±99.8, ±66.5, ±33.3 cm, slope −33.264 cm per m/s²', () => {
  const cart = ['1.449', '1.781', '2.114', '2.446', '2.779', '3.112', '3.444'], dx = ['99.8', '66.5', '33.3', '0.0', '-33.3', '-66.5', '-99.8'];
  const as = [-3, -2, -1, 0, 1, 2, 3], dxs = [];
  as.forEach((a, i) => {
    const P = { v: 3, u: 4, phi: 0, ac: a }, T = c.flightTime(P), xb = c.ballFree(P, T).s, xc = c.cartAt(P, T).s, L = c.landing(P);
    assert.strictEqual(L.kind, a === 0 ? 'caught' : 'track', `lands for a = ${a}`);
    dxs.push(+(100 * (xb - xc)).toFixed(1));
    if (quotedG) { printed(xc, 3, cart[i], `cart moves at a = ${a}`); printed(xb, 3, '2.446'); printed(100 * (xb - xc), 1, dx[i], `Δx at a = ${a}`); }
  });
  if (quotedG) {
    const my = dxs.reduce((s, y) => s + y, 0) / 7, slope = as.reduce((s, a, i) => s + a * (dxs[i] - my), 0) / as.reduce((s, a) => s + a * a, 0);
    printed(slope, 3, '-33.264', 'slope of Δx against a'); printed(Math.sqrt(-2 * slope / 100), 5, '0.81565', 't from the slope'); printed(8 / Math.sqrt(-2 * slope / 100), 3, '9.808');
  }
});

group('worksheet key, incline series (v = 0.5): t = 0.819, 0.828, 0.844, 0.868, 0.900, 0.942 s; moves 0.696 ... 2.645 m; caught every time', () => {
  const ts = ['0.819', '0.828', '0.844', '0.868', '0.900', '0.942'], moves = ['0.696', '0.998', '1.327', '1.697', '2.128', '2.645'];
  [5, 10, 15, 20, 25, 30].forEach((th, i) => {
    const P = { v: 0.5, u: 4, phi: th * deg, ac: 0 }, T = c.flightTime(P), xb = c.ballFree(P, T).s, xc = c.cartAt(P, T).s;
    near(T, 8 / (G * Math.cos(th * deg)), 1e-14); near(xb, xc, 1e-12); assert.strictEqual(c.landing(P).kind, 'caught');
    near(T * Math.cos(th * deg), c.flightTime(REST), 1e-14, 't grows as 1/cos θ');
    if (quotedG) { printed(T, 3, ts[i], `t at ${th}°`); printed(xb, 3, moves[i], `moves at ${th}°`); }
  });
});

group('kinematics: independent components, symmetric flight, the ball above the launcher whenever the cart does not accelerate', () => {
  for (const P of [STEADY, REST, INCLINE, { v: 2.5, u: 6, phi: 25 * deg, ac: 0 }]) {
    const T = c.flightTime(P);
    for (let i = 0; i <= 8; i++) {
      const t = T * i / 8, b = c.ballFree(P, t);
      near(b.s, c.cartAt(P, t).s, 1e-13, 'ball stays above the launcher'); near(b.vs, c.cartAt(P, t).v, 1e-13, 'same velocity along the track');
      near(b.n, c.ballFree(P, T - t).n, 1e-12, 'height symmetric about the apex'); near(b.vn, -c.ballFree(P, T - t).vn, 1e-12);
    }
    near(c.downTo(P, 0), T, 0); assert(c.downTo(P, -c.MOUTH) > T, 'reaches the track after the mouth');
    // ground frame: the launch speed is √(v² + u²) and the acceleration is g straight down
    const b0 = c.ballFree(P, 0); near(Math.hypot(b0.vs, b0.vn), Math.hypot(P.v, P.u), 1e-12); near(Math.hypot(b0.as, b0.an), G, 1e-12);
  }
});

group('landing on the cart top: a small miss within the half length lands on the cart; ballAt rides along afterwards', () => {
  const Q = { v: 1.2, u: 2, phi: 0, ac: 0.3 }, M = c.landing(Q);
  assert.strictEqual(M.kind, 'cart'); assert(Math.abs(M.miss) <= c.HALF && Math.abs(M.miss) > c.CATCH); near(M.n, c.TOPN, 0);
  const later = M.t + 1; near(c.ballAt(Q, later).s - c.cartAt(Q, later).s, M.miss, 1e-12, 'stays put on the cart'); assert.strictEqual(c.ballAt(Q, later).free, false);
  assert.strictEqual(c.ballAt(Q, M.t / 2).free, true); assert.strictEqual(c.ballAt(Q, -1).free, false);
  const L = c.landing(PUSH); near(c.ballAt(PUSH, L.t + 2).s, L.s, 0, 'rests on the track');
});

console.log(`${n} cart-launch test groups passed`);
