/* harvest steps for spectral-classes: each mode at phone width too, where the picture and the graph use shorter titles */
module.exports = async (page, grab) => {
  await page.setViewportSize({ width: 360, height: 760 }); await page.waitForTimeout(300);
  for (const m of ['color', 'lines', 'payne', 'hydrogen']) {
    await page.evaluate((m) => { const b = document.querySelector(`#modeSeg [data-mode="${m}"]`); if (b) b.click(); }, m);
    await page.waitForTimeout(250); await grab(page);
  }
  await page.setViewportSize({ width: 1280, height: 720 }); await page.waitForTimeout(300);
};
