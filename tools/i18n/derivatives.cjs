/* harvest steps: every select option, checkbox and slider end, then the states the screen reader description (VD.describe) words
   differently: the point on the corner of |x|, Blind, and the point running. The description refreshes once a second by itself, so it
   is refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab);
  const ev = (f) => page.evaluate(f).catch(() => {});
  await ev(() => document.querySelector('#presets [data-p="corner"]').click()); await ev(() => { __fg.S.px = 0; }); await page.waitForTimeout(200); await grab(page);
  await ev(() => document.querySelector('#presets [data-p="recip"]').click()); await ev(() => { __fg.S.px = 0; }); await page.waitForTimeout(200); await grab(page);
  await ev(() => document.querySelector('#presets [data-p="drop"]').click()); await ev(() => { document.getElementById('showD3').click(); document.getElementById('showInt').click(); }); await grab(page);
  await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(500); await grab(page); await ev(() => document.getElementById('play').click());
};
