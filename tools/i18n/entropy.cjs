/* harvest steps: every select, checkbox and slider end, then the buttons below; then the engine that beats Carnot paired with a
   Carnot device, so the Pair readouts show */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#go', '#pull', '#go'] });
  await page.evaluate(() => { const b = document.querySelector('[data-p="slBeat"]'); if (b) b.click(); const c = document.getElementById('pair'); if (c && !c.checked) c.click(); }).catch(() => {});
  await page.waitForTimeout(300); await grab(page);
  await page.evaluate(() => { const c = document.getElementById('pair'); if (c && c.checked) c.click(); }).catch(() => {});
};
