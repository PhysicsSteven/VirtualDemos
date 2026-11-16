/* harvest steps for quantum-coin: every select, checkbox and slider end (explore.cjs); then the Fair coins setup measured, so the
   spread readout shows */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  await page.evaluate(() => { const b = document.querySelector('[data-p="fair"]'); if (b) b.click(); const g = document.getElementById('go10'); if (g) g.click(); }).catch(() => {});
  await page.waitForTimeout(300); await grab(page);
  await page.evaluate(() => { const c = document.getElementById('reset'); if (c) c.click(); }).catch(() => {});
};
