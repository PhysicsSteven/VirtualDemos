/* harvest steps: every select option, checkbox and slider end; the Meter loading setup with each real meter selected, in
   every mode; then the page with three.js blocked */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  for (const m of ['dc', 'time', 'ac']) {
    for (const n of ['A1', 'V_out']) {
      await page.evaluate(([m, n]) => { const C = window.__circ; C.setMode('dc', true); C.applyPreset('loading'); if (m !== 'dc') C.setMode(m, true); const e = C.byName(n); if (e) C.setSel({ kind: 'el', id: e.id }); }, [m, n]).catch(() => {});
      await page.waitForTimeout(400); await grab(page);
    }
  }
  await require('./nothree.cjs')(page, grab);
};
