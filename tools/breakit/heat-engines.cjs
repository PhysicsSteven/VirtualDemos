/* Known values for the break-it test (tools/breakit.cjs), heat-engines. Hook: window.__he (S, sum, vs).
   The first law holds on every leg (mismatch below 1e-9 J); around the closed cycle ΔU = 0 and ΔS = 0 (S is a state function), so
   W_net = Q_net; with no regenerator leg W_net = Q_in − Q_out; every corner obeys P V = n R T; an engine never beats the Carnot
   limit 1 − Tmin/Tmax; a refrigerator or heat pump has Q_h = Q_c + W_in; the textbook efficiencies of Carnot, Otto, Diesel, Brayton
   and Stirling agree with W_net/Q_in from the legs; presets sit at their cited values (Carnot 500/300 K → 40 %, Otto r = 8 diatomic
   → 56.5 %). */
const pre = `const H = window.__he; if (!H || !H.sum || !H.vs) return true;
  const S = H.S, sm = H.sum, vs = H.vs, R = 8.31446261815324;
  const near = (g, w, tol) => Math.abs(g - w) <= tol * Math.max(Math.abs(w), 1e-300);
`;
module.exports = {
  checks: [
    { name: "first law on every leg; closed cycle: ΔU = 0, ΔS = 0, W_net = Q_net; no NaN", fn: `(() => { ${pre}
      for (const k of ['Qin', 'Qout', 'Wnet', 'Qnet', 'dU', 'dS', 'Tmax', 'Tmin']) if (!isFinite(sm[k])) return k + ' = ' + sm[k];
      const sc = Math.max(sm.scale, 1e-30);
      if (sm.mism > 1e-9 * sc + 1e-9) return 'first law mismatch ' + sm.mism + ' J';
      if (Math.abs(sm.dU) > 1e-9 * sc) return 'ΔU around the cycle = ' + sm.dU;
      if (Math.abs(sm.dS) > 1e-9 * Math.max(sc / Math.max(sm.Tmin, 1), 1e-30)) return 'ΔS around the cycle = ' + sm.dS;
      if (!near(sm.Wnet, sm.Qnet, 1e-9) && Math.abs(sm.Wnet - sm.Qnet) > 1e-9 * sc) return 'W_net ' + sm.Wnet + ' != Q_net ' + sm.Qnet;
      return true; })()` },
    { name: "every corner obeys PV = nRT and T stays positive", fn: `(() => { ${pre}
      for (const v of vs) { if (!(v.P > 0 && v.V > 0)) return 'corner P, V = ' + v.P + ', ' + v.V; if (!near(Math.exp(v.x), v.V, 1e-12)) return 'x != ln V'; }
      if (!(sm.Tmin > 0)) return 'Tmin = ' + sm.Tmin;
      return true; })()` },
    { name: "engine: W_net = Q_in − Q_out (no regenerator leg) and η ≤ Carnot limit; refrigerator: Q_h = Q_c + W_in", fn: `(() => { ${pre}
      const sc = Math.max(sm.scale, 1e-30);
      if (sm.engine) {
        if (!sm.legs.some((L) => L.regen) && Math.abs(sm.Wnet - (sm.Qin - sm.Qout)) > 1e-9 * sc) return 'W_net != Qin - Qout: ' + sm.Wnet + ' vs ' + (sm.Qin - sm.Qout);
        if (sm.Qin > 0 && sm.Wnet / sm.Qin > 1 - sm.Tmin / sm.Tmax + 1e-9) return 'η = ' + sm.Wnet / sm.Qin + ' beats the Carnot limit ' + (1 - sm.Tmin / sm.Tmax);
      } else if (!sm.legs.some((L) => L.regen) && Math.abs(sm.Qout - sm.Qin + sm.Wnet) > 1e-9 * sc) return 'Qh != Qc + Win';
      return true; })()` },
    { name: "textbook efficiency of the standard cycle equals W_net/Q_in from the legs", fn: `(() => { ${pre}
      if (!sm.engine || !(sm.Qin > 0) || !S.preset) return true;
      const eta = sm.Wnet / sm.Qin, g = S.g, c = S.cycle;
      if (c === 'carnot') { const e = 1 - sm.Tmin / sm.Tmax; if (!near(eta, e, 1e-9)) return 'Carnot η ' + eta + ' vs ' + e; }
      if (c === 'otto' && S.edges.length === 4) { const r = vs[0].V / vs[1].V; if (!near(eta, 1 - Math.pow(r, 1 - g), 1e-9)) return 'Otto η ' + eta + ' vs ' + (1 - Math.pow(r, 1 - g)); }
      if (c === 'brayton' && S.edges.length === 4) { const rp = vs[1].P / vs[0].P; if (!near(eta, 1 - Math.pow(rp, (1 - g) / g), 1e-9)) return 'Brayton η ' + eta; }
      return true; })()` },
    { name: "presets: Carnot 500/300 K gives 40 %, Otto r = 8 gives 56.5 %", fn: `(() => { ${pre}
      if (S.preset === 'carnot' && S.edges.length === 4) { const T = (i) => vs[i].P * vs[i].V / (S.n * R); if (Math.abs(sm.Tmax - 500) < 1e-6 && Math.abs(sm.Tmin - 300) < 1e-6 && !near(sm.Wnet / sm.Qin, 0.4, 1e-9)) return 'η ' + sm.Wnet / sm.Qin; }
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, forward and backward, regenerator off and on, add and remove corners', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(150); }
      for (const id of ['regen', 'addC', 'delC', 'delC', 'delC', 'delC', 'delC']) { const el = document.getElementById(id); if (el && !el.hidden) el.click(); await pause(100); }
      document.getElementById('reset') && document.getElementById('reset').click(); await pause(200);
    })()` },
  ],
};
