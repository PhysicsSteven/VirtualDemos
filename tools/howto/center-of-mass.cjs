// How this works: Center of Mass. The plate's first reading: mass 1, 1.0 kg at (0.20, 0.30) m, mass 2, 0.2 kg at (0.80, 0.30) m.
// Expected: x_cm = (1.0·0.20 + 0.2·0.80)/1.2 = 0.300 m, y_cm = 0.300 m, f = m₂/M = 0.1667.
require('./lib.cjs')({ demo: 'center-of-mass', title: 'Center of Mass' }, async (r) => {
  const { state, W } = r;
  const can = await r.box('#can');
  const thumb = (s) => r.p.evaluate(s => { const e = document.querySelector(s), q = e.getBoundingClientRect(), u = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + u * (q.width - 16), q.y + q.height / 2]; }, s);
  // where mass i, or the point (x, y) under it, is drawn on the page
  const at = (i, x, y) => r.p.evaluate(([i, x, y]) => { const a = window.__cm.S.ms[i], c = document.getElementById('can').getBoundingClientRect(),
    q = window.__cm.q3({ m: a.m, x: x == null ? a.x : x, y: y == null ? a.y : y }); return [c.left + q[0], c.top + q[1]]; }, [i, x, y]);
  const pos = (i) => r.p.evaluate(i => { const a = window.__cm.S.ms[i]; return [a.x, a.y]; }, i);
  // drag mass i to (x, y) on the plate: steer the pointer by the gap between where the mass is drawn and where the target is
  async function dragMass(i, x, y) {
    await r.moveTo(...(await at(i)), 0.6);
    await r.p.mouse.down(); state.down = true; await r.tick(3);
    for (let k = 0; k < 200; k++) {
      const [px, py] = await pos(i);
      if (Math.abs(px - x) < 1e-9 && Math.abs(py - y) < 1e-9) break;
      const a = await at(i), b = await at(i, x, y), dx = b[0] - a[0], dy = b[1] - a[1], d = Math.hypot(dx, dy), s = Math.min(1, 9 / Math.max(d, 1e-9));
      state.ptr = [state.ptr[0] + dx * s + (d < 3 ? Math.sign(dx) * 0.5 : 0), state.ptr[1] + dy * s + (d < 3 ? Math.sign(dy) * 0.5 : 0)];
      await r.p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(4); await r.p.mouse.up(); state.down = false; await r.tick();
    return (await pos(i)).map(v => v.toFixed(2)).join(', ');
  }
  const outRow = (k) => r.p.evaluate(k => { const q = document.querySelectorAll('#out > div')[k].getBoundingClientRect(); return [q.x, q.y, q.width, q.height]; }, k);

  state.caption = 'Sample reading: 1.0 kg at (0.20, 0.30) m and 0.2 kg at (0.80, 0.30) m';
  await r.secs(3.0);

  state.caption = 'Use two masses: pick mass 3, then Remove the selected mass';
  await r.moveTo(...(await at(2)), 0.7);
  state.click = r.frame; state.down = true; await r.p.mouse.down(); await r.tick(3); await r.p.mouse.up(); state.down = false;
  await r.tick(6);
  await r.click('#delM');
  await r.tick(8);

  state.caption = 'Set mass 1 to 1.0 kg with the Selected mass slider';
  await r.scrollRail('#sMass');
  await r.moveTo(...(await thumb('#sMass')), 0.6);
  r.check.m1 = await r.dragUntil(-2, 0, '#oMass', '1.0 kg (mass 1)');
  await r.tick(6);

  state.caption = 'Drag mass 1 to (0.20, 0.30) m and mass 2 to (0.80, 0.30) m';
  state.arrow = { rect: await outRow(0) };
  r.check.x1 = await dragMass(0, 0.20, 0.30);
  state.arrow = { rect: await outRow(1) };
  r.check.x2 = await dragMass(1, 0.80, 0.30);
  await r.secs(0.6);
  state.arrow = null;

  state.caption = 'With mass 2 picked, set it to 0.2 kg with the slider';
  await r.moveTo(...(await thumb('#sMass')), 0.6);
  r.check.m2 = await r.dragUntil(-2, 0, '#oMass', '0.2 kg (mass 2)');
  await r.tick(4);
  state.arrow = { rect: await outRow(3) };
  r.check.out = (await r.p.evaluate(() => document.getElementById('out').innerText)).replace(/\n/g, ' | ');
  await r.secs(2.0);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings tbody tr') };
  await r.secs(2.4);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for each mass 2, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.row = await r.p.evaluate(() => window.vdRows()[0]);
});
