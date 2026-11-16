/* harvest steps: every select option, checkbox and slider end; then the page with three.js blocked; then the bar's
   overtones one by one (the antisymmetric ones, "… antisymmetric about the middle.", show only after Next resonance) */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  await require('./nothree.cjs')(page, grab);
  for (const p of ['bar', 'barMid']) {
    await page.evaluate((p) => { const b = document.querySelector(`#presets [data-p="${p}"]`) || document.querySelector(`[data-p="${p}"]`); if (b) b.click(); }, p).catch(() => {});
    await page.waitForTimeout(400); await grab(page);
    for (let i = 0; i < 4; i++) { await page.evaluate(() => { const b = document.getElementById('nextRes'); if (b) b.click(); }).catch(() => {}); await page.waitForTimeout(400); await grab(page); }
  }
};
