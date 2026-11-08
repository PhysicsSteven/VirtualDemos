/* harvest steps for bose-einstein: every slider end, select option and checkbox (explore.cjs), then each setup in each scene and
   perspective, with Density and Phase colors and Blind on and off, and a short cooling run so the "cooling", "warming" and "held" words show */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#cool', '#warm', '#reset'] });
  const n = await page.evaluate(() => document.querySelectorAll('#presets button').length).catch(() => 0);
  for (const dim of ['3d', 'flat']) for (const scene of ['box', 'vel', 'frac']) for (let i = 0; i < n; i++) {
    await page.evaluate(([i, scene, dim]) => { document.querySelectorAll('#presets button')[i].click(); const d = document.querySelector(`#dimSeg [data-dim="${dim}"]`); if (d) d.click(); const s = document.querySelector(`#sceneSeg [data-scene="${scene}"]`); if (s) s.click(); }, [i, scene, dim]).catch(() => {});
    await page.waitForTimeout(500); await grab(page);
    for (const sel of ['#colorSeg [data-color="phase"]', '#labBlind', '#labBlind', '#colorSeg [data-color="density"]']) { await page.evaluate((q) => { const e = document.querySelector(q); if (e) e.click(); }, sel).catch(() => {}); await page.waitForTimeout(150); await grab(page); }
  }
  await page.evaluate(() => { document.querySelectorAll('#presets button')[0].click(); document.getElementById('play').click(); }).catch(() => {});
  await page.waitForTimeout(2500); await grab(page);
  await page.evaluate(() => { document.getElementById('play').click(); document.getElementById('warm').click(); document.getElementById('play').click(); }).catch(() => {});
  await page.waitForTimeout(1200); await grab(page);
};
