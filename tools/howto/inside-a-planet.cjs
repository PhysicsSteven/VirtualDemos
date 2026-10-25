// How this works: Inside a Planet. Part 1's first reading: Mars with no core (core radius 0), its densities kept.
// Expected: with no core the planet is all mantle, so the mean density is the mantle's, 3440 kg/m³, and C/MR² = 0.4.
require('./lib.cjs')({ demo: 'inside-a-planet', title: 'Inside a Planet' }, async (r) => {
  const { state, p } = r;
  /* the page and the sidebar both scroll at this size: bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const row = (n) => r.box(`#out > :nth-child(${n})`);

  state.caption = 'Sample reading: Mars with no core at all';
  await r.secs(2.6);

  state.caption = 'Choose the Mars setup';
  await into('#presets');
  await r.click('[data-p="mars2"]');
  await r.secs(0.8);

  state.caption = 'Set the core radius: click the radius on the card and type 0';
  await into('#oCore');
  await r.click('#oCore'); await p.keyboard.press('Control+A'); await r.tick(2);
  await p.keyboard.type('0'); await r.tick(3);
  await p.keyboard.press('Enter'); await r.tick(3);
  r.check.rc = await r.text('#oCore');
  state.arrow = { rect: await r.box('#oCore') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'The core is gone: read the model mean density and C/MR²';
  await into('#out > :nth-child(3)');
  r.check.rho = await r.text('#out > :nth-child(1)'); r.check.k = await r.text('#out > :nth-child(3)');
  const a = await row(1), b = await row(4);
  state.arrow = { rect: [a[0], a[1], b[0] + b[2] - a[0], b[1] + b[3] - a[1]] };
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat at 500, 1000, 1500, 1830 and 2200 km, then send the readings to the worksheet';
  await into('.vd-readings .vd-export');
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows ? window.vdRows()[0] : null));
});
