// How this works: Giant Planets, Rings and Moons. The first readings of the worksheet's Part 1: Io and Europa in the Moons view.
// Expected (NASA): Io a = 5.900 Jupiter radii, P = 1.7691 d, 3.53 g/cm³; Europa 9.387 radii, 3.5512 d, 3.01 g/cm³.
require('./lib.cjs')({ demo: 'giant-planets', title: 'Giant Planets, Rings and Moons', query: '?ws=intro-giant-planets' }, async (r) => {
  const { state, W } = r;
  const table = async () => { const tb = await r.box('.vd-readings'); return [W - 760, Math.max(0, tb[1] - 60), 760, 427.5]; };
  const show = async (sel, top) => { await r.scrollRail(sel); await r.p.evaluate(([s, t]) => { const y = document.querySelector(s).getBoundingClientRect().top; if (y > t) window.scrollBy(0, y - t); }, [sel, top]); await r.tick(2); };
  const home = async () => { await r.p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2); };
  const pick = async (sel, v) => { const b = await r.box(sel); await r.moveTo(b[0] + b[2] / 2, b[1] + b[3] / 2, 0.6); await r.p.selectOption(sel, String(v)); state.arrow = { rect: b }; await r.secs(1.0); state.arrow = null; };

  state.caption = 'Sample readings: Jupiter\'s moons Io and Europa, for Kepler\'s third law';
  await r.secs(3.0);

  state.caption = 'Switch to the Moons view';
  await r.click('#modeSeg [data-mode="moons"]');
  await r.secs(1.4);

  state.caption = 'Choose Jupiter, then Io, on the card';
  await pick('#selPlanet', 'jupiter');
  await pick('#selMoon', 0);
  r.check.io = await r.p.evaluate(() => window.vdReadingRow());

  state.caption = 'Record a reading: Io is 5.90 Jupiter radii out and goes round in 1.77 days';
  await show('.vd-readings', 120);
  await r.click('.vd-readings .vd-rec');
  await r.tick(3);
  state.zoom = await table();
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Choose Europa and record again';
  await home();
  await pick('#selMoon', 1);
  await show('.vd-readings', 120);
  await r.click('.vd-readings .vd-rec');
  await r.tick(3);
  state.zoom = await table();
  state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;
  r.check.rows = await r.p.evaluate(() => window.vdRows());

  state.caption = 'Record Ganymede and Callisto too, then send the readings to the worksheet';
  state.capTop = true;
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
