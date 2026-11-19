/* Known values for the break-it test (tools/breakit.cjs). With the sliders in charge (nothing dragged) and k = 3 in the ANOVA mode,
   F = n·gap²/s² exactly (8·16/36 = 3.556 at the opening), MS within = s²; in the two variances mode F = s₁²/s₂²; the false alarms
   never exceed the studies. */
module.exports = {
  checks: [
    { name: 'F = n gap²/s² for three equally spaced groups', fn: `(() => {
      const A = window.__an; if (!A) return true; const S = A.S, a = A.stats(); if (S.mode !== 'anova' || S.k !== 3 || S.custom) return true;
      const F = S.n * S.gap * S.gap / (S.spr * S.spr);
      if (Math.abs(a.F - F) > 1e-9 * Math.max(1, F)) return 'F ' + a.F + ' expected ' + F;
      return Math.abs(a.msw - S.spr * S.spr) < 1e-9 * S.spr * S.spr ? true : 'MS within ' + a.msw;
    })()` },
    { name: 'opening F 3.556, p 0.0468', fn: `(() => { const A = window.__an; if (!A) return true; const S = A.S;
      if (!(S.setup === 'timing' && S.mode === 'anova' && S.k === 3 && S.n === 8 && S.gap === 4 && S.spr === 6 && !S.custom)) return true;
      const a = A.stats(); return Math.abs(a.F - 32 / 9) < 1e-9 && Math.abs(a.p - 0.0468) < 1e-4 ? true : 'F ' + a.F + ' p ' + a.p; })()` },
    { name: 'two variances: F = s₁²/s₂²', fn: `(() => { const A = window.__an; if (!A || A.S.mode !== 'var2') return true; const S = A.S, a = A.stats();
      const F = (S.sds[0] / S.sds[1]) ** 2; return Math.abs(a.F - F) < 1e-9 * Math.max(1, F) ? true : 'F ' + a.F + ' expected ' + F; })()` },
    { name: 'false alarms within studies', fn: `(() => { const A = window.__an; if (!A) return true; const [N, K] = A.falseAlarms(); return K >= 0 && K <= N && N <= A.S.count ? true : 'K ' + K + ' N ' + N; })()` },
  ],
};
