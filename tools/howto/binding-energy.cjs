// How this works: The Curve of Binding Energy, worksheet "The Curve of Binding Energy". The first readings: the curve setup,
// the most tightly bound nuclide at A = 2 (deuterium) and A = 4 (helium 4), from AME2020. Expected (key rows 1 and 3):
// ²H: Δ 13.136 MeV, B 2.225 MeV, B/A 1.1123 MeV; ⁴He: Δ 2.425 MeV, B 28.296 MeV, B/A 7.0739 MeV.
require('./lib.cjs')({ demo: 'binding-energy', title: 'Nuclear Binding Energy' }, async (r) => {
  const { state, p, W } = r;
  const A = () => p.evaluate(() => +document.getElementById('aSl').value);
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    const tb = await r.box('.vd-readings table');
    state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
    state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  const setA = async (want) => {
    await r.scrollRail('#aSl');
    const b = await r.box('#aSl'), v = await A();
    await r.moveTo(b[0] + 8 + (b[2] - 16) * (v - 1) / 269, b[1] + b[3] / 2, 0.7);
    state.zoom = [W - 640, b[1] - 120, 640, 360];
    const dir = v > want ? -1 : 1;
    await r.dragWhile(dir * 2, 0, async () => ((await A()) - want) * dir < -2);
    for (let i = 0; i < 10; i++) { const x = await A(); if (x === want) break; await p.keyboard.press(x > want ? 'ArrowLeft' : 'ArrowRight'); await r.tick(3); }
    const n = await r.box('#rNuc');
    state.arrow = { rect: [n[0] - 4, n[1] - 30, 260, 150] };
    await r.secs(1.4);
    state.arrow = null; state.zoom = null;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the most tightly bound nuclide at A = 2 and at A = 4';
  await r.secs(2.6);

  state.caption = 'Choose The curve of binding energy setup';
  await r.click('[data-p="curve"]');
  await r.secs(0.6);

  state.caption = 'Drag the mass number to A = 2. The readouts show deuterium';
  await setA(2);
  r.check.n1 = [await r.text('#rNuc'), await r.text('#rB')];

  state.caption = 'Record the reading. It goes into the table';
  await record(1.8);

  state.caption = 'Now A = 4, helium 4, and record again';
  await setA(4);
  r.check.n2 = [await r.text('#rNuc'), await r.text('#rB')];
  await record(1.8);

  state.caption = 'Record the rest of the list up to A = 238, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
