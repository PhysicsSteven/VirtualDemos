// How this works: Single Slit Diffraction (the Diffraction Grating demo with its Single slit aperture). Part 1's first reading: He-Ne
// laser (632.8 nm), a = 5.0 µm, L = 1.00 m, the first dark fringe. Expected: sin θ₁ = λ/a = 0.12656, y = L tan θ₁ = 12.76 cm, so the
// caliper (1 mm) reads 12.8 cm, where the light meter is lowest (about 1e-5; 2e-5 at 12.7 cm, 1.2e-4 at 12.9 cm).
require('./lib.cjs')({ demo: 'diffraction-grating', title: 'Single Slit Diffraction', query: '?aperture=single' }, async (r) => {
  const { state, p, W } = r;
  const can = await r.box('#view');
  const at = (id) => p.evaluate(([id, cx, cy]) => { const h = __dg.handles().find((k) => k.id === id); return [h.at[0] + cx, h.at[1] + cy]; }, [id, can[0], can[1]]);

  state.caption = 'Sample: the first dark fringe of a slit 5.0 µm wide, red He-Ne laser, wall 1.00 m away';
  await r.secs(3.0);

  state.caption = 'Switch to Measure: caliper jaws A and B appear on the wall, with a light meter on jaw B';
  await r.scrollRail('[data-mode="measure"]');
  await r.click('[data-mode="measure"]');
  await r.scrollRail('#rCal');
  await r.secs(1.0);

  state.caption = 'Jaw A sits on the center of the bright middle band. Drag jaw B out to the first dark fringe';
  const B = await at('jawB');
  state.zoom = [B[0] - 260, B[1] - 200, 448, 252];
  await r.moveTo(...B, 0.7);
  r.check.y = await r.dragUntil(-0.6, 0, '#rCal', '12.8 cm');
  await r.secs(0.4);

  state.caption = 'The light meter on jaw B reads 0.0000: jaw B is on the dark fringe, y = 12.8 cm';
  state.zoom = null;
  r.check.meter = await r.text('#rMeter');
  state.arrow = { rect: await r.box('#meterRow') };
  await r.secs(2.4);
  state.arrow = { rect: await r.box('#rCal') };
  await r.secs(1.4);

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

  state.caption = 'Measure dark fringes 1 to 5, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
