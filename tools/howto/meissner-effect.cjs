// How this works: Superconductors, worksheet "The Meissner Effect and the Critical Field". The first readings: Lead above Tc
// (9.00 K, 20.00 mT) recorded, then cooled to 8.00 K and recorded. Expected (key rows 1 and 2): above Tc = 7.20 K the lead is a
// normal metal, so the moment is 0.000 mA·m² and the field at the equator is the applied 20.00 mT at both temperatures.
require('./lib.cjs')({ demo: 'superconductors', title: 'Superconductors' }, async (r) => {
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
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: lead in a 20 mT field at 9.00 K and at 8.00 K, both above Tc';
  await r.secs(2.4);

  state.caption = 'Choose Lead above Tc, and record a reading';
  await r.click('[data-p="warm"]');
  await r.secs(1.0);
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Drag the temperature down to 8.00 K, and record again';
  const b = await r.box('#sT');
  state.zoom = [Math.max(0, Math.min(b[0] - 200, W - 640)), Math.max(0, b[1] - 160), 640, 360];
  r.check.T = await r.slide('#sT', '#oT', 8.0, 0.004, 0.08);
  await r.secs(0.8);
  state.zoom = null;
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Keep cooling, to 7.30, 7.10, 6.00 and 4.20 K, recording at each; then lower the field to 0';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
