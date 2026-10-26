// How this works: Quantum Wave Packets, worksheet "The Uncertainty Principle". The first readings: Free particle, packets of
// width about 0.30 nm and 0.50 nm, each launched and recorded at t = 0. Expected: a Gaussian packet at launch is a minimum
// uncertainty state, Δx·Δp = ħ/2, so Δp = ħc/(2Δx) = 197.327/(2 · 0.296) eV/c = 333.3 eV/c (key row 1: 0.296 nm, 333.311 eV/c).
require('./lib.cjs')({ demo: 'quantum-waves', title: 'Quantum Wave Packets' }, async (r) => {
  const { state, p, W } = r;
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
    const row = await r.box('.vd-readings tbody tr:last-child');
    state.zoom = [W - 600, Math.min(row[1] - 200, r.H - 337.5), 600, 337.5];
    state.arrow = { rect: row };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  const width = async (want) => {
    const b = await r.box('#psig');
    state.zoom = [b[0] - 260, b[1] - 150, 640, 360];
    const got = await r.slide('#psig', '#psigOut', want, 0.006, 0.05);
    state.arrow = { rect: await r.box('#psigOut') };
    await r.secs(0.8);
    state.arrow = null; state.zoom = null;
    return got;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: free electron packets about 0.30 nm and 0.50 nm wide, at launch';
  await r.secs(2.2);

  state.caption = 'Choose the Free particle setup';
  await r.click('[data-p="free"]');
  await r.secs(0.6);

  state.caption = 'On the packet card, drag the width to about 0.30 nm. The packet relaunches at t = 0';
  r.check.w1 = await width(0.30);

  state.caption = 'Record a reading before you press Play';
  await record(1.5);

  state.caption = 'Now about 0.50 nm, and record again';
  r.check.w2 = await width(0.50);
  await record(1.5);

  state.caption = 'Repeat up to 3.0 nm, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
