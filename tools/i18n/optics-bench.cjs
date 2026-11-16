/* harvest steps: every select option, checkbox and slider end; then every item of every setup selected in turn, so the item
   editor's labels (Width, Ray count, Angle (pivots on the glass), White light, …) are seen; then the converging lens with the
   object inside 2f, so the Image readout reads "Real, inverted, enlarged" */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  const presets = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const p of presets) {
    const n = await page.evaluate((p) => { window.__ob.preset(p); return window.__ob.items.length; }, p).catch(() => 0);
    for (let i = 0; i < n; i++) { await page.evaluate((i) => { window.__ob.select(window.__ob.items[i]); }, i).catch(() => {}); await page.waitForTimeout(150); await grab(page); }
  }
  await page.evaluate(() => { window.__ob.preset('converging'); const o = window.__ob.items.find((it) => it.kind === 'object'); o.x = -7; window.__ob.schedule(); }).catch(() => {});
  await page.waitForTimeout(300); await grab(page);
};
