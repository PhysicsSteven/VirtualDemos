// How this works: Circuits (Worksheet 5, A Real Diode and the Junction Transistor). Part 1's first reading: the Diode setup
// (B1 = 2.0 V, R1, a 1N4148 diode, A1 in series and V1 across the diode) with R1 = 1 MΩ. The demo's diode is
// I = Is (e^(V/nVT) − 1), Is = 4.352 nA, n = 1.906, VT = kT/e = 25.865 mV at 300.15 K, Rs = 0.6458 Ω. Solving
// (2 − V)/(1 MΩ + Rs) = Is (e^(V/nVT) − 1) gives V = 0.29449 V and I = 1.7055 µA: A1 1.71 µA, V1 294 mV (as in the key).
require('./lib.cjs')({ demo: 'circuits', title: 'A Real Diode and the Junction Transistor', query: '#diode' }, async (r) => {
  const { state, p, W } = r;
  const mid = (n) => p.evaluate((n) => { const e = __circ.byName(n), a = __circ.px(...e.a), b = __circ.px(...e.b); return [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2]; }, n);
  const clickAt = async (x, y) => { await r.moveTo(x, y, 0.7); state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false; };
  const typeIn = async (sel, txt) => {
    await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2);
    for (const ch of txt) { await p.keyboard.type(ch); await r.tick(2); }
    await p.keyboard.press('Enter'); await r.tick(3);
  };

  state.caption = 'Sample reading: the diode with R1 = 1 MΩ in series, on a 2.0 V battery';
  await r.secs(3.0);

  state.caption = 'Open the Diode setup: A1 in series with the diode, V1 across it';
  await r.scrollRail('#starters');
  await r.click('#starters [data-p="diodeIV"]');
  state.arrow = { rect: await r.box('#cPane') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Set R1 to 1 MΩ: click R1, then type 1000000';
  await clickAt(...(await mid('R1')));
  await r.scrollRail('#cVal');
  await typeIn('#nVal', '1000000');
  r.check.parts = await p.evaluate(() => ['B1', 'R1'].map((n) => { const e = __circ.byName(n); return n + ' ' + (e.emf ?? e.R); }).join(', '));
  state.arrow = { rect: await r.box('#cVal') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Read A1, the current, and V1, the voltage across the diode';
  const [ax, ay] = await mid('A1'), [vx, vy] = await mid('V1');
  state.zoom = [ax - 120, ay - 90, 800, 450];
  state.arrow = { rect: [ax - 40, ay - 52, 100, 74] };   /* A1 and its reading above it */
  await r.secs(1.6);
  state.arrow = { rect: [vx - 22, vy - 22, 112, 44] };   /* V1 and its reading beside it */
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#captureD');
  await r.click('#captureD');
  await r.tick(4);
  const tb = await r.box('#tblD');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tblD tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#tblD tbody tr td')].map((td) => (td.querySelector('input') ? td.querySelector('input').value : td.textContent)));
  r.check.csv = (await p.evaluate(() => __circ.dcCSV())).trim().split('\n').slice(-2);

  state.caption = 'Repeat with R1 down to 100 Ω, then send the series to the worksheet';
  const ex = await r.box('#expD');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
