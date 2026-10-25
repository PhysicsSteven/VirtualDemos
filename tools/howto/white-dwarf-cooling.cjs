// How this works: White Dwarf Cooling. Mestel's law table's first reading: the Mestel cooling law setup, paused, at a cooling age
// of 100 Myr (the slider is log10 of the age in years, so 8.00). Expected: 0.60 M☉ carbon/oxygen, ideal gas ions, no freezing;
// L 5.96 × 10⁻³ L☉, Tc 1.68 × 10⁷ K, Teff 14,225 K. Checks: (2/5)(3/2)NkTc/L with N 5.2388 × 10⁵⁵ gives 101 Myr; L = 4πR²σTeff⁴
// with R 8841 km gives 14,225 K.
require('./lib.cjs')({ demo: 'white-dwarf-cooling', title: 'White Dwarf Cooling' }, async (r) => {
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

  state.caption = 'Sample reading: a white dwarf that follows Mestel\'s law, 100 million years after it formed';
  await r.secs(2.8);

  state.caption = 'Choose the Mestel cooling law setup';
  await r.click('[data-p="mestel"]');
  await r.secs(0.6);

  state.caption = 'It starts cooling at once: press Pause';
  state.arrow = { rect: await r.box('#play') };
  await r.click('#play');
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Set the age: drag the Cooling age slider to 100 Myr';
  await r.scrollRail('#age');
  const sl = await r.box('#age');
  state.zoom = [W - 640, sl[1] - 170, 640, 360];
  await slide('#age', 8, (v) => Math.abs(v - 8) < 1e-6, 0.25);
  r.check.age = await r.text('#ageOut');
  state.arrow = { rect: await r.box('#ageOut') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Read the luminosity, the core temperature and the surface temperature';
  r.check.L = await r.text('#rL'); r.check.Tc = await r.text('#rT'); r.check.Te = await r.text('#rTe');
  const a = await r.box('#rL'), b = await r.box('#rTe');
  state.arrow = { rect: [a[0] - 6, a[1] - 22, a[2] + 12, b[1] + b[3] - a[1] + 26] };
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

  state.caption = 'Repeat at ages up to 10 Gyr, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
