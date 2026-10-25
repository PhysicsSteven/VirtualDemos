// How this works: Blackbody Radiation. Part 1's first reading: a blackbody at 1000 K. Expected: λmax = b/T = 2.897772 × 10⁻³ m·K /
// 1000 K = 2897.8 nm, F = σT⁴ = 5.670374 × 10⁻⁸ × 1000⁴ = 56 704 W/m². The slider is logarithmic: step 236 of 1000 is
// 300 × (50 000/300)^0.236 = 1003 K, which the demo rounds to the nearest 10 K, 1000 K.
require('./lib.cjs')({ demo: 'blackbody', title: 'Blackbody Radiation' }, async (r) => {
  const { state, p, W } = r;
  /* drag a slider's thumb from its value to near want, then a fraction of a pixel per frame until its value is want */
  const slide = async (sel, want, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 1.0);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && (await val()) !== want; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  };
  const chart = await r.box('#chart');
  state.ptr = [1120, 640]; await p.mouse.move(...state.ptr);   /* off the chart, so no probe line shows before the first step */

  state.caption = 'Sample reading: the peak wavelength and the flux of a blackbody at 1,000 K';
  await r.secs(3.0);

  state.caption = 'Set the temperature: drag the Temperature T slider down to 1,000 K';
  await r.scrollRail('#temp');
  const sl = await r.box('#temp');
  state.zoom = [W - 640, sl[1] - 200, 640, 360];
  await slide('#temp', 236, 0.25);
  r.check.T = await r.text('#tempOut');
  state.arrow = { rect: await r.box('#tempOut') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'The peak moves out to 2.9 μm, in the infrared';
  state.zoom = [chart[0], chart[1], chart[2], chart[2] * 9 / 16];
  await r.moveTo(chart[0] + 120, chart[1] + chart[3] + 90, 0.6);   /* below the chart, so no probe line covers the curve */
  await r.secs(2.6);
  state.zoom = null;

  state.caption = 'Read the peak wavelength b/T and the flux σT⁴';
  await r.scrollRail('#rPk');
  r.check.peak = await r.text('#rPk');
  r.check.flux = await r.text('#rF');
  state.arrow = { rect: await r.box('#rPk') };
  await r.secs(1.3);
  state.arrow = { rect: await r.box('#rF') };
  await r.secs(1.3);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at about ten temperatures up to 30,000 K, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map(td => td.textContent));
  r.check.full = await p.evaluate(() => window.vdRows()[0]);
});
