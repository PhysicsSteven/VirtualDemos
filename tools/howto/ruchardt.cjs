// How this works: Rüchardt's Ball (Worksheet 2 of gas-heat-capacity). The first reading of the data table: dry air, a 2 L flask.
// Expected: P = P_atm + mg/A = 101325 + 0.01660 × 9.81 / (π × 0.01600²/4) = 102 134.9 Pa; γ = 1015/721 = 1.40777;
// T = 2π√(mV/(γPA²)) = 0.47486 s, and the 6 s damping time makes the timed swing 2π/√(ω² − 1/τ²) = 0.47490 s, shown as 0.4749 s.
// Records gas-heat-capacity.html.
require('./lib.cjs')({ demo: 'gas-heat-capacity', title: "Rüchardt's Ball" }, async (r) => {
  const { state, p, W } = r;
  await p.addStyleTag({ content: '.vdt-btn{visibility:hidden!important} .rail::after{content:"";display:block;height:300px}' });   /* the measuring tools never appear; room below the readings so the table can scroll up into view */
  await p.clock.runFor(100);
  const scrollWin = async (y, s = 0.5) => { const y0 = await p.evaluate(() => scrollY), n = Math.max(1, Math.round(s * r.FPS));
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => scrollTo(0, v), y0 + (y - y0) * e); await r.tick(); } };
  /* drag a slider's thumb from its value to near want, then a fraction of a pixel per frame until its value is want (force-table.cjs) */
  const slide = async (sel, out, want, fine) => {
    const s = await r.box(sel), lo = +(await p.getAttribute(sel, 'min')), hi = +(await p.getAttribute(sel, 'max'));
    const at = (v) => s[0] + 8 + (s[2] - 16) * (v - lo) / (hi - lo), v0 = +(await p.inputValue(sel)), y = s[1] + s[3] / 2;
    await r.moveTo(at(v0), y, 0.6);
    await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(at(want), y, 0.7);
    const val = async () => +(await p.inputValue(sel));
    for (let i = 0; i < 90 && (await val()) !== want; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await val()) - want) * fine, y]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(4); await p.mouse.up(); state.down = false; await r.tick();
    return r.text(out);
  };
  const swings = () => p.evaluate(() => window.__gh.S.ru.swings.length);

  state.caption = "Sample reading: the period of Rüchardt's ball on a 2 L flask of dry air";
  await r.secs(3.0);

  state.caption = "Choose Rüchardt's ball: a 16.60 g steel ball in a tube on a flask of dry air";
  await r.click('#presets [data-p="ruchardt"]');
  state.arrow = { rect: await r.box('#presets [data-p="ruchardt"]') };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Set the flask: drag the Flask volume slider to 2 L';
  const card = await r.box('#cardRu');
  await scrollWin(card[1] + card[3] + 16 - r.H, 0.6);
  r.check.V = await slide('#sV', '#oV', 2, 0.5);
  state.arrow = { rect: await r.box('#oV') };
  await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Click Drop the ball. The photogate times each full swing';
  const dr = await r.box('#drop');
  if (dr[1] + dr[3] + 12 > r.H) await scrollWin((await p.evaluate(() => scrollY)) + dr[1] + dr[3] + 12 - r.H, 0.3);
  await r.click('#drop');
  r.check.dropped = await p.evaluate(() => window.__gh.S.ru.dropped);
  await r.tick(4);
  await scrollWin(0, 0.6);
  const can = await r.box('#pane');   /* the picture's pane (the 2D canvas is hidden in 3D) */
  await r.moveTo(can[0] + can[2] - 80, can[1] + 80, 0.5);
  state.zoom = [can[0] + 273, can[1] + 61, 560, 315];   /* the tube, the ball, the photogate and its timer */
  for (let i = 0; i < 300 && (await swings()) < 4; i++) await r.tick();
  state.zoom = null;
  await r.scrollRail('#out');
  const per = '#out div:nth-child(1)';
  state.arrow = { rect: await r.box(per) };
  r.check.period = await r.text(per);
  r.check.swings = await r.text('#out div:nth-child(2)');
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Record the period. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for flasks up to 20 L, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
  r.check.out = (await r.text('#out')).replace(/\s+/g, ' ');
});
