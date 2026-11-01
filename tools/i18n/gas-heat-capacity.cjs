/* harvest steps: every select, checkbox and slider end, the buttons below, then the mystery gas drawn again and again so the
   sentence naming the last one reaches most gases */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#go', '#drop', '#molHeatBtn'] });
  await page.evaluate(() => { const s = document.getElementById('selGas'); s.value = 'mystery'; s.dispatchEvent(new Event('change', { bubbles: true })); });
  for (let i = 0; i < 25; i++) { await page.evaluate(() => document.getElementById('newGas').click()); await page.waitForTimeout(80); await grab(page); }
};
