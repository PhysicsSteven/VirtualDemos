/* Known values for the break-it test (tools/breakit.cjs), white-dwarf-cooling. Hook: window.__wd (S, sel, now, setAge, setMass).
   The cooling table: time rises, Tc and L fall, the solid fraction stays within 0 to 1 and never falls, and L = C M Tc^3.5
   (Shapiro and Teukolsky) at every row; with ideal ions and no crystallization it is Mestel's t = (3/5) N k (Tc^-5/2 - T0^-5/2)/(C M);
   the radius agrees with Eggleton's fit (the ideal model is 3% above it at 0.6 and 8% at 1.2); Teff = (L/4 pi R^2 sigma)^(1/4); the readouts (L, Tc, Teff, Gamma, R, heat capacity)
   equal these; Gamma at the center is 175 at the melting temperature; presets: Mestel's slope reads -1.40, the helium dwarf's
   center would freeze near 4.8e5 K after about 5000 Gyr, the 1.0 M_sun onset sits at M_G about 13.0. */
const pre = `const W = window.__wd; if (!W || !W.S || !W.sel) return true; const S = W.S, sel = W.sel, nw = W.now();
  const KB = 1.380649e-23, LSUN = 3.828e26, YR = 3.15576e7, MSUN = 1.98841e30, MU = 1.66053906892e-27, SIG = 5.670374419e-8, QE = 1.602176634e-19, EPS0 = 8.8541878188e-12;
  const C_ENV = 5.7e5 * (1 / (0.75 * 0.9 + 0.5 * 0.1)) / 4 / 0.1 * 1e-7 / LSUN, near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-300);
  const playing = document.getElementById('play').textContent === 'Pause', rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const sci = (t) => { const m = t.match(/^(-?[\\d.,]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹·]+))?/); if (!m) return NaN; const s = { '⁻': '-', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
    return m[2] ? parseFloat(m[1].replace(/,/g, '')) * Math.pow(10, parseInt([...m[2]].map((c) => s[c]).join(''), 10)) : parseFloat(m[1].replace(/,/g, '')); };
`;
module.exports = {
  checks: [
    { name: "cooling table: time up, Tc and L down, solid fraction within 0 to 1 and rising, L = C M Tc^3.5", fn: `(() => { ${pre}
      const n = sel.n; if (!(Math.abs(sel.lT[0] - 8) < 1e-12) || sel.t[0] !== 0) return 'the table does not start at 1e8 K and t = 0';
      if (Math.abs(sel.M - S.M) > 2e-6) return 'structure mass ' + sel.M + ' for M = ' + S.M;
      for (let i = 1; i < n; i += 7) {
        if (!(sel.t[i] > sel.t[i - 1]) || !(sel.lT[i] < sel.lT[i - 1]) || !(sel.lL[i] < sel.lL[i - 1])) return 'row ' + i + ': t ' + sel.t[i] + ', log Tc ' + sel.lT[i] + ', log L ' + sel.lL[i] + ' is not monotone';
        if (!(sel.fs[i] >= -1e-12 && sel.fs[i] <= 1 + 1e-12) || sel.fs[i] < sel.fs[i - 1] - 1e-9) return 'row ' + i + ': solid fraction ' + sel.fs[i];
        if (Math.abs(sel.lL[i] - Math.log10(C_ENV * sel.M * Math.pow(10, 3.5 * sel.lT[i]))) > 1e-9) return 'row ' + i + ': L is not C M Tc^3.5'; }
      if (S.liquid === 'ideal' && !S.cryst) for (const i of [Math.floor(n / 10), Math.floor(n / 2), n - 1]) {
        const T = Math.pow(10, sel.lT[i]), want = 0.6 * sel.nIon * KB / (C_ENV * LSUN * sel.M) * (Math.pow(T, -2.5) - Math.pow(1e8, -2.5)) / YR;
        if (!near(sel.t[i], want, 2e-4)) return 'Mestel: t at ' + T.toExponential(3) + ' K is ' + sel.t[i] + ' yr, formula ' + want; }
      if (S.liquid === 'ideal' && !S.cryst) { const i = Math.floor(sel.n / 2), ci = sel.cv[Math.min(sel.n - 1, i + 1)] / (sel.nIon * KB); if (!near(ci, 1.5, 1e-9)) return 'ideal ion heat capacity ' + ci + ' k, should be 1.5 k'; }
      return true; })()` },
    { name: "radius against Eggleton, Gamma = 175 at the melting temperature, readouts equal L, Tc, Teff, Gamma, R", fn: `(() => { ${pre}
      const R = sel.R / 6.957e8, eg = (() => { const M = S.M, mc = 1.44, mp = 0.00057; return 0.0114 * Math.sqrt(Math.pow(M / mc, -2 / 3) - Math.pow(M / mc, 2 / 3)) * Math.pow(1 + 3.5 * Math.pow(M / mp, -2 / 3) + mp / M, -2 / 3); })();
      if (!near(R, eg, 0.10)) return 'R = ' + R.toFixed(5) + ' R_sun, Eggleton ' + eg.toFixed(5);
      const KE = QE * QE / (4 * Math.PI * EPS0), ae = Math.cbrt(3 / (4 * Math.PI * (sel.rhoC / (sel.ci.mue * MU))));
      if (!near(sel.ci.Z53 * KE / (ae * KB * sel.Tm0), 175, 1e-9)) return 'Gamma at Tm0 = ' + sel.ci.Z53 * KE / (ae * KB * sel.Tm0);
      if (playing) return true;
      if (!isFinite(nw.L) || !isFinite(nw.Teff) || !isFinite(nw.Tc)) return 'L ' + nw.L + ', Teff ' + nw.Teff + ', Tc ' + nw.Tc;
      if (!near(nw.L, C_ENV * sel.M * Math.pow(nw.Tc, 3.5), 1e-9)) return 'now(): L is not C M Tc^3.5';
      if (!near(nw.Teff, Math.pow(nw.L * LSUN / (4 * Math.PI * sel.R * sel.R * SIG), 0.25), 1e-9)) return 'Teff';
      if (!near(sci(rd('rL')), nw.L, 0.06)) return 'L shows ' + rd('rL') + ', now ' + nw.L;
      if (!near(sci(rd('rT')), nw.Tc, 0.006) && Math.abs(sci(rd('rT')) - nw.Tc) > 0.5) return 'Tc shows ' + rd('rT') + ', now ' + nw.Tc;
      if (!near(sci(rd('rTe')), nw.Teff, 0.006) && Math.abs(sci(rd('rTe')) - nw.Teff) > 0.5) return 'Teff shows ' + rd('rTe') + ', now ' + nw.Teff;
      const g = ((Z, rho, T) => Z * KE / (Math.cbrt(3 / (4 * Math.PI * (rho / (sel.ci.mue * MU)))) * KB * T))(sel.ci.Z53, sel.rhoC, nw.Tc), gs = sci(rd('rGam'));
      if (Math.abs(gs - g) > (g < 10 ? 0.0051 : g < 1000 ? 0.51 : 0.06 * g)) return 'Gamma shows ' + rd('rGam') + ', physics ' + g;
      if (Math.abs(parseFloat(rd('rR').replace(/,/g, '')) - Math.round(sel.R / 1000)) > 0.5) return 'radius shows ' + rd('rR') + ', R = ' + sel.R / 1000 + ' km';
      return true; })()` },
    { name: "presets: Mestel slope reads -1.40; the helium dwarf's center would freeze near 4.8e5 K after about 5000 Gyr", fn: `(() => { ${pre}
      if (S.preset === 'mestel' && S.lt === 8 && !playing) { const s = parseFloat(rd('rS')); if (!(Math.abs(s + 1.4) < 0.02)) return 'slope shows ' + rd('rS') + ', the hint says -1.40'; }
      if (S.preset === 'he' && S.M === 0.6 && S.comp === 'he') {
        if (!near(sel.Tm0, 4.8e5, 0.02)) return 'He melting temperature ' + sel.Tm0 + ', hint 4.8e5';
        if (!(sel.tOn > 4e12 && sel.tOn < 6e12)) return 'He freezing onset at ' + sel.tOn / 1e9 + ' Gyr, hint says about 5000'; }
      if (S.M < 0.5 - 1e-9 || S.M > 1.2 + 1e-9 || S.lt < 4 - 1e-9 || S.lt > 10.3 + 1e-9) return 'M ' + S.M + ' or log age ' + S.lt + ' out of range';
      return true; })()` },
  ],
  steps: [
    { name: 'heavy preset: the onset of crystallization at 1.0 Msun sits at M_G about 13.0, then every preset and the mass and age extremes', fn: `(async () => {
      const W = window.__wd, pause = (ms) => new Promise((r) => setTimeout(r, ms)), rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
      document.querySelector('#presets [data-p=heavy]').click(); await pause(500);
      if (document.getElementById('play').textContent === 'Pause') document.getElementById('play').click();
      W.setAge(Math.log10(W.sel.tOn)); await pause(200);
      const mg = parseFloat(rd('rG')); if (!(Math.abs(mg - 13.0) < 0.06)) throw new Error('1.0 Msun onset: M_G shows ' + rd('rG') + ', the hint says about 13.0');
      for (const p of ['young', 'mestel', 'cryst', 'he', 'clock']) { document.querySelector('#presets [data-p=' + p + ']').click(); await pause(400); }
      for (const m of [0.5, 1.2, 0.5, 0.6]) { W.setMass(m); await pause(300); }
      for (const a of [4, 10.3, 4, 8]) { W.setAge(a); await pause(200); }
      document.querySelector('#presets [data-p=young]').click(); await pause(200);
    })()` },
    { name: 'mass 1.2 with helium and the Coulomb liquid, crystallization and latent heat off and on, population on and the disk to its limits', fn: `(async () => {
      const W = window.__wd, pause = (ms) => new Promise((r) => setTimeout(r, ms)), click = (id) => document.getElementById(id).click();
      W.setMass(1.2); click('cHe'); await pause(300); click('lId'); await pause(300); click('lCo'); click('tCr'); await pause(300); click('tCr'); click('tLat'); click('tLat'); await pause(300);
      click('tPop'); await pause(800); for (const g of [1, 13.5, 1, 9]) { W.setDisk(g); await pause(300); }
      click('cCO'); click('tPop'); W.setAge(10.3); await pause(300); W.setAge(4); await pause(200);
      document.querySelector('#presets [data-p=young]').click(); await pause(200);
    })()` },
  ],
};
