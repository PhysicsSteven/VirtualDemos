// How this works: Velocity, Momentum and Energy Near c, worksheet "Momentum Under a Steady Force" (relativistic-momentum). The
// first readings: Electron, steady force (1.0 MV/m), the clock stepped 0.5 ns at a time. Expected (p = eEt, v = p/√(p² + m²c²)):
// t = 0.5 ns: γv = eEt/mc = 0.29334c, v = 0.281479c, x = (γ − 1)mc²/eE = 0.021532 m; t = 1.0 ns: v = 0.506023c, x = 0.081450 m.
require('./lib.cjs')({ demo: 'relativistic-motion', title: 'Velocity, Momentum and Energy Near c' }, async (r) => {
  const { state, p, W } = r;
  const at = (sel) => p.evaluate((s) => { document.querySelector(s).scrollIntoView({ block: 'center' }); }, sel);
  const record = async (s) => {
    await at('.vd-rec'); await r.tick(2);
    await r.click('.vd-rec');
    await r.tick(4);
    const t = await r.box('.vd-readings table');
    state.zoom = [W - 600, t[1] - 150, 600, 337.5];
    state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
    await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  };
  const step = async () => {
    await r.click('#step');
    await r.tick(3);
    state.arrow = { rect: await r.box('#clock') };
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: an electron pushed by a steady 1.0 MV/m field, after 0.5 ns and 1.0 ns';
  await r.secs(3.0);

  state.caption = 'Choose the Electron, steady force setup';
  await r.click('[data-p="electronField"]');
  await r.secs(0.8);

  state.caption = 'Press Step: the clock moves on one step, 0.5 ns';
  await step();
  r.check.t1 = await p.evaluate(() => window.__rm.S.mom.t);
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Record the time, distance and speed';
  await record(1.8);

  state.caption = 'Step again and record at 1.0 ns';
  await step();
  r.check.t2 = await p.evaluate(() => window.__rm.S.mom.t);
  await r.secs(1.0);
  state.arrow = null;
  await record(2.0);

  state.caption = 'Step and record up to 10 ns, then send the table to the worksheet';
  await at('.vd-export'); await r.tick(2);
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
