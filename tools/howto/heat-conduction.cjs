// How this works: Temperature and Heat (Worksheet 4, Heat Conduction Through Layers). The first reading of the data table: the House
// wall in winter (13 mm plasterboard, 90 mm glass wool, 100 mm brick; still air at 20 °C inside, a 24 km/h wind at −5 °C outside),
// probe at the inside surface, x = 0. Expected: ΣR = 0.12 + 0.013/0.16 + 0.090/0.042 + 0.100/0.84 + 0.030 = 2.4932 m²·°C/W,
// q = 25/2.4932 = 10.027 W/m² (P = 10.03 W through 1.00 m²), T(0) = 20 − 10.027 × 0.12 = 18.80 °C. Records temperature.html.
require('./lib.cjs')({ demo: 'temperature', title: 'Heat Conduction Through Layers' }, async (r) => {
  const { state, p, W } = r;
  const scrollWin = async (y, s = 0.5) => { const y0 = await p.evaluate(() => scrollY), n = Math.max(1, Math.round(s * r.FPS));
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  /* the sidebar runs below the window: scroll it to its end and the page down until the readings table shows */
  const toReadings = async () => { await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop = rl.scrollHeight; });
    const tb = await r.box('.vd-readings table'); await scrollWin(Math.max(0, await p.evaluate(() => scrollY) + tb[1] + tb[3] - 620), 0.5); };

  state.caption = 'Sample reading: the temperature at the inside surface of the house wall';
  await r.secs(3.0);

  state.caption = 'Choose House wall in winter: plasterboard, glass wool and brick, 20 °C inside, −5 °C outside';
  await r.click('#presets [data-p="wall"]');
  state.arrow = { rect: await r.box('#presets [data-p="wall"]') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Move the probe to the inside surface: drag it left in the wall to 0.0 mm';
  const can = await r.box('#can'), cw = can[2], ch = can[3];
  state.zoom = [can[0] + cw * 0.5 - 338, can[1], 676, 380.25];
  await r.moveTo(can[0] + cw * 0.5, can[1] + ch * 0.55, 0.8);
  r.check.x = await r.dragUntil(-3, 0, '#oX', '0.0 mm in');
  await r.secs(0.6);
  state.zoom = null;
  r.check.P = await r.text('#out div:nth-child(1) dd');
  r.check.probe = await r.text('#out div:nth-child(2) dd');
  r.check.Ts_in = await r.text('#out div:nth-child(3) dd');
  r.check.R = await r.text('#out div:nth-child(6) dd');

  state.caption = 'Read the probe and the heat flow';
  state.arrow = { rect: await r.box('#out div:nth-child(2)') };
  await r.secs(1.5);
  state.arrow = { rect: await r.box('#out div:nth-child(1)') };
  await r.secs(1.3);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await toReadings();
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.min(r.H - 337.5, tb[1] + tb[3] / 2 - 140), 600, 337.5];   /* the row clear of the caption */
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map(td => td.textContent));
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at each boundary and inside each layer, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
});
