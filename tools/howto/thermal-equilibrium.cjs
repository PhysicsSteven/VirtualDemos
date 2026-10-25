// How this works: Temperature and Heat (Worksheet 1, Thermal Equilibrium). The first reading of the data table: the Hot metal, cool
// water setup at t = 0 s, T_A = 90.00 °C and T_B = 20.00 °C. Expected: the starting temperatures as set (0.50 kg aluminum at 90 °C,
// 0.25 kg water at 20 °C); then both head for T_f = (450 × 90 + 1046.5 × 20)/1496.5 = 41.05 °C. Records temperature.html.
require('./lib.cjs')({ demo: 'temperature', title: 'Thermal Equilibrium' }, async (r) => {
  const { state, p, W } = r;
  const scrollWin = async (y, s = 0.5) => { const y0 = await p.evaluate(() => scrollY), n = Math.max(1, Math.round(s * r.FPS));
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  /* the sidebar runs below the window: scroll it to its end and the page down until the readings table shows */
  const toReadings = async () => { await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop = rl.scrollHeight; });
    const tb = await r.box('.vd-readings table'); await scrollWin(Math.max(0, await p.evaluate(() => scrollY) + tb[1] + tb[3] - 620), 0.5); };
  const can = await r.box('#can'), cw = can[2], ch = can[3];
  /* the two thermometer displays, where drawEq puts them */
  const bx0 = cw * 0.08, bx1 = cw * 0.92, ly = ch * 0.2 - 46;
  const lcd = (cx) => [can[0] + cx - 56, can[1] + ly - 8, 112, 60];
  const lcdA = lcd(bx0 + 14 + (bx1 - bx0) * 0.17), lcdB = lcd(bx1 - 14 - (bx1 - bx0) * 0.17);

  state.caption = 'Sample reading: both thermometers at the start of the Hot metal, cool water run';
  await r.secs(3.0);

  state.caption = 'The opening setup is Hot metal, cool water: aluminum at 90 °C, water at 20 °C';
  state.arrow = { rect: await r.box('#presets [data-p="hotmetal"]') };
  await r.secs(1.6);
  state.zoom = [can[0], can[1] - 60, 944, 531];   /* the whole picture: both thermometers */
  state.arrow = { rect: lcdA }; await r.secs(1.5);
  state.arrow = { rect: lcdB }; await r.secs(1.5);
  r.check.TA = await r.text('#out div:nth-child(1) dd'); r.check.TB = await r.text('#out div:nth-child(2) dd');
  r.check.Tf = await r.text('#out div:nth-child(8) dd');
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the starting reading at t = 0 s. It goes into the table';
  await toReadings();
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.min(r.H - 337.5, tb[1] + tb[3] / 2 - 140), 600, 337.5];   /* the row clear of the caption */
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map(td => td.textContent));
  state.arrow = null; state.zoom = null;

  state.caption = 'Press Start. Heat flows through the bar and the two temperatures draw together';
  await scrollWin(Math.max(0, await p.evaluate(() => scrollY + document.querySelector('#stage').getBoundingClientRect().top - 8)), 0.5);   /* the strip with Start back in view */
  await r.click('#go');
  const c2 = await r.box('#can');   /* the page has scrolled down to the table */
  state.zoom = [c2[0], Math.max(0, c2[1] - 60), 944, 531];
  await r.moveTo(c2[0] + 470, c2[1] + 300, 0.6);
  await r.secs(3.0);
  state.zoom = null;
  await r.secs(0.6);

  state.caption = 'Record about every 20 s until they agree, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.tEnd = await r.text('#clock');
});
