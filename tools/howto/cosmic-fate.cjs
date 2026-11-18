// How this works: The Fate of the Universe, Expansion view (worksheet cosmic-fate). The first readings: Our universe today and
// 2 Gyr ago, then send them. Expected: t 0.00 a 1.0000 matter 0.315 dark energy 0.685; t −2.00 a 0.8667 z 0.154 matter 0.484 dark energy 0.685.
require('./lib.cjs')({ demo: 'fate-of-the-universe', title: 'The Fate of the Universe', query: '?ws=cosmic-fate' }, async (r) => {
  const { state, p } = r;
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const out = async (labels) => { const i = await p.evaluate((ls) => [...document.querySelectorAll('#out > div')].map((d, k) => [d.querySelector('dt').textContent, k]).filter(([t]) => ls.some((l) => t.startsWith(l))).map(([, k]) => k + 1), labels);
    const bs = []; for (const k of i) bs.push(await r.box(`#out > div:nth-child(${k})`));
    const x0 = Math.min(...bs.map((b) => b[0])), y0 = Math.min(...bs.map((b) => b[1])), x1 = Math.max(...bs.map((b) => b[0] + b[2])), y1 = Math.max(...bs.map((b) => b[1] + b[3])); return [x0, y0, x1 - x0, y1 - y0]; };

  state.caption = 'Sample readings: our universe today and 2 billion years ago';
  await r.secs(2.4);

  state.caption = 'Choose the Our universe setup: today, t = 0';
  await into('#presets');
  await r.click('[data-p="ours"]');
  await r.secs(0.6);

  state.caption = 'Record a reading: the size, redshift and both densities go in the table';
  await into('#out');
  state.arrow = { rect: await out(['Time t', 'Size a', 'Redshift of light', 'Matter density then', 'Dark energy density then']) };
  await r.secs(1.6);
  state.arrow = null;
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Go back in time: press −1 Gyr twice, to t = −2.00 Gyr';
  await into('#back');
  await r.click('#back'); await r.tick(6);
  await r.click('#back'); await r.tick(4);
  r.check.t = await r.text('#oT');
  await into('#out');
  state.arrow = { rect: await out(['Time t', 'Size a', 'Redshift of light', 'Matter density then', 'Dark energy density then']) };
  state.caption = 'Matter was denser 2 billion years ago; dark energy was the same';
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Record again, and keep going back two steps at a time';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'When the readings reach −12 Gyr, send them to the worksheet';
  await into('.vd-readings .vd-export');
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => window.vdRows().map((q) => `t ${q.t_Gyr} a ${q.a} z ${q.z} matter ${q.matter} dark energy ${q.dark_energy}`).join('; '));
});
