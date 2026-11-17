/* Known values for the break-it test (tools/breakit.cjs), galaxy-clusters. Hook: window.__gcl (S, B, ...).
   Zwicky: M = 2σ²R/G from the σ shown (R = 2,000 kpc). Hot gas: the hydrostatic mass inside 2,000 kpc equals the model's true mass,
   and Wien λ = b/T. Lensing: the ring mass, from (c²/4G)(D_l D_s/D_ls)θ², is 4.98 × 10¹³ M☉ for 10¹⁵ M☉ and z_s = 1.
   Bullet: the two halos keep zero total momentum change (equal and opposite pulls). */
const pre = `const E = window.__gcl; if (!E) return true; const S = E.S; const G = 1.3271244e20 / (1000 * 149597870700 * 648000 / Math.PI) / 1e6;
  const rd = () => { const o = {}; for (const d of document.querySelectorAll("#out > div")) o[d.querySelector("dt").textContent] = d.querySelector("dd").textContent; return o; };
  const SUP = { "⁰": 0, "¹": 1, "²": 2, "³": 3, "⁴": 4, "⁵": 5, "⁶": 6, "⁷": 7, "⁸": 8, "⁹": 9 };
  const num = (t) => { t = String(t).replace(/\\u2212/g, "-").replace(/,/g, ""); const m = t.match(/(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { const neg = m[2][0] === "⁻"; let e = 0; for (const c of m[2]) if (c in SUP) e = e * 10 + SUP[c]; v *= Math.pow(10, neg ? -e : e); } return v; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const o = rd();
`;
module.exports = {
  checks: [
    { name: "Zwicky: M = 2σ²R/G from the measured σ", fn: `(() => { ${pre}
      if (S.view !== 'zw' || S.blind) return true; const s = num(o['Spread of their speeds σ (measured)']), M = num(o['Mass the speeds need, M = v²R/G']); if (!isFinite(s)) return true;
      if (!near(M, 2 * s * s * 2000 / G, 6e-3)) return 'Zwicky mass ' + o['Mass the speeds need, M = v²R/G'] + ' but 2σ²R/G = ' + 2 * s * s * 2000 / G;
      return true; })()` },
    { name: "hot gas: hydrostatic mass = true mass; Wien λ = b/T", fn: `(() => { ${pre}
      if (S.view !== 'x' || S.blind) return true; const Mt = Math.pow(10, S.logM), T = num(o['Gas temperature T']);
      if (!near(num(o['Mass inside 2,000 kpc from the gas']), Mt, 6e-3)) return 'gas mass ' + o['Mass inside 2,000 kpc from the gas'] + ', true ' + Mt;
      if (!near(num(o['Glow peaks at (Wien)']), 2.897771955e-3 / T * 1e9, 6e-3)) return 'Wien shows ' + o['Glow peaks at (Wien)'] + ' for T = ' + T;
      return true; })()` },
    { name: "lensing: ring mass 4.98 × 10¹³ M☉ at 10¹⁵ M☉, z_s = 1, all the mass", fn: `(() => { ${pre}
      if (S.view !== 'lens' || S.blind) return true; const m = o['Mass inside the ring (lensing)'];
      if (Math.abs(S.logM - 15) < 1e-9 && Math.abs(S.zs - 1) < 1e-9 && S.pull === 'all' && !near(num(m), 4.978e13, 3e-3)) return 'ring mass ' + m;
      if (S.pull !== 'all' && Math.abs(S.logM - 15) < 1e-9 && Math.abs(S.zs - 1) < 1e-9 && m !== '—') return 'a ring from the stars and gas alone: ' + m;
      return true; })()` },
    { name: "bullet: halo momentum stays zero", fn: `(() => { ${pre}
      const B = E.B; if (!B) return true; const p = B.h[0].M * B.h[0].vx + B.h[1].M * B.h[1].vx; if (Math.abs(p) > 1e-9 * B.h[0].M) return 'halo momentum ' + p;
      return true; })()` },
  ],
};
