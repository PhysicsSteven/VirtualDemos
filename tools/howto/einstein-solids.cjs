// How this works: Entropy and the Second Law, Einstein Solids (Worksheet 2). The Data table's first reading: the Small solids setup
// (3 and 3 oscillators, 6 quanta, all in A) run at 100×, a reading taken while it runs. Expected: q_A + q_B = 6 always, and the
// worksheet's Ω = C(q + N − 1, q) for N = 3 is C(q + 2, 2): 1, 3, 6, 10, 15, 21, 28 for q = 0 to 6 (462 ways in all, C(11, 6)).
require('./lib.cjs')({ demo: 'entropy', title: 'Einstein Solids' }, async (r) => {
  const { state, p, W } = r;
  const scrollPage = async (y, s = 0.6) => {
    const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => window.scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); }
  };
  const stageY = await p.evaluate(() => document.querySelector('#stage').getBoundingClientRect().top + scrollY - 8);
  await p.evaluate(v => window.scrollTo(0, v), stageY);
  await p.clock.runFor(300);

  state.caption = 'Sample reading: two small solids sharing 6 quanta, all in solid A to start';
  await r.secs(3.2);

  state.caption = 'Pick the Small solids setup: 3 and 3 oscillators, 6 quanta, all in A';
  await r.click('#presets [data-p="esSmall"]');
  state.arrow = { rect: await r.box('#presets [data-p="esSmall"]') };
  await r.secs(1.6);

  state.caption = 'Set the speed to 100× and press Start';
  await r.click('#speedSeg [data-s="100"]');
  state.arrow = { rect: await r.box('#speedSeg') };
  await r.secs(0.5);
  state.arrow = null;
  await r.click('#go');
  const can = await r.box('#can');
  await r.moveTo(can[0] + 560, can[1] + 330, 0.5);
  state.caption = 'Random exchanges pass quanta between the oscillators, in and out of each solid';
  state.zoom = [can[0], can[1], 800, 450];   /* the two solids and their quanta, the count in A and the exchanges */
  await r.secs(2.6);
  state.zoom = null;
  await r.secs(0.6);

  state.caption = 'Record a reading as it runs: the exchanges tried and the quanta in each solid';
  /* the sidebar scrolls with the page: scroll down to its readings, which then sit low in the window, so captions go at the top */
  state.capTop = true;
  await scrollPage(await p.evaluate(() => document.documentElement.scrollHeight - innerHeight), 0.6);
  await r.click('.vd-readings .vd-rec');
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
  await r.tick(4);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 60, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record one every few seconds until you have 40, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.now = await p.evaluate(() => { const s = window.__en.S.es.s; return `${s.steps} exchanges, q_A ${s.qA}`; });
});
