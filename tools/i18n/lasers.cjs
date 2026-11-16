/* harvest steps: every select, checkbox and slider end; each view with a few setups, paused and running; the screen reader description
   (VD.describe) refreshes once a second by itself, so it is refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab);
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const v of ['vProc', 'vLaser', 'vLevels', 'vModes']) { await ev((v) => document.getElementById(v).click(), v); await page.waitForTimeout(300); await grab(page); }
  for (const p of ['proc', 'noinv', 'thresh', 'relax', 'three', 'modes']) {
    await ev((p) => { const b = document.querySelector('#presets [data-p="' + p + '"]'); if (b) b.click(); }, p); await page.waitForTimeout(1500); await grab(page);
    await ev(() => { const b = document.getElementById('play'); if (b) b.click(); }); await page.waitForTimeout(300); await grab(page);
    await ev(() => { const b = document.getElementById('play'); if (b) b.click(); });
  }
  await ev(() => { document.getElementById('vLaser').click(); document.getElementById('mRuby').click(); }); await page.waitForTimeout(500); await grab(page);
  await ev(() => { const w = document.getElementById('wp'); w.value = 0; w.dispatchEvent(new Event('input', { bubbles: true })); }); await page.waitForTimeout(300); await grab(page);
};
