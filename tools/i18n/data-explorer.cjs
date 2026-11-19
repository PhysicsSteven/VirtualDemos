/* harvest steps: every setup with a point selected, both frequency tables, Blind, Modified box plot, Play part way, a value
   dragged out to an outlier, typed data (with a bad token, an empty box and each level of measurement), New draw and a reading
   recorded. The screen reader description is refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(150); await grab0(pg); };
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    await ev((k) => { document.querySelector(`#presets [data-p="${k}"]`).click(); __dx.selectAt(0); }, k); await grab(page);
    await ev(() => { for (const b of document.querySelectorAll('#ftSeg button')) if (b.getAttribute('aria-pressed') === 'false') { b.click(); break; } }); await grab(page);
  }
  await ev(() => { document.querySelector('#presets [data-p="pendulum"]').click(); document.getElementById('selMax').click(); const v = document.getElementById('selV'); v.value = '4.00'; v.dispatchEvent(new Event('input')); }); await grab(page);
  await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
  await ev(() => document.getElementById('newDraw').click()); await grab(page);
  await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => document.getElementById('modBox').click()); await grab(page);
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(900); await grab(page); await ev(() => document.getElementById('play').click());
  const type = async (s) => { await ev((s) => { const b = document.getElementById('dataIn'); b.value = s; b.dispatchEvent(new Event('input')); }, s); await page.waitForTimeout(150); await grab(page); };
  await type('3; 4; x'); await type(''); await type('1; 2; 2; 3; 9');
  for (const l of ['interval', 'ordinal', 'nominal']) { await ev((l) => { const s = document.getElementById('levelSel'); s.value = l; s.dispatchEvent(new Event('change')); }, l); await grab(page); }
  await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
  await ev(() => document.querySelector('.vd-export').click()); await grab(page);
};
