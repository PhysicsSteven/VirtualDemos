// How this works: Eclipsing Binary Stars (Finding Exoplanets, Two stars). The first table's first reading: Sun and red dwarf a
// quarter orbit before the eclipse of star 1, t = −9.99 h: brightness 1, v₁ = +57.25 km/s, v₂ = −138.82 km/s (γ = 12 km/s,
// K₁ = 45.25, K₂ = 150.82 km/s from M₁ = 1, M₂ = 0.3 M☉, a = 0.03 AU).
require('./lib.cjs')({ demo: 'exoplanets', title: 'Eclipsing Binary Stars', query: '?ws=eclipsing-binary' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: the Sun and a red dwarf, a quarter orbit before an eclipse';
  await r.secs(2.6);

  state.caption = 'Choose Two stars, then Sun and red dwarf, and watch both eclipses';
  state.arrow = { rect: await r.box('#kindSeg') };
  await r.secs(1.2); state.arrow = null;
  await r.scrollRail('#binPresets');
  await r.click('#binPresets [data-b=redd]');
  await r.secs(3.2);
  await r.click('#play');
  await r.tick(4);

  state.caption = 'Drag across the velocity graph to a quarter orbit before the eclipse, t = −9.99 h';
  const y0 = await p.evaluate(() => scrollY), y1 = y0 + (await r.box('#rv'))[1] - 380;
  for (let i = 1; i <= 12; i++) { const u = i / 12, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo(0, v), y0 + (y1 - y0) * e); await r.tick(); }
  const rv = await r.box('#rv');
  await r.moveTo(rv[0] + rv[2] * 0.4, rv[1] + rv[3] * 0.55, 0.7);
  await r.dragTo(rv[0] + 60, rv[1] + rv[3] * 0.55, 1.0);
  state.arrow = { rect: [rv[0], rv[1], rv[2] * 0.3, rv[3]] };
  await r.secs(1.4); state.arrow = null;

  state.caption = 'Read the brightness and both stars’ velocities';
  await r.scrollRail('#bTnow');
  if (await r.text('#bTnow') !== '−9.988 h') throw new Error('t ' + await r.text('#bTnow'));
  r.check.t = await r.text('#bTnow'); r.check.f = await r.text('#bFnow'); r.check.v1 = await r.text('#bV1'); r.check.v2 = await r.text('#bV2');
  const a = await r.box('#bTnow'), b = await r.box('#bV2');
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

  state.caption = 'Repeat at twelve times through the orbit, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
