// How this works: Measuring a Cepheid on CCD Images (Cosmic Distance Ladder, Cepheid photometry). The first table's first reading:
// Cepheid C3 on night 1 against C1 (V 13.85): N_V 11292, N_C 20613, Δm 0.653, V 14.503 ± 0.022.
require('./lib.cjs')({ demo: 'distance-ladder', title: 'Measuring a Cepheid on CCD Images', query: '?ws=cepheid-photometry&setup=phot' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: Cepheid C3 on the first night, against comparison star C1';
  await r.secs(2.6);

  state.caption = 'Choose Cepheid photometry and Cepheid C3';
  state.arrow = { rect: await r.box('#presets [data-p=phot]') };
  await r.secs(1.2); state.arrow = null;
  await r.scrollRail('#phChips');
  await r.click('#phChips [data-c="2"]');
  await r.tick(4);

  state.caption = 'One aperture sits on the Cepheid, the other on C1; each counts its star’s light less the sky';
  const c = await r.box('#can');
  state.arrow = { rect: [c[0] + c[2] * 0.05, c[1] + c[3] * 0.18, c[2] * 0.9, c[3] * 0.5] };
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Read the Cepheid’s V: C1’s V plus the difference in magnitudes';
  await r.scrollRail('#phNv');
  r.check.Nv = await r.text('#phNv'); r.check.V = await r.text('#phV'); r.check.sig = await r.text('#phSig');
  const a = await r.box('#phNv'), b = await r.box('#phSig');
  state.zoom = [W - 600, a[1] - 60, 600, 337.5];
  state.arrow = { rect: [a[0] - 6, a[1] - 22, 300, b[1] + b[3] - a[1] + 26] };
  await r.secs(2.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table and the light curve';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Go to the next night and repeat for every night, then send the table to the worksheet';
  await r.scrollRail('#phNext');
  await r.click('#phNext');
  await r.secs(1.0);
  await r.scrollRail('.vd-readings');
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
