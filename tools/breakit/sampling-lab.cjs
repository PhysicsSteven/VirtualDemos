/* Known values for the break-it test (tools/breakit.cjs), Sampling Lab. Whatever the setup, view or odd input:
   - draw set 1 gives the same halls: Coins in pockets μ = 22.973 ¢, σ = 23.854 ¢; Reaction times μ = 241.205 ms, σ = 94.466 ms, skew 1.844;
   - the theorem's predictions are exact: the spread of the means is σ/√n and of the sums √n σ, the mean of the sums nμ;
   - every sum drawn is n times its mean, and every sampling method takes 20 students;
   - a method's bias is the mean of its x̄'s minus μ. */
module.exports = {
  checks: [
    { name: 'draw set 1 populations', fn: `(() => {
      const L = window.__sl; if (!L || L.S.seed !== 1) return true;
      const c = L.makePopulation('coins', 1), r = L.makePopulation('react', 1);
      if (Math.abs(c.mu - 22.973) > 6e-4 || Math.abs(c.sigma - 23.854) > 6e-4) return 'coins ' + c.mu + ' ' + c.sigma;
      if (Math.abs(r.mu - 241.205) > 6e-4 || Math.abs(r.sigma - 94.466) > 6e-4 || Math.abs(r.skew - 1.844) > 6e-4) return 'react ' + r.mu + ' ' + r.sigma + ' ' + r.skew;
      return true;
    })()` },
    { name: 'the theorem: σ/√n, √n σ and nμ', fn: `(() => {
      const L = window.__sl; if (!L || !L.P) return true; const P = L.P;
      for (const n of [1, 4, 25, 100]) { const p = L.predict(P, n);
        if (Math.abs(p.sdMean - P.sigma / Math.sqrt(n)) > 1e-12 * P.sigma) return 'sdMean ' + n;
        if (Math.abs(p.sdSum - Math.sqrt(n) * P.sigma) > 1e-9 * P.sigma * n) return 'sdSum ' + n;
        if (Math.abs(p.meanSum - n * P.mu) > 1e-9 * Math.abs(P.mu) * n) return 'meanSum ' + n; }
      return true;
    })()` },
    { name: 'each sum is n times its mean', fn: `(() => {
      const S = window.__sl && window.__sl.S; if (!S || !S.clt.length) return true;
      if (S.clt.length !== S.cltSums.length) return 'counts ' + S.clt.length + ' ' + S.cltSums.length;
      for (let i = 0; i < S.clt.length; i += 97) if (Math.abs(S.cltSums[i] - S.n * S.clt[i]) > 1e-9 * Math.abs(S.cltSums[i])) return 'sample ' + i;
      return true;
    })()` },
    { name: 'samples of 20 and bias = mean − μ', fn: `(() => {
      const L = window.__sl; if (!L || !L.P) return true; const S = L.S;
      if (S.cur && S.cur.seats.length !== 20) return 'sample of ' + S.cur.seats.length;
      for (const m of L.METHODS) { const e = S.est[m]; if (!e || !e.length) continue; const s = L.summary(e, L.P.mu);
        if (Math.abs(s.bias - (s.mean - L.P.mu)) > 1e-12 * Math.max(1, Math.abs(L.P.mu))) return m + ' bias'; }
      return true;
    })()` },
  ],
  steps: [
    { name: 'every method, 100 samples each', fn: `(() => { const L = window.__sl; L.applyPreset('srs'); for (const m of L.METHODS) { L.S.method = m; L.drawMany(100); } })()` },
    { name: 'the self selected study, 100 runs, effect 10', fn: `(() => { const L = window.__sl; L.applyPreset('self'); L.drawMany(100); L.S.effect = 10; L.draw(); })()` },
    { name: 'reaction times, n = 100, 10,000 means, then sums', fn: `(() => { const L = window.__sl; L.applyPreset('cltReact'); L.setN(100); L.drawMany(10000); L.S.stat = 'sum'; L.draw(); })()` },
    { name: 'n = 1 and every population', fn: `(() => { const L = window.__sl; L.applyPreset('cltOne'); for (const p of L.POPS) { L.setPop(p); L.drawMany(1000); } })()` },
  ],
};
