// How this works: Galaxy Collisions (Collision). The first table's first reading:
// Tails: two equal disks at Speed 4×, recorded when the run stops at 3,000 million years.
// Expected: closest approach 25.2 kpc at 870 million yr, near ÷ far 15.63, gold 21%, blue 20%, 187 blue stars stolen.
require('./lib.cjs')({ demo: 'galaxy-collisions', title: 'Galaxy Collisions', query: '?ws=galaxy-tides' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: two equal disk galaxies passing 25 kpc apart';
  await r.secs(2.0);

  state.caption = 'Under Setups, press Tails: two equal disks';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="tails"]'); await r.secs(1.0);

  state.caption = 'Set Speed to 4× above the picture';
  await r.click('#speedSeg [data-s="4"]'); await r.secs(0.8);

  state.caption = 'Press Play and watch until the run stops (shown 2× faster)';
  const pl = await p.evaluate(() => { const b = [...document.querySelectorAll('button')].find((x) => x.textContent.trim() === 'Play'); b.id = b.id || 'howtoPlay'; return '#' + b.id; });
  await r.click(pl); r.speed = 2;
  for (let i = 0; i < 400; i++) { await r.tick(3); if (await p.evaluate(() => /3,0\d\d/.test(document.getElementById('clockT').textContent))) break; }
  r.speed = 1; await r.secs(0.6);

  state.caption = 'The near sides were pulled into a bridge and the far sides into tails';
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  const cv = await r.box('#can');
  state.arrow = { rect: [cv[0] + cv[2] * 0.05, cv[1] + cv[3] * 0.05, cv[2] * 0.9, cv[3] * 0.9] };
  await r.secs(2.0); state.arrow = null;

  state.caption = 'Press Record reading. The row goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec'); await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2); state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));

  state.caption = 'Record each run, then press Export to worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.2);
});
