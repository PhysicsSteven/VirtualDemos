// How this works: Galton Board, worksheet galton-board. The first table's first reading: 12 fair rows (p = 0.5), 100 balls.
// Expected: mean near np = 6.00 and standard deviation near √(np(1 − p)) = √3 = 1.73; with 100 balls the sample values scatter
// around these by about 0.17 for the mean. The run is random: the numbers on screen are the demo's own, printed in r.check.
require('./lib.cjs')({ demo: 'galton-board', title: 'Galton Board' }, async (r) => {
  const { state, p } = r;
  const N = () => p.evaluate(() => parseInt(document.querySelector('#out > div:first-child dd').textContent) || 0);
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: 100 balls through 12 rows, an even chance at each peg';
  await r.secs(2.6);

  state.caption = 'Choose 12 rows, fair';
  await r.scrollRail('#presets');
  await r.click('#presets button:first-child');
  await r.secs(0.6);

  state.caption = 'Drop 100 balls and let them all land';
  await r.click('#drop100');
  for (let i = 0; i < 600 && (await N()) < 100; i++) await r.tick();
  await r.secs(0.8);

  state.caption = 'Read the count, the sample mean and the standard deviation';
  await r.scrollRail('#out');
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.rail .vd-rec');
  await r.click('.rail .vd-rec');
  await r.tick(4);
  const tb = await r.box('.rail table.rows');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.rail table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Keep dropping to 400, 1600 and 6400 balls, recording each, then export to the worksheet';
  const ex = await r.box('.rail .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.rail table.rows tbody tr td')].map(td => td.textContent));
});
