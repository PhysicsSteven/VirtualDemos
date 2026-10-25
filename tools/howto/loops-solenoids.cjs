// How this works: Fields of Loops and Solenoids (Magnetic Fields of Currents, Worksheet 3). Part 1's first reading: the Current
// loop setup (5.0 A), the loop's radius dragged to 1.0 cm, the probe at the center. Expected: B = μ₀I/(2R)
// = 1.25663706127e-6 × 5.0/(2 × 0.010) = 314.16 μT, along the axis.
require('./lib.cjs')({ demo: 'currents-fields', title: 'Fields of Loops and Solenoids' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#can');
  const at = (x, y) => p.evaluate(([x, y]) => [__cf.X(x), __cf.Y(y)], [x, y]).then(([u, v]) => [can[0] + u, can[1] + v]);

  state.caption = 'Sample reading: the field at the center of a loop of radius 1.0 cm carrying 5.0 A';
  await r.secs(3.0);

  state.caption = 'Choose the Current loop setup: one loop carrying 5.0 A';
  await r.click('#presets [data-p="loop"]');
  await r.tick(6);
  state.arrow = { rect: await r.box('#oIs') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Set the radius: drag the top of the loop down to 1.0 cm';
  const c0 = await at(0, 0);
  state.zoom = [c0[0] - 320, c0[1] - 180, 640, 360];
  const top = await at(0, 4);
  await r.moveTo(top[0], top[1], 0.9);
  /* half a pixel a frame, watching the radius itself (the readout trails it by a frame or two, and the view rescales as it shrinks) */
  await p.mouse.down(); state.down = true; await r.tick(4);
  for (let i = 0; i < 400 && (await p.evaluate(() => __cf.S.sol.R)) > 1.0001; i++) { state.ptr = [state.ptr[0], state.ptr[1] + 0.5]; await p.mouse.move(...state.ptr); await r.tick(); }
  await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
  r.check.R = [await p.evaluate(() => __cf.S.sol.R), await r.text('#oR')];
  await r.secs(1.0);

  state.caption = 'Read the field at the center, where the probe sits';
  state.zoom = null;
  r.check.head = await r.text('#headline');
  state.arrow = { rect: await r.box('#headline') };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat for each radius, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
