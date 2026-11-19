/* harvest steps: every setup with both comparisons ticked, every family with each kind of event, Blind, a percentile moved,
   Play part way (draws readouts), a t with df too small for a mean or SD. The screen reader description is refreshed before
   every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(150); await grab0(pg); };
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    await ev((k) => { document.querySelector(`#presets [data-p="${k}"]`).click(); for (const id of ['cmp1', 'cmp2']) { const c = document.getElementById(id); if (!c.closest('[hidden]') && !c.checked) c.click(); } }, k); await grab(page);
  }
  const fams = await page.evaluate(() => [...document.querySelectorAll('#famSeg button')].map((b, i) => i)).catch(() => []);
  for (const i of fams) {
    await ev((i) => document.querySelectorAll('#famSeg button')[i].click(), i);
    for (let t = 0; t < 3; t++) { await ev((t) => document.querySelectorAll('#tailSeg button')[t].click(), t); await grab(page); }
  }
  await ev(() => { __de.applyPreset('exam'); document.getElementById('labBlind').click(); }); await grab(page); await ev(() => document.getElementById('labBlind').click());
  await ev(() => { const k = document.getElementById('kIn'); k.value = '0.25'; k.dispatchEvent(new Event('input')); }); await grab(page);
  await ev(() => document.getElementById('play').click()); await page.waitForTimeout(900); await grab(page); await ev(() => document.getElementById('play').click());
  await ev(() => { __de.applyPreset('tGrows'); }); await grab(page);
};
