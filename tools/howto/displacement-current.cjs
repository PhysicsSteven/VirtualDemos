// How this works: Displacement Current. Part 1's first reading: charging paused near one time constant (τ = RC = 34.8 µs with
// 100 V and 1.0 MΩ), the 3.0 cm loop around the wire with a flat disk.
// Expected: I = (V/R) e^(−t/RC), B = μ₀I/(2πr) on the loop, and 2πrB = μ₀I_c (no displacement current through the disk).
require('./lib.cjs')({ demo: 'displacement-current', title: 'Displacement Current' }, async (r) => {
  const { state, p, W } = r;
  const tNow = () => p.evaluate(() => window.__dc.S.t * 1e6);
  await p.addStyleTag({ content: '#vdTools { display: none !important; }' });   /* the measuring tools never appear in a video */

  state.caption = 'Sample reading: B on a 3.0 cm loop around the wire, near one time constant';
  await r.secs(3.0);

  state.caption = 'Choose Loop around the wire: a 3.0 cm loop with a flat disk';
  await r.click('#presets [data-p="wire"]');
  state.arrow = { rect: await r.box('#oR') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Charge the capacitor, then pause near one time constant, τ = 34.8 µs';
  await r.click('#go');
  const cl = await r.box('#clock'), st = await r.box('.stage');
  state.zoom = [st[0], Math.min(st[1], r.H - 531), 944, 531];
  state.arrow = { rect: cl };
  for (let i = 0; i < 300 && (await tNow()) < 34.4; i++) await r.tick();   /* the pointer waits on Pause */
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(2); await p.mouse.up(); state.down = false;
  r.check.t = await r.text('#clock');
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Read B on the loop: 2πrB matches μ₀ times the current through the disk';
  await r.scrollRail('#loopOut');
  state.arrow = { rect: await r.box('#loopOut') };
  r.check.loop = await p.evaluate(() => [...document.querySelectorAll('#loopOut div, #circOut div')].map(d => d.textContent.trim().replace(/\s+/g, ' ')));
  await r.secs(3.0);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  { /* the rail cannot scroll the table clear of the caption on its own, so the page scrolls too */
    const y0 = await p.evaluate(() => scrollY), dy = (await r.box('.vd-readings table'))[1] + 60 - 560, n = 15;
    for (let i = 1; dy > 0 && i <= n; i++) { await p.evaluate(v => window.scrollTo({ top: v, behavior: 'instant' }), y0 + dy * (1 - Math.cos(Math.PI * i / n)) / 2); await r.tick(); } }
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat with a bag surface and a 7.0 cm loop in the gap, then send to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => window.vdRows()[0]);
});
