// How this works: Franck–Hertz Experiment, worksheet "The Franck–Hertz Experiment". The first table: Blind on, the Mercury tube at
// 180 °C (retarding 1.5 V, contact 2.0 V), one sweep from 0 to 35 V, the curve recorded every 0.5 V (71 rows). The current is
// simulated with noise, so the rows differ a little from the key's run; the minima repeat every 4.9 V (the 4.887 eV line).
require('./lib.cjs')({ demo: 'franck-hertz', title: 'Franck–Hertz Experiment' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: the collector current over one sweep of the mercury tube at 180 °C';
  await r.secs(2.6);

  state.caption = 'Turn Blind on, then choose the Mercury tube at 180 °C setup';
  await r.scrollRail('#blind');
  await r.click('#blind');
  await r.secs(0.3);
  await r.scrollRail('[data-p="hg"]');
  await r.click('[data-p="hg"]');
  await r.secs(0.4);

  state.caption = 'Pick the Fast sweep, then let the sweep run to 35 V';
  await r.scrollRail('#spFast');
  await r.click('#spFast');
  await r.moveTo(480, 520, 0.6);
  for (let i = 0; i < 900 && (await p.evaluate(() => window.__fh.sweeping)); i++) await r.tick();
  r.check.U = await p.evaluate(() => window.__fh.S.U);
  await r.secs(1.2);

  state.caption = 'Press Record the curve: it stores the current every 0.5 V';
  await r.scrollRail('#recCurve');
  await r.click('#recCurve');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr:first-child') };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Note the retarding and contact voltages, then send the curve to the worksheet';
  await r.scrollRail('.vd-export');
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  const rows = await p.evaluate(() => window.vdRows());
  r.check.n = rows.length; r.check.first = JSON.stringify(rows.slice(0, 3)); r.check.blind = await p.evaluate(() => window.__fh.S.blind);
  r.check.min = JSON.stringify(rows.filter((x, i) => i > 0 && i < rows.length - 1 && +x.I_nA < +rows[i - 1].I_nA && +x.I_nA <= +rows[i + 1].I_nA && +x.U_V > 4).map((x) => x.U_V));
});
