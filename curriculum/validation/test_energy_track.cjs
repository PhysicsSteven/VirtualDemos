'use strict';
// Energy on a Track: the skater against hand results (incline with and without friction, leaving a round hill, a loop, a jump).
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('energy-track', 'ET_H,ET_X1,etTrack,etGeom,etAt,etAir,etStep,etRun,etEnergy,etPos,etNearest,etNormal');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const close = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const P = (pts, o) => Object.assign({ tr: C.etTrack(pts), g: 9.81, mu: 0, stick: false, yRef: 0 }, o || {});
const total = (st, p) => { const e = C.etEnergy(st, p); return e.K + e.U + e.Th; };
const until = (st, p, name, T) => { for (let i = 0; i < Math.round(T / C.ET_H); i++) { const ev = C.etStep(st, p, C.ET_H); if (ev.includes(name)) return st.t; } return null; };

test('a straight incline, no friction: time to the bottom √(2L/(g sinθ))', () => {
  const p = P([[1, 5], [11, 0]]), st = C.etAt(p, 0, 1), L = Math.hypot(10, 5);
  close(until(st, p, 'end', 4), Math.sqrt(2 * L / (9.81 * 5 / L)), 1e-3);
});
test('the incline with μ = 0.2: a = g(sinθ − μ cosθ), thermal energy μ mg cosθ L', () => {
  const p = P([[1, 5], [11, 0]], { mu: 0.2 }), st = C.etAt(p, 0, 1), L = Math.hypot(10, 5), s = 5 / L, c = 10 / L;
  close(until(st, p, 'end', 4), Math.sqrt(2 * L / (9.81 * (s - 0.2 * c))), 1e-3);
  close(st.th, 0.2 * 9.81 * c * L, 1e-6, 'thermal');
});
test('friction holds the skater at rest where tanθ ≤ μ, and not where tanθ > μ', () => {
  const p = P([[1, 5], [11, 0]], { mu: 0.5 }), st = C.etAt(p, 3, 1);
  C.etRun(st, p, 1); assert(st.stuck); close(st.v, 0, 0);
  p.mu = 0.49; const s2 = C.etAt(p, 3, 1); C.etRun(s2, p, 1); assert(!s2.stuck && s2.v > 0);
});
test('over a round hill from rest at the top: leaves where the height above the center is 2R/3', () => {
  const pts = []; for (let a = 0; a <= 180; a += 3) { const r = (180 - a) * Math.PI / 180; pts.push([6 + 3 * Math.cos(r), 1 + 3 * Math.sin(r)]); }
  const p = P(pts), st = C.etAt(p, p.tr.U / 2 + 1e-3, 1);
  assert(until(st, p, 'leave', 12) !== null); close(st.y - 1, 2, 3e-3);
});
const LOOP = [[0.4, 7.2], [2.2, 3.2], [4.6, 0.9], [7.2, 1.0], [8.6, 2.6], [7.4, 4.1], [6.0, 2.8], [6.9, 1.1], [9.4, 0.9], [10.8, 3.0], [11.5, 6.6]];
test('a frictionless valley and a loop: the total stays the starting total; it turns round at its starting height', () => {
  const p = P([[0.5, 6.5], [2.5, 2.6], [6, 0.8], [9.5, 2.6], [11.5, 6.5]]), u0 = 0.6, st = C.etAt(p, u0, 1), E0 = total(st, p);
  let ymax = -1; for (let i = 0; i < 40000; i++) { C.etStep(st, p, C.ET_H); if (i > 2000) ymax = Math.max(ymax, C.etPos(st, p).y); }
  close(total(st, p), E0, 1e-9); close(ymax, C.etGeom(p.tr, u0).y, 1e-4, 'turning height');
  const q = P(LOOP), s2 = C.etAt(q, 0.03 * q.tr.U, 1), e2 = total(s2, q), ev = C.etRun(s2, q, 10);
  assert(!ev.some((e) => e.e === 'leave' || e.e === 'end'), 'stays on the loop and the ramps'); close(total(s2, q), e2, 1e-9);
});
test('the loop started too low: leaves the track inside the loop (N < 0), lands lower down, total kept', () => {
  const q = P(LOOP), st = C.etAt(q, 0.14 * q.tr.U, 1), E0 = total(st, q), ev = C.etRun(st, q, 3).map((e) => e.e);
  assert.equal(ev.slice(0, 2).join(), 'leave,land'); close(total(st, q), E0, 1e-9);
  q.stick = true; const s2 = C.etAt(q, 0.14 * q.tr.U, 1); assert(!C.etRun(s2, q, 3).some((e) => e.e === 'leave'), 'on rails it stays on');
});
test('off the end of a ramp: the exact parabola, and the landing turns the downward speed into thermal energy', () => {
  const p = P([[1, 3], [5, 3]]), st = C.etAt(p, 0, 1); st.v = 2; st.e0 += 2;   /* 2 m/s along a level track 3 m up */
  until(st, p, 'end', 3); const tEnd = st.t; until(st, p, 'ground', 3);
  close(st.t - tEnd, Math.sqrt(2 * 3 / 9.81), C.ET_H, 'fall time (the end is met at a step boundary)'); close(st.x, 5 + 2 * Math.sqrt(2 * 3 / 9.81), 1e-9, 'range');
  close(st.th, 9.81 * 3, 1e-9, 'thermal = ½ v_y² = g h'); close(st.v, 2, 1e-12);
});
test('on the ground with friction: stops after v²/(2μg); the wall stops it', () => {
  const p = P([[1, 3], [2, 3]], { mu: 0.25 }), st = C.etAir(p, 3, 0); st.mode = 'ground'; st.v = 3; st.e0 = 4.5;
  C.etRun(st, p, 3); close(st.x, 3 + 9 / (2 * 0.25 * 9.81), 1e-9); close(st.th, 4.5, 1e-9);
  const s2 = C.etAir(p, 11, 0); s2.mode = 'ground'; s2.v = 5; s2.e0 = 12.5; p.mu = 0; C.etRun(s2, p, 1); close(s2.x, C.ET_X1, 0); close(s2.th, 12.5, 1e-12);
});
test('the nearest point and its side', () => {
  const p = P([[1, 2], [11, 2]]), a = C.etNearest(p.tr, 4, 2.3), b = C.etNearest(p.tr, 4, 1.6);
  close(a.u, 3, 1e-9); close(a.d, 0.3, 1e-9); assert.equal(a.s, 1); assert.equal(b.s, -1);
});
console.log(`${n} tests passed`);
