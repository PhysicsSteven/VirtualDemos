// How this works: Circular Apertures and Resolution. Part 1's first reading: Laser through a pinhole (632.8 nm, screen at 2.00 m),
// pinhole D = 100 µm, the cursor on the first dark ring. Expected: sin θ₁ = 1.2197 λ/D = 0.0077181 (the Airy first zero, x = 3.8317),
// θ₁ = 7.718 mrad, r = L tan θ₁ = 15.437 mm. The view at 2× is 60 mm across, so the ring (31 mm across) nearly fills it.
require('./lib.cjs')({ demo: 'resolution', title: 'Circular Apertures and Resolution' }, async (r) => {
  const { state, p, W } = r;
  /* scroll the page smoothly to y */
  const scrollTo = async (y, s) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo({ top: v, behavior: 'instant' }), y0 + (y - y0) * e); await r.tick(); } };
  /* before the first frame: how a press on the intensity graph maps to the cursor (mm), then the cursor back to 0; not recorded */
  const probe = async (x) => { const q = await r.box('#curve'); await p.mouse.click(q[0] + x, q[1] + q[3] / 2); await p.clock.runFor(50);
    return p.evaluate(() => __rs.S.cfg.pinhole.cur * 1e3); };
  await p.evaluate(() => scrollTo({ top: 360, behavior: 'instant' }));
  const u1 = await probe(300), u2 = await probe(600), mmPerPx = (u2 - u1) / 300, x0 = 300 - u1 / mmPerPx;
  await p.evaluate(() => { __rs.setCur(0); scrollTo({ top: 0, behavior: 'instant' }); }); await p.mouse.move(640, 360); await p.clock.runFor(100);
  r.check.map = [x0, mmPerPx];

  state.caption = 'Sample: the first dark ring of a pinhole 100 µm across, 632.8 nm laser, screen 2.00 m away';
  await r.secs(3.0);

  state.caption = 'Hide the answers: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.6);

  state.caption = 'Set the pinhole: drag its diameter D down to 100 µm';
  await scrollTo(360, 0.7);
  const sD = await r.box('#sD'), v = await p.evaluate(() => +document.querySelector('#sD').value);
  state.zoom = [16, sD[1] - 340, 800, 450];
  await r.moveTo(sD[0] + 8 + (sD[2] - 16) * (v - 50) / 250, sD[1] + sD[3] / 2, 0.8);
  r.check.D = await r.dragUntil(-1.2, 0, '#oD', '100 µm');
  await r.secs(0.6);

  state.caption = 'Drag the cursor onto the first dark ring, where the intensity is least';
  const cv = await r.box('#curve');
  state.zoom = [cv[0] + x0 - 200, cv[1] - 60, 640, 360];
  await r.moveTo(cv[0] + x0, cv[1] + cv[3] * 0.55, 0.7);
  await r.dragTo(cv[0] + x0 + 15.44 / mmPerPx, cv[1] + cv[3] * 0.55, 1.6);
  await r.secs(0.8);
  state.zoom = null;
  await scrollTo(0, 0.6);
  r.check.cur = await r.text('#oCur');
  r.check.I = await p.evaluate(() => __rs.Iexact(__rs.S.cfg.pinhole.cur).toFixed(6));

  state.caption = 'The cursor reads the ring\'s distance from the center, and the intensity there';
  await r.scrollRail('#out div:nth-child(5)');
  const c5 = await r.box('#out div:nth-child(5)'), c6 = await r.box('#out div:nth-child(6)');
  state.arrow = { rect: [c5[0], c5[1], c6[0] + c6[2] - c5[0], Math.max(c5[3], c6[3])] };   /* Cursor and Intensity at the cursor */
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each pinhole and color, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
