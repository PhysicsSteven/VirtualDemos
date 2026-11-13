/* harvest steps: every select option, checkbox and slider end; the body layers (every tissue, all off, a layer the beam stops in);
   then the page with three.js blocked */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  const run = (f) => page.evaluate(f).catch(() => {}), pause = () => page.waitForTimeout(150);
  await run(() => window.vdDemo.applyPreset('chest')); await pause(); await grab(page);
  for (const m of ['skin', 'adipose', 'muscle', 'cortical', 'lunginf', 'lung', 'brain']) {
    await run(`(() => { const el = document.querySelector('#bodyRows .lay-m'); el.value = '${m}'; el.dispatchEvent(new Event('change', { bubbles: true })); })()`); await pause(); await grab(page);
  }
  await run(() => { for (const el of document.querySelectorAll('#bodyRows .lay-on')) { el.checked = false; el.dispatchEvent(new Event('change', { bubbles: true })); } }); await pause(); await grab(page);
  await run(() => window.vdDemo.applyPreset('p150')); await pause();
  await require('./nothree.cjs')(page, grab);
};
