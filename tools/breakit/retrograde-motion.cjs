/* Known values for the break-it test (tools/breakit.cjs), retrograde-motion. The state is private to the page, so the checks use
   window.vdReadingRow() (the same look() and rate() the readouts use) and the DOM readouts.
   Kepler model: the Mars 2024 to 2025 retrograde runs from the station of 7 Dec 2024 to 24 Feb 2025 (the preset hint), opposition
   16 Jan 2025 reads elongation 180 at that date; Mars 2020 opposition (13 Oct) is 0.41 AU and 22″; the distance stays between the
   limits set by the two orbits; greatest elongation never exceeds 28.3° (Mercury) or 47.4° (Venus); size is 2 arcsin(R/Δ).
   Ptolemy's Venus and Mercury are never more than half lit (Galileo's test). The readouts equal vdReadingRow and the date box,
   and the synodic period equals 1/|1/P − 1/365.256| from the shown P. */
const row = `const rowF = window.vdReadingRow; if (typeof rowF !== 'function') return true;
  const R = rowF(), jd = +R.jd, kep = R.model.indexOf('Kepler') === 0;
  const rd = (s) => s.replace(/−/g, '-');
  const dd = (name) => { const d = [...document.querySelectorAll('#out div')].find((x) => x.querySelector('dt').textContent === name); return d ? d.querySelector('dd').textContent : null; };
  const JD = (y, m, d) => Date.UTC(y, m - 1, d) / 86400000 + 2440587.5;
`;
module.exports = {
  checks: [
    { name: "readouts equal the live reading: date box, λ, β, elongation, lit, distance, size", fn: `(() => { ${row}
      if (document.getElementById('date').value !== R.date) return 'date box ' + document.getElementById('date').value + ', reading ' + R.date;
      const lam = parseFloat(rd(dd('Ecliptic longitude λ'))), bet = parseFloat(rd(dd('Ecliptic latitude β')));
      if (Math.abs(lam - +R.lambda_deg) > 0.011 && Math.abs(Math.abs(lam - +R.lambda_deg) - 360) > 0.011) return 'λ shows ' + lam + ', reading ' + R.lambda_deg;
      if (Math.abs(bet - +R.beta_deg) > 0.011) return 'β shows ' + bet + ', reading ' + R.beta_deg;
      if (Math.abs(parseFloat(dd('Elongation')) - Math.abs(+R.elong_deg)) > 0.11) return 'elongation shows ' + dd('Elongation') + ', reading ' + R.elong_deg;
      if (Math.abs(parseFloat(dd('Lit')) - +R.lit_pct) > 0.51) return 'lit shows ' + dd('Lit') + ', reading ' + R.lit_pct + ' %';
      if (R.dist_AU !== '' && Math.abs(parseFloat(dd('Distance from Earth')) - +R.dist_AU) > 0.0011) return 'distance shows ' + dd('Distance from Earth') + ', reading ' + R.dist_AU;
      if (R.size_arcsec !== '' && Math.abs(parseFloat(dd('Angular size')) - +R.size_arcsec) > 0.051) return 'size shows ' + dd('Angular size') + ', reading ' + R.size_arcsec;
      const mv = dd('Moving'), want = /stationary/.test(R.motion) ? /stationary/ : /west/.test(R.motion) ? /westward/ : /eastward/;
      if (!want.test(mv)) return 'Moving shows "' + mv + '", reading says ' + R.motion;
      return true; })()` },
    { name: "Kepler sky: distance within the orbit limits, size = 2 arcsin(R/Δ), elongation limits, lit fraction in range", fn: `(() => { ${row}
      if (!kep) return true;
      const A = { Mercury: [0.38709927, 0.2056, 2439.7, 28.5], Venus: [0.72333566, 0.0068, 6051.8, 47.5], Mars: [1.52371034, 0.0934, 3396.2, 180], Jupiter: [5.202887, 0.0484, 71492, 180], Saturn: [9.53667594, 0.0539, 60268, 180] }[R.planet];
      const d = +R.dist_AU, lo = Math.abs(A[0] * (1 - A[1]) - 1.0168), hi = A[0] * (1 + A[1]) + 1.0168;
      if (!(d >= lo - 0.002 && d <= hi + 0.002)) return R.planet + ' distance ' + d + ' AU outside ' + lo.toFixed(3) + ' to ' + hi.toFixed(3);
      const size = 2 * Math.asin(A[2] / (d * 149597870.7)) * 180 / Math.PI * 3600;
      if (Math.abs(size - +R.size_arcsec) > 0.06 + 0.002 * size) return 'size ' + R.size_arcsec + '″ but 2 arcsin(R/Δ) = ' + size.toFixed(2) + '″ at ' + d + ' AU';
      if (Math.abs(+R.elong_deg) > A[3]) return R.planet + ' elongation ' + R.elong_deg + '° exceeds ' + A[3] + '°';
      if (!(+R.lit_pct >= 0 && +R.lit_pct <= 100)) return 'lit ' + R.lit_pct;
      if (A[3] === 180 && +R.lit_pct < 80) return R.planet + ' (superior) only ' + R.lit_pct + ' % lit';
      if (Math.abs(+R.rate_deg_day) > 3) return 'daily motion ' + R.rate_deg_day + '°/day is too large';
      return true; })()` },
    { name: "Mars 2024 to 2025: retrograde from 7 Dec to 24 Feb, opposition 16 Jan 2025 at elongation 180", fn: `(() => { ${row}
      if (!kep || R.planet !== 'Mars') return true;
      const s1 = JD(2024, 12, 7), s2 = JD(2025, 2, 24);
      if (jd > s1 + 1.5 && jd < s2 - 1.5 && !/west/.test(R.motion)) return 'Mars on ' + R.date + ' should be retrograde, reading says ' + R.motion;
      if (((jd > JD(2024, 8, 1) && jd < s1 - 1.5) || (jd > s2 + 1.5 && jd < JD(2025, 6, 30))) && !/east/.test(R.motion)) return 'Mars on ' + R.date + ' should be direct, reading says ' + R.motion;
      if (Math.abs(jd - JD(2025, 1, 16)) < 0.3 && +R.elong_deg < 179.5) return 'opposition 16 Jan 2025 elongation ' + R.elong_deg;
      if (Math.abs(jd - JD(2020, 10, 13)) < 0.3 && (Math.abs(+R.dist_AU - 0.41) > 0.01 || Math.abs(+R.size_arcsec - 22.3) > 0.7)) return 'opposition 13 Oct 2020: ' + R.dist_AU + ' AU, ' + R.size_arcsec + '″ (hint says 0.41 AU, 22″)';
      return true; })()` },
    { name: "Ptolemy's Venus and Mercury are never more than half lit; Venus nearer than the Sun", fn: `(() => { ${row}
      if (R.model.indexOf('Ptolemy') !== 0 || !/Venus|Mercury/.test(R.planet)) return true;
      if (+R.lit_pct > 50.05) return R.planet + ' in Ptolemy\\'s model is ' + R.lit_pct + ' % lit (a gibbous phase his arrangement cannot give)';
      return true; })()` },
    { name: "synodic period equals 1/|1/P − 1/365.256| from the shown sidereal period", fn: `(() => { ${row}
      const P = dd('Sidereal period P'), S = dd('Synodic period S'); if (!P || !S) return true;
      const p = parseFloat(P), s = parseFloat(S), want = 1 / Math.abs(1 / p - 1 / 365.256);
      return Math.abs(s - want) <= 0.002 * want + 0.2 ? true : 'S shows ' + S + ' but P = ' + P + ' gives ' + want.toFixed(1) + ' d'; })()` },
  ],
  steps: [
    { name: 'jump to events with every planet, model and kind, from the edges of the valid span, then run past 2050 and below 1800', fn: `(async () => {
      const $ = (id) => document.getElementById(id), pause = (ms) => new Promise((r) => setTimeout(r, ms));
      const setv = (el, v) => { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); };
      for (const p of ['mercury', 'venus', 'mars', 'jupiter', 'saturn']) {
        setv($('selPlanet'), p); await pause(100);
        for (const m of ['kepler', 'copernicus', 'ptolemy']) {
          document.querySelector('#modelSeg [data-m=' + m + ']').click(); await pause(100);
          for (const d of ['1800-01-01', '2050-12-31', '2025-06-15']) {
            setv($('date'), d); await pause(80);
            for (const o of [...$('evKind').options]) { $('evKind').value = o.value; $('evKind').dispatchEvent(new Event('change', { bubbles: true })); $('evNext').click(); await pause(60); $('evPrev').click(); await pause(60); $('evPrev').click(); await pause(60); }
          }
        }
      }
      document.querySelector('#modelSeg [data-m=kepler]').click(); setv($('date'), '2050-12-30'); $('play').click(); await pause(1500);
      $('back').click(); setv($('date'), '1800-01-01'); $('back').click(); setv($('date'), '1799-12-31'); setv($('date'), '2051-01-01'); setv($('date'), 'abc'); await pause(200);
      document.querySelector('#presets [data-p=mars]').click(); await pause(200);
    })()` },
    { name: 'change planet, model and blind while running at 120 days/s; preset switch mid run; Mercury follow then Earth held still', fn: `(async () => {
      const $ = (id) => document.getElementById(id), pause = (ms) => new Promise((r) => setTimeout(r, ms));
      const setv = (el, v) => { el.value = v; el.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=mars]').click(); await pause(100);
      document.querySelector('#speedSeg [data-s="120"]').click(); $('play').click(); await pause(400);
      for (const p of ['venus', 'mercury', 'saturn', 'mars']) { setv($('selPlanet'), p); await pause(250); }
      for (const m of ['ptolemy', 'copernicus', 'kepler', 'ptolemy']) { document.querySelector('#modelSeg [data-m=' + m + ']').click(); await pause(250); }
      $('labBlind').click(); await pause(200); $('labBlind').click();
      for (const id of ['galileo', 'mercury', 'synodic', 'tycho', 'copernicus', 'venus', 'jupiter']) { document.querySelector('#presets [data-p=' + id + ']').click(); await pause(350); }
      document.querySelector('#frameSeg [data-f=earth]').click(); await pause(200);
      if ($('play').textContent.trim() === 'Play') $('play').click(); $('play').click(); await pause(100);
      document.querySelector('#presets [data-p=mars]').click(); await pause(200);
    })()` },
  ],
};
