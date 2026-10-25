// How this works: Measuring a Magnetic Field with a Current Balance (Force on a Current). The current scan's first reading: a
// Mystery magnet, 4.0 cm of wire across the field (90°), I = −3.0 A. Positive current is pushed down (Δm = −ILB/g at 2.0 A
// opening, −1.63 g at 0.20 T), so −3.0 A pushes the wire up and the magnet down: Δm = +|I|LB/g. The magnet's hidden B is
// logged in r.check.B (from the demo's own random draw), so the reading can be checked: Δm = 3.0 × 0.040 × B/9.81 kg.
require('./lib.cjs')({ demo: 'wire-force', title: 'Measuring a Magnetic Field with a Current Balance' }, async (r) => {
  const { state, p, W } = r;
  /* log the demo's random draw for the Mystery magnet (it still draws it itself) */
  await p.evaluate(() => { const R = Math.random; Math.random = () => { const v = R(); window.__rnd = v; return v; }; });
  /* turn a knob in the picture (dir −1 anticlockwise) until its readout shows want: one step every 15° of turn */
  const turn = async (sel, outSel, want, dir, step) => {
    const [x, y, w, h] = await r.box(sel), cx = x + w / 2, cy = y + h / 2, R = w / 2 - 4;
    let a = -Math.PI / 2;
    await r.moveTo(cx, cy - R, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 300 && (await r.text(outSel)) !== want; i++) { a += dir * step; state.ptr = [cx + R * Math.cos(a), cy + R * Math.sin(a)]; await p.mouse.move(...state.ptr); await r.tick(); }
    const got = await r.text(outSel); await r.tick(6); await p.mouse.up(); state.down = false; await r.tick(); return got;
  };

  state.caption = 'Sample reading: a mystery magnet weighed with −3.0 A in 4.0 cm of wire';
  await r.secs(3.0);

  state.caption = 'Hide the field: tick Mystery magnet';
  await r.scrollRail('#mystery');
  await r.click('#mystery');
  await r.tick(4);
  r.check.B = await p.evaluate(() => Math.round((0.08 + window.__rnd * 0.35) * 1000) / 1000);
  state.arrow = { rect: await r.box('#out') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Set the current: turn the Current knob down to −3.0 A';
  const ins = await r.box('#instr');
  state.zoom = [ins[0] - 40, ins[1] - 200, 560, 315];
  r.check.I = await turn('#sI + .vdknob', '#oI', '−3.0 A', -1, 0.15);
  r.check.L = await r.text('#oL'); r.check.th = await r.text('#oTh');
  await r.secs(0.8);
  state.zoom = null;

  state.caption = 'Read the balance: the magnet\'s apparent change in mass';
  await r.scrollRail('#out');
  r.check.out = await p.evaluate(() => document.querySelector('#out').innerText.replace(/\n/g, ' | '));
  state.arrow = { rect: await r.box('#out > div:nth-child(2)') };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat for each current, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await r.text('#rowsTbl tbody tr');
});
