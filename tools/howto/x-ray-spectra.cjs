// How this works: Shells, the Periodic Table and X Rays, worksheet "X-Ray Spectra and Moseley's Law". The first reading: Copper
// tube, 30 kV, Blind on, the voltage lowered to 10 kV, the cursor set at the shortest wavelength, recorded. Expected (Duane–Hunt):
// λ_min = hc/eV = 1239.84198 eV·nm / 10 kV = 123.98 pm on the 0.01 pm cursor (key row 1: 123.98 pm, 10.0003 keV).
require('./lib.cjs')({ demo: 'shells-and-x-rays', title: 'Shells, the Periodic Table and X Rays', query: '?setup=copper' }, async (r) => {
  const { state, p, W } = r;
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  const cur = () => p.evaluate(() => window.__sx.S.xr.cur);
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: copper at 10 kV, the shortest wavelength in the spectrum';
  await r.secs(2.4);

  state.caption = 'Choose Copper tube, 30 kV, and turn Blind on in the Lab section';
  await r.click('[data-p="copper"]');
  await r.secs(0.4);
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  if (!(await p.evaluate(() => document.getElementById('labBlind').closest('details').open))) { await r.click('details.fold:has(#labBlind) > summary'); await r.tick(4); }
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.6);

  state.caption = 'Drag the tube voltage down to 10 kV';
  let b = await r.box('#sV');
  await pageTo(b[1] + (await p.evaluate(() => scrollY)) - 520);
  b = await r.box('#sV');
  state.zoom = [Math.max(0, b[0] - 200), b[1] - 240, 640, 360];
  r.check.V = await r.slide('#sV', '#oV', 10, 0.01, 3);
  await r.secs(0.6);
  state.zoom = null;

  const want = await p.evaluate(() => Math.round(window.__sx.lamPm(window.__sx.S.xr.kV * 1000) / 0.01) * 0.01);
  r.check.want = want.toFixed(2);
  state.caption = 'Drag the cursor to where the spectrum starts to rise, the shortest wavelength';
  const cb = await r.box('#curve');
  await pageTo(Math.max(0, cb[1] + cb[3] + (await p.evaluate(() => scrollY)) - 700));
  const g = await p.evaluate(() => { const c = document.getElementById('curve'), q = c.getBoundingClientRect(); return [q.x, q.y, q.height, +c.dataset.x0, +c.dataset.x1, +c.dataset.L, +c.dataset.pw]; });
  const xOf = (v) => g[0] + g[5] + (v - g[3]) / (g[4] - g[3]) * g[6];
  state.zoom = [Math.max(0, Math.min(xOf(want) - 320, W - 640)), Math.max(0, g[1] + g[2] - 360), 640, 360];
  await r.moveTo(xOf(await cur()), g[1] + g[2] / 2, 0.6);
  await r.dragTo(xOf(want) + 3, g[1] + g[2] / 2, 0.8);
  r.check.afterDrag = (await cur()).toFixed(2);
  await p.focus('#curve');   /* the arrow keys go to the graph, as after a click on it */
  for (let i = 0; i < 200; i++) { const c = await cur(); if (Math.abs(c - want) < 0.005) break; await p.keyboard.press(Math.abs(c - want) > 1 ? (c > want ? 'Shift+ArrowLeft' : 'Shift+ArrowRight') : (c > want ? 'ArrowLeft' : 'ArrowRight')); await r.tick(1); }
  await r.secs(1.2);
  state.zoom = null;
  r.check.cur = (await cur()).toFixed(2);
  await pageTo(0);

  state.caption = 'Record the reading. Then go on at 15, 20, 25, 30, 40, 50 and 60 kV';
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
  await r.secs(1.8);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
