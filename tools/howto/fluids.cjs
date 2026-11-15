// How this works: Fluids. The first pressure reading on the worksheet: gauge pressure 0.20 m down in water.
// Expected: P_gauge = ρgh = 1000 kg/m³ × 9.81 m/s² × 0.20 m = 1962 Pa = 1.96 kPa.
require('./lib.cjs')({ demo: 'fluids', title: 'Fluids: Pressure, Buoyancy and Flow' }, async (r) => {
  const { state, p } = r;
  const num = async (sel) => parseFloat((await r.text(sel)).replace('−', '-'));
  /* hold the pointer down and step it a pixel at a time until the readout shows want (a number in its own units) */
  const settle = async (sel, want, ax, ay) => {
    for (let i = 0; i < 120 && Math.abs((await num(sel)) - want) > 1e-9; i++) {
      const s = Math.sign((await num(sel)) - want);
      state.ptr = [state.ptr[0] + s * ax, state.ptr[1] + s * ay]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
    return r.text(sel);
  };

  await p.click('#presets [data-p="depth"]');
  await p.clock.runFor(200);
  const can = await r.box('#sCan');

  state.caption = 'Sample reading: the gauge pressure 0.20 m down in water';
  await r.secs(2.8);

  state.caption = 'Show pressure as gauge pressure';
  await r.scrollRail('#pModeSeg');
  await r.click('#pModeSeg [data-g="gauge"]');
  await r.secs(0.8);

  state.caption = 'Set the depth: drag the probe up to 0.20 m on the ruler';
  state.zoom = [can[0] + 130, can[1] + 20, 640, 360];
  const pr = await p.evaluate(() => __fl.h3pt('probe'));   /* the probe's grip, wherever the 3D view puts it */
  await r.moveTo(pr[0], pr[1], 0.8);
  await p.mouse.down(); state.down = true; await r.tick(3);
  const su = await p.evaluate(() => __fl.h3pt('surf')), h0 = await p.evaluate(() => __fl.S.P.press.pd);
  await r.moveTo(pr[0], su[1] + (pr[1] - su[1]) * 0.2 / h0, 1.0);   /* most of the way; settle() finishes it */
  r.check.h = await settle('#s_press_pdo', 0.20, 0, -1);
  await r.secs(0.6);
  r.check.P = await r.text('#readBox');
  state.caption = 'Read the gauge: ρgh for this depth';
  /* the gauge's label, drawn over the 3D view 18 and 34 px below the dial's center point (fluids.html ovl) */
  const gl = await p.evaluate(() => { const c = __fl.g3.S.project([0.62 / 2 + 0.26, 0, 0.78 + 0.014 - 0.125]), q = document.querySelector('#sCan').getBoundingClientRect(); return [q.left + c[0], q.top + c[1]]; });
  state.arrow = { rect: [gl[0] - 46, gl[1] + 8, 92, 36] };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Repeat at each depth, then send the table to the worksheet';
  const ex = await r.box('#expCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.text('#tbl tbody tr');
});
