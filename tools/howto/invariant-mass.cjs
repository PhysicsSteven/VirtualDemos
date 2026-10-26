// How this works: Particles, Quarks and Conservation Laws, worksheet "Weighing a Particle You Cannot See". The first reading: the
// A Λ decay (practice) setup, event 18, B = 1.5 T: six points clicked along each track to fit its circle, then the opening angle
// from the vertex and points about 3 cm out on each track, Record reading. Expected: the event's tracks have r₊ = 77.1 cm and
// r₋ = 32.5 cm (p = 0.3 B r: 347 and 146 MeV/c) and the Λ⁰ mass 1115.68 MeV/c²; measured by clicks the key gets 78.0 cm, 32.4 cm,
// 57.7° (the chord angle 3 cm out is a little wider than the tangent angle, 54.0°) and M(pπ⁻) = 1118 MeV/c².
require('./lib.cjs')({ demo: 'particles', title: 'Particles, Quarks and Conservation Laws', query: '?setup=lambdaV' }, async (r) => {
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

  state.caption = 'Sample reading: the practice Λ decay, measured by clicking on its tracks';
  await r.secs(2.2);

  state.caption = 'Choose A Λ decay (practice). The tracks are labeled';
  await r.click('[data-p="lambdaV"]');
  await r.secs(0.6);
  const cb = await r.box('#can');
  await pageTo(Math.max(0, cb[1] + (await p.evaluate(() => scrollY)) - 150));
  const pts = async (sg) => p.evaluate((sg) => { const q = window.__pq, V = q.D.ev.vees[0], c = document.getElementById('can').getBoundingClientRect(), v = q.view(), T = sg === '+' ? V.plus.pts : V.minus.pts;
    const sc = (w) => { const [X, Y] = q.toScr(v, w[0], w[1]); return [c.x + X, c.y + Y]; };
    const vis = []; for (let i = 0; i < T.length; i += 3) { const s = sc(T[i]); if (s[0] > c.x + 15 && s[1] > Math.max(c.y, 0) + 15 && s[0] < c.right - 15 && s[1] < Math.min(c.bottom, innerHeight) - 15) vis.push(s); else if (vis.length) break; }
    return vis; }, sg);
  for (const sg of ['+', '-']) {
    state.caption = sg === '+' ? 'Fit a circle, Track +: click six points spread along the proton track' : 'Then Track −: six points along the π⁻ track';
    await r.click('#toolSeg [data-t="fit"]');
    await r.click('#signSeg [data-s="' + sg + '"]');
    const vis = await pts(sg);
    for (let j = 0; j < 6; j++) { const q = vis[Math.min(vis.length - 1, Math.round((0.04 + j * 0.18) * (vis.length - 1)))]; await tap(Math.round(q[0]), Math.round(q[1]), 0.35); }
    await r.secs(0.4);
  }
  state.caption = 'Measure an angle: click the vertex, then each track about 3 cm out';
  await r.click('#toolSeg [data-t="ang"]');
  const ang = await p.evaluate(() => { const q = window.__pq, V = q.D.ev.vees[0], c = document.getElementById('can').getBoundingClientRect(), v = q.view();
    const at = (T, s0) => { let s = 0; for (let i = 1; i < T.length; i++) { s += Math.hypot(T[i][0] - T[i - 1][0], T[i][1] - T[i - 1][1]); if (s >= s0) return T[i]; } return T[T.length - 1]; };
    return [V.at, at(V.plus.pts, 3), at(V.minus.pts, 3)].map((w) => { const [X, Y] = q.toScr(v, w[0], w[1]); return [Math.round(c.x + X), Math.round(c.y + Y)]; }); });
  for (const q of ang) await tap(q[0], q[1], 0.4);
  await r.secs(0.8);
  await pageTo(0);

  state.caption = 'Record the reading: both radii and the opening angle';
  await record(2.0);

  state.caption = 'Clear the marks and measure the same event twice more, from scratch';
  await exportEnd(2.4);
});
