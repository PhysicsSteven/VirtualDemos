// How this works: Molecules, worksheet "Ionic and Covalent Bonds". The first readings: the NaCl molecule setup (repulsion exponent
// 19), the separation dragged to 0.180 nm and then 0.190 nm, each recorded. Expected (key rows 1 and 2): U = 48.707 eV at 0.180 nm
// and 13.697 eV at 0.190 nm, the steep n = 19 repulsion well inside the 0.236 nm equilibrium.
require('./lib.cjs')({ demo: 'molecules', title: 'Molecules' }, async (r) => {
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
  const sep = async (want) => {
    let b = await r.box('#sRi');
    if (b[1] > r.H - 80) { await pageTo(b[1] + (await p.evaluate(() => scrollY)) - 520); b = await r.box('#sRi'); }
    state.zoom = [Math.max(0, b[0] - 120), b[1] - 240, 640, 360];
    const got = await r.slide('#sRi', '#oRi', want, 0.0004, 0.006);
    await r.secs(0.6);
    state.zoom = null;
    await pageTo(0);
    return got;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the Na⁺ Cl⁻ ion pair pushed to 0.180 nm and 0.190 nm';
  await r.secs(2.4);

  state.caption = 'Choose NaCl molecule. The repulsion exponent is 19';
  await r.click('[data-p="nacl"]');
  await r.secs(1.0);

  state.caption = 'Drag the separation down to 0.180 nm, and record the energy';
  r.check.r1 = await sep(0.180);
  r.check.u1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Now 0.190 nm, and record again';
  r.check.r2 = await sep(0.190);
  await record(1.6);

  state.caption = 'Go on through the list out to 1.20 nm, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
