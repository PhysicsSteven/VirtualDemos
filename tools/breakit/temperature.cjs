/* Known values for the break-it test (tools/breakit.cjs), temperature. Hook: window.__tp (S, eqNow, wallState, coWall, chNow, cvTemp,
   cvPar, coolRates, gasP). Checks: Equilibrium: the heat one body loses is the heat the other gains, the temperatures stay between
   the starts and the final T_f = (C_A T_A0 + C_B T_B0)/(C_A + C_B), P = kA(T_A − T_B)/L; Conduction: the temperature drops across
   the films and layers add to T_in − T_out, P = A ΔT/ΣR, the temperature falls monotonically from warm to cold; Energy chain:
   power in = useful + all the waste, efficiency = product of the stage efficiencies; Cooling: the sphere's temperature stays
   between the room's and the start, never rises, equals T0 at t = 0, and the heat loss is convection plus radiation (positive
   when hotter than the air); Thermometer: gas pressure P = nRT/V, so the 100 °C to 0 °C ratio is 373.15/273.15. */
const pre = `const P = window.__tp; if (!P) return true;
  const S = P.S, near = (g, w, tol) => Math.abs(g - w) <= tol * Math.max(Math.abs(w), 1e-300);
`;
module.exports = {
  checks: [
    { name: "equilibrium: heat lost = heat gained, T between start and T_f, P = kA ΔT/L", fn: `(() => { ${pre}
      if (S.view !== 'eq') return true;
      const st = P.eqNow(), e = S.eq;
      for (const k of ['TA', 'TB', 'Tf', 'tau', 'P', 'Q']) if (!isFinite(st[k])) return k + ' = ' + st[k];
      if (Math.abs(st.CA * (e.TA0 - st.TA) - st.CB * (st.TB - e.TB0)) > 1e-9 * st.CA * (Math.abs(e.TA0 - e.TB0) + 1e-3)) return 'heat lost by A != heat gained by B';
      const lo = Math.min(e.TA0, e.TB0) - 1e-9, hi = Math.max(e.TA0, e.TB0) + 1e-9;
      if (st.TA < lo || st.TA > hi || st.TB < lo || st.TB > hi) return 'T out of range: ' + st.TA + ', ' + st.TB;
      if (Math.abs(st.CA * st.TA + st.CB * st.TB - (st.CA + st.CB) * st.Tf) > 1e-9 * (st.CA + st.CB) * (Math.abs(st.Tf) + 1)) return 'energy not conserved: C_A T_A + C_B T_B != (C_A + C_B) T_f';
      return true; })()` },
    { name: "conduction: layer drops add to T_in − T_out; P = A ΔT / ΣR; temperature falls monotonically", fn: `(() => { ${pre}
      const w = P.wallState(P.coWall()), c = S.co;
      if (!(w.R > 0) || !isFinite(w.P)) return 'R = ' + w.R + ', P = ' + w.P;
      if (!near(w.P, c.A * (c.Tin - c.Tout) / w.R, 1e-12)) return 'P != AΔT/ΣR';
      const T = w.T, up = c.Tin >= c.Tout;
      if (Math.abs(T[0] - c.Tin) > 1e-9 || Math.abs(T[T.length - 1] - c.Tout) > 1e-8 * (1 + Math.abs(c.Tin - c.Tout))) return 'ends of the temperature profile: ' + T[0] + ', ' + T[T.length - 1];
      for (let i = 1; i < T.length; i++) if ((T[i - 1] - T[i]) * (up ? 1 : -1) < -1e-9) return 'temperature not monotone at ' + i;
      for (const x of [0, 0.25, 0.5, 1]) { const v = w.at(x * w.thick); if (!isFinite(v) || v > Math.max(c.Tin, c.Tout) + 1e-9 || v < Math.min(c.Tin, c.Tout) - 1e-9) return 'probe at ' + x + ' = ' + v; }
      return true; })()` },
    { name: "energy chain: input = useful + waste at every stage; efficiency = product of stage efficiencies", fn: `(() => { ${pre}
      const r = P.chNow(); if (!r.ok1 || !r.ok2) return true;
      const tot = r.useful + r.waste0 + r.waste1 + r.waste2 + (r.form3 === 'thermal' ? 0 : 0);
      if (r.form3 === 'thermal') { if (Math.abs(r.Pin - (r.waste0 + r.waste1 + r.P2)) > 1e-9 * r.Pin) return 'energy not conserved before the heater'; return true; }
      if (Math.abs(tot - r.Pin) > 1e-9 * Math.max(r.Pin, 1e-9)) return 'Pin ' + r.Pin + ' but useful + waste = ' + tot;
      if (r.eff < 0 || r.eff > 1 + 1e-12) return 'efficiency ' + r.eff;
      return true; })()` },
    { name: "cooling sphere: T(0) = T0, stays between room and T0, never rises, losses positive when hotter", fn: `(() => { ${pre}
      if (S.view !== 'cv') return true;
      const p = P.cvPar(), ts = [0, 1, 7.5, 60, Math.min(Math.max(S.cv.t, 0), 3000), 3000].sort((a, b) => a - b); let prev = Infinity;
      for (const t of ts) { const T = P.cvTemp(t); if (!isFinite(T)) return 'T(' + t + ') = ' + T;
        if (t === 0 && Math.abs(T - p.T0) > 1e-9) return 'T(0) = ' + T;
        const lo = Math.min(p.T0, p.Ta) - 1e-6, hi = Math.max(p.T0, p.Ta) + 1e-6; if (T < lo || T > hi) return 'T(' + t + ') = ' + T + ' outside [' + lo + ', ' + hi + ']';
        if (T > prev + 1e-9 && p.T0 > p.Ta) return 'sphere warmed up between times: ' + prev + ' -> ' + T; prev = T; }
      const r = P.coolRates(p, p.T0); if ((p.T0 - p.Ta) > 0.01 && !(r.Pc > 0 && r.Pr > 0 && r.h > 0)) return 'losses not positive: ' + r.Pc + ', ' + r.Pr + ', h = ' + r.h;
      return true; })()` },
    { name: "gas thermometer: P = nRT/V, so P(100 °C)/P(0 °C) = 373.15/273.15 and P(0 K) = 0", fn: `(() => { ${pre}
      const R = 8.31446261815324, n = S.th.n * 1e-3 || 0.02;
      if (!near(P.gasP(n, 100) / P.gasP(n, 0), 373.15 / 273.15, 1e-12)) return 'ratio ' + P.gasP(n, 100) / P.gasP(n, 0);
      if (Math.abs(P.gasP(n, -273.15)) > 1e-9) return 'P at 0 K = ' + P.gasP(n, -273.15);
      if (!near(P.gasP(n, 20), n * R * 293.15 / 1e-3, 1e-12)) return 'P(20 °C) off';
      return true; })()` },
  ],
  steps: [
    { name: 'every view with extreme settings: run each, drag every slider to its ends, switch presets mid run', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), P = window.__tp;
      for (const v of ['eq', 'th', 'ex', 'co', 'cv', 'ch']) {
        P.setView(v); await pause(150); if (P.setRun) P.setRun(true);
        for (const el of document.querySelectorAll('input[type=range]')) { if (!el.offsetParent) continue; const o = el.value;
          for (const x of [el.min, el.max, o]) { el.value = x; el.dispatchEvent(new Event('input', { bubbles: true })); await pause(30); } }
        for (const b of document.querySelectorAll('#presets button')) { if (!b.offsetParent) continue; b.click(); await pause(60); }
        if (P.setRun) P.setRun(false);
      }
      P.applyPreset && P.applyPreset('hotmetal'); await pause(150);
    })()` },
  ],
};
