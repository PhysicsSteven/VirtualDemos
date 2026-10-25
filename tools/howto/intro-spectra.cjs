// How this works: Spectra Explorer, worksheet "Spectra: fingerprints of the elements" (intro-spectra, opened with ?ws=intro-spectra).
// Part 2's first readings: hydrogen's red line as a bright emission line, then the same line dark in absorption. Both read
// 656.28518 nm, H I (NIST's strongest component of Hα).
require('./lib.cjs')({ demo: 'spectra', query: '?ws=intro-spectra', title: 'Spectra Explorer' }, async (r) => {
  const { state, p, W } = r;
  /* the page scrolls here, not the sidebar: bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const tap = async (x, y) => { await r.moveTo(x, y, 0.7); state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false; };
  const c = await r.box('#cA'), x = c[0] + (656.285 - 380) / 370 * c[2];
  const top = async () => { await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2); };
  const record = async () => {
    await into('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    const tb = await r.box('.vd-readings table');
    state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
    state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
    await r.secs(1.8);
    state.arrow = null; state.zoom = null;
  };
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: hydrogen\'s red line, bright in emission and dark in absorption';
  await r.secs(2.8);

  state.caption = 'Hydrogen opens as an emission spectrum. Click the red line to read it';
  state.zoom = [c[0] + c[2] - 640, c[1] - 200, 640, 360];
  await tap(x, c[1] + c[3] / 2);
  await r.tick(4);
  r.check.tip1 = await r.text('#tipA');
  state.arrow = { rect: await r.box('#tipA') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading';
  await record();
  r.check.row1 = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));

  state.caption = 'Switch to Absorption: the same line is now dark. Click it and record it too';
  await top();
  const ab = await r.box('[data-d="absorption"]');
  state.zoom = [c[0] + c[2] - 640, ab[1] - 20, 640, 360];
  await r.click('[data-d="absorption"]');
  await r.secs(0.6);
  state.capTop = true;   /* the strip sits at the bottom of this zoom */
  await tap(x, c[1] + c[3] / 2);
  await r.tick(4);
  r.check.tip2 = await r.text('#tipA');
  state.arrow = { rect: await r.box('#tipA') };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null; state.capTop = false;
  await record();
  r.check.row2 = await p.evaluate(() => JSON.stringify(window.vdRows()[1]));

  state.caption = 'Do the same for the other three bright lines, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
