// How this works: Circuits (Worksheet 3, RLC Oscillations). LC oscillation (C1 = 10 µF charged to 10 V, L1 = 100 mH), read with the
// time cursor a quarter cycle in, at t = 1.56 ms (the key's second row). Expected: ω = 1/√(LC) = 1000 rad/s, T = 2π/ω = 6.283 ms,
// V_C = 10 cos(1.56) = 0.108 V, I_L = 10 √(C/L) sin(1.56) = 0.1 × 0.99994 = 0.09999 A, U_C = ½CV² = 5.83 × 10⁻⁸ J,
// U_L = ½LI² = 0.4999 mJ (the 0.5 mJ the capacitor started with).
// The Tools button (stopwatch) is kept out of the picture: hidden with visibility, so nothing else moves.
require('./lib.cjs')({ demo: 'circuits', title: 'RLC Oscillations', query: '#transients' }, async (r) => {
  const { state, p, W } = r;
  await p.addStyleTag({ content: '.vdt-btn{visibility:hidden !important}' });

  state.caption = 'Sample reading: an LC circuit a quarter cycle in, at t = 1.56 ms';
  await r.secs(3.0);

  state.caption = 'Hide the predictions: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#blind) > summary');
  await r.click('details.fold:has(#blind) > summary');
  await r.tick(4);
  await r.click('#blind');
  r.check.blind = await p.evaluate(() => __circ.blind);
  await r.secs(0.6);

  state.caption = 'Choose LC oscillation: C1 = 10 µF starts at 10 V, L1 = 100 mH';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="lc"]');
  r.check.parts = await p.evaluate(() => ['C1', 'L1'].map((n) => { const e = __circ.byName(n); return n + ' ' + (e.C ?? e.L); }).join(', '));
  state.arrow = { rect: await r.box('#can') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Let it oscillate, then Pause';
  await r.secs(1.6);
  await r.click('#play');
  r.check.paused = await p.evaluate(() => [__circ.running, __circ.run.t]);
  await r.secs(0.4);

  state.caption = 'Drag the time cursor to t = 1.56 ms, just before the capacitor voltage first crosses zero';
  await p.evaluate(() => window.scrollTo(0, 400)); await r.tick(2);
  const sc = await r.box('#sCan');
  state.zoom = [sc[0], sc[1] - 70, 520, 292.5];
  await r.moveTo(sc[0] + 70, sc[1] + sc[3] * 0.45, 0.8);
  r.check.t = await r.dragUntil(0.5, 0, '#curRead dd', '1.56 ms');
  r.check.cursor = (await r.text('#curRead')).replace(/\s+/g, ' ');
  await r.secs(1.8);
  state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#captureT');
  await r.click('#captureT');
  await r.tick(4);
  const tb = await r.box('#tblT');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tblT tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#tblT tbody tr td')].map((td) => (td.querySelector('input') ? td.querySelector('input').value : td.textContent)));
  r.check.csv = (await p.evaluate(() => __circ.timeCSV())).trim().split('\n').slice(-2);

  state.caption = 'Read at the half and full cycle too, then send the table to the worksheet';
  const ex = await r.box('#expT');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
