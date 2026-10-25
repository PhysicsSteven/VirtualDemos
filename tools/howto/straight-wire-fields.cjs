// How this works: Fields and Forces of Straight Wires (Magnetic Fields of Currents, Worksheet 2). Part 1's first reading: the
// One wire setup (5.0 A out of the page), the probe 1.0 cm to the right of the wire. Expected: B = μ₀I/(2πr)
// = 1.25663706127e-6 × 5.0/(2π × 0.010) = 100.0 μT, pointing along +y (90° from +x, counterclockwise around the wire).
require('./lib.cjs')({ demo: 'currents-fields', title: 'Fields and Forces of Straight Wires' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#can');
  const at = (x, y) => p.evaluate(([x, y]) => [__cf.X(x), __cf.Y(y)], [x, y]).then(([u, v]) => [can[0] + u, can[1] + v]);

  state.caption = 'Sample reading: the field 1.0 cm from a long wire carrying 5.0 A';
  await r.secs(3.0);

  state.caption = 'Choose the One wire setup: 5.0 A out of the page';
  await r.click('#presets [data-p="one"]');
  await r.tick(4);
  state.arrow = { rect: await r.box('#wList li') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Move the probe: drag it toward the wire until it sits 1.0 cm to the right';
  const w = await at(0, 0);
  state.zoom = [w[0] - 340, w[1] - 191.25, 680, 382.5];
  const pr = await at(3, 0);
  await r.moveTo(pr[0], pr[1], 0.9);
  await p.mouse.down(); state.down = true; await r.tick(4);
  for (let i = 0; i < 300 && !/^\(1\.0, 0\.0\)/.test(await r.text('#pPos')); i++) { state.ptr = [state.ptr[0] - 1, state.ptr[1]]; await p.mouse.move(...state.ptr); await r.tick(); }
  await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
  r.check.pos = await r.text('#pPos');
  await r.secs(1.2);

  state.caption = 'Read the field at the probe: 100 μT, circling the wire';
  state.zoom = null;
  r.check.head = await r.text('#headline');
  state.arrow = { rect: await r.box('#headline') };
  await r.secs(2.0);
  await r.scrollRail('#pB');
  r.check.pB = await r.text('#pB');
  state.arrow = { rect: await r.box('#pB') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat at each distance, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
