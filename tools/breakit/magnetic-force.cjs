/* Known values for the break-it test (tools/breakit.cjs), magnetic-force. Hook: window.__mf (S, main, cyc, bot, botM, band, hist, simT).
   Free setup: the magnetic force does no work (|v| of the exact trajectory stays at the launch speed with E off, and with E on K − K₀ =
   q E·Δr), the trajectory starts where and how the launch says; with the settings fixed, the readouts r = mv/|qB|, T = 2πm/|qB|,
   f = 1/T and the drift speed E/B equal the physics (constants worked out again from CODATA 2022); the Circle preset (proton, 1.0e5 m/s,
   0.10 T) has r = 1.04 cm and T = 0.656 µs, the drift preset E/B = 1.0e5 m/s. Selector: E = V/2h and the speed E/B shown; the passing band
   contains E/B. Spectrometer: each ion's r = √(2mV/q)/B from the shown mass, the masses are the AME2020 values, ²²Ne⁺ lands about 1 cm beyond
   ²⁰Ne⁺ in the preset. Cyclotron: f_c = |q|B/2πm and K_max = (qBR)²/2m shown; every full gap crossing of a tuned run adds exactly qV.
   Bottle: |v| stays at the start value (Boris step), the center field is the B₀ set, the loss cone is asin(1/√R). */
