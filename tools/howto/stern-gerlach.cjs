// How this works: Atoms in a Magnetic Field, worksheet "The Stern–Gerlach Experiment". The first reading: Silver at one speed
// (600 m/s, 20 cm drift), Blind on, gradient 250 T/m, the beam run until the spots are clear, the cursor on the center of the upper
// spot. Expected: z = (μ_z G/Mv²)(L₁²/2 + L₁L₂) with μ_z = g μ_B/2 = 9.2848e−24 J/T, M = 107.868 u, L₁ = 3.50 cm, L₂ = 20 cm:
// 0.2740 mm (key row 1). The cursor is set on the mean z of the upper spot's atoms, as in the key, to the 0.001 mm step.
require('./lib.cjs')({ demo: 'magnetic-moments', title: 'Atoms in a Magnetic Field', query: '?setup=selector' }, async (r) => {
  const { state, p, W } = r;
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  const upper = () => p.evaluate(() => { const z = window.__mm.S.sg.dots.map((q) => q.z).sort((a, b) => a - b), g = [[z[0]]];
    for (let i = 1; i < z.length; i++) { if (z[i] - z[i - 1] > 0.1e-3) g.push([]); g[g.length - 1].push(z[i]); }
    const top = g[g.length - 1]; return top.reduce((s, x) => s + x, 0) / top.length; });
  const cur = () => p.evaluate(() => window.__mm.S.sg.cur);
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: silver at 250 T/m, the center of the upper spot';
  await r.secs(2.4);

  state.caption = 'Choose Silver at one speed, and turn Blind on in the Lab section';
  await r.click('[data-p="selector"]');
  await r.secs(0.4);
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  if (!(await p.evaluate(() => document.getElementById('labBlind').closest('details').open))) { await r.click('details.fold:has(#labBlind) > summary'); await r.tick(4); }
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.6);

  state.caption = 'Drag the field gradient down to 250 T/m';
  const sb = await r.box('#sG');
  await pageTo(sb[1] + (await p.evaluate(() => scrollY)) - 380);
  const b = await r.box('#sG');
  state.zoom = [Math.max(0, b[0] - 200), b[1] - 200, 640, 360];
  r.check.G = await r.slide('#sG', '#oG', 250, 1, 30);
  await r.secs(0.6);
  state.zoom = null;

  state.caption = 'Start the beam and let the atoms build up two clear spots';
  await pageTo(0);
  await r.click('#go');
  await r.secs(6.0);
  await r.click('#go');
  r.check.atoms = await p.evaluate(() => window.__mm.S.sg.dots.length);
  const want = Math.round((await upper()) / 1e-6) * 1e-6;
  r.check.want_mm = (want * 1000).toFixed(4);

  state.caption = 'Drag the cursor on the screen face to the center of the upper spot';
  const cb = await r.box('#curve');
  await pageTo(Math.max(0, cb[1] + cb[3] + (await p.evaluate(() => scrollY)) - 700));
  const g = await p.evaluate(() => { const c = document.getElementById('curve'), q = c.getBoundingClientRect(); return [q.x, q.y, +c.dataset.half, +c.dataset.by, +c.dataset.boxH]; });
  const yOf = (z) => g[1] + g[3] + g[4] / 2 - z / (2 * g[2]) * g[4];
  const c2 = await r.box('#curve');
  state.zoom = [Math.max(0, c2[0] + 200), Math.max(0, yOf(want) - 180), 640, 360];
  await r.moveTo(g[0] + 500, yOf(0), 0.6);
  await r.dragTo(g[0] + 500, yOf(want) + 4, 0.8);
  for (let i = 0; i < 80; i++) { const c = await cur(); if (Math.abs(c - want) < 0.5e-6) break; await p.keyboard.press(c > want ? 'ArrowDown' : 'ArrowUp'); await r.tick(1); }
  await r.secs(1.2);
  r.check.cursor = await p.evaluate(() => (window.__mm.S.sg.cur * 1000).toFixed(4));
  state.zoom = null;
  await pageTo(0);

  state.caption = 'Record the cursor position. Then go on up to 1500 T/m';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: row };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(1.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().map((x) => [x.G_T_per_m, x.v_m_s, x.cursor_mm, x.top_mm])));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
