// How this works: Comet Tails, Comet Orbits and Meteor Showers (Comets and Meteor Showers, Tails). The first table's fifth reading:
// Halley 40 days after perihelion: r = 1.013 au, 41.2 km/s, heading away from the Sun, ion tail 4.8° from straight out, 54° from
// the way it moves (the tail goes out ahead). Expected: angle 54°, heading away from the Sun.
require('./lib.cjs')({ demo: 'comets', title: 'Comets and Meteor Showers', query: '?ws=comet-tails' }, async (r) => {
  const { state, p, W } = r;
  const rd = (label) => p.evaluate((l) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(l)) { const q = d.getBoundingClientRect(); return { t: d.querySelector('dd').textContent, b: [q.x, q.y, q.width, q.height] }; } return null; }, label);
  await p.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => x.textContent.trim() === '10 days'); b.id = 'hwTen'; });
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: Halley 40 days after it rounds the Sun';
  await r.secs(2.4);

  state.caption = 'Press the setup Halley: which way do the tails point?';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="halley"]');
  await r.secs(1.6);

  state.caption = 'Tick Follow the comet to keep it in view';
  await r.click('#chkFollow'); await r.secs(0.8);

  state.caption = 'Press 10 days eight times: from 40 days before perihelion to 40 days after';
  await r.click('#hwTen'); await r.tick(5);
  for (let k = 1; k < 8; k++) { await p.evaluate(() => document.getElementById('hwTen').click()); await r.tick(5); }
  await r.secs(1.0);

  state.caption = 'Heading out, the ion tail points away from the Sun, ahead of the comet';
  const cv = await r.box('#can');
  state.arrow = { rect: [cv[0] + cv[2] * 0.15, cv[1] + cv[3] * 0.25, cv[2] * 0.6, cv[3] * 0.6] };
  await r.secs(2.6); state.arrow = null;

  state.caption = 'Read Heading and Angle between ion tail and motion';
  await r.scrollRail('#out');
  const h = await rd('Heading'), a = await rd('Angle between ion tail and motion');
  r.check.heading = h.t; r.check.angle = a.t; r.check.r = (await rd('Distance from the Sun')).t;
  state.zoom = [W - 600, a.b[1] - 160, 600, 337.5];
  state.arrow = { rect: [Math.min(h.b[0], a.b[0]) - 6, h.b[1] - 6, 300, a.b[1] + a.b[3] - h.b[1] + 12] };
  await r.secs(2.8); state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(1.8); state.arrow = null; state.zoom = null;

  state.caption = 'Record every 20 days, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
