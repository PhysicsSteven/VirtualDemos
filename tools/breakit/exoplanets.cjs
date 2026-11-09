/* Known values for the break-it test (tools/breakit.cjs), exoplanets. Hook: window.__exo (P, B, D, flux, PRESETS, applyPreset, setKind, ...).
   D is the derived state of the current sliders. Checked at every probe: Kepler's third law (P = 2π√(a³/μ)); the readouts rP, rK, rDepth,
   rDur equal D; the RV semi amplitude (max |v| over the curve = K(1 + e|cos ω|), K = K of the formula); brightness stays in [0, 1] and is 1
   when there is no transit; at e = 0 the deepest point of a transit is at t = 0; two stars: momentum balance m1·v1 + m2·v2 = 0 about γ, K1
   from the masses, and out of eclipse the brightness is exactly 1; the cited presets (51 Peg b, Earth, Jupiter) give their real period,
   depth and K when untouched. */
const base = `const X = window.__exo; if (!X || !X.D || !X.P) return true;
  const D = X.D, P = X.P, B = X.B, TAU = 2 * Math.PI, DEG = Math.PI / 180, GMS = 1.32712440018e20, GME = 3.986004418e14, AU = 1.495978707e11, DAY = 86400;
  const near = (g, w, t) => Math.abs(g - w) <= t * Math.max(Math.abs(w), 1e-300);
  const num = (id) => parseFloat(document.getElementById(id).textContent.replace(/−/g, '-').replace(/,/g, ''));
  const hid = !!(X.MYS && !X.MYS.revealed);
`;
module.exports = {
  checks: [
    { name: "Kepler's third law: P = 2π√(a³/(G(Ms+Mp))), and the readouts rP, rK, rDepth, rDur equal D", fn: `(() => { ${base}
      const mu = GMS * P.ms + GME * P.mp, a = P.a * AU, Per = TAU * Math.sqrt(a ** 3 / mu);
      if (!near(D.Per, Per, 1e-9)) return 'D.Per ' + D.Per + ' but 2π√(a³/μ) = ' + Per;
      if (!near(D.n * D.Per, TAU, 1e-12)) return 'n P != 2π';
      if (hid) return true;
      const t = document.getElementById('rP').textContent, u = t.match(/ (h|d|yr)$/), sec = num('rP') * (u[1] === 'h' ? 3600 : u[1] === 'd' ? DAY : 365.25 * DAY);
      if (!near(sec, D.Per, 6e-3)) return 'rP shows ' + t + ', P = ' + D.Per / DAY + ' d';
      const k = num('rK'); if (Math.abs(k - D.K) > Math.max(6e-3 * Math.abs(D.K), 6e-4)) return 'rK shows ' + k + ', K = ' + D.K;
      const dep = num('rDepth'); if (Math.abs(dep - D.depth * 1e6) > Math.max(6e-3 * D.depth * 1e6, 0.06)) return 'rDepth shows ' + dep + ' ppm, (Rp/Rs)² = ' + D.depth * 1e6;
      if (D.transits) { const d = num('rDur'); if (!near(d, D.T14 / 3600, 6e-3)) return 'rDur shows ' + d + ' h, T14 = ' + D.T14 / 3600; }
      else if (!/—/.test(document.getElementById('rDur').textContent)) return 'no transit but rDur shows a duration';
      return true; })()` },
    { name: "RV curve: max |v| = K(1 + e|cos ω|) and K from the formula (planet mode)", fn: `(() => { ${base}
      if (X.BIN) return true;
      const e = P.e, i = P.inc * DEG, mu = GMS * P.ms + GME * P.mp, Per = D.Per;
      const K = Math.cbrt(TAU / Per) * GME * P.mp * Math.sin(i) / Math.pow(mu, 2 / 3) / Math.sqrt(1 - e * e);
      if (!near(D.K, K, 1e-9)) return 'D.K ' + D.K + ' but formula ' + K;
      const want = K * (1 + e * Math.abs(Math.cos(P.w * DEG)));
      if (D.vmax < want * (1 - 1e-3) || D.vmax > want * (1 + 1e-9)) return 'max |v| of the curve ' + D.vmax + ' but K(1 + e|cos w|) = ' + want;
      return true; })()` },
    { name: "brightness stays within [0, 1], is 1 with no transit, and at e = 0 the transit is deepest at t = 0", fn: `(() => { ${base}
      if (X.BIN) return true;
      const pts = [...D.lcOrbit, ...D.lcZoom];
      for (const p of pts) if (!(p[1] >= -5e-4 && p[1] <= 1 + 1e-12)) /* numerical noise of blocked() (90 steps) allowed: a planet bigger than its star gives -2e-4 */
       return 'brightness ' + p[1] + ' at t = ' + p[0];
      if (!D.transits) { for (const p of pts) if (p[1] !== 1) return 'no transit but brightness ' + p[1] + ' at t = ' + p[0]; return true; }
      if (P.e === 0 && !D.inside) { const f0 = X.flux(0); for (const p of D.lcZoom) if (p[1] < f0 - 2e-3 * D.depth) return 'deeper than t = 0 (' + p[1] + ' < ' + f0 + ') at t = ' + p[0]; }
      if (!(D.depth > 0)) return 'depth ' + D.depth;
      return true; })()` },
    { name: "cited presets, untouched: 51 Peg b-like P = 4.23 d, Earth P = 365.25 d and 84 ppm, 9 cm/s, Jupiter K = 12.5 m/s", fn: `(() => { ${base}
      if (X.BIN || hid) return true;
      const same = (n) => Object.keys(X.PRESETS[n]).every((k) => P[k] === X.PRESETS[n][k]);
      if (same('hotj') && !near(D.Per / DAY, 4.23, 1.5e-2)) return 'Hot Jupiter period ' + D.Per / DAY + ' d, not 4.23 d (51 Peg b 4.2308 d)';
      if (same('earth')) {
        if (!near(D.Per / DAY, 365.25, 1e-3)) return 'Earth period ' + D.Per / DAY + ' d';
        if (!near(D.depth * 1e6, 84, 2e-2)) return 'Earth depth ' + D.depth * 1e6 + ' ppm, not 84';
        if (!near(D.K, 0.0895, 2e-2)) return 'Earth K ' + D.K + ' m/s, not 9 cm/s';
      }
      if (same('jupiter') && !near(D.K, 12.5, 2e-2)) return 'Jupiter K ' + D.K + ' m/s, hint says 12.5';
      return true; })()` },
    { name: "two stars: momentum balance about γ, K1 and K2 from the masses, brightness exactly 1 out of eclipse", fn: `(() => { ${base}
      if (!X.BIN || !D.rv1) return true;
      const mu = GMS * (B.m1 + B.m2), a = P.a * AU, Per = TAU * Math.sqrt(a ** 3 / mu);
      if (!near(D.Per, Per, 1e-9)) return 'binary P ' + D.Per + ' vs ' + Per;
      const K1 = Math.cbrt(TAU / Per) * Math.sin(P.inc * DEG) * B.m2 * GMS / Math.pow(mu, 2 / 3) / Math.sqrt(1 - P.e ** 2);
      if (!near(D.K, K1, 1e-9)) return 'K1 ' + D.K + ' vs ' + K1;
      if (!near(D.K2, K1 * B.m1 / B.m2, 1e-9)) return 'K2 ' + D.K2 + ' vs ' + K1 * B.m1 / B.m2;
      for (let j = 0; j < D.rv1.length; j += 50) { const s = B.m1 * (D.rv1[j][1] - B.gam) + B.m2 * (D.rv2[j][1] - B.gam); if (Math.abs(s) > 1e-9 * Math.max(B.m1, B.m2) * Math.abs(D.K) / 1000 + 1e-12) return 'momentum about γ not zero: ' + s; }
      if (!D.transits && !D.ecl2) for (const p of D.lcOrbit) if (p[1] !== 1) return 'no eclipse but brightness ' + p[1];
      for (const p of D.lcOrbit) if (!(p[1] > 0 && p[1] <= 1 + 1e-12)) return 'binary brightness ' + p[1];
      return true; })()` },
  ],
  steps: [
    { name: 'preset switch mid run in both kinds, extremes of a, mass and tilt, then back', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), q = (s) => document.querySelector(s);
      const set = async (id, f) => { const el = document.getElementById(id); el.value = f === 'min' ? el.min : f === 'max' ? el.max : f; el.dispatchEvent(new Event('input', { bubbles: true })); await pause(200); };
      for (const p of ['trappist', 'ecc', 'tilt', 'jupiter', 'earth']) { q('#presets [data-p=' + p + ']').click(); await pause(250); }
      for (const [id, f] of [['a', 'max'], ['a', 'min'], ['mp', 'max'], ['mp', 'min'], ['ms', 'min'], ['rs', 'min'], ['rp', 'max'], ['e', 'max'], ['inc', 'min'], ['inc', 'max']]) await set(id, f);
      q('#presets [data-p=hotj]').click(); await pause(300);
      q('#kindSeg [data-k=bin]').click(); await pause(300);
      for (const b of ['hotcool', 'graze', 'eccb', 'twins', 'redd']) { q('#binPresets [data-b=' + b + ']').click(); await pause(250); }
      for (const [id, f] of [['m1', 'min'], ['m2', 'max'], ['r1', 'max'], ['r2', 'min'], ['t1', 'min'], ['t2', 'max'], ['a', 'min'], ['e', 'max'], ['inc', 'min']]) await set(id, f);
      q('#kindSeg [data-k=planet]').click(); await pause(300);
    })()` },
    { name: 'mystery system: new, then switch kind and preset before the reveal, then reveal and speed 1x to fastest', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), X = window.__exo;
      X.newMystery(); await pause(300); X.setKind(true); await pause(300); X.newMystery(); await pause(300); X.revealMystery(); await pause(300);
      X.applyBin('graze'); X.setKind(false); await pause(200);
      for (const b of document.querySelectorAll('#speedSeg button')) { b.click(); await pause(250); }
      X.applyPreset('earth'); await pause(300);
    })()` },
  ],
};
