// How this works: Induced Electric Fields. Part 1's first reading: Example 13.8 (I₀ = 2.0 A decaying at α = 200 s⁻¹, n = 2000 per meter,
// R = 2.0 cm), time paused at t = 0, a centered path of radius 0.5 cm. Expected: B = μ₀nI₀ = 5.027 mT, dB/dt = −αB = −1.005 T/s,
// Φ = Bπr² = 3.948e-7 Wb, −dΦ/dt = ∮E·dl = 78.96 µV, E = (r/2)|dB/dt| = 2.513 mV/m, as in the key's row 1.
require('./lib.cjs')({ demo: 'induced-electric-field', title: 'Induced Electric Fields' }, async (r) => {
  const { state, p, W } = r;

  state.caption = 'Sample reading: E on a centered path 0.5 cm in radius, at t = 0';
  await r.secs(3.0);

  state.caption = 'The page opens on Example 13.8: 2.0 A decaying at 200 per second';
  await r.scrollRail('#wave');
  const s1 = await r.box('#wave'), s2 = await r.box('#oR');
  state.arrow = { rect: [s1[0] - 4, s1[1] - 4, s1[2] + 8, s2[1] + s2[3] - s1[1] + 34] };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Pause, then Restart to stand at t = 0';
  await r.scrollRail('#playBtn');
  await r.click('#playBtn');
  await r.tick(6);
  await r.click('#restartBtn');
  await r.tick(4);
  r.check.play = await r.text('#playBtn');
  await r.secs(0.8);

  state.caption = 'Shrink the path: drag Path radius down to 0.5 cm';
  const sl = await r.box('#sPa'), f = (6 - 0.5) / (9 - 0.5);
  await r.moveTo(sl[0] + 8 + f * (sl[2] - 16), sl[1] + sl[3] / 2, 0.7);
  r.check.a = await r.dragUntil(-3, 0, '#oPa', '0.5 cm');
  r.check.d = await r.text('#oPd');
  const can = await r.box('#can');
  state.zoom = [can[0], can[1], 640, 360];   /* the small path inside the winding */
  await r.secs(1.8);
  state.zoom = null;

  state.caption = 'Read E on the path, and −dΦ/dt, which equals the circulation of E';
  await r.scrollRail('#out');
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: tb };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each path radius, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
});
