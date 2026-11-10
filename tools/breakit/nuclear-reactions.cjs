/* Known values for the break-it test (tools/breakit.cjs), nuclear-reactions. Hook: window.__nr (S, rxCalc, fuNow, doNow, CHN, ...).
   Reactions: charge and nucleon number balance whenever Q is shown, Q = (mass before - mass after) in u times 931.494 MeV, the
   products carry K + Q, and the readouts agree with the calculation; the cited presets give their cited Q (14N(a,p)17O -1.19,
   p + 7Li 17.35, a + 9Be 5.70, D-T 17.59, n + 6Li 4.78, 239Pu alpha decay 5.24 MeV: AME2020). Chain reaction: the mass readout is
   rho 4/3 pi R^3, lambda = 1/(n sigma), the energy released is
   200 MeV per fission. Fusion: the measured Gamow peak equals (E_G (kT)^2/4)^(1/3), E_G = 2 mu (pi alpha Z1 Z2)^2 c^2, the barrier
   is 1.44 Z1 Z2 / 1.2 (A1^(1/3) + A2^(1/3)) MeV fm. Dose: the dose rate follows 1/r^2 and a single line source loses exactly
   half behind one half value layer. */
const pre = `const N = window.__nr; if (!N) return true; const S = N.S;
  const R = (() => { const m = {}; for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'), x = d.querySelector('dd'); if (t && x) m[t.textContent] = x.textContent.replace(/\\u2212/g, '-'); } return m; })();
  const get = (k) => { const key = Object.keys(R).find((q) => q.startsWith(k)); return key === undefined ? NaN : parseFloat(R[key]); };
  const near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(a), Math.abs(b), 1e-300);
`;
module.exports = {
  checks: [
    { name: "reactions: Z and A balance when Q is shown, Q = Δm c², products carry K + Q, readouts agree", fn: `(() => { ${pre}
      if (S.view !== 'rx') return true;
      const c = N.rxCalc(), U = 931.49410372;
      if (!c.balanced) return !isFinite(c.Q) ? true : 'Q is ' + c.Q + ' for an unbalanced reaction';
      if (c.Zin !== c.Zout || c.Ain !== c.Aout) return 'balanced but Z or A differ';
      if (!isFinite(c.Q)) return 'balanced but Q is ' + c.Q;
      if (Math.abs(c.Q - (c.MinU - c.MoutU) * U) > 1e-6 * Math.max(1, Math.abs(c.Q)) + 2e-4) return 'Q ' + c.Q + ' vs (mu before - mu after) 931.494 = ' + (c.MinU - c.MoutU) * U;
      if (c.Q < 0 && c.two && !(c.Kth > -c.Q)) return 'threshold ' + c.Kth + ' not above |Q| ' + -c.Q;
      if (c.allowed && c.Q < 0 && c.K + 1e-12 < c.Kth) return 'allowed below the threshold';
      if (c.allowed && Math.abs(c.Kout - (c.K + c.Q)) > 1e-9) return 'Kout ' + c.Kout + ' != K + Q';
      if (c.kin) for (const s of c.kin.sols) { if (!isFinite(s.Kb) || !isFinite(s.KB) || s.Kb < -1e-9 || s.KB < -1e-9) return 'negative or NaN product energy ' + s.Kb + ', ' + s.KB;
        if (Math.abs(s.Kb + s.KB - (c.K + c.Q)) > 1e-6 * Math.max(1, Math.abs(c.K + c.Q))) return 'products carry ' + (s.Kb + s.KB) + ', K + Q = ' + (c.K + c.Q); }
      if (S.blind) return true;
      const q = get('Q = '); if (Math.abs(q - c.Q) > 6e-5) return 'Q readout ' + q + ', Q = ' + c.Q;
      if (c.allowed && Math.abs(get('Kinetic energy of the products') - c.Kout) > 6e-5) return 'products readout ' + get('Kinetic energy of the products') + ', ' + c.Kout;
      if (c.Q < 0 && c.two && S.rx.proj !== 'none' && Math.abs(get('Threshold') - c.Kth) > 6e-5) return 'threshold readout ' + get('Threshold') + ', ' + c.Kth;
      return true; })()` },
    { name: "cited preset Q values (AME2020)", fn: `(() => { ${pre}
      if (S.view !== 'rx' || S.rx.pick === 'custom') return true;
      const want = { ruth: -1.1918, cw: 17.3462, chad: 5.7014, dt: 17.5893, li6: 4.7836, pu: 5.2441 }[S.rx.pick]; if (want === undefined) return true;
      const x = S.rx; if (x.T[1] !== { ruth: 14, cw: 7, chad: 9, dt: 3, li6: 6, pu: 239 }[S.rx.pick]) return true;   /* edited by hand since the pick */
      const c = N.rxCalc(); return c.balanced && Math.abs(c.Q - want) < 0.002 ? true : S.rx.pick + ': Q = ' + c.Q + ', cited ' + want; })()` },
    { name: "chain reaction: mass = rho 4/3 pi R^3, mean free path = 1/(n sigma), 200 MeV per fission", fn: `(() => { ${pre}
      if (S.view !== 'ch') return true; const c = S.ch, NA = 6.02214076e23;
      if (c.mode === 'sph') {
        const m = { u235: [18.9, 235.0439, 5.0], pu239: [19.6, 239.0522, 5.29] }[c.mat]; if (!m || S.blind) return true;
        const kg = m[0] * 4 / 3 * Math.PI * c.R ** 3 / 1000; if (Math.abs(get('Mass') - kg) > 0.0051) return 'Mass shows ' + get('Mass') + ', rho V = ' + kg;
        const lam = 1 / (m[0] * NA / m[1] * m[2] * 1e-24); if (Math.abs(get('Mean free path') - lam) > 0.0051) return 'mean free path ' + get('Mean free path') + ', 1/(n sigma) = ' + lam;
        const L = N.CHN.last;
        if (L && !(L.k >= 0 && isFinite(L.k))) return 'k = ' + L.k;
      } else { const g = N.CHN.g, E = g.fisTot * 200 * 1.602176634e-13;
        const txt = (R['Energy released (200 MeV each)'] || '').replace(/ J$/, '').replace(' × 10', 'e').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+/, (s) => String(parseInt(s.replace('⁻', '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (d) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(d))))); const got = parseFloat(txt);
        if (isFinite(got) && g.fisTot > 0 && Math.abs(got - E) > 0.006 * E && Math.abs(got - E) > 1e-3 * E + 1e-30) return 'energy released ' + R['Energy released (200 MeV each)'] + ', 200 MeV x ' + g.fisTot + ' = ' + E;
      }
      return true; })()` },
    { name: "fusion: measured Gamow peak = (E_G (kT)^2/4)^(1/3); E_G and the barrier from the formulas", fn: `(() => { ${pre}
      if (S.view !== 'fu') return true;
      const F = N.fuNow(), a = F.P.a, b = F.P.b, al = 1 / 137.035999177;
      if (!isFinite(F.m.E0) || !(F.m.fwhm > 0) || !(F.m.E0 > 0)) return 'Gamow peak ' + F.m.E0 + ', width ' + F.m.fwhm;
      const E0 = Math.cbrt(F.EG * F.kt * F.kt / 4); if (Math.abs(F.m.E0 - E0) > 1e-4 * E0) return 'measured peak ' + F.m.E0 + ', (E_G kT²/4)^(1/3) = ' + E0;
      const Vc = 1.43996455 * a[0] * b[0] / (1.2 * (Math.cbrt(a[1]) + Math.cbrt(b[1]))); if (Math.abs(F.Vc - Vc) > 1e-9) return 'barrier ' + F.Vc + ', ' + Vc;
      const want = { pp: 0.4933, dt: 1.1822 }[S.fu.pair];
      if (want && Math.abs(F.EG - want) > 0.003 * want) return 'E_G ' + F.EG + ' MeV, expected near ' + want;
      if (!S.blind && Math.abs(get('Gamow peak, measured') - F.m.E0 * 1000) > 6e-4 * Math.max(1, F.m.E0 * 1000)) return 'peak readout ' + get('Gamow peak, measured') + ', ' + F.m.E0 * 1000;
      return true; })()` },
    { name: "dose: rate falls as 1/r², one half value layer halves a single line source", fn: `(() => { ${pre}
      if (S.view !== 'do') return true; const d = S.do, keep = [d.r, d.x, d.sh]; let msg = true;
      try { d.sh = 'none'; d.x = 0; d.r = 1; const r1 = N.doNow().rate; d.r = 2; const r2 = N.doNow().rate; d.r = 0.5; const rh = N.doNow().rate;
        if (r1 > 0 && (Math.abs(r1 / r2 - 4) > 1e-9 || Math.abs(rh / r1 - 4) > 1e-9)) msg = 'dose rate at 1 m, 2 m and 0.5 m: ' + r1 + ', ' + r2 + ', ' + rh + ' (not 1/r²)';
        if (msg === true && keep[2] !== 'none' && keep[0] && S.do.src !== 'f18') { d.sh = keep[2]; d.r = 1; d.x = 0; const D0 = N.doNow(); d.x = D0.hvl; const D1 = N.doNow();
          if (D0.src.lines.length === 1 && Math.abs(D1.rate / D0.rate - 0.5) > 1e-6) msg = 'one half value layer leaves ' + D1.rate / D0.rate; }
      } finally { d.r = keep[0]; d.x = keep[1]; d.sh = keep[2]; }
      return msg; })()` },
  ],
  steps: [
    { name: 'every famous reaction, then the projectile energy to its limits and the detector angle to 0 and 180, then a made up reaction', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), pick = document.getElementById('rxPick');
      const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=rxRuth]') && document.querySelector('#presets [data-p=rxRuth]').click(); await pause(150);
      for (const o of [...pick.options]) { pick.value = o.value; pick.dispatchEvent(new Event('change', { bubbles: true })); await pause(60);
        for (const v of ['0', '20', '0.001']) { set('rxK', v); await pause(30); } for (const v of ['0', '180', '90']) { set('rxTh', v); await pause(30); } }
      set('rxTZ', '100'); set('rxTA', '300'); set('rxEjN', '4'); await pause(100);
      document.getElementById('rxBal').click(); await pause(100);
    })()` },
    { name: 'chain reaction: sphere radius to its limits, run many generations, new run; then k above and below one; fusion temperature to the ends; dose shield and distance to the ends', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), N = window.__nr;
      const set = (id, v) => { const e = document.getElementById(id); if (!e) return; e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      N.setView('ch'); await pause(150);
      for (const v of [document.getElementById('chR').min, document.getElementById('chR').max, document.getElementById('chR').min]) { set('chR', v); await pause(60); for (let i = 0; i < 6; i++) { N.chStep(); } }
      N.setView('fu'); await pause(100);
      for (const v of [document.getElementById('fuT').min, document.getElementById('fuT').max]) { set('fuT', v); await pause(100); }
      N.setView('do'); await pause(100);
      for (const id of ['doR', 'doX', 'doA']) for (const v of [document.getElementById(id).min, document.getElementById(id).max]) { set(id, v); await pause(60); }
      N.applyPreset('rxRuth'); await pause(150);
    })()` },
  ],
};
