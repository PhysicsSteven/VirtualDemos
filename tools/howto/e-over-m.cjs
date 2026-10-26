// How this works: e/m of the Electron, worksheet "e/m of the Electron". The first trial: seed 2718, Blind on, 100 V and 1.0 A,
// each side read with the eye moved over the beam (no parallax) and that side's pointer put on the beam (0.05 cm steps).
// Expected: B = 0.7398 mT per ampere (N 130, R 158 mm); r = √(2V m/e)/B = 45.6 mm at 0.999 A; the key reads 4.55 and 4.60 cm.
require('./lib.cjs')({ demo: 'e-over-m', title: 'e/m of the Electron' }, async (r) => {
  const { state, p, W } = r;
  const sv = await r.box('#sv');
  const em = (f) => p.evaluate(f);
  const handle = async (id) => { const h = (await em('window.__em.svHandles()')).find((q) => q.id === id), g = await em('({ t: window.__em.sgeo.topH, v: window.__em.sgeo.viewH })');
    return [sv[0] + h.x, sv[1] + (h.kind === 'pt' ? h.y : g.t + g.v * 0.5)]; };
  const dragTo = async (id, get, want) => {   /* drag a handle on the scale until get() (cm) reaches want */
    await r.moveTo(...(await handle(id)), 0.5);
    const v = await em(get), dir = v > want ? -1 : 1;
    if ((v - want) * dir < -0.3) { await r.dragWhile(5 * dir, 0, async () => ((await em(get)) - want) * dir < -0.3); await r.moveTo(...(await handle(id)), 0.2); }
    await r.dragWhile(dir, 0, async () => ((await em(get)) - want) * dir < -0.02);
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the beam circle at 100 V and 1.0 A, read on both sides of the scale';
  await r.secs(2.0);

  state.caption = 'Turn Blind on: open Instrument and tick Blind';
  await r.scrollRail('details.fold:has(#blind) > summary');
  await r.click('details.fold:has(#blind) > summary');
  await r.tick(4);
  await r.scrollRail('#blind');
  await r.click('#blind');
  await r.secs(0.3);

  state.caption = 'Set the gun to 100 V and the coils to 1.00 A';
  await r.scrollRail('#vSl');
  let sb = await r.box('#vSl');
  state.zoom = [W - 640, sb[1] - 140, 640, 360];
  await r.slide('#vSl', '#vOut', 100, 0.5, 3);
  await r.secs(0.2);
  await r.scrollRail('#iSl');
  sb = await r.box('#iSl');
  state.zoom = [W - 640, sb[1] - 140, 640, 360];
  await r.slide('#iSl', '#iOut', 1.0, 0.005, 0.05);
  state.arrow = { rect: await r.box('#iOut') };
  r.check.VI = [await r.text('#vOut'), await r.text('#iOut'), await em('window.__em.meters()')];
  await r.secs(0.4);
  state.arrow = null; state.zoom = null;
  const t = await em('(() => { const t = window.__em.getTrace(); return [t.xL * 100, t.xR * 100]; })()');
  r.check.trace = t;

  state.capTop = true;
  state.caption = 'Move the eye under the left side until the beam covers its reflection, then put L on the beam';
  state.zoom = [sv[0], sv[1] - 160, 640, 360];
  await dragTo('eye', 'window.__em.S.eye', t[0]);
  await r.secs(0.4);
  await dragTo('L', 'window.__em.S.ptr.L', t[0]);
  await r.secs(0.5);

  state.caption = 'Do the same on the right side and put R on the beam';
  state.zoom = [sv[0] + sv[2] - 640, sv[1] - 160, 640, 360];
  await dragTo('eye', 'window.__em.S.eye', t[1]);
  await r.secs(0.4);
  await dragTo('R', 'window.__em.S.ptr.R', t[1]);
  r.check.ptr = await em('[window.__em.S.ptr.L, window.__em.S.ptr.R, window.__em.S.eye]');
  await r.secs(0.5);
  state.zoom = null; state.capTop = false;

  state.caption = 'Capture the reading: the meters and both radius readings go into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#tbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tbl tbody tr:last-child') };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at the other six settings, then send the table to the worksheet';
  const ex = await r.box('#expWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.2);
  r.check.rows = await em('JSON.stringify(window.__em.S.rows)');
  r.check.blind = await em('window.__em.S.blind');
});
