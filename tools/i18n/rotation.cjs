/* harvest steps for rotation: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run.
   Each scene is also grabbed right after Reset with the data table open, since results and chart captions read differently before a run (2026-11-16). */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  const scenes = await page.$$eval('#sceneSeg button', (bs) => bs.map((b, i) => i)).catch(() => []);
  for (const i of scenes) {
    await page.evaluate((i) => { document.querySelectorAll('#sceneSeg button')[i].click(); const r = document.querySelector('#reset'); if (r) r.click(); const d = document.querySelector('#dataBtn'); if (d && d.getAttribute('aria-expanded') !== 'true') d.click(); }, i).catch(() => {});
    await page.waitForTimeout(400); await grab(page);
  }
  await explore(page, grab, { press: ['#act', '#reset', '#fMatch', '#hSweet', '#pullIn', '#pushOut', '#balB', '#dataBtn'] });
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
};
