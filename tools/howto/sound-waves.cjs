// How this works: Sound Waves and the Speed of Sound. Part 2's first clap: air at 20 °C, clap 0.50 m from microphone A, d = 0.50 m.
// Expected: v = √(γRT/M) = √(1.4 × 8.314462618 × 293.15/0.0289647) = 343.2 m/s, d/v = 1.4567 ms = 69.92 samples at 48 kHz, so the
// timer shows 70 samples = 1.4583 ms (or 69 = 1.4375 ms once in about 13 claps, from the random phase of the sampling clock).
require('./lib.cjs')({ demo: 'sound-waves', title: 'Sound Waves and the Speed of Sound' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');
  const timer = '#out div:nth-child(7)';

  state.caption = 'Sample reading: time a clap in air at 20 °C, with the microphones 0.50 m apart';
  await r.secs(3.0);

  state.caption = 'Set up the bench: click Time a clap (air at 20 °C, clap 0.50 m from microphone A)';
  await r.click('#presets button[data-p="clap"]');
  state.arrow = { rect: await r.box('#presets button[data-p="clap"]') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Set the spacing: drag microphone B toward A until d = 0.50 m';
  state.zoom = [can[0], can[1] + 30, 640, 360];
  const mb = await r.box('#micB');
  await r.moveTo(mb[0] + mb[2] / 2, mb[1] + mb[3] / 2, 0.8);
  r.check.d = await r.dragUntil(-2, 0, '#oD', '0.50 m');
  state.arrow = { rect: await r.box('#oD') };
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Clap. The recorder starts when the sound reaches A and stops when it reaches B';
  await r.click('#clap');
  await r.moveTo(can[0] + 470, can[1] + 260, 0.5);
  state.zoom = [can[0], can[1], can[2], can[2] * 9 / 16];   /* the bench, the recorder and its two traces */
  for (let i = 0; i < 300 && /clap to time/.test(await r.text(timer)); i++) await r.tick();
  r.check.dt = await r.text(timer);
  r.check.samples = await r.text('#out div:nth-child(8)');
  r.check.v = await r.text('#out div:nth-child(3)');
  await r.secs(1.2);
  state.zoom = null;
  await r.scrollRail(timer);
  state.arrow = { rect: await r.box(timer) };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('#record');
  await r.click('#record');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at each spacing, then send the table to the worksheet';
  const ex = await r.box('#exportWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
});
