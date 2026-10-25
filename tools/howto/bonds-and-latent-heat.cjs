// How this works: States of Matter, Atoms view (Worksheet 2, Bonds, Temperature and Latent Heat). The first reading of the Heat a
// crystal run: 432 argon atoms in an fcc crystal at 40 K under 17 atm, before the heater has added any heat. Expected: T = 40.0 K
// (the setup holds T0 while the piston settles), Q = 0.00 kJ/mol, kinetic energy (3/2)RT = 1.5 × 8.314 J/(mol·K) × 40 K = 0.50 kJ/mol,
// bond energy U = the crystal's static lattice energy, −6.87 kJ/mol (the CORE's mdMake at T = 0), plus about (3/2)RT of thermal
// potential energy, so about −6.4 kJ/mol; all solid (99 · 1 · 0 %). The run then starts, so the temperature begins to climb.
require('./lib.cjs')({ demo: 'states-of-matter', title: 'Bonds, Temperature and Latent Heat' }, async (r) => {
  const { state, p, W } = r;
  await p.addStyleTag({ content: '.vdt-btn{visibility:hidden!important}' });   /* the measuring tools never appear */
  const can = await r.box('#pane');
  /* the rail is taller than the window, so the page scrolls down to reach the table and back up for the picture */
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  const row = (k) => `#out div:nth-child(${k})`;

  state.caption = 'Sample reading: a crystal of 432 argon atoms at 40 K under 17 atm, before any heat goes in';
  await r.secs(3.0);

  state.caption = 'Choose the Heat a crystal setup: 40 K, 17 atm, heater at 4 kJ/mol per ns';
  await r.click('#presets [data-p="crystal"]');
  state.arrow = { rect: await r.box('#presets [data-p="crystal"]') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Read the temperature, the heat added, the bond energy and the solid, liquid and vapor shares';
  await r.scrollRail('#out');
  const o = await r.box('#out');
  state.zoom = [W - 640, Math.max(0, o[1] - 60), 640, 360];
  for (const k of [1, 2, 4, 7]) { state.arrow = { rect: await r.box(row(k)) }; await r.secs(1.0); }
  r.check.out = (await p.evaluate(() => document.querySelector('#out').innerText)).replace(/\n/g, ' | ');
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await pageTo(1000);
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.textContent));
  state.arrow = null; state.zoom = null;

  state.caption = 'Start the heater. Capture about every 0.2 kJ/mol as the crystal warms, melts and boils';
  await pageTo(0);
  await r.click('#go');
  await r.moveTo(can[0] + can[2] * 0.75, can[1] + can[3] + 60, 0.5);
  state.zoom = [can[0], can[1] - 40, 800, 450];   /* the atoms and the start of the heating curve under them */
  await r.secs(3.4);
  r.check.later = (await p.evaluate(() => document.querySelector('#out').innerText)).replace(/\n/g, ' | ');
  state.zoom = null;

  state.caption = 'Run until it is all vapor, then send the table to the worksheet';
  await pageTo(1000);
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
