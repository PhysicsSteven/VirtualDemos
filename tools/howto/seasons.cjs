// How this works: Reasons for Seasons, Worksheet 1 (Sunlight Through the Year). Its first reading: Ruston, 32.5° N, real tilt, January 21.
// Demo (2026-10-25): δ −19.88°, r 0.98412 AU. By hand from those: noon altitude 90° − |32.5° + 19.88°| = 37.62°; cos H₀ = tan 32.5° tan 19.88°
// = 0.2304, H₀ = 76.68°, day 2H₀/15° = 10.224 h (10 h 13 m); Q = (1361/π)(1/0.98412)²(H₀ sin φ sin δ + cos φ cos δ sin H₀) = 235.9 W/m².
// δ and r agree with the almanac for January 21 (about −19.9° and 0.984 AU).
require('./lib.cjs')({ demo: 'seasons', title: 'Sunlight Through the Year' }, async (r) => {
  const { state, W, p } = r;
  const thumb = (sel) => p.evaluate((s) => { const e = document.querySelector(s), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);
  /* drag a slider's thumb straight to where the value should be, then nudge until the readout shows it */
  const slideTo = async (sel, out, value, want) => {
    const [x, y] = await thumb(sel), q = await r.box(sel), [mn, mx] = await p.evaluate((s) => [+document.querySelector(s).min, +document.querySelector(s).max], sel);
    await r.moveTo(x, y, 0.7); await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(q[0] + 8 + (value - mn) / (mx - mn) * (q[2] - 16), y, 0.9);
    for (let i = 0; i < 60 && (await r.text(out)) !== want; i++) {
      const v = +(await p.evaluate((s) => document.querySelector(s).value, sel));
      state.ptr = [state.ptr[0] + (v > value ? -0.5 : 0.5), y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick(); return r.text(out);
  };

  state.caption = 'Sample reading: the Sun at Ruston, 32.5° N, on January 21';
  await r.secs(2.6);

  state.caption = 'Pause the demo, so the date stays put';
  await r.click('#play');
  await r.secs(0.5);

  state.caption = 'Set the date: drag the Date slider to Jan 21';
  r.check.date = await slideTo('#day', '#dayOut', 21, 'Jan 21 · day 21');
  state.arrow = { rect: await r.box('#dayOut') };
  await r.secs(0.8);

  state.caption = 'Check the place and the tilt: 32.5° N and 23.44°';
  r.check.lat = await r.text('#latOut'); r.check.tilt = await r.text('#tiltOut');
  const la = await r.box('#latOut'), ti = await r.box('#tiltOut');
  state.arrow = { rect: [la[0], la[1], la[2], ti[1] + ti[3] - la[1]] };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Read the noon Sun, the day length, the distance and the sunlight';
  await r.scrollRail('#rAlt');
  const a = await r.box('#rAlt'), q = await r.box('#rQ');
  for (const k of ['rAlt', 'rDay', 'rDec', 'rR', 'rQ', 'rRel']) r.check[k] = await r.text('#' + k);
  state.arrow = { rect: [a[0], a[1] - 22, Math.max(a[2], 230), q[1] + q[3] - a[1] + 22] };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat on the 21st of each month, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
