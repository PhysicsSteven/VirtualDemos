// How this works: Taylor Polynomials and Series, worksheet taylor-small-angle. The first table's first reading: order n = 1
// (sin θ ≈ θ) at θ = 0.1 rad.
// Expected: sin θ 0.0998334, T₁(θ) 0.1, relative error 0.1669 %; the 1% range out to 0.2441 rad (13.99°).
require('./lib.cjs')({ demo: 'taylor', title: 'Taylor Polynomials and Series' }, async (r) => {
  const { state, p } = r;
  state.ptr = [640, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: sin θ against the first Taylor term, θ, at θ = 0.1 rad';
  await r.secs(2.4);

  state.caption = 'Choose the Pendulum: sin θ ≈ θ setup (order n = 1)';
  await r.scrollRail('#presets');
  await r.click('#presets button[data-p="pendulum"]');
  state.arrow = { rect: await r.box('#nOut') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Type 0.1 in the Probe θ box and press Enter';
  await r.click('#xIn');
  await p.evaluate(() => document.getElementById('xIn').select());
  for (const ch of '0.1') { await p.keyboard.type(ch); await r.tick(4); }
  await p.keyboard.press('Enter'); await p.evaluate(() => document.getElementById('xIn').dispatchEvent(new Event('change')));
  await r.secs(1.2);

  state.caption = 'Read sin θ, T₁(θ) and the relative error at the probe';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out') };
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'The green column is where θ is within 1% of sin θ; its ends are under Convergence';
  await r.scrollRail('#conv');
  state.arrow = { rect: await r.box('#conv') };
  r.check.conv = (await r.text('#conv')).replace(/\s+/g, ' ');
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.rail .vd-rec');
  await r.click('.rail .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.rail table.rows tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Repeat at 0.2 to 0.5 rad, then at n = 3; then export to the worksheet';
  const ex = await r.box('.rail .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('.rail table.rows tbody tr td')].map(td => td.textContent));
});
