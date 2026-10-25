// How this works: Michelson Interferometer. Part 1's first reading: the Measure λ, red He–Ne setup (the page opens in it), counter
// zeroed at 500.0 μm, the micrometer turned one way until the counter first shows 20. Expected: λ in the room's air 632.82 nm,
// 2Δd = Nλ, so 20 fringes need Δd = 6.33 μm; the count turns to 20 a little before that, as the starting fringe order is not a
// whole number (the worksheet key reads 506.2 μm).
require('./lib.cjs')({ demo: 'michelson', title: 'Michelson Interferometer' }, async (r) => {
  const { state, p } = r;
  /* scroll the picture column (it scrolls on a 720 px high window) so the shelf below the picture shows */
  const scrollStage = async (to, n = 10) => {
    const from = await p.evaluate(() => document.querySelector('#stage').scrollTop);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((y) => { document.querySelector('#stage').scrollTop = y; }, from + (to - from) * e); await r.tick(); }
  };
  r.check.order0 = await p.evaluate(() => __mi.centreOrder());

  state.caption = "Sample: Part 1's first reading, the micrometer when 20 fringes have passed";
  await r.secs(3.0);

  state.caption = 'Start from Measure λ, red He–Ne, and zero the counter';
  await scrollStage(400);
  state.zoom = [0, 395, 576, 324];   /* the shelf card with the micrometer and the counter, low on a 720 px window */
  await r.click('#zero');
  await r.tick(3);
  const nb = await r.box('#oN'), zb = await r.box('#zero');
  state.arrow = { rect: [nb[0] - 50, zb[1] - 2, zb[0] + zb[2] - nb[0] + 54, zb[3] + 4] };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Turn the micrometer one way: drag its drum down until the counter first shows 20';
  const can = await r.box('#can'), drum = [can[0] + can[2] * 0.93, can[1] + can[3] * 0.51];
  state.zoom = [can[0] + 200, can[1] + 20, 744, 418.5];   /* the drum, the micrometer and the screen with its counter */
  await r.moveTo(...drum, 0.8);
  r.check.N = await r.dragUntil(0, 1, '#oN', '20');
  r.check.m = await r.text('#oM');
  r.check.order1 = await p.evaluate(() => __mi.centreOrder());
  const sb = await r.box('#scr');
  state.arrow = { rect: [sb[0] + sb[2] - 112, sb[1] + 2, 108, 50] };
  await r.secs(1.6);
  state.zoom = null;
  state.arrow = { rect: await r.box('#oM') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('table.rows tbody tr') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Keep turning and record at 40, 60, … up to 200, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.7);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await r.text('table.rows tbody tr');
  r.check.zeroNote = await r.text('#zeroNote');
});
