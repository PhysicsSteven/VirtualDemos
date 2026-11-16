/* harvest steps for rotation-curves: every select, checkbox and slider end (explore.cjs), its buttons, every setup with each view and
   spectral line, then a longer run. The screen reader description (VD.describe) refreshes once a second by itself, so it is refreshed
   before every grab. */
const explore = require('./explore.cjs');
module.exports = async (page, grab0) => {
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await explore(page, grab, { press: ['#vFace', '#vEdge', '#reset', '#hIso', '#hNfw', '#dNone', '#dMw', '#dN3198', '#lHa', '#lHi'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const p of ['sun', 'vis', 'halo', 'mw', 'dop', 'n3198']) {
    await ev((p) => { const b = document.querySelector('#presets [data-p="' + p + '"]'); if (b) b.click(); }, p); await page.waitForTimeout(400); await grab(page);
    for (const id of ['vEdge', 'lHa', 'lHi', 'vFace']) { await ev((id) => { const b = document.getElementById(id); if (b) b.click(); }, id); await page.waitForTimeout(250); await grab(page); }
    for (const id of ['onB', 'onD', 'onG', 'onH']) { await ev((id) => { const b = document.getElementById(id); if (b) b.click(); }, id); await grab(page); await ev((id) => { const b = document.getElementById(id); if (b) b.click(); }, id); }
  }
  await ev(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }); await page.waitForTimeout(3000); await grab(page);
  await ev(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }); await grab(page);
};
