/* Known values for the break-it test (tools/breakit.cjs), spectral-classes. Hook: window.__sc (S, stages, hShares, peakT, ...).
   Every mode: the class from OpenStax Table 17.2 at the live temperature, T and Pe inside the sliders' range. Color: b/T.
   Lines and Payne: the Ca and He stage shares from Saha at the live state, adding to 100 %. Hydrogen: the ionized share and
   N₂/N₁ at the live state; at P_e = 20 N/m² the Balmer peak is 9,872 K (Carroll and Ostlie: about 9,900 K). */
const pre = `const C = window.__sc; if (!C) return true; const S = C.S;
  const num = (s) => parseFloat(String(s).replace(/\\u2212/g, '-').replace(/,/g, '').replace(/ × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/, (m, e) => 'e' + e.replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (q) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(q))));
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-12);
  const out = {}; for (const d of document.querySelectorAll('#out dt')) out[d.textContent.replace(/\\s+/g, ' ').trim()] = d.nextElementSibling.textContent.trim();
`;
module.exports = {
  checks: [
    { name: 'every mode: temperature and pressure in range, the class from Table 17.2', fn: `(() => { ${pre}
      if (!(S.T >= 2500 && S.T <= 40000)) return 'T ' + S.T;
      if (!(S.Pe > 0.09 && S.Pe < 1100)) return 'Pe ' + S.Pe;
      if (Math.abs(num(out['Surface temperature']) - S.T) > 0.5) return 'T shows ' + out['Surface temperature'];
      if (!S.blind && out['Spectral class'] !== C.classOf(S.T)) return 'class ' + out['Spectral class'];
      return true; })()` },
    { name: 'color: the peak wavelength is b/T', fn: `(() => { ${pre}
      if (S.mode !== 'color' || S.blind) return true;
      if (Math.abs(num(out['Peak wavelength, b/T']) - C.wienPeak(S.T)) > 0.5) return 'peak ' + out['Peak wavelength, b/T'];
      return true; })()` },
    { name: 'lines and Payne: Ca and He stages are Saha at the live state and add to 100 %', fn: `(() => { ${pre}
      if (S.mode !== 'lines' && S.mode !== 'payne') return true;
      for (const [el, k] of [['Ca', 'Calcium: Ca I, Ca II, Ca III'], ['He', 'Helium: He I, He II, He III']]) {
        const v = out[k].replace(/ %$/, '').split(',').map(num), w = C.stages(el, S.T, S.Pe);
        for (let i = 0; i < 3; i++) if (Math.abs(v[i] - w[i] * 100) > 0.051) return el + ' ' + out[k];
        if (Math.abs(v[0] + v[1] + v[2] - 100) > 0.16) return el + ' sum ' + out[k];
      }
      return true; })()` },
    { name: 'hydrogen: ionized share and N2/N1 at the live state; the Balmer peak', fn: `(() => { ${pre}
      if (S.mode !== 'hydrogen' && S.mode !== 'payne') return true;
      const h = C.hShares(S.T, S.Pe);
      if (Math.abs(num(out['Hydrogen ionized']) - h.fion * 100) > 0.0051) return 'ionized ' + out['Hydrogen ionized'];
      if (!near(num(out['N₂/N₁ (Boltzmann)']), h.r21, 6e-3)) return 'N2/N1 ' + out['N₂/N₁ (Boltzmann)'];
      if (!S.blind && Math.abs(S.Pe - 20) < 1e-9 && out['Balmer lines strongest at'] !== '9,872 K') return 'peak ' + out['Balmer lines strongest at'];
      return true; })()` },
  ],
  steps: [
    { name: 'Play 3 s from Betelgeuse: the temperature rises', fn: `(async () => { __sc.applyPreset('betelgeuse'); document.getElementById('play').click(); await new Promise((r) => setTimeout(r, 3000)); document.getElementById('play').click(); return __sc.S.T > 3600 ? true : 'T ' + __sc.S.T; })()` },
  ],
};
