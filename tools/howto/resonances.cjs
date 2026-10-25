// How this works: Orbital Resonances. The worksheet's first reading: the 3:1 resonance setup run until the asteroid crosses Mars's orbit.
// Expected (curriculum/validation/test_resonances.cjs): stopped at 4,157 years with largest eccentricity 0.333, period ratio 2.997.
require('./lib.cjs')({ demo: 'resonances', title: 'Orbital Resonances' }, async (r) => {
  const { state, p } = r;
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };

  state.caption = 'Sample reading: an asteroid in the 3:1 resonance, going round three times for each turn of Jupiter';
  await r.secs(2.6);

  state.caption = 'Choose the 3:1 resonance setup';
  await into('#presets');
  await r.click('[data-p="r31"]');
  await r.secs(0.8);

  state.caption = 'Start the run';
  await into('#play');
  await r.click('#play');
  await r.secs(1.0);

  state.caption = 'Watch the yellow dots: Jupiter passes the asteroid at the same two places';
  state.arrow = { rect: await r.box('#scene') };
  for (let k = 0; k < 30 * 8 && await p.evaluate(() => window.__res.S.run); k++) await r.tick(1);
  state.arrow = null;
  r.check.stopped = await p.evaluate(() => !window.__res.S.run);
  await r.secs(0.4);

  state.caption = 'The orbit now reaches Mars\'s, so the run stops: read the year and the largest eccentricity';
  await into('#out');
  state.arrow = { rect: await r.box('#out') };
  r.check.out = await p.evaluate(() => document.getElementById('out').innerText.replace(/\n+/g, ' | '));
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat for the other setups in Part 1, then send the readings to the worksheet';
  await into('.vd-readings .vd-export');
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows ? window.vdRows()[0] : null));
});
