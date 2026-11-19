// How this works: Surface Tension and Capillary Rise (Surface Tension and Capillarity demo), Part 1, the first reading.
// Expected: water at 20 °C in glass tubes of radius 0.25, 0.50 and 1.00 mm; h = 2γ/(ρgr) = 59.37, 29.68 and 14.84 mm (readouts 5.94 cm, 2.97 cm, 1.48 cm).
require('./lib.cjs')({ demo: 'surface-tension', title: 'Surface Tension and Capillary Rise' }, async (r) => {
  const { state, p, W } = r;
  state.caption = 'Sample reading: water in glass tubes of radius 0.25, 0.50 and 1.00 mm';
  await r.secs(3.0);

  state.caption = 'Open Lab and tick Blind, so the predicted heights are hidden';
  await r.scrollRail('#labBlind');
  const open = await p.evaluate(() => document.getElementById('labBlind').closest('details').open);
  if (!open) { await r.click('details.fold > summary'); await r.tick(6); await r.scrollRail('#labBlind'); await r.tick(2); }
  await r.click('label:has(#labBlind)');
  state.arrow = { rect: await r.box('label:has(#labBlind)') };
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Press the setup Water climbs thin tubes';
  await r.scrollRail('#presets [data-p="water3"]');
  await r.click('#presets [data-p="water3"]');
  state.arrow = { rect: await r.box('#presets [data-p="water3"]') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Set Time to 10 times faster';
  const sp = await r.box('#selSpeed');
  await r.moveTo(sp[0] + sp[2] / 2, sp[1] + sp[3] / 2, 0.7);
  await p.selectOption('#selSpeed', '10');
  state.arrow = { rect: sp };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Press Play and wait until the run stops by itself';
  await r.click('#play');
  for (let i = 0; i < 300 && (await r.text('#play')) !== 'Play'; i++) await r.tick();
  await r.secs(1.0);

  state.caption = 'Read the final heights: 5.94 cm in the narrowest tube';
  await r.scrollRail('#out');
  const o = await r.box('#out');
  state.zoom = [W - 560, Math.max(0, o[1] - 20), 560, 315];
  state.arrow = { rect: o };
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  await r.secs(2.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Press Record reading: one row for each tube';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: tb };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;
  r.check.rows = await p.evaluate(() => (window.vdRows ? window.vdRows() : []).map((x) => `${x.tube} ${x.r_mm} mm ${x.h_mm} mm`));

  state.caption = 'Repeat at 100 μm and 150 μm, then Export to worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
});
