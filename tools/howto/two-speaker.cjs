// How this works: Two Speaker Interference. Part 1's first quiet spot: 686 Hz, 20 °C, speakers 1.00 m apart and in phase, walk
// line x = 4.0 m. Expected: v = 331.3 √(1 + 20/273.15) = 343.21 m/s, λ = 0.5003 m; the level is lowest at y = 1.041 m (43.2 dB),
// where r₁ = 4.036 m, r₂ = 4.286 m and r₂ − r₁ = 0.250 m = λ/2 (the dip is not silent: the far speaker's sound is weaker, 1/r).
require('./lib.cjs')({ demo: 'two-speaker', title: 'Two Speaker Interference' }, async (r) => {
  const { state } = r;
  const can = await r.box('#can');
  const lvl = async () => parseFloat(await r.text('#oLevel'));
  const yNow = async () => parseFloat((await r.text('#tape dd:nth-of-type(2)')));

  state.caption = 'Sample reading: the first quiet spot on the walk line 4.0 m from the speakers, at 686 Hz';
  await r.secs(3.0);

  state.caption = 'The opening setup is Part 1: 686 Hz, speakers 1.00 m apart and in phase, walk line at 4.0 m';
  state.arrow = { rect: await r.box('#presets button[data-p="basic"]') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Walk the microphone up the walk line: drag it until the level is lowest';
  state.zoom = [can[0], can[1] + 30, 800, 450];   /* the floor, the microphone, its meter and tape */
  const m = await r.box('#mic');
  await r.moveTo(m[0] + m[2] / 2, m[1] + m[3] / 2, 0.8);
  await r.p.mouse.down(); state.down = true; await r.tick(4);
  const step = async (dy) => { state.ptr = [state.ptr[0], state.ptr[1] + dy]; await r.p.mouse.move(...state.ptr); await r.tick(); };
  for (let i = 0; i < 200 && (await yNow()) < 0.9; i++) await step(-1);   /* quickly through the loud middle */
  let best = { L: await lvl(), ptr: state.ptr.slice() }, rises = 0;
  for (let i = 0; i < 200 && rises < 3; i++) {   /* then slowly, 0.1 px (3 mm) a frame, until the level has risen three times */
    await step(-0.1);
    const L = await lvl();
    if (L < best.L) { best = { L, ptr: state.ptr.slice() }; rises = 0; } else rises++;
  }
  for (let i = 0; i < 4; i++) await step((best.ptr[1] - state.ptr[1]) / (4 - i));   /* back to the lowest level */
  await r.tick(6); await r.p.mouse.up(); state.down = false; await r.tick();
  r.check.level = await r.text('#oLevel');
  r.check.tape = await r.p.evaluate(() => [...document.querySelectorAll('#tape dd')].map(d => d.textContent));
  state.arrow = { rect: await r.box('#oLevel') };
  await r.secs(1.4);
  /* the tape rows y, r₁ and r₂, in a zoom that keeps them above the caption */
  const rows = await r.p.evaluate(() => { const a = document.querySelector('#tape dt:nth-of-type(2)').getBoundingClientRect(), b = document.querySelector('#tape dd:nth-of-type(4)').getBoundingClientRect(), t = document.querySelector('#tape').getBoundingClientRect(); return [t.x, a.y, t.width, b.bottom - a.y]; });
  state.zoom = [can[0], r.H - 405, 720, 405];
  state.arrow = { rect: rows };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the spot. Its place, tape distances and level go into the table';
  await r.scrollRail('#record');
  await r.click('#record');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Find and record each quiet and loud spot, then send the table to the worksheet';
  const ex = await r.box('#exportWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
});
