// How this works: The Eye, Eye mode (The Eye worksheet). Part 1's first reading: the normal eye with the object far away. The
// setup opens with the object at the near point, 25 cm. Expected: lens to retina 1.80 cm, so a relaxed eye focusing parallel light
// uses P = 1/0.0180 m = 55.56 D, its weakest; the image lands on the retina, 1.800 cm behind the lens, and is sharp.
require('./lib.cjs')({ demo: 'the-eye', title: 'The Eye' }, async (r) => {
  const { state, p } = r;
  const can = await r.box('#can');

  state.caption = 'Sample: Part 1, the normal eye looking at an object far away';
  await r.secs(2.8);

  state.caption = 'Move the object far away: drag Object distance from the eye to ∞';
  await r.scrollRail('#sD');
  const s = await r.box('#sD'), v0 = +(await p.inputValue('#sD')), y = s[1] + s[3] / 2;
  await r.moveTo(s[0] + 8 + (s[2] - 16) * v0 / 101, y, 0.7);
  await r.dragTo(s[0] + s[2] + 6, y, 1.6);
  r.check.d = await r.text('#oD');
  state.arrow = { rect: await r.box('#oD') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'The eye relaxes: parallel rays focus on the retina, so it sees sharp';
  await r.moveTo(can[0] + can[2] * 0.62, can[1] + can[3] * 0.25, 0.6);
  state.zoom = [can[0], can[1] + can[3] * 0.28, can[2] * 0.75, can[2] * 0.75 * 9 / 16];
  await r.secs(3.4);
  state.zoom = null;

  state.caption = 'Read the power the eye uses now: 55.56 D, its weakest';
  await r.scrollRail('#out');
  r.check.out = await r.text('#out');
  state.arrow = { rect: await r.box('#out div:nth-child(5)') };
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat at 10 m, 1 m, 50 cm and nearer, then send them to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
