// How this works: Radioactive Decay, worksheet "Measuring a Half Life". The first readings: Coin flip nuclei with 400 nuclei,
// paused and reset to t = 0, then one step. Each nucleus decays in a step with probability 1/2, so after one step about
// 200 ± 10 parents are left (σ = √(400 · ½ · ½) = 10); the run's own count is what the video shows.
require('./lib.cjs')({ demo: 'radioactive-decay', title: 'Radioactive Decay' }, async (r) => {
  const { state, p, W } = r;
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    const tb = await r.box('.vd-readings table');
    state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
    state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  state.ptr = [700, 600]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: 400 coin flip nuclei at the start and after one step';
  await r.secs(2.6);

  state.caption = 'Press Pause, then Reset, to start from t = 0';
  const ctl = await r.box('#play');
  state.zoom = [ctl[0] - 20, ctl[1] - 30, 640, 360];
  await r.click('#play');
  await r.secs(0.3);
  await r.click('#reset');
  await r.tick(3);
  r.check.t0 = await r.text('#tclock');
  state.arrow = { rect: await r.box('#tclock') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading at the start';
  await record(1.6);

  state.caption = 'Press Step: every nucleus gets one coin flip. Record again';
  state.zoom = [ctl[0] - 20, ctl[1] - 30, 640, 360];
  await r.click('#stepBtn');
  await r.tick(3);
  r.check.t1 = await r.text('#tclock');
  state.arrow = { rect: await r.box('#tclock') };
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;
  await record(2.2);

  state.caption = 'Keep stepping and recording until 8 steps have passed, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
