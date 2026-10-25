// How this works: Impulse and Momentum. The main trial: stiff spring, m = 0.50 kg, approach 0.60 m/s, 10 kHz sensor.
// Expected (k = 4000 N/m, e = 0.9): v_after = −0.540 m/s, Δp = m(v₂ − v₁) = −0.570 kg·m/s, area ≈ +0.570 N·s,
// peak kv√(m/k) = 26.8 N, contact (π/2)√(m/k)(1 + e) = 33.4 ms.
require('./lib.cjs')({ demo: 'impulse', title: 'Impulse and Momentum' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');
  const union = (a, b) => { const x = Math.min(a[0], b[0]), y = Math.min(a[1], b[1]); return [x, y, Math.max(a[0] + a[2], b[0] + b[2]) - x, Math.max(a[1] + a[3], b[1] + b[3]) - y]; };

  state.caption = 'Sample reading: stiff spring, 0.50 kg cart at 0.60 m/s, 10 kHz sensor';
  await r.secs(3.0);

  state.caption = 'The knobs set the cart: 0.50 kg, launched at 0.60 m/s';
  state.zoom = [can[0], can[1], 800, 450];
  const ins = await r.box('#instr');
  await r.moveTo(ins[0] + ins[2] / 2, ins[1] + ins[3] + 20, 0.7);
  state.arrow = { rect: ins };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Pick the bumper and the sample rate: Stiff spring, 10 kHz';
  await r.click('#rateSeg button[data-r="10000"]');
  state.arrow = { rect: union(await r.box('#bumpSeg'), await r.box('#rateSeg')) };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Launch the cart. The sensor graphs force against time';
  await r.click('#go');
  await r.moveTo(560, 640, 0.5);
  state.zoom = [can[0], can[1] + 120, 936, 526.5];
  for (let i = 0; i < 600 && !/Area under/.test(await r.text('#out')); i++) await r.tick();
  await r.secs(1.0);
  state.zoom = null;

  state.caption = 'Read the area under the pulse and the cart\'s momentum change';
  await r.scrollRail('#out');
  const dds = await r.p.evaluate(() => [...document.querySelectorAll('#out .wide')].slice(0, 2).map(d => { const q = d.getBoundingClientRect(); return [q.x, q.y, q.width, q.height]; }));
  state.arrow = { rect: union(dds[0], dds[1]) };
  r.check.out = (await r.p.evaluate(() => document.getElementById('out').innerText)).replace(/\n/g, ' | ');
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat with the soft spring and clay, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
});
