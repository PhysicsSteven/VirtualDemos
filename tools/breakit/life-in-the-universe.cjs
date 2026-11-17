/* Known values for the break-it test (tools/breakit.cjs), life-in-the-universe. The checks recompute what the readouts show:
   Clock: each event sits at (1 − ago/age) of the clock (Earth 4.6 billion years old in the class setup).
   Zones: the habitable zone is 0.95 √L to 1.4 √L au; the no greenhouse temperature is 254.58 K × L^¼ / √d (S = 1361 W/m², albedo 0.30,
   σ from CODATA 2022); the lifetime is 10 billion years × M/L. Drake: N = R* fp ne fl fi fc L from the sliders, the spacing √(π 50,000² / N) ly.
   Everywhere: no NaN or Infinity in a readout. */
const MATH = `const num = (t) => { t = String(t).replace(/−/g, '-').replace(/,/g, ''); const m = t.match(/(-?[\\d.]+)(?:\\s*×\\s*10([⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+))?/); if (!m) return NaN; let x = parseFloat(m[1]); if (m[2]) x *= 10 ** parseInt(m[2].replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)), 10); return x; };
  const dd = (label) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(label)) return d.querySelector('dd').textContent; return null; };
  const close = (got, want, rel) => Math.abs(got - want) <= rel * Math.abs(want);`;
module.exports = {
  checks: [
    { name: 'Zones: the zone is 0.95 √L to 1.4 √L, the temperature 254.58 K L^¼/√d, the lifetime 10 M/L billion years, from the readouts shown', fn: `(() => { ${MATH}
      const H = window.__life; if (!H || H.S.mode !== 'zone' || H.S.blind || H.S.run) return true;
      const L = num(dd('Luminosity L')), M = num(dd('Star mass M')), d = num(dd('Planet at')), z = dd('Habitable zone').split(' to ').map(num), T = num(dd('Temperature, no greenhouse'));
      if (!close(z[0], 0.95 * Math.sqrt(L), 0.006) || !close(z[1], 1.4 * Math.sqrt(L), 0.006)) return 'zone ' + z + ' for L ' + L;
      if (!close(T, 254.58 * L ** 0.25 / Math.sqrt(d), 0.008)) return 'temperature ' + T + ' K for L ' + L + ' at ' + d + ' au';
      const yes = dd('In the zone?'); if ((d >= z[0] * 1.004 && d <= z[1] * 0.996 && !/yes/.test(yes)) || ((d < z[0] * 0.996 || d > z[1] * 1.004) && /yes/.test(yes))) return 'In the zone? says ' + yes;
      return true; })()` },
    { name: 'Drake: N is the product of the factors, the spacing √(π 50,000² / N)', fn: `(() => { ${MATH}
      const H = window.__life; if (!H || H.S.mode !== 'drake' || H.S.blind) return true;
      const F = H.S.dk, N = F.R * F.fp * F.ne * F.fl * F.fi * F.fc * F.L, shown = num(dd('N = that'));
      if (!close(shown, N, 0.006)) return 'N reads ' + shown + ', should be ' + N;
      if (Math.abs(H.drake(F) - N) > 1e-9 * N) return 'drake() is not the product';
      if (N >= 1) { const s = num(dd('Typical spacing')); if (!close(s, Math.sqrt(Math.PI * 5e4 * 5e4 / N), 0.006)) return 'spacing reads ' + s; }
      return true; })()` },
    { name: 'Clock: class example events at their lesson minutes (life 17.9, dinosaurs 73.9)', fn: `(() => {
      const H = window.__life; if (!H) return true; const T = 4.6e9;
      const a = H.onClock(3.5e9, T, 75), b = H.onClock(66e6, T, 75);
      return Math.abs(a - 17.93) < 0.01 && Math.abs(b - 73.92) < 0.01 ? true : 'clock minutes ' + a + ', ' + b; })()` },
    { name: 'No NaN, Infinity or undefined in a readout', fn: `(() => { const t = document.getElementById('out').textContent; return /NaN|Infinity|undefined/.test(t) ? 'readout shows: ' + t.slice(0, 200) : true; })()` },
  ],
  steps: [
    { name: 'Every setup in every mode, played for a while, paused', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__life;
      for (const k of Object.keys(H.PRE)) { H.setMode(H.PRE[k].mode); H.applyPreset(k); H.setRun(true); await pause(700); H.setRun(false); await pause(60); }
      H.setMode('clock'); H.applyPreset('classclock'); await pause(60); })()` },
    { name: 'Zones: star mass and planet distance to both ends of their sliders, every star', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__life, set = (el, v) => { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); };
      H.setMode('zone'); const st = document.getElementById('selStar');
      for (const o of st.options) { set(st, o.value); await pause(40); for (const id of ['sMass', 'sDist']) { const e = document.getElementById(id); if (e.disabled) continue; for (const v of [e.min, e.max, e.min]) { set(e, v); await pause(25); } } }
      H.applyPreset('sunzone'); await pause(60); })()` },
    { name: 'Drake: every factor to its extremes (all low, all high), run the galaxy at each, then the class example', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), H = window.__life, ids = ['dR', 'dFp', 'dNe', 'dFl', 'dFi', 'dFc', 'dL'];
      H.setMode('drake'); for (const end of ['min', 'max']) { for (const id of ids) { const e = document.getElementById(id); e.value = e[end]; e.dispatchEvent(new Event('input', { bubbles: true })); } H.setRun(true); await pause(900); H.setRun(false); await pause(60); }
      H.applyPreset('ex1k'); await pause(60); })()` },
  ],
};
