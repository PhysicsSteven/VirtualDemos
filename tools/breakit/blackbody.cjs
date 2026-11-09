/* Known values for the break-it test (tools/breakit.cjs), blackbody. Hook: window.__blackbody (planck, wien, visibleFraction, S, ...).
   The readouts equal the physics of the live temperature and radius: peak = b/T (Wien), flux = σT⁴, L = 4πR²σT⁴/L☉ (a star only),
   the Planck curve peaks at the Wien wavelength, the visible share stays between 0 and 1, the slider output and the Temperature
   readout agree, a pressed preset holds its cited values (Sun 5772 K and 1 R☉ gives 1.00 L☉), and the U B V readouts are
   finite numbers at every temperature, the microwave background included (it read NaN once: the filter sums underflowed). */
const B = `const B = window.__blackbody; if (!B) return true; const S = B.S, $ = (i) => document.getElementById(i);
  const num = (s) => parseFloat(String(s).replace(/−/g, '-').replace(/,/g, ''));
  const sci = (s) => { const m = String(s).replace(/−/g, '-').replace(/,/g, '').match(/^(-?[\\d.]+)(?:×10(.+))?/); if (!m) return NaN;
    const SUPD = { '⁻': '-', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
    return parseFloat(m[1]) * Math.pow(10, m[2] ? parseInt(m[2].split('').map((c) => SUPD[c] || c).join('')) : 0); };
  const near = (g, w, t) => Math.abs(g - w) <= t * Math.max(Math.abs(w), 1e-300);
  const BW = 2.897771955e-3, SIG = 5.670374419e-8, LSUN = 3.828e26, RSUN = 6.957e8;
`;
module.exports = {
  checks: [
    { name: "Wien and Stefan-Boltzmann: readouts equal b/T, σT⁴ and L from the live T and R", fn: `(() => { ${B}
      const T = S.T, pk = $('rPk').textContent, m = pk.match(/^([\\d.]+) (nm|μm|mm)$/);
      if (!m) return 'peak readout "' + pk + '"';
      const got = parseFloat(m[1]) * { nm: 1e-9, 'μm': 1e-6, mm: 1e-3 }[m[2]];
      if (!near(got, BW / T, 6e-3)) return 'peak shows ' + pk + ', b/T = ' + BW / T + ' m at T = ' + T;
      if (!near(sci($('rF').textContent), SIG * T ** 4, 6e-3)) return 'flux shows ' + $('rF').textContent + ', σT⁴ = ' + SIG * T ** 4;
      if (S.star) { const L = 4 * Math.PI * (S.R * RSUN) ** 2 * SIG * T ** 4 / LSUN;
        if (!near(sci($('rL').textContent), L, 6e-3)) return 'luminosity shows ' + $('rL').textContent + ', should be ' + L + ' L☉ (T ' + T + ', R ' + S.R + ')'; }
      return true; })()` },
    { name: "temperature slider output, Temperature readout and state agree; T and R stay in range", fn: `(() => { ${B}
      if (!isFinite(S.T) || !isFinite(S.R) || S.T <= 0 || S.R <= 0) return 'T = ' + S.T + ', R = ' + S.R;
      const o = $('tempOut').textContent, r = $('rT').textContent;
      if (o !== r) return 'slider output "' + o + '" but readout "' + r + '"';
      if (!(Math.abs(num(r) - S.T) <= 0.5 + (S.T < 10 ? 5e-5 : 0))) return 'readout ' + r + ' but T = ' + S.T;
      return true; })()` },
    { name: "Planck curve peaks at the Wien wavelength; visible share is within 0 and 1", fn: `(() => { ${B}
      const T = S.T, l = B.wien(T), p = B.planck(l, T);
      if (!(p > B.planck(l * 0.97, T) && p > B.planck(l * 1.03, T))) return 'B(λ) at b/T = ' + l + ' is not the maximum for T = ' + T;
      if (!near(l, BW / T, 1e-7)) return 'wien(T) = ' + l + ', b/T = ' + BW / T;
      const v = B.visibleFraction(T); if (!(v >= 0 && v <= 1)) return 'visible fraction ' + v + ' at T = ' + T;
      return true; })()` },
    { name: "a pressed preset holds its cited values", fn: `(() => { ${B}
      const P = { sun: [5772, 1], betel: [3600, 760], rigel: [12100, 78.9], bulb: [2800], human: [305], cmb: [2.7255] };
      const b = document.querySelector('#presets [aria-pressed=true]'); if (!b) return true;
      const w = P[b.dataset.p]; if (!w) return 'unknown preset ' + b.dataset.p;
      if (Math.abs(S.T - w[0]) > 1e-9 * w[0]) return b.dataset.p + ' is pressed but T = ' + S.T + ', cited ' + w[0];
      if (w[1] !== undefined && S.R !== w[1]) return b.dataset.p + ' is pressed but R = ' + S.R + ', cited ' + w[1];
      if (b.dataset.p === 'sun' && !near(sci($('rL').textContent), 1, 5e-3)) return 'Sun preset shows L = ' + $('rL').textContent + ', should be 1.00 L☉';
      if (b.dataset.p === 'cmb' && S.star) return 'cosmic background should not be a star';
      return true; })()` },
    { name: "no readout, table or pin label shows NaN, Infinity or undefined, in either view", fn: `(() => { ${B}
      const bad = [...document.querySelectorAll('dd, output, .status3, #pins, #presetHint')].filter((e) => /NaN|Infinity|undefined/.test(e.textContent));
      if (bad.length) return bad.map((e) => (e.id || e.className) + ' = ' + e.textContent.trim()).join('; ') + ' at T = ' + S.T + ' K, view ' + S.view;
      if (S.view === 'ubv') for (const id of ['rBV', 'rUB', 'rBoV']) if (!isFinite(num($(id).textContent))) return id + ' reads "' + $(id).textContent + '" at T = ' + S.T + ' K';
      return true; })()` },
  ],
  steps: [
    { name: "cosmic background preset, then U B V filters, then other presets in that view", fn: `(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('[data-p=cmb]').click(); await w(150);
      document.querySelector('[data-view=ubv]').click(); await w(250);
      for (const p of ['human', 'bulb', 'rigel', 'cmb', 'sun']) { document.querySelector('[data-p=' + p + ']').click(); await w(200); }
      document.querySelector('[data-view=spec]').click(); await w(150); })()` },
    { name: "temperature slider to 300 K and 50,000 K with log axes and the lock on, radius to its limits, then Sun again", fn: `(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('[data-x=log]').click(); document.querySelector('[data-y=log]').click();
      const lk = document.getElementById('tLock'); if (!lk.checked) lk.click();
      for (const u of [0, 1000, 0, 500]) { set('temp', u); await w(150); }
      for (const u of [0, 1000, 500]) { set('rad', u); await w(150); }
      document.querySelector('[data-view=ubv]').click(); await w(200);
      for (const u of [0, 1000]) { set('temp', u); await w(150); }
      document.querySelector('[data-p=sun]').click(); await w(200); })()` },
    { name: "pin three curves, include the microwave background, switch views, clear", fn: `(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const p of ['sun', 'cmb', 'rigel', 'betel']) { document.querySelector('[data-p=' + p + ']').click(); await w(120); document.getElementById('pin').click(); await w(120); }
      document.querySelector('[data-view=ubv]').click(); await w(200); document.querySelector('[data-view=spec]').click(); await w(200);
      document.getElementById('unpin').click(); await w(150); })()` }
  ]
};
