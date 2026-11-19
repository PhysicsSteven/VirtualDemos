/* harvest steps for sound-waves: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  /* the race view first, as the last view press used to leave it (Slinky now comes after Race): its lane selects need it */
  await page.evaluate(() => document.querySelector('#viewSeg [data-v=race]').click()).catch(() => {}); await page.waitForTimeout(300);
  await explore(page, grab, { press: ['#clap', '#strike', '#Dm', '#Dp', '#newMystery', '#newUnknown', '#record'] });
  await page.evaluate(() => document.querySelector('#viewSeg [data-v=race]').click()).catch(() => {}); await page.waitForTimeout(300);
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
  /* the race, as the last view used to leave it (the Slinky view now comes after it): each camera, struck and run to the finish */
  for (const cam of ['course', 'near']) {
    await page.evaluate((cam) => { document.querySelector('#viewSeg [data-v=race]').click(); const d = document.querySelector('#dimSeg [data-dim="3d"]'); if (d) d.click(); const c = document.querySelector('#camSeg [data-cam=' + cam + ']'); if (c) c.click(); document.getElementById('strike').click(); }, cam).catch(() => {});
    for (let k = 0; k < 10; k++) { await page.waitForTimeout(500); await grab(page); }
  }
  await page.evaluate(() => { const d = document.querySelector('#dimSeg [data-dim=flat]'); if (d) d.click(); document.getElementById('strike').click(); }).catch(() => {});
  for (let k = 0; k < 10; k++) { await page.waitForTimeout(500); await grab(page); }
  /* a mystery lane, raced in slow motion, and a short course so it finishes */
  await page.evaluate(() => { document.getElementById('newMystery').click(); const p = document.querySelector('#pace [data-k="0.1"]'); if (p) p.click(); const c = document.querySelector('#course [data-l]'); if (c) c.click(); document.getElementById('strike').click(); }).catch(() => {});
  for (let k = 0; k < 12; k++) { await page.waitForTimeout(600); await grab(page); }
  /* the slinkies: a pulse and a periodic wave, caught at many moments so every readout wording is harvested (coil up, down, at rest) */
  for (const kind of ['pulse', 'periodic']) {
    await page.evaluate((kind) => { document.querySelector('#presets [data-p=slinky], [data-p=slinky]').click(); const b = document.querySelector('#slKind [data-k=' + kind + ']'); if (b) b.click(); }, kind).catch(() => {});
    for (let k = 0; k < 12; k++) { await page.waitForTimeout(350); await grab(page); }
  }
};
