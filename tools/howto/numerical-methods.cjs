// How this works: Numerical Methods for Motion, worksheet numerical-methods. The first table's first reading: the spring at
// N = 10 steps a period (h = 0.100 s), one period.
// Expected: largest errors in the first period Euler 4.54e-1, symplectic Euler 4.01e-2, Verlet 1.20e-2, RK4 8.11e-4 (m).
require('./lib.cjs')({ demo: 'numerical-methods', title: 'Numerical Methods for Motion' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the spring with 10 steps a period, after one period';
  await r.secs(2.4);

  state.caption = 'Choose the spring setup';
  await r.scrollRail('#presets');
  await r.click('#presets button:first-child');
  await r.secs(0.5);

  state.caption = 'Set Steps per period N to 10: drag the slider on the Set up card';
  await r.slide('#sN', async () => p.evaluate(() => window.__nm.S.N), 10, 0, 0);
  state.arrow = { rect: await r.box('#oN') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Press +1 period: every method takes exactly 10 steps';
  await r.click('#period1');
  await r.secs(1.8);

  state.caption = 'Read each step rule\'s largest error in the Readouts table';
  await r.scrollRail('#mtab');
  state.arrow = { rect: await r.box('#mtab') };
  r.check.table = (await r.text('#mtab tbody')).replace(/\s+/g, ' ');
  await r.secs(2.4);
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

  state.caption = 'Repeat for N = 20, 50, 100, 200 and 500, then export to the worksheet';
  const ex = await r.box('.rail .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.rail table.rows tbody tr td')].map(td => td.textContent));
});
