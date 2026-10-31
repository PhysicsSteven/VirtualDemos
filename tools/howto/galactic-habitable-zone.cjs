// How this works: The Galactic Habitable Zone (Planet Temperatures, Galaxy view). The first table's first reading: a star born with
// the Sun (4.57 Gyr ago) 2 kpc from the center: [Fe/H] +0.372, P_metals 1, P_safe 0.8336, dose 10.85, P_SN 0.0005, P_time 0.7157, P 0.0003.
require('./lib.cjs')({ demo: 'planet-temperatures', title: 'The Galactic Habitable Zone', query: '?ws=galactic-habitable-zone' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: a star born with the Sun, 2 kpc from the Galaxy’s center';
  await r.secs(2.6);

  state.caption = 'Choose the Galaxy view, then The Sun';
  state.arrow = { rect: await r.box('#scaleSeg') };
  await r.secs(1.2); state.arrow = null;
  await r.scrollRail('#galPresets');
  await r.click('#galPresets [data-g=sun]');
  await r.secs(1.2);

  state.caption = 'Set the distance from the center to 2.0 kpc';
  const s = await r.box('#gR');
  state.zoom = [W - 640, s[1] - 160, 640, 360];
  r.check.R = await r.slide('#gR', '#oGR', 2.0, 0.05);
  await r.secs(1.0);
  state.zoom = null;
  state.arrow = { rect: await r.box('#gal') };
  await r.secs(1.6); state.arrow = null;

  state.caption = 'Read the four chances and their product P';
  await r.scrollRail('#out');
  const o = await r.box('#out');
  r.check.out = (await r.text('#out')).slice(0, 300);
  state.zoom = [W - 620, o[1] - 60, 620, 348.75];
  state.arrow = { rect: [o[0] - 4, o[1] - 4, o[2] + 8, Math.min(o[3], 230)] };
  await r.secs(2.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at the other distances, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
