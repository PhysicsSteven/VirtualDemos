// How this works: Solids, worksheet "Lattice Energy of Ionic Crystals". The first readings: Rock salt, Blind on, LiF and then LiCl
// picked in the salt list and recorded. Expected (key rows 1 and 2): LiF r₀ 0.2014 nm, n 6, α 1.7476, table U 1036 kJ/mol =
// 10.737 eV per ion pair; LiCl 0.2570 nm, n 7, 853 kJ/mol = 8.841 eV (1 eV per ion pair = 96.485 kJ/mol).
require('./lib.cjs')({ demo: 'solids', title: 'Solids' }, async (r) => {
  const { state, p, W } = r;
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
    const row = await r.box('.vd-readings tbody tr:last-child');
    state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
    state.arrow = { rect: row };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  /* a slider in the scene, below the picture: scroll the page to it, drag it, scroll back */
  const set = async (id, out, want, tol, coarse) => {
    let b = await r.box('#' + id);
    if (b[1] > r.H - 80) { await pageTo(b[1] + (await p.evaluate(() => scrollY)) - 520); b = await r.box('#' + id); }
    state.zoom = [Math.max(0, b[0] - 120), b[1] - 240, 640, 360];
    const got = await r.slide('#' + id, '#' + out, want, tol, coarse);
    await r.secs(0.6);
    state.zoom = null;
    await pageTo(0);
    return got;
  };
  const exportEnd = async (s) => {
    const ex = await r.box('.vd-export');
    await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
    state.arrow = { rect: ex };
    await r.secs(s);
    r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
    r.check.ws = await p.evaluate(() => window.vdWorksheet());
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  const salt = async (v) => {
    let b = await r.box('#selSalt');
    if (b[1] > r.H - 80) { await pageTo(b[1] + (await p.evaluate(() => scrollY)) - 520); b = await r.box('#selSalt'); }
    state.zoom = [Math.max(0, b[0] - 40), b[1] - 240, 640, 360];
    await r.moveTo(b[0] + b[2] / 2, b[1] + b[3] / 2, 0.6);
    await p.selectOption('#selSalt', { label: v });
    await r.secs(1.0);
    state.zoom = null;
    await pageTo(0);
  };
  state.caption = 'Sample readings: lithium fluoride and lithium chloride, two rock salt crystals';
  await r.secs(2.4);

  state.caption = 'Choose Rock salt, and turn Blind on in the Lab section';
  await r.click('[data-p="crNaCl"]');
  await r.secs(0.4);
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  if (!(await p.evaluate(() => document.getElementById('labBlind').closest('details').open))) { await r.click('details.fold:has(#labBlind) > summary'); await r.tick(4); }
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.6);

  state.caption = 'Pick LiF in the salt list under the picture, and record a reading';
  await salt('LiF');
  r.check.lif = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Now LiCl, and record again';
  await salt('LiCl');
  r.check.licl = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
  await record(1.6);

  state.caption = 'Record all seventeen rock salt crystals, then send the table to the worksheet';
  await exportEnd(2.4);
});
