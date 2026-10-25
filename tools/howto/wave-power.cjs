// How this works: Energy and Power of a Wave. Part 1's first reading: String B (μ = 1.20 g/m), 1.20 m, 200 g hanging, matched
// absorber, 20 Hz, A = 0.50 mm. Expected: T = 0.200 × 9.81 = 1.962 N, P = ½ √(Tμ) ω² A² = ½ × 0.048522 × (40π)² × (0.50 mm)²
// = 0.09578 mW.
require('./lib.cjs')({ demo: 'wave-power', title: 'Energy and Power of a Wave' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');

  state.caption = 'Sample reading: the power on String B at 20 Hz and 0.50 mm amplitude';
  await r.secs(3.0);

  state.caption = 'The opening setup is Part 1: String B, matched absorber, 200 g hanging';
  state.zoom = [can[0], can[1] + 20, 800, 450];
  for (const s of ['#strings [data-s="B"]', '#absorber [data-a="matched"]', '#massList']) { state.arrow = { rect: await r.box(s) }; await r.secs(1.1); }
  state.caption = 'The function generator is at 20.0 Hz and 0.50 mm';
  for (const s of ['#oF', '#oA']) { state.arrow = { rect: await r.box(s) }; await r.secs(1.1); }
  state.arrow = null; state.zoom = null;

  state.caption = 'Start the vibrator. The power meter reads the power the absorber takes';
  await r.click('#play');
  await r.moveTo(can[0] + 640, can[1] + 230, 0.6);
  state.zoom = [can[0] + can[2] - 560, can[1] + 40, 560, 315];   /* the string's far end, the absorber and its power meter */
  await r.secs(2.4);
  r.check.P = await r.text('#out div:nth-child(1)');
  r.check.T = await r.text('#out div:nth-child(3)');
  state.zoom = null;
  state.arrow = { rect: await r.box('#out div:nth-child(1)') };
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

  state.caption = 'Repeat at each amplitude, then send the table to the worksheet';
  const ex = await r.box('#exportWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
});
