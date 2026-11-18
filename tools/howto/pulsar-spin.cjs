// How this works: Spinning Up a Pulsar (Neutron Stars and Pulsars, ?ws=pulsar-spin). Table 1's readings: A core 2,000 km in radius
// turning once a day, at Collapse so far 0 and then 100 %. Expected: 2,000 km, period 1 day; then 10 km, shrink factor 200, spin
// period 2.16 s, field 4.0 × 10⁷ T. Checks: P = 86,400 s/200² = 2.16 s; B = 1000 T × 200² = 4 × 10⁷ T.
require('./lib.cjs')({ demo: 'neutron-stars', title: 'Spinning Up a Pulsar', query: '?ws=pulsar-spin' }, async (r) => {
  const { state, p, W } = r;
  const type = async (sel, txt) => {
    await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2);
    for (const ch of txt) { await p.keyboard.type(ch); await r.tick(3); }
    await p.keyboard.press('Enter'); await r.tick(3);
  };
  state.ptr = [1120, 640]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: a core 2,000 km in radius, turning once a day, before and after it collapses';
  await r.secs(2.6);

  state.caption = 'Choose the setup A core 2,000 km in radius turning once a day';
  await r.scrollRail('[data-p="lesson"]');
  state.arrow = { rect: await r.box('[data-p="lesson"]') };
  await r.click('[data-p="lesson"]');
  await r.secs(0.9);
  state.arrow = null;

  state.caption = 'Set Collapse so far: click its readout and type 0';
  const u = await r.box('#oU');
  state.zoom = [Math.max(0, u[0] - 320), Math.max(0, u[1] - 180), 640, 360];
  await type('#oU', '0');
  state.arrow = { rect: await r.box('#oU') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Now type 100: the core has shrunk to 10 km';
  await type('#oU', '100');
  r.check.R = await r.text('#out > div:nth-child(1) dd');
  await r.secs(0.8);

  state.caption = 'Read the spin period: one turn every 2.16 s instead of once a day';
  await r.scrollRail('#out');
  const a = await r.box('#out > div:nth-child(4)');
  state.zoom = [W - 640, Math.max(0, a[1] - 160), 640, 360];
  state.arrow = { rect: a };
  r.check.P = await r.text('#out > div:nth-child(4) dd'); r.check.B = await r.text('#out > div:nth-child(5) dd');
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record it, then the other stages, and send the table to the worksheet';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().map((x) => [x.R_km, x.shrink, x.P_s, x.B_T])));
});
