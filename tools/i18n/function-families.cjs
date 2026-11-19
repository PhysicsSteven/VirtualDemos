/* harvest steps: every chip, switch and fold (explore); Play in each mode; each parameter's effects at odd values; typing errors; Blind */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  await page.waitForTimeout(400); await grab(page);
  await ev(() => window.__ff.applyPreset('parab'));
  for (const [k, v] of [['a', 0], ['a', -0.5], ['a', 1], ['b', 0], ['b', -2], ['b', 1], ['b', 0.5], ['c', -1], ['c', 0], ['d', 2], ['d', 0]]) { await ev(([k, v]) => { window.__ff.setParam(k, v); window.__ff.refresh(); }, [k, v]); await page.waitForTimeout(120); await grab(page); }
  for (const p of ['shm', 'decay', 'when', 'fail', 'phasor']) { await ev((p) => window.__ff.applyPreset(p), p); await page.waitForTimeout(200); await grab(page); }
  await ev(() => { window.__ff.applyPreset('sqrt'); const lo = document.getElementById('loIn'); lo.value = '-1'; lo.dispatchEvent(new Event('input')); }); await page.waitForTimeout(200); await grab(page);
  await ev(() => { window.__ff.applyPreset('explog'); const f = document.getElementById('fx'); f.value = 'ln(x)'; f.dispatchEvent(new Event('input')); const lo = document.getElementById('loIn'); lo.value = '-1'; lo.dispatchEvent(new Event('input')); }); await page.waitForTimeout(200); await grab(page);
  await ev(() => window.__ff.applyPreset('sine'));
  for (const s of ['sin(', 'sin x +', 'q x', 'x t', '', '|x|', 'sin(x', ')', 'sin()', 'a,b']) { await ev((s) => { const i = document.getElementById('fx'); i.value = s; i.dispatchEvent(new Event('input')); }, s); await page.waitForTimeout(200); await grab(page); }
  await ev(() => document.getElementById('labBlind').click()); await page.waitForTimeout(200); await grab(page);
  for (const m of ['circle', 'transform', 'inverse']) { await ev((m) => document.querySelector(`#modeSeg [data-m="${m}"]`).click(), m); await page.waitForTimeout(200); await grab(page); }
};
