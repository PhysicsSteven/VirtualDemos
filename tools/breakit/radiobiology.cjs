/* Known values for the break-it test (tools/breakit.cjs), radiobiology. Hook: window.__rb (S, analysis, groups).
   The page recomputes the model from S, so the checks rebuild it from the cited numbers (Wenzl and Wilkens 2011 α and β, McNamara
   2015 RBE) and compare it with the readouts: survival S = exp(−αD − βD²) in air and without oxygen for V79 and T1, the OER at
   the dose, BED = n d (1 + d/(α/β)) and EQD2 (60 Gy in 30 × 2 Gy is 60 Gy EQD2 in every tissue), the RBE limits (RBE → RBE_max
   as D → 0), and, in the assay, colony counts that are whole numbers 0 or more. */
const pre = `const R = window.__rb; if (!R) return true;
  const S = R.S, CELLS = { v79: { aer: { a: 0.135, b: 0.032 }, hyp: { a: 0.06, b: 0.003 } }, t1: { aer: { a: 0.10, b: 0.047 }, hyp: { a: 0.02, b: 0.009 } } };
  const rows = {}; for (const r of document.querySelectorAll('#out > div')) { const t = r.querySelector('dt'), d = r.querySelector('dd'); if (t && d) rows[t.textContent.trim()] = d.textContent.replace(/\\u2212/g, '-'); }
  const num = (t) => (t == null ? NaN : parseFloat(t));
  const near = (g, w, tol) => Math.abs(g - w) <= tol * Math.max(Math.abs(w), 1e-300) + 1e-12;
  const surv = (a, b, D) => Math.exp(-a * D - b * D * D);
`;
module.exports = {
  checks: [
    { name: "survival view: S in air and without oxygen equal exp(−αD − βD²) from the cited α, β; OER ≥ 1; α/β in air", fn: `(() => { ${pre}
      if (S.view !== 'surv' || S.cell === 'custom' || !CELLS[S.cell]) return true;
      const c = CELLS[S.cell], D = S.D;
      for (const [lab, p] of [['S in air', c.aer], ['S without oxygen', c.hyp]]) { const w = surv(p.a, p.b, D), t = rows[lab]; if (t == null || /[^0-9.e+\\-]/i.test(t.trim())) continue; const g = num(t); if (!near(g, w, 2e-3) && Math.abs(g - w) > 5e-5) return lab + ' shows ' + t + ', physics ' + w; }
      if (Math.abs(num(rows['α/β in air']) - c.aer.a / c.aer.b) > 0.0051) return 'α/β in air shows ' + rows['α/β in air'];
      if (D > 0.02) { const o = num(rows['OER at this dose']); if (!(o >= 1 - 1e-9)) return 'OER ' + rows['OER at this dose'];
        const E = c.aer.a * D + c.aer.b * D * D, dose = (-c.hyp.a + Math.sqrt(c.hyp.a ** 2 + 4 * c.hyp.b * E)) / (2 * c.hyp.b);
        if (Math.abs(o - dose / D) > 6e-4 * o) return 'OER shows ' + o + ', physics ' + dose / D; }
      return true; })()` },
    { name: "fractionation: BED = n d (1 + d/(α/β)), EQD2 = BED/(1 + 2/(α/β)); 60 Gy in 30 × 2 Gy is 60 Gy EQD2", fn: `(() => { ${pre}
      if (S.view !== 'frac') return true;
      const sch = (rows['Schedule'] || '').match(/^(\\d+) × ([\\d.]+) Gy/); if (!sch) return 'odd schedule text ' + rows['Schedule'];
      const n = +sch[1], d = +sch[2], Dt = num(rows['Total dose']);
      if (n !== S.fn) return 'n shows ' + n + ', S.fn = ' + S.fn;
      if (Math.abs(n * d - Dt) > 0.0006 * n + 0.0051) return 'n × d = ' + n * d + ' but total ' + Dt;
      for (const k in rows) { const m = k.match(/^α\\/β ([\\d.]+) Gy: BED, EQD2$/); if (!m) continue; const ab = +m[1], [b, e] = rows[k].split(',').map(num);
        const wb = n * d * (1 + d / ab), we = wb / (1 + 2 / ab);
        if (Math.abs(b - wb) > 0.06 + 2e-3 * wb || Math.abs(e - we) > 0.06 + 2e-3 * we) return 'α/β ' + ab + ': shows ' + rows[k] + ', physics ' + wb.toFixed(2) + ', ' + we.toFixed(2);
        if (n === 30 && Math.abs(Dt - 60) < 0.06 && Math.abs(e - 60) > 0.06) return 'EQD2 of 60 Gy in 30 fractions is ' + e; }
      return true; })()` },
    { name: "proton RBE: RBE_max, RBE_min from McNamara 2015 and RBE between them (→ RBE_max as D → 0)", fn: `(() => { ${pre}
      if (S.view !== 'rbe') return true;
      const L = S.L, ab = S.ab, D = S.rD, mx = 0.99064 + 0.35605 * L / ab, mn = 1.1012 - 0.0038703 * Math.sqrt(ab) * L;
      const f = (D) => (Math.sqrt(ab * ab + 4 * D * ab * mx + 4 * D * D * mn * mn) - ab) / (2 * D);
      if (!near(num(rows['RBE_max']), mx, 2e-4) || !near(num(rows['RBE_min']), mn, 2e-4)) return 'RBE_max/min show ' + rows['RBE_max'] + ', ' + rows['RBE_min'] + '; physics ' + mx + ', ' + mn;
      if (D > 0 && !near(num(rows['RBE']), f(D), 2e-4)) return 'RBE shows ' + rows['RBE'] + ', physics ' + f(D);
      if (D > 0 && (f(D) > Math.max(mx, mn) + 1e-9 || f(D) < Math.min(mx, mn) - 1e-9)) return 'RBE outside [RBE_min, RBE_max]';
      if (Math.abs(f(1e-9) - mx) > 1e-6) return 'RBE at D → 0 is not RBE_max';
      return true; })()` },
    { name: "assay: colony counts are whole numbers 0 or more", fn: `(() => { ${pre}
      if (S.view !== 'assay' || !R.groups) return true;
      for (const g of R.groups()) for (const c of g.counts || []) if (!(Number.isInteger(c) && c >= 0)) return 'colony count ' + c + ' at ' + g.D + ' Gy';
      return true; })()` },
  ],
  steps: [
    { name: 'every preset, then extreme oxygen and dose via the sliders, plate many times, odd mystery codes', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), R = window.__rb;
      for (const b of document.querySelectorAll('#presets button')) { b.click(); await pause(120); }
      R.applyPreset('survAir');
      for (const [id, vals] of [['sP', ['0', '1', '0.001', '0']], ['sD', ['0', '0.01', '30']], ['sA', ['0', '1']], ['sB', ['0', '0.2']]]) {
        const el = document.getElementById(id); if (!el) continue;
        for (const v of vals) { el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); await pause(80); }
      }
      R.applyPreset('assayMystery'); await pause(150);
      for (let i = 0; i < 6; i++) { const b = document.getElementById('plateBtn'); b && b.click(); await pause(60); }
      for (const v of ['1', '0', '99', '7']) { const el = document.getElementById('sCode'); el.value = v; el.dispatchEvent(new Event('input', { bubbles: true })); await pause(80); }
      R.applyPreset('hypo5'); await pause(150); R.applyPreset('rbeDistal'); await pause(150);
    })()` },
  ],
};
