/* Orbital Resonances: the shared steps, then every setup in turn (the Setups chips are rebuilt on each press, so the shared
   presses miss some), each run for a moment, at full width and on a phone; Clearing the gaps also run far enough for its
   readouts and the end of the run. */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const keys = await page.evaluate(() => Object.keys(window.__res.PRESETS));
  for (const w of [1280, 400]) {
    await page.setViewportSize({ width: w, height: 860 }); await page.waitForTimeout(300);
    for (const k of keys) {
      await page.evaluate((k) => { const r = window.__res; r.applyPreset(k); if (r.S.scene !== 'neptune') r.run(k === 'clear' ? 3000 : 400); else r.run(60); }, k);
      await page.waitForTimeout(250); await grab(page);
    }
  }
  await page.evaluate(() => { const r = window.__res; r.applyPreset('clear'); r.run(100000); });
  await page.waitForTimeout(300); await grab(page);
  await page.evaluate(() => { const r = window.__res; r.applyPreset('r31'); });
};
