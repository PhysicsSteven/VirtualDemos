// How this works: Eddy Currents: Magnet in a Pipe. Part 1's first drop: magnet 1.60 A·m², wall 1.6 mm, pipes at 100 °C.
// Expected: σ_Cu = 59.6/(1 + 0.00393 × 80) = 45.3 MS/m, σ_Al = 37.7/(1 + 0.00429 × 80) = 28.1 MS/m; k = 45 μ₀² m² σ w / (1024 a⁴) with
// a = 10.3 mm (mid wall), M = 12.2 g; fall times from rest over 1.00 m 9.58 s (copper) and 5.94 s (aluminum), as in the key's rows 1 and 2.
require('./lib.cjs')({ demo: 'eddy-currents', title: 'Eddy Currents: Magnet in a Pipe' }, async (r) => {
  const { state, p, W } = r;
  const stage = await r.box('#stage');

  state.caption = 'Sample reading: one drop with the pipes at 100 °C';
  await r.secs(3.0);

  state.caption = 'Set the pipe temperature: drag its slider to 100 °C';
  const card = await r.box('#setupCard');
  state.zoom = [card[0] - 250, card[1] - 60, 640, 360];
  const sl = await r.box('#sT'), f = (20 - -196) / (100 - -196);
  await r.moveTo(sl[0] + 8 + f * (sl[2] - 16), sl[1] + sl[3] / 2, 0.8);
  r.check.T = await r.dragUntil(2, 0, '#oT', '100 °C');
  r.check.m = await r.text('#oM'); r.check.w = await r.text('#oW');
  state.arrow = { rect: await r.box('#oT') };
  await r.secs(0.9);
  state.arrow = { rect: [card[0], card[1] + 20, card[2], 110] };   /* the magnet and the wall stay at 1.60 A·m² and 1.6 mm */
  state.caption = 'The magnet stays at 1.60 A·m² and the wall at 1.6 mm';
  await r.secs(1.5);
  state.arrow = null; state.zoom = null;

  state.caption = 'Drop all three. Wait until both metal pipes’ magnets reach the bottom';
  await r.click('#drop');
  await r.moveTo(stage[0] + stage[2] / 2, stage[1] + stage[3] - 120, 0.6);
  const done = () => p.evaluate(() => { const e = window.__ed; return e.S.t >= Math.max(...e.tFall().filter(isFinite)); });
  for (let i = 0; i < 30 * 15 && !(await done()); i++) await r.tick();
  await r.secs(0.6);
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at each temperature, then send the series to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr')].map(tr => tr.textContent));
});
