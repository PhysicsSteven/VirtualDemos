// How this works: Gamma Spectroscopy, worksheet "Absorbing Gamma Rays: Shielding and Distance". The first readings: the Absorption
// coefficient setup (cesium 137 at 5 cm, its region of interest on the 661.7 keV photopeak, 60 s live shown at ×100), no lead, then
// the 1124 mg/cm² sheet, each acquired after Clear and recorded. Expected (key rows 1 and 2): 162.74 and 142.79 counts per second;
// narrow beam attenuation with μ/ρ = 0.110 cm²/g (XCOM) predicts a ratio e^(−0.110 × 1.124) = 0.884. Counts are random, and each visit draws the source activity between 0.8 and 1.2 times its label, so the rates differ from the key by up to about 20% while their ratio does not.
require('./lib.cjs')({ demo: 'gamma-spectroscopy', title: 'Gamma Spectroscopy' }, async (r) => {
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
  const acquire = async () => {
    await r.click('#clr');
    await r.tick(3);
    if ((await r.text('#acq')) !== 'Stop') await r.click('#acq');
    await r.moveTo(400, 420, 0.5);
    for (let i = 0; i < 300 && (await p.evaluate(() => window.__gs.acquiring)); i++) await r.tick();
    await r.secs(0.5);
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: cesium 137 with no lead, then through one lead sheet';
  await r.secs(2.4);

  state.caption = 'Choose Absorption coefficient. The region of interest is on the photopeak';
  await r.click('[data-p="pb"]');
  await r.secs(0.8);

  state.caption = 'Clear, and acquire 60 s of live time with no lead (shown at ×100)';
  await acquire();
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  state.caption = 'Record the reading: the net rate in the region';
  await record(1.6);

  state.caption = 'Add the 1124 mg/cm² lead sheet, Clear, acquire again, and record';
  await r.scrollRail('#pbChips');
  await r.click('#pbChips button:first-child');
  await r.secs(0.6);
  await acquire();
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Go on through the stacks up to 14.0 g/cm², then send the table to the worksheet';
  await exportEnd(2.4);
});
