/* harvest steps: the data table opened first (its caption names the charge and changes with every choice), then every select,
   checkbox and slider end, the buttons below, and each setup */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await page.evaluate(() => document.getElementById('eDataBtn').click()); await page.waitForTimeout(150); await grab(page);
  await explore(page, grab, { press: ['#drawBtn', '#blobBtn', '#addPos', '#capture'] });
  const n = await page.evaluate(() => document.querySelectorAll('#presets [data-p]').length);
  for (let i = 0; i < n; i++) { await page.evaluate((i) => document.querySelectorAll('#presets [data-p]')[i].click(), i); await page.waitForTimeout(150); await grab(page); }
};
