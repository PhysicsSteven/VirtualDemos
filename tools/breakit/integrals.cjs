/* Known values for the break-it test (tools/breakit.cjs), Riemann Sums and Integrals. Whatever the zoom, pan or Play:
   - with e^(x/2) on [0, 3] the integral is 2(e^1.5 − 1) and the sum equals its closed form for the rule and n shown
     (left: h Σ e^(x_i/2) = h(e^(nh/2) − 1)/(e^(h/2) − 1));
   - the error slopes on the lower graph stay −1, −1, −2, −2, −4 for that function;
   - with x² sums on [0, 1] the left, right and midpoint sums equal their closed forms. */
const rising = `(() => { const S = window.__int && window.__int.S; return S && !S.data && !S.between && document.getElementById('fx').value.replace(/\\s/g, '') === 'e^(x/2)' && S.a === 0 && S.b === 3; })()`;
module.exports = {
  checks: [
    { name: 'x² on [0, 1]: closed forms of the left, right and midpoint sums', fn: `(() => {
      const I = window.__int; if (!I) return true; const f = (x) => x * x;
      for (const n of [1, 7, 100]) {
        if (Math.abs(I.riemann(f, 0, 1, n, 'left') - (n - 1) * (2 * n - 1) / (6 * n * n)) > 1e-14) return 'left ' + n;
        if (Math.abs(I.riemann(f, 0, 1, n, 'right') - (n + 1) * (2 * n + 1) / (6 * n * n)) > 1e-14) return 'right ' + n;
        if (Math.abs(I.riemann(f, 0, 1, n, 'mid') - (1 / 3 - 1 / (12 * n * n))) > 1e-14) return 'mid ' + n;
      }
      return true;
    })()` },
    { name: 'the force pulse table gives J = 8.14 N·s by trapezoids', fn: `(() => {
      const I = window.__int; if (!I || I.S.preset !== 'table' || I.S.rule !== 'trap') return true;
      const s = I.theSum(); return Math.abs(s - 8.14) < 1e-12 ? true : 'table sum ' + s;
    })()` },
    { name: 'the integral of e^(x/2) on [0, 3] is 2(e^1.5 − 1)', fn: `(() => {
      const I = window.__int; if (!(${rising}) || !I.S.ex) return true;
      const want = 2 * (Math.exp(1.5) - 1);
      return Math.abs(I.S.ex.value - want) <= 1e-12 * want && I.S.ex.how === 'exact' ? true : 'integral ' + I.S.ex.value + ' (' + I.S.ex.how + ')';
    })()` },
    { name: 'the left sum of e^(x/2) equals its geometric series', fn: `(() => {
      const I = window.__int; if (!(${rising})) return true;
      const n = I.nUsed(), h = 3 / n, want = h * (Math.exp(1.5) - 1) / (Math.exp(h / 2) - 1);
      const got = I.riemann((x) => Math.exp(x / 2), 0, 3, n, 'left');
      return Math.abs(got - want) <= 1e-11 * want ? true : 'left sum ' + got + ' for n = ' + n + ', closed form ' + want;
    })()` },
    { name: 'the error slopes are −1, −1, −2, −2, −4 for e^(x/2)', fn: `(() => {
      const I = window.__int; if (!(${rising}) || !I.S.series) return true;
      const want = { left: -1, right: -1, mid: -2, trap: -2, simp: -4 };
      for (const r in want) { const s = I.S.series[r].slope; if (!(Math.abs(s - want[r]) < 0.02)) return r + ' slope ' + s; }
      return true;
    })()` },
    { name: 'the readout sum is the sum of the rule shown', fn: `(() => {
      const I = window.__int; if (!I || !I.S.f || I.S.blind) return true;
      const row = [...document.querySelectorAll('#out div')].find((d) => d.querySelector('dt') && d.querySelector('dt').textContent.trim() === 'Sum');
      if (!row) return true;
      const got = parseFloat(row.querySelector('dd').textContent.replace('−', '-').replace(/,/g, '').replace(/×10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/, (m, e) => 'e' + [...e].map((c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c) < 0 ? '-' : '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)).join('')));
      const want = I.theSum(); if (!isFinite(want)) return true;
      return Math.abs(got - want) <= 1e-6 * Math.max(1e-300, Math.abs(want)) ? true : 'readout ' + got + ', sum ' + want;
    })()` },
  ],
  steps: [
    { name: 'the force pulse table', fn: `window.__int.applyPreset('table')` },
    { name: 'back to e^(x/2), Simpson at n = 64', fn: `(() => { const I = window.__int; I.applyPreset('rising'); document.querySelector('#ruleSeg [data-r="simp"]').click(); I.setN(64); })()` },
    { name: 'improper 1/x² with b pushed out', fn: `(() => { const I = window.__int; I.applyPreset('impConv'); I.S.bi = 1e9; I.draw(); })()` },
  ],
};
