// How this works: States of Matter, Beaker view (Worksheet 1, Heating Curve and Latent Heat). The first reading of the Ice to steam
// run: 200 g of ice at −20 °C on a 500 W hot plate, at t = 0: 0 s, −20.0 °C, 200.0 g. Then the run starts at 5×; while the ice
// warms, dT/dt = P/(mc) = 500/(0.200 × 2090) = 1.196 °C/s, so it reaches 0 °C at 20/1.196 = 16.7 s.
require('./lib.cjs')({ demo: 'states-of-matter', title: 'Heating Curve and Latent Heat' }, async (r) => {
  const { state, p, W } = r;
  await p.addStyleTag({ content: '.vdt-btn{visibility:hidden!important}' });   /* the measuring tools never appear */
  const can = await r.box('#can');
  /* the rail is taller than the window, so the page scrolls down to reach the table and back up for the picture */
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  /* the apparatus drawn on the canvas, at 1280 × 720: the timer, the open beaker's thermometer and its balance */
  const timer = [can[0] + 14, can[1] + 14, 110, 40], thermo = [can[0] + 361, can[1] + 56, 98, 36], bal = [can[0] + 244, can[1] + 306, 116, 34];

  state.caption = 'Sample reading: 200 g of ice at −20 °C on a 500 W hot plate, before it is heated';
  await r.secs(3.0);

  state.caption = 'Choose the Ice to steam setup. It opens the Beaker view';
  await r.click('#presets [data-p="ice"]');
  state.arrow = { rect: await r.box('#presets [data-p="ice"]') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Read the timer, the thermometer and the balance: 0 s, −20.0 °C, 200.0 g';
  await r.moveTo(can[0] + 560, can[1] + 200, 0.5);
  state.zoom = [can[0], can[1] - 10, 720, 405];
  for (const b of [timer, thermo, bal]) { state.arrow = { rect: b }; await r.secs(1.1); }
  r.check.out = (await p.evaluate(() => document.querySelector('#out').innerText)).replace(/\n/g, ' | ');
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await pageTo(1000);
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Pick the 5× clock and Start. The ice warms at a steady rate';
  await pageTo(0);
  await r.click('#speedSeg [data-s="1"]');
  await r.click('#go');
  await r.moveTo(can[0] + 560, can[1] + 200, 0.5);
  state.zoom = [can[0], can[1] - 10, 720, 405];
  await r.secs(3.0);
  r.check.later = (await p.evaluate(() => document.querySelector('#out').innerText)).replace(/\n/g, ' | ');
  state.zoom = null;

  state.caption = 'Capture about every 5 s, then send each stage to the worksheet before you clear';
  await pageTo(1000);
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
});
