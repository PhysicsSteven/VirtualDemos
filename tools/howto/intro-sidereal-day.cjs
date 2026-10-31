// How this works: Sidereal Days, Solar Days and Sundials (Astro 2203, intro-sidereal-day), in Reasons for Seasons' Sidereal and solar days
// switch. Its first reading: Toy planet, 4 days a year (24 h turn against the stars, 96 h year), stepped one solar day at a time through
// one orbit. By hand: N = 4 turns, N − 1 = 3 noons, solar day 96 h ÷ 3 = 32 h = 24 h × 4/3.
require('./lib.cjs')({ demo: 'seasons', query: '?ws=intro-sidereal-day&mode=seasons', title: 'Sidereal and Solar Days' }, async (r) => {
  const { state, W, p } = r;
  const idle = async () => { for (let i = 0; i < 300 && (await p.evaluate(() => window.__sd.S.run)); i++) await r.tick(); };
  state.caption = 'Sample reading: a toy planet that turns 4 times against the stars in one trip around its Sun';
  await r.secs(2.6);

  state.caption = 'Switch to Sidereal and solar days';
  await r.click('#modeSeg [data-m=sidereal]');
  await r.secs(0.6);

  state.caption = 'Choose the setup Toy planet, 4 days a year';
  await r.scrollRail('#sdPresets [data-p=toy4]');
  await r.click('#sdPresets [data-p=toy4]');
  await r.secs(0.8);

  const cv = await r.box('#sdCan');
  state.caption = 'Step one solar day: the person turns past the star (blue) to face the Sun again (red arc)';
  await r.click('#sdStepSol'); state.zoom = [cv[0], cv[1], cv[2], cv[2] * 9 / 16]; await idle(); await r.secs(0.8);
  state.caption = 'Keep stepping, one solar day at a time, until the planet has gone once around the Sun';
  state.zoom = null; await r.click('#sdStepSol'); await idle(); await r.secs(0.3);
  await r.click('#sdStepSol'); await idle(); await r.secs(0.6);

  state.caption = 'Read the counters: 96 h, 4 turns against the star, but only 3 noons';
  r.check.counters = await p.evaluate(() => { const S = window.__sd.S; return { t_h: S.t / 3600, orbits: S.t / S.P.orb }; });
  state.zoom = [cv[0], cv[1], 640, 360];
  state.arrow = { rect: [cv[0] + 8, cv[1] + 8, 230, 72] };
  await r.secs(2.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for the other toy planets, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
