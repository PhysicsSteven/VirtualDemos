// How this works: The Big Bang and the Early Universe, Expansion view (worksheet cosmic-expansion). The first readings: Blind on,
// Hubble's law today (Planck ΛCDM, home the Milky Way), the distances to A to E at t = 0 and at t = +0.1 Gyr. Check by hand: every
// distance grows by the same factor a(0.1 Gyr) = 1.0069 (1 + H₀Δt = 1 + 67.4 × 0.1/977.8 = 1.00689), so v = Δd/Δt = H₀d.
require('./lib.cjs')({ demo: 'early-universe', title: 'The Big Bang and the Early Universe' }, async (r) => {
  const { state, p } = r;
  /* the page scrolls at this size, not only the sidebar: bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const panel = async () => { const b = await r.box('#pane'); return [b[0] + b[2] - 190, b[1] + 8, 182, 146]; };   /* the distance panel drawn at the top right of the picture */
  const dist = () => p.evaluate(() => [...document.querySelectorAll('.vd-readings table.rows tbody tr')].map((tr) => [...tr.querySelectorAll('td')].map((td) => td.textContent.trim()).join(' ')));

  state.caption = 'Sample readings: the distances to galaxies A to E today and 0.1 Gyr later';
  await r.secs(2.6);

  state.caption = 'Turn Blind on: open Lab at the bottom of the sidebar and tick Blind';
  await into('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await into('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.6);

  state.caption = "Choose the Hubble's law today setup";
  await into('#presets');
  await r.click('[data-p="exToday"]');
  await r.secs(0.6);

  state.caption = 'Read the distances to A to E at t = 0, then record them: one row per galaxy';
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  state.arrow = { rect: await panel() };
  await r.secs(2.0);
  state.arrow = null;
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Step the time 0.1 Gyr later: press +0.1 Gyr. Every distance grows';
  await into('#fwd');
  state.capTop = true;   /* the button sits at the bottom of the page */
  await r.click('#fwd');
  await r.tick(4);
  state.capTop = false;
  r.check.tau = await r.text('#oTau');
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  state.arrow = { rect: await panel() };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record again. The table now has ten rows';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  await into('.vd-readings table.rows tbody tr:nth-child(6)');
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Send the ten rows to the worksheet, then find each speed from Δd/Δt';
  await into('.vd-readings .vd-export');
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => window.vdRows().map((q) => `${q.galaxy} ${q.t_Gyr} ${q.d_Mpc}`).join('; '));
});
