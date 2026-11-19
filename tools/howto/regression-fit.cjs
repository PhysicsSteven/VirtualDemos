// How this works: Fitting a Line and Judging the Fit (Linear Regression and Correlation). The worksheet's parts A and B on the
// book's third exam and final exam data: your line dragged off the flat line at ȳ toward the points, the two sums of squares
// compared, the fit recorded and the shuffle test run.
// Expected: least squares sum of squares 2424.3, your line's sum smaller than 4326.7 (the flat line) and larger than 2424.3;
// r = 0.6631; shuffle p 0.0230 with 1,000 shuffles, Draw 1.
require('./lib.cjs')({ demo: 'regression', title: 'Linear Regression', query: '?ws=regression-fit' }, async (r) => {
  const { state, p } = r;
  const at = (k) => p.evaluate((k) => { const R = window.__reg, S = R.S, c = document.getElementById('can').getBoundingClientRect(), v = S.view;
    const M = { l: 62, r: 14, t: 14, b: 42 }, W = c.width, H = c.height;
    return [c.x + M.l + (S.hx[k] - v.x0) / (v.x1 - v.x0) * (W - M.l - M.r), c.y + H - M.b - (S.hy[k] - v.y0) / (v.y1 - v.y0) * (H - M.t - M.b)]; }, k);
  const yTo = (y) => p.evaluate((y) => { const S = window.__reg.S, c = document.getElementById('can').getBoundingClientRect(), v = S.view;
    return c.y + c.height - 42 - (y - v.y0) / (v.y1 - v.y0) * (c.height - 14 - 42); }, y);

  state.caption = 'Sample reading: fit a line by eye, then compare it with the least squares line';
  await r.secs(2.2);
  state.caption = 'Press the setup Third exam and final exam (data from the book)';
  await r.scrollRail('#presets [data-p="exam"]');
  await r.click('#presets [data-p="exam"]');
  await r.secs(1.2);
  const pane = await r.box('#pane');
  state.caption = 'Each residual is a square. The violet line starts flat at the mean';
  state.zoom = [pane[0], pane[1], pane[2], pane[2] * 9 / 16];
  await r.secs(2.6);

  state.caption = 'Drag the round handles of your line toward the points: its squares shrink';
  let [x, y] = await at(0); await r.moveTo(x, y, 0.7); await r.dragTo(x, await yTo(142), 1.2);
  [x, y] = await at(1); await r.moveTo(x, y, 0.7); await r.dragTo(x, await yTo(180), 1.2);
  r.check.yours = await p.evaluate(() => { const R = window.__reg, S = R.S, L = { b: (S.hy[1] - S.hy[0]) / (S.hx[1] - S.hx[0]) }; L.a = S.hy[0] - L.b * S.hx[0]; return R.sseOf(S.inc.x, S.inc.y, L.a, L.b); });
  r.check.best = await p.evaluate(() => window.__reg.S.F.sse);
  state.caption = 'The box at the top left: you cannot beat the least squares total';
  await r.secs(2.6);
  state.zoom = null;

  state.caption = 'Press Record reading: the fit goes into the Readings table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(1.0);
  r.check.r = await p.evaluate(() => window.__reg.S.F.r);

  state.caption = 'Press Play: the shuffle test breaks any link between x and y, 1,000 times';
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  await r.click('#play');
  await r.secs(3.0);
  await p.evaluate(() => { const l = document.getElementById('lower').getBoundingClientRect(); window.scrollBy(0, l.top - 200); }); await r.tick(2);
  const low = await r.box('#lower');
  state.zoom = [low[0], low[1] + low[3] - low[2] * 9 / 16, low[2], low[2] * 9 / 16];
  state.caption = 'Shuffled r values pile up near 0; the real r is far out: shuffle p in the Readouts';
  await r.secs(4.5);
  state.zoom = null;
  r.check.shuffleP = await p.evaluate(() => window.__reg.shuffleP(window.__reg.S.sh.rs, window.__reg.S.F.r));
  state.caption = 'Then copy the readouts into the worksheet tables';
  await r.scrollRail('#out');
  await r.secs(2.0);
});
