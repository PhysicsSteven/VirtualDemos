// How this works: Temperature and Heat (Worksheet 3, Thermal Expansion). The first reading of the data table: the aluminum rod
// (1.000 m at 20.0 °C, α = 25 × 10⁻⁶ /°C) with the bath at 0 °C. Expected: ΔL = αL₀ΔT = 25 × 10⁻⁶ × 1000 mm × (0 − 20) = −0.500 mm.
// Records temperature.html.
require('./lib.cjs')({ demo: 'temperature', title: 'Thermal Expansion' }, async (r) => {
  const { state, p, W } = r;
  const scrollWin = async (y, s = 0.5) => { const y0 = await p.evaluate(() => scrollY), n = Math.max(1, Math.round(s * r.FPS));
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  /* the sidebar runs below the window: scroll it to its end and the page down until the readings table shows */
  const toReadings = async () => { await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop = rl.scrollHeight; });
    const tb = await r.box('.vd-readings table'); await scrollWin(Math.max(0, await p.evaluate(() => scrollY) + tb[1] + tb[3] - 620), 0.5); };

  state.caption = 'Sample reading: the aluminum rod\'s dial gauge with the bath at 0 °C';
  await r.secs(3.0);

  state.caption = 'Choose Rod in a water bath: an aluminum rod 1.000 m long at 20.0 °C';
  await r.click('#presets [data-p="rod"]');
  state.arrow = { rect: await r.box('#presets [data-p="rod"]') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Set the bath: drag the Bath temperature slider down to 0.0 °C';
  const card = await r.box('#cardEx');
  await scrollWin(Math.max(0, card[1] + card[3] - 600 + await p.evaluate(() => scrollY)), 0.6);
  const sl = await r.box('#sTX'), v = +(await p.evaluate(() => document.querySelector('#sTX').value));
  state.zoom = [sl[0] - 40, Math.min(r.H - 360, sl[1] - 120), 640, 360];
  state.capTop = true;   /* the slider sits at the bottom of the page */
  await r.moveTo(sl[0] + 8 + (sl[2] - 16) * v / 100, sl[1] + sl[3] / 2, 0.8);
  r.check.T = await r.dragUntil(-2, 0, '#oTX', '0.0 °C');
  state.arrow = { rect: await r.box('#oTX') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null; state.capTop = false;
  await scrollWin(0, 0.6);

  state.caption = 'Read the dial gauge: the rod is now shorter than at 20 °C';
  const can = await r.box('#can'), cw = can[2], ch = can[3];
  const x1 = cw * 0.78, ry = ch * 0.8 - ch * 0.22, gx = Math.min(cw - 128, x1 + 18);
  state.zoom = [can[0] + cw - 676, can[1], 676, 380.25];
  state.arrow = { rect: [can[0] + gx - 8, can[1] + ry - 80 - 8, 126, 60] };
  await r.secs(2.0);
  r.check.dL = await r.text('#out div:nth-child(1) dd');
  r.check.len = await r.text('#out div:nth-child(4) dd');
  state.zoom = null;
  state.arrow = { rect: await r.box('#out div:nth-child(1)') };
  await r.secs(1.4);
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

  state.caption = 'Repeat about every 10 °C up to 100 °C, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
});
