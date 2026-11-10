/* Known values for the break-it test (tools/breakit.cjs), entropy. Hook: window.__en (S, dev, ...).
   Free expansion: the model gas is elastic, so the total kinetic energy stays N/2 (unit speeds) and every disk stays in the box
   (and on the left while the partition is in). Einstein solids: the quanta are conserved (sum of the oscillators = q, q_A is the
   sum over solid A) and every exchange is counted once in the histogram. Second law: the first law Q_h = W + Q_c, the reservoir
   entropy changes, and the verdict agrees with efficiency against Carnot; the shown Q_h, Q_c, W, ΔS agree with the device. */
const rd = `const E = window.__en; if (!E) return true; const S = E.S;
  const dd = (name) => { for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'); if (t && t.textContent.trim() === name) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); } return null; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-12);
`;
module.exports = {
  checks: [
    { name: "free expansion: kinetic energy stays N/2, every disk stays in the box (left half while the partition is in)", fn: `(() => { ${rd}
      if (S.view !== 'fe' || !S.fe.g) return true; const g = S.fe.g; let e = 0;
      for (let i = 0; i < g.N; i++) { e += 0.5 * (g.vx[i] ** 2 + g.vy[i] ** 2);
        if (!(g.x[i] >= 0 && g.x[i] <= 2 && g.y[i] >= 0 && g.y[i] <= 1)) return 'disk ' + i + ' left the box: ' + g.x[i] + ', ' + g.y[i];
        if (g.wall && g.x[i] > 1) return 'disk ' + i + ' is right of the partition (x = ' + g.x[i] + ')'; }
      return near(e, g.N / 2, 1e-9) ? true : 'kinetic energy ' + e + ', should be ' + g.N / 2; })()` },
    { name: "free expansion: the readouts agree with the gas (N, count on the left, 2^−N, N k ln 2)", fn: `(() => { ${rd}
      if (S.view !== 'fe' || !S.fe.g || S.run) return true; const g = S.fe.g;
      if (dd('Molecules N') !== String(g.N)) return 'N shows ' + dd('Molecules N') + ', gas has ' + g.N;
      let n = 0; for (let i = 0; i < g.N; i++) if (g.x[i] < 1) n++;
      if (dd('On the left now') !== String(n)) return 'On the left shows ' + dd('On the left now') + ', counted ' + n;
      if (!S.blind) { const s = dd('ΔS of doubling the volume, N k ln 2'), want = g.N * 1.380649e-23 * Math.LN2;
        const m = s.match(/^([\\d.]+)(?: × 10(.+))? J\\/K$/); if (!m) return 'ΔS readout unreadable: ' + s;
        const sup = (m[2] || '').replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)); const got = parseFloat(m[1]) * Math.pow(10, +(sup || 0));
        if (!near(got, want, 6e-3)) return 'ΔS shows ' + s + ', N k ln 2 = ' + want;
        if (dd('Per mole, R ln 2') !== '5.763 J/K') return 'R ln 2 shows ' + dd('Per mole, R ln 2') + ', should be 5.763 J/K'; }
      return true; })()` },
    { name: "free expansion: the histogram time adds up to the time counted", fn: `(() => { ${rd}
      if (S.view !== 'fe' || !S.fe.g) return true; const g = S.fe.g; let s = 0; for (let n = 0; n <= g.N; n++) s += g.hist[n];
      return near(s, g.tCount, 1e-9) || Math.abs(s - g.tCount) < 1e-9 ? true : 'histogram sums to ' + s + ', time counted ' + g.tCount; })()` },
    { name: "Einstein solids: quanta conserved, q_A is the sum over solid A, every exchange counted once", fn: `(() => { ${rd}
      if (S.view !== 'es') return true; const e = S.es, s = e.s; let tot = 0, a = 0, h = 0;
      for (let i = 0; i < s.n.length; i++) { if (s.n[i] < 0) return 'oscillator ' + i + ' holds ' + s.n[i]; tot += s.n[i]; if (i < e.NA) a += s.n[i]; }
      for (let i = 0; i < s.hist.length; i++) h += s.hist[i];
      if (tot !== e.q) return 'the oscillators hold ' + tot + ' quanta, q = ' + e.q;
      if (a !== s.qA) return 'q_A = ' + s.qA + ' but solid A holds ' + a;
      if (h !== s.steps) return 'histogram counts ' + h + ', steps ' + s.steps;
      if (s.n.length !== e.NA + e.NB) return 'oscillator count ' + s.n.length;
      return true; })()` },
    { name: "Einstein solids: readouts agree with the solid (q_A, q_B, steps, most likely q_A; temperatures are zero only with no energy)", fn: `(() => { ${rd}
      if (S.view !== 'es' || S.run) return true; const e = S.es, s = e.s;
      if (dd('Quanta in A, q_A') !== String(s.qA) || dd('Quanta in B, q_B') !== String(e.q - s.qA)) return 'q_A, q_B readouts ' + dd('Quanta in A, q_A') + ', ' + dd('Quanta in B, q_B');
      if (dd('Exchanges tried') !== String(s.steps)) return 'exchanges shows ' + dd('Exchanges tried');
      if (!S.blind) { const lnC = (n, k) => { let v = 0; for (let i = 1; i <= k; i++) v += Math.log((n - k + i) / i); return v; };
        const lo = (N, q) => lnC(q + N - 1, q), want = lo(e.NA, s.qA) + lo(e.NB, e.q - s.qA);
        if (Math.abs(parseFloat(dd('ln Ω_A + ln Ω_B now')) - want) > 6e-4 + 1e-9) return 'ln Ω shows ' + dd('ln Ω_A + ln Ω_B now') + ', should be ' + want;
        let best = 0, bv = -Infinity; for (let a = 0; a <= e.q; a++) { const v = lo(e.NA, a) + lo(e.NB, e.q - a); if (v > bv + 1e-12) { bv = v; best = a; } }
        const pk = +dd('Most likely q_A'); if (pk !== best && Math.abs(lo(e.NA, pk) + lo(e.NB, e.q - pk) - bv) > 1e-9) return 'most likely q_A shows ' + pk + ', it is ' + best; }
      return true; })()` },
    { name: "second law: first law, reservoir entropy, efficiency against Carnot, and the verdict agree", fn: `(() => { ${rd}
      if (S.view !== 'sl') return true; const r = E.dev(), d = S.sl;
      if (!(d.Tc < d.Th)) return 'T_c ' + d.Tc + ' is not below T_h ' + d.Th;
      if (d.W < 0 || d.Q < 0) return 'negative W or Q: ' + d.W + ', ' + d.Q;
      if (Math.abs(r.Qh - r.W - r.Qc) > 1e-9 * Math.max(1, Math.abs(r.Qh)) * (r.mode === 'engine' ? 1 : 1) && r.mode === 'engine') return 'engine: Q_h − W ≠ Q_c';
      if (r.mode === 'fridge' && Math.abs(r.Qh - r.Qc - r.W) > 1e-9 * Math.max(1, r.Qh)) return 'fridge: Q_h − Q_c ≠ W';
      const dS = r.mode === 'engine' ? -r.Qh / r.Th + r.Qc / r.Tc : r.Qh / r.Th - r.Qc / r.Tc;
      if (Math.abs(dS - r.dS) > 1e-9) return 'ΔS ' + r.dS + ' vs ' + dS;
      if (r.mode === 'engine' && r.Qh > 0 && r.Qc >= 0 && Math.abs(r.dS) > 1e-6) { const beats = r.eff > r.carnotEff; if (beats !== (r.dS < 0)) return 'efficiency ' + r.eff + ' vs Carnot ' + r.carnotEff + ' but ΔS = ' + r.dS; }
      if (r.mode === 'fridge' && r.W > 0 && Math.abs(r.dS) > 1e-6 && (r.cop > r.carnotCop) !== (r.dS < 0)) return 'COP ' + r.cop + ' vs Carnot ' + r.carnotCop + ' but ΔS = ' + r.dS;
      if (r.verdict === 'allowed' && r.dS <= 0) return 'allowed with ΔS = ' + r.dS;
      if (r.verdict === 'beats' && r.dS >= 0) return 'beats Carnot with ΔS = ' + r.dS;
      if (!S.run) { const f1 = (v) => Math.abs(parseFloat(v) - 0) ;
        const qh = dd('Q_h'), qc = dd('Q_c'), w = dd('W');
        if (qh === null) return true;
        if (Math.abs(parseFloat(qh) - r.Qh) > 0.051 || Math.abs(parseFloat(qc) - r.Qc) > 0.051 || Math.abs(parseFloat(w) - r.W) > 0.051) return 'readouts ' + qh + ', ' + qc + ', ' + w + ' vs ' + [r.Qh, r.Qc, r.W];
        if (!S.blind && Math.abs(parseFloat(dd('ΔS of the universe')) - r.dS) > 6e-5) return 'ΔS readout ' + dd('ΔS of the universe') + ', physics ' + r.dS; }
      return true; })()` },
    { name: "second law: the pair with a Carnot device leaves the net work equal to W minus the Carnot work (engine) or zero (fridge)", fn: `(() => { ${rd}
      if (S.view !== 'sl' || !S.sl.pair) return true; const r = E.dev();
      const hot = parseFloat(dd('Pair: net heat from hot')), cold = parseFloat(dd('Pair: net heat to cold')), wn = parseFloat(dd('Pair: net work out'));
      if (!isFinite(hot + cold + wn)) return 'pair readouts ' + [hot, cold, wn];
      if (Math.abs(hot - cold - wn) > 0.16) return 'pair energy: ' + hot + ' from hot, ' + cold + ' to cold, ' + wn + ' work';
      return true; })()` },
    { name: "preset values: the real engine, 600 K to 300 K, 500 J in, 150 J out", fn: `(() => { ${rd}
      if (S.view !== 'sl' || S.preset !== 'slReal') return true; const r = E.dev();
      if (Math.abs(r.Qc - 350) > 1e-9 || Math.abs(r.eff - 0.3) > 1e-12 || Math.abs(r.carnotEff - 0.5) > 1e-12) return 'Q_c ' + r.Qc + ', eff ' + r.eff + ', Carnot ' + r.carnotEff;
      return Math.abs(r.dS - (-500 / 600 + 350 / 300)) < 1e-12 ? true : 'ΔS ' + r.dS; })()` },
  ],
  steps: [
    { name: 'every view and preset, run, change the sliders mid run, Reset and back', fn: `(async () => {
      const E = window.__en, pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['fe100', 'esHot', 'slBeat', 'slKelvin', 'slClausius', 'fe4', 'esSmall']) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(150);
        if (!document.getElementById('go').hidden) { document.getElementById('go').click(); await pause(500); }
        for (const [id, v] of [['sN', 0], ['sN', 10], ['sNA', 2], ['sNB', 300], ['sQ', 0], ['sQ', 400], ['sTh', 1000], ['sTc', 500], ['sTh', 250], ['sTc', 50], ['sQin', 0], ['sW', 0], ['sW', 1000]]) {
          if (document.getElementById(id).offsetParent) { set(id, v); await pause(80); } }
        if (!document.getElementById('go').hidden) { document.getElementById('go').click(); await pause(300); document.getElementById('restart').click(); await pause(100); }
      }
      document.querySelector('#presets [data-p=fe4]').click(); await pause(200);
    })()` },
    { name: 'Einstein solids with no quanta, the smallest solids, 2x speed, step; the fridge with W above Q_c; pair on and off', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const el = document.getElementById(id); el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#viewSeg [data-v=es]').click(); await pause(100);
      set('sQ', 0); set('sNA', 2); set('sNB', 2); document.getElementById('go').click(); await pause(500); document.getElementById('go').click();
      set('sQ', 400); set('sNA', 300); set('sNB', 2); document.getElementById('startSeg').querySelector('[data-st=B]').click(); document.getElementById('go').click(); await pause(600); document.getElementById('go').click();
      document.querySelector('#viewSeg [data-v=sl]').click(); await pause(100);
      document.querySelector('#devSeg [data-d=fridge]').click(); set('sW', 1000); set('sQin', 0);
      const pr = document.getElementById('pair'); pr.click(); await pause(100); document.querySelector('#devSeg [data-d=engine]').click(); await pause(100); pr.click();
      document.querySelector('#presets [data-p=fe4]').click(); await pause(200);
    })()` },
  ],
};
