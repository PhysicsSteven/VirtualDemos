/* harvest steps: every select option, checkbox and slider end; then Loop, started too low played until the skater has left
   the track, so the Where readout "in the air" and the Normal force "0 (in the air)" are seen */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  await page.evaluate(() => { document.querySelector('[data-p="lowloop"]').click(); }).catch(() => {});
  await page.waitForTimeout(300);
  await page.evaluate(() => { const b = document.getElementById('play'); if (b) b.click(); }).catch(() => {});
  for (let i = 0; i < 6; i++) { await page.waitForTimeout(700); await grab(page); }
};
