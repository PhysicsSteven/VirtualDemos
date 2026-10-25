// How this works: Coulomb Sandbox. The single charge scan's first reading of the Electric Fields and Potential worksheet: from the
// Dipole, one charge removed, the other set to +1 nC and dragged to the origin, Blind on, the probe placed at (1.0, 0) cm.
// Expected: V = kq/r = 8.988e9 × 1e-9/0.010 = 899 V, E = kq/r² = 89.9 kV/m, pointing along +x (0°).
require('./lib.cjs')({ demo: 'coulomb-sandbox', title: 'Coulomb Sandbox' }, async (r) => {
  const { state, p, W } = r;
  /* drag a slider's thumb from its value to near want, then a fraction of a pixel per frame until its value is want */
  const slide = async (sel, want, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 0.6);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && Math.abs((await val()) - want) > 1e-9; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  };
  /* the map: (0, 0) at the middle of the canvas, s px per cm as the demo's resize() sets it */
  const ov = await r.box('#over'), s = Math.min(ov[2] / (ov[2] < 640 ? 11 : 20), ov[3] / 12);
  const px = (x, y) => [ov[0] + ov[2] / 2 + x * s, ov[1] + ov[3] / 2 - y * s];
  await p.click('[data-p="dipole"]'); await p.clock.runFor(300);
  r.check.charges0 = await p.evaluate(() => JSON.stringify(__cs.charges.map((c) => [c.x, c.y, c.q])));

  state.caption = 'Sample reading: V and E 1.0 cm from a single +1 nC charge';
  await r.secs(3.0);

  state.caption = 'Hide the answers: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.5);
  await p.evaluate(() => { document.querySelector('.rail').scrollTop = 0; });

  state.caption = 'Keep one charge: click the −2 nC charge, then Remove';
  await r.moveTo(...px(3, 0), 0.7);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.tick(3);
  await r.scrollRail('#selEditor');
  await r.click('#del');
  await r.secs(0.4);

  state.caption = 'Click the other charge and set it to +1 nC with the Selected charge slider';
  await r.moveTo(...px(-3, 0), 0.7);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.tick(3);
  await slide('#q', 1, 0.5);
  r.check.q = await r.text('#qOut');
  state.arrow = { rect: await r.box('#qOut') };
  await r.secs(0.6);
  state.arrow = null;

  state.caption = 'Drag it to the origin, (0, 0)';
  await r.moveTo(...px(-3, 0), 0.6);
  await r.dragTo(...px(0, 0), 1.0);
  r.check.pos = await r.text('#selPos');
  await r.secs(0.4);

  state.caption = 'Click the map at (1.0, 0) cm to put the probe there, then read V and |E|';
  await r.moveTo(...px(1, 0.6), 0.5);
  await r.moveTo(...px(1, 0), 0.5);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.tick(4);
  await r.scrollRail('#rV');
  const v0 = await r.box('#rV');
  await r.moveTo(v0[0] + 40, v0[1] + v0[3] + 30, 0.7);   /* hovering on the way moves the probe for a look; leaving the map puts it back where it was clicked */
  r.check.V = await r.text('#rV'); r.check.E = await r.text('#rE'); r.check.dir = await r.text('#rDir'); r.check.at = await r.text('#rPos');
  const v = await r.box('#rV'), e = await r.box('#rDir'), pp = await r.box('#rPos');
  state.arrow = { rect: [v[0] - 6, v[1] - 22, pp[0] + pp[2] - v[0] + 12, e[1] + e[3] - v[1] + 28] };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Move the probe out along the line for the next readings, then send them to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.text('#rowsTbl tbody tr');
  r.check.charges = await p.evaluate(() => JSON.stringify(__cs.charges.map((c) => [c.x, c.y, c.q])));
});
