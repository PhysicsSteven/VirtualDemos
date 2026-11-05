/* harvest steps for superfluid-helium: every slider end (explore.cjs), then each setup run for a while, so every experiment's
   canvas labels, graph labels and readouts are seen, with Blind mode on and off */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#restart', '#refill', '#rec', '#recClear', '#he3Restart'] });
  for (const blind of [false, true]) {
    const n = await page.evaluate(() => document.querySelectorAll('#presets button').length).catch(() => 0);
    for (let i = 0; i < n; i++) {
      await page.evaluate(([i, blind]) => { document.querySelectorAll('#presets button')[i].click(); const b = document.getElementById('labBlind'); if (b && b.checked !== blind) b.click(); }, [i, blind]).catch(() => {});
      await page.waitForTimeout(1500); await grab(page);
      await page.evaluate(() => { const r = document.getElementById('rec'); if (r && !r.closest('[hidden]')) r.click(); }).catch(() => {});
      await page.waitForTimeout(300); await grab(page);
    }
  }
};
