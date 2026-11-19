/* Known values for the break-it test (tools/breakit.cjs), measurement-uncertainty. Hook: window.__mu.
   - The small angle prediction readout is 2π√(L/g) for the meter stick reading L (g = 9.81).
   - Every recorded row is consistent: T = t/N to the row's digits, T² is T squared, and the photogate rows equal the exact
     period of the true length (reading minus 3.0 cm when read to the bottom) at θ₀, from an independent AGM, to 0.001 s.
   - The Analysis mean period of the present setup equals the mean of those rows' T. */
const pre = `const M = window.__mu; if (!M) return true;
  const rd = (t) => (t || '').replace(/\\u2212/g, '-'), num = (t) => parseFloat(rd(t)),
    row = (box, label) => { for (const d of document.querySelectorAll('#' + box + ' > div')) if (d.querySelector('dt').textContent === label) return d.querySelector('dd').textContent; return null; };
  const agm = (a, b) => { for (let i = 0; i < 60; i++) { const an = (a + b) / 2; b = Math.sqrt(a * b); a = an; } return a; };
  const per = (L, th) => 2 * Math.PI * Math.sqrt(L / 9.81) / agm(1, Math.cos(th * Math.PI / 360));
`;
module.exports = {
  checks: [
    { name: 'Small angle prediction is 2π√(L/g) for the reading', fn: `(() => { ${pre}
      const t = row('out', 'Small angle prediction 2π√(L/g), with L as read'); if (t === null) return true;
      const want = 2 * Math.PI * Math.sqrt(M.S.L / 9.81); return Math.abs(num(t) - want) < 6e-5 ? true : 'shows ' + t + ', want ' + want.toFixed(4); })()` },
    { name: 'Rows: T = t/N, T² = T², photogate t = N · exact period of the true length', fn: `(() => { ${pre}
      for (const [i, r] of (window.vdRows ? window.vdRows() : []).entries()) {
        const N = +r.swings, t = +r.t_s, T = +r.T_s, dec = (r.T_s.split('.')[1] || '').length;
        if (Math.abs(T - t / N) > 0.51 * 10 ** -dec) return 'row ' + (i + 1) + ': T ' + r.T_s + ' but t/N = ' + t / N;
        if (Math.abs(+r.T2_s2 - T * T) > 0.51 * 10 ** -dec) return 'row ' + (i + 1) + ': T² ' + r.T2_s2 + ' but T² = ' + T * T;
        if (r.timer === 'photogate') { const Lt = +r.L_m - (r.read_to === 'bottom' ? 0.03 : 0), want = N * per(Lt, +r.theta0_deg);
          if (Math.abs(t - want) > 0.00051) return 'row ' + (i + 1) + ': photogate ' + t + ' s, exact ' + want.toFixed(4); }
        if (r.timer === 'stopwatch') { const Lt = +r.L_m - (r.read_to === 'bottom' ? 0.03 : 0), want = N * per(Lt, +r.theta0_deg);
          if (Math.abs(t - want) > 4 * 0.05 * Math.SQRT2 * 2 + 0.006) return 'row ' + (i + 1) + ': stopwatch ' + t + ' s is too far from ' + want.toFixed(3); }
      }
      return true; })()` },
    { name: 'Analysis mean period is the mean of the rows at this setup', fn: `(() => { ${pre}
      const t = row('ana', 'Mean period T̄'); if (t === null) return true;
      const S = M.S, rs = window.vdRows().filter((r) => r.L_m === S.L.toFixed(3) && r.theta0_deg === String(S.A) && r.swings === String(S.N) && r.read_to === S.mark && r.timer === (S.timer === 'hand' ? 'stopwatch' : 'photogate'));
      if (!rs.length) return 'mean shown with no rows';
      const m = rs.reduce((a, r) => a + +r.T_s, 0) / rs.length; return Math.abs(num(t) - m) < 1e-4 * 6 ? true : 'shows ' + t + ', rows give ' + m; })()` },
    { name: 'Histogram: the shares within ±s and ±2s and ḡ are counted from the rows at this setup', fn: `(() => { ${pre}
      if (M.S.view !== 'hist') return true; const x = M.manyStats(); if (x.n < 2) return true;
      const m = x.Ts.reduce((a, b) => a + b, 0) / x.n, s = Math.sqrt(x.Ts.reduce((a, t) => a + (t - m) ** 2, 0) / (x.n - 1));
      const in1 = x.Ts.filter((t) => Math.abs(t - m) <= s).length, in2 = x.Ts.filter((t) => Math.abs(t - m) <= 2 * s).length;
      if (in1 !== x.in1 || in2 !== x.in2) return 'within ±s ' + x.in1 + ' (count ' + in1 + '), ±2s ' + x.in2 + ' (count ' + in2 + ')';
      const g = x.Ts.reduce((a, t) => a + 4 * Math.PI * Math.PI * M.S.L / (t * t), 0) / x.n; if (Math.abs(g - x.gMean) > 1e-9) return 'mean g ' + x.gMean + ', rows give ' + g;
      const t = row('ana', 'g from each timing, 4π²L/T²: mean ḡ'); if (t && !/hidden/.test(t) && Math.abs(num(t) - g) > 6e-4) return 'shows ' + t + ', rows give ' + g;
      return true; })()` },
  ],
  steps: [
    { name: 'Many timings: Repeat 100 times twice, photogate, bottom of the bob', fn: `(() => { const M = window.__mu; M.applyPreset('many'); document.getElementById('rep100').click(); document.getElementById('rep100').click(); document.querySelector('#timerSeg [data-timer=gate]').click(); document.getElementById('rep100').click(); document.querySelector('#timerSeg [data-timer=hand]').click(); document.querySelector('#markSeg [data-mark=bottom]').click(); document.getElementById('rep100').click(); return true; })()` },
    { name: 'Repeat 10 times with the photogate at 40°', fn: `(() => { window.__mu.applyPreset('big'); document.getElementById('rep').click(); return true; })()` },
    { name: 'Bottom of the bob, 10 swings by hand, at 0.4 and 1.6 m', fn: `(() => { const M = window.__mu; M.applyPreset('bottom'); document.getElementById('rep').click(); M.S.L = 1.6; document.getElementById('rep').click(); return true; })()` },
  ],
};
