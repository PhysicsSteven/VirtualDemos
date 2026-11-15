// How this works: Vectors and Relative Motion. Part 1 of the Components worksheet with A = (−5, 2), dragged from
// the opening (4, 3) and recorded as the first row. Expected: |A| = √29 = 5.385, θ = 180° − tan⁻¹(2/5) = 158.2°.
require('./lib.cjs')({ demo: 'vectors', title: 'Vectors and Relative Motion', query: '?setup=comp' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#can');
  /* before the first frame: map canvas pixels to grid units from the demo itself. With snapping off, grabbing the tip
     sets A to the units under the pointer, so: find the tip (4, 3) by scanning, then read A at two pointer positions.
     The setup is then reset; none of this is recorded */
  const A = () => p.evaluate(() => window.__v3.S.A.slice());
  await p.evaluate(() => { window.__v3.S.snap = false; });
  let grab = null;
  for (let y = can[1] + 10; y < can[1] + can[3] && !grab; y += 18)
    for (let x = can[0] + 10; x < can[0] + can[2] && !grab; x += 18) {
      await p.mouse.move(x, y); await p.mouse.down(); const a = await A(); await p.mouse.up();
      if (a[0] !== 4 || a[1] !== 3) grab = [x, y];
      await p.evaluate(() => { window.__v3.S.A = [4, 3]; });
    }
  if (!grab) throw new Error('vector tip not found');
  await p.mouse.move(...grab); await p.mouse.down();
  await p.mouse.move(grab[0] - 100, grab[1] + 60); const a1 = await A();
  await p.mouse.move(grab[0] + 50, grab[1] - 40); const a2 = await A(); await p.mouse.up();
  const kx = 150 / (a2[0] - a1[0]), ky = 100 / (a2[1] - a1[1]);     /* px per unit, both positive */
  const px = (u, v) => [grab[0] + 50 + (u - a2[0]) * kx, grab[1] - 40 - (v - a2[1]) * ky];
  /* held relative to the canvas, since ticking Blind can scroll the page */
  const rel = (q) => [q[0] - can[0], q[1] - can[1]], tipR = rel(px(4, 3)), aimR = rel(px(-5, 2)), aim = px(-5, 2);
  const at = async (q) => { const c = await r.box('#can'); return [c[0] + q[0], c[1] + q[1]]; };
  await p.evaluate(() => { window.__v3.S.snap = true; });
  await p.click('#presets [data-p="comp"]'); await p.clock.runFor(200);
  r.check.aim = aim; r.check.k = [kx, ky];

  state.caption = 'Sample: the vector (−5, 2) from Worksheet 2, Part 1: its size and direction';
  await r.secs(3.0);

  state.caption = 'Hide the answers: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.8);

  state.caption = 'Set the vector: drag the tip of A to (−5, 2)';
  const cz = await r.box('#can');
  state.zoom = [cz[0] + cz[2] / 2 - 400, cz[1] + 40, 800, 450];
  await r.moveTo(...(await at(tipR)), 0.7);
  await p.mouse.down(); state.down = true; await r.tick(3);
  await r.moveTo(...(await at(aimR)), 1.2);
  for (let i = 0; i < 30; i++) {   /* closed loop on the demo's own value, in case the page shifted */
    const a = await A(); if (a[0] === -5 && a[1] === 2) break;
    state.ptr = [state.ptr[0] + Math.sign(-5 - a[0]) * 6, state.ptr[1] - Math.sign(2 - a[1]) * 6]; await p.mouse.move(...state.ptr); await r.tick();
  }
  await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  r.check.dragA = await A(); r.check.canAtDrag = await r.box('#can');
  await r.secs(1.0);

  state.caption = 'Work out its size and angle by hand, then untick Blind to check';
  state.zoom = null;
  await r.click('#labBlind');
  await r.scrollRail('#vecOut');
  r.check.out = await r.text('#vecOut');
  state.arrow = { rect: await r.box('#vecOut') };
  await r.secs(3.2);
  state.arrow = null;

  state.caption = 'Record these vectors. They go into the table';
  await r.scrollRail('#vecCapture');
  await r.click('#vecCapture');
  await r.tick(4);
  state.arrow = { rect: await r.box('#vecTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record each row, then send them all to the worksheet';
  const ex = await r.box('#vecExport');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await r.text('#vecTbl tbody tr');
});
