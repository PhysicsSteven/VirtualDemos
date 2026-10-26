// How this works: Charged Particles in Matter. The worksheet's first reading: the stopping power and CSDA range of 10 MeV
// protons in water (Stopping power view). Expected from the Bethe formula with PSTAR's water (I = 75.0 eV): S/ρ = 45.95 MeV cm²/g,
// R = 0.1192 g/cm² (PSTAR's range is 0.123 g/cm²; the model leaves out the last 1 MeV, about 0.0025 g/cm²).
require('./lib.cjs')({ demo: 'charged-particles', title: 'Charged Particles in Matter' }, async (r) => {
  const { state, p } = r;
  const row = (n) => r.box(`#out > :nth-child(${n})`);

  state.caption = 'Sample reading: the stopping power and range of 10 MeV protons in water';
  await r.secs(2.6);

  state.caption = 'Choose the Stopping power curves setup';
  await r.click('#presets [data-p="stop"]');
  await r.secs(1.0);

  state.caption = 'Set the energy: click the energy readout and type 10';
  await r.click('#oE');
  await r.tick(6);
  for (const k of ['1', '0']) { await p.keyboard.press(k); await r.tick(5); }
  await p.keyboard.press('Enter'); await r.tick(4);
  r.check.E = await r.text('#oE');
  state.arrow = { rect: await r.box('#oE') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'The marked point moves to 10 MeV on the stopping power curve';
  const sc = await r.box('#scene');
  state.zoom = [sc[0], sc[1], sc[2], sc[2] * 9 / 16];
  await r.moveTo(sc[0] + sc[2] * 0.3, sc[1] + sc[3] * 0.5, 0.6);
  await r.secs(2.0);
  state.zoom = null;

  state.caption = 'Read the mass stopping power S/ρ and the CSDA range R';
  await r.scrollRail('#out > :nth-child(4)');
  r.check.S = await p.evaluate(() => window.vdReadingRow().S_MeV_cm2_g);
  r.check.R = await p.evaluate(() => window.vdReadingRow().R_g_cm2);
  const a = await row(4), b = await row(6);
  state.arrow = { rect: [a[0], a[1], a[2], b[1] + b[3] - a[1]] };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading';
  await p.evaluate(() => document.querySelector('.vd-readings .vd-rec').scrollIntoView({ block: 'center' })); await r.tick(2);
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Repeat at each energy, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows ? window.vdRows()[0] : null));
});
