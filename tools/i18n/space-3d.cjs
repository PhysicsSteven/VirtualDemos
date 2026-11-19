/* harvest steps: every setup, Play for a moment, Blind on and off, each surface type and trace plane, each coordinate system,
   the reflected ray, a parallel line and typing errors in the component boxes */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  await page.waitForTimeout(600); await grab(page);
  const keys = ['vec', 'torque', 'lorentz', 'work', 'lp', 'ray', 'ell', 'tower', 'hyp2', 'mach', 'dish', 'saddle', 'sph', 'cyl', 'charge'];
  for (const k of keys) {
    await page.evaluate((k) => window.__sp.applyPreset(k), k).catch(() => {});
    await page.waitForTimeout(250); await grab(page);
    await page.evaluate(() => document.getElementById('play').click()).catch(() => {}); await page.waitForTimeout(500); await grab(page);
    await page.evaluate(() => { document.getElementById('play').click(); document.getElementById('labBlind').click(); }).catch(() => {}); await page.waitForTimeout(150); await grab(page);
    await page.evaluate(() => document.getElementById('labBlind').click()).catch(() => {});
  }
  for (const t of ['ell', 'hyp1', 'hyp2', 'cone', 'par', 'hpar']) for (const ax of ['z', 'x', 'y']) for (const k of ['0', '0.9', '2.5']) {
    await page.evaluate(([t, ax, k]) => { window.__sp.applyPreset('ell'); const s = document.getElementById('qtype'); s.value = t; s.dispatchEvent(new Event('change')); document.querySelector(`#axSeg [data-ax="${ax}"]`).click(); const q = document.getElementById('qk'); q.value = k; q.dispatchEvent(new Event('input')); }, [t, ax, k]).catch(() => {});
    await page.waitForTimeout(60); await grab(page);
  }
  for (const s of ['rect', 'cyl', 'sph']) { await page.evaluate((s) => { window.__sp.applyPreset('sph'); document.querySelector(`#sysSeg [data-sys="${s}"]`).click(); }, s).catch(() => {}); await page.waitForTimeout(150); await grab(page); }
  const set = (pairs) => page.evaluate((pairs) => { for (const [id, v] of pairs) { const e = document.getElementById(id); e.value = v; e.dispatchEvent(new Event('input')); e.dispatchEvent(new Event('change')); } }, pairs).catch(() => {});
  await page.evaluate(() => { window.__sp.applyPreset('lp'); document.getElementById('showRefl').click(); }).catch(() => {}); await page.waitForTimeout(150); await grab(page);
  await set([['dx', '1'], ['dy', '-1'], ['dz', '0']]); await page.waitForTimeout(150); await grab(page);
  await set([['p0x', '1'], ['p0y', '1'], ['p0z', '1']]); await page.waitForTimeout(150); await grab(page);
  await page.evaluate(() => window.__sp.applyPreset('vec')).catch(() => {});
  await set([['bx', '4'], ['by', '2'], ['bz', '1']]); await page.waitForTimeout(150); await grab(page);
  await set([['bx', '-1'], ['by', '2'], ['bz', '0']]); await page.waitForTimeout(150); await grab(page);
  await set([['bx', '0'], ['by', '0'], ['bz', '0']]); await page.waitForTimeout(150); await grab(page);
  for (const id of ['lookZ', 'lookY', 'lookX']) { await page.evaluate((id) => document.getElementById(id).click(), id).catch(() => {}); await page.waitForTimeout(100); await grab(page); }
};
