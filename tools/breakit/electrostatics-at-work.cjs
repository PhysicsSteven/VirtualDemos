/* Known values for the break-it test (tools/breakit.cjs), electrostatics-at-work. Hook: window.__vdg (S, ...), plus the readouts.
   Dome without the wand: C = 4πε₀R, V = kQ/R, V_max = E_b R (E_b = 3 MV/m), the surface field is V/R, and the charge never passes
   Q_max = 4πε₀R²E_b. Shuffle: V = Q/C with C = 100 pF, and |Q| never passes ε₀E_b A (A = 50 cm², 1.33 µC). Ink jet: the field is
   V/gap (gap 2.0 mm), the drop mass is ρπd³/6, q/e = q/1.602176634e-19. Precipitator: the slip correction is 1 + Kn(1.257 + 0.4 e^(−1.1/Kn)). */
const helpers = `const EPS0 = 8.8541878188e-12, KC = 1 / (4 * Math.PI * EPS0), QE = 1.602176634e-19, EB = 3.0e6;
  const dd = {}; for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) dd[t.textContent.trim().replace(/\\s+/g, ' ')] = v.textContent.replace(/−/g, '-').trim(); }
  const SUPD = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const num = (s) => { if (s === undefined) return NaN; const m = s.match(/^(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { const neg = m[2][0] === '⁻', e = [...m[2].replace('⁻', '')].reduce((a, c) => a * 10 + SUPD[c], 0); v *= Math.pow(10, neg ? -e : e); } return v; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.abs(want) + 1e-300;
  const V = window.__vdg, S = V && V.S, blind = S && S.blind;`;
module.exports = {
  checks: [
    { name: "dome alone: C = 4πε₀R, V = kQ/R, V_max = E_b R, surface field V/R, Q never above Q_max", fn: `(() => { ${helpers}
      if (!S || S.setup !== 'vdg' || blind) return true; const R = S.R / 100;
      if (!(S.Q >= 0) || S.Q > 4 * Math.PI * EPS0 * R * R * EB * (1 + 1e-9) + 1e-18) return 'Q = ' + S.Q + ' C beyond Q_max ' + 4 * Math.PI * EPS0 * R * R * EB;
      if (V.wandNow && V.wandNow()) return true;
      const C = num(dd['Capacitance C = 4πε₀R']); if (isFinite(C) && !near(C, 4 * Math.PI * EPS0 * R * 1e12, 6e-3)) return 'C shows ' + dd['Capacitance C = 4πε₀R'];
      const vm = num(dd['Highest voltage Vmax = EbR']); if (isFinite(vm) && !near(vm, EB * R / 1000, 6e-3)) return 'Vmax shows ' + dd['Highest voltage Vmax = EbR'];
      const Q = num(dd['Charge Q']) * 1e-6, v = num(dd['Dome voltage V = kQ/R']) * 1000, e = num(dd['Field at the surface V/R']) * 1e6;
      if (isFinite(Q) && isFinite(v) && Q > 1e-8 && !near(v, KC * Q / R, 1.2e-2)) return 'V shows ' + dd['Dome voltage V = kQ/R'] + ', kQ/R = ' + KC * Q / R;
      if (isFinite(v) && isFinite(e) && v > 1e3 && !near(e, v / R, 1.2e-2)) return 'surface field shows ' + dd['Field at the surface V/R'] + ', V/R = ' + v / R;
      return true; })()` },
    { name: "shuffle: V = Q/C (C = 100 pF) and |Q| never above ε₀E_bA", fn: `(() => { ${helpers}
      if (!S || S.setup !== 'shuffle') return true; const k = S.sh;
      if (!isFinite(k.Q) || Math.abs(k.Q) > EPS0 * EB * 0.05 * (1 + 1e-9)) return 'Q = ' + k.Q + ' beyond ' + EPS0 * EB * 0.05;
      if (blind) return true;
      const q = dd['Charge on you Q'] || '', v = dd['Your voltage V = Q/C']; if (!q || !v) return true;
      const Qn = parseFloat(q) * 1e-9, Vk = parseFloat(v) * 1000;
      return Math.abs(Vk - Qn / 100e-12) <= 0.012 * Math.abs(Qn / 100e-12) + 60 + 0.06e-9 / 100e-12 ? true : 'V shows ' + v + ' but Q = ' + q; })()` },
    { name: "ink jet: E = V/gap, drop mass ρπd³/6, q/e", fn: `(() => { ${helpers}
      if (!S || S.setup !== 'ink') return true;
      const E = num(dd['Field between the plates']) * 1e6, m = num(dd['Drop mass']) * 1e-12;
      if (isFinite(E) && !near(E, S.PV / 0.002, 6e-3)) return 'field shows ' + dd['Field between the plates'] + ', V/gap = ' + S.PV / 0.002;
      const dm = 1000 * Math.PI * Math.pow(S.d * 1e-6, 3) / 6; if (isFinite(m) && !near(m, dm, 6e-3)) return 'drop mass shows ' + dd['Drop mass'] + ', ρπd³/6 = ' + dm;
      const ne = num(dd['Electrons per drop q/e']); if (!blind && isFinite(ne) && S.q > 0 && !near(ne, S.q * 1e-12 / QE, 6e-3)) return 'q/e shows ' + dd['Electrons per drop q/e'];
      return true; })()` },
    { name: "precipitator: slip correction and efficiency 1 − exp(−wL/us) are in range", fn: `(() => { ${helpers}
      if (!S || S.setup !== 'esp' || blind) return true;
      const dp = Math.pow(10, S.lgDp) * 1e-6, kn = 2 * 0.066e-6 / dp, Cc = 1 + kn * (1.257 + 0.4 * Math.exp(-1.1 / kn)), got = num(dd['Slip correction Cc']);
      if (isFinite(got) && Math.abs(got - Cc) > 0.012 * Cc) return 'Cc shows ' + dd['Slip correction Cc'] + ', should be about ' + Cc;
      const eff = parseFloat(dd['Efficiency 1 − exp(−wL/us)']); if (isFinite(eff) && (eff < 0 || eff > 100)) return 'efficiency ' + eff + '%';
      return true; })()` }
  ],
  steps: [
    { name: "dome: run the motor, bring the wand in and out, change R mid run; shuffle: walk and touch; ink: extreme charge", fn: `(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms)), c = (q) => { const e = document.querySelector(q); if (e) e.click(); }, set = (id, v) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      c('#wandUp'); await w(300); set('sR', 5); await w(300); set('sR', 50); c('#wandAway'); set('sI', 50); await w(800); set('sR', 5); await w(600); c('#wandUp'); await w(300); c('#wandAway'); return true; })()` }
  ]
};
