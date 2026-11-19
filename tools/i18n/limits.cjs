/* harvest steps: every chip, switch and fold (explore); Play in and out; each preset on each side and each lower tab; odd points and ε; typing errors; Blind */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  await page.waitForTimeout(400); await grab(page);
  for (const p of ['sinc', 'line', 'hole', 'jump', 'recip', 'osc', 'squeeze', 'xlnx', 'infty', 'vert', 'slant', 'lhop', 'avgvel', 'cosq', 'gamma', 'terminal']) {
    await ev((p) => window.__lim.applyPreset(p), p); await page.waitForTimeout(200); await grab(page);
    for (const s of ['left', 'right', 'both']) { await ev((s) => document.querySelector(`#sideSeg [data-s="${s}"]`).click(), s); await page.waitForTimeout(120); await grab(page); }
    for (const t of ['lh', 'values']) { await ev((t) => document.querySelector(`#tabSeg [data-t="${t}"]`).click(), t); await page.waitForTimeout(120); await grab(page); }
  }
  await ev(() => { window.__lim.applyPreset('line'); window.__lim.setRun(true); }); await page.waitForTimeout(1800); await grab(page);
  await ev(() => { window.__lim.setRun(false); window.__lim.applyPreset('infty'); window.__lim.setRun(true); }); await page.waitForTimeout(1800); await grab(page);
  await ev(() => window.__lim.setRun(false));
  for (const [f, a, e] of [['sin(x)/x', '0', '0.0001'], ['x^2', 'inf', '0.1'], ['e^x', '-inf', '0.1'], ['sin(x)', 'inf', '0.1'], ['x', 'q', '0.1'], ['1/x', 'pi/2', '10'], ['ln(x)', '-1', '0.1'], ['x/x', '0', '0.1'], ['sqrt(x)', '0', '0.1'], ['(x - 1)/(x^2 - 1)', '1', '0.1'], ['sin(x)/x^3', '0', '0.1'], ['e^x/x', 'inf', '0.1'], ['x + sin(x)', 'inf', '0.1']]) {
    await ev(([f, a, e]) => { const i = document.getElementById('fx'); i.value = f; i.dispatchEvent(new Event('input')); const b = document.getElementById('aIn'); b.value = a; b.dispatchEvent(new Event('input')); const c = document.getElementById('epsIn'); c.value = e; c.dispatchEvent(new Event('input')); }, [f, a, e]);
    await page.waitForTimeout(250); await grab(page);
    await ev(() => document.querySelector('#tabSeg [data-t="lh"]').click()); await page.waitForTimeout(120); await grab(page);
    await ev(() => document.querySelector('#tabSeg [data-t="values"]').click());
  }
  for (const s of ['sin(', 'sin x +', 'q x', 'x t', '', '|x|', 'sin(x', ')', 'sin()', 'a,b']) { await ev((s) => { const i = document.getElementById('fx'); i.value = s; i.dispatchEvent(new Event('input')); }, s); await page.waitForTimeout(200); await grab(page); }
  await ev(() => { window.__lim.applyPreset('sinc'); document.getElementById('labBlind').click(); }); await page.waitForTimeout(200); await grab(page);
  await ev(() => document.getElementById('showEps').click()); await page.waitForTimeout(200); await grab(page);
};
