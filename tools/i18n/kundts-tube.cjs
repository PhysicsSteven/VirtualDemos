/* harvest steps: every select, checkbox and slider end, then the buttons below, then each rod ringing until the dust has gathered, with
   Blind off and on; the screen reader description (VD.describe) refreshes once a second by itself, so it is refreshed before every grab. */
const explore = require('./explore.cjs');
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await explore(page, grab, { press: ['#stroke', '#spread', '#newUnknown', '#record'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const p of ['steel', 'helium', 'quarter', 'brass', 'unknown']) {
    await ev((p) => { const b = document.querySelector('#presets [data-p="' + p + '"]'); if (b) b.click(); }, p); await page.waitForTimeout(250); await grab(page);
    await ev(() => { document.getElementById('spread').click(); document.getElementById('keep').checked || document.getElementById('keep').click(); }); await page.waitForTimeout(6000); await grab(page);
    await ev(() => document.getElementById('record').click()); await ev(() => document.getElementById('record').click()); await grab(page);
    await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
    await ev(() => document.getElementById('keep').click());
  }
};
