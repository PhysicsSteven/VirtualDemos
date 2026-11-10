/* Known values for the break-it test (tools/breakit.cjs), potential-curves. Hook: window.__pc (S, st, P, info, eqs, dt, escaped).
   Energy K + U = E stays put as it runs (Verlet drift under 1e-4 of the energy scale); the E, U and K readouts equal the state to the
   shown digits; every equilibrium has U' = 0; the period of the orbit (2 integral dx/v) equals the time the stepped motion measures
   between turning points; spring T0 = 2 pi sqrt(m/k); pendulum omega0 = sqrt(g/L) and T = 4 sqrt(L/g) K(sin(theta0/2)); Lennard Jones
   (Rahman 1964: eps 10.4 meV, sigma 0.340 nm) has its minimum at r0 = 2^(1/6) sigma with U = -eps; the double well has minima at
   +-a with U = 0 and the barrier U0 at x = 0. */
const pre = `const C = window.__pc; if (!C || !C.st || !C.P || !C.info) return true;
  const S = C.S, P = C.P, st = C.st, info = C.info, G = 9.81, rd = (id) => parseFloat(document.getElementById(id).textContent.replace(/\\u2212/g, '-'));
  const ellipK = (k) => { let a = 1, b = Math.sqrt(1 - k * k); for (let i = 0; i < 40; i++) { const an = 0.5 * (a + b); b = Math.sqrt(a * b); a = an; } return Math.PI / (2 * a); };
`;
module.exports = {
  checks: [
    { name: "energy K + U = E holds as it runs; no NaN in the state", fn: `(() => { ${pre}
      if (![st.x, st.v, S.E].every(isFinite)) return 'state x ' + st.x + ', v ' + st.v + ', E ' + S.E;
      if (C.escaped) return true;
      const U = P.U(st.x), K = 0.5 * P.m * st.v * st.v, dr = Math.abs(K + U - S.E), sc = Math.max(Math.abs(S.E), Math.abs(U), K, 1e-6);
      if (dr > 1e-4 * sc) return 'K + U = ' + (K + U) + ' but E = ' + S.E + ' (off by ' + dr + ')';
      return true; })()` },
    { name: "E, U and K readouts equal the state to the digits shown", fn: `(() => { ${pre}
      if (document.getElementById('play').textContent.trim() === 'Pause') return true;   /* readouts refresh every 100 ms while it runs */
      const text = document.getElementById('rU').textContent, d = (text.split(' ')[0].split('.')[1] || '').length, tol = 0.5 * Math.pow(10, -d) * 1.001 + 1e-12;
      const U = P.U(st.x), K = Math.max(0, S.E - U);
      if (Math.abs(rd('rU') - U) > tol) return 'U readout ' + text + ', U(x) = ' + U;
      if (Math.abs(rd('rE') - S.E) > tol) return 'E readout ' + document.getElementById('rE').textContent + ', E = ' + S.E;
      if (Math.abs(rd('rK') - K) > tol * 1.01 + 1e-12 && Math.abs(rd('rK') - K) > 2 * tol) return 'K readout ' + document.getElementById('rK').textContent + ', E - U = ' + K;
      return true; })()` },
    { name: "equilibria have U' = 0, the period matches the stepped motion, T0 matches the cited formula", fn: `(() => { ${pre}
      for (const e of C.eqs) if (e.type !== 'neutral') {
        const curv = Math.abs(P.dU(e.x + 1e-3) - P.dU(e.x - 1e-3)) / 2e-3;
        if (Math.abs(P.dU(e.x)) > 1e-5 * (curv + 1e-12) + 1e-9) return 'equilibrium at x = ' + e.x + ' has U\\' = ' + P.dU(e.x);
      }
      if (info.kind === 'bound' && isFinite(info.T) && st.nMeas > 0 && st.Tmeas && !C.escaped) {
        if (Math.abs(st.Tmeas - info.T) > 2e-3 * info.T) return 'measured period ' + st.Tmeas + ' but 2 integral dx/v gives ' + info.T;
      }
      const p = S.params;
      if (S.preset === 'spring' && info.ref && Math.abs(info.T0 - 2 * Math.PI * Math.sqrt(p.m / p.k)) > 1e-9 * info.T0) return 'spring T0 ' + info.T0;
      if (S.preset === 'spring' && info.kind === 'bound' && Math.abs(info.T / info.T0 - 1) > 1e-6) return 'spring period depends on amplitude: ratio ' + info.T / info.T0;
      if (S.preset === 'pend') {
        const w = 2 * Math.PI * Math.sqrt(p.L / G);
        if (info.ref && Math.abs(info.T0 - w) > 1e-9 * w) return 'pendulum T0 ' + info.T0 + ', 2 pi sqrt(L/g) = ' + w;
        if (info.kind === 'bound' && isFinite(info.T) && isFinite(info.tp.b)) { const th0 = Math.abs(info.tp.b - 0), want = 4 * Math.sqrt(p.L / G) * ellipK(Math.sin(Math.max(Math.abs(info.tp.a), Math.abs(info.tp.b)) / 2));
          if (Math.abs(info.tp.a + info.tp.b) < 1e-6 && Math.abs(info.T - want) > 1e-6 * want) return 'pendulum T ' + info.T + ', 4 sqrt(L/g) K = ' + want; }
      }
      return true; })()` },
    { name: "cited potentials: Lennard Jones minimum and double well", fn: `(() => { ${pre}
      const p = S.params, near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
      if (S.preset === 'lj') { const m = C.eqs.find((e) => e.type === 'stable'); if (!m) return 'no stable minimum'; 
        if (!near(m.x, Math.pow(2, 1 / 6) * p.sig, 1e-6)) return 'r0 ' + m.x + ', 2^(1/6) sigma = ' + Math.pow(2, 1 / 6) * p.sig;
        if (!near(m.U, -p.eps, 1e-6)) return 'well depth ' + m.U + ', eps ' + p.eps; }
      if (S.preset === 'dwell') { const st_ = C.eqs.filter((e) => e.type === 'stable'), un = C.eqs.find((e) => e.type === 'unstable');
        if (st_.length === 2 && (!near(Math.abs(st_[0].x), p.a, 1e-6) || Math.abs(st_[0].U) > 1e-9 * p.U0)) return 'wells at ' + st_.map((e) => e.x + ' (U ' + e.U + ')');
        if (un && (Math.abs(un.x) > 1e-6 || !near(un.U, p.U0, 1e-9))) return 'barrier at ' + un.x + ' with U ' + un.U; }
      return true; })()` }
  ],
  steps: [
    { name: "every preset, drag the energy to the top and bottom, then place the particle at the far ends", fn: `(() => {
      const C = window.__pc; if (!C) return;
      for (const p of ['coaster', 'lj', 'pend', 'dwell', 'custom', 'spring']) { C.applyPreset(p);
        for (const f of [0, 1, 0.5, 0.0001, 0.9999]) { const e = document.getElementById('eS'); e.value = f; e.dispatchEvent(new Event('input', { bubbles: true })); }
        for (const f of [0, 1, 0.5]) { const e = document.getElementById('xS'); e.value = f; e.dispatchEvent(new Event('input', { bubbles: true })); } }
    })()` },
    { name: "sliders to their limits on the pendulum and Lennard Jones, with the particle running", fn: `(() => {
      const C = window.__pc; if (!C) return;
      for (const p of ['pend', 'lj']) { C.applyPreset(p); C.setRunning && C.setRunning(true);
        for (const id of ['s1', 's2']) { const e = document.getElementById(id); if (!e || !e.offsetParent) continue; for (const v of [e.min, e.max, e.min]) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); } } }
    })()` }
  ]
};
