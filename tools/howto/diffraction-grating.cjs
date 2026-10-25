// How this works: Diffraction Grating. Part 1's first reading: the He-Ne laser (632.8 nm) through 600 lines/mm, L = 0.50 m, first order.
// Expected: d = 1.6667 µm, sin θ₁ = 0.6328/1.6667 = 0.37968, θ₁ = 22.31°, y = L tan θ₁ = 20.52 cm, so the caliper (1 mm) reads 20.5 cm.
require('./lib.cjs')({ demo: 'diffraction-grating', title: 'Diffraction Grating' }, async (r) => {
  const { state, p, W } = r;
  const can = await r.box('#view');
  const at = (id) => p.evaluate(([id, cx, cy]) => { const h = __dg.handles().find((k) => k.id === id); return [h.at[0] + cx, h.at[1] + cy]; }, [id, can[0], can[1]]);

  state.caption = 'Sample: the first order of the red He-Ne laser through 600 lines/mm, with the wall 0.50 m away';
  await r.secs(3.0);

  state.caption = 'Switch to Measure: the caliper jaws A and B appear on the wall';
  await r.scrollRail('[data-mode="measure"]');
  await r.click('[data-mode="measure"]');
  await r.scrollRail('#rCal');
  await r.secs(0.8);

  state.caption = 'Set L = 0.50 m: drag the grating toward the wall';
  state.zoom = [can[0] + 150, can[1] + 190, 640, 360];
  await r.moveTo(...(await at('L')), 0.8);
  r.check.L = await r.dragUntil(0, -3, '#oL', '0.50 m');
  await r.secs(0.8);

  state.caption = 'Jaw A sits on the center spot, 0 on the stick. Drag jaw B onto the center of the m = 1 spot';
  const B = await at('jawB');
  state.zoom = [B[0] - 200, B[1] - 160, 384, 216];
  await r.secs(1.2);
  await r.moveTo(...B, 0.6);
  r.check.y = await r.dragUntil(0.25, 0, '#rCal', '20.5 cm');
  state.zoom = null;
  state.arrow = { rect: await r.box('#rCal') };
  await r.secs(1.8);

  state.caption = 'The order box says m = 1. Record the reading: it goes into the table';
  state.arrow = { rect: await r.box('#inM') };
  await r.secs(1.4);
  state.arrow = null;
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Measure every order for each laser, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
