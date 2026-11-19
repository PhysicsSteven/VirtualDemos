// How this works: Chi-Square Tests: A Loaded Die, Decay Counts and a Table (Chi-Square Tests). The worksheet's part A: A loaded
// die, 60 rolls on draw set 1, the cells recorded and sent to Table 1, then Simulate 1,000 for the simulated p value.
// Expected: draw set 1 gives 7, 11, 8, 9, 9 and 16 for faces 1 to 6, χ² = 5.2000, df = 5, p = 0.3920, simulated p 0.3910.
require('./lib.cjs')({ demo: 'chi-square-tests', title: 'Chi-Square Tests', query: '?ws=ws-chi-square' }, async (r) => {
  const { state, p } = r;
  state.caption = 'Sample reading: is this die fair? 60 rolls of a die loaded toward six, tested with χ²';
  await r.secs(2.4);

  state.caption = 'Press the setup A loaded die (simulated); check that it says Draw set 1';
  await r.scrollRail('#presets [data-p="loaded"]');
  await r.click('#presets [data-p="loaded"]');
  await r.secs(0.6);
  state.arrow = { rect: await r.box('#drawLabel') };
  await r.secs(1.6);
  state.arrow = null;

  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  const cells = await r.box('#cells');
  state.caption = 'Filled bars are the rolls, outlined bars the 10 a face a fair die expects; each square is (O − E)²/E';
  state.zoom = [cells[0] - 10, cells[1] - 10, (cells[3] + 20) * 16 / 9, cells[3] + 20];
  await r.secs(3.4);
  state.zoom = null;
  state.caption = 'The squares add up to χ²; the box under the bars gives df, the p value and the decision';
  await p.evaluate(() => document.getElementById('testBox').scrollIntoView({ block: 'center' })); await r.tick(2);
  state.arrow = { rect: await r.box('#testBox') };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Press Record reading, then Export to worksheet (Table 1), then Clear';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(1.0);
  await r.click('.vd-export');
  await r.secs(0.8);
  await r.click('.vd-clear');
  await r.secs(0.6);

  await p.evaluate(() => window.scrollTo(0, 0)); await r.tick(2);
  state.caption = 'Press Simulate 1,000: fair dice rolled 60 times, their χ² values fill the histogram under the curve';
  await r.click('#sim1000');
  await r.secs(0.4);
  await p.evaluate(() => document.getElementById('nullc').scrollIntoView({ block: 'center' })); await r.tick(2);
  const nul = await r.box('#nullc');
  state.zoom = [nul[0] - 10, nul[1] - 10, (nul[3] + 20) * 16 / 9, nul[3] + 20];
  await r.secs(3.2);
  state.zoom = null;
  r.check.R = await p.evaluate(() => { const S = window.__cs.S; return { obs: Array.from(S.d.obs), chi2: S.R.chi2, df: S.R.df, p: S.R.p, simP: window.__cs.simPNow() }; });
  state.caption = 'Copy χ², df, p value and Simulated p value from the Readouts into Table 5';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.6);
});
