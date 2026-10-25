// How this works: Lagrange Points. The worksheet's first reading: the points for a mass ratio μ = 10⁻⁶.
// Demo (2026-10-25): L1 0.00691755 a and L2 0.0069496 a from m₂, L2 offsets grow ×e every 0.063874 P, L4 stable with librations of 384.9 P.
// By hand: Hill's h = (μ/3)^(1/3) = 0.0069336 a, and L1 ≈ h(1 − h/3) = 0.0069176, L2 ≈ h(1 + h/3) = 0.0069496; small L4 librations take
// P/√(27μ/4) = 384.9 P; the L2 growth rate for small μ is n√(1 + 2√7) = 2.508n, so ×e every 1/(2.508 · 2π) = 0.0635 P (the demo's exact root gives 0.0639).
require('./lib.cjs')({ demo: 'lagrange-points', title: 'Lagrange Points' }, async (r) => {
  const { state, W, p } = r;
  const thumb = (sel) => p.evaluate((s) => { const e = document.querySelector(s), q = e.getBoundingClientRect(), f = (e.value - e.min) / (e.max - e.min);
    return [q.x + 8 + f * (q.width - 16), q.y + q.height / 2]; }, sel);
  /* drag a slider's thumb to where the value should be, then nudge a fiftieth of a pixel at a time until the readout shows it */
  const slideTo = async (sel, out, value, want) => {
    const [x, y] = await thumb(sel), q = await r.box(sel), [mn, mx] = await p.evaluate((s) => [+document.querySelector(s).min, +document.querySelector(s).max], sel);
    await r.moveTo(x, y, 0.7); await p.mouse.down(); state.down = true; await r.tick(3);
    await r.moveTo(q[0] + 8 + (value - mn) / (mx - mn) * (q[2] - 16), y, 0.9);
    for (let i = 0; i < 400 && (await r.text(out)) !== want; i++) {
      const v = +(await p.evaluate((s) => document.querySelector(s).value, sel));
      state.ptr = [state.ptr[0] + (v > value ? -0.02 : 0.02), y]; await p.mouse.move(...state.ptr); if (i % 8 === 7) await r.tick();
    }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick(); return r.text(out);
  };
  const stage = await r.box('#stage');

  state.caption = 'Sample reading: the Lagrange points for a mass ratio μ = 10⁻⁶';
  await r.secs(2.6);

  state.caption = 'Set the mass ratio: drag the μ slider to 1.000 × 10⁻⁶';
  await r.scrollRail('#mu');
  r.check.mu = await slideTo('#mu', '#muOut', -6, '1.000 × 10⁻⁶');
  state.arrow = { rect: await r.box('#muOut') };
  await r.secs(0.9);
  state.arrow = null;

  state.caption = 'L1 and L2 now sit very close to m₂: press Near m₂ to see them';
  await r.click('#vNear');
  state.zoom = [stage[0], stage[1] + 40, 945, 531.5];
  await r.secs(2.0);
  state.zoom = null;

  state.caption = 'Read where L1 and L2 are, how fast L2 throws things off, and the L4 libration';
  await r.scrollRail('#lpts');
  const a = await r.box('#lpts');
  r.check.lpts = await p.evaluate(() => document.querySelector('#lpts').innerText.replace(/\n/g, ' / '));
  state.arrow = { rect: [a[0], a[1], a[2], Math.min(a[3], 470)] };
  await r.secs(2.8);
  state.arrow = null;

  state.caption = 'Record the reading. It goes into the table';
  await r.scrollRail('.vd-readings .vd-rec');
  await r.click('.vd-readings .vd-rec');
  await r.tick(4);
  const tb = await r.box('.vd-readings table.rows');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('.vd-readings table.rows tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat at each μ up to 0.1, then send the table to the worksheet';
  const ex = await r.box('.vd-readings .vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.6);
  r.check.row = await p.evaluate(() => JSON.stringify(window.vdRows()[0]));
});
