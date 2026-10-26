// How this works: Spacetime Diagrams, worksheet "Spacetime Diagrams and the Lorentz Transformation". The first readings: the
// Time dilation setup, an event on the home worldline at (ct, x) = (10 ly, 0), recorded at β = 0 and 0.15 with Blind on.
// Expected (Lorentz): β = 0 gives (10.000, 0.000); β = 0.15 gives ct′ = γ·10 = 10.114 ly, x′ = −γβ·10 = −1.517 ly (γ 1.01144).
require('./lib.cjs')({ demo: 'spacetime', title: 'Spacetime Diagrams' }, async (r) => {
  const { state, p, W } = r;
  const can = await r.box('#dia');
  const record = async (s) => {
    await r.scrollRail('.vd-readings');
    await r.click('.vd-rec');
    await r.tick(4);
    const tb = await r.box('.vd-readings table');
    state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
    state.arrow = { rect: await r.box('.vd-readings tbody tr:last-child') };
    await r.secs(s);
    state.arrow = null; state.zoom = null;
  };
  const slider = async (want, dx) => {
    await r.scrollRail('#beta');
    const b = await r.box('#beta'), v = await p.evaluate(() => +document.getElementById('beta').value);
    await r.moveTo(b[0] + 8 + (b[2] - 16) * (v + 0.95) / 1.9, b[1] + b[3] / 2, 0.6);
    state.zoom = [W - 640, b[1] - 150, 640, 360];
    const got = await r.dragUntil(dx, 0, '#betaOut', want);
    state.arrow = { rect: await r.box('#betaOut') };
    await r.secs(0.8);
    state.arrow = null; state.zoom = null;
    return got;
  };
  state.ptr = [700, 400]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample readings: a clock at rest in S reads 10 years, seen from S′ at β = 0 and 0.15';
  await r.secs(2.8);

  state.caption = 'Turn Blind on, then choose the Time dilation setup';
  await r.scrollRail('#blind');
  await r.click('#blind');
  await r.secs(0.3);
  await r.scrollRail('[data-p="dilate"]');
  await r.click('[data-p="dilate"]');
  await r.secs(0.6);

  state.caption = 'Click the home worldline where the home clock reads 10 years: (ct, x) = (10 ly, 0)';
  const at = await p.evaluate(() => window.__st.scrLab(10, 0));
  const cv = await r.box('#dia');
  state.zoom = [cv[0] + at[0] - 320, cv[1] + at[1] - 140, 640, 360];
  await r.moveTo(cv[0] + at[0], cv[1] + at[1], 0.9);
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false;
  r.check.ev = await p.evaluate(() => JSON.stringify(window.__st.S.events.find(e => e.id === window.__st.S.sel[window.__st.S.sel.length - 1])));
  await r.secs(1.4);
  state.zoom = null;

  state.caption = 'Drag the speed to β = 0 and record the reading';
  r.check.b0 = await slider('0.00, at rest', -1);
  await record(1.4);

  state.caption = 'Drag the speed to β = 0.15 and record again';
  r.check.b1 = await slider('0.15, rightward', 1);
  await record(1.8);

  state.caption = 'Repeat up to β = 0.90, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
