/* harvest steps: the shared exploration, then every setup, and a whole year in Meteor showers and in Tails one month at a time,
   so each month's date line and readouts are seen (the dates are built from the month's name) */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const run = (js) => page.evaluate(js).catch(() => {});
  const keys = await page.evaluate(() => window.__cm ? [Object.keys(window.__cm.TPRE), Object.keys(window.__cm.SPRE)] : [[], []]).catch(() => [[], []]);
  for (const k of keys[0]) { await run(`window.__cm.setMode('tails'); window.__cm.applyPreset('${k}'); window.__cm.redraw();`); await grab(page);
    for (let m = 0; m < 4; m++) { await run(`window.__cm.stepTails(30); window.__cm.redraw();`); await grab(page); } }
  for (const k of keys[1]) { await run(`window.__cm.setMode('shower'); window.__cm.applyPreset('${k}'); window.__cm.redraw();`); await grab(page); }
  for (let m = 0; m < 13; m++) { await run(`window.__cm.stepShower(29); window.__cm.redraw();`); await grab(page); }
  await run(`window.__cm.setMode('tails'); window.__cm.applyPreset('halley'); window.__cm.stepTails(1); window.__cm.redraw();`); for (let m = 0; m < 13; m++) { await run(`window.__cm.stepTails(29); window.__cm.redraw();`); await grab(page); }
};
