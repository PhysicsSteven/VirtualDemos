// How this works: Quantum Coin Toss, worksheet quantum-coin. The first table's first reading: Coins, the quantum coin at θ = 0°
// (φ 0°, ordinary coin fair), 1000 of each measured. Expected: |a|² = cos²(0°/2) = 1, so all 1000 quantum coins come out heads;
// the ordinary coin gives about 500 heads (random, the demo's own count).
require('./lib.cjs')({ demo: 'quantum-coin', title: 'Quantum Coin Toss' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: 1000 quantum coins at amplitude angle θ = 0°, beside a fair coin';
  await r.secs(2.8);

  state.caption = 'Choose Coins';
  await r.click('#modeSeg button:first-child');
  await r.secs(0.6);

  const card = await r.box('#coinBox');
  state.zoom = [card[0] + card[2] - 711, card[1] - 60, 711, 400];
  state.caption = 'Set the amplitude angle θ to 0°';
  r.check.theta = await r.slide('#sTq', '#oTq', 0, 0, 10);
  r.check.phi = await r.text('#oFq'); r.check.pc = await r.text('#oPc');
  await r.secs(0.8);
  state.zoom = null;

  state.caption = 'Toss and measure 1000 of each';
  await r.click('#go1000');
  await r.secs(2.0);

  state.caption = 'Read the heads fractions: every quantum coin came out heads';
  await r.scrollRail('#out');
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  state.arrow = { rect: await r.box('#out') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.rail .vd-rec');
  await r.click('.rail .vd-rec');
  await r.tick(4);
  const tb = await r.box('.rail table.rows');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.rail table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Clear the counts, repeat at 30° to 180°, then export to the worksheet';
  const ex = await r.box('.rail .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.rail table.rows tbody tr td')].map(td => td.textContent));
});
