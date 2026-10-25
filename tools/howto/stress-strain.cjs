// How this works: Stress and Strain. A reading from the worksheet's first series: a fresh Mystery metal wire, 2.000 m long and
// 0.60 mm in diameter, with 1 kg hung on it. Expected (elastic, Y hidden in the demo as 110 GPa): ΔL = mgL/(AY) with
// A = π(0.30 mm)² = 0.2827 mm², so ΔL = 9.81 × 2.000/(0.2827e-6 × 110e9) m = 0.631 mm.
require('./lib.cjs')({ demo: 'stress-strain', title: 'Stress and Strain' }, async (r) => {
  const { state, p } = r;

  state.caption = 'Sample reading: 1 kg on a fresh Mystery metal wire, 2.000 m long and 0.60 mm across';
  await r.secs(3.2);

  state.caption = 'Choose the wire: click Mystery metal';
  await r.click('#mats [data-m="mystery"]');
  await r.secs(0.8);

  state.caption = 'Set the diameter: drag the slider to 0.60 mm';
  const sl = await r.box('#sD'), v = +(await p.evaluate(() => document.querySelector('#sD').value));
  await r.moveTo(sl[0] + 8 + (sl[2] - 16) * (v - 0.2) / 1.0, sl[1] + sl[3] / 2, 0.7);
  r.check.d = await r.dragUntil(1, 0, '#oD', '0.60 mm');
  state.arrow = { rect: await r.box('#oD') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Hang the load: click the 1 kg mass. The dial gauge reads the stretch';
  const tray = await r.box('#tray');
  state.zoom = [0, tray[1] + tray[3] - 450, 800, 450];
  await r.click('#addMass [data-kg="1"]');
  await r.secs(1.2);
  state.zoom = null;
  await r.scrollRail('#out');
  const dl = '#out div:nth-child(3)';
  r.check.dL = await r.text(dl);
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box(dl) };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at 0, 2, 3, 4 and 5 kg, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
