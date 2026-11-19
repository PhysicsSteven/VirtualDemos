// How this works: Data Explorer, worksheet describing-data. The first table's first reading: the book's supermarket
// distances (OpenStax Introductory Statistics 2e, 2.1), summarized and recorded.
// Expected: n 21, mean 4.310 km, median 4.0 km, Q1 2.95 km, Q3 5.15 km, s 2.348 km, outlier 12.3 km.
require('./lib.cjs')({ demo: 'data-explorer', title: 'Data Explorer' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the book\'s distances to 21 supermarkets, summarized';
  await r.secs(2.2);

  state.caption = 'Press the setup Distances to supermarkets (2.1)';
  await r.scrollRail('#presets');
  await r.click('#presets button[data-p="market"]');
  await r.secs(0.8);

  state.caption = 'Histogram, dot plot and box plot share one number line';
  state.arrow = { rect: await r.box('#pane') };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Click the far right dot: 12.3 km, outside the upper fence';
  const xy = await p.evaluate(() => { const D = window.__dx, i = D.S.vals.indexOf(12.3), c = document.getElementById('can').getBoundingClientRect(); return [c.x + D.S.dotXY[i][0], c.y + D.S.dotXY[i][1]]; });
  await r.moveTo(xy[0], xy[1], 0.8);
  state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.secs(2.0);

  state.caption = 'Read the mean, median, quartiles, s and outliers in the Readouts';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  r.check.readouts = (await r.text('#out')).replace(/\s+/g, ' ');
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.rail .vd-rec');
  await r.click('.rail .vd-rec');
  await r.tick(4);
  const tb = await r.box('.rail table.rows');
  state.zoom = [r.W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.rail table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Then the pendulum timings; Export to worksheet sends both rows';
  const ex = await r.box('.rail .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.rail table.rows tbody tr td')].map(td => td.textContent));
});
