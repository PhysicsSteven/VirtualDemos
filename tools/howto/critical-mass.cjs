// How this works: Nuclear Reactions, Fission and Fusion, worksheet "Chain Reactions and the Critical Size". The first readings: the
// Bare ²³⁵U sphere setup (Sphere model, 4000 neutrons a generation), radius 6 cm and then 7 cm, each run for 40 generations at 10×
// and recorded. Expected (key rows 1 and 2, Monte Carlo, so a run differs by about the uncertainty): 6.00 cm, 17.10 kg,
// k = 0.7430 ± 0.0035; 7.00 cm, 27.15 kg, k = 0.8518 ± 0.0038. M = (4/3)πR³ × 18.9 g/cm³ (17.10 kg at 6 cm).
require('./lib.cjs')({ demo: 'nuclear-reactions', title: 'Nuclear Reactions, Fission and Fusion' }, async (r) => {
  const { state, p, W } = r;
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
  const exportEnd = async (s) => {
    const ex = await r.box('.vd-export');
    await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
    state.arrow = { rect: ex };
    await r.secs(s);
    r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
    r.check.ws = await p.evaluate(() => window.vdWorksheet());
  };

  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  /* a control in the scene, below the picture: scroll the page to it */
  const near = async (sel) => { let b = await r.box(sel); if (b[1] > r.H - 80) { await pageTo(b[1] + (await p.evaluate(() => scrollY)) - 520); b = await r.box(sel); } return b; };
  const set = async (id, out, want, tol, coarse) => {
    const b = await near('#' + id);
    state.zoom = [Math.max(0, b[0] - 120), Math.max(0, b[1] - 240), 640, 360];
    const got = await r.slide('#' + id, '#' + out, want, tol, coarse);
    await r.secs(0.6);
    state.zoom = null;
    await pageTo(0);
    return got;
  };

  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  const gens = () => p.evaluate(() => window.__nr.CHN.gen);
  const run = async () => {
    await r.click('#go');
    await r.moveTo(480, 520, 0.5);
    for (let i = 0; i < 400 && (await gens()) < 40; i++) await r.tick();
    if ((await r.text('#go')) === 'Pause') await r.click('#go');
    await r.secs(0.4);
  };
  state.caption = 'Sample readings: bare spheres of uranium 235, 6 cm and 7 cm in radius';
  await r.secs(2.4);

  state.caption = 'Choose Bare ²³⁵U sphere, with 4000 neutrons a generation';
  await r.click('[data-p="chSphere"]');
  await r.secs(0.6);
  r.check.N = await p.evaluate(() => window.__nr.S.ch.N);

  state.caption = 'Drag the radius to 6 cm under the picture';
  r.check.R1 = await set('chR', 'oR', 6, 0.02, 0.2);
  state.caption = 'Set 10×, Start, and pause after 40 or more generations';
  await r.click('[data-s="10"]');
  await run();
  r.check.g1 = await gens();
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  state.caption = 'Record a reading: k is the mean over the generations after the fifth';
  await record(1.6);

  state.caption = 'Now 7 cm: the run starts afresh. Run 40 generations and record again';
  r.check.R2 = await set('chR', 'oR', 7, 0.02, 0.2);
  await run();
  r.check.g2 = await gens();
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Go on to 11 cm, then send the table to the worksheet';
  await exportEnd(2.2);
});
