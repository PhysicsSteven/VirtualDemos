// How this works: The Big Bang and the Early Universe, Helium view (worksheet big-bang-helium). The standard run: kT_f 0.80 MeV,
// τ 878.4 s, t_D 180 s, played past t_D and recorded. The counts are one random sample of 2000 nucleons; the expected neutrons at
// freeze out are 2000 × 0.1986/1.1986 = 331, about 0.816 of them left at t_D (e^(−(180 − 1.17)/878.4)), and half of those in helium.
require('./lib.cjs')({ demo: 'early-universe', title: 'The Big Bang and the Early Universe' }, async (r) => {
  const { state, p } = r;
  const tNow = () => p.evaluate(() => { const S = window.__eu.S; return Math.pow(10, S.bbn.logt); });
  const dd = (label) => p.evaluate((label) => { const dt = [...document.querySelectorAll('#out dt')].find((d) => d.textContent.startsWith(label)); const q = dt.nextElementSibling.getBoundingClientRect(), a = dt.getBoundingClientRect();
    return { rect: [a.x, a.y, Math.max(a.width, q.width), q.bottom - a.y], text: dt.nextElementSibling.textContent.trim() }; }, label);

  /* the page scrolls at this size, not only the sidebar: bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };

  state.caption = 'Sample reading: the standard run, the helium made in the first three minutes';
  await r.secs(2.6);

  state.caption = 'Choose the First three minutes setup';
  await r.click('[data-p="bbnStd"]');
  await r.secs(0.8);

  state.caption = 'Play it past t_D = 180 s: press 4× to run it faster, then Play, then Pause';
  await r.click('#speedSeg [data-s="4"]');
  await r.click('#go');
  for (let i = 0; i < 600 && (await tNow()) < 180; i++) await r.tick();
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;   /* pause */
  r.check.t = await r.text('#clock');
  const pane = await r.box('#pane');
  state.zoom = [pane[0], pane[1], 768, 432];   /* the counters beside the box */
  await r.secs(2.0);
  state.zoom = null;

  state.caption = 'Read the neutrons at freeze out, the neutrons left at t_D and the helium nuclei';
  await into('#out');
  const a = await dd('Neutrons at freeze out'), b = await dd('Helium 4 nuclei');
  r.check.nf = a.text; r.check.nD = (await dd('Neutrons left at t_D')).text; r.check.He = b.text; r.check.Y = (await dd('Y from the sample')).text;
  state.arrow = { rect: [a.rect[0] - 6, a.rect[1] - 4, 250, b.rect[1] + b.rect[3] - a.rect[1] + 8] };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Press Start over and repeat for five readings in all, then send them to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
