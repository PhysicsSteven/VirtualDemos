// How this works: Energy Skate Park (worksheet Energy Skate Park: Height, Speed and Friction). Part 1's first reading: the Valley,
// 60 kg, ¼×, Blind on, start height y₀ = 5.71 m, paused on the way down. Expected: whatever the pause, v² = 2g(y₀ − y) to the
// readouts' 0.01 rounding (for example y = 4.20 m gives v = √(19.62 × 1.51) = 5.44 m/s).
require('./lib.cjs')({ demo: 'energy-track', title: 'Energy Skate Park', query: '?ws=hs-energy-skate' }, async (r) => {
  const { state, p } = r;
  state.caption = 'Sample reading: the skater\'s height and speed on the way down the valley';
  await r.secs(3.0);

  state.caption = 'Hide the energies: tick Blind in the Lab section';
  await r.scrollRail('details:has(#labBlind) > summary');
  await r.click('details:has(#labBlind) > summary');
  await r.tick(3);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.4);
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);

  state.caption = 'Slow the playback to ¼×, then write down the starting height';
  await r.click('#speedSeg button[data-s="0.25"]');
  await r.scrollRail('#out');
  r.check.start = (await r.text('#out')).replace(/\s+/g, ' ');
  const o = await r.box('#out');
  state.arrow = { rect: o };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Press Play, then Pause somewhere on the way down';
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  await r.click('#play');
  await r.secs(2.4);
  await r.click('#play');
  await r.tick(4);
  r.check.paused = (await r.text('#out')).replace(/\s+/g, ' ');

  state.caption = 'Write the Height y and Speed v into Table 1';
  await r.scrollRail('#out');
  const o2 = await r.box('#out');
  state.zoom = [Math.max(0, o2[0] - 240), o2[1] - 120, 640, 360];
  state.arrow = { rect: [o2[0], o2[1], o2[2], Math.min(o2[3], 90)] };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Play and pause again for each reading, one at the very bottom';
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  await r.click('#play');
  await r.secs(2.0);
  await r.click('#play');
  await r.secs(1.6);
});
