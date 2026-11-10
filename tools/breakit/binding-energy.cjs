/* Known values for the break-it test (tools/breakit.cjs), binding-energy. Hook: window.__be (S, reaction, build, ...).
   The selected nucleus: the B and B/A readouts equal B = Z m_H + N m_n − Δ (from the mass excess) and B/A; ⁴He has B = 28.296 MeV,
   ⁵⁶Fe has B/A = 8.790 MeV, ¹H has B = 0. The reaction box: Q from the masses equals the change in total B (D-T: 17.589 MeV, and
   4 ¹H → ⁴He: Q = 26.73 MeV counted from the neutral atoms). The Build view never holds a negative count. */
const rd = `const rd = (id) => document.getElementById(id).textContent.replace(/−/g, '-');`;
module.exports = {
  checks: [
    { name: "B and B/A readouts follow the mass excess of the selected nucleus", fn: `(() => { ${rd}
      const b = window.__be; if (!b || !b.S || !b.S.sel || b.S.view === 'build') return true;
      const n = b.S.sel, B = (n.Z * 7288.971064 + n.N * 8071.3181 - n.dm) / 1000;
      if (Math.abs(n.B - B) > 1e-9) return 'B stored ' + n.B + ' but the masses give ' + B;
      if (document.getElementById('rB').offsetParent === null) return true;
      if (Math.abs(parseFloat(rd('rB')) - B) > 6e-4) return 'rB shows ' + rd('rB') + ', B = ' + B;
      if (n.A > 0 && Math.abs(parseFloat(rd('rBA')) - B / n.A) > 6e-5) return 'rBA shows ' + rd('rBA') + ', B/A = ' + B / n.A;
      if (n.Z === 2 && n.A === 4 && Math.abs(B - 28.296) > 2e-3) return '4He B = ' + B;
      if (n.Z === 26 && n.A === 56 && Math.abs(B / 56 - 8.790) > 2e-3) return '56Fe B/A = ' + B / 56;
      if (n.Z === 1 && n.A === 1 && Math.abs(B) > 1e-6) return '1H B = ' + B;
      return true; })()` },
    { name: "reactions: Q from the masses equals the change in B; D-T is 17.589 MeV", fn: `(() => { ${rd}
      const b = window.__be; if (!b) return true;
      const R = b.reaction('dt'); if (Math.abs(R.Q - 17.589) > 2e-3 || Math.abs(R.dB - R.Q) > 1e-6) return 'D-T Q = ' + R.Q + ', dB = ' + R.dB;
      const U = b.reaction('u235'); if (Math.abs(U.Q - U.dB) > 1e-6 || U.Q < 150 || U.Q > 220) return 'U-235 Q = ' + U.Q + ', dB = ' + U.dB;
      const T = b.reaction('ta'); if (Math.abs(T.Q - 7.275) > 2e-3) return 'triple alpha Q = ' + T.Q;
      if (b.S.rx && document.getElementById('rQ').offsetParent !== null && Math.abs(parseFloat(rd('rQ')) - b.reaction(b.S.rx).Q) > 6e-4) return 'rQ shows ' + rd('rQ');
      return true; })()` },
    { name: "liquid drop readout equals the model from the current coefficients", fn: `(() => { ${rd}
      const b = window.__be; if (!b || !b.S.sel || b.S.view === 'build') return true;
      const t = document.getElementById('rBAm'); if (t.offsetParent === null) return true;
      const n = b.S.sel; if (n.A < 2) return true;
      const c = b.S.c, on = b.S.on, N = n.A - n.Z, c3 = Math.cbrt(n.A);
      const f = [n.A, -c3 * c3, -n.Z * (n.Z - 1) / c3, -((N - n.Z) ** 2) / n.A, (n.Z % 2 === 0 && N % 2 === 0 ? 1 : n.Z % 2 && N % 2 ? -1 : 0) / Math.sqrt(n.A)];
      const m = f.reduce((s, v, k) => s + (on[k] ? c[k] * v : 0), 0) / n.A;
      return Math.abs(parseFloat(t.textContent) - m) < 6e-4 ? true : 'liquid drop B/A shows ' + t.textContent + ', model ' + m; })()` },
    { name: "Build counts are never negative or fractional", fn: `(() => { const b = window.__be; if (!b || !b.build) return true;
      const B = b.build; return Number.isInteger(B.Z) && Number.isInteger(B.N) && B.Z >= 0 && B.N >= 0 ? true : 'Z, N = ' + B.Z + ', ' + B.N; })()` }
  ],
  steps: [
    { name: "Build: add and remove nucleons past zero, decay, clear; then pick every reaction", fn: `(async () => {
      const b = window.__be, $ = (id) => document.getElementById(id), v = document.querySelector('[data-v="build"]'); if (v) v.click();
      for (const id of ['bPm', 'bNm', 'bPm', 'bNp', 'bPp', 'bDecay', 'bDecay', 'bDecay', 'bClear', 'bDecay', 'bNm']) { const e = $(id); if (e) e.click(); }
      for (let i = 0; i < 130; i++) $('bPp').click();
      for (let i = 0; i < 200; i++) $('bNp').click();
      $('bDecay').click(); $('bClear').click();
      const c = document.querySelector('[data-v="curve"]'); if (c) c.click();
      for (const r of document.querySelectorAll('[data-r]')) r.click();
      return true; })()` }
  ]
};
