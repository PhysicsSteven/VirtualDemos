// How this works: Building a Solar System. Our solar nebula (the first table's first reading): a cloud 5000 AU in radius turning
// once every 4 million years collapses; the tracked parcel settles at the disk's edge.
// Expected: R_d = Ω₀² r₀⁴/GM = 39.06 AU, going around once every √(39.06³) = 244 yr, (r₀/R_d)² = 16 400 times faster than the cloud.
require('./lib.cjs')({ demo: 'solar-system-formation', title: 'Building a Solar System' }, async (r) => {
  const { state, W } = r;

  state.caption = 'Sample reading: where a parcel of the cloud ends up, for Our solar nebula';
  await r.secs(3.0);

  state.caption = 'Pick the setup: Our solar nebula. The cloud starts to fall in';
  await r.scrollRail('#presets [data-p=nebula]');
  await r.click('#presets [data-p=nebula]');
  await r.moveTo(W * 0.35, 420, 0.6);
  await r.secs(3.5);

  state.caption = 'Let the collapse finish, or press To the end';
  await r.click('#skip');
  await r.secs(1.6);

  state.caption = "Read the tracked parcel's distance from the axis and how long it takes to go around";
  const top = (await r.box('#stageSeg'))[1] - 12;   /* scroll the page so the picture and the side panel fill the screen */
  for (let k = 1; k <= 12; k++) { await r.p.evaluate((y) => window.scrollTo(0, y), top * k / 12); await r.tick(); }
  await r.scrollRail('#out');
  const dts = await r.p.evaluate(() => [...document.querySelectorAll('#out > div')].map((d) => d.querySelector('dt').textContent));
  const i = dts.findIndex((t) => /distance from the axis/.test(t)) + 1;
  const a = await r.box(`#out > div:nth-child(${i})`), b = await r.box(`#out > div:nth-child(${i + 1})`);
  r.check.distance = await r.text(`#out > div:nth-child(${i}) dd`); r.check.period = await r.text(`#out > div:nth-child(${i + 1}) dd`);
  r.check.state = await r.text(`#out > div:nth-child(${i + 2}) dd`);
  state.arrow = { rect: [Math.min(a[0], b[0]), a[1], Math.max(a[0] + a[2], b[0] + b[2]) - Math.min(a[0], b[0]), b[1] + b[3] - a[1]] };
  await r.secs(3.0);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  await r.scrollRail('.vd-readings table.rows');
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat with Slow spin and Fast spin, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings table.rows tbody tr')].map(tr => [...tr.querySelectorAll('td')].map(td => td.textContent).join(' | ')));
});
