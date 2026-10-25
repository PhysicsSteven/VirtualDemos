// How this works: Blackbody Radiation, worksheet "Blackbody: the colors of stars" (intro-blackbody, Astro 2203, opened with
// ?ws=intro-blackbody). Part 1's first reading: the Betelgeuse setup, 3600 K. Expected: λmax = b/T = 2.897772 × 10⁻³ m·K /
// 3600 K = 804.9 nm, F = σT⁴ = 5.670374 × 10⁻⁸ × 3600⁴ = 9.524 × 10⁶ W/m², class M, red.
require('./lib.cjs')({ demo: 'blackbody', query: '?ws=intro-blackbody', title: 'Blackbody Radiation' }, async (r) => {
  const { state, p, W } = r;
  const chart = await r.box('#chart');
  state.ptr = [1120, 640]; await p.mouse.move(...state.ptr);   /* off the chart, so no probe line shows */

  state.caption = 'Sample reading: the light of Betelgeuse, a cool red supergiant';
  await r.secs(2.8);

  state.caption = 'Choose the Betelgeuse setup';
  await r.scrollRail('[data-p="betel"]');
  const pr = await r.box('[data-p="betel"]');
  state.zoom = [W - 640, pr[1] - 160, 640, 360];
  await r.click('[data-p="betel"]');
  await r.secs(1.0);
  r.check.T = await r.text('#tempOut');
  state.zoom = null;

  state.caption = 'Its peak moves out past the red end of the visible band';
  state.zoom = [chart[0], chart[1], chart[2], chart[2] * 9 / 16];
  await r.moveTo(chart[0] + 120, chart[1] + chart[3] + 90, 0.6);
  await r.secs(2.4);
  state.zoom = null;

  state.caption = 'Read the peak wavelength and the light from each square meter';
  await r.scrollRail('#rT');
  r.check.peak = await r.text('#rPk'); r.check.flux = await r.text('#rF'); r.check.vis = await r.text('#rVis');
  r.check.cls = await r.text('#rCls'); r.check.col = await r.text('#rCol');
  const t0 = await r.box('#rT');
  state.zoom = [W - 600, t0[1] - 50, 600, 337.5];
  state.capTop = true;   /* the visible share is at the bottom of this zoom */
  const ring = async (sel) => { const q = await r.box(sel); state.arrow = { rect: [q[0] - 6, q[1] - 22, q[2] + 12, q[3] + 26] }; };
  await ring('#rPk'); await r.secs(1.4);
  await ring('#rF'); await r.secs(1.4);
  state.caption = 'Then the visible share, the spectral class and the color';
  await ring('#rVis'); await r.secs(1.3);
  await ring('#rCls'); await r.secs(1.2);
  await ring('#rCol'); await r.secs(1.2);
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Do the same for the Sun and Rigel, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
