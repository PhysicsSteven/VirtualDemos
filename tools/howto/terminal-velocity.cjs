// How this works: Terminal Velocity. Part 1: an 85 kg skydiver, spread eagle, from 4000 m in uniform air (ρ = 1.21 kg/m³),
// Blind on; readings at t = 0 and t = 1 s with Step 1 s.
// Expected: v_T = √(2mg/(ρCA)) = √(2·85·9.81/(1.21·1.0·0.70)) = 44.37 m/s; v(1 s) = v_T tanh(g t/v_T) = 9.65 m/s,
// a = g(1 − v²/v_T²) = 9.35 m/s², fallen y = (v_T²/g) ln cosh(g t/v_T) = 4.86 m.
require('./lib.cjs')({ demo: 'terminal-velocity', title: 'Terminal Velocity' }, async (r) => {
  const { state, p } = r;

  state.caption = 'Sample reading: an 85 kg skydiver 1 s after jumping spread eagle';
  await r.secs(3.0);

  state.caption = 'Set up the jump: 85 kg from 4000 m in uniform air, spread eagle';
  const card = await r.box('#setupCard');
  state.arrow = { rect: card };
  await r.moveTo(card[0] + card[2] / 2, card[1] + card[3] / 2, 0.8);
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Open Lab and turn on Blind, so the terminal speed stays hidden';
  /* the sidebar runs below the window here: scroll the page until its bottom shows, then the sidebar down to Lab */
  const by = await p.evaluate(() => Math.max(0, document.querySelector('.rail').getBoundingClientRect().bottom - innerHeight + 8));
  for (let i = 1; i <= 12; i++) { await p.evaluate(y => window.scrollTo(0, y), by * (1 - (1 - i / 12) ** 2)); await r.tick(); }
  await r.scrollRail('details.fold:has(#labBlind)');
  await r.click('details.fold:has(#labBlind) > summary');
  await r.scrollRail('#labBlind');   /* the opened fold reaches below the window */
  await r.click('#labBlind');
  state.arrow = { rect: await r.box('label.check:has(#labBlind)') };
  await r.secs(1.2);
  state.arrow = null;

  state.caption = 'Record the reading at t = 0';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.secs(0.8);
  r.check.blind = await p.evaluate(() => document.getElementById('labBlind').checked);

  state.caption = 'Step 1 s: the clock moves on exactly one second';
  await r.click('#step');
  const sc = await r.box('#scene');
  state.zoom = [sc[0], sc[1], 800, 450];
  await r.secs(0.6);
  state.arrow = { rect: [sc[0] + 6, sc[1] + 56, 210, 82] };   /* the speed, acceleration and clock drawn at the top left of the picture */
  r.check.out = await r.text('#out');
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record again. Each reading goes into the table';
  await r.click('.vd-readings .vd-rec');
  await r.scrollRail('.vd-readings table');
  await r.tick(2);
  const tb = await r.box('.vd-readings table');
  state.zoom = [r.W - 600, Math.min(tb[1] - 150, r.H - 337.5), 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr:nth-child(2)') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Keep stepping and recording to 15 s, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => window.vdRows());
});
