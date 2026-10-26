// How this works: Tides, Two Bulges, the Moon and the Sun (Astro 2203, intro-tides). The worksheet's first reading, as in tides.cjs:
// the Moon at 40 Earth radii in the Pull on Earth view; only the last caption differs (the worksheet's other distances).
require('./lib.cjs')({ demo: 'tides', query: '?ws=intro-tides', title: 'Tides' }, async (r) => {
  const { state, W } = r;
  const main = await r.box('#main');
  const toSel = async (sel, off) => { await r.p.evaluate(([sel, off]) => { const rl = document.querySelector('.rail'), c = document.querySelector(sel); rl.scrollTop += c.getBoundingClientRect().top - rl.getBoundingClientRect().top - off; }, [sel, off]); await r.tick(2); };

  state.caption = "Sample reading: the Moon's pull on Earth with the Moon at 40 Earth radii";
  await r.secs(3.0);

  state.caption = 'Show the tidal pull: Pull on Earth view, then Tidal pull';
  await r.click('#viewSeg button:nth-child(1)');
  await r.tick(6);
  await r.click('#arrowSeg button:nth-child(2)');
  await r.secs(0.8);

  state.caption = "Set the distance: drag the Moon's distance slider to 40 Earth radii";
  const sl = await r.box('#dist');
  const v = +(await r.p.evaluate(() => document.querySelector('#dist').value));
  const tx = sl[0] + 8 + (sl[2] - 16) * (v - 40) / 80;
  await r.moveTo(tx, sl[1] + sl[3] / 2, 0.7);
  r.check.d = await r.dragUntil(-2, 0, '#distOut', '40.0 RE');
  state.arrow = { rect: await r.box('#distOut') };
  await r.secs(0.8);
  state.arrow = null;
  state.zoom = [main[0], main[1], 640, 360];   /* the Moon is closer and the tidal arrows longer */
  await r.secs(2.0);
  state.zoom = null;

  state.caption = "Read the pull at Earth's center and the tidal pull on the near and far sides";
  await toSel('#pullRead', 10);
  const a = await r.box('#rPull'), f = await r.box('#rFar');
  r.check.pull = await r.text('#rPull'); r.check.axis = await r.text('#rAx'); r.check.near = await r.text('#rNear'); r.check.far = await r.text('#rFar');
  state.arrow = { rect: [a[0], a[1] - 22, a[2], f[1] + f[3] - a[1] + 22] };
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at 60.34, 80 and 120 Earth radii, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings table.rows tbody tr')].map(tr => [...tr.querySelectorAll('td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent).join(' | ')));
});
