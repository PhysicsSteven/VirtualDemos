'use strict';
// Potential Energy Curves: turning points, equilibria and their stability from U″, the period integral,
// the small oscillation limit, and energy conservation of the velocity Verlet integrator.
const assert = require('node:assert/strict'), { core } = require('./demo_source.cjs');
const m = core('potential-curves', 'G,AR_MU,LJ_MU,makePotential,makeSpline,turning,periodBetween,revolutionTime,equilibria,run,newState,ellipK,coasterH');
let n = 0;
const close = (a, b, rel = 1e-9, abs = 0) => assert(Math.abs(a - b) <= abs + rel * Math.abs(b), `expected ${b}, got ${a}`);
const test = (name, f) => { f(); n++; console.log('PASS', name); };
const PI = Math.PI;
// the presets' views, as in the page
const VIEW = { spring: { x0: -0.6, x1: 0.6 }, dwell: { x0: -1.6, x1: 1.6 }, lj: { x0: 0.28, x1: 0.95 }, pend: { x0: -1.15 * PI, x1: 1.15 * PI }, coaster: { x0: 0, x1: 120 } };
const P = {
  spring: m.makePotential('spring', { k: 20, m: 0.5 }),
  dwell: m.makePotential('dwell', { U0: 1, a: 0.8 }),
  lj: m.makePotential('lj', { eps: 10.4, sig: 0.34 }),
  pend: m.makePotential('pend', { L: 1 }),
  coaster: m.makePotential('coaster', { H: 25, D: 1 })
};
// the page's time step rule: 4000 steps per period of the stiffest local oscillation
const dtFor = (Pp, a, b) => { let c = 0; for (let i = 0; i <= 400; i++) c = Math.max(c, Math.abs(Pp.d2U(a + (b - a) * i / 400))); return 2 * PI / Math.sqrt(c / Pp.m) / 4000; };

test('U′ and U″ agree with finite differences of U for every built in potential', () => {
  const pts = { spring: [-0.4, 0.1, 0.5], dwell: [-1.2, -0.3, 0.2, 0.9], lj: [0.33, 0.38, 0.5, 0.8], pend: [-2.5, -0.4, 1, 3], coaster: [5, 30, 50, 70, 110] };
  for (const k in pts) for (const x of pts[k]) {
    const Pp = P[k], h = 1e-5 * (VIEW[k].x1 - VIEW[k].x0);
    close(Pp.dU(x), (Pp.U(x + h) - Pp.U(x - h)) / (2 * h), 1e-6, 1e-7 * Math.abs(Pp.U(x)) + 1e-9);
    close(Pp.d2U(x), (Pp.dU(x + h) - Pp.dU(x - h)) / (2 * h), 1e-5, 1e-6);
  }
});

test('turning points where U = E: spring, double well, Lennard Jones, and the open cases', () => {
  const E = 0.9, tp = m.turning(P.spring, 0, E, VIEW.spring);
  close(tp.a, -Math.sqrt(2 * E / 20), 1e-12); close(tp.b, Math.sqrt(2 * E / 20), 1e-12);
  // double well U = U₀[(x/a)² − 1]², E < U₀: x = a√(1 ± √(E/U₀))
  const w = m.turning(P.dwell, -0.8, 0.5, VIEW.dwell), q = Math.sqrt(0.5);
  close(w.a, -0.8 * Math.sqrt(1 + q), 1e-12); close(w.b, -0.8 * Math.sqrt(1 - q), 1e-12);
  // above the barrier one orbit spans both wells
  const w2 = m.turning(P.dwell, 0, 1.5, VIEW.dwell); close(w2.a, -0.8 * Math.sqrt(1 + Math.sqrt(1.5)), 1e-12); close(w2.b, -w2.a, 1e-12);
  // Lennard Jones: 4ε(t² − t) = E with t = (σ/r)⁶
  const Elj = -5, eps = 10.4, sig = 0.34, tIn = (1 + Math.sqrt(1 + Elj / eps)) / 2, tOut = (1 - Math.sqrt(1 + Elj / eps)) / 2;
  const l = m.turning(P.lj, 0.4, Elj, VIEW.lj);
  close(l.a, sig * Math.pow(tIn, -1 / 6), 1e-12); close(l.b, sig * Math.pow(tOut, -1 / 6), 1e-12);
  // E > 0 for the molecule: no outer turning point; pendulum above 2mgL: goes round
  const u = m.turning(P.lj, 0.4, 1, VIEW.lj); assert(u.unboundR && !u.unboundL && !isFinite(u.b));
  const r = m.turning(P.pend, 0, 2 * m.G * 1 * 1.1, VIEW.pend); assert(r.rot);
  // pendulum below the top: turning points at ±θ₀
  const th0 = 2.2, pe = m.turning(P.pend, 0, m.G * (1 - Math.cos(th0)), VIEW.pend); close(pe.a, -th0, 1e-12); close(pe.b, th0, 1e-12);
});

