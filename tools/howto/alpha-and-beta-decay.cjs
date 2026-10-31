// How this works: Radioactive Decay, worksheet "Alpha and Beta Decay" (alpha-and-beta-decay). The first reading: samarium 146 in
// the Alpha decay view with r₀ = 1.20 fm. Q = 2.5292 MeV from the NUBASE2020 masses; measured T½ 2.146 × 10¹⁵ s (68.0 Myr),
// Gamow model 2.441 × 10¹⁵ s (77.4 Myr), 0.06 decades long.
require('./lib.cjs')({ demo: 'radioactive-decay', title: 'Radioactive Decay', query: '?view=alpha' }, async (r) => {
  const { state, p, W } = r;
  state.ptr = [700, 600]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: samarium 146, the first of the twenty alpha emitters, with r₀ = 1.20 fm';
  await r.secs(2.6);

  state.caption = 'Pick the emitter: samarium 146';
  await r.scrollRail('#oneNuc');
  const ch = await r.box('#oneNuc');
  state.zoom = [W - 640, Math.max(0, ch[1] - 120), 640, 360];
  await r.click('#oneNuc button[data-i="0"]');
  r.check.r0 = await r.text('#oneR0Out');
  await r.secs(1.0);
  state.zoom = null;
  await r.secs(1.2);

  const row = async (k) => r.box(`#oneTbl tr:nth-child(${k})`);
  const val = (k) => p.evaluate((k) => document.querySelector(`#oneTbl tr:nth-child(${k}) td:last-child`).textContent, k);
  r.check.Q = await val(2); r.check.model = await val(10); r.check.meas = await val(11); r.check.ratio = await val(12);
  state.caption = `Read Q, ${r.check.Q}, and the half lives: measured ${r.check.meas}, Gamow's model ${r.check.model}`;
  await r.scrollRail('#oneTbl');
  const tb = await r.box('#oneTbl');
  state.zoom = [W - 640, tb[1] - 40, 640, 360];
  const q = await row(2); state.arrow = { rect: q }; await r.secs(1.6);
  const m = await row(10), mm = await row(11); state.arrow = { rect: [m[0], m[1], m[2], mm[1] + mm[3] - m[1]] }; await r.secs(2.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const t = await r.box('.vd-readings table');
  state.zoom = [W - 600, t[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for all twenty emitters, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
