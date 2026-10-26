// How this works: Nuclear Reactions, Fission and Fusion, Dose view, worksheet "Shielding a PET Uptake Room" (Medical Physics). The
// first readings of Table 1: the PET uptake room setup (¹⁸F, 555 MBq, 2 m, broad beam with buildup), no lead and then 0.2 cm of
// lead, each recorded. Expected (key rows 1 and 2): 20.57 µSv/h with no shield; at 0.2 cm, broad 16.19 and narrow 14.42 µSv/h
// (buildup factor 1.123). Check: 555 MBq × 1.935 photons × 511 keV × (μ_en/ρ)_tissue / 4πr² at 2 m gives 20.6 µSv/h, and
// e^(−1.7765 × 0.2) = 0.701 narrow.
require('./lib.cjs')({ demo: 'nuclear-reactions', title: 'Nuclear Reactions, Fission and Fusion', query: '?setup=doPet&view=3d' }, async (r) => {
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
    await r.scrollRail('.vd-export');   /* the barrier readouts push it below the window */
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
    await p.focus('#' + id);   /* a step too small for a drag goes by the arrow keys, which need the slider focused */
    const got = await r.slide('#' + id, '#' + out, want, tol, coarse);
    await r.secs(0.6);
    state.zoom = null;
    await pageTo(0);
    return got;
  };

  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the PET uptake room wall, with no lead and with 0.2 cm of lead';
  await r.secs(2.4);

  state.caption = 'PET uptake room setup: ¹⁸F, 555 MBq, 2 m, broad beam. Record with no lead';
  const pre = await r.box('[data-p="doPet"]');
  state.arrow = { rect: pre };
  await r.moveTo(pre[0] + pre[2] / 2, pre[1] + pre[3] / 2 + 4, 0.7);
  await r.secs(1.6);
  state.arrow = null;
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Drag the lead thickness to 0.2 cm, and record again';
  r.check.x2 = await set('doX', 'oX', 0.2, 0.01, 0.3);
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);
  /* the room again: the lead sheet now stands between the patient and the meter */
  await pageTo(0);
  const sc = await r.box('#pane');
  state.zoom = [sc[0], sc[1], sc[2], sc[2] * 9 / 16];
  await r.secs(1.8);
  state.zoom = null;

  state.caption = 'Go on to 4 cm, send the table to the worksheet, then do concrete and the barrier inputs';
  await exportEnd(2.6);
});
