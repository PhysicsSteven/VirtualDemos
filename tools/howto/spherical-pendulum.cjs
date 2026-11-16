// How this works: Pendulums, Spherical pendulum scene, worksheet "The Spherical Pendulum: Orbits That Turn". Part 1's first reading:
// the Conical pendulum setup (L = 1.00 m, push 1) released at 10°, the time for one turn round recorded. Expected: a conical
// pendulum goes round in T = 2π√(L cos θ/g) = 2π√(1.00 × 0.98481/9.81) = 1.991 s.
require('./lib.cjs')({ demo: 'pendulum', title: 'Pendulums', query: '?scene=sphere&view=3d' }, async (r) => {
  const { state, p, W } = r;
  /* a readout in the Orbit list, found by its label (the list is redrawn) */
  const out = (re) => p.evaluate((src) => { const rx = new RegExp(src), dt = [...document.querySelectorAll('#spOut dt')].find((e) => rx.test(e.textContent));
    if (!dt) return { box: [0, 0, 0, 0], text: '' }; const q = dt.parentElement.getBoundingClientRect(); return { box: [q.x, q.y, q.width, q.height], text: dt.nextElementSibling.textContent.trim() }; }, re.source);
  const toOut = async () => { await r.scrollRail('#spOut'); await r.tick(2); };

  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: a conical pendulum 1.00 m long, going round at 10° from straight down';
  await r.secs(2.2);

  state.caption = 'Choose the Conical pendulum setup: a sideways push of 1, just the speed for a circle';
  await r.scrollRail('#spPresets [data-p="cone"]');
  await r.click('#spPresets [data-p="cone"]');
  await r.secs(0.8);

  state.caption = 'Drag the release angle to 10°';
  const b = await r.box('#spA');
  state.zoom = [Math.max(0, b[0] - 120), Math.max(0, Math.min(b[1] - 170, r.H - 337.5)), 600, 337.5];
  await p.focus('#spA');
  r.check.angle = await r.slide('#spA', '#spoA', 10, 0.1, 3);
  await r.secs(0.4);
  state.zoom = null;

  state.caption = 'Press Play and wait for Measured: last full turn round (it needs two turns)';
  await r.click('#spPlay');
  await r.secs(1.0);
  await toOut();
  for (let i = 0; i < 200 && !/ s$/.test((await out(/^Measured: last full turn round$/)).text); i++) await r.tick();
  const T = await out(/^Measured: last full turn round$/);
  r.check.turn = T.text;
  state.zoom = [W - 600, Math.max(0, Math.min(T.box[1] - 170, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: T.box };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading';
  await r.scrollRail('#spRec');
  await r.click('#spRec');
  await r.tick(4);
  const row = await r.box('#spRows tbody tr:last-child');
  state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: row };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at 30°, 50° and 70°, then send the series to the worksheet';
  state.capTop = true;
  await r.scrollRail('#spExport');
  const ex = await r.box('#spExport');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.status = await r.text('#spStatus');
});
