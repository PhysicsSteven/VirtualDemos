// How this works: Stress and Strain, worksheet shear-bulk (Shear and Bulk Moduli). The first table's first reading: Shear test,
// Blind on, the aluminum block at F = 10 kN. Expected: Δx = F L/(A S) = 1.0e4 N × 0.05000 m/(25.00e-4 m² × 25 GPa) = 8.0 µm
// (S of aluminum 25 GPa, OpenStax Vol. 1 Table 12.1; block 5.000 cm high, top face 25.00 cm²).
require('./lib.cjs')({ demo: 'stress-strain', title: 'Stress and Strain: Shear and Bulk' }, async (r) => {
  const { state, p } = r;
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: shear an aluminum block with a 10 kN push';
  await r.secs(2.6);

  state.caption = 'Choose the Shear test';
  await r.click('#tests [data-t="shear"]');
  await r.secs(0.8);

  state.caption = 'Turn Blind on: open Lab and tick Blind';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.5);

  state.caption = 'Choose the block: Aluminum';
  await r.scrollRail('#sbSol');
  await r.click('#sbSol [data-sb="aluminium"]');
  await r.secs(0.6);

  state.caption = 'Turn the screw: drag the force to 10 kN';
  const sl = await r.box('#sF');
  state.zoom = [0, sl[1] + sl[3] + 40 - 405, 720, 405];
  r.check.F = await r.slide('#sF', '#oF', 10, 0.001, 1);
  await r.secs(0.6);

  state.caption = 'Read the top plate\'s displacement from the sensor';
  const dx = '#out div:nth-child(2)';
  await r.scrollRail('#out');
  state.zoom = null;
  r.check.dx = await r.text(dx);
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box(dx) };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at 20, 30, 40 and 50 kN, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
