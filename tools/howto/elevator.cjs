// How this works: Elevator: Apparent Weight. The first reading of the One ride part: 60 kg, elevator acceleration 1.5 m/s²,
// top speed 3.0 m/s, instant starts and stops, paused while the car speeds up going up to floor 10.
// Expected: N = m(g + a) = 60 × 11.31 = 678.6 N, so the scale reads N/g = 69.2 kg (mg = 589 N, 60.0 kg at rest).
require('./lib.cjs')({ demo: 'elevator', title: 'Elevator: Apparent Weight' }, async (r) => {
  const { state, p } = r;

  state.caption = 'Sample reading: the scale while a 60 kg rider speeds up going up';
  await r.secs(3.0);

  state.caption = 'Set up the ride: 60 kg, 1.5 m/s² and 3.0 m/s are already set';
  const card = await r.box('#setupCard');
  state.arrow = { rect: card };
  await r.moveTo(card[0] + card[2] / 2, card[1] + card[3] / 2, 0.8);
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Tick Instant starts and stops, the textbook model';
  await r.click('#instant');
  state.arrow = { rect: await r.box('label.check:has(#instant)') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Ride up to floor 10, then pause while the car speeds up';
  await r.click('#trips [data-to="10"]');
  await r.click('#pause');
  r.check.stage = await r.text('#out');
  await r.scrollRail('#out');
  const out = await r.box('#out');
  state.zoom = [r.W - 560, Math.min(out[1] - 40, r.H - 315), 560, 315];
  state.arrow = { rect: out };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Resume and record each stage of the ride, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => window.vdRows()[0]);
});
