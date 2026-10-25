// How this works: Capacitors and Dielectrics. The geometry scan's first reading: Pull apart, connected, A = 144 cm², d = 1.00 cm,
// V = 100 V, Blind on. Expected: C = ε₀A/d = 8.8541878e-12 × 0.0144/0.0100 = 12.75 pF, Q = CV = 1.275 nC (shown 12.8 pF, 1.28 nC).
require('./lib.cjs')({ demo: 'capacitors', title: 'Capacitors and Dielectrics' }, async (r) => {
  const { state, p, W } = r;
  let pane;
  /* the separation grip on the top plate: probe the drawing with pointer moves and keep the highest spots that show the
     up and down cursor (the grip sits just above the plate; the plate itself is a quieter grip lower down) */
  const grip = () => p.evaluate(() => {
    const c = document.querySelector('#dCan'), b = c.getBoundingClientRect(), hits = [];
    for (let x = b.left + 200; x < b.right - 150; x += 3) for (let y = b.top + 60; y < b.top + 330; y += 3) {
      c.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true, pointerId: 9 }));
      if (c.style.cursor === 'ns-resize') hits.push([x, y]);
    }
    c.dispatchEvent(new PointerEvent('pointerleave', { bubbles: true, pointerId: 9 }));
    if (!hits.length) return null;
    const top = Math.min(...hits.map((h) => h[1])), g = hits.filter((h) => h[1] < top + 14);
    return [g.reduce((a, h) => a + h[0], 0) / g.length, g.reduce((a, h) => a + h[1], 0) / g.length];
  });

  state.caption = 'Sample reading: plates of 144 cm², 1.00 cm apart, connected to the 100 V battery';
  await r.secs(3.0);

  state.caption = 'Hide the predictions: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.8);

  state.caption = 'The page opens with the plates moving: pause them';
  await r.click('#play');
  await r.secs(0.6);

  state.caption = 'Set the separation: drag the grip on the top plate down to 1.00 cm';
  pane = await r.box('#dPane');                               /* read again: ticking Blind can scroll the page */
  state.zoom = [pane[0] + 140, pane[1] + 20, 720, 405];
  const g = await grip();
  r.check.grip = g;
  await r.moveTo(g[0], g[1] + 2, 0.9);
  r.check.d = await r.dragUntil(0, 1, '#oD', '1.00 cm');
  await r.secs(1.2);
  state.zoom = null;

  state.caption = 'Read C, Q and V on the meters';
  r.check.meas = (await r.text('#meas')).replace(/\s+/g, ' ');
  pane = await r.box('#dPane');
  state.zoom = [pane[0] + pane[2] - 560, pane[1], 560, 315];
  state.arrow = { rect: [pane[0] + pane[2] - 178, pane[1] + 48, 170, 52] };   /* the C, Q, V and E meters, top right */
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at four more separations, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map((td) => (td.querySelector('input') ? td.querySelector('input').value : td.textContent)).join(' | '));
});
