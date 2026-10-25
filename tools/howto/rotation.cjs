// How this works: Rotation and Torque. The first Door swing push: door 0.90 m and 15 kg, F = 20 N at r = 0.80 m, θ = 90°, F keeping its angle.
// Expected: τ = rF = 16.0 N·m, I = mL²/3 = 4.05 kg·m², α = τ/I = 3.951 rad/s², t to 90° = √(2·(π/2)/α) = 0.892 s, ω = αt = 3.52 rad/s.
require('./lib.cjs')({ demo: 'rotation', title: 'Rotation and Torque' }, async (r) => {
  const { state, p } = r;
  const view = await r.box('#view');
  /* the push point grip: probe the canvas for the 'move' cursor it shows over the grip */
  const grip = () => p.evaluate(() => { const v = document.querySelector('#view'), q = v.getBoundingClientRect(), hits = [];
    for (let x = q.left; x < q.right; x += 3) for (let y = q.top; y < q.bottom; y += 3) { v.dispatchEvent(new PointerEvent('pointermove', { clientX: x, clientY: y, bubbles: true })); if (v.style.cursor === 'move') hits.push([x, y]); }
    v.style.cursor = 'default'; return [hits.reduce((a, h) => a + h[0], 0) / hits.length, hits.reduce((a, h) => a + h[1], 0) / hits.length]; });
  /* drag along the door, fast while far from the value wanted, then a pixel at a time */
  const dragR = async (want) => {
    await p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 300; i++) { const v = parseFloat(await r.text('#tROut')); if (Math.abs(v - want) < 1e-6) break;
      const s = Math.sign(want - v) * (Math.abs(want - v) > 0.06 ? 4 : 0.8); state.ptr = [state.ptr[0] + 0.925 * s, state.ptr[1] + 0.378 * s]; await p.mouse.move(...state.ptr); await r.tick(); }
    const got = await r.text('#tROut'); await r.tick(6); await p.mouse.up(); state.down = false; await r.tick(); return got;
  };

  state.caption = 'Sample reading: the first door push, 20 N at 0.80 m, at 90° to the door';
  await r.tick(20);
  state.arrow = { rect: await r.box('#tFOut') }; await r.secs(1.0);
  state.arrow = { rect: await r.box('#tThOut') }; await r.secs(1.0);
  state.arrow = null;

  state.caption = 'Set the push point: drag the grip along the door to 0.80 m';
  state.zoom = [view[0], view[1] + 90, 800, 450];
  await r.moveTo(...(await grip()), 0.9);
  r.check.r = await dragR(0.80);
  r.check.F = await r.text('#tFOut'); r.check.theta = await r.text('#tThOut');
  state.zoom = null;
  state.arrow = { rect: await r.box('#tROut') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Push. The door turns through 90°';
  await r.click('#act');
  await r.moveTo(560, 640, 0.5);
  await r.secs(2.2);

  state.caption = 'Read τ, α, the time to 90° and ω on reaching 90°';
  await r.scrollRail('#qTau');
  const rd = await r.box('.rail section:has(#qTau) dl');
  state.zoom = [1280 - 540, Math.max(0, rd[1] - 30), 540, 303.75];
  for (const s of ['#qTau', '#qAl', '#qT90', '#qW90']) { state.arrow = { rect: await r.box(s) }; await r.secs(1.3); }
  state.arrow = null; state.zoom = null;
  for (const s of ['#qTau', '#qI', '#qAl', '#qT90', '#qW90']) r.check[s.slice(1)] = await r.text(s);

  state.caption = 'Write them in the Door swing table, then push at 0.40 m';
  await r.secs(3.5);
});
