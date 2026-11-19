// How this works: The Central Limit Theorem (Sampling Lab). The worksheet's part B, first rows: the setup Means of skewed reaction
// times, n typed as 4, Draw 10,000, the readouts read against σ/√n, and the reading recorded.
// Expected: draw set 1, Reaction times: σ = 94.47 ms, so σ/√4 = 47.23 ms; the spread s of 10,000 means at n = 4 is 47.56 ms.
require('./lib.cjs')({ demo: 'sampling-lab', title: 'Sampling Lab', query: '?ws=central-limit-theorem' }, async (r) => {
  const { state, p } = r;
  const typeIn = async (sel, v) => { await r.click(sel); await p.keyboard.press('Control+A'); await p.keyboard.type(String(v), { delay: 60 }); await r.secs(0.3); await p.keyboard.press('Enter'); await p.evaluate((s) => document.querySelector(s).blur(), sel); await r.secs(0.4); };
  state.caption = 'Sample reading: 10,000 means of 4 skewed reaction times, and their spread against σ/√n';
  await r.secs(2.4);

  state.caption = 'Press the setup Means of skewed reaction times, n = 5';
  await r.scrollRail('#presets [data-p="cltReact"]');
  await r.click('#presets [data-p="cltReact"]');
  await r.secs(1.4);

  state.caption = 'Type 4 in Sample size n and press Enter';
  await typeIn('#nIn', 4);
  state.caption = 'Press Draw 10,000: the histogram of the means fills under the theorem\'s normal curve';
  await r.click('#drawMore');
  await r.secs(1.6);
  const low = await r.box('#lower');
  state.zoom = [low[0], low[1] - 40, Math.max(low[2], (low[3] + 80) * 16 / 9), Math.max(low[2], (low[3] + 80) * 16 / 9) * 9 / 16];
  await r.secs(2.6);
  state.zoom = null;

  state.caption = 'Compare Spread, s of the x̄\'s with Theorem: σ/√n in the Readouts';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Press Record reading; repeat for n = 8, 16, 25, 36 and 50';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(1.2);
  state.caption = 'Then send the readings to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.2);
  r.check = await p.evaluate(() => { const L = window.__sl, c = L.cltStats(); return { n: L.S.n, sigma: L.P.sigma, count: c.count, sd: c.sd, se: c.se, skew: c.skew, w2: c.w2,
    rows: [...document.querySelectorAll('.vd-readings tbody tr')].map((tr) => [...tr.cells].map((c) => c.textContent).join(' | ')) }; });
});
