// How this works: Pendulums, Double pendulum scene, worksheet "Normal Modes and Chaos in a Double Pendulum". Part 1's first reading:
// both masses 1.00 kg, both rods 0.25 m, mode amplitude 2°, started in mode 1, the measured θ₁ period recorded. Expected: for equal
// masses and rods ω² = (2 − √2) g/L = 0.5858 × 9.81/0.25 = 22.99 rad²/s², so T = 2π/ω = 1.310 s (key row 1: 1.311 s).
require('./lib.cjs')({ demo: 'pendulum', title: 'Pendulums', query: '?scene=double&view=3d' }, async (r) => {
  const { state, p, W } = r;
  /* the measured period readout in the rail, found by its label (the readouts are redrawn) */
  const per = () => p.evaluate(() => { const dt = [...document.querySelectorAll('.rail dt')].find((e) => /Measured θ₁ period/.test(e.textContent));
    const q = dt.parentElement.getBoundingClientRect(); return { box: [q.x, q.y, q.width, q.height], text: dt.nextElementSibling.textContent.trim() }; });
  const toPer = async () => { await p.evaluate(() => { const rl = document.querySelector('.rail'), dt = [...rl.querySelectorAll('dt')].find((e) => /Measured θ₁ period/.test(e.textContent));
    rl.scrollTop += dt.getBoundingClientRect().top - rl.getBoundingClientRect().top - 300; }); await r.tick(2); };
  const set = async (id, out, want, tol, coarse) => {
    await r.scrollRail('#' + id);
    const b = await r.box('#' + id);
    state.zoom = [W - 600, Math.max(0, Math.min(b[1] - 170, r.H - 337.5)), 600, 337.5];
    await p.focus('#' + id);   /* the last steps go by the arrow keys, which need the slider focused */
    const got = await r.slide('#' + id, '#' + out, want, tol, coarse);
    await r.secs(0.3);
    return got;
  };

  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: mode 1, both rods 0.25 m long, at a 2° mode amplitude';
  await r.secs(2.2);

  state.caption = 'Choose Normal mode 1. Both masses stay at 1.00 kg';
  await r.click('[data-p="mode1"]');
  await r.secs(0.6);

  state.caption = 'Drag both rod lengths to 0.25 m';
  r.check.L1 = await set('sL1', 'oL1', 0.25, 0.001, 0.03);
  r.check.L2 = await set('sL2', 'oL2', 0.25, 0.001, 0.03);
  state.zoom = null;

  state.caption = 'Open Small oscillations and drag the mode amplitude to 2°';
  const fold = 'details.fold > summary:has(+ .foldbody #sAmp)';
  await r.scrollRail(fold);
  if (!(await p.evaluate((s) => document.querySelector(s).parentElement.open, fold))) await r.click(fold);
  await r.tick(4);
  r.check.amp = await set('sAmp', 'oAmp', 2, 0.1, 1.5);
  state.zoom = null;

  state.caption = 'Press Mode 1 to start the mode again, then Play, and wait for the measured period';
  await r.scrollRail('[data-start="m1"]');
  await r.click('[data-start="m1"]');
  await r.tick(4);
  if ((await r.text('#play')) === 'Play') await r.click('#play');
  await r.secs(1.6);
  await toPer();
  for (let i = 0; i < 150 && !/ s$/.test((await per()).text); i++) await r.tick();
  const P = await per();
  r.check.period = P.text;
  state.zoom = [W - 600, Math.max(0, Math.min(P.box[1] - 170, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: P.box };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: row };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at 0.50, 1.00, 1.50 and 2.00 m, then send the series to the worksheet';
  state.capTop = true;   /* the export button sits at the bottom of the window */
  await r.scrollRail('.vd-readings .vd-export');
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows ? window.vdRows() : null));
});
