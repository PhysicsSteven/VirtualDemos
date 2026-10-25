// How this works: Moon Phases, Worksheet 1 (Phases and the Lunar Month). Its first readings: New moon at 0 days, then 2 days later.
// Demo (2026-10-25) at 2.000 d: E 24.38°, lit 4.46 %, rise 7.625 h. By hand: E = 360° × 2/29.5306 = 24.38°, lit (1 − cos E)/2 = 4.46 %,
// moonrise 6 h + E/15° = 7.625 h (the demo's rise and set are for an observer on the equator, Moon on the celestial equator).
require('./lib.cjs')({ demo: 'moon-phases', title: 'Phases and the Lunar Month' }, async (r) => {
  const { state, W, p } = r;
  const STEP = 2, STEP_TXT = '2.00', LAST = 'Repeat every 2 days up to 28, then send the table to the worksheet';
  const thumb = (sel) => p.evaluate((s) => { const e = document.querySelector(s), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);
  /* drag a slider's thumb to where the value should be, then nudge a tenth of a pixel at a time until its value is exactly that */
  const slideTo = async (sel, value) => {
    const [x, y] = await thumb(sel), q = await r.box(sel), [mn, mx] = await p.evaluate((s) => [+document.querySelector(s).min, +document.querySelector(s).max], sel);
    await r.moveTo(x, y, 0.7); await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(q[0] + 8 + (value - mn) / (mx - mn) * (q[2] - 16), y, 0.9);
    for (let i = 0; i < 80; i++) {
      const v = +(await p.evaluate((s) => document.querySelector(s).value, sel)); if (Math.abs(v - value) < 1e-9) break;
      state.ptr = [state.ptr[0] + (v > value ? -0.1 : 0.1), y]; await p.mouse.move(...state.ptr); if (i % 3 === 2) await r.tick();
    }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
    return p.evaluate((s) => document.querySelector(s).value, sel);
  };
  const readouts = async () => { const a = await r.box('#rPhase'), b = await r.box('#rSet'); return [a[0] - 6, a[1] - 26, 250, b[1] + b[3] - a[1] + 32]; };
  const record = async (n) => {
    await r.scrollRail('.vd-readings .vd-rec');
    await r.click('.vd-readings .vd-rec');
    await r.tick(4);
    const tb = await r.box('.vd-readings table.rows');
    state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
    state.arrow = { rect: await r.box(`.vd-readings table.rows tbody tr:nth-child(${n})`) };
    await r.secs(1.9);
    state.arrow = null; state.zoom = null;
  };

  state.caption = `Sample readings: the Moon at new moon and ${STEP} days later`;
  await r.secs(2.4);

  state.caption = 'Choose New moon. The demo pauses at 0 days';
  await r.click('#presets button[data-p="new"]');
  await r.tick(4);
  await r.scrollRail('#rPhase');
  state.arrow = { rect: await readouts() };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await record(1);

  state.caption = `Step ahead: drag Days since new moon to ${STEP_TXT}`;
  await r.scrollRail('#day');
  r.check.day = await slideTo('#day', STEP);
  state.arrow = { rect: await r.box('#dayOut') };
  await r.secs(0.7);
  state.arrow = null;

  state.caption = 'Read the phase, the share lit and the rise and set times';
  await r.scrollRail('#rPhase');
  for (const k of ['rPhase', 'rFrac', 'rDay', 'rElong', 'rRise', 'rTransit', 'rSet']) r.check[k] = await r.text('#' + k);
  state.arrow = { rect: await readouts() };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record it too';
  await record(2);

  state.caption = LAST;
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => window.vdRows().map((o) => JSON.stringify(o)));
});
