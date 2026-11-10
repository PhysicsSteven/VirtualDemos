/* Known values for the break-it test (tools/breakit.cjs), energy-sources. No debug hook: the checks read the readouts and
   recompute from the sliders. Energy delivered = 10^s kWh (3.6 MJ per kWh); the heat from a heat engine is E / efficiency;
   uranium 235 beats coal per kilogram by 200 MeV x N_A / (0.235 kg) / 27 MJ = 3.04e6; the panel area is E / (sun x 0.2 x 86400 s);
   gasoline litres are E / (46 MJ/kg x efficiency if electric) / 0.74; the dam water volume is E / (g h 0.9) / 1000. Scientific
   notation text never shows a mantissa of 10 or more (9.96 x 10^4 must not print as "10.0 x 10^4"); no "Infinity" or "NaN". */
const pre = `const $ = (id) => document.getElementById(id); if (!$('out') || !$('sE')) return true;
  const SUPD = { '⁻': '-', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
  const parse = (s) => { s = s.replace(/\\u2212/g, '-'); const m = s.match(/^(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; return +m[1] * (m[2] ? Math.pow(10, +m[2].split('').map((c) => SUPD[c]).join('')) : 1); };
  const rd = (lab) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(lab)) return d.querySelector('dd').textContent; return null; };
  const om = $('oE').textContent.match(/^([\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))? (Wh|kWh|MWh)$/), E = om ? parse(om[1] + (om[2] ? ' × 10' + om[2] : '')) * ({ Wh: 1e-3, kWh: 1, MWh: 1e3 })[om[3]] * 3.6e6 : NaN, eta = +$('sEta').value, elec = $('elec').checked, h = +$('sHd').value, sun = +$('sSun').value;
  const near = (got, want, tol, what) => (Math.abs(got / want - 1) <= tol ? true : what + ' shows ' + got + ', physics gives ' + want);
`;
module.exports = {
  checks: [
    { name: 'readouts: energy in MJ, heat needed, uranium vs coal, panel area, gasoline litres, dam water', fn: `(() => { ${pre}
      if ($('labBlind').checked || !isFinite(E)) return true;
      let r; const e = rd('Energy delivered'); if ((r = near(parse(e), E / 1e6, 0.011, 'energy MJ')) !== true) return r;
      const hk = rd('As heat from'); if (elec && (r = near(parse(hk), E / eta / 1e6, 0.011, 'heat MJ')) !== true) return r;
      const u = 200 * 1.602176634e-13 * 6.02214076e23 / 0.235 / 27e6; if ((r = near(parse(rd('Uranium 235 vs coal')), u, 0.0051, 'uranium vs coal')) !== true) return r;
      if ((r = near(parse(rd('Solar panel area')), E / (sun * 0.2 * 86400), 0.051, 'panel area')) !== true) return r;
      if ((r = near(parse(rd('Gasoline volume')), E / (46e6 * (elec ? eta : 1)) / 0.74, 0.051, 'gasoline L')) !== true) return r;
      if ((r = near(parse(rd('Water volume')), E / (9.81 * h * 0.9) / 1000, 0.051, 'water m3')) !== true) return r;
      return true; })()` },
    { name: 'scientific notation never shows a mantissa of 10 or more', fn: `(() => { const bad = (document.body.innerText.match(/\\b\\d{2,}\\.\\d+ × 10[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/) || [])[0]; return bad ? 'the page shows "' + bad + '"' : window.__esbad ? 'scan found "' + window.__esbad + '"' : true; })()` },
  ],
  steps: [
    { name: 'sweep the energy slider over its whole range, looking for odd notation in the readouts', fn: `(async () => {
      const s = document.getElementById('sE'), pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (let v = -3; v <= 7.0001; v += 0.05) { s.value = v.toFixed(2); s.dispatchEvent(new Event('input', { bubbles: true }));
        const m = (document.getElementById('out').innerText + document.getElementById('oE').textContent).match(/\\b\\d{2,}\\.\\d+ × 10[⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+/); if (m && !window.__esbad) window.__esbad = m[0] + ' at slider ' + v.toFixed(2);
        await pause(5); }
      s.value = '1.48'; s.dispatchEvent(new Event('input', { bubbles: true }));
    })()` },
    { name: 'every wind, dam, sun and efficiency value with electricity on and off, in Blind', fn: `(async () => {
      const $ = (id) => document.getElementById(id), pause = (ms) => new Promise((r) => setTimeout(r, ms));
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      for (const blind of [false, true]) { if ($('labBlind').checked !== blind) $('labBlind').click();
        for (const el of [true, false]) { if ($('elec').checked !== el) $('elec').click();
          for (const [a, b, c, d] of [[0.2, 10, 3, 50], [0.6, 300, 20, 300], [0.35, 100, 10, 200]]) { set('sEta', a); set('sHd', b); set('sWv', c); set('sSun', d); await pause(20); } } }
      if ($('labBlind').checked) $('labBlind').click(); if (!$('elec').checked) $('elec').click();
    })()` },
  ],
};
