// How this works: Holography: Fringes and Images. Part 1's first reading: Two beams at 633 nm with 10° between them (reference 5.0°,
// object −5.0°), cursors on bright fringes ten periods apart. Expected: d = λ/(2 sin(θ/2)) = 633 nm/(2 sin 5°) = 3.6314 μm; the two
// waves are in step at x = 0, so bright fringes sit at whole multiples of d, and A = −5d = −18.16 μm, B = +5d = 18.16 μm give a span
// of 36.31 μm with 11 bright fringes from A to B (N = 10 periods).
require('./lib.cjs')({ demo: 'holography', title: 'Holography: Fringes and Images' }, async (r) => {
  const { state, p, W } = r;
  /* scroll the page smoothly to y */
  const scrollTo = async (y, s) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo({ top: v, behavior: 'instant' }), y0 + (y - y0) * e); await r.tick(); } };
  const thumbX = (box, min, max, v) => box[0] + 8 + (box[2] - 16) * (v - min) / (max - min);
  const rec = (k) => p.evaluate((k) => __ho.S.rec[k], k);
  /* drag a slider's thumb from its value until the demo's value reaches want */
  const slide = async (sel, min, max, get, want, dx) => {
    const b = await r.box(sel), v = await p.evaluate((sel) => +document.querySelector(sel).value, sel);
    await r.moveTo(thumbX(b, min, max, v), b[1] + b[3] / 2, 0.6);
    await r.dragWhile(dx, 0, async () => (await get()) !== want);
  };
  /* where a microscope cursor at x (m) sits on the page (the demo's own mapping: 12 px margins) */
  const micX = async (x) => { const s = await r.box('#scope'), m = await p.evaluate(() => __ho.S.mic); return s[0] + 12 + (x - (m.xc - m.fov / 2)) / m.fov * (s[2] - 24); };

  state.caption = 'Sample: the fringe spacing on the plate with 10° between the two beams';
  await r.secs(2.6);

  state.caption = 'Turn the beams: reference beam to 5.0° and object beam to −5.0°, 10° apart';
  await scrollTo(470, 0.7);
  await slide('#sThr', 0, 30, () => rec('thr'), 5, -1.5);
  r.check.thr = await r.text('#oThr');
  await slide('#sTho', -30, 30, () => rec('tho'), -5, 1.0);
  r.check.tho = await r.text('#oTho');
  await r.secs(0.6);

  state.caption = 'Widen the microscope\'s view so ten fringes fit: field of view about 44 μm';
  await slide('#sFov', 0, 100, () => p.evaluate(() => +document.querySelector('#sFov').value), 34, 0.8);
  r.check.fov = await r.text('#oFov');
  await r.secs(0.5);

  /* the bright fringes: whole multiples of d either side of 0; check the demo counts 11 from −5d to +5d */
  const d = 633e-9 / (2 * Math.sin(5 * Math.PI / 180)), A = -5 * d, B = 5 * d;
  r.check.count = await p.evaluate(([A, B]) => { const m = __ho.S.mic, a = m.a, b = m.b; m.a = A; m.b = B; const c = __ho.cursorFringes().M; m.a = a; m.b = b; return c; }, [A, B]);
  state.caption = 'Drag cursor A onto a bright fringe, and cursor B onto the bright fringe ten periods along';
  const sc = await r.box('#scope'), y = sc[1] + sc[3] * 0.82;
  state.zoom = [16, sc[1] - 30, 960, 540];
  await r.moveTo(await micX(await p.evaluate(() => __ho.S.mic.a)), y, 0.6);
  await r.dragTo(await micX(A), y, 1.0);
  await r.moveTo(await micX(await p.evaluate(() => __ho.S.mic.b)), y, 0.5);
  await r.dragTo(await micX(B), y, 1.2);
  await r.secs(1.0);
  state.zoom = null;
  r.check.mic = await p.evaluate(() => ({ a: __ho.S.mic.a * 1e6, b: __ho.S.mic.b * 1e6, M: __ho.cursorFringes().M }));

  state.caption = 'Read the span B − A and the count of bright fringes from A to B';
  await scrollTo(0, 0.6);
  await r.scrollRail('#out div:nth-child(7)');
  const c7 = await r.box('#out div:nth-child(7)'), c8 = await r.box('#out div:nth-child(8)');
  r.check.rail = [await r.text('#out div:nth-child(7)'), await r.text('#out div:nth-child(8)')];
  state.arrow = { rect: [c7[0], c7[1], c8[0] + c8[2] - c7[0], Math.max(c7[3], c8[3])] };   /* Span B − A and Bright fringes from A to B */
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each angle, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.7);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
