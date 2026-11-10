/* Known values for the break-it test (tools/breakit.cjs), capacitors. Hook: window.__cap (state(), S, SP, ...).
   Parallel plate view: Q = CV, U = ½CV² and the field energy summed region by region agree; ε₀E = σ; a battery holds V at the
   set value; the work ledger closes (W_hand = ΔU − W_battery + heat); the bound charge density is σ(1 − 1/κ); C never
   falls below the empty (κ = 1) value for the same plates. */
const pre = `const C = window.__cap; if (!C || !C.S || !C.S.start) return true; if (C.S.view === 'combo' || C.S.view === 'sphere') return true;
  const S = C.S, st = C.state(), g = S.g, EPS0 = 8.8541878188e-12;
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(a), Math.abs(b), 1e-300);
  for (const k of ['C', 'Q', 'V', 'U']) if (!isFinite(st[k])) return k + ' is ' + st[k];
`;
module.exports = {
  checks: [
    { name: "Q = CV, U = ½CV², and the energy in the field equals the stored energy", fn: `(() => { ${pre}
      if (!near(st.Q, st.C * st.V, 1e-9)) return 'Q ' + st.Q + ' != CV ' + st.C * st.V;
      if (!near(st.U, 0.5 * st.C * st.V * st.V, 1e-9)) return 'U ' + st.U + ' != ½CV²';
      if (!near(st.Ufield, st.U, 1e-6)) return 'field energy ' + st.Ufield + ' != U ' + st.U;
      return true; })()` },
    { name: "fields: E = V/d in the empty part, σ = ε₀E, E in the slab = E in the gap / κ, bound σ = σ(1 − 1/κ)", fn: `(() => { ${pre}
      if (!near(st.Ee, st.V / g.d, 1e-9)) return 'E ' + st.Ee + ' != V/d ' + st.V / g.d;
      if (!near(st.sigE, EPS0 * st.Ee, 1e-6)) return 'σ != ε₀E';
      if (g.f > 0 && !near(st.Ea, g.kap * st.Ed, 1e-9)) return 'E gap != κ E slab';
      if (g.f > 0 && !near(st.sigB, st.sigI * (1 - 1 / g.kap), 1e-9)) return 'bound charge density wrong';
      if (g.f > 0 && !near(st.Ea * (g.d - g.t) + st.Ed * g.t, st.V, 1e-6)) return 'field does not integrate to V over the slab column: ' + (st.Ea * (g.d - g.t) + st.Ed * g.t) + ' vs ' + st.V;
      return true; })()` },
    { name: "battery mode holds V at the set value; C is never below the empty value", fn: `(() => { ${pre}
      if (S.mode === 'battery' && !near(st.V, S.Vb, 1e-9)) return 'battery connected but V = ' + st.V + ', set ' + S.Vb;
      const C0 = EPS0 * g.A / g.d; if (st.C < C0 * (1 - 1e-9) && g.kap >= 1) return 'C ' + st.C + ' below the empty value ' + C0;
      return true; })()` },
    { name: "work ledger closes: W_hand = ΔU − W_battery + heat", fn: `(() => { ${pre}
      const L = S.L; if (!L || !isFinite(L.Wh)) return true;
      const lhs = L.Wh, rhs = (st.U - S.start.U) - L.Wb + (L.H > 1e-18 ? L.H : 0);
      return Math.abs(lhs - rhs) <= 1e-6 * Math.max(Math.abs(st.U), Math.abs(S.start.U), Math.abs(L.Wb || 0), 1e-30) ? true : 'ledger: W_hand ' + lhs + ' vs ΔU − Wb + H = ' + rhs; })()` },
  ],
  steps: [
    { name: 'Max plate separation then min, slab all the way in and out, battery to isolated and back, flip modes mid slide', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      const set = (id, v) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      for (const id of ['sD', 'sA', 'sF', 'sK', 'sV']) { const e = document.getElementById(id); if (!e || e.type !== 'range') continue;
        for (const v of [e.max, e.min, e.max, e.min]) { set(id, v); await pause(60); } }
      await pause(200);
    })()` },
  ],
};
