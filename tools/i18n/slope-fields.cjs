/* harvest steps: every checkbox, then every setup played to its end with a reading recorded, the mysteries (hidden field, a typed
   model over the readings, New mystery), a box that cannot be read and an empty box, Blind, an equation that depends on t, and a
   run too short for one step. The screen reader description is refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    await ev((k) => document.querySelector(`#presets [data-p="${k}"]`).click(), k);
    await ev(() => { const R = __sf.run(); __sf.S.prog = R ? R.n : 0; __sf.draw(); }); await page.waitForTimeout(150); await grab(page);
    await ev(() => document.querySelector('.vd-rec').click()); await grab(page);
  }
  await ev(() => document.getElementById('newMystery').click()); await grab(page);
  const type = async (s) => { await ev((s) => { const b = document.getElementById('fy'); b.value = s; b.dispatchEvent(new Event('input')); }, s); await page.waitForTimeout(150); await grab(page); };
  await ev(() => document.querySelector('#presets [data-p="mystCool"]').click());
  await type('-0.06(y - 22)'); await type('-0.06(y - '); await type('x + 1'); await type('sin(y))'); await type('sin()'); await type('y $ 2'); await type('');
  await type('sin(t) - y');
  await ev(() => { const e = document.getElementById('tEndIn'); e.value = '-5'; e.dispatchEvent(new Event('change')); }); await grab(page);
  await ev(() => document.querySelector('#presets [data-p="cool"]').click());
  await ev(() => document.getElementById('labBlind').click()); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => document.querySelector('.vd-export').click()); await grab(page);
  await ev(() => document.querySelector('.vd-clear').click()); await grab(page);
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(800); await grab(page); await ev(() => document.getElementById('play').click());
};
