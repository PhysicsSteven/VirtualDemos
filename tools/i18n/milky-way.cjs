/* harvest steps: every select option, checkbox and slider end; then the arms as the same stars with the arms view showing, so the
   screen reader lines for that mode (its pitch at the Sun) are recorded too */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  await page.evaluate(() => { window.__mw.applyPreset('wind'); window.__mw.advance(50); window.__mw.redraw(); }).catch(() => {});
  await page.waitForTimeout(300); await grab(page);
};
