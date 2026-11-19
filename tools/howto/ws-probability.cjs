// How this works: Dice and Cards: Predict, Simulate, Compare (Chance Lab). The worksheet's part A: Ten cards with replacement,
// Run 100 on draw set 1, the Random variable rows recorded and sent to Table 1.
// Expected: draw set 1 gives 5, 16, 21, 35, 19 and 4 trials with 0 to 5 diamonds, Average x̄ 2.5900 and Sample SD s 1.2235.
require('./lib.cjs')({ demo: 'chance-lab', title: 'Chance Lab', query: '?ws=ws-probability' }, async (r) => {
  const { state, p } = r;
  state.caption = 'Sample reading: the number of diamonds in ten cards drawn with replacement, 100 times';
  await r.secs(2.4);

  state.caption = 'Press the setup Ten cards with replacement';
  await r.scrollRail('#presets [data-p="cardsW"]');
  await r.click('#presets [data-p="cardsW"]');
  await r.secs(1.2);
  state.caption = 'Check that the panel says Draw set 1';
  state.arrow = { rect: await r.box('#drawLabel') };
  await r.secs(1.8);
  state.arrow = null;

  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  state.caption = 'Press Run 100: filled bars are your trials, outlined bars P(x)';
  await r.click('#run100');
  await r.secs(0.4);
  const bars = await r.box('#bars');
  state.zoom = [bars[0] - 20, bars[1] - 40, (bars[3] + 80) * 16 / 9, bars[3] + 80];
  await r.secs(3.0);
  state.zoom = null;
  r.check.freq = await p.evaluate(() => JSON.stringify([...window.__cl.S.T.freq].sort((a, b) => a[0] - b[0])));
  r.check.stats = await p.evaluate(() => JSON.stringify(window.__cl.sampleStats(window.__cl.S.T)));

  state.caption = 'Average x̄ and Sample SD s are in the Readouts';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Press Record reading: one row for each number of diamonds x';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(1.6);
  state.caption = 'Then Export to worksheet sends the rows to Table 1; press Clear before the next setup';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
});
