// How this works: Rutherford Scattering, worksheet "Rutherford Scattering". The first run: Blind on, the Geiger–Marsden beam
// (gold, 7.69 MeV), counts cleared, rate 2000 per second, run past 200,000 alphas, paused, counts recorded per 5° bin.
// Expected: N ∝ 1/sin⁴(θ/2) per unit solid angle; the key's run (200,000 fired, b max 168.7 fm) has 39,368 in the 15° to 20° bin.
require('./lib.cjs')({ demo: 'rutherford', title: 'Rutherford Scattering' }, async (r) => {
  const { state, p, W } = r;
  const fired = () => p.evaluate(() => window.__rs.fired);
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample run: 200,000 alphas at gold, counted by angle';
  await r.secs(2.2);

  state.caption = 'Turn Blind on, then choose the Geiger–Marsden beam setup';
  await r.scrollRail('#blind');
  await r.click('#blind');
  await r.secs(0.3);
  await r.scrollRail('[data-p="gm"]');
  await r.click('[data-p="gm"]');
  await r.secs(0.5);
  if ((await r.text('#play')) === 'Pause') { await r.click('#play'); await r.tick(2); }

  state.caption = 'Clear the counts and drag the rate to its highest, 2000 per second';
  await r.click('#clear');
  await r.tick(3);
  await r.scrollRail('#rate');
  const b = await r.box('#rate');
  state.zoom = [W - 640, b[1] - 150, 640, 360];
  r.check.rate = await r.slide('#rate', '#rateOut', 2000, 0.5);
  state.arrow = { rect: await r.box('#rateOut') };
  await r.secs(0.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Play, and let it run past 200,000 alphas (shown 12 times faster)';
  await r.click('#play');
  await r.moveTo(560, 560, 0.5);
  r.speed = 12;
  for (let i = 0; i < 600 && (await fired()) < 200000; i++) await r.tick();
  r.speed = 1;
  await r.click('#play');
  r.check.fired = await fired();
  await r.secs(0.6);

  state.caption = 'Write down the number fired and the beam radius, then record the counts';
  state.arrow = { rect: await r.box('#count') };
  r.check.count = await r.text('#count'); r.check.bm = await r.text('#bmOut');
  await r.secs(1.4);
  state.arrow = null;
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr:first-child') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Send the counts to the worksheet. Then do the same for silver';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  const rows = await p.evaluate(() => window.vdRows());
  r.check.n = rows.length; r.check.first = JSON.stringify(rows.slice(0, 3)); r.check.blind = await p.evaluate(() => window.__rs.S.blind);
});
