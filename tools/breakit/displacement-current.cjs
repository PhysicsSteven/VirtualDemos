/* Known values for the break-it test (tools/breakit.cjs), displacement-current. Hook: window.__dc (S, now, inGap, ...).
   Kirchhoff on the charging circuit (I R + q/C = V, C = ε0 π R²/d for the 5 cm plates and 2 mm gap) and E = q/(ε0 A);
   the readouts equal the live state (read back from the Current, Charge, E and RC rows to their 3 digits); Ampère–Maxwell:
   ∮B·dl = 2πrB equals μ0 (Ic + Id) for every loop and both surfaces, and the displacement current in the gap is I times
   min(1, r²/R²) (all of I past the plate edge); a loop around the wire sees Ic = I on the flat disk and Id = I on the bag. */
const pre = `const D = window.__dc; if (!D) return true;
  const S = D.S, n = D.now(), EPS0 = 8.8541878188e-12, MU0 = 1.25663706127e-6, PR = 0.05, GAP = 0.002, CAP = EPS0 * Math.PI * PR * PR / GAP;
  const near = (g, w, t) => Math.abs(g - w) <= t * Math.max(Math.abs(w), 1e-300);
  const SI = { p: -12, n: -9, 'µ': -6, m: -3, '': 0, k: 3, M: 6 };
  const val = (label) => { const dts = [...document.querySelectorAll('#loopOut dt, #circOut dt')].filter((d) => d.textContent.trim().startsWith(label)); if (!dts.length) return NaN;
    const m = dts[0].nextElementSibling.textContent.replace(/\\u2212/g, '-').trim().match(/^(-?[\\d.]+(?:e[+-]?\\d+)?) (p|n|µ|m|k|M)?[A-Za-zΩ·\\/]+$/); return m ? parseFloat(m[1]) * Math.pow(10, SI[m[2] || '']) : NaN; };
`;
module.exports = {
  checks: [
    { name: "circuit: I R + q/C = V, E = q/(ε0 A), τ = RC", fn: `(() => { ${pre}
      if (![n.I, n.q, n.E, n.tau].every(isFinite)) return 'non finite state';
      if (!near(n.I * n.R + n.q / CAP, S.V, 1e-9)) return 'I R + q/C = ' + (n.I * n.R + n.q / CAP) + ', V = ' + S.V;
      if (!near(n.E, n.q / (EPS0 * Math.PI * PR * PR), 1e-9)) return 'E is not q/(ε0 A)';
      if (!near(n.tau, n.R * CAP, 1e-9)) return 'tau is not R C';
      return true; })()` },
    { name: "circuit readouts equal the state (3 digits)", fn: `(() => { ${pre}
      if (S.run) return true;
      for (const [l, w] of [['Current I', n.I], ['Charge q', n.q], ['E between', n.E], ['Time constant', n.tau]]) { const g = val(l); if (!near(g, w, 5.1e-3)) return l + ' shows ' + g + ', state ' + w; }
      return true; })()` },
    { name: "Ampère–Maxwell: 2πrB = μ0 (Ic + Id); Id share in the gap; wire and bag cases", fn: `(() => { ${pre}
      if (S.run || S.blind) return true;
      const r = S.r * 0.01, gap = D.inGap(), Ic = val('Conduction'), Id = val('Displacement'), circ = val('∮B'), B = val('B on the loop');
      if (![Ic, Id, circ, B].every(isFinite)) return 'unreadable readouts ' + [Ic, Id, circ, B];
      if (!near(circ, MU0 * (Ic + Id), 1e-2)) return '∮B·dl shows ' + circ + ' but μ0(Ic+Id) = ' + MU0 * (Ic + Id);
      if (!near(circ, 2 * Math.PI * r * B, 1e-2)) return '∮B·dl is not 2πr B';
      if (gap) { const want = n.I * Math.min(1, r * r / (PR * PR)); if (Ic !== 0 || !near(Id, want, 5.1e-3)) return 'in the gap Ic = ' + Ic + ', Id = ' + Id + ', want Id = ' + want; }
      else if (S.surf === 'flat') { if (Id !== 0 || !near(Ic, n.I, 5.1e-3)) return 'wire, flat disk: Ic = ' + Ic + ', Id = ' + Id + ', I = ' + n.I; }
      else if (Ic !== 0 || !near(Id, n.I, 5.1e-3)) return 'wire, bag: Ic = ' + Ic + ', Id = ' + Id + ', I = ' + n.I;
      return true; })()` },
  ],
  steps: [
    { name: 'run to the end, change R and V mid charge, loop to the radius limits in the gap, bag, then reset time', fn: `(async () => {
      const D = window.__dc, p = (ms) => new Promise((r) => setTimeout(r, ms)), set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); };
      document.querySelector('#presets [data-p=gap]').click(); D.setRun(true); await p(500);
      set('sRes', '0.2'); await p(300); set('sV', document.getElementById('sV').max); await p(300); set('sRes', '5'); await p(300);
      for (const r of ['0.5', '4.9', '5.1', '9']) { set('sR', r); await p(150); }
      document.getElementById('sBag').click(); document.querySelector('#presets [data-p=bag]').click(); await p(400);
      document.getElementById('sFlat').click(); D.setRun(false); await p(200);
    })()` },
  ],
};
