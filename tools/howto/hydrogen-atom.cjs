// How this works: Hydrogen Orbitals, worksheet "The Hydrogen Atom: Finding the Electron". The first reading: the 1s orbital,
// Measure in the 3D cloud view until at least 5000 positions are found, then Record reading. Expected: ⟨r⟩ = (3n² − l(l + 1))/2 a₀
// = 1.5 a₀ for 1s, with a standard error near 0.866/√N ≈ 0.012 a₀ at N = 5000 (key row 1: N 6210, 1.5067 ± 0.0109 a₀).
// Measure finds 10(e^(t/2.5) − 1) positions after t seconds, so 5000 takes 15.5 s; it is shown 3 times faster.
require('./lib.cjs')({ demo: 'hydrogen-orbitals', title: 'Hydrogen Orbitals' }, async (r) => {
  const { state, p, W } = r;
  const found = () => p.evaluate(() => window.__ho.measured);
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: find the electron in the 1s orbital at least 5000 times';
  await r.secs(2.4);

  state.caption = 'Choose the 1s orbital. Stay in the 3D cloud view';
  await r.scrollRail('[data-p="1s"]');
  await r.click('[data-p="1s"]');
  await r.secs(1.0);

  state.caption = 'Press Measure. Each dot is one position found (shown 3 times faster)';
  await r.click('#measure');
  await r.moveTo(560, 560, 0.5);
  r.speed = 3;
  for (let i = 0; i < 400 && (await found()) < 5000; i++) await r.tick();
  r.speed = 1;
  r.check.found = await found();
  state.caption = 'Once it passes 5000 positions, record a reading';
  state.arrow = { rect: await r.box('#mclock') };
  await r.secs(1.2);
  state.arrow = null;
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 600, Math.min(row[1] - 200, r.H - 337.5), 600, 337.5];
  state.arrow = { rect: row };
  state.caption = 'The mean distance of the finds from the proton, and its standard error, in Bohr radii';
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Do the same for each orbital in the list, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
