/* Known values for the break-it test (tools/breakit.cjs). Related rates: at any moment the chain rule (dy/du)(du/dt) equals the
   rate measured from the motion, and with the opening ladder (L = 5 m, 0.5 m/s) the top falls at 0.375 m/s when the foot is 3 m out.
   Optimization: the best choice has a zero derivative, and with the opening values the box's best cut is 3.924 cm, the fence's 30 m,
   the can's 3.837 cm, the throw's 45°; the lifeguard and the light ray obey Snell's law at their best point. */
module.exports = {
  checks: [
    { name: 'chain rule equals the measured rate', fn: `(() => {
      const r = window.__ro; if (!r) return 'no hooks'; const S = r.S; if (S.sc.kind !== 'rates') return true;
      const c = r.rs(S.t), chain = c.dydu * c.dudt, meas = r.measured((t) => r.rs(t).y, S.t, 1e-4);
      return Math.abs(chain - meas) <= 1e-6 * Math.max(1e-6, Math.abs(chain)) ? true : 'chain ' + chain + ' measured ' + meas + ' at t = ' + S.t;
    })()` },
    { name: 'derivative zero at the best choice', fn: `(() => {
      const r = window.__ro; if (!r) return 'no hooks'; const S = r.S; if (S.sc.kind !== 'opt') return true;
      const p = S.preset === 'guard' ? Object.assign({ a: 20 }, S.p) : S.p, xb = r.bestX(), lo = S.sc.lo(p), hi = S.sc.hi(p);
      if (xb <= lo || xb >= hi) return true;
      const d = S.sc.dq(xb, p), ref = Math.abs(S.sc.dq(lo + 0.1 * (hi - lo), p)) + Math.abs(S.sc.dq(hi - 0.1 * (hi - lo), p));
      return Math.abs(d) <= 1e-9 * ref ? true : 'derivative ' + d + ' at the best ' + xb;
    })()` },
    { name: 'opening values give the textbook best points', fn: `(() => {
      const r = window.__ro; if (!r) return 'no hooks'; const S = r.S, M = r.META[S.preset]; if (!M || S.sc.kind !== 'opt') return true;
      for (const d of M.p) if (S.p[d.k] !== d.v) return true;
      const want = { box: 3.92374, fence: 30, can: 3.83722, range: 45 }[S.preset]; if (want === undefined) return true;
      return Math.abs(r.bestX() - want) < 1e-4 ? true : S.preset + ' best ' + r.bestX();
    })()` },
  ],
  steps: [
    { name: 'ladder at x = 3 m: dy/dt = −0.375 m/s', fn: `(() => { const r = window.__ro; r.applyPreset('ladder'); r.setU(3); const c = r.rs(r.S.t); const v = c.dydu * c.dudt; return Math.abs(v + 0.375) < 1e-12 ? true : 'dy/dt ' + v; })()` },
    { name: 'lifeguard best obeys Snell', fn: `(() => { const r = window.__ro; r.applyPreset('guard'); const p = Object.assign({ a: 20 }, r.S.p), x = r.bestX(); const s1 = x / Math.hypot(p.a, x), s2 = (p.D - x) / Math.hypot(p.b, p.D - x); return Math.abs(s1 / p.v1 - s2 / p.v2) < 1e-12 ? true : 'off by ' + (s1 / p.v1 - s2 / p.v2); })()` },
    { name: 'cone at h = 10 cm: 20/π cm/s', fn: `(() => { const r = window.__ro; r.applyPreset('cone'); const V = Math.PI * 225 * 1000 / 2700 / 1000; r.setU(V); const c = r.rs(r.S.t); const v = c.dydu * c.dudt; return Math.abs(v - 20 / Math.PI) < 1e-9 ? true : 'dh/dt ' + v; })()` },
  ],
};
