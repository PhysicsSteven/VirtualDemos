// How this works: Dust, Glowing Gas and the 21 cm Line (Between the Stars, ?ws=interstellar-medium). Table 1's first readings:
// A star behind a dust lane (3,000 ly at one atom per cm³), then the path typed as 1,000 ly. Expected: 3,000 ly, A_V 1.28 mag,
// 30.6% of the visible light let through; then 1,000 ly, 0.428 mag, 67.4%. Checks: A_V = nL/2.21 × 10²¹ cm⁻² = 9.461 × 10²⁰/2.21 × 10²¹
// = 0.428 mag at 1,000 ly; 10^(−0.4 × 0.428) = 0.674.
require('./lib.cjs')({ demo: 'between-the-stars', title: 'Dust, Glowing Gas and the 21 cm Line', query: '?ws=interstellar-medium' }, async (r) => {
  const { state, p, W } = r;
  const type = async (sel, txt) => {
    await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2);
    for (const ch of txt) { await p.keyboard.type(ch); await r.tick(3); }
    await p.keyboard.press('Enter'); await r.tick(3);
  };
  state.ptr = [1120, 640]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: a star seen through 3,000 and then 1,000 light years of gas and dust';
  await r.secs(2.6);

  state.caption = 'Choose the setup A star behind a dust lane';
  await r.scrollRail('[data-p="lane"]');
  state.arrow = { rect: await r.box('[data-p="lane"]') };
  await r.click('[data-p="lane"]');
  await r.secs(0.9);
  state.arrow = null;

  state.caption = 'Read the dimming and the share of visible light let through';
  await r.scrollRail('#out');
  const a = await r.box('#out > div:nth-child(3)'), b = await r.box('#out > div:nth-child(4)');
  state.zoom = [W - 640, Math.max(0, a[1] - 150), 640, 360];
  state.arrow = { rect: [a[0] - 6, a[1] - 6, b[0] + b[2] - a[0] + 12, Math.max(a[3], b[3]) + 12] };
  r.check.AV3000 = await r.text('#out > div:nth-child(3) dd'); r.check.f3000 = await r.text('#out > div:nth-child(4) dd');
  await r.secs(2.6);
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

  state.caption = 'Next path: click the readout of Path through it L and type 1000';
  const l = await r.box('#oL');
  state.zoom = [Math.max(0, l[0] - 320), Math.max(0, l[1] - 180), 640, 360];
  await type('#oL', '1000');
  state.arrow = { rect: await r.box('#oL') };
  r.check.L = await r.text('#oL');
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record each path, then the 1/10 and 1/100 setups, and send the table to the worksheet';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().map((x) => [x.L_ly, x.AV_mag, x.f_V])));
});
