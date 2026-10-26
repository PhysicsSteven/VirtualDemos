// How this works: Dosimetry, worksheet mp-proton-calibration ("Calibrating a Proton Beam"). The first reading: the saturation
// curve in pulsed protons (1.0 mGy per pulse, + polarity), the chamber read at 50 V. Expected (key row 1): M = 17.733 nC, with the
// Boag pulsed beam collection efficiency f = ln(1 + u)/u = 0.95409 at u = 0.09777 and Q_sat 18.570 nC (M carries the demo's 0.1 %
// reading noise, so M/f differs from Q_sat by that much). Records demos/dosimetry.html in 3D (?view=3d; VD3.lowPower is set here).
require('./lib.cjs')({ demo: 'dosimetry', title: 'Dosimetry: Kerma, Equilibrium and the Ion Chamber', query: '?view=3d' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the chamber’s charge at 50 V in a pulsed proton beam';
  await r.secs(2.6);

  state.caption = 'Choose Saturation curve, protons';
  await r.scrollRail('[data-p="sat"]');
  await r.click('[data-p="sat"]');
  await r.secs(0.8);

  state.caption = 'Set the chamber voltage: drag it down to 50 V';
  const sl = await r.box('#sV');
  state.zoom = [sl[0] - 380, sl[1] - 200, 640, 360];
  r.check.V = await r.slide('#sV', '#oV', 50, 1, 60);
  await r.secs(0.6);
  state.zoom = null;

  state.caption = 'Deliver 1 Gy and read the charge';
  await r.click('#btnMeasureC');
  await r.tick(6);
  const sc = await r.box('#scene');
  state.zoom = [sc[0] + 60, sc[1] + 60, 640, 360];
  r.check.M = await p.evaluate(() => window.vdReadingRow().M_nC);
  await r.secs(1.2);
  state.caption = 'The electrometer reads 17.733 nC: at low voltage more ions recombine before they are collected';
  await r.secs(2.4);
  state.zoom = null;

  state.caption = 'Record the reading';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 640, Math.min(row[1] - 200, r.H - 360), 640, 360];
  state.arrow = { rect: row };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat from 75 V up to 500 V, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.out = await p.evaluate(() => document.getElementById('out').innerText.replace(/\n/g, ' | '));
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
