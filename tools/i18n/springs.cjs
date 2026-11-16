/* harvest steps for springs: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run; then Drop a
   block on it, run and dropped, so its readouts show */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#reset', '#sbSettle', '#sbLetGo', '#swBtn', '#sbAdd', '#sbJoin', '#sbCapture', '#dropBtn', '#sweep', '#swReset', '#peakReset', '#capture', '#fitTblBtn', '#newUnknown', '#keep'] });
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
  await page.evaluate(() => { const b = document.querySelector('[data-p="drop"]'); if (b) b.click(); }).catch(() => {});
  await page.waitForTimeout(200);
  await page.evaluate(() => { const p = document.getElementById('play'); if (p && /Play/.test(p.dataset.state || p.textContent)) p.click(); }).catch(() => {});
  await page.waitForTimeout(700);
  await page.evaluate(() => { const d = document.getElementById('dropBtn'); if (d) d.click(); }).catch(() => {});
  await page.waitForTimeout(500); await grab(page);
};
