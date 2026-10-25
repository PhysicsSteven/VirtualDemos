// How this works: Stellar Evolution. The main sequence table's first reading: a 0.50 M☉ star at age zero (the Sun setup).
// The demo's mass slider is logarithmic and rounds to 0.01 M☉; Reset puts the star back at age zero. Expected from the demo's
// own fits: L 0.0415 L☉, T 3710 K, R 0.492 R☉ (check: 0.492² × (3713/5772)⁴ = 0.0415), main sequence life 59.5 Gyr.
require('./lib.cjs')({ demo: 'hr-diagram', title: 'Stellar Evolution' }, async (r) => {
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
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: a star of 0.5 solar masses at the very start of its life';
  await r.secs(2.8);

  state.caption = 'Set the mass: drag the Initial mass slider down to 0.50 solar masses';
  const sl = await r.box('#mass');
  state.zoom = [W - 640, sl[1] - 170, 640, 360];
  await slide('#mass', 115, (v) => v >= 114 && v <= 117, 0.3);
  r.check.M = await r.text('#massOut');
  state.arrow = { rect: await r.box('#massOut') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Go back to age zero: press Reset';
  await r.click('#reset');
  await r.tick(3);
  const hr = await r.box('#hr');
  state.zoom = [hr[0], hr[1] - 60, 800, 450];
  state.arrow = { rect: await r.box('#count') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Read the luminosity, temperature and radius, and the time left on the main sequence';
  await r.scrollRail('#readSingle');
  r.check.left = await r.text('#rLeft'); r.check.L = await r.text('#rL'); r.check.T = await r.text('#rT'); r.check.R = await r.text('#rR');
  const a = await r.box('#readSingle .readout'), rr = await r.box('#rR');
  state.zoom = [W - 600, a[1] - 30, 600, 337.5];
  state.arrow = { rect: [a[0], a[1], a[2], rr[1] + rr[3] - a[1] + 4] };
  await r.secs(3.0);
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

  state.caption = 'Repeat for more masses up to 2 solar masses, each at age zero, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
