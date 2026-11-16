/* harvest steps: every select option, checkbox and slider end; then the range shift measured (on a known tissue and on a mystery,
   with and without Show the answer), which no press reaches by itself; then the page with three.js blocked */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  for (const k of ['curves', 'mystery']) {
    await page.evaluate((k) => { window.vdDemo.applyPreset(k); window.vdDemo.act(true); }, k).catch(() => {}); await page.waitForTimeout(200); await grab(page);
    await page.evaluate(() => { const b = document.getElementById('bReveal'); if (b && !b.closest('[hidden]')) b.click(); }).catch(() => {}); await page.waitForTimeout(200); await grab(page);
  }
  /* every mystery, measured and revealed (its name shows in the readout) */
  for (let i = 0; i < 5; i++) {
    await page.evaluate(() => { const b = document.getElementById('bNew'); if (b) b.click(); window.vdDemo.act(true); const r = document.getElementById('bReveal'); if (r) r.click(); }).catch(() => {}); await page.waitForTimeout(200); await grab(page);
  }
  await require('./nothree.cjs')(page, grab);
};
