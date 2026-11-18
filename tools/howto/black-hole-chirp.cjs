// How this works: Gravitational Waves, Inspiral view (worksheet black-hole-chirp). The first readings: GW150914, then a pair of
// 10 + 10 solar masses typed into the mass readouts. Expected: GW150914 last stable orbit 62.3 Hz, ringdown 253 Hz; 10 + 10: 202.3 Hz, 827 Hz.
require('./lib.cjs')({ demo: 'gravitational-waves', title: 'Gravitational Waves', query: '?ws=black-hole-chirp' }, async (r) => {
  const { state, p } = r;
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const out = async (labels) => { const i = await p.evaluate((ls) => [...document.querySelectorAll('#out > div')].map((d, k) => [d.querySelector('dt').textContent, k]).filter(([t]) => ls.some((l) => t.startsWith(l))).map(([, k]) => k + 1), labels);
    const bs = []; for (const k of i) bs.push(await r.box(`#out > div:nth-child(${k})`));
    const x0 = Math.min(...bs.map((b) => b[0])), y0 = Math.min(...bs.map((b) => b[1])), x1 = Math.max(...bs.map((b) => b[0] + b[2])), y1 = Math.max(...bs.map((b) => b[1] + b[3])); return [x0, y0, x1 - x0, y1 - y0]; };
  const typeIn = async (sel, txt) => { await r.click(sel); await p.keyboard.press('Control+A'); await r.tick(2); for (const ch of txt) { await p.keyboard.type(ch); await r.tick(2); } await p.keyboard.press('Enter'); await r.tick(3); };

  state.caption = 'Sample readings: GW150914, then two black holes of 10 solar masses';
  await r.secs(2.4);

  state.caption = 'GW150914 is set up: read the last stable orbit and ringdown frequencies';
  await into('#out');
  state.arrow = { rect: await out(['Last stable orbit', 'Time from f', 'Ringdown frequency', 'Final black hole']) };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record a reading';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Set Mass m₁ to 10: click its readout, type 10, press Enter';
  await into('#oM1');
  await typeIn('#oM1', '10');
  state.caption = 'Do the same for Mass m₂';
  await typeIn('#oM2', '10');
  r.check.masses = await r.text('#oM1') + ' + ' + await r.text('#oM2');
  await r.secs(0.4);

  state.caption = 'A lighter pair: the last stable orbit comes at a higher frequency';
  await into('#out');
  state.arrow = { rect: await out(['Last stable orbit', 'Time from f', 'Ringdown frequency', 'Final black hole']) };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record again';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'After all six pairs, send the readings to the worksheet';
  await into('.vd-readings .vd-export');
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.2);
  r.check.rows = await p.evaluate(() => window.vdRows().map((q) => `${q.m1} + ${q.m2}: ${q.f_lso_Hz} Hz, ${q.f_ring_Hz} Hz`).join('; '));
});
