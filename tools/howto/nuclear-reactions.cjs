// How this works: Nuclear Reactions, Fission and Fusion, worksheet "Nuclear Reactions: Balancing and Weighing". The first readings:
// Cockcroft and Walton and then Chadwick picked from the Famous reactions list, each recorded at the energy it is set to. Expected
// (AME2020 masses, key rows 1 and 2): p + ⁷Li → α + ⁴He, 8.0238285 u → 8.0052065 u, Q = 17.3463 MeV, products 17.8462 MeV at
// K = 0.500 MeV; α + ⁹Be → n + ¹²C, Q = 5.7020 MeV, products 11.0020 MeV at K = 5.300 MeV.
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
  const pick = async (key) => {
    const b = await near('#rxPick');
    state.zoom = [Math.max(0, b[0] - 60), Math.max(0, b[1] - 200), 640, 360];
    await r.moveTo(b[0] + b[2] / 2, b[1] + b[3] / 2, 0.6);
    await p.selectOption('#rxPick', key);
    await r.secs(1.2);
    state.zoom = null;
    await pageTo(0);
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the first two reactions in the list, Cockcroft and Walton, and Chadwick';
  await r.secs(2.4);

  state.caption = 'In the Reactions view, pick Cockcroft and Walton 1932 from the Famous reactions list';
  await r.click('[data-v="rx"]');
  await r.secs(0.4);
  await pick('cw');
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  state.caption = 'Record a reading at the energy it is set to';
  await record(1.8);

  state.caption = 'Now Chadwick 1932, and record again';
  await pick('chad');
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.8);

  state.caption = 'Go on through the rest of the list, then send the table to the worksheet';
  await exportEnd(2.4);
});
