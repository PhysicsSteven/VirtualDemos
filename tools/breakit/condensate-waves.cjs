/* Known values for the break-it test (tools/breakit.cjs), condensate-waves. Hook: window.__cw (S, gr, vorts, trace, period, ...).
   The Gross-Pitaevskii solver keeps the norm: with no absorber the wavefunction stays normalized to 1 (and with the absorber it can
   only lose atoms); no NaN in the grid; the readouts equal the physics of the live state (time, mu/h, Thomas-Fermi radius, healing
   length from the coupling G; ht/(md) from the start separation); in the flat round trap a slosh stays inside its start amplitude
   (Kohn's theorem: the center swings at the trap frequency, 1.5 a-perp at the start); measured Kohn and breathing periods match
   2pi/sqrt(1+eps) and pi when enough swings are in. */
const pre = `const C = window.__cw; if (!C || C.prep || !C.gr) return true;
  const S = C.S, g = C.gr, rd = (label) => { for (const d of document.querySelectorAll('#out dt')) if (d.textContent.indexOf(label) === 0) return d.nextElementSibling.textContent.replace(/\\u2212/g, '-'); return null; };
  const F = 20, W = 2 * Math.PI * F, HB = 6.62607015e-34 / (2 * Math.PI), MM = 86.909181 * 1.66053906892e-27, A0 = 5.29177210544e-11;
  const AP = Math.sqrt(HB / (MM * W)), G = S.inter ? Math.sqrt(8 * Math.PI) * S.N * 98.98 * A0 / Math.sqrt(HB / (MM * 2 * Math.PI * 1000)) : 0;
  const nm = () => { let s = 0; for (let q = 0; q < g.re.length; q++) s += g.re[q] * g.re[q] + g.im[q] * g.im[q]; return s * g.dx * g.dx; };
`;
module.exports = {
  checks: [
    { name: "the grid has no NaN and the norm is 1 (no absorber) or only falls (absorber)", fn: `(() => { ${pre}
      for (let q = 0; q < g.re.length; q += 7) if (!isFinite(g.re[q]) || !isFinite(g.im[q])) return 'NaN or Infinity in the wavefunction at ' + q;
      const n = nm(), W0 = (window.__cwn = window.__cwn || { g: null, n: 0 });
      if (document.querySelector('#presets [aria-pressed=true]').dataset.p === 'split') { if (W0.g === g && n > W0.n + 1e-9) return 'with the absorber the norm rose from ' + W0.n + ' to ' + n; W0.g = g; W0.n = n; return n <= 1 + 1e-6 ? true : 'norm ' + n; }
      return Math.abs(n - 1) < 1e-6 ? true : 'norm is ' + n + ', should be 1'; })()` },
    { name: "readouts: mu/h, Thomas-Fermi radius and healing length follow from the coupling; Time equals t", fn: `(() => { ${pre}
      if (S.run) return true;   /* readouts refresh on a 250 ms timer while it runs */
      const mu = rd('Chemical potential'), t = rd('Time'); if (mu === null) return true;
      const ms = S.t / W * 1000, tm = parseFloat(t);
      if (Math.abs(tm - ms) > 0.051) return 'Time shows ' + t + ', t = ' + ms.toFixed(2) + ' ms';
      if (G > 0) {
        const tf = Math.sqrt(2 * Math.sqrt(G / Math.PI)) * AP * 1e6, xi = AP * 1e6 / Math.sqrt(2 * Math.sqrt(G / Math.PI)), r = rd('Cloud radius'), h = rd('Healing length');
        if (Math.abs(parseFloat(r) - tf) > 0.006 * tf + 0.051) return 'TF radius shows ' + r + ', physics gives ' + tf.toFixed(2) + ' um';
        if (Math.abs(parseFloat(h) - xi) > 0.006 * xi + 0.0051) return 'healing length shows ' + h + ', physics gives ' + xi.toFixed(3) + ' um';
        if (parseFloat(mu) < F - 0.6) return 'mu/h = ' + mu + ' is below the oscillator ground state ' + F + ' Hz';
      } else if (Math.abs(parseFloat(mu) - F) > 0.6) return 'ideal gas mu/h shows ' + mu + ', should be ' + F + ' Hz';
      return true; })()` },
    { name: "Kohn: a slosh with a round trap never leaves its start amplitude; measured period matches 1/f", fn: `(() => { ${pre}
      if (S.preset !== 'slosh' || S.t === 0) return true;
      const tr = C.trace; if (!tr.length) return true;
      let mx = 0; for (const q of tr) mx = Math.max(mx, Math.abs(q[1]));
      if (mx > 1.5 * 1.03 + 0.02) return 'the center reached ' + mx.toFixed(3) + ' a-perp, but it started at 1.5 and the trap is harmonic';
      const p = C.period(); if (S.blind || !isFinite(p) || S.eps !== 0 || S.gam > 0 || tr.length < 40) return true;
      return Math.abs(p - 2 * Math.PI) < 0.06 * 2 * Math.PI ? true : 'measured period ' + p.toFixed(3) + ' /omega, Kohn says ' + (2 * Math.PI).toFixed(3); })()` },
    { name: "breathing: measured period is pi/omega (2 omega) once a few swings are in", fn: `(() => { ${pre}
      if (S.preset !== 'breathe' || S.gam > 0 || S.eps !== 0) return true;
      const p = C.period(); if (!isFinite(p) || C.trace.length < 40) return true;
      return Math.abs(p - Math.PI) < 0.08 * Math.PI ? true : 'breathing period ' + p.toFixed(3) + ', expected ' + Math.PI.toFixed(3); })()` },
  ],
  steps: [
    { name: 'Every setup played, then N to its limits and interactions off mid run, back to Split', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), C = window.__cw;
      for (const k of ['collide', 'vortex', 'pair', 'stir', 'breathe', 'slosh', 'split']) {
        document.querySelector('#presets [data-p=' + k + ']').click(); for (let i = 0; i < 40 && C.prep; i++) await pause(100);
        if (!C.S.run) document.getElementById('play').click(); await pause(500);
      }
      const n = document.getElementById('sN'), ch = document.getElementById('chkInt');
      for (const v of ['10000', '500']) { n.value = v; n.dispatchEvent(new Event('change', { bubbles: true })); for (let i = 0; i < 40 && C.prep; i++) await pause(100); await pause(300); }
      ch.click(); for (let i = 0; i < 40 && C.prep; i++) await pause(100); if (!C.S.run) document.getElementById('play').click(); await pause(500); ch.click();
      document.querySelector('#presets [data-p=split]').click(); await pause(800);
    })()` },
    { name: 'Stir: ellipticity, rotation and damping to the extremes while running; press Play during the ground state search', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), C = window.__cw, set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=stir]').click(); document.getElementById('play').click(); document.getElementById('play').click();
      for (let i = 0; i < 60 && C.prep; i++) await pause(100);
      document.getElementById('play').click(); await pause(300);
      for (const [id, v] of [['sW', '0.95'], ['sE', '0.15'], ['sG', '0'], ['sG', '0.1'], ['sW', '0'], ['sE', '0'], ['sG', '0.05']]) { set(id, v); await pause(300); }
      document.getElementById('reset').click(); await pause(300);
    })()` },
  ],
};
