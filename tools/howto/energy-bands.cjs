// How this works: Solids, worksheet "Energy Bands in a Chain of Atoms". The first readings: Levels become bands, the spacing set to
// 0.30 nm, then N = 1 and N = 2 atoms, each recorded. Expected (key rows 1 and 2): one atom, s level −9.000 eV and p level −4.000 eV;
// two atoms, the s level split into −9.490 and −8.510 eV (width 0.980 eV), lowest p −4.803 eV.
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

  state.caption = 'Sample readings: a chain of 1 atom and of 2 atoms, 0.30 nm apart';
  await r.secs(2.4);

  state.caption = 'Choose Levels become bands';
  await r.click('[data-p="bdForm"]');
  await r.secs(0.8);

  state.caption = 'Drag the spacing to 0.30 nm';
  r.check.d = await set('sD', 'oD', 0.30, 0.002, 0.02);

  state.caption = 'Drag the number of atoms to 1, and record a reading';
  r.check.n1 = await set('sN', 'oN', 1, 0.1, 0.5);
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.5);

  state.caption = 'Now 2 atoms: the s level splits in two. Record again';
  r.check.n2 = await set('sN', 'oN', 2, 0.1, 0.5);
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.5);

  state.caption = 'Go on with 3, 6, 10, 20 and 40 atoms, then send the table to the worksheet';
  await exportEnd(2.4);
});
