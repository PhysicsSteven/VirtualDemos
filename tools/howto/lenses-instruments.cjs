// How this works: Optics Bench, Lenses and Optical Instruments worksheet. Part 1's first reading: the Converging lens setup
// (f = 10 cm) as it opens, with the object 30 cm from the lens. Expected: 1/d_i = 1/10 − 1/30 gives d_i = +15.0 cm, and
// m = −d_i/d_o = −0.50: a real, inverted image half the size, sharp on the screen 15 cm behind the lens.
require('./lib.cjs')({ demo: 'optics-bench', title: 'Optics Bench: Lenses and Optical Instruments' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#view');
  const at = (x, y) => p.evaluate(([x, y]) => window.__ob.px(x, y), [x, y]);

  state.caption = 'Sample: Part 1, an object 30 cm from a converging lens';
  await r.secs(2.8);

  state.caption = 'The Converging lens setup opens with the object 30 cm from the lens';
  await r.scrollRail('#rDo');
  state.arrow = { rect: await r.box('#imgDl > div:first-child') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Click the lens to check its focal length: f = 10 cm';
  await r.moveTo(...(await at(8, 3)), 0.8);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.tick(6);
  await r.scrollRail('#selEditor');
  state.arrow = { rect: await r.box('#selFields > div:nth-of-type(2)') };
  r.check.f = await r.text('#selFields');
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'The rays cross on the screen: a real, inverted image';
  await r.moveTo(can[0] + can[2] * 0.88, can[1] + can[3] * 0.62, 0.6);
  state.zoom = [can[0] + can[2] * 0.3, can[1] + 40, can[2] * 0.7, can[2] * 0.7 * 9 / 16];
  await r.secs(2.8);
  state.zoom = null;

  state.caption = 'Read the image: d_i = +15.0 cm and m = −0.50';
  await r.scrollRail('#imgDl');
  r.check.img = await r.text('#imgDl');
  state.arrow = { rect: await r.box('#imgDl') };
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Drag the object to each distance and record, then send them to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
