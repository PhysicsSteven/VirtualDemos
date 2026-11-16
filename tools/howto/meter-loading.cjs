// How this works: Circuits (Meter Loading). The first reading: the Meter loading setup, ε = 12 V, R1 = R2 = 1 MΩ, ammeter A1 with
// R_m = 1 Ω, voltmeter V_out with R_m = 10 MΩ across R2. Expected: V_out = 12 × (10/11 MΩ)/(1 MΩ + 1 Ω + 10/11 MΩ) = 5.71 V,
// I = 6.29 µA; with Real meter unticked on V_out it reads 6.00 V.
require('./lib.cjs')({ demo: 'circuits', title: 'Meter Loading', query: '#loading' }, async (r) => {
  const { state, p, W } = r;
  const dot = (u, v) => p.evaluate(([u, v]) => __circ.px(u, v), [u, v]);

  state.caption = 'Sample reading: a 10 MΩ voltmeter across a 1 MΩ resistor';
  await r.secs(3.0);

  state.caption = 'V_out is selected: Real meter is ticked and its resistance is 10 MΩ';
  await r.scrollRail('#cRm');
  state.arrow = { rect: await r.box('#cRm') };
  r.check.rm = await p.evaluate(() => { const e = __circ.byName('V_out'); return [e.rOn, e.r]; });
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'An ideal voltmeter would read 6 V; this one reads less, because it draws current';
  const [vx, vy] = await dot(10, 5.5);
  state.zoom = [vx - 340, vy - 191.25, 680, 382.5];
  state.arrow = { rect: [vx - 20, vy - 40, 140, 60] };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
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

  state.caption = 'Make R1 and R2 smaller and record again each time, then send the readings to the worksheet';
  const ex = await r.box('#expD');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  state.arrow = null;
});
