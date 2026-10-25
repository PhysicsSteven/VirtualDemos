// How this works: A Spinning Top and the Wandering Pole Star (Astro 2203, intro-precession). The spin series' first reading: solid disk, d = 0.10 m, level axle, steady start, 1000 rpm.
// Expected: I_s = ½MR² = 9.00 × 10⁻⁴ kg·m², ω_s = 104.72 rad/s, Ω = Mgd/(I_s ω_s) = 5.204 rad/s (exact for a level axle), P = 2π/Ω = 1.207 s, gate 1.21 s.
require('./lib.cjs')({ demo: 'gyroscope', query: '?ws=intro-precession', title: 'A Spinning Top and the Wandering Pole Star' }, async (r) => {
  const { state, W, p } = r;
  const can = await r.box('#can');
  const thumb = (sel) => p.evaluate((s) => { const e = document.querySelector(s), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);

  state.caption = 'Sample reading: solid disk, d = 0.10 m, level axle, steady start, 1000 rpm';
  await r.tick(30);
  state.arrow = { rect: await r.box('#oD') }; await r.secs(0.9);
  state.arrow = { rect: await r.box('#oB') }; await r.secs(0.9);
  state.arrow = null;

  state.caption = 'Start it at the steady rate: tick the steady start box';
  await r.scrollRail('#push');
  await r.click('#push');
  r.check.steady = await p.evaluate(() => document.querySelector('#push').checked);
  r.check.wheel = await r.text('#wheelSeg [aria-pressed="true"]');
  state.arrow = { rect: await r.box('label:has(#push)') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Set the spin: drag the Spin rate slider to 1000 rpm';
  const card = await r.box('#setupCard');
  state.zoom = [card[0] - 20, card[1] - 40, 560, 315];
  await r.moveTo(...(await thumb('#sW')), 0.8);
  r.check.rpm = await r.dragUntil(-1.5, 0, '#oW', '1000 rpm');
  r.check.d = await r.text('#oD'); r.check.tilt = await r.text('#oB');
  state.arrow = { rect: await r.box('#oW') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Release. The gate times each full turn round the post';
  await r.click('#go');
  await r.moveTo(can[0] + can[2] * 0.62, can[1] + can[3] * 0.82, 0.6);
  state.zoom = [can[0] + 120, can[1], 800, 450];   /* the wheel, the gate and its timer */
  const gateDd = '#out div:nth-child(3) dd';
  for (let i = 0; i < 400 && !/\d\.\d\d/.test(await r.text(gateDd)); i++) await r.tick();
  r.check.P = await r.text(gateDd);
  await r.secs(0.8);
  state.zoom = null;
  state.arrow = { rect: await r.box('#out div:nth-child(3)') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#rowsTbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at 2000 to 6000 rpm, then send the series to the worksheet';
  const ex = await r.box('#exportCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
