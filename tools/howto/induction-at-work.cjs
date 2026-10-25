// How this works: Induction at Work (shake flashlight). Part 1's first reading: 1 shake per second, 3.0 cm stroke, 0.10 F capacitor,
// the largest EMF in the last second after a few seconds of shaking. Expected: the EMF is proportional to the magnet's speed, so the
// peak at 1 per second is a third of the 2.84 V at 3 per second, 0.947 V (the key's row 1 reads 0.9468 V).
require('./lib.cjs')({ demo: 'induction-at-work', title: 'Induction at Work' }, async (r) => {
  const { state, p, W } = r;
  /* turn a knob in the picture (dir 1 clockwise, −1 anticlockwise) until its readout shows want: one step every 15° of turn */
  const turn = async (sel, outSel, want, dir) => {
    const [x, y, w, h] = await r.box(sel), cx = x + w / 2, cy = y + h / 2, R = w / 2 - 4;
    let a = -Math.PI / 2;
    await r.moveTo(cx, cy - R, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 200 && (await r.text(outSel)) !== want; i++) { a += dir * 0.06; state.ptr = [cx + R * Math.cos(a), cy + R * Math.sin(a)]; await p.mouse.move(...state.ptr); await r.tick(); }
    const got = await r.text(outSel); await r.tick(6); await p.mouse.up(); state.down = false; await r.tick(); return got;
  };
  const stage = await r.box('#stage');

  state.caption = 'Sample reading: the largest EMF at 1 shake per second';
  await r.secs(3.0);

  state.caption = 'Set 1 shake per second: turn the Shakes per second knob down to 1 Hz';
  const ins = await r.box('#instr');
  state.zoom = [ins[0] - 10, ins[1] - 10, 480, 270];
  r.check.f = await turn('#sF + .vdknob', '#oF', '1 Hz', -1);
  state.arrow = { rect: await r.box('#oF') };
  await r.secs(1.0);

  state.caption = 'Keep the stroke at 3.0 cm and the capacitor at 0.10 F';
  state.arrow = { rect: await r.box('#oA') };
  r.check.A = await r.text('#oA');
  await r.secs(1.2);
  state.zoom = null;
  await r.scrollRail('#capSeg');
  state.arrow = { rect: await r.box('#capSeg') };
  r.check.C = await r.text('#capSeg [aria-pressed="true"]');
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Shake, and watch the EMF pulses as the magnet runs through the coil';
  await r.click('#shakeBtn');
  await r.moveTo(stage[0] + stage[2] / 2, stage[1] + stage[3] - 60, 0.6);
  await r.secs(3.0);

  state.caption = 'After a few seconds, read the largest EMF in the last second';
  await r.scrollRail('#out');
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  const rows = await p.evaluate(() => { const d = [...document.querySelectorAll('#out dt')].find(e => /Largest EMF/.test(e.textContent)); const q = d.parentElement.getBoundingClientRect(); return [q.x, q.y, q.width, q.height]; });
  state.arrow = { rect: rows };
  await r.secs(2.0);
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

  state.caption = 'Repeat at 2 to 6 shakes per second, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr')].map(tr => tr.textContent));
});
