// How this works: Transformers and Power Lines. Part 1a's first reading: the Step down setup (120 V, 60 Hz, 400 primary turns,
// ideal) with 40 secondary turns and a 100 Ω load.
// Expected: V_S = V_P N_S/N_P = 120 × 40/400 = 12.00 V, I_S = 12/100 = 0.1200 A, I_P = I_S N_S/N_P = 12.00 mA, 1.440 W in and out.
require('./lib.cjs')({ demo: 'transformers', title: 'Transformers and Power Lines' }, async (r) => {
  const { state, p, W } = r;
  // scroll the page smoothly to y over s seconds
  const scrollPage = async (y, s = 0.6) => { const y0 = await p.evaluate(() => scrollY), n = Math.round(s * r.FPS);
    for (let i = 1; i <= n; i++) { const u = i / n, e = u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2; await p.evaluate(v => window.scrollTo({ top: v, behavior: 'instant' }), y0 + (y - y0) * e); await r.tick(); } };
  const thumb = sel => p.evaluate(sel => { const e = document.querySelector(sel), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);

  state.caption = 'Sample reading: Step down transformer, 40 secondary turns, 100 Ω load';
  await r.secs(3.0);

  state.caption = 'Choose the Step down setup: 120 V on 400 primary turns, 40 secondary turns';
  await r.click('#presets [data-p="stepdown"]');
  const pane = await r.box('#pane');
  state.zoom = [pane[0], r.H - 531, 944, 531];
  state.arrow = { rect: [pane[0] + 375, pane[1] + 188, 200, 44] };   /* the turn labels N_P = 400 and N_S = 40 */
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Set the load: drag the Load resistance slider to 100 Ω';
  await scrollPage(400, 0.7);
  const card = await r.box('#cardTr');
  state.zoom = [card[0], card[1] - 40, 600, 337.5];
  await r.moveTo(...(await thumb('#sRL')), 0.8);
  r.check.RL = await r.dragUntil(2, 0, '#oRL', '100 Ω');
  state.arrow = { rect: await r.box('#oRL') };
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Read the meters: 12.00 V and 120.0 mA out, 12.00 mA drawn from the source';
  await scrollPage(0, 0.7);
  const pn = await r.box('#pane');
  state.zoom = [pn[0] + 344, pn[1], 600, 337.5];
  state.arrow = { rect: [pn[0] + pn[2] - 120, pn[1] + 8, 112, 100] };   /* V_S and I_S meters, top right of the bench */
  r.check.meters = await p.evaluate(() => [...document.querySelectorAll('#out div')].slice(0, 4).map(d => d.textContent.trim().replace(/\s+/g, ' ')));
  await r.secs(2.0);
  state.zoom = [pn[0], pn[1], 600, 337.5];
  state.arrow = { rect: [pn[0] + 4, pn[1] + 60, 112, 46] };   /* I_P meter, top left */
  await r.secs(1.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for 80 to 400 secondary turns, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => window.vdRows()[0]);
});
