/* harvest steps: every select option, checkbox and slider end; then the page with three.js blocked; then the bar's
   overtones one by one (the antisymmetric ones, "… antisymmetric about the middle.", show only after Next resonance); then the
   liquid layer's presets, plots and liquids */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  await require('./nothree.cjs')(page, grab);
  for (const p of ['bar', 'barMid']) {
    await page.evaluate((p) => { const b = document.querySelector(`#presets [data-p="${p}"]`) || document.querySelector(`[data-p="${p}"]`); if (b) b.click(); }, p).catch(() => {});
    await page.waitForTimeout(400); await grab(page);
    for (let i = 0; i < 4; i++) { await page.evaluate(() => { const b = document.getElementById('nextRes'); if (b) b.click(); }).catch(() => {}); await page.waitForTimeout(400); await grab(page); }
  }
  /* the liquid layer (Faraday waves): each preset above and below onset, both plots, each liquid, and a square dish */
  const click = (sel) => page.evaluate((sel) => { const b = document.querySelector(sel); if (b) b.click(); }, sel).catch(() => {});
  for (const p of ['farSquares', 'farStripes', 'farHex', 'farQuasi', 'farOnset']) {
    await click(`#presets [data-p="${p}"]`); await page.waitForTimeout(1500); await grab(page);
    await click('#plotSeg [data-pl="tongue"]'); await page.waitForTimeout(1500); await grab(page);
    await click('#plotSeg [data-pl="thr"]'); await page.waitForTimeout(300);
  }
  for (const l of ['water', 'oil10', 'oil100']) { await click(`#liqSeg [data-l="${l}"]`); await page.waitForTimeout(1200); await grab(page); }
  await click('#shapeSeg [data-s="square"]'); await page.waitForTimeout(1200); await grab(page);
  for (const v of ['0', '100']) { await page.evaluate((v) => { const e = document.getElementById('x0'); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); }, v).catch(() => {}); await page.waitForTimeout(800); await grab(page); }
  await click('#kindSeg [data-k="plate"]'); await page.waitForTimeout(400);
};
