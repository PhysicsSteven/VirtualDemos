// How this works: Bose–Einstein Condensation, worksheet "Bose–Einstein Condensation". The first readings of Table 1: 100
// rubidium 87 atoms in a 10 µm box (Where the packets touch) at 1000 nK and at 500 nK. Expected (key rows 1 and 2):
// λ_T = 0.187 µm, overlap 0.035, N₀ = 0.04 at 1000 nK; λ_T = 0.265 µm, overlap 0.070, N₀ = 0.07 at 500 nK.
require('./lib.cjs')({ demo: 'bose-einstein', title: 'Bose–Einstein Condensation', query: '?setup=touch' }, async (r) => {
  const { state, p, W } = r;
  const nK = async () => p.evaluate(() => window.__bec.S.T * 1e9);
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
  const slideTo = async (want, tol, cap) => {
    state.caption = cap;
    /* the temperature slider sits under the picture: scroll the page smoothly until it is in view */
    const y0 = await p.evaluate(() => scrollY), t = (await r.box('#sT'))[1], y1 = Math.max(0, y0 + t - (r.H - 140));
    for (let i = 1; i <= 12; i++) { const u = i / 12, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y1 - y0) * e); await r.tick(); }
    const b = await r.box('#sT');
    state.zoom = [Math.max(0, Math.min(b[0] - 200, W - 640)), Math.max(0, Math.min(b[1] - 160, r.H - 360)), 640, 360];
    await r.slide('#sT', nK, want, tol, 3 * tol);
    await r.secs(1.0);
    state.zoom = null;
  };
  state.ptr = [640, 380]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: 100 rubidium atoms in a 10 µm box, at 1000 nK and at 500 nK';
  await r.secs(2.6);

  await slideTo(1000, 0.5, 'Start from Where the packets touch; drag the temperature up to 1.00 µK (1000 nK)');
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  state.caption = 'Record a reading: the temperature, λ_T, the overlap and the ground state count go in a row';
  await record(2.2);

  await slideTo(500, 1, 'Drag the temperature down to 500 nK, and record again');
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(2.0);

  state.caption = 'Go on down to 1 nK, recording at each temperature on the list; then Export to worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
