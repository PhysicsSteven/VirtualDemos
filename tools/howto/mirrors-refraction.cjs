// How this works: Optics Bench, Mirrors and Refracting Surfaces worksheet. Part 1's first reading: in the Concave mirror setup the
// mirror made plane, with the object dragged to about 5 cm from it. Expected: a plane mirror has f = ∞, so 1/d_i = −1/d_o, d_i = −5.0 cm
// (a virtual image 5.0 cm behind the mirror) and m = −d_i/d_o = +1.00: virtual, upright, same size.
require('./lib.cjs')({ demo: 'optics-bench', title: 'Optics Bench: Mirrors and Refracting Surfaces' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#view');
  const at = (x, y) => p.evaluate(([x, y]) => window.__ob.px(x, y), [x, y]);
  const items = () => p.evaluate(() => window.__ob.items.map((i) => ({ kind: i.kind, x: i.x })));

  state.caption = 'Sample: Part 1, an object about 5 cm from a plane mirror';
  await r.secs(2.8);

  state.caption = 'Choose the Concave mirror setup';
  await r.click('#presets [data-p="concave"]');
  await r.secs(0.8);

  state.caption = 'Make the mirror plane: click it, then choose Plane';
  const [, mir] = await items();
  await r.moveTo(...(await at(mir.x, 1)), 0.8);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.tick(6);
  await r.scrollRail('#selFields');
  await r.click('#selFields .chips button:nth-child(3)');
  await r.secs(0.8);

  state.caption = 'Drag the object to about 5 cm from the mirror';
  const [obj] = await items();
  await r.moveTo(...(await at(obj.x, 1.5)), 0.8);
  await p.mouse.down(); state.down = true; await r.tick(3);
  state.zoom = [can[0] + can[2] * 0.36, can[1] + 50, can[2] * 0.64, can[2] * 0.64 * 9 / 16];
  await r.moveTo(...(await at(mir.x - 5, 1.5)), 1.6);
  await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  await r.secs(1.6);   /* the rays and the virtual image behind the mirror */
  state.zoom = null;

  state.caption = 'Read the image: d_i = −5.0 cm and m = +1.00, virtual and upright';
  await r.scrollRail('#imgDl');
  r.check.img = await r.text('#imgDl');
  state.arrow = { rect: await r.box('#imgDl') };
  await r.secs(3.0);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Repeat at about 10 and 20 cm, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
