// How this works: Velocity, Momentum and Energy Near c, worksheet "Bertozzi's Electrons" (relativistic-energy). The first
// readings: Bertozzi's electrons (8.400 m flight, magnet 0.05 T) at 0.01 MV and 0.02 MV. Expected: K = 0.01 MeV gives
// γ = 1 + 0.01/0.510999 = 1.01957, v = 0.194985c, t = 8.4/(0.194985c) = 143.70 ns, r = p/eB = 0.68 cm; 0.02 MV gives
// v = 0.271874c, t = 103.06 ns, r = 0.96 cm (key rows 1 and 2).
require('./lib.cjs')({ demo: 'relativistic-motion', title: 'Velocity, Momentum and Energy Near c' }, async (r) => {
  const { state, p, W } = r;
  const at = (sel) => p.evaluate((s) => { document.querySelector(s).scrollIntoView({ block: 'center' }); }, sel);
  const record = async (s) => {
    await at('.vd-rec'); await r.tick(2);
    await r.click('.vd-rec');
    await r.tick(4);
    const t = await r.box('.vd-readings table');
    state.zoom = [W - 600, t[1] - 150, 600, 337.5];
    state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  const volts = async (want) => {
    await at('#sAcc'); await r.tick(2);
    const b = await r.box('#sAcc'), v = await p.evaluate(() => +document.getElementById('sAcc').value);
    await r.moveTo(b[0] + 8 + (b[2] - 16) * v / 18, b[1] + b[3] / 2, 0.7);
    state.zoom = [Math.max(0, b[0] - 200), b[1] - 200, 640, 360];
    const got = await r.dragUntil(v > 0 && want === '0.01 MV' ? -1 : 1, 0, '#oAcc', want);
    state.arrow = { rect: await r.box('#oAcc') };
    await r.secs(0.7);
    state.arrow = null; state.zoom = null;
    return got;
  };
  const fire = async () => {
    await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
    await r.click('#go');
    await r.moveTo(640, 520, 0.5);
    await r.secs(1.6);
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: electrons accelerated through 0.01 MV and 0.02 MV, timed over 8.400 m';
  await r.secs(3.0);

  state.caption = 'Choose the Bertozzi’s electrons setup';
  await r.click('[data-p="bertozzi"]');
  await r.secs(0.8);

  state.caption = 'Set the accelerating voltage: drag it down to 0.01 MV';
  r.check.v1 = await volts('0.01 MV');

  state.caption = 'Fire a bunch. The pickups time its flight; the magnet bends it';
  await fire();

  state.caption = 'Record the flight time and bend radius';
  await record(1.8);

  state.caption = 'Move up one step to 0.02 MV, fire again and record';
  r.check.v2 = await volts('0.02 MV');
  await fire();
  await record(1.8);

  state.caption = 'Repeat at every voltage up to 20 MV, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
