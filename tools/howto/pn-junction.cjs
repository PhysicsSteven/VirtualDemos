// How this works: Solids, worksheet "The pn Junction Diode and LEDs". The first readings: Diode (300 K, I₀ = 1 pA), bias −2.00 V
// and then −1.50 V. Expected (key rows 1 and 2): I = I₀(e^(eV/kT) − 1) = −1.000e−12 A at both, the reverse current saturated at −I₀.
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

  state.caption = 'Sample readings: a silicon diode at 300 K, biased at −2.00 V and −1.50 V';
  await r.secs(2.4);

  state.caption = 'Choose Diode';
  await r.click('[data-p="dvDiode"]');
  await r.secs(0.8);

  state.caption = 'Drag the bias down to −2.00 V, and record a reading';
  r.check.v1 = await set('sV', 'oV', -2.0, 0.004, 0.05);
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.5);

  state.caption = 'Now −1.50 V, and record again';
  r.check.v2 = await set('sV', 'oV', -1.5, 0.004, 0.05);
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.5);

  state.caption = 'Go on to 0 V, then from 0.10 V to 0.70 V in steps of 0.05 V, and send the table to the worksheet';
  await exportEnd(2.6);
});
