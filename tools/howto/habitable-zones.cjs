// How this works: Habitable Zones and the Drake Equation (Life in the Universe, Habitable zones). The first table's second reading:
// a star of 2 solar masses: L = 16, zone 3.8 to 5.6 au, lifetime 1.25 billion years. Expected: lifetime 1.25 billion years.
require('./lib.cjs')({ demo: 'life-in-the-universe', title: 'Life in the Universe', query: '?ws=habitable-zones' }, async (r) => {
  const { state, p, W } = r;
  const rd = (label) => p.evaluate((l) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(l)) { const q = d.getBoundingClientRect(); return { t: d.querySelector('dd').textContent, b: [q.x, q.y, q.width, q.height] }; } return null; }, label);
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the habitable zone and life of a star of 2 solar masses';
  await r.secs(2.4);

  state.caption = 'Press Habitable zones, then The Sun\'s habitable zone over time';
  await r.click('#modeSeg [data-mode="zone"]'); await r.tick(10);
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="sunzone"]'); await r.secs(1.0);

  state.caption = 'Untick The Sun brightens as it ages, then choose A star of 2 solar masses';
  await r.click('#chkBright'); await r.tick(10);
  const sb = await r.box('#selStar');
  await r.moveTo(sb[0] + sb[2] / 2, sb[1] + sb[3] / 2, 0.6);
  await p.selectOption('#selStar', 'm2'); state.arrow = { rect: sb }; await r.secs(1.4); state.arrow = null;

  state.caption = 'Its zone sits 4 times farther out, but its life ends before the 4 billion year mark';
  const pl = await r.box('#plot');
  state.arrow = { rect: pl }; await r.secs(2.8); state.arrow = null;

  state.caption = 'Read Luminosity L, Habitable zone and Lifetime';
  await r.scrollRail('#out');
  const l = await rd('Luminosity L'), z = await rd('Habitable zone'), t = await rd('Lifetime');
  r.check.L = l.t; r.check.zone = z.t; r.check.life = t.t;
  state.zoom = [W - 600, l.b[1] - 120, 600, 337.5];
  state.arrow = { rect: [z.b[0] - 6, l.b[1] - 6, 300, t.b[1] + t.b[3] - l.b[1] + 12] };
  await r.secs(2.8); state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(1.8); state.arrow = null; state.zoom = null;

  state.caption = 'Record each star, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
