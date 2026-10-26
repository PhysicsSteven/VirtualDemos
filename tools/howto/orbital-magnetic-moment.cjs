// How this works: Atoms in a Magnetic Field, worksheet "The Orbital Magnetic Moment". The first readings: Orbit as a current
// loop, n = 1 and n = 2. Expected (Bohr model, CODATA 2022): I = e/T = 1.05418e−3 A and μ = IA = 9.27400e−24 A·m² = μ_B for n = 1;
// I falls as 1/n³ (1.31773e−4 A) and μ rises as n (1.85481e−23 A·m²) for n = 2 (key rows 1 and 2).
require('./lib.cjs')({ demo: 'magnetic-moments', title: 'Atoms in a Magnetic Field' }, async (r) => {
  const { state, p, W } = r;
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  const outRow = (k) => `#out div:nth-child(${k})`;
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
    const row = await r.box('.vd-readings tbody tr:last-child');
    state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
    state.arrow = { rect: row };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the Bohr orbit of hydrogen for n = 1 and n = 2';
  await r.secs(2.4);

  state.caption = 'Choose Orbit as a current loop';
  await r.click('[data-p="bohr"]');
  await r.secs(0.8);

  state.caption = 'At n = 1, read the current and the moment, then record';
  await r.scrollRail('#out');
  const o = await r.box(outRow(3)), o2 = await r.box(outRow(4));
  state.arrow = { rect: [o[0] - 4, o[1] - 4, Math.max(o[2], o2[2]) + 8, o2[1] + o2[3] - o[1] + 8] };
  r.check.n1 = [await r.text(outRow(3)), await r.text(outRow(4))];
  await r.secs(1.8);
  state.arrow = null;
  await record(1.6);

  state.caption = 'Drag n to 2 under the picture, and record again';
  const sb = await r.box('#sN');
  await pageTo(sb[1] + (await p.evaluate(() => scrollY)) - 520);
  const b = await r.box('#sN');
  state.zoom = [Math.max(0, b[0] - 120), b[1] - 240, 640, 360];
  r.check.n = await r.slide('#sN', '#oN', 2, 0.1, 0.5);
  await r.secs(0.6);
  state.zoom = null;
  await pageTo(0);
  r.check.n2 = [await r.text(outRow(3)), await r.text(outRow(4))];
  await record(1.6);

  state.caption = 'Go on up to n = 6, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().map((x) => [x.n, x.I_A, x.mu_Bohr_A_m2])));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
