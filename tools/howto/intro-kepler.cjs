// How this works: Kepler's Laws from Mercury to Pluto (Astro 2203, intro-kepler). Mercury, the worksheet's first orbit: the major axis with the ruler, one revolution with the timer.
// Expected: a = 0.3871 AU, e = 0.2056, so perihelion a(1 − e) = 0.3075 AU and aphelion a(1 + e) = 0.4667 AU, major axis 0.7742 AU;
// P = a^1.5 = 0.2408 yr. The ruler points are clicked by hand and the planet paused by eye, so expect a few parts in a thousand.
require('./lib.cjs')({ demo: 'kepler-orbits', query: '?ws=intro-kepler', title: "Kepler's Laws from Mercury to Pluto" }, async (r) => {
  const { state, p } = r;
  const toSel = async (sel, off) => { await p.evaluate(([sel, off]) => { const rl = document.querySelector('.rail'), c = document.querySelector(sel); rl.scrollTop += c.getBoundingClientRect().top - rl.getBoundingClientRect().top - off; }, [sel, off]); await r.tick(2); };
  /* page position of a point on the orbit plane (AU) in the 3D view */
  const at = (x, y) => p.evaluate(([x, y]) => { const K = window.__kepler, q = K.T3.S.project([x * K.T3.k, y * K.T3.k, 0]), c = document.querySelector('#view').getBoundingClientRect(); return [c.x + q[0], c.y + q[1]]; }, [x, y]);
  const tap = async () => { state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(2); await p.mouse.up(); state.down = false; await r.tick(); };
  const view = [170, 150, 700, 393.75];

  state.caption = "Sample reading: Mercury's orbit, its size with the ruler and its period with the timer";
  await r.secs(2.6);

  state.caption = 'Hide the answers: open Lab and turn on Blind, so the drawing shows no distances';
  await toSel('details.fold:has(#blind) > summary', 160);
  await r.click('details.fold:has(#blind) > summary');
  await r.tick(3);
  await r.click('#blind');
  await r.secs(0.6);

  state.caption = "Turn on the Ruler, then click the orbit's two ends: perihelion and aphelion";
  await toSel('#timerBtn', 90);   /* clear of the sticky handout button */
  await r.click('#tRuler');
  state.zoom = view;
  const el = await p.evaluate(() => { const L = window.__kepler.S.launch, rp = Math.hypot(L.x, L.y); return { rp, ux: L.x / rp, uy: L.y / rp }; });
  const Q = 2 * 0.3871 - el.rp;   /* aphelion from the preset's a, opposite the launch point */
  await r.moveTo(...(await at(el.rp * el.ux, el.rp * el.uy)), 0.8); await tap();
  await r.moveTo(...(await at(-Q * el.ux, -Q * el.uy)), 1.0); await tap();
  r.check.ruler = await r.text('#ru12');
  state.zoom = null;
  state.arrow = { rect: await r.box('#ru12') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Pause, press Reset, start the timer, then play';
  await r.click('#play');
  await r.click('#reset');
  await r.click('#timerBtn');
  await r.click('#play');

  state.caption = 'Pause again when the planet is back at its launch point';
  state.zoom = view;
  const pl = await r.box('#play');
  await r.moveTo(pl[0] + pl[2] / 2, pl[1] + pl[3] / 2, 0.8);
  /* by eye: pause on the frame closest to the launch line, one frame of motion being vy·Δt */
  let prev = 0;
  for (let i = 0; i < 400; i++) {
    const s = await p.evaluate(() => { const A = window.__kepler.S.A, L = window.__kepler.S.launch; return { t: window.__kepler.S.t, side: (L.x * A.y - L.y * A.x) / Math.hypot(L.x, L.y), v: Math.hypot(A.vx, A.vy) }; });
    if (s.t > 0.15 && prev < 0 && s.side > -0.5 * s.v * 0.04 / 30) break;
    prev = s.side; await r.tick();
  }
  state.click = r.frame; await p.mouse.down(); await p.mouse.up();   /* pause on this frame */
  await r.tick();
  r.check.simT = await p.evaluate(() => window.__kepler.S.t);
  await r.secs(0.5);
  state.zoom = null;

  state.caption = 'Stop the timer and read it: one revolution';
  await r.click('#timerBtn');
  r.check.timer = await r.text('#timerOut');
  state.arrow = { rect: await r.box('#timerOut') };
  await r.secs(1.4);
  state.arrow = null;

  state.caption = 'Capture the reading. It goes into the table';
  await toSel('#capture', 110);
  await r.click('#capture');
  await r.tick(4);
  const tb = await r.box('#tbl');
  state.zoom = [r.W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await r.box('#tbl tbody tr') };
  await r.secs(2.2);
  state.arrow = null; state.zoom = null;

  state.caption = 'Repeat for the other seven objects, then send the table to the worksheet';
  const ex = await r.box('#expCsv');
  await r.moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await r.secs(2.4);
  r.check.rows = await p.evaluate(() => [...document.querySelectorAll('#tbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent).join(' | '));
});
