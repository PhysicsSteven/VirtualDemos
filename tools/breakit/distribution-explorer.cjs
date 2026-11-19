/* Known values for the break-it test (tools/breakit.cjs), Distribution Explorer. Whatever is dragged, typed or played:
   - the probability shown is the distribution's: for a discrete X the sum of the pmf over the whole numbers in the event;
   - the book's examples, untouched, give the book's numbers: normalcdf(65, 1E99, 63, 5) = 0.3446 (6.2),
     binomcdf(20, 0.41, 12) = 0.9738 (4.3), poissoncdf(147, 160) = 0.8666 (4.6), Fcdf(0.134, 1E99, 2, 12) = 0.8759 (13.3);
   - the parameters stay legal (K and n at most N, b above a for the uniform) and the probability lies in [0, 1]. */
const book = (k, q, tail, a, b, want) => `(() => { const S = window.__de && __de.S; if (!S || S.preset !== '${k}') return true;
  if (JSON.stringify(S.q) !== '${JSON.stringify(q)}' || S.tail !== '${tail}' || S.a !== ${a} || S.b !== ${b}) return true;
  const p = __de.P(); return Math.abs(p - ${want}) < 5e-5 ? true : '${k} ' + p; })()`;
module.exports = {
  checks: [
    { name: 'the probability is in [0, 1] and the parameters are legal', fn: `(() => {
      const S = window.__de && __de.S; if (!S) return true; const p = __de.P(), q = S.q;
      if (!(p >= -1e-12 && p <= 1 + 1e-12)) return 'P ' + p;
      if (S.fam === 'hypergeometric' && (q.K > q.N || q.n > q.N)) return 'K or n above N';
      if (S.fam === 'uniform' && !(q.B > q.A)) return 'b not above a';
      return true; })()` },
    { name: 'a discrete probability is the sum of the pmf over the event', fn: `(() => {
      const S = window.__de && __de.S; if (!S || !__de.FAM[S.fam].discrete) return true; const D = S.D;
      const lo = S.tail === 'left' ? Math.max(D.lo, 0) : Math.ceil(S.a - 1e-9), hi = S.tail === 'right' ? Math.min(D.hi, D.inv(1 - 1e-13)) : Math.floor(S.b + 1e-9);
      if (hi - lo > 5000) return true; let s = 0; for (let x = Math.max(lo, D.lo); x <= hi; x++) s += D.pmf(x);
      return Math.abs(s - __de.P()) < 1e-9 ? true : 'sum ' + s + ' shown ' + __de.P(); })()` },
    { name: 'exam scores: 0.3446', fn: book('exam', { mu: 63, sigma: 5 }, 'right', 65, 70, 0.3446) },
    { name: 'workers: 0.9738', fn: book('workers', { n: 20, p: 0.41 }, 'left', 0, 12, 0.9738) },
    { name: 'emails: 0.8666', fn: book('emails', { mu: 147 }, 'left', 0, 160, 0.8666) },
    { name: 'ANOVA: 0.8759', fn: book('anova', { d1: 2, d2: 12 }, 'right', 0.134, 5, 0.8759) },
  ],
  steps: [
    { name: 'the book example, exam scores', fn: `window.__de.applyPreset('exam')` },
    { name: 'binomial with both comparisons, drawn at 1,000 a second', fn: `(() => { __de.applyPreset('binApprox'); __de.S.speed = 1000; __de.setRun(true); })()` },
    { name: 'hypergeometric with K and n typed above N', fn: `(() => { __de.applyPreset('committee'); __de.S.q.K = 500; __de.S.q.n = 900; __de.rebuild(); })()` },
    { name: 't with df = 1, the a handle typed far off the picture', fn: `(() => { __de.applyPreset('tGrows'); const a = document.getElementById('aIn'); a.value = '-1e6'; a.dispatchEvent(new Event('change')); })()` },
    { name: 'a Poisson with a huge mean', fn: `(() => { __de.setFamily('poisson'); __de.S.q.mu = 1000; __de.rebuild(); })()` },
    { name: 'uniform with b below a', fn: `(() => { __de.setFamily('uniform'); __de.S.q.A = 5; __de.S.q.B = 2; __de.rebuild(); })()` },
  ],
};
