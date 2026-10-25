// How this works: Circular Apertures and Resolution, Astro 2203 worksheet "intro-resolution". Part 1's first reading: Hubble and
// two stars (550 nm, mirror 2.40 m), the cursor at the midpoint, the stars moved closer until the brightness midway is 0.735 or
// less at the smallest distance. Expected (Airy pattern of each star, I₀ one star's peak): 0.56 ly gives Δθ = 0.56/2.0e6 = 0.2800
// µrad and I/I₀ = 0.7322; 0.55 ly gives 0.7613, too bright, so the answer is 0.56 ly. The rule: 1.22 λ/D = 1.22 × 550/2.40/1000
// = 0.2796 µrad.
require('./lib.cjs')({ demo: 'resolution', title: 'Resolving Stars with a Telescope', query: '?ws=intro-resolution' }, async (r) => {
  const { state, p, W } = r;
  const scrollTo = async (y, s) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo({ top: v, behavior: 'instant' }), y0 + (y - y0) * e); await r.tick(); } };
  const sep = () => p.evaluate(() => __rs.S.cfg.telescope.sepv);
  const mid = () => p.evaluate(() => __rs.Iexact(0));
  const thumb = sel => p.evaluate(sel => { const e = document.querySelector(sel), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);

  state.caption = 'Sample: how close two stars can be and still look like two, seen by Hubble\'s 2.40 m mirror';
  await r.secs(3.0);

  state.caption = 'Choose Hubble and two stars: 550 nm light, the cursor midway between the stars';
  await r.click('#presets [data-p="telescope"]');
  await r.secs(1.4);

  state.caption = 'Drag the distance between the stars down, watching the brightness midway on the graph';
  await scrollTo(520, 0.7);
  const cv = await r.box('#curve');
  state.zoom = [cv[0], cv[1] + 20, 900, 506];
  await r.moveTo(...(await thumb('#sSep')), 0.7);
  await r.dragWhile(-1, 0, async () => (await sep()) > 0.60);
  state.arrow = { rect: await r.box('#wrapSep .slider-head') };
  await r.secs(1.0);

  state.caption = 'Then step with the arrow keys: at 0.55 ly the middle is too bright, 0.7613';
  for (let i = 0; i < 8 && (await sep()) > 0.555; i++) { await p.keyboard.press('ArrowLeft'); await r.secs(0.45); }
  r.check.over = [await r.text('#oSep'), (await mid()).toFixed(4)];
  await r.secs(1.6);

  state.caption = 'Step back to 0.56 ly: 0.7322, the smallest distance at 0.735 or less, just resolved';
  await p.keyboard.press('ArrowRight');
  await r.secs(0.4);
  r.check.sep = [await r.text('#oSep'), (await mid()).toFixed(4)];
  r.check.read = await p.evaluate(() => [...document.querySelectorAll('#out div')].map(d => d.textContent));
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;

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

  state.caption = 'Repeat for the other mirrors and colors, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
