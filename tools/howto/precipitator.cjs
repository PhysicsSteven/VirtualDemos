// How this works: Electrostatics at Work (Worksheet 3, Smoke Precipitator). Part 1's first reading: conducting 0.1 µm particles,
// 3.0 kV/cm, gas at 1.0 m/s, 5.0 m plates, counted to 500. Expected: C_c = 1 + Kn(1.257 + 0.4e^(−1.1/Kn)) = 2.889 with Kn = 1.32;
// q = 3πε₀d²E = 2.50 × 10⁻¹⁹ C (1.56 electrons); w = qEC_c/(3πηd) = 1.272 cm/s; η = 1 − exp(−wL/(us)) = 39.87 %. The measured
// efficiency scatters by √(η(1 − η)/N) = 2.2 % at N = 500. The wait for 500 particles (about 22 s) is shown 8 times faster.
const MU = 'µ';
require('./lib.cjs')({ demo: 'electrostatics-at-work', title: 'Smoke Precipitator' }, async (r) => {
  const { state, p, W } = r;
  const slide = async (sel) => { const sl = await r.box(sel), v = await p.evaluate((s) => { const e = document.querySelector(s); return (e.value - e.min) / (e.max - e.min); }, sel); return [sl[0] + 8 + (sl[2] - 16) * v, sl[1] + sl[3] / 2]; };
  const counts = async () => { const m = (await r.text('#out')).match(/(\d+) \/ (\d+)/); return [+m[1], +m[2]]; };
  const row = (re) => p.evaluate((src) => { const ds = [...document.querySelectorAll('#out > div')]; return ds.findIndex((d) => new RegExp(src).test(d.textContent)) + 1; }, re);

  state.caption = `Sample reading: soot particles 0.1 ${MU}m across, 3.0 kV/cm, gas at 1.0 m/s, 5.0 m plates`;
  await r.secs(3.0);

  state.caption = `Set the particle size: drag its slider to 0.1 ${MU}m`;
  await r.scrollRail('#sDp');
  await r.moveTo(...(await slide('#sDp')), 0.8);
  r.check.dp = await r.dragUntil(-3, 0, '#oDp', `0.1 ${MU}m`);
  state.arrow = { rect: await r.box('#oDp') };
  r.check.setup = [await r.text('#ptype [aria-pressed="true"]'), await r.text('#oE'), await r.text('#oU'), await r.text('#oL')].join(' | ');
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Changing a setting starts the counts again. Watch particles caught on the plates';
  const can = await r.box('#can');
  await r.moveTo(can[0] + can[2] / 2, can[1] + 160, 0.6);
  state.zoom = [can[0], can[1], 960, 540];
  await r.secs(2.4);
  state.zoom = null;

  state.caption = 'Wait until at least 500 particles are counted (shown 8 times faster)';
  await r.scrollRail('#out');
  const cRow = await row('Counted'), mRow = await row('Measured');
  const cb = await r.box(`#out > div:nth-child(${cRow})`), mb = await r.box(`#out > div:nth-child(${mRow})`);
  state.arrow = { rect: [Math.min(cb[0], mb[0]), Math.min(cb[1], mb[1]), Math.max(cb[0] + cb[2], mb[0] + mb[2]) - Math.min(cb[0], mb[0]), Math.max(cb[1] + cb[3], mb[1] + mb[3]) - Math.min(cb[1], mb[1])] };
  for (let i = 0; i < 600; i++) { const [a, b] = await counts(); if (a + b >= 500) break; await p.clock.runFor(7000 / r.FPS); await r.tick(); }
  await r.secs(0.6);
  r.check.counts = await r.text(`#out > div:nth-child(${cRow})`);
  r.check.meas = await r.text(`#out > div:nth-child(${mRow})`);

  state.caption = 'Record the reading: the measured and predicted efficiencies go into the table';
  state.arrow = null;
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(3);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each particle size, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
