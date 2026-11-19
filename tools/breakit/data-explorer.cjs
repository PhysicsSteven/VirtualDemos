/* Known values for the break-it test (tools/breakit.cjs), Data Explorer. Whatever is dragged, typed or played:
   - the statistics shown are VDSTATS on the values on show (mean, median, the book's quartiles, s);
   - the book's soccer heights, unedited, at start 59.95 and width 2 give the classes 5, 3, 15, 40, 17, 12, 7, 1 (1.3, 2.2);
   - the book's home prices, unedited, give median 488,800, Q1 308,750, Q3 649,000 (2.3);
   - the frequency table's frequencies add to n and its last cumulative relative frequency is 1. */
const unedited = (k) => `(window.__dx && __dx.S.preset === '${k}' && __dx.S.shown === Infinity && __dx.S.vals.length === __dx.S.orig.length && __dx.S.vals.every((v, i) => v === __dx.S.orig[i]))`;
module.exports = {
  checks: [
    { name: 'the statistics are VDSTATS on the values on show', fn: `(() => {
      const D = window.__dx; if (!D) return true; const a = D.live(), st = D.S.stat; if (!a.length) return true;
      const f = VDSTATS.fiveNum(a);
      if (Math.abs(st.mean - VDSTATS.mean(a)) > 1e-9 * Math.max(1, Math.abs(st.mean))) return 'mean ' + st.mean;
      if (st.median !== f.med || st.q1 !== f.q1 || st.q3 !== f.q3) return 'quartiles ' + [st.q1, st.median, st.q3];
      if (a.length > 1 && Math.abs(st.sd - VDSTATS.sd(a)) > 1e-9 * Math.max(1, st.sd)) return 's ' + st.sd;
      return true;
    })()` },
    { name: 'soccer heights at 59.95 and 2: 5, 3, 15, 40, 17, 12, 7, 1', fn: `(() => {
      if (!${unedited('soccer')} || Math.abs(__dx.S.start - 59.95) > 1e-9 || __dx.S.width !== 2) return true;
      const c = __dx.freqByClass(__dx.S.vals, 59.95, 2).map((r) => r.f).join(',');
      return c === '5,3,15,40,17,12,7,1' ? true : 'classes ' + c;
    })()` },
    { name: 'home prices: median 488,800, Q1 308,750, Q3 649,000', fn: `(() => {
      if (!${unedited('homes')}) return true; const s = __dx.S.stat;
      return s.median === 488800 && s.q1 === 308750 && s.q3 === 649000 ? true : 'got ' + [s.q1, s.median, s.q3];
    })()` },
    { name: 'the frequency table adds up to n with cumulative relative frequency 1', fn: `(() => {
      const D = window.__dx; if (!D) return true; const a = D.live(); if (!a.length) return true;
      const rows = D.S.ft === 'value' ? D.freqByValue(a) : D.freqByClass(a, D.S.start, D.S.width), tot = rows.reduce((s, r) => s + r.f, 0);
      if (D.S.ft === 'class' && a.some((v) => v < D.S.start - 1e-9)) return true;
      return tot === a.length && Math.abs(rows[rows.length - 1].crf - 1) < 1e-12 ? true : 'total ' + tot + ' of ' + a.length;
    })()` },
  ],
  steps: [
    { name: "soccer heights at the book's bins", fn: `window.__dx.applyPreset('soccer')` },
    { name: 'home prices, the outlier dragged in', fn: `(() => { const D = window.__dx; D.applyPreset('homes'); D.selectAt(6); D.S.vals[6] = 700000; D.edited(); })()` },
    { name: 'pendulum, largest set to 8.00', fn: `(() => { const D = window.__dx; D.applyPreset('pendulum'); document.getElementById('selMax').click(); const v = document.getElementById('selV'); v.value = '8'; v.dispatchEvent(new Event('input')); })()` },
    { name: 'a bin width far too small and far too big', fn: `(() => { const D = window.__dx; D.applyPreset('cpi'); D.setBins(D.S.start, 0.0001); D.setBins(D.S.start, 1e6); })()` },
    { name: 'one value typed in', fn: `(() => { const b = document.getElementById('dataIn'); b.value = '7'; b.dispatchEvent(new Event('input')); })()` },
  ],
};
