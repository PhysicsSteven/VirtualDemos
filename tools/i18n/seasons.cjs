/* harvest steps for seasons: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run; then the orbit
   view's corner at the solstices and an equinox, for a northern and a southern observer and on the equator */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#sdStepSid', '#sdStepSol', '#sdReset', '#reset', '#sdEarthNow'] });
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
  await page.setViewportSize({ width: 1280, height: 860 }).catch(() => {});
  await page.evaluate(() => { const m = document.querySelector('[data-m="seasons"]'); if (m) m.click(); const p = document.getElementById('play'); if (p && p.textContent === 'Pause') p.click(); }).catch(() => {});
  for (const preset of ['june', 'dec', 'equinox', 'arctic']) {
    for (const lat of preset === 'arctic' ? [70, -70] : [32.5, -33.9, 0]) {
      await page.evaluate(([preset, lat]) => {
        const b = document.querySelector(`[data-p="${preset}"]`); if (b) b.click();
        const p = document.getElementById('play'); if (p && p.textContent === 'Pause') p.click();
        const l = document.getElementById('lat'); if (l) { l.value = lat; l.dispatchEvent(new Event('input', { bubbles: true })); }
      }, [preset, lat]).catch(() => {});
      await page.waitForTimeout(150); await grab(page);
    }
  }
  /* sidereal and solar days: step a day of each kind, at the ends of the planet's spin and orbit */
  await page.evaluate(() => { const m = document.querySelector('[data-m="sidereal"]'); if (m) m.click(); }).catch(() => {});
  for (const id of ['#sdStepSid', '#sdStepSol', '#sdStepSid', '#sdReset']) { await page.evaluate((id) => { const b = document.querySelector(id); if (b) b.click(); }, id).catch(() => {}); await page.waitForTimeout(700); await grab(page); }
  await page.evaluate(() => { const m = document.querySelector('[data-m="seasons"]'); if (m) m.click(); }).catch(() => {});
};
