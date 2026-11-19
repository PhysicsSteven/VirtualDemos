/* harvest steps: every chip, slider and checkbox (explore), Play; then every setup at its start, at both ends of its range, at the
   best point, with Blind on and off */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  await page.waitForTimeout(600); await grab(page);
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const k of ['ladder', 'cone', 'shadow', 'box', 'fence', 'can', 'guard', 'light', 'range', 'rangeH']) {
    await ev((k) => window.__ro.applyPreset(k), k); await page.waitForTimeout(200); await grab(page);
    for (const f of [0.02, 0.98]) { await ev((f) => { const e = document.getElementById('cs'); e.value = String(Math.round(f * 1000)); e.dispatchEvent(new Event('input')); }, f); await page.waitForTimeout(150); await grab(page); }
    await ev(() => document.getElementById('best').click()); await page.waitForTimeout(150); await grab(page);
    await ev(() => document.getElementById('labBlind').click()); await page.waitForTimeout(150); await grab(page);
    await ev(() => document.getElementById('labBlind').click());
  }
};
