/* Known values for the break-it test (tools/breakit.cjs): two dice, 8 or more and doubles, are 15, 6 and 3 of 36; ten cards dealt
   without replacement give P(second diamond | first diamond) = 12/51 and σ = 1.2426 for the diamonds (1.3693 with replacement);
   three dice betting on a number have μ_Y = −17/216; and in every state the PDF adds to 1 and the trial tally adds up. */
const st = 'window.__cl && window.__cl.S';
module.exports = {
  checks: [
    { name: 'two dice: 15, 6 and 3 of 36', fn: `(() => { const S = ${st}; if (!S || S.kind !== 'dice' || S.nDice !== 2 || S.A !== 's8' || S.B !== 'dbl') return true;
      const t = S.th; return t.N === 36 && t.a === 15 && t.b === 6 && t.ab === 3 ? true : JSON.stringify(t); })()` },
    { name: 'ten cards: 12/51 without replacement, 13/52 with', fn: `(() => { const S = ${st}; if (!S || S.kind !== 'cards' || S.nCards < 2 || S.A !== 'd1' || S.B !== 'd2') return true;
      const t = S.th, want = S.repl ? 13 / 52 : 12 / 51; return Math.abs(t.ab / t.a - want) < 1e-12 ? true : 'P(B|A) ' + t.ab / t.a; })()` },
    { name: 'diamonds in ten cards: σ 1.3693 with, 1.2426 without', fn: `(() => { const S = ${st}; if (!S || S.kind !== 'cards' || S.nCards !== 10 || S.X !== 'diam') return true;
      const want = S.repl ? Math.sqrt(1.875) : Math.sqrt(1.875 * 42 / 51); if (Math.abs(S.mom.mu - 2.5) > 1e-12 || Math.abs(S.mom.sd - want) > 1e-12) return 'μ ' + S.mom.mu + ' σ ' + S.mom.sd;
      const dd = [...document.querySelectorAll('#out div')].find((d) => /Standard deviation/.test(d.querySelector('dt').textContent));
      return !dd || S.blind || dd.querySelector('dd').textContent.indexOf(want.toFixed(4)) >= 0 ? true : 'readout ' + dd.querySelector('dd').textContent; })()` },
    { name: 'three dice: expected profit −17/216', fn: `(() => { const S = ${st}; if (!S || S.kind !== 'dice' || S.nDice !== 3 || S.X !== 'match') return true;
      return Math.abs(S.momY.mu + 17 / 216) < 1e-12 ? true : 'μ_Y ' + S.momY.mu; })()` },
    { name: 'the PDF adds to 1; the tally adds up', fn: `(() => { const S = ${st}; if (!S) return false;
      const s = S.P.reduce((a, r) => a + r.p, 0); if (Math.abs(s - 1) > 1e-9) return 'ΣP ' + s;
      let f = 0; for (const [, k] of S.T.freq) f += k; if (f !== S.T.n) return 'frequencies ' + f + ' of ' + S.T.n;
      return S.T.a <= S.T.n && S.T.ab <= S.T.a && S.T.ab <= S.T.b ? true : 'counts ' + JSON.stringify([S.T.n, S.T.a, S.T.b, S.T.ab]); })()` },
  ],
};
