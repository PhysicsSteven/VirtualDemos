/* harvest steps: the shared exploration, then every setup, the calendar hand at each month (the dates are built from the month's
   name), and the Drake galaxy run long enough to show its readouts */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const run = (js) => page.evaluate(js).catch(() => {});
  const keys = await page.evaluate(() => window.__life ? Object.keys(window.__life.PRE) : []).catch(() => []);
  for (const k of keys) { await run(`(() => { const H = window.__life; H.setMode(H.PRE['${k}'].mode); H.applyPreset('${k}'); H.redraw(); })()`); await grab(page); }
  await run(`(() => { const H = window.__life; H.setMode('clock'); H.applyPreset('calendar'); })()`);
  for (const u of [0.02, 0.1, 0.18, 0.26, 0.34, 0.42, 0.5, 0.58, 0.66, 0.74, 0.82, 0.9, 0.97, 0.995, 0.99999, 1]) { await run(`(() => { const H = window.__life; H.S.u = ${u}; H.redraw(); })()`); await grab(page); }
  for (const map of ['class', 'day']) for (const u of [0.3, 0.7, 0.99, 0.9999, 0.999999]) { await run(`(() => { const H = window.__life; const s = document.getElementById('selMap'); s.value = '${map}'; s.dispatchEvent(new Event('change', { bubbles: true })); H.S.u = ${u}; H.redraw(); })()`); await grab(page); }
  for (const k of ['ex1k', 'ex1m', 'optimist', 'rare']) { await run(`(() => { const H = window.__life; H.setMode('drake'); H.applyPreset('${k}'); H.setRun(true); })()`); await page.waitForTimeout(1500); await run(`window.__life.setRun(false)`); await grab(page); }
};
