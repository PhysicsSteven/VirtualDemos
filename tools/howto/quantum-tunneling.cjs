// How this works: Quantum Wave Packets, worksheet "Quantum Tunneling". The first reading: Barrier, height 1.00 eV, packet at
// −15 nm, 3 nm wide, 0.20 eV, barrier 0.30 nm wide, launched and played until it has split. Expected (key row 1): R 0.842,
// T 0.158; a plane wave at 0.20 eV gives T = 1/(1 + V₀² sinh²(κa)/(4E(V₀ − E))) = 0.158 (κ = 4.582 /nm, κa = 1.375).
require('./lib.cjs')({ demo: 'quantum-waves', title: 'Quantum Wave Packets' }, async (r) => {
  const { state, p, W } = r;
  const set = async (sel, out, want, tol, rail) => {
    if (rail) await r.scrollRail(sel);
    const b = await r.box(sel);
    state.zoom = rail ? [W - 640, b[1] - 150, 640, 360] : [b[0] - 260, b[1] - 150, 640, 360];
    const got = await r.slide(sel, out, want, tol);
    await r.tick(4);
    return got;
  };
  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);

  state.caption = 'Sample reading: a 0.20 eV electron packet meeting a barrier 1.00 eV high and 0.30 nm wide';
  await r.secs(2.6);

  state.caption = 'Choose the Barrier setup and set the height to 1.00 eV and the width to 0.30 nm';
  await r.click('[data-p="barrier"]');
  await r.secs(0.4);
  r.check.h = await set('#s1', '#s1Out', 1.00, 0.005, true);
  r.check.a = await set('#s2', '#s2Out', 0.30, 0.005, true);
  state.zoom = null;

  state.caption = 'On the packet card: center −15 nm, width 3 nm, energy 0.20 eV';
  r.check.x0 = await set('#px0', '#px0Out', -15, 0.06);
  r.check.sig = await set('#psig', '#psigOut', 3, 0.011);
  r.check.E = await set('#pE', '#pEOut', 0.20, 0.0026);
  state.zoom = null;

  state.caption = 'Launch packet (it starts playing), pick 4×, and let the packet split';
  await r.click('#launch');
  await r.secs(0.3);
  await r.click('[data-s="4"]');
  await r.moveTo(560, 600, 0.5);
  for (let i = 0; i < 900 && (await p.evaluate(() => typeof window.vdReadingRow() !== 'object')); i++) await r.tick();
  await r.secs(0.6);
  state.caption = 'Pause once R and T have settled';
  await r.click('#play');
  r.check.t = await p.evaluate(() => window.__qw.t);

  state.caption = 'Record the reading: the reflected and transmitted shares, R and T';
  await r.scrollRail('.vd-readings');
  await r.click('.vd-rec');
  await r.tick(4);
  if ((await r.box('.vd-readings tbody tr:last-child'))[1] > r.H - 50) await r.scrollRail('.vd-readings tbody tr:last-child');
  const row = await r.box('.vd-readings tbody tr:last-child');
  state.zoom = [W - 600, Math.min(row[1] - 200, r.H - 337.5), 600, 337.5];
  state.arrow = { rect: row };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for barrier widths up to 0.8 nm, then send the table to the worksheet';
  const ex = await r.box('.vd-export');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(3.0);
  r.check.rows = await p.evaluate(() => JSON.stringify(window.vdRows()));
  r.check.ws = await p.evaluate(() => window.vdWorksheet());
});
