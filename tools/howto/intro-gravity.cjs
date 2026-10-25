// How this works: Gravity from the Ground to Orbit (Astro 2203, intro-gravity). Earth at sea level on the equator with the rotation
// included, then the top of Everest, the worksheet's first two places.
// Expected: GM/R² = 3.986004e14/(6.371e6)² = 9.8203 m/s², ω²R = 0.0339 m/s², effective g 9.7864 m/s²;
// at h = 8849 m (r = 6379.849 km) GM/r² = 9.7931 m/s², ω²r = 0.0339 m/s², effective g 9.7592 m/s².
require('./lib.cjs')({ demo: 'gravity-near-earth', query: '?ws=intro-gravity', title: 'Gravity from the Ground to Orbit' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');
  const geff = () => r.p.evaluate(() => [...document.querySelectorAll('#out > div')].find(d => /Effective g/.test(d.textContent)).querySelector('dd').textContent.trim());
  const geffBox = () => r.p.evaluate(() => { const q = [...document.querySelectorAll('#out > div')].find(d => /Effective g/.test(d.textContent)).getBoundingClientRect(); return [q.x, q.y, q.width, q.height]; });

  state.caption = 'Sample reading: Earth at sea level on the equator, with the rotation included';
  await r.secs(3.0);

  state.caption = 'Pick the place: press Sea level. Latitude stays at 0° and the rotation on';
  await r.click('#places button:nth-child(1)');
  state.arrow = { rect: await r.box('#spin') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Read the effective g: gravity alone less the centrifugal term';
  await r.p.evaluate(() => { const rl = document.querySelector('.rail'), c = document.querySelector('#out'); rl.scrollTop += c.getBoundingClientRect().top - rl.getBoundingClientRect().top - 40; });
  await r.tick(2);
  r.check.sea = await geff();
  state.arrow = { rect: await geffBox() };
  await r.secs(2.4);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  let tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Next place: press Top of Everest. The scale moves 8.8 km up';
  await r.p.evaluate(() => { document.querySelector('.rail').scrollTop = 0; });
  await r.tick(2);
  await r.click('#places button:nth-child(2)');
  state.zoom = [can[0], can[1] + 55, 640, 360];   /* the globe and the scale */
  await r.secs(2.4);
  state.zoom = null;
  await r.p.evaluate(() => { const rl = document.querySelector('.rail'), c = document.querySelector('#out'); rl.scrollTop += c.getBoundingClientRect().top - rl.getBoundingClientRect().top - 40; });
  await r.tick(2);
  r.check.everest = await geff();
  state.arrow = { rect: await geffBox() };
  await r.secs(1.6);
  state.arrow = null;

  state.caption = 'Record it too, and each place after it up to geostationary';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr:nth-child(2)') };
  await r.secs(1.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.rows = await r.p.evaluate(() => [...document.querySelectorAll('.vd-readings table.rows tbody tr')].map(tr => [...tr.querySelectorAll('td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent).join(' | ')));
});
