// How this works: Circuits (Worksheet 1, Kirchhoff's Rules). The first reading: Series bulbs, B1 = 6 V, L1 = L2 = 10 Ω, ammeters
// A1 and A2 in the path and a voltmeter V1 placed across L2. Expected: I = 6/(10 + 10) = 0.300 A through both ammeters,
// V_L2 = 0.300 × 10 = 3.00 V.
require('./lib.cjs')({ demo: 'circuits', title: "Kirchhoff's Rules", query: '#dc' }, async (r) => {
  const { state, p, W } = r;
  const dot = (u, v) => p.evaluate(([u, v]) => __circ.px(u, v), [u, v]);

  state.caption = 'Sample reading: two 10 Ω bulbs in series on a 6 V battery';
  await r.secs(3.0);

  state.caption = 'Hide the predictions: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#blind) > summary');
  await r.click('details.fold:has(#blind) > summary');
  await r.tick(4);
  await r.click('#blind');
  r.check.blind = await p.evaluate(() => __circ.blind);
  await r.secs(0.8);

  state.caption = 'Add a voltmeter across L2: pick it, then drag from the top of L2 to the bottom wire';
  await r.click('#tools [data-t="vm"]');
  await r.secs(0.4);
  const a = await dot(10, 1), b = await dot(10, 6);
  state.zoom = [a[0] + 20 - 340, (a[1] + b[1]) / 2 - 191.25, 680, 382.5];   /* L2, the new voltmeter and A2 */
  await r.moveTo(...a, 0.8);
  await r.dragTo(...b, 1.0);
  const vm = await p.evaluate(() => { const e = __circ.els.find((x) => x.type === 'vm'); return e ? [e.name, e.a, e.b] : null; });
  r.check.vm = vm;
  const [vx, vy] = await dot(10, 3.5);
  state.arrow = { rect: [vx - 80, vy - 22, 104, 44] };   /* the voltmeter and its reading */
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture the reading. Each meter goes into the table';
  await r.scrollRail('#captureD');
  await r.click('#captureD');
  await r.tick(4);
  const tb = await r.box('#tblD');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tblD tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#tblD tbody tr td')].map((td) => (td.querySelector('input') ? td.querySelector('input').value : td.textContent)));
  r.check.csv = (await p.evaluate(() => __circ.dcCSV())).split('\n').slice(-2);

  state.caption = 'Change L2 to 20 Ω and repeat, then send the readings to the worksheet';
  const ex = await r.box('#expD');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
