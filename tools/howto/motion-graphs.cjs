// How this works: Motion Graphs. One reading at the time marker in the Slowing down and turning around run (x₀ = −6 m,
// v₀ = 4 m/s, a = −1 m/s² for 8 s), with Blind on as the worksheet asks. The marker goes to t = 1.00 s.
// Expected: x = x₀ + v₀t + ½at² = −6 + 4 − 0.5 = −2.50 m (the key's row 2; row 1 is t = 0, before the marker moves).
require('./lib.cjs')({ demo: 'motion-graphs', title: 'Motion Graphs' }, async (r) => {
  const { state, W } = r;
  let can = await r.box('#can');

  state.caption = 'Sample reading: the cart\'s position at t = 1.00 s in the turning around run';
  await r.secs(3.0);

  state.caption = 'Pick the setup: click Slowing down and turning around';
  await r.click('#presets button[data-p="turn"]');
  state.arrow = { rect: await r.box('#presets button[data-p="turn"]') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Note its settings, then turn on Blind to hide the predictions';
  /* the stage runs 77 px below the window: scroll the page down gently now, or focusing the graph jumps it later */
  const yMax = await r.p.evaluate(() => document.documentElement.scrollHeight - innerHeight);
  for (let i = 1; i <= 12; i++) { await r.p.evaluate((y) => scrollTo(0, y), Math.round(yMax * i / 12)); await r.tick(); }
  await r.scrollRail('details:has(#labBlind) > summary');
  await r.click('details:has(#labBlind) > summary');
  await r.tick(3);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await r.p.evaluate(() => document.getElementById('labBlind').checked);
  state.arrow = { rect: await r.box('#labBlind') };
  await r.secs(1.6);
  state.arrow = null;

  can = await r.box('#can');
  state.caption = 'Move the time marker: drag along the graph to t = 1.00 s';
  const gy = can[1] + 330, g0 = can[0] + 62;      /* inside the position graph, just right of its time axis start */
  state.zoom = [can[0], can[1], 936, 526.5];   /* the clock at the top right and the marker's point on the graph */
  await r.moveTo(g0, gy, 0.8);
  await r.p.mouse.down(); state.down = true; await r.tick(3);
  const t = async () => parseFloat((await r.text('#clock')).replace(/[^\d.]/g, ''));
  for (let i = 0; i < 200 && (await t()) < 0.9; i++) { state.ptr = [state.ptr[0] + 3, gy]; await r.p.mouse.move(...state.ptr); await r.tick(); }
  for (let i = 0; i < 200 && (await r.text('#clock')) !== 't = 1.00 s'; i++) { state.ptr = [state.ptr[0] + 0.5, gy]; await r.p.mouse.move(...state.ptr); await r.tick(); }
  r.check.t = await r.text('#clock');
  await r.tick(4); await r.p.mouse.up(); state.down = false;
  state.arrow = { rect: await r.box('#clock') };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture the reading. The time and position go into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Capture eight or more times on both sides of the turn, then send them to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
