// How this works: Velocity, Momentum and Energy Near c, worksheet "Adding Velocities Near c" (velocity-addition). The first
// reading: Rocket fires a probe (rocket 0.60c), launch speed u′ = 0.10c, timed between beacons 3.000 ls apart.
// Expected: u = (0.6 + 0.1)/(1 + 0.06) = 0.66038c, Δt = 3/0.66038 = 4.5429 s (key row 1: 4.5429 s).
require('./lib.cjs')({ demo: 'relativistic-motion', title: 'Velocity, Momentum and Energy Near c' }, async (r) => {
  const { state, p, W } = r;
  const at = (sel) => p.evaluate((s) => { document.querySelector(s).scrollIntoView({ block: 'center' }); }, sel);
  const ddBox = (t) => p.evaluate((t) => { const d = [...document.querySelectorAll('.rail dt')].find((e) => e.textContent.trim().startsWith(t)); const q = d.parentElement.getBoundingClientRect(); return [q.x, q.y, q.width, q.height]; }, t);
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: a rocket at 0.60c fires a probe at 0.10c. Time the probe between the beacons';
  await r.secs(3.0);

  state.caption = 'Choose the Rocket fires a probe setup';
  await r.click('[data-p="probe"]');
  await r.secs(0.6);

  state.caption = 'Set the launch speed on the rocket: drag u′ to 0.10c';
  await at('#sU'); await r.tick(2);
  const b = await r.box('#sU'), v = await p.evaluate(() => +document.getElementById('sU').value);
  await r.moveTo(b[0] + 8 + (b[2] - 16) * v / +(await p.evaluate(() => document.getElementById('sU').max)), b[1] + b[3] / 2, 0.7);
  state.zoom = [0, b[1] - 220, 640, 360];
  r.check.u = await r.dragUntil(-1, 0, '#oU', '0.10c');
  state.arrow = { rect: await r.box('#oU') };
  await r.secs(0.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Pick 5× to speed the run up, then Launch';
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  await r.click('[data-s="5"]');
  await r.secs(0.2);
  await r.click('#go');
  await r.moveTo(700, 560, 0.6);
  for (let i = 0; i < 300 && !(await p.evaluate(() => window.__rm.S.vel.done)); i++) await r.tick();
  await r.secs(0.4);

  state.caption = 'Once the probe has passed beacon B, its timer shows Δt';
  await p.evaluate(() => [...document.querySelectorAll('.rail dt')].find((e) => e.textContent.trim().startsWith('Probe, A to B')).scrollIntoView({ block: 'center' }));
  await r.tick(2);
  const tb = await ddBox('Probe, A to B');
  state.zoom = [W - 640, tb[1] - 160, 640, 360];
  state.arrow = { rect: tb };
  r.check.dt = await p.evaluate(() => [...document.querySelectorAll('.rail dt')].find((e) => e.textContent.trim().startsWith('Probe, A to B')).nextElementSibling.textContent);
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await at('.vd-rec'); await r.tick(2);
  await r.click('.vd-rec');
  await r.tick(4);
  const t = await r.box('.vd-readings table');
  state.zoom = [W - 600, t[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for u′ from 0.20c to 0.90c and for light, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
