// How this works: Magnetism from Relativity, worksheet "Magnetism from Relativity". The first reading: Wire, lab frame, Speeds
// near c, an electron at r = 2.0 cm moving with the electrons (u = v), Blind on, at βᵥ = 0.10. Expected (key row 1):
// F = −1.44e−15 N in the lab, F′ = γᵤF = −1.447e−15 N, net λ′ = γᵤβᵤβᵥλ₀ = 0.01005 µC/m (λ₀ = 1 µC/m, γᵤ = 1.00504).
require('./lib.cjs')({ demo: 'relativity-em', title: 'Magnetism from Relativity' }, async (r) => {
  const { state, p, W } = r;
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
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: an electron moving with the wire’s electrons at 0.10c, 2.0 cm from the wire';
  await r.secs(2.8);

  state.caption = 'Turn Blind on, then choose Wire, lab frame with Speeds near c and an electron';
  await r.scrollRail('#blind');
  await r.click('#blind');
  await r.secs(0.3);
  await r.scrollRail('[data-p="lab"]');
  await r.click('[data-p="lab"]');
  await r.secs(0.3);
  await r.click('[data-s="fast"]');
  await r.secs(0.2);
  await r.scrollRail('[data-q="-1"]');
  await r.click('[data-q="-1"]');
  r.check.setup = await p.evaluate(() => [window.__relem.S.blind, window.__relem.S.scale, window.__relem.wp().q, window.__relem.S.r, document.getElementById('lock').checked]);
  await r.secs(0.4);

  state.caption = 'With u = v ticked, drag the electron drift to 0.10c';
  await r.scrollRail('#sv');
  const b = await r.box('#sv'), v = await p.evaluate(() => +document.getElementById('sv').value);
  await r.moveTo(b[0] + 8 + (b[2] - 16) * (v + 0.9) / 1.8, b[1] + b[3] / 2, 0.6);
  state.zoom = [W - 640, b[1] - 120, 640, 360];
  r.check.v = await r.dragUntil(-1, 0, '#svOut', '+0.10c');
  state.arrow = { rect: await r.box('#svOut') };
  await r.secs(0.8);
  state.arrow = null; state.zoom = null;

  state.caption = 'Record the reading: the force in the lab and in the charge’s frame';
  await record(2.0);

  state.caption = 'Switch to the charge’s frame and watch the two lines of charge';
  await r.click('[data-f="charge"]');
  await r.moveTo(560, 560, 0.6);
  await r.secs(3.2);

  state.caption = 'Repeat at βᵥ = 0.3 to 0.9, then send the table to the worksheet';
  await r.scrollRail('.vd-readings');
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
});
