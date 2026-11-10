/* Known values for the break-it test (tools/breakit.cjs), diffraction-grating. Hook: window.__dg (S, physics()).
   Grating, explore mode: every order in the table obeys d sin(theta_m) = m lambda (+ the turn of the grating), y = L tan(psi),
   the first order that does not exist really has |sin| > 1 and the last one listed does; every drawn order (physics()) matches
   the grating equation; the rail readouts equal the settings (d = 1 mm / lines per mm, beam = N d cos(alpha), a = d / (d/a),
   L); the presets sit on their cited values (632.8 nm He-Ne, CD 1.6 um = 625 lines/mm, DVD 0.74 um, 24.0 and 61.4 degrees for
   650 nm, third order only for green and blue in the RGB preset). Single slit: dark fringes a sin(theta) = m lambda. */
const pre = `const D = window.__dg; if (!D) return true;
  const S = D.S, DEG = Math.PI / 180, rd = (id) => document.getElementById(id).textContent.replace(/\\u2212/g, '-');
  const lam = () => { const b = document.querySelector('#refChips [aria-pressed=true]'); return b ? parseFloat(b.textContent) : NaN; };
`;
module.exports = {
  checks: [
    { name: "orders table: d sin θ = mλ, y = L tan θ, highest order exists and the next one does not", fn: `(() => { ${pre}
      if (S.mode !== 'explore' || S.ap !== 'grating' || S.unknown) return true;
      const l = lam() * 1e-9, d = 1e-3 / S.lpm, al = S.alpha * DEG; if (!(l > 0)) return true;
      const rows = [...document.querySelectorAll('#ordTable tr')].slice(1); if (!rows.length) return 'no table rows';
      let hiShown = -Infinity;
      for (const r of rows) {
        const c = [...r.children].map((x) => x.textContent.replace(/\\u2212/g, '-')), m = parseFloat(c[0].replace('±', ''));
        if (/does not exist/.test(r.textContent)) { if (-Math.sin(al) + m * l / d <= 1) return 'order ' + m + ' is said not to exist but sin = ' + (-Math.sin(al) + m * l / d); continue; }
        const s = -Math.sin(al) + m * l / d; if (Math.abs(s) > 1) return 'order ' + m + ' is listed but sin theta = ' + s;
        hiShown = Math.max(hiShown, m);
        const psi = Math.asin(s) + al, th = parseFloat(c[1]);
        if (/misses/.test(r.textContent)) { if (Math.abs(psi) < Math.PI / 2 - 1e-3) return 'order ' + m + ' says it misses the wall at ' + th + ' deg'; continue; }
        if (Math.abs(th - psi / DEG) > 0.06) return 'order ' + m + ' shows ' + c[1] + ' deg, should be ' + (psi / DEG).toFixed(2);
        if (Math.abs(parseFloat(c[2]) - 100 * S.L * Math.tan(psi)) > 0.051 + 1e-3 * Math.abs(parseFloat(c[2]))) return 'order ' + m + ' y shows ' + c[2] + ' cm, should be ' + (100 * S.L * Math.tan(psi)).toFixed(2);
      }
      const hi = Math.floor((1 - -Math.sin(al)) * d / l + 1e-9);
      if (hiShown !== hi) return 'highest order shown ' + hiShown + ', physics ' + hi;
      return true; })()` },
    { name: "every drawn order obeys the grating equation and the count is right (all sources)", fn: `(() => { ${pre}
      const P = D.physics(); if (!P || P.single) return true;
      for (const c of P.comps) {
        const l = c.lam * 1e-9; let n = 0;
        for (const o of c.orders) {
          if (!o.exists) return 'order ' + o.m + ' of ' + c.lam + ' nm marked missing inside the range';
          const s = -Math.sin(P.al) + o.m * l / P.d;
          if (Math.abs(Math.sin(o.th) - s) > 1e-9) return c.lam + ' nm order ' + o.m + ': sin th = ' + Math.sin(o.th) + ', want ' + s;
          if (o.onScreen && Math.abs(o.y - S.L * Math.tan(o.th + P.al)) > 1e-9 * Math.max(1, Math.abs(o.y))) return 'y wrong for order ' + o.m;
          n++;
        }
        const lo = Math.ceil((-1 + Math.sin(P.al)) * P.d / l - 1e-9), hi = Math.floor((1 + Math.sin(P.al)) * P.d / l + 1e-9);
        if (c.orders.length !== Math.max(0, hi - lo + 1)) return c.lam + ' nm: ' + c.orders.length + ' orders, want ' + (hi - lo + 1);
      }
      return true; })()` },
    { name: "rail readouts equal the settings: d, beam width, a, L, turn", fn: `(() => { ${pre}
      const d = 1e-3 / S.lpm, t = rd('oLpm'), m = t.match(/d = ([\\d.]+) µm/);
      if (!m || Math.abs(+m[1] - d * 1e6) > 5.1e-4) return 'd shows ' + t + ', should be ' + (d * 1e6).toFixed(3) + ' um';
      const b = rd('oN').match(/N = (\\d+) · beam ([\\d.]+) mm/);
      if (!b || +b[1] !== S.N) return 'N readout ' + rd('oN');
      const beam = S.N * d * Math.cos(S.alpha * DEG) * 1e3; if (Math.abs(+b[2] - beam) > 0.5 * Math.pow(10, -(b[2].split('.')[1] || '').length) * 1.001) return 'beam shows ' + b[2] + ' mm, should be ' + beam;
      const a = rd('oDA').match(/a = ([\\d.]+) µm/); if (!a || Math.abs(+a[1] - d / S.dA * 1e6) > 5.1e-4) return 'a shows ' + rd('oDA') + ', should be ' + (d / S.dA * 1e6).toFixed(3);
      if (Math.abs(parseFloat(rd('oL')) - S.L) > 0.0051) return 'L shows ' + rd('oL') + ', S.L = ' + S.L;
      if (Math.abs(parseFloat(rd('oRot')) - S.alpha) > 0.051) return 'turn shows ' + rd('oRot') + ', alpha = ' + S.alpha;
      return true; })()` },
    { name: "presets and gratings sit on their cited values (632.8 nm, CD 1.6 µm, DVD 0.74 µm, 24.0° and 61.4°)", fn: `(() => { ${pre}
      const P = D.physics(), on = document.querySelector('#presets [aria-pressed=true]'), g = document.querySelector('#grats [aria-pressed=true]');
      if (g && g.dataset.g === 'cd' && Math.abs(1e-3 / S.lpm - 1.6e-6) > 1e-12) return 'CD pitch ' + 1e-3 / S.lpm;
      if (g && g.dataset.g === 'dvd' && Math.abs(1e-3 / S.lpm - 0.74e-6) > 1e-12) return 'DVD pitch ' + 1e-3 / S.lpm;
      if (!on || S.unknown) return true;
      const p = on.dataset.p, ls = P.comps.map((c) => c.lam);
      if (p === 'red600' && (ls[0] !== 632.8 || S.lpm !== 600)) return 'red600: ' + ls + ' nm, ' + S.lpm + '/mm';
      if (p === 'cd') {
        if (ls[0] !== 650 || Math.abs(1e-3 / S.lpm - 1.6e-6) > 1e-12) return 'cd preset: ' + ls + ' nm, d = ' + 1e-3 / S.lpm;
        if (Math.abs(Math.asin(650e-9 / 1.6e-6) / DEG - 24.0) > 0.05 || Math.abs(Math.asin(650e-9 / 0.74e-6) / DEG - 61.4) > 0.05) return 'CD or DVD first order angle';
      }
      if (p === 'rgb') { const m3 = P.comps.filter((c) => c.orders.some((o) => o.m === 3)).map((c) => c.lam).sort(); if (m3.join() !== '450,520') return 'third order reaches ' + m3 + ' nm; hint says green and blue only'; }
      if (p === 'hydrogen' && S.alpha === 0) { for (const w of [410.174, 434.046, 486.136, 656.285]) if (!ls.some((x) => Math.abs(x - w) < 0.02)) return 'hydrogen line ' + w + ' missing'; }
      return true; })()` },
    { name: "single slit: the listed dark fringes satisfy a sin θ = mλ", fn: `(() => { ${pre}
      if (S.ap !== 'single' || S.mode !== 'explore' || S.unknown) return true;
      const l = lam() * 1e-9, a = S.aw * 1e-6, al = S.alpha * DEG; if (!(l > 0)) return true;
      for (const r of document.querySelectorAll('#ordTable tr')) {
        const c = [...r.children].map((x) => x.textContent.replace(/\\u2212/g, '-')); if (c.length < 4 || /dark|misses/.test(r.textContent) || /does not/.test(r.textContent)) continue;
        const m = parseFloat(c[0].replace('±', '')), s = -Math.sin(al) + m * l / a, psi = Math.asin(s) + al;
        if (Math.abs(parseFloat(c[1]) - psi / DEG) > 0.06) return 'dark ' + m + ' shows ' + c[1] + ', should be ' + (psi / DEG).toFixed(2);
        if (Math.abs(parseFloat(c[3]) - Math.sin(psi)) > 1.6e-4) return 'dark ' + m + ' sin shows ' + c[3] + ', should be ' + Math.sin(psi).toFixed(4);
      }
      return true; })()` },
  ],
  steps: [
    { name: 'every source in turn, tilt the grating to the extremes, single slit, white light, back to the red laser', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(150); }
      const r = document.getElementById('sRot'); for (const v of [r.min, r.max, '0', '33']) { r.value = v; r.dispatchEvent(new Event('input', { bubbles: true })); await pause(100); }
      const n = document.getElementById('sN'); for (const v of [n.min, n.max, '2']) { n.value = v; n.dispatchEvent(new Event('input', { bubbles: true })); await pause(100); }
      for (const b of document.querySelectorAll('[data-ap]')) { b.click(); await pause(150); }
      document.querySelector('#presets [data-p=red600]').click(); await pause(200);
    })()` },
    { name: 'Measure mode: fill the calculator with odd numbers, compute for each Find, then back to Explore', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=measure]').click(); await pause(200);
      const go = [...document.querySelectorAll('#measBox button')].filter((b) => !b.dataset.find && !b.dataset.zoom);
      for (const f of ['d', 'lam']) { const fb = document.querySelector('[data-find=' + f + ']'); if (fb && !fb.disabled) fb.click();
        for (const [L, y, m] of [['1', '10', '1'], ['0', '5', '1'], ['1', '1e9', '1'], ['1', '5', '0'], ['1e-9', '1e-9', '99']]) { set('inL', L); set('inY', y); set('inM', m); for (const b of go) b.click(); await pause(60); } }
      document.querySelector('[data-mode=explore]').click(); await pause(200);
    })()` },
  ],
};
