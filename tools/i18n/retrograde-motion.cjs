/* harvest steps: every select option, checkbox and slider end; then Jump to a stationary point, so the Moving readout
   "at a stationary point, … °/day" is seen */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  const opts = await page.evaluate(() => [...document.querySelectorAll('#evKind option')].map((o) => o.value)).catch(() => []);
  for (const v of opts) {
    await page.evaluate((v) => { const s = document.getElementById('evKind'); s.value = v; s.dispatchEvent(new Event('change', { bubbles: true })); document.getElementById('evNext').click(); }, v).catch(() => {});
    await page.waitForTimeout(400); await grab(page);
  }
};
