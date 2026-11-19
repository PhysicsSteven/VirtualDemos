// How this works: Hearing: Decibels, Phons and the Cochlea. Table 1's first readings: the 1 kHz tone, then 2 kHz.
// Expected: Greenwood's map, 35 mm × (1 − log10(f/165.4 + 0.88)/2.1) from the base: 21.0 mm at 1 kHz and 16.4 mm at 2 kHz.
require('./lib.cjs')({ demo: 'hearing', title: 'Hearing and the Ear' }, async (r) => {
  const { state, W } = r;
  /* the Readouts row whose label is dt (nth-child, 1 based) */
  const row = (dt) => r.p.evaluate((dt) => 1 + [...document.querySelectorAll('#out > div')].findIndex((d) => d.querySelector('dt').textContent.trim() === dt), dt);
  const place = async () => `#out > div:nth-child(${await row('Place of the peak, from the base')})`;

  state.caption = 'Sample readings: where a 1 kHz and a 2 kHz tone peak on the basilar membrane';
  await r.secs(2.6);

  state.caption = 'Choose the 1 kHz tone setup and press Play: the wave grows toward its peak and dies out';
  await r.click('#presets [data-p="k1"]');
  await r.click('#play');
  const can = await r.box('#can');
  state.zoom = [can[0], can[1] + can[3] * 0.4, Math.min(can[2], 1067), Math.min(can[2], 1067) * 9 / 16];
  await r.secs(3.0);
  state.zoom = null;

  state.caption = 'Read the place of the peak, from the base';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box(await place()) };
  r.check.place1 = await r.text((await place()) + ' dd');
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Set Frequency f to 2 kHz: drag the slider, then the arrow keys';
  await r.slide('#sF', '#oF', 2, 0.004, 0.2);
  /* the last steps with the arrow keys on the focused slider (the drag lands within about 10 %) */
  await r.p.focus('#sF');
  for (let i = 0; i < 40; i++) { const t = await r.text('#oF'); if (t === '2 kHz') break; await r.p.keyboard.press(parseFloat(t) * (/kHz/.test(t) ? 1000 : 1) > 2000 ? 'ArrowLeft' : 'ArrowRight'); await r.tick(2); }
  r.check.f2 = await r.text('#oF');
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box(await place()) };
  r.check.place2 = await r.text((await place()) + ' dd');
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Record it, then 4 kHz, 8 kHz and the 16 kHz setup; then send the table to the worksheet';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr')].map((tr) => [...tr.cells].map((td) => td.textContent).join(' | ')));
});
