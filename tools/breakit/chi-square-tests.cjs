/* Known values for the break-it test (tools/breakit.cjs): the book's examples keep the book's statistics (11.6 volunteer hours
   12.9909, df 4; 11.8 living arrangements 10.1287, df 3; Mendel's peas 0.4700, df 3; 11.11 post office 5.67, df 24), and in every
   state χ² is the sum of the cells' contributions, the p value is between 0 and 1, and the readout shows the same χ². */
const st = 'window.__cs && window.__cs.S';
const book = (k, chi2, df, tol) => ({ name: `${k}: χ² ${chi2}, df ${df}`, fn: `(() => { const S = ${st}; if (!S || S.preset !== '${k}') return true;
  return Math.abs(S.R.chi2 - ${chi2}) <= ${tol} && S.R.df === ${df} ? true : 'χ² ' + S.R.chi2 + ' df ' + S.R.df; })()` });
module.exports = {
  checks: [
    book('volunteer', 12.9909, 4, 5e-5), book('living', 10.1287, 3, 5e-5), book('mendel', 0.47, 3, 5e-5), book('post', 5.67, 24, 0.005),
    { name: 'χ² is the sum of the cells; 0 ≤ p ≤ 1; the readout agrees', fn: `(() => { const S = ${st}; if (!S || !S.R) return false;
      const R = S.R; if (!(R.p >= 0 && R.p <= 1)) return 'p ' + R.p;
      if (S.d.kind !== 'var') { const s = window.__cs.cellRows().reduce((a, r) => a + r.k, 0); if (Math.abs(s - R.chi2) > 1e-9 * Math.max(1, R.chi2)) return 'Σ cells ' + s + ' χ² ' + R.chi2; }
      const dd = [...document.querySelectorAll('#out div')].find((d) => /Chi square/.test(d.querySelector('dt').textContent));
      return !dd || S.blind || dd.querySelector('dd').textContent === R.chi2.toFixed(4) ? true : 'readout ' + dd.querySelector('dd').textContent; })()` },
    { name: 'the simulated statistics fall in the histogram', fn: `(() => { const S = ${st}; if (!S || !S.hist) return false;
      let h = 0; for (const v of S.hist) h += v; let inside = 0; for (let i = 0; i < S.nsim; i++) if (S.sims[i] < S.hist.length * S.bw) inside++;
      return h <= S.nsim && Math.abs(h - inside) <= 2 ? true : 'histogram ' + h + ' of ' + S.nsim + ', inside ' + inside; })()` },
  ],
};
