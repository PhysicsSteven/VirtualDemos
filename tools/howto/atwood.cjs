// How this works: Forces and Friction, Worksheet 2 (Atwood's Machine). Part 1's first reading: m = 2.5 kg, m₂ = 3.5 kg (total 6.0 kg),
// one timed 1.000 m run from rest. Expected: a = (m₂ − m) g/(m + m₂) = 1.0 × 9.81/6.0 = 1.635 m/s², t = √(2d/a) = 1.106 s.
// Records forces.html opened from the worksheet (?ws=atwood), which starts in the Atwood's machine setup (m 2.0 kg, m₂ 2.5 kg).
require('./lib.cjs')({ demo: 'forces', title: "Atwood's Machine", query: '?ws=atwood' }, async (r) => {
  const { state, p } = r;
  // turn a knob in the picture with the pointer, a few degrees per frame, clockwise to raise it, until done()
  async function turnKnob(sel, done, dir = 1) {
    const [x, y, w, h] = await r.box(sel), cx = x + w / 2, cy = y + h / 2, R = 10;
    let a = -90;
    await r.moveTo(cx, cy - R, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 300 && !(await done()); i++) { a += 3 * dir; state.ptr = [cx + R * Math.cos(a * Math.PI / 180), cy + R * Math.sin(a * Math.PI / 180)]; await p.mouse.move(...state.ptr); await r.tick(); }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
  }
  const num = async (sel) => parseFloat((await r.text(sel)).replace(/[^0-9.].*$/, ''));

  state.caption = "Sample reading: Atwood's machine with 2.5 kg and 3.5 kg, one timed 1.000 m run";
  await r.secs(3.0);

  const pan = await r.box('#instr');
  state.caption = 'Set the left mass m to 2.5 kg: turn its knob';
  state.zoom = [pan[0] - 8, pan[1] - 8, 800, 450];
  await turnKnob('#sM + .vdknob', async () => (await num('#oM')) >= 2.5);
  r.check.m = await r.text('#oM');
  await r.secs(0.8);

  state.caption = 'Set the right mass m₂ to 3.5 kg';
  await turnKnob('#sM2 + .vdknob', async () => (await num('#oM2')) >= 3.5);
  r.check.m2 = await r.text('#oM2');
  await r.secs(0.8);
  state.zoom = null;

  state.caption = 'Release at the top mark. The timer stops after 1.000 m';
  await r.click('#timed');
  for (let i = 0; i < 90 && !/Timer, last run\s*[\d.]+/.test(await r.text('#forceOut')); i++) await r.tick();
  r.check.t = (await r.text('#forceOut')).match(/Timer, last run\s*([\d.]+ s)/)?.[1];
  await r.secs(1.6);

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for the other splits, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