test('equilibria and stability from the sign of U″', () => {
  const find = (eqs, x, tol) => eqs.find((e) => Math.abs(e.x - x) < tol);
  const d = m.equilibria(P.dwell, -1.6, 1.6, 3000);
  assert.equal(d.length, 3);
  for (const s of [-1, 1]) { const e = find(d, 0.8 * s, 1e-9); assert(e && e.type === 'stable'); close(e.k, 8 * 1 / 0.64, 1e-9); }
  const top = find(d, 0, 1e-9); assert(top && top.type === 'unstable' && P.dwell.d2U(0) < 0);
  const p = m.equilibria(P.pend, VIEW.pend.x0, VIEW.pend.x1, 3000);
  assert(find(p, 0, 1e-9).type === 'stable'); close(find(p, 0, 1e-9).k, m.G, 1e-9);
  assert(find(p, PI, 1e-9).type === 'unstable' && find(p, -PI, 1e-9).type === 'unstable');
  const r0 = Math.pow(2, 1 / 6) * 0.34, lj = m.equilibria(P.lj, 0.28, 0.95, 3000);
  assert.equal(lj.length, 1); close(lj[0].x, r0, 1e-9); assert.equal(lj[0].type, 'stable');
  close(lj[0].U, -10.4, 1e-9); close(lj[0].k, 72 * 10.4 / (r0 * r0), 1e-8);
  // the coaster's flat station (between the first and middle hills, 22 m to 32 m) is neutral
  const c = m.equilibria(P.coaster, 0, 120, 3000), st = c.find((e) => e.type === 'neutral');
  assert(st && Math.abs(st.lo - 22) < 0.05 && Math.abs(st.hi - 32) < 0.05, JSON.stringify(st));
});

test('small oscillation period 2π√(m/U″) is the low energy limit of T = 2∫dx/v', () => {
  // energies a fraction f of the well depth above the bottom; the anharmonic correction to T scales with f
  for (const [k, xmin, kk, depth] of [['dwell', 0.8, 12.5, 1], ['pend', 0, m.G, 2 * m.G], ['lj', Math.pow(2, 1 / 6) * 0.34, 72 * 10.4 / Math.pow(Math.pow(2, 1 / 6) * 0.34, 2), 10.4]]) {
    const Pp = P[k], T0 = 2 * PI * Math.sqrt(Pp.m / kk);
    for (const f of [1e-5, 1e-7]) {
      const E = Pp.U(xmin) + f * depth, tp = m.turning(Pp, xmin, E, VIEW[k]);
      const T = m.periodBetween(Pp, E, tp.a, tp.b, Pp.m, 4000);
      close(T, T0, 1e-4);
    }
  }
  // harmonic: the same period at every amplitude
  const T0 = 2 * PI * Math.sqrt(0.5 / 20);
  for (const E of [0.01, 0.5, 3.9]) { const tp = m.turning(P.spring, 0, E, VIEW.spring); close(m.periodBetween(P.spring, E, tp.a, tp.b, 0.5, 4000), T0, 1e-12); }
  close(T0, 0.9935, 1e-4);   // the value quoted in the notes
});

