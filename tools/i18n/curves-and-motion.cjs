/* harvest steps: every select, checkbox and slider; then every setup at a few points along its curve, Blind on and off, with
   every Show box on, the cusp of the cycloid, a typed curve (custom), a typing error, a bad range, and the polar timing switch */
module.exports = async (page, grab) => {
  await require('./explore.cjs')(page, grab, { press: ['#play'] });
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  for (const k of ['cycloid', 'projectile', 'circle', 'speedup', 'lissajous', 'rose', 'cardioid', 'dipole', 'helix', 'orbit', 'escape', 'flyby']) {
    await ev((k) => { const C = window.__cm; C.applyPreset(k); for (const id of ['showV', 'showA', 'showSplit', 'showTN', 'showOsc', 'showTrail', 'showArea', 'showSlice']) document.getElementById(id).checked = true; C.S.u = C.S.u0 + 0.6 * (C.S.u1 - C.S.u0); C.draw(); }, k);
    await page.waitForTimeout(200); await grab(page);
    await ev(() => { document.getElementById('labBlind').click(); }); await page.waitForTimeout(150); await grab(page); await ev(() => { document.getElementById('labBlind').click(); });
  }
  await ev(() => { const C = window.__cm; C.applyPreset('cycloid'); C.S.u = 1; C.draw(); }); await page.waitForTimeout(200); await grab(page);
  await ev(() => { const C = window.__cm; C.applyPreset('rose'); const t = document.getElementById('timing'); t.value = 'kepler'; t.dispatchEvent(new Event('change')); }); await page.waitForTimeout(200); await grab(page);
  await ev(() => { const C = window.__cm; C.applyPreset('orbit'); const e = document.getElementById('sE'); for (const v of ['0', '1', '1.5']) { e.value = v; e.dispatchEvent(new Event('input')); } }); await page.waitForTimeout(200); await grab(page);
  await ev(() => { const C = window.__cm; C.applyPreset('orbit'); const e = document.getElementById('sE'); e.value = '0'; e.dispatchEvent(new Event('input')); }); await page.waitForTimeout(200); await grab(page);
  for (const v of ['t^2', 't^2 +', 'q', 'sin(', '(t))', 'sin(t, 2)', 'sin', '']) { await ev((v) => { const C = window.__cm; C.applyPreset('projectile'); const e = document.getElementById('fy'); e.value = v; e.dispatchEvent(new Event('input')); }, v); await page.waitForTimeout(150); await grab(page); }
  await ev(() => { const e = document.getElementById('u1'); e.value = '-3'; e.dispatchEvent(new Event('input')); }); await page.waitForTimeout(150); await grab(page);
  await ev(() => { const C = window.__cm; C.applyPreset('orbit'); const e = document.getElementById('sQ'); e.value = '1'; e.dispatchEvent(new Event('input')); }); await page.waitForTimeout(150); await grab(page);
  for (const m of ['xy', 'polar', 'xyz', 'conic']) { await ev((m) => document.querySelector(`#modeSeg [data-mode="${m}"]`).click(), m); await page.waitForTimeout(150); await grab(page); }
};
