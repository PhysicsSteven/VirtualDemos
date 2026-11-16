/* harvest steps: every select option, checkbox and slider end; then the page with three.js blocked */
module.exports = async (page, grab0) => {
  /* the screen reader description (VD.describe) refreshes once a second by itself: refresh it before every grab */
  const grab = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab0(pg); };
  await require('./explore.cjs')(page, grab);
  for (const id of ['ampBtn', 'scSide', 'scWires']) { await click(id); await page.waitForTimeout(300); await grab(page); }
  await page.evaluate(() => { const d = document.getElementById('magDet'); if (d) d.open = true; for (const b of document.querySelectorAll('#magMode [data-mm]')) b.click(); }).catch(() => {}); await grab(page);
  await require('./nothree.cjs')(page, grab);
};
