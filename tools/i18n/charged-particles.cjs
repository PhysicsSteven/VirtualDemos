/* harvest steps: every select option, checkbox and slider end; the body layers (every tissue, all off, a layer the beam stops in);
   every setup with time for the 3D captions; then the page with three.js blocked */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  const run = (f) => page.evaluate(f).catch(() => {}), pause = () => page.waitForTimeout(150);
  await run(() => window.vdDemo.applyPreset('chest')); await pause(); await grab(page);
  for (const m of ['skin', 'adipose', 'muscle', 'cortical', 'lunginf', 'lung', 'brain']) {
    await run(`(() => { const el = document.querySelector('#bodyRows .lay-m'); el.value = '${m}'; el.dispatchEvent(new Event('change', { bubbles: true })); })()`); await pause(); await grab(page);
  }
  await run(() => { for (const el of document.querySelectorAll('#bodyRows .lay-on')) { el.checked = false; el.dispatchEvent(new Event('change', { bubbles: true })); } }); await pause(); await grab(page);
  /* every setup again with time for the 3D picture to draw its captions ("nozzle: carbon 12 ion beam", "… chamber drawn smaller") */
  const ps = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  await run(() => { const b = document.querySelector('#dimSeg [data-dim="3d"]'); if (b) b.click(); }); await page.waitForTimeout(600);   /* the presses above leave it Flat */
  for (const p of ps) { await run(`window.vdDemo.applyPreset('${p}')`); await page.waitForTimeout(900); await grab(page); }
  await run(() => { const b = document.querySelector('#chkWide, input[id*="wide" i]'); if (b) b.click(); }); await page.waitForTimeout(600); await grab(page);
  await run(() => window.vdDemo.applyPreset('p150')); await pause();
  await require('./nothree.cjs')(page, grab);
};
