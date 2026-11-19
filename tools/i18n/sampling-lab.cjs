/* harvest steps: every view and setup with samples drawn and a reading recorded, each sampling method, both designs with the
   study hours shown, means and sums, Blind, an empty Record, and Play. The screen reader description is refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    await ev((k) => document.querySelector(`#presets [data-p="${k}"]`).click(), k); await grab(page);
    await ev(() => document.getElementById('drawMany').click()); await ev(() => document.getElementById('draw1').click()); await page.waitForTimeout(700); await grab(page);
    await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
  }
  for (const m of ['srs', 'strat', 'cluster', 'sys', 'conv']) { await ev(() => document.querySelector('#presets [data-p="srs"]').click()); await ev((m) => document.querySelector(`#methSeg [data-m="${m}"]`).click(), m); await ev(() => document.getElementById('draw1').click()); await page.waitForTimeout(700); await grab(page); }
  await ev(() => document.querySelector('#presets [data-p="self"]').click()); await ev(() => document.getElementById('showLurk').click()); await grab(page);
  await ev(() => document.getElementById('draw1').click()); await page.waitForTimeout(700); await grab(page);
  await ev(() => document.querySelector('#presets [data-p="cltCoins"]').click()); await ev(() => document.querySelector('#statSeg [data-s="mean"]').click()); await ev(() => document.getElementById('drawMore').click()); await grab(page);
  await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => document.querySelector('.vd-export').click()); await grab(page);
  await ev(() => document.querySelector('.vd-clear').click()); await grab(page);
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(800); await grab(page); await ev(() => document.getElementById('play').click());
};
