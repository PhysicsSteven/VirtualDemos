/* harvest steps for superconducting-levitation: every slider end and checkbox (explore.cjs), then each setup with the magnet let go,
   warmed and cooled again, in the flat and 3D views */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#go', '#temp', '#temp', '#go'] });
  const n = await page.evaluate(() => document.querySelectorAll('#presets button').length).catch(() => 0);
  for (let i = 0; i < n; i++) {
    await page.evaluate((i) => document.querySelectorAll('#presets button')[i].click(), i).catch(() => {});
    await page.waitForTimeout(1200); await grab(page);
    for (const sel of ['#go', '#temp']) { await page.evaluate((s) => { const b = document.querySelector(s); if (b) b.click(); }, sel).catch(() => {}); await page.waitForTimeout(1500); await grab(page); }
  }
  await page.evaluate(() => { const b = document.querySelector('#dimSeg button:not([aria-pressed="true"])'); if (b) b.click(); }).catch(() => {});
  await page.waitForTimeout(1500); await grab(page);
};
