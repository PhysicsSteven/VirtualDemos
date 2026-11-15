/* harvest steps: every select option, checkbox and slider end; the 3D field and trap pocket views once their grid is computed
   (their legend lines show only then: the presses of the main pass come 40 ms apart, long before the grid is done; student
   view, 2026-11-15); then the page with three.js blocked */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  const click = (id) => page.evaluate((id) => { const b = document.getElementById(id); if (b && !b.disabled) b.click(); }, id).catch(() => {});
  const computed = () => page.waitForFunction(() => { const s = document.getElementById('legSub'); return s && !s.hidden && !/^Computing/.test(s.textContent); }, null, { timeout: 60000 }).catch(() => {});
  for (const v of ['vField', 'vPock']) {
    await click(v); await page.waitForTimeout(300); await computed(); await grab(page);
    if (v === 'vField') for (const f of ['fA', 'fP']) { await click(f); await page.waitForTimeout(300); await grab(page); }
  }
  await require('./nothree.cjs')(page, grab);
};
