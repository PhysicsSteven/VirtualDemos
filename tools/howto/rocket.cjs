// How this works: Rocket Propulsion. Part 1's first flight: deep space, dry mass 1000 kg, 1000 kg of fuel, u = 2500 m/s, 200 kg/s.
// Expected: burn time 1000/200 = 5.0 s, thrust 500 kN, speed at cutoff u ln(m₀/m_dry) = 2500 ln 2 = 1733 m/s.
require('./lib.cjs')({ demo: 'rocket', title: 'Rocket Propulsion' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');
  const thumb = (s) => r.p.evaluate(s => { const e = document.querySelector(s), q = e.getBoundingClientRect(), u = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + u * (q.width - 16), q.y + q.height / 2]; }, s);
  const dd = (label) => r.p.evaluate(l => { const d = [...document.querySelectorAll('#out > div')].find(x => x.querySelector('dt').textContent.startsWith(l)); const q = d.getBoundingClientRect(); return [q.x, q.y, q.width, q.height]; }, label);

  state.caption = 'Sample reading: one flight in deep space with 1,000 kg of fuel';
  await r.secs(3.0);

  state.caption = 'Set the fuel: drag the fuel mass slider down to 1,000 kg';
  const card = await r.box('#setupCard');
  state.zoom = [card[0] - 140, card[1] - 60, 560, 315];
  await r.moveTo(...(await thumb('#sMf')), 0.8);
  r.check.mf = await r.dragUntil(-3, 0, '#oMf', '1,000 kg');
  state.arrow = { rect: await r.box('#setupCard') };
  r.check.card = (await r.p.evaluate(() => document.getElementById('setupCard').innerText)).replace(/\n/g, ' | ');
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Launch. The engine burns for 5.0 s, then the rocket coasts';
  await r.click('#go');
  await r.moveTo(660, 600, 0.6);
  for (let i = 0; i < 400 && (await r.text('#go')) !== 'Resume'; i++) await r.tick();
  await r.secs(0.4);

  state.caption = 'Read the speed at burnout: u ln(m₀/m_dry) = 1,733 m/s';
  await r.scrollRail('#out');
  state.arrow = { rect: await dd('Speed at burnout') };
  r.check.out = (await r.p.evaluate(() => document.getElementById('out').innerText)).replace(/\n/g, ' | ');
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each fuel mass, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => window.vdRows()[0]);
});
