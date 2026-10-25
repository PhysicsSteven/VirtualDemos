// How this works: Forces and Friction. Ramp: when does it slip? (m = 5.0 kg, μs = 0.50, μk = 0.35, no push, no hanging mass):
// the block held at 26.5° slips at 27.0° (tan θ = μs at 26.57°), then one timed 1.000 m slide from rest at 27.0°.
// Expected: a = g(sin θ − μk cos θ) = 1.394 m/s², t = √(2d/a) = 1.198 s.
require('./lib.cjs')({ demo: 'forces', title: 'Forces and Friction' }, async (r) => {
  const { state, p } = r;
  // turn a knob in the picture clockwise with the pointer, a few degrees per frame, until done() (one step every 15°)
  async function turnKnob(sel, done) {
    const [x, y, w, h] = await r.box(sel), cx = x + w / 2, cy = y + h / 2, R = 10;   /* the knob is 34 px across; the pointer stays on it */
    let a = -90;
    await r.moveTo(cx, cy - R, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 300 && !(await done()); i++) { a += 3; state.ptr = [cx + R * Math.cos(a * Math.PI / 180), cy + R * Math.sin(a * Math.PI / 180)]; await p.mouse.move(...state.ptr); await r.tick(); }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
  }

  state.caption = 'Sample reading: find the angle where the block slips, then time a 1.000 m slide';
  await r.secs(3.0);

  state.caption = 'Pick the setup “Ramp: when does it slip?”';
  await r.click('#presets [data-p=slip]');
  state.arrow = { rect: await r.box('#presets [data-p=slip]') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Release the block. Static friction holds it at 20°';
  await r.click('#go');
  await r.secs(1.0);

  state.caption = 'Turn the angle knob slowly until the block starts to slide';
  const pan = await r.box('#instr');
  state.zoom = [pan[0] - 8, pan[1] - 8, 800, 450];
  await turnKnob('#sTh + .vdknob', async () => /kinetic/.test(await r.text('#forceOut')));
  r.check.slipAt = await r.text('#oTh');
  state.arrow = { rect: await r.box('#oTh') };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Time a slide: Release at the top mark. The timer stops after 1.000 m';
  await r.click('#timed');
  state.zoom = [pan[0] - 8, pan[1] - 8, 800, 450];
  for (let i = 0; i < 90 && !/Timer, last run\s*[\d.]+/.test(await r.text('#forceOut')); i++) await r.tick();
  r.check.t = (await r.text('#forceOut')).match(/Timer, last run\s*([\d.]+ s)/)?.[1];
  r.check.a = (await r.text('#forceOut')).match(/Acceleration[^\d−-]*([−-]?[\d.]+)/)?.[1];
  await r.secs(1.8);
  state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at six steeper angles, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
