// How this works: Magnetic Motion and the Hall Effect (Charges in Magnetic Fields). The particle orbit's first reading: the
// Circular motion setup, a proton at 1.00 × 10⁵ m/s in 0.10 T into the page, Blind on; the ruler laid across a diameter and the
// timer run for one whole turn. Expected (CODATA 2022 m_p, e): r = mv/|q|B = 1.0440 cm, so the diameter is 2.088 cm;
// T = 2πm/|q|B = 0.6559 µs. The ruler reads to one screen pixel and the timer is started and stopped by hand, so the readings
// sit within a pixel and a frame of these.
require('./lib.cjs')({ demo: 'magnetic-force', title: 'Magnetic Motion and the Hall Effect', query: '?view=flat' }, async (r) => {
  const { state, p, W } = r;
  const can = await r.box('#can');
  /* Blind on before the first frame (its box is in the Lab fold at the foot of the sidebar); the video points at what it hides */
  await p.evaluate(() => { const c = document.querySelector('#labBlind'); c.checked = true; c.dispatchEvent(new Event('change', { bubbles: true })); });
  await p.evaluate(() => { document.querySelector('.rail').scrollTop = 0; const t = document.getElementById('vdTools'); if (t) t.style.visibility = 'hidden'; });   /* the measuring tools never appear */
  /* pan the drawing up (drag on empty space), so the launch ring at the foot of the circle stays clear of the captions */
  await p.mouse.move(can[0] + 600, can[1] + 300); await p.mouse.down(); await p.mouse.move(can[0] + 600, can[1] + 185, { steps: 8 }); await p.mouse.up();
  await p.clock.runFor(200);
  const hp = async (id) => { const h = (await p.evaluate(() => __mf.handles())).find((q) => q.id === id); return [can[0] + h.pt[0], can[1] + h.pt[1]]; };

  state.caption = 'Sample reading: a proton at 1.0 × 10⁵ m/s in 0.10 T. Measure its radius and period';
  await r.secs(3.0);

  state.caption = 'The Circular motion setup, with Blind on in the Lab section: r and T are hidden';
  await r.scrollRail('#rBlindRow');
  state.arrow = { rect: await r.box('#rBlindRow') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Measure the diameter: show the ruler and drag its ends to opposite sides';
  await r.scrollRail('#rulerOn');
  await r.click('#rulerOn');
  await r.tick(3);
  /* the circle: center (0, r) in world meters from the launch ring at the origin, r from the model (only used to aim the drag) */
  const geo = await p.evaluate(() => { const v = __mf.view, S = __mf.S, h = __mf.handles(), L = h.find((q) => q.id === 'launch').pt; return { sc: v.sc, L }; });
  const rr = 1.0440e-2 * geo.sc, cx = can[0] + geo.L[0], cy = can[1] + geo.L[1] - rr;
  state.zoom = [cx - 380, cy - 213.75, 760, 427.5];
  await r.moveTo(...(await hp('rulA')), 0.6);
  await r.dragTo(cx - rr, cy, 0.8);
  await r.moveTo(...(await hp('rulB')), 0.5);
  await r.dragTo(cx + rr, cy, 0.8);
  r.check.ruler = await r.text('#rulerOut');
  state.arrow = { rect: await r.box('#rulerOut') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Time one turn: start the timer at the launch ring, stop it one turn later';
  await r.scrollRail('#timerBtn');
  const tb = await r.box('#timerBtn'), Tp = 2 * Math.PI * 1.67262192595e-27 / (1.602176634e-19 * 0.1);
  await r.moveTo(tb[0] + tb[2] / 2, tb[1] + tb[3] / 2, 0.6);
  const dtSim = await p.evaluate(() => __mf.tScale) / r.FPS;
  const clickAtLaunch = async () => {
    for (let i = 0; i < 400; i++) { const ph = (await p.evaluate(() => __mf.simT)) % Tp; if (ph > Tp - 1.5 * dtSim && ph <= Tp - 0.5 * dtSim) break; await r.tick(); }
    state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(); await p.mouse.up(); state.down = false; await r.tick(2);
  };
  await clickAtLaunch();
  r.check.t0 = await p.evaluate(() => __mf.simT);
  await clickAtLaunch();
  r.check.t1 = await p.evaluate(() => __mf.simT);
  r.check.timer = await r.text('#timerOut');
  state.arrow = { rect: await r.box('#timerOut') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Time several turns, repeat at each speed, then send the table to the worksheet';
  const ex = await r.box('#expCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.text('#tbl tbody tr');
});
