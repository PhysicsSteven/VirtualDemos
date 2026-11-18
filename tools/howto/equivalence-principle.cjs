// How this works: Equivalence and Tests of Gravity, Windowless room view (worksheet equivalence-principle). The first readings:
// Rocket at 1.1 g, then the rocket's acceleration typed as 0. Expected: 10.79 m/s²: rocket scale 734 N (74.8 kg), fall 0.527 s; 0: 0 N, never.
require('./lib.cjs')({ demo: 'equivalence-gravity', title: 'Equivalence and Tests of Gravity', query: '?ws=equivalence-principle&setup=faster' }, async (r) => {
  const { state, p } = r;
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const out = async (labels) => { const i = await p.evaluate((ls) => [...document.querySelectorAll('#out > div')].map((d, k) => [d.querySelector('dt').textContent, k]).filter(([t]) => ls.some((l) => t.startsWith(l))).map(([, k]) => k + 1), labels);
    const bs = []; for (const k of i) bs.push(await r.box(`#out > div:nth-child(${k})`));
    const x0 = Math.min(...bs.map((b) => b[0])), y0 = Math.min(...bs.map((b) => b[1])), x1 = Math.max(...bs.map((b) => b[0] + b[2])), y1 = Math.max(...bs.map((b) => b[1] + b[3])); return [x0, y0, x1 - x0, y1 - y0]; };
  const typeIn = async (sel, txt) => { await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2); for (const ch of txt) { await p.keyboard.type(ch); await r.tick(2); } await p.keyboard.press('Enter'); await r.tick(3); };

  state.caption = 'Sample readings: a rocket at 1.1 g, then a rocket coasting with its engine off';
  await r.secs(2.4);

  state.caption = 'Press Play: both balls drop. The rocket\'s ball lands first';
  await into('#go');
  await r.click('#go');
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  await r.secs(1.6);

  state.caption = 'Read both scales and both times to fall';
  await into('#out');
  state.arrow = { rect: await out(['Room A: scale', 'Room B: scale', 'Room A: time', 'Room B: time']) };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Record a reading';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Set the rocket\'s acceleration to 0: click its readout, type 0, press Enter';
  await into('#oA');
  await typeIn('#oA', '0');
  r.check.a = await r.text('#oA');
  await into('#out');
  state.arrow = { rect: await out(['Room A: scale', 'Room B: scale', 'Room A: time', 'Room B: time']) };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Record again, then do 2, 4, 6, 8 and 9.81 m/s²';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Send the seven readings to the worksheet';
  await into('.vd-readings .vd-export');
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.0);
  r.check.rows = await p.evaluate(() => window.vdRows().map((q) => `a ${q.a_rocket}: rocket ${q.rocket_N} N (${q.rocket_kg} kg), fall ${q.rocket_t_s} s`).join('; '));
});
