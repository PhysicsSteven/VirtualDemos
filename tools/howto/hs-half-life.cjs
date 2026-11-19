// How this works: Half Life and Radioactive Dating (Radioactive Decay demo). Part 1's first two readings: coin flip nuclei, 400,
// paused and reset, recorded at t = 0 and after one Step. Expected: N = 400 at t = 0, then about 200 (each nucleus decays with
// chance ½; the spread is about √200 = 14), a different count every run.
require('./lib.cjs')({ demo: 'radioactive-decay', title: 'Half Life and Radioactive Dating', query: '?setup=coin&ws=hs-half-life' }, async (r) => {
  const { state, p, W } = r;
  state.caption = 'Sample readings: 400 coin flip nuclei at the start and after one step';
  await r.secs(3.0);

  state.caption = 'Choose 400 nuclei, then Pause and Reset to go back to t = 0';
  await r.scrollRail('#nSeg');
  await r.click('#nSeg button[data-n="400"]');
  await r.tick(6);
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  await r.click('#play');
  await r.tick(4);
  await r.click('#reset');
  await r.tick(4);
  r.check.paused = await r.text('#play');
  await r.secs(0.6);

  state.caption = 'Record a reading at t = 0';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.secs(1.0);

  state.caption = 'Press Step once: each nucleus flips its coin';
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  await r.click('#stepBtn');
  await r.secs(1.6);
  r.check.meas = (await r.text('#rT')) + ' | ' + (await r.text('#rFrac'));

  state.caption = 'Record again: the table shows the time and the parents left';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;
  r.check.rows = await p.evaluate(() => (window.vdRows ? window.vdRows() : []).map((x) => `${x.t} ${x.parent}`));

  state.caption = 'Step and record until 8 steps, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
});
