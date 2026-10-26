// How this works: Lasers and Stimulated Emission, worksheet "Lasers: Threshold, Efficiency and Cavity Modes". The first readings:
// the Threshold setup (Laser view, Nd:YAG, output mirror 0.950), pump rate 6 and then 8 per second, each recorded once the output
// has settled (the time scale set to 1 ms/s so it settles in a few seconds). Expected (key rows 1 and 2): 6 s⁻¹ absorbs 1.597 W
// and gives 0.2863 W; 8 s⁻¹ absorbs 2.13 W and gives 0.5764 W; the inversion stays clamped at N/N_th = 1 above threshold.
require('./lib.cjs')({ demo: 'lasers', title: 'Lasers and Stimulated Emission' }, async (r) => {
  const { state, p, W } = r;
  const settled = () => p.evaluate(() => typeof window.vdReadingRow() === 'object');
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
  const pump = async (want) => {
    await r.scrollRail('#wp');
    const b = await r.box('#wp');
    state.zoom = [W - 640, Math.max(0, b[1] - 180), 640, 360];
    const got = await r.slide('#wp', '#wpOut', want, 0.005, 0.25);
    await r.secs(0.4);
    state.zoom = null;
    await r.moveTo(480, 420, 0.5);
    for (let i = 0; i < 300 && !(await settled()); i++) await r.tick();
    await r.secs(0.8);
    return got;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: Nd:YAG with a 0.950 output mirror, pumped at 6 and 8 per second';
  await r.secs(2.4);

  state.caption = 'Choose Threshold. It opens the Laser view with Nd:YAG and R = 0.950';
  await r.click('[data-p="thresh"]');
  await r.secs(0.8);

  state.caption = 'Set the time scale to 1 ms/s, so the output settles in a few seconds';
  await r.scrollRail('[data-s="1e-3"]');
  await r.click('[data-s="1e-3"]');
  await r.secs(0.6);

  state.caption = 'Drag the pump rate to 6 per second, and wait until the output trace is flat';
  r.check.w1 = await pump(6);
  r.check.out1 = await r.text('#rPout');
  state.caption = 'Then record a reading';
  await record(1.6);

  state.caption = 'Now 8 per second: wait for the output to settle, and record again';
  r.check.w2 = await pump(8);
  r.check.out2 = await r.text('#rPout');
  await record(1.6);

  state.caption = 'Go on through the list up to 40 per second, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
