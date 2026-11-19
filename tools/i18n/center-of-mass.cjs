/* harvest steps: every select option, checkbox and slider end; then the page with three.js blocked; then the plate bounded by
   curves (2026-11-19): each shape, Blind, Pappus about both axes, a release that tips and one that balances, and each message the
   typed curves and limits can give */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab);
  await require('./nothree.cjs')(page, grab);
  const ev = (fn) => page.evaluate(fn).catch(() => {});
  await ev(() => document.querySelector('#modeSeg [data-m=lamina]').click()); await page.waitForTimeout(200); await grab(page);
  for (const k of ['semi', 'tri', 'between']) {
    await ev(`window.__cm.lamPreset('${k}')`); await page.waitForTimeout(150); await grab(page);
    await ev(() => { document.getElementById('lamPappus').click(); }); await page.waitForTimeout(150); await grab(page);
    await ev(() => { document.querySelector('#axisSeg [data-a=y]').click(); }); await page.waitForTimeout(150); await grab(page);
    await ev(() => { document.getElementById('labBlind').click(); }); await page.waitForTimeout(150); await grab(page);
    await ev(() => { document.getElementById('labBlind').click(); document.querySelector('#axisSeg [data-a=x]').click(); document.getElementById('lamPappus').click(); });
  }
  /* the y axis with a plate on both sides of it, and the x axis with one across it */
  await ev(() => { window.__cm.lamPreset('semi'); document.getElementById('lamPappus').click(); document.querySelector('#axisSeg [data-a=y]').click(); }); await page.waitForTimeout(150); await grab(page);
  await ev(() => { const set = (id, v) => { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); }; set('lamG', '-0.1'); document.querySelector('#axisSeg [data-a=x]').click(); }); await page.waitForTimeout(150); await grab(page);
  await ev(() => { document.getElementById('lamPappus').click(); window.__cm.lamPreset('between'); document.getElementById('go').click(); }); await page.waitForTimeout(400); await grab(page);
  await ev(() => document.getElementById('go').click()); await page.waitForTimeout(150); await grab(page);
  await ev(() => document.getElementById('go').click()); await page.waitForTimeout(2500); await grab(page);
  await ev(() => { window.__cm.lamPinTo(0.5, 0.4); document.getElementById('go').click(); }); await page.waitForTimeout(200); await grab(page);
  for (const [id, v] of [['lamF', 'sin(x'], ['lamF', 'y'], ['lamF', 'x)'], ['lamF', '#'], ['lamF', 'sin'], ['lamF', 'sin(x, 2)'], ['lamF', 'ln(x)'], ['lamF', 'x'],
    ['lamG', 'sqrt(x - 0.5)'], ['lamG', '2x'], ['lamG', 'x'], ['lamG', 'x^2'], ['lamA', 'q'], ['lamA', '0'], ['lamB', ''], ['lamB', '-1'], ['lamB', '100'], ['lamF', '100'], ['lamF', 'x'], ['lamB', '1']]) {
    await ev(`(() => { const e = document.getElementById('${id}'); e.value = ${JSON.stringify(v)}; e.dispatchEvent(new Event('input', { bubbles: true })); })()`); await page.waitForTimeout(120); await grab(page);
  }
  await ev(() => { window.__cm.lamPreset('between'); document.querySelector('#modeSeg [data-m=plate]').click(); });
};
