// How this works: Particles, Quarks and Conservation Laws, worksheet "Building Hadrons from Quarks". The first readings: A proton
// from quarks (u u d, one spin down), the second quark changed to d to make the neutron and recorded, then back to u for the proton
// and recorded. Expected (key rows 1 and 2): u d d, J = 1/2, Q = 0, B = +1, S = 0, I₃ = −1/2, n, 939.56542194 MeV/c²; u u d, Q = +1,
// I₃ = +1/2, p, 938.27208943 MeV/c² (CODATA 2022).
require('./lib.cjs')({ demo: 'particles', title: 'Particles, Quarks and Conservation Laws' }, async (r) => {
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

  const tap = async (x, y, s = 0.5) => { await r.moveTo(x, y, s); state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false; await r.tick(2); };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  const flavor = async (k, v) => {
    await p.evaluate((k) => { document.querySelectorAll('select[data-q="f"]')[k - 1].dataset.howk = String(k); }, k);   /* a handle on the kth quark's flavor */
    const s = 'select[data-howk="' + k + '"]';
    const bb = await near(s);
    state.zoom = [Math.max(0, bb[0] - 100), Math.max(0, bb[1] - 160), 640, 360];
    await r.moveTo(bb[0] + bb[2] / 2, bb[1] + bb[3] / 2, 0.6);
    await p.selectOption(s, v);
    await r.secs(1.2);
    state.zoom = null;
    await pageTo(0);
  };
  state.caption = 'Sample readings: the neutron and the proton, built from up and down quarks';
  await r.secs(2.4);

  state.caption = 'Choose A proton from quarks: u, u and d, with one spin down';
  await r.click('[data-p="proton"]');
  await r.secs(1.0);

  state.caption = 'Change the second quark to d: u d d is the neutron. Record a reading';
  await flavor(2, 'd');
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Change it back to u, for the proton, and record again';
  await flavor(2, 'u');
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Build the rest of the octet, then send the table to the worksheet';
  await exportEnd(2.4);
});
