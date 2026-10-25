// How this works: Temperature and Heat (Worksheet 5, Cooling by Convection and Radiation). The first reading of the data table: the
// polished aluminum sphere 5.0 cm across, starting at 80 °C, room at 20 °C, fan off, at t = 0 s: T = 80.00 °C (the starting
// temperature as set). Then the clock runs at 300× to show it cooling. Records temperature.html.
require('./lib.cjs')({ demo: 'temperature', title: 'Cooling by Convection and Radiation' }, async (r) => {
  const { state, p, W } = r;
  const scrollWin = async (y, s = 0.5) => { const y0 = await p.evaluate(() => scrollY), n = Math.max(1, Math.round(s * r.FPS));
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  /* the sidebar runs below the window: scroll it to its end and the page down until the readings table shows */
  const toReadings = async () => { await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop = rl.scrollHeight; });
    const tb = await r.box('.vd-readings table'); await scrollWin(Math.max(0, await p.evaluate(() => scrollY) + tb[1] + tb[3] - 620), 0.5); };

  state.caption = 'Sample reading: a polished aluminum sphere at the start of its cooling, t = 0 s';
  await r.secs(3.0);

  state.caption = 'Choose the Cooling view';
  await r.click('#viewSeg [data-v="cv"]');
  state.arrow = { rect: await r.box('#viewSeg [data-v="cv"]') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'It opens with the sample: aluminum, polished, 5.0 cm, 80 °C; room at 20 °C, fan off';
  state.capTop = true;   /* the sphere's card sits at the bottom of the page */
  const card = await r.box('#cardCv');
  await scrollWin(Math.max(0, card[1] + card[3] - 700 + await p.evaluate(() => scrollY)), 0.6);
  r.check.card = [await r.text('#oCvD'), await r.text('#oCvT0'), await r.text('#oCvU'), await r.text('#oCvTa'),
    await p.evaluate(() => document.querySelector('#selCvM').selectedOptions[0].textContent + ' | ' + document.querySelector('#selCvS').selectedOptions[0].textContent)].join(' | ');
  for (const s of ['#cardCv fieldset:nth-of-type(1)', '#cardCv fieldset:nth-of-type(2)']) { state.arrow = { rect: await r.box(s) }; await r.secs(1.6); }
  state.arrow = null; state.capTop = false;
  await scrollWin(0, 0.6);

  state.caption = 'Record the reading at t = 0 s. It goes into the table';
  r.check.T0 = await r.text('#out div:nth-child(1) dd');
  await toReadings();
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.min(r.H - 337.5, tb[1] + tb[3] / 2 - 140), 600, 337.5];   /* the row clear of the caption */
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map(td => td.textContent));
  state.arrow = null; state.zoom = null;

  state.caption = 'Press 300× and Start. The thermocouple shows the sphere cooling';
  await scrollWin(Math.max(0, await p.evaluate(() => scrollY + document.querySelector('#stage').getBoundingClientRect().top - 8)), 0.5);   /* the strip with Start back in view */
  await r.click('#speedSeg [data-s="300"]');
  await r.click('#go');
  const can = await r.box('#can');
  state.zoom = [can[0] + can[2] - 676, can[1], 676, 380.25];
  await r.moveTo(can[0] + 300, can[1] + 320, 0.5);
  await r.secs(2.6);
  state.zoom = null;
  r.check.tRun = await r.text('#clock');

  state.caption = 'Record every 300 s up to 3600 s, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
});
