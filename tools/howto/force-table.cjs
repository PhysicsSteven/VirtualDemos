// How this works: Vectors and Relative Motion, Force table setup (Worksheet 1). Part 1 with the answers hidden: 0.150 kg at 20°
// and 0.200 kg at 110° (the setup opens with these), the third string set to the predicted equilibrant. Expected: the two pulls are
// at right angles, so the resultant is √(0.150² + 0.200²) = 0.250 kg of weight at 20° + tan⁻¹(0.200/0.150) = 73.1°; the
// equilibrant is 0.250 kg at 253.1°, and at 253° with 1 g of pulley friction the ring centers.
require('./lib.cjs')({ demo: 'vectors', title: 'Vectors and Relative Motion', query: '?setup=table' }, async (r) => {
  const { state, p } = r;
  /* drag a slider's thumb from its value to near want, then a fraction of a pixel per frame until its value is want */
  const slide = async (sel, out, want, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 0.7);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && (await val()) !== want; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
    return r.text(out);
  };
  await p.click('[data-p="table"]');
  /* Blind goes on before the first frame: ticking it on camera means scrolling the sidebar past the equilibrant it hides */
  await p.click('details.fold:has(#labBlind) > summary');
  await p.click('#labBlind');
  await p.evaluate(() => { document.querySelector('.rail').scrollTop = 0; });
  await p.clock.runFor(300);

  state.caption = 'Sample: Part 1, the force that balances 150 g at 20° and 200 g at 110°';
  await r.secs(3.2);

  state.caption = 'Blind is on in the Lab section, so the answers stay hidden';
  await r.scrollRail('#labBlind');
  const bl = await r.box('#labBlind');
  await r.moveTo(bl[0] + 6, bl[1] + 6, 0.6);
  state.arrow = { rect: [bl[0] - 4, bl[1] - 6, 250, bl[3] + 12] };
  state.zoom = [r.W - 640, r.H - 360, 640, 360];   /* the check box sits low in the sidebar, under the caption otherwise */
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Hang string 3 at your predicted angle, 253°';
  await r.scrollRail('#ftRow3');
  r.check.A3 = await slide('#ftA3', '#oFtA3', 253, 0.2);
  await r.secs(0.5);

  state.caption = 'Give it your predicted mass, 0.250 kg';
  r.check.M3 = await slide('#ftM3', '#oFtM3', 250, 0.15);
  await r.secs(0.4);

  state.caption = 'The ring centers on the pin: the three pulls add to zero';
  await r.moveTo(480, 470, 0.6);
  state.zoom = [17, 185, 720, 405];   /* the ring and the status line at the top left */
  r.check.status = await r.text('#ft3dNote span');
  state.arrow = { rect: await r.box('#ft3dNote span') };
  await r.secs(3.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record this setup. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Find the mass and angle range that stays centered, then send it all to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.2);
  r.check.row = await r.text('#rowsTbl tbody tr');
  r.check.out = await r.text('#ftOut');
});
