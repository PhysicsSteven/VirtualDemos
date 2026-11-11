/* Known values for the break-it test (tools/breakit.cjs), tides. Hook: window.__tides (S, phys, findHighs, cityLevelAt, applyPreset).
   Pull on Earth view: the readouts equal the physics at the current distance (pull GM/d², tidal 2GMR/d³ with the exact near and far
   values bracketing it, the ratios to today's distance), the tidal arrows at the near and far points equal the exact values, and the
   state stays in range (distance 40 to 120 R_E, hour in [0, 24), day in [0, 29.53)).
   Ocean bulges: the readout amplitudes equal the equilibrium tide, the Sun to Moon tide ratio is 0.46 at today's distance, the daily
   range readout equals the highest minus lowest water level around the equator (numerically), and every "next high tide" is a true
   local maximum of the city's water level. The Moon's spin: the locked crater faces Earth, a stopped Moon keeps its
   direction among the stars, and the sidereal month is 27.32 d. At 60.34 R_E the Moon's amplitude is 0.357 m, the Sun's 0.164 m. */
const pre = `const T = window.__tides; if (!T) return true; const S = T.S, P = T.phys;
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const num = (s) => { const m = s.replace(/\\u2212/g, '-').match(/(-?[\\d.]+)\\s*(?:\\u00d7\\s*10([\\u207b\\u2070\\u00b9\\u00b2\\u00b3\\u2074-\\u2079]+))?/); if (!m) return NaN;
    const sup = { '\\u207b': '-', '\\u2070': 0, '\\u00b9': 1, '\\u00b2': 2, '\\u00b3': 3, '\\u2074': 4, '\\u2075': 5, '\\u2076': 6, '\\u2077': 7, '\\u2078': 8, '\\u2079': 9 };
    const e = m[2] ? parseInt([...m[2]].map((c) => sup[c]).join('')) : 0; return parseFloat(m[1]) * 10 ** e; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const d = S.dR * P.R_EARTH;
`;
module.exports = {
  checks: [
    { name: "state stays in range (distance 40 to 120 R_E, hour, day)", fn: `(() => { ${pre}
      if (!(S.dR >= 40 - 1e-9 && S.dR <= 120 + 1e-9)) return 'distance ' + S.dR + ' R_E is outside 40 to 120';
      if (!(S.hour >= 0 && S.hour < 24)) return 'hour ' + S.hour;
      if (!(S.tp >= 0 && S.tp < 29.53)) return 'day ' + S.tp;
      return true; })()` },
    { name: "Pull view readouts equal GM/d², 2GMR/d³ and the exact near and far values", fn: `(() => { ${pre}
      if (S.view !== 'pull') return true;
      const pull = P.G * P.M_MOON / (d * d), ax = 2 * P.G * P.M_MOON * P.R_EARTH / d ** 3;
      if (!near(num(rd('rPull')), pull, 6e-3)) return 'pull readout ' + rd('rPull') + ', GM/d² = ' + pull;
      if (!near(num(rd('rAx')), ax, 6e-3)) return 'tidal readout ' + rd('rAx') + ', 2GMR/d³ = ' + ax;
      const nr = P.exactNear(P.M_MOON, d), fr = P.exactFar(P.M_MOON, d);
      if (!(nr > ax && fr < ax)) return 'exact near ' + nr + ' should exceed the formula ' + ax + ' and far ' + fr + ' fall below it';
      if (!near(num(rd('rNear')), nr, 6e-3) || !near(num(rd('rFar')), fr, 6e-3)) return 'near/far readouts ' + rd('rNear') + ' / ' + rd('rFar') + ' vs ' + nr + ' / ' + fr;
      const tn = P.tidalAt(P.M_MOON, d, P.R_EARTH, 0)[0], tf = P.tidalAt(P.M_MOON, d, -P.R_EARTH, 0)[0];
      if (!near(tn, nr, 1e-6) || !near(-tf, fr, 1e-6)) return 'tidalAt at the near/far points ' + tn + ', ' + tf + ' vs exact ' + nr + ', ' + fr;
      const a = P.tidalAt(P.M_MOON, d, 0, P.R_EARTH), perp = P.tidalPerp(P.M_MOON, d);
      if (!near(a[1], -perp, 3 * (P.R_EARTH / d) ** 2)) return 'sideways tidal pull ' + a[1] + ' vs GMR/d³ = ' + perp;
      const rel2 = (60.34 / S.dR) ** 2, rel3 = (60.34 / S.dR) ** 3;
      if (!near(parseFloat(rd('rPullRel').replace('×', '')), rel2, 6e-3) && Math.abs(parseFloat(rd('rPullRel').replace('×', '')) - rel2) > 0.006) return 'pull ratio ' + rd('rPullRel') + ' vs ' + rel2;
      if (Math.abs(parseFloat(rd('rTideRel').replace('×', '')) - rel3) > 0.006 + 6e-4 * rel3) return 'tide ratio ' + rd('rTideRel') + ' vs ' + rel3;
      return true; })()` },
    { name: "tide amplitudes, Sun to Moon ratio and the first-run values", fn: `(() => { ${pre}
      const am = (P.M_MOON / P.M_EARTH) * (P.R_EARTH / d) ** 3 * P.R_EARTH, as = (P.M_SUN / P.M_EARTH) * (P.R_EARTH / P.D_SUN) ** 3 * P.R_EARTH;
      if (S.view === 'bulge' && !near(num(rd('rAm')), am, 2e-3) && Math.abs(num(rd('rAm')) - am) > 6e-4) return 'Moon amplitude ' + rd('rAm') + ', equilibrium tide ' + am;
      if (S.view === 'bulge' && S.sun && Math.abs(num(rd('rAs')) - as) > 6e-4) return 'Sun amplitude ' + rd('rAs') + ', equilibrium tide ' + as;
      const ratio = P.sunMoonTide(d);
      if (!near(ratio, as / am, 1e-9)) return 'Sun/Moon tide ' + ratio + ' vs ' + as / am;
      if (Math.abs(S.dR - 60.34) < 0.005 && !(Math.abs(ratio - 0.4596) < 6e-4 && Math.abs(P.sunMoonPull(d) - 178.8) < 0.3)) return 'at today\\'s distance the Sun/Moon tide is ' + ratio + ' (0.46) and pull ' + P.sunMoonPull(d) + ' (179)';
      if (Math.abs(S.dR - 60.34) < 0.005 && !(Math.abs(am - 0.3566) < 0.002 && Math.abs(as - 0.1638) < 0.002)) return 'amplitudes ' + am + ', ' + as + ' (0.357 m, 0.164 m expected)';
      return true; })()` },
    { name: "daily range readout equals highest minus lowest water level around Earth", fn: `(() => { ${pre}
      if (S.view !== 'bulge') return true;
      const am = (P.M_MOON / P.M_EARTH) * (P.R_EARTH / d) ** 3 * P.R_EARTH, as = P.M_SUN / P.M_EARTH * (P.R_EARTH / P.D_SUN) ** 3 * P.R_EARTH, A = S.sun ? as : 0;
      const phi = 2 * Math.PI * S.tp / 29.53; let lo = 1e9, hi = -1e9, sum = 0; const N = 7200;
      for (let i = 0; i < N; i++) { const h = P.height(2 * Math.PI * i / N, phi, am, A); lo = Math.min(lo, h); hi = Math.max(hi, h); sum += h; }
      /* the equatorial mean of P2 is 1/4 of the amplitude (zero only over the whole sphere), so only the span is checked */
      if (Math.abs(sum / N - 0.25 * (am + A * 0)) > 0.5 * (am + A)) return 'mean level ' + sum / N + ' is not between the extremes';
      const want = hi - lo, got = parseFloat(rd('rRange'));
      if (Math.abs(got - want) > 0.0051 + 1e-3 * want) return 'range readout ' + rd('rRange') + ' vs numerical high minus low ' + want.toFixed(3) + ' (S.sun ' + S.sun + ', day ' + S.tp.toFixed(2) + ')';
      return true; })()` },
    { name: "every next high tide is a local maximum of the city's water level", fn: `(() => { ${pre}
      if (S.view !== 'bulge') return true;
      const hs = T.findHighs(26); let prev = 0;
      for (const t of hs) {
        if (t <= prev) return 'highs not increasing: ' + hs;
        prev = t; const c = T.cityLevelAt(t);
        if (T.cityLevelAt(t - 0.05) > c + 1e-6 || T.cityLevelAt(t + 0.05) > c + 1e-6) return 'high at +' + t.toFixed(3) + ' h is not a maximum';
      }
      if (S.dR >= 40 && hs.length < 1 && !isNaN(S.hour)) return 'no high tide found within 26 h';
      return true; })()` },
    { name: "the Moon's spin: locked crater faces Earth, a stopped Moon keeps its direction among the stars, 27.32 d", fn: `(() => { ${pre}
      if (S.view !== 'bulge' || !T.facePsi) return true;
      if (Math.abs(P.P_SID - 27.3217) > 0.002) return 'sidereal month ' + P.P_SID + ' d, want 27.32';
      if (rd('rOrb') !== '27.32 d') return 'orbit readout ' + rd('rOrb');
      const dd = ((S.day - S.tp) % P.P_SYN + P.P_SYN) % P.P_SYN; if (Math.min(dd, P.P_SYN - dd) > 1e-6) return 'day count ' + S.day + ' does not follow the phase ' + S.tp;
      const ps = T.facePsi(), off = T.faceOff();
      if (S.spin === 'locked') {
        if (Math.abs(off) > 1e-9) return 'locked crater is ' + off + '° from facing Earth';
        if (rd('rSpin') !== '27.32 d' || !/^0°/.test(rd('rFace'))) return 'locked readouts ' + rd('rSpin') + ' / ' + rd('rFace');
      } else {
        const w = ps + 2 * Math.PI * S.day / P.Y_SID - (S.psi0 + 2 * Math.PI * S.day0 / P.Y_SID), e = Math.abs(Math.atan2(Math.sin(w), Math.cos(w)));
        if (e > 1e-9) return 'stopped Moon turned ' + e + ' rad relative to the stars';
        if (rd('rSpin') !== 'none') return 'spin readout ' + rd('rSpin');
        if (Math.abs(parseFloat(rd('rFace')) - Math.abs(off)) > 0.51) return 'crater readout ' + rd('rFace') + ' vs ' + off;
      }
      return true; })()` }
  ],
  steps: [
    { name: "stop the Moon's spin mid run, run fast through new moon, drag the phase, then lock it again", fn: `(async () => { const T = window.__tides; if (!T || !T.setSpin) return;
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      T.applyPreset('locked'); T.S.tp = 27; await wait(300); document.querySelector('#spinSeg [data-spin="free"]').click(); await wait(900);
      const ph = document.getElementById('phase'); ph.value = 2; ph.dispatchEvent(new Event('input', { bubbles: true })); await wait(200);
      ph.value = 28; ph.dispatchEvent(new Event('input', { bubbles: true })); await wait(200);
      document.querySelector('#spinSeg [data-spin="free"]').click(); await wait(200);
      document.querySelector('#spinSeg [data-spin="locked"]').click(); await wait(300);
    })()` },
    { name: "change distance and Sun while the day runs, then a preset mid run", fn: `(async () => { const T = window.__tides; if (!T) return;
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      T.applyPreset('spring'); await wait(300);
      T.S.dR = 120; await wait(200); T.S.dR = 40; await wait(200);
      document.getElementById('tSun').click(); await wait(200); document.getElementById('tSun').click();
      T.applyPreset('closer'); await wait(200); T.applyPreset('sunmoon'); await wait(200); T.applyPreset('beach'); await wait(300);
    })()` },
    { name: "fastest speed through a month wrap, then pause and drag speed back", fn: `(async () => { const T = window.__tides; if (!T) return;
      const wait = (ms) => new Promise((r) => setTimeout(r, ms));
      T.applyPreset('spring'); T.S.tp = 29.5; T.S.hour = 23.99; const sp = [...document.querySelectorAll('#speed button')]; sp[sp.length - 1].click(); await wait(800);
      sp[0].click(); document.getElementById('play').click(); await wait(200); document.getElementById('play').click(); await wait(300);
    })()` }
  ]
};
