// How this works: Radioactive Decay, Counting view, worksheet "Counting Statistics". Part A from a freshly opened page (random
// draw set 1): R = 3 counts/s, Δt = 1 s; Play for a few counting times, Pause, Reset, Count 100 times, the counts against the
// Poisson, then Record reading.
// Expected: n = 100, mean count 3.020, s = 1.912, s²/x̄ = 1.211, χ² 8.18, df 5, p = 0.147 (key row 1)
require('./lib.cjs')({ demo: 'radioactive-decay', title: 'Radioactive Decay', query: '?view=count&ws=counting-statistics' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 380]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample: count a steady source for Δt = 1 s, again and again';
  await r.secs(2.4);
  state.caption = '1. Play: each count flashes in the tube and drops into the histogram';
  await r.click('#cntPlay');
  await r.secs(4.4);
  state.caption = '2. Pause, Reset, then Count 100 times';
  await r.click('#cntPlay'); await r.secs(0.6);
  await r.click('#cntReset'); await r.secs(0.6);
  await r.click('#cnt100');
  await r.secs(3.2);
  state.caption = '3. The counts against the Poisson: mean, s, s²/x̄ and χ²';
  await r.scrollRail('#cntOut');
  const o = await r.box('#cntOut'); state.arrow = { rect: o };
  await r.secs(3.8); state.arrow = null;
  r.check.out = await p.evaluate(() => document.getElementById('cntOut').innerText.replace(/\n/g, ' | '));
  state.caption = '4. Record reading, then copy the table of cells';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
