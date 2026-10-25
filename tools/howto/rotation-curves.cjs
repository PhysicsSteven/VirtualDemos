// How this works: Galaxy Rotation Curves. The worksheet's first reading: the solar system at Mercury's distance, 0.39 AU.
// Expected: v = 29.78 km/s / √0.39 = 47.69 km/s, M(<r) = v²r/G = 1.0000 M_sun, period 0.39^1.5 yr = 0.2436 yr = 88.9 days.
require('./lib.cjs')({ demo: 'rotation-curves', title: 'Galaxy Rotation Curves' }, async (r) => {
  const { state, p } = r;

  state.caption = "Sample reading: the solar system at Mercury's distance from the Sun, 0.39 AU";
  await r.secs(2.6);

  state.caption = 'Choose the Solar system (Kepler) setup';
  await r.click('[data-p="sun"]');
  await r.secs(0.8);

  state.caption = "Set the radius: drag the dashed ring in to Mercury's orbit, 0.39 AU";
  const cv = await r.box('#can'), ring = (await p.evaluate(() => window.__rc.handles())).find((h) => h.id === 'ring').ring;
  const cx = cv[0] + ring[0], cy = cv[1] + ring[1];
  state.zoom = [Math.max(0, cx - 240), cy - 135, 480, 270];   /* the inner orbits are small: zoom in on the Sun */
  await r.moveTo(cx + ring[2], cy, 0.8);
  await r.dragWhile(-1, 0, async () => (await p.evaluate(() => window.__rc.S.rsAU)) > 0.43);
  await p.mouse.down(); state.down = true; await r.tick(3);   /* fine tune in small steps (the ring moves 0.036 AU per pixel here) */
  for (let i = 0; i < 300; i++) { const a = await p.evaluate(() => window.__rc.S.rsAU); if (Math.abs(a - 0.39) < 0.005) break;
    state.ptr = [state.ptr[0] + (a > 0.39 ? -0.1 : 0.1), state.ptr[1]]; await p.mouse.move(...state.ptr); await r.tick(); }
  await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  await r.secs(0.6);
  state.zoom = null;
  r.check.r = await r.text('#rsOut');
  await r.scrollRail('#rsOut');
  state.arrow = { rect: await r.box('#rsOut') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Read the orbital speed, the mass inside the orbit and the period';
  r.check.v = await r.text('#oV'); r.check.M = await r.text('#oMdyn'); r.check.P = await r.text('#oP');
  const a = await r.box('#oV'), b = await r.box('#oP');
  state.arrow = { rect: [a[0] - 6, a[1] - 22, Math.max(a[2], b[2]) + 12, b[1] + b[3] - a[1] + 26] };
  await r.secs(3.0);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = "Repeat at each planet's distance out to 30.07 AU, then send the readings to the worksheet";
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
