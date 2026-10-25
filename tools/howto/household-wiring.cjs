// How this works: Household Wiring and Electrical Safety. Part 1's first reading: the 100 W lamp alone on 15 m of 14 gauge copper
// with a 15 A breaker. Expected: R_lamp = 120²/100 = 144 Ω; one way R_w = ρL/A = 1.68e-8 × 15/(π × 0.814e-3²) = 0.1211 Ω,
// I = 120/(144 + 2 × 0.1211) = 0.8319 A, outlet 120 − 2IR_w = 119.80 V, lamp power 119.80²/144 = 99.7 W; neutral = hot, ground 0.
require('./lib.cjs')({ demo: 'household-wiring', title: 'Household Wiring and Electrical Safety' }, async (r) => {
  const { state, p, W } = r;

  state.caption = 'Sample reading: the 100 W lamp alone on 15 m of 14 gauge wire, 15 A breaker';
  await r.secs(3.0);

  state.caption = 'Choose the A lamp setup: the lamp on a 15 m run of 14 gauge wire';
  await r.click('#presets [data-p="lamp"]');
  await r.scrollRail('#gauge');
  r.check.setup = [await r.text('#apps [aria-pressed="true"]'), await r.text('#gauge [aria-pressed="true"]'), await r.text('#breaker [aria-pressed="true"]'), await r.text('#oLen')].join(' | ');
  const g = await r.box('#gauge'), l = await r.box('#oLen');
  state.arrow = { rect: [g[0] - 110, g[1] - 4, W - (g[0] - 110) - 16, l[1] + l[3] + 18 - g[1] + 4] };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'The meters read the current in the hot wire. Predict it, then read it';
  const can = await r.box('#can');
  state.zoom = [can[0] + 200, can[1] + 10, 640, 360];
  await r.moveTo(can[0] + 330, can[1] + 175, 0.7);
  await r.secs(2.2);
  state.zoom = null;
  await r.scrollRail('#out');
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for the other appliances, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
