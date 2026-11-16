/* harvest steps: every select, checkbox and slider end, then the buttons below; then, in a tall window, Blind on in the
   Depth, Buoyancy and Venturi scenes with no reading and with one, where the readings graph shows its note alone */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#newMyst', '#mystCheck', '#capture', '#dataBtn'] });
  await page.setViewportSize({ width: 1280, height: 1100 }); await page.waitForTimeout(300);
  for (const sc of ['press', 'buoy', 'venturi']) {
    await page.evaluate((sc) => { const b = document.querySelector('[data-s="' + sc + '"]'); if (b) b.click(); const c = document.querySelector('.vd-clear'); if (c) c.click();
      const bl = document.getElementById('blind'); if (bl && !bl.checked) bl.click(); }, sc);
    await page.waitForTimeout(250); await grab(page);
    await page.evaluate(() => { const b = document.getElementById('capture'); if (b) b.click(); });
    await page.waitForTimeout(250); await grab(page);
    await page.evaluate(() => { const bl = document.getElementById('blind'); if (bl && bl.checked) bl.click(); const c = document.querySelector('.vd-clear'); if (c) c.click(); });
    await page.waitForTimeout(150);
  }
  await page.setViewportSize({ width: 1280, height: 860 });
};
