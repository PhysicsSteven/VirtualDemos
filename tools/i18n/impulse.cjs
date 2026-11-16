/* harvest steps: every select, checkbox and slider end, then the buttons below, then each bumper run to the end with Blind off and on;
   the screen reader description (VD.describe) refreshes once a second by itself, so it is refreshed before every grab. */
const explore = require('./explore.cjs');
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await explore(page, grab, { press: ['#go', '#capture'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const b of ['stiff', 'soft', 'clay']) {
    await ev((b) => document.querySelector('#bumpSeg [data-b="' + b + '"]').click(), b); await grab(page);
    await ev(() => { document.querySelector('#speedSeg [data-s="1"]').click(); document.getElementById('go').click(); }); await page.waitForTimeout(400); await grab(page);
    await ev(() => document.getElementById('go').click()); await grab(page); await ev(() => document.getElementById('go').click()); await page.waitForTimeout(3500); await grab(page);
    await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  }
};
