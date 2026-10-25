// How this works: Electromagnetic Waves, Astro 2203 worksheet "intro-em-spectrum". Its first reading: the Plane wave setup
// dragged down to 10⁶ Hz (the slider's value exactly 6). Expected: f = 1.00 MHz, λ = c/f = 299 792 458/10⁶ = 300 m, radio band,
// λ × f = c = 3.00 × 10⁸ m/s.
require('./lib.cjs')({ demo: 'em-waves', title: 'Electromagnetic Waves: the Spectrum', query: '?ws=intro-em-spectrum' }, async (r) => {
  const { state, p, W } = r;
  const thumb = sel => p.evaluate(sel => { const e = document.querySelector(sel), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);

  state.caption = 'Sample reading: a plane wave at about 10⁶ Hz, the first reading on the worksheet';
  await r.secs(3.0);

  state.caption = 'Choose the Plane wave setup';
  await r.click('#presets [data-p="plane"]');
  await r.secs(1.2);

  state.caption = 'Drag the frequency slider down to 1.00 MHz, which is 10⁶ Hz';
  const sl = await r.box('#sf');
  state.zoom = [W - 600, sl[1] - 120, 600, 337.5];
  await r.moveTo(...(await thumb('#sf')), 0.6);
  /* the slider is logarithmic (16 decades on the track), so close in on 10⁶ Hz with smaller and smaller steps */
  await p.mouse.down(); state.down = true; await r.tick(4);
  const want = 6, perPx = 16 / (sl[2] - 16);
  for (let i = 0; i < 200; i++) {
    const v = +(await p.evaluate(() => document.querySelector('#sf').value));
    if (Math.abs(v - want) < 1e-9) break;
    const d = (want - v) / perPx * 0.35;
    state.ptr = [state.ptr[0] + Math.sign(d) * Math.min(6, Math.max(0.01, Math.abs(d))), state.ptr[1]]; await p.mouse.move(...state.ptr); await r.tick();
  }
  r.check.f = await r.text('#fOut');
  await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
  state.arrow = { rect: await r.box('#fOut') };
  await r.secs(1.0);

  state.caption = 'Read the wavelength and the band: 300 m, radio waves';
  state.arrow = { rect: await p.evaluate(() => { const a = document.getElementById('rLam').closest('dl').getBoundingClientRect(); return [a.x, a.y, a.width, a.height]; }) };
  r.check.read = await p.evaluate(() => ['fOut', 'rLam', 'rBand', 'rLf'].map(id => document.getElementById(id).textContent));
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at 10⁸ Hz and up through 10²⁰ Hz, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => window.vdRows()[0]);
});
