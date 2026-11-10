/* Known values for the break-it test (tools/breakit.cjs), franck-hertz. Hook: window.__fh (S, data, TP, sweeping, playing, markAt, applyPreset).
   Tube: n = p/kT (mercury at the oven temperature, neon at the 1000 Pa fill and 293.15 K), the mean free path is 1/(n sigma_x)
   with the cross section of the tube (1.7e-19 m2 mercury, 5.0e-20 m2 neon), the readouts show them to their 3 significant figures,
   and the vapor pressure rises with the oven temperature (about 1 hPa at 120 C and 32 hPa at 210 C, as the Cold and Hot hints say).
   The U slider and the state agree, U stays inside 0..Umax, every recorded current is finite and within the saturation current
   plus noise, "Energy at G2 with no collisions" is max(0, U - Uc), and the marked peaks give the shown spacings and the fit. */
const pre = `const F = window.__fh; if (!F) return true; const S = F.S, TP = F.TP, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const GAS = { hg: { sig: 1.7e-19, Umax: 35, dU: 0.05, Isat: 12 }, ne: { sig: 5.0e-20, Umax: 80, dU: 0.1, Isat: 12 } }, g = GAS[S.gas], KB = 1.380649e-23;
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300);
`;
module.exports = {
  checks: [
    { name: "tube: n = p/kT, lambda = 1/(n sigma), readouts show them; p rises with the oven temperature", fn: `(() => { ${pre}
      const T = S.gas === 'hg' ? S.TC + 273.15 : 293.15;
      if (!(TP.n > 0 && isFinite(TP.n) && TP.p > 0)) return 'n = ' + TP.n + ', p = ' + TP.p;
      if (!near(TP.n, TP.p / (KB * T), 1e-9)) return 'n = ' + TP.n + ' but p/kT = ' + TP.p / (KB * T);
      if (!near(TP.lam, 1 / (TP.n * g.sig), 1e-9)) return 'lambda ' + TP.lam + ' vs 1/(n sigma) ' + 1 / (TP.n * g.sig);
      if (S.gas === 'ne' && !near(TP.p, 1000, 1e-9)) return 'neon fill pressure ' + TP.p;
      if (!(TP.trans > 0 && TP.trans <= 1)) return 'transmission ' + TP.trans;
      if (!near(parseFloat(rd('rP')), TP.p / 100, 5.1e-3)) return 'pressure shows ' + rd('rP') + ', p = ' + TP.p / 100 + ' hPa';
      if (!near(parseFloat(rd('rLam')), TP.lam * 1e6, 5.1e-3)) return 'lambda shows ' + rd('rLam') + ', ' + TP.lam * 1e6 + ' um';
      if (Math.abs(parseFloat(rd('rTr')) - 100 * TP.trans) > 0.5001) return 'transmission shows ' + rd('rTr') + ', ' + 100 * TP.trans;
      if (S.gas === 'hg' && S.TC === 120 && !near(TP.p / 100, 1.0, 0.05)) return 'at 120 C the vapor should be about 1 hPa, got ' + TP.p / 100;
      if (S.gas === 'hg' && S.TC === 210 && !near(TP.p / 100, 31.7, 0.05)) return 'at 210 C the vapor should be about 32 hPa, got ' + TP.p / 100;
      return true; })()` },
    { name: "U inside 0..Umax and equal to the slider; recorded currents finite and below saturation plus noise", fn: `(() => { ${pre}
      if (!(S.U >= 0 && S.U <= g.Umax + 1e-9)) return 'U = ' + S.U;
      const u = parseFloat(document.getElementById('uu').value); if (Math.abs(u - S.U) > g.dU + 1e-6) return 'slider ' + u + ' but U = ' + S.U;
      const d = F.data; if (!d) return true;
      for (let i = 0; i < d.length; i++) { const v = d[i]; if (v === v && (!isFinite(v) || v > g.Isat + 0.5 || v < -0.5)) return 'I[' + i + '] = ' + v; }
      return true; })()` },
    { name: "Energy at G2 with no collisions is max(0, U - Uc)", fn: `(() => { ${pre}
      if (F.sweeping && F.playing) return true;
      const want = Math.max(0, S.U - S.Uc); return Math.abs(parseFloat(rd('rEmax')) - want) <= 0.0051 ? true : 'shows ' + rd('rEmax') + ', U - Uc = ' + want; })()` },
    { name: "marked peaks: spacings are the differences; the fit slope is the least squares slope", fn: `(() => { ${pre}
      if (S.blind || S.marks.length < 2) return true;
      const m = S.marks.slice().sort((a, b) => a - b), gaps = rd('rGaps').replace(' V', '').split(', ').map(Number);
      if (gaps.length !== m.length - 1) return 'gaps ' + rd('rGaps') + ' for ' + m.length + ' marks';
      for (let i = 0; i < gaps.length; i++) if (Math.abs(gaps[i] - (m[i + 1] - m[i])) > 0.0101) return 'gap ' + i + ' shows ' + gaps[i] + ', marks differ by ' + (m[i + 1] - m[i]);
      const n = m.length, xs = m.map((_, i) => i + 1), mx = (n + 1) / 2, my = m.reduce((a, b) => a + b, 0) / n; let sxx = 0, sxy = 0; for (let i = 0; i < n; i++) { sxx += (xs[i] - mx) ** 2; sxy += (xs[i] - mx) * (m[i] - my); }
      const b = sxy / sxx, a = my - b * mx, dd = S.gas === 'hg' ? 3 : 2, shown = parseFloat(rd('rFit')), tol = 0.6 * 10 ** -dd;
      if (Math.abs(shown - b) > tol) return 'fit shows ' + rd('rFit') + ', slope of the marks ' + b;
      if (Math.abs(parseFloat(rd('rU0')) - a) > 0.0051) return 'U0 shows ' + rd('rU0') + ', intercept ' + a;
      return true; })()` },
  ],
  steps: [
    { name: 'mark peaks, then switch gas, oven to both ends, Blind on and off with marks, undo past empty', fn: `(async () => {
      const F = window.__fh, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      F.applyPreset('measure'); await pause(300); for (const u of [6.1, 11, 15.9, 20.8, 26, 31]) F.markAt(u); await pause(300);
      document.getElementById('blind').click(); await pause(200); document.getElementById('blind').click();
      set('temp', 100); await pause(300); set('temp', 210); await pause(300);
      document.getElementById('gNe').click(); await pause(300); for (const u of [18, 40, 60]) F.markAt(u); document.getElementById('gHg').click(); await pause(300);
      for (let i = 0; i < 4; i++) document.getElementById('undo').click(); document.getElementById('clearMarks').click(); await pause(200);
    })()` },
    { name: 'drag U to the ends while sweeping, extreme Ur and Uc, New sweep twice, Fast and Slow', fn: `(async () => {
      const F = window.__fh, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      F.applyPreset('hg'); await pause(300); set('uu', 35); await pause(200); set('uu', 0); await pause(200);
      for (const v of ['0', '8', '5']) { set('ur', v); await pause(200); } for (const v of ['0', '4', '-3']) { set('uc', v); await pause(200); } set('uc', 2); set('ur', 1.5);
      document.getElementById('spFast').click(); document.getElementById('again').click(); document.getElementById('again').click(); await pause(800); document.getElementById('spSlow').click();
      document.getElementById('gNe').click(); document.getElementById('spFast').click(); await pause(1000); set('uu', 80); await pause(200); document.getElementById('gHg').click(); await pause(300);
    })()` },
  ],
};
