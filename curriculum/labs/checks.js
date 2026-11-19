/* Self checks for the interactive worksheets (Steve, 2026-11-08). Loaded before worksheet.js, which runs them.

   For a worksheet, `items` names the answer boxes whose number follows from the student's OWN data table and says how to work
   it out from that table; `cells` names table columns worked out from other cells of the same row. worksheet.js redoes the
   arithmetic on what the student recorded and says only whether the number they wrote agrees (within `tol` percent, default 3
   for answers and 2 for cells, or the rounding they used). It never shows the value. Nothing here comes from an answer key:
   every rule below is the step the handout's question itself states ("divide the light at 12,000 K by that at 3000 K"), done
   on the student's readings, so a student whose table holds a different setup or a different reading is checked against that.
   Written answers, readings, rankings and judgments are not checked.

   D, the student's data:
     D.rows(t, run?)              every filled row of table t (1 based), or of copy `run` (0 based); a row has
                                  r.n(col) (number), r.s(col) (text), r.cell(col). col is a heading or part of one, or 1 based.
     D.row(t, where, run?)        the first row whose cells match `where`: { heading: number (within 1 %) | text | fn(n, s) }
     D.n(t, where, col, run?)     that row's number in col, NaN when there is no such row
     D.slope(t, run?), D.intercept(t, run?)   the least squares line the student's graph shows (NaN without a graph)
     D.ans(key)                   the numbers in another answer box
   expect(D) returns a number, an array (every one must appear in the answer) or { any: [...] } (one of them must appear).
   NaN or an empty list means "nothing to check yet" and shows nothing.  Each `cells` entry: { table, col, from: (r) => value, tol }. */
