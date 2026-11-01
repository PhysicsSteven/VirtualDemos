// How this works: Telescope Aberrations, Astro 2203 worksheet "intro-aberrations". Part 1's first reading: the spherical mirror
// (200 mm, f/6, 550 nm), the camera focus moved inward until the Strehl ratio is highest. Expected (from the key capture, the full
// trace and diffraction): best focus −0.362 mm, Strehl ratio 0.243, half light diameter 3.24″, wavefront error 0.378 waves; the
// parabola at 0 mm gives 1. Third order theory: W = D/(512 N³) = 3.29 waves at the edge.
require('./lib.cjs')({ demo: 'telescope-aberrations', title: 'Fixing a Blurry Telescope', query: '?setup=sphere&ws=intro-aberrations' }, async (r) => {
  const { state, p, W } = r;
  const scrollTo = async (y, s) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo({ top: v, behavior: 'instant' }), y0 + (y - y0) * e); await r.tick(); } };
  const focus = () => p.evaluate(() => __ta.S.focus);
  const strehl = () => p.evaluate(() => __ta.R.strehl);

  state.caption = 'Sample: the sharpest star a spherical mirror can give (200 mm at f/6, green light)';
  await r.secs(3.0);

  state.caption = 'At the focus of the rays near the center, the star is a wide blur: a low Strehl ratio';
  const pn = await r.box('#pane');
  state.arrow = { rect: [pn[0] + 0.37 * pn[2], pn[1], 0.62 * pn[2], pn[3]] };   /* the star's picture, its Strehl ratio at the bottom */
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Move the camera focus toward the mirror, watching the Strehl ratio rise';
  const fy = (await r.box('#sFocus'))[1];
  if (fy > 600) await scrollTo(fy - 420, 0.6);
  state.arrow = { rect: await r.box('#sFocus') };
  r.check.slide = await r.slide('#sFocus', focus, -0.362, 0.001, 0.03);
  state.arrow = null;
  await r.secs(0.6);

  state.caption = 'The best focus: −0.362 mm, Strehl ratio 0.24, the highest peak. One step either way is lower';
  for (const k of ['ArrowLeft', 'ArrowRight', 'ArrowRight', 'ArrowLeft']) { await p.keyboard.press(k); await r.secs(0.5); }
  r.check.best = [await focus(), (await strehl()).toFixed(3)];
  state.arrow = { rect: await r.box('.curvebox') };   /* the peak, compared with a perfect telescope's */
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Record the reading';
  await scrollTo(0, 0.5);
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at f/8 and f/12, try a parabola, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
