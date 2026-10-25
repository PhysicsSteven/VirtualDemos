// How this works: Timbre and Harmonics. The worksheet's first reading: Sawtooth wave at f₁ = 220 Hz, harmonics 1 to 6 recorded.
// Expected: aₙ = 1/n, so harmonic n at n × 220 Hz and 20 log₁₀(1/n) dB: 0, −6.0, −9.5, −12.0, −14.0, −15.6 dB; the 16 harmonics give
// rms = √(½ Σ 1/n²) = 0.890 bar units; the waveform repeats every 1/220 s = 4.55 ms.
require('./lib.cjs')({ demo: 'timbre', title: 'Timbre and Harmonics' }, async (r) => {
  const { state, W, p } = r;
  const can = await r.box('#can');

  state.caption = 'Sample reading: harmonics 1 to 6 of a sawtooth wave at f₁ = 220 Hz';
  await r.tick(30);
  state.arrow = { rect: await r.box('#clock') }; await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Choose the Sawtooth wave preset. The bars show each harmonic';
  await r.click('#presets [data-p="saw"]');
  r.check.f1 = await r.text('#clock');
  state.zoom = [can[0], can[1] + can[3] - 340, 960, 540];
  await r.secs(2.2);
  state.zoom = null;

  state.caption = 'Read each harmonic\'s frequency and level in Strongest partials';
  await r.scrollRail('#ptab');
  const pt = await r.box('#ptab');
  state.zoom = [W - 600, pt[1] - 90, 600, 337.5];
  state.arrow = { rect: pt };
  await r.secs(2.6);
  r.check.rep = await r.text('#rRep'); r.check.ptab = (await r.text('#ptab')).replace(/\s+/g, ' ');

  state.caption = 'Read the repetition period too: one period of f₁, 1/220 Hz';
  state.arrow = { rect: await r.box('#rRep') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record harmonics 1 to 6: six rows go into your readings';
  await r.scrollRail('#recTone');
  await r.click('#recTone');
  await r.tick(4);
  r.check.status = await r.text('#capStatus'); r.check.rms = await r.text('#rRms');
  const cs = await r.box('#capStatus');
  state.zoom = [W - 400, r.H - 225, 400, 225];   /* the status line sits near the foot of the page: a smaller zoom keeps it above the caption */
  state.arrow = { rect: cs };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for Square and Triangle, then send the readings to the worksheet';
  const ex = await r.box('#toWs');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
});
