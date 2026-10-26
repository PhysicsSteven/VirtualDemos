// How this works: CT Numbers and Proton Range, worksheet mp-ct-range. The first reading: Calibration scan, 120 kV, the phantom
// scanned and all nine regions recorded at once. Each scan draws its noise from a fixed seed, so the numbers match the key's
// readings 1 to 9 (the first Scan after the setup is scan 2): B-100 reads 804.9 ± 10.1 HU against a fitted 805.3 HU, with
// k_coh 1.399×10⁻³ and k_ph 3.805×10⁻⁵, and the mean detected photon energy is 76.7 keV.
// Recorded in 3D (?view=3d), since the scanner is the point and VD3.lowPower is set in the container.
require('./lib.cjs')({ demo: 'ct-range', title: 'CT Numbers and Proton Range', query: '?view=3d' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: a calibration scan of the phantom at 120 kV';
  await r.secs(2.6);

  state.caption = 'Choose Calibration scan, 120 kV';
  await r.scrollRail('[data-p="scan120"]');
  await r.click('[data-p="scan120"]');
  await r.secs(0.6);

  state.caption = 'Scan the phantom: the tube turns around it and the slice appears on the console';
  await r.click('#play');
  const sc = await r.box('#scene');
  const zw = Math.min(sc[2] * 0.75, sc[3] * 16 / 9);
  state.zoom = [sc[0], sc[1], zw, zw * 9 / 16];
  await r.moveTo(sc[0] + sc[2] * 0.25, sc[1] + sc[3] * 0.5, 0.5);
  await r.secs(3.0);
  state.zoom = null;

  state.caption = 'Read the graph: each insert\'s CT number against its electron density, with the fit';
  await p.evaluate(() => document.getElementById('plot').scrollIntoView({ block: 'center' })); await r.tick(2);
  const pl = await r.box('#plot');
  state.arrow = { rect: pl };
  await r.secs(3.0);
  state.arrow = null;

  state.caption = 'Read the insert\'s CT number and the fit constants';
  await r.scrollRail('#out');
  const o = await r.box('#out');
  state.arrow = { rect: [o[0], o[1], o[2], Math.min(o[3], r.H - 24 - o[1])] };
  state.capTop = true;
  await r.secs(2.6);
  state.arrow = null; state.capTop = false;
  r.check.out = await p.evaluate(() => document.getElementById('out').innerText.replace(/\n/g, ' | '));

  state.caption = 'Record the reading: all nine regions go into the table at once';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const t1 = await r.box('.vd-readings tbody tr:nth-child(1)'), t3 = await r.box('.vd-readings tbody tr:nth-child(3)');
  const t = [t1[0], t1[1], t1[2], t3[1] + t3[3] - t1[1]];
  state.zoom = [W - 660, Math.max(0, Math.min(t[1] - 120, r.H - 360)), 640, 360];
  state.arrow = { rect: t }; state.capTop = true;
  await r.secs(2.2);
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Scan again and at 80 kV, recording each, then send them to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
