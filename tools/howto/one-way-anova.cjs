// How this works: One Way ANOVA: Gaps, Spreads and False Alarms. The worksheet's part A: Three ways to time a pendulum (k = 3,
// n = 8, s = 6 ms), the gap typed as 4 ms and recorded, then 8 ms. Expected: F = 8·4²/36 = 3.556 (p 0.0468), then F = 14.22.
require('./lib.cjs')({ demo: 'anova', title: 'One Way ANOVA', query: '?ws=one-way-anova' }, async (r) => {
  const { state, p } = r;
  state.caption = 'Sample reading: F grows with the gap between the group means';
  await r.secs(2.2);
  const pm = await r.box('#paneM');
  state.caption = 'Three groups of eight timings; the squares are the mean squares between and within groups';
  state.zoom = [pm[0], pm[1], pm[2], pm[2] * 9 / 16];
  await r.secs(3.4);
  state.zoom = null;
  await p.evaluate(() => window.scrollTo(0, document.getElementById('shelf').getBoundingClientRect().top + window.scrollY - 380)); await r.tick(2);
  state.caption = 'The gap is 4 ms: read F and the p value in the table, then press Record reading';
  state.arrow = { rect: await r.box('#atab') };
  await r.secs(2.6);
  state.arrow = null;
  r.check.F4 = await p.evaluate(() => window.__an.stats().F);
  await r.scrollRail('.vd-rec'); await r.click('.vd-rec'); await r.secs(0.8);
  state.caption = 'Drag the Gap between means slider to 8 ms and watch the between groups square grow';
  await p.evaluate(() => { const e = document.getElementById('sGap'); for (let i = 1; i <= 20; i++) setTimeout(() => { e.value = 4 + 4 * i / 20; e.dispatchEvent(new Event('input')); }, i * 90); });
  await r.secs(3.6);
  r.check.F8 = await p.evaluate(() => window.__an.stats().F);
  state.caption = 'Record again; then do 0, 2, 6 and 10 ms and send the readings to the worksheet';
  await r.scrollRail('.vd-rec'); await r.click('.vd-rec');
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => window.vdRows().map((x) => [x.gap, x.spread, x.F, x.p_value].join(' | ')));
});
