// How this works: Active Galaxies and Quasars (The engine). The first table's first reading:
// a 10⁸ M☉ black hole fed 0.1 M☉ a year at 10%.
// Expected: L = 5.663e37 W, L ÷ L_Edd = 0.04505.
require('./lib.cjs')({ demo: 'active-galaxies', title: 'Active Galaxies and Quasars', query: '?ws=quasar-engine' }, async (r) => {
  const { state, p, W } = r;
  const typeIn = async (sel, txt) => { await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2); for (const ch of txt) { await p.keyboard.type(ch); await r.tick(2); } await p.keyboard.press('Enter'); await r.tick(3); };
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the power of a black hole fed 0.1 solar masses of gas a year';
  await r.secs(2.2);

  state.caption = 'Choose The engine above the picture';
  await r.click('#viewSeg [data-v="en"]'); await r.secs(0.9);

  state.caption = 'Under Setups, press One Sun of gas a year';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="oneSun"]'); await r.secs(1.2);

  state.caption = 'Click the readout beside Gas swallowed ṁ, type 0.1 and press Enter';
  await r.scrollRail('#oMdot');
  const o = await r.box('#oMdot');
  state.zoom = [Math.max(0, Math.min(W - 600, o[0] + o[2] / 2 - 300)), Math.max(0, o[1] - 170), 600, 337.5];
  await typeIn('#oMdot', '0.1'); await r.secs(1.2); state.zoom = null;

  state.caption = 'Read the power L and how it compares with the Eddington limit';
  await r.scrollRail('#out');
  const ob = await r.box('#out');
  state.zoom = [W - 600, ob[1] - 60, 600, 337.5];
  state.arrow = { rect: [ob[0] - 4, ob[1] + ob[3] * 0.3, ob[2] + 8, ob[3] * 0.45] };
  await r.secs(2.6); state.arrow = null; state.zoom = null;

  state.caption = 'Press Record reading. The row goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec'); await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4); state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));

  state.caption = 'Record at each feeding rate, then press Export to worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
});
