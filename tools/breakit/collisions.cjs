/* Known values for the break-it test (tools/breakit.cjs), collisions. Hook: window.__col (S, run, t, ...).
   Track, table and explosion: the total momentum of the bodies is the same before and after (and equals the total from the
   bodies' own velocity functions before and after the collision time); kinetic energy lost is never negative, is zero at e = 1
   and equals the cited 1/2 mu (1 - e^2) v_rel^2 (along the line of centers for pucks); the track rule v2' - v1' = -e (v2 - v1)
   holds; the table's tangential velocities are unchanged; the explosion adds exactly E of kinetic energy and keeps M V.
   Ballistic pendulum: V = m u/(m + M) and the kept fraction of kinetic energy is m/(m + M). */
const pre = `const C = window.__col; if (!C || !C.run || !C.S) return true;
  const S = C.S, run = C.run, p = S.P[S.mode], M = S.mode, close = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(1, Math.abs(a), Math.abs(b));
  if (run.ballistic !== (M === 'ballistic') || (M === 'sandbox')) return true;
  const sum = (vs, ms, k) => vs.reduce((s, v, i) => s + ms[i] * v[k], 0), KE = (vs, ms) => vs.reduce((s, v, i) => s + 0.5 * ms[i] * (v[0] * v[0] + v[1] * v[1]), 0);
`;
module.exports = {
  checks: [
    { name: "momentum conserved through the collision (before, after, and the bodies' velocities at the current time)", fn: `(() => { ${pre}
      if (M === 'ballistic' || M === 'cradle' || !run.bodies.length) return true;
      const ms = run.bodies.map((b) => b.m);
      for (const k of [0, 1]) {
        const pb = sum(run.before, ms, k), pa = sum(run.after, ms, k);
        if (!close(pb, pa, 1e-9)) return M + ': p' + k + ' before ' + pb + ', after ' + pa;
        const now = run.bodies.map((b) => b.vel(C.t)), pn = sum(now, ms, k);
        if (!close(pn, pb, 1e-9)) return M + ': p' + k + ' at t = ' + C.t + ' is ' + pn + ', should be ' + pb;
      }
      return true; })()` },
    { name: "kinetic energy lost: never negative; zero at e = 1; equals 1/2 mu (1 - e^2) v_rel^2 on the track and along n on the table", fn: `(() => { ${pre}
      if (M !== 'track' && M !== 'table') return true;
      const ms = run.bodies.map((b) => b.m), mu = ms[0] * ms[1] / (ms[0] + ms[1]), loss = KE(run.before, ms) - KE(run.after, ms);
      if (loss < -1e-9 * Math.max(1, KE(run.before, ms))) return 'kinetic energy gained: ' + loss;
      if (!isFinite(run.tc)) return close(loss, 0, 1e-12) ? true : 'no collision but energy changed by ' + loss;
      const vrel = M === 'track' ? run.before[0][0] - run.before[1][0] : (run.before[0][0] - run.before[1][0]) * run.n[0] + (run.before[0][1] - run.before[1][1]) * run.n[1];
      const want = 0.5 * mu * (1 - p.e * p.e) * vrel * vrel;
      if (!close(loss, want, 1e-9)) return M + ': lost ' + loss + ' J but 1/2 mu (1 - e^2) v_rel^2 = ' + want;
      return true; })()` },
    { name: "track: v2' - v1' = -e (v2 - v1) at a collision; no collision leaves velocities alone", fn: `(() => { ${pre}
      if (M !== 'track') return true;
      const a = run.after, b = run.before;
      if (!isFinite(run.tc)) return close(a[0][0], b[0][0], 1e-12) && close(a[1][0], b[1][0], 1e-12) ? true : 'no collision but the velocities changed';
      return close(a[1][0] - a[0][0], -p.e * (b[1][0] - b[0][0]), 1e-9) ? true : "v2' - v1' = " + (a[1][0] - a[0][0]) + ', -e (v2 - v1) = ' + (-p.e * (b[1][0] - b[0][0]));
    })()` },
    { name: "table: the velocity components along the tangent are unchanged, and the impulse is along the line of centers", fn: `(() => { ${pre}
      if (M !== 'table' || !isFinite(run.tc) || !run.n) return true;
      const n = run.n, t = [-n[1], n[0]];
      if (!close(Math.hypot(n[0], n[1]), 1, 1e-9)) return 'n is not a unit vector';
      for (let i = 0; i < 2; i++) {
        const tb = run.before[i][0] * t[0] + run.before[i][1] * t[1], ta = run.after[i][0] * t[0] + run.after[i][1] * t[1];
        if (!close(tb, ta, 1e-9)) return 'puck ' + (i + 1) + ' tangential velocity changed from ' + tb + ' to ' + ta;
      }
      return true; })()` },
    { name: "explosion: adds exactly E of kinetic energy; centre of mass velocity stays V", fn: `(() => { ${pre}
      if (M !== 'explode') return true;
      const ms = run.bodies.map((b) => b.m), gain = KE(run.after, ms) - KE(run.before, ms);
      if (!close(gain, p.E, 1e-9)) return 'K gained ' + gain + ' J, spring energy E = ' + p.E;
      const Vc = (ms[0] * run.after[0][0] + ms[1] * run.after[1][0]) / (ms[0] + ms[1]);
      return close(Vc, p.V, 1e-9) ? true : 'centre of mass velocity ' + Vc + ', V = ' + p.V; })()` },
    { name: "ballistic pendulum: V = m u/(m + M), kept fraction of K is m/(m + M), rise h = V^2/2g below the top", fn: `(() => { ${pre}
      if (M !== 'ballistic') return true;
      const m = p.mb / 1000, V = m * p.ub / (m + p.M);
      if (!close(run.c.V, V, 1e-9)) return 'V = ' + run.c.V + ', m u/(m + M) = ' + V;
      const K0 = 0.5 * m * p.ub * p.ub, K1 = 0.5 * (m + p.M) * V * V;
      if (!close(K1 / K0, m / (m + p.M), 1e-9)) return 'kept fraction ' + K1 / K0;
      if (!run.r.over && run.r.h !== undefined && !close(run.r.h, V * V / (2 * 9.81), 1e-6)) return 'rise ' + run.r.h + ', V^2/2g = ' + V * V / 19.62;
      return true; })()` },
  ],
  steps: [
    { name: 'every scene and preset, run, then drag sliders to extremes in each scene and press Replay', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#presets [data-p]')) { b.click(); await pause(150); }
      for (const b of document.querySelectorAll('#modeSeg [data-m]')) {
        b.click(); await pause(150);
        for (const s of document.querySelectorAll('#sliders input[type=range]')) {
          if (!s.offsetParent) continue;
          for (const v of [s.min, s.max, s.min]) { s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(30); }
        }
        document.getElementById('reset').click(); await pause(150);
      }
      document.querySelector('#modeSeg [data-m=track]').click(); await pause(150);
    })()` },
  ],
};
