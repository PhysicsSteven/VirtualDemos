// How this works: Entropy and the Second Law, Testing the Second Law (Worksheet 3). The Data table's first reading: the A real
// engine setup (600 K and 300 K, Q_h = 500 J) with W set to 0. Expected: Q_c = Q_h − W = 500 J, and the universe's entropy
// changes by −Q_h/T_h + Q_c/T_c = −500/600 + 500/300 = −0.8333 + 1.6667 = +0.8333 J/K, so it is allowed.
require('./lib.cjs')({ demo: 'entropy', title: 'Testing the Second Law' }, async (r) => {
  const { state, p, W } = r;
  /* scroll the page to y over s seconds, a frame at a time */
  const scrollPage = async (y, s = 0.6) => {
    const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => window.scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); }
  };
  const pageY = (sel) => p.evaluate(s => document.querySelector(s).getBoundingClientRect().top + scrollY, sel);

  /* the bench at the top of the window, as a student sees it after scrolling past the title */
  const stageY = await p.evaluate(() => document.querySelector('#stage').getBoundingClientRect().top + scrollY - 8);
  await p.evaluate(v => window.scrollTo(0, v), stageY);
  await p.clock.runFor(300);

  state.caption = 'Sample reading: an engine between 600 K and 300 K that takes in 500 J and does no work';
  await r.secs(3.2);

  state.caption = 'Pick the A real engine setup: 600 K and 300 K, 500 J from the hot reservoir';
  await r.click('#presets [data-p="slReal"]');
  state.arrow = { rect: await r.box('#presets [data-p="slReal"]') };
  await r.secs(1.6);
  state.arrow = null;

  /* the sliders sit at the bottom of the window even with the page scrolled down, so this caption goes at the top */
  state.caption = 'Set the work: drag the Work done by the engine slider to 0 J';
  state.capTop = true;
  await scrollPage(await pageY('#curve') - 8, 0.7);
  state.zoom = [W - 320 - 720, r.H - 405, 720, 405];   /* the four sliders' right half: Q_h and W */
  const sw = await r.box('#sW');
  await r.moveTo(sw[0] + 8 + (sw[2] - 16) * 150 / 500, sw[1] + sw[3] / 2, 0.7);
  await p.mouse.down(); state.down = true; await r.tick(3);
  await r.moveTo(sw[0] - 6, sw[1] + sw[3] / 2, 0.8);
  await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
  r.check.W = await r.text('#oW');
  state.arrow = { rect: await r.box('#oW') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'All 500 J now goes to the cold reservoir. The entropy of the universe rises';
  const cv = await r.box('#curve');
  await r.moveTo(cv[0] + cv[2] - 60, cv[1] + 30, 0.5);
  state.zoom = [cv[0], cv[1] - 250, cv[2], cv[2] * 9 / 16];   /* the heat arrows to the reservoirs and the entropy bars under them */
  await r.secs(1.0);
  /* the bar for the universe is the last of the four rows the curve canvas draws */
  state.arrow = { rect: [cv[0] + cv[2] * 0.03, cv[1] + cv[3] * 0.64, cv[2] * 0.86, cv[3] * 0.14] };
  await r.secs(2.6);
  state.arrow = null; state.zoom = null;
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  r.check.bars = await p.evaluate(() => { const d = window.__en.dev(); return `dSh ${d.dSh.toFixed(4)}, dSc ${d.dSc.toFixed(4)}, dS ${d.dS.toFixed(4)}, Qc ${d.Qc}`; });

  /* the sidebar scrolls with the page, so with the page scrolled down its readings sit at the bottom of the window: captions at the top */
  state.caption = 'Record the reading. It goes into the table';
  state.capTop = true;
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 60, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for W up to 500 J in steps of 50 J, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
