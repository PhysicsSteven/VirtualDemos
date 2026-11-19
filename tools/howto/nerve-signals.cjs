// How this works: Nerve Signals and the ECG. The first reading of Part 2: the myelinated 10 µm axon alone (Race unticked),
// Electrode A at about 8 mm and B at about 16 mm, Reset and Play, then Record reading.
// Expected: Δx about 7.9 mm, Δt about 0.21 ms, v about 37 m/s (the model's 3.64 × 10 = 36.4 m/s over long gaps).
require('./lib.cjs')({ demo: 'nerve-signals', title: 'Nerve Signals and the ECG', query: '?setup=race' }, async (r) => {
  const { state, p, W } = r;
  /* Blind ticked, as the worksheet's Set up says (the model's speed stays hidden) */
  await p.evaluate(() => { const c = document.getElementById('labBlind'); if (!c.checked) c.click(); });
  state.caption = 'Sample reading: time the impulse on a myelinated 10 µm axon from electrode A to electrode B';
  await r.secs(3.0);

  state.caption = 'Untick Race a second axon of the other kind: only the myelinated axon is left';
  await r.click('#race');
  await r.secs(0.8);

  state.caption = 'Set Electrode A at to about 8 mm and Electrode B at to about 16 mm';
  r.check.A = await r.slide('#sA', '#oA', 8.1, 0.25);
  r.check.B = await r.slide('#sB', '#oB', 16, 0.25);
  await r.secs(0.8);

  state.caption = 'Press Reset, then Play: the impulse jumps from node to node past A and B';
  await r.click('#reset');
  await r.tick(4);
  await r.click('#play');
  await r.secs(3.6);
  await r.click('#play');   /* pause once B has timed it */
  await r.tick(3);

  state.caption = 'The Readouts give the gap Δx, the delay Δt and the speed Δx/Δt';
  await r.scrollRail('#out');
  const out = await r.box('#out');
  state.zoom = [W - 640, Math.max(0, out[1] - 120), 640, 360];
  state.arrow = { rect: out };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;
  r.check.readouts = await r.text('#out');

  state.caption = 'Press Record reading';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.secs(1.2);
  r.check.rows = await p.evaluate(() => (window.vdRows ? window.vdRows() : []).map((x) => `${x.dx_mm} mm ${x.dt_ms} ms ${x.v_m_s} m/s`));

  state.caption = 'Move B, Reset, Play and Record again; then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
});
