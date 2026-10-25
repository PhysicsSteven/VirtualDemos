// How this works: Radioactive Decay, worksheet "Parent and Daughter" (decay-chains). The first readings: the Two step chain
// (²¹⁰Bi, 5.012 d, to ²¹⁰Po, 138.376 d) with 10,000 nuclei and the expected curves hidden, at t = 0 and at 5 d (Step moves the
// chain 1 d at a time, so five steps land exactly on 5.00 d). Expected at 5 d (Bateman): parents 10,000 · 2^(−5/5.012) = 5008,
// daughters 4923, lead 69; a run scatters about √N around these.
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

  state.caption = 'Sample readings: bismuth 210 decaying to polonium 210, at the start and after 5 days';
  await r.secs(2.6);

  state.caption = 'Choose the Two step chain and 10,000 nuclei';
  await r.click('[data-p="bi210"]');
  await r.secs(0.3);
  await r.click('[data-n="10000"]');
  await r.secs(0.4);

  state.caption = 'Hide the expected curves: open Display and untick Expected';
  await r.scrollRail('.fold');
  await r.click('.fold > summary');
  await r.tick(4);
  await r.scrollRail('#tExp');
  const te = await r.box('#tExp');
  state.zoom = [W - 640, te[1] - 140, 640, 360];
  await r.click('#tExp');
  r.check.exp = await p.evaluate(() => document.getElementById('tExp').checked);
  await r.secs(0.8);
  state.zoom = null;

  state.caption = 'Press Pause, then Reset, to start from t = 0. Record the reading';
  const ctl = await r.box('#play');
  state.zoom = [ctl[0] - 20, ctl[1] - 30, 640, 360];
  await r.click('#play');
  await r.secs(0.2);
  await r.click('#reset');
  await r.tick(3);
  r.check.t0 = await r.text('#tclock');
  state.zoom = null;
  await record(1.4);

  state.caption = 'Press Step five times: each step is 1 day. Record at 5.00 d';
  state.zoom = [ctl[0] - 20, ctl[1] - 30, 640, 360];
  for (let i = 0; i < 5; i++) { await r.click('#stepBtn'); await r.tick(2); }
  r.check.t5 = await r.text('#tclock');
  state.arrow = { rect: await r.box('#tclock') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;
  await record(2.0);

  state.caption = 'Repeat every 5 d to 60 d, then every 20 d to 300 d, and send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
