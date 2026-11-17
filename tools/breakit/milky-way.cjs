/* Known values for the break-it test (tools/breakit.cjs), milky-way. Hook: window.__mw (S, SV, survey, GC, ...).
   Shapley's clusters: the center readout equals the survey of the clusters measured so far (median of each coordinate), and with all
   141 measured at L = 50 L☉, dust corrected, without the infrared clusters, it is 7.593 kpc (24,765 ly) with 125 toward Sagittarius.
   Galactic year: the Sun's lap is 2π(8.178 kpc)/(229 km/s) = 219.4 Myr and the mass inside its orbit v²r/G = 9.97 × 10¹⁰ M☉.
   Spiral arms: the corotation radius is where Ω(r) equals the pattern speed (29,697 ly at 25 km/s/kpc). */
const pre = `const E = window.__mw; if (!E) return true; const S = E.S;
  const rd = () => { const o = {}; for (const d of document.querySelectorAll("#out > div")) o[d.querySelector("dt").textContent] = d.querySelector("dd").textContent; return o; };
  const SUP = { "⁰": 0, "¹": 1, "²": 2, "³": 3, "⁴": 4, "⁵": 5, "⁶": 6, "⁷": 7, "⁸": 8, "⁹": 9 };
  const num = (t) => { t = String(t).replace(/\\u2212/g, "-").replace(/,/g, ""); const m = t.match(/(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { const neg = m[2][0] === "⁻"; let e = 0; for (const c of m[2]) if (c in SUP) e = e * 10 + SUP[c]; v *= Math.pow(10, neg ? -e : e); } return v; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const o = rd();
`;
module.exports = {
  checks: [
    { name: "Shapley: the center readout is the survey's; all 141 at 50 L☉ with dust: 7.593 kpc, 125 toward Sagittarius", fn: `(() => { ${pre}
      if (S.view !== 'sh' || S.blind) return true; const sv = E.survey(Math.floor(S.sh.n), S.sh.L, S.sh.dust, S.sh.ir);
      if (o['in kpc'] !== undefined && sv.n > 0 && !near(num(o['in kpc']), sv.dist, 6e-3)) return 'center shows ' + o['in kpc'] + ' kpc, survey gives ' + sv.dist;
      if (sv.n >= 141 && !S.sh.ir && S.sh.dust && S.sh.L === 50) { if (Math.abs(sv.dist - 7.593) > 0.001) return 'all 141: ' + sv.dist; if (sv.toward !== 125) return 'toward: ' + sv.toward; }
      return true; })()` },
    { name: "galactic year: the Sun's lap 219.4 Myr; mass inside its orbit 9.97 × 10¹⁰ M☉", fn: `(() => { ${pre}
      if (S.view !== 'yr' || S.blind) return true;
      const lap = o["Sun's lap, the galactic year"]; if (lap !== undefined && Math.abs(num(lap) - 219.4) > 0.5) return "Sun's lap shows " + lap;
      const m = o["Mass inside the Sun's orbit"]; if (m !== undefined && !near(num(m), 9.971e10, 2e-3)) return 'mass inside the Sun shows ' + m;
      return true; })()` },
  ],
};
