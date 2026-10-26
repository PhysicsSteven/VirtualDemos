// How this works: The Bragg Peak, worksheet mp-bragg-peak. The first table's peak reading: 150 MeV protons in water, Blind on,
// the depth of largest dose found with the detector to 0.01 cm. Expected (key row 2, since the last 1 MeV is put down at the end
// of range, 2026-10-26): 99.96 % at 15.62 cm, with 99.89 % at 15.61 cm and 99.84 % at 15.63 cm; R80 15.77 cm sits at the CSDA
// range (PSTAR 15.77 g/cm²), as it should for no energy spread.
require('./lib.cjs')({ demo: 'bragg-peak', title: 'The Bragg Peak' }, async (r) => {
  const { state, p, W } = r;
  const z = () => p.evaluate(() => +document.getElementById('sZ').value);
  const atDet = async () => r.box('#out > div:last-child');
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the depth of the Bragg peak for 150 MeV protons in water';
  await r.secs(2.6);

  state.caption = 'Turn Blind on: open Lab and tick Blind';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.5);

  state.caption = 'Choose 150 MeV in water';
  await r.scrollRail('[data-p="p150"]');
  await r.click('[data-p="p150"]');
  await r.secs(0.6);

  state.caption = 'Drag the detector depth toward the peak, near 15.5 cm';
  const sl = await r.box('#sZ');
  state.zoom = [sl[0] - 520, sl[1] - 250, 640, 360];
  r.check.near = await r.slide('#sZ', '#oZ', 15.5, 0.005, 0.15);
  await r.secs(0.4);

  state.caption = 'Step it 0.01 cm at a time with the arrow keys: the dose rises, then falls past the peak';
  state.zoom = null;
  state.arrow = { rect: await atDet() };
  for (let i = 0; i < 40 && (await z()) < 15.645; i++) { await p.keyboard.press('ArrowRight'); await r.tick(5); }
  await r.secs(0.4);
  state.caption = 'Step back to the largest dose: 100.0 % of the peak at 15.62 cm';
  for (let i = 0; i < 10 && (await z()) > 15.625; i++) { await p.keyboard.press('ArrowLeft'); await r.tick(6); }
  state.arrow = { rect: await r.box('#oZ') };
  await r.secs(0.9);
  state.arrow = { rect: await atDet() };
  await r.secs(1.0);
  state.arrow = null;
  r.check.depth = await r.text('#oZ');
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));

  state.caption = 'Record the reading';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 640, Math.min(row[1] - 200, r.H - 360), 640, 360];
  state.arrow = { rect: row };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Find the 80 % and 20 % depths the same way, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
});
