// How this works: Parallax, Measuring the Distance to a Star (Astro 2203, intro-parallax). The worksheet's first reading:
// Proxima Centauri with Hipparcos, the ruler dragged onto the January and July images, then the reading recorded.
require('./lib.cjs')({ demo: 'distance-ladder', query: '?ws=intro-parallax', title: 'Cosmic Distance Ladder' }, async (r) => {
  const { state, W } = r;
  const toSel = async (sel, off) => { await r.p.evaluate(([sel, off]) => { const rl = document.querySelector('.rail'), c = document.querySelector(sel); rl.scrollTop += c.getBoundingClientRect().top - rl.getBoundingClientRect().top - off; }, [sel, off]); await r.tick(2); };
  /* a point of the overlaid photo, on the page: the canvas box plus the demo's own overlay geometry */
  const ovPt = async (which) => { const c = await r.box('#can');
    const q = await r.p.evaluate((w) => { const L = window.__dl, ov = L.G.par.ov, s = L.S.par, off = w === 'jan' ? L.core.apparentOffset(s.d, Math.PI) : w === 'jul' ? L.core.apparentOffset(s.d, 0) : s.ruler[w];
      return [ov.sx(off), ov.ry + 4]; }, which);
    return [c[0] + q[0], c[1] + q[1]]; };

  state.caption = 'Sample reading: the parallax of Proxima Centauri, measured with Hipparcos';
  await r.secs(3.0);

  state.caption = 'Choose the star and the instrument';
  await toSel('#starChips', 40);
  await r.click('#starChips [data-s="proxima"]');
  await r.tick(4);
  await r.click('#instSeg [data-i="hip"]');
  await r.secs(0.6);

  state.caption = 'Earth goes round the Sun, and the nearby star shifts against the distant ones';
  const pl = await r.box('#play');
  if ((await r.text('#play')) === 'Play') await r.click('#play'); else await r.moveTo(pl[0] + pl[2] / 2, pl[1] + pl[3] / 2, 0.6);
  await r.secs(3.0);
  await r.click('#play');
  await r.secs(0.5);

  state.caption = 'Measure the shift: drag the ends of the ruler onto the January and July images';
  const c = await r.box('#can'), ov = await r.p.evaluate(() => { const o = window.__dl.G.par.ov; return [o.px, o.py, o.w, o.ry - o.py + 40]; });
  state.zoom = [c[0] + ov[0] - 40, c[1] + ov[1] - 60, 640, 360];
  for (const [k, w] of [[0, 'jan'], [1, 'jul']]) {
    const a = await ovPt(k), t = await ovPt(w);
    await r.moveTo(a[0], a[1], 0.7);
    await r.dragTo(t[0], t[1], 1.0);
    await r.tick(6);
  }
  await r.secs(1.0);
  state.zoom = null;

  state.caption = 'Read the shift s from your ruler, the parallax p = s/2 and the distance d = 1/p';
  await toSel('#pP', 60);
  const a = await r.box('#pP'), b = await r.box('#pRuler');
  r.check.p = await r.text('#pP'); r.check.d = await r.text('#pD'); r.check.ruler = await r.text('#pRuler');
  state.arrow = { rect: [Math.min(a[0], b[0]), a[1] - 22, Math.max(a[0] + a[2], b[0] + b[2]) - Math.min(a[0], b[0]), b[1] + b[3] - a[1] + 22] };
  await r.secs(3.0);
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

  state.caption = 'Repeat for Sirius, Vega and the five distances, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings table.rows tbody tr')].map(tr => [...tr.querySelectorAll('td')].map(td => td.textContent).join(' | ')));
});
