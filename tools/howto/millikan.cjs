// How this works: Millikan Oil Drop, worksheet "Millikan's Oil Drops" (the demo's button too). Drop 1 of the worksheet: Many drops:
// charges in steps at ×4, Hide q/e ticked, 500 V, timed falling 1.0 mm with the plates off, then rising 1.0 mm with whichever
// plate + makes it rise. The table works out its radius and charge.
// Expected: the first followed drop carries one missing electron (+1 e, r about 0.45 µm), so Top plate + makes it fall faster and
// Top plate − makes it rise; q near 1.6 × 10⁻¹⁹ C (Brownian motion moves each timing a few percent).
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
  await r.secs(1.8);

  state.caption = 'Choose Many drops: charges in steps, set ×4, and under Lab tick Hide q/e';
  await r.click('[data-p="many"]');
  await r.click('#spdSeg [data-spd="4"]');
  await r.scrollRail('details.fold > summary');
  if (!(await p.evaluate(() => document.querySelector('details.fold').open))) await r.click('details.fold > summary');   /* the Lab fold opens */
  await r.scrollRail('#cHideE');
  await r.click('label:has(#cHideE) span');
  r.check.hideE = await p.evaluate(() => document.getElementById('cHideE').checked);
  await r.tick(6);
  r.check.drop = await p.evaluate(() => { const S = window.__mk.S, d = S.drops[S.pick]; return { id: d.id, n: d.n, r_um: +(d.r * 1e6).toFixed(4) }; });

  state.caption = 'Plates off, then Play: the orange lines time the circled drop falling 1.0 mm (sped up 3 times)';
  await r.scrollRail('#rec');
  await r.click('#polSeg [data-pol="0"]');
  await r.click('#play');
  state.zoom = await scope();
  r.speed = 3;
  r.check.fallTimed = await timed(30);
  r.check.fall = await r.text('#lastTime');
  r.speed = 1;
  await r.secs(0.4);
  state.zoom = null;

  state.caption = 'Record the time';
  await record(1.4);

  state.caption = 'Top plate +: this drop falls faster, so it is positive. Top plate − makes it rise';
  await r.scrollRail('#rec');
  await r.click('#polSeg [data-pol="1"]');
  state.zoom = await scope();
  await r.secs(1.0);
  state.zoom = null;
  await r.click('#polSeg [data-pol="-1"]');
  state.zoom = await scope();
  r.speed = 3;
  r.check.riseTimed = await timed(30);
  r.check.rise = await r.text('#lastTime');
  r.speed = 1;
  await r.secs(0.3);
  await r.click('#play');   /* pause, so the drop stays in view */
  state.zoom = null;

  state.caption = 'Record it. The table works out the drop\'s radius r and charge q';
  await record(2.2);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr:last-child td')].map((td) => td.textContent));

  state.caption = 'Time more drops the same way, then press Export to worksheet';
  await r.scrollRail('#expWs');
  state.arrow = { rect: await r.box('#expWs') };
  await r.secs(1.5);
  state.arrow = null;
});
