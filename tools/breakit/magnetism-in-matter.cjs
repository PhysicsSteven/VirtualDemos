/* Known values for the break-it test (tools/breakit.cjs), magnetism-in-matter. No debug hook: the checks read the readouts and the
   two sliders. B₀ = μ₀ n I from the current and turns per cm; χ and μ/μ₀ = 1 + χ equal OpenStax Table 12.2 for the pressed core;
   for a linear core B − B₀ = χ B₀ (to the shown digits); the floating readout is μ₀ρg/|χ|; the iron Example 12.10 preset
   (20 turns per cm, 0.20 A) has B₀ = 5.0 × 10⁻⁴ T. */
const helpers = `const MU0 = 1.25663706127e-6, g = 9.81;
  const dd = {}; for (const d of document.querySelectorAll('#out > div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) dd[t.textContent.trim()] = v.textContent.replace(/−/g, '-').trim(); }
  const tes = (s) => { const m = s.match(/^(-?[\\d.]+) ?(mT|µT|nT|T)\\b/); if (!m) return s === '0 T' ? 0 : NaN; return parseFloat(m[1]) * { T: 1, mT: 1e-3, 'µT': 1e-6, nT: 1e-9 }[m[2]]; };
  const mat = (document.querySelector('#mats [aria-pressed="true"]') || {}).dataset; const key = mat && mat.m;
  const CHI = { vacuum: 0, al: 2.2e-5, w: 6.8e-5, lox: 3.5e-3, cu: -9.7e-6, water: -9.1e-6, bi: -1.7e-5 }, RHO = { cu: 8960, water: 998.2, bi: 9780 };
  const I = parseFloat(document.getElementById('sI').value), n = parseFloat(document.getElementById('sN').value);
  const B0 = MU0 * n * 100 * I;`;
module.exports = {
  checks: [
    { name: "B₀ = μ₀ n I from the sliders", fn: `(() => { ${helpers}
      if (document.getElementById('status').textContent) return true; /* a sweep moves I between frames */
      const s = dd['Coil alone, B₀ = μ₀nI']; if (s === undefined) return true;
      const got = tes(s); if (!isFinite(got)) return 'B0 readout "' + s + '"';
      return Math.abs(got - B0) <= 6e-3 * Math.abs(B0) + 1e-12 ? true : 'B0 shows ' + s + ', μ0 n I = ' + B0; })()` },
    { name: "χ, μ/μ₀ and the floating readout follow the core's table value", fn: `(() => { ${helpers}
      if (!(key in CHI)) return true;
      const chi = CHI[key], s = dd['Permeability μ/μ₀ = 1 + χ']; if (s === undefined) return true;
      if (Math.abs(parseFloat(s) - (1 + chi)) > 6e-7) return 'μ/μ0 shows ' + s + ', 1 + χ = ' + (1 + chi);
      if (key in RHO) { const k = Object.keys(dd).find((x) => /^To float it/.test(x)); if (!k) return 'no floating readout for ' + key;
        const want = MU0 * RHO[key] * g / Math.abs(chi), got = parseFloat(dd[k].replace(/,/g, ''));
        if (Math.abs(got - want) > 1 + 1e-3 * want) return 'floating readout ' + dd[k] + ', μ0ρg/|χ| = ' + want; }
      return true; })()` },
    { name: "linear core: B − B₀ = χ B₀ and B = (1 + χ) B₀ to the digits shown", fn: `(() => { ${helpers}
      if (!(key in CHI) || !isFinite(B0) || I === 0) return true;
      const b = dd['With the core, B'], bm = dd['From the core, B − B₀']; if (!b || /hidden/.test(b) || !bm) return true;
      const got = tes(bm); if (!isFinite(got)) return 'B−B0 readout "' + bm + '"';
      const want = CHI[key] * B0;
      return Math.abs(got - want) <= 0.06 * Math.abs(want) + 1e-12 ? true : 'B − B0 shows ' + bm + ', χB0 = ' + want; })()` },
    { name: "Example 12.10 preset: B₀ = 5.0 × 10⁻⁴ T at 20 turns per cm and 0.20 A", fn: `(() => { ${helpers}
      const p = document.querySelector('#presets [aria-pressed="true"]'); if (!p || p.dataset.p !== 'iron' || n !== 20 || Math.abs(I - 0.2) > 1e-9) return true;
      return Math.abs(B0 - 5.0265e-4) < 1e-7 && Math.abs(tes(dd['Coil alone, B₀ = μ₀nI']) - 5.03e-4) < 6e-7 ? true : 'B0 = ' + B0 + ', shown ' + dd['Coil alone, B₀ = μ₀nI']; })()` },
    { name: "iron: |M/Ms| ≤ 1 and B/B₀ − 1 consistent with B and B₀ when shown", fn: `(() => { ${helpers}
      if (key !== 'iron') return true;
      const m = dd['Magnetization M/M_s']; if (m === undefined || /hidden/.test(m)) return true;
      if (!(Math.abs(parseFloat(m)) <= 1.0005)) return 'M/Ms shows ' + m;
      const b = tes(dd['With the core, B']), bm = tes(dd['From the core, B − B₀']);
      if (isFinite(b) && isFinite(bm) && Math.abs(b - B0 - bm) > 0.02 * Math.abs(bm) + 0.006 * Math.abs(b) + 1e-6) return 'B ' + dd['With the core, B'] + ' − B0 ' + dd['Coil alone, B₀ = μ₀nI'] + ' ≠ ' + dd['From the core, B − B₀'];
      return true; })()` }
  ],
  steps: [
    { name: "iron: sweep, demagnetize, change turns mid sweep, switch core and back", fn: `(async () => {
      const c = (s) => { const e = document.querySelector(s); if (e) e.click(); }, w = (ms) => new Promise((r) => setTimeout(r, ms));
      c('#presets [data-p="loop"]'); await w(900); const n = document.getElementById('sN'); n.value = 40; n.dispatchEvent(new Event('input', { bubbles: true })); await w(500);
      c('#demagBtn'); await w(1200); c('#mats [data-m="water"]'); c('#mats [data-m="iron"]'); c('#clearBtn'); await w(300);
      n.value = 5; n.dispatchEvent(new Event('input', { bubbles: true })); c('#sweepBtn'); await w(600); c('#sweepBtn'); return true; })()` }
  ]
};
