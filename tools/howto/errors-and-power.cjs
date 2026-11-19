// How this works: Type I Errors, Type II Errors and Power (Hypothesis Tests). The worksheet's part A: the Pendulum g setup with
// H₀ true (truth 9.81 m/s², n = 10, two tailed), Play runs 1,000 studies, the tally is read at α = 0.05 and a reading recorded.
// Expected: 51 of 1,000 studies reject H₀ at α = 0.05 (Draw 1), a fraction 0.051, near α.
require('./lib.cjs')({ demo: 'hypothesis-tests', title: 'Hypothesis Tests', query: '?ws=errors-and-power' }, async (r) => {
  const { state, p } = r;
  state.caption = 'Sample reading: how often a test rejects a true null hypothesis';
  await r.secs(2.2);
  state.caption = 'Your sample on top; below, the null distribution with your t and the shaded p value';
  const pa = await r.box('#paneA');
  state.zoom = [pa[0], pa[1], pa[2], pa[2] * 9 / 16];
  await r.secs(3.0);
  state.zoom = null;
  state.caption = 'The truth is 9.81 m/s², so H₀ is true. Press Play to run 1,000 studies like yours';
  await r.click('#play');
  await p.evaluate(() => window.scrollTo(0, document.getElementById('paneB').getBoundingClientRect().top + window.scrollY - 200)); await r.tick(2);
  await r.secs(6.0);
  state.caption = 'Colored bars rejected H₀: every one is a Type I error. Read the tally under the picture';
  state.arrow = { rect: await r.box('#tally') };
  await r.secs(3.0);
  state.arrow = null;
  r.check.tally = await p.evaluate(() => document.getElementById('tally').textContent);
  state.caption = 'Press Record reading, then try α = 0.10 and 0.01: the same studies are recounted';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => window.vdRows().map((x) => [x.alpha, x.studies, x.rejected, x.fraction].join(' | ')));
});
