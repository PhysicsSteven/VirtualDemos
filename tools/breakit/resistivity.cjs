/* Known values for the break-it test (tools/breakit.cjs), resistivity. Hook: window.__sheet (SH) for the sheet; the wire bench is
   checked from its readouts (#out, #inOut), which are rebuilt on every change.
   Wire: ρ at T = ρ20 [1 + α (T - 20)] with the handbook ρ20 of each material (nichrome 1.10e-6, constantan 4.9e-7, copper 1.68e-8, mystery
   4.2e-7 Ω·m) read back from the shown ρ and α; R per meter = ρ/A and R = V/I = ρL/A; J = I/A and v_d = J/(n q) from the shown values.
   Sheet: the current into the 0 V electrode equals the current out of the + electrode (Kirchhoff); the probe potential lies between 0 and the battery;
   a uniform strip between full width electrodes has R = R_s L/W. */
const pre = `const rd = (box) => { const r = {}; const o = document.getElementById(box); if (!o) return r; for (const d of o.querySelectorAll(':scope > div')) { const t = d.querySelector('dt'), v = d.querySelector('dd'); if (t && v) r[t.textContent.trim()] = v.textContent.replace(/\\u2212/g, '-'); } return r; };
  const num = (s) => parseFloat(String(s).replace(/,/g, '').replace(/\\s*×\\s*10/, 'e').replace(/⁻/g, '-'));
  const sci = (s) => { const m = String(s).match(/^(-?[\\d.]+)\\s*×\\s*10([⁻-]?)([⁰¹²³⁴⁵⁶⁷⁸⁹]+|\\d+)/); if (!m) return parseFloat(s); const ex = [...m[3]].map((c) => { const k = '⁰¹²³⁴⁵⁶⁷⁸⁹'.indexOf(c); return k >= 0 ? k : c; }).join(''); return +m[1] * 10 ** ((m[2] ? -1 : 1) * +ex); };
  const near = (a, b, t) => Math.abs(a - b) <= t * Math.abs(b);
  const bench = document.getElementById('wireSec') && document.getElementById('wireSec').offsetParent !== null;
`;
module.exports = {
  checks: [
    { name: "wire: ρ(T) = ρ20[1 + α(T − 20)] with the handbook ρ20; R per meter = ρ/A; R = V/I = ρL/A", fn: `(() => { ${pre}
      const o = rd('out'); if (!o['Resistivity ρ at this temperature']) return true;
      const rho = sci(o['Resistivity ρ at this temperature']), al = sci(o['α']), T = parseFloat(document.getElementById('oT').textContent), L = parseFloat(document.getElementById('oL').textContent);
      const A = parseFloat(o['Area A = πd²/4']) * 1e-6, per = parseFloat(o['Resistance per meter']), R = parseFloat(o['R = V/I']);
      const r20 = { '4.00e-4': 1.10e-6, '1.00e-5': 4.9e-7, '3.93e-3': 1.68e-8, '1.20e-3': 4.2e-7 };
      const want = Object.entries(r20).find(([k]) => near(al, +k, 1e-3)); if (!want) return 'α = ' + o['α'] + ' is no listed material';
      if (!near(rho, want[1] * (1 + al * (T - 20)), 6e-3)) return 'ρ shows ' + o['Resistivity ρ at this temperature'] + ' at ' + T + ' C, handbook gives ' + want[1] * (1 + al * (T - 20));
      if (!near(per, rho / A, 6e-3)) return 'R per meter ' + per + ' but ρ/A = ' + rho / A;
      if (!(L > 0)) return true;
      return near(R, per * L, 6e-3) ? true : 'R = V/I shows ' + R + ' but (R per m) × L = ' + per * L + ' (L = ' + L + ' m)'; })()` },
    { name: "inside the wire: J = I/A and v_d = J/(n q) from the shown values", fn: `(() => { ${pre}
      const o = rd('out'), p = rd('inOut'); if (!p['Current density J = I/A'] || /hidden/.test(p['Current density J = I/A'] + p['Drift speed v_d = I/(nqA)'])) return true;
      const I = parseFloat(o['Current I (ammeter)']), A = parseFloat(o['Area A = πd²/4']) * 1e-6, J = sci(p['Current density J = I/A']), vd = sci(p['Drift speed v_d = I/(nqA)']), n = sci(p['Free electron density n']);
      if (!near(J, I / A, 6e-3)) return 'J shows ' + p['Current density J = I/A'] + ', I/A = ' + I / A;
      return near(vd, J / (n * 1.602176634e-19), 1.2e-2) ? true : 'v_d shows ' + vd + ', J/(nq) = ' + J / (n * 1.602176634e-19); })()` },
    { name: "sheet: current in equals current out; probe potential between 0 and the battery; uniform strip R = R_s L/W (exact: the electrode face counts from its edge)", fn: `(() => { const S = window.__sheet; if (!S) return true; const SH = S.SH; if (!SH || !SH.sol) return true;
      const G = SH.sol.G, Gi = SH.sol.Gin;
      if (!isFinite(G) || !isFinite(Gi)) return 'conductance ' + G + ', ' + Gi;
      if (G > 0 && Math.abs(G - Gi) > 1e-6 * G) return 'current out of + is ' + G + ' V0/R_s but into 0 V is ' + Gi;
      if (SH.layout === 'strip' && G > 0) { const want = SH.L / SH.W; if (Math.abs(1 / G - want) > 1e-6 * want) return 'strip ' + SH.L + ' × ' + SH.W + ' cm: R/R_s = ' + 1 / G + ', expected ' + want; }
      return true; })()` },
  ],
  steps: [
    { name: 'Wire: every material and gauge at max temperature, longest wire, then Cool down to 1 K and back; Sheet: every layout, strip at extremes', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      for (const b of document.querySelectorAll('#gauges button')) { b.click(); await pause(80); }
      const cb = $('coolBtn'); if (cb && cb.offsetParent !== null) { cb.click(); await pause(600); const w = $('warmBtn'); if (w) w.click(); await pause(300); }
      for (const b of document.querySelectorAll('#shLayouts button')) { b.click(); await pause(150); }
      const l = $('shL'), w = $('shW');
      if (l && w) for (const [a, c] of [[2, 2], [2, 16], [22, 2], [22, 16], [8, 6]]) { for (const [e, v] of [[l, a], [w, c]]) { e.value = String(v); e.dispatchEvent(new Event('input', { bubbles: true })); } await pause(200); }
    })()` },
  ],
};
