/* harvest steps: every setup, both modes, each k and tail, a finished null run, a dragged mean (custom), Blind, a reading. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const keys = await page.evaluate(() => Object.keys(window.__an.SETUPS)).catch(() => []);
  for (const k of keys) {
    await ev((k) => window.__an.applySetup(k), k); await grab(page);
    await ev(() => window.__an.finishNow()); await grab(page);
    await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
  }
  for (const t of ['left', 'right', 'two']) { await ev((t) => document.querySelector(`#tailSeg [data-tail="${t}"]`).click(), t); await grab(page); }
  await ev(() => window.__an.applySetup('timing'));
  for (const m of ['var2', 'anova']) { await ev((m) => document.querySelector(`#modeSeg [data-m="${m}"]`).click(), m); await grab(page); }
  for (const k of ['4', '5', '3']) { await ev((k) => document.querySelector(`#kSeg [data-k="${k}"]`).click(), k); await grab(page); }
  await ev(() => { const c = document.getElementById('can'); c.focus(); c.dispatchEvent(new KeyboardEvent('keydown', { key: 'ArrowUp', bubbles: true })); }); await grab(page);
  await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => document.querySelector('.vd-export').click()); await grab(page);
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(700); await grab(page); await ev(() => document.getElementById('play').click()); await grab(page);
};
