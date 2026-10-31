// How this works: The Nearest Stars and the Brightest Stars (Stellar Evolution, Nearest and brightest). The first table's first
// reading: Proxima Centauri (HYG v3.8: V 11.01, M_V 15.45, B − V 1.807, 1.296 pc).
require('./lib.cjs')({ demo: 'hr-diagram', title: 'Stellar Evolution' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [1120, 300]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample reading: Proxima Centauri, the nearest star to the Sun';
  await r.secs(2.6);

  state.caption = 'Choose Nearest and brightest, then Nearest: every star within 10 parsecs';
  await r.scrollRail('#presets');
  const pr = await r.box('#presets');
  state.zoom = [W - 640, pr[1] - 100, 640, 360];
  await r.click('#presets [data-p=real]');
  await r.tick(4);
  state.zoom = null;
  await r.scrollRail('#realSeg');
  state.arrow = { rect: await r.box('#realSeg [data-r=near]') };
  await r.secs(1.6);
  state.arrow = { rect: await r.box('#hr') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Tap Proxima Centauri on the diagram (or pick it from the list)';
  const [x, y] = await p.evaluate(() => window.__hr.realXY('Proxima Centauri'));
  state.zoom = [x - 400, y - 225, 800, 450];
  await r.moveTo(x, y, 1.0);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  await r.secs(1.6);
  state.zoom = null;

  state.caption = 'Read its magnitudes, B − V and distance';
  await r.scrollRail('#qSel');
  r.check.sel = await r.text('#qSel'); r.check.V = await r.text('#qV'); r.check.MV = await r.text('#qSelMV'); r.check.BV = await r.text('#qBV'); r.check.d = await r.text('#qSelD');
  const a = await r.box('#qSel'), b = await r.box('#qSelD');
  state.zoom = [W - 600, a[1] - 60, 600, 337.5];
  state.arrow = { rect: [a[0], a[1] - 18, 300, b[1] + b[3] - a[1] + 22] };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for the other nearest stars, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