test('pendulum: period integral equals 4√(L/g)K(sin(θ₀/2)); over the top it equals 2K(1/k)/(kω₀)', () => {
  close(m.ellipK(0), PI / 2, 1e-15); close(m.ellipK(Math.SQRT1_2), 1.8540746773013719, 1e-14);
  for (const L of [0.5, 1, 2]) {
    const Pp = m.makePotential('pend', { L }), mgL = m.G * L, w0 = Math.sqrt(m.G / L);
    for (const th0 of [0.3, PI / 3, 2.6, 3.1]) {
      const E = mgL * (1 - Math.cos(th0)), tp = m.turning(Pp, 0, E, { x0: -1.15 * PI, x1: 1.15 * PI });
      close(m.periodBetween(Pp, E, tp.a, tp.b, Pp.m, 4000), 4 / w0 * m.ellipK(Math.sin(th0 / 2)), 1e-9);
    }
    for (const k of [1.05, 1.5, 3]) {
      const E = 2 * mgL * k * k;
      close(m.revolutionTime(Pp, E, Pp.m, 4000), 2 * m.ellipK(1 / k) / (k * w0), 1e-6);
    }
  }
  close(2 * m.ellipK(0.5) / PI, 1.0732, 1e-4);   // 60° start in the notes: T/T₀ = 1.073
});

test('velocity Verlet keeps E = K + U to O(Δt²), measures the period, and does not drift', () => {
  const cases = [['spring', -0.3, 0], ['dwell', -1.08, 0], ['dwell', -1.2, 1.2], ['lj', 0.36, 0], ['pend', PI / 3, 0], ['pend', 0, 7]];
  for (const [k, x0, v0] of cases) {
    const Pp = P[k], E = Pp.U(x0) + 0.5 * Pp.m * v0 * v0, tp = m.turning(Pp, x0, E, VIEW[k]);
    const rot = tp.rot, T = rot ? m.revolutionTime(Pp, E, Pp.m, 4000) : m.periodBetween(Pp, E, tp.a, tp.b, Pp.m, 4000);
    const dt = rot ? dtFor(Pp, -PI, PI) : dtFor(Pp, tp.a, tp.b), s = m.newState(x0, v0);
    let worst = 0;
    const N = Math.ceil(20 * T / dt), chunk = Math.ceil(N / 200);
    for (let i = 0; i < N; i += chunk) { m.run(Pp, s, dt, chunk); worst = Math.max(worst, Math.abs(Pp.U(s.x) + 0.5 * Pp.m * s.v * s.v - E)); }
    const scale = Math.max(Math.abs(E - Pp.U(tp.rot ? 0 : (tp.a + tp.b) / 2)), Math.abs(E) * 1e-3, 1e-12);
    assert(worst / scale < 2e-6, `${k}: energy error ${worst / scale}`);
    const Tm = rot ? s.Trev : s.Tmeas;
    assert(Tm !== null, `${k}: no period measured`); close(Tm, T, 1e-5);
  }
});

test('Lennard Jones units: reduced mass of argon and the preset period in the notes', () => {
  close(m.AR_MU * m.LJ_MU, 39.948 / 2 * 1.66053906892e-27, 1e-12);
  const Pp = P.lj, r0 = Math.pow(2, 1 / 6) * 0.34, T0 = 2 * PI * Math.sqrt(Pp.m / (72 * 10.4 / (r0 * r0)));
  close(T0, 1.26, 5e-3);                                  // ps, small oscillations
  const E = Pp.U(0.36), tp = m.turning(Pp, 0.36, E, VIEW.lj);
  close(E, -8.6, 5e-3); close(m.periodBetween(Pp, E, tp.a, tp.b, Pp.m, 4000), 1.425, 1e-3);
});

test('custom spline: through every point, continuous slope and curvature, straight beyond the ends', () => {
  const xs = [0, 1, 2, 3, 4, 5, 6], ys = [3.2, 0.9, 1.5, 2.3, 0.3, 1.0, 3.6], sp = m.makeSpline(xs, ys), e = 1e-9;
  xs.forEach((x, i) => close(sp.U(x), ys[i], 1e-12, 1e-12));
  for (const x of xs.slice(1, -1)) { close(sp.dU(x - e), sp.dU(x + e), 1e-6, 1e-7); close(sp.d2U(x - e), sp.d2U(x + e), 1e-6, 1e-6); }
  close(sp.d2U(0), 0, 0, 1e-12); close(sp.d2U(6), 0, 0, 1e-12);
  close(sp.U(7) - sp.U(6), sp.dU(6), 1e-12); close(sp.U(-1) - sp.U(0), -sp.dU(0), 1e-12);
});

console.log(`${n} potential-curves test groups passed`);
