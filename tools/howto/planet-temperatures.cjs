// How this works: Planet Temperatures and Habitable Zones. Part 1's first reading: Earth with no greenhouse at 0.5 AU from the Sun.
// Expected: S = 1361.2 × 4 = 5445 W/m², and with albedo 0.294 the temperature with no greenhouse is 255.1 × √2 = 360.8 K.
require('./lib.cjs')({ demo: 'planet-temperatures', title: 'Planet Temperatures and Habitable Zones' }, async (r) => {
  const { state, p } = r;
  /* the page and the sidebar both scroll at this size: bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const row = (n) => r.box(`#out > :nth-child(${n})`);

  state.caption = 'Sample reading: Earth with no greenhouse, half as far from the Sun as it is now';
  await r.secs(2.6);

  state.caption = 'Choose the Earth setup';
  await into('#presets');
  await r.click('[data-p="earth"]');
  await r.secs(0.6);

  state.caption = 'Switch the greenhouse off: untick Greenhouse on the card';
  await into('#chkGH');
  await r.click('#chkGH');
  r.check.gh = await p.evaluate(() => document.getElementById('chkGH').checked);
  await r.secs(0.8);

  state.caption = 'Set the distance: click the distance on the card and type 0.5';
  await into('#oD');
  await r.click('#oD'); await p.keyboard.press('Control+A'); await r.tick(2);
  for (const ch of '0.5') { await p.keyboard.type(ch); await r.tick(3); }
  await p.keyboard.press('Enter'); await r.tick(3);
  r.check.d = await r.text('#oD');
  state.arrow = { rect: await r.box('#oD') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'The planet moves in; read the starlight and the temperature with no greenhouse';
  await into('#out > :nth-child(3)');
  r.check.S = await r.text('#out > :nth-child(1)'); r.check.T = await r.text('#out > :nth-child(3)');
  const a = await row(1), b = await row(3);
  state.arrow = { rect: [a[0], a[1], a[2], b[1] + b[3] - a[1]] };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat at 0.75, 1, 1.5, 2 and 3 AU, then send the readings to the worksheet';
  await into('.vd-readings .vd-export');
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows ? window.vdRows()[0] : null));
});
