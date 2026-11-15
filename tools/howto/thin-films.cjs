// How this works: Thin Film Interference. Part 1's first reading: the Black film setup (soap film n_f = 1.33 in air, normal
// incidence, unpolarized) at λ₀ = 400 nm, thickened from 10 nm to the first maximum of R. Expected: one reflection is shifted, so
// the first maximum is a quarter wave, t = λ₀/(4n_f) = 75.2 nm, with R = ((1 − 1.33²)/(1 + 1.33²))² = 7.71%.
require('./lib.cjs')({ demo: 'thin-films', title: 'Thin Film Interference' }, async (r) => {
  const { state, p } = r;
  /* before the first frame: where the film's bottom surface sits for a given t, from the demo's own ray geometry
     (t = 2000 nm × (hf/hfMax)³ below the top surface y1 in the Rays view); then the setup is put back */
  await p.click('[data-p="black"]'); await p.clock.runFor(200);
  const geo = await p.evaluate(() => { const g = __tf.rayGeom(), [cx, cy] = __tf.canvasBox('m'); return { x: cx + g.R.x + g.R.w * 0.7, y1: cy + g.y1, hfMax: g.hfMax, R: [cx + g.R.x, cy + g.R.y, g.R.w, g.R.h] }; });
  const GX = geo.x, yAt = (t) => geo.y1 + geo.hfMax * Math.cbrt(t / 2000);
  r.check.geo = geo;
  await p.click('[data-p="two"]'); await p.mouse.move(r.W / 2, r.H / 2); await p.clock.runFor(300);

  state.caption = "Sample: Part 1's first reading, the thinnest soap film that reflects 400 nm most strongly";
  await r.secs(3.0);

  state.caption = 'Pick the Black film setup: a soap film in air, 10 nm thick';
  await r.click('[data-p="black"]');
  await r.secs(0.8);

  state.caption = 'Set λ₀ to 400 nm: drag the marker on the spectrum';
  const sc = await r.box('#sCan');
  state.zoom = [sc[0], sc[1] - 220, 944, 531];   /* the spectrum with its λ₀ marker, and the film above it */
  await r.moveTo(441, 600, 0.7);
  await p.mouse.down(); state.down = true; await r.tick(3);
  await r.moveTo(113, 600, 0.9);
  for (let i = 0; i < 60 && (await r.text('#lamOut')) !== '400 nm'; i++) {
    const l = +(await r.text('#lamOut')).replace(/\D/g, ''); state.ptr = [state.ptr[0] + (l < 400 ? 0.5 : -0.5), 600]; await p.mouse.move(...state.ptr); await r.tick();
  }
  await r.tick(3); await p.mouse.up(); state.down = false; await r.tick();
  r.check.lam = await r.text('#lamOut');
  await r.secs(0.5);

  state.caption = 'Thicken the film slowly: drag its bottom surface down until R stops rising';
  state.zoom = [200, 160, 760, 427.5];   /* the rays, the film and its grip, and t and R at the top right */
  await r.moveTo(GX, yAt(10), 0.7);
  await p.mouse.down(); state.down = true; await r.tick(3);
  await r.moveTo(GX, yAt(60), 1.3);
  await r.moveTo(GX, yAt(98), 1.2);       /* past the peak: R starts to fall again */
  await r.tick(4);
  await r.moveTo(GX, yAt(75.2), 0.8);
  for (let i = 0; i < 40 && (await r.text('#tOut')) !== '75.2 nm'; i++) {
    const t = await p.evaluate(() => __tf.S.t); state.ptr = [GX, state.ptr[1] + (t < 75.2 ? 0.004 : -0.004)]; await p.mouse.move(...state.ptr); await r.tick();
  }
  await r.tick(3); await p.mouse.up(); state.down = false; await r.tick();
  r.check.t = await r.text('#tOut');
  r.check.tag = await r.text('#tag');
  state.arrow = { rect: await r.box('#tag') };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('table.rows tbody tr') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Repeat for each wavelength, then send the readings to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.7);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await r.text('table.rows tbody tr');
});
