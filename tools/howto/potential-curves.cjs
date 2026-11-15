// How this works: Potential Energy Curves. Spring setup (k = 20 N/m, m = 0.50 kg) at E = 0.900 J, read at x = 0.150 m (the
// worksheet key's second row; its first, x = 0, is the equilibrium where U and F are zero). Expected: U = ½kx² = 0.225 J,
// K = 0.675 J, F = −kx = −3.00 N, |v| = √(2K/m) = 1.64 m/s, turning points ±√(2E/k) = ±0.300 m.
require('./lib.cjs')({ demo: 'potential-curves', title: 'Potential Energy Curves' }, async (r) => {
  const { state, p } = r;
  const num = async (sel) => parseFloat((await r.text(sel)).replace('−', '-'));
  /* page pixels from the demo's own geometry (window.__pc): the particle's grip on its line, and the x of a position in meters */
  const mc = () => r.box('#mCan');
  const grip = async () => { const c = await mc(), h = (await p.evaluate(() => __pc.handles)).find((q) => q.id === 'P'); return [c[0] + h.pt[0], c[1] + h.pt[1]]; };
  const px = async (x) => { const c = await mc(); return c[0] + (await p.evaluate((x) => __pc.pix(x), x))[0]; };
  /* the energy diagram sits below the 3D view, under the fold at 1280 x 720: scroll it into view first */
  const showDiagram = async () => { await p.evaluate(() => document.querySelector('#mCan').scrollIntoView({ block: 'end' })); await r.tick(2); };
  const zoomOn = async () => { const c = await mc(), w = Math.min(c[2], 720), h = w * 9 / 16; return [c[0] + (c[2] - w) / 2, Math.max(0, c[1] + c[3] - h + 10), w, h]; };
  const settle = async (sel, want, ax) => {
    for (let i = 0; i < 160 && Math.abs((await num(sel)) - want) > 1e-9; i++) {
      state.ptr = [state.ptr[0] - Math.sign((await num(sel)) - want) * ax, state.ptr[1]]; await p.mouse.move(...state.ptr); await r.tick();
    }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
    return r.text(sel);
  };

  state.caption = 'Sample: the spring at total energy 0.900 J, read at x = 0.150 m';
  await r.secs(3.0);

  state.caption = 'Pause the particle';
  await r.click('#play');
  await r.secs(0.6);

  state.caption = 'Drag the particle to x = 0.150 m';
  await showDiagram();
  state.zoom = await zoomOn();   /* the energy diagram and the particle line */
  const g0 = await grip();
  await r.moveTo(g0[0], g0[1], 0.8);
  await p.mouse.down(); state.down = true; await r.tick(3);
  await r.moveTo(await px(0.15), g0[1], 1.0);
  r.check.x = await settle('#rX', 0.150, 0.25);
  await r.secs(1.6);
  state.zoom = null;

  state.caption = 'Read the potential energy, the force and the speed there';
  await r.scrollRail('#rE');
  const a = await r.box('#rE'), b = await r.box('#rF');
  state.arrow = { rect: [a[0] - 4, a[1] - 22, b[0] + b[2] - a[0] + 8, b[1] + b[3] - a[1] + 26] };
  for (const k of ['rE', 'rX', 'rU', 'rK', 'rV', 'rF', 'rTP']) r.check[k] = await r.text('#' + k);
  await r.secs(4.0);
  state.arrow = null;

  state.caption = 'Check it: the gap from the curve up to the energy line is K';
  await showDiagram();
  state.zoom = await zoomOn();
  const c = await mc(), u = await p.evaluate(() => __pc.pix(0.15));
  await r.moveTo(c[0] + u[0], c[1] + u[1] - 30, 0.8);   /* just above the curve at x, in the gap up to the energy line */
  await r.secs(2.6);
  state.zoom = null;

  state.caption = 'Write the row in the Data table, then try other points and energies';
  await r.moveTo(640, 560, 0.8);
  await r.secs(2.6);
});
