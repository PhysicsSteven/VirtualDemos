// How this works: Starlight (Counting the Sun's Neighbors, Census). The first table's first reading:
// survey radius 2.0 pc, 4 stars inside it, 2 of them red dwarfs, 1 more luminous than the Sun.
// Expected: radius 2.0 pc, 4 stars.
require('./lib.cjs')({ demo: 'starlight', title: 'Starlight', query: '?ws=star-census' }, async (r) => {
  const { state, p, W } = r;
  const rd = (label) => p.evaluate((l) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(l)) { const q = d.getBoundingClientRect(); return { t: d.querySelector('dd').textContent, b: [q.x, q.y, q.width, q.height] }; } return null; }, label);
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: every star within 2 pc of the Sun';
  await r.secs(2.2);

  state.caption = 'Choose Census above the picture';
  await r.click('#modeSeg [data-mode="census"]'); await r.secs(1.0);

  state.caption = 'Under Setups, press Count the neighbors';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="census"]'); await r.secs(1.4);

  state.caption = 'Click the Survey radius readout, type 2 and press Enter';
  await r.scrollRail('#oR');
  await r.click('#oR'); await p.keyboard.press('Control+A'); await r.tick(2);
  await p.keyboard.type('2'); await r.tick(3);
  await p.keyboard.press('Enter'); await r.secs(1.4);

  state.caption = 'Read how many stars are inside, and how many are red dwarfs';
  await r.scrollRail('#out');
  const s = await rd('Stars in it'), m = await rd('Red dwarfs');
  r.check.stars = s.t; r.check.dwarfs = m.t; r.check.radius = await r.text('#oR');
  const top = Math.min(s.b[1], m.b[1]), bot = Math.max(s.b[1] + s.b[3], m.b[1] + m.b[3]);
  state.zoom = [W - 600, top - 140, 600, 337.5];
  state.arrow = { rect: [Math.min(s.b[0], m.b[0]) - 6, top - 6, 300, bot - top + 12] };
  await r.secs(2.6); state.arrow = null; state.zoom = null;

  state.caption = 'Press Record reading. The row goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec'); await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0); state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));

  state.caption = 'Record 3, 4, 5 and 6 pc too, then press Export to worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
});
