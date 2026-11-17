/* Known values for the break-it test (tools/breakit.cjs), active-galaxies. Hook: window.__ag (S, ...).
   Flicker: D = c t (1 hour: 1.08 × 10⁹ km = 7.21 AU). Engine: L = η ṁ c², L_Edd = 1.257 × 10³¹ W per M☉, and their ratio.
   Jet: v_app = β sin θ/(1 − β cos θ), the arrival spacing 1 − β cos θ and the largest γβ. */
const pre = `const E = window.__ag; if (!E) return true; const S = E.S; const C = 299792458, MSUN = 1.3271244e20 / 6.67430e-11, YR = 31557600, AU = 149597870700;
  const ETA = { fusion: 0.007, still: 1 - Math.sqrt(8 / 9), ten: 0.1, spin: 1 - 1 / Math.sqrt(3) };
  const rd = () => { const o = {}; for (const d of document.querySelectorAll("#out > div")) o[d.querySelector("dt").textContent] = d.querySelector("dd").textContent; return o; };
  const SUP = { "⁰": 0, "¹": 1, "²": 2, "³": 3, "⁴": 4, "⁵": 5, "⁶": 6, "⁷": 7, "⁸": 8, "⁹": 9 };
  const num = (t) => { t = String(t).replace(/\\u2212/g, "-").replace(/,/g, ""); const m = t.match(/(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { const neg = m[2][0] === "⁻"; let e = 0; for (const c of m[2]) if (c in SUP) e = e * 10 + SUP[c]; v *= Math.pow(10, neg ? -e : e); } return v; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const o = rd();
`;
module.exports = {
  checks: [
    { name: "flicker: D = c t", fn: `(() => { ${pre}
      if (S.view !== 'fl' || S.blind) return true; const D = C * Math.pow(10, S.fl.logD);
      if (!near(num(o['Biggest size D = c t']), D / 1000, 6e-3)) return 'D shows ' + o['Biggest size D = c t'] + ', c t = ' + D / 1000 + ' km';
      if (!near(num(o['in AU']), D / AU, 6e-3)) return 'AU shows ' + o['in AU'];
      return true; })()` },
    { name: "engine: L = η ṁ c², L_Edd = 1.257 × 10³¹ W per M☉", fn: `(() => { ${pre}
      if (S.view !== 'en' || S.blind) return true; const L = ETA[S.en.eta] * Math.pow(10, S.en.logMdot) * MSUN / YR * C * C, Le = 1.25707e31 * Math.pow(10, S.en.logM);
      if (!near(num(o['Power L = η ṁ c²']), L, 6e-3)) return 'L shows ' + o['Power L = η ṁ c²'] + ', η ṁ c² = ' + L;
      if (!near(num(o['Eddington limit L_Edd']), Le, 6e-3)) return 'L_Edd shows ' + o['Eddington limit L_Edd'] + ', expected ' + Le;
      if (!near(num(o['L ÷ L_Edd']), L / Le, 2e-3) && Math.abs(num(o['L ÷ L_Edd']) - L / Le) > 6e-4) return 'ratio shows ' + o['L ÷ L_Edd'];
      return true; })()` },
    { name: "jet: v_app = β sin θ/(1 − β cos θ) and γβ", fn: `(() => { ${pre}
      if (S.view !== 'jet' || S.blind) return true; const b = S.jet.beta, th = S.jet.th * Math.PI / 180, va = b * Math.sin(th) / (1 - b * Math.cos(th));
      if (Math.abs(num(o['Apparent speed across the sky']) - va) > 6e-4) return 'apparent speed shows ' + o['Apparent speed across the sky'] + ', formula ' + va;
      if (Math.abs(num(o['Fastest it can seem, γv']) - b / Math.sqrt(1 - b * b)) > 6e-4) return 'γβ shows ' + o['Fastest it can seem, γv'];
      if (va > b / Math.sqrt(1 - b * b) + 1e-9) return 'apparent speed above γβ';
      return true; })()` },
  ],
};
