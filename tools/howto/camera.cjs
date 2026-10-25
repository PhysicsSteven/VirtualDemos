// How this works: The Eye, Camera mode (Camera worksheet). Part 1's first reading: the 50 mm lens at f/2, object about 0.50 m
// away, focused by hand with Blind on. The distance slider steps on a log scale, so "about 0.50 m" lands on 0.1 × 10^(35/50) =
// 0.5012 m (50.1 cm). Expected: 1/d_i = 1/f − 1/d gives d_i = 55.541 mm, so the blur is smallest with the lens 55.541 mm from the
// sensor (the slider's 1 µm steps reach it); off by Δ the blur spot is about (f/N)Δ/d_s = 0.45Δ.
require('./lib.cjs')({ demo: 'the-eye', title: 'The Eye: Camera' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#can');
  const thumb = async (sel, v) => { const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    return [s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), s[1] + s[3] / 2]; };
  const val = async (sel) => +(await p.inputValue(sel));

  state.caption = 'Sample: Part 1, the 50 mm lens at f/2 focused on an object 0.50 m away';
  await r.secs(2.8);

  state.caption = 'Switch to Camera. The 50 mm lens and f/2 are already chosen';
  await r.click('#modeSeg [data-m="camera"]');
  await r.tick(3);
  state.arrow = { rect: await r.box('#camSeg') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Turn Blind on in the Lab section';   /* short: the check box sits under a long caption */
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(3);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.6);

  state.caption = 'Set the object distance to about 0.50 m';
  await r.scrollRail('#sDc');
  await r.moveTo(...(await thumb('#sDc', await val('#sDc'))), 0.6);
  await p.mouse.down(); state.down = true; await r.tick(3);
  await r.moveTo(...(await thumb('#sDc', 35)), 0.9);
  for (let i = 0; i < 60 && (await val('#sDc')) !== 35; i++) { state.ptr[0] -= Math.sign((await val('#sDc')) - 35) * 0.5; await p.mouse.move(...state.ptr); await r.tick(); }
  await r.tick(3); await p.mouse.up(); state.down = false; await r.tick();
  r.check.d = await r.text('#oDc');
  state.arrow = { rect: await r.box('#oDc') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Focus by hand: move the lens until the blur spot is smallest';
  await r.scrollRail('#sDs');
  const dsb = await r.box('#sDs');
  state.zoom = [r.W - 660, dsb[1] - 60, 660, 371.25];   /* the focus slider, the blur readout and the sensor's 1:1 crop */
  const S = await p.evaluate(() => ({ dc: window.__eye.S.dc }));
  const di = 1 / (1 / 0.050 - 1 / S.dc), want = Math.round((di - 0.050) / 1e-6);
  r.check.target = { di_mm: +(di * 1000).toFixed(4), want };
  await r.moveTo(...(await thumb('#sDs', await val('#sDs'))), 0.6);
  await p.mouse.down(); state.down = true; await r.tick(3);
  await r.moveTo(...(await thumb('#sDs', want + 60)), 1.0);
  await r.tick(3); await p.mouse.up(); state.down = false; await r.tick();
  state.arrow = { rect: await r.box('#out .wide') };
  for (let i = 0; i < 60 && (await val('#sDs')) !== want; i++) {
    const k = Math.min(4, Math.abs((await val('#sDs')) - want));
    for (let j = 0; j < k; j++) await p.keyboard.press((await val('#sDs')) > want ? 'ArrowLeft' : 'ArrowRight');
    await r.tick();
  }
  r.check.ds = await r.text('#oDs');
  r.check.blurBox = await r.box('#out .wide');
  r.check.out = await r.text('#out');
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Repeat at each distance, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
