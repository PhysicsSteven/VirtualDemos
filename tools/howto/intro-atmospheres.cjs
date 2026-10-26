// How this works: Why Small, Hot Planets Lose Their Air (Astro 2203, intro-atmospheres). The first reading of Part 2: Relax to
// equilibrium, the temperature slider at 300 K (its log steps give 298.5 K), hydrogen. Expected: rms speed in the box
// √(2kT/m) = √(2 × 1.380649e-23 × 298.5 / (2.016 × 1.66053906892e-27)) = 1569 m/s; of a real gas √(3kT/m) = 1922 m/s.
require('./lib.cjs')({ demo: 'ideal-gas', query: '?ws=intro-atmospheres', title: 'Gas in a Box' }, async (r) => {
  const { state, p, W } = r;
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
  await p.addStyleTag({ content: '.vdt-btn{visibility:hidden!important} .rail::after{content:"";display:block;height:300px}' });
  await p.clock.runFor(100);
  const can = await r.box('#boxPane');

  state.caption = 'Sample reading: hydrogen at 300 K';
  await r.secs(2.8);

  state.caption = 'Choose Relax to equilibrium';
  await r.click('#presets [data-p="relax"]');
  await r.secs(0.8);

  state.caption = 'Set the temperature: drag the Temperature slider to 300 K';
  await r.scrollRail('#tIn');
  r.check.Tset = await slide('#tIn', '#tOut', 895, 0.25);
  state.arrow = { rect: await r.box('#tOut') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Choose the gas: hydrogen. Its light molecules fly much faster';
  await r.scrollRail('#gasChips');
  await r.click('#gasChips [data-gas="h2"]');
  await r.tick(4);
  await r.moveTo(can[0] + can[2] - 60, can[1] + 120, 0.6);
  const hp = await r.box('#histPane');
  state.zoom = [hp[0], r.H - 450, 800, 450];
  await r.secs(3.4);
  state.zoom = null;

  state.caption = 'Read the rms speed in the box, and of a real gas at the same temperature';
  await r.scrollRail('#read1');
  await r.tick(4);
  const a = await r.box('#rRms'), b = await r.box('#rRms3');
  state.arrow = { rect: [Math.min(a[0], b[0]), a[1] - 22, Math.max(a[0] + a[2], b[0] + b[2]) - Math.min(a[0], b[0]), b[1] + b[3] - a[1] + 22] };
  r.check.read = await p.evaluate(() => ['unitsGas', 'rT', 'rRms', 'rRms3'].map((id) => id + ' ' + document.getElementById(id).textContent).join(' | '));
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for helium, nitrogen, argon and carbon dioxide, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
