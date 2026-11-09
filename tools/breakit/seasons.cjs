/* Known values for the break-it test (tools/breakit.cjs), seasons. Hooks: window.__seasons (S, orbitAt, declination, ...), window.__sd (S of
   the sidereal and sundial scene), window.__sdMode(). Seasons mode: the rail readouts (noon altitude, day length, declination, distance,
   daily mean insolation) equal the physics worked independently from the current date, latitude and tilt (altitude from cos of the zenith
   angle, day length by the hour angle, insolation by integrating the cosine of the zenith angle over the day); |δ| stays within the tilt
   (or 180° minus it past 90°), r stays within 1 ± e, the solstices fall where the Sun's longitude is 90° and 270°.
   Sidereal mode: sidereal and solar days per year differ by exactly 1 (prograde) or sum to ... (retrograde: sol = sid + 1), the solar day
   obeys 1/sol = |1/rot − 1/orb|, and each planet's solar day matches its NASA length of day. Sundial mode: eccentricity 0 and tilt 0 give a
   sundial that agrees with the clock all year; the readouts show the current e and tilt. */
const seasons = `const Z = window.__seasons, M = window.__sdMode && window.__sdMode(); if (!Z || M !== 'seasons') return true;
  const S = Z.S, DEG = Math.PI / 180, txt = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  if (/[—]/.test(txt('rAlt') + txt('rQ'))) return true;
  const o = Z.orbitAt(S.T), dec = Z.declination(o.lam, S.tilt), phi = S.lat * DEG;
  const near = (a, b, tol) => Math.abs(a - b) <= tol;
`;
const sd = `const D = window.__sd, M = window.__sdMode && window.__sdMode(); if (!D || M === 'seasons') return true;
  const S = D.S, txt = (el) => el.textContent.replace(/\\u2212/g, '-'), near = (a, b, tol) => Math.abs(a - b) <= tol * Math.max(Math.abs(b), 1e-12);
  const row = (name) => { for (const dt of document.querySelectorAll('#sdOut dt')) if (dt.textContent.indexOf(name) === 0) return txt(dt.nextElementSibling); return null; };
`;
module.exports = {
  checks: [
    { name: "seasons: noon altitude and declination readouts equal the physics", fn: `(() => { ${seasons}
      const alt = 90 - Math.abs(phi - dec) / DEG, rd = parseFloat(txt('rAlt')), dd = parseFloat(txt('rDec'));
      if (!near(rd, alt, 0.051)) return 'noon altitude shows ' + txt('rAlt') + ', should be ' + alt.toFixed(2);
      if (!near(dd, dec / DEG, 0.0051)) return 'declination shows ' + txt('rDec') + ', should be ' + (dec / DEG).toFixed(3);
      const lim = S.tilt <= 90 ? S.tilt : 180 - S.tilt;
      if (Math.abs(dec / DEG) > lim + 1e-9) return '|δ| = ' + Math.abs(dec / DEG) + ' exceeds ' + lim + ' for tilt ' + S.tilt;
      return true; })()` },
    { name: "seasons: day length and insolation from an independent integral over the day", fn: `(() => { ${seasons}
      const x = Math.sin(phi) * Math.sin(dec), y = Math.cos(phi) * Math.cos(dec), N = 20000;
      let up = 0, q = 0;
      for (let i = 0; i < N; i++) { const H = -Math.PI + (i + 0.5) * 2 * Math.PI / N, c = x + y * Math.cos(H); if (c > 0) { up++; q += c; } }
      const hours = 24 * up / N, Q = 1361 * (q / N) / (o.r * o.r), m = txt('rDay').match(/(\\d+) h (\\d+) m/);
      if (!m) return 'day length unreadable: ' + txt('rDay');
      const shown = +m[1] + m[2] / 60;
      if (Math.abs(shown - hours) > 0.5 / 60 + 0.01) return 'day length shows ' + txt('rDay') + ', integral gives ' + hours.toFixed(3) + ' h';
      if (Math.abs(parseFloat(txt('rQ')) - Q) > 0.5 + 0.002 * Q) return 'insolation shows ' + txt('rQ') + ', integral gives ' + Q.toFixed(1);
      if (Math.abs(parseFloat(txt('rRel')) - 100 * Q / (1361 / Math.PI)) > 0.6 + 0.003 * Q) return 'vs equator at equinox shows ' + txt('rRel');
      if (Q < -1e-9) return 'negative insolation';
      return true; })()` },
    { name: "seasons: Earth to Sun stays within 1 ± e; second law (r² dν/dt constant); solstice dates", fn: `(() => { ${seasons}
      if (Math.abs(parseFloat(txt('rR')) - o.r) > 6e-5) return 'rR shows ' + txt('rR') + ', r = ' + o.r;
      if (o.r < 1 - 0.0167 - 1e-9 || o.r > 1.0167 + 1e-9) return 'r = ' + o.r + ' outside 1 ± e';
      const h = 1e-3, a = Z.orbitAt(S.T - h), b = Z.orbitAt(S.T + h), L = o.r * o.r * (b.nu - a.nu) / (2 * h), c = Z.orbitAt(0.25), d2 = Z.orbitAt(0.25 + h), d1 = Z.orbitAt(0.25 - h);
      const L0 = c.r * c.r * (d2.nu - d1.nu) / (2 * h);
      if (Math.abs(L - L0) > 1e-6 * L0) return 'r² dν/dt changed: ' + L + ' vs ' + L0;
      const want = [79, 172, 265, 355];
      for (let i = 0; i < 4; i++) { const s = Z.SEASONS[i], l = Z.orbitAt(s.T).lam / DEG; if (Math.abs(Math.sin((l - i * 90) * DEG)) > 1e-6) return s.name + ' at longitude ' + l; if (Math.abs(s.T - want[i]) > 1.5) return s.name + ' on day ' + s.T.toFixed(2) + ', expected near ' + want[i]; }
      if (Math.abs(Z.declination(Z.orbitAt(Z.SEASONS[1].T).lam, 23.44) / DEG - 23.44) > 1e-9) return 'June solstice declination is not the tilt';
      return true; })()` },
    { name: "sidereal: sidereal and solar days per year, 1/solar = |1/sidereal − 1/year|, NASA day lengths", fn: `(() => { ${sd}
      if (M !== 'sidereal' || S.view !== 'orbit' || S.blind) return true;
      const P = S.P, sid = parseFloat(row('Sidereal days in a year').replace(',', '')), sol = parseFloat(row('Solar days in a year').replace(',', ''));
      const wantSid = P.orb / Math.abs(P.rot), w = Math.abs(1 / P.rot - 1 / P.orb), wantSol = w < 1e-15 ? 0 : P.orb * w;
      if (!near(sid, wantSid, 2e-3)) return 'sidereal days a year shows ' + sid + ', should be ' + wantSid;
      if (!near(sol, wantSol, 2e-3) && Math.abs(sol - wantSol) > 6e-4) return 'solar days a year shows ' + sol + ', should be ' + wantSol;
      if (Math.abs((P.rot > 0 ? wantSid - wantSol : wantSol - wantSid) - 1) > 1e-9) return 'sid and sol do not differ by 1';
      if (P.lod) { const s = 1 / w; if (Math.abs(s - P.lod) / P.lod > 2e-4) return P.name + ': solar day ' + s + ' s, NASA ' + P.lod; }
      if (!(P.orb > 0) || P.rot === 0 || !isFinite(P.rot)) return 'bad planet ' + JSON.stringify(P);
      return true; })()` },
    { name: "sundial: e = 0 and tilt = 0 means the sundial keeps clock time; readouts show current e and tilt", fn: `(() => { ${sd}
      if (M !== 'sundial' || S.blind) return true;
      const e = row('Eccentricity, tilt'); if (!e) return 'no Eccentricity, tilt readout';
      const m = e.match(/^([\\d.]+), (-?[\\d.]+)°$/); if (!m) return 'unreadable ' + e;
      if (Math.abs(+m[1] - S.e) > 6e-5 || Math.abs(+m[2] - S.tilt) > 6e-3) return 'readout ' + e + ' but e = ' + S.e + ', tilt = ' + S.tilt;
      const s = row('Sundial against the clock');
      if (S.e === 0 && S.tilt === 0 && s !== 'together') return 'e = 0, tilt = 0 but the sundial reads ' + s;
      if (S.tilt === 0 && !/together|ahead|behind/.test(s)) return 'unreadable sundial ' + s;
      const dec = parseFloat(row("Sun's declination"));
      if (Math.abs(dec) > S.tilt + 0.006) return 'declination ' + dec + ' exceeds tilt ' + S.tilt;
      return true; })()` }
  ],
  steps: [
    { name: "seasons: extremes (tilt 98 then 0, pole latitudes, preset mid run), then back", fn: `(async () => {
      const set = (id, v) => { const el = document.getElementById(id); el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); };
      const w = (ms) => new Promise((r) => setTimeout(r, ms));
      if (window.__sdMode() !== 'seasons') document.querySelector('#modeSeg button[data-m="seasons"]').click();
      await w(100);
      for (const [t, l] of [[98, 90], [98, -90], [40, 66.5], [0, 90], [0, -90], [23.44, 32.5], [90, 0], [180, 45]]) { set('tilt', t); set('lat', l); await w(150); }
      for (const p of ['uranus', 'arctic', 'notilt', 'june', 'dec', 'equinox']) { const b = document.querySelector('#presets button[data-p="' + p + '"]'); if (b) b.click(); await w(150); }
      for (const d of [1, 365, 366, 0, -5, 172]) { set('day', d); await w(100); }
    })()` },
    { name: "mode switch while running: seasons, sidereal Earth, sundial extremes, seasons", fn: `(async () => {
      const w = (ms) => new Promise((r) => setTimeout(r, ms)), mode = (m) => document.querySelector('#modeSeg button[data-m="' + m + '"]').click();
      const set = (id, v) => { const el = document.getElementById(id); el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); el.dispatchEvent(new Event('change', { bubbles: true })); };
      mode('seasons'); await w(100); const pl = document.getElementById('play'); if (pl.textContent.trim() === 'Play') pl.click(); await w(300);
      mode('sidereal'); await w(150);
      for (const p of ['earth', 'locked', 'venus', 'mercury', 'jupiter', 'moon', 'mars', 'toy10']) { const b = document.querySelector('#sdPresets button[data-p="' + p + '"]'); if (b) b.click(); await w(120); }
      const sp = document.getElementById('sdPlay'); if (sp.textContent.trim() === 'Play') sp.click(); await w(400);
      set('sdN', 30); await w(100); set('sdN', 1); await w(100); const re = document.getElementById('sdRetro'); re.checked = !re.checked; re.dispatchEvent(new Event('change', { bubbles: true })); await w(100);
      mode('sundial'); await w(150);
      for (const [e, t] of [[0, 0], [0.1, 40], [0, 40], [0.1, 0], [0.0167, 23.44]]) { set('sdE', e); set('sdTilt', t); await w(120); }
      for (const d of [0, 364, 41]) { set('sdDate', d); await w(80); }
      mode('seasons'); await w(200); mode('sidereal'); await w(100); mode('seasons'); await w(200);
    })()` }
  ]
};
