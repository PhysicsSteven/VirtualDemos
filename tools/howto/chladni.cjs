// How this works: Chladni Plates. The resonance survey's first reading: steel square plate (24 cm, 1.00 mm), wave driver at the
// center, swept up from 20 Hz to the first resonance it excites.
// Expected: D = Eh³/12(1 − ν²) = 18.3 N·m, √(D/ρh) = 1.527 m²/s; the free plate's ring mode (λ² = 24.27) is at
// 24.27/(2π × 0.24²) × 1.527 = 102.4 Hz, and the wave driver's 50 g moving mass on the post lowers it to 89.30 Hz in the demo. The
// lowest free mode (twisting, 56.8 Hz) has a node at the center, so a center drive skips it.
require('./lib.cjs')({ demo: 'chladni', title: 'Chladni Plates', dsf: 2 }, async (r) => {
  const { state, W, p } = r;
  const can = await r.box('#can');
  const thumb = (sel) => p.evaluate((s) => { const e = document.querySelector(s), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);
  const view = [can[0], can[1] - 10, 520, 292.5];   /* the plate seen from above and the response plot up to the peak */

  state.caption = 'Sample reading: the first resonance of a steel square plate 1.00 mm thick, driven at the center';
  await r.secs(3.0);

  state.caption = 'Look down on the sand: switch the view to Sand';
  await r.click('#viewSeg button:first-child');
  await r.secs(1.0);

  state.caption = 'Start low: drag the Frequency slider to its left end';
  await r.moveTo(...(await thumb('#freq')), 0.7);
  const fz = await r.box('#freq');
  await r.dragTo(fz[0] - 6, fz[1] + fz[3] / 2, 0.9);
  r.check.f0 = await r.text('#freqOut');
  await r.secs(0.6);

  state.caption = 'Sprinkle fresh sand, then press Next resonance and watch the sand settle';
  await r.click('#sprinkle');
  await r.secs(0.4);
  await r.click('#nextRes');
  state.zoom = view;
  await r.secs(3.2);
  r.check.f = await r.text('#freqOut');
  r.check.mode = await r.text('#rMode');
  state.zoom = null;
  state.arrow = { rect: await r.box('#freqOut') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Record a reading. It goes into the table';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Sketch the pattern, find the next four resonances, then send the scan to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map(td => td.textContent));
});
