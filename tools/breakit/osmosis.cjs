/* Known values for the break-it test (tools/breakit.cjs), osmosis. The checks recompute what the readouts show: x_rms = √(2Dt) and the lag
   time L²/6D; the U tube's Π = iΔcRT (R = NA kB) and Π/ρg; the saline osmolarity 2 × (10w/58.44) × 1000 mOsm/L; the Starling net
   filtration (Pc − Pt) − (πc − πt) at both ends. g = 9.81 m/s². Everywhere: no NaN, Infinity or undefined in a readout. */
const MATH = `const G = 9.81, R = 6.02214076e23 * 1.380649e-23, H = window.__os;
  const SUP = '⁰¹²³⁴⁵⁶⁷⁸⁹', U = { m: 1, cm: 1e-2, mm: 1e-3, 'μm': 1e-6, nm: 1e-9, Pa: 1, kPa: 1e3, MPa: 1e6 };
  const si = (t) => { t = String(t).replace(/−/g, '-').replace(/,/g, ''); const m = t.match(/(-?[\\d.]+)(?:\\s*×\\s*10([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+))?\\s*(μm|nm|mm|cm|MPa|kPa|Pa|m)?/); if (!m) return NaN;
    let x = parseFloat(m[1]); if (m[2]) x *= 10 ** parseInt(m[2].replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => SUP.indexOf(c)), 10); return x * (m[3] ? U[m[3]] : 1); };
  const dd = (label) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(label)) return d.querySelector('dd').textContent; return null; };
  const close = (a, b, rel) => Math.abs(a - b) <= rel * Math.abs(b) + 1e-12;`;
module.exports = {
  checks: [
    { name: 'Diffusion: √(2Dt) from the D and t on screen', fn: `(() => { ${MATH}
      if (!H || H.S.scene !== 'diff' || H.S.blind || H.S.D.d !== 'drop' || H.S.t <= 0 || H.S.run) return true;   /* while it runs the readouts lag the clock */
      const D = si(dd('Diffusion constant D')), want = Math.sqrt(2 * D * H.S.t), got = si(dd('√(2Dt)'));
      return close(got, want, 6e-3) ? true : '√(2Dt) reads ' + got + ' m, should be ' + want; })()` },
    { name: 'U tube: Π = iΔcRT and the column Π/ρg', fn: `(() => { ${MATH}
      if (!H || H.S.scene !== 'utube' || H.S.blind) return true;
      const u = H.uState(), Pi = u.i * (u.cR - u.cL) * R * u.T, got = si(dd('Osmotic pressure')), col = si(dd('Column it could hold'));
      if (!close(got, Pi, 6e-3)) return 'Π reads ' + got + ' Pa, should be ' + Pi;
      return close(col, Pi / (1000 * G), 6e-3) ? true : 'column reads ' + col + ', should be ' + Pi / (1000 * G); })()` },
    { name: 'Red cell: saline osmolarity 2 × 10w/58.44 × 1000 mOsm/L', fn: `(() => { ${MATH}
      if (!H || H.S.scene !== 'cell') return true;
      const t = dd('Outside'), m = t && t.replace(/,/g, '').match(/=\\s*([\\d.]+)/), want = 2 * (H.S.C.salt * 10 / 58.44) * 1000;
      return m && close(+m[1], want, 6e-3) || want < 1e-9 ? true : 'outside reads ' + t + ', should be ' + want; })()` },
    { name: 'Capillary: net filtration (Pc − Pt) − (πc − πt) at both ends', fn: `(() => { ${MATH}
      if (!H || H.S.scene !== 'cap' || H.S.blind) return true;
      const c = H.S.K, a = (c.Pa - c.Pt) - (c.pic - c.pit), v = (c.Pv - c.Pt) - (c.pic - c.pit), ga = parseFloat(dd('Net filtration, arterial').replace(/−/g, '-')), gv = parseFloat(dd('Net filtration, venous').replace(/−/g, '-'));   /* mm Hg */
      return Math.abs(ga - a) < 0.051 && Math.abs(gv - v) < 0.051 ? true : 'NFP reads ' + ga + ', ' + gv + ', should be ' + a + ', ' + v; })()` },
    { name: 'No NaN, Infinity or undefined in a readout', fn: `(() => { const t = document.getElementById('out').textContent; return /NaN|Infinity|undefined/.test(t) ? 'readout shows: ' + t.slice(0, 200) : true; })()` },
  ],
  steps: [
    { name: 'Every setup: apply, run a while, finish, Reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__os;
      for (const k of Object.keys(H.PRE)) { H.applyPreset(k); H.setRun(true); for (let i = 0; i < 30; i++) H.advance(0.05); H.redraw(); await pause(30); H.finish(); H.redraw(); await pause(30); H.setRun(false); }
      document.getElementById('restart').click(); H.redraw(); await pause(100); })()` },
    { name: 'Each scene: every slider in the setup card to its ends while running', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__os;
      for (const sc of ['diff', 'utube', 'cell', 'cap']) { H.setScene(sc); H.setRun(true);
        for (const el of document.querySelectorAll('.setup-card input[type=range]')) { if (el.offsetParent === null) continue; for (const v of [el.min, el.max, el.min, (+el.min + +el.max) / 2]) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); H.advance(0.05); H.redraw(); await pause(15); } }
        H.setRun(false); } await pause(60); })()` },
  ],
};
