// How this works: Retrograde Motion and World Models. The first readings of the worksheet's Part 1: Mars on 1 September 2024,
// then 20 days later, then the first stationary point found with Jump to.
// Expected (JPL elements): 1 Sep 2024 λ 87.33°, elongation −71.4°, 1.431 AU; 21 Sep 2024 λ 99.09°; stationary 7 Dec 2024, λ 125.83°.
require('./lib.cjs')({ demo: 'retrograde-motion', title: 'Retrograde Motion and World Models', query: '?ws=intro-retrograde' }, async (r) => {
  const { state, W } = r;
  const table = async () => { const tb = await r.box('.vd-readings'); return [W - 760, Math.max(0, tb[1] - 60), 760, 427.5]; };
  /* the readings sit below the rail's reach at 720 px: scroll the rail, then the page, so the panel is near the top */
  const show = async (sel, top) => { await r.scrollRail(sel); await r.p.evaluate(([s, t]) => { const y = document.querySelector(s).getBoundingClientRect().top; if (y > t) window.scrollBy(0, y - t); }, [sel, top]); await r.tick(2); };
  const home = async () => { await r.p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2); };

  state.caption = 'Sample readings: Mars on 1 September 2024 and 20 days later, then where it stops';
  await r.secs(3.0);

  state.caption = 'Choose the setup Mars loops, 2024 to 2025';
  await r.scrollRail('#presets');
  await r.click('#presets [data-p="mars"]');
  state.arrow = { rect: await r.box('#clock') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Record a reading. It goes into the table';
  await show('.vd-readings', 120);
  await r.click('.vd-readings .vd-rec');
  await r.tick(3);
  state.zoom = await table();
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  r.check.first = await r.p.evaluate(() => window.vdRows()[0]);

  state.caption = 'Step 20 days: hold Shift and click 1 day ▶ twice';
  await home();
  await r.p.keyboard.down('Shift');
  await r.click('#fwd'); await r.tick(8); await r.click('#fwd');
  await r.p.keyboard.up('Shift');
  state.arrow = { rect: await r.box('#clock') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Record again: Mars has moved east, λ grew from 87° to 99°';
  await show('.vd-readings', 120);
  await r.click('.vd-readings .vd-rec');
  await r.tick(3);
  state.zoom = await table();
  state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;
  r.check.second = await r.p.evaluate(() => window.vdRows()[1]);

  state.caption = 'Jump to the next stationary point: choose it, then Next ▶';
  await home();
  await r.scrollRail('#evKind');
  const ek = await r.box('#evKind');
  await r.moveTo(ek[0] + ek[2] / 2, ek[1] + ek[3] / 2, 0.6);
  await r.p.selectOption('#evKind', 'station');
  state.arrow = { rect: ek };
  await r.secs(0.8);
  await r.click('#evNext');
  state.arrow = { rect: await r.box('#evNote') };
  await r.secs(2.4);
  state.arrow = null;
  r.check.jump = await r.text('#clock');

  state.caption = 'Record every 20 days through 19 May 2025, then send the readings to the worksheet';
  await show('.vd-readings', 120);
  state.capTop = true;
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
