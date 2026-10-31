// How this works: Color Vision, worksheet color-vision. The first table's first reading: Three lamps, the red lamp (630 nm) alone
// at 100%. Expected from the demo's model (Hunt Pointer Estevez cones, lamps scaled so all three at 100% give L = M = S = 1): the red
// lamp alone excites L most, M less and S almost not at all; the numbers are the demo's own and are printed in r.check.
require('./lib.cjs')({ demo: 'color-vision', title: 'Color Vision' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the red lamp alone, at 100%';
  await r.secs(2.6);

  state.caption = 'Choose Three lamps';
  await r.click('#modeSeg button:first-child');
  await r.secs(0.6);

  const card = await r.box('#rgbBox');
  state.zoom = [card[0] + card[2] - 711, card[1] - 60, 711, 400];
  state.caption = 'Turn the green lamp down to 0%';
  r.check.G = await r.slide('#sG', '#oG', 0, 0, 3);
  await r.secs(0.4);
  state.caption = 'Turn the blue lamp down to 0%';
  r.check.B = await r.slide('#sB', '#oB', 0, 0, 3);
  r.check.R = await r.text('#oR');
  await r.secs(0.6);
  state.zoom = null;

  state.caption = 'Only red reaches the eye: the L cones respond most';
  await r.secs(2.0);

  state.caption = 'Read the cone signals and brightness';
  await r.scrollRail('#out');
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.0);
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

  state.caption = 'Repeat for each lamp alone, each pair and all three, then export to the worksheet';
  const ex = await r.box('.rail .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.rail table.rows tbody tr td')].map(td => td.textContent));
});
