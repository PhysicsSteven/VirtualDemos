/* harvest steps: every select and checkbox, then every setup on each of the three views (Events, Random variable, Long run) with
   trials run and a reading recorded, every event pair and random variable, the long run curves, Blind, New draw, and Export. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  await ev(() => { if (__cl.S.run) document.getElementById('play').click(); });
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    await ev((k) => document.querySelector(`#presets [data-p="${k}"]`).click(), k);
    for (const tab of ['events', 'rv', 'long']) {
      await ev((t) => __cl.showTab(t), tab); await grab(page);
      await ev(() => { __cl.runMany(100); __cl.draw(); }); await page.waitForTimeout(150); await grab(page);
      await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
    }
    await ev(() => __cl.showTab('long'));
    for (const b of await page.evaluate(() => [...document.querySelectorAll('#lrSeg button')].map((_, i) => i)).catch(() => [])) { await ev((i) => document.querySelectorAll('#lrSeg button')[i].click(), b); await grab(page); }
    await ev(() => __cl.showTab('events'));
    const pairs = await page.evaluate(() => [...document.getElementById('evA').options].map((o) => o.value)).catch(() => []);
    for (const a of pairs) { await ev((a) => { const e = document.getElementById('evA'); e.value = a; e.dispatchEvent(new Event('change')); }, a); await grab(page); }
  }
  await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => document.querySelector('.vd-export').click()); await grab(page);
  await ev(() => document.querySelector('.vd-clear').click()); await grab(page);
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(800); await grab(page); await ev(() => document.getElementById('play').click());
};
