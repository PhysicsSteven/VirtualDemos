// How this works: Weighing Binary Stars (Finding Exoplanets, Two stars, ?ws=binary-masses). Table 1's first reading: Seesaw: 2 and
// 4 suns. Expected: separation 6 AU, period 6 years, total mass 6 M☉, a₁ = 4 AU, a₂ = 2 AU. Checks: M = 6³/6² = 216/36 = 6 M☉;
// M₂/M₁ = a₁/a₂ = 2, so M₁ = 2 and M₂ = 4 M☉.
require('./lib.cjs')({ demo: 'exoplanets', title: 'Weighing Binary Stars', query: '?ws=binary-masses' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: two stars 6 AU apart that go around every 6 years';
  await r.secs(2.4);

  state.caption = 'Choose the setup Seesaw: 2 and 4 suns, and watch both stars go around';
  await r.scrollRail('#binPresets [data-b=seesaw]');
  state.arrow = { rect: await r.box('#binPresets [data-b=seesaw]') };
  await r.click('#binPresets [data-b=seesaw]');
  await r.secs(1.0); state.arrow = null;
  await r.secs(2.4);

  state.caption = 'Weigh the stars: the separation, the period, and each star’s distance from the center of mass';
  await r.scrollRail('#weighSec');
  r.check.a = await r.text('#wA'); r.check.P = await r.text('#wP'); r.check.M = await r.text('#wM');
  r.check.a1 = await r.text('#wA1'); r.check.a2 = await r.text('#wA2');
  const a = await r.box('#wA'), b = await r.box('#wA2');
  state.zoom = [W - 600, Math.max(0, a[1] - 90), 600, 337.5];
  state.arrow = { rect: [a[0] - 6, a[1] - 22, 300, b[1] + b[3] - a[1] + 26] };
  await r.secs(3.0);
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

  state.caption = 'Record the other three pairs, and send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows().map((x) => [x.system, x.a_AU, x.P_yr, x.a1_AU, x.a2_AU])));
});
