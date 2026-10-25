// How this works: Units, Scales and Estimates, Astro 2203 worksheet "intro-scale". Its first row: Mercury's average distance from
// the Sun, read in Scale of things after zooming out from the fingertip. Expected: Mercury's label reads 0.3871 au (JPL mean
// element a = 0.38709927 au to four figures). The Go to stop "Earth's orbit (diameter)" opens the view 1.1 × 10¹² m wide; the
// planets sit where they are on 23 October 2026, so the label's place is fixed. This worksheet is typed by hand (no Export).
require('./lib.cjs')({ demo: 'units', title: 'Units, Scales and Estimates: the Scale of the Solar System', query: '?ws=intro-scale' }, async (r) => {
  const { state, p } = r;
  const thumb = sel => p.evaluate(sel => { const e = document.querySelector(sel), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);
  const zoomNow = () => p.evaluate(() => +document.querySelector('#sZoom').value);

  state.caption = 'Sample: Mercury\'s average distance from the Sun, the first row on the worksheet';
  await r.secs(3.0);

  state.caption = 'Zoom out: drag Width of the view to the right';
  await r.moveTo(...(await thumb('#sZoom')), 0.7);
  await r.dragWhile(1, 0, async () => (await zoomNow()) < 11.4);
  await r.secs(0.8);

  state.caption = 'Or pick a stop from Go to: Earth\'s orbit';
  await r.click('#sGo');
  await p.selectOption('#sGo', '17');
  await r.secs(2.4);
  r.check.width = await r.text('#oZoom');

  state.caption = 'Each planet is labeled with its average distance: Mercury, 0.3871 au';
  await r.moveTo(560, 560, 0.7);
  state.zoom = [300, 300, 560, 315];
  state.arrow = { rect: [516, 502, 162, 18] };
  await r.secs(3.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Write it in the table, then multiply by 1.496 × 10⁸ km and by 8.317 min';
  await r.secs(3.2);

  state.caption = 'Zoom on out past Neptune for the rest of the planets, Pluto and Voyager 1';
  await r.moveTo(...(await thumb('#sZoom')), 0.7);
  await r.dragWhile(1, 0, async () => (await zoomNow()) < 13.3);
  await r.secs(2.2);
  r.check.end = await r.text('#oZoom');
});
