// How this works: The Big Bang and the Early Universe, Thermal history view (worksheet thermal-history). The first reading:
// t = 10⁻⁴⁰ s. Check by hand: in the radiation era t = 2.42 s/√g* × (1 MeV/kT)², so with every Standard Model particle hot
// (g* = 106.75) kT = √(0.2342/10⁻⁴⁰) MeV = 4.84 × 10¹⁹ MeV = 4.84 × 10²⁵ eV and T = kT/k_B = 5.62 × 10²⁹ K.
require('./lib.cjs')({ demo: 'early-universe', title: 'The Big Bang and the Early Universe' }, async (r) => {
  const { state, p } = r;
  /* the page scrolls at this size, not only the sidebar: bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const logt = () => p.evaluate(() => window.__eu.S.th.logt);
  const dd = (label) => p.evaluate((label) => { const dt = [...document.querySelectorAll('#out dt')].find((d) => d.textContent.startsWith(label)); const q = dt.nextElementSibling.getBoundingClientRect(), a = dt.getBoundingClientRect();
    return { rect: [a.x, a.y, Math.max(a.width, q.width), q.bottom - a.y], text: dt.nextElementSibling.textContent.trim() }; }, label);

  state.caption = 'Sample reading: the temperature of the universe 10⁻⁴⁰ s after the Big Bang';
  await r.secs(2.6);

  state.caption = 'Open the Thermal history view';
  await r.click('#viewSeg [data-v="th"]');
  await r.secs(0.8);

  state.caption = 'Set the time: drag the time slider near 10⁻⁴⁰ s, then step it there with the arrow keys';
  await into('#sLogT');
  const sl = await r.box('#sLogT'), x = (v) => sl[0] + 8 + (sl[2] - 16) * (v + 44) / 61.64, y = sl[1] + sl[3] / 2;
  state.zoom = [Math.max(0, sl[0] - 24), Math.min(720 - 315, sl[1] - 200), 560, 315]; state.capTop = true;   /* the slider sits low on the page */
  await r.moveTo(x(await logt()), y, 0.7);
  await r.dragTo(x(-40), y, 1.0);
  for (let i = 0; i < 80; i++) { const v = await logt(); if (Math.abs(v + 40) < 0.005) break; await p.keyboard.press(v > -40 ? 'ArrowLeft' : 'ArrowRight'); await r.tick(2); }
  r.check.t = await r.text('#oLogT');
  state.arrow = { rect: await r.box('#oLogT') };
  await r.secs(1.2);
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Read the time, the temperature and kT';
  await into('#out');
  const a = await dd('Time since'), b = await dd('kT');
  r.check.T = (await dd('Temperature')).text; r.check.kT = b.text; r.check.time = a.text;
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

  state.caption = 'Repeat at 10⁻³⁵ s, 10⁻³⁰ s and on to today, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
