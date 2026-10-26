// How this works: Gamma Spectroscopy, worksheet "Gamma Spectroscopy: Calibrating a Detector". The first reading: the Energy
// calibration setup (cesium 137 at 2 cm, 120 s live, shown at ×100), Clear, Acquire, Mark peak off, a region of interest dragged
// across the photopeak (about ±1.3 FWHM, as the key's), Record reading. Expected (key row 1): centroid 473.94 ± 0.06 channels,
// net 59394 counts, FWHM 31.9 channels; the setup puts 661.7 keV near channel 475 of 2048. Counts are random, so a run differs
// by a few hundred counts and a few hundredths of a channel.
require('./lib.cjs')({ demo: 'gamma-spectroscopy', title: 'Gamma Spectroscopy' }, async (r) => {
  const { state, p, W } = r;
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
    const row = await r.box('.vd-readings tbody tr:last-child');
    state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
    state.arrow = { rect: row };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  const exportEnd = async (s) => {
    const ex = await r.box('.vd-export');
    await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
    state.arrow = { rect: ex };
    await r.secs(s);
    r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
    r.check.ws = await p.evaluate(() => window.vdWorksheet());
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the 661.7 keV photopeak of cesium 137';
  await r.secs(2.4);

  state.caption = 'Choose Energy calibration. Cesium 137 sits 2 cm from the crystal';
  await r.click('[data-p="cal"]');
  await r.secs(0.6);

  state.caption = 'Clear the spectrum and acquire 120 s of live time (the run is shown at ×100)';
  await r.click('#clr');
  await r.tick(3);
  if ((await r.text('#acq')) !== 'Stop') await r.click('#acq');
  await r.moveTo(400, 420, 0.5);
  for (let i = 0; i < 300 && (await p.evaluate(() => window.__gs.acquiring)); i++) await r.tick();
  r.check.live = await p.evaluate(() => window.__gs.spec.live);
  await r.secs(0.6);

  state.caption = 'Turn Mark peak off, then drag across the photopeak to set a region of interest';
  if (await p.evaluate(() => window.__gs.S.mark)) { await r.click('#markBtn'); await r.tick(3); }
  const g = await p.evaluate(() => { const c = document.getElementById('can').getBoundingClientRect(), M = window.__gs.geom().mca, sp = window.__gs.spec.counts;
    let im = 300; for (let i = 300; i < 700; i++) if (sp[i] > sp[im]) im = i;
    return { x: c.x, y: c.y, a: c.x + M.X(im - 42), b: c.x + M.X(im + 43), yy: c.y + (M.box.T + M.box.B) / 2, im, box: [c.x + M.box.L, c.y + M.box.T, M.box.R - M.box.L, M.box.B - M.box.T] }; });
  r.check.peakCh = g.im;
  state.zoom = [Math.max(0, Math.min(g.a - 260, W - 640)), Math.max(0, Math.min(g.yy - 180, r.H - 360)), 640, 360];
  await r.moveTo(g.a, g.yy, 0.6);
  await r.dragTo(g.b, g.yy, 1.0);
  await r.secs(1.0);
  state.zoom = null;
  r.check.roi = await p.evaluate(() => JSON.stringify(window.__gs.rois));

  state.caption = 'Record the reading: the centroid and net counts of the peak';
  await record(2.0);

  state.caption = 'Then each clear photopeak of Co-60, Na-22, Mn-54 and Co-57, clearing between sources';
  await exportEnd(2.6);
});
