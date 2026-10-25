// How this works: Room Acoustics (Worksheet 1, Reverberation Time). Part 1's first reading: the bare 9 m × 7 m × 3 m room, painted
// brick walls and a concrete floor, 125 Hz band. Expected: V = 189.0 m³, S = 222.0 m², A = ΣSα = 159 × 0.01 + 63 × 0.01 = 2.22 m²,
// Sabine T = 0.161 × 189/2.22 = 13.71 s; the demo measures T20 from its ray run (13.69 s, within its 1 to 3 % scatter).
require('./lib.cjs')({ demo: 'room-acoustics', title: 'Reverberation Time' }, async (r) => {
  const { state, p, W } = r;

  state.caption = 'Sample reading: the bare 9 m × 7 m × 3 m room, in the 125 Hz band';
  await r.secs(3.0);

  state.caption = 'Choose the Bare room setup: hard walls and a concrete floor';
  await r.click('#presets [data-p="bare"]');
  state.arrow = { rect: await r.box('#rack') };
  r.check.room = [await r.text('#oL'), await r.text('#oW'), await r.text('#oH'), await r.text('#wallSeg [aria-pressed="true"]'), await r.text('#floorSeg [aria-pressed="true"]')].join(' ');
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Choose the 125 Hz octave band';
  await r.click('#bandSeg button:first-child');
  r.check.band = await r.text('#bandSeg [aria-pressed="true"]');
  await r.secs(1.0);

  state.caption = 'Clap. The decay of the sound at the microphone gives T';
  await r.click('#go');
  await p.evaluate(() => window.scrollTo(0, 80)); await r.tick(2);
  const can = await r.box('#can');
  await r.moveTo(can[0] + can[2] - 120, can[1] + 60, 0.6);
  await r.secs(1.6);
  state.zoom = [can[0] + can[2] - 640, can[1] + can[3] - 360, 640, 360];   /* the decay curve and its T */
  await r.secs(2.4);
  state.zoom = null;
  await r.scrollRail('#out');
  const tRow = '#out div:nth-child(3)';
  r.check.T = await r.text(tRow);
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box(tRow) };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Clap and record in each of the other five bands, then send the table to the worksheet';
  const ex = await r.box('#exportWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
});
