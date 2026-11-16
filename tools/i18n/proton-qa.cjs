/* harvest steps: explore, then every setup with its QA run (setups open un-run since 2026-11-16, so the results only show after
   Run QA), once mid run and once finished, at desktop and phone width */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  for (const w of [1280, 400]) {
    await page.setViewportSize({ width: w, height: w > 500 ? 800 : 860 }); await page.waitForTimeout(300);
    const keys = await page.evaluate(() => [...document.querySelectorAll('#presets button')].map((b) => b.dataset.p)).catch(() => []);
    for (const k of keys) {
      await page.evaluate((k) => { window.vdDemo.applyPreset(k); window.vdDemo.runQA(false); }, k).catch(() => {}); await page.waitForTimeout(150); await grab(page);
      await page.waitForTimeout(1700); await grab(page);
      for (const c of ['output', 'range', 'spots', 'size']) { await page.evaluate((c) => { const b = document.querySelector(`#chkSeg [data-chk="${c}"]`); if (b && !b.closest('[hidden]')) b.click(); }, c).catch(() => {}); await page.waitForTimeout(80); await grab(page); }
    }
  }
  await page.setViewportSize({ width: 1280, height: 800 }); await page.waitForTimeout(300); await grab(page);
};
