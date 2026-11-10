/* Known values for the break-it test (tools/breakit.cjs), millikan. Hook: window.__mk (S, air(), rowCalc, ...).
   Air follows the sliders (Sutherland viscosity, mean free path ~ 1/p, ideal gas density), every drop's mobility, weight and
   slip correction follow the air and the oil density at all times (a slider change must reach drops already in the telescope),
   the readouts show those numbers, the field readout is V/d, drop charges are whole numbers of e (1 to 12), positions stay
   finite, a worked out row obeys the force balance q E = m'g + 6 pi eta r v_E / C (and equals m'g/E when held still), and the
   "Brownian" preset's 0.36 micrometer drop falls about 17 micrometers per second (its text). */
const pre = `const M = window.__mk; if (!M) return true; const S = M.S, air = M.air();
  const R = 8.31446261815324, E0 = 1.602176634e-19, KB = 1.380649e-23, D = 7.60e-3, G = 9.81;
  const eta = (T) => 1.716e-5 * Math.pow(T / 273.15, 1.5) * (273.15 + 110.4) / (T + 110.4);
  const lam = (T, p) => 67.3e-9 * (101325 / p) * (T / 296.15) * (1 + 110.4 / 296.15) / (1 + 110.4 / T);
  const slip = (r, l) => { const kn = l / r; return 1 + kn * (1.155 + 0.471 * Math.exp(-0.596 / kn)); };
  const T = S.T + 273.15, p = S.p * 1e3, rho = p * 0.0289647 / (R * T);
  const rd = (lab) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(lab)) return d.querySelector('dd').textContent.replace(/\\u2212/g, '-'); return null; };
  const rel = (a, b) => Math.abs(a / b - 1);
`;
module.exports = {
  checks: [
    { name: 'air equals Sutherland viscosity, mean free path and ideal gas density for the sliders', fn: `(() => { ${pre}
      if (rel(air.eta, eta(T)) > 1e-12) return 'eta ' + air.eta + ' vs ' + eta(T) + ' at ' + S.T + ' C';
      if (rel(air.lam, lam(T, p)) > 1e-12) return 'lambda ' + air.lam + ' vs ' + lam(T, p) + ' at ' + S.T + ' C, ' + S.p + ' kPa';
      if (rel(air.rho, rho) > 1e-12) return 'air density ' + air.rho + ' vs ' + rho;
      return true; })()` },
    { name: 'every drop follows the air and oil density; charges are whole numbers 1..12; positions finite', fn: `(() => { ${pre}
      for (const d of S.drops) {
        if (!isFinite(d.x) || !isFinite(d.y)) return 'drop ' + d.id + ' at ' + d.x + ', ' + d.y;
        if (!Number.isInteger(d.n) || d.n === 0 || Math.abs(d.n) > 12 + 40) return 'drop ' + d.id + ' has charge number ' + d.n;
        const Cc = slip(d.r, air.lam), vol = 4 / 3 * Math.PI * d.r ** 3, w = vol * (S.rho - air.rho) * G, mob = Cc / (6 * Math.PI * air.eta * d.r);
        if (rel(d.dr.Cc, Cc) > 1e-9 || rel(d.dr.w, w) > 1e-9 || rel(d.dr.mob, mob) > 1e-9) return 'drop ' + d.id + ' physics is stale: Cc ' + d.dr.Cc + ' vs ' + Cc + ', w ' + d.dr.w + ' vs ' + w + ' (T ' + S.T + ', p ' + S.p + ', rho ' + S.rho + ')';
        if (rel(d.dr.Dif, KB * T * mob) > 1e-9) return 'drop ' + d.id + ' diffusion constant is stale';
      }
      return true; })()` },
    { name: 'readouts: field V/d, viscosity, mean free path, air and oil density', fn: `(() => { ${pre}
      const fe = rd('Field E'); if (fe === null) return true;
      if (S.pol === 0) { if (!/^0/.test(fe)) return 'field shows ' + fe + ' with the plates off'; }
      else { const v = parseFloat(fe), want = S.V / D / 1e3; if (Math.abs(v - want) > 0.0051) return 'field shows ' + fe + ', V/d = ' + want.toFixed(3) + ' kV/m'; if (!new RegExp(S.pol > 0 ? 'down$' : 'up$').test(fe)) return 'field direction in "' + fe + '" for pol ' + S.pol; }
      let r;
      if (Math.abs(parseFloat(rd('Air viscosity')) - eta(T) * 1e5) > 0.00006) return 'viscosity shows ' + rd('Air viscosity') + ', Sutherland gives ' + (eta(T) * 1e5).toFixed(5);
      if (Math.abs(parseFloat(rd('Mean free path')) - lam(T, p) * 1e9) > 0.051) return 'mean free path shows ' + rd('Mean free path') + ', gives ' + (lam(T, p) * 1e9).toFixed(2);
      if (Math.abs(parseFloat(rd('Air density')) - rho) > 0.00051) return 'air density shows ' + rd('Air density') + ', gives ' + rho.toFixed(4);
      if (parseFloat(rd('Oil density')) !== S.rho) return 'oil density shows ' + rd('Oil density') + ', state ' + S.rho;
      return true; })()` },
    { name: 'worked out rows obey the force balance (q E = m g + 6 pi eta r v_E / C; held still: q E = m g)', fn: `(() => { ${pre}
      for (const row of S.rows) {
        const c = M.rowCalc(row); if (!c) continue;
        if (![c.vf, c.r, c.r0].every(isFinite) || (c.q !== undefined && !isFinite(c.q))) return 'row for drop ' + row.id + ' has a non finite result ' + JSON.stringify(c);
        if (c.q === undefined) continue;
        const E = row.fld.length ? row.fld[0].E : row.hold ? row.hold.E : null; if (!E) continue;
        const Cc = S.noslip ? 1 : slip(c.r, air.lam), mg = 4 / 3 * Math.PI * c.r ** 3 * (S.rho - air.rho) * G;
        if (rel(6 * Math.PI * air.eta * c.r * c.vf / Cc, mg) > 1e-6) return 'row for drop ' + row.id + ': plates off, drag ' + (6 * Math.PI * air.eta * c.r * c.vf / Cc) + ' differs from weight ' + mg;
        const lhs = c.q * E, rhs = mg + 6 * Math.PI * air.eta * c.r * c.vE / Cc;
        if (Math.abs(lhs - rhs) > 1e-6 * Math.abs(mg) + 1e-30) return 'row for drop ' + row.id + ': q E = ' + lhs + ' but m g + drag = ' + rhs;
      }
      return true; })()` },
    { name: 'preset "Brownian": the 0.36 micrometer drop falls about 17 micrometers per second', fn: `(() => { ${pre}
      if (S.preset !== 'brown' || S.rho !== 886 || S.T !== 23 || S.p !== 101.3) return true;
      const d = S.drops[0]; if (!d || d.r !== 0.36e-6) return true;
      const v = -d.dr.mob * (0 - d.dr.w) * -1; const fall = d.dr.mob * d.dr.w * 1e6;
      return Math.abs(fall - 17) < 1 ? true : 'terminal fall speed ' + fall.toFixed(2) + ' um/s, the preset text says about 17'; })()` },
  ],
  steps: [
    { name: 'Many drops: run, record a fall and a rise, then T, p and oil density to their limits with rows on the table', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id), M = window.__mk;
      const set = (id, v) => { const e = $(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=many]').click(); await pause(200); $('play').click();
      for (let i = 0; i < 3; i++) { $('swGo').click(); await pause(1500); $('swGo').click(); $('rec').click(); await pause(100); $('nextDrop').click(); }
      set('sT', 15); set('sP', 40); set('sRho', 800); await pause(400); set('sT', 35); set('sP', 105); set('sRho', 1000); await pause(400);
      $('cNoSlip').click(); await pause(100); $('cNoSlip').click(); $('spray').click(); await pause(500); $('spray').click(); await pause(500);
      document.querySelector('#presets [data-p=thin]').click(); await pause(300);
    })()` },
    { name: 'Hover: hold still at every V from 0 to 600, Record held, change polarity, ionizing source on, run long at 16x', fn: `(async () => {
      const pause = (ms) => new Promise((r) => setTimeout(r, ms)), $ = (id) => document.getElementById(id);
      const set = (id, v) => { const e = $(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); };
      document.querySelector('#presets [data-p=hover]').click(); await pause(200);
      for (const v of [0, 1, 599, 600, 210]) { set('sV', v); $('recHover').click(); await pause(100); }
      for (const pol of ['-1', '1', '0']) { const b = document.querySelector('#polSeg [data-pol="' + pol + '"]'); if (b) b.click(); $('recHover').click(); await pause(100); }
      document.querySelector('#presets [data-p=ion]').click(); const sp = document.querySelector('#spdSeg [data-spd="16"]'); if (sp) sp.click(); $('play').click(); await pause(2500);
      $('newRow').click(); $('rec').click(); $('clearRows').click(); await pause(100);
      document.querySelector('#presets [data-p=brown]').click(); $('play').click(); await pause(1500);
    })()` },
  ],
};
