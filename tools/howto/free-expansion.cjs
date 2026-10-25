// How this works: Entropy and the Second Law, Free Expansion (Worksheet 1). The first run of the Data table: the Four molecules
// setup at 100×, the partition removed, run until the clock passes 2000 s, one reading. At 100× the model clock runs 50 s for each
// real second, so 2000 s takes 40 s: the wait is shown 12 times faster (said in the caption), one unbroken run. Expected: each molecule is equally likely to be in either half, so the share of time at n on the left tends to
// C(4, n)/2⁴ = 1/16, 4/16, 6/16, 4/16, 1/16 = 0.0625, 0.25, 0.375, 0.25, 0.0625, with the scatter of a 2000 s run.
require('./lib.cjs')({ demo: 'entropy', title: 'Free Expansion' }, async (r) => {
  const { state, p, W } = r;
  const scrollPage = async (y, s = 0.6) => {
    const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => window.scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); }
  };
  const stageY = await p.evaluate(() => document.querySelector('#stage').getBoundingClientRect().top + scrollY - 8);
  await p.evaluate(v => window.scrollTo(0, v), stageY);
  await p.clock.runFor(300);
  const tOpen = () => p.evaluate(() => window.__en.S.fe.g.tOpen);

  state.caption = 'Sample reading: four molecules, the share of time at each count on the left over 2000 s';
  await r.secs(3.2);

  state.caption = 'Pick the Four molecules setup, then set the speed to 100×';
  await r.click('#presets [data-p="fe4"]');
  state.arrow = { rect: await r.box('#presets [data-p="fe4"]') };
  await r.secs(0.6);
  await r.click('#speedSeg [data-s="100"]');
  state.arrow = { rect: await r.box('#speedSeg') };
  await r.secs(1.0);
  state.arrow = null;

  /* the partition button is low on the page: scroll to the bottom, where the box, its meters and both graphs also fit, and stay there.
     The button sits under where captions go, so this one goes at the top */
  const maxY = await p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  state.caption = 'Remove the partition';
  state.capTop = true;
  await scrollPage(maxY, 0.6);
  await r.click('#pull');
  state.arrow = { rect: await r.box('#pull') };
  await r.tick(12);
  state.arrow = null;
  state.caption = 'The molecules spread through the whole box';
  state.capTop = false;
  await r.moveTo(700, 300, 0.5);
  state.zoom = [17, 0, 800, 450];   /* the box, its count bar and the three meters */
  await r.secs(2.4);
  state.zoom = null;

  state.caption = 'The graph below adds up the share of time spent at each count on the left';
  const cv = await r.box('#curve');
  state.arrow = { rect: [cv[0] + cv[2] / 2, cv[1], cv[2] / 2, cv[3]] };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Let it run until the clock passes 2000 s (shown 12× faster)';
  const clk = '#out > div:nth-child(3)';   /* Time since opened */
  state.arrow = { rect: await r.box(clk) };
  r.check.before = await r.text(clk);
  r.speed = 12;   /* 100× and 12 times faster per frame: 600 s on the model clock for each second of video */
  for (let i = 0; i < 300 && (await tOpen()) < 2000; i++) await r.tick();
  r.speed = 1;
  r.check.after = await r.text(clk);
  await r.secs(1.2);
  state.arrow = null;

  /* the readings sit low in the window, so captions go at the top from here */
  state.caption = 'Record a reading: one row for each count on the left';
  state.capTop = true;
  await r.click('.vd-readings .vd-rec');
  r.check.rows = await p.evaluate(() => window.vdRows().map(x => `${x.n_left}: ${x.time_s} s, ${x.share}`).join(' | '));
  r.check.run = await p.evaluate(() => { const x = window.vdRows()[0]; return `run ${x.run_s} s, counted ${x.counted_s} s`; });
  await r.tick(2);
  /* the five new rows make the sidebar longer: scroll it to its end so they come into the window */
  for (let i = 0; i < 12; i++) { await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop += 14; }); await r.tick(); }
  await p.evaluate(() => { const rl = document.querySelector('.rail'); rl.scrollTop = rl.scrollHeight; }); await r.tick();
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 90, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody') };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;
  r.check.tb = tb;

  state.caption = 'Send it to the worksheet, then clear and repeat with 10 molecules';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
