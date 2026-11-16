'use strict';
// Numerical Methods for Motion: the exact solutions, each step rule's order and energy behavior, and the numbers the setups quote.
const assert = require('node:assert/strict');
const { core } = require('./demo_source.cjs');
const C = core('numerical-methods', 'nmSystem,nmStep,nmRun,nmConvergence,nmSlope,nmJacobi,nmK,nmAgm,nmFailed,NM_NS,NM_METHODS,NM_EVALS');
let n = 0;
const test = (name, fn) => { fn(); n++; console.log('PASS', name); };
const near = (a, b, tol, msg) => assert(Math.abs(a - b) <= tol, `${msg || ''} expected ${b}, got ${a}`);
const fitSlope = (sys, m) => C.nmSlope(C.nmConvergence(m, sys, C.NM_NS, 1).filter((q) => q.err > 1e-11 && q.h <= sys.T / 16 && q.err < 0.3 * sys.A));

test('elliptic functions: K(0) = π/2, K(1/2) = 1.854075, sn² + cn² = 1, dn² + m sn² = 1, sn(K) = 1', () => {
  near(C.nmK(0), Math.PI / 2, 1e-15); near(C.nmK(0.5), 1.8540746773013719, 1e-14);
  for (const m of [0, 0.1, 0.5, 0.9, 0.99619]) for (const u of [-2, 0.3, 1.1, 4]) {
    const J = C.nmJacobi(u, m); near(J.sn ** 2 + J.cn ** 2, 1, 1e-13); near(J.dn ** 2 + m * J.sn ** 2, 1, 1e-13);
  }
  for (const m of [0.25, 0.5, 0.9]) near(C.nmJacobi(C.nmK(m), m).sn, 1, 1e-13);
  /* d sn/du = cn dn by a central difference */
  const m = 0.7, u = 0.83, d = 1e-6, J = C.nmJacobi(u, m); near((C.nmJacobi(u + d, m).sn - C.nmJacobi(u - d, m).sn) / (2 * d), J.cn * J.dn, 1e-9);
});
test('exact motions obey their equations: energy constant, a = F/m by finite differences, back to the start after T', () => {
  for (const [name, o] of [['spring', {}], ['pendulum', { th0: 90 }], ['pendulum', { th0: 170 }], ['orbit', { e: 0.5 }], ['orbit', { e: 0.9 }]]) {
    const s = C.nmSystem(name, o), s0 = s.start(), E0 = s.energy(s0.p, s0.v);
    for (const f of [0.13, 0.37, 0.5, 0.81]) {
      const t = f * s.T, e = s.exact(t), d = 1e-5 * s.T, a = s.acc(e.p), ep = s.exact(t + d), em = s.exact(t - d);
      near(s.energy(e.p, e.v), E0, 1e-11 * Math.abs(E0), `${name} energy`);
      for (let i = 0; i < s.dim; i++) { near((ep.p[i] - em.p[i]) / (2 * d), e.v[i], 1e-6 * (1 + Math.abs(e.v[i])), `${name} v`); near((ep.v[i] - em.v[i]) / (2 * d), a[i], 1e-5 * (1 + Math.abs(a[i])), `${name} a`); }
    }
    const e = s.exact(s.T); for (let i = 0; i < s.dim; i++) { near(e.p[i], s0.p[i], 1e-11); near(e.v[i], s0.v[i], 1e-9); }
  }
});
test('periods: spring 1.000 s; pendulum 2.368 s from 90° (18% over 2π√(L/g) = 2.006 s) and 4.894 s from 170°; orbit 1 yr', () => {
  near(C.nmSystem('spring').T, 1, 0); near(C.nmSystem('orbit', { e: 0.5 }).T, 1, 0);
  const T0 = 2 * Math.PI / Math.sqrt(9.81), p90 = C.nmSystem('pendulum', { th0: 90 }).T, p170 = C.nmSystem('pendulum', { th0: 170 }).T;
  near(T0, 2.006, 5e-4); near(p90, 2.368, 5e-4); near(p90 / T0, 1.180, 5e-4); near(p170, 4.894, 5e-4); near(p170 / T0, 2.44, 5e-3);
  /* small swings approach 2π√(L/g)(1 + θ₀²/16) */
  const th = 5 * Math.PI / 180; near(C.nmSystem('pendulum', { th0: 5 }).T, T0 * (1 + th * th / 16 + 11 * th ** 4 / 3072), 1e-9);
  near(Math.sqrt(4 * Math.PI ** 2), 2 * Math.PI, 0); near(4 * Math.PI ** 2, 39.478, 5e-4);   /* k = 39.5 N/m */
});
test('orders: the largest error in the first period falls as h¹ (Euler, symplectic Euler), h² (Verlet), h⁴ (RK4)', () => {
  const want = { eu: 1, se: 1, vv: 2, rk: 4 };
  for (const [name, o] of [['spring', {}], ['pendulum', { th0: 90 }], ['orbit', { e: 0.5 }]]) {
    const s = C.nmSystem(name, o);
    for (const m of C.NM_METHODS) { if (name === 'orbit' && m === 'eu') continue; near(fitSlope(s, m), want[m], m === 'rk' ? 0.4 : 0.1, `${name} ${m}`); }
  }
  /* Euler on the orbit is still far from its asymptote at N = 1000 (error over 1 AU), so its slope is not tested */
});
test('Euler on a spring multiplies the energy by 1 + (ωh)² every step, and is stopped 8.8 s in at N = 50', () => {
  const s = C.nmSystem('spring'), h = s.T / 50, w = s.w, r1 = C.nmRun('eu', s, h, 1);
  near(1 + r1.dE, 1 + (w * h) ** 2, 1e-13); near((w * h) ** 2, 0.0158, 5e-5); near((1 + (w * h) ** 2) ** 50, 2.19, 5e-3);
  const r = C.nmRun('eu', s, h, 1000); assert(r.failed); near(r.n * h, 8.82, 1e-9);
  const c = C.nmRun('eu', s, s.T / 10, 1000); assert(c.failed); near(c.n * s.T / 10, 2.1, 1e-9);
});
test('symplectic Euler and Verlet keep the energy bounded; RK4 drifts down 0.8% a period at N = 10; Verlet runs 1.7% fast there', () => {
  const s = C.nmSystem('spring');
  /* no drift: the largest energy error in 100 periods and in 10,000 periods agree (the wobble's peak is only sampled better) */
  for (const m of ['se', 'vv']) { const a = C.nmRun(m, s, 0.1, 1000), b = C.nmRun(m, s, 0.1, 100000); near(b.mxE, a.mxE, 1e-5 * a.mxE, m); }
  near(C.nmRun('se', s, 0.1, 1000).mxE, 0.46, 0.005);
  const rk = C.nmRun('rk', s, 0.1, 10); near(rk.dE, -0.0081, 5e-4); assert(C.nmRun('rk', s, 0.1, 600).dE < 0);
  near(Math.sqrt(1 + C.nmRun('rk', s, 0.1, 600).dE), 0.78, 0.01);   /* the swing after a minute */
  const wh = s.w * 0.1, wt = Math.acos(1 - wh * wh / 2); near(wt / wh - 1, 0.017, 5e-4);
  /* a symplectic method keeps phase space area: the one step map of a linear system has determinant 1; Euler's is 1 + (ωh)² */
  const det = (m) => { const e = 1e-6, b0 = { p: [0], v: [0] }, f = (p, v) => C.nmStep(m, s, { p: [p], v: [v] }, 0.1), px = f(e, 0), pv = f(0, e), o = f(0, 0);
    return ((px.p[0] - o.p[0]) * (pv.v[0] - o.v[0]) - (pv.p[0] - o.p[0]) * (px.v[0] - o.v[0])) / (e * e); };
  near(det('se'), 1, 1e-9); near(det('vv'), 1, 1e-9); near(det('eu'), 1 + wh * wh, 1e-9); assert(det('rk') < 1);
});
test('Verlet is time reversible: run forward, flip v, run back, and it returns to the start', () => {
  for (const [name, o] of [['pendulum', { th0: 120 }], ['orbit', { e: 0.6 }]]) {
    const s = C.nmSystem(name, o), h = s.T / 80; let st = s.start(); st = { p: st.p, v: st.v };
    for (let k = 0; k < 200; k++) st = C.nmStep('vv', s, st, h);
    st = { p: st.p, v: st.v.map((x) => -x) }; for (let k = 0; k < 200; k++) st = C.nmStep('vv', s, st, h);
    const s0 = s.start(); for (let i = 0; i < s.dim; i++) { near(st.p[i], s0.p[i], 1e-10); near(-st.v[i], s0.v[i], 1e-9); }
  }
});
test('setups: pendulum 90° Euler goes over the top in its second period; 170° the others keep swinging; comet energy swings', () => {
  const p = C.nmSystem('pendulum', { th0: 90 }), a = C.nmRun('eu', p, p.T / 50, 50), b = C.nmRun('eu', p, p.T / 50, 100);
  assert(Math.abs(a.s.p[0]) < Math.PI && Math.abs(b.s.p[0]) > Math.PI);
  const q = C.nmSystem('pendulum', { th0: 170 });
  assert(Math.abs(C.nmRun('eu', q, q.T / 100, 50).s.p[0]) > Math.PI);
  for (const m of ['se', 'vv', 'rk']) { let st = q.start(), mx = 0; for (let k = 0; k < 1000; k++) { st = C.nmStep(m, q, st, q.T / 100); mx = Math.max(mx, Math.abs(st.p[0])); } assert(mx < Math.PI, m); }
  const o = C.nmSystem('orbit', { e: 0.5 }); near(C.nmRun('eu', o, 0.01, 100).dE, 0.737, 5e-4); near(1 / (1 - 0.737), 3.8, 0.05);
  const c = C.nmSystem('orbit', { e: 0.9 }), vp = c.start().v[1]; near(vp / (2 * Math.PI), 4.36, 5e-3); near(c.start().p[0], 0.1, 1e-15);
  near(C.nmRun('se', c, 1e-3, 3000).mxE, 0.93, 0.01); near(C.nmRun('vv', c, 1e-3, 3000).mxE, 0.10, 0.005); near(C.nmRun('rk', c, 1e-3, 3000).mxE, 0.0014, 1e-4);
  near(1e-3 * 365.25 * 24, 8.8, 0.05);
  assert(C.nmRun('eu', c, 1e-3, 3000).dE > 1);   /* flung out: unbound */
});
test('force evaluations per step: Euler, symplectic Euler and Verlet 1, RK4 4; failure stops a run', () => {
  assert.equal(JSON.stringify(C.NM_EVALS), JSON.stringify({ eu: 1, se: 1, vv: 1, rk: 4 }));
  const s = C.nmSystem('orbit', { e: 0.5 }); assert(C.nmFailed(s, { p: [0.005, 0], v: [0, 1] }, -20));
  assert(C.nmFailed(C.nmSystem('spring'), { p: [NaN], v: [0] }, 1));
});
console.log(`${n} groups passed`);
