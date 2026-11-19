/* harvest steps: every select option, checkbox and slider end; then each setup played for a while (the chain's
   "²¹⁰Bi decays" bars, Carbon 14's "bin = 1,000 yr"); then every nucleus of the Alpha decay view ("(+0.02 decades)" for ²³⁸U);
   then the Counting view: empty, played, Count 100 times, Blind on and off, every rate and counting time, t₀ moved, Record reading */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  const ps = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p], [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const p of [...new Set(ps)]) {
    await page.evaluate((p) => { document.querySelector('#viewSeg [data-v="many"]').click(); document.querySelector(`[data-p="${p}"]`).click(); }, p).catch(() => {});
    await page.waitForTimeout(2500); await grab(page);
  }
  for (const v of ['alpha', 'beta']) {
    await page.evaluate((v) => document.querySelector(`#viewSeg [data-v="${v}"]`).click(), v).catch(() => {});
    await page.waitForTimeout(300);
    const n = await page.evaluate(() => document.querySelectorAll('#oneNuc button').length).catch(() => 0);
    for (let i = 0; i < n; i++) { await page.evaluate((i) => document.querySelectorAll('#oneNuc button')[i].click(), i).catch(() => {}); await page.waitForTimeout(1200); await grab(page); }
  }
  await page.evaluate(() => document.querySelector('#viewSeg [data-v="count"]').click()).catch(() => {}); await page.waitForTimeout(300); await grab(page);
  await page.evaluate(() => document.querySelector('.vd-readings .vd-rec').click()).catch(() => {}); await page.waitForTimeout(150); await grab(page);
  await page.evaluate(() => document.getElementById('cntPlay').click()).catch(() => {}); await page.waitForTimeout(2500); await grab(page);
  await page.evaluate(() => document.getElementById('cntPlay').click()).catch(() => {}); await page.waitForTimeout(150); await grab(page);
  for (const sel of ['#cnt100', '#cntBlind', '#cntBlind', '.vd-readings .vd-rec']) { await page.evaluate((q) => document.querySelector(q).click(), sel).catch(() => {}); await page.waitForTimeout(200); await grab(page); }
  for (const r of [0, 2, 7, 11]) for (const dt of ['1', '10']) {
    await page.evaluate(([r, dt]) => { const e = document.getElementById('cntR'); e.value = r; e.dispatchEvent(new Event('input', { bubbles: true })); document.querySelector(`#cntDt [data-dt="${dt}"]`).click(); document.getElementById('cnt100').click(); }, [r, dt]).catch(() => {});
    await page.waitForTimeout(250); await grab(page);
  }
  for (const t of [10, 30]) { await page.evaluate((t) => { const e = document.getElementById('cntT0'); e.value = t; e.dispatchEvent(new Event('input', { bubbles: true })); }, t).catch(() => {}); await page.waitForTimeout(200); await grab(page); }
  await page.evaluate(() => document.getElementById('cntNew').click()).catch(() => {}); await page.waitForTimeout(200); await grab(page);
};
