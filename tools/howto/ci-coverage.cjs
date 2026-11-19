// How this works: What 95 % Confident Means (Confidence Intervals). The worksheet's part A, first row: the setup A pendulum's
// period: 95 % z intervals, a few intervals played into the stack, Reset, Draw 100, the count read and the reading recorded.
// Expected: the true period 2.006 s; 100 z intervals with σ known, n = 10, each 2 × 1.960 × 0.080/√10 = 0.0992 s wide; about 95
// catch the truth (binomial standard deviation 2.2).
require('./lib.cjs')({ demo: 'confidence-intervals', title: 'Confidence Intervals', query: '?ws=ci-coverage' }, async (r) => {
  const { state, p } = r;
  state.caption = 'Sample reading: 100 intervals at 95 %, and how many of them catch the true period';
  await r.secs(2.4);

  state.caption = 'Press the setup A pendulum\'s period: 95 % z intervals';
  await r.scrollRail('#presets [data-p="z95"]');
  await r.click('#presets [data-p="z95"]');
  await r.secs(1.0);

  state.caption = 'Press Play: each sample of 10 timings adds its interval; a red one misses the green true value';
  await r.click('#play');
  await r.secs(5.5);
  await r.click('#play');
  await r.secs(0.6);

  state.caption = 'Press Reset, then Draw 100';
  await r.click('#reset');
  await r.secs(0.6);
  await r.click('#draw100');
  await r.secs(1.6);
  const pane = await r.box('#pane');
  state.zoom = [pane[0], pane[1], pane[2], pane[2] * 9 / 16];
  await r.secs(2.2);
  state.zoom = null;

  state.caption = 'Caught the truth in the Readouts counts the intervals that contain the true period';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Press Record reading; then press 90 and 99 and record each';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(1.4);
  r.check = await p.evaluate(() => { const C = window.__ci, c = C.coverage(C.P, C.S.samples, C.S.kind, C.S.cl / 100); return { truth: C.P.truth, n: C.S.n, count: c.count, hit: c.hit, width: c.meanWidth,
    rows: [...document.querySelectorAll('.vd-readings tbody tr')].map((tr) => [...tr.cells].map((c) => c.textContent).join(' | ')) }; });
});
