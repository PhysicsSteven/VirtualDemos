// How this works: Why Balmer Lines Peak in A Stars (Spectra Explorer, Hydrogen in stars mode). The first table's first reading:
// 4000 K at 20 N/m². Expected (Boltzmann and Saha, the demo's CORE): N₂/N₁ 5.65×10⁻¹³, N_II/N_I 1.24×10⁻¹¹.
require('./lib.cjs')({ demo: 'spectra', title: 'Spectra Explorer' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the hydrogen in the atmosphere of a 4000 K star';
  await r.secs(2.6);

  state.caption = 'Choose the Hydrogen in stars mode';
  await r.scrollRail('#modeSeg');
  const m = await r.box('#modeSeg');
  state.zoom = [W - 640, m[1] - 120, 640, 360];
  await r.click('#modeSeg [data-m=stars]');
  await r.tick(4);
  state.zoom = null;
  state.arrow = { rect: await r.box('#cStars') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Set the temperature: drag the Surface temperature slider down to 4000 K';
  await r.scrollRail('#starT');
  const sl = await r.box('#starT');
  state.zoom = [W - 640, sl[1] - 170, 640, 360];
  r.check.T = await r.slide('#starT', () => p.evaluate(() => window.__stars.ST.T), 4000, 0);
  state.arrow = { rect: await r.box('#starTOut') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;
  await r.secs(1.2);

  state.caption = 'Read the excited share N₂/N₁, the ionized share and the share of all hydrogen on n = 2';
  r.check.r12 = await r.text('#sR12'); r.check.rion = await r.text('#sRion'); r.check.f2 = await r.text('#sF2');
  const a = await r.box('#starsBox .readout');
  state.zoom = [W - 600, a[1] - 60, 600, 337.5];
  state.arrow = { rect: a };
  await r.secs(3.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at more temperatures up to 25 000 K, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
