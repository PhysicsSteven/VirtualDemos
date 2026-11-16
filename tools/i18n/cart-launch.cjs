/* harvest steps: every select option, checkbox and slider end; then the page with three.js blocked. The screen reader description
   (VD.describe) is refreshed before every grab, because it only refreshes once a second by itself; a launch is let run to the landing. */
module.exports = async (page, grab) => {
  const g2 = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab(pg); };
  await require('./explore.cjs')(page, g2);
  for (const p of ['push', 'brake', 'incline', 'steady']) {
    await page.evaluate((p) => { const b = document.querySelector('#presets [data-p="' + p + '"]'); if (b) b.click(); document.getElementById('go').click(); }, p).catch(() => {});
    await page.waitForTimeout(500); await g2(page); await page.evaluate(() => document.getElementById('pause').click()).catch(() => {}); await g2(page);
    await page.waitForTimeout(2500); await g2(page);
  }
  await page.evaluate(() => { const b = document.getElementById('labBlind'); if (b) b.click(); document.getElementById('go').click(); }).catch(() => {});
  await page.waitForTimeout(600); await g2(page);
  await require('./nothree.cjs')(page, g2);
};
