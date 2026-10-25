// How this works: Young's Double Slit (Worksheet 1). Part 1's first reading: red laser setup (a = 0.05 mm, d = 0.25 mm, L = 1.00 m)
// with λ = 400 nm, screen range fitted, cursors on bright fringes −3 and +3. Expected: λL/d = 1.600 mm; the pattern's peaks for
// fringe ±3 sit at ±4.717 mm (the single slit envelope pulls them toward the center), so the cursors, in 0.03 mm steps, read
// −4.71 and +4.71 mm and B − A = 9.42 mm over 6 spacings, Δy = 1.570 mm.
require('./lib.cjs')({ demo: 'double-slit', title: "Young's Double Slit" }, async (r) => {
  const { state, p } = r;
  /* drag a slider's thumb from its value to want, then a fraction of a pixel per frame until its value is want */
  const slide = async (sel, want, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.5);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 0.6);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && (await val()) !== want; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(3); await p.mouse.up(); state.down = false; await r.tick();
  };
  /* before the first frame: where on the detector screen a cursor drag lands, as a fraction of the screen range, from two trial
     drags of cursor A read off the demo; then the setup is put back. None of this is recorded */
  const SX = 570, frac = async () => p.evaluate(() => __ds.S.cA / __ds.S.Y);
  await p.click('[data-p="laser"]'); await p.check('#meas'); await p.clock.runFor(200);
  const cal = [];
  for (const py of [480, 560]) {
    await p.mouse.move(SX, py + 2); await p.mouse.down(); await p.mouse.move(SX, py, { steps: 2 }); await p.clock.runFor(50); await p.mouse.up();
    await p.clock.runFor(50); cal.push([py, await frac()]);
  }
  const pyAt = (f) => cal[0][0] + (f - cal[0][1]) * (cal[1][0] - cal[0][0]) / (cal[1][1] - cal[0][1]);
  await p.uncheck('#meas'); await p.click('[data-p="electron"]'); await p.evaluate(() => { document.querySelector('.rail').scrollTop = 0; });
  await p.mouse.move(r.W / 2, r.H / 2); await p.clock.runFor(300);
  r.check.cal = cal;

  state.caption = "Sample: Part 1's first reading, the fringe spacing for 400 nm light";
  await r.secs(2.6);

  state.caption = 'Pick the Light, red laser setup';
  await r.click('[data-p="laser"]');
  await r.secs(0.6);

  state.caption = 'Set the wavelength: drag its slider to 400 nm';
  await r.scrollRail('#src');
  await slide('#src', 400, 0.3);
  r.check.lam = await r.text('#srcOut');
  state.arrow = { rect: await r.box('#srcOut') };
  await r.secs(0.8);
  state.arrow = null;

  state.caption = 'Fit the screen range: Fit, in the Display fold';
  await r.scrollRail('details.fold:has(#zFit) > summary');
  await r.click('details.fold:has(#zFit) > summary');
  await r.tick(3);
  await r.scrollRail('#zFit');
  await r.click('#zFit');
  r.check.Y = await p.evaluate(() => __ds.S.Y);
  await r.secs(0.4);

  state.caption = 'Speed up the stream so the photons pile up quickly';
  await r.scrollRail('#rate');
  await slide('#rate', 10, 1);
  state.arrow = { rect: await r.box('#rateOut') };
  await r.secs(0.6);
  state.arrow = null;

  state.caption = 'Turn on the cursors. Drag A to bright fringe −3 and B to +3';
  await r.scrollRail('#meas');
  await r.click('#meas');
  const can = await r.box('#can');
  state.zoom = [can[0] + 300, can[1] + 4, 704, 396];   /* the detector screen and its histogram */
  const Y = await p.evaluate(() => __ds.S.Y), place = async (id, want) => {
    const cur = await p.evaluate((id) => __ds.S[id] / __ds.S.Y, id);
    await r.moveTo(SX, pyAt(cur), 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(SX, pyAt(want / Y), 0.8);
    const sel = id === 'cA' ? '#cAOut' : '#cBOut', target = (want < 0 ? '−' : '') + Math.abs(want * 1e3).toFixed(2) + ' mm';
    for (let i = 0; i < 40 && (await r.text(sel)) !== target; i++) {
      const v = await p.evaluate((id) => __ds.S[id], id); state.ptr = [SX, state.ptr[1] + (v < want ? -0.2 : 0.2)]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(3); await p.mouse.up(); state.down = false; await r.tick();
    return r.text(sel);
  };
  r.check.A = await place('cA', -4.71e-3);
  r.check.B = await place('cB', 4.71e-3);
  await r.secs(0.6);
  state.zoom = null;

  state.caption = 'Once 2000 or more photons have landed, record the reading';
  r.check.hits = await r.text('#count');
  r.check.BA = await r.text('#rBA');
  state.arrow = { rect: await r.box('#count') };
  await r.secs(0.8);
  state.arrow = null;
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('table.rows tbody tr') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Repeat at each wavelength, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.7);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.row = await r.text('table.rows tbody tr');
});
