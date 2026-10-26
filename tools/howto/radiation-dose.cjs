// How this works: Nuclear Reactions, Fission and Fusion, worksheet "Radiation Dose: Distance and Shielding". The first readings: the
// ¹³⁷Cs source setup (1 GBq, no shield), the meter at 0.50 m and then 1.00 m, each recorded. Expected (key rows 1 and 2): 333.6 and
// 83.41 µSv/h, a factor of 4 for twice the distance (inverse square law).
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
    const got = await r.slide('#' + id, '#' + out, want, tol, coarse);
    await r.secs(0.6);
    state.zoom = null;
    await pageTo(0);
    return got;
  };

  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: a 1 GBq cesium 137 source, the meter at 0.5 m and 1 m';
  await r.secs(2.4);

  state.caption = 'Choose ¹³⁷Cs source. There is no shield';
  await r.click('[data-p="doCs"]');
  await r.secs(0.8);

  state.caption = 'Drag the distance to 0.50 m, and record the dose rate';
  r.check.d1 = await set('doR', 'oRd', 0.5, 0.01, 0.1);
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Now 1.00 m, and record again';
  r.check.d2 = await set('doR', 'oRd', 1.0, 0.01, 0.1);
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Go on to 2, 3, 4, 6 and 8 m, then send the table to the worksheet';
  await exportEnd(2.4);
});
