// How this works: X-Ray Diffraction (the Electron Diffraction demo's X-rays mode). Part 1's first reading: copper tube on NaCl, a full
// scan, then the crystal turned to the top of the first Kα peak. Expected: λ(Cu Kα₁) = hc/E = 1239.842 eV·nm/8047.78 eV = 0.15406 nm,
// sin θ = λ/2d = 0.15406/0.5640 = 0.27316, θ = 15.85°, the highest count rate on the 0.05° steps (2605/s, against 2381 at 15.80° and
// 2415 at 15.90°). The first peak of the scan, at 14.29°, is Kβ (8905.29 eV).
require('./lib.cjs')({ demo: 'electron-diffraction', title: 'X-Ray Diffraction' }, async (r) => {
  const { state, p, W } = r;
  const thumbX = (box, min, max, v) => box[0] + 8 + (box[2] - 16) * (v - min) / (max - min);

  state.caption = 'Sample: the first copper Kα peak reflected by the NaCl crystal';
  await r.secs(2.6);

  state.caption = 'Switch to X-rays. The copper tube and the NaCl crystal are already picked';
  await r.click('#bXray');
  await r.tick(4);
  await r.scrollRail('#xCu');
  state.arrow = { rect: await r.box('#xCu') };
  await r.secs(0.8);
  state.arrow = { rect: await r.box('#xNaCl') };
  await r.secs(0.8);
  state.arrow = null;

  state.caption = 'Scan the whole range once to see the spectrum (shown 4× faster)';
  await r.scrollRail('#xScan');
  await r.click('#xScan');
  r.speed = 4;
  await r.moveTo(760, 560, 0.5);
  for (let i = 0; i < 300 && (await p.evaluate(() => __ed.X.scan)); i++) await r.tick();
  r.speed = 1;
  await r.secs(0.6);

  state.caption = 'Turn the crystal to the top of the first Kα peak, where the count rate is highest';
  await r.scrollRail('#xTheta');
  const tb = await r.box('#xTheta');
  await r.moveTo(thumbX(tb, 2, 65, 65), tb[1] + tb[3] / 2, 0.6);
  await r.dragTo(thumbX(tb, 2, 65, 16.6), tb[1] + tb[3] / 2, 1.0);
  await r.moveTo(...state.ptr, 0.1);
  r.check.theta = await r.dragUntil(-0.1, 0, '#xThetaOut', '15.85°');
  r.check.rate = await r.text('#xRate');
  state.arrow = { rect: await r.box('#xRate') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Record the reading: the tube, crystal, angle and count rate go into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tbl = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tbl[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the top of each Kα peak, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.7);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
