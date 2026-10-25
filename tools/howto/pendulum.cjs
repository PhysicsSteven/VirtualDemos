// How this works: Pendulums. One full swing timed by the photogate at L = 0.80 m, θ₀ = 5°, Earth, drag off.
// Expected: T₀ = 2π√(L/g) = 1.794 s, exact period at 5° 1.795 s.
require('./lib.cjs')({ demo: 'pendulum', title: 'Pendulums' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');
  const bob = () => r.findDrag('#can', '#rack');

  state.caption = 'Sample reading: one full swing at L = 0.80 m and θ₀ = 5°';
  await r.secs(3.0);

  state.caption = 'Set the length: drag the bob up the string to 0.80 m';
  state.zoom = [can[0], can[1] + 40, 920, 517.5];
  await r.moveTo(...(await bob()), 0.9);
  r.check.L = await r.dragUntil(0, -3, '#oL', '0.80 m');
  state.arrow = { rect: await r.box('#oL') };
  await r.secs(1.6);

  state.caption = 'Set the release angle: drag the bob sideways to 5°';
  state.arrow = null;
  await r.moveTo(...(await bob()), 0.6);
  r.check.A = await r.dragUntil(-2, 0, '#oA', '5°');
  state.arrow = { rect: await r.box('#oA') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Release it. The photogate times each full swing';
  state.zoom = null;
  await r.click('#go');
  await r.moveTo(930, 560, 0.6);
  state.zoom = [can[0], can[1], 800, 450];   /* the timer, the bob and the gate */
  for (let i = 0; i < 400 && !/\d\.\d{3}/.test(await r.text('#out dd')); i++) await r.tick();
  r.check.T = await r.text('#out dd');
  await r.secs(0.8);                          /* see the timer show its first period before the zoom lets go */
  state.arrow = { rect: await r.box('#out div') };
  state.zoom = null;
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at each length, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
