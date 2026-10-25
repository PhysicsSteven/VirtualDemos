// How this works: Static Equilibrium. The first Part 1 reading: Plank on two supports (4.0 m, 20 kg plank on supports at
// 0.50 m and 2.50 m, 60 kg painter) with the painter at x = 0. Expected, torques about the left support:
// F₂ = g(20 × 1.50 − 60 × 0.50)/2.00 = 0.0 N, F₁ = (20 + 60) × 9.81 = 784.8 N: the plank is just about to tip.
require('./lib.cjs')({ demo: 'equilibrium', title: 'Static Equilibrium' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#can');
  // where the painter is in the 3D view: the canvas shows a pointer cursor over anything that drags; the painter is what stands above the plank
  const painter = () => p.evaluate(() => {
    const can = document.querySelector('#can'), cr = can.getBoundingClientRect(), hits = [];
    for (let x = cr.left; x < cr.right; x += 4) for (let y = cr.top; y < cr.bottom; y += 4) {
      can.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true, pointerId: 9, pointerType: 'mouse', buttons: 0 }));
      if (can.style.cursor === 'pointer') hits.push([x, y]);
    }
    const ys = hits.map(h => h[1]).sort((a, b) => a - b), top = ys[0], beam = ys[ys.length - 1];
    const body = hits.filter(h => h[1] < top + 0.6 * (beam - top));
    return [body.reduce((a, h) => a + h[0], 0) / body.length, body.reduce((a, h) => a + h[1], 0) / body.length];
  });

  state.caption = 'Sample reading: the support forces with the painter at the left end, x = 0';
  await r.secs(3.0);

  state.caption = 'Choose the setup: click Plank on two supports';
  await r.click('#presets [data-p="plank"]');
  await r.secs(1.2);

  state.caption = 'Move the painter: drag them to the left end, until x reads 0.00 m';
  await r.scrollRail('#o_x1');
  state.zoom = [can[0] + 60, can[1] + 60, 800, 450];
  await r.moveTo(...(await painter()), 0.9);
  r.check.x = await r.dragUntil(-2, 0, '#o_x1', '0.00 m');
  state.zoom = null;
  state.arrow = { rect: await r.box('#o_x1') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Read the support forces. F₂ is zero: the plank is about to tip';
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat every 0.25 m out to 2.50 m, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings table.rows tr')].map(tr => tr.innerText.replace(/\s+/g, ' ')).join(' / '));
});
