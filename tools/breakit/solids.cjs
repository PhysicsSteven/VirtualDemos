/* Known values for the break-it test (tools/breakit.cjs), solids. Hook: window.__sd (S, dpRun, dvI, ledEg, ALPHA).
   Crystals: the Madelung constants by Ewald's method are 1.74756 (NaCl structure) and 1.76267 (CsCl structure).
   Doping: charge neutrality n + N_A⁻ = p + N_D⁺ and the mass action law n p = n_i² hold at every temperature and doping.
   Junction: the ideal diode current is 0 at V = 0, never below −I₀, and rises with V; the LED wavelength is hc/E_g. */
module.exports = {
  checks: [
    { name: "Madelung constants: 1.74756 (NaCl) and 1.76267 (CsCl)", fn: `(() => { const s = window.__sd; if (!s) return true;
      return Math.abs(s.ALPHA.rs - 1.747565) < 2e-5 && Math.abs(s.ALPHA.cs - 1.762675) < 2e-5 ? true : 'alpha = ' + s.ALPHA.rs + ', ' + s.ALPHA.cs; })()` },
    { name: "doping: n + N_A⁻ = p + N_D⁺ and n p = n_i² at the current settings and at 150, 300, 600 K", fn: `(() => { const s = window.__sd; if (!s || !s.S.dp) return true;
      for (const T of [s.S.dp.T, 150, 300, 600]) { const r = s.dpRun(T); if (![r.n, r.p, r.NDp, r.NAm, r.EF].every(isFinite)) return 'non finite carriers at ' + T + ' K';
        const L = r.n + r.NAm, R = r.p + r.NDp; if (Math.abs(L - R) > 1e-6 * Math.max(L, R)) return 'charge neutrality off at ' + T + ' K: ' + L + ' vs ' + R;
        if (Math.abs(r.n * r.p / (r.ni * r.ni) - 1) > 1e-6) return 'n p = ' + r.n * r.p + ' but n_i² = ' + r.ni * r.ni + ' at ' + T + ' K'; }
      return true; })()` },
    { name: "diode: I(0) = 0, I rises with V, I ≥ −I₀; LED wavelength = hc/E_g", fn: `(() => { const s = window.__sd; if (!s || !s.S.dv) return true;
      const I = s.dvI; if (I(0) !== 0) return 'I(0) = ' + I(0);
      let prev = -Infinity; for (const V of [-3, -1, -0.2, 0.1, 0.4, 0.7]) { const x = I(V); if (!isFinite(x) || x < prev) return 'I(' + V + ') = ' + x + ' after ' + prev; prev = x; }
      const I0 = I(0.5) / Math.expm1(0.5 / (8.617333262e-5 * s.S.dv.T)); if (I(-3) < -I0 * (1 + 1e-9)) return 'reverse current beyond −I0';
      const Eg = s.ledEg(); if (!(Eg > 0 && isFinite(Eg))) return 'LED gap ' + Eg;
      if (s.S.dv.led === 'GaP' && Math.abs(1239.84198 / Eg - 548.6) > 0.1) return 'GaP LED at ' + 1239.84198 / Eg + ' nm';
      return true; })()` }
  ],
  steps: [
    { name: "every view: extreme dopings, temperature and bias, then back", fn: `(async () => {
      const s = window.__sd, w = (ms) => new Promise((r) => setTimeout(r, ms)), c = (q) => { const e = document.querySelector(q); if (e) e.click(); };
      for (const v of ['dp', 'dv', 'bd', 'cr', 'dp']) { s.setView(v); await w(200);
        for (const r of document.querySelectorAll('.rail input[type=range]')) { for (const val of [r.max, r.min, r.max]) { r.value = val; r.dispatchEvent(new Event('input', { bubbles: true })); } } await w(200); }
      return true; })()` }
  ]
};
