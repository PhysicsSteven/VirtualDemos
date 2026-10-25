// How this works: Collisions and Momentum. One elastic run on the 1D track: m₁ = 1.0 kg at u₁ = 1.00 m/s into m₂ = 2.0 kg at rest.
// Expected: v₁′ = (m₁ − m₂)u₁/(m₁ + m₂) = −0.333 m/s, v₂′ = 2m₁u₁/(m₁ + m₂) = 0.667 m/s; the 5 cm flag blocks the gates for
// 50.0, 75.0 and 150.0 ms.
require('./lib.cjs')({ demo: 'collisions', title: 'Collisions and Momentum' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#cCan');
  // the middle of a range input's thumb
  const thumb = (s) => r.p.evaluate(s => { const e = document.querySelector(s), q = e.getBoundingClientRect(), u = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + u * (q.width - 16), q.y + q.height / 2]; }, s);

  state.caption = 'Sample reading: a 1.0 kg cart at 1.00 m/s hits a 2.0 kg cart at rest';
  state.zoom = [can[0], can[1], 640, 360];
  await r.secs(3.0);

  state.caption = 'Set the mass of cart 2: drag its slider to 2.0 kg';
  state.zoom = null;
  await r.scrollRail('#s_track_m2');
  await r.moveTo(...(await thumb('#s_track_m2')), 0.8);
  r.check.m2 = await r.dragUntil(2, 0, '#s_track_m2o', '2.0 kg');
  state.arrow = { rect: await r.box('#s_track_m2o') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Open Photogates and press Place gates for this run';
  await r.click('#gateSec summary');
  await r.tick(4);
  await r.scrollRail('#placeGates');
  await r.click('#placeGates');
  r.check.gates = await r.text('#gateStatus');

  state.caption = 'The run plays. Each gate times the 5 cm flag on a cart';
  await r.moveTo(900, 520, 0.5);
  state.zoom = [can[0] + 80, can[1] + 40, 560, 315];
  for (let i = 0; i < 400 && !(await r.p.evaluate(() => window.__col.runDone)); i++) await r.tick();
  await r.secs(0.3);
  state.zoom = null;
  state.arrow = { rect: await r.box('#gateList') };
  r.check.gateList = (await r.p.evaluate(() => document.getElementById('gateList').innerText)).replace(/\n/g, ' ');
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Capture the reading. Velocities are signed: cart 1 bounced back';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat with other masses and speeds, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
