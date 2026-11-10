/* Known values for the break-it test (tools/breakit.cjs), early-universe. Hook: window.__eu (S, X(), aNow(), K()).
   Expansion view: the Hubble parameter readout is H₀·E(a) from the Friedmann equation of the model shown, 1/H = 977.79 Gyr/H,
   the time since the Big Bang is the age plus t, and the models close (Ω_r + Ω_m + Ω_k + Ω_Λ = 1); the ages are 2/(3H₀) = 9.67 Gyr
   (matter only), 1/H₀ = 14.51 Gyr (empty) and Planck 13.79 Gyr; a at t = 0 is 1. Thermal history: after electron-positron
   annihilation T = T₀(1 + z) from the readouts; in the radiation era t = 2.42 s g*^(-1/2) (kT/1 MeV)^(-2) (PDG), g* = 10.75 near
   1 MeV. Helium: n/p = exp(−1.29333 MeV/kT_f) and Y = 2(n/p)/(1 + n/p) agree, the sample has He = floor(n_D/2) and Y = 4 He/2000.
   Microwave background: T = 2.7255 K (1 + z), Wien λ_max T = 2.8978 mm K, ν_max = 58.789 GHz/K T, n = 410.7 cm⁻³ and u = a T⁴ today. */
const pre = `const E = window.__eu; if (!E) return true; const S = E.S;
  const rd = () => { const o = {}; for (const d of document.querySelectorAll('#out > div')) o[d.querySelector('dt').textContent] = d.querySelector('dd').textContent; return o; };
  const SUP = { '⁰': 0, '¹': 1, '²': 2, '³': 3, '⁴': 4, '⁵': 5, '⁶': 6, '⁷': 7, '⁸': 8, '⁹': 9 };
  const num = (t) => { t = String(t).replace(/\\u2212/g, '-'); const m = t.match(/^(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { const neg = m[2][0] === '⁻'; let e = 0; for (const c of m[2]) if (c in SUP) e = e * 10 + SUP[c]; v *= Math.pow(10, neg ? -e : e); } return v; };
  const sig = (t) => { const m = String(t).match(/^-?[\\d.]+/); const d = m ? m[0].replace('.', '').replace(/^0+/, '').length : 3; return Math.pow(10, -Math.max(2, d - 1)); };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const o = rd();
`;
module.exports = {
  checks: [
    { name: "expansion: H = H₀E(a) from the Friedmann equation, 1/H, age, time since the Big Bang; the models close", fn: `(() => { ${pre}
      const Xp = E.X(), m = Xp.m, a = E.aNow(); if (!isFinite(a)) return 'a is ' + a;
      if (Math.abs(m.Or + m.Om + m.Ok + m.OL - 1) > 1e-12) return m.name + ' does not close: ' + (m.Or + m.Om + m.Ok + m.OL);
      if (S.view !== 'ex' || S.run || S.blind || a <= 0 || o['Hubble parameter H'] === undefined) return true;
      const Ea = Math.sqrt(m.Or / a ** 4 + m.Om / a ** 3 + m.Ok / a ** 2 + m.OL), H = m.H0 * Ea;
      if (!near(num(o['Hubble parameter H']), H, 6e-3 / Math.max(1, H / 100) + 1e-4)) return 'H shows ' + o['Hubble parameter H'] + ', H₀E(a) = ' + H;
      if (!near(num(o['Hubble time 1/H']), 977.79 / H, 1.2e-3)) return '1/H shows ' + o['Hubble time 1/H'] + ', 977.79/H = ' + 977.79 / H;
      if (!near(num(o['Scale factor a']), a, 2e-3) && Math.abs(num(o['Scale factor a']) - a) > 6e-5) return 'a shows ' + o['Scale factor a'] + ', a = ' + a;
      if (isFinite(Xp.age) && Math.abs(num(o['Time since the Big Bang']) - (Xp.age + S.ex.tau)) > 0.0051) return 'time since the Big Bang shows ' + o['Time since the Big Bang'] + ', age + t = ' + (Xp.age + S.ex.tau);
      if (a < 1 && Math.abs(num(o['Redshift z = 1/a − 1']) - (1 / a - 1)) > Math.max(6e-4, 1e-3 * (1 / a - 1))) return 'z shows ' + o['Redshift z = 1/a − 1'];
      return true; })()` },
    { name: "ages and today: a = 1 at t = 0, matter only 2/(3H₀), empty 1/H₀, Planck 13.79 Gyr", fn: `(() => { ${pre}
      const Xp = E.X(), m = Xp.m, h = 977.79 / m.H0;
      if (Math.abs(Xp.tau[Math.round(16 / 0.002)]) > 1e-12) return 'tau(a = 1) is not 0';
      const want = { matter: 2 / 3 * h, empty: h }[m.name];
      if (want !== undefined && Math.abs(Xp.age - want) > 2e-3 * want) return m.name + ' age ' + Xp.age + ', should be ' + want;
      if (m.name === 'lcdm' && Math.abs(m.H0 - 67.4) < 1e-9 && Math.abs(Xp.age - 13.79) > 0.02) return 'Planck age ' + Xp.age;
      if (m.name === 'desitter' && isFinite(Xp.age)) return 'de Sitter should have no beginning';
      if (S.ex.tau === 0 && Math.abs(E.aNow() - 1) > 1e-9) return 'a(0) = ' + E.aNow();
      return true; })()` },
    { name: "thermal history: T = T₀(1 + z) after e⁺e⁻ annihilation; the radiation era clock at 1 MeV", fn: `(() => { ${pre}
      const K = E.K(), t = Math.pow(10, 0);
      const at = (kT) => { const T = kT * 1e6 / 8.617333262e-5, n = K.n; let lo = 0, hi = n; const x = Math.log(T); while (hi - lo > 1) { const mid = (lo + hi) >> 1; if (K.lnT[mid] >= x) lo = mid; else hi = mid; }
        const fr = (K.lnT[lo] - x) / (K.lnT[lo] - K.lnT[hi]); return { t: Math.exp(Math.log(K.t[lo]) + fr * (Math.log(K.t[hi]) - Math.log(K.t[lo]))), g: K.g[lo] + fr * (K.g[hi] - K.g[lo]) }; };
      const p = at(1); if (Math.abs(p.g - 10.75) > 0.25) return 'g* at 1 MeV is ' + p.g + ', expected 10.75 (+ N_eff correction)';
      const want = 2.42 / Math.sqrt(p.g); if (Math.abs(p.t - want) > 0.05 * want) return 't(1 MeV) = ' + p.t + ' s, PDG gives ' + want;
      if (S.view !== 'th' || S.run || o['Redshift z'] === undefined) return true;
      const Tk = num(o['Temperature T']); if (Tk > 1e8 || Tk < 3) return true;
      const z = num(o['Redshift z']); if (Math.abs(Tk / 2.7255 - (1 + z)) > 2e-3 * (1 + z)) return 'T = ' + o['Temperature T'] + ' but T₀(1 + z) = ' + 2.7255 * (1 + z);
      return true; })()` },
    { name: "helium: n/p = exp(−Δmc²/kT_f), Y = 2(n/p)/(1+n/p); the sample counts agree (He = ⌊n_D/2⌋, Y = 4He/2000)", fn: `(() => { ${pre}
      if (S.view !== 'bbn' || S.blind || S.run) return true;
      const kf = S.bbn.kTf, np = Math.exp(-1.29333 / kf), g = num(o['n/p at freeze out, e^(−Δmc²/kT_f)']);
      if (Math.abs(g - np) > 6e-5) return 'n/p at freeze out shows ' + g + ', exp(−1.29333/' + kf + ') = ' + np;
      const npD = num(o['n/p at t_D']), Y = num(o['Predicted Y = 2(n/p)/(1 + n/p)']);
      if (Math.abs(Y - 2 * npD / (1 + npD)) > 3e-4) return 'Y = ' + Y + ' but 2(n/p)/(1+n/p) = ' + 2 * npD / (1 + npD);
      if (npD > np * (1 + 1e-4)) return 'n/p fell the wrong way: ' + npD + ' > ' + np;
      const nF = num(o['Neutrons at freeze out (sample)']), nD = num(o['Neutrons left at t_D (sample)']), He = num(o['Helium 4 nuclei (sample)']), Ys = num(o['Y from the sample']);
      if (!isNaN(nD)) { if (nD > nF) return 'more neutrons left (' + nD + ') than at freeze out (' + nF + ')'; if (He !== Math.floor(nD / 2)) return 'He = ' + He + ' but ⌊n_D/2⌋ = ' + Math.floor(nD / 2); if (Math.abs(Ys - 4 * He / 2000) > 6e-5) return 'Y sample ' + Ys + ', 4He/N = ' + 4 * He / 2000; }
      if (Math.abs(nF / 2000 - 1 / (1 + Math.exp(1.29333 / kf))) > 0.04) return 'neutron share at freeze out ' + nF / 2000 + ' vs equilibrium ' + 1 / (1 + Math.exp(1.29333 / kf));
      return true; })()` },
    { name: "microwave background: T = 2.7255 K (1+z), Wien peak, photon density and aT⁴", fn: `(() => { ${pre}
      if (S.view !== 'cmb' || S.run || S.blind || o['Redshift z'] === undefined) return true;
      const z = num(o['Redshift z']), T = 2.7255 * (1 + z); if (z !== S.cmb.z) return 'z shows ' + z + ', state ' + S.cmb.z;
      const chk = (k, want, unit) => { const t = o[k], v = num(t); return near(v * unit, want, 1.2 * sig(t) * (1 + 1e-9) + 1e-4) ? null : k + ' shows ' + t + ', physics gives ' + want; };
      const kB = 1.380649e-23, hb = 1.054571817e-34, c = 299792458, zeta3 = 1.2020569031595942, ar = 4 * 5.670374419e-8 / c, mm = /nm$/.test(o['Peak wavelength λ_max (Wien)']) ? 1e-9 : 1e-3;
      return chk('Temperature T = T₀(1 + z)', T, 1) || chk('Peak wavelength λ_max (Wien)', 2.897771955e-3 / T, mm) || chk('Peak frequency ν_max', 5.878925757e10 * T, 1e9)
        || chk('Photons per cm³', 2 * zeta3 / Math.PI ** 2 * (kB * T / (hb * c)) ** 3 * 1e-6, 1) || chk('Energy density aT⁴', ar * T ** 4, 1) || true; })()` },
    { name: "CMB today: n_γ = 410.7 cm⁻³, FIRAS fit T = 2.725 K and the 2.7255 K constant", fn: `(() => { ${pre}
      if (S.view !== 'cmb' || S.cmb.z !== 0 || S.blind || S.run || o['Photons per cm³'] === undefined) return true;
      if (Math.abs(num(o['Photons per cm³']) - 410.7) > 0.15) return 'photons per cm³ today ' + o['Photons per cm³'];
      if (Math.abs(num(o['Best fit to FIRAS']) - 2.7255) > 0.0013) return 'FIRAS fit ' + o['Best fit to FIRAS'];
      return true; })()` },
    { name: "sliders show their state and nothing is NaN", fn: `(() => { ${pre}
      for (const k of [S.ex.tau, S.ex.H0, S.th.logt, S.bbn.kTf, S.bbn.tau, S.bbn.tD, S.bbn.logt, S.cmb.z]) if (!isFinite(k)) return 'state has ' + k;
      const t = (id) => document.getElementById(id).textContent;
      if (Math.abs(num(t('oTau')) - S.ex.tau) > 0.0051) return 'oTau ' + t('oTau') + ', t = ' + S.ex.tau;
      if (Math.abs(num(t('oH0')) - S.ex.H0) > 0.051) return 'oH0 ' + t('oH0') + ', H₀ = ' + S.ex.H0;
      if (Math.abs(num(t('oKf')) - S.bbn.kTf) > 0.0051) return 'oKf ' + t('oKf');
      if (num(t('oZ')) !== S.cmb.z) return 'oZ ' + t('oZ') + ', z = ' + S.cmb.z;
      return true; })()` },
  ],
  steps: [
    { name: 'Every view with Play at 4x to the end and back, Reset, then H₀ to the extremes mid run and a model switch at t before the Big Bang', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const v of ['ex', 'bbn', 'cmb', 'th']) { document.querySelector('#viewSeg [data-v=' + v + ']').click(); await pause(100);
        const s4 = document.querySelector('#speedSeg [data-s="4"]'); if (s4) s4.click(); const go = document.getElementById('go'); if (!go.hidden) { go.click(); await pause(700); go.click(); document.getElementById('restart').click(); } }
      document.querySelector('#viewSeg [data-v=ex]').click(); await pause(100);
      for (const m of ['matter', 'empty', 'desitter', 'lcdm']) { document.querySelector('#modelSeg [data-m=' + m + ']').click(); await pause(60);
        for (const t of ['-14', '-9', '-9.5', '20', '0']) { set('sTau', t); await pause(60); } }
      document.getElementById('go').click(); for (const h of ['90', '50', '67.4']) { set('sH0', h); await pause(200); } document.getElementById('go').click();
    })()` },
    { name: 'Helium: freeze out and lifetime and t_D to extremes with the time slider at the ends, Blind on and off', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#viewSeg [data-v=bbn]').click(); await pause(100);
      for (const [id, vs] of [['sKf', [0.4, 1.5, 0.8]], ['sTauN', [200, 2000, 878.4]], ['sTD', [30, 1000, 180]], ['sTb', [-2, 4, 3]]]) for (const v of vs) { set(id, v); await pause(80); }
      document.getElementById('labBlind').click(); await pause(100); document.getElementById('labBlind').click(); await pause(100);
      document.querySelector('#viewSeg [data-v=th]').click(); for (const v of [-44, 17.64, 0, -5, 13]) { set('sLogT', v); await pause(60); }
    })()` },
  ],
};
