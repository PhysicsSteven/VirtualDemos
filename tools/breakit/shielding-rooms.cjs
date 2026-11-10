/* Known values for the break-it test (tools/breakit.cjs), shielding-rooms. Hook: window.vdDemo (S, R, ctRoom, linacRoom, ...).
   Every room must hand back thicknesses that are finite and not negative, and a wall of that thickness must bring the point to
   the design goal P/T. CT (NCRP 147, Archer fits): B = 3.87e-3 needs 1.54 mm of lead at 120 kV and 53 mm of concrete transmit
   0.09 (Martin's example); steel is 8 times the lead and gypsum 3.2 times the concrete; the point is 0.3 m past the wall.
   Linac (NCRP 151): H0 times the tenth value layer transmission of the thickness equals P/T for each material.
   Proton: H e^(-x/52 cm) equals P/T. Maze door: the total is neutrons plus capture gammas behind the door. */
const pre = `const D = window.vdDemo; if (!D || !D.R) return true; const S = D.S, R = D.R, fin = (v) => typeof v === 'number' && isFinite(v) && v >= 0;`;
module.exports = {
  checks: [
    { name: "thicknesses and the transmission are finite and not negative; the point is 0.3 m past the wall", fn: `(() => { ${pre}
      if (R.x) for (const k of Object.keys(R.x)) if (!fin(R.x[k])) return 'thickness of ' + k + ' = ' + R.x[k];
      if (R.door) { for (const k of ['Hn', 'Hg', 'Hn1', 'Hg1', 'H']) if (!fin(R[k])) return k + ' = ' + R[k]; return true; }
      if (!(R.B > 0) || !isFinite(R.B)) return 'B = ' + R.B;
      if (S.view === 'ct' && Math.abs(R.d - (S.a + 0.3)) > 1e-12) return 'CT distance ' + R.d + ' for a = ' + S.a;
      return true; })()` },
    { name: "linac: H0 times the tenth value layer transmission of the thickness equals P/T (concrete, steel, lead)", fn: `(() => { ${pre}
      if (S.view !== 'linac' || R.door || !R.w) return true;
      const goal = S.P / S.T;
      for (const m of ['concrete', 'steel', 'lead']) { const w = R.w[m], x = w.x, t1 = w.tv[0], te = w.tv[1];
        if (x === 0) { if (w.H0 > goal * (1 + 1e-6)) return m + ': no wall but the dose ' + w.H0 + ' exceeds the goal ' + goal; continue; }
        const B = x <= t1 ? Math.pow(10, -x / t1) : Math.pow(10, -1 - (x - t1) / te);
        if (Math.abs(w.H0 * B - goal) > 1e-5 * goal) return m + ' wall ' + x + ' cm gives ' + w.H0 * B + ' mSv, goal ' + goal; }
      return true; })()` },
    { name: "proton: H e^(-x/52 cm) equals P/T behind the concrete", fn: `(() => { ${pre}
      if (S.view !== 'proton') return true; const x = R.x.concrete, goal = S.P / S.T;
      if (x === 0) return R.H <= goal * (1 + 1e-6) ? true : 'no wall but H = ' + R.H + ' > goal ' + goal;
      return Math.abs(R.H * Math.exp(-x / 52) - goal) <= 1e-5 * goal ? true : 'wall ' + x + ' cm gives ' + R.H * Math.exp(-x / 52) + ' mSv, goal ' + goal; })()` },
    { name: "CT: Archer fit round trip, steel = 8 x lead, gypsum = 3.2 x concrete; Martin's worked values", fn: `(() => { ${pre}
      const fit = { 120: { lead: [2.246, 5.73, 0.547], concrete: [0.0383, 0.0142, 0.658] }, 140: { lead: [2.009, 3.99, 0.342], concrete: [0.0336, 0.0122, 0.519] } };
      const archer = (p, x) => Math.pow((1 + p[1] / p[0]) * Math.exp(p[0] * p[2] * x) - p[1] / p[0], -1 / p[2]);
      /* Martin's example: B = 3.87e-3 at 120 kV needs 1.54 mm lead; 53 mm concrete transmits 0.09 */
      const t = D.ctRoom({ nBody: 1, nHead: 0, dlpBody: 1000, dlpHead: 0, contrast: 0, kv: 120, a: 0.7, T: 1, P: 3.87e-3 * 0.36 });
      if (Math.abs(t.B - 3.87e-3) > 1e-9 || Math.abs(t.x.lead - 1.54) > 0.01) return 'worked example: B = ' + t.B + ', lead ' + t.x.lead + ' mm (should be 3.87e-3 and 1.54)';
      if (Math.abs(archer(fit[120].concrete, 53) - 0.09) > 0.005) return 'Archer concrete at 53 mm = ' + archer(fit[120].concrete, 53);
      if (S.view !== 'ct') return true;
      const f = fit[S.kv]; if (!f) return 'kV ' + S.kv;
      if (R.B < 1) { if (Math.abs(archer(f.lead, R.x.lead) - R.B) > 1e-9 * R.B) return 'lead ' + R.x.lead + ' mm transmits ' + archer(f.lead, R.x.lead) + ', B = ' + R.B;
        if (Math.abs(archer(f.concrete, R.x.concrete) - R.B) > 1e-9 * R.B) return 'concrete ' + R.x.concrete + ' mm transmits ' + archer(f.concrete, R.x.concrete) + ', B = ' + R.B; }
      if (Math.abs(R.x.steel - 8 * R.x.lead) > 1e-9 * Math.max(1, R.x.steel) || Math.abs(R.x.gypsum - 3.2 * R.x.concrete) > 1e-9 * Math.max(1, R.x.gypsum)) return 'steel/lead or gypsum/concrete ratio off';
      return true; })()` },
    { name: "maze door: total is neutrons plus capture gammas behind the door; goal is P/T", fn: `(() => { ${pre}
      if (!R.door) return true;
      if (Math.abs(R.H - (R.Hn1 + R.Hg1)) > 1e-12 * Math.max(1, R.H)) return 'H != Hn1 + Hg1';
      if (Math.abs(R.goal - S.P / S.T) > 1e-12) return 'goal ' + R.goal + ', P/T = ' + S.P / S.T;
      return R.ok === (R.H <= R.goal) ? true : 'ok flag disagrees with H <= goal'; })()` },
  ],
  steps: [
    { name: 'every preset, then wall distance, occupancy and goal to both ends in each room', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms));
      const ids = () => [...document.querySelectorAll('input[type=range]')].filter((e) => e.offsetParent !== null);
      for (const b of document.querySelectorAll('#presets button, .chips button')) { if (/export|reset/i.test(b.id + b.textContent)) continue; b.click(); await pause(200);
        for (const e of ids()) for (const v of [e.min, e.max, e.value]) { e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); await pause(30); } }
      document.querySelector('#presets button').click(); await pause(300);
    })()` },
  ],
};
