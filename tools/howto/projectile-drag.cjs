// How this works: Projectile Range. One dot on a trajectory with air resistance off: v₀ = 20 m/s at 60° from a 2.0 m launcher,
// Blind on, dots every 0.5 s, the cursor on the dot at t = 0.50 s (the key's first trajectory run).
// Expected: x = v₀ cos θ t = 5.00 m, y = y₀ + v₀ sin θ t − ½gt² = 2 + 8.660 − 1.226 = 9.43 m; range 36.43 m (lands after 3.643 s).
require('./lib.cjs')({ demo: 'projectile-drag', title: 'Projectile Range' }, async (r) => {
  const { state, W } = r;
  const stage = await r.box('#stage');
  /* drag a sidebar slider from its thumb until its readout shows want */
  const slide = async (sel, outSel, want, dx) => {
    const [x, y, w, h] = await r.box(sel);
    const v = await r.p.evaluate((s) => { const e = document.querySelector(s); return [+e.min, +e.max, +e.value]; }, sel);
    await r.moveTo(x + 8 + (v[2] - v[0]) / (v[1] - v[0]) * (w - 16), y + h / 2, 0.35);
    return r.dragUntil(parseFloat(want) > v[2] ? dx : -dx, 0, outSel, want);
  };

  /* r.click with a quicker move: this demo has many controls to reach in 30 s */
  r.click = async (sel) => { const [x, y, w, h] = await r.box(sel); await r.moveTo(x + w / 2, y + h / 2, 0.45);
    state.click = r.frame; state.down = true; await r.p.mouse.down(); await r.tick(3); await r.p.mouse.up(); state.down = false; };

  state.caption = 'Sample reading: one point on the path of a ball launched at 20 m/s and 60° from 2.0 m';
  await r.secs(2.6);

  state.caption = 'Set the launch: drag the sliders to 20 m/s, 60° and 2.0 m';
  await r.scrollRail('#speed');
  r.check.v = await slide('#speed', '#speedOut', '20.0 m/s', 2);
  r.check.th = await slide('#angle', '#angleOut', '60.0°', 1.2);
  r.check.h = await slide('#height', '#heightOut', '2.0 m', 2);
  await r.secs(0.4);

  state.caption = 'Turn air resistance off, and Blind on to hide the predictions';
  await r.scrollRail('#dragSw');
  await r.click('#dragSw button[data-d="off"]');
  await r.secs(0.2);
  await r.scrollRail('details:has(#labBlind) > summary');
  await r.click('details:has(#labBlind) > summary');
  await r.tick(3);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await r.p.evaluate(() => document.getElementById('labBlind').checked);
  r.check.air = await r.p.evaluate(() => document.querySelector('#dragSw button[data-d="off"]').getAttribute('aria-pressed'));
  state.arrow = { rect: await r.box('#labBlind') };
  await r.secs(0.8);
  state.arrow = null;

  state.caption = 'Clear the old shot and launch';
  await r.click('#clear');
  await r.tick(4);
  await r.click('#launch');
  state.zoom = [stage[0], stage[1], stage[2], stage[2] * 9 / 16];
  await r.moveTo(stage[0] + 700, stage[1] + 420, 0.4);
  for (let i = 0; i < 200 && !(await r.p.evaluate(() => /\d/.test(document.getElementById('mR').textContent))); i++) await r.tick();
  await r.secs(3.3);                            /* the flight lasts 3.64 s */
  state.zoom = null;

  state.caption = 'Put a dot every 0.5 s, then step the cursor to the dot at 0.50 s';
  await r.scrollRail('#secMeasure summary');
  await r.click('#secMeasure summary');
  await r.tick(3);
  await r.scrollRail('#strobeSeg');
  await r.click('#strobeSeg button[data-dt="0.5"]');
  await r.tick(4);
  await r.click('#dotNext');
  await r.tick(3);
  await r.click('#dotNext');
  await r.tick(4);
  r.check.dot = [await r.text('#mShot'), await r.text('#mT'), await r.text('#mX'), await r.text('#mY'), await r.text('#mR')];
  state.arrow = { rect: await r.box('#cursorOut') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#tbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture eight or more dots, then send the table to the worksheet';
  const ex = await r.box('#expCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.6);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#tbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
