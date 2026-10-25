// How this works: Sound Intensity and Decibels. Part 1's first reading: one 10 mW source, no background, r = 0.5 m.
// Expected: I = P/(4πr²) = 0.010/(4π × 0.25) = 3.183 × 10⁻³ W/m², β = 10 log(I/10⁻¹² W/m²) = 95.03 dB, so the meter reads 95.0 dB.
require('./lib.cjs')({ demo: 'sound-intensity', title: 'Sound Intensity and Decibels' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');
  const meter = () => r.findDrag('#can', '#rack');

  state.caption = 'Sample reading: one 10 mW source, no background, the meter 0.5 m away';
  await r.secs(3.0);

  state.caption = 'Choose the Inverse square law setup: one 10 mW source, no background';
  await r.click('#presets [data-p="inverse"]');
  state.arrow = { rect: await r.box('#oPA') };
  r.check.P = await r.text('#oPA');
  r.check.bg = await r.text('#bgSeg [aria-pressed="true"]');
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Set the distance: drag the meter along the tape toward the speaker, to 0.5 m';
  state.zoom = [can[0], can[1] + 110, 600, 337.5];
  await r.moveTo(...(await meter()), 0.9);
  r.check.r = await r.dragUntil(-1, 0, '#oR', '0.5 m');
  state.arrow = { rect: await r.box('#oR') };
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Read the level on the meter';
  await r.scrollRail('#out');
  r.check.beta = await r.text('#out dd');
  state.arrow = { rect: await r.box('#out div') };
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

  state.caption = 'Repeat at 1, 2, 4, 8, 16 and 32 m, then send the table to the worksheet';
  const ex = await r.box('#exportWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
});
