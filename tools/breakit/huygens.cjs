/* Known values for the break-it test (tools/breakit.cjs), huygens. The page has no debug hook, so every check reads the readouts (#out),
   which are rebuilt on every change. Boundary view: Snell's law from the wavelets, sin θ1/v1 = sin θ2/v2 with v = c/n for the shown
   media; the critical angle sin θc = n2/n1 (and "none" only when n1 <= n2); total internal reflection exactly when n1 sin θ1 > n2;
   the mirror reflects at the angle of incidence. Opening view: first dark direction sin θ = λ/a (none when a <= 1).
   Race view: every lane shows v = c/n. */
const pre = `const out = document.getElementById('out'); if (!out) return true;
  const C = 2.99792458e8, row = {}; for (const d of out.querySelectorAll(':scope > div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) row[t.textContent.trim()] = v.textContent.replace(/\\u2212/g, '-'); }
  const num = (s) => parseFloat(String(s).replace(/,/g, ''));
  const sel = (id) => { const e = document.getElementById(id); return e && e.offsetParent !== null; };
  const view = (document.querySelector('#viewSeg [aria-pressed=true]') || {}).dataset ? document.querySelector('#viewSeg [aria-pressed=true]').dataset.v : '';
  const blind = !!document.getElementById('labBlind').checked, R = Math.PI / 180;
`;
module.exports = {
  checks: [
    { name: "Snell from the wavelets: sin θ1/v1 = sin θ2/v2, TIR exactly when n1 sin θ1 > n2, critical angle sin θc = n2/n1", fn: `(() => { ${pre}
      if (view !== 'boundary' || blind) return true;
      const k1 = row['Upper medium: n₁, v₁'], k2 = row['Lower medium: n₂, v₂']; if (!k1) return true;
      const n1 = num(k1), th1 = num(row['Angle of incidence θ₁']);
      if (!(Math.abs(num(k1.split(',')[1]) * 1e8 - C / n1) <= 6e-4 * C / n1)) return 'v1 shows ' + k1;
      if (!k2) { const ref = num(row['Angle of reflection']); return Math.abs(ref - th1) < 1e-9 ? true : 'mirror: θ_r ' + ref + ' != θ_i ' + th1; }
      const n2 = num(k2), th2t = row['Angle of refraction θ₂'], tir = n1 * Math.sin(th1 * R) > n2;
      if (!(Math.abs(num(k2.split(',')[1]) * 1e8 - C / n2) <= 6e-4 * C / n2)) return 'v2 shows ' + k2;
      if (tir !== /total internal/.test(th2t)) return 'n1 sin θ1 = ' + n1 * Math.sin(th1 * R) + ', n2 = ' + n2 + ' but θ2 reads "' + th2t + '"';
      const crit = row['Critical angle'];
      if (n1 > n2) { if (Math.abs(num(crit) - Math.asin(n2 / n1) / R) > 0.0501) return 'critical angle ' + crit + ', physics ' + Math.asin(n2 / n1) / R; } else if (!/none/.test(crit)) return 'n1 <= n2 but critical angle reads ' + crit;
      if (tir) return true;
      const th2 = num(th2t), want = Math.asin(n1 / n2 * Math.sin(th1 * R)) / R;
      if (Math.abs(th2 - want) > 0.0501) return 'θ2 shows ' + th2t + ', Snell gives ' + want;
      const a = num(row['sin θ₁/v₁']), b = num(row['sin θ₂/v₂']); if (!(Math.abs(a - b) <= 2e-3 * a + 2e-4)) return 'sin θ1/v1 = ' + a + ' but sin θ2/v2 = ' + b;
      const lam = num(String(row['Wavelength in the lower medium']).split('×')[1]); if (Math.abs(lam - n1 / n2) > 5.1e-4) return 'λ2/λ1 ' + lam + ', n1/n2 = ' + n1 / n2;
      return true; })()` },
    { name: "opening: first dark direction sin θ = λ/a; none when the opening is no wider than a wavelength", fn: `(() => { ${pre}
      if (view !== 'opening' || blind) return true;
      const a = num(row['Opening']), t = row['First dark direction, sin θ = λ/a'];
      if (a <= 1) return /none/.test(t) ? true : 'a = ' + a + ' λ but first dark reads ' + t;
      return Math.abs(num(t) - Math.asin(1 / a) / R) <= 0.0501 ? true : 'a = ' + a + ', first dark ' + t + ', physics ' + Math.asin(1 / a) / R; })()` },
    { name: "race: every lane shows v = c/n and a transit time n L/c", fn: `(() => { ${pre}
      if (view !== 'race') return true;
      const dd = out.querySelector('dd.ok'); if (!dd) return true;
      const L = parseFloat(document.getElementById('oL').textContent);
      const lines = dd.innerHTML.split('<br>').map((s) => s.replace(/<[^>]+>/g, ''));
      for (const l of lines) { const m = l.match(/: ([\\d.]+), ([\\d.]+) × 10⁸ m\\/s, (\\S+) (\\S+?),/); if (!m) continue; const n = +m[1];
        if (Math.abs(+m[2] * 1e8 - C / n) > 6e-4 * C / n) return l + ': v is not c/n';
        if (blind) continue; const f = { '': 1, m: 1e-3, 'µ': 1e-6, n: 1e-9, p: 1e-12, f: 1e-15 }[m[4].slice(0, -1)];
        if (f === undefined) return 'odd unit in ' + l; const t = +m[3] * f, want = n * L / C; if (Math.abs(t - want) > 1e-3 * want) return l + ': time ' + t + ', n L/c = ' + want; }
      return true; })()` },
  ],
  steps: [
    { name: 'Boundary: sweep the angle with the keys past both ends through every medium pair, then switch views mid run', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      document.querySelector('#presets [data-p=out]').click(); await pause(200);
      const c = $('can'); c.focus();
      for (let i = 0; i < 90; i++) c.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true, cancelable: true }));
      await pause(200);
      for (const m1 of [...$('m1').options].map((o) => o.value)) for (const m2 of [...$('m2').options].map((o) => o.value)) {
        $('m1').value = m1; $('m1').dispatchEvent(new Event('change', { bubbles: true })); $('m2').value = m2; $('m2').dispatchEvent(new Event('change', { bubbles: true })); await pause(20); }
      for (let i = 0; i < 90; i++) c.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowDown', bubbles: true, cancelable: true }));
      for (const v of ['opening', 'construct', 'race', 'boundary']) { document.querySelector('#viewSeg [data-v=' + v + ']').click(); await pause(150); }
      document.querySelector('#presets [data-p=door]').click(); await pause(200);
    })()` },
  ],
};
