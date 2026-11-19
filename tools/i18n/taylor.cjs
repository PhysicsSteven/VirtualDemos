/* harvest steps: every chip, switch and fold (explore); Play; then Build mode with every step, a typing error, Blind, and each tolerance */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  await page.waitForTimeout(600); await grab(page);
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const k of ['arctan', 'gauss']) {
    await ev((k) => window.__ty.applyPreset(k), k); await page.waitForTimeout(200); await grab(page);
    for (const op of ['neg', 'sq', 'negsq', 'diff', 'int', 'mulx', 'int']) { await ev((op) => document.querySelector(`[data-op="${op}"]`).click(), op); await page.waitForTimeout(150); await grab(page); }
    await ev(() => document.getElementById('undo').click()); await page.waitForTimeout(150); await grab(page);
  }
  await ev(() => window.__ty.applyPreset('pendulum'));
  for (const s of ['sin(', 'sin x +', 'q x', 'x t', '', '|x|', 'sin(x', ')']) { await ev((s) => { const i = document.getElementById('fx'); i.value = s; i.dispatchEvent(new Event('input')); }, s); await page.waitForTimeout(250); await grab(page); }
  await ev(() => document.getElementById('labBlind').click()); await page.waitForTimeout(200); await grab(page);
  await ev(() => document.querySelector('.vd-rec').click()); await page.waitForTimeout(150); await grab(page);
};
