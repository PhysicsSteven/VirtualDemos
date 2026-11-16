/* harvest steps: explore, then the assay plated (the Clonogenic assay of V79 setup opens un-plated since 2026-11-16, so no press
   reaches the colonies by itself): the 0 Gy controls, then a dosed group, at desktop and phone width */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  for (const w of [1280, 400]) {
    await page.setViewportSize({ width: w, height: w > 500 ? 800 : 860 }); await page.waitForTimeout(300);
    for (const k of ['assayV79', 'assayMystery']) {
      await page.evaluate((k) => { const r = window.__rb; r.applyPreset(k); r.plateNow(); r.sync(); r.redraw(); }, k).catch(() => {}); await page.waitForTimeout(200); await grab(page);
      await page.evaluate(() => { const r = window.__rb; r.set({ aD: 2, aN: 400 }); r.plateNow(); r.sync(); r.redraw(); }).catch(() => {}); await page.waitForTimeout(200); await grab(page);
      await page.evaluate(() => { const r = window.__rb; r.set({ aD: 4, aN: 1000 }); }).catch(() => {}); await page.waitForTimeout(200); await grab(page);
    }
  }
  await page.setViewportSize({ width: 1280, height: 800 }); await page.waitForTimeout(300); await grab(page);
};
