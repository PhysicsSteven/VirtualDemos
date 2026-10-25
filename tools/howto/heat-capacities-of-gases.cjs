// How this works: Heat Capacities of Gases (Worksheet 1 of gas-heat-capacity). The first readings of the data table: Argon, piston
// locked (0.10 mol, 2.0 W heater), the start (0.0 J, 20.00 °C, 101.325 kPa) and then about 10 J later.
// Expected: V0 = nRT0/P0 = 0.10 × 8.314462618 × 293.15 / 101325 = 2.4055 L; C = nC_V = 0.10 × 1.5 × 8.314462618 = 1.24717 J/K, so
// 10.0 J warms the gas by 8.018 K to 28.02 °C and P = nRT/V0 = 101.325 × 301.17/293.15 = 104.096 kPa. Records gas-heat-capacity.html.
require('./lib.cjs')({ demo: 'gas-heat-capacity', title: 'Heat Capacities of Gases' }, async (r) => {
  const { state, p, W } = r;
  await p.addStyleTag({ content: '.vdt-btn{visibility:hidden!important} .rail::after{content:"";display:block;height:300px}' });   /* the measuring tools never appear; room below the readings so the table can scroll up into view */
  await p.clock.runFor(100);
  const Q = () => p.evaluate(() => window.__gh.S.heat.Q);
  const can = await r.box('#pane');   /* the picture's pane (the 2D canvas is hidden in 3D) */
  const tableZoom = async () => {
    const tb = await r.box('.vd-readings table');
    state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
    const rows = await p.$$eval('.vd-readings tbody tr', (t) => t.length);
    state.arrow = { rect: await r.box(`.vd-readings tbody tr:nth-child(${rows})`) };
  };

  state.caption = 'Sample reading: 0.10 mol of argon with the piston locked, at the start and after 10 J of heat';
  await r.secs(3.0);

  state.caption = 'Choose Argon, piston locked: 0.10 mol of argon and a 2.0 W heater';
  await r.click('#presets [data-p="argonV"]');
  state.arrow = { rect: await r.box('#presets [data-p="argonV"]') };
  await r.secs(1.5);
  state.arrow = null;

  state.caption = 'Record the starting reading: 0.0 J at 20.00 °C';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  await tableZoom();
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Click Start to run the heater, then Pause when the heat meter reads 10.0 J';
  const go = await r.box('#go');
  await r.click('#go');
  state.zoom = [can[0] + 180, can[1] - 50, 720, 405];   /* Start and Pause, the cylinder, the thermometer and the heat meter */
  for (let i = 0; i < 400 && (await Q()) < 9.0; i++) await r.tick();
  state.arrow = { rect: go };
  for (let i = 0; i < 100 && (await Q()) < 9.95; i++) await r.tick();
  /* press and let go within one frame, so the heater stops in the first frame the meter reads 10.0 J (a frame adds 0.067 J) */
  state.click = r.frame; state.down = true; await p.mouse.down(); await p.mouse.up();
  await r.tick(3); state.down = false;
  state.arrow = null;
  await r.secs(1.4);
  state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  await tableZoom();
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat about every 10 J up to 200 J, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => window.vdRows().map((x) => [x.gas, x.n_mol, x.piston, x.Q_J, x.T_C, x.V_L, x.P_kPa].join(', ')).join(' ; '));
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
});
