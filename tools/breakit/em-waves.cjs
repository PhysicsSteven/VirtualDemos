/* Known values for the break-it test (tools/breakit.cjs), em-waves. Hook: window.__em (S: the wave state). The core constants are not
   exposed, so the checks recompute from CODATA 2022 (mu0, eps0) and compare with the displayed readouts (3 significant figures).
   Wave mode: lambda f = c, B0 = E0/c, I = c eps0 E0^2/2, u = I/c, radiation pressure I/c absorbed and 2I/c reflected, all from the
   slider's own f and E0; the polarization ratio and Malus fraction from psi, delta, phi; the antenna pattern sin^2. The named
   presets (Sun 1361 W/m2, laser 650 nm, FM 100 MHz, circular light ratio 1). Guides and cavities: the cutoff or resonance readout
   equals (c/2) sqrt(...) from the sliders, and v_p v_g = c^2. */
const pre = `const S = window.__em && window.__em.S; if (!S) return true;
  const MU0 = 1.25663706127e-6, EPS0 = 8.8541878188e-12, C = 1 / Math.sqrt(MU0 * EPS0), DEG = Math.PI / 180;
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const PRE = { y: -24, z: -21, a: -18, f: -15, p: -12, n: -9, 'µ': -6, m: -3, '': 0, k: 3, M: 6, G: 9, T: 12, P: 15, E: 18, Z: 21, Y: 24 };
  const si = (id, unit) => { const t = document.getElementById(id).textContent.trim(); if (!t.endsWith(unit)) return NaN;
    const m = t.slice(0, -unit.length).match(/^(-?[\\d.]+) ?(.?)$/); if (!m || !(m[2] in PRE)) return NaN; return parseFloat(m[1]) * Math.pow(10, PRE[m[2]]); };
  const num = (id) => parseFloat(document.getElementById(id).textContent.replace(/−/g, '-'));
`;
module.exports = {
  checks: [
    { name: "wave readouts: λ f = c, T = 1/f, B₀ = E₀/c, I, u = I/c, pressures I/c and 2I/c from the sliders", fn: `(() => { ${pre}
      const f = Math.pow(10, S.logf), E0 = Math.pow(10, S.logE), I = 0.5 * C * EPS0 * E0 * E0, tol = 6e-3;
      const got = { f: si('fOut', 'Hz'), lam: si('rLam', 'm'), T: si('rT', 's'), E0: si('eOut', 'V/m'), B0: si('rB0', 'T'), I: si('rI', 'W/m²'), u: si('rU', 'J/m³'), pa: si('rPa', 'Pa'), pr: si('rPr', 'Pa') };
      const want = { f, lam: C / f, T: 1 / f, E0, B0: E0 / C, I, u: I / C, pa: I / C, pr: 2 * I / C };
      for (const k in want) if (!near(got[k], want[k], tol)) return k + ' shows ' + got[k] + ', physics from the sliders (f = ' + f + ', E0 = ' + E0 + ') gives ' + want[k];
      if (!near(got.lam * got.f, C, 1.5e-2)) return 'shown λ × shown f = ' + got.lam * got.f;
      if (!near(got.u * C, got.I, 1.5e-2)) return 'u c != I';
      return true; })()` },
    { name: "polarization readouts: axis ratio and tilt from ψ, δ; Malus fraction from φ", fn: `(() => { ${pre}
      const a = Math.cos(S.psi * DEG), b = Math.sin(S.psi * DEG), d = S.delta * DEG, T2 = a * a + b * b, cd = Math.cos(d);
      const D = Math.sqrt((a * a - b * b) ** 2 + 4 * a * a * b * b * cd * cd), A = Math.sqrt((T2 + D) / 2), B = Math.sqrt(Math.max(0, (T2 - D) / 2));
      const ratio = A > 0 ? B / A : 0, c = Math.cos(S.phi * DEG), s = Math.sin(S.phi * DEG);
      const mal = (a * a * c * c + b * b * s * s + 2 * a * b * c * s * cd) / T2;
      if (Math.abs(num('rRatio') - ratio) > 6e-4) return 'axis ratio shows ' + num('rRatio') + ', ψ = ' + S.psi + ', δ = ' + S.delta + ' gives ' + ratio;
      if (Math.abs(num('rMalus') - mal) > 6e-4) return 'Malus fraction shows ' + num('rMalus') + ', φ = ' + S.phi + ' gives ' + mal;
      if (mal < -1e-9 || mal > 1 + 1e-9) return 'Malus fraction outside 0 to 1: ' + mal;
      return true; })()` },
    { name: "antenna pattern readout is sin²θ and the near-zone radius is λ/2π", fn: `(() => { ${pre}
      if (Math.abs(num('rPat') - Math.sin(S.dir * DEG) ** 2) > 6e-4) return 'pattern shows ' + num('rPat') + ', sin² of ' + S.dir + '° = ' + Math.sin(S.dir * DEG) ** 2;
      const f = Math.pow(10, S.logf); if (!near(si('rNear', 'm'), C / f / (2 * Math.PI), 6e-3)) return 'λ/2π shows ' + document.getElementById('rNear').textContent;
      return true; })()` },
    { name: "named presets keep their cited values (Sun 1361 W/m², red laser 650 nm, FM 100 MHz, circular light)", fn: `(() => { ${pre}
      const p = S.preset; if (!p) return true; const f = Math.pow(10, S.logf), E0 = Math.pow(10, S.logE), I = 0.5 * C * EPS0 * E0 * E0;
      if (p === 'sun' && (!near(I, 1361, 1e-6) || !near(C / f, 500e-9, 1e-6))) return 'Sun preset: I = ' + I + ', λ = ' + C / f;
      if (p === 'visible' && (!near(C / f, 650e-9, 1e-6) || !near(I, 5e-3 / (Math.PI * 0.25e-6), 1e-6))) return 'laser preset: I = ' + I + ', λ = ' + C / f;
      if (p === 'radio' && (!near(f, 1e8, 1e-6) || !near(I, 50e3 / (4 * Math.PI * 1e8), 1e-6))) return 'radio preset: f = ' + f + ', I = ' + I;
      if (p === 'circ' && (S.psi !== 45 || S.delta !== -90 || Math.abs(num('rRatio') - 1) > 6e-4)) return 'circular preset: ratio ' + num('rRatio');
      return true; })()` },
    { name: "guide cutoff and cavity resonance equal (c/2)√(...) from the sliders; v_p v_g = c²", fn: `(() => { ${pre}
      if (S.mode !== 'guide') return true;
      const g = (id) => parseFloat(document.getElementById(id).value), kind = document.querySelector('#gKind [aria-pressed=true]');
      const dl = {}; for (const r of document.querySelectorAll('#gOut > div')) { const t = r.querySelector('dt'), d = r.querySelector('dd'); if (t && d) dl[t.textContent.trim().slice(0, 9)] = d.textContent.trim(); }
      const a = g('ga') * 1e-3, b = g('gb') * 1e-3, m = g('gm'), n = g('gn'), p = g('gp'), dd = g('gd') * 1e-3;
      const key = Object.keys(dl).find((k) => /^Cutoff|^Resonanc/.test(k)); if (!key) return 'no cutoff or resonance readout';
      const got = parseFloat(dl[key]);
      const want = (C / 2) * Math.sqrt((m / a) ** 2 + (n / b) ** 2 + (kind && kind.dataset.k === 'cavity' ? (p / dd) ** 2 : 0)) / 1e9;
      if (Math.abs(got - want) > 1.5e-3 + 2e-3 * want) return key + ' shows ' + dl[key] + ', sliders give ' + want.toFixed(4) + ' GHz';
      const chk = Object.keys(dl).find((k) => /^Check: v/.test(k)); if (chk && Math.abs(parseFloat(dl[chk]) - 1) > 2e-6) return 'v_p v_g/c² shows ' + dl[chk];
      return true; })()` },
  ],
  steps: [
    { name: 'sweep f across every band while playing, then a preset in the middle, then E₀ to the extremes', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      for (const v of [5, 8.4, 12.9, 14.9, 15.7, 16.6, 17.5, 21, 5]) { set('sf', v); await pause(120); }
      document.querySelector('#presets [data-p=sun]').click(); await pause(150);
      for (const v of [-3, 6, -3, 2]) { set('sE', v); await pause(120); }
      document.querySelector('#presets [data-p=radio]').click(); await pause(150);
      document.querySelector('#presets [data-p=antenna]').click(); await pause(200);
      for (const v of [5, 21, 12]) { set('sf', v); await pause(150); }
      for (const v of [0, 180, 90]) { set('sdir', v); await pause(80); }
      document.querySelector('#presets [data-p=plane]').click(); await pause(200);
    })()` },
    { name: 'polarization: every corner of ψ and δ with the polarizer on, then circular presets', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=plane]').click(); await pause(150);
      const c = document.getElementById('cPol'); if (!c.checked) c.click();
      for (const [p, d] of [[90, 0], [-90, 180], [45, 90], [45, -90], [45, 180], [0, 90], [89, 91], [-45, -179], [1, 1], [45, 0]]) { set('spsi', p); set('sdel', d); for (const ph of [-90, 0, 90, 60]) { set('sphi', ph); await pause(40); } await pause(80); }
      document.getElementById('pRight').click(); await pause(100); document.getElementById('pLeft').click(); await pause(100); document.getElementById('pLin').click(); await pause(100);
      if (c.checked) c.click(); await pause(100);
    })()` },
    { name: 'guide and cavity: switch kind and TE/TM, every m n p, the frequency at cutoff and at the slider ends, then back to a wave', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.getElementById('mGuide').click(); await pause(400);
      for (const f of [6.557, 6.56, 6.55, 1, 40, 10]) { set('gf', f); await pause(100); }
      for (const t of ['TM', 'TE']) { document.querySelector('#gType [data-t=' + t + ']').click(); await pause(80);
        for (const [m, n] of [[0, 0], [4, 4], [1, 0], [0, 4], [1, 1]]) { set('gm', m); set('gn', n); await pause(80); } }
      for (const k of ['cavity', 'guide', 'cavity']) { document.querySelector('#gKind [data-k=' + k + ']').click(); await pause(100);
        for (const [m, n, p] of [[0, 0, 0], [4, 4, 4], [1, 0, 1], [1, 1, 0]]) { set('gm', m); set('gn', n); set('gp', p); await pause(80); }
        for (const [a, b, d] of [[5, 5, 5], [60, 60, 60], [22.86, 10.16, 25]]) { set('ga', a); set('gb', b); set('gd', d); await pause(80); } }
      for (const b of document.querySelectorAll('#gPresets button')) { b.click(); await pause(120); }
      document.getElementById('mWave').click(); await pause(300);
    })()` },
  ],
};
