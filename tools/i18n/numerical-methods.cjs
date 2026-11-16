/* harvest steps: every setup, each with the screen reader description (VD.describe) refreshed before every grab, because
   it only refreshes once a second by itself; a run long enough for Euler to fail; each lower plot, and Blind. */
module.exports = async (page, grab) => {
  const g2 = async (pg) => { await pg.evaluate(() => { for (const e of document.querySelectorAll('canvas,svg')) if (e.vdDescribe) e.vdDescribe.refresh(); }).catch(() => {}); await pg.waitForTimeout(120); await grab(pg); };
  for (const p of ['spring', 'springCoarse', 'pendulum', 'pendulumTop', 'orbit', 'comet']) {
    await page.evaluate((p) => { window.__nm.applyPreset(p); window.__nm.plusPeriod(); }, p).catch(() => {});
    await g2(page);
  }
  await page.evaluate(() => { window.__nm.applyPreset('springCoarse'); for (let k = 0; k < 10; k++) window.__nm.plusPeriod(); }).catch(() => {});
  await g2(page);
  for (const id of ['labBlind']) await page.evaluate((id) => { const b = document.getElementById(id); if (b) b.click(); }, id).catch(() => {});
  await g2(page);
};
