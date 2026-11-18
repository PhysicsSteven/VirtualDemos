// How this works: The Milky Way and Spiral Arms (Galactic year). The first table's first reading:
// a star 20,000 ly from the center on the measured rotation curve.
// Expected: v = 232.4 km/s, one lap 162.1 million yr, M = 7.699e10 M☉, Ghost speed 264.5 km/s.
require('./lib.cjs')({ demo: 'milky-way', title: 'The Milky Way and Spiral Arms', query: '?ws=galaxy-center' }, async (r) => {
  const { state, p, W } = r;
  const typeIn = async (sel, txt) => { await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2); for (const ch of txt) { await p.keyboard.type(ch); await r.tick(2); } await p.keyboard.press('Enter'); await r.tick(3); };
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the orbit of a star 20,000 light years from the center';
  await r.secs(2.2);

  state.caption = 'Choose Galactic year above the picture';
  await r.click('#viewSeg [data-v="yr"]'); await r.secs(0.9);

  state.caption = "Under Setups, press The Sun's lap";
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="sunyear"]'); await r.secs(1.2);

  state.caption = "Click the readout beside Star's distance from the center r, type 20000 and press Enter";
  await r.scrollRail('#oR');
  const o = await r.box('#oR');
  state.zoom = [Math.max(0, Math.min(W - 600, o[0] + o[2] / 2 - 300)), Math.max(0, o[1] - 170), 600, 337.5];
  await typeIn('#oR', '20000'); await r.secs(1.2); state.zoom = null;

  state.caption = "The star now orbits 20,000 light years from the center, inside the Sun's orbit";
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  const cv = await r.box('#can');
  state.arrow = { rect: [cv[0] + cv[2] * 0.1, cv[1] + cv[3] * 0.1, cv[2] * 0.8, cv[3] * 0.8] };
  await r.secs(2.4); state.arrow = null;

  state.caption = 'Press Record reading. The row goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec'); await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4); state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));

  state.caption = 'Do the same at each distance, then press Export to worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
});
