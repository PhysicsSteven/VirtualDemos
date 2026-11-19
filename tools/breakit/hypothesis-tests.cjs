/* Known values for the break-it test (tools/breakit.cjs). Pendulum g, Draw 1, n = 10, σ = 0.06 m/s², truth 9.81, two tailed: the
   sample's t is 0.600 with p 0.5635 and df 9, whatever the view; at α = 0.05 the critical value is ±2.262. At any setup with the
   truth equal to the H₀ value, the theory power of a z or t test is α. A tally never counts more rejections than studies. */
const opening = `(() => { const H = window.__ht; if (!H) return false; const P = H.settings();
  return H.S.setup === 'g' && H.S.draw === 1 && P.n === 10 && P.sigma === 0.06 && Math.abs(P.truth - 9.81) < 1e-12 && P.tail === 'two'; })()`;
module.exports = {
  checks: [
    { name: 'opening sample: t = 0.600, p = 0.5635, df 9', fn: `(() => {
      if (!(${opening})) return true; const A = window.__ht.S.A;
      if (Math.abs(A.stat - 0.6) > 5e-4 || Math.abs(A.p - 0.5635) > 5e-5 || A.df !== 9) return 't ' + A.stat + ' p ' + A.p + ' df ' + A.df;
      const t = document.getElementById('st3').textContent; return /0\\.600/.test(t) || window.__ht.S.blind ? true : 'p value card says ' + t;
    })()` },
    { name: 'critical t(9) at 0.05 two tailed is 2.262', fn: `(() => { const c = window.__ht && window.__ht.critical(9, 'two', 0.05); return c && Math.abs(c[1] - 2.262157) < 1e-5 ? true : 'critical ' + c; })()` },
    { name: 'theory power at the null value is alpha (z and t tests)', fn: `(() => {
      const H = window.__ht; if (!H) return true; const P = H.settings(); if (!['z1', 't1', 'z2', 'pair'].includes(P.kind)) return true;
      const f = H.power(Object.assign({}, P, { truth: P.mu0 })); return Math.abs(f - P.alpha) < 1e-5 ? true : 'power at H0 ' + f + ' for α ' + P.alpha;
    })()` },
    { name: 'tally is consistent', fn: `(() => { const H = window.__ht; if (!H || !H.S.run) return true; const P = H.settings(), N = H.S.run.stat.length, K = H.tallyRun(H.S.run, P.tail, P.alpha);
      return K >= 0 && K <= N && N <= H.S.count ? true : 'K ' + K + ' N ' + N; })()` },
  ],
};
