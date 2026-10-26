// How this works: Proton Therapy QA, worksheet mp-proton-qa. The first reading: Daily QA, all good (150 MeV), one morning's QA run
// and recorded. Each run draws its own small measurement noise from a fixed seed, so the numbers match the key's runs one for one:
// run 1 gives output 99.91 %, R90 change 0.00 mm, spot error 0.29 mm, spot size +0.5 %; run 2 gives 99.84 %, −0.02 mm, 0.21 mm,
// +0.1 % (key rows 1 and 2), all inside the TG-224 daily tolerances (output ±3 %, range ±1 mm, spot position ±2 mm absolute and
// ±1 mm relative, size ±10 %).
// Recorded in 3D (?view=3d), since the treatment room is the point and VD3.lowPower is set in the container.
require('./lib.cjs')({ demo: 'proton-qa', title: 'Proton Therapy QA', query: '?view=3d' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: one morning QA run on a machine with no faults, at 150 MeV';
  await r.secs(2.6);

  state.caption = 'Choose Daily QA, all good';
  await r.scrollRail('[data-p="ok"]');
  await r.click('[data-p="ok"]');
  await r.secs(0.6);

  state.caption = 'Run the QA: the beam comes on for a moment and every check is measured';
  await r.click('#play');
  const sc = await r.box('#scene');
  const zw = Math.min(sc[2] * 0.75, sc[3] * 16 / 9);
  state.zoom = [sc[0], sc[1], zw, zw * 9 / 16];
  await r.moveTo(sc[0] + sc[2] * 0.2, sc[1] + sc[3] * 0.45, 0.5);
  await r.secs(3.0);
  state.zoom = null;
  r.check.run = await r.text('#count');

  state.caption = 'Read the four checks: output, R90, spot position and spot size, each against its tolerance';
  await r.scrollRail('#out');
  const o = await r.box('#out');
  state.arrow = { rect: [o[0], o[1], o[2], Math.min(o[3], r.H - 24 - o[1])] };
  state.capTop = true;
  await r.secs(3.0);
  state.arrow = null; state.capTop = false;
  r.check.out = await p.evaluate(() => document.getElementById('out').innerText.replace(/\n/g, ' | '));
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));

  state.caption = 'Record the reading';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 640, Math.min(row[1] - 200, r.H - 360), 640, 360];
  state.arrow = { rect: row };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record five more mornings and each faulty setup, then send them to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
