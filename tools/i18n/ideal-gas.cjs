/* harvest steps: every select, checkbox and slider end, then the buttons below; then the Cold gas setup run past 1 ns, so the
   clock's "t = … ns playback …× faster" line is harvested too (it only shows in Slow motion follows T) */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#ride', '#recRun'] });
  await page.evaluate(() => { window.__ig.applyPreset('cold'); window.__ig.setRunning(true); }).catch(() => {});
  await page.waitForTimeout(2500); await grab(page);
};
