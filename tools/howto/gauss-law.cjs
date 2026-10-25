// How this works: Gauss's Law. The first reading of the Electric Flux and Gauss's Law worksheet: Charge inside, paused, the
// predicted flux hidden, the charge set to +1 nC at the center of a sphere of radius 6.0 cm. Expected: Φ = q/ε₀ =
// 1e-9/8.8541878188e-12 = 112.94 N·m²/C, whatever the radius.
require('./lib.cjs')({ demo: 'gauss-law', title: "Gauss's Law" }, async (r) => {
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
  await p.click('[data-m="flux"]'); await p.click('[data-p="inside"]'); await p.clock.runFor(400);
  r.check.start = { q: await r.text('#oQ'), x: await p.inputValue('#qX'), y: await p.inputValue('#qY'), R: await r.text('#headline') };

  state.caption = 'Sample reading: the flux of a +1 nC charge through a sphere of radius 6.0 cm';
  await r.secs(3.0);

  state.caption = 'Pause, so the charge stops moving';
  await r.click('#play');
  await r.secs(0.5);

  state.caption = 'Hide the prediction: untick Show predicted flux under Readings';
  await r.scrollRail('#tPred');
  await r.click('#tPred');
  await r.secs(0.5);

  state.caption = 'Set the charge to +1 nC with the Selected charge slider';
  await r.scrollRail('#qCtl');
  await slide('#sQ', 1, 0.5);
  r.check.q = await r.text('#oQ');
  await r.secs(0.3);

  state.caption = 'Put it at the center: type 0 for x and for y';
  for (const id of ['#qX', '#qY']) {
    await r.click(id);
    await p.keyboard.press('Control+A'); await r.tick(2);
    await p.keyboard.type('0'); await r.tick(4);
    await p.keyboard.press('Enter'); await r.tick(4);
  }
  r.check.x = await p.inputValue('#qX'); r.check.y = await p.inputValue('#qY');
  const qx = await r.box('#qX'), qy = await r.box('#qY');
  state.arrow = { rect: [qx[0] - 30, qx[1] - 4, qy[0] + qy[2] - qx[0] + 34, qx[3] + 8] };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Read the numerical flux over the sphere';
  r.check.R = await r.text('#oR').catch(() => '');
  r.check.head = await r.text('#headline');
  state.arrow = { rect: await r.box('#headline') };
  const hd = await r.box('#headline');
  state.zoom = [hd[0] + hd[2] - 720 + 10, hd[1] - 20, 720, 405];
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#tbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat with the box and the cylinder, then send the table to the worksheet';
  const ex = await r.box('#expTab');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.text('#tbl tbody tr');
  r.check.mN = await r.text('#mN');
});
