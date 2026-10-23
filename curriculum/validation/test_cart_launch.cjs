'use strict';
// Ball launched from a moving cart: lands in the launcher when the cart's velocity along the track changes the same way as the ball's
// (constant speed on the level, or rolling freely on a frictionless incline); misses by ½ a T² when the cart alone accelerates.
const assert = require('node:assert');
const { core } = require('./demo_source.cjs');
const c = core('cart-launch', 'G,CATCH,MOUTH,TOPN,HALF,cartAt,ballFree,flightTime,landing,ballAt,downTo');
let n = 0;
const near = (a, b, tol, w) => assert(Math.abs(a - b) <= tol * Math.max(1, Math.abs(b)), `${w || ''}: expected ${b}, got ${a}`);
function group(name, f) { f(); n++; console.log('PASS', name); }
const deg = Math.PI / 180;
group('steady cart: flight time 2u/g, the ball stays directly above the launcher and lands in it', () => {
  for (const [v, u] of [[0, 4], [1.2, 4], [3, 6], [0.7, 2]]) {
    const P = { v, u, phi: 0, ac: 0 }, T = c.flightTime(P); near(T, 2 * u / 9.81, 1e-14, 'T');
    for (let i = 0; i <= 20; i++) { const t = T * i / 20; near(c.ballFree(P, t).s, c.cartAt(P, t).s, 1e-14, 'above the cart'); }
    const L = c.landing(P); assert.equal(L.kind, 'caught'); near(L.miss, 0, 1e-14); near(c.ballFree(P, T).n, 0, 1e-12, 'back at the mouth');
    near(c.ballFree(P, T / 2).n, u * u / (2 * 9.81), 1e-12, 'apex u²/2g'); near(c.ballFree(P, T / 2).vn, 0, 1e-12);
  }
});
group('cart accelerates after launch: the ball lands ½ a T² behind; brakes: ahead (until the cart stops)', () => {
  for (const a of [0.2, 1.5, 3]) {
    const P = { v: 1.2, u: 4, phi: 0, ac: a }, T = c.flightTime(P); near(c.ballFree(P, T).s - c.cartAt(P, T).s, -0.5 * a * T * T, 1e-12);
    assert.notEqual(c.landing(P).kind, 'caught'); assert(c.landing(P).miss < 0);
  }
  const P = { v: 3, u: 4, phi: 0, ac: -0.5 }, T = c.flightTime(P); near(c.ballFree(P, T).s - c.cartAt(P, T).s, 0.5 * 0.5 * T * T, 1e-12, 'brake, still moving');
  const Q = { v: 1.2, u: 4, phi: 0, ac: -1.5 }, TQ = c.flightTime(Q); near(c.cartAt(Q, TQ).s, 1.2 * 1.2 / (2 * 1.5), 1e-12, 'stops after v²/2a'); near(c.cartAt(Q, TQ).v, 0, 0);
  assert(c.landing(Q).miss > 0);
});
group('frictionless incline, launched perpendicular to the track: lands in the cart; flight 2u/(g cos θ)', () => {
  for (const th of [5, 15, 30]) for (const v of [0, 0.5, 2]) {
    const P = { v, u: 4, phi: th * deg, ac: 0 }, T = c.flightTime(P); near(T, 2 * 4 / (9.81 * Math.cos(th * deg)), 1e-13);
    for (let i = 0; i <= 10; i++) { const t = T * i / 10; near(c.ballFree(P, t).s, c.cartAt(P, t).s, 1e-13, `incline ${th}`); }
    assert.equal(c.landing(P).kind, 'caught');
  }
});
group('ground frame check: ball path from horizontal/vertical kinematics agrees with the track coordinates', () => {
  const th = 20 * deg, P = { v: 1, u: 3, phi: th, ac: 0 }, t = 0.37, b = c.ballFree(P, t);
  // launch velocity in ground axes (x right, y up), track sloping down to the right
  const vx = 1 * Math.cos(th) + 3 * Math.sin(th), vy = -1 * Math.sin(th) + 3 * Math.cos(th);
  const x = vx * t, y = vy * t - 0.5 * 9.81 * t * t;
  near(b.s * Math.cos(th) + b.n * Math.sin(th), x, 1e-13, 'x'); near(-b.s * Math.sin(th) + b.n * Math.cos(th), y, 1e-13, 'y');
});
group('landing spots: launcher, cart top or track; resting ball moves with the cart', () => {
  const P = { v: 1.2, u: 4, phi: 0, ac: 1.5 }, L = c.landing(P); assert.equal(L.kind, 'track'); near(c.ballFree(P, L.t).n, -c.MOUTH, 1e-12);
  const Q = { v: 1.2, u: 2, phi: 0, ac: 0.3 }, M = c.landing(Q); assert.equal(M.kind, 'cart', JSON.stringify(M)); assert(Math.abs(M.miss) <= c.HALF);
  const R = { v: 1.2, u: 4, phi: 0, ac: 0 }, tl = c.flightTime(R) + 0.5; near(c.ballAt(R, tl).s, c.cartAt(R, tl).s, 1e-12, 'rides in the cart');
  near(c.ballAt(R, -0.3).s, c.cartAt(R, -0.3).s, 1e-15, 'in the launcher before launch');
});
console.log(`${n} cart-launch test groups passed`);
