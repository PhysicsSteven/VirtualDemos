/* harvest steps for superconducting-vortices: every slider end and checkbox (explore.cjs), its buttons, then each setup run for a while
   with both graphs, Blind on and off */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#up', '#down', '#fc'] });
  for (const blind of [false, true]) {
    const n = await page.evaluate(() => document.querySelectorAll('#presets button').length).catch(() => 0);
    for (let i = 0; i < n; i++) {
      await page.evaluate(([i, blind]) => { document.querySelectorAll('#presets button')[i].click(); const b = document.getElementById('labBlind'); if (b && b.checked !== blind) b.click(); }, [i, blind]).catch(() => {});
      await page.waitForTimeout(1500); await grab(page);
      await page.evaluate(() => { const b = document.querySelector('#graphSeg button:not([aria-pressed="true"])'); if (b) b.click(); }).catch(() => {});
      await page.waitForTimeout(300); await grab(page);
    }
  }
};
