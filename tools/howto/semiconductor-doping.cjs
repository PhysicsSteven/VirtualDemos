// How this works: Solids, worksheet "Carriers in Pure and Doped Silicon". The first readings: Pure silicon at 300 K and 350 K.
// Expected (key rows 1 and 2): n = p = n_i = 1.066e10 cm⁻³ at 300 K and 2.965e11 cm⁻³ at 350 K, n_i ∝ T^1.5 exp(−E_g/2kT).
require('./lib.cjs')({ demo: 'solids', title: 'Solids' }, async (r) => {
  const { state, p, W } = r;
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
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
  /* a slider in the scene, below the picture: scroll the page to it, drag it, scroll back */
  const set = async (id, out, want, tol, coarse) => {
    let b = await r.box('#' + id);
    if (b[1] > r.H - 80) { await pageTo(b[1] + (await p.evaluate(() => scrollY)) - 520); b = await r.box('#' + id); }
    state.zoom = [Math.max(0, b[0] - 120), b[1] - 240, 640, 360];
    const got = await r.slide('#' + id, '#' + out, want, tol, coarse);
    await r.secs(0.6);
    state.zoom = null;
    await pageTo(0);
    return got;
  };
  const exportEnd = async (s) => {
    const ex = await r.box('.vd-export');
    await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
    state.arrow = { rect: ex };
    await r.secs(s);
    r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
    r.check.ws = await p.evaluate(() => window.vdWorksheet());
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: pure silicon at 300 K and 350 K';
  await r.secs(2.4);

  state.caption = 'Choose Pure silicon. It starts at 300 K: record a reading';
  await r.click('[data-p="dpIntr"]');
  await r.secs(0.8);
  r.check.t1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Drag the temperature to 350 K under the picture, and record again';
  r.check.T = await set('sT', 'oT', 350, 0.5, 15);
  r.check.t2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Go on in steps of 50 K up to 700 K, then send the table to the worksheet';
  await exportEnd(2.4);
});
