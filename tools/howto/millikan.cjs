// How this works: Millikan Oil Drop (no worksheet; the demo's own button). One drop from the "Make a drop rise" setup: timed
// falling 1.0 mm with the plates off, then rising 1.0 mm with the top plate + at 450 V. The table works out its radius and
// charge: q/e −2.87 in this take (the followed drop carries 3 extra electrons; Brownian motion moves each timing a little).
require('./lib.cjs')({ demo: 'millikan', title: 'Millikan Oil Drop' }, async (r) => {
  const { state, p, W } = r;
  /* the telescope view, the circled drop and the orange lines, wherever the page has scrolled */
  const scope = async () => { const c = await r.box('#can'); return [c[0] + 290, Math.max(0, c[1] + 10), 740, 416.25]; };
  const timed = async (max) => { for (let i = 0; i < max * r.FPS; i++) { if (await p.evaluate(() => !!window.__mk.S.last)) return true; await r.tick(); } return false; };
  const record = async (s) => {
    await r.scrollRail('#rec');
    await r.click('#rec');
    await r.tick(4);
    await r.scrollRail('#rowsTbl');
    await p.evaluate(() => { const t = document.querySelector('#rowsTbl').closest('.twrap'); t.scrollLeft = t.scrollWidth; });   /* r, q and q/e */
    await r.tick();
    const row = await r.box('#rowsTbl tbody tr:last-child');
    state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
    state.arrow = { rect: row };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };

  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: time one oil drop falling, then rising, to find its charge';
  await r.secs(2.4);

  state.caption = 'Choose Make a drop rise. The circled drop is the one you follow';
  await r.click('[data-p="rise"]');
  state.zoom = await scope();
  await r.secs(1.4);
  r.check.drop = await p.evaluate(() => { const S = window.__mk.S, d = S.drops[S.pick]; return { id: d.id, n: d.n, r_um: +(d.r * 1e6).toFixed(4) }; });

  state.zoom = null;
  state.caption = 'Turn the plates off and press Play. The orange lines time its fall (shown at ×4)';
  await r.click('#polSeg [data-pol="0"]');
  await r.click('#play');
  state.zoom = await scope();
  r.check.fallTimed = await timed(20);
  r.check.fall = await r.text('#lastTime');
  await r.secs(0.6);
  state.zoom = null;

  state.caption = 'Record the fall time';
  await record(1.4);

  state.caption = 'Now Top plate + at 450 V: the field pushes the drop up. Time the rise';
  await r.scrollRail('#rec');
  await r.click('#polSeg [data-pol="1"]');
  state.zoom = await scope();
  r.check.riseTimed = await timed(20);
  r.check.rise = await r.text('#lastTime');
  await r.secs(0.4);
  await r.click('#play');   /* pause, so the drop stays in view */
  state.zoom = null;

  state.caption = 'Record it. The table works out q/e: near 3, as Brownian motion scatters each time';
  await record(2.6);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr:last-child td')].map((td) => td.textContent));

  state.caption = 'Time more drops: their charges bunch at whole numbers of e';
  await r.click('#nextDrop');
  await r.secs(1.6);
});
