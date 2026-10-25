// How this works: Circuits (Worksheet 7, Power in an AC Circuit). Part 1's first reading: the Wall outlet setup, V1 = 120√2 =
// 169.7 V peak at 60 Hz, a 144 Ω bulb L1 (a 100 W bulb), A1 in series and V2 across the bulb. Expected: Vrms = 120.0 V,
// Irms = 120/144 = 833.3 mA, φ = 0.0°, P = Vrms Irms = 100.0 W; p = vi into the bulb runs from 0 to 2P = 200 W at 2f = 120 Hz.
require('./lib.cjs')({ demo: 'circuits', title: 'Power in an AC Circuit', query: '#power' }, async (r) => {
  const { state, p, W } = r;
  const union = (sels) => p.evaluate((sels) => {
    const q = sels.map((s) => document.querySelector(s).getBoundingClientRect()), x = Math.min(...q.map((b) => b.left)), y = Math.min(...q.map((b) => b.top));
    return [x, y, Math.max(...q.map((b) => b.right)) - x, Math.max(...q.map((b) => b.bottom)) - y];
  }, sels);

  state.caption = 'Sample reading: a 144 Ω bulb (100 W) on the 120 V, 60 Hz wall outlet';
  await r.secs(3.0);

  state.caption = 'Open the Wall outlet setup: A1 in series with the bulb, V2 across it';
  await r.scrollRail('#extras');
  await r.click('#extras [data-p="outlet"]');
  r.check.parts = await p.evaluate(() => { const v = __circ.byName('V1'), L = __circ.byName('L1'); return `L1 ${L.R} ohm, V1 ${v.V0.toFixed(2)} V peak, ${v.f} Hz`; });
  state.arrow = { rect: await r.box('#cPane') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Read the phase, the rms current and the average power';
  await r.scrollRail('#acRead');
  r.check.acRead = (await r.text('#acRead')).replace(/\s+/g, ' ');
  state.arrow = { rect: await union(['#acRead div:nth-child(4)', '#acRead div:nth-child(8)']) };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#tbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#tbl tbody tr td')].map((td) => (td.querySelector('input') ? td.querySelector('input').value : td.textContent)));
  r.check.csv = (await p.evaluate(() => __circ.readingsCSV())).trim().split('\n').slice(-2);

  state.caption = 'Pick Power in time: read the largest and smallest p for the bulb';
  await r.scrollRail('#zSeg');
  await r.click('#zSeg [data-z="p"]');
  await p.evaluate(() => window.scrollTo(0, 400)); await r.tick(2);
  const zp = await r.box('#zPane');
  state.zoom = [zp[0] + zp[2] - 600, r.H - 337.5, 600, 337.5];   /* p = vi into L1 and its average */
  await r.secs(3.0);
  state.zoom = null;

  state.caption = 'Change the bulb to 240 Ω and record again, then send both to the worksheet';
  await r.scrollRail('#capture');
  const ex = await r.box('#expTab');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
});
