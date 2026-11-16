/* harvest steps: every select option, checkbox and slider end; the states the screen reader description (VD.describe) words
   differently (each slit closed, the top view, paused); then the page with three.js blocked. The description refreshes once a second
   by itself, so it is refreshed before every grab. */
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab);
  const click = (id) => page.evaluate((id) => { const b = document.getElementById(id); if (b && !b.disabled) b.click(); }, id).catch(() => {});
  for (const id of ['slit1', 'slit2', 'slit1', 'slit2', 'v3d', 'v3d', 'stream', 'fire1', 'stream']) { await click(id); await page.waitForTimeout(250); await grab(page); }
  for (const p of ['laser', 'c60', 'which', 'one', 'electron']) {
    await page.evaluate((p) => { const b = document.querySelector('#presets [data-p="' + p + '"]'); if (b) b.click(); }, p).catch(() => {}); await page.waitForTimeout(300); await grab(page);
  }
  await require('./nothree.cjs')(page, grab);
};
