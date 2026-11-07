// How this works: Rotating Frames (no worksheet; the demo's own button). Two sample readings.
// 1. Rolled across from the edge: 10 turns/min (Ω = 1.047 rad/s), a ball sliding at 2.0 m/s from 0.88 R = 1.76 m out, straight
//    across in the room to the far edge 2.00 m out: 3.76 m in 1.88 s. The table turns Ω t = 112.8° meanwhile.
// 2. Foucault, Paris 1851: latitude 48.846° N, 15.04° per hour × sin λ = 11.33° per hour; time runs ×1000, paused after one hour.
require('./lib.cjs')({ demo: 'rotating-frames', title: 'Rotating Frames' }, async (r) => {
  const { state, p, W } = r;
  const S = () => p.evaluate(() => ({ t: window.__rf.S.t, play: window.__rf.S.play }));
  /* mark the readout rows whose labels start with these words, scroll the rail to them, and zoom so they sit above the caption */
  const readouts = async (labels) => {
    await p.evaluate((labels) => { document.querySelectorAll('#out > div').forEach((d) => { d.classList.toggle('howto-pick', labels.some((l) => d.querySelector('dt').textContent.startsWith(l))); }); }, labels);
    await r.scrollRail('#out .howto-pick');
    const bs = await p.evaluate(() => [...document.querySelectorAll('#out .howto-pick')].map((d) => { const q = d.getBoundingClientRect(); return [q.x, q.y, q.width, q.height]; }));
    const x0 = Math.min(...bs.map((b) => b[0])), y0 = Math.min(...bs.map((b) => b[1])), x1 = Math.max(...bs.map((b) => b[0] + b[2])), y1 = Math.max(...bs.map((b) => b[1] + b[3]));
    state.zoom = [W - 600, Math.max(0, Math.min(y0 - 110, r.H - 337.5)), 600, 337.5];
    state.capTop = y1 > state.zoom[1] + 337.5 - 50;   /* rows at the foot of the window: caption on top */
    state.arrow = { rect: [x0, y0, x1 - x0, y1 - y0] };
  };

  state.ptr = [700, 420]; await p.mouse.move(...state.ptr);
  state.caption = 'Sample: a ball rolled across a turning table, then Foucault\'s pendulum';
  await r.secs(2.4);

  state.caption = 'Press Roll the ball. From the room it goes straight; riding the table it curves';
  /* bring the whole of both views into the window, then roll */
  { const y0 = await p.evaluate(() => scrollY), y1 = y0 + 150; for (let i = 1; i <= 12; i++) { await p.evaluate((v) => scrollTo(0, v), y0 + (y1 - y0) * i / 12); await r.tick(); } }
  await r.click('#play');
  const c = await r.box('#can');
  state.zoom = [c[0], Math.max(0, Math.min(c[1] + c[3], r.H) - 392), 696, 391.5];   /* both views */
  for (let i = 0; i < 6 * r.FPS && (await S()).play; i++) await r.tick();
  await r.secs(1.0);

  state.caption = 'Read the time when it reaches the edge, and how far the table has turned';
  await readouts(['Time', 'The table has turned']);
  await r.secs(2.6);
  r.check.table = await r.text('#out');
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Now choose Foucault, Paris 1851, and release it. Time runs 1000 times fast';
  await r.scrollRail('[data-p="paris"]');
  await r.click('[data-p="paris"]');
  await r.secs(0.4);
  await r.click('#play');
  /* pause near one hour of pendulum time (59.5 min, 11.21°): the pointer waits on the button */
  for (let i = 0; i < 10 * r.FPS && (await S()).t < 3500; i++) await r.tick();
  state.click = r.frame; state.down = true; await p.mouse.down(); await r.tick(2); await p.mouse.up(); state.down = false;
  r.check.pausedAt = (await S()).t;

  state.caption = 'After 59.5 min its swing has turned 11.2° clockwise, as 11.33° an hour predicts';
  await readouts(['The plane turns', 'Time elapsed', 'Plane turned, measured']);
  await r.secs(3.0);
  r.check.foucault = await r.text('#out');
  state.arrow = null; state.zoom = null; state.capTop = false;

  state.caption = 'Try the other setups. Lab Blind hides the turn so you can predict it';
  await r.secs(2.0);
});
