// How this works: Electrostatics at Work (Worksheet 1, Van de Graaff Generator). Part 1's first reading: a 5 cm dome at a belt current
// of 10 µA, wand hung up. Expected: C = 4πε₀R = 5.563 pF, V_max = E_b R = 3.0 MV/m × 0.05 m = 150 kV, Q_max = C V_max = 0.8345 µC,
// time to spark Q_max/I = 0.08345 s, spark energy ½Q_max V_max = 0.06259 J.
const MU = 'µ';
require('./lib.cjs')({ demo: 'electrostatics-at-work', title: 'Van de Graaff Generator' }, async (r) => {
  const { state, p, W } = r;
  await p.addStyleTag({ content: '#vdTools { display: none !important; }' });   /* the measuring tools never appear in a video */
  const slide = async (sel) => { const sl = await r.box(sel), v = await p.evaluate((s) => { const e = document.querySelector(s); return (e.value - e.min) / (e.max - e.min); }, sel); return [sl[0] + 8 + (sl[2] - 16) * v, sl[1] + sl[3] / 2]; };

  state.caption = `Sample reading: a 5 cm dome with a belt current of 10 ${MU}A`;
  await r.secs(3.0);

  state.caption = 'Set the dome radius: drag its slider on the Set up card to 5 cm';
  const cardB = await r.box('#setupCard');
  state.zoom = [cardB[0] - 20, cardB[1] - 40, 640, 360];
  await r.moveTo(...(await slide('#sR')), 0.9);
  r.check.R = await r.dragUntil(-2, 0, '#oR', '5 cm');
  state.arrow = { rect: await r.box('#oR') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = `Set the belt current: drag its slider to 10 ${MU}A`;
  await r.moveTo(...(await slide('#sI')), 0.6);
  r.check.I = await r.dragUntil(1, 0, '#oI', `10.0 ${MU}A`);
  state.arrow = { rect: await r.box('#oI') };
  await r.secs(1.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Start the motor: the dome charges until a spark jumps, again and again';
  await r.click('#motor');
  const can = await r.box('#can');
  await r.moveTo(can[0] + can[2] * 0.62, can[1] + 120, 0.6);
  state.zoom = [can[0] + can[2] / 2 - 320, can[1], 640, 360];
  await r.secs(2.4);
  state.zoom = null;

  state.caption = 'Read the highest voltage, the time to spark and the energy of each spark';
  await r.scrollRail('#out > div:nth-child(3)');
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await p.evaluate(() => {   /* the three rows the worksheet asks for */
    const ds = [...document.querySelectorAll('#out > div')].filter((d) => /Highest voltage|Time to spark|Energy released/.test(d.textContent)).map((d) => d.getBoundingClientRect());
    const x0 = Math.min(...ds.map((q) => q.left)), y0 = Math.min(...ds.map((q) => q.top)), x1 = Math.max(...ds.map((q) => q.right)), y1 = Math.max(...ds.map((q) => q.bottom));
    return [x0 - 4, y0 - 4, x1 - x0 + 8, y1 - y0 + 8]; }) };
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each dome radius, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
