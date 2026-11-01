/* harvest steps for shells-and-x-rays: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#zDown', '#zUp', '#baPm', '#baPp', '#baNm', '#baNp', '#baEm', '#baEp', '#newTarget'] });
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
  /* the tube's "target: <element>" label, for every element, flat and in 3D */
  for (const dim of ['flat', '3d']) {
    await page.evaluate((dim) => { document.querySelector('#viewSeg [data-v="xray"]').click(); const d = document.querySelector('#dimSeg [data-dim="' + dim + '"]'); if (d) d.click(); }, dim).catch(() => {});
    const n = await page.evaluate(() => document.querySelectorAll('#ptable [data-z]').length).catch(() => 0);
    for (let i = 0; i < n; i++) {
      await page.evaluate((i) => { const b = document.querySelectorAll('#ptable [data-z]')[i]; if (b && !b.disabled) b.click(); }, i).catch(() => {});
      await page.waitForTimeout(60); await grab(page);
    }
  }
};
