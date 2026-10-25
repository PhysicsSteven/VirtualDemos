// How this works: Doppler Effect and Shock Waves. A moving source scan reading: the Ambulance passing setup, 30 m/s, 700 Hz, observer
// at rest, paused soon after the first sound arrives while the ambulance still heads in. Expected: f′ = f/(1 − v_line/v) with v = 343.2 m/s
// and v_line the part of the ambulance's velocity along the line to the observer when it sent this sound (the reading's speed).
require('./lib.cjs')({ demo: 'doppler', title: 'Doppler Effect and Shock Waves' }, async (r) => {
  const { state, p, W } = r;
  const pane = await r.box('#pane');

  state.caption = 'Sample reading: an ambulance at 30 m/s heading toward a listener at rest, sounding 700 Hz';
  await r.secs(3.0);

  state.caption = 'The demo opens on the Ambulance passing setup: 30 m/s, 700 Hz, the observer at rest';
  const chip = await r.box('#presets [data-p="ambulance"]');
  await r.moveTo(chip[0] + chip[2] / 2, chip[1] + chip[3] / 2, 0.7);   /* choosing a setup would start the run, so it is only pointed at */
  r.check.pressed = await p.evaluate(() => document.querySelector('#presets [data-p="ambulance"]').getAttribute('aria-pressed'));
  r.check.playBtn = await r.text('#play');
  r.check.setup = [await r.text('#spdOut'), await r.text('#ospdOut').catch(() => ''), (await r.text('#card')).match(/\d+ Hz/)[0]].join(' | ');
  state.arrow = { rect: await r.box('#spdOut') };
  await r.secs(1.2);
  state.arrow = { rect: chip };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Play, then pause while the ambulance still heads toward the observer';
  await r.click('#play');
  const pl = await r.box('#play');
  await r.moveTo(pl[0] + pl[2] / 2 + 60, pl[1] + pl[3] / 2 + 70, 0.5);
  state.zoom = [pane[0], pane[1] + 30, 800, 450];
  for (let i = 0; i < 300 && (await r.text('#rF')) === '—'; i++) await r.tick();   /* the first sound has already arrived when the demo opens */
  await r.secs(1.0);
  await r.click('#play');
  r.check.paused = await r.text('#play');
  await r.secs(0.8);
  state.zoom = null;

  state.caption = 'Read the frequency the observer hears';
  await r.scrollRail('#recSound');
  r.check.f = await r.text('#rF');
  r.check.ratio = await r.text('#rRatio');
  r.check.theta = await r.text('#rTh');
  r.check.ago = await r.text('#rAgo');
  r.check.read = await p.evaluate(() => window.vdReadingRow());
  state.arrow = { rect: await r.box('#recSound .readout') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Record the reading. The speed it stores is the part along the line to the observer';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at other speeds, including zero, then send the scan to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr td')].map(td => td.textContent));
});
