// How this works: Slope Fields: Cooling Tea and a Growing Culture (Slope Fields and Euler's Method). The worksheet's part A: the
// Mystery: a cooling cup setup, a start point typed at t₀ = 0 and y₀ = 90 °C, its slope read and recorded, then y₀ = 80 the same way.
// Expected: the slope at y₀ is −k(y₀ − Tₐ) for the hidden k (0.040 to 0.090 per min) and room temperature (18 to 26 °C): between
// −2.6 and −6.5 °C/min at 90 °C, and less steep by 10k at 80 °C.
require('./lib.cjs')({ demo: 'slope-fields', title: 'Slope Fields', query: '?ws=slope-fields-cooling' }, async (r) => {
  const { state, p } = r;
  const typeIn = async (sel, v) => { await r.click(sel); await p.keyboard.press('Control+A'); await p.keyboard.type(String(v), { delay: 60 }); await r.secs(0.3); await p.keyboard.press('Enter'); await p.evaluate((s) => document.querySelector(s).blur(), sel); await r.secs(0.4); };
  const slope = () => p.evaluate(() => { const S = window.__sf.S, c = S.curves[S.curves.length - 1]; return window.__sf.eqNow().f(c.t0, c.y0); });

  state.caption = 'Sample reading: the slope of a hidden cooling law, read from its field at 90 °C and 80 °C';
  await r.secs(2.4);

  state.caption = 'Press the setup Mystery: a cooling cup';
  await r.scrollRail('#presets [data-p="mystCool"]');
  await r.click('#presets [data-p="mystCool"]');
  await r.secs(1.6);
  const pane = await r.box('#pane');
  state.caption = 'The equation is hidden: the field and the thermometer readings (dots) come from it';
  state.zoom = [pane[0], pane[1], pane[2], pane[2] * 9 / 16];
  await r.secs(2.6);
  state.zoom = null;

  await p.evaluate(() => window.scrollTo(0, 330)); await r.tick(2);
  state.caption = 'In the Start point card, type t₀ = 0 and y₀ = 90';
  await typeIn('#t0In', 0);
  await typeIn('#y0In', 90);
  r.check.slope90 = await slope();
  state.caption = 'The orange dot moves there; Slope there, dy/dt in the Readouts is the field\'s slope';
  await r.scrollRail('#out');
  state.arrow = { rect: await r.box('#out div:nth-child(3)') };
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Press Record reading';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(0.8);

  state.caption = 'Now type y₀ = 80 and record again; then 70, 60, 50, 40 and 30';
  await p.evaluate(() => window.scrollTo(0, 330)); await r.tick(2);
  await typeIn('#y0In', 80);
  r.check.slope80 = await slope();
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(1.0);
  state.caption = 'Then send the readings to the worksheet: slope against temperature is a straight line';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr')].map((tr) => [...tr.cells].map((c) => c.textContent).join(' | ')));
  r.check.cup = await p.evaluate(() => window.__sf.S.cup);
});
