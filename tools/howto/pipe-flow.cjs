// How this works: Falling Ball Viscometer, worksheet pipe-flow (Pipe Flow and Turbulence). The first table's first reading:
// Flow in a pipe, water at 20 °C in the 10 mm pipe, valve at 2%. Expected: Q = 2% of the 100 mL/s full flow = 2.00 mL/s, so about
// 20 mL in 10 s; Poiseuille's ΔP = 8ηLQ/(πr⁴) = 8 × 1.002e-3 Pa·s × 0.500 m × 2.00e-6 m³/s/(π × (5.00e-3 m)⁴) = 4.08 Pa.
require('./lib.cjs')({ demo: 'viscometer', title: 'Pipe Flow and Turbulence' }, async (r) => {
  const { state, p } = r;
  const sw = () => p.evaluate(() => parseFloat(document.querySelector('#out > div:nth-child(4) dd').textContent));
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: water at 20 °C in the 10 mm pipe, valve open 2%';
  await r.secs(2.6);

  state.caption = 'Choose Flow in a pipe';
  await r.click('#expSeg [data-x="pipe"]');
  await r.secs(0.8);

  state.caption = 'Choose Water, 20 °C and the 10 mm pipe';
  await r.click('#pliqSeg button:first-child');
  await r.tick(3);
  await r.click('#pipeSeg button:last-child');
  await r.secs(0.6);

  state.caption = 'Set the valve: drag it down to 2%';
  const sl = await r.box('#sValve');
  state.zoom = [0, sl[1] + sl[3] + 40 - 405, 720, 405];
  r.check.valve = await r.slide('#sValve', '#oValve', 2, 0, 3);
  await r.secs(0.8);
  state.zoom = null;

  state.caption = 'Run at ×10 (said on screen), then click Start collecting';
  await r.click('#speedSeg [data-s="10"]');
  await r.tick(4);
  const vb = await r.box('#collect');
  await r.click('#collect');
  state.zoom = [0, vb[1] - 20, 720, 405];
  state.caption = 'The cylinder fills while the stopwatch runs. Stop at about 30 s';
  for (let i = 0; i < 120 && (await sw()) < 19.9; i++) await r.tick();
  await r.click('#collect');
  await r.secs(0.6);
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.zoom = null;

  state.caption = 'Read the cylinder, stopwatch and pressure drop, then Capture';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out > div:nth-child(3)') };
  await r.secs(1.0);
  state.arrow = { rect: await r.box('#out > div:nth-child(5)') };
  await r.secs(1.0);
  state.arrow = null;
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Empty the cylinder, repeat at 4 to 14%, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
