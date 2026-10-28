'use strict';
// Collisions and Momentum, Sandbox: any number of carts on a track between end stops, against hand results.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('collisions', 'collide1D,SBC_EPS,sbcBodies,sbcAdvance,sbcMomentum,sbcEnergy');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const close = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const cart = (id, m, x, v, velcro) => ({ id, m, L: 0.16, x, v, velcro: !!velcro });
const track = (carts, e) => ({ carts, glue: [], e: e === undefined ? 1 : e, X0: -10, X1: 10 });

test('two equal carts, elastic: the moving one stops, the other leaves; contact time exact', () => {
  const st = track([cart(1, 1, -0.5, 1), cart(2, 1, 0.2, 0)]);
  const { st: s1, ev } = C.sbcAdvance(st, 1);
  assert.equal(ev.length, 1); close(ev[0].t, 0.7 - 0.16, 1e-12, 'contact when the gap closes');
  close(s1.carts[0].v, 0, 1e-12); close(s1.carts[1].v, 1, 1e-12);
  close(s1.carts[1].x, 0.2 + (1 - ev[0].t), 1e-12);
});
test('any masses and e: matches collide1D; momentum kept; K lost ½μ(1 − e²)v²', () => {
  const st = track([cart(1, 2.5, -0.4, 0.8), cart(2, 0.7, 0.3, -0.3)], 0.6);
  const { st: s1, ev } = C.sbcAdvance(st, 2);
  const [a, b] = C.collide1D(2.5, 0.7, 0.8, -0.3, 0.6);
  close(s1.carts[0].v, a, 1e-12); close(s1.carts[1].v, b, 1e-12);
  close(C.sbcMomentum(s1), C.sbcMomentum(st), 1e-12);
  const mu = 2.5 * 0.7 / 3.2; close(-ev[0].dK, 0.5 * mu * (1 - 0.36) * 1.1 * 1.1, 1e-12);
});
test('velcro: the carts stick and move on at the center of mass velocity', () => {
  const st = track([cart(1, 1, -0.5, 1, true), cart(2, 3, 0.2, 0)]);
  const { st: s1, ev } = C.sbcAdvance(st, 1);
  assert(ev[0].stick); close(s1.carts[0].v, 0.25, 1e-12); close(s1.carts[1].v, 0.25, 1e-12);
  assert.equal(C.sbcBodies(s1).length, 1);
  // glued, they move as one body afterwards: their gap stays zero
  const s2 = C.sbcAdvance(s1, 3).st; close(s2.carts[1].x - s2.carts[0].x, 0.16, 1e-12);
});
test('a row of equal touching carts, elastic: one in, one out (the cradle)', () => {
  const L = 0.16, row = [cart(1, 1, -0.8, 1), cart(2, 1, 0, 0), cart(3, 1, L, 0), cart(4, 1, 2 * L, 0)];
  const { st: s1 } = C.sbcAdvance(track(row), 2);
  assert.equal(JSON.stringify(s1.carts.map((c) => +c.v.toFixed(12))), '[0,0,0,1]');
  close(C.sbcEnergy(s1), 0.5, 1e-12);
});
test('end stops: v′ = −e v, and a box with e = 1 keeps its energy over many bounces', () => {
  const st = { carts: [cart(1, 1, 0, 1)], glue: [], e: 0.5, X0: -0.5, X1: 0.5 };
  const { st: s1, ev } = C.sbcAdvance(st, 0.5);
  close(ev[0].t, 0.42, 1e-12); close(s1.carts[0].v, -0.5, 1e-12);
  const box = { carts: [cart(1, 1, -0.3, 1.3), cart(2, 2, 0, -0.4), cart(3, 0.5, 0.3, 0.9)], glue: [], e: 1, X0: -0.6, X1: 0.6 };
  const { st: s2, ev: e2 } = C.sbcAdvance(box, 30);
  assert(e2.length > 50, 'many collisions'); close(C.sbcEnergy(s2), C.sbcEnergy(box), 1e-9);
  const xs = s2.carts.slice().sort((a, b) => a.x - b.x); for (let i = 0; i + 1 < xs.length; i++) assert(xs[i + 1].x - xs[i].x >= 0.16 - 1e-9, 'never overlap');
  assert(xs[0].x - 0.08 >= -0.6 - 1e-9 && xs[2].x + 0.08 <= 0.6 + 1e-9, 'inside the stops');
});
test('no stops reached: momentum kept through a long chain of collisions', () => {
  const st = track([cart(1, 0.5, -1, 2), cart(2, 1, -0.5, 0.1), cart(3, 2, 0, -0.2), cart(4, 0.25, 0.5, -1)], 0.8);
  const { st: s1, ev } = C.sbcAdvance(st, 4);
  assert(ev.length >= 3); close(C.sbcMomentum(s1), C.sbcMomentum(st), 1e-12);
});
test('a squeezed row with low e settles in finitely many events', () => {
  const st = { carts: [cart(1, 1, -0.3, 1), cart(2, 1, -0.1, 0), cart(3, 1, 0.1, -1)], glue: [], e: 0.05, X0: -0.5, X1: 0.5 };
  const { ev } = C.sbcAdvance(st, 5, 5000);
  assert(ev.length < 5000);
});
console.log(`${n} tests passed`);
