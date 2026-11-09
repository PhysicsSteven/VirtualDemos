/* Known values for the break-it test (tools/breakit.cjs), moon-phases. Hook: window.__moon (S, E, phiN, litFrac, beta, ...).
   The panel readouts equal the physics of the live state (lit fraction (1 - cos E cos beta)/2, days since new, elongation, rise,
   highest and set times 6 h apart); the lit fractions of E and E + 180 add to 1; the node line regresses at 360 degrees per
   eclipse year (346.62 d); the eclipse flag follows the cited limits and the beta readout is 5.145 sin(E - node); "Next eclipse
   season" counts to the start of the season (the node within 17 degrees), not to the node itself; the presets sit where
   their names say (new 0, first quarter 90, full 180, sidereal month 27.3217 d). */
const pre = `const M = window.__moon; if (!M) return true;
  const S = M.S, E = M.E(), pn = M.phiN(), mod = (a, n) => ((a % n) + n) % n, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const hm = (h) => { let m = Math.round(mod(h, 24) * 60); if (m >= 1440) m -= 1440; return String(Math.floor(m / 60)).padStart(2, '0') + ':' + String(m % 60).padStart(2, '0'); };
`;
module.exports = {
  checks: [
    { name: "readouts equal the state: lit %, days since new, elongation, rise, highest, set", fn: `(() => { ${pre}
      if (!isFinite(S.T)) return 'T is ' + S.T;
      const b = S.eclipse ? M.beta(E, pn) : 0, want = 100 * M.litFrac(E, b), got = parseFloat(rd('rFrac'));
      if (Math.abs(got - want) > 0.051) return 'Illuminated shows ' + rd('rFrac') + ', physics gives ' + want.toFixed(3);
      const d = mod(S.T, M.P_SYN), gd = parseFloat(rd('rDay'));
      if (Math.abs(gd - d) > 0.0051 && Math.abs(Math.abs(gd - d) - M.P_SYN) > 0.0051) return 'Days since new shows ' + rd('rDay') + ', state ' + d;
      if (Math.abs(E - 360 * d / M.P_SYN) > 1e-6 && Math.abs(Math.abs(E - 360 * d / M.P_SYN) - 360) > 1e-6) return 'E and days since new disagree';
      const el = rd('rElong'), m = el.match(/^(\\d+)°( east| west)?$/);
      if (!m) return 'odd elongation text ' + el;
      const eShown = m[2] === ' west' ? 360 - +m[1] : +m[1];
      if (Math.abs(((eShown - E + 540) % 360) - 180) > 0.5001) return 'Elongation shows ' + el + ', E = ' + E;
      if (rd('rRise') !== hm(M.riseH(E)) || rd('rTransit') !== hm(M.transitH(E)) || rd('rSet') !== hm(M.setH(E))) return 'rise/high/set show ' + rd('rRise') + ' ' + rd('rTransit') + ' ' + rd('rSet') + ' for E = ' + E;
      if (Math.abs(mod(M.transitH(E) - M.riseH(E), 24) - 6) > 1e-9 || Math.abs(mod(M.setH(E) - M.transitH(E), 24) - 6) > 1e-9) return 'rise, highest, set are not 6 h apart';
      return true; })()` },
    { name: "lit fractions: E and E + 180 add to 1; new moon 0, full 1, quarters 1/2 (beta = 0)", fn: `(() => { ${pre}
      for (const e of [E, 0.3, 77, 213.5]) if (Math.abs(M.litFrac(e, 0) + M.litFrac(e + 180, 0) - 1) > 1e-12) return 'litFrac(E) + litFrac(E+180) != 1 at ' + e;
      if (M.litFrac(0, 0) !== 0 || Math.abs(M.litFrac(180, 0) - 1) > 1e-12 || Math.abs(M.litFrac(90, 0) - 0.5) > 1e-12 || Math.abs(M.litFrac(270, 0) - 0.5) > 1e-12) return 'limits of litFrac wrong';
      const l = M.litFrac(E, S.eclipse ? M.beta(E, pn) : 0); if (!(l >= 0 && l <= 1)) return 'lit fraction ' + l + ' outside 0..1';
      return true; })()` },
    { name: "node line: regresses 360 deg per eclipse year (346.62 d) and the node period is 18.61 yr", fn: `(() => { ${pre}
      if (Math.abs(M.EC_YEAR - 346.620) > 0.01) return 'EC_YEAR = ' + M.EC_YEAR + ', should be 346.620 (Meeus 346.620075)';
      if (Math.abs(M.P_NODE / 365.25 - 18.6129) > 1e-9) return 'P_NODE';
      const t0 = S.T, p0 = M.phiN(); S.T = t0 + M.EC_YEAR; const p1 = M.phiN(); S.T = t0 + M.EC_YEAR / 2; const p2 = M.phiN(); S.T = t0;
      if (Math.abs(((p1 - p0 + 540) % 360) - 180) > 1e-9) return 'node does not return after one eclipse year: ' + p0 + ' -> ' + p1;
      if (Math.abs(((p0 - p2 + 360) % 360) - 180) > 1e-9) return 'node did not move 180 deg in half an eclipse year';
      return true; })()` },
    { name: "eclipse view: beta = 5.145 sin(E - node) readout, the flag follows the limits, drift readout", fn: `(() => { ${pre}
      if (!S.eclipse) return true;
      const b = 5.145 * Math.sin((E - pn) * Math.PI / 180), got = parseFloat(rd('rBeta'));
      if (Math.abs(got - b) > 0.0051) return 'beta shows ' + rd('rBeta') + ', physics gives ' + b.toFixed(3);
      const nd = Math.min(mod(pn, 180), 180 - mod(pn, 180)); if (Math.abs(parseFloat(rd('rNodeDist')) - nd) > 0.051) return 'Sun to nearest node shows ' + rd('rNodeDist') + ', ' + nd;
      const dr = parseFloat(rd('rDrift')); if (Math.abs(dr - (-360 * S.T / M.P_NODE)) > 0.0051) return 'drift shows ' + rd('rDrift');
      const st = M.eclipseState(), dn = Math.min(Math.abs(E - 0 + 180) % 360, 360) , ad = (a, c) => Math.abs(mod(a - c + 180, 360) - 180);
      const bn = 5.145 * Math.sin(-pn * Math.PI / 180), bf = 5.145 * Math.sin((180 - pn) * Math.PI / 180);
      if (ad(E, 0) < 12 && (Math.abs(bn) < 1.48) !== (st.k === 'solar')) return 'new moon, |beta| = ' + Math.abs(bn).toFixed(3) + ' but flag is ' + st.k;
      if (ad(E, 180) < 12 && (Math.abs(bf) < 0.96) !== (st.k === 'lunar') && !(Math.abs(bf) >= 0.96 && Math.abs(bf) < 1.53 && st.k === 'pen')) return 'full moon, |beta| = ' + Math.abs(bf).toFixed(3) + ' but flag is ' + st.k;
      if (ad(E, 0) >= 12 && ad(E, 180) >= 12 && st.k !== 'none') return 'flag ' + st.k + ' at E = ' + E;
      if (document.getElementById('flag').dataset.k !== st.k) return 'flag shows ' + document.getElementById('flag').dataset.k + ', state ' + st.k;
      return true; })()` },
    { name: "Next eclipse season counts the days until the season starts (node within 17 deg), 'now' inside it", fn: `(() => { ${pre}
      if (!S.eclipse) return true;
      const nd = Math.min(mod(pn, 180), 180 - mod(pn, 180)), txt = rd('rSeason'), rate = 360 / M.EC_YEAR;
      if (nd < 17) return txt === 'now' ? true : 'inside a season (node ' + nd.toFixed(1) + ' deg from the Sun) but it says ' + txt;
      const m = txt.match(/^in (\\d+) d$/); if (!m) return 'odd text ' + txt;
      const toSeason = (mod(pn, 180) - 17) / rate;      /* node line moves back 360/EC_YEAR deg per day; the season starts when it is 17 deg off */
      return Math.abs(+m[1] - toSeason) <= 0.51 ? true : 'says ' + txt + ' but the season starts in ' + toSeason.toFixed(1) + ' d (it counted to the node itself)'; })()` },
    { name: "presets sit where they say: E = 0, 90, 180, 315; sidereal month 27.3217 d", fn: `(() => { ${pre}
      const on = document.querySelector('#presets [aria-pressed=true]'); if (!on) return true;
      const p = on.dataset.p, want = { new: 0, first: 90, full: 180, wancres: 315, eclipse: 0 }[p];
      if (want !== undefined && Math.abs(((E - want + 540) % 360) - 180) > 1e-6) return p + ': E = ' + E + ', should be ' + want;
      if (p === 'sid' && Math.abs(S.T - 27.321662) > 1e-9) return 'sidereal preset T = ' + S.T;
      if (p === 'sid' && Math.abs(M.P_SID - 27.321662) > 1e-9) return 'P_SID';
      if (Math.abs(M.P_SYN - 29.530589) > 1e-9) return 'P_SYN';
      if (Math.abs(1 / M.P_SID - 1 / M.P_SYN - 1 / M.YEAR) > 2e-6) return 'synodic = sidereal and year relation off: ' + (1 / M.P_SID - 1 / M.P_SYN - 1 / M.YEAR);
      return true; })()` },
  ],
  steps: [
    { name: 'Eclipse preset, step Next full / Next new many times, drag node slider to extremes, then back to a plain preset', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), click = (id) => document.getElementById(id).click();
      document.querySelector('#presets [data-p=eclipse]').click(); await pause(200);
      for (let i = 0; i < 30; i++) { click(i % 2 ? 'nextNew' : 'nextFull'); await pause(40); }
      const n = document.getElementById('node');
      for (const v of ['-180', '180', '0', '17', '-17', '16.99']) { n.value = v; n.dispatchEvent(new Event('input', { bubbles: true })); await pause(80); }
      document.querySelector('#presets [data-p=sid]').click(); await pause(200);
      document.querySelector('#presets [data-p=new]').click(); await pause(200);
    })()` },
    { name: 'Run at the fastest speed with the tilted orbit on, change day and hour sliders mid run, keys back past zero', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), M = window.__moon;
      if (!M.S.eclipse) document.getElementById('ecl').click();
      const sp = [...document.querySelectorAll('#speed button')].pop(); sp.click();
      if (!M.S.playing) document.getElementById('play').click();
      await pause(500);
      const d = document.getElementById('day'); for (const v of ['29.53', '0', '14.77']) { d.value = v; d.dispatchEvent(new Event('input', { bubbles: true })); await pause(100); }
      const h = document.getElementById('hour'); for (const v of ['0', '24', '12']) { h.value = v; h.dispatchEvent(new Event('input', { bubbles: true })); await pause(100); }
      const m = document.getElementById('main'); m.focus();
      for (let i = 0; i < 40; i++) m.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowLeft', bubbles: true, cancelable: true }));
      await pause(300);
      document.getElementById('play').click(); await pause(400);
    })()` },
  ],
};
