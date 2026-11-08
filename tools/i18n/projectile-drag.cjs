/* Projectile Range: the shared steps, then the Newton's cannon mode (its rail, the shot list, every outcome and the landing labels) */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab);
  const run = (fn) => page.evaluate(fn).catch(() => {});
  await run(() => document.querySelector('#modeSeg [data-mode="cannon"]').click()); await page.waitForTimeout(500); await grab(page);
  for (const k of ['arc', 'far', 'near', 'circle', 'ellipse', 'escape']) {
    await run(`document.querySelector('[data-nc="${k}"]').click()`); await page.waitForTimeout(150); await grab(page);
  }
  await run(() => { document.getElementById('ncTh').value = '30'; document.getElementById('ncTh').dispatchEvent(new Event('input', { bubbles: true })); });
  await run(() => { document.getElementById('ncH').value = '50'; document.getElementById('ncH').dispatchEvent(new Event('input', { bubbles: true })); }); await grab(page);
  await run(() => document.getElementById('ncSeries').click()); await page.waitForTimeout(300); await grab(page);
  for (const dt of [20, 65, 3000, 5000]) { await run(`window.__newtonCannon.ncAdvance(${dt})`); await page.waitForTimeout(200); await grab(page); }
  await run(() => { const n = window.__newtonCannon; n.NC.sel = n.NC.shots[4].id; n.ncAdvance(0); }); await grab(page);
  await run(() => window.__newtonCannon.ncAdvance(400000)); await page.waitForTimeout(600); await grab(page);
  await run(() => { for (const d of document.querySelectorAll('.ncs details')) d.open = true; }); await grab(page);
  await run(() => document.getElementById('ncReset').click()); await page.waitForTimeout(200); await grab(page);
  await run(() => document.querySelector('#modeSeg [data-mode="flat"]').click()); await page.waitForTimeout(300);
};
