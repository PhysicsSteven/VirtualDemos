// How this works: Craters, Cooling and Surface Ages (Worksheet 2, Dating the Surface of Mars). Part 1's first reading:
// count the craters at least 4 km wide on the Southern highlands surface and read its age from the Martian crater clock.
// Expected: the simulated surface was built 4.0 Gyr old, so the count gives an age near 4.0 Gyr (the key's run: N = 49, 3.99 Gyr).
require('./lib.cjs')({ demo: 'craters', title: 'Craters, Cooling and Surface Ages', query: '?ws=intro-mars-ages&setup=south' }, async (r) => {
  const { state, W, p } = r;
  /* the readings sit below the fold at 1280 × 720: scroll the page (and the sidebar) to bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const row = (t) => p.evaluate((t) => { const d = [...document.querySelectorAll('#out dt')].find((e) => e.textContent.includes(t)).parentElement.getBoundingClientRect(); return [d.x, d.y, d.width, d.height]; }, t);
  const val = (t) => p.evaluate((t) => [...document.querySelectorAll('#out dt')].find((e) => e.textContent.includes(t)).nextElementSibling.textContent, t);

  state.caption = 'Sample reading: date the southern highlands of Mars by counting craters';
  await r.secs(2.6);

  state.caption = 'Switch to Flat, where the craters can be marked';
  await r.click('#dimSeg button[data-dim="flat"]');
  await r.secs(1.0);

  /* the craters to count, as the demo decides them, in rows so the pointer sweeps across the field */
  const list = await p.evaluate(() => { const S = window.__cr.S, L = S.surf.L;
    return S.surf.list.filter((c) => !c.gone && c.D >= S.Dc && c.x >= 0 && c.x < L && c.y >= 0 && c.y < L).map((c) => [c.x, c.y]); });
  const band = 200 / 6; list.sort((a, b) => { const ra = Math.floor(a[1] / band), rb = Math.floor(b[1] / band); return ra - rb || (ra % 2 ? b[0] - a[0] : a[0] - b[0]); });
  r.check.toMark = list.length;
  state.caption = `Click every crater at least as wide as the purple circle (${list.length} here)`;
  await p.evaluate(() => window.scrollTo(0, document.getElementById('scene').getBoundingClientRect().top + window.scrollY - 70));
  await r.tick(2);
  for (const [x, y] of list) {
    const [px, py] = await p.evaluate(([x, y]) => window.__cr.px(x, y), [x, y]);
    await r.moveTo(px, py, 0.1);
    state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(1); await p.mouse.up(); state.down = false; await r.tick(1);
  }
  await r.secs(0.6);

  r.check.N = await val('Craters you marked');
  r.check.age = await val('Age from your count');
  await into('#out');
  state.caption = `The demo turns the count into craters per km² and an age: ${r.check.age}`;
  state.arrow = { rect: await row('Age from your count') };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each surface, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
