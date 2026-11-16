/* harvest steps for solids: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run; then the doped
   silicon setup cooled and heated, so the Region readout shows freeze out, extrinsic and intrinsic; and cesium chloride summed
   over one shell, where the readout says "1 shell" */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: [] });
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
  await page.evaluate(() => { const b = document.querySelector('[data-p="dpN"]'); if (b) b.click(); }).catch(() => {});
  for (const t of ['40', '300', '800', '300']) {
    await page.evaluate((t) => { const s = document.getElementById('sT'); if (!s) return; s.value = t; s.dispatchEvent(new Event('input', { bubbles: true })); }, t).catch(() => {});
    await page.waitForTimeout(150); await grab(page);
  }
  await page.evaluate(() => { const b = document.querySelector('[data-p="crCsCl"]'); if (b) b.click(); const k = document.getElementById('sShell'); if (!k) return; k.value = k.min || '1'; k.dispatchEvent(new Event('input', { bubbles: true })); }).catch(() => {});
  await page.waitForTimeout(200); await grab(page);
};
