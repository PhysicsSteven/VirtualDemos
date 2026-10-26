// How this works: Radioactive Decay, ⁹⁹Mo generator setup, worksheet "A Technetium Generator". The first readings of the ingrowth
// series: 10 000 nuclei, paused at t = 0 just after an elution, expected curves hidden, read at the start and at 2 h (four steps of
// 0.5 h). Expected at 2 h (Bateman with B = 0.886): N_P = 10 000 e^(−λ_P · 2 h) = 9792 ± 14 and N_D = 164.6 ± 13; the key's run
// read 9799 and 155. The run's own counts are what the video shows.
require('./lib.cjs')({ demo: 'radioactive-decay', title: 'Radioactive Decay', query: '?setup=mo99&view=3d' }, async (r) => {
  const { state, p, W } = r;
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    const tb = await r.box('.vd-readings table');
    state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
    state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  state.ptr = [700, 600]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: a ⁹⁹Mo generator just after an elution, at the start and after 2 h';
  await r.secs(2.4);

  state.caption = 'Press Pause, then choose 10,000 nuclei: a fresh column at t = 0';
  const ctl = await r.box('#play');
  state.zoom = [Math.max(0, ctl[0] - 20), Math.max(0, ctl[1] - 30), 640, 360];
  await r.click('#play');
  await r.secs(0.3);
  state.zoom = null;
  await r.scrollRail('#nSeg');
  await r.click('#nSeg button[data-n="10000"]');
  await r.tick(3);
  if (await p.evaluate(() => document.getElementById('play').textContent.trim() === 'Pause')) await r.click('#play');
  r.check.t0 = await r.text('#tclock');
  await r.secs(0.8);

  state.caption = 'Open Display and turn off the expected curve and its band';
  await r.scrollRail('.fold summary:is(:has(+ .foldbody #tExp))');
  await r.click('.fold summary:is(:has(+ .foldbody #tExp))');
  await r.tick(4);
  await r.scrollRail('#tExp');
  await r.click('#tExp');
  await r.tick(2);
  await r.click('#tBand');
  await r.secs(0.6);

  state.caption = 'Record the reading at the start';
  await record(1.4);

  state.caption = 'Press Step four times: each step is 0.5 h, so the clock reads 2 h. Record again';
  await r.scrollRail('#tclock');
  const c2 = await r.box('#play');
  state.zoom = [Math.max(0, c2[0] - 20), Math.max(0, c2[1] - 30), 640, 360];
  for (let i = 0; i < 4; i++) { await r.click('#stepBtn'); await r.tick(4); }
  r.check.t1 = await r.text('#tclock');
  state.arrow = { rect: await r.box('#tclock') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null;
  await record(2.2);

  state.caption = 'Go on every 2 h to 24 h, then every 12 h to 168 h, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
