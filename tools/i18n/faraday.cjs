/* harvest steps: every select, checkbox and slider end, the buttons below, then each setup running for a few seconds (the Lenz
   sentence changes with the sign of the flux change as a coil turns) */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#labStep', '#labAdvance', '#labCapture', '#labTrace', '#dataBtn', '#keep'] });
  const n = await page.evaluate(() => document.querySelectorAll('#presets [data-p]').length);
  for (let i = 0; i < n; i++) {
    await page.evaluate((i) => { document.querySelectorAll('#presets [data-p]')[i].click(); const p = document.getElementById('play'); if (p && /Play/.test(p.textContent)) p.click(); }, i);
    for (let k = 0; k < 8; k++) { await page.waitForTimeout(250); await grab(page); }
  }
};
