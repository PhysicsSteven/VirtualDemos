/* harvest steps: every select, checkbox and slider end, then the buttons below; then Static: build up and spark, step by step,
   with both close up views, the knuckle, B touching A, a spark, and Blind */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#rodGlass', '#rub10', '#rodRubber', '#rubTake', '#next', '#tare'] });
  const click = (sel) => page.evaluate((sel) => { const b = document.querySelector(sel); if (b && !b.disabled) b.click(); }, sel).catch(() => {});
  const set = (sel, v) => page.evaluate(([sel, v]) => { const e = document.querySelector(sel); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); }, [sel, v]).catch(() => {});
  await click('#presets [data-p="spark"]'); await page.waitForTimeout(300); await grab(page);
  for (const [k, ms] of [[1, 3500], [2, 1500], [2, 1500], [3, 16000], [4, 1200], [4, 2500], [5, 3000]]) {
    if (ms === 1500 && k === 2) { await page.waitForTimeout(ms); await grab(page); continue; }
    if (ms === 2500 || (k === 4 && ms === 1200 && false)) { await page.waitForTimeout(ms); await grab(page); continue; }
    await click('#next'); await page.waitForTimeout(ms); await grab(page);
  }
  for (const s of ['#spUpC', '#spUpG', '#spUpG', '#spB [data-b="knuckle"]', '#spRub', '#spPump1']) { await click(s); await page.waitForTimeout(700); await grab(page); }
  await set('#spGap', 0); await page.waitForTimeout(300); await grab(page);
  await set('#spGap', 3); await set('#spRH', 30); await click('#spPump10'); await page.waitForTimeout(9000); await grab(page);
  await click('#labBlind'); await page.waitForTimeout(300); await grab(page); await click('#spGround'); await page.waitForTimeout(2500); await grab(page); await click('#labBlind'); await page.waitForTimeout(300); await grab(page);
};
