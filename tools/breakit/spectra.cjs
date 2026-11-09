/* Known values for the break-it test (tools/breakit.cjs), spectra. No debug hook, so the checks read the Hydrogen card and the Bohr
   orbit readouts from the page (they run only while the card is shown). Hydrogen: the photon energy is 13.5983 eV (1/nf² − 1/ni²)
   and the wavelength is hc/E to within the index of air (n − 1 ≈ 3e-4; below 200 nm the vacuum value is shown) and the rounding of
   the two readouts; the Balmer 3 → 2 line is H-alpha, 656.28 nm. Bohr orbit: r = n² a0 (a0 = 0.0529177 nm), v = αc/n, and the
   de Broglie wave fits exactly n times round with L = nħ at every slider value, whole or not. */
const vis = `const shown = (id) => { const e = document.getElementById(id); return e && !e.closest('[hidden]') && e.getClientRects().length > 0; };
  const T = (id) => document.getElementById(id).textContent.replace(/−/g, '-');`;
module.exports = {
  checks: [
    { name: "hydrogen readouts: E = 13.5983 eV (1/nf² − 1/ni²) and λ = hc/E (air or vacuum)", fn: `(() => { ${vis}
      if (!shown('hTr')) return true;
      const m = T('hTr').match(/^(\\d+) → (\\d+)$/); if (!m) return 'transition readout "' + T('hTr') + '"';
      const ni = +m[1], nf = +m[2], E = 13.5983 * (1 / (nf * nf) - 1 / (ni * ni));
      if (!(ni > nf)) return 'transition ' + ni + ' → ' + nf + ' is not a drop';
      if (/hidden/.test(T('hE'))) return true;
      const e = parseFloat(T('hE')), lam = parseFloat(T('hL'));
      if (Math.abs(e - E) > 0.0051) return 'hE shows ' + T('hE') + ', should be ' + E.toFixed(4);
      const vac = 1239.84198 / E, want = /vacuum/.test(T('hL')) ? vac : vac / 1.00029;
      if (Math.abs(lam - want) > 6e-4 * want + 0.06) return 'hL shows ' + T('hL') + ', hc/E gives ' + vac.toFixed(2) + ' nm in vacuum';
      if (ni === 3 && nf === 2 && Math.abs(lam - 656.28) > 0.05) return 'Balmer 3 → 2 shows ' + lam + ' nm, H-alpha is 656.28';
      return true; })()` },
    { name: "Bohr orbit readouts: r = n²a0, v = αc/n, waves = n, L = nħ", fn: `(() => { ${vis}
      if (!shown('orR')) return true;
      const n = parseFloat(document.getElementById('sOrb').value), a0 = 0.0529177210544;
      if (!(n >= 1 && n <= 6)) return 'orbit slider value ' + n;
      if (Math.abs(parseFloat(T('orR')) - n * n * a0) > 6e-5) return 'orR shows ' + T('orR') + ', n²a0 = ' + (n * n * a0).toFixed(4);
      const v = 7.2973525643e-3 * 299792.458 / n;
      if (Math.abs(parseFloat(T('orV')) - v) > 0.6) return 'orV shows ' + T('orV') + ', αc/n = ' + v.toFixed(1) + ' km/s';
      if (Math.abs(parseFloat(T('orW')) - n) > 0.006) return 'waves around shows ' + T('orW') + ' at n = ' + n;
      if (Math.abs(parseFloat(T('orJ')) - n) > 0.006) return 'angular momentum shows ' + T('orJ') + ' at n = ' + n;
      if (Math.abs(parseFloat(T('oOrb')) - n) > 0.006) return 'slider readout ' + T('oOrb') + ' vs value ' + n;
      return true; })()` }
  ],
  steps: [
    { name: "orbit slider to its minimum, then Helium, then Hydrogen again (hidden card must not draw)", fn: `(async () => {
      const $ = (id) => document.getElementById(id), tick = () => new Promise((r) => setTimeout(r, 60));
      const s = $('sOrb'); s.value = 1; s.dispatchEvent(new Event('input', { bubbles: true })); await tick();
      document.querySelector('#modeSeg [data-m=models]').click(); await tick();
      document.querySelector('#modeSeg [data-m=explore]').click(); await tick();
      s.value = 6; s.dispatchEvent(new Event('input', { bubbles: true })); await tick();
      for (const b of document.querySelectorAll('#series button')) { b.click(); await tick(); }
    })()` },
    { name: "mode switches in a row, Atom models and Stars, then back to Explore", fn: `(async () => {
      const tick = () => new Promise((r) => setTimeout(r, 60));
      for (const m of ['stars', 'models', 'compare', 'mystery', 'models', 'stars', 'explore']) { document.querySelector('#modeSeg [data-m=' + m + ']').click(); await tick(); }
    })()` }
  ]
};
