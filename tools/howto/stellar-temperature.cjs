// How this works: Spectral Classes (Star Colors, Lines and Temperature, Color). The first table's first reading:
// Betelgeuse, 3,500 K, class M, light peaking at 828 nm in the infrared.
// Expected: 3,500 K, class M, peak 828 nm.
require('./lib.cjs')({ demo: 'spectral-classes', title: 'Spectral Classes', query: '?ws=stellar-temperature' }, async (r) => {
  const { state, p, W } = r;
  const rd = (label) => p.evaluate((l) => { for (const d of document.querySelectorAll('#out > div')) if (d.querySelector('dt').textContent.trim().startsWith(l)) { const q = d.getBoundingClientRect(); return { t: d.querySelector('dd').textContent, b: [q.x, q.y, q.width, q.height] }; } return null; }, label);
  state.ptr = [1100, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the color and peak of Betelgeuse, a cool red star';
  await r.secs(2.2);

  state.caption = 'Choose Color above the picture';
  await r.click('#modeSeg [data-mode="color"]'); await r.secs(1.0);

  state.caption = 'Under Setups, press Betelgeuse, 3,500 K';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="betelgeuse"]'); await r.secs(1.4);

  state.caption = 'The light peaks past the red end of the rainbow, in the infrared';
  const cv = await r.box('#can');
  state.arrow = { rect: [cv[0] + cv[2] * 0.05, cv[1] + cv[3] * 0.05, cv[2] * 0.9, cv[3] * 0.9] };
  await r.secs(2.2); state.arrow = null;

  state.caption = 'Read the class and the peak wavelength';
  await r.scrollRail('#out');
  const pk = await rd('Peak'), cl = await rd('Spectral class') || await rd('Class');
  r.check.peak = pk.t; r.check.cls = cl ? cl.t : '';
  const top = Math.min(pk.b[1], cl ? cl.b[1] : pk.b[1]), bot = Math.max(pk.b[1] + pk.b[3], cl ? cl.b[1] + cl.b[3] : 0);
  state.zoom = [W - 600, top - 140, 600, 337.5];
  state.arrow = { rect: [pk.b[0] - 6, top - 6, 300, bot - top + 12] };
  await r.secs(2.6); state.arrow = null; state.zoom = null;

  state.caption = 'Press Record reading. The row goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec'); await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0); state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));

  state.caption = 'Record each star, then press Export to worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
});
