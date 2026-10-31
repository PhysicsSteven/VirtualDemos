// How this works: Distances from the Main Sequence (Cosmic Distance Ladder, Main sequence fitting). The first table's first
// reading: Cluster A at a shift of 4.40: d 75.86 pc, 89 stars, mean offset 0.824 mag, mean square 0.7344 mag².
require('./lib.cjs')({ demo: 'distance-ladder', title: 'Distances from the Main Sequence', query: '?ws=main-sequence-fitting&setup=ms' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: Cluster A, shifted 4.40 magnitudes below the nearby stars’ main sequence';
  await r.secs(2.6);

  state.caption = 'Choose Main sequence fitting and Cluster A';
  state.arrow = { rect: await r.box('#presets [data-p=ms]') };
  await r.secs(1.2); state.arrow = null;
  await r.scrollRail('#msChips');
  await r.click('#msChips [data-k=A]');
  await r.tick(4);

  state.caption = 'Slide the cluster until it sits on the line, then set the shift to 4.40';
  const c = await r.box('#can');
  state.arrow = { rect: [c[0] + c[2] * 0.05, c[1] + c[3] * 0.2, c[2] * 0.9, c[3] * 0.75] };
  await r.slide('#msMu', '#msMuOut', 5.2, 0.05);
  await r.secs(1.4);
  state.arrow = null;
  const s = await r.box('#msMu');
  state.zoom = [W - 640, s[1] - 160, 640, 360];
  r.check.shift = await r.slide('#msMu', '#msMuOut', 4.4, 0.004, 0.2);
  await r.secs(0.8);
  state.zoom = null;

  state.caption = 'Read the distance and the mean square offset from the line';
  await r.scrollRail('#msD');
  r.check.d = await r.text('#msD'); r.check.ms = await r.text('#msMs');
  const a = await r.box('#msD'), b = await r.box('#msMs');
  state.zoom = [W - 600, a[1] - 80, 600, 337.5];
  state.arrow = { rect: [a[0] - 6, a[1] - 22, 300, b[1] + b[3] - a[1] + 26] };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at nine shifts around the best one, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
