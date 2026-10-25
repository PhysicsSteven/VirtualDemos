// How this works: Rotational Dynamics. The first empty table drop: m = 0.020 kg, r = 2.0 cm, bearing friction on, h = 0.500 m.
// Expected (I₀ = 2.00 × 10⁻³ kg·m², τ_f = 4.0 × 10⁻⁴ N·m): a = (mgr − τ_f)r/(I₀ + mr²) = 0.0351 m/s², t = √(2h/a) = 5.338 s.
require('./lib.cjs')({ demo: 'rotational-dynamics', title: 'Rotational Dynamics' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');

  state.caption = 'Sample reading: the empty table, 20 g hanging, 2.0 cm spool, bearing friction on';
  await r.secs(3.0);

  state.caption = 'Hang 20 g: take all the masses off, then hang 10 g and 5 g on the 5 g hanger';
  const tray = await r.box('#tray');
  state.zoom = [tray[0] + tray[2] - 560, tray[1] - 20, 560, 315];
  await r.click('#takeAll'); await r.tick(8);
  await r.click('#addMass [data-g="10"]'); await r.tick(8);
  await r.click('#addMass [data-g="5"]'); await r.tick(4);
  state.arrow = { rect: await r.box('#massList') };
  r.check.m = await r.text('#massList');
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Turn on bearing friction. The spool stays at 2.0 cm';
  await r.scrollRail('#rSeg');
  await r.click('#fric');
  r.check.fric = await r.p.evaluate(() => document.querySelector('#fric').checked);
  state.arrow = { rect: await r.box('#rSeg [aria-pressed="true"]') };
  r.check.spool = await r.text('#rSeg [aria-pressed="true"]');
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Release. The timer runs while the mass falls the 0.500 m';
  await r.click('#go');
  await r.moveTo(can[0] + can[2] / 2, can[1] + can[3] - 40, 0.6);
  state.zoom = [can[0], can[1] + 60, 800, 450];   /* the bench timer, the table and the falling mass */
  for (let i = 0; i < 400 && (await r.text('#go')) !== 'Release'; i++) await r.tick();
  r.check.t = await r.p.evaluate(() => document.querySelector('#out dd').textContent);
  await r.secs(0.8);
  state.zoom = null;
  state.arrow = { rect: await r.box('#out div') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each mass, then send the table to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
