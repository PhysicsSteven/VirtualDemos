// How this works: Gas in a Box (Worksheet 1). The first reading of Pressure and temperature: Relax to equilibrium, 150 argon atoms,
// the box 50 nm wide (A = 1500 nm²), insulated walls, the temperature slider at 50 K (its log steps give 50.12 K).
// Expected: P ideal = NkT/A = 150 × 1.380649e-23 × 50.12 / 1.5e-15 m² = 69.2 µN/m (0.0692 mN/m); the hard disks 0.5 nm across
// raise the measured P by about Nπσ²/(2A) = 3.9% (second virial coefficient of hard disks), to about 72 µN/m, give or take the
// scatter of a one second average; v_rms = √(2kT/m) = √(2 × 1.380649e-23 × 50.12 / 6.63e-26) = 144.5 m/s.
require('./lib.cjs')({ demo: 'ideal-gas', title: 'Gas in a Box' }, async (r) => {
  const { state, p, W } = r;
  /* drag a slider's thumb from its value to near want, then a fraction of a pixel per frame until its value is want (force-table.cjs) */
  const slide = async (sel, out, want, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 0.8);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && (await val()) !== want; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
    return r.text(out);
  };
  await p.addStyleTag({ content: '.vdt-btn{visibility:hidden!important} .rail::after{content:"";display:block;height:300px}' });   /* the measuring tools never appear; room below the readings so the table can scroll up into view */
  await p.clock.runFor(100);
  const can = await r.box('#boxPane');   /* the picture's pane (the 2D canvas is hidden in 3D) */

  state.caption = 'Sample reading: 150 argon atoms at 50 K in a box 50 nm wide';
  await r.secs(2.8);

  state.caption = 'Choose Relax to equilibrium: 150 atoms, the box 50 nm wide';
  await r.click('#presets [data-p="relax"]');
  state.arrow = { rect: await r.box('#presets [data-p="relax"]') };
  r.check.setup = `${await r.text('#nOut')} atoms, ${await r.text('#wOut')}`;
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Set the temperature: drag the Temperature slider to 50 K';
  await r.scrollRail('#tIn');
  r.check.Tset = await slide('#tIn', '#tOut', 740, 0.25);
  state.arrow = { rect: await r.box('#tOut') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Wait a few seconds: the speeds settle onto the curve and the pressure steadies';
  await r.moveTo(can[0] + can[2] - 60, can[1] + 120, 0.6);
  const hp = await r.box('#histPane');
  state.zoom = [hp[0], r.H - 450, 800, 450];   /* the bottom of the box and the speed histogram under it */
  await r.secs(3.4);
  state.zoom = null;
  await r.scrollRail('#read1');
  await r.secs(1.6);

  state.caption = 'Read P measured beside P ideal = NkT/A. P wanders by several percent';
  const rd = await r.box('#read1');
  state.zoom = [W - 560, rd[1] - 120, 560, 315];
  state.arrow = { rect: await r.box('#rP') };
  await r.secs(1.5);
  state.arrow = { rect: await r.box('#rPi') };
  await r.secs(1.3);
  r.check.read = await p.evaluate(() => ['rT', 'rN', 'rP', 'rPi', 'rRatio', 'rA', 'rMean', 'rRms'].map((id) => id + ' ' + document.getElementById(id).textContent).join(' | '));
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at temperatures up to 1000 K, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
