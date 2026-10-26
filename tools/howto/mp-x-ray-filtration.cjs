// How this works: Shells, the Periodic Table and X Rays, worksheet "Filtration and Half Value Layers" (Medical Physics). The first
// two readings of Table 1: Half value layer setup (tungsten, 80 kV, 2.5 mm Al), Blind on, no sheets on the chamber (K/K₀ = 1.0000),
// then 0.5 mm of aluminum sheets, recorded in the 3D view of the bench. Expected: the air kerma of the SpekPy spectrum behind
// 0.5 mm more aluminum (XCOM μ/ρ, SRD 126 μ_en/ρ of air), relative to none: 0.8566 (key rows 1 and 2: 1.0000, 0.8566). As a
// check, −ln(0.8566)/0.05 cm = 3.10 /cm, or μ/ρ = 1.15 cm²/g for aluminum (2.699 g/cm³): the NIST value near 30 keV, a soft beam.
require('./lib.cjs')({ demo: 'shells-and-x-rays', title: 'Shells, the Periodic Table and X Rays', query: '?view=3d' }, async (r) => {
  const { state, p, W } = r;
  const pageTo = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  const chamber = () => p.evaluate(() => window.vdReadingRow().chamber);
  const recShow = async () => {
    await r.scrollRail('.vd-readings .vd-rec');
    await r.click('.vd-readings .vd-rec');
    await r.tick(4);
    if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
    const row = await r.box('.vd-readings tbody tr:last-child');
    state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
    state.arrow = { rect: row };
    await r.secs(1.8);
    state.arrow = null; state.zoom = null;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the air kerma behind 0 and 0.5 mm of aluminum sheets at 80 kV';
  await r.secs(2.4);

  state.caption = 'Choose the Half value layer, 80 kV setup, and turn Blind on in the Lab section';
  await r.click('[data-p="hvl"]');
  await r.secs(0.6);
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  if (!(await p.evaluate(() => document.getElementById('labBlind').closest('details').open))) { await r.click('details.fold:has(#labBlind) > summary'); await r.tick(4); }
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.5);

  state.caption = 'With no sheets on the chamber the meter reads 1.0000. Record it';
  await pageTo(0);
  const pane = await r.box('#pane');
  state.zoom = [pane[0], pane[1], 640, 360];
  await r.secs(1.6);
  state.zoom = null;
  r.check.k0 = await chamber();
  await recShow();

  state.caption = 'Add 0.5 mm of aluminum sheets: drag the sheets slider';
  let b = await r.box('#sAbs');
  await pageTo(Math.max(0, b[1] + (await p.evaluate(() => scrollY)) - 500));
  b = await r.box('#sAbs');
  state.zoom = [Math.max(0, b[0] - 240), b[1] - 220, 640, 360];
  r.check.x = await r.slide('#sAbs', '#oAbs', 0.5, 0.01, 0.2);
  await r.secs(0.5);
  state.zoom = null;
  await pageTo(0);

  r.check.k = await chamber();
  state.caption = `The sheets cut the air kerma: the meter now reads ${r.check.k}. Record it`;
  const pn = await r.box('#pane');
  state.zoom = [pn[0], pn[1], 640, 360];
  await r.secs(2.2);
  state.zoom = null;
  await recShow();

  state.caption = 'Go on in 0.5 mm steps to 4 mm, then 1 mm steps to 10 mm, and export';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
