// How this works: Star Colors Through U, B and V Filters (Blackbody Radiation, U B V filters view). The first table's first
// reading: 3000 K. Expected from the demo's own integrals (tools/star-colors/build.py): B − V 1.699, U − B 1.036.
require('./lib.cjs')({ demo: 'blackbody', title: 'Blackbody Radiation' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the color index B − V of a 3000 K star';
  await r.secs(2.6);

  state.caption = 'Switch the chart to the U B V filters view';
  const seg = await r.box('#viewSeg');
  state.zoom = [seg[0] + seg[2] - 760, seg[1] - 20, 760, 427.5];
  await r.click('#viewSeg [data-view=ubv]');
  await r.tick(4);
  state.arrow = { rect: await r.box('#chart') };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Set the temperature: drag the Temperature slider down to 3000 K';
  await r.scrollRail('#temp');
  const sl = await r.box('#temp');
  state.zoom = [W - 640, sl[1] - 170, 640, 360];
  r.check.T = await r.slide('#temp', () => p.evaluate(() => window.__blackbody.S.T), 3000, 0);
  state.arrow = { rect: await r.box('#tempOut') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;
  await r.secs(1.2);   /* the whole page: the filters now let through far more V light than B */

  state.caption = 'Read B − V and U − B under Through the filters';
  await r.scrollRail('#ubvBox');
  r.check.BV = await r.text('#rBV'); r.check.UB = await r.text('#rUB');
  const a = await r.box('#ubvBox .readout');
  state.zoom = [W - 600, a[1] - 60, 600, 337.5];
  state.arrow = { rect: a };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at more temperatures up to 30 000 K, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
