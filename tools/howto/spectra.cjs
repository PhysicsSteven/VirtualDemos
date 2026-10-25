// How this works: Spectra Explorer, worksheet "Spectra". The first reading: hydrogen in Explore mode, Visible range, Blind on,
// the red Balmer line. NIST lists Hα's components at 656.27 nm (two, intensity 90 and 30) and 656.28518 nm (intensity 180); the
// strongest is the one to record. Check: Rydberg, 1/λ = R_H(1/4 − 1/9) with R_H = 1.0967758 × 10⁷ /m gives 656.47 nm in vacuum,
// 656.28 nm in air (n = 1.000277).
require('./lib.cjs')({ demo: 'spectra', title: 'Spectra Explorer' }, async (r) => {
  const { state, p, W } = r;
  const scrollTo = async (y) => { await p.evaluate((y) => window.scrollTo(0, y), y); await r.tick(2); };
  /* the page scrolls here, not the sidebar: bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const tap = async (x, y) => { await r.moveTo(x, y, 0.7); state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false; };
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the red line of hydrogen, with the model\'s prediction hidden';
  await r.secs(2.8);

  state.caption = 'Hydrogen opens in Explore mode with the Visible range. Turn Blind on, under the energy levels';
  await scrollTo(380);
  const bl = await r.box('#blind');
  state.zoom = [bl[0] - 420, bl[1] - 230, 800, 450];
  await tap(bl[0] + bl[2] / 2, bl[1] + bl[3] / 2);
  r.check.blind = await p.evaluate(() => document.getElementById('blind').checked);
  r.check.hidden = await r.text('#hL');
  await r.secs(1.6);
  state.zoom = null;
  await scrollTo(0);

  state.caption = 'Read the red line: click it in the spectrum';
  const c = await r.box('#cA');
  const x = c[0] + (656.285 - 380) / 370 * c[2];
  state.zoom = [c[0] + c[2] - 640, c[1] - 200, 640, 360];
  await tap(x, c[1] + c[3] / 2);
  await r.tick(4);
  r.check.tip = await r.text('#tipA');
  state.arrow = { rect: await r.box('#tipA') };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await into('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for every hydrogen line in the strip, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
