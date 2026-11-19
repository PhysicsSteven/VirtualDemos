// How this works: Heat Engines and Refrigerators (Heat Engine Cycles demo). Part 1: the Rectangle cycle, monatomic gas, 1.00 mol,
// Engine. Expected corners 250 kPa and 100 kPa, 12.0 L and 30.0 L; leg 1→2 at constant pressure: W = 250 kPa × 18.0 L = 4.50 kJ,
// ΔU = 3/2 × 4.50 = 6.75 kJ, Q = 11.25 kJ (shown 11.2); W_net = 150 kPa × 18.0 L = 2.70 kJ, Q_in = 13.95 kJ, η = 19.4 %.
require('./lib.cjs')({ demo: 'heat-engines', title: 'Heat Engines and Refrigerators', query: '?ws=hs-heat-engines' }, async (r) => {
  const { state, p, W } = r;
  state.caption = 'Sample reading: the rectangle cycle with a monatomic gas, leg by leg';
  await r.secs(3.0);

  state.caption = 'Under Gas press Monatomic, then under Cycle press Rectangle';
  await r.scrollRail('#gasSeg');
  await r.click('#gasSeg [data-g="mono"]');
  await r.tick(3);
  await r.scrollRail('#cycles');
  await r.click('#cycles [data-c="rect"]');
  state.arrow = { rect: await r.box('#cycles [data-c="rect"]') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Read each corner\'s pressure, volume and temperature';
  await r.scrollRail('#corners');
  const c = await r.box('#corners');
  state.zoom = [W - 560, c[1] - 120, 560, 315];
  state.arrow = { rect: c };
  r.check.corners = (await r.text('#corners')).replace(/\s+/g, ' ');
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Work out W, ΔU and Q for each leg, then check the Energy per leg panel';
  await r.scrollRail('#legs');
  const l = await r.box('#legs');
  state.zoom = [W - 560, l[1] - 60, 560, 315];
  state.arrow = { rect: l };
  r.check.legs = (await r.text('#legs')).replace(/\s+/g, ' ');
  await r.secs(3.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  r.check.rows = await p.evaluate(() => (window.vdRows ? window.vdRows() : []).map((x) => `${x.cycle} ${x.Q_in_J} ${x.W_net_J}`));

  state.caption = 'Send it to the worksheet, then go on to the Carnot engine';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
});
