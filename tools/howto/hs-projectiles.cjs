// How this works: Projectiles: Sideways and Up (Projectile Range demo). Part 1's second reading: a sideways launch at 10 m/s from
// 10.0 m, air resistance off, Blind on, dots every 0.2 s, the cursor on the dot at t = 0.20 s.
// Expected: x = 10 × 0.20 = 2.00 m, y = 10.0 − ½ × 9.81 × 0.04 = 9.80 m; range 10 × √(2 × 10/9.81) = 14.28 m.
require('./lib.cjs')({ demo: 'projectile-drag', title: 'Projectiles: Sideways and Up', query: '?ws=hs-projectiles' }, async (r) => {
  const { state, W } = r;
  const stage = await r.box('#stage');
  const slide = async (sel, outSel, want, dx) => {
    const [x, y, w, h] = await r.box(sel);
    const v = await r.p.evaluate((s) => { const e = document.querySelector(s); return [+e.min, +e.max, +e.value]; }, sel);
    await r.moveTo(x + 8 + (v[2] - v[0]) / (v[1] - v[0]) * (w - 16), y + h / 2, 0.35);
    return r.dragUntil(parseFloat(want) > v[2] ? dx : -dx, 0, outSel, want);
  };
  r.click = async (sel) => { const [x, y, w, h] = await r.box(sel); await r.moveTo(x + w / 2, y + h / 2, 0.45);
    state.click = r.frame; state.down = true; await r.p.mouse.down(); await r.tick(3); await r.p.mouse.up(); state.down = false; };

  state.caption = 'Sample reading: a ball launched sideways at 10 m/s from 10.0 m, 0.20 s after launch';
  await r.secs(2.2);

  state.caption = 'Set 10 m/s, 0° and 10.0 m with the sliders';
  await r.scrollRail('#speed');
  r.check.v = await slide('#speed', '#speedOut', '10.0 m/s', 2);
  r.check.th = await slide('#angle', '#angleOut', '0.0°', 2);
  r.check.h = await slide('#height', '#heightOut', '10.0 m', 2);
  await r.secs(0.3);

  state.caption = 'Turn air resistance off, and Blind on';
  await r.scrollRail('#dragSw');
  await r.click('#dragSw button[data-d="off"]');
  await r.scrollRail('details:has(#labBlind) > summary');
  await r.click('details:has(#labBlind) > summary');
  await r.tick(3);
  await r.scrollRail('#labBlind');
  await r.click('#labBlind');
  r.check.blind = await r.p.evaluate(() => document.getElementById('labBlind').checked);
  await r.secs(0.4);

  state.caption = 'Launch';
  await r.click('#clear');
  await r.tick(3);
  await r.click('#launch');
  state.zoom = [stage[0], stage[1], stage[2], stage[2] * 9 / 16];
  for (let i = 0; i < 200 && !(await r.p.evaluate(() => /\d/.test(document.getElementById('mR').textContent))); i++) await r.tick();
  await r.secs(1.0);
  state.zoom = null;

  state.caption = 'Put a dot every 0.2 s, then step the cursor to the dot at 0.20 s';
  await r.scrollRail('#secMeasure summary');
  await r.click('#secMeasure summary');
  await r.tick(3);
  await r.scrollRail('#strobeSeg');
  await r.click('#strobeSeg button[data-dt="0.2"]');
  await r.tick(4);
  await r.click('#dotNext');
  await r.tick(3);
  await r.click('#dotNext');
  await r.tick(4);
  r.check.dot = [await r.text('#mT'), await r.text('#mX'), await r.text('#mY'), await r.text('#mR')];
  state.arrow = { rect: await r.box('#cursorOut') };
  await r.secs(1.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('#capture');
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#tbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.0);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record every dot, then send the table to the worksheet';
  const ex = await r.box('#expCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.6);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.row = await r.p.evaluate(() => [...document.querySelectorAll('#tbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
});
