/* harvest steps: every select and checkbox, then every setup with a reading recorded and 1,000 simulated data sets (the simulated
   p value and histogram labels), New data, every tail of the variance test, small expected counts (18 rolls), Blind and Export. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(150); await grab0(pg); };
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  await ev(() => { if (__cs.S.run) document.getElementById('play').click(); });
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    await ev((k) => document.querySelector(`#presets [data-p="${k}"]`).click(), k); await grab(page);
    await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
    await ev(() => { document.getElementById('sim1000').click(); }); await page.waitForTimeout(200); await grab(page);
    await ev(() => { const b = document.getElementById('newData'); if (!b.hidden) b.click(); }); await grab(page);
  }
  for (const t of ['right', 'left', 'two']) { await ev((t) => { const e = document.getElementById('tail'); e.value = t; e.dispatchEvent(new Event('change')); document.getElementById('sim1000').click(); }, t); await page.waitForTimeout(200); await grab(page); }
  await ev(() => document.querySelector('#presets [data-p="loaded"]').click());
  await ev(() => { const e = document.getElementById('rolls'); e.value = '18'; e.dispatchEvent(new Event('change')); }); await grab(page);
  for (const m of ['gof', 'indep', 'homog', 'var']) { await ev((m) => document.querySelector(`#modeSeg [data-m="${m}"]`).click(), m); await grab(page); }
  await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => document.querySelector('.vd-export').click()); await grab(page);
  await ev(() => document.querySelector('.vd-clear').click()); await grab(page);
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(800); await grab(page); await ev(() => document.getElementById('play').click());
};
