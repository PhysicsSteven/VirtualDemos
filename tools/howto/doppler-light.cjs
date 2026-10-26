// How this works: Doppler Effect and Shock Waves, worksheet "Doppler Effect for Light" (doppler-light). The first reading: Light,
// the Transverse Doppler setup (λ = 500 nm), β = 0.30, the pass paused once the light arriving left the source at about 45°.
// Expected: λ′ = λγ(1 − β cos θ); at θ = 45° that is 500 × 1.04828 × 0.78787 = 413.0 nm (key row 1: 45.0°, 413.0 nm).
// The demo records sound only, so the video ends on typing θ and λ′ into the worksheet's table.
require('./lib.cjs')({ demo: 'doppler', title: 'Doppler Effect and Shock Waves', query: '?view=flat' }, async (r) => {
  const { state, p, W } = r;
  const th = () => p.evaluate(() => parseFloat(document.getElementById('lTh').textContent));
  state.ptr = [600, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: light of 500 nm from a source passing at 0.30c, emitted at about 45°';
  await r.secs(2.6);

  state.caption = 'Choose Light, then the Transverse Doppler setup (500 nm)';
  await r.click('#mLight');
  await r.secs(0.3);
  await r.scrollRail('[data-p="transverse"]');
  await r.click('[data-p="transverse"]');
  await r.secs(0.5);

  state.caption = 'Set the source speed: drag β down to 0.300';
  const b = await r.box('#spd'), v = await p.evaluate(() => +document.getElementById('spd').value);
  await r.moveTo(b[0] + 8 + (b[2] - 16) * v / 0.99, b[1] + b[3] / 2, 0.7);
  state.zoom = [b[0] - 180, b[1] - 160, 640, 360];
  await r.dragWhile(-1, 0, async () => (await p.evaluate(() => +document.getElementById('spd').value)) > 0.305);
  for (let i = 0; i < 20; i++) { const x = await p.evaluate(() => Math.round(+document.getElementById('spd').value * 1000)); if (x === 300) break; await p.keyboard.press(x > 300 ? 'ArrowLeft' : 'ArrowRight'); await r.tick(1); }
  r.check.beta = await r.text('#spdOut');
  state.arrow = { rect: await r.box('#spdOut') };
  await r.secs(0.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Run the pass from the start. Pause when the light arriving left the source at about 45°';
  await r.click('#restart');
  await r.tick(2);
  const pl = await r.box('#play');
  await r.moveTo(pl[0] + pl[2] / 2, pl[1] + pl[3] / 2, 0.5);
  if ((await r.text('#play')) === 'Play') { state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(2); await p.mouse.up(); state.down = false; }
  for (let i = 0; i < 600 && !((await th()) >= 44.6); i++) await r.tick();
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(2); await p.mouse.up(); state.down = false;
  r.check.paused = await r.text('#play');
  await r.secs(0.6);

  state.caption = 'Read the angle at emission and the received wavelength λ′';
  await r.scrollRail('#lLam');
  const a = await r.box('#lLam'), c = await r.box('#lTh');
  state.zoom = [W - 640, Math.min(a[1], c[1]) - 120, 640, 360];
  state.arrow = { rect: [Math.min(a[0], c[0]) - 4, Math.min(a[1], c[1]) - 4, Math.max(a[0] + a[2], c[0] + c[2]) - Math.min(a[0], c[0]) + 8, Math.max(a[1] + a[3], c[1] + c[3]) - Math.min(a[1], c[1]) + 8] };
  r.check.theta = await r.text('#lTh'); r.check.lam = await r.text('#lLam');
  r.check.gamma = await r.text('#lGam');
  await r.secs(2.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Type θ and λ′ into the worksheet’s table. Repeat near 90° and 135°, then at β = 0.60 and 0.90';
  await r.moveTo(640, 400, 0.8);
  await r.secs(3.0);
});
