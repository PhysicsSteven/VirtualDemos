// How this works: Measurement Uncertainty, worksheet "Random Scatter and Bias in a Measurement of g". Part A step 1 from a
// freshly opened page (random draw set 1): Hand timing, one swing; Release and one timing of 2.00 s; Repeat 10 times, and the
// dot plot with mean 2.016 s, s = 0.073 s (key copy A1); then Export to worksheet.
require('./lib.cjs')({ demo: 'measurement-uncertainty', title: 'Measurement Uncertainty' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 380]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample: time one swing of a 1.000 m pendulum by hand';
  await r.secs(2.4);
  state.caption = 'Release: the simulated stopwatch times one swing';
  await r.click('#go');
  await r.secs(3.2);
  r.check.first = await p.evaluate(() => JSON.stringify(window.vdRows()));
  state.caption = 'Each timing goes into Readings by itself';
  await r.scrollRail('.vd-readings');
  const row = await r.box('.vd-readings tbody tr:last-child'); state.arrow = { rect: row };
  await r.secs(2.4); state.arrow = null;
  state.caption = 'Repeat 10 times: the timings scatter';
  await r.click('#rep');
  await r.secs(3.4);
  state.caption = 'Mean, s and s/√n in the graph and in Analysis';
  await r.scrollRail('#ana');
  const a = await r.box('#ana'); state.arrow = { rect: a };
  await r.secs(3.6); state.arrow = null;
  state.caption = 'Export to worksheet, then Clear';
  await r.scrollRail('.vd-readings');
  const ex = await r.box('.vd-export'); await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8); state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().map((x) => x.T_s)));
});
