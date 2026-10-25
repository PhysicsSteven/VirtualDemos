// How this works: Resonators. The worksheet's first reading: Resonance tube, find c, at 20 °C, a 3.2 cm tube and 512 Hz, Blind on,
// the first resonance found from the level in the tube and captured.
// Expected: c = 331.3√(1 + 20/273.15) = 343.2 m/s, λ/4 = 16.76 cm, end correction 0.6133a = 0.98 cm, so L₁ = 15.78 cm; the capture
// adds the demo's small simulated meniscus error.
require('./lib.cjs')({ demo: 'resonators', title: 'Resonators' }, async (r) => {
  const { state, W, p } = r;
  const can = await r.box('#can');
  /* the water surface's grip: probe the canvas for the row where the cursor turns ns-resize */
  const grip = () => p.evaluate(() => { const c = document.querySelector('#can'), q = c.getBoundingClientRect(), x = q.left + 130, ys = [];
    for (let y = q.top; y < q.bottom; y += 1) { c.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true })); if (c.style.cursor === 'ns-resize') ys.push(y); }
    return [x, ys.reduce((a, y) => a + y, 0) / ys.length]; });
  const water = () => r.text('#waterOut');

  state.caption = 'Sample reading: the first resonance at 512 Hz, 20 °C, in a tube 3.2 cm wide';
  await r.secs(3.0);

  state.caption = 'Hide the expected answers: tick Blind';
  await r.scrollRail('#blind');
  await r.click('#blind');
  state.arrow = { rect: await r.box('label:has(#blind)') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Lower the water: drag its surface down past the loudest spot, then back to the peak';
  state.zoom = [can[0], r.H - 531, 944, 531];   /* the tube, the level trace and the L and level readout above it */
  const g0 = await grip();
  await r.moveTo(...g0, 0.8);
  await p.mouse.down(); state.down = true; await r.tick(4);
  /* past the first resonance to about 17.5 cm, then up in small steps to the peak, watching the level */
  for (let i = 0; i < 300 && parseFloat(await water()) < 17.5; i++) { state.ptr = [state.ptr[0], state.ptr[1] + 0.8]; await p.mouse.move(...state.ptr); await r.tick(); }
  await r.tick(6);
  let best = -1e9, bestAt = null;
  for (let i = 0; i < 400 && parseFloat(await water()) > 14.0; i++) {
    state.ptr = [state.ptr[0], state.ptr[1] - 0.15]; await p.mouse.move(...state.ptr); await r.tick();
    const lv = parseFloat(await r.text('#rLevel')); if (lv > best) { best = lv; bestAt = await water(); }
  }
  for (let i = 0; i < 400 && (await water()) !== bestAt; i++) { state.ptr = [state.ptr[0], state.ptr[1] + 0.15]; await p.mouse.move(...state.ptr); await r.tick(); }
  r.check.water = await water(); r.check.level = await r.text('#rLevel');
  await r.tick(6); await p.mouse.up(); state.down = false;
  state.arrow = { rect: await r.box('#clock') };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#tbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Find the next resonances, then send the 512 Hz readings to the worksheet';
  const ex = await r.box('#toWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#tbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value || td.querySelector('input').placeholder : td.textContent));
});
