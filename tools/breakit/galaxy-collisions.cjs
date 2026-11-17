/* Known values for the break-it test (tools/breakit.cjs), galaxy-collisions. Hook: window.__gc (S, SYS, ...).
   The two centers keep zero total momentum and stay about the center of mass (equal and opposite pulls); the distance readout is
   the distance between the centers; the equal disk encounter (q = 25 kpc) comes closest at 25.16 kpc at 869.5 Myr, and the Milky Way
   and Andromeda (17.0 km/s sideways) at 17.3 kpc after 3.85 Gyr. */
const pre = `const E = window.__gc; if (!E || !E.SYS) return true; const S = E.S, SYS = E.SYS(), g = SYS.g;
  const rd = () => { const o = {}; for (const d of document.querySelectorAll("#out > div")) o[d.querySelector("dt").textContent] = d.querySelector("dd").textContent; return o; };
  const SUP = { "⁰": 0, "¹": 1, "²": 2, "³": 3, "⁴": 4, "⁵": 5, "⁶": 6, "⁷": 7, "⁸": 8, "⁹": 9 };
  const num = (t) => { t = String(t).replace(/\\u2212/g, "-").replace(/,/g, ""); const m = t.match(/(-?[\\d.]+)(?: × 10([⁻⁰¹²³⁴⁵⁶⁷⁸⁹]+))?/); if (!m) return NaN; let v = parseFloat(m[1]);
    if (m[2]) { const neg = m[2][0] === "⁻"; let e = 0; for (const c of m[2]) if (c in SUP) e = e * 10 + SUP[c]; v *= Math.pow(10, neg ? -e : e); } return v; };
  const near = (got, want, tol) => Math.abs(got - want) <= tol * Math.max(Math.abs(want), 1e-300);
  const o = rd();
`;
module.exports = {
  checks: [
    { name: "momentum: Σ M v = 0 and the center of mass stays at the origin", fn: `(() => { ${pre}
      const M = g[0].M + g[1].M; for (let j = 0; j < 3; j++) { const p = g[0].M * g[0].v[j] + g[1].M * g[1].v[j], x = g[0].M * g[0].p[j] + g[1].M * g[1].p[j];
        if (Math.abs(p) > 1e-9 * M) return 'total momentum ' + p; if (Math.abs(x) > 1e-6 * M) return 'center of mass at ' + x / M + ' kpc'; }
      return true; })()` },
    { name: "distance readout equals the distance between the centers", fn: `(() => { ${pre}
      if (S.view !== 'col') return true; const d = Math.hypot(g[1].p[0] - g[0].p[0], g[1].p[1] - g[0].p[1], g[1].p[2] - g[0].p[2]), r = o['Distance between centers'];
      if (r !== undefined && Math.abs(num(r) - d) > Math.max(0.06, 5e-3 * d)) return 'distance shows ' + r + ', centers are ' + d + ' kpc apart';
      return true; })()` },
    { name: "closest approach: 25.16 kpc at 869.5 Myr (equal disks, q = 25); 17.3 kpc at 3.85 Gyr (Andromeda)", fn: `(() => { ${pre}
      const C = E.CLOSE(); if (!C || SYS.t < C[0] + 50) return true;
      if (S.mode === 'tt' && S.m2 === 1 && S.q === 25 && (Math.abs(C[1] - 25.16) > 0.02 || Math.abs(C[0] - 869.5) > 0.6)) return 'closest ' + C[1] + ' kpc at ' + C[0];
      if (S.mode === 'lg' && S.vt === 17 && S.vr === 109.3 && (Math.abs(C[1] - 17.3) > 0.2 || Math.abs(C[0] - 3853) > 3)) return 'Andromeda closest ' + C[1] + ' kpc at ' + C[0];
      return true; })()` },
  ],
};
