// How this works: Atoms in a Magnetic Field, worksheet "The Zeeman Effect". The first readings: the cadmium red line across the
// field, Blind on, at 0 T and 0.25 T, the cursor on the component at the longest wavelength. Expected: the normal Zeeman effect
// (¹D₂ → ¹P₁, g = 1 for both), Δλ = λ²μ_B B/(hc) = 4.838 pm at 0.25 T, read as 4.84 pm on the 0.01 pm cursor (key rows 1 and 2:
// 0.000 and 4.840 pm).
require('./lib.cjs')({ demo: 'magnetic-moments', title: 'Atoms in a Magnetic Field', query: '?setup=cadmium' }, async (r) => {
  const { state, p, W } = r;
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  const peak = () => p.evaluate(() => { const s = window.__mm.S.zee; return Math.round(Math.max(...window.__mm.zeeman(s.line, s.B, s.look).comps.map((c) => c.shift_pm)) / 0.01) * 0.01; });
  const cur = () => p.evaluate(() => window.__mm.S.zee.cur);
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
  const cursorTo = async (want) => {
    const cb = await r.box('#curve');
    await pageTo(Math.max(0, cb[1] + cb[3] + (await p.evaluate(() => scrollY)) - 700));
    const g = await p.evaluate(() => { const c = document.getElementById('curve'), q = c.getBoundingClientRect(); return [q.x, q.y, +c.dataset.span, +c.dataset.L, +c.dataset.pw]; });
    const xOf = (x) => g[0] + g[3] + (x + g[2]) / (2 * g[2]) * g[4];
    const c2 = await r.box('#curve');
    state.zoom = [Math.max(0, Math.min(xOf(want) - 320, W - 640)), Math.max(0, c2[1] + c2[3] - 360), 640, 360];
    await r.moveTo(xOf(await cur()), c2[1] + c2[3] / 2, 0.6);
    await r.dragTo(xOf(want) - 3, c2[1] + c2[3] / 2, 0.8);
    for (let i = 0; i < 80; i++) { const c = await cur(); if (Math.abs(c - want) < 0.005) break; await p.keyboard.press(c > want ? 'ArrowLeft' : 'ArrowRight'); await r.tick(1); }
    await r.secs(1.0);
    state.zoom = null;
    await pageTo(0);
    return p.evaluate(() => window.__mm.S.zee.cur.toFixed(3));
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the cadmium red line at 0 T and 0.25 T';
  await r.secs(2.0);

  state.caption = 'Choose Zeeman: cadmium red line, and turn Blind on in the Lab section';
  await r.click('[data-p="cadmium"]');
  await r.secs(0.4);
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  if (!(await p.evaluate(() => document.getElementById('labBlind').closest('details').open))) { await r.click('details.fold:has(#labBlind) > summary'); await r.tick(4); }
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.6);

  state.caption = 'Drag the field to 0 T. The cursor sits on the single line: record';
  const sb = await r.box('#sBz');
  await pageTo(sb[1] + (await p.evaluate(() => scrollY)) - 520);
  let b = await r.box('#sBz');
  state.zoom = [Math.max(0, b[0] - 200), b[1] - 240, 640, 360];
  r.check.B0 = await r.slide('#sBz', '#oBz', 0, 0.001, 0.2);
  await r.secs(0.6);
  state.zoom = null;
  await pageTo(0);
  r.check.c0 = await cursorTo(await peak());
  await record(1.4);

  state.caption = 'Now 0.25 T. Drag the cursor to the component at the longest wavelength';
  b = await r.box('#sBz');
  await pageTo(b[1] - 520 + (await p.evaluate(() => scrollY)));
  b = await r.box('#sBz');
  state.zoom = [Math.max(0, b[0] - 200), b[1] - 240, 640, 360];
  r.check.B1 = await r.slide('#sBz', '#oBz', 0.25, 0.001, 0.1);
  await r.secs(0.5);
  state.zoom = null;
  await pageTo(0);
  r.check.want = (await peak()).toFixed(3);
  r.check.c1 = await cursorTo(await peak());
  await record(1.6);

  state.caption = 'Go on in steps of 0.25 T up to 2.00 T, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().map((x) => [x.B_T, x.look, x.cursor_pm])));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
