// How this works: Shielding Rooms. The worksheet's first reading: the walls of a CT room with an office next door (150 body and
// 30 head scans a week, 40 % repeated with contrast, 120 kV, scanner 3 m from the wall, public, T = 1). Expected from NCRP 147's
// DLP method and the Archer fits: 46.12 mGy a week at 1 m, 4.235 at 3.3 m, B = 4.72 × 10⁻³, lead 1.46 mm, concrete 127.7 mm.
require('./lib.cjs')({ demo: 'shielding-rooms', title: 'Shielding Rooms', query: '?view=flat' }, async (r) => {
  const { state, p } = r;
  const row = (n) => r.box(`#out > :nth-child(${n})`);

  state.caption = 'Sample reading: the walls of a CT room with an office next door';
  await r.secs(2.6);

  state.caption = 'Choose the CT room, office next door setup';
  await r.click('#presets [data-p="ct"]');
  await r.secs(1.0);

  state.caption = 'The week\'s scans and who is beyond the wall are set in the Set up card';
  const card = await r.box('#setupCard');
  state.arrow = { rect: card };
  await r.moveTo(card[0] + card[2] / 2, card[1] + card[3] * 0.3, 0.7);
  await r.secs(2.2);
  state.arrow = null;

  /* the page scrolls smoothly to y1 */
  const pageTo = async (y1, n = 14) => { const y0 = await p.evaluate(() => scrollY);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate((v) => scrollTo(0, v), y0 + (y1 - y0) * e); await r.tick(); } };
  await r.scrollRail('#out');
  state.capTop = true;
  state.caption = 'Read the weekly air kerma and the transmission B the wall may allow';
  r.check.K1 = await r.text('#out > :nth-child(1) dd');
  r.check.B = await r.text('#out > :nth-child(4) dd');
  const a = await row(1), b = await row(4);
  state.arrow = { rect: [a[0], a[1], a[2], b[1] + b[3] - a[1]] };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Read the thickness of each material that gives that transmission';
  r.check.lead = await r.text('#out > :nth-child(5) dd');
  r.check.concrete = await r.text('#out > :nth-child(7) dd');
  { const [, y, , h] = await row(8), y0 = await p.evaluate(() => scrollY); if (y + h > r.H - 60) await pageTo(y0 + y + h - r.H + 90); }
  const c5 = await row(5), c8 = await row(8);
  state.arrow = { rect: [c5[0], c5[1], c5[2], c8[1] + c8[3] - c5[1]] };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Graph against mass per area: concrete needs 18 times the mass of lead';
  { const [, y, , h] = await r.box('#plot'), y0 = await p.evaluate(() => scrollY); await pageTo(Math.max(0, y0 + y + h - r.H + 30)); }
  await r.click('#axSeg [data-ax="m"]');
  await r.tick(4);
  r.check.axis = await p.evaluate(() => window.vdDemo.S.ax);
  const pl = await r.box('#plot');
  { const w = Math.max(pl[2] + 40, (pl[3] + 60) * 16 / 9), h = w * 9 / 16; state.zoom = [pl[0] + pl[2] / 2 - w / 2, pl[1] + pl[3] / 2 - h / 2 + 20, w, h]; }
  state.arrow = { rect: pl };
  await r.secs(2.8);
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Record the reading';
  await p.evaluate(() => document.querySelector('.vd-readings .vd-rec').scrollIntoView({ block: 'center' })); await r.tick(2);
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Change one thing at a time and record each, then send the readings to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdReadingRow()));
});
