// How this works: Falling Ball Viscometer. The first row of the slow flow scan: a 1.0 mm glass ball (2500 kg/m³) in glycerol
// (1261 kg/m³, η = 1.41 Pa·s) in the 100 mm tube, timed between marks 0.200 m apart, played at ×100.
// Expected: Stokes v = (ρb − ρf) g d²/(18η) = 0.4789 mm/s; the wall factor for d/D = 0.010 is K = 1.021, so v = 0.469 mm/s
// and t = 0.200 m / v = 426 s (the gate times are physical seconds whatever the playback speed).
require('./lib.cjs')({ demo: 'viscometer', title: 'Falling Ball Viscometer' }, async (r) => {
  const { state, p } = r;

  state.caption = 'Sample reading: a 1.0 mm glass ball falling through glycerol';
  await r.secs(2.6);

  state.caption = 'Pick glass, the 1.0 mm ball and the 100 mm tube';
  await r.click('#ballSeg [data-b="glass"]');
  await r.click('#ballBox [data-d="1"]');
  await r.click('#tubeSeg [data-t="0.1"]');
  state.arrow = { rect: await r.box('#ballNow') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Play at ×100 and drop the ball. The timer runs from mark A to mark B';
  await r.click('#speedSeg [data-s="100"]');
  await r.click('#go');
  const sc = await r.box('#scene');
  state.zoom = [sc[0], sc[1], 720, 405];   /* the timer and the tube */
  for (let i = 0; i < 600 && (await p.evaluate(() => /—/.test([...document.querySelectorAll('#out div')].find(d => /Timer A to B/.test(d.textContent)).textContent))); i++) await r.tick();
  r.check.t = await p.evaluate(() => [...document.querySelectorAll('#out div')].find(d => /Timer A to B/.test(d.textContent)).textContent);
  await r.secs(1.4);
  state.zoom = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [r.W - 600, Math.min(tb[1] - 150, r.H - 337.5), 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for 1.5, 2.0 and 2.5 mm, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
