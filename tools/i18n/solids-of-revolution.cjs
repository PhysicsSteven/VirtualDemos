/* harvest steps: every chip, switch and fold (explore); Play; then every setup in Flat and 3D, every method, typing errors,
   limits the wrong way round, a region across the axis, f below g, Blind */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  await page.waitForTimeout(600); await grab(page);
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets [data-p]')].map((b) => b.dataset.p)).catch(() => []);
  for (const dim of ['flat', '3d']) {
    await ev((d) => { const b = document.querySelector(`#dimSeg [data-dim="${d}"]`); if (b) b.click(); }, dim); await page.waitForTimeout(400);
    for (const k of keys) { await ev((k) => window.__sol.applyPreset(k), k); await page.waitForTimeout(300); await grab(page); }
  }
  await ev(() => window.__sol.applyPreset('diskSqrt'));
  for (const m of ['shells', 'cross', 'arc', 'surface', 'disks']) { await ev((m) => document.querySelector(`#methodSeg [data-m="${m}"]`).click(), m); await page.waitForTimeout(250); await grab(page); }
  await ev(() => document.querySelector('#whatSeg [data-w="inertia"]').click()); await page.waitForTimeout(250); await grab(page);
  const set = async (id, v) => { await ev(([id, v]) => { const i = document.getElementById(id); i.value = v; i.dispatchEvent(new Event('input')); }, [id, v]); await page.waitForTimeout(250); await grab(page); };
  for (const s of ['sqrt(', 'x +', 'q x', '', '1/x', 'x^2 - 1']) await set('fx', s);
  await set('gx', 'x^('); await set('gx', '5'); await set('gx', '0');
  await set('aIn', '3'); await set('bIn', '1'); await set('aIn', '0'); await set('bIn', '2'); await set('kIn', 'q'); await set('kIn', '1');
  await ev(() => { const s = document.getElementById('axisSel'); s.value = 'v'; s.dispatchEvent(new Event('change')); document.querySelector('#methodSeg [data-m="shells"]').click(); }); await page.waitForTimeout(250); await grab(page);
  await ev(() => document.querySelector('#methodSeg [data-m="disks"]').click()); await page.waitForTimeout(250); await grab(page);
  await ev(() => document.getElementById('labBlind').click()); await page.waitForTimeout(200); await grab(page);
};
