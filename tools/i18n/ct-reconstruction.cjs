/* harvest steps: every select option, checkbox and slider end; a scan running; then every setup scanned, with each image and graph */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  await page.waitForTimeout(600); await grab(page);
  for (const k of ['head', 'simple', 'wireSimple', 'wireFbp', 'few', 'limited', 'rods', 'rodsCoarse', 'lowDose', 'lowDoseHann']) {
    await page.evaluate((k) => { const D = window.vdDemo; D.S.scans = Math.max(1, D.S.scans); D.applyPreset(k); }, k).catch(() => {});
    await page.waitForTimeout(250); await grab(page);
    for (const g of ['proj', 'profile', 'filter']) { await page.evaluate((g) => { const b = document.querySelector(`#graphSeg [data-g="${g}"]`); if (b) b.click(); }, g).catch(() => {}); await page.waitForTimeout(150); await grab(page); }
    for (const i of ['truth', 'diff', 'recon']) { await page.evaluate((i) => { const b = document.querySelector(`#imgSeg [data-img="${i}"]`); if (b) b.click(); }, i).catch(() => {}); await page.waitForTimeout(150); await grab(page); }
    await page.evaluate(() => { const b = document.querySelector('.vd-rec'); if (b) b.click(); }).catch(() => {}); await page.waitForTimeout(150); await grab(page);
  }
  await page.evaluate(() => { const c = document.getElementById('labBlind'); if (c) c.click(); }).catch(() => {}); await page.waitForTimeout(150); await grab(page);
};
