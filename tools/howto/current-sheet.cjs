// How this works: Current in a Sheet (the Current in a sheet view of Resistivity of a Wire). The first reading of Part 1:
// Two bars, 10 V, R_s = 1000 Ω per square, probe at (2.00, 8.00) cm. Expected: V = 10 V × (22.75 − 2.00)/21.5 = 9.651 V,
// E = 10 V/0.215 m = 46.51 V/m, I = 10 V/(1000 Ω × 21.5/16) = 7.442 mA.
require('./lib.cjs')({ demo: 'resistivity', title: 'Current in a Sheet', query: '?view=sheet' }, async (r) => {
  const { state, p, W } = r;
  /* where on the screen a point of the sheet is: x from the left edge, y from the bottom (cm) */
  const at = (x, y) => p.evaluate(([x, y]) => { const g = window.__sheet.SH.geo, c = document.getElementById('can').getBoundingClientRect(); return [c.left + g.x0 + x * g.sc, c.top + g.y0 + (16 - y) * g.sc]; }, [x, y]);
  await p.mouse.move(640, 360);

  state.caption = 'Sample reading: two bars at 10 V on a sheet of 1000 Ω per square, probe at x = 2.00 cm, y = 8.00 cm';
  await r.secs(3.0);

  state.caption = 'Choose Two bars. The battery holds the left bar at 10 V and the right one at 0 V';
  await r.click('#shLayouts [data-sl="bars"]');
  await r.scrollRail('#shV');
  state.arrow = { rect: await r.box('#shV') };
  r.check.settings = (await r.text('#oShV')) + ' | ' + (await r.text('#oShRs'));
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Place the probe: press the sheet at x = 2.00 cm, y = 8.00 cm';
  const can = await r.box('#can'), q = await at(2, 8);
  state.zoom = [can[0] + 40, q[1] - 220, 700, 393.75];
  await r.tick(2);
  await r.moveTo(q[0], q[1], 1.0);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.secs(1.6);
  state.zoom = null;

  state.caption = 'Read the probe: the potential there, the field, and the current from the battery';
  await r.scrollRail('#shOut');
  const out = await r.box('#shOut');
  state.zoom = [W - 640, out[1] + out[3] - 330, 640, 360]; state.capTop = true;
  r.check.out = (await r.text('#shOut')).replace(/\s+/g, ' ');
  await r.secs(2.6);
  state.zoom = null; state.capTop = false;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#shRowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#shRowsTbl tbody tr') };
  r.check.row = await r.text('#shRowsTbl tbody tr');
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat every 2 cm across the sheet, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
