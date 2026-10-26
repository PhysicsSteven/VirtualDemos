// How this works: Compton Scattering, worksheet "Compton Scattering". The first readings: Compton's 1923 experiment (Mo Kα,
// λ = 71.070 pm), Blind on, at θ = 0° and 30°. Expected: Δλ = λc(1 − cos θ) with λc = 2.42631 pm: 0 at 0° (λ′ 71.070 pm);
// 0.3250 pm at 30° (λ′ 71.395 pm, T 0.07943 keV, φ 74.51°), key rows 1 and 2.
require('./lib.cjs')({ demo: 'compton', title: 'Compton Scattering' }, async (r) => {
  const { state, p, W } = r;
  const deg = () => p.evaluate(() => Math.round(+document.getElementById('th').value * 10) / 10);
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    const row = await r.box('.vd-readings tbody tr:last-child');
    state.zoom = [W - 600, Math.min(row[1] - 200, r.H - 337.5), 600, 337.5];   /* the table sits at the foot of the rail */
    state.arrow = { rect: row };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  const angle = async (want) => {
    await r.scrollRail('#th');
    const b = await r.box('#th'), v = await deg();
    await r.moveTo(b[0] + 8 + (b[2] - 16) * v / 180, b[1] + b[3] / 2, 0.7);
    state.zoom = [W - 640, b[1] - 140, 640, 360];
    const dir = v > want ? -1 : 1;
    await r.dragWhile(dir * 2, 0, async () => ((await deg()) - want) * dir < (want === 0 ? 0 : -1.5));
    for (let i = 0; i < 30; i++) { const x = await deg(); if (Math.abs(x - want) < 0.05) break; await p.keyboard.press(x > want ? 'ArrowLeft' : 'ArrowRight'); await r.tick(1); }
    state.arrow = { rect: await r.box('#thOut') };
    await r.secs(0.9);
    state.arrow = null; state.zoom = null;
    return r.text('#thOut');
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: molybdenum X-rays scattered at 0° and at 30°';
  await r.secs(2.6);

  state.caption = 'Turn Blind on: open Model and tick Blind';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.4);

  state.caption = 'Choose Compton’s 1923 experiment';
  await r.scrollRail('[data-p="c1923"]');
  await r.click('[data-p="c1923"]');
  await r.secs(0.6);

  state.caption = 'Drag the photon angle to 0° and record the reading';
  r.check.a0 = await angle(0);
  await record(1.4);

  state.caption = 'Drag the angle to 30° and record again';
  r.check.a1 = await angle(30);
  await record(1.8);

  state.caption = 'Repeat every 30° up to 180°, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
});
