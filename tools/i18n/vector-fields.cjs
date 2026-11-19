/* harvest steps: every select option and checkbox, Play; then every setup with its loop, paddle and box shown, in both forms of
   Green's theorem, with Blind on and off, a freehand loop, a typed field and a typing error */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  await page.waitForTimeout(600); await grab(page);
  for (const k of ['gravity', 'swirl', 'mass', 'dipole', 'wire', 'rotate', 'shear', 'spread', 'source']) {
    await page.evaluate((k) => { const D = window.__vf; D.applyPreset(k); document.getElementById('showPaddle').checked = true; document.getElementById('showBox').checked = true; D.readouts(); }, k).catch(() => {});
    await page.waitForTimeout(250); await grab(page);
    for (const sh of ['circle', 'line']) {
      await page.evaluate((sh) => { const s = document.getElementById('shape'); s.value = sh; s.dispatchEvent(new Event('change')); }, sh).catch(() => {});
      for (const f of ['flux', 'circ']) { await page.evaluate((f) => document.querySelector(`#formSeg [data-form="${f}"]`).click(), f).catch(() => {}); await page.waitForTimeout(150); await grab(page); }
    }
    await page.evaluate(() => { const r = document.getElementById('rev'); r.click(); }).catch(() => {}); await page.waitForTimeout(120); await grab(page);
    await page.evaluate(() => { document.getElementById('labBlind').click(); }).catch(() => {}); await page.waitForTimeout(120); await grab(page);
    await page.evaluate(() => { document.getElementById('labBlind').click(); }).catch(() => {});
  }
  await page.evaluate(() => { const s = document.getElementById('shape'); s.value = 'free'; s.dispatchEvent(new Event('change')); }).catch(() => {}); await page.waitForTimeout(200); await grab(page);
  await page.evaluate(() => document.querySelector('.vd-rec').click()).catch(() => {}); await page.waitForTimeout(120); await grab(page);
  for (const v of ['x y', 'x +', 'x + z', 'sin(x))', '']) {
    await page.evaluate((v) => { const e = document.getElementById('pIn'); e.value = v; e.dispatchEvent(new Event('input')); }, v).catch(() => {}); await page.waitForTimeout(150); await grab(page);
  }
};
