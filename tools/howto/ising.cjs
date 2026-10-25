// How this works: The Ising Model. The first reading of Part 1's temperature scan: 64 × 64, Metropolis, h = 0, J = +1, 1000 sweeps
// discarded and 5000 averaged at T = 1.5, from all spins up (seed 2026). Expected: Onsager's m = (1 − sinh⁻⁴(2/T))^(1/8)
// = (1 − 1/1.76505⁴)^(1/8) = (1 − 0.10303)^(1/8) = 0.98650, and the exact e for L = 64 at T = 1.5 (Kaufman, shown by the demo).
// The measurement runs "at full speed", as many sweeps as fit in 10 ms a frame, timed with performance.now. On Playwright's paused
// clock performance.now stands still within a frame, so here each call moves it on 0.1 ms: about 100 sweeps a frame, as on a
// slow laptop, so each temperature takes about 2 s. That changes only how fast the progress bar fills, not the numbers (the sweeps and the random numbers are the same).
require('./lib.cjs')({ demo: 'ising', title: 'The Ising Model' }, async (r) => {
  const { state, p, W } = r;
  await p.evaluate(() => {
    const now = performance.now.bind(performance); let base = -1, extra = 0;
    Object.defineProperty(performance, 'now', { configurable: true, value: () => { const t = now(); if (t !== base) { base = t; extra = 0; } extra += 0.1; return t + extra; } });
  });
  const lat = await r.box('#pLat');

  state.caption = 'Sample reading: the magnetization, energy and heat capacity at T = 1.5 on a 64 × 64 lattice';
  await r.secs(3.0);

  state.caption = 'Set the field to zero: click Set h = 0';
  await r.scrollRail('#hZero');
  await r.click('#hZero');
  state.arrow = { rect: await r.box('#hOut') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Choose the 64 lattice and Metropolis updates';
  await r.scrollRail('#sizeSeg');
  await r.click('#sizeSeg [data-l="64"]');
  state.arrow = { rect: await r.box('#methSeg [data-m="metropolis"]') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Discard the first 1000 sweeps and average over 5000';
  await r.scrollRail('#eqSel');
  for (const s of ['#eqSel', '#avSel']) { state.arrow = { rect: await r.box(s) }; await r.secs(1.0); }
  state.arrow = null;
  r.check.settings = await p.evaluate(() => { const S = __ising.S; return { L: S.L, method: S.method, h: S.h, J: S.J, seed: S.seed, eq: document.querySelector('#eqSel').value, av: document.querySelector('#avSel').value }; });

  state.caption = 'Click Scan T. It starts with every spin up at T = 1.5 and measures each temperature in turn';
  await r.click('#scan');
  await r.moveTo(lat[0] + lat[2] * 0.5, lat[1] + lat[3] * 0.4, 0.5);
  for (let i = 0; i < 900 && !(await p.evaluate(() => __ising.S.rows.length)); i++) await r.tick();
  r.check.sweepsAt = await p.evaluate(() => __ising.S.sweeps);
  await r.secs(0.4);
  r.check.result = (await p.evaluate(() => document.querySelector('#result').innerText)).replace(/\n/g, ' | ');
  r.check.row0 = await p.evaluate(() => { const x = __ising.S.rows[0]; return { T: x.T, L: x.L, absq: x.absq, absqErr: x.absqErr, e: x.e, eErr: x.eErr, c: x.c, cErr: x.cErr, chi: x.chi, tau: x.tau }; });

  state.caption = 'The reading at T = 1.5 goes into the table, and the scan goes on up to 3.6';
  /* the scan goes on, and the result block above the table changes height, so keep the first row at one place in the window */
  const hold = () => p.evaluate(() => { const rl = document.querySelector('.rail'), tr = document.querySelector('#tbl tbody tr'); rl.scrollTop += tr.getBoundingClientRect().top - 470; });
  await hold(); await r.tick();
  state.zoom = [W - 600, 470 - 170, 600, 337.5];
  for (let i = 0; i < 78; i++) { await hold(); state.arrow = { rect: await r.box('#tbl tbody tr') }; await r.tick(); }
  r.check.tr = await r.text('#tbl tbody tr');
  state.arrow = null; state.zoom = null;

  state.caption = 'Keep every reading, then send them all to the worksheet';
  await r.scrollRail('#toWs');
  const ex = await r.box('#toWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  for (let i = 0; i < 90; i++) { state.arrow = { rect: await r.box('#toWs') }; await r.tick(); }
  r.check.rows = await p.evaluate(() => __ising.S.rows.length);
});
