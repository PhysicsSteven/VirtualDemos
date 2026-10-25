// How this works: Huygens's Principle. Part 1's first reading, the race with every lane 1.0 m long (the setup opens that way).
// Expected: t = nL/c, so 3.336 ns in vacuum (L/c = 1.0 m / 2.99792458e8 m/s) and 2.419 × 3.336 = 8.069 ns in diamond.
require('./lib.cjs')({ demo: 'huygens', title: "Huygens's Principle" }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');
  /* the recorded rows that sit clear of the caption, as one rect */
  const rowsRect = () => r.p.evaluate(() => { const q = [...document.querySelectorAll('.vd-readings tbody tr')].map((e) => e.getBoundingClientRect()).filter((b) => b.bottom < 630);
    const x = Math.min(...q.map((b) => b.left)), y = Math.min(...q.map((b) => b.top)); return [x, y, Math.max(...q.map((b) => b.right)) - x, Math.max(...q.map((b) => b.bottom)) - y]; });

  await r.p.addStyleTag({ content: '#vdTools { display: none !important; }' });   /* the measuring tools never appear */
  state.caption = 'Sample: Part 1, light racing across seven lanes 1.0 m long';
  await r.secs(2.8);

  state.caption = 'Set the lanes to 1.0 m long with Length of each lane';
  await r.scrollRail('#sL');
  const sl = await r.box('#sL');
  await r.moveTo(sl[0] + sl[2] * (0.9 / 2.9) + 8, sl[1] + sl[3] / 2, 0.7);
  state.arrow = { rect: await r.box('#oL') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Restart the race: the slower the light in a lane, the later its pulse finishes';
  await r.click('#restartBtn');
  await r.moveTo(can[0] + can[2] * 0.7, can[1] + can[2] * 0.5, 0.5);
  state.zoom = [can[0] + 40, can[1] + 40, can[2] - 80, (can[2] - 80) * 9 / 16];
  await r.secs(7.6);   /* the picture is slowed 1.0 × 10⁹ times: vacuum finishes at 3.3 s, diamond at 8.1 s */
  state.zoom = null;

  state.caption = 'Read each time: 3.336 ns in vacuum, 8.069 ns in diamond';
  await r.scrollRail('#out');
  r.check.out = await r.text('#out');
  state.arrow = { rect: await r.box('#out .wide') };
  await r.secs(3.0);
  state.arrow = null;

  state.caption = 'Record the reading. One reading records every lane';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  await r.scrollRail('.vd-readings .status');   /* the seven rows clear of the caption */
  state.arrow = { rect: await rowsRect() };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat with 3.0 m lanes, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.rows = await r.p.evaluate(() => window.vdRows().map((x) => `${x.medium1} ${x.L_m} m ${x.t_ns} ns`));
});
