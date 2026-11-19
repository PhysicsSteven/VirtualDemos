// How this works: Vector Fields, Work and Curl, worksheet vector-fields-work. The first table's first reading: uniform gravity on
// 1.00 kg, the straight line from A = (0, 0) to B = (3, 2) m.
// Expected: Work W, A → B = −19.62 J; the recorded row Uniform gravity, Straight line, −19.62.
require('./lib.cjs')({ demo: 'vector-fields', title: 'Vector Fields, Work and Curl' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the work gravity does on 1 kg along a straight line from A to B';
  await r.secs(2.4);

  state.caption = 'Choose the Uniform gravity setup';
  await r.scrollRail('#presets');
  await r.click('#presets button[data-p="gravity"]');
  await r.secs(0.6);

  state.caption = 'On The path card, set Compare with to No second path';
  const sel = await r.box('#shape2');
  await r.moveTo(sel[0] + sel[2] / 2, sel[1] + sel[3] / 2, 0.8);
  await p.selectOption('#shape2', 'none'); await r.tick(4);
  state.arrow = { rect: sel };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Press Play: the bead adds up the work as it rises from A to B';
  await r.click('#play');
  await p.evaluate(() => window.scrollTo({ top: document.getElementById('pane').getBoundingClientRect().top + window.scrollY - 150 })); await r.tick(2);
  await r.secs(6.6);
  await p.evaluate(() => window.scrollTo({ top: 0 })); await r.tick(2);
  await r.click('#play');

  state.caption = 'Read the work from A to B in the Readouts';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out div:first-child') };
  r.check.work = await r.text('#out div:first-child');
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.rail .vd-rec');
  await r.click('.rail .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.rail table.rows tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat for the other paths and the swirl force, then export to the worksheet';
  const ex = await r.box('.rail .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.rail table.rows tbody tr td')].map(td => td.textContent));
});
