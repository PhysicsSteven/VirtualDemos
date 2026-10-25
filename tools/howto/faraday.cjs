// How this works: Faraday's and Lenz's Laws. The generator run's first setting (N = 100, B = 0.20 T, A = 100 cm², R = 100 Ω,
// ω = 6.3 rad/s, Blind on): pause the running generator, step on with Advance and pause, capture one point.
// Expected at any t: Φ = BA cos ωt (peak 2.000 mWb), EMF averaged over the last 1 ms ≈ NBAω sin ωt (peak 1.260 V), I = EMF/R.
require('./lib.cjs')({ demo: 'faraday', title: "Faraday's and Lenz's Laws" }, async (r) => {
  const { state, p, W } = r;

  state.caption = 'Sample reading: one point of the generator turning at 6.3 rad/s';
  await r.secs(3.0);

  state.caption = 'Choose the Generator setup: N = 100, B = 0.20 T, A = 100 cm², R = 100 Ω';
  await r.click('#presets [data-p="gen"]');
  await r.tick(4);
  await r.scrollRail('#motionH');
  const a = await r.box('#motionSl'), b = await r.box('#setupSl');
  state.arrow = { rect: [a[0] - 4, a[1] - 4, a[2] + 8, b[1] + b[3] - a[1] + 8] };
  r.check.set = [await r.text('#o_w'), await r.text('#o_N'), await r.text('#o_B'), await r.text('#o_A'), await r.text('#o_Ri')].join(', ');
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Open the Lab notebook. Pause, then step on 0.1 s with Advance and pause';
  await r.scrollRail('#meas');
  await r.click('#meas ~ details.fold > summary');
  await r.tick(3);
  await r.scrollRail('#labAdvance');
  await r.click('#play');
  await r.tick(4);
  r.check.paused = await r.text('#tclock');
  await r.click('#labAdvance');
  await r.tick(4);
  r.check.t = await r.text('#tclock');
  state.arrow = { rect: await r.box('#tclock') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Read the angle, the flux through one turn, the EMF and the current';
  await r.scrollRail('#meas');
  state.arrow = { rect: await r.box('#meas') };
  r.check.meas = (await r.text('#meas')).replace(/\s+/g, ' ');
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Capture the measurement. It goes into the notebook';
  await r.scrollRail('#labCapture');
  await r.click('#labCapture');
  await r.tick(4);
  await r.scrollRail('#labRows');
  const tb = await r.box('#labRows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#labRows tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Step and capture over two cycles, then export to the worksheet';
  await r.scrollRail('#labAdvance');
  const ex = await r.box('#labExport');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#labRows tr td')].map(td => td.textContent));
  r.check.exact = await p.evaluate(() => { const w = window.__fd && window.__fd.W; return w ? { t: w.t } : null; });
});
