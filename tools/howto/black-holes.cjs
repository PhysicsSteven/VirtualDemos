// How this works: Black Holes and Gravitational Lensing. The first table's first reading: the Microlensing event setup, paused,
// with the lens mass at 0.1 M☉ (the slider is log10 of the mass, so its left end, −1) and the distances kept at 4 and 8 kpc.
// Expected: r_s = 2GM/c² = 295 m, θ_E² = 2r_s(1/D_L − 1/D_S) gives θ_E = 1.547 × 10⁻⁹ rad = 0.319 mas, t_E at 200 km/s 11.0 d.
require('./lib.cjs')({ demo: 'black-holes', title: 'Black Holes and Gravitational Lensing' }, async (r) => {
  const { state, p, W } = r;
  /* drag a slider's thumb from its value to near want, then a fraction of a pixel per frame until its value is in [lo, hi] */
  const slide = async (sel, want, ok, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 1.0);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && !ok(await val()); i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  };
  state.ptr = [1120, 640]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the Einstein radius of a lens of 0.1 solar mass';
  await r.secs(2.8);

  state.caption = 'Choose the Microlensing event setup';
  await r.click('[data-p="micro"]');
  await r.secs(0.6);

  state.caption = 'Stop the event moving: press Pause';
  state.arrow = { rect: await r.box('#play') };
  await r.click('#play');
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Set the lens mass: drag the Mass M slider all the way left, to 0.1 solar mass';
  await r.scrollRail('#logM');
  const sl = await r.box('#logM');
  state.zoom = [W - 640, sl[1] - 140, 640, 360];
  await slide('#logM', -1, (v) => v <= -1 + 1e-9, 0.5);
  r.check.M = await r.text('#mOut');
  state.arrow = { rect: await r.box('#mOut') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Keep both distances, and read the Einstein radius';
  await r.scrollRail('#secLens');
  r.check.DL = await r.text('#dlOut'); r.check.DS = await r.text('#dsOut'); r.check.thetaE = await r.text('#rTE');
  const tb0 = await r.box('#rTE');
  state.zoom = [W - 640, tb0[1] - 190, 640, 360];
  state.arrow = { rect: [tb0[0] - 6, tb0[1] - 22, tb0[2] + 12, tb0[3] + 28] };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for masses up to 10 solar masses, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
