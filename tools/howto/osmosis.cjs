// How this works: Diffusion and Osmosis, Part 1's first reading: Glucose spreads in water, played for about 4 s on the screen,
// paused and recorded. Expected: t about 1.0 s (1 s on the screen = 0.233 s) and a simulated x_rms near √(2Dt) = 37 µm
// (D = 6.7 × 10⁻¹⁰ m²/s); the molecules are a random walk, so x_rms scatters by a few percent.
require('./lib.cjs')({ demo: 'osmosis', title: 'Diffusion and Osmosis' }, async (r) => {
  const { state, p, W } = r;
  state.caption = 'Sample reading: glucose molecules spreading from a line in water';
  await r.secs(3.0);

  state.caption = 'Press Glucose spreads in water under Setups';
  await r.scrollRail('#presets [data-p="glucose"]');
  await r.click('#presets [data-p="glucose"]');
  await r.secs(1.0);
  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);

  state.caption = 'Press Play and watch the molecules spread';
  await r.click('#play');
  await r.secs(3.6);

  state.caption = 'Press Pause after about 4 s, and read the clock and x_rms';
  await r.click('#play');
  await r.secs(1.4);
  r.check.t = await r.text('#clock');
  r.check.xrms = await p.evaluate(() => { const x = [...document.querySelectorAll('#out dt')].find((t) => /x_rms/.test(t.textContent)); return x ? x.nextElementSibling.textContent : null; });

  state.caption = 'Press Record reading: the table stores t and x_rms';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: tb };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;
  r.check.rows = await p.evaluate(() => (window.vdRows ? window.vdRows() : []).map((x) => `${x.t_s} s ${x.xrms_sim_um} um`));

  state.caption = 'Play, pause and record every 4 s until it stops, then Export to worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
});
