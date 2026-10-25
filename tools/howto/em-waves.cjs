// How this works: Electromagnetic Waves. Part 1's first reading: the Plane wave setup (10 GHz) at E₀ = 300 V/m.
// Expected: B₀ = E₀/c = 300/299 792 458 = 1.0007 µT, I = ½cε₀E₀² = 119.4 W/m², p = I/c = 398.4 nPa absorbed, 796.8 nPa reflected.
require('./lib.cjs')({ demo: 'em-waves', title: 'Electromagnetic Waves' }, async (r) => {
  const { state, p, W } = r;
  const thumb = sel => p.evaluate(sel => { const e = document.querySelector(sel), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);

  state.caption = 'Sample reading: a 10 GHz plane wave with amplitude E₀ = 300 V/m';
  await r.secs(3.0);

  state.caption = 'Choose the Plane wave setup: a 10 GHz wave in vacuum';
  await r.click('#presets [data-p="plane"]');
  state.arrow = { rect: await r.box('#fOut') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Open Energy and intensity, then drag the amplitude slider to E₀ = 300 V/m';
  await r.scrollRail('#secEnergy summary');
  await r.click('#secEnergy summary');
  await r.tick(3);
  const sl = await r.box('#sE');
  state.zoom = [W - 600, sl[1] - 120, 600, 337.5];
  await r.moveTo(...(await thumb('#sE')), 0.6);
  /* the slider is logarithmic (9 decades on 256 px), so close in on 300 V/m with smaller and smaller steps */
  await p.mouse.down(); state.down = true; await r.tick(4);
  const want = Math.log10(300), perPx = 9 / (sl[2] - 16);
  for (let i = 0; i < 120 && (await r.text('#eOut')) !== '300 V/m'; i++) {
    const v = +(await p.evaluate(() => document.querySelector('#sE').value)), d = (want - v) / perPx * 0.5;
    state.ptr = [state.ptr[0] + Math.sign(d) * Math.min(2, Math.max(0.02, Math.abs(d))), state.ptr[1]]; await p.mouse.move(...state.ptr); await r.tick();
  }
  r.check.E0 = await r.text('#eOut');
  await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
  state.arrow = { rect: await r.box('#eOut') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Read B₀ = E₀/c, the intensity and the radiation pressures';
  await r.scrollRail('#rC');
  const dl = await r.box('#secEnergy dl.readout');
  state.arrow = { rect: [dl[0], dl[1] + 44, dl[2], dl[3] - 44] };
  r.check.read = await p.evaluate(() => ['eOut', 'rB0', 'rI', 'rU', 'rPa', 'rPr'].map(id => document.getElementById(id).textContent));
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. The table keeps six figures: E₀ = 299.916 V/m';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat up to 1000 V/m, then at visible light; send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => window.vdRows()[0]);
});
