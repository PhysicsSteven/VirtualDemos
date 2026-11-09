/* Known values for the break-it test (tools/breakit.cjs), giant-planets. Hook: window.__gp (S, PL, clModel, readouts, ...).
   Each mode's readouts must equal the physics of the live settings: Rings (Roche limits from the planet's mass and the moon's density,
   the distance, the orbital period, Roche units), Moons (Kepler's third law gives the planet's mass; the period ratio), Io (tidal heating
   goes as e², W/m² times the area gives the total), Clouds (the parcel is on the adiabat: T rises with P; base pressures obey the
   cloud order; no NaN). Planets: ratios to Earth match the table. */
const dl = `const S = window.__gp && window.__gp.S; if (!S) return true; const out = document.getElementById('out'); if (!out) return true;
  const D = {}; for (const d of out.querySelectorAll('div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) D[t.textContent.trim()] = v.textContent.replace(/\\u2212/g, '-').replace(/\\u00a0| /g, ' '); }
  const num = (s) => parseFloat(String(s).replace(/ /g, '').replace(/,/g, '')), near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-300);
  const PLN = { jupiter: [1898.13e24, 126.687e6, 71492], saturn: [568.32e24, 37.931e6, 60268], uranus: [86.811e24, 5.7940e6, 25559], neptune: [102.409e24, 6.8351e6, 24764] };
`;
module.exports = {
  checks: [
    { name: "Rings: Roche limits from M and the moon's density; distance; period; Roche units", fn: `(() => { ${dl}
      if (S.mode !== 'rings' || S.blind || !PLN[S.planet]) return true;
      const [M, GM, Req] = PLN[S.planet], rho = S.rho, unit = Math.cbrt(3 * M / (4 * Math.PI * rho)) / 1e3, G = 6.67430e-11;
      const fl = Math.cbrt(4 / (3 * 0.09009)) * unit, rg = Math.cbrt(3) * unit, a = S.dist * Req;
      const kmOf = (s) => num(String(s).split('km')[0]);
      if (!near(kmOf(D['Roche limit, fluid moon']), fl, 2e-3)) return 'fluid Roche ' + D['Roche limit, fluid moon'] + ', expected ' + fl.toFixed(0) + ' km (rho ' + rho + ')';
      if (!near(kmOf(D['Rigid moon limit']), rg, 2e-3)) return 'rigid Roche ' + D['Rigid moon limit'] + ', expected ' + rg.toFixed(0);
      if (!near(kmOf(D['Its distance']), a, 2e-3)) return 'distance ' + D['Its distance'] + ', expected ' + a.toFixed(0);
      const P = 2 * Math.PI * Math.sqrt(a ** 3 / GM) / 3600;
      if (!near(num(D['Its orbital period']), P, 6e-3)) return 'period ' + D['Its orbital period'] + ', expected ' + P.toFixed(3) + ' h';
      if (!near(num(D['Distance in Roche units']), a / unit, 2e-3)) return 'Roche units ' + D['Distance in Roche units'] + ', expected ' + (a / unit).toFixed(3);
      if (!(S.piece >= 0 && S.piece <= 1)) return 'largest piece fraction ' + S.piece;
      return true; })()` },
    { name: "Moons: Kepler's third law returns the planet's mass; period ratio equals the readout", fn: `(() => { ${dl}
      if (S.mode !== 'moons' || S.blind) return true;
      const k = Object.keys(D).find((x) => / mass from this orbit$/.test(x)), n = Object.keys(D).find((x) => / mass, NASA$/.test(x));
      if (!k || !n) return 'moons readouts missing: ' + Object.keys(D).join(' | ');
      const sci = (s) => { const m = String(s).replace(/ /g, '').match(/^([\\d.]+)×10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/); return m ? parseFloat(m[1]) * Math.pow(10, parseInt(m[2].replace('⁻', '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)), 10)) : NaN; };
      const A = D['Distance a'], Pd = D['Period P'], a = num(A), P = num(Pd) * 86400, G = 6.67430e-11;
      const Mk = 4 * Math.PI ** 2 * Math.pow(a * 1e3, 3) / (G * P * P), shown = sci(D[k]), nasa = sci(D[n]);
      if (!isFinite(shown) || !near(shown, Mk, 6e-3)) return 'mass from orbit shows ' + D[k] + ', Kepler from the shown a and P gives ' + Mk.toExponential(3);
      if (isFinite(nasa) && !near(shown, nasa, 0.06) && !/Hyperion|Nereid|Himalia|Triton|Phoebe/.test(D['Moon'])) return D['Moon'] + ': orbit mass ' + D[k] + ' vs NASA ' + D[n] + ' differ by more than 6 %';
      return true; })()` },
    { name: "Io: heating goes as e², W/m² times area equals the total, e = 0 gives none", fn: `(() => { ${dl}
      if (S.mode !== 'io' || S.blind) return true;
      const sci = (s) => { const m = String(s).replace(/ /g, '').match(/^([\\d.]+)×10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/); return m ? parseFloat(m[1]) * Math.pow(10, parseInt(m[2].replace('⁻', '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)), 10)) : (/^0( |$)/.test(String(s).trim()) ? 0 : NaN); };
      const H = sci(D['Tidal heating']), flux = num(D['Per square meter']), A = 4 * Math.PI * Math.pow(1821.49e3, 2);
      if (S.e === 0) return H === 0 ? true : 'e = 0 but heating ' + D['Tidal heating'];
      if (!isFinite(H)) return 'heating unreadable: ' + D['Tidal heating'];
      if (flux > 0.05 && !near(flux * A, H, 0.02)) return 'W/m² ' + flux + ' x area ' + (flux * A).toExponential(2) + ' vs heating ' + H.toExponential(2);
      const W = (window.__kio = window.__kio || {}); const r = H / (S.e * S.e);
      if (W.r && S.e > 1e-3 && !near(r, W.r, 0.02)) return 'heating / e² changed from ' + W.r + ' to ' + r + ' (e = ' + S.e + ')'; if (S.e > 1e-3) W.r = r;
      if (S.e >= 0.0039 && S.e <= 0.0043 && !(H > 5e13 && H < 1.6e14)) return 'at the measured e = 0.0041 heating is ' + H.toExponential(2);
      return true; })()` },
    { name: "Clouds: temperature rises with pressure; deck order; no bad numbers", fn: `(() => { ${dl}
      if (S.mode !== 'clouds') return true;
      const m = window.__gp.clModel(), lev = m.lev; if (!lev || lev.length < 3) return 'no levels';
      for (let i = 1; i < lev.length; i++) { const lo = lev[i - 1], hi = lev[i]; if (!(isFinite(lo.T) && isFinite(hi.T) && lo.T > 0)) return 'bad T at level ' + i;
        if (hi.P > lo.P && hi.T < lo.T - 1e-9) return 'T falls with pressure at ' + hi.P + ' bar'; if (hi.P < lo.P && hi.T > lo.T + 1e-9) return 'T rises going up at ' + hi.P + ' bar'; }
      const ord = ['h2o', 'nh4sh', 'nh3', 'h2s', 'ch4'], at = ord.map((k) => m.bases.find((b) => b.k === k)).filter(Boolean);
      for (const b of at) if (!(isFinite(b.P) && b.P > 0 && isFinite(b.T))) return 'cloud base ' + b.k + ' not finite';
      const pw = at.find((b) => b.k === 'h2o'), pn = at.find((b) => b.k === 'nh3'), pm = at.find((b) => b.k === 'ch4');
      if (pw && pn && !(pw.P > pn.P)) return 'water base ' + pw.P + ' bar is not deeper than ammonia ' + pn.P;
      if (pn && pm && !(pn.P > pm.P)) return 'ammonia base not deeper than methane';
      if (S.planet === 'jupiter' && !S.cm) { const nb = at.find((b) => b.k === 'nh3'); if (nb && (nb.P < 0.5 || nb.P > 1.2)) return 'Jupiter NH3 base ' + nb.P + ' bar (expected about 0.7 to 0.9)'; }
      return true; })()` },
    { name: "Planets: ratios to Earth match the table; no stale readouts in the wrong mode", fn: `(() => { ${dl}
      if (S.mode === 'planets' && !S.blind) {
        const PE = { jupiter: [1898.13e24, 71492, 66854], saturn: [568.32e24, 60268, 54364], uranus: [86.811e24, 25559, 24973], neptune: [102.409e24, 24764, 24341], earth: [5.9722e24, 6378.137, 6356.752] }[D['Planet'].toLowerCase()];
        if (PE) { if (!near(num(D['Mass (Earth = 1)']), PE[0] / 5.9722e24, 6e-3)) return 'mass ratio ' + D['Mass (Earth = 1)'];
          if (!near(num(D['Radius (Earth = 1)']), PE[1] / 6378.137, 2e-3)) return 'radius ratio ' + D['Radius (Earth = 1)']; } }
      const need = { rings: 'Test moon density', moons: 'Moon', io: 'Eccentricity e', clouds: 'Air parcel at', planets: 'Planet' }[S.mode];
      if (need && !(need in D)) return 'mode ' + S.mode + ' but readouts are ' + Object.keys(D).slice(0, 3).join(', ');
      return true; })()` },
  ],
  steps: [
    { name: 'Rings: tear a moon, drag distance to the extremes by keyboard, switch planet and density mid run, Reset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), v = document.getElementById('scene');
      document.querySelector('#presets [data-p=tear]').click(); await pause(300);
      const pl = document.getElementById('selPlanet'), sd = document.getElementById('sDist'), sr = document.getElementById('sRho');
      for (const p of ['jupiter', 'uranus', 'neptune', 'saturn']) { pl.value = p; pl.dispatchEvent(new Event('change', { bubbles: true })); await pause(250); }
      for (const [d, r] of [[sd.min, sr.min], [sd.max, sr.max], [sd.min, sr.max], [sd.max, sr.min]]) { sd.value = d; sd.dispatchEvent(new Event('input', { bubbles: true })); sr.value = r; sr.dispatchEvent(new Event('input', { bubbles: true })); document.getElementById('play').click(); await pause(500); }
      document.getElementById('restart').click(); await pause(200);
      document.querySelector('#presets [data-p=shear]').click(); await pause(400);
    })()` },
    { name: 'Io: e from 0 to max and back while running, exaggeration on and off, then the N body Io with Europa taken away', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      document.querySelector('#presets [data-p=io]').click(); await pause(200);
      const e = document.getElementById('sEcc'), x = document.getElementById('chkExag'); document.getElementById('play').click();
      for (const v of [e.min, e.max, '0', '0.004']) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(300); }
      x.click(); await pause(200); x.click();
      document.querySelector('#presets [data-p=ioforced]').click(); await pause(300); document.getElementById('play').click(); await pause(800);
      const n = document.getElementById('chkNoEu'); if (n && !n.closest('[hidden]')) { n.click(); await pause(600); n.click(); }
      document.querySelector('#presets [data-p=iocircle]').click(); await pause(300);
    })()` },
    { name: 'Clouds: each planet, every gas slider to its extremes, drag the parcel to the top and bottom', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const p of ['cloudsJupiter', 'cloudsSaturn', 'cloudsUranus', 'cloudsNeptune', 'cloudsWet']) {
        document.querySelector('#presets [data-p=' + p + ']').click(); await pause(250);
        for (const s of document.querySelectorAll('#boxClouds input[type=range]')) for (const v of [s.min, s.max, s.min]) { s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); await pause(60); }
        const c = document.getElementById('scene'); c.focus();
        for (let i = 0; i < 40; i++) c.dispatchEvent(new KeyboardEvent('keydown', { key: i < 20 ? 'ArrowUp' : 'ArrowDown', bubbles: true, cancelable: true })); await pause(150);
      }
      document.querySelector('#presets [data-p=giants]').click(); await pause(300);
    })()` },
  ],
};
