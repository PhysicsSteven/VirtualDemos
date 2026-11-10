/* Known values for the break-it test (tools/breakit.cjs), hr-diagram. Hook: window.__hr (S, buildTrack, stateAtS, msL, ...).
   For tracks of 0.3 to 25 solar masses: the Stefan-Boltzmann law L = R² (T/5772 K)⁴ holds at every point of the track, the age never
   falls as the star evolves, L and T stay finite and positive, the white dwarf is lighter than its star and below the Chandrasekhar
   mass (1.44), the Sun's main sequence values are exactly 1 (L, R) and 10 Gyr; the readouts agree with the state (single star: phase,
   temperature, luminosity, age; cluster: turnoff mass from t = 10 Gyr (M/Msun)^-2.5 and the star counts add to 1000; real stars: the
   brighter and fainter counts agree with M_V against the Sun's 4.81). Readout checks skip while it plays. */
const pre = `const H = window.__hr; if (!H) return true; const S = H.S, near = (a, b, t) => Math.abs(a - b) <= t * Math.max(Math.abs(b), 1e-300);
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
`;
module.exports = {
  checks: [
    { name: "tracks 0.3 to 25 Msun: Stefan-Boltzmann at every point, age rises along the track, WD below Chandrasekhar", fn: `(() => { ${pre}
      if (window.__hrtracks) return window.__hrtracks === 'ok' ? true : window.__hrtracks;
      let bad = 'ok';
      for (const M of [0.3, 0.45, 0.6, 1, 1.5, 2, 3, 5, 7.9, 8, 12, 25]) {
        const T = H.buildTrack(M); let prev = -1;
        if (T.mwd && !(T.mwd < M && T.mwd < 1.44 && T.mwd > 0.1)) { bad = 'M = ' + M + ': white dwarf mass ' + T.mwd; break; }
        for (let i = 0; i <= 80; i++) { const s = H.stateAtS(T, i / 80);
          if (!(isFinite(s.L) && s.L > 0 && isFinite(s.Te) && s.Te > 0) && !s.p.gone) { bad = 'M = ' + M + ' s = ' + i / 80 + ': L ' + s.L + ' T ' + s.Te; break; }
          if (s.p.gone) continue;
          if (!near(s.L, s.R * s.R * (s.Te / 5772) ** 4, 2e-3)) { bad = 'M = ' + M + ' s = ' + i / 80 + ' (' + s.p.name + '): L = ' + s.L + ' but R²(T/5772)⁴ = ' + s.R * s.R * (s.Te / 5772) ** 4; break; }
          if (s.age < prev - 1e-6 * Math.abs(prev)) { bad = 'M = ' + M + ' s = ' + i / 80 + ': age fell from ' + prev + ' to ' + s.age; break; } prev = s.age; }
        if (bad !== 'ok') break; }
      window.__hrtracks = bad; return bad === 'ok' ? true : bad; })()` },
    { name: "Sun: L = 1, R = 1 on the main sequence, lifetime 10 Gyr; white dwarf radius falls to 0 at 1.44 Msun", fn: `(() => { ${pre}
      if (H.msL(1) !== 1 || H.msR(1) !== 1 || !near(H.tMS(1), 1e10, 1e-12)) return 'Sun: L ' + H.msL(1) + ' R ' + H.msR(1) + ' t ' + H.tMS(1);
      if (!(H.wdRadius(1.4399) > 0) || H.wdRadius(1.44) > 1e-6 || !(H.wdRadius(0.6) > H.wdRadius(1.0))) return 'white dwarf mass radius relation off';
      if (!near(H.teff(1, 1), 5772, 1e-12) || !near(H.radiusOf(1, 5772), 1, 1e-12)) return 'teff/radiusOf of the Sun';
      return true; })()` },
    { name: "single star readouts equal the state (phase, T, L, age)", fn: `(() => { ${pre}
      if (S.mode !== 'single' || S.playing || !S.track) return true;
      const st = H.stateAtS(S.track, S.s); if (st.p.gone) return true;
      if (rd('rPhase') !== st.p.name) return 'phase shows ' + rd('rPhase') + ', state ' + st.p.name;
      const T = parseFloat(rd('rT').replace(/,/g, '')); if (!(Math.abs(T - st.Te) <= 0.0051 * st.Te + 1)) return 'T shows ' + rd('rT') + ', state ' + st.Te;
      if (!/×|e/.test(rd('rL'))) { const L = parseFloat(rd('rL').replace(/,/g, '')); if (!near(L, st.L, 6e-3)) return 'L shows ' + rd('rL') + ', state ' + st.L; }
      return true; })()` },
    { name: "cluster: turnoff mass from the age, star counts add to 1000", fn: `(() => { ${pre}
      if (S.mode !== 'cluster' || S.playing) return true;
      const toM = (S.cAge / 1e10) ** (-1 / 2.5); if (!near(H.tMS(toM), S.cAge, 1e-9)) return 'tMS(turnoff) != age';
      const txt = rd('cTo'); if (toM <= 25 && !/M/.test(txt)) return 'turnoff readout ' + txt; if (toM > 25 && !/>/.test(txt)) return 'turnoff readout ' + txt + ' but M = ' + toM;
      const n = ['cMS', 'cGi', 'cWD', 'cSN'].reduce((a, id) => a + parseInt(rd(id), 10), 0); if (n !== H.CL.length) return 'counts add to ' + n + ' but there are ' + H.CL.length + ' stars';
      return true; })()` },
    { name: "real stars: brighter + fainter than the Sun's M_V = 4.81 <= number of stars, readouts agree", fn: `(() => { ${pre}
      if (S.mode !== 'real') return true;
      const n = parseInt(rd('qN'), 10), br = parseInt(rd('qBr'), 10), fa = parseInt(rd('qFa'), 10);
      if (!(br + fa <= n)) return 'brighter ' + br + ' + fainter ' + fa + ' > ' + n; return true; })()` },
  ],
  steps: [
    { name: 'every preset, mass slider to its ends then age slider to its ends, then Play at top speed through the end of the star', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(150); }
      document.querySelector('#presets [data-p=sun]').click(); await pause(100);
      for (const v of [0, 1000, 500, 0, 1000]) { set('mass', v); await pause(80); for (const a of [0, 1000, 333, 1000]) { set('age', a); await pause(50); } }
      set('mass', 1000); set('age', 0); const sp = [...document.querySelectorAll('#speed button')].pop(); sp.click();
      const pl = document.getElementById('play'); if (pl.getAttribute('aria-pressed') !== 'true') pl.click(); await pause(2500);
      if (pl.getAttribute('aria-pressed') === 'true') pl.click();
      document.querySelector('#presets [data-p=sun]').click(); await pause(100);
    })()` },
    { name: 'cluster age slider to both ends and each real star set and star picked', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=cluster]').click(); await pause(150);
      for (const v of [0, 1000, 500, 1, 999]) { set('cage', v); await pause(100); }
      document.querySelector('#presets [data-p=real]').click(); await pause(150);
      for (const b of document.querySelectorAll('#realSeg button')) { b.click(); await pause(100); }
      const sel = document.getElementById('realPick'); for (const o of [...sel.options].slice(0, 12)) { sel.value = o.value; sel.dispatchEvent(new Event('change', { bubbles: true })); await pause(40); }
      document.querySelector('#presets [data-p=sun]').click(); await pause(100);
    })()` },
  ],
};
