/* harvest steps: every select, checkbox and slider end, then the buttons below; then the Cold gas setup run past 1 ns, so the
   clock's "t = … ns playback …× faster" line is harvested too (it only shows in Slow motion follows T) */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#ride', '#recRun'] });
  await page.evaluate(() => { window.__ig.applyPreset('cold'); window.__ig.setRunning(true); }).catch(() => {});
  await page.waitForTimeout(2500); await grab(page);
  /* Brownian motion: a short run (the line not fitted yet), then a long one, so its readouts and graph labels are harvested */
  await page.evaluate(() => { window.__ig.applyPreset('brown'); window.__ig.setRunning(false); window.__ig.fast(1000); }).catch(() => {});
  await page.waitForTimeout(600); await grab(page);
  await page.evaluate(() => { window.__ig.fast(14000); }).catch(() => {});
  await page.waitForTimeout(600); await grab(page);
};
