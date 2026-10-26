// How this works: Photoelectric Effect, worksheet "The Photoelectric Effect". The first reading: Theory line and answers off,
// cesium (φ = 2.14 eV), 40 µW, 250 nm; the collector voltage lowered until the meter just reads 0.00 nA.
// Expected: hc/λ = 1239.84/250 = 4.959 eV, K_max = 2.819 eV, so V₀ = 2.82 V on the 0.01 V step (key row 1: 2.82 V, 0.00 nA).
require('./lib.cjs')({ demo: 'photoelectric', title: 'Photoelectric Effect', query: '?view=flat' }, async (r) => {
  const { state, p, W } = r;
  const val = (id) => p.evaluate((id) => +document.getElementById(id).value, id);
  const nA = () => p.evaluate(() => window.__pe.current(window.__pe.S.V) * 1e9);
  const slider = async (id, lo, hi) => {
    await r.scrollRail('#' + id);
    const b = await r.box('#' + id), v = await val(id);
    await r.moveTo(b[0] + 8 + (b[2] - 16) * (v - lo) / (hi - lo), b[1] + b[3] / 2, 0.7);
    return b;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: the stopping voltage for cesium lit at 250 nm';
  await r.secs(2.6);

  state.caption = 'Untick Theory line and answers under Layers, then choose cesium';
  await r.scrollRail('details.fold:has(#tTheory) > summary');
  await r.click('details.fold:has(#tTheory) > summary');
  await r.tick(4);
  await r.scrollRail('#tTheory');
  await r.click('#tTheory');
  await r.secs(0.3);
  await r.scrollRail('[data-m="Cs"]');
  await r.click('[data-m="Cs"]');
  await r.secs(0.5);

  state.caption = 'Set the wavelength: drag λ down to 250 nm';
  const b = await slider('lam', 100, 800);
  state.zoom = [W - 640, b[1] - 140, 640, 360];
  await r.dragWhile(-1, 0, async () => (await val('lam')) > 252);
  for (let i = 0; i < 10; i++) { const x = await val('lam'); if (x === 250) break; await p.keyboard.press(x > 250 ? 'ArrowLeft' : 'ArrowRight'); await r.tick(2); }
  r.check.lam = await r.text('#lamOut');
  state.arrow = { rect: await r.box('#lamOut') };
  await r.secs(0.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Lower the collector voltage until the meter just reads 0.00 nA';
  const v = await slider('volt', -6, 4);
  const pane = await r.box('.stage');
  state.zoom = [W - 660, 140, 640, 360];
  await r.dragWhile(-1, 0, async () => (await nA()) >= 0.005);
  for (let i = 0; i < 40; i++) { await p.keyboard.press('ArrowRight'); await r.tick(2); if ((await nA()) >= 0.005) { await p.keyboard.press('ArrowLeft'); await r.tick(2); break; } }
  r.check.V = await r.text('#voltOut'); r.check.I = await r.text('#rI');
  state.arrow = { rect: await r.box('#voltOut') };
  await r.secs(1.6);
  state.arrow = null; state.zoom = null;

  state.caption = 'Press Record V₀. The point goes on the graph and into the table';
  await r.scrollRail('#record');
  await r.click('#record');
  await r.tick(4);
  const m = await r.box('#recMsg');
  state.zoom = [W - 640, m[1] - 160, 640, 360];
  state.arrow = { rect: m };
  r.check.msg = await r.text('#recMsg');
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at 300 nm and the five mercury lines, then send the points to the worksheet';
  const ex = await r.box('#csv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.theory = await p.evaluate(() => document.getElementById('tTheory').checked);
});
