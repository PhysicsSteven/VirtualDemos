// How this works: Electrostatics at Work (Worksheet 2, Ink Jet Printer). Part 1's first two readings: 60 µm drops at 20 m/s, 3000 V on
// the plates, charges 0 and 0.05 pC. Expected: m = ρπd³/6 = 113.1 ng; at 0 pC the drop flies straight into the gutter; at 0.05 pC,
// a = qV/(m d_gap) = 663.1 m/s², y = a t₁(t₁/2 + t₂) − ½g(t₁ + t₂)² = 0.3316 mm − 7.7 µm = 0.324 mm with t₁ = 0.50 ms, t₂ = 0.75 ms.
const MU = 'µ';
require('./lib.cjs')({ demo: 'electrostatics-at-work', title: 'Ink Jet Printer' }, async (r) => {
  const { state, p, W } = r;
  const slide = async (sel) => { const sl = await r.box(sel), v = await p.evaluate((s) => { const e = document.querySelector(s); return (e.value - e.min) / (e.max - e.min); }, sel); return [sl[0] + 8 + (sl[2] - 16) * v, sl[1] + sl[3] / 2]; };
  const can = await r.box('#can');
  const side = [can[0], can[1] + 158, 680, 382.5];          /* the nozzle, the plates, the gutter and the paper's edge */
  const paper = [can[0] + 583, can[1] + 290, 360, 202.5];   /* the gutter, the paper's edge and the paper face on */

  state.caption = `Sample readings: drops of 0 and 0.05 pC (60 ${MU}m, 20 m/s, 3000 V on the plates)`;
  await r.secs(3.0);

  state.caption = 'Set the charge on each drop: drag its slider to 0 pC';
  await r.scrollRail('#sQ');
  await r.moveTo(...(await slide('#sQ')), 0.8);
  r.check.q0 = await r.dragUntil(-3, 0, '#oQ', '0.00 pC');
  state.arrow = { rect: await r.box('#oQ') };
  await r.secs(0.8);
  state.arrow = null;

  state.caption = 'Fire one drop. With no charge it flies straight into the gutter';
  state.zoom = side;                                          /* zoom first: the flight takes 0.7 s */
  await r.secs(0.8);
  await r.click('#fire');
  await r.secs(1.4);
  r.check.y0 = await p.evaluate(() => [...document.querySelectorAll('#out div')].find((d) => /paper/.test(d.textContent)).textContent);
  state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(3);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Set 0.05 pC and fire again: the drop bends up and lands on the paper';
  await r.scrollRail('#sQ');
  await r.moveTo(...(await slide('#sQ')), 0.7);
  r.check.q1 = await r.dragUntil(1, 0, '#oQ', '0.05 pC');
  state.zoom = side;
  await r.secs(0.8);
  await r.click('#fire');
  await r.secs(1.0);
  state.zoom = paper;
  await r.secs(1.6);
  state.zoom = null;

  state.caption = 'Read the height on the paper, and record it';
  await r.scrollRail('#out');
  const hRow = await p.evaluate(() => { const ds = [...document.querySelectorAll('#out > div')]; const i = ds.findIndex((d) => /Height on the paper/.test(d.textContent)); return i + 1; });
  r.check.y1 = await r.text(`#out > div:nth-child(${hRow})`);
  state.arrow = { rect: await r.box(`#out > div:nth-child(${hRow})`) };
  await r.secs(1.6);
  state.arrow = null;
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(3);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr:nth-child(2)') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Go on in steps of 0.05 pC to 0.40 pC, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
