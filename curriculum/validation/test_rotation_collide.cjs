'use strict';
// Rotation and Torque, Collide scene: a ball hitting a rod on a pivot or a free rod, and a disk set down on a spinning disk,
// against hand results, conservation laws and an independent step by step integration of the slipping disks.
const assert = require('node:assert/strict'), { core } = require('./demo_source.cjs');
const m = core('rotation', 'G,rodHit,rodHitAt,rodHitAgain,diskDrop');
let n = 0;
const close = (a, b, abs, msg) => assert(Math.abs(a - b) <= abs, `${msg || ''} expected ${b}, got ${a}`);
const test = (name, f) => { f(); n++; console.log('PASS', name); };
const base = { rb: 0.025, hw: 0.012, s0: 0.6 };

test('clay on a rod pinned at its end: ω = mud/(ML²/3 + md²), the preset numbers', () => {
  const o = { ...base, pivot: 'end', M: 1, L: 1, m: 0.2, u: 3, d: 0.8, e: 0 }, h = m.rodHit(o);
  close(h.w, 0.48 / (1 / 3 + 0.128), 1e-12); close(h.w, 1.0405, 1e-4);
  close(h.v, h.w * 0.8, 1e-12, 'clay moves with the rod point');
  close(h.L1, h.L0, 1e-12, 'L about the pin'); close(h.K0, 0.9, 1e-12); close(h.K1, 0.5 * (1 / 3 + 0.128) * h.w ** 2, 1e-12);
  close(h.P, (0.5 + 0.16) * h.w - 0.6, 1e-12, 'pin impulse');
});
test('sweet spot: hitting at 2L/3 of a rod pinned at its end gives no impulse at the pin, for any e and masses', () => {
  for (const e of [0, 0.4, 1]) for (const [M, mm] of [[1, 0.2], [3, 0.05], [0.5, 1]]) {
    const h = m.rodHit({ ...base, pivot: 'end', M, L: 0.9, m: mm, u: 2, d: 0.6, e }); close(h.P, 0, 1e-12, `e ${e}`);
  }
  assert(Math.abs(m.rodHit({ ...base, pivot: 'end', M: 1, L: 0.9, m: 0.2, u: 2, d: 0.3, e: 0 }).P) > 0.05);
});
test('elastic hits keep kinetic energy; clay loses the most; L is kept for every pin and e', () => {
  for (const pivot of ['end', 'center', 'free']) for (const e of [0, 0.3, 1]) {
    const h = m.rodHit({ ...base, pivot, M: 1.3, L: 0.8, m: 0.3, u: 2.5, d: 0.25, e });
    close(h.L1, h.L0, 1e-12, `${pivot} ${e}`);
    if (e === 1) close(h.K1, h.K0, 1e-12, 'elastic');
    if (pivot === 'free') close(h.p1, h.p0, 1e-12, 'free rod keeps p');
    // separation law
    const ptSpeed = h.V + h.w * (0.25 - (pivot === 'end' ? h.xc : 0)) + (pivot === 'end' ? h.w * h.xc - h.V : 0);
    close(ptSpeed - h.v, e * 2.5, 1e-12, 'restitution');
  }
});
test('free rod hit at its center: no spin, like a 1D collision', () => {
  const h = m.rodHit({ ...base, pivot: 'free', M: 2, L: 1, m: 0.5, u: 2, d: 0, e: 1 });
  close(h.w, 0, 1e-15); close(h.V, 2 * 0.5 * 2 / 2.5, 1e-12); close(h.v, (0.5 - 2) * 2 / 2.5, 1e-12);
});
test('the motion: L about the pin (or the starting center) and the total momentum of a free rod stay the same at every time', () => {
  for (const pivot of ['end', 'center', 'free']) for (const e of [0, 0.7]) {
    const o = { ...base, pivot, M: 1, L: 1, m: 0.2, u: 3, d: 0.35, e }, h = m.rodHit(o);
    for (const t of [0.05, 0.19, 0.21, 0.5, 1.3, 2.7]) {
      const q = m.rodHitAt(o, t); close(q.Lball + q.Lrod, h.L0, 1e-12, `${pivot} e ${e} t ${t}`);
      if (pivot === 'free') close(o.m * q.vb[1] + o.M * q.vr[1], h.p0, 1e-12);
      if (t > q.tc) close(q.Kball + q.Krod, h.K1, 1e-12, 'K after');
    }
  }
});
test('free rod with clay: the center of mass of rod and clay moves in a straight line at mu/(m + M)', () => {
  const o = { ...base, pivot: 'free', M: 1, L: 1, m: 0.2, u: 3, d: 0.4, e: 0 };
  for (const t of [0.5, 1, 2]) {
    const q = m.rodHitAt(o, t), cx = (0.2 * q.ball[0] + q.rc[0]) / 1.2, cy = (0.2 * q.ball[1] + q.rc[1]) / 1.2;
    close(cx, 0.2 * 0.4 / 1.2, 1e-12); close(cy, 0.5 * (t - q.tc), 1e-12);
  }
});
test('a bouncing ball off a rod pinned at its center is met again by the rod; clay never is', () => {
  /* e = 0.4 leaves the ball almost at rest (v = −0.035 m/s), so the other arm, half a turn later, meets it; e = 1 sends it away for good */
  const o = { ...base, pivot: 'center', M: 1, L: 1, m: 0.2, u: 3, d: 0.4, e: 0.4 }, h = m.rodHit(o);
  const t2 = m.rodHitAgain(o, 5), half = o.s0 / o.u + Math.PI / h.w; assert(isFinite(t2) && t2 > half - 0.15 && t2 < half + 0.05, `second hit at ${t2}, half turn ${half}`);
  assert(m.rodHitAgain({ ...o, e: 1 }, 5) === Infinity);
  assert(m.rodHitAgain({ ...o, e: 0 }, 5) === Infinity);
});
test('disk on a disk: common ω, lock time, heat = the share I₁I₂(ω₁ − ω₂)²/2(I₁ + I₂), against a step by step integration', () => {
  const o = { M1: 2, R1: 0.15, w1: 4 * Math.PI, M2: 1, R2: 0.1, w2: 0, mu: 0.3 }, d = m.diskDrop(o);
  close(d.I1, 0.0225, 1e-15); close(d.I2, 0.005, 1e-15); close(d.tau, 2 / 3 * 0.3 * 9.81 * 0.1, 1e-15);
  close(d.wf, 0.0225 * 4 * Math.PI / 0.0275, 1e-12); close(d.tLock, 0.2620, 1e-4);
  close(d.heat, 0.0225 * 0.005 * (4 * Math.PI) ** 2 / (2 * 0.0275), 1e-12);
  // integrate the friction torque on rings of the top disk directly: dτ = μ (M₂g/πR₂²) r · 2πr dr
  let w1 = o.w1, w2 = o.w2, Q = 0; const dt = 1e-5, N = 4000;
  let tau = 0; for (let i = 0; i < N; i++) { const r = (i + 0.5) / N * o.R2; tau += o.mu * (o.M2 * 9.81 / (Math.PI * o.R2 ** 2)) * r * 2 * Math.PI * r * (o.R2 / N); }
  close(tau, d.tau, 1e-6 * d.tau, 'ring sum');
  let t = 0; while (w1 - w2 > 1e-9) { const step = Math.min(dt, (w1 - w2) / (tau / d.I1 + tau / d.I2)); Q += tau * (w1 - w2 - 0.5 * step * (tau / d.I1 + tau / d.I2)) * step; w1 -= tau / d.I1 * step; w2 += tau / d.I2 * step; t += step; }
  close(t, d.tLock, 1e-6); close(w1, d.wf, 1e-6); close(Q, d.heat, 1e-6);
  for (const tt of [0, 0.1, 0.25, 1]) close(d.at(tt).L, d.L, 1e-12, 'L kept');
  close(d.at(5).w2, d.wf, 1e-12); close(d.at(0.1).heat, d.K0 - d.at(0.1).K1 - d.at(0.1).K2, 1e-15);
});
test('disk on a disk spinning the other way: they can end up turning backward', () => {
  const d = m.diskDrop({ M1: 1, R1: 0.1, w1: 2, M2: 3, R2: 0.1, w2: -3, mu: 0.4 });
  close(d.wf, (0.005 * 2 - 0.015 * 3) / 0.02, 1e-12); assert(d.wf < 0);
});
console.log(`${n} tests passed`);
