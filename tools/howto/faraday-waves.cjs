// How this works: Faraday Waves (Chladni Plates, Vibrating: Liquid layer). The worksheet's part A: the Liquid: find the onset setup
// (water 2 mm deep, square dish, 40 Hz, driven at 0.8 of the onset), recorded, then Driver setting x₀ stepped up with the arrow key
// until the waves grow, and recorded again.
// Expected: the onset Γ_c is 0.174 at 40 Hz; each x₀ step raises Γ by 350^0.01 = 1.06, so four steps take Γ from 0.139 past it;
// the surface moves at f/2 = 20 Hz with wavelength about 11 mm.
require('./lib.cjs')({ demo: 'chladni', title: 'Faraday Waves', query: '?ws=faraday-waves' }, async (r) => {
  const { state, W, p } = r;
  const thumb = (sel) => p.evaluate((s) => { const e = document.querySelector(s), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);
  const above = () => p.evaluate(() => /^Waves grow/.test(document.getElementById('rMode').textContent.trim()));

  state.caption = 'Sample reading: water 2 mm deep shaken at 40 Hz, the drive raised until waves appear';
  await r.secs(2.4);

  state.caption = 'Press the preset Liquid: find the onset';
  await r.scrollRail('#presets [data-p="farOnset"]');
  await r.click('#presets [data-p="farOnset"]');
  await r.secs(2.0);
  const can = await r.box('#can');
  state.zoom = [can[0], can[1], 640, 360];
  await r.secs(2.0);
  state.zoom = null;

  state.caption = 'Below the onset the surface stays flat: compare Dish acceleration Γ with Onset Γ';
  await r.scrollRail('#driveH');
  state.arrow = { rect: await r.box('#rGrains') };
  r.check.gamma0 = await r.text('#rPeak'); r.check.onset = await r.text('#rGrains'); r.check.surface0 = await r.text('#rMode');
  await r.secs(2.6);
  state.arrow = null;

  state.caption = 'Press Record reading';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(1.0);

  state.caption = 'Step Driver setting x₀ up with the right arrow key, one step at a time';
  await r.scrollRail('#x0');
  await r.moveTo(...(await thumb('#x0')), 0.7);
  await p.focus('#x0');
  r.check.steps = 0;
  for (let i = 0; i < 12 && !(await above()); i++) {
    await p.keyboard.press('ArrowRight'); r.check.steps++;
    await r.moveTo(...(await thumb('#x0')), 0.2);
    await r.secs(0.9);
  }
  await r.scrollRail('#driveH');
  state.caption = 'Now Γ is past the onset: the Surface readout says waves grow, at f/2 = 20 Hz';
  state.arrow = { rect: await r.box('#rMode') };
  r.check.gamma1 = await r.text('#rPeak'); r.check.surface1 = await r.text('#rMode');
  await r.secs(3.0);
  state.arrow = null;
  state.caption = 'Record it. So close to onset the waves grow slowly: step x₀ up five more times';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.secs(0.6);
  await r.scrollRail('#x0');
  await r.moveTo(...(await thumb('#x0')), 0.6);
  await p.focus('#x0');
  for (let i = 0; i < 5; i++) { await p.keyboard.press('ArrowRight'); await r.moveTo(...(await thumb('#x0')), 0.2); await r.secs(0.5); }
  r.check.gamma2 = await r.text('#rPeak'); r.check.surface2 = await r.text('#rMode');
  const c2 = await r.box('#can');
  state.caption = 'The pattern grows: squares, the surface rising and falling once for every two shakes of the dish';
  state.zoom = [c2[0], c2[1], 640, 360];
  await r.secs(9.0);
  state.zoom = null;

  state.caption = 'Record this reading too, then send the readings to the worksheet';
  await r.scrollRail('.vd-rec');
  await r.click('.vd-rec');
  await r.tick(4);
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await p.evaluate(() => [...document.querySelectorAll('.vd-readings tbody tr')].map((tr) => [...tr.cells].map((c) => c.textContent).join(' | ')));
  void W;
});
