// How this works: Standing Waves. The harmonic scan's first reading: Find the resonances (L = 0.648 m, T = 70.0 N, μ = 6.14 g/m,
// Q = 30), drive tuned to the first peak. Expected: v = √(T/μ) = 106.77 m/s, f₁ = v/2L = 82.39 Hz; on the 0.1 Hz steps the steady
// amplitude is largest at 82.4 Hz (2.201 mm, against 2.200 at 82.3 and 2.191 at 82.5).
require('./lib.cjs')({ demo: 'standing-waves', title: 'Standing Waves' }, async (r) => {
  const { state, W } = r;
  /* turn a knob clockwise until its readout shows want: one step every 15° of turn */
  const turn = async (sel, outSel, want, da) => {
    const [x, y, w, h] = await r.box(sel), cx = x + w / 2, cy = y + h / 2, R = w / 2 - 4;
    let a = -Math.PI / 2;
    await r.moveTo(cx, cy - R, 0.6);
    await r.p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 300 && (await r.text(outSel)) !== want; i++) { a += da; state.ptr = [cx + R * Math.cos(a), cy + R * Math.sin(a)]; await r.p.mouse.move(...state.ptr); await r.tick(); }
    const got = await r.text(outSel); await r.tick(6); await r.p.mouse.up(); state.down = false; await r.tick(); return got;
  };
  /* scroll the page smoothly to y */
  const scrollTo = async (y, s) => { const y0 = await r.p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await r.p.evaluate(v => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };

  state.caption = 'Sample reading: the first resonance of a string 0.648 m long at 70.0 N';
  await r.secs(3.0);

  state.caption = 'Pick the driven string: click Find the resonances, then Flat to see its shape';
  await r.click('#presets button[data-p="resonance"]');
  state.arrow = { rect: await r.box('#presets button[data-p="resonance"]') };
  await r.secs(1.0);
  state.arrow = null;
  await r.click('[data-dim="flat"]');
  await r.secs(0.6);
  await scrollTo(200, 0.6);

  state.caption = 'Tune the drive toward the first peak: turn the Coarse knob to 82 Hz';
  const gen = await r.box('#genBox');
  state.zoom = [16, gen[1] + gen[3] - 450 + 10, 800, 450];   /* the response curve and the function generator */
  r.check.coarse = await turn('.knob[data-per="1"]', '#dFOut', '82.0 Hz', 0.09);

  state.caption = 'Then turn the Fine knob to the top of the peak, 82.4 Hz';
  r.check.f = await turn('.knob[data-per="0.1"]', '#dFOut', '82.4 Hz', 0.06);
  state.arrow = { rect: await r.box('#dFOut') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Let the string build up (4× plays it faster). One loop between the ends: harmonic 1';
  await scrollTo(0, 0.5);
  await r.click('[data-s="4"]');
  await r.moveTo(560, 520, 0.6);
  state.zoom = [16, 165, 800, 450];   /* the speed buttons, the string and the response curve */
  await r.secs(3.0);
  r.check.amp = await r.text('#rsExtraRow');
  state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at each peak, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map(td => td.textContent));
});
