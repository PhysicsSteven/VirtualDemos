// How this works: Simple Machines (Forces and Friction, Simple machines setup). Part 1's first reading: the lever with effort arm
// 1.20 m and load arm 0.30 m, block 10.0 kg, Blind on. Expected: F_out = mg = 98.10 N, F_in = mg × 0.30/1.20 = 24.53 N; each end moves
// 0.4 of its arm, d_in = 0.480 m and d_out = 0.120 m, so IMA = AMA = 4.00.
// Records forces.html opened from the worksheet (?ws=hs-simple-machines), which opens the Simple machines setup on the lever.
require('./lib.cjs')({ demo: 'forces', title: 'Simple Machines', query: '?ws=hs-simple-machines' }, async (r) => {
  const { state, p, W } = r;
  state.caption = 'Sample reading: a lever lifting a 10.0 kg block, effort arm 1.20 m, load arm 0.30 m';
  await r.secs(3.0);

  state.caption = 'Hide the answers: tick Blind in the Lab section';
  await r.scrollRail('details:has(#labBlind) > summary');
  await r.click('details:has(#labBlind) > summary');
  await r.tick(3);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.6);
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);

  state.caption = 'Pick Lever above the picture; its knobs set the arms and the mass';
  await r.click('#machSeg [data-mach="lever"]');
  const kn = await r.box('#machKnobs');
  state.zoom = [kn[0] - 20, kn[1] - 30, 640, 360];
  state.arrow = { rect: kn };
  r.check.knobs = (await r.text('#machKnobs')).replace(/\s+/g, ' ');
  r.check.m = await r.text('#oM');
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Press Play: the block rises slowly to the top';
  await r.click('#go');
  for (let i = 0; i < 200 && !(await p.evaluate(() => window.__forces && window.__forces.S && window.__forces.S.mc && window.__forces.S.mc.u >= 1)); i++) await r.tick();
  await r.secs(0.8);
  r.check.out = (await r.text('#forceOut')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box('#forceOut') };
  state.caption = 'At the top, read the effort, the distances and the load';
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map((td) => (td.querySelector('input') ? td.querySelector('input').value : td.textContent)));

  state.caption = 'Repeat with the load arm at 0.60 m, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
});
