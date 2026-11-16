// How this works: CT Image Reconstruction, worksheet mp-ct-reconstruction. The first reading: Wire, simple backprojection (720
// views, no photon noise), scanned, then the profile along y = 0 recorded at x = 1 to 12 cm.
// Expected: b = 0.022534 at x = 1 cm and 0.004555 at 5 cm (the key's readings 1 and 5); A = μπa² = 0.02251 cm.
require('./lib.cjs')({ demo: 'ct-reconstruction', title: 'CT Image Reconstruction' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: a thin wire scanned and rebuilt without the filter';
  await r.secs(2.4);

  state.caption = 'Choose Wire, simple backprojection';
  await r.scrollRail('[data-p="wireSimple"]');
  await r.click('[data-p="wireSimple"]');
  await r.secs(0.6);

  state.caption = 'Press Scan: each view adds a row to the sinogram and a line through the wire';
  await r.click('#play');
  await p.evaluate(() => { const L = window.vdDemo.L.rec, c = document.getElementById('can').getBoundingClientRect(); window.scrollBy(0, c.top + L.y + L.h / 2 - innerHeight / 2); }); await r.tick(2);
  const sc = await r.box('#scene'), rec = await p.evaluate(() => window.vdDemo.L.rec);
  const zh = Math.min(rec.h + 60, r.H), zw = zh * 16 / 9;
  state.zoom = [sc[0] + rec.x + rec.w / 2 - zw / 2, Math.max(0, sc[1] + rec.y + rec.h / 2 - zh / 2), zw, zh];
  await r.secs(8.6);
  state.zoom = null;

  state.caption = 'Read the profile through the wire: it falls off as 1/r';
  await p.evaluate(() => document.getElementById('plot').scrollIntoView({ block: 'center' })); await r.tick(2);
  const pl = await r.box('#plot');
  state.arrow = { rect: pl };
  await r.secs(2.8);
  state.arrow = null;
  r.check.out = await p.evaluate(() => document.getElementById('out').innerText.replace(/\n/g, ' | '));

  state.caption = 'Record the reading: the profile at x = 1 to 12 cm goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const t1 = await r.box('.vd-readings tbody tr:nth-child(1)'), t3 = await r.box('.vd-readings tbody tr:nth-child(3)');
  const t = [t1[0], t1[1], t1[2], t3[1] + t3[3] - t1[1]];
  state.zoom = [W - 660, Math.max(0, Math.min(t[1] - 120, r.H - 360)), 640, 360];
  state.arrow = { rect: t }; state.capTop = true;
  await r.secs(2.2);
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Send the readings to the worksheet, then plot b against 1/x';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().slice(0, 5).map((x) => [x.x_cm, x.value])));
});
