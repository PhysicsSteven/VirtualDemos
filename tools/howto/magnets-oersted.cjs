// How this works: Magnets and Oersted's Compass (Magnetic Fields of Currents, Worksheet 1). Part 1's first reading: two bar
// magnets end to end, N of A facing S of B, with a 1.0 cm gap. Expected: attraction, toward A; the size compared with a 1 cm
// gap is 1.00 by definition (the force ratio at 2.0 cm, where it opens, is 0.232).
require('./lib.cjs')({ demo: 'currents-fields', title: 'Magnets and Oersted\'s Compass' }, async (r) => {
  const { state, p, W } = r;

  state.caption = 'Sample reading: two bar magnets 1.0 cm apart, from Part 1';
  await r.secs(3.0);

  state.caption = 'Open Magnets and Oersted\'s compass in the sidebar';
  await r.scrollRail('#magDet > summary');
  await r.click('#magDet > summary');
  await r.tick(4);
  await r.scrollRail('#magMode');
  r.check.mode = await r.text('#magMode [aria-pressed="true"]');
  state.arrow = { rect: await r.box('#magMode') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Set the gap: drag the slider to 1.0 cm';
  const sl = await r.box('#sGap');
  state.zoom = [W - 620, sl[1] - 230, 620, 348.75];   /* the magnets and the slider, above the caption */
  const v = +(await p.evaluate(() => document.querySelector('#sGap').value));
  await r.moveTo(sl[0] + 8 + (sl[2] - 16) * (v - 1) / 7, sl[1] + sl[3] / 2, 0.8);
  r.check.gap = await r.dragUntil(-1, 0, '#oGap', '1.0 cm');
  await r.secs(1.2);

  state.caption = 'Read the force on magnet B: which way it is pulled, and its size';
  await r.scrollRail('#magOut');
  const mo = await r.box('#magOut');
  state.zoom = [W - 620, mo[1] - 120, 620, 348.75];
  r.check.out = await r.p.evaluate(() => document.querySelector('#magOut').innerText.replace(/\n/g, ' | '));
  state.arrow = { rect: mo };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat at each gap, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
