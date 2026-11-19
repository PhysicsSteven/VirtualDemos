/* harvest steps for states-of-matter: every select, checkbox and slider end (explore.cjs), its buttons, then a longer run */
const explore = require('./explore.cjs');
module.exports = async (page, grab) => {
  await explore(page, grab, { press: ['#restart', '#capture'] });
  /* the Beaker view, as the last view press used to leave it (Phase diagram and Vapor now come after it), so its run is harvested */
  await page.evaluate(() => document.querySelector('#viewSeg [data-v=beaker]').click()).catch(() => {}); await page.waitForTimeout(300);
  await page.evaluate(() => { const p = document.querySelector('#play, #go, #run, #sdPlay'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(3000); await grab(page);
  /* the phase diagram: each substance at pressures below its triple point, at 1 atm, between, and above its critical point, heated
     from its lowest and cooled from its highest temperature through every change of phase; then the vapor view sealed (evaporating,
     saturated, cooled to dew) and open (at each outside pressure, heated until it boils) */
  const ev = (f, a) => page.evaluate(f, a).catch(() => {});
  await ev(() => { window.__sm.applyPreset('phase'); window.__sm.setRun(false); });
  for (const sub of ['water', 'co2']) for (const P of sub === 'water' ? [300, 101325, 5e6, 4e7, 3e8] : [3e5, 101325, 2e6, 2e7]) for (const heat of [1, -1]) {
    await ev(([sub, P, heat]) => { const M = window.__sm, s = M.PHASE[sub]; Object.assign(M.ph, { sub, P, heat, T: heat > 0 ? s.Tmin : s.Tmax }); M.phNew(); M.redraw(); }, [sub, P, heat]);
    await page.waitForTimeout(250); await grab(page);
    for (let k = 0; k < 14; k++) { await ev(() => { window.__sm.phAdvance(2); window.__sm.redraw(); }); await page.waitForTimeout(250); await grab(page); }
  }
  /* the beaker at many times along its heating curve, so every stage's wording is harvested */
  await ev(() => { window.__sm.setView('beaker'); window.__sm.setRun(false); });
  for (let k = 0; k <= 40; k++) { await ev((k) => { window.__sm.S.bk.t = k * 30; window.__sm.redraw(); }, k); await page.waitForTimeout(150); await grab(page); }
  await ev(() => { window.__sm.applyPreset('vpress'); window.__sm.setRun(false); });
  /* the sealed jar in its first moments, while the dew point is still below 0 °C */
  for (let k = 0; k < 4; k++) { await ev(() => { window.__sm.vpAdvance(0.1); window.__sm.redraw(); }); await page.waitForTimeout(250); await grab(page); }
  for (const [jar, Tset, Pout] of [['sealed', 293.15, 101325], ['sealed', 273.15, 101325], ['open', 403.15, 101325], ['open', 403.15, 31439], ['open', 403.15, 202650], ['open', 293.15, 20000]]) {
    await ev(([jar, Tset, Pout]) => { const M = window.__sm; M.vp.jar = jar; M.vp.Pout = Pout; M.vpNew(); M.vp.Tset = Tset; M.redraw(); }, [jar, Tset, Pout]);
    await page.waitForTimeout(250); await grab(page);
    for (let k = 0; k < 48; k++) { await ev(() => { window.__sm.vpAdvance(3); window.__sm.redraw(); }); if (k % 4 === 3) { await page.waitForTimeout(250); await grab(page); } }
  }
};
