// How this works: Radiobiology, worksheet "Radiobiology: Cell Survival and Fractionation" (Medical Physics). A reading from the
// first table: Survival and oxygen view, V79 cells in air (160 mmHg), 3 Gy, recorded. Expected (linear quadratic model, V79 in air
// α 0.135 /Gy, β 0.0320 /Gy², without oxygen α 0.060 /Gy, β 0.0030 /Gy², Wenzl and Wilkens 2011): S = exp(−0.405 − 0.288) =
// 0.5001, without oxygen exp(−0.207) = 0.8130, OER = 8.193 Gy / 3 Gy = 2.731 (key row 4: 0.5001, −0.693, 0.813, −0.207, 2.731).
// 3 Gy rather than the table's first row (0 Gy, where S = 1), so the reading shows the curve.
require('./lib.cjs')({ demo: 'radiobiology', title: 'Radiobiology: Cell Survival and Fractionation', query: '?ws=mp-radiobiology' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: how many V79 cells in air survive 3 Gy';
  await r.secs(2.4);

  state.caption = 'In the Survival and oxygen view, choose V79 cells in air, 160 mmHg';
  await r.click('#viewSeg [data-v="surv"]');
  await r.secs(0.3);
  const sel = await r.box('#selCell');
  state.zoom = [0, Math.max(0, sel[1] - 120), 640, 360];
  state.arrow = { rect: sel };
  await r.secs(1.0);
  const ox = await r.box('#oxBox');
  state.arrow = { rect: ox };
  await r.moveTo(ox[0] + ox[2] / 2, ox[1] + ox[3] / 2, 0.6);
  await r.secs(0.8);
  state.arrow = null;

  state.caption = 'Set the dose to 3 Gy: drag the slider, or across the graph';
  r.check.D = await r.slide('#sD', '#oD', 3, 0.001, 0.15);
  await r.secs(0.6);
  state.zoom = null;
  const pl = await r.box('#plot');
  state.zoom = [pl[0], pl[1], 760, 427.5];
  await r.secs(1.6);
  state.zoom = null;

  const ro = (i) => p.evaluate((i) => document.querySelector(`#out > div:nth-child(${i})`).lastChild.textContent.trim(), i);
  r.check.S = await ro(6); r.check.Sanox = await ro(7); r.check.OER = await ro(8);
  state.caption = `Read the surviving fraction: ${r.check.S} in air, ${r.check.Sanox} without oxygen, OER ${r.check.OER}`;
  await r.scrollRail('#out > div:nth-child(4)');
  const a = await r.box('#out > div:nth-child(4)');
  state.zoom = [W - 600, Math.max(0, Math.min(a[1] - 60, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: await r.box('#out > div:nth-child(6)') };
  await r.secs(1.4);
  state.arrow = { rect: await r.box('#out > div:nth-child(7)') };
  await r.secs(1.2);
  state.arrow = { rect: await r.box('#out > div:nth-child(8)') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. Then every whole dose from 0 to 10 Gy';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 600, Math.max(0, Math.min(row[1] - 200, r.H - 337.5)), 600, 337.5];
  state.arrow = { rect: row };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  state.caption = 'Then send the readings to the worksheet, and repeat for T1 cells';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
