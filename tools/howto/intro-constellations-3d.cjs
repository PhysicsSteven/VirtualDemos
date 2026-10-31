// How this works: Constellations in 3D (Astro 2203, intro-constellations-3d), in The Sky and the Celestial Sphere's Real distances
// switch. Its first reading: the Big Dipper (Ursa Major) seen from Earth, then from the side, one row per star. By hand, for Dubhe:
// M = V − 5 log10(d / 32.6 ly) = 1.79 − 5 log10(123 / 32.6) = −1.09.
require('./lib.cjs')({ demo: 'celestial-sphere', query: '?con=UMa', title: 'Constellations in 3D' }, async (r) => {
  const { state, W, p } = r;
  state.caption = 'Sample reading: how far away are the seven stars of the Big Dipper?';
  await r.secs(2.6);

  state.caption = 'Switch the left picture to Real distances and choose Ursa Major';
  await r.click('#depthSeg [data-depth=dist]');
  await r.secs(1.2);
  const cv = await r.box('#paneOut');
  state.zoom = [cv[0], cv[1], cv[2], cv[2] * 9 / 16];
  state.caption = 'From Earth the figure looks as it does in the sky';
  await r.secs(2.4);

  state.caption = 'Look from the side: the Sun on the left, each star at its distance';
  await r.click('#depthLook [data-look=side]');
  await r.secs(3.2);
  state.caption = 'Five stars sit near 80 ly; Alkaid is at 104 ly and Dubhe at 123 ly';
  await r.secs(2.8);
  state.zoom = null;

  state.caption = 'The table beside the picture lists V, the distance and the absolute magnitude M';
  await r.scrollRail('#depthTab');
  const tb = await r.box('#depthTab');
  state.zoom = [W - 600, tb[1] - 100, 600, 337.5];
  state.arrow = { rect: tb };
  await r.secs(2.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record a reading: one row for each star of the figure';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  await r.scrollRail('.vd-readings table.rows tbody tr:nth-child(4)');
  const rt = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, Math.min(rt[1] - 40, 720 - 337.5), 600, 337.5]; state.capTop = true;
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Do the same for Orion and Cassiopeia, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
  r.check.rows = await p.evaluate(() => window.vdRows().length);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
