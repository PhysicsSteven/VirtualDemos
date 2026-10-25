// How this works: Potential Energy Curves. Spring setup (k = 20 N/m, m = 0.50 kg) at E = 0.900 J, read at x = 0.150 m (the
// worksheet key's second row; its first, x = 0, is the equilibrium where U and F are zero). Expected: U = ½kx² = 0.225 J,
// K = 0.675 J, F = −kx = −3.00 N, |v| = √(2K/m) = 1.64 m/s, turning points ±√(2E/k) = ±0.300 m.
require('./lib.cjs')({ demo: 'potential-curves', title: 'Potential Energy Curves' }, async (r) => {
  const { state, p } = r;
  const num = async (sel) => parseFloat((await r.text(sel)).replace('−', '-'));
  const X0 = 505, PXM = 723.3, Y = 650;   /* the particle line: x = 0 at 505 px, 723.3 px per meter */
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
  state.zoom = [300, 425, 524, 294.75];   /* the energy diagram and the particle line, axis numbers clear of the caption */
  const x = await num('#rX');
  await r.moveTo(X0 + x * PXM, Y, 0.8);
  await p.mouse.down(); state.down = true; await r.tick(3);
  await r.moveTo(X0 + 0.15 * PXM, Y, 1.0);
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
  state.zoom = [300, 425, 524, 294.75];   /* the energy diagram and the particle line, axis numbers clear of the caption */
  await r.moveTo(X0 + 0.15 * PXM, 520, 0.8);
  await r.secs(2.6);
  state.zoom = null;

  state.caption = 'Write the row in the Data table, then try other points and energies';
  await r.moveTo(640, 560, 0.8);
  await r.secs(2.6);
});
