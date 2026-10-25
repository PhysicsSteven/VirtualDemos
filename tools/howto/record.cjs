// Records a sample Pendulum measurement frame by frame on a fake clock (page.clock), so the video runs at true speed
// however slow the screenshots are, and logs a timeline (captions, zooms, arrows, pointer) per frame for compose.py.
const { chromium } = require('playwright');
const fs = require('fs');
const OUT = process.argv[2] || 'take';
if (!process.env.VD_THREE) throw new Error('set VD_THREE to a local three.min.js r128 (npm pack three@0.128.0)');
const URL = process.env.DEMO_URL || 'http://localhost:8811/demos/pendulum.html';
const W = 1280, H = 720, DSF = 1.5, FPS = 30, DT = 1000 / FPS;
(async () => {
  fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT + '/frames', { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: DSF, colorScheme: process.env.SCHEME || 'dark' });
  p.on('pageerror', e => console.log('ERR', e.message));
  await p.route('**/three.min.js', r => r.fulfill({ path: process.env.VD_THREE, contentType: 'application/javascript' }));
  await p.clock.install({ time: new Date('2026-01-01T00:00:00Z') }); await p.clock.pauseAt(new Date('2026-01-01T00:00:05Z'));
  await p.goto(URL);
  await p.clock.runFor(3000);
  const box = s => p.evaluate(s => { const r = document.querySelector(s).getBoundingClientRect(); return [r.x, r.y, r.width, r.height]; }, s);
  const text = s => p.evaluate(s => document.querySelector(s).textContent.trim(), s);
  // where the bob is: probe the canvas with pointer events and see where a drag would start (the setup card ghosts)
  const findBob = () => p.evaluate(() => {
    const can = document.querySelector('#can'), card = document.querySelector('#rack'), cr = can.getBoundingClientRect(), hits = [];
    for (let x = cr.left; x < cr.left + cr.width * 0.55; x += 4) for (let y = cr.top; y < cr.bottom; y += 4) {
      can.dispatchEvent(new PointerEvent('pointerdown', { clientX: x, clientY: y, bubbles: true, pointerId: 9 }));
      if (card.classList.contains('ghost')) hits.push([x, y]);
      can.dispatchEvent(new PointerEvent('pointerup', { clientX: x, clientY: y, bubbles: true, pointerId: 9 }));
    }
    return [hits.reduce((a, h) => a + h[0], 0) / hits.length, hits.reduce((a, h) => a + h[1], 0) / hits.length];
  });

  const frames = []; const state = { caption: null, zoom: null, arrow: null, ptr: [W / 2, H / 2], down: false, click: -1 };
  let f = 0;
  const tick = async (k = 1) => { for (let i = 0; i < k; i++) {
    await p.clock.runFor(DT);
    const name = `f${String(f).padStart(5, '0')}.jpg`;
    await p.screenshot({ path: `${OUT}/frames/${name}`, type: 'jpeg', quality: 93 });
    frames.push({ name, ...JSON.parse(JSON.stringify(state)) }); f++;
  } };
  const secs = s => tick(Math.round(s * FPS));
  const ease = u => u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2;
  const moveTo = async (x, y, s = 0.6) => { const n = Math.max(2, Math.round(s * FPS)), [x0, y0] = state.ptr;
    for (let i = 1; i <= n; i++) { const e = ease(i / n); state.ptr = [x0 + (x - x0) * e, y0 + (y - y0) * e]; await p.mouse.move(...state.ptr); await tick(); } };
  const click = async (sel) => { const [x, y, w, h] = await box(sel); await moveTo(x + w / 2, y + h / 2, 0.7);
    state.click = f; state.down = true; await p.mouse.down(); await tick(3); await p.mouse.up(); state.down = false; };
  // drag a few pixels per frame until the readout shows the value wanted
  const dragUntil = async (dx, dy, sel, want) => {
    await p.mouse.down(); state.down = true; await tick(4);
    for (let i = 0; i < 400 && (await text(sel)) !== want; i++) { state.ptr = [state.ptr[0] + dx, state.ptr[1] + dy]; await p.mouse.move(...state.ptr); await tick(); }
    const got = await text(sel); await tick(6); await p.mouse.up(); state.down = false; await tick(); return got;
  };
  const can = await box('#can');
  await p.mouse.move(...state.ptr);

  // 1. the goal
  state.caption = 'Sample reading: one full swing at L = 0.80 m and θ₀ = 5°';
  await secs(3.0);

  // 2. length: drag the bob up the string
  state.caption = 'Set the length: drag the bob up the string to 0.80 m';
  state.zoom = [can[0], can[1] + 40, 920, 517.5];
  await moveTo(...(await findBob()), 0.9);
  const Lgot = await dragUntil(0, -3, '#oL', '0.80 m');
  state.arrow = { rect: await box('#oL') };
  await secs(1.6);

  // 3. angle: drag sideways toward the vertical
  state.caption = 'Set the release angle: drag the bob sideways to 5°';
  state.arrow = null;
  await moveTo(...(await findBob()), 0.6);
  const Agot = await dragUntil(-2, 0, '#oA', '5°');
  state.arrow = { rect: await box('#oA') };
  await secs(1.6);
  state.arrow = null;

  // 4. release and let the photogate time a swing
  state.caption = 'Release it. The photogate times each full swing';
  state.zoom = null;
  await click('#go'); const releaseFrame = f;
  await moveTo(930, 560, 0.6);
  state.zoom = [can[0], can[1], 800, 450];   /* the timer, the bob and the gate */
  for (let i = 0; i < 400 && !/\d\.\d{3}/.test(await text('#out dd')); i++) await tick();
  const Tread = await text('#out dd');
  await secs(0.8);                                   /* see the timer show its first period before the zoom lets go */
  state.arrow = { rect: await box('#out div') };
  state.zoom = null;
  await secs(2.0);
  state.arrow = null;

  // 5. capture
  state.caption = 'Capture the reading. It goes into the table';
  await p.evaluate(() => { const r = document.querySelector('.rail'), c = document.querySelector('#capture'); r.scrollTop += c.getBoundingClientRect().top - r.getBoundingClientRect().top - 140; });
  await tick(2);
  await click('#capture');
  await tick(4);
  const tb = await box('#rowsTbl');
  state.zoom = [W - 600, tb[1] - 150, 600, 337.5];
  state.arrow = { rect: await box('#rowsTbl tbody tr') };
  await secs(2.4);
  state.arrow = null; state.zoom = null;

  // 6. what next
  state.caption = 'Repeat at each length, then send the table to the worksheet';
  const ex = await box('#exportCsv');
  await moveTo(ex[0] + ex[2] / 2, ex[1] + ex[3] / 2 + 4, 0.8);
  state.arrow = { rect: ex };
  await secs(3.0);
  const row = await p.evaluate(() => [...document.querySelectorAll('#rowsTbl tbody tr td')].map(td => td.querySelector('input') ? td.querySelector('input').value : td.textContent));
  fs.writeFileSync(`${OUT}/timeline.json`, JSON.stringify({ W, H, DSF, FPS, frames, check: { Lgot, Agot, Tread, row } }));
  const swings = await p.evaluate(() => document.querySelectorAll('#out dd')[1].textContent);
  console.log({ Lgot, swings, releasedFor: (frames.length - releaseFrame) / FPS, Agot, Tread, row, frames: frames.length, secs: (frames.length / FPS).toFixed(1) });
  await b.close();
})();
