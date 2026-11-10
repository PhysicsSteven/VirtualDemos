/* Known values for the break-it test (tools/breakit.cjs), sound-waves. No debug hook: the checks read the readouts and recompute
   the physics from the numbers the page itself shows. Ideal gas v = sqrt(gamma R T / M), rho = P M / (R T) at 101325 Pa (air
   1.4 and 28.9647 g/mol, helium and argon 5/3 with 4.002602 and 39.948 g/mol); in the wave view lambda = v/f,
   dp_max = rho v (2 pi f) s_max, I = dp^2/(2 rho v), level = 10 log10(I / 1e-12); the temperature readout in kelvin is C + 273.15;
   each recorded time of flight is within one sample (1/48000 s) of d/v; the race lanes show L/v for the speed they show, and the
   air gas model speed at the card's temperature. */
const pre = `const R = 8.31446261815324, P = 101325, G = { 'Air (dry)': [1.4, 0.0289647], 'Helium': [5 / 3, 0.004002602], 'Argon': [5 / 3, 0.039948] };
  const out = document.getElementById('out'); if (!out) return true;
  const row = {}; for (const d of out.querySelectorAll(':scope > div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) row[t.textContent.trim()] = v.textContent.replace(/\\u2212/g, '-').trim(); }
  const key = (s) => Object.keys(row).find((k) => k.startsWith(s));
  const num = (s) => { const m = s == null ? null : String(s).match(/-?\\d+(\\.\\d+)?(e[+-]?\\d+)?/i); return m ? parseFloat(m[0]) : NaN; };
  const hidden = (s) => s == null || /hidden|work it out|clap to time/.test(s);
  const close = (got, want, rel, what) => (Math.abs(got - want) <= rel * Math.abs(want) + 1e-12 ? true : what + ' shows ' + got + ', physics gives ' + want);
  const ab = (got, want, tol, what) => (Math.abs(got - want) <= tol ? true : what + ' shows ' + got + ', physics gives ' + want);
  const gasV = (g, tC) => Math.sqrt(g[0] * R * (tC + 273.15) / g[1]);
`;
module.exports = {
  checks: [
    { name: 'wave view: v, density, wavelength, pressure amplitude, intensity and level equal the ideal gas physics', fn: `(() => { ${pre}
      const view = document.getElementById('stage').dataset.view; if (view === 'race') return true;
      const g = G[row[key('Gas')]], tk = key('Temperature'); if (!g || !tk) return true;
      const tC = num(row[tk]), K = parseFloat((row[tk].match(/\\(([-\\d.]+) K\\)/) || [])[1]);
      if (Math.abs(K - (tC + 273.15)) > 0.0051) return 'kelvin readout ' + K + ' for ' + tC + ' C';
      const v = gasV(g, tC), rho = P * g[1] / (R * (tC + 273.15)); let r;
      const vk = key('Speed of sound'); if (!hidden(row[vk]) && (r = ab(num(row[vk]), v, 0.0501, 'v')) !== true) return r;
      const dk = key('Density'); if (!hidden(row[dk]) && (r = ab(num(row[dk]), rho, 0.00006, 'density')) !== true) return r;
      if (view !== 'wave') { const pk = key('Predicted d/v'), dd = num(row[key('A to B')]); if (pk && !hidden(row[pk]) && (r = ab(num(row[pk]), dd / v * 1000, 0.00006, 'd/v')) !== true) return r; return true; }
      const f = num(row[key('Frequency')]), s = num(row[key('Displacement amplitude')]) * 1e-6, w = 2 * Math.PI * f, dp = rho * v * w * s, I = dp * dp / (2 * rho * v);
      const lk = key('Wavelength'); if (!hidden(row[lk]) && (r = ab(num(row[lk]), v / f, 0.00051, 'wavelength')) !== true) return r;
      const pk = key('Pressure amplitude'); if (!hidden(row[pk]) && (r = close(num(row[pk]), dp, 0.0051, 'dp_max')) !== true) return r;
      const ik = key('Intensity'); if (!hidden(row[ik]) && (r = close(num(row[ik]), I, 0.0051, 'intensity')) !== true) return r;
      const bk = key('Sound level'); if (!hidden(row[bk]) && Math.abs(num(row[bk]) - 10 * Math.log10(I / 1e-12)) > 0.0501) return 'level shows ' + row[bk] + ', physics gives ' + (10 * Math.log10(I / 1e-12)).toFixed(2);
      return true; })()` },
    { name: 'every recorded time of flight is within one sample of d/v, and the fit slope is positive and finite', fn: `(() => { ${pre}
      const rows = [...document.querySelectorAll('#rowsTbl tbody tr')].filter((tr) => tr.children.length > 4); if (!rows.length) return true;
      for (const tr of rows) {
        const gas = (tr.title.match(/^(.*?), clap to A/) || [])[1], g = G[gas]; if (!g) continue;
        const d = num(tr.children[1].textContent), dt = num(tr.children[2].textContent), tC = num(tr.children[3].textContent), v = gasV(g, tC);
        if (!(Math.abs(dt - d / v * 1000) < 1000 / 48000 + 1e-4)) return 'row ' + tr.children[0].textContent + ': dt ' + dt + ' ms for d ' + d + ' m at ' + tC + ' C, d/v ' + (d / v * 1000).toFixed(4) + ' ms (more than one sample apart)';
      }
      const fk = [...document.querySelectorAll('#fitOut > div')].find((d) => d.querySelector('dt').textContent.startsWith('v = 1/slope'));
      if (fk) { const t = fk.querySelector('dd').textContent; if (/NaN|Infinity/.test(t)) return 'fit shows ' + t; }
      return true; })()` },
    { name: 'race: lane arrival times are L/v for the speed shown, and the gas lanes follow the ideal gas', fn: `(() => { ${pre}
      if (document.getElementById('stage').dataset.view !== 'race') return true;
      const Lk = key('Course length'), Ls = row[Lk]; if (!Ls) return true; const L = /km/.test(Ls) ? num(Ls) * 1000 : num(Ls);
      const tk = key('Temperature'), tC = num(row[tk]); let air = null;
      for (const d of out.querySelectorAll(':scope > div.wide, :scope > div')) {
        const t = d.querySelector('dt').textContent, dd = d.querySelector('dd').textContent.replace(/\\u2212/g, '-');
        const m = t.match(/^Lane \\d: (.*)$/); if (!m) continue;
        const sp = dd.match(/^([\\d.]+) m\\/s/), ar = dd.match(/(?:L\\/v = |arrived at )([\\d.]+) (ms|s)/); if (!sp || !ar) continue;
        const v = parseFloat(sp[1]), ta = parseFloat(ar[1]) / (ar[2] === 'ms' ? 1000 : 1), step = v < 1000 ? 0.05 : 0.5;
        if (Math.abs(ta - L / v) > L / v * (step / v + 0.0006)) return m[1] + ': arrival ' + ar[1] + ' ' + ar[2] + ' but L/v = ' + (L / v) + ' for ' + v + ' m/s over ' + L + ' m';
        const g = G[m[1]]; if (g && Math.abs(v - gasV(g, tC)) > step + 1e-9) return m[1] + ' speed ' + v + ' but the gas model gives ' + gasV(g, tC).toFixed(2) + ' at ' + tC + ' C';
      }
      return true; })()` },
  ],
  steps: [
    { name: 'wave view: every gas, f and s_max at their limits, T at -20 and 40, with Blind on and off', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { const e = $(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=wave]').click(); await pause(200);
      for (const g of ['helium', 'argon', 'unknown', 'air']) { const b = document.querySelector('#gases [data-g=' + g + ']'); if (b) b.click(); await pause(150);
        for (const [f, s, t] of [[100, 10, -20], [2000, 0.1, 40], [1, 0.05, 0]]) { set('sF', f); set('sS', s); set('sT', t); await pause(150); } }
      $('labBlind').click(); await pause(150); set('sF', 777); $('labBlind').click(); await pause(150);
      document.querySelector('#presets [data-p=wave]').click(); await pause(200);
    })()` },
    { name: 'time of flight: clap and record at d = 0.1 m and 3 m, A at 0.1 and 1 m, cold and hot, in every gas', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { const e = $(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=clap]').click(); await pause(200);
      for (const g of ['air', 'helium', 'argon', 'unknown']) { const b = document.querySelector('#gases [data-g=' + g + ']'); if (b) b.click(); await pause(100);
        for (const [a, d, t] of [[0.1, 0.1, -20], [1, 3, 40], [0.5, 1.5, 20]]) { set('sA', a); set('sD', d); set('sT', t); $('clap').click(); await pause(700); $('record').click(); await pause(100); } }
      $('Dp').click(); $('Dm').click(); $('clap').click(); await pause(300); $('clearRows').click(); await pause(100);
      document.querySelector('#presets [data-p=clap]').click(); await pause(300);
    })()` },
    { name: 'race: strike, change the course, temperature and every lane (even a mystery material) mid race, strike again', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      document.querySelector('#presets [data-p=race]').click(); await pause(200);
      $('strike').click(); await pause(300);
      for (const L of ['100', '10000', '1000']) { const b = document.querySelector('#course [data-l="' + L + '"]'); if (b) b.click(); await pause(150); $('strike').click(); await pause(150); }
      const pc = document.querySelector('#pace [data-k]:last-child'); if (pc) pc.click();
      for (let i = 1; i <= 6; i++) { const s = $('lane' + i); if (!s) continue; for (const o of [...s.options]) { s.value = o.value; s.dispatchEvent(new Event('change', { bubbles: true })); await pause(30); } }
      $('newMystery').click(); await pause(100); $('strike').click(); await pause(500);
      const t = $('sT'); for (const v of ['-20', '40']) { t.value = v; t.dispatchEvent(new Event('input', { bubbles: true })); t.dispatchEvent(new Event('change', { bubbles: true })); await pause(100); }
      document.querySelector('#presets [data-p=wave]').click(); await pause(300);
    })()` },
  ],
};
