/* relativity-em: the shared steps, then the wire view on a phone, where the tags join the caption (every preset, frame and view) */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  await page.setViewportSize({ width: 400, height: 860 }); await page.waitForTimeout(400);
  const click = (sel) => page.evaluate((sel) => { const b = document.querySelector(sel); if (b) b.click(); }, sel);
  for (const dim of ['3d', 'flat']) for (const p of ['lab', 'fast', 'real']) for (const f of ['lab', 'charge']) {
    await click('[data-v="wire"]'); await click('[data-p="' + p + '"]'); await click('[data-dim="' + dim + '"]');
    await click('[data-f="' + f + '"]'); await page.waitForTimeout(150); await grab(page);
    await page.waitForTimeout(2500); await grab(page);
  }
  await page.setViewportSize({ width: 1280, height: 800 }); await page.waitForTimeout(300); await grab(page);
};
