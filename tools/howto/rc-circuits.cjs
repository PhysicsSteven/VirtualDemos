// How this works: Circuits (Worksheet 2, RC Time Constant). The first charging run: RC charging with ε = 10 V, C = 100 µF,
// R = 4.7 kΩ, read with the time cursor at t = 0.100 s. Expected: τ = RC = 0.470 s, V_C = 10 (1 − e^(−0.100/0.470)) = 1.917 V,
// I = (10 − V_C)/4700 = 1.720 mA, W = ε C V_C = 1.917 mJ, U_C = ½ C V_C² = 0.1838 mJ, heat = W − U_C = 1.733 mJ.
// The Tools button (stopwatch) is kept out of the picture: hidden with visibility, so nothing else moves.
require('./lib.cjs')({ demo: 'circuits', title: 'RC Time Constant', query: '#rc' }, async (r) => {
  const { state, p, W } = r;
  await p.addStyleTag({ content: '.vdt-btn{visibility:hidden !important}' });
  const can = await r.box('#can');
  const mid = (n) => p.evaluate((n) => { const e = __circ.byName(n), a = __circ.px(...e.a), b = __circ.px(...e.b); return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }, n);
  const clickAt = async (x, y) => { await r.moveTo(x, y, 0.7); state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false; };
  const typeIn = async (sel, txt) => {
    await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2);
    for (const ch of txt) { await p.keyboard.type(ch); await r.tick(2); }
    await p.keyboard.press('Enter'); await r.tick(3);
  };

  state.caption = 'Sample reading: 10 V charging 100 µF through 4.7 kΩ, read at t = 0.100 s';
  await r.secs(3.0);

  state.caption = 'Hide the predictions: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#blind) > summary');
  await r.click('details.fold:has(#blind) > summary');
  await r.tick(4);
  await r.click('#blind');
  r.check.blind = await p.evaluate(() => __circ.blind);
  await r.secs(0.6);

  state.caption = 'Set B1 to 10 V and R1 to 4700 Ω: click each part, then type its value';
  await clickAt(...(await mid('B1')));
  await r.scrollRail('#cVal');
  await typeIn('#nVal', '10');
  await r.secs(0.3);
  await clickAt(...(await mid('R1')));
  await r.scrollRail('#cVal');
  await typeIn('#nVal', '4700');
  r.check.parts = await p.evaluate(() => ['B1', 'R1', 'C1'].map((n) => { const e = __circ.byName(n); return n + ' ' + (e.emf ?? e.R ?? e.C); }).join(', '));
  state.arrow = { rect: await r.box('#cVal') };
  await r.secs(0.8);
  state.arrow = null;

  state.caption = 'Charge it from t = 0: press Reset, let it run, then Pause';
  await r.click('#reset');
  await r.secs(2.0);
  await r.click('#play');
  r.check.paused = await p.evaluate(() => [__circ.running, __circ.run.t]);
  await r.secs(0.4);

  state.caption = 'Drag the time cursor on the scope to t = 0.100 s';
  await p.evaluate(() => window.scrollTo(0, 400)); await r.tick(2);
  const sc = await r.box('#sCan');
  state.zoom = [sc[0], sc[1] - 70, 520, 292.5];
  await r.moveTo(sc[0] + 50, sc[1] + sc[3] * 0.45, 0.8);
  r.check.t = await r.dragUntil(0.5, 0, '#curRead dd', '0.100 s');
  r.check.cursor = (await r.text('#curRead')).replace(/\s+/g, ' ');
  await r.secs(1.6);
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

  state.caption = 'Read six or more times, repeat for each R, then send the table to the worksheet';
  const ex = await r.box('#expT');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
