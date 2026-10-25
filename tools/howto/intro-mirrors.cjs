// How this works: Optics Bench, Astro 2203 worksheet "intro-mirrors" (opened with ?ws=intro-mirrors). Part 1: the Lens in white
// light setup, a flint glass (F2) lens with f = 20.00 cm at 589.3 nm, recorded at seven colors. Expected (thin lens, f ∝ 1/(n − 1),
// Schott F2 Sellmeier): f = 19.011 cm at 400 nm and 20.238 cm at 700 nm, violet 1.23 cm nearer the lens than red.
require('./lib.cjs')({ demo: 'optics-bench', title: 'Optics Bench: Lenses and Mirrors in White Light', query: '?ws=intro-mirrors', dsf: 2 }, async (r) => {
  const { state, p } = r;
  /* the recorded rows that sit clear of the caption, as one rect */
  const rowsRect = () => r.p.evaluate(() => { const q = [...document.querySelectorAll('.vd-readings tbody tr')].map((e) => e.getBoundingClientRect()).filter((b) => b.bottom < 630);
    const x = Math.min(...q.map((b) => b.left)), y = Math.min(...q.map((b) => b.top)); return [x, y, Math.max(...q.map((b) => b.right)) - x, Math.max(...q.map((b) => b.bottom)) - y]; });

  state.caption = 'Sample: Part 1, a flint glass lens in white light';
  await r.secs(2.8);

  state.caption = 'Choose Lens in white light: f = 20 cm for yellow light';
  await r.click('#presets [data-p="lenswhite"]');
  await r.secs(1.2);

  state.caption = 'Look at the spot on the screen: violet focuses nearer the lens than red, so it has a violet fringe';
  /* the "on the screen" view the bench draws above the screen, found in a frame of this setup at 1280 × 720 */
  await r.moveTo(800, 420, 0.8);
  state.zoom = [777 - 200, 280 - 112.5, 400, 225];
  await r.secs(3.6);
  state.zoom = null;

  state.caption = 'Record a reading: one row for each of seven colors, with its focal length';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  await r.scrollRail('.vd-readings .status');   /* the rows clear of the caption */
  state.arrow = { rect: await rowsRect() };
  await r.secs(3.0);
  state.arrow = null;

  state.caption = 'Send it to the worksheet and clear, then do crown glass and the mirror';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.rows = await p.evaluate(() => window.vdRows().map((x) => `${x.material} ${x.lam_nm} ${x.f_cm}`));
});