(() => {
  const C = {};
  const ratio = (a, b) => a / b;
  const min = (xs) => Math.min(...xs), max = (xs) => Math.max(...xs);
  const nums = (rows, col) => rows.map((r) => r.n(col)).filter((x) => isFinite(x));
  const LY_PER_PC = 3.26;

  /* Faraday Waves (Chladni Plates, Liquid layer, 2026-11-19): k = 2π/λ with λ in mm, ω = 2π × the surface frequency; the slope
     of ω²/k against k² is σ/ρ (water, 998.2 kg/m³), given in mN/m, and the intercept is g */
  C['faraday-waves'] = {
    items: {
      'analysis-2': { tol: 2, expect: (D) => ({ any: [D.intercept(1), D.slope(1) * 998.2 * 1000] }) },
    },
    cells: [{ table: 1, col: 10, from: (r) => 2 * Math.PI / (r.n(9) / 1000) },
      { table: 1, col: 11, from: (r) => Math.pow(2 * Math.PI * r.n(8), 2) / (2 * Math.PI / (r.n(9) / 1000)) },
      { table: 1, col: 12, from: (r) => Math.pow(2 * Math.PI / (r.n(9) / 1000), 2) }],
  };

  /* GenEd astronomy worksheets, 2026-11-17 (Comets and Meteor Showers, Life in the Universe) */
  C['comet-tails'] = {
    items: {
      'analysis-2': { expect: (D) => { const v = nums(D.rows(1), 'Speed'); return v.length ? max(v) / 400 : NaN; } },
    },
    cells: [{ table: 2, col: 5, from: (r) => (r.n(3) + r.n(4)) / 2 }, { table: 2, col: 7, from: (r) => Math.pow(r.n(5), 1.5) }],
  };

  C['habitable-zones'] = {
    items: {
      'analysis-2': { tol: 2, expect: (D) => ({ any: [D.slope(1)] }) },
      'analysis-4': { expect: (D) => Math.pow(D.n(1, { Star: 'Proxima' }, 'Mass'), 4) },
      'analysis-6': { expect: (D) => { const a = D.rows(2).find((r) => Math.abs(r.n(2) / 1000 - 1) < 0.01), b = D.rows(2).find((r) => Math.abs(r.n(2) / 1e6 - 1) < 0.01);
        return a && b ? [ratio(b.n(4), a.n(4)), ratio(a.n('Typical spacing'), b.n('Typical spacing'))] : NaN; } },
    },
    cells: [{ table: 1, col: 12, from: (r) => Math.sqrt(r.n('Luminosity')) }],
  };

  C['intro-aberrations'] = {
    items: {
      'analysis-2': { tol: 6, expect: (D) => ratio(D.n(1, { Telescope: 'sphere', 'Focal ratio': 8 }, 'Wavefront'), D.n(1, { Telescope: 'sphere', 'Focal ratio': 12 }, 'Wavefront')) },
      'analysis-5': { expect: (D) => D.n(3, { Telescope: 'single', Wavelength: 656.3 }, 'Best camera focus') - D.n(3, { Telescope: 'single', Wavelength: 486.1 }, 'Best camera focus') },
    },
  };

  C['intro-seeing'] = {
    items: {
      'analysis-1': { tol: 5, expect: (D) => { const r = D.row(1, { Diameter: 1000, Filter: '550', Exposure: 'long' }); return r ? ratio(r.n('Half light'), r.n('1.22')) : NaN; } },
    },
  };

  C['intro-atmospheres'] = {
    items: {
      'analysis-1': { expect: (D) => ratio(D.n(1, { Temperature: 1000 }, 'rms speed of a real gas'), D.n(1, { Temperature: 100 }, 'rms speed of a real gas')) },
      'analysis-3': { expect: (D) => ratio(D.n(1, { Gas: 'hydrogen' }, 'rms speed of a real gas'), D.n(1, { Gas: 'carbon dioxide' }, 'rms speed of a real gas')) },
    },
    cells: [{ table: 1, col: '1 ÷ √(mass)', from: (r) => 1 / Math.sqrt(r.n('Mass of one molecule')) }],
  };

  C['intro-blackbody'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: D.rows(1).map((r) => r.n('Peak wavelength') * r.n('Temperature')) }) },
      'analysis-2': { expect: (D) => ratio(D.n(1, { Temperature: 3000 }, 'Peak wavelength'), D.n(1, { Temperature: 12000 }, 'Peak wavelength')) },
      'analysis-3': { expect: (D) => ratio(D.n(1, { Temperature: 12000 }, 'Light from each square meter'), D.n(1, { Temperature: 3000 }, 'Light from each square meter')) },
      'analysis-4': { expect: (D) => ratio(D.n(1, { Temperature: 12100 }, 'Light from each square meter'), D.n(1, { Temperature: 5772 }, 'Light from each square meter')) },
    },
  };

  C['intro-celestial-sphere'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-4': { expect: (D) => D.n(2, { Object: 'sun', Declination: (v) => v > 0 }, 'Highest altitude') - D.n(2, { Object: 'sun', Declination: (v) => v < 0 }, 'Highest altitude') },
    },
  };

  C['intro-constellations-3d'] = {
    items: {
      'analysis-1': { expect: (D) => { const by = {}; D.rows(1).forEach((r) => { const k = r.s('Constellation').toLowerCase(); (by[k] = by[k] || []).push(r.n('Distance')); });
        return { any: Object.keys(by).map((k) => ratio(max(by[k]), min(by[k]))).filter((x) => isFinite(x) && x > 1) }; } },
      'analysis-3': { expect: (D) => { const r = D.row(1, { Star: 'rigel' }); return r ? { any: [r.n('Apparent magnitude') - 5 * Math.log10(r.n('Distance') / LY_PER_PC) + 5] } : NaN; } },
      'analysis-4': { expect: (D) => { const a = D.row(1, { Star: 'alnilam' }), b = D.row(1, { Star: 'bellatrix' }); return a && b ? { any: [ratio(a.n('Distance'), b.n('Distance')), ratio(a.n('Visible light'), b.n('Visible light'))] } : NaN; } },
      'analysis-5': { expect: (D) => { const L = nums(D.rows(1), 'Visible light'); return { any: [max(L), min(L)] }; } },
      'analysis-6': { expect: (D) => { const a = D.row(1, { Star: 'γ cas' }), b = D.row(1, { Star: 'caph' }); return a && b ? { any: [ratio(a.n('Distance'), b.n('Distance')), ratio(a.n('Visible light'), b.n('Visible light'))] } : NaN; } },
    },
  };

  C['intro-craters'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: D.rows(1).filter((r) => /moon/i.test(r.s('Target'))).map((r) => ratio(r.n('Crater diameter'), r.n('Asteroid diameter'))) }) },
      'analysis-3': { expect: (D) => ratio(D.n(1, { Target: 'moon', 'Asteroid diameter': 1 }, 'Crater diameter'), D.n(1, { Target: 'earth', 'Asteroid diameter': 1 }, 'Crater diameter')) },
      'analysis-5': { tol: 10, expect: (D) => { const d = D.n(2, { Surface: 'highlands' }, 'Age') - D.n(2, { Surface: 'mare' }, 'Age'); return { any: [d, d * 1e9] }; } },   /* in Gyr or in years */
      'analysis-8': { expect: (D) => ratio(D.n(3, { Planet: 'moon', 'Time since': 4.5 }, 'Cold lid'), D.n(3, { Planet: 'earth', 'Time since': 4.5 }, 'Cold lid')) },
    },
    cells: [{ table: 2, col: 'Craters per km²', from: (r) => r.n('Craters counted') / r.n('Area') }],
  };

  C['intro-em-spectrum'] = {
    items: {
      'analysis-3': { expect: (D) => { const a = D.row(1, { Frequency: 1e8 }), b = D.row(1, { Band: 'visible' }); return a && b ? { any: [ratio(a.n('Wavelength'), b.n('Wavelength')), ratio(b.n('Frequency'), a.n('Frequency'))] } : NaN; } },
      'analysis-4': { expect: (D) => D.n(1, { Band: 'visible' }, 'Wavelength') * 1e9 },
      'analysis-5': { expect: (D) => ratio(1e-10, D.n(1, { Frequency: 1e20 }, 'Wavelength')) },
    },
    cells: [{ table: 1, col: 'λ × f', tol: 1, from: (r) => r.n('Frequency') * r.n('Wavelength') }],
  };

  C['intro-exoplanets'] = {
    items: {
      'analysis-2': { tol: 6, expect: (D) => ratio(D.n(1, { System: 'jupiter' }, 'Star velocity', 1), D.n(1, { System: 'earth' }, 'Star velocity', 1)) },
    },
    cells: [{ table: 1, col: '(planet radius ÷ star radius)²', from: (r) => 1e6 * Math.pow(r.n('Planet radius') / (109.2 * r.n('Star radius')), 2) }],
  };

  C['intro-giant-planets'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0), ratio(D.n(1, { Moon: 'titan' }, 'a^3', 1), D.n(1, { Moon: 'titan' }, 'P^2', 1))] }) },
      'analysis-2': { tol: 5, expect: (D) => ratio(D.slope(1, 0), ratio(D.n(1, { Moon: 'titan' }, 'a^3', 1), D.n(1, { Moon: 'titan' }, 'P^2', 1))) * Math.pow(ratio(D.n(2, { Planet: 'jupiter' }, 'Equatorial radius'), D.n(2, { Planet: 'saturn' }, 'Equatorial radius')), 3) },
      'analysis-7': { expect: (D) => ({ any: [ratio(D.n(4, { Eccentricity: 0.004 }, 'Tidal heating'), D.n(4, { Eccentricity: 0.002 }, 'Tidal heating')), ratio(D.n(4, { Eccentricity: 0.008 }, 'Tidal heating'), D.n(4, { Eccentricity: 0.004 }, 'Tidal heating'))] }) },
    },
    cells: [
      { table: 1, col: 'a^3', tol: 1, from: (r) => Math.pow(r.n('Distance a'), 3) },
      { table: 1, col: 'P^2', tol: 1, from: (r) => Math.pow(r.n('Period P'), 2) },
    ],
  };

  C['intro-gravity'] = {
    items: {
      'analysis-2': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-3': { expect: (D) => 100 * ratio(D.n(1, { Height: 400 }, 'Gravity alone', 0), D.n(1, { Height: 0 }, 'Gravity alone', 0)) },
      'analysis-4': { tol: 6, expect: (D) => 100 * (1 - ratio(D.n(1, { Height: 11 }, 'Gravity alone', 0), D.n(1, { Height: 0 }, 'Gravity alone', 0))) },
      'analysis-6': { expect: (D) => ({ any: [ratio(D.n(1, { World: 'earth' }, 'Weight', 1), D.n(1, { World: 'moon' }, 'Weight', 1)), ratio(D.n(1, { World: 'earth' }, 'Weight', 1), D.n(1, { World: 'mars' }, 'Weight', 1))] }) },
    },
    cells: [{ table: 1, col: '(6.371 / r)²', tol: 1, from: (r) => Math.pow(6.371 / r.n('Distance from the center'), 2) }],
  };

  C['intro-inside-a-planet'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.intercept(1, 0)] }) },
      'analysis-6': { expect: (D) => ({ any: D.rows(4).filter((r) => /continent/i.test(r.s('Block'))).map((r) => ratio(r.n('Root below'), r.n('Crust thickness'))) }) },
      'analysis-7': { expect: (D) => D.n(4, { Block: 'continent', 'Crust thickness': 34.4 }, 'Height above') - D.n(4, { Block: 'ocean', 'Crust thickness': 8 }, 'Height above') },
    },
  };

  C['intro-kepler'] = {
    items: {
      'analysis-4': { expect: (D) => { const c = D.n(1, { Object: 'ceres' }, 'Period'), v = D.n(1, { Object: 'vesta' }, 'Period'); return { any: [c - v, ratio(c, v)] }; } },
    },
    cells: [
      { table: 1, col: 'Semi major axis', tol: 1.5, from: (r) => (r.n('Perihelion') + r.n('Aphelion')) / 2 },
      { table: 1, col: 'Eccentricity', tol: 1.5, from: (r) => (r.n('Aphelion') - r.n('Perihelion')) / (r.n('Aphelion') + r.n('Perihelion')) },
      { table: 1, col: 'a^3', tol: 1.5, from: (r) => Math.pow(r.n('Semi major axis'), 3) },
      { table: 1, col: 'T^2', tol: 1.5, from: (r) => Math.pow(r.n('Period'), 2) },
    ],
  };

  C['intro-lagrange'] = {
    items: {
      'analysis-1': { expect: (D) => { const se = D.n(1, { System: 'sun–earth' }, 'L2 distance') * 149.6e6, em = D.n(1, { System: 'earth–moon' }, 'L2 distance') * 384400; return { any: [se, em, ratio(se, em)] }; } },
      'analysis-2': { expect: (D) => ({ any: [D.n(1, { System: 'sun–earth' }, 'L2 drift time') * 365.25, D.n(1, { System: 'earth–moon' }, 'L2 drift time') * 27.32] }) },
      'analysis-3': { expect: (D) => D.n(1, { System: 'jupiter' }, 'L4 wobble period') * 11.86 },
    },
  };

  C['intro-mars-ages'] = {
    items: {
      'analysis-3': { tol: 10, expect: (D) => { const d = D.n(1, { Surface: 'highlands' }, 'Age') - D.n(1, { Surface: 'northern plains' }, 'Age'); return { any: [d, d * 1e9] }; } },
      'analysis-4': { tol: 6, expect: (D) => { const f = D.n(1, { Surface: 'caldera' }, 'Age') / 4.5; return { any: [f, 100 * f] }; } },
      'analysis-5': { expect: (D) => ({ any: [ratio(D.n(2, { Target: 'moon', Speed: 18 }, 'Crater diameter'), D.n(2, { Target: 'mars', Speed: 18 }, 'Crater diameter')), ratio(D.n(2, { Target: 'mars', Speed: 18 }, 'Crater diameter'), D.n(2, { Target: 'mars', Speed: 10 }, 'Crater diameter'))] }) },
    },
    cells: [{ table: 1, col: 'Craters per km²', from: (r) => r.n('Craters counted') / r.n('Area') }],
  };

  C['intro-mirrors'] = {
    items: {
      'analysis-2': { expect: (D) => { const sp = (m) => D.n(1, { Material: m, Wavelength: 700 }, 'Focal length') - D.n(1, { Material: m, Wavelength: 400 }, 'Focal length'); return { any: [sp('flint'), sp('crown')] }; } },
      'analysis-3': { tol: 4, expect: (D) => { const sp = (m) => D.n(1, { Material: m, Wavelength: 700 }, 'Focal length') - D.n(1, { Material: m, Wavelength: 400 }, 'Focal length'); return { any: [5 * sp('flint'), 5 * sp('crown')] }; } },
      'analysis-4': { expect: (D) => ({ any: [D.n(1, { Element: 'mirror', Wavelength: 700 }, 'Focal length') - D.n(1, { Element: 'mirror', Wavelength: 400 }, 'Focal length'), D.n(1, { Element: 'mirror', Wavelength: 550 }, 'Focal length')] }) },
      'analysis-5': { expect: (D) => 100 * (D.n(1, { Material: 'crown', Wavelength: 700 }, 'Focal length') - D.n(1, { Material: 'crown', Wavelength: 400 }, 'Focal length')) },
    },
  };

  C['intro-moon'] = {
    items: {
      'analysis-3': { tol: 4, expect: (D) => { const r = D.rows(1, 0); if (r.length < 2) return NaN; const dh = r[1].n('Moonrise') - r[0].n('Moonrise'), dd = r[1].n('Time from start') - r[0].n('Time from start'); return { any: [dh, dh / dd, 60 * dh / dd] }; } },
      'analysis-4': { expect: (D) => { const t = D.rows(1, 1).filter((r) => r.n('Days since new moon') < 0.01).map((r) => r.n('Time from start')); if (t.length < 2) return NaN; const s = t[1] - t[0]; return { any: [s, s - 27.32] }; } },
      'analysis-6': { expect: (D) => max(nums(D.rows(1, 1), 'Moon above or below').map(Math.abs)) },
      'analysis-7': { expect: (D) => { const t = D.rows(1, 1).filter((r) => /possible/i.test(r.s('Eclipse'))).map((r) => r.n('Time from start')); const next = t.find((x) => x > t[0] + 60); return isFinite(next) ? { any: [next - t[0], (next - t[0]) / 29.53] } : NaN; } },
    },
  };

  C['intro-parallax'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: nums(D.rows(1, 0), 'Distance d').concat(nums(D.rows(1, 0), 'Distance from your ruler')).map((d) => d * LY_PER_PC) }) },
      'analysis-2': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
    },
    cells: [
      { table: 1, col: '1 ÷ d', from: (r) => 1 / r.n('Distance d') },
      { table: 1, col: 'Distance from your ruler', from: (r) => 2000 / r.n("Your ruler's shift") },
    ],
  };

  C['intro-planet-temperatures'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-2': { expect: (D) => ratio(D.n(1, { Distance: 0.5 }, 'Temperature, no greenhouse', 0), D.n(1, { Distance: 2 }, 'Temperature, no greenhouse', 0)) },
      'analysis-5': { expect: (D) => ({ any: ['venus', 'earth', 'mars'].map((p) => { const r = D.row(1, { Planet: p }, 2); return r ? r.n('Surface temperature') - r.n('Temperature, no greenhouse') : NaN; }) }) },
    },
    cells: [{ table: 1, col: '1/d^2', tol: 1, from: (r) => 1 / Math.pow(r.n('Distance d'), 2) }],
  };

  C['intro-precession'] = {
    items: {
      'analysis-3': { tol: 5, expect: (D) => D.slope(1, 0) * 2500 + D.intercept(1, 0) },
      'analysis-5': { expect: (D) => 50 * D.n(1, { Spin: 3000, 'Distance from the post': 0.1 }, 'Time for one turn') },
      'analysis-6': { expect: (D) => 25772 * 365.25 },
    },
  };

  C['intro-resolution'] = {
    items: {
      'analysis-3': { tol: 5, expect: (D) => ratio(D.n(1, { 'Mirror diameter': 1 }, 'Angle between'), D.n(1, { 'Mirror diameter': 10 }, 'Angle between')) },
      'analysis-4': { expect: (D) => ({ any: [ratio(D.n(1, { Wavelength: 650 }, 'Angle between'), D.n(1, { Wavelength: 405 }, 'Angle between'))] }) },
      'analysis-5': { expect: (D) => { const th = 1.22 * 0.211 / 100; return { any: [th, th * 1e6, th * 180 / Math.PI] }; } },
      'analysis-6': { expect: (D) => { const r = D.row(1, { 'Mirror diameter': 2.4, Wavelength: 550 }); const th = r ? r.n('Angle between') * 1e-6 : 1.22 * 550e-9 / 2.4; const d = 1.22 * 0.211 / th; return { any: [d / 1000, d] }; } },
    },
    cells: [{ table: 1, col: '1.22 λ/D', tol: 1, from: (r) => 1.22 * r.n('Wavelength') * 1e-9 / r.n('Mirror diameter') * 1e6 }],
  };

  C['intro-resonances'] = {
    cells: [{ table: 2, col: 'Predicted a', tol: 1, from: (r) => Math.pow(11.86 / r.n('Period ratio'), 2 / 3) }],
  };

  C['intro-retrograde'] = {
    cells: [{ table: 2, col: 'S from the formula', tol: 1, from: (r) => 1 / Math.abs(1 / 365.25 - 1 / r.n('Sidereal period')) }],
  };

  C['intro-scale'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-2': { expect: (D) => ({ any: [D.n(1, { Object: 'neptune' }, 'Light travel time') / 60, D.n(1, { Object: 'voyager' }, 'Light travel time') / 60] }) },
      'analysis-3': { expect: (D) => { const au = (o) => D.n(1, { Object: o }, 'Average distance'); const g1 = au('jupiter') - au('mars'), g2 = au('mars') - au('earth'); return { any: [ratio(au('neptune'), au('earth')), g1, g2, ratio(g1, g2)] }; } },
      'analysis-5': { expect: (D) => { const au = 4.25 * 63241; return { any: [au, ratio(au, D.n(1, { Object: 'neptune' }, 'Average distance'))] }; } },
    },
    cells: [
      { table: 1, col: 'Distance (km)', tol: 1, from: (r) => r.n('Average distance') * 1.496e8 },
      { table: 1, col: 'Light travel time', tol: 1, from: (r) => r.n('Average distance') * 8.317 },
    ],
  };

  C['intro-seasons'] = {
    items: {
      'analysis-2': { expect: (D) => D.n(1, { Date: 'jun 21' }, 'Noon Sun altitude', 0) - D.n(1, { Date: 'dec 21' }, 'Noon Sun altitude', 0) },
      'analysis-3': { expect: (D) => D.n(1, { Date: 'jun 21' }, 'Day length', 0) - D.n(1, { Date: 'dec 21' }, 'Day length', 0) },
      'analysis-4': { expect: (D) => ratio(D.n(1, { Date: 'jun 21' }, 'Daily sunlight', 0), D.n(1, { Date: 'dec 21' }, 'Daily sunlight', 0)) },
      'analysis-5': { expect: (D) => ratio(D.n(1, { Date: 'jan 3' }, 'Daily sunlight', 1), D.n(1, { Date: 'jul 4' }, 'Daily sunlight', 1)) },
    },
  };

  C['intro-sidereal-day'] = {
    items: {
      'analysis-3': { expect: (D) => { const r = D.row(1, { Planet: 'earth' }); if (!r) return NaN; const h = r.n('Solar day') - r.n('Sidereal day'); return { any: [h, 60 * h, 3600 * h] }; } },
      'analysis-4': { expect: (D) => { const r = D.row(1, { Planet: 'mars' }); if (!r) return NaN; const h = r.n('Solar day') - r.n('Sidereal day'); return { any: [h, 60 * h] }; } },
      'analysis-5': { expect: (D) => { const r = D.row(1, { Planet: 'mercury' }); return r ? r.n('Solar day') / 24 / r.n('Year') : NaN; } },
    },
    cells: [{ table: 1, col: 'Solar day = time ÷ noons', tol: 1, from: (r) => r.n('Time (h)') / r.n('Noons') }],
  };

  C['intro-solar-system-formation'] = {
    items: {
      'analysis-2': { tol: 4, expect: (D) => { const R = (t) => D.n(1, { 'Cloud turns once every': t }, 'Disk radius'); return { any: [ratio(R(4), R(16)), ratio(R(2), R(4))] }; } },
      'analysis-4': { expect: (D) => ratio(D.n(2, { 'Distance from the Sun': 1 }, 'Temperature', 0), D.n(2, { 'Distance from the Sun': 4 }, 'Temperature', 0)) },
      'analysis-6': { expect: (D) => { const y = D.n(2, { "Sun's brightness": 4 }, 'Frost line'), t = D.n(2, { "Sun's brightness": 1 }, 'Frost line'); return { any: [y, ratio(y, t)] }; } },
    },
    cells: [{ table: 1, col: 'Spin up', from: (r) => 1e6 * r.n('Cloud turns once every') / r.n('Disk edge goes around') }],
  };

  C['intro-spectra'] = {
    items: {
      'analysis-3': { tol: 5, expect: (D) => { const w = nums(D.rows(1).filter((r) => /sodium/i.test(r.s('Source'))), 'Wavelength'); return w.length >= 2 ? Math.abs(w[0] - w[1]) : NaN; } },
    },
  };

  C['intro-stellarium-sky'] = {
    items: {
      'analysis-2': { tol: 5, expect: (D) => { const d = (o) => { const rs = D.rows(1).filter((r) => r.s('Object').toLowerCase().indexOf(o) >= 0); if (rs.length < 2) return []; const az = Math.abs(rs[1].n('Azimuth') - rs[0].n('Azimuth')); return [Math.abs(rs[1].n('Altitude') - rs[0].n('Altitude')), Math.min(az, 360 - az)]; }; return { any: d('polaris').concat(d('betelgeuse')) }; } },
      'analysis-6': { expect: (D) => ({ any: D.rows(1).filter((r) => /^sun$/i.test(r.s('Object').trim())).map((r) => 90 - 32.5 + r.n('Declination')) }) },
    },
  };

  C['intro-telescope'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: D.rows(1, 0).map((r) => ratio(r.n('Objective focal length'), r.n('Eyepiece focal length'))) }) },
      'analysis-2': { expect: (D) => 0.518 * Math.abs(D.n(1, { 'Eyepiece focal length': 2.5 }, 'Magnification')) },
      'analysis-4': { expect: (D) => Math.sqrt(1 / D.slope(1, 1)) },
      'analysis-5': { expect: (D) => ratio(D.n(1, { 'Objective diameter': 6 }, 'Light from a star', 1), D.n(1, { 'Objective diameter': 3 }, 'Light from a star', 1)) },
      'analysis-6': { expect: (D) => ({ any: [Math.pow(240 / 0.7, 2), Math.pow(1000 / 0.7, 2)] }) },
    },
    cells: [{ table: 1, col: 'D²', tol: 1, from: (r) => Math.pow(r.n('Objective diameter'), 2) }],
  };

  C['intro-tides'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: ['Pull at Earth', 'Tidal pull, near', 'Tidal pull, far'].map((c) => ratio(D.n(1, { "Moon's distance": 40 }, c), D.n(1, { "Moon's distance": 80 }, c))) }) },
      'analysis-2': { expect: (D) => { const r = D.row(1, { "Moon's distance": 60.34 }); return r ? ratio(r.n('Pull at Earth'), r.n('Tidal pull, near')) : NaN; } },
    },
  };

  /* Bose–Einstein Condensation (2026-11-15). h²/(2π k_B) in u·µm²·nK, from the constants the question gives */
  const H2_2PIK = Math.pow(6.62607015e-34, 2) / (2 * Math.PI * 1.380649e-23 * 1.66053906892e-27) * 1e21;
  C['bose-einstein-condensation'] = {
    items: {
      'analysis-1': { expect: (D) => H2_2PIK / D.slope(1, 0) },
      'analysis-5': { expect: (D) => Math.sqrt(-D.intercept(2, 0) / D.slope(2, 0)) },
    },
    cells: [
      { table: 1, col: '1/T', from: (r) => 1 / r.n('Temperature') },
      { table: 1, col: 'λ_T² (µm²)', from: (r) => Math.pow(r.n('Thermal wavelength'), 2) },
      { table: 2, col: 'T² (nK²)', from: (r) => Math.pow(r.n('Temperature'), 2) },
      { table: 2, col: '1 − (T/T_c)²', from: (r) => 100 * Math.max(0, 1 - Math.pow(r.n('Temperature') / r.n('T_c'), 2)) },
    ],
  };

  /* Group D astronomy worksheets (2026-11-17) */
  C['cosmic-fate'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-3': { expect: (D) => { const r = D.row(3, { z: 0.5 }); return r ? [ratio(r.n('Distance, our universe'), r.n('Distance, matter only')), Math.sqrt(100 / r.n('Brightness'))] : NaN; } },
    },
    cells: [{ table: 1, col: '(1 + z)³', from: (r) => Math.pow(1 + r.n('Redshift'), 3) }],
  };

  C['black-hole-chirp'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-2': { tol: 5, expect: (D) => D.slope(1, 0) / 1e6 },
      'analysis-3': { expect: (D) => { const out = []; for (const p of ['GW150914', 'Heavy pair']) { const r = D.row(1, { Pair: p }); if (!r) return NaN; const dm = r.n('Total mass') - r.n('Final black hole'); out.push(dm, 100 * dm / r.n('Total mass')); } return out; } },
    },
    cells: [{ table: 1, col: '1/M', from: (r) => 1 / r.n('Total mass') }],
  };

  C['equivalence-principle'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-2': { expect: (D) => { const r = D.row(1, { "Rocket's acceleration": 10.79 }); return r ? r.n('Rocket scale (kg') * 2.205 : NaN; } },
    },
  };

  C['star-formation'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0), D.slope(1, 0) * 1e6] }) },
      'analysis-5': { expect: (D) => { const r = D.row(3, { 'Fusion at': 3 }); return r ? ({ any: [r.n('Lightest star'), r.n('Lightest star') * 1048] }) : NaN; } },
    },
    cells: [{ table: 1, col: 'T^1.5', from: (r) => Math.pow(r.n('T (K)'), 1.5) }, { table: 2, col: 'Shrink factor squared', from: (r) => Math.pow(r.n('D₀/D'), 2) }],
  };

  /* Group C GenEd astronomy (2026-11-17). Columns by number: the headings carry symbols. */
  const rowAt = (D, t, col, v, tol) => D.rows(t).find((r) => Math.abs(r.n(col) / v - 1) < (tol || 0.003)) || null;
  C['galaxy-center'] = {
    items: {
      /* one lap t = 2πr/v, r in ly turned to km (9.461 × 10¹² km per ly), in millions of years (3.156 × 10⁷ s per year) */
      'analysis-3': { expect: (D) => { const r = rowAt(D, 1, 2, 40000); return r ? 2 * Math.PI * r.n(2) * 9.461e12 / r.n(3) / 3.156e7 / 1e6 : NaN; } },
      'analysis-4': { expect: (D) => { const r = rowAt(D, 1, 2, 40000); return r ? Math.pow(r.n(5), 3) / Math.pow(r.n(6), 2) : NaN; } },
      'analysis-5': { expect: (D) => { const a = rowAt(D, 1, 2, 80000), b = rowAt(D, 1, 2, 40000); return a && b ? a.n(7) / b.n(7) : NaN; } },
    },
  };
  C['galaxy-tides'] = {
    items: {
      'analysis-3': { expect: (D) => { const r = D.rows(1).find((x) => /dwarf/i.test(x.s(2))); if (!r) return NaN; const d = r.n(6); return Math.pow((d + 3.35) / (d - 3.35), 2); } },
    },
  };
  C['quasar-engine'] = {
    items: {
      'analysis-2': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      /* η = slope × (seconds in a year) ÷ (one solar mass × c²), as a fraction or in percent */
      'analysis-3': { expect: (D) => { const e = D.slope(1, 0) * 3.156e7 / (1.988e30 * 9.0e16); return { any: [e, 100 * e] }; } },
      'analysis-4': { expect: (D) => { const a = D.rows(1).find((r) => Math.abs(r.n(4) - 10) < 0.01 && Math.abs(r.n(3) - 1) < 0.01), b = D.rows(1).find((r) => Math.abs(r.n(4) - 0.7) < 0.01); return a && b ? a.n(5) / b.n(5) : NaN; } },
      'analysis-5': { expect: (D) => { const r = D.rows(1).find((x) => Math.abs(x.n(3) - 10) < 0.01 && Math.abs(x.n(2) / 1e8 - 1) < 0.01); return r ? [r.n(8), r.n(5) / 1.26e31] : NaN; } },
      'analysis-6': { expect: (D) => { const r = rowAt(D, 3, 3, 17); return r ? r.n(5) / r.n(4) : NaN; } },
    },
  };
  C['cluster-dark-matter'] = {
    items: {
      /* v = √2 σ, then M = v²R/G with R = 2,000 kpc and G = 4.30 × 10⁻⁶ kpc (km/s)²/M☉ */
      'analysis-1': { expect: (D) => { const r = rowAt(D, 1, 2, 1e15); if (!r) return NaN; const v = Math.SQRT2 * r.n(6); return [v, v * v * 2000 / 4.30e-6]; } },
      'analysis-2': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-3': { expect: (D) => { const r = rowAt(D, 1, 2, 1e15); return r ? r.n(8) / r.n(9) : NaN; } },
      'analysis-4': { expect: (D) => { const r = D.rows(2)[0]; return r ? ({ any: [r.n(4) / (r.n(5) + r.n(6))] }) : NaN; } },
    },
    cells: [{ table: 1, col: 10, from: (r) => r.n(6) * r.n(6) }],
  };

  /* Group A GenEd astronomy sheets (2026-11-17) */
  C['star-lifetimes'] = {
    items: {
      /* "10.56 billion years" reads as 1.056×10¹⁰, so the slope in years counts too */
      'analysis-1': { expect: (D) => { const s = D.slope(1, 0); return { any: [s, s * 1e9] }; } },
      'analysis-2': { expect: (D) => ratio(D.n(1, { Star: 'red dwarf' }, 'Lifetime'), D.n(1, { Star: 'The Sun' }, 'Lifetime')) },
      'analysis-3': { expect: (D) => ratio(D.n(1, { Star: 'The Sun' }, 'Lifetime'), D.n(1, { 'Mass M': 3 }, 'Lifetime')) },
      /* 4.6 billion years over the Sun's lifetime, as a fraction or in percent */
      'analysis-4': { expect: (D) => { const f = 4.6 / D.n(1, { Star: 'The Sun' }, 'Lifetime'); return { any: [f, 100 * f] }; } },
    },
    cells: [{ table: 1, col: 'M/L', from: (r) => r.n('Mass M') / r.n('Luminosity') }],
  };
  C['sunspot-cycle'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-2': { tol: 0.1, expect: (D) => D.intercept(1, 0) + 26 * D.slope(1, 0) },
      'analysis-3': { expect: (D) => ratio(D.n(2, { Cycle: 19 }, 'Peak smoothed'), D.n(2, { Cycle: 24 }, 'Peak smoothed')) },
    },
  };
  C['star-census'] = {
    items: {
      /* the slope, and n = slope ÷ (4π/3) */
      'analysis-1': { expect: (D) => { const s = D.slope(1, 0); return isFinite(s) ? [s, s / (4 * Math.PI / 3)] : NaN; } },
      'analysis-2': { expect: (D) => ({ any: [D.intercept(1, 0) + 1000 * D.slope(1, 0)] }) },
      'analysis-3': { expect: (D) => { const r = D.row(1, { 'Survey radius': 6 }); return r ? [100 * r.n('Red dwarfs') / r.n('Stars within'), 100 * r.n('More luminous') / r.n('Stars within')] : NaN; } },
    },
    cells: [{ table: 1, col: 'r³', from: (r) => Math.pow(r.n('Survey radius'), 3) }],
  };
  C['stellar-temperature'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0)] }) },
      'analysis-3': { expect: (D) => ratio(D.n(1, { 'Temperature T': 5772 }, 'Ca II'), D.n(1, { 'Temperature T': 12000 }, 'Ca II')) },
    },
    cells: [{ table: 1, col: '1/T', from: (r) => 1 / r.n('Temperature T') }],
  };

  C['pulsar-spin'] = {
    items: {
      'analysis-1': { tol: 1, expect: (D) => ({ any: D.rows(1).slice(0, 6).map((r) => r.n('Spin period') * r.n('Shrink factor') ** 2) }) },
      'analysis-5': { expect: (D) => { const r = D.row(3, { Setup: 'Crab' }); return r ? ({ any: [r.n('Slowing') * 3.156e7, r.n('Slowing') * 365.25 * 86400] }) : NaN; } },
    },
    cells: [{ table: 1, col: 'f²', from: (r) => r.n('Shrink factor') ** 2 }],
  };

  C['interstellar-medium'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0), 30 / D.slope(1, 0)] }) },
      'analysis-5': { tol: 2, expect: (D) => { const r = D.row(3, { Setup: 'moving away' }); return r ? ({ any: [3e5 * Math.abs(r.n('Shift')) / 1e3 / 1420.405751768, 299792.458 * Math.abs(r.n('Shift')) / 1e3 / 1420.405751768] }) : NaN; } },
    },
    cells: [{ table: 1, col: '1/√f', from: (r) => 1 / Math.sqrt(r.n('Visible let through')) }],
  };

  C['binary-masses'] = {
    items: {
      'analysis-3': { expect: (D) => ({ any: [D.slope(2, 0), -D.slope(2, 0)] }) },
      'analysis-4': { expect: (D) => { const d = Math.max(...D.rows(2).map((r) => Math.abs(r.n('λ₁ (nm)') - 656.28)).filter(isFinite)); return isFinite(d) ? ({ any: [d, 3e5 * d / 656.28] }) : NaN; } },
    },
    cells: [
      { table: 1, col: 'a³/P²', from: (r) => r.n('a (AU)') ** 3 / r.n('P (yr)') ** 2 },
      { table: 1, col: 'a₁/a₂', from: (r) => r.n('a₁ (AU)') / r.n('a₂ (AU)') }],
  };

  /* ==STATS chance START== Statistics for physics (Chance Lab and Chi-Square Tests, 2026-11-19) */
  const meanSd = (rows, xcol, fcol) => {
    const xf = rows.map((r) => [r.n(xcol), r.n(fcol)]).filter(([x, f]) => isFinite(x) && isFinite(f)), n = xf.reduce((a, [, f]) => a + f, 0);
    if (!(n > 1)) return [NaN, NaN];
    const m = xf.reduce((a, [x, f]) => a + x * f, 0) / n;
    return [m, Math.sqrt(xf.reduce((a, [x, f]) => a + (x - m) * (x - m) * f, 0) / (n - 1))];
  };
  const both = (v) => (v.every(isFinite) ? v : NaN);
  C['ws-probability'] = {
    items: {
      'analysis-1': { expect: (D) => both(meanSd(D.rows(1), 1, 'Frequency')) },
      'analysis-3': { expect: (D) => both(meanSd(D.rows(2), 1, 'Frequency')) },
      'analysis-4': { expect: (D) => both([meanSd(D.rows(3), 'Profit', 'Frequency')[0]]) },
    },
    cells: [],
  };
  const sumCol = (rows, col) => { const v = nums(rows, col); return v.length ? v.reduce((a, b) => a + b, 0) : NaN; };
  const contrib = (r) => (r.n('Observed') - r.n('Expected')) ** 2 / r.n('Expected');
  C['ws-chi-square'] = {
    items: {
      'analysis-1': { expect: (D) => sumCol(D.rows(1), 4) },
      'analysis-2': { expect: (D) => { const a = D.n(1, { Face: 6 }, 4), b = D.n(2, { Face: 6 }, 4), s = sumCol(D.rows(2), 4); return isFinite(a) && isFinite(b) && a > 0 && isFinite(s) ? [s, b / a] : NaN; } },
    },
    cells: [1, 2, 3, 4].map((t) => ({ table: t, col: 4, from: contrib })),
  };
  /* ==STATS chance END== */

  window.VD_WS_CHECKS = C;
})();
