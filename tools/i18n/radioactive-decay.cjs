/* harvest steps: every select option, checkbox and slider end; then each setup played for a while (the chain's
   "²¹⁰Bi decays" bars, Carbon 14's "bin = 1,000 yr"); then every nucleus of the Alpha decay view ("(+0.02 decades)" for ²³⁸U) */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  const ps = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p], [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const p of [...new Set(ps)]) {
    await page.evaluate((p) => { document.querySelector('#viewSeg [data-v="many"]').click(); document.querySelector(`[data-p="${p}"]`).click(); }, p).catch(() => {});
    await page.waitForTimeout(2500); await grab(page);
  }
  for (const v of ['alpha', 'beta']) {
    await page.evaluate((v) => document.querySelector(`#viewSeg [data-v="${v}"]`).click(), v).catch(() => {});
    await page.waitForTimeout(300);
    const n = await page.evaluate(() => document.querySelectorAll('#oneNuc button').length).catch(() => 0);
    for (let i = 0; i < n; i++) { await page.evaluate((i) => document.querySelectorAll('#oneNuc button')[i].click(), i).catch(() => {}); await page.waitForTimeout(1200); await grab(page); }
  }
};
