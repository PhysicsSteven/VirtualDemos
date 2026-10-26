// How this works: Speed of Light, worksheet "Measuring the Speed of Light". The first two readings with the bench seed 2718,
// Blind on, D = 12.00 m, B = 0.500 m: the rest position, then the mirror clockwise at 250 rev/s, with the crosshair centered on
// the spot each time. Expected: rest about 5.254 to 5.257 mm (the spot jitters a few µm); at 250 rev/s the shift
// Δs′ = 4AD²ω/c(D + B) = 4 · 0.2572 · 144 · 2π · 250/(299792458 · 12.5) = 0.0622 mm, so about 5.32 mm (key: 5.257, 5.320).
require('./lib.cjs')({ demo: 'speed-of-light', title: 'Speed of Light' }, async (r) => {
  const { state, p, W } = r;
  const eye = await r.box('#eye');
  const th = await p.evaluate(() => window.__sol.eg.th);
  const thimble = [eye[0] + (th.x0 + th.x1) / 2, eye[1] + (th.y0 + th.y1) / 2];
  const center = async () => {
    state.zoom = [eye[0], eye[1] - 18, 480, 270];
    await r.moveTo(...thimble, 0.8);
    const off = () => p.evaluate(() => window.__sol.spotShown() - window.__sol.S.mic);
    const dir = (await off()) > 0 ? 1 : -1;   /* the thimble moves the crosshair 0.003 mm a pixel */
    await p.mouse.down(); state.down = true; await r.tick(4);
    let dy = -dir, m0 = await p.evaluate(() => window.__sol.S.mic);
    state.ptr = [state.ptr[0], state.ptr[1] + dy]; await p.mouse.move(...state.ptr); await r.tick();
    if (((await p.evaluate(() => window.__sol.S.mic)) - m0) * dir < 0) dy = -dy;
    for (let i = 0; i < 300 && (await off()) * dir > 0.0015; i++) { state.ptr = [state.ptr[0], state.ptr[1] + dy]; await p.mouse.move(...state.ptr); await r.tick(); }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
    r.check['mic' + Object.keys(r.check).length] = await p.evaluate(() => [window.__sol.S.mic, window.__sol.spotShown()]);
    await r.secs(0.8);
    state.zoom = null;
  };
  const capture = async (s) => {
    await r.scrollRail('#capture');
    await r.click('#capture');
    await r.tick(4);
    const tb = await r.box('#capture');
    state.zoom = [W - 600, tb[1] - 60, 600, 337.5];
    await r.secs(s);
    state.zoom = null;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the spot at rest, then with the mirror at 250 rev/s clockwise';
  await r.secs(2.6);

  state.caption = 'Turn Blind on: open Instrument and tick Blind. Then choose The bench at rest';
  await r.scrollRail('details.fold:has(#seed) > summary');
  await r.click('details.fold:has(#seed) > summary');
  await r.tick(4);
  await r.scrollRail('#blind');
  await r.click('#blind');
  await r.secs(0.3);
  r.check.blind = await p.evaluate(() => window.__sol.S.blind);
  await r.scrollRail('[data-p="rest"]');
  await r.click('[data-p="rest"]');
  await r.secs(0.6);

  state.caption = 'Center the crosshair on the middle of the spot: drag the micrometer thimble up or down';
  await center();

  state.caption = 'Capture the reading. It goes into the table';
  await capture(1.6);

  state.caption = 'Set the motor to 250 rev/s: drag the speed slider';
  await r.scrollRail('#speed');
  const sp = await r.box('#speed');
  state.zoom = [W - 640, sp[1] - 150, 640, 360];
  await r.moveTo(sp[0] + 8, sp[1] + sp[3] / 2, 0.6);
  await r.dragWhile(1, 0, async () => (await p.evaluate(() => window.__sol.S.revs)) < 250);
  for (let i = 0; i < 20; i++) { const v = await p.evaluate(() => window.__sol.S.revs); if (v === 250) break; await p.keyboard.press(v > 250 ? 'ArrowLeft' : 'ArrowRight'); await r.tick(2); }
  r.check.revs = await r.text('#speedOut');
  state.arrow = { rect: await r.box('#speedOut') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'The image slides over. Center the crosshair on the spot again and capture';
  await center();
  await capture(2.0);

  state.caption = 'Repeat at 500 to 1000 rev/s each way, then send the table to the worksheet';
  const ex = await r.box('#expTab');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.__sol.S.rows));
});
