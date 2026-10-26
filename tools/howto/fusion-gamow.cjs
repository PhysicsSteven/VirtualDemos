// How this works: Nuclear Reactions, Fission and Fusion, worksheet "Fusion and the Gamow Peak". The first readings: The Sun's core
// setup (p + p), the temperature (a log scale) dragged to 5 and then 10 million kelvin, each recorded. Expected (key rows 1 and 2):
// 5.012 MK, kT 0.4319 keV, E₀ = (E_G (kT)²/4)^(1/3) = 2.844 keV with E_G = 2m_r c²(παZ₁Z₂)² = 493.5 keV; 10 MK, kT 0.8617 keV,
// E₀ 4.507 keV; the barrier 600.0 keV.
require('./lib.cjs')({ demo: 'nuclear-reactions', title: 'Nuclear Reactions, Fission and Fusion' }, async (r) => {
  const { state, p, W } = r;
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
    const row = await r.box('.vd-readings tbody tr:last-child');
    state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
    state.arrow = { rect: row };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  const exportEnd = async (s) => {
    const ex = await r.box('.vd-export');
    await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
    state.arrow = { rect: ex };
    await r.secs(s);
    r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
    r.check.ws = await p.evaluate(() => window.vdWorksheet());
  };

  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  /* a control in the scene, below the picture: scroll the page to it */
  const near = async (sel) => { let b = await r.box(sel); if (b[1] > r.H - 80) { await pageTo(b[1] + (await p.evaluate(() => scrollY)) - 520); b = await r.box(sel); } return b; };
  const set = async (id, out, want, tol, coarse) => {
    const b = await near('#' + id);
    state.zoom = [Math.max(0, b[0] - 120), Math.max(0, b[1] - 240), 640, 360];
    const got = await r.slide('#' + id, typeof out === 'function' ? out : '#' + out, want, tol, coarse);
    await r.secs(0.6);
    state.zoom = null;
    await pageTo(0);
    return got;
  };

  const lgT = () => p.evaluate(() => +document.getElementById('fuT').value);   /* the slider is log₁₀ T; its readout is in scientific notation */
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: protons at 5 and at 10 million kelvin';
  await r.secs(2.4);

  state.caption = "Choose The Sun's core. The nuclei are p + p";
  await r.click('[data-p="fuSun"]');
  await r.secs(0.8);

  state.caption = 'Drag the temperature down to about 5 million kelvin, and record';
  r.check.T1 = await set('fuT', lgT, 6.70, 0.004, 0.04);
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Now 10 million kelvin, and record again';
  r.check.T2 = await set('fuT', lgT, 7.00, 0.004, 0.04);
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Go on through 15.7, 30, 60, 100 and 300 million kelvin, then send the table to the worksheet';
  await exportEnd(2.6);
});
