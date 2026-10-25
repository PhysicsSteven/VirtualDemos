// How this works: Wave and Particle Duality (Worksheet 2 of the Double Slit demo). The first reading of "Wavelength against
// voltage": Blind on, the Electrons setup (a = 0.20 µm, d = 1.00 µm, L = 0.35 m) at 5 kV, screen range fitted, cursors on the
// dark fringes between bright fringes ∓2 and ∓3, 20 000 electrons or more. Expected: pc = √(K² + 2K mc²) = 71.66 keV for K = 5 keV,
// λ = hc/pc = 17.30 pm, Δy = λL/d = 6.06 µm, dark fringes at ±2.5Δy = ±15.14 µm, so B − A = 30.3 µm over 5 spacings.
require('./lib.cjs')({ demo: 'double-slit', title: 'Wave and Particle Duality' }, async (r) => {
  const { state, p } = r;
  const slide = async (sel, want, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.5);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 0.6);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && Math.abs((await val()) - want) > 1e-9; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(3); await p.mouse.up(); state.down = false; await r.tick();
  };
  /* before the first frame: where on the detector screen a cursor drag lands, as a fraction of the screen range (see double-slit.cjs) */
  const SX = 570, frac = async () => p.evaluate(() => __ds.S.cA / __ds.S.Y);
  await p.check('#meas'); await p.clock.runFor(200);
  const cal = [];
  for (const py of [480, 560]) {
    await p.mouse.move(SX, py + 2); await p.mouse.down(); await p.mouse.move(SX, py, { steps: 2 }); await p.clock.runFor(50); await p.mouse.up();
    await p.clock.runFor(50); cal.push([py, await frac()]);
  }
  const pyAt = (f) => cal[0][0] + (f - cal[0][1]) * (cal[1][0] - cal[0][0]) / (cal[1][1] - cal[0][1]);
  await p.uncheck('#meas'); await p.click('[data-p="electron"]'); await p.evaluate(() => { document.querySelector('.rail').scrollTop = 0; });
  await p.mouse.move(r.W / 2, r.H / 2); await p.clock.runFor(300);
  r.check.cal = cal;

  state.caption = 'Sample: the first reading, electrons at 5 kV, measured with Blind on';
  await r.secs(2.6);

  state.caption = 'Turn Blind on, so the wavelength and the predictions stay hidden';
  await r.scrollRail('#blind');
  await r.click('#blind');
  await r.secs(0.5);

  state.caption = 'Set the accelerating voltage: drag its slider to 5.00 kV';
  await r.scrollRail('#src');
  await slide('#src', 3.699, 0.3);
  r.check.V = await r.text('#srcOut');
  state.arrow = { rect: await r.box('#srcOut') };
  await r.secs(0.7);
  state.arrow = null;

  state.caption = 'Fit the screen range: Fit, in the Display fold';
  await r.scrollRail('details.fold:has(#zFit) > summary');
  await r.click('details.fold:has(#zFit) > summary');
  await r.tick(3);
  await r.scrollRail('#zFit');
  await r.click('#zFit');
  r.check.Y = await p.evaluate(() => __ds.S.Y);
  await r.secs(0.3);

  state.caption = 'Speed up the stream so the electrons pile up quickly';
  await r.scrollRail('#rate');
  await slide('#rate', 10, 1);
  await r.secs(0.3);

  state.caption = 'Turn on the cursors. Drag A to the dark fringe between −2 and −3, B between +2 and +3';
  await r.scrollRail('#meas');
  await r.click('#meas');
  const can = await r.box('#can');
  state.zoom = [can[0] + 300, can[1] + 4, 704, 396];   /* the detector screen and its histogram */
  /* the dark fringes of the pattern the demo draws from, nearest ±2.5 λL/d, rounded to the cursor's step */
  const dark = await p.evaluate(() => { const P = __ds.pat, dy = __ds.pred.dy, st = 0.002 * __ds.S.Y, out = [];
    for (const s of [-1, 1]) { let best = -1; for (let j = 1; j < P.M; j++) if (Math.abs(P.y[j] - s * 2.5 * dy) < 0.5 * dy && (best < 0 || P.I12[j] < P.I12[best])) best = j; out.push([P.y[best], Math.round(P.y[best] / st) * st]); }
    return { dy, st, out }; });
  r.check.dark = dark;
  const Y = await p.evaluate(() => __ds.S.Y), place = async (id, want) => {
    const cur = await p.evaluate((id) => __ds.S[id] / __ds.S.Y, id);
    await r.moveTo(SX, pyAt(cur), 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(SX, pyAt(want / Y), 0.8);
    for (let i = 0; i < 40; i++) {
      const v = await p.evaluate((id) => __ds.S[id], id); if (Math.abs(v - want) < dark.st / 4) break;
      state.ptr = [SX, state.ptr[1] + (v < want ? -0.2 : 0.2)]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(3); await p.mouse.up(); state.down = false; await r.tick();
    return r.text(id === 'cA' ? '#cAOut' : '#cBOut');
  };
  r.check.A = await place('cA', dark.out[0][1]);
  r.check.B = await place('cB', dark.out[1][1]);
  await r.secs(0.5);
  state.zoom = null;

  state.caption = 'Once 20 000 or more electrons have landed, record the reading';
  state.arrow = { rect: await r.box('#count') };
  for (let i = 0; i < 300 && +(await r.text('#count')).replace(/\D/g, '') < 20000; i++) await r.tick();
  await r.secs(0.5);
  state.arrow = null;
  r.check.BA = await r.text('#rBA');
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('table.rows tbody tr') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Repeat at each voltage, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.7);
  state.arrow = { rect: ex };
  await r.secs(2.2);
  r.check.row = await r.text('table.rows tbody tr');
});
