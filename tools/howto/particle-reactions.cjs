// How this works: Particles, Quarks and Conservation Laws, worksheet "Conservation Laws for Particle Reactions". The first readings:
// the Reactions view, Blind on, Example 11.1a (π⁻ + p → π⁰ + n + π⁻ + π⁺, fixed target, 1000 MeV) predicted strong and recorded,
// then Example 11.1b (p + p̄ → p + p + p̄, colliding beams, 3000 MeV each) predicted forbidden and recorded. Expected (key rows 1
// and 2): √s = 1743.07 MeV against 1353.68 MeV of products, 389.39 MeV to spare, allowed: strong; 11.1b breaks charge and baryon
// number (0 → +1).
require('./lib.cjs')({ demo: 'particles', title: 'Particles, Quarks and Conservation Laws' }, async (r) => {
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

  const tap = async (x, y, s = 0.5) => { await r.moveTo(x, y, s); state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false; await r.tick(2); };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  const example = async (k) => {
    const b = await near('#exSel');
    state.zoom = [Math.max(0, b[0] - 60), Math.max(0, b[1] - 200), 640, 360];
    await r.moveTo(b[0] + b[2] / 2, b[1] + b[3] / 2, 0.6);
    await p.selectOption('#exSel', k);
    await r.secs(1.0);
    state.zoom = null;
  };
  const predict = async (v) => {
    const b = await near('#predSeg [data-pr="' + v + '"]');
    state.zoom = [Math.max(0, b[0] - 200), Math.max(0, b[1] - 160), 640, 360];
    state.capTop = true;   /* the prediction chips sit low in the zoom, under where the caption would be */
    await r.click('#predSeg [data-pr="' + v + '"]');
    await r.secs(0.8);
    state.zoom = null; state.capTop = false;
    await pageTo(0);
  };
  state.caption = 'Sample readings: Examples 11.1a and 11.1b, predicted with Blind on';
  await r.secs(2.4);

  state.caption = 'Open the Reactions view, and turn Blind on in the Lab section';
  await r.click('[data-v="rx"]');
  await r.secs(0.4);
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  if (!(await p.evaluate(() => document.getElementById('labBlind').closest('details').open))) { await r.click('details.fold:has(#labBlind) > summary'); await r.tick(4); }
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.4);

  state.caption = 'Pick Example 11.1a, choose your prediction, and record';
  await example('ex111a');
  await predict('strong');
  r.check.r1 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Now Example 11.1b: predict, and record again';
  await example('ex111b');
  await predict('forbidden');
  r.check.r2 = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Do the rest of the list, then turn Blind off and read the verdicts';
  await exportEnd(2.4);
});
