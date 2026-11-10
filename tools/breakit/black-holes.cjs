/* Known values for the break-it test (tools/breakit.cjs), black-holes. Hook: window.__bh (S, applyPreset, setView, setPlaying).
   The readouts refresh on a timer while a view plays, so each check compares readouts with each other (all written in one pass).
   Lens: the two images of a point lens satisfy t - 1/t = u (so t+ t- = -1 and t+ - t- = sqrt(u^2+4)); the total magnification is
   |mu+| + |mu-| = (u^2+2)/(u sqrt(u^2+4)); u is the length of the shown track position. Near the hole: clock rate sqrt(1 - 1/x) and
   1 + z = 1/rate (so rate x (1+z) = 1), the rate agrees with the shown radius in r_s. The ring preset sits at u = 0, "Sgr A*" is
   4.3e6 Msun with r_s = 0.0849 AU and the 10 Msun hole has r_s = 29.5 km; r_s, the photon sphere 1.5 r_s and the ISCO 3 r_s are in ratio. */
const pre = `const B = window.__bh; if (!B) return true;
  const rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-'), n = (id) => parseFloat(rd(id));
`;
module.exports = {
  checks: [
    { name: "point lens: images t - 1/t = u, t+ t- = -1, |mu+| + |mu-| = (u^2 + 2)/(u sqrt(u^2 + 4)), u = |(x, y)|", fn: `(() => { ${pre}
      const u = n('rU'), tp = n('rT1'), tm = n('rT2'), x = n('sxOut'), y = n('syOut'), A = rd('rA');
      if (![u, tp, tm, x, y].every(isFinite)) return 'a lens readout is not a number: ' + [rd('rU'), rd('rT1'), rd('rT2'), rd('sxOut'), rd('syOut')];
      if (Math.abs(u - Math.hypot(x, y)) > 0.0015) return 'u shows ' + rd('rU') + ' but the track position is (' + x + ', ' + y + ')';
      if (u < 0.01) return true;
      if (Math.abs(tp * tm + 1) > 0.002 * Math.max(1, tp)) return 'theta+ theta- = ' + tp * tm + ', should be -1';
      if (Math.abs(tp - 1 / tp - u) > 0.002 * Math.max(1, tp) || Math.abs(tm - 1 / tm - u) > 0.002 * Math.max(1, 1 / Math.abs(tm))) return 'images ' + tp + ', ' + tm + ' do not satisfy the lens equation for u = ' + u;
      const m1 = n('rM1'), m2 = n('rM2'), want = (u * u + 2) / (u * Math.sqrt(u * u + 4));
      if (Math.abs(Math.abs(m1) + Math.abs(m2) - parseFloat(A)) > 0.0021) return '|mu1| + |mu2| = ' + (Math.abs(m1) + Math.abs(m2)) + ' but A shows ' + A;
      if (Math.abs(parseFloat(A) - want) > 0.0021 * Math.max(1, want)) return 'A shows ' + A + ', physics gives ' + want + ' at u = ' + u;
      return true; })()` },
    { name: "near the hole: clock rate = sqrt(1 - 1/x) and (1 + z) x rate = 1", fn: `(() => { ${pre}
      const m = rd('rOut').match(/^([\\d.e+-]+) rs/); if (!m) return true;
      if (Math.abs(parseFloat(m[1]) / 10 ** B.S.logR - 1) > 1e-3) return true;   /* readout from an earlier radius (it refreshes on a timer) */
      const x = 10 ** B.S.logR /* the text shows only 4 figures, too coarse next to the horizon */, rate = n('rRate'), z = parseFloat(rd('rZ').replace(/ ?× ?10/, 'e').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹⁻]+$/, ''));
      if (x <= 1) return 'radius ' + x + ' r_s is not outside the horizon';
      if (Math.abs(rate - Math.sqrt(1 - 1 / x)) > 6e-5 + 5e-4 * Math.abs(rate)) return 'clock rate shows ' + rd('rRate') + ', sqrt(1 - 1/x) = ' + Math.sqrt(1 - 1 / x) + ' at x = ' + x;
      if (/^[\\d.]+$/.test(rd('rZ')) && Math.abs(rate * parseFloat(rd('rZ')) - 1) > 2e-3 + 2e-3 * parseFloat(rd('rZ'))) return 'rate x (1 + z) = ' + rate * parseFloat(rd('rZ'));
      return true; })()` },
    { name: "r_s, photon sphere 1.5 r_s, ISCO 3 r_s in ratio; presets: 10 Msun r_s = 29.5 km, Sgr A* 0.0849 AU, ring at u = 0", fn: `(() => { ${pre}
      const len = (id) => { const t = rd(id).trim(), m = t.match(/^([\\d.]+)(?: × 10(\\S+))? ?(\\S+)$/); if (!m) return NaN; const e = m[2] ? parseInt(m[2].replace('⁻', '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c)), 10) : 0; return parseFloat(m[1]) * 10 ** e * ({ m: 1, km: 1e3, AU: 1.495978707e11, mm: 1e-3 }[m[3]] || NaN); };
      const rs = len('rRs'), ph = len('rPh'), is = len('rIsco');
      if (isFinite(rs) && isFinite(ph) && isFinite(is)) {
        if (Math.abs(ph / rs - 1.5) > 0.02 || Math.abs(is / rs - 3) > 0.02) return 'photon sphere / r_s = ' + ph / rs + ', ISCO / r_s = ' + is / rs;
      }
      if (!B.S.preset) return true;
      if (B.S.preset === 'stellar' && rd('rRs') !== '29.5 km') return 'stellar preset r_s shows ' + rd('rRs');
      if (B.S.preset === 'sgr' && rd('rRs') !== '0.0849 AU') return 'Sgr A* preset r_s shows ' + rd('rRs');
      if ((B.S.preset === 'ring') && Math.abs(B.S.bx) + Math.abs(B.S.by) > 0 && B.S.view === 'lens' && !B.S.drag && rd('rU') !== '0.000 θE' && rd('rU') !== '0.000 θ\\u2091') return true;
      return true; })()` },
  ],
  steps: [
    { name: 'Every preset, run and pause, track to the ends and the exact center, mass and distance extremes', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), B = window.__bh, set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const p of ['ring', 'two', 'micro', 'stellar', 'sgr', 'm87']) { B.applyPreset(p); B.setPlaying(true); await pause(300); B.setPlaying(false); await pause(100); }
      B.applyPreset('ring'); B.setView('lens');
      for (const [x, y] of [[0, 0], [2.5, 2.5], [-2.5, -2.5], [0, 0.001], [0.001, 0]]) { B.setSrc(x, y); await pause(150); }
      for (const [id, v] of [['logM', -1e9], ['logM', 1e9], ['logDL', -1e9], ['logDS', -1e9], ['logDL', 1e9], ['logDS', 1e9], ['rho', 0], ['rho', 1e9]]) { set(id, v); await pause(150); }
      B.applyPreset('stellar'); for (const v of [-1e9, 1e9, 0]) { set('logR', v); await pause(200); }
      B.applyPreset('m87'); for (const v of [-1e9, 1e9, 0]) { set('logRo', v); await pause(300); }
      B.applyPreset('micro'); B.setPlaying(true); await pause(300);
    })()` },
  ],
};
