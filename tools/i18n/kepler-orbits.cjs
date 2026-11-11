/* harvest steps: every select, checkbox and slider end, then the buttons below; then the Bound and unbound setup through each
   shape with the energy chart, and the Sandbox gravity assist run past its flyby (2026-11-11) */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#fit', '#timerBtn', '#capture', '#dataBtn', '#second'] });
  const click = (sel) => page.evaluate((sel) => { const b = document.querySelector(sel); if (b) b.click(); }, sel).catch(() => {});
  await click('#presets [data-p="bound"]'); await page.waitForTimeout(400); await grab(page);
  for (const s of ['circle', 'ellipse', 'parabola', 'hyperbola']) { await click(`#buShape [data-s="${s}"]`); await page.waitForTimeout(500); await grab(page); }
  await click('#dataBtn'); await page.waitForTimeout(300); await grab(page);
  await click('#presets [data-p="sandbox"]'); await page.waitForTimeout(300);
  await click('#sbkRigs [data-r="assist"]'); await page.waitForTimeout(300); await grab(page);
  await page.evaluate(() => { const K = window.__kepler; if (K && K.SBK && K.SBK.st) { K.SBK.st.bs.length; } }).catch(() => {});
  await click('#play'); await page.waitForTimeout(4500); await grab(page);
  await click('#play'); await click('#presets [data-p="mercury"]'); await page.waitForTimeout(300);
};
