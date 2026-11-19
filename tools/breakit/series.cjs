/* Known values for the break-it test (tools/breakit.cjs), Sequences and Series. Whatever the zoom, pan, N or Play:
   - the partial sum shown is the closed form of the setup at that N (the bouncing ball, Zeno, the telescoping series);
   - the sums the demo finds stay π²/6, ln 2 and e for those series, and the harmonic sum passes 10 at N = 12,367;
   - for an alternating series |S − S_N| ≤ |a(N+1)| at the N shown. */
const is = (k) => `(window.__ser && window.__ser.S.preset === '${k}')`;
module.exports = {
  checks: [
    { name: 'the bouncing ball: S_N = 2(0.64)(1 − 0.64ᴺ)/0.36 and S = 32/9', fn: `(() => {
      if (!${is('bounce')}) return true; const I = window.__ser, N = I.S.N;
      const want = 2 * 0.64 * (1 - Math.pow(0.64, N)) / 0.36, got = I.sumTo(N);
      if (Math.abs(got - want) > 1e-14) return 'S_N ' + got + ' at N = ' + N;
      const s = I.sumOf(false); return s && Math.abs(s.v - 32 / 9) < 1e-15 ? true : 'sum ' + (s && s.v);
    })()` },
    { name: 'Zeno and the telescoping series: S_N = 1 − 2⁻ᴺ and 1 − 1/(N + 1)', fn: `(() => {
      const I = window.__ser; if (!I) return true; const N = I.S.N;
      if (${is('zeno')} && Math.abs(I.sumTo(N) - (1 - Math.pow(2, -N))) > 1e-15) return 'zeno ' + I.sumTo(N);
      if (${is('telescope')} && N <= 100000 && Math.abs(I.sumTo(N) - (1 - 1 / (N + 1))) > 1e-14) return 'telescope ' + I.sumTo(N);
      return true;
    })()` },
    { name: 'the sums found: π²/6, ln 2, e, and none for 1/n', fn: `(() => {
      const I = window.__ser; if (!I || I.S.preset === 'custom') return true; const a = I.S.an; if (!a) return true;
      const want = { basel: Math.PI * Math.PI / 6, ratioOne: Math.PI * Math.PI / 6, altHarm: Math.LN2, factorial: Math.E, madelung: 2 * Math.LN2 }[I.S.preset];
      if (I.S.preset === 'harmonic') return a.status === 'diverges' ? true : 'harmonic ' + a.status;
      if (want == null) return true;
      return a.status === 'converges' && Math.abs(a.S - want) < 1e-12 ? true : I.S.preset + ' found ' + a.S + ' (' + a.status + ')';
    })()` },
    { name: 'the harmonic sum passes 10 at N = 12,367', fn: `(() => {
      if (!${is('harmonic')}) return true; const p = window.__ser.S.past;
      return p === undefined || (p && p.N === 12367) || window.__ser.S.bound !== 10 ? true : 'passes 10 at ' + (p && p.N);
    })()` },
    { name: 'alternating series bound |S − S_N| ≤ |a(N+1)|', fn: `(() => {
      const I = window.__ser; if (!I || !I.S.an || I.S.an.test !== 'alternating' || I.S.an.status !== 'converges') return true;
      const N = I.S.N, s = I.sumOf(false); if (!s) return true;
      return Math.abs(s.v - I.sumTo(N)) <= Math.abs(I.termAt(N + 1)) * (1 + 1e-12) + 1e-15 ? true : 'bound fails at N = ' + N;
    })()` },
  ],
  steps: [
    { name: 'harmonic out to 20,000 terms on a log axis', fn: `(() => { const I = window.__ser; I.applyPreset('harmonic'); I.setN(20000); document.querySelector('[data-ax="log"]').click(); })()` },
    { name: 'the alternating harmonic at a million terms', fn: `(() => { const I = window.__ser; I.applyPreset('altHarm'); I.setN(1000000); })()` },
    { name: 'every picture with a typed series', fn: `(() => { const I = window.__ser; I.applyPreset('basel'); for (const v of ['seq', 'integral', 'compare', 'ratio', 'sum']) document.querySelector('#viewSeg [data-v="' + v + '"]').click(); })()` },
  ],
};
