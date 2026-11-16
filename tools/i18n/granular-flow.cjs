/* harvest steps: every select, checkbox and slider end, then the buttons below, then every setup running and paused; the screen reader
   description (VD.describe) refreshes once a second by itself, so it is refreshed before every grab. */
const explore = require('./explore.cjs');
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await explore(page, grab, { press: ['#go', '#flip', '#addKind'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const p of ['drum2', 'drumColor', 'drum3', 'brazil', 'shear', 'slide', 'frame', 'frameDense']) {
    await ev((p) => { const b = document.querySelector('#presets [data-p="' + p + '"]'); if (b) b.click(); }, p); await page.waitForTimeout(500); await grab(page);
    await ev(() => document.getElementById('go').click()); await page.waitForTimeout(1500); await grab(page);
    await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
    await ev(() => document.getElementById('go').click()); await grab(page);
  }
};
