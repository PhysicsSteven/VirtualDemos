// How this works: GPS Clocks. Second clock in a circular orbit at the space station radius, then GPS; ground clock turning.
// Expected (GPS, r = 26,560 km): gravity part (GM/c²)(1/R − 1/r)·86,400 s = 45.72 μs/day, speed part
// (v² − v_ground²)/(2c²)·86,400 s = −7.11 μs/day with v = √(GM/r) = 3.874 km/s, net 38.61 μs/day.
require('./lib.cjs')({ demo: 'gps-clocks', title: 'GPS Clocks and Relativity' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');
  const row = (re) => r.p.evaluate(re => { const d = [...document.querySelectorAll('#out > div')].find(d => new RegExp(re).test(d.textContent)); const q = d.getBoundingClientRect(); return { box: [q.x, q.y, q.width, q.height], v: d.querySelector('dd').textContent.trim() }; }, re);
  const toOut = async () => { await r.p.evaluate(() => { const rl = document.querySelector('.rail'), c = document.querySelector('#out'); rl.scrollTop += c.getBoundingClientRect().top - rl.getBoundingClientRect().top - 40; }); await r.tick(2); };
  const toTop = async () => { await r.p.evaluate(() => { document.querySelector('.rail').scrollTop = 0; }); await r.tick(2); };
  const record = async (n) => {
    await r.scrollRail('.vd-readings .vd-rec');
    await r.click('.vd-readings .vd-rec');
    await r.tick(4);
    const tb = await r.box('.vd-readings table.rows');
    state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
    state.arrow = { rect: await r.box(`.vd-readings table.rows tbody tr:nth-child(${n})`) };
  };

  state.caption = 'Sample reading: a clock in orbit with the space station, against a clock on the ground';
  await r.secs(3.0);

  state.caption = 'Keep the ground clock turning with Earth, and pick In a circular orbit';
  state.arrow = { rect: await r.box('#spin') };
  await r.moveTo(1000, 625, 0.7);
  await r.secs(0.8);
  state.arrow = null;
  await r.click('#modeSeg button:nth-child(1)');
  await r.secs(0.6);

  state.caption = 'Put the second clock in orbit: press Space station';
  await r.click('#places button:nth-child(2)');
  state.zoom = [can[0], can[1], 832, 468];
  await r.secs(2.0);
  state.zoom = null;

  state.caption = 'Read the gains per day: gravity speeds it up, its speed slows it down';
  await toOut();
  const g = await row('^Gravity'), s = await row('^Speed \\('), n = await row('^Net gain');
  r.check.issGravity = g.v; r.check.issSpeed = s.v; r.check.issNet = n.v;
  state.arrow = { rect: [g.box[0], g.box[1], s.box[0] + s.box[2] - g.box[0], n.box[1] + n.box[3] - g.box[1]] };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await record(1);
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Next radius: press GPS. Now the orbiting clock gains about 38 μs a day';
  await toTop();
  await r.click('#places button:nth-child(3)');
  await r.secs(0.8);
  await toOut();
  const n2 = await row('^Net gain');
  r.check.gpsNet = n2.v;
  r.check.gpsGravity = (await row('^Gravity')).v; r.check.gpsSpeed = (await row('^Speed \\(')).v;
  state.arrow = { rect: n2.box };
  await r.secs(2.0);
  state.arrow = null;
  state.caption = 'Record this one too';
  await record(2);
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record more radii out to 50,000 km, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings table.rows tbody tr')].map(tr => [...tr.querySelectorAll('td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent).join(' | ')));
});
