// How this works: From Cold Cloud to Star (Star Birth, ?ws=star-formation). Table 1's first readings: A cold dense core: 10 K,
// then the temperature typed as 20 K. Expected: at 10 K, Jeans mass 5.46 M☉, cloud mass 1.83 Jeans masses, gravity wins;
// at 20 K, 15.4 M☉ and pressure wins. Checks: M_J ∝ T^(3/2), so 5.46 × 2^1.5 = 15.4 M☉.
require('./lib.cjs')({ demo: 'star-birth', title: 'From Cold Cloud to Star', query: '?ws=star-formation' }, async (r) => {
  const { state, p, W } = r;
  const type = async (sel, txt) => {
    await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2);
    for (const ch of txt) { await p.keyboard.type(ch); await r.tick(3); }
    await p.keyboard.press('Enter'); await r.tick(3);
  };
  state.ptr = [1120, 640]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: a cold, dense cloud core of 10 solar masses at 10 K';
  await r.secs(2.6);

  state.caption = 'Choose the setup A cold dense core: 10 K';
  await r.scrollRail('[data-p="core"]');
  state.arrow = { rect: await r.box('[data-p="core"]') };
  await r.click('[data-p="core"]');
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Read the Jeans mass and who wins: gravity, so it collapses';
  const a = await r.box('#out > div:nth-child(3)'), b = await r.box('#out > div:nth-child(5)');
  state.zoom = [W - 640, a[1] - 140, 640, 360];
  state.arrow = { rect: [a[0] - 6, a[1] - 6, Math.max(a[2], b[0] + b[2] - a[0]) + 12, b[1] + b[3] - a[1] + 12] };
  r.check.MJ10 = await r.text('#out > div:nth-child(3) dd'); r.check.wins10 = await r.text('#out > div:nth-child(5) dd');
  await r.secs(3.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Next temperature: click the Temperature readout and type 20';
  const t = await r.box('#oT');
  state.zoom = [Math.max(0, t[0] - 320), Math.max(0, t[1] - 180), 640, 360];
  await type('#oT', '20');
  state.arrow = { rect: await r.box('#oT') };
  r.check.T = await r.text('#oT');
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record each temperature up to 160 K, then send the table to the worksheet';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().map((x) => [x.T_K, x.MJ_Msun, x.wins])));
});
