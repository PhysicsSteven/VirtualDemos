/* harvest steps: every select, checkbox and slider end, then the buttons below, then the setups, Blind and the mystery surface; the
   screen reader description (VD.describe) refreshes once a second by itself, so it is refreshed before every grab. */
const explore = require('./explore.cjs');
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await explore(page, grab, { press: ['#go', '#timed', '#newMystery', '#capture', '#fitTblBtn'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const p of ['push', 'slip', 'angle', 'table', 'rampm', 'atwood', 'tackle', 'close']) {
    await ev((p) => { const b = document.querySelector('#presets [data-p="' + p + '"]'); if (b) b.click(); }, p); await page.waitForTimeout(250); await grab(page);
    await ev(() => document.getElementById('go').click()); await page.waitForTimeout(1200); await grab(page);
    await ev(() => document.getElementById('labBlind').click()); await page.waitForTimeout(200); await grab(page);
    await ev(() => document.getElementById('labBlind').click());
    await ev(() => document.getElementById('go').click());
  }
  await ev(() => { document.querySelector('#presets [data-p="rampm"]').click(); document.getElementById('mystery').click(); }); await page.waitForTimeout(250); await grab(page);
  await ev(() => document.getElementById('timed').click()); await page.waitForTimeout(2500); await grab(page); await ev(() => document.getElementById('capture').click()); await grab(page);
};
