// How this works: Quantum Wave Packets, worksheet "Energy Levels in a Box and a Spring". The first readings: Square well, infinite
// walls, box widths 0.50 nm and 1.00 nm; each Record stores every level listed. Expected: E_n = (ħ²/2m)(nπ/L)² = 0.37603 n²/L² eV
// (ħ²/2m = 0.0381 eV nm²): at 0.50 nm E₁ 1.50412, E₂ 6.01643, E₃ 13.5369 eV (key rows 1 to 3); at 1.00 nm E₁ 0.37603 eV.
require('./lib.cjs')({ demo: 'quantum-waves', title: 'Quantum Wave Packets' }, async (r) => {
  const { state, p, W } = r;
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
    const row = await r.box('.vd-readings tbody tr:last-child');
    state.zoom = [W - 600, Math.min(row[1] - 200, r.H - 337.5), 600, 337.5];
    state.arrow = { rect: row };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  const width = async (want) => {
    await r.scrollRail('#s1');
    const b = await r.box('#s1');
    state.zoom = [W - 640, b[1] - 150, 640, 360];
    const got = await r.slide('#s1', '#s1Out', want, 0.01);
    state.arrow = { rect: await r.box('#s1Out') };
    await r.secs(0.8);
    state.arrow = null; state.zoom = null;
    return got;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the energy levels of an electron in a box 0.50 nm and 1.00 nm wide';
  await r.secs(2.6);

  state.caption = 'Choose the Square well setup, with infinite walls';
  await r.click('[data-p="iwell"]');
  await r.secs(0.5);
  await r.scrollRail('[data-v="iwell"]');
  await r.click('[data-v="iwell"]');
  await r.secs(0.4);

  state.caption = 'Drag the box width to 0.50 nm. The levels move up';
  r.check.L1 = await width(0.50);

  state.caption = 'Record a reading: it stores every level listed';
  await record(2.0);

  state.caption = 'Now 1.00 nm, and record again';
  r.check.L2 = await width(1.00);
  await record(2.0);

  state.caption = 'Repeat at 1.50, 2.00 and 3.00 nm, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().map((x) => [x.setup, x.L_nm || x.w_nm, x.n, x.E_eV])));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
