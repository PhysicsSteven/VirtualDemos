/* Known values for the break-it test (tools/breakit.cjs), gps-clocks. No debug hook: the state is read from the controls (the place
   chips, the mode buttons, the spin box and the distance readout) and the physics is worked again here to first order in GM/(rc^2),
   a different route from the page's square roots. Holds: net = gravity + speed as shown; net gain per day equals
   (GM/c^2)(1/RE - 3/(2r)) + v_G^2/(2c^2) for an orbit (and GM/c^2 (1/RE - 1/r) + (v_G^2 - v^2)/(2c^2) at rest on a tower);
   the fractional rate difference and the light travel distance agree with it; the orbit where the effects cancel is
   r = 3/2 RE for a ground clock at rest (shifted by the ground clock's own speed when it turns); the Schwarzschild radii are
   8.87 mm (Earth) and 2.95 km (Sun); the GPS orbit with a ground clock at rest gives +45.7 us gravity, -7.2 us speed, +38.5 us net
   per day (the textbook values). */
const pre = `const GM = 3.986004418e14, C = 299792458, RE = 6.371e6, WE = 7.2921159e-5, DAY = 86400;
  const rd = (a) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent === a) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const us = (t) => { if (t == null) return NaN; const m = t.match(/^(-?[\\d.]+) (ps|μs)/); return m ? parseFloat(m[1]) * (m[2] === 'ps' ? 1e-6 : 1) : NaN; };
  const press = (sel) => document.querySelector(sel + '[aria-pressed=true]');
  const place = press('#places button'), mode = press('#modeSeg button'), spin = document.getElementById('spin').checked;
  if (!mode || !document.getElementById('out').children.length) return true;
  const PLR = { tower: RE + 22.5, iss: RE + 4e5, gps: 2.656e7, geo: 4.2164e7 };
  const km = parseFloat(document.getElementById('oR').textContent.replace(/,/g, '')) * 1000;
  const rs = place ? [PLR[place.dataset.k]] : [km - 500, km + 500];
  const orbit = mode.dataset.m === 'orbit', vG = spin ? WE * RE : 0;
  /* per day, in us, to first order; grav, speed and net */
  const first = (r) => { const v2 = orbit ? Math.sqrt(GM / r) : (spin ? WE * r : 0);
    const grav = GM / (C * C) * (1 / RE - 1 / r) * DAY * 1e6, speed = (vG * vG - v2 * v2) / (2 * C * C) * DAY * 1e6; return { grav, speed, net: grav + speed }; };
  const inside = (got, key, tol) => { const a = rs.map((r) => first(r)[key]); return got >= Math.min(...a) - tol && got <= Math.max(...a) + tol; };
  const blind = document.getElementById('labBlind').checked;
`;
module.exports = {
  checks: [
    { name: "net gain per day = gravity + speed, and equals the first order physics for the shown place", fn: `(() => { ${pre}
      if (blind) return true;
      const g = us(rd('Gravity (higher runs faster)')), s = us(rd('Speed (moving runs slower)')), n = us(rd('Net gain per day'));
      if (![g, s, n].every(isFinite)) return 'a rate readout is missing: ' + [rd('Gravity (higher runs faster)'), rd('Speed (moving runs slower)'), rd('Net gain per day')];
      const tol = (v) => Math.abs(v) < 0.01 ? 0.0002 : 0.0006 + 1e-6 * Math.abs(v);     /* the shown digits: 0.001 us, or 0.01 ps */
      if (Math.abs(g + s - n) > 0.0016 + 3e-4 * 0 + 2e-6 * Math.abs(n)) return 'gravity ' + g + ' + speed ' + s + ' = ' + (g + s) + ' but net shows ' + n;
      if (!inside(g, 'grav', tol(g) + 2e-6 * Math.abs(g))) return 'gravity shows ' + g + ' us/day, first order gives ' + rs.map((r) => first(r).grav);
      if (!inside(s, 'speed', tol(s) + 2e-6 * Math.abs(s))) return 'speed shows ' + s + ' us/day, first order gives ' + rs.map((r) => first(r).speed);
      if (!inside(n, 'net', tol(n) + 2e-6 * Math.abs(n))) return 'net shows ' + n + ' us/day, first order gives ' + rs.map((r) => first(r).net);
      return true; })()` },
    { name: "fractional rate difference and light travel distance follow from the net gain", fn: `(() => { ${pre}
      if (blind) return true;
      const t = rd('Fractional rate difference'), m = t && t.match(/^(-?[\\d.]+) × 10(.+)$/); if (!m) return t === '0' ? true : 'odd fractional rate text ' + t;
      const SUP = { '⁻': '-', '⁰': '0', '¹': '1', '²': '2', '³': '3', '⁴': '4', '⁵': '5', '⁶': '6', '⁷': '7', '⁸': '8', '⁹': '9' };
      const e = +m[2].split('').map((c) => SUP[c]).join(''), frac = parseFloat(m[1]) * 10 ** e, a = rs.map((r) => first(r).net * 1e-6 / DAY);
      const lo = Math.min(...a), hi = Math.max(...a), pad = 0.0051 * 10 ** e + 1e-6 * Math.abs(frac);
      if (frac < Math.min(lo, hi) - pad || frac > Math.max(lo, hi) + pad) return 'fractional difference shows ' + t + ', first order gives ' + a;
      const d = rd('Light travel distance of one day\\'s gain'), dm = d && d.match(/^([\\d.]+) (km|mm)$/); if (!dm) return 'odd light travel text ' + d;
      const meters = parseFloat(dm[1]) * (dm[2] === 'km' ? 1000 : 0.001), want = a.map((x) => Math.abs(x) * DAY * C), w = Math.max(...want), w0 = Math.min(...want);
      const tol = dm[2] === 'km' ? 5.1 : 0.0051e-3 * 1000 / 1000 * 1;     /* 0.01 km or 0.01 mm */
      const tolM = dm[2] === 'km' ? 5.1 : 0.0051;
      if (meters < w0 - tolM - 1e-5 * w || meters > w + tolM + 1e-5 * w) return 'light travel distance shows ' + d + ', net gain gives ' + w0 + ' to ' + w + ' m';
      return true; })()` },
    { name: "the orbit where the effects cancel, and the Schwarzschild radii", fn: `(() => { ${pre}
      if (blind) return true;
      const t = rd('Orbits where the effects cancel'), m = t && t.match(/^r = ([\\d,]+) km$/); if (!m) return 'odd crossover text ' + t;
      const r0 = 1 / ((2 / 3) * (1 / RE + vG * vG / (2 * GM))), got = parseFloat(m[1].replace(/,/g, '')) * 1000;
      if (Math.abs(got - r0) > 1500) return 'orbit where the effects cancel shows ' + t + ', first order gives ' + (r0 / 1000).toFixed(1) + ' km';
      const e = rd('Schwarzschild radius 2GM/c²: Earth'), s = rd('Sun');
      if (e !== (2 * GM / (C * C) * 1000).toFixed(2) + ' mm') return 'Earth Schwarzschild radius shows ' + e;
      if (s !== (2 * 1.32712440018e20 / (C * C) / 1000).toFixed(2) + ' km') return 'Sun Schwarzschild radius shows ' + s;
      return true; })()` },
    { name: "GPS orbit, ground clock at rest: +45.7 gravity, -7.2 speed, +38.5 net (us per day)", fn: `(() => { ${pre}
      if (blind || !place || place.dataset.k !== 'gps' || spin || !orbit) return true;
      const g = us(rd('Gravity (higher runs faster)')), s = us(rd('Speed (moving runs slower)')), n = us(rd('Net gain per day'));
      return Math.abs(g - 45.7) < 0.06 && Math.abs(s + 7.2) < 0.06 && Math.abs(n - 38.5) < 0.06 ? true : 'GPS rates ' + [g, s, n] + ', textbook 45.7, -7.2, 38.5'; })()` },
    { name: "elapsed time readout is consistent with the run, and the clock ahead is net x time", fn: `(() => { ${pre}
      if (blind) return true;
      const h = parseFloat((rd('Time run so far') || '').replace(/ h$/, '')), ahead = us(rd('Second clock ahead by')), n = rs.map((r) => first(r).net / 24 * h);
      if (!isFinite(h) || h < 0) return 'time run shows ' + rd('Time run so far');
      if (h < 2) return true;
      const a = Math.min(...n), b = Math.max(...n), tol = Math.abs(b) * (0.05 / h + 2e-5) + 0.0006 + (Math.abs(ahead) < 0.01 ? 0.0001 : 0);
      return ahead >= Math.min(a, b) - tol && ahead <= Math.max(a, b) + tol ? true : 'ahead by ' + ahead + ' us after ' + h + ' h, expected ' + a + ' to ' + b; })()` },
  ],
  steps: [
    { name: 'every place, mode switch and spin toggle while the clocks run, slider to both ends, then Set back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      for (const b of document.querySelectorAll('#places button')) { b.click(); await pause(120); if ($('go').textContent !== 'Pause') $('go').click(); await pause(300); }
      for (const v of ['0', '1000', '1', '999', '500']) { $('sR').value = v; $('sR').dispatchEvent(new Event('input', { bubbles: true })); await pause(150); }
      for (const m of ['tower', 'orbit']) { document.querySelector('#modeSeg [data-m=' + m + ']').click(); await pause(150); $('spin').click(); await pause(150); }
      $('go').click(); await pause(100); $('reset').click(); await pause(150);
    })()` },
  ],
};
