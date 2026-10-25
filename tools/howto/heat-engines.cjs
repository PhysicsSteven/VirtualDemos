// How this works: Heat Engine Cycles. The first Carnot reading of the Data table: the Carnot cycle setup (monatomic gas, 1.00 mol,
// run as an engine), T_h = 400 K, T_c = 300 K. Expected: the setup's isotherms run over a volume ratio of 2, so
// Q_in = nRT_h ln 2 = 8.314462618 × 400 × 0.693147 = 2305.3 J, Q_out = nRT_c ln 2 = 1728.9 J, W_net = 576.31 J and
// η = 1 − 300/400 = 25.0%.
require('./lib.cjs')({ demo: 'heat-engines', title: 'Heat Engine Cycles' }, async (r) => {
  const { state, p, W } = r;
  /* drag a slider's thumb from its value to near want, then a fraction of a pixel per frame until its value is want */
  const slide = async (sel, want, fine) => {
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
  };

  state.caption = 'Sample reading: the Carnot cycle between 400 K and 300 K';
  await r.secs(3.0);

  state.caption = 'Pick the Carnot cycle setup: monatomic gas, 1.00 mol, run as an engine';
  await r.click('#presets [data-p="carnot"]');
  state.arrow = { rect: await r.box('#presets [data-p="carnot"]') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Set the hot temperature: drag its slider down to 400 K';
  await r.scrollRail('#params');
  const pr = await r.box('#params');
  state.zoom = [W - 560, pr[1] - 160, 560, 315];
  await slide('#p_Th', 400, 0.5);
  r.check.Th = await r.text('#o_Th');
  state.arrow = { rect: await r.box('#o_Th') };
  await r.secs(1.2);
  state.caption = 'Keep the cold temperature at 300 K';
  r.check.Tc = await r.text('#o_Tc');
  state.arrow = { rect: await r.box('#o_Tc') };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Read the heat taken in, the heat given off and the net work';
  await r.scrollRail('#effOut');
  r.check.eff = (await r.text('#effOut')).replace(/\s+/g, ' ');
  r.check.formula = await r.text('#formula');
  const ef = await r.box('#effOut'), q3 = await r.box('#effOut > div:nth-child(3)'), w5 = await r.box('#effOut > div:nth-child(5)');
  await r.moveTo(ef[0] - 120, ef[1] + 40, 0.5);
  state.zoom = [W - 560, ef[1] - 90, 560, 315];
  state.arrow = { rect: [q3[0] - 4, q3[1] - 4, ef[2] + 8, w5[1] + w5[3] - q3[1] + 8] };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  /* the readings table is the last thing in the sidebar and sits at the bottom of the window, so this caption goes at the top */
  state.caption = 'Record the reading. It goes into the table';
  state.capTop = true;
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(2);
  /* the new row makes the sidebar longer: scroll it to its end so the row clears the window's bottom edge */
  for (let i = 0; i < 6; i++) { await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop += 8; }); await r.tick(); }
  await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop = rl.scrollHeight; }); await r.tick();
  state.zoom = [W - 600, r.H - 337.5, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Repeat up to 1200 K in steps of 100 K, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
