// How this works: Diffusion and Graham's Law (Worksheet 2 of Gas in a Box). The first run of the data table: Two gases mix (150
// molecules of 40 u, 0.50 nm, 300 K in each half), the divider removed and the run recorded from 0 to 400 ps, a row every 10 ps.
// Expected: the counts on the far side climb toward half of each gas (75), A left + A right = 150 at every row, and once each molecule
// has had a few collisions the mean square displacement grows as 4Dt. Enskog's hard disk result D = (1/(2nσ)) √(kT/(πm)) / g(σ),
// with n = 300/1500 nm⁻², σ = 0.50 nm, √(kT/(πm)) = 0.1409 nm/ps and g(σ) = (1 − 7η/16)/(1 − η)² = 1.065 at η = nπσ²/4 = 0.0393,
// gives D = 0.661 nm²/ps, a slope 4D = 2.64 nm²/ps. Records ideal-gas.html.
require('./lib.cjs')({ demo: 'ideal-gas', title: "Diffusion and Graham's Law" }, async (r) => {
  const { state, p, W } = r;
  await p.addStyleTag({ content: '.vdt-btn{visibility:hidden!important} .rail::after{content:"";display:block;height:300px}' });   /* the measuring tools never appear; room below the readings so the table can scroll up into view */
  await p.clock.runFor(100);
  const runT = () => p.evaluate(() => window.__ig.run.t);

  state.caption = 'Sample run: two batches of argon mix once the divider is removed, recorded to 400 ps';
  await r.secs(3.0);

  state.caption = 'Choose Two gases mix: 150 molecules of 40 u at 300 K in each half';
  await r.click('#presets2 [data-p="mix"]');
  state.arrow = { rect: await r.box('#presets2 [data-p="mix"]') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Remove the divider: click Removed above the box. The clock starts at 0 ps';
  await r.click('#divSeg [data-div="0"]');
  state.arrow = { rect: await r.box('#divSeg') };
  r.check.label = await r.text('#rDiv');
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Let the run go just past 400 ps, then click Pause';
  const can = await r.box('#boxPane');   /* the picture's pane (the 2D canvas is hidden in 3D) */
  state.zoom = [can[0], can[1] - 4, can[2], can[2] * 9 / 16];   /* the box, the gas cards, the clock and the top of the graph */
  const pb = await r.box('#play');
  await r.moveTo(pb[0] + pb[2] / 2, pb[1] + pb[3] / 2, 1.0);
  for (let i = 0; i < 400 && (await runT()) < 300; i++) await r.tick();
  state.arrow = { rect: pb };
  for (let i = 0; i < 200 && (await runT()) < 400; i++) await r.tick();
  /* press and let go within one frame, so the run stops a hair past 400 ps */
  state.click = r.frame; state.down = true; await p.mouse.down(); await p.mouse.up();
  r.check.tPause = await runT();
  await r.tick(3); state.down = false;
  r.check.clock = await r.text('#clock');
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the run: a row every 10 ps from 0 to 400 ps goes into the table';
  await r.scrollRail('#recRun');
  await r.click('#recRun');
  await r.tick(4);
  r.check.status = await r.text('.vd-readings .status');
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings .twrap') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Send the run to the worksheet, then repeat at 150 K, 600 K and 1000 K';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => window.vdRows().map((x) => [x.t_ps, x.A_left, x.A_right, x.B_left, x.B_right, x.msd_A_nm2, x.msd_B_nm2].join(',')).join(' ; '));
});
