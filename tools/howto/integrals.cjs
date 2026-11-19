// How this works: Riemann Sums and Integrals, worksheet integrals-error-order. The first table's first reading:
// e^(x/2) from 0 to 3, the Left rule with n = 4.
// Expected: sum 5.739156, integral 6.963378, error −1.22 (error ratio, n to 2n, 1.94).
require('./lib.cjs')({ demo: 'integrals', title: 'Riemann Sums and Integrals' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the area under e^(x/2) from 0 to 3, Left rule, n = 4';
  await r.secs(2.4);

  state.caption = 'Choose the setup Left and right sums on a rising curve';
  await r.scrollRail('#presets');
  await r.click('#presets button[data-p="rising"]');
  await r.secs(0.6);

  state.caption = 'Press Left in the bar above the graph';
  await r.click('#ruleSeg button[data-r="left"]');
  await r.secs(0.8);

  state.caption = 'Type 4 in the Pieces n box: four rectangles, each from its left end';
  await r.click('#nIn');
  await p.keyboard.press('Control+A'); await p.keyboard.type('4'); await r.tick(2);
  const g = await r.box('#pane');
  state.arrow = { rect: g };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Read the Sum, the exact Integral and the Error in the Readouts';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  r.check.readouts = (await r.text('#out')).replace(/\s+/g, ' ');
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'The lower graph shows each rule\'s error against n on log axes';
  /* bring the lower graph on screen, smoothly, before pointing at it */
  const pageTo = async (y1) => { const y0 = await p.evaluate(() => scrollY), n = 14;
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo(0, v), y0 + (y1 - y0) * e); await r.tick(); } };
  const lb = await r.box('#lower'), sy = await p.evaluate(() => scrollY);
  await pageTo(Math.max(0, sy + lb[1] + lb[3] - r.H + 40));
  const lw = await r.box('#lower');
  state.arrow = { rect: lw };
  await r.secs(2.2);
  state.arrow = null;
  await pageTo(sy);

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.rail .vd-rec');
  await r.click('.rail .vd-rec');
  await r.tick(4);
  const tb = await r.box('.rail table.rows');
  state.zoom = [r.W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.rail table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for n = 16 and 64, then Midpoint, Trapezoid and Simpson; then export';
  const ex = await r.box('.rail .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.8);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.rail table.rows tbody tr td')].map(td => td.textContent));
});
