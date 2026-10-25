// How this works: Room Acoustics (Worksheet 2, Anechoic Chamber). Part 1's first reading: the chamber with 0.30 m wedges, 500 Hz,
// r = 0.50 m. Expected: a 10 mW source in a free field gives I = P/(4πr²) = 3.183 × 10⁻³ W/m², p_rms = √(Iρc) with ρc = 1.204 × 343.2,
// L = 20 log(p_rms/20 μPa) = 95.17 dB; the wedges (cutoff c/4d = 286 Hz, R = 0.1 (286/500)² at 500 Hz) add a trace of reflected sound.
require('./lib.cjs')({ demo: 'room-acoustics', title: 'Anechoic Chamber' }, async (r) => {
  const { state, p, W } = r;

  state.caption = 'Sample reading: the anechoic chamber at 500 Hz, the microphone 0.50 m from the speaker';
  await r.secs(3.0);

  state.caption = 'Choose the Anechoic chamber setup: 0.30 m wedges, Level against distance';
  await r.click('#presets [data-p="anechoic"]');
  r.check.setup = [await r.text('#oD'), await r.text('#modeSeg [aria-pressed="true"]'), await r.text('#bandSeg [aria-pressed="true"]')].join(' | ');
  state.arrow = { rect: await r.box('#modeSeg') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Set the distance: drag the microphone slider to 0.50 m';
  const rack = await r.box('#rack');
  state.zoom = [rack[0], rack[1], 640, 360];
  const sl = await r.box('#sR'), v = +(await p.evaluate(() => document.querySelector('#sR').value));
  await r.moveTo(sl[0] + 8 + (sl[2] - 16) * (v - 0.5) / 14.5, sl[1] + sl[3] / 2, 0.8);
  r.check.r = await r.dragUntil(-1, 0, '#oR', '0.50 m');
  state.arrow = { rect: await r.box('#oR') };
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Read the level at the microphone';
  await r.scrollRail('#out');
  const lRow = '#out div:nth-child(3)';
  r.check.L = await r.text(lRow);
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box(lRow) };
  await r.secs(2.0);
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

  state.caption = 'Repeat at distances out to 5 m, then send the table to the worksheet';
  const ex = await r.box('#exportWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
});
