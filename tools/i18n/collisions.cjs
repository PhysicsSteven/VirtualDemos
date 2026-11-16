/* harvest steps: every select option, checkbox and slider end; every scene with Blind off and on, and the running and paused states the
   screen reader descriptions (VD.describe) word differently; then the page with three.js blocked. The descriptions refresh once a
   second by themselves, so they are refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab);
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const m of ['track', 'table', 'explode', 'cradle', 'sandbox', 'ballistic']) {
    await ev((m) => document.querySelector('#modeSeg [data-m="' + m + '"]').click(), m); await page.waitForTimeout(400); await grab(page);
    await ev(() => document.getElementById('play').click()); await page.waitForTimeout(200); await grab(page);
    await ev(() => document.getElementById('play').click()); await page.waitForTimeout(2500); await grab(page);
    await ev(() => document.getElementById('labBlind').click()); await page.waitForTimeout(300); await grab(page);
    await ev(() => document.getElementById('labBlind').click());
  }
  for (const p of ['elastic', 'inelastic', 'heavy', 'explode', 'glance', 'ballistic', 'catcher', 'overtop']) {
    await ev((p) => { const b = document.querySelector('#presets [data-p="' + p + '"]'); if (b) b.click(); }, p); await page.waitForTimeout(2200); await grab(page);
  }
  await ev(() => { const b = document.querySelector('#frameSeg [data-f="cm"]'); if (b) b.click(); }); await grab(page);
  await require('./nothree.cjs')(page, grab);
};
