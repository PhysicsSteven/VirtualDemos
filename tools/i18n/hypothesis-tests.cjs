/* harvest steps: every setup with each tail, a finished run (H0 true and false), the power curve sweep, Blind, a reading
   recorded and exported. The screen reader description is refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const keys = await page.evaluate(() => Object.keys(window.__ht.SETUPS)).catch(() => []);
  for (const k of keys) {
    await ev((k) => window.__ht.applySetup(k), k); await grab(page);
    for (const t of ['left', 'right', 'two']) { await ev((t) => document.querySelector(`#tailSeg [data-tail="${t}"]`).click(), t); await grab(page); }
    await ev(() => window.__ht.finishNow()); await grab(page);
    await ev(() => document.getElementById('makeNull').click()); await ev(() => window.__ht.finishNow()); await grab(page);
    await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
  }
  await ev(() => document.getElementById('sweep').click()); await grab(page);
  await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => document.getElementById('reset').click()); await grab(page);
  await ev(() => document.querySelector('.vd-export').click()); await grab(page);
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(700); await grab(page); await ev(() => document.getElementById('play').click()); await grab(page);
};
