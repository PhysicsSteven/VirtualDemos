// How this works: Series and Parallel Circuits (Circuits demo, DC). Part 1's first reading: Series bulbs, B1 = 6 V, L1 = L2 = 10 Ω,
// Blind on, a voltmeter V1 beside L1 on two short leads. Expected: I = 6/(10 + 10) = 0.300 A on A1 and A2, V1 = 0.300 × 10 = 3.00 V.
require('./lib.cjs')({ demo: 'circuits', title: 'Series and Parallel Circuits', query: '?ws=hs-series-parallel#dc' }, async (r) => {
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
  await r.secs(0.6);
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);

  state.caption = 'Read A1 and A2: the same current before and after L1';
  const a1 = await dot(3, 1), a2 = await dot(9, 1);
  state.zoom = [a1[0] - 120, a1[1] - 140, 680, 382.5];
  state.arrow = { rect: [a1[0] - 40, a1[1] - 40, a2[0] - a1[0] + 80, 80] };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Add a voltmeter beside L1: a short wire up from each end, then the voltmeter across them';
  await r.click('#tools [data-t="wire"]');
  let a = await dot(5, 1), b = await dot(5, 0);
  await r.moveTo(...a, 0.5); await r.dragTo(...b, 0.5);
  a = await dot(7, 1); b = await dot(7, 0);
  await r.moveTo(...a, 0.5); await r.dragTo(...b, 0.5);
  await r.click('#tools [data-t="vm"]');
  a = await dot(5, 0); b = await dot(7, 0);
  await r.moveTo(...a, 0.5); await r.dragTo(...b, 0.7);
  r.check.vm = await p.evaluate(() => { const e = __circ.els.find((x) => x.type === 'vm'); return e ? [e.name, e.a, e.b] : null; });
  const [vx, vy] = await dot(6, 0);
  state.arrow = { rect: [vx - 60, vy - 30, 120, 60] };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. Each meter goes into the table';
  await r.scrollRail('#captureD');
  await r.click('#captureD');
  await r.tick(4);
  const tb = await r.box('#tblD');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tblD tbody') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;
  r.check.stat = await r.text('#statD');

  state.caption = 'Add V2 beside L2, set L2 to 20 Ω, record again, then send the readings to the worksheet';
  const ex = await r.box('#expD');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
