// How this works: Temperature and Heat (Worksheet 2, Gas Thermometer and Absolute Zero). The first reading of the data table: 20 mmol
// in the 1.000 L bulb, settled in boiling liquid nitrogen (77.355 K). Expected: P = nRT/V = 0.020 × 8.314462618 × 77.355 / 0.001000
// = 12 863 Pa = 12.86 kPa. Records temperature.html.
require('./lib.cjs')({ demo: 'temperature', title: 'Gas Thermometer and Absolute Zero' }, async (r) => {
  const { state, p, W } = r;
  const scrollWin = async (y, s = 0.5) => { const y0 = await p.evaluate(() => scrollY), n = Math.max(1, Math.round(s * r.FPS));
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  /* the sidebar runs below the window: scroll it to its end and the page down until the readings table shows */
  const toReadings = async () => { await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop = rl.scrollHeight; });
    const tb = await r.box('.vd-readings table'); await scrollWin(Math.max(0, await p.evaluate(() => scrollY) + tb[1] + tb[3] - 620), 0.5); };

  state.caption = 'Sample reading: the gas thermometer in boiling liquid nitrogen, with 20 mmol of gas';
  await r.secs(3.0);

  state.caption = 'Choose the Gas thermometer setup: a 1.000 L bulb holding 20 mmol of gas';
  await r.click('#presets [data-p="gas"]');
  state.arrow = { rect: await r.box('#presets [data-p="gas"]') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Speed up the clock: press 60×';
  await r.click('#speedSeg [data-s="60"]');
  state.arrow = { rect: await r.box('#speedSeg') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Put the bulb in the bath: press Liquid nitrogen. The clock starts';
  state.capTop = true;   /* the bath buttons sit at the bottom of the page */
  const card = await r.box('#cardTh');
  await scrollWin(Math.max(0, card[1] + card[3] - 690 + await p.evaluate(() => scrollY)), 0.6);
  r.check.n = await r.text('#oN');
  await r.click('#bathSeg [data-b="ln2"]');
  state.arrow = { rect: await r.box('#bathSeg [data-b="ln2"]') };
  await r.secs(0.9);
  state.arrow = null; state.capTop = false;
  await scrollWin(0, 0.6);

  state.caption = 'Wait for the pressure gauge to settle';
  const can = await r.box('#can'), cw = can[2], ch = can[3];
  const gw = Math.min(150, cw * 0.22), gauge = [can[0] + cw * 0.74 - gw / 2 - 10, can[1] + ch * 0.18 - 10, gw + 20, 34 + 34];
  state.zoom = [can[0] + cw * 0.52 - 338, can[1], 676, 380.25];
  await r.moveTo(can[0] + cw * 0.52, can[1] + ch * 0.7, 0.5);
  state.arrow = { rect: gauge };
  await r.secs(2.6);
  r.check.P = await r.text('#out div:nth-child(1) dd');
  r.check.bath = await r.text('#out div:nth-child(3) dd');
  r.check.tBath = await r.text('#out div:nth-child(5) dd');
  r.check.Tgas = await r.text('#out div:nth-child(6) dd');
  state.zoom = null;
  state.arrow = { rect: await r.box('#out div:nth-child(1)') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Record the settled reading. It goes into the table';
  await toReadings();
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.min(r.H - 337.5, tb[1] + tb[3] / 2 - 140), 600, 337.5];   /* the row clear of the caption */
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map(td => td.textContent));
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat in each of the five known baths, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
});
