// How this works: Shells, the Periodic Table and X Rays, worksheet "Shells and the Periodic Table". The first readings: Fill up to
// neon, then hydrogen and helium picked in the table and recorded. Expected (NIST ionization energies): H 1s¹, 13.5984 eV,
// Z_eff = n√(IE/13.5984 eV) = 1.000; He 1s², 24.5874 eV, Z_eff 1.345 (key rows 1 and 2).
require('./lib.cjs')({ demo: 'shells-and-x-rays', title: 'Shells, the Periodic Table and X Rays' }, async (r) => {
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
  const pick = async (z) => {
    const b = await r.box(`[data-z="${z}"]`);
    if (b[1] > r.H - 60) await pageTo(b[1] + (await p.evaluate(() => scrollY)) - 420);
    await r.click(`[data-z="${z}"]`);
    await r.secs(0.8);
    await pageTo(0);
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: hydrogen and helium, the first two elements';
  await r.secs(2.4);

  state.caption = 'Choose Fill up to neon';
  await r.click('[data-p="neon"]');
  await r.secs(1.0);

  state.caption = 'Pick hydrogen in the table under the picture, and record a reading';
  await pick(1);
  r.check.h = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.8);

  state.caption = 'Now helium, and record again';
  await pick(2);
  r.check.he = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.8);

  state.caption = 'Go on to calcium, Z = 20, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
