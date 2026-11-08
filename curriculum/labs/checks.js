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

  C['intro-aberrations'] = {
    items: {
      'analysis-2': { tol: 6, expect: (D) => ratio(D.n(1, { Telescope: 'sphere', 'Focal ratio': 8 }, 'Wavefront'), D.n(1, { Telescope: 'sphere', 'Focal ratio': 12 }, 'Wavefront')) },
      'analysis-5': { expect: (D) => D.n(3, { Telescope: 'single', Wavelength: 656.3 }, 'Best camera focus') - D.n(3, { Telescope: 'single', Wavelength: 486.1 }, 'Best camera focus') },
      'analysis-6': { tol: 5, expect: (D) => { const r = D.row(4, { Diameter: 1000, Filter: '550', Exposure: 'long' }); return r ? ratio(r.n('Half light'), r.n('1.22')) : NaN; } },
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
      'analysis-3': { tol: 6, expect: (D) => ratio(D.n(1, { System: 'jupiter' }, 'Star velocity', 1), D.n(1, { System: 'earth' }, 'Star velocity', 1)) },
    },
    cells: [{ table: 1, col: '(planet radius ÷ star radius)²', from: (r) => 1e6 * Math.pow(r.n('Planet radius') / (109.2 * r.n('Star radius')), 2) }],
  };

  C['intro-giant-planets'] = {
    items: {
      'analysis-1': { expect: (D) => ({ any: [D.slope(1, 0), D.slope(1, 1)] }) },
      'analysis-2': { tol: 5, expect: (D) => ratio(D.slope(1, 0), D.slope(1, 1)) * Math.pow(ratio(D.n(2, { Planet: 'jupiter' }, 'Equatorial radius'), D.n(2, { Planet: 'saturn' }, 'Equatorial radius')), 3) },
      'analysis-8': { expect: (D) => ({ any: [ratio(D.n(4, { Eccentricity: 0.004 }, 'Tidal heating'), D.n(4, { Eccentricity: 0.002 }, 'Tidal heating')), ratio(D.n(4, { Eccentricity: 0.008 }, 'Tidal heating'), D.n(4, { Eccentricity: 0.004 }, 'Tidal heating'))] }) },
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
      'analysis-8': { expect: (D) => ({ any: D.rows(4).filter((r) => /continent/i.test(r.s('Block'))).map((r) => ratio(r.n('Root below'), r.n('Crust thickness'))) }) },
      'analysis-9': { tol: 5, expect: (D) => { const c = D.rows(4).filter((r) => /continent/i.test(r.s('Block'))); if (c.length < 2) return NaN;
        const t = c.map((r) => r.n('Crust thickness')), h = c.map((r) => r.n('Height above')); const i = t.indexOf(min(t)), j = t.indexOf(max(t)); return 10 * (h[j] - h[i]) / (t[j] - t[i]); } },
      'analysis-10': { expect: (D) => D.n(4, { Block: 'continent', 'Crust thickness': 34.4 }, 'Height above') - D.n(4, { Block: 'ocean', 'Crust thickness': 8 }, 'Height above') },
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
      'analysis-2': { expect: (D) => ({ any: [ratio(D.n(1, { Distance: 0.5 }, 'Starlight', 0), D.n(1, { Distance: 1 }, 'Starlight', 0)), ratio(D.n(1, { Distance: 1 }, 'Starlight', 0), D.n(1, { Distance: 2 }, 'Starlight', 0))] }) },
      'analysis-3': { expect: (D) => ratio(D.n(1, { Distance: 0.5 }, 'Temperature, no greenhouse', 0), D.n(1, { Distance: 2 }, 'Temperature, no greenhouse', 0)) },
      'analysis-6': { expect: (D) => ({ any: ['venus', 'earth', 'mars'].map((p) => { const r = D.row(1, { Planet: p }, 2); return r ? r.n('Surface temperature') - r.n('Temperature, no greenhouse') : NaN; }) }) },
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
      'analysis-9': { tol: 4, expect: (D) => { const sum = (d) => { const rs = D.rows(2, 1).filter((r) => r.s('Date').toLowerCase().indexOf(d) >= 0); return rs.length === 2 ? rs[0].n('Sundial') + rs[1].n('Sundial') : NaN; }; return { any: [sum('11 feb'), sum('3 nov')] }; } },
    },
    cells: [{ table: 1, col: 'Solar day = time ÷ noons', tol: 1, from: (r) => r.n('Time (h)') / r.n('Noons') }],
  };

  C['intro-solar-system-formation'] = {
    items: {
      'analysis-2': { tol: 4, expect: (D) => { const R = (t) => D.n(1, { 'Cloud turns once every': t }, 'Disk radius'); return { any: [ratio(R(4), R(16)), ratio(R(2), R(4))] }; } },
      'analysis-4': { expect: (D) => ratio(D.n(2, { 'Distance from the Sun': 1 }, 'Temperature', 0), D.n(2, { 'Distance from the Sun': 4 }, 'Temperature', 0)) },
      'analysis-6': { expect: (D) => { const y = D.n(2, { "Sun's brightness": 4 }, 'Frost line'), t = D.n(2, { "Sun's brightness": 1 }, 'Frost line'); return { any: [y, ratio(y, t)] }; } },
      'analysis-10': { expect: (D) => ratio(D.n(4, { Radius: 50, 'Forms after': 0.5 }, 'Aluminum 26 heat'), D.n(4, { Radius: 50, 'Forms after': 2 }, 'Aluminum 26 heat')) },
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

  window.VD_WS_CHECKS = C;
})();
