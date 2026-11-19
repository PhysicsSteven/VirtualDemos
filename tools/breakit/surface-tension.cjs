/* Known values for the break-it test (tools/breakit.cjs), surface-tension. The checks recompute from the liquid table what the readouts
   show: tubes h = 2γcosθ/(ρgr) for each of r, 2r, 4r; drops 2γ/r or 4γ/r and the two bubbles' 4γ/R; needle or strider 2γL against the
   weight; the film F = 2γl. g = 9.81 m/s². Everywhere: no NaN, Infinity or undefined in a readout. */
const MATH = `const G = 9.81, D2R = Math.PI / 180, H = window.__st;
  const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹', U = { m: 1, cm: 1e-2, mm: 1e-3, 'μm': 1e-6, nm: 1e-9, Pa: 1, kPa: 1e3, MPa: 1e6, N: 1, mN: 1e-3 };
  const si = (t) => { t = String(t).replace(/−/g, '-').replace(/,/g, ''); const m = t.match(/(-?[\\d.]+)(?:\\s*×\\s*10([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+))?\\s*(μm|nm|mm|cm|mN|MPa|kPa|Pa|m|N)?/); if (!m) return NaN;
    let x = parseFloat(m[1]); if (m[2]) x *= 10 ** parseInt(m[2].replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => SUP.indexOf(c)), 10); return x * (m[3] ? U[m[3]] : 1); };
  const dd = (label) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(label)) return d.querySelector('dd').textContent; return null; };
  const close = (a, b, rel) => Math.abs(a - b) <= rel * Math.abs(b) + 1e-12;`;
module.exports = {
  checks: [
    { name: 'Tubes: each predicted h equals 2γcosθ/(ρgr) to 3 figures', fn: `(() => { ${MATH}
      if (!H || H.S.scene !== 'tubes' || H.S.blind) return true;
      const L = H.LIQ[H.S.T.liq], th = si(dd('Contact angle θ')), ts = H.tubeState(), tags = ['r', '2r', '4r'];
      for (let i = 0; i < ts.length; i++) { const want = 2 * L.gam * Math.cos(th * D2R) / (L.rho * G * ts[i].r), got = si(dd('Predicted h, tube ' + tags[i]));
        if (Math.abs(want) < 1e-9) { if (Math.abs(got) > 1e-6) return 'tube ' + tags[i] + ' reads ' + got + ', should be 0'; continue; }
        if (!close(got, want, 6e-3)) return 'tube ' + tags[i] + ' reads ' + got + ' m, should be ' + want + ' m'; }
      return true; })()` },
    { name: 'Drops: the pressure is 2γ/r for a drop, 4γ/r for a bubble; each bubble shows 4γ/R', fn: `(() => { ${MATH}
      if (!H || H.S.scene !== 'drops' || H.S.blind) return true;
      const g = H.LIQ[H.S.B.liq].gam, bub = H.S.B.kind === 'bubble', want = (bub ? 4 : 2) * g / H.S.B.rd, got = si(dd(bub ? 'Pressure inside 4γ/r' : 'Pressure inside 2γ/r'));
      if (!close(got, want, 6e-3)) return 'pressure reads ' + got + ' Pa, should be ' + want;
      const b = H.bubbleNow(), p1 = si(dd('Left 4γ/R')), p2 = si(dd('Right 4γ/R'));
      if (!close(p1, 4 * g / b.R1, 6e-3) || !close(p2, 4 * g / b.R2, 6e-3)) return 'bubble pressures ' + p1 + ', ' + p2 + ' against ' + 4 * g / b.R1 + ', ' + 4 * g / b.R2;
      return true; })()` },
    { name: 'Resting on water: the most the surface holds is 2γL; it rests only when the weight is less', fn: `(() => { ${MATH}
      if (!H || H.S.scene !== 'surf' || H.S.blind) return true;
      const s = H.surfNow(), g = H.LIQ[H.S.N.liq].gam, max = si(dd('Most the surface holds'));
      if (!close(max, 2 * g * s.Lc, 6e-3)) return 'most held reads ' + max + ' N, should be ' + 2 * g * s.Lc;
      const w = si(dd('Weight w')); if (!close(w, s.w, 6e-3)) return 'weight reads ' + w + ', should be ' + s.w;
      return (s.w <= 2 * g * s.Lc) === s.holds ? true : 'rests or sinks is wrong'; })()` },
    { name: 'Soap film: F = 2γl', fn: `(() => { ${MATH}
      if (!H || H.S.scene !== 'film') return true;
      const want = 2 * H.LIQ[H.S.F.liq].gam * H.S.F.l, got = si(dd('Force on the wire'));
      return close(got, want, 6e-3) ? true : 'F reads ' + got + ' N, should be ' + want; })()` },
    { name: 'No NaN, Infinity or undefined in a readout', fn: `(() => { const t = document.getElementById('out').textContent; return /NaN|Infinity|undefined/.test(t) ? 'readout shows: ' + t.slice(0, 200) : true; })()` },
  ],
  steps: [
    { name: 'Every setup: apply, run a while, finish, Reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__st;
      for (const k of Object.keys(H.PRE)) { H.applyPreset(k); H.setRun(true); for (let i = 0; i < 30; i++) H.advance(0.05); H.redraw(); await pause(30); H.finish(); H.redraw(); await pause(30); H.setRun(false); }
      document.getElementById('restart').click(); H.redraw(); await pause(100); })()` },
    { name: 'Each scene: every slider in the setup card to its ends while running', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__st;
      for (const sc of ['tubes', 'drops', 'surf', 'film']) { H.setScene(sc); H.setRun(true);
        for (const el of document.querySelectorAll('.setup-card input[type=range]')) { if (el.offsetParent === null) continue; for (const v of [el.min, el.max, el.min, (+el.min + +el.max) / 2]) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); H.advance(0.05); H.redraw(); await pause(15); } }
        H.setRun(false); } await pause(60); })()` },
  ],
};
