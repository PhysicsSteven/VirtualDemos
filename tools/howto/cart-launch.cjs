// How this works: Ball Launched from a Moving Cart. One launch in the Steady cart setup: launch speed 4.0 m/s relative to the cart,
// no acceleration after launch, cart at 1.5 m/s (a row of the key's first table; its row 1, a cart at rest, shows no relative motion).
// Expected: t = 2u/g = 8.0/9.81 = 0.815 s; ball and cart each move vt = 1.223 m; the ball comes down 0.0 cm from the launcher.
require('./lib.cjs')({ demo: 'cart-launch', title: 'Ball Launched from a Moving Cart' }, async (r) => {
  const { state, W } = r;
  const stage = await r.box('#stage');
  /* turn a knob in the picture clockwise (or anticlockwise) until its readout shows want: one step every 15° of turn */
  const turn = async (sel, outSel, want, dir) => {
    const [x, y, w, h] = await r.box(sel), cx = x + w / 2, cy = y + h / 2, R = w / 2 - 4;
    let a = -Math.PI / 2;
    await r.moveTo(cx, cy - R, 0.6);
    await r.p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 200 && (await r.text(outSel)) !== want; i++) { a += dir * 0.06; state.ptr = [cx + R * Math.cos(a), cy + R * Math.sin(a)]; await r.p.mouse.move(...state.ptr); await r.tick(); }
    const got = await r.text(outSel); await r.tick(6); await r.p.mouse.up(); state.down = false; await r.tick(); return got;
  };

  state.caption = 'Sample reading: a ball fired at 4.0 m/s from a cart moving at 1.5 m/s';
  await r.secs(3.0);

  state.caption = 'Pick the setup: click Steady cart (launch at 4.0 m/s, no push after)';
  await r.click('#presets button[data-p="steady"]');
  state.arrow = { rect: await r.box('#presets button[data-p="steady"]') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Set the cart speed: turn its knob to 1.5 m/s';
  const ins = await r.box('#instr');
  state.zoom = [ins[0] - 200, ins[1] - 20, 520, 292.5];
  r.check.v = await turn('#sV + .vdknob', '#oV', '1.5 m/s', 1);
  r.check.u = await r.text('#oU'); r.check.a = await r.text('#oA');
  state.arrow = { rect: await r.box('#oV') };
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Launch it. The ball comes down in the launcher';
  await r.click('#go');
  state.zoom = [stage[0], stage[1], stage[2], stage[2] * 9 / 16];   /* the whole track: the cart ends near its right end */
  await r.moveTo(stage[0] + 760, stage[1] + 470, 0.5);
  for (let i = 0; i < 200 && (await r.text('#go')) !== 'Launch'; i++) await r.tick();
  await r.secs(0.6);
  state.zoom = null;

  state.caption = 'Read the time in the air and where the ball came down';
  await r.scrollRail('#out > div:nth-child(7)');
  const rows = await r.p.evaluate(() => { const d = [...document.querySelectorAll('#out > div')].slice(6, 10).map((e) => e.getBoundingClientRect());
    return [d[0].left, d[0].top, Math.max(...d.map((q) => q.right)) - d[0].left, d[3].bottom - d[0].top]; });
  state.zoom = [W - 600, rows[1] - 60, 600, 337.5];
  state.arrow = { rect: rows };
  r.check.out = await r.p.evaluate(() => [...document.querySelectorAll('#out > div')].slice(6).map((e) => e.textContent.trim()));
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at each cart speed, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await r.p.evaluate(() => window.vdRows());
});
