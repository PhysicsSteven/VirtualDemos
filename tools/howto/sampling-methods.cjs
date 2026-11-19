// How this works: How You Sample Matters (Sampling Lab). The worksheet's part B, first row: the setup Simple random: pocket change,
// one sample drawn and ringed in the hall, then Draw 100, the readouts read, and the reading recorded.
// Expected: draw set 1, Coins in pockets: population mean μ = 22.97 ¢; 101 simple random samples of 20 with a mean of the x̄'s within
// about 1 ¢ of μ and a spread s of the x̄'s near σ/√20 × 0.976 = 5.21 ¢.
require('./lib.cjs')({ demo: 'sampling-lab', title: 'Sampling Lab', query: '?ws=sampling-methods' }, async (r) => {
  const { state, p } = r;
  state.caption = 'Sample reading: the means of 100 simple random samples of 20 students';
  await r.secs(2.4);

  state.caption = 'Press the setup Simple random: pocket change';
  await r.scrollRail('#presets [data-p="srs"]');
  await r.click('#presets [data-p="srs"]');
  await r.secs(1.0);

  state.caption = 'Press Draw a sample: the 20 students picked are ringed in the hall';
  await r.click('#draw1');
  await r.secs(1.2);
  const pane = await r.box('#pane');
  state.zoom = [pane[0], pane[1], pane[2], pane[2] * 9 / 16];
  await r.secs(2.4);
  state.zoom = null;

  state.caption = 'Press Draw 100: each sample mean x̄ drops as a dot into its row below';
  await r.click('#drawMany');
  await r.secs(2.2);
  const low = await r.box('#lower');
  state.arrow = { rect: low };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'The Readouts give the mean of the x̄\'s, the bias and the spread for this method';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Press Record reading; then do the same for the other four methods';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(1.2);
  state.caption = 'Then send the readings to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.2);
  r.check = await p.evaluate(() => { const L = window.__sl, s = L.summary(L.S.est.srs, L.P.mu); return { mu: L.P.mu, sigma: L.P.sigma, n: s.n, mean: s.mean, sd: s.sd,
    rows: [...document.querySelectorAll('.vd-readings tbody tr')].map((tr) => [...tr.cells].map((c) => c.textContent).join(' | ')) }; });
});
