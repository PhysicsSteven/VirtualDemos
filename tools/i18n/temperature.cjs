/* harvest steps for temperature: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#restart', '#s300', '#newMystery', '#newBath', '#newRod'] });
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
};
