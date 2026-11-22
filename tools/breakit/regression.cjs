/* Known values for the break-it test (tools/breakit.cjs), Linear Regression and Correlation. Whatever the zoom, pan, drags or
   Play:
   - the book's third exam and final exam data, untouched, give ŷ = −173.51 + 4.83x, r = 0.6631, s = 16.4 and one outlier,
     (65, 175), and without it ŷ = −355.19 + 7.39x, r = 0.9121 (OpenStax Introductory Statistics 2e, 12.3 and 12.6);
   - the fit shown is always the least squares fit of the points in use: no line beats its sum of squares, r² = 1 − SSE/SST;
   - the readouts show no NaN, and the shuffle p value stays between 0 and 1. */
const exam = `(() => { const R = window.__reg; return R && R.S.p === 'exam' && !R.S.edited; })()`;
module.exports = {
  checks: [
    { name: 'the book: −173.51 + 4.83x, r = 0.6631, s = 16.4, outlier (65, 175); without it −355.19 + 7.39x, r = 0.9121', fn: `(() => {
      const R = window.__reg; if (!(${exam})) return true; const F = R.S.F;
      if (Math.abs(F.intercept + 173.51) > 0.005 || Math.abs(F.slope - 4.83) > 0.005 || Math.abs(F.r - 0.6631) > 5e-5 || Math.abs(F.s - 16.4) > 0.05) return 'fit ' + F.intercept + ' ' + F.slope + ' ' + F.r;
      if (F.outliers.length !== 1 || F.outliers[0] !== 0) return 'outliers ' + JSON.stringify(F.outliers);
      const d = R.dataFor('exam', 1), G = R.without(d.x, d.y, 0);
      return Math.abs(G.intercept + 355.19) < 0.005 && Math.abs(G.slope - 7.39) < 0.005 && Math.abs(G.r - 0.9121) < 5e-5 ? true : 'without ' + G.intercept + ' ' + G.slope;
    })()` },
    { name: 'the line shown is the least squares line of the points in use', fn: `(() => {
      const R = window.__reg; if (!R) return true; const S = R.S, F = S.F; if (!F) return true;
      const x = [], y = []; S.xs.forEach((v, i) => { if (S.on[i]) { x.push(v); y.push(S.ys[i]); } });
      const G = R.fitOf(x, y); if (!G) return 'no fit for ' + x.length + ' points';
      const tol = 1e-9 * (1 + Math.abs(G.slope) + Math.abs(G.intercept));
      if (Math.abs(G.slope - F.slope) > tol || Math.abs(G.intercept - F.intercept) > tol) return 'stale fit';
      for (const [da, db] of [[1, 0], [-1, 0], [0, 0.01], [0, -0.01]]) {
        const sc = 1e-3 * (1 + Math.abs(F.intercept)), a = F.intercept + da * sc, b = F.slope + db * (1 + Math.abs(F.slope));
        if (R.sseOf(x, y, a, b) < F.sse - 1e-9 * (1 + F.sse)) return 'a nearby line beats least squares';
      }
      if (!F.flat && Math.abs(F.r2 - (1 - F.sse / F.sst)) > 1e-9) return 'r² is not 1 − SSE/SST';
      return true;
    })()` },
    { name: 'readouts show no NaN; shuffle p in [0, 1]', fn: `(() => {
      const R = window.__reg; if (!R) return true; const t = document.getElementById('out').textContent;
      if (/NaN|undefined|Infinity/.test(t)) return 'readouts: ' + t.slice(0, 200);
      const sh = R.S.sh; if (sh && sh.rs.length && R.S.F) { const p = R.shuffleP(sh.rs, R.S.F.r); if (!(p >= 0 && p <= 1)) return 'shuffle p ' + p; }
      return true;
    })()` },
  ],
  steps: [
    { name: 'a point dragged far away, then Reset gives the book fit back', fn: `(() => { const R = window.__reg; R.applySetup('exam'); R.S.xs[3] = 1e6; R.S.ys[3] = -1e6; R.S.edited = true; R.refit();
      document.getElementById('reset').click(); const F = R.S.F; return Math.abs(F.slope - 4.8274) < 1e-4 && !R.S.edited ? true : 'after Reset b = ' + F.slope; })()` },
    { name: 'points removed down to two show no fit, Put all points back restores it', fn: `(() => { const R = window.__reg; R.applySetup('scuba'); R.S.on = R.S.on.map((_, i) => i < 2); R.S.edited = true; R.refit();
      if (R.S.F) return 'a fit from two points'; document.getElementById('putBack').click(); return R.S.F && Math.abs(R.S.F.slope + 1.1143) < 1e-4 ? true : 'not restored'; })()` },
    { name: 'the shuffle test run to the end is repeatable and its p stays near the t test', fn: `(() => { const R = window.__reg; R.applySetup('exam'); R.setRun(true); let sh = R.S.sh; while (sh.rs.length < sh.N) sh.rs.push(sh.next().r);
      const p1 = R.shuffleP(sh.rs, R.S.F.r); R.setRun(false); document.getElementById('reset').click(); R.setRun(true); sh = R.S.sh; while (sh.rs.length < sh.N) sh.rs.push(sh.next().r);
      const p2 = R.shuffleP(sh.rs, R.S.F.r); R.setRun(false); return p1 === p2 && Math.abs(p1 - 0.0262) < 0.02 ? true : 'p ' + p1 + ' then ' + p2; })()` },
    { name: 'a setup change frames the new data, not the last setup\'s line (exam to pendulum, ice cream to CPI)', fn: `(() => { const R = window.__reg;
      for (const [a, b, top, bot] of [['exam', 'pendulum', 10, -1], ['ice', 'cpi', 400, -100]]) { R.applySetup(a); R.applySetup(b); const v = R.S.view;
        if (v.y1 > top || v.y0 < bot) return b + ' after ' + a + ': y from ' + v.y0 + ' to ' + v.y1; }
      return true; })()` },
    { name: 'no shuffle reaching |r| reads p < 1/N, never < 0.0001 from 1,000 shuffles', fn: `(() => { const R = window.__reg; R.applySetup('pendulum'); R.setRun(true); const sh = R.S.sh; while (sh.rs.length < sh.N) sh.rs.push(sh.next().r);
      R.setRun(false); R.readouts(); const t = document.getElementById('out').textContent; const i = t.indexOf('Shuffle p value'); return t.indexOf('< 0.001 (1,000 shuffles)') >= 0 ? true : 'readout: ' + t.slice(i, i + 60); })()` },
  ],
};
