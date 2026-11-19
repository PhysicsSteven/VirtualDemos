/* harvest steps: every setup with intervals drawn and a reading recorded, each interval kind and level, both lower graphs, the
   comparison with z with s, Blind, an empty Record, and Play. The screen reader description is refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    await ev((k) => document.querySelector(`#presets [data-p="${k}"]`).click(), k); await grab(page);
    await ev(() => document.getElementById('draw100').click()); await ev(() => document.getElementById('draw1').click()); await page.waitForTimeout(500); await grab(page);
    await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
    for (const t of ['width', 'rate']) { await ev((t) => document.querySelector(`#tabSeg [data-t="${t}"]`).click(), t); await grab(page); }
  }
  for (const k of ['z', 'zs', 't']) { await ev(() => document.querySelector('#presets [data-p="z95"]').click()); await ev((k) => document.querySelector(`#kindSeg [data-k="${k}"]`).click(), k); await ev(() => document.getElementById('draw1').click()); await page.waitForTimeout(500); await grab(page); }
  await ev(() => document.querySelector('#presets [data-p="plus4"]').click()); await ev(() => document.querySelector('#kindSeg [data-k="plus4"]').click()); await ev(() => document.getElementById('draw100').click()); await grab(page);
  await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => document.querySelector('.vd-export').click()); await grab(page);
  await ev(() => document.querySelector('.vd-clear').click()); await grab(page);
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(800); await grab(page); await ev(() => document.getElementById('play').click());
};
