/* harvest steps: every select option, checkbox and slider end; then Single slit with the slit narrower than λ, where the
   Quiet lines readout says "none: λ is wider than the slit" */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  await page.evaluate(() => {
    document.querySelector('#presets [data-p="single"]').click();
    const s = document.getElementById('sA'); s.value = s.min; s.dispatchEvent(new Event('input', { bubbles: true })); s.dispatchEvent(new Event('change', { bubbles: true }));
  }).catch(() => {});
  await page.waitForTimeout(400); await grab(page);
};
