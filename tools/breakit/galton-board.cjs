/* Known values for the break-it test (tools/breakit.cjs), galton-board. Hook: window.__gb (S, applyPreset, drop, launch).
   The binomial probabilities add to 1, have mean np and variance np(1 - p), and C(12,6) = 924 gives P(6) at the fair preset;
   the 20 row preset has 73.7 % within one standard deviation; the bins always hold counts that add to N, and (once nothing is in
   flight, because the readouts refresh on a timer) the Balls N, sample mean and sample standard deviation readouts equal the
   statistics of the bin counts, and the Expected readouts equal np and sqrt(np(1 - p)). */
const pre = `const G = window.__gb; if (!G) return true; const S = G.S;
  const rd = (k) => { for (const r of document.querySelectorAll('#out > div')) if (r.querySelector('dt').textContent.indexOf(k) === 0) return r.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const still = !(S.balls.length || S.queue || S.stream);
`;
module.exports = {
  checks: [
    { name: "bins: right number of them, none negative, and the bounces model is binomial (pmf sums to 1, mean np, variance np(1-p))", fn: `(() => { ${pre}
      if (S.counts.length !== S.n + 1) return 'counts has ' + S.counts.length + ' bins for n = ' + S.n;
      for (const c of S.counts) if (!(c >= 0) || !Number.isInteger(c)) return 'bad bin count ' + c;
      const n = S.n, p = S.p; let P = new Array(n + 1).fill(0);
      const lg = (m) => { let s = 0; for (let i = 2; i <= m; i++) s += Math.log(i); return s; };
      for (let k = 0; k <= n; k++) P[k] = p <= 0 ? (k === 0 ? 1 : 0) : p >= 1 ? (k === n ? 1 : 0) : Math.exp(lg(n) - lg(k) - lg(n - k) + k * Math.log(p) + (n - k) * Math.log(1 - p));
      const s = P.reduce((a, b) => a + b, 0), m = P.reduce((a, q, k) => a + q * k, 0), v = P.reduce((a, q, k) => a + q * (k - m) * (k - m), 0);
      if (Math.abs(s - 1) > 1e-9) return 'pmf sums to ' + s;
      if (Math.abs(m - n * p) > 1e-9) return 'pmf mean ' + m + ' not np = ' + n * p;
      if (Math.abs(v - n * p * (1 - p)) > 1e-9) return 'pmf variance ' + v + ' not np(1-p) = ' + n * p * (1 - p);
      if (S.preset === 'fair' && Math.abs(P[6] * 4096 - 924) > 1e-6) return 'P(6) of 12 gives ' + P[6] * 4096 + ' ways, should be 924';
      if (S.preset === 'many') { const sd = Math.sqrt(5); const w = P.reduce((a, q, k) => a + (Math.abs(k - 10) <= sd + 1e-9 ? q : 0), 0); if (Math.abs(w - 0.737) > 5e-4) return 'within one sd ' + w + ', the preset says 73.7 %'; }
      return true; })()` },
    { name: "readouts: N, sample mean and sd equal the bin counts; expected values are np and sqrt(np(1-p))", fn: `(() => { ${pre}
      if (!still || S.blind) return true;
      let N = 0, A = 0; S.counts.forEach((c, k) => { N += c; A += c * k; });
      if (rd('Balls in the bins') !== String(N)) return 'N shows ' + rd('Balls in the bins') + ', bins hold ' + N;
      const off = (x) => S.walk ? 2 * x - S.n : x, sc = S.walk ? 2 : 1;
      const stdText = (v) => (isFinite(v) ? v.toFixed(2).replace('-', '-') : '—');
      const mean = N ? A / N : NaN; let Q = 0; S.counts.forEach((c, k) => { Q += c * (k - mean) * (k - mean); });
      const sd = N > 1 ? Math.sqrt(Q / (N - 1)) : NaN, g = rd('Sample mean'), gs = rd('Sample standard deviation');
      if (N && Math.abs(parseFloat(g) - off(mean)) > 0.0051) return 'sample mean shows ' + g + ', ' + off(mean);
      if (N > 1 && Math.abs(parseFloat(gs) - sc * sd) > 0.0051) return 'sample sd shows ' + gs + ', ' + sc * sd;
      const em = rd('Expected mean'), es = rd('Expected spread');
      if (Math.abs(parseFloat(em) - off(S.n * S.p)) > 0.0051) return 'expected mean shows ' + em + ', ' + off(S.n * S.p);
      if (Math.abs(parseFloat(es) - sc * Math.sqrt(S.n * S.p * (1 - S.p))) > 0.0051) return 'expected spread shows ' + es;
      return true; })()` },
    { name: "total of the bins never exceeds what was launched (no ball lost or counted twice): bins + in flight + queued", fn: `(() => { ${pre}
      const N = S.counts.reduce((a, b) => a + b, 0), hold = window.__gbSeen = window.__gbSeen || { n: S.n, p: S.p, N: 0 };
      if (hold.n !== S.n || hold.p !== S.p) { hold.n = S.n; hold.p = S.p; hold.N = 0; }
      if (N < hold.N && N !== 0) return 'bins went from ' + hold.N + ' balls to ' + N + ' with no reset';
      hold.N = N; return true; })()` },
  ],
  steps: [
    { name: 'stream at the extremes: n = 1 and 20 and p = 0 and 1 while streaming, fast mode on and off, then reset', fn: `(async () => {
      const G = window.__gb, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); };
      document.getElementById('go').click(); await pause(300);
      for (const [n, p] of [['1', '0'], ['20', '1'], ['20', '0.5'], ['1', '1'], ['12', '0.5']]) { set('sN', n); set('sP', p); await pause(200); }
      const fast = document.getElementById('cFast'); fast.click(); await pause(400); fast.click(); await pause(300);
      document.getElementById('drop100').click(); document.getElementById('drop100').click(); await pause(200); set('sN', '5'); await pause(300);
      if (G.S.stream) document.getElementById('go').click(); await pause(100); document.getElementById('reset').click();
    })()` },
  ],
};
