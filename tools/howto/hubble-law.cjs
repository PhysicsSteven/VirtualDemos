// How this works: Cosmic Distance Ladder, Rung 4 (worksheet hubble-law). One reading: Galaxy 13, a Type Ia galaxy near 95 Mpc,
// its distance from the standard calibration and its redshift from the comb matched to its lines (within 0.0006 of the catalog z).
require('./lib.cjs')({ demo: 'distance-ladder', title: 'Cosmic Distance Ladder' }, async (r) => {
  const { state, p } = r;
  const GAL = 12;   /* Galaxy 13 in the readings */
  const handle = async (id) => { const cv = await r.box('#can'), h = (await p.evaluate(() => window.__dl.handles().map((h) => ({ id: h.id, pt: h.pt, rect: h.rect })))).find((h) => h.id === id);
    return h.pt ? [cv[0] + h.pt[0], cv[1] + h.pt[1]] : [cv[0] + h.rect[0], cv[1] + h.rect[1], h.rect[2], h.rect[3]]; };

  state.caption = "Sample reading: one galaxy's distance and redshift for the Hubble diagram";
  await r.secs(2.6);

  state.caption = "Open Rung 4, Hubble's law";
  await r.click('[data-p="hub"]');
  await r.secs(0.8);

  state.caption = 'Pick a galaxy: click its point on the diagram';
  const [gx, gy] = await handle('hp' + GAL);
  state.zoom = [Math.max(0, gx - 200), gy - 180, 640, 360];
  await r.moveTo(gx, gy, 0.8);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  r.check.sel = await p.evaluate(() => window.__dl.S.hub.sel);
  await r.secs(1.2);
  state.zoom = null;

  state.caption = 'Match its lines: drag the comb right until the readout says the lines match';
  state.capTop = true;
  const sp = await handle('comb'), ha = await p.evaluate(() => { const s = window.__dl.G.hub.spec; return s.LX(656.281); });
  const cv = await r.box('#can');
  await r.moveTo(cv[0] + ha, sp[1] + sp[3] * 0.55, 0.8);
  const off = () => p.evaluate((i) => window.__dl.S.hub.zc - window.__dl.HUB[i].z, GAL);
  await p.mouse.down(); state.down = true; await r.tick(4);   /* across in pixel steps, then fine steps onto the catalog redshift */
  for (let i = 0; i < 300; i++) { const d = await off(); if (Math.abs(d) < 0.00006) break;
    state.ptr = [state.ptr[0] + (d < -0.001 ? 1 : d < 0 ? 0.1 : -0.1), state.ptr[1]]; await p.mouse.move(...state.ptr); await r.tick(); }
  await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
  r.check.comb = await r.text('#gComb');
  await r.secs(1.0);
  state.capTop = false;

  state.caption = 'Read its distance and your redshift';
  await r.scrollRail('#gName');
  r.check.name = await r.text('#gName'); r.check.d = await r.text('#gD'); r.check.zCat = await r.text('#gZ');
  const a = await r.box('#gName'), b = await r.box('#gComb');
  state.arrow = { rect: [a[0] - 6, a[1] - 22, b[0] + b[2] - a[0] + 12, b[1] + b[3] - a[1] + 26] };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat for at least 12 galaxies (four with Cepheids), then send them to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
