// How this works: Craters, Cooling and Surface Ages (Worksheet 1). Part 1's first reading: a dense rock asteroid 0.1 km
// across hits the Moon at 18 km/s and 45°.
// Expected (Collins, Melosh and Marcus 2005): D_tc = 2.66 km, final crater D = 1.25 D_tc = 3.32 km, a simple bowl.
require('./lib.cjs')({ demo: 'craters', title: 'Craters, Cooling and Surface Ages', query: '?ws=intro-craters' }, async (r) => {
  const { state, W, p } = r;
  const sc = await r.box('#scene');
  /* a readout row by the words in its label */
  /* the readings sit below the fold at 1280 × 720: scroll the page (and the sidebar) to bring sel to the middle */
  const into = async (sel) => { await p.evaluate((sel) => document.querySelector(sel).scrollIntoView({ block: 'center' }), sel); await r.tick(2); };
  const row = (t) => p.evaluate((t) => { const d = [...document.querySelectorAll('#out dt')].find((e) => e.textContent.includes(t)).parentElement.getBoundingClientRect(); return [d.x, d.y, d.width, d.height]; }, t);

  state.caption = 'Sample reading: a rock 0.1 km across hits the Moon at 18 km/s';
  await r.secs(2.6);

  state.caption = 'Set the size: drag Asteroid diameter L down to 100 m';
  const sl = await r.box('#sL'), v = await p.evaluate(() => +document.getElementById('sL').value);
  await r.moveTo(sl[0] + 8 + (sl[2] - 16) * v / 1000, sl[1] + sl[3] / 2, 0.8);
  r.check.L = await r.dragUntil(-1, 0, '#oL', '100 m');
  state.arrow = { rect: await r.box('#oL') };
  await r.secs(1.2);
  state.arrow = { rect: await r.box('#selBody') };
  state.caption = 'The target is the Moon, the rock dense, 18 km/s at 45°, as the worksheet asks';
  await r.secs(2.2);
  state.arrow = null;

  state.caption = 'Drop it, and wait for the crater to form';
  await r.click('#play');
  await r.moveTo(sc[0] + sc[2] * 0.3, sc[1] + sc[3] * 0.85, 0.6);
  state.zoom = [sc[0], sc[1], sc[2], sc[2] * 9 / 16];
  for (let i = 0; i < 300 && (await p.evaluate(() => window.__cr.S.anim < 1)); i++) await r.tick();
  await r.secs(1.0);
  state.zoom = null;

  await into('#out');
  const d = await row('Final crater');
  r.check.D = await p.evaluate(() => [...document.querySelectorAll('#out dt')].find((e) => e.textContent.includes('Final crater')).nextElementSibling.textContent);
  r.check.shape = await p.evaluate(() => [...document.querySelectorAll('#out dt')].find((e) => e.textContent.includes('Shape')).nextElementSibling.textContent);
  state.caption = `Read the crater: ${r.check.D} across, a ${r.check.shape}`;
  state.arrow = { rect: d };
  await r.secs(2.4);
  state.arrow = { rect: await row('Shape') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await into('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, Math.max(0, tb[1] - 150), 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each size, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
