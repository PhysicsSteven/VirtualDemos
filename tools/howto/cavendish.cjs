// How this works: Cavendish. Part 1 (resting spot in A at t = 0) and the first turning point of Part 2 after swinging to B.
// Expected: κ = 4π²(2ml²)/T² = 3.0462e-8 N·m/rad; the resting spot in A is 50 cm + L tan 2θ = 52.83 cm (θ = 2.83 mrad,
// all four sphere pairs, beam turn included). After the swing to B the spot heads for the rest in B (47.17 cm) and turns about
// half a period (180 s) later, short of 47.17 − 5.66 cm by the damping factor e^(−180/720) = 0.779: near 42.8 cm.
require('./lib.cjs')({ demo: 'cavendish', title: 'The Cavendish Experiment' }, async (r) => {
  const { state, W } = r;
  /* the whole stage in view, so the scale and the readings table fit in the 720 px window */
  await r.p.evaluate(() => window.scrollTo(0, document.querySelector('#stage').getBoundingClientRect().top - 8));
  const can = await r.box('#can');
  const outRow = (re) => r.p.evaluate(re => { const d = [...document.querySelectorAll('#out > div')].find(d => new RegExp(re).test(d.textContent)); const q = d.getBoundingClientRect(); return { box: [q.x, q.y, q.width, q.height], v: d.querySelector('dd').textContent.trim() }; }, re);
  const record = async (n) => {
    await r.scrollRail('.vd-readings .vd-rec');
    await r.click('.vd-readings .vd-rec');
    await r.tick(4);
    const tb = await r.box('.vd-readings table.rows');
    state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
    state.arrow = { rect: await r.box(`.vd-readings table.rows tbody tr:nth-child(${n})`) };
  };
  const toTop = async () => { await r.p.evaluate(() => { document.querySelector('.rail').scrollTop = 0; }); await r.tick(2); };

  state.caption = 'Sample readings: the resting spot in A, then the first turning point after swinging to B';
  await r.secs(3.2);

  state.caption = 'Start settled in A at t = 0: press Start over, and read the spot';
  await r.click('#restart');
  await r.tick(4);
  state.zoom = [can[0] + 290, can[1] + 50, 660, 371.25];   /* the laser, the scale and the spot */
  await r.secs(1.0);
  const sp = await outRow('^Spot on the scale');
  r.check.spotA = sp.v; r.check.restA = (await outRow('^Resting spot')).v; r.check.twist = (await outRow('^Twist')).v; r.check.kappa = (await outRow('^Torsion')).v;
  await r.secs(0.8);
  state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await record(1);
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Swing the large spheres to position B';
  await toTop();
  await r.click('#posSeg button:nth-child(3)');
  await r.secs(0.8);

  state.caption = 'Press Run to the next turning point. The spot swings down and stops where it turns';
  await r.click('#turn');
  state.zoom = [can[0] + 290, can[1] + 50, 660, 371.25];
  for (let i = 0; i < 300 && await r.p.evaluate(() => window.__cav.S.run); i++) await r.tick();
  await r.secs(0.6);
  state.zoom = null;
  await r.p.evaluate(() => { const rl = document.querySelector('.rail'), c = document.querySelector('#out'); rl.scrollTop += c.getBoundingClientRect().top - rl.getBoundingClientRect().top - 40; });
  await r.tick(2);
  const t1 = await outRow('^Clock t'), s1 = await outRow('^Spot on the scale');
  r.check.t1 = t1.v; r.check.spot1 = s1.v; r.check.restB = (await outRow('^Resting spot')).v;
  state.arrow = { rect: [t1.box[0], t1.box[1], s1.box[0] + s1.box[2] - t1.box[0], t1.box[3]] };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Record the time and the spot at this turning point';
  await record(2);
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Go on to the seventh turning point, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings table.rows tbody tr')].map(tr => [...tr.querySelectorAll('td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent).join(' | ')));
});
