/* Known values for the break-it test (tools/breakit.cjs), rotation-curves. Hook: window.__rc (S, vAt, applyPreset, ...).
   Galaxy: the readouts obey the laws the page states: v² = v_b² + v_d² + v_g² + v_h² (shown speeds, halo share and "halo alone"
   agree), M(<r) = v²r/G, the period is 2πr/v, the visible mass total is the sum of the parts that are on; edge on, the line edge
   shift equals f0·v/c (21 cm, 1420.405752 MHz) or λ0·v/c (Hα, 656.28 nm) for the speed shown, and the terminal speed is at
   least the model v(r). Solar system: v = √(GM/a) (29.78 km/s at 1 AU), P = a^1.5 yr, M = 1 solar mass for every a.
   The steps check each part alone against its closed form (Hernquist bulge, isothermal and NFW halos, and the exponential disk:
   Freeman's peak v² = 0.387 GM/R_d (v = 0.88 √(πGΣ0 R_d)) at 2.15 R_d, Kepler far out), and the preset hints (Sun 230 km/s and 220 Myr; NGC 3198
   visible 71 km/s and total 150 km/s at 30 kpc; halo dominates at 20 kpc). */
const pre = `const R = window.__rc; if (!R || !R.S) return true;
  const S = R.S, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const G = 4.30091e-6, MYR = 3.0856775814913673e16 / 3.15576e13, G_AU = 1.32712440018e20 / 1.495978707e11 / 1e6, C = 299792.458;
  const SUPD = '⁰¹²³⁴⁵⁶⁷⁸⁹';
  const mass = (t) => { const m = t.match(/^([\\d.]+) × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+)/); if (!m) return /^0/.test(t) ? 0 : NaN;
    return parseFloat(m[1]) * Math.pow(10, +m[2].replace(/⁻/g, '-').replace(/[⁰¹²³⁴⁵⁶⁷⁸⁹]/g, (c) => SUPD.indexOf(c))); };
`;
module.exports = {
  checks: [
    { name: "galaxy: v² adds over the parts; M(<r) = v²r/G; period 2πr/v; halo share agrees", fn: `(() => { ${pre}
      if (S.sys !== 'gal') return true;
      const v = parseFloat(rd('oV')), vis = parseFloat(rd('oVis')), r = S.rs; if (!isFinite(v) || !isFinite(vis)) return 'v ' + rd('oV') + ', visible ' + rd('oVis');
      const dm = rd('oDm').match(/^([\\d.]+)%/), ha = rd('oDm').match(/halo alone ([\\d.]+) km/);
      const vh = ha ? parseFloat(ha[1]) : 0, sh = dm ? parseFloat(dm[1]) : NaN;
      if (!(sh >= 0 && sh <= 100.05)) return 'halo share ' + rd('oDm');
      if (Math.abs(v * v - vis * vis - vh * vh) > 0.12 * (v + vis + vh) + 1e-6) return 'v² ≠ visible² + halo²: ' + v + ', ' + vis + ', ' + vh;
      if (Math.abs(sh / 100 * v * v - vh * vh) > 0.0006 * v * v + 0.12 * vh + 0.12 * v * sh / 100) return 'halo share ' + sh + '% of v² = ' + v * v + ' but halo alone is ' + vh + ' km/s';
      const Md = mass(rd('oMdyn').split(' M')[0] + ' M'.slice(0, 0)); const want = v * v * r / G;
      if (Math.abs(Md - want) > (0.1 / Math.max(v, 1) + 0.0062) * want) return 'M(<r) shows ' + rd('oMdyn') + ', v²r/G = ' + want;
      const P = parseFloat(rd('oP')), wp = 2 * Math.PI * r / v * MYR;
      if (Math.abs(P - wp) > (0.2 / Math.max(v, 1)) * wp + 0.6) return 'period shows ' + rd('oP') + ', 2πr/v = ' + wp;
      return true; })()` },
    { name: "galaxy: visible mass total is the sum of the parts that are on", fn: `(() => { ${pre}
      if (S.sys !== 'gal') return true;
      const P = S.P, want = (P.b.on ? P.b.M : 0) + (P.d.on ? P.d.M : 0) + (P.g.on ? P.g.M : 0), got = mass(rd('mVisTot'));
      if (!(want > 0)) return got === 0 || isNaN(got) ? true : 'no visible part is on but total shows ' + rd('mVisTot');
      return Math.abs(got - want) <= 0.0062 * want ? true : 'visible total shows ' + rd('mVisTot') + ', parts sum to ' + want; })()` },
    { name: "edge on: the shift equals f0 v/c (or λ0 v/c) for the speed shown; terminal speed ≥ model v(r)", fn: `(() => { ${pre}
      if (S.sys !== 'gal' || S.view !== 'edge') return true;
      const t = rd('dopShift'); if (/no emission/.test(t)) return true;
      const vt = parseFloat(rd('dopV')), mv = rd('dopV').match(/model v\\(r\\) = ([\\d.]+)/);
      if (!isFinite(vt)) return 'speed ' + rd('dopV');
      const s = parseFloat(t.replace('−', '-')), ha = S.line === 'ha';
      const want = ha ? 656.28 * vt / C : 1420.405751768 * vt / C * 1000, tol = ha ? 0.0006 + 0.05 * 656.28 / C : 0.5 + 0.05 * 1420.405751768 / C * 1000;
      if (Math.abs(Math.abs(s) - want) > tol) return 'shift shows ' + t + ' but ' + vt + ' km/s gives ' + want;
      if (mv && vt < parseFloat(mv[1]) - 0.11) return 'terminal speed ' + vt + ' is below the model v(r) = ' + mv[1];
      return true; })()` },
    { name: "solar system: v = √(GM/a), P = a^1.5 yr, M(<a) = 1 solar mass", fn: `(() => { ${pre}
      if (S.sys !== 'sun') return true;
      const a = S.rsAU, v = Math.sqrt(G_AU / a);
      if (Math.abs(parseFloat(rd('oV')) - v) > 0.0051) return 'v shows ' + rd('oV') + ', √(GM/a) = ' + v;
      const M = parseFloat(rd('oMdyn')); if (Math.abs(M - 1) > 3e-3) return 'M(<a) shows ' + rd('oMdyn');
      const P = parseFloat(rd('oP')), want = Math.pow(a, 1.5), dec = /days/.test(rd('oP')) ? 5e-4 : 0.05;
      if (Math.abs(P - want) > dec + 1e-9) return 'period shows ' + rd('oP') + ', a^1.5 = ' + want;
      return true; })()` },
  ],
  steps: [
    { name: 'each part alone against its closed form (Hernquist, isothermal, NFW, disk: Freeman peak and Kepler far out)', fn: `(async () => {
      ${pre.replace('return true;', 'return;')}
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      const tog = (id, on) => { if ($(id).checked !== on) $(id).click(); };
      const only = async (c) => { for (const k of ['B', 'D', 'G', 'H']) tog('on' + k, k === c); await pause(80); };
      const near = (g, w, t, what) => { if (!(Math.abs(g - w) <= t * Math.abs(w))) throw new Error(what + ': page ' + g + ', closed form ' + w); };
      R.applyPreset('mw'); await pause(100); set('rm', 30);
      await only('B'); set('bM', 10); set('bA', 1); await pause(80);
      for (const r of [1, 3, 10, 25]) near(R.vAt(r) ** 2, G * S.P.b.M * r / ((r + S.P.b.a) ** 2), 0.006, 'Hernquist bulge at ' + r);
      await only('H'); R.S.P.h.type === 'iso' || $('hIso').click(); await pause(80); set('hRho', -1); set('hR', 3); await pause(80);
      { const h = S.P.h; for (const r of [2, 6, 15, 28]) { const u = r / h.r; near(R.vAt(r) ** 2, G * 4 * Math.PI * h.rho * h.r ** 3 * (u - Math.atan(u)) / r, 0.006, 'isothermal halo at ' + r); } }
      $('hNfw').click(); await pause(80); set('hRho', -2); set('hR', 10); await pause(80);
      { const h = S.P.h; for (const r of [2, 6, 15, 28]) { const x = r / h.r; near(R.vAt(r) ** 2, G * 4 * Math.PI * h.rho * h.r ** 3 * (Math.log1p(x) - x / (1 + x)) / r, 0.006, 'NFW halo at ' + r); } }
      await only('D'); set('dM', 10.5); set('dR', 1); await pause(80);
      { const d = S.P.d; let best = 0, at = 0; for (let r = 0.3; r < 8; r += 0.01) { const v2 = R.vAt(r) ** 2; if (v2 > best) { best = v2; at = r; } }
        near(best, 0.3871 * G * d.M / d.R, 0.003, 'Freeman disk peak v² at ' + at.toFixed(2)); near(at, 2.15 * d.R, 0.05, 'Freeman peak radius');
        near(R.vAt(28) ** 2, G * d.M / 28, 0.015, 'disk far out (Kepler)'); }
      R.applyPreset('mw'); await pause(100);
    })()` },
    { name: 'preset hints: Sun 230 km/s and 220 Myr (mw); NGC 3198 visible 71 and total 150 km/s at 30 kpc; halo dominates at 20 kpc', fn: `(async () => {
      const R = window.__rc, S = R.S, pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      R.applyPreset('mw'); await pause(100);
      const m = $('oSun').textContent.match(/^([\\d.]+) km\\/s, period (\\d+) Myr/); if (!m) throw new Error('Sun row ' + $('oSun').textContent);
      if (Math.abs(+m[1] - 230) > 5 || Math.abs(+m[2] - 220) > 6) throw new Error('mw preset: Sun ' + m[1] + ' km/s, ' + m[2] + ' Myr (hint: about 230 and 220)');
      R.applyPreset('n3198'); await pause(100); set('rm', 35); set('rs', 30); await pause(100);
      const vis = parseFloat($('oVis').textContent), v = parseFloat($('oV').textContent);
      if (Math.abs(vis - 71) > 2 || Math.abs(v - 150) > 6) throw new Error('n3198 at 30 kpc: visible ' + vis + ', total ' + v + ' (hint: 71 and 150)');
      R.applyPreset('halo'); await pause(100); set('rs', 20); await pause(100);
      if (parseFloat($('oDm').textContent) < 50) throw new Error('halo preset at 20 kpc: dark share ' + $('oDm').textContent);
      R.applyPreset('sun'); await pause(100); set('rs', 30.07); await pause(100); R.applyPreset('mw');
    })()` },
    { name: 'Hα edge on, tiny and huge radii, plot out to 10 then 100 kpc, halo type swapped with the halo off', fn: `(async () => {
      const R = window.__rc, pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { $(id).value = v; $(id).dispatchEvent(new Event('input', { bubbles: true })); };
      R.applyPreset('dop'); await pause(150);
      for (const id of ['lHa', 'lHi']) { $(id).click(); await pause(100); }
      for (const v of ['0.2', '30', '0.2']) { set('rs', v); await pause(80); }
      for (const v of ['10', '100', '30']) { set('rm', v); await pause(100); }
      if ($('onH').checked) $('onH').click(); await pause(80); $('hIso').click(); await pause(80); $('hNfw').click(); await pause(80); $('onH').click(); await pause(100);
      R.applyPreset('mw');
    })()` },
  ],
};