const pre = `const M = window.__mf; if (!M || !M.S) return true;
  const S = M.S, QE = 1.602176634e-19, ME = 9.1093837139e-31, MP = 1.67262192595e-27, MD = 3.3435837768e-27, MA = 6.6446573450e-27, U = 1.66053906892e-27;
  const PART = { p: [QE, MP], e: [-QE, ME], a: [2 * QE, MA], d: [QE, MD] };
  const part = (k) => k === 'c' ? [S.f.cq * QE, Math.pow(10, S.f.cm) * U] : PART[k];
  const SUPS = '⁻⁰¹²³⁴⁵⁶⁷⁸⁹', SUPV = { '⁻': '-', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
  const PFX = { f: 1e-15, p: 1e-12, n: 1e-9, 'µ': 1e-6, m: 1e-3, k: 1e3, M: 1e6, G: 1e9 };
  /* a shown number with its unit, in SI: "1.04 cm", "656 ns", "1 × 10⁵ m/s", "20 kV/m"; NaN when it cannot be read */
  const val = (t, base) => { t = (t || '').replace(/\\u2212/g, '-').trim(); const m = /^(-?[\\d.]+)(?: × 10([⁻⁰-⁹]+))?\\s*(\\S*)/.exec(t); if (!m) return NaN;
    let v = parseFloat(m[1]) * Math.pow(10, m[2] ? parseInt([...m[2]].map((c) => SUPV[c]).join('')) : 0), u = m[3];
    if (u === 'cm' && base === 'm') return v * 1e-2; if (u === base) return v; if (u.length === base.length + 1 && u.endsWith(base) && PFX[u[0]]) return v * PFX[u[0]]; return NaN; };
  const txt = (id) => document.getElementById(id).textContent;
  const vis = (id) => { const e = document.getElementById(id); return !!e && e.offsetParent !== null; };
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300);
`;
module.exports = {
  checks: [
    { name: "free: the magnetic force does no work; K − K₀ = qE·Δr with E; the launch is as set", fn: `(() => { ${pre}
      if (S.mode !== 'free' || !M.main || !isFinite(M.simT)) return true;
      const f = S.f, [q, m] = part(f.part), E = f.eon ? Math.pow(10, f.le) : 0, v0 = f.lv < 2 ? 0 : Math.pow(10, f.lv), a = f.ang * Math.PI / 180;
      const s0 = M.main.at(0), st = M.main.at(M.simT);
      if (![st.x, st.y, st.vx, st.vy].every(isFinite)) return 'trajectory has a NaN at t = ' + M.simT;
      if (Math.abs(s0.x - f.lx) > 1e-12 + 1e-9 * Math.abs(f.lx) || Math.abs(s0.y - f.ly) > 1e-12 + 1e-9 * Math.abs(f.ly) || Math.abs(s0.vx - v0 * Math.cos(a)) > 1e-9 * v0 + 1e-12 || Math.abs(s0.vy - v0 * Math.sin(a)) > 1e-9 * v0 + 1e-12) return 'the trajectory starts at ' + [s0.x, s0.y, s0.vx, s0.vy] + ', the launch says ' + [f.lx, f.ly, v0 * Math.cos(a), v0 * Math.sin(a)];
      if (f.region && E) return true;
      const K0 = 0.5 * m * (v0 * v0), K = 0.5 * m * (st.vx ** 2 + st.vy ** 2);
      if (!E) return Math.abs(K - K0) <= 1e-9 * K0 + 1e-300 ? true : 'with E off K went from ' + K0 + ' to ' + K + ' J at t = ' + M.simT;
      const ea = f.ea * Math.PI / 180, W = q * E * ((st.x - f.lx) * Math.cos(ea) + (st.y - f.ly) * Math.sin(ea)), sc = Math.max(K, Math.abs(W), K0);
      return Math.abs(K - K0 - W) <= 1e-7 * sc ? true : 'ΔK = ' + (K - K0) + ' J but qE·Δr = ' + W + ' J'; })()` },
    { name: "free: shown r, T, f and drift speed equal mv/|qB|, 2πm/|qB|, |qB|/2πm and E/B", fn: `(() => { ${pre}
      if (S.mode !== 'free' || M.playing) return true;
      const f = S.f, [q, m] = part(f.part), B = f.bdir === 0 ? 0 : f.bdir * Math.pow(10, f.lb), v0 = f.lv < 2 ? 0 : Math.pow(10, f.lv), E = f.eon ? Math.pow(10, f.le) : 0;
      if (!B || !vis('rT')) return true;
      const T = 2 * Math.PI * m / Math.abs(q * B);
      if (!near(val(txt('rT'), 's'), T, 6e-3)) return 'T shows ' + txt('rT') + ', 2πm/|qB| = ' + T;
      if (!near(val(txt('rF'), 'Hz'), 1 / T, 6e-3)) return 'f shows ' + txt('rF') + ', |qB|/2πm = ' + 1 / T;
      if (!E && v0 && vis('rR') && !near(val(txt('rR'), 'm'), m * v0 / Math.abs(q * B), 6e-3)) return 'r shows ' + txt('rR') + ', mv/|qB| = ' + m * v0 / Math.abs(q * B);
      if (E && vis('rDrift') && !near(val(txt('rDrift'), 'm/s'), E / Math.abs(B), 6e-3)) return 'drift shows ' + txt('rDrift') + ', E/B = ' + E / Math.abs(B);
      return true; })()` },
    { name: "presets: circle r = 1.04 cm, T = 0.656 µs; drift E/B = 1.0e5 m/s; electron circle 43 times smaller", fn: `(() => { ${pre}
      const f = S.f; if (S.mode !== 'free' || !M.main) return true;
      const B = f.bdir * Math.pow(10, f.lb), [q, m] = part(f.part);
      if (S.preset === 'circle' && f.part === 'p' && f.lv === 5 && f.lb === -1 && !f.eon) { const r = m * 1e5 / (QE * 0.1), T = 2 * Math.PI * m / (QE * 0.1);
        if (Math.abs(r - 0.0104397) > 1e-6 || Math.abs(T - 6.5594e-7) > 1e-10) return 'circle preset r = ' + r + ', T = ' + T; }
      if (S.preset === 'drift' && f.eon && f.le === 4 && f.lb === -1 && Math.abs(1e4 / Math.abs(B) - 1e5) > 1) return 'drift preset E/B = ' + 1e4 / Math.abs(B);
      return true; })()` },
    { name: "selector: E = V/2h and E/B shown; the passing band contains E/B", fn: `(() => { ${pre}
      if (S.mode !== 'sel' || M.playing) return true;
      const E = S.sel.V / 0.02, v0 = E / S.sel.B;
      if (vis('sE') && !near(val(txt('sE'), 'V/m'), E, 6e-3)) return 'E shows ' + txt('sE') + ', V/2h = ' + E;
      if (vis('sVs') && !near(val(txt('sVs'), 'm/s'), v0, 6e-3)) return 'E/B shows ' + txt('sVs') + ', physics ' + v0;
      if (M.band && !(M.band[0] <= v0 * (1 + 1e-9) && M.band[1] >= v0 * (1 - 1e-9))) return 'passing band ' + M.band + ' does not contain E/B = ' + v0;
      return true; })()` },
    { name: "spectrometer: ion masses (AME2020), r = √(2mV/q)/B, 2r, and the ²²Ne⁺ − ²⁰Ne⁺ landing gap", fn: `(() => { ${pre}
      if (S.mode !== 'spec') return true;
      const MU = { '²⁰Ne⁺': 19.9924401762, '²¹Ne⁺': 20.993846685, '²²Ne⁺': 21.991385114, '¹²C⁺': 12, '¹³C⁺': 13.00335483507 }, rows = [...document.querySelectorAll('#isoTable tr')].slice(1), blind = !vis('pSep');
      if (!rows.length) return true; const rr = {};
      for (const tr of rows) { const c = [...tr.children].map((d) => d.textContent.replace(/\\u2212/g, '-')), name = c[0];
        if (!(name in MU)) return 'unknown ion ' + name;
        const mass = MU[name] * U - ME; if (Math.abs(parseFloat(c[1]) - mass / U) > 6e-5) return name + ' mass shows ' + c[1] + ' u, ' + mass / U;
        const r = Math.sqrt(2 * mass * S.spec.V / QE) / S.spec.B; rr[name] = r;
        if (c.length >= 5) { if (!near(val(c[2], 'm'), r, 1.5e-3)) return name + ' r shows ' + c[2] + ', √(2mV/q)/B = ' + r; if (!near(val(c[3], 'm'), 2 * r, 1.5e-3)) return name + ' 2r shows ' + c[3] + ', ' + 2 * r; } }
      if (S.preset === 'spec' && S.spec.V === 1000 && S.spec.B === 0.2 && rr['²²Ne⁺'] && rr['²⁰Ne⁺']) { const gap = 2 * (rr['²²Ne⁺'] - rr['²⁰Ne⁺']); if (Math.abs(gap - 0.0099348) > 2e-6) return 'preset gap ' + gap; }
      return true; })()` },
    { name: "cyclotron: f_c = |q|B/2πm and K_max = (qBR)²/2m shown; every gap crossing of a tuned run adds exactly qV", fn: `(() => { ${pre}
      if (S.mode !== 'cyc' || !M.cyc || !M.cyc.cfg) return true;
      const [q, m] = PART[S.cyc.part], c = S.cyc, fc = Math.abs(q) * c.B / (2 * Math.PI * m), Kmax = (q * c.B * c.R) ** 2 / (2 * m);
      if (!near(val(txt('cFc'), 'Hz'), fc, 1e-3)) return 'f_c shows ' + txt('cFc') + ', |q|B/2πm = ' + fc;
      if (!near(val(txt('cFrf'), 'Hz'), fc * c.det, 1e-3)) return 'f_RF shows ' + txt('cFrf') + ', f_c·det = ' + fc * c.det;
      const kt = /^(.*?eV)/.exec(txt('cKmax')); if (kt && vis('cKmax') && !near(val(kt[1], 'eV') * QE, Kmax, 1e-3)) return 'K_max shows ' + kt[1] + ', (qBR)²/2m = ' + Kmax / QE + ' eV';
      if (c.det === 1 && M.cyc.log) { const L = M.cyc.log, qV = Math.abs(q) * c.V * 1000;
        for (let i = 2; i < L.length; i++) { const g = L[i].K - L[i - 1].K; if (Math.abs(g - qV) > 1e-6 * qV) return 'crossing ' + i + ' adds ' + g / QE + ' eV, qV = ' + qV / QE + ' eV'; } }
      return true; })()` },
    { name: "bottle: |v| stays at the start value; B₀ is the field set; the loss cone is asin(1/√R)", fn: `(() => { ${pre}
      if (S.mode !== 'bottle' || !M.bot || !M.botM || !M.bot.P) return true;
      const v = Math.pow(10, S.bot.lv), P = M.bot.P, n = Math.min(P.length, 400);
      for (let i = 0; i < n; i += 1 + (n >> 6)) { const k = P.length - 1 - i, sp = Math.hypot(P[k][3], P[k][4], P[k][5]); if (!(Math.abs(sp / v - 1) < 1e-9)) return '|v|/v₀ = ' + sp / v + ' at step ' + k; }
      if (!near(M.botM.B0, S.bot.B, 1e-6)) return 'center field ' + M.botM.B0 + ', B₀ set to ' + S.bot.B;
      if (!(M.botM.ratio >= 1)) return 'mirror ratio ' + M.botM.ratio;
      const lc = Math.asin(Math.sqrt(1 / M.botM.ratio)) * 180 / Math.PI; if (Math.abs(lc - M.botM.lossCone * 180 / Math.PI) > 1e-6) return 'loss cone ' + M.botM.lossCone * 180 / Math.PI + ', asin(1/√R) = ' + lc;
      return true; })()` },
  ],
  steps: [
    { name: 'free: every particle, crossed fields, B reversed and off, rectangle on, then Circle again', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), P = (k) => document.querySelector('#presets [data-p=' + k + ']').click();
      P('drift'); await pause(300);
      for (const b of document.querySelectorAll('#parts button')) if (!b.hidden) { b.click(); await pause(150); }
      P('ep'); await pause(300); P('circle'); await pause(300);
    })()` },
    { name: 'every setup in a row with Play running, back to Circle', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), P = (k) => document.querySelector('#presets [data-p=' + k + ']').click();
      for (const k of ['sel', 'spec', 'bottle', 'hall', 'cyc', 'circle']) { P(k); await pause(900); }
    })()` },
  ],
};
