/* harvest steps: every setup in both views, Play in each mode, every coordinate system, both slice orders, every body with
   every density and axis, Blind on, a typed integrand, bounds that use the wrong name and a typing error */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  const keys = await page.evaluate(() => [...document.querySelectorAll('#presets button')].map((b) => b.dataset.p)).catch(() => []);
  for (const k of keys) {
    for (const v of ['3d', 'flat']) {
      await ev(([k, v]) => { const D = window.__mi; D.applyPreset(k); D.view().set(v); }, [k, v]); await page.waitForTimeout(250); await grab(page);
      await ev(() => document.getElementById('play').click()); await page.waitForTimeout(700); await grab(page); await ev(() => window.__mi.setRun(false));
    }
  }
  await ev(() => window.__mi.applyPreset('ball'));
  for (const y of ['rect', 'cyl', 'sph']) { await ev((y) => document.querySelector(`#sysSeg [data-y="${y}"]`).click(), y); await page.waitForTimeout(250); await grab(page); }
  await ev(() => window.__mi.applyPreset('between'));
  for (const o of ['B', 'A']) { await ev((o) => document.querySelector(`#orderSeg [data-o="${o}"]`).click(), o); await page.waitForTimeout(200); await grab(page); }
  await ev(() => window.__mi.applyPreset('disk'));
  for (const sh of ['rod', 'plate', 'disk', 'sphere', 'cone']) {
    await ev((sh) => { const s = document.getElementById('shape'); s.value = sh; s.dispatchEvent(new Event('change')); }, sh);
    for (const d of ['uniform', 'edge', 'center', 'custom']) {
      await ev((d) => { const s = document.getElementById('dens'); s.value = d; s.dispatchEvent(new Event('change')); }, d);
      const axes = await page.evaluate(() => [...document.querySelectorAll('#axis option')].map((o) => o.value)).catch(() => []);
      for (const a of axes) { await ev((a) => { const s = document.getElementById('axis'); s.value = a; s.dispatchEvent(new Event('change')); }, a); await page.waitForTimeout(150); await grab(page); }
    }
  }
  await ev(() => { window.__mi.applyPreset('plate'); document.getElementById('labBlind').click(); }); await page.waitForTimeout(150); await grab(page);
  await ev(() => document.getElementById('labBlind').click());
  for (const v of ['x y', 'x +', 'x + z', 'sin(x))', '', '1/(x-1)']) { await ev((v) => { const e = document.getElementById('fIn'); e.value = v; e.dispatchEvent(new Event('input')); }, v); await page.waitForTimeout(400); await grab(page); }
  await ev(() => { window.__mi.applyPreset('between'); const e = document.getElementById('b1hi'); e.value = 'y'; e.dispatchEvent(new Event('input')); }); await page.waitForTimeout(400); await grab(page);
  await ev(() => { const e = document.getElementById('c2lo'); e.value = 'z'; e.dispatchEvent(new Event('input')); }); await page.waitForTimeout(400); await grab(page);
  await ev(() => { window.__mi.applyPreset('plate'); const e = document.getElementById('b2hi'); e.value = 'x'; e.dispatchEvent(new Event('input')); }); await page.waitForTimeout(400); await grab(page);
  await ev(() => { window.__mi.applyPreset('polarMap'); const e = document.getElementById('xIn'); e.value = 'u +'; e.dispatchEvent(new Event('input')); }); await page.waitForTimeout(400); await grab(page);
  await ev(() => { window.__mi.applyPreset('ball'); const e = document.getElementById('b3hi'); e.value = '1e9'; e.dispatchEvent(new Event('input')); const f = document.getElementById('fIn'); f.value = 'sin(x y z)'; f.dispatchEvent(new Event('input')); }); await page.waitForTimeout(3000); await grab(page);
};
