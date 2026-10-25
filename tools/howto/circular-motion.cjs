// How this works: Circular Motion. The fastest speed a car holds a flat curve of r = 20 m, m = 1200 kg, μs = 0.70, Blind on.
// Expected: friction can give at most μs mg, so v_max = √(μs g r) = √(0.70 × 9.81 × 20) = 11.72 m/s: 11.5 m/s holds, 12.0 m/s
// (one 0.5 m/s step faster) slides off. The key's first row: r = 20 m, 11.5 m/s, holds the curve.
require('./lib.cjs')({ demo: 'circular-motion', title: 'Circular Motion' }, async (r) => {
  const { state, W } = r;
  /* drag a sidebar slider from its thumb until its readout shows want */
  const slide = async (sel, outSel, want, dx) => {
    const [x, y, w, h] = await r.box(sel);
    const v = await r.p.evaluate((s) => { const e = document.querySelector(s); return [+e.min, +e.max, +e.value]; }, sel);
    await r.moveTo(x + 8 + (v[2] - v[0]) / (v[1] - v[0]) * (w - 16), y + h / 2, 0.5);
    return r.dragUntil(parseFloat(want) > v[2] ? dx : -dx, 0, outSel, want);
  };
  const outcome = () => r.p.evaluate(() => window.vdReadingRow().outcome);

  state.caption = 'Sample reading: the fastest a car can take a flat 20 m curve with μs = 0.70';
  await r.secs(2.6);

  state.caption = 'Pick the setup: click Car on a flat curve (1200 kg, μs = 0.70)';
  await r.click('#presets button[data-p="flat"]');
  state.arrow = { rect: await r.box('#presets button[data-p="flat"]') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Turn on Blind, so the speed limit is hidden';
  await r.scrollRail('details:has(#labBlind) > summary');
  await r.click('details:has(#labBlind) > summary');
  await r.tick(3);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await r.p.evaluate(() => document.getElementById('labBlind').checked);
  state.arrow = { rect: await r.box('#labBlind') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Set the radius: drag its slider to 20 m. At 15 m/s the car slides off';
  await r.scrollRail('#sV');
  r.check.r = await slide('#sR', '#oR', '20.0 m', 2);
  r.check.at15 = await outcome();
  await r.secs(1.4);

  state.caption = 'Slow down until it holds, then speed up one step at a time';
  r.check.at11 = [await slide('#sV', '#oV', '11.0 m/s', 3), await outcome()];
  await r.secs(0.8);
  r.check.at115 = [await slide('#sV', '#oV', '11.5 m/s', 3), await outcome()];
  await r.secs(0.8);
  r.check.at12 = [await slide('#sV', '#oV', '12.0 m/s', 3), await outcome()];
  await r.secs(1.8);

  state.caption = 'It slides at 12.0 m/s, so go back one step and record 11.5 m/s';
  r.check.back = [await slide('#sV', '#oV', '11.5 m/s', 3), await outcome()];
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each radius, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await r.p.evaluate(() => window.vdRows());
});
