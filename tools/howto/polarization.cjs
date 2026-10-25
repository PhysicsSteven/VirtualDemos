// How this works: Polarization. Part 1's first reading: unpolarized light through one polarizer with its axis at 0°. The Malus's
// law setup opens with two polarizers (0° and 40°), so the second is taken out. Expected: I/I₀ = ½ for unpolarized light
// through any one ideal polarizer, whatever its axis; the light out is linear at the axis, 0°.
require('./lib.cjs')({ demo: 'polarization', title: 'Polarization' }, async (r) => {
  const { state } = r;
  const can = await r.box('#can');

  state.caption = 'Sample: Part 1, unpolarized light through one polarizer at 0°';
  await r.secs(2.8);

  state.caption = 'The setup opens with two polarizers: take the second one out';
  await r.scrollRail('#els');
  const x = await r.box('#els .el[data-i="1"] .el-x');
  state.arrow = { rect: x };
  await r.click('#els .el[data-i="1"] .el-x');
  state.arrow = null;
  await r.secs(1.0);

  state.caption = 'The light in is unpolarized, and polarizer 1 has its axis at 0°';
  state.arrow = { rect: await r.box('#eo0') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'The light leaves polarized along the axis, with half the intensity';
  await r.moveTo(can[0] + can[2] * 0.62, can[1] + can[3] * 0.75, 0.6);
  state.zoom = [can[0], can[1], can[2] * 0.75, can[2] * 0.75 * 9 / 16];
  await r.secs(3.2);
  state.zoom = null;

  state.caption = 'Read I/I₀ out: 0.500';
  r.check.count = await r.text('#count');
  r.check.out = await r.text('#rOut');
  state.arrow = { rect: await r.box('#count') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  await r.scrollRail('.vd-readings .status');   /* the row clear of the caption */
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat at 45° and 90°, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await r.p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
