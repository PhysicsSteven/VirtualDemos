/* Known values for the break-it test (tools/breakit.cjs), units. There is no window hook: the page code sits in a closure, so the checks
   read the visible controls and readouts and recompute them from first principles.
   Convert units: the readout equals value × (SI per from) ÷ (SI per to) with the exact factors (inch 0.0254 m, mile 1609.344 m,
   Julian year 365.25 d, light year = c × Julian year, eV 1.602176634e-19 J, cal 4.184 J, kWh 3.6 MJ, BTU 1055.05585262 J); text that is
   not a number is refused. Significant figures: the shown result is the calculator value rounded by the rule (fewest significant figures
   for × and ÷, fewest decimal places for + and −), half away from zero. Dimensional analysis: the powers it shows for each question are
   the ones that make the dimensions match (pendulum L^1/2 g^-1/2 ...), and "They match." appears exactly when the dimensions do. Fermi: the
   range is the product of the low values and of the high values. Zoom: the readout width is 10^slider, inside the slider's limits.
   Everywhere: no Infinity or NaN shown, and scientific notation keeps its mantissa from 1 up to (not including) 10. */
const shown = (id) => `document.getElementById('${id}')`;
const PARSE = `const num = (t) => { t = String(t).replace(/−/g, '-').replace(/,/g, ''); const m = t.match(/(-?[\\d.]+(?:e[+-]?\\d+)?)(?:\\s*×\\s*10\\^?([⁰¹²³⁴⁵⁶⁷⁸⁹⁻\\-+]+|[\\d-]+))?/i);
    if (!m) return NaN; let x = parseFloat(m[1]); if (m[2]) { const sup = '⁰¹²³⁴⁵⁶⁷⁸⁹'; const e = m[2].replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => sup.indexOf(c)); x *= 10 ** parseInt(e, 10); } return x; };
  const vis = (id) => { const e = document.getElementById(id); return e && !e.hidden && e.offsetParent !== null; };`;
