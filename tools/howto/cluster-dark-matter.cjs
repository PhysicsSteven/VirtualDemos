// How this works: Galaxy Clusters and Dark Matter (Zwicky's speeds). The first table's first reading:
// Add the unseen mass, 1.00 × 10¹⁵ M☉ inside 2,000 kpc, recorded before Play.
// Expected: 507 galaxies, σ = 1069.7 km/s, v = 1512.8 km/s, mass the speeds need 1.064e15 M☉.
require('./lib.cjs')({ demo: 'galaxy-clusters', title: 'Galaxy Clusters and Dark Matter', query: '?ws=cluster-dark-matter' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the speeds of the galaxies in a cluster of 10¹⁵ solar masses';
  await r.secs(2.2);

  state.caption = 'Under Setups, press Add the unseen mass: now all the mass pulls';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="zwicky"]'); await r.secs(1.4);

  state.caption = 'Blue galaxies come toward us, red ones move away';
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  const cv = await r.box('#can');
  state.arrow = { rect: [cv[0] + cv[2] * 0.15, cv[1] + cv[3] * 0.1, cv[2] * 0.7, cv[3] * 0.8] };
  await r.secs(2.4); state.arrow = null;

  state.caption = 'Read the spread σ and the mass the speeds need';
  await r.scrollRail('#out');
  const ob = await r.box('#out');
  state.zoom = [W - 600, ob[1] - 40, 600, 337.5];
  state.arrow = { rect: [ob[0] - 4, ob[1], ob[2] + 8, ob[3] * 0.55] };
  await r.secs(2.6); state.arrow = null; state.zoom = null;

  state.caption = 'Before you press Play, press Record reading. The row goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec'); await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4); state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));

  state.caption = 'Type each mass under Total mass inside 2,000 kpc and record, then press Export to worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
});
