// How this works: Vectors and Relative Motion. Part 1 of the Components worksheet with A = (−5, 2) (the first row,
// (4, 3), is the opening state, so the second row shows the drag). Expected: |A| = √29 = 5.385, θ = 180° − tan⁻¹(2/5) = 158.2°.
require('./lib.cjs')({ demo: 'vectors', title: 'Vectors and Relative Motion', query: '?setup=comp' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#can');
  /* before the first frame: find where on the canvas the tip lands on (−5, 2), by trial drags read off the readout, then
     reset the setup; none of this is recorded */
  const comps = async () => (await r.text('#vecOut')).match(/[−-]?\d+\.\d+/g).slice(0, 2).map((t) => +t.replace('−', '-'));
  const U = 23.6;
  let tip = [578.5, 401.5], aim = [366, 425];
  for (let k = 0; k < 4; k++) {
    await p.mouse.move(...tip); await p.mouse.down(); await p.mouse.move(...aim, { steps: 8 }); await p.mouse.up(); await p.clock.runFor(100);
    const c = await comps(); tip = [484.1 + c[0] * U, 472.3 - c[1] * U];
    if (c[0] === -5 && c[1] === 2) break;
    aim = [aim[0] + (-5 - c[0]) * U, aim[1] - (2 - c[1]) * U];
  }
  await p.click('#presets [data-p="comp"]'); await p.clock.runFor(200);
  r.check.aim = aim;

  state.caption = 'Sample: the vector (−5, 2) from Worksheet 2, Part 1: its size and direction';
  await r.secs(3.0);

  state.caption = 'Hide the answers: tick Blind in the Lab section';
  await r.scrollRail('details.fold:has(#labBlind) > summary');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.tick(4);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  await r.secs(0.8);

  state.caption = 'Set the vector: drag the tip of A to (−5, 2)';
  state.zoom = [can[0] + can[2] / 2 - 400, can[1] + 40, 800, 450];
  await r.moveTo(578.5, 401.5, 0.7);
  await r.dragTo(...aim, 1.2);
  await r.secs(1.0);

  state.caption = 'Work out its size and angle by hand, then untick Blind to check';
  state.zoom = null;
  await r.click('#labBlind');
  await r.scrollRail('#vecOut');
  r.check.out = await r.text('#vecOut');
  state.arrow = { rect: await r.box('#vecOut') };
  await r.secs(3.2);
  state.arrow = null;

  state.caption = 'Record these vectors. They go into the table';
  await r.scrollRail('#vecCapture');
  await r.click('#vecCapture');
  await r.tick(4);
  state.arrow = { rect: await r.box('#vecTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record each row, then send them all to the worksheet';
  const ex = await r.box('#vecExport');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await r.text('#vecTbl tbody tr');
});