module.exports = {
  checks: [
    { name: "Convert units: readout equals value × exact factors; text that is not a number is refused", fn: `(() => { ${PARSE}
      if (!vis('pConvert')) return true;
      const F = { length: { m: 1, km: 1e3, cm: 1e-2, mm: 1e-3, in: 0.0254, ft: 0.3048, yd: 0.9144, mi: 1609.344, 'light year': 299792458 * 31557600 },
        speed: { 'm/s': 1, 'km/h': 1 / 3.6, 'mi/h': 1609.344 / 3600, 'ft/s': 0.3048 }, mass: { kg: 1, g: 1e-3, lb: 0.45359237, oz: 0.45359237 / 16, 'metric ton': 1000 },
        energy: { J: 1, kJ: 1e3, cal: 4.184, kcal: 4184, kWh: 3.6e6, eV: 1.602176634e-19, BTU: 1055.05585262 }, time: { s: 1, min: 60, h: 3600, day: 86400, year: 365.25 * 86400 } };
      const kind = document.querySelector('#cKind [aria-pressed=true]').dataset.k, from = document.getElementById('cFrom').value, to = document.getElementById('cTo').value;
      const raw = document.getElementById('cVal').value.trim(), out = document.getElementById('cOut').textContent;
      if (document.getElementById('labBlind') && document.getElementById('labBlind').checked) return true;
      if (!/^[+\\-−]?(\\d+\\.?\\d*|\\.\\d+)(e[+\\-−]?\\d+)?$/i.test(raw)) return /Enter a number/.test(out) ? true : '"' + raw + '" is not a number but the readout says "' + out + '"';
      const v = parseFloat(raw.replace('−', '-')); if (!isFinite(v)) return /Enter a number/.test(out) ? true : 'value overflows but the readout says "' + out + '"';
      const want = v * F[kind][from] / F[kind][to]; if (!isFinite(want) || (want !== 0 && Math.abs(want) < 1e-290)) return true;
      const got = num(out.replace(/^= /, ''));
      return Math.abs(got - want) <= 2e-5 * Math.abs(want) + 1e-300 ? true : v + ' ' + from + ' → ' + to + ' reads "' + out + '", should be ' + want; })()` },
    { name: "Significant figures: the shown result is the calculator value rounded by the rule (half away from zero)", fn: `(() => { ${PARSE}
      if (!vis('pSig') || (document.getElementById('labBlind') && document.getElementById('labBlind').checked)) return true;
      const info = (s) => { const t = s.trim().replace('−', '-').toLowerCase(), m = t.match(/^([+-]?)(\\d*)(?:\\.(\\d*))?(?:e([+-]?\\d+))?$/); if (!m || (!m[2] && !m[3])) return null;
        const frac = m[3] == null ? null : m[3], ex = m[4] ? +m[4] : 0, all = ((m[2] || '') + (frac || '')).replace(/^0+/, '');
        let sig; if (frac != null) sig = all.length || 1; else { const c = (m[2] || '').replace(/^0+/, ''); sig = Math.max(1, c.replace(/0+$/, '').length); }
        return { v: parseFloat(t), sig, dec: (frac == null ? 0 : frac.length) - ex }; };
      const A = info(document.getElementById('sA').value), B = info(document.getElementById('sB').value), op = document.getElementById('sOp').value; if (!A || !B) return true;
      const raw = op === '*' ? A.v * B.v : op === '/' ? A.v / B.v : op === '+' ? A.v + B.v : A.v - B.v; if (!isFinite(raw) || Math.abs(raw) > 1e15 || (raw !== 0 && Math.abs(raw) < 1e-6)) return true;
      const away = (x, d) => { const f = 10 ** d, s = Math.sign(x); return s * Math.round(Math.abs(x) * f * (1 + 1e-12)) / f; };
      let want; if (op === '*' || op === '/') { const n = Math.min(A.sig, B.sig), e = raw === 0 ? 0 : Math.floor(Math.log10(Math.abs(raw))); want = away(raw, n - 1 - e); } else want = away(raw, Math.min(A.dec, B.dec));
      const ok = document.querySelector('#sOut .ok'); if (!ok) return 'no result shown';
      const got = num(ok.textContent.replace(/\\^/g, ''));
      return Math.abs(got - want) <= 1e-9 * Math.max(Math.abs(want), 1e-12) ? true : A.v + ' ' + op + ' ' + B.v + ' = ' + raw + ' shows ' + ok.textContent + ', rule gives ' + want; })()` },
    { name: "Dimensional analysis: shown powers are the right ones, and 'They match.' appears exactly when the dimensions match", fn: `(() => { ${PARSE}
      if (!vis('pDims') || (document.getElementById('labBlind') && document.getElementById('labBlind').checked)) return true;
      const DIM = { L: [0, 1, 0], m: [1, 0, 0], g: [0, 1, -2], T: [1, 1, -2], 'μ': [1, -1, 0], h: [0, 1, 0], GM: [0, 3, -2], r: [0, 1, 0], k: [1, 0, -2], A: [0, 1, 0] };
      const ANS = { pendulum: [{ L: 0.5, m: 0, g: -0.5 }, [0, 0, 1]], spring: [{ m: 0.5, k: -0.5, A: 0 }, [0, 0, 1]], wave: [{ T: 0.5, 'μ': -0.5 }, [0, 1, -1]], orbit: [{ r: 1.5, GM: -0.5 }, [0, 0, 1]], fall: [{ h: 0.5, g: -0.5, m: 0 }, [0, 0, 1]] };
      const q = document.querySelector('#dQ [aria-pressed=true]').dataset.q, [sol, tgt] = ANS[q], labs = [...document.querySelectorAll('#dExps label')];
      const syms = labs.map((l) => l.textContent.replace(/^power of /, '').replace(/ \\(.*$/, ''));
      if (JSON.stringify(syms.sort()) !== JSON.stringify(Object.keys(sol).sort())) return 'variables ' + syms + ' for ' + q;
      const ex = [...document.querySelectorAll('#dExps input')].map((i) => +i.value), vs = labs.map((l) => l.textContent.replace(/^power of /, '').replace(/ \\(.*$/, ''));
      const d = [0, 1, 2].map((i) => vs.reduce((s, v, j) => s + ex[j] * DIM[v][i], 0)), match = d.every((x, i) => Math.abs(x - tgt[i]) < 1e-9);
      const txt = document.getElementById('dOut').textContent;
      if (match !== /They match/.test(txt) || match === /Not yet/.test(txt)) return 'guess ' + vs.map((v, j) => v + '^' + ex[j]) + ' has dimensions ' + d + ' (needs ' + tgt + ') but the page says "' + (/They match/.test(txt) ? 'They match' : 'Not yet') + '"';
      if (document.getElementById('dOut').dataset.shown) { const m = txt.match(/Powers: (.*?)(?:t|v) = /); if (!m) return 'no powers line';
        for (const part of m[1].split(', ')) { const [s, val] = part.split(': '); if (!(s in sol)) return 'unknown variable ' + s; if (Math.abs(parseFloat(val.replace('−', '-')) - sol[s]) > 1e-9) return q + ': power of ' + s + ' shown as ' + val + ', should be ' + sol[s]; } }
      return true; })()` },
    { name: "Fermi estimates: the range is the product of the low values and of the high values; the order of magnitude is the geometric middle's", fn: `(() => { ${PARSE}
      if (!vis('pFermi') || (document.getElementById('labBlind') && document.getElementById('labBlind').checked)) return true;
      const lo = [...document.querySelectorAll('[id^=fl]')].map((e) => e.value), hi = [...document.querySelectorAll('[id^=fh]')].map((e) => e.value);
      if (lo.concat(hi).some((v) => !(parseFloat(v) > 0 && isFinite(parseFloat(v))))) return true;
      const pl = lo.reduce((q, v) => q * parseFloat(v), 1), ph = hi.reduce((q, v) => q * parseFloat(v), 1); if (!isFinite(pl * ph) || pl * ph === 0) return true;
      const t = document.getElementById('fOut').textContent, m = t.match(/^Between (.*?) and (.*?): about 10(\\S+)/); if (!m) return 'unreadable estimate: ' + t;
      const a = num(m[1]), b = num(m[2]);
      if (Math.abs(a - pl) > 6e-3 * pl) return 'low shows ' + m[1] + ', product is ' + pl; if (Math.abs(b - ph) > 6e-3 * ph) return 'high shows ' + m[2] + ', product is ' + ph;
      const e = Math.round(Math.log10(Math.sqrt(pl * ph))), shownE = num('1 × 10' + m[3]) ; const got = Math.round(Math.log10(shownE));
      return got === e || Math.abs(Math.log10(Math.sqrt(pl * ph)) - (e + 0.5)) < 1e-3 ? true : 'about 10^' + got + ' but the geometric middle is 10^' + Math.log10(Math.sqrt(pl * ph)).toFixed(2); })()` },
    { name: "Scale of things: readout width is 10^slider and the slider stays within its limits", fn: `(() => { ${PARSE}
      if (!vis('sZoom')) return true;
      const z = parseFloat(document.getElementById('sZoom').value); if (!(z >= -15.3 - 1e-9 && z <= 27 + 1e-9)) return 'slider value ' + z;
      const w = num(document.getElementById('oZoom').textContent), want = 10 ** z; return Math.abs(w - want) <= 0.055 * want ? true : 'readout ' + document.getElementById('oZoom').textContent + ' but 10^' + z + ' = ' + want; })()` },
    { name: "No Infinity or NaN in any readout, and every scientific notation mantissa is 1 up to (not including) 10", fn: `(() => {
      for (const id of ['cOut', 'cChain', 'sOut', 'fOut', 'oZoom', 'dOut']) { const e = document.getElementById(id); if (!e || e.offsetParent === null) continue; const t = e.textContent;
        if (/Infinity|NaN/.test(t)) return id + ' shows "' + t.slice(0, 90) + '"';
        const m = t.match(/(^|[^\\d.])(\\d{2,}\\.\\d+) × 10/); if (m) return id + ' shows a mantissa of ' + m[2] + ': "' + t.slice(0, 90) + '"'; }
      return true; })()` },
  ],
  steps: [
    { name: 'Convert: 999999.96 m to m (sci rounding up to 10.0 × 10⁵), after 1,5 typed as a value', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#tabs [data-t=convert]').click(); document.querySelector('#cKind [data-k=length]').click(); set('cFrom', 'm'); set('cTo', 'm');
      set('cVal', '1,5'); await pause(150); set('cVal', '999999.96'); await pause(150); })()` },
    { name: 'Convert: every kind, light year to inch and eV to BTU at the extremes (1e-300, 1e300), then back to 65 mi/h', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#tabs [data-t=convert]').click();
      for (const [k, f, t] of [['length', 'light year', 'in'], ['energy', 'eV', 'BTU'], ['time', 'year', 's'], ['mass', 'oz', 'metric ton'], ['speed', 'mi/h', 'm/s']]) { document.querySelector('#cKind [data-k=' + k + ']').click(); set('cFrom', f); set('cTo', t);
        for (const v of ['1', '1e300', '1e-300', '-7', '0', '1e400', '']) { set('cVal', v); await pause(30); } }
      set('cVal', '65'); await pause(100); })()` },
    { name: 'Significant figures: exponents past 100 decimals (1e-150 + 1e-150), overflow (1e300 × 1e300), divide by zero, then a half case -1 + -1.5', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#tabs [data-t=sig]').click();
      for (const [a, o, b] of [['1e-150', '+', '1e-150'], ['1e-101', '*', '2'], ['1e300', '*', '1e300'], ['5', '/', '0'], ['123456789012345678901234', '+', '1'], ['-1', '+', '-1.5']]) { set('sOp', o); set('sA', a); set('sB', b); await pause(80); } })()` },
    { name: 'Fermi: clear a factor, zero it, make it negative and huge, switch question, then restore the defaults', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#tabs [data-t=fermi]').click();
      for (const q of ['beats', 'walk', 'breaths']) { document.querySelector('#fQ [data-f=' + q + ']').click(); for (const v of ['', '0', '-3', '1e308', '1e-320']) { set('fl0', v); set('fh0', v); await pause(30); } }
      document.querySelector('#fQ [data-f=beats]').click(); await pause(100); set('fl0', ''); await pause(100); })()` },
    { name: 'Dimensional analysis: set the right powers for each question with the answer shown, then break one power and switch questions', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#tabs [data-t=dims]').click();
      const P = { pendulum: [0.5, 0, -0.5], spring: [0.5, -0.5, 0], wave: [0.5, -0.5], orbit: [1.5, -0.5], fall: [0.5, -0.5, 0] };
      for (const q in P) { document.querySelector('#dQ [data-q=' + q + ']').click(); P[q].forEach((v, j) => set('dx' + j, v)); document.getElementById('dSolve').click(); await pause(60); }
      set('dx0', -2); await pause(60); document.querySelector('#dQ [data-q=pendulum]').click(); await pause(60); })()` },
    { name: 'Scale: slider to both limits, Go to every stop, Fly in to the limit and Fly out, then wheel far out and back with the Ruler view in between', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), z = document.getElementById('sZoom');
      document.querySelector('#tabs [data-t=scale]').click();
      for (const v of [-15.3, 27, -15.3, 5.995, 0.6]) { z.value = v; z.dispatchEvent(new Event('input', { bubbles: true })); await pause(40); }
      const g = document.getElementById('sGo'); for (let i = 1; i < g.options.length; i += 3) { g.value = g.options[i].value; g.dispatchEvent(new Event('change', { bubbles: true })); await pause(120); }
      document.getElementById('flyIn').click(); await pause(2500); document.querySelector('#scaleView [data-v=ruler]').click(); await pause(100); document.querySelector('#scaleView [data-v=zoom]').click();
      document.getElementById('flyOut').click(); await pause(1500); document.getElementById('flyOut').click(); await pause(100); })()` },
  ],
};
