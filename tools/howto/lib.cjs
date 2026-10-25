// Shared recorder for How this works videos. A demo's script (pendulum.cjs is the model) calls
//   require('./lib.cjs')({ demo: 'pendulum', title: 'Pendulums' }, async (r) => { ...steps... })
// and runs as  node tools/howto/<demo>.cjs <take dir>  (see README.md). The demo runs on Playwright's fake clock, installed
// and paused, and every frame is one runFor(1/30 s) and a screenshot, so the video plays at true speed however slow capture
// is. Everything the composer draws comes from r.state, saved per frame in <take>/timeline.json:
//   r.state.caption  the caption (the first one is the opening line; later ones are numbered steps)
//   r.state.zoom     [x, y, w, h] in CSS px to zoom to (keep 16:9), or null for the whole page
//   r.state.arrow    { rect: [x, y, w, h] } to ring and point at, or null
//   r.state.capTop   true puts a numbered caption at the top, when what the step shows sits at the bottom of the page
// Helpers: r.box(sel), r.text(sel), r.tick(frames), r.secs(s), r.moveTo(x, y, s), r.click(sel), r.dragUntil(dx, dy, sel, want),
// r.dragTo(x, y, s), r.dragWhile(dx, dy, more), r.findDrag(sel, cardSel), r.scrollRail(sel), r.p (the Playwright page), r.check (readings
// to print and save). r.speed (1 by default) runs the demo that many times faster per frame, for a long scan shown sped up (say so in
// the caption).
// Options: o.query (appended to the demo's URL), o.dsf (device scale factor, 1.5 by default; more for a small picture zoomed far in).
const { chromium } = require('playwright');
const fs = require('fs');
module.exports = async function record(o, steps) {
  const OUT = process.argv[2] || 'take';
  if (!process.env.VD_THREE) throw new Error('set VD_THREE to a local three.min.js r128 (npm pack three@0.128.0)');
  const URL = process.env.DEMO_URL || `http://localhost:8811/demos/${o.demo}.html${o.query || ''}`;
  const W = 1280, H = 720, DSF = o.dsf || 1.5, FPS = 30, DT = 1000 / FPS;
  fs.rmSync(OUT, { recursive: true, force: true }); fs.mkdirSync(OUT + '/frames', { recursive: true });
  const b = await chromium.launch();
  const p = await b.newPage({ viewport: { width: W, height: H }, deviceScaleFactor: DSF, colorScheme: 'dark' });
  p.on('pageerror', e => { if (!/setPointerCapture/.test(e.message)) console.log('ERR', e.message); });
  await p.route('**/three.min.js', r => r.fulfill({ path: process.env.VD_THREE, contentType: 'application/javascript' }));
  await p.clock.install({ time: new Date('2026-01-01T00:00:00Z') }); await p.clock.pauseAt(new Date('2026-01-01T00:00:05Z'));
  await p.goto(URL);
  await p.addStyleTag({ content: '#vdTools { visibility: hidden !important; }' });   /* the measuring tools never appear; hidden, not removed, so the layout is the live one */
  await p.clock.runFor(3000);
  const frames = [], state = { caption: null, zoom: null, arrow: null, ptr: [W / 2, H / 2], down: false, click: -1 };
  const r = { p, W, H, FPS, state, check: {}, get frame() { return frames.length; } };
  r.box = s => p.evaluate(s => { const e = document.querySelector(s); if (!e) throw new Error('no ' + s); const q = e.getBoundingClientRect(); return [q.x, q.y, q.width, q.height]; }, s);
  r.text = s => p.evaluate(s => document.querySelector(s).textContent.trim(), s);
  r.tick = async (k = 1) => { for (let i = 0; i < k; i++) {
    await p.clock.runFor(DT * (r.speed || 1));
    const name = `f${String(frames.length).padStart(5, '0')}.jpg`;
    await p.screenshot({ path: `${OUT}/frames/${name}`, type: 'jpeg', quality: 93 });
    frames.push({ name, ...JSON.parse(JSON.stringify(state)) });
  } };
  r.secs = s => r.tick(Math.round(s * FPS));
  const ease = u => u < 0.5 ? 2 * u * u : 1 - (-2 * u + 2) ** 2 / 2;
  r.moveTo = async (x, y, s = 0.6) => { const n = Math.max(2, Math.round(s * FPS)), [x0, y0] = state.ptr;
    for (let i = 1; i <= n; i++) { const e = ease(i / n); state.ptr = [x0 + (x - x0) * e, y0 + (y - y0) * e]; await p.mouse.move(...state.ptr); await r.tick(); } };
  r.click = async (sel) => { const [x, y, w, h] = await r.box(sel); await r.moveTo(x + w / 2, y + h / 2, 0.7);
    state.click = frames.length; state.down = true; await p.mouse.down(); await r.tick(3); await p.mouse.up(); state.down = false; };
  // drag a few pixels per frame until the readout shows the value wanted
  r.dragUntil = async (dx, dy, sel, want) => {
    await p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 400 && (await r.text(sel)) !== want; i++) { state.ptr = [state.ptr[0] + dx, state.ptr[1] + dy]; await p.mouse.move(...state.ptr); await r.tick(); }
    const got = await r.text(sel); await r.tick(6); await p.mouse.up(); state.down = false; await r.tick(); return got;
  };
  // the same, but drag while more() (async, reading the page) says to go on: for a target no single readout shows
  r.dragWhile = async (dx, dy, more) => {
    await p.mouse.down(); state.down = true; await r.tick(4);
    for (let i = 0; i < 400 && (await more()); i++) { state.ptr = [state.ptr[0] + dx, state.ptr[1] + dy]; await p.mouse.move(...state.ptr); await r.tick(); }
    await r.tick(6); await p.mouse.up(); state.down = false; await r.tick();
  };
  // drag from where the pointer is to (x, y)
  r.dragTo = async (x, y, s = 0.8) => { await p.mouse.down(); state.down = true; await r.tick(3); await r.moveTo(x, y, s); await r.tick(4); await p.mouse.up(); state.down = false; await r.tick(); };
  // where a drag on a canvas would start: probe it with pointer events and see where cardSel turns 'ghost' (VD.setupCard)
  r.findDrag = (sel, cardSel) => p.evaluate(([sel, cardSel]) => {
    const can = document.querySelector(sel), card = document.querySelector(cardSel), cr = can.getBoundingClientRect(), hits = [];
    for (let x = cr.left; x < cr.right; x += 4) for (let y = cr.top; y < cr.bottom; y += 4) {
      can.dispatchEvent(new PointerEvent('pointerdown', { clientX: x, clientY: y, bubbles: true, pointerId: 9 }));
      if (card.classList.contains('ghost')) hits.push([x, y]);
      can.dispatchEvent(new PointerEvent('pointerup', { clientX: x, clientY: y, bubbles: true, pointerId: 9 }));
    }
    return hits.length ? [hits.reduce((a, h) => a + h[0], 0) / hits.length, hits.reduce((a, h) => a + h[1], 0) / hits.length] : null;
  }, [sel, cardSel]);
  // scroll the sidebar so sel sits about 140 px below its top
  r.scrollRail = async (sel) => { await p.evaluate(sel => { const rl = document.querySelector('.rail'), c = document.querySelector(sel); rl.scrollTop += c.getBoundingClientRect().top - rl.getBoundingClientRect().top - 140; }, sel); await r.tick(2); };
  await p.mouse.move(...state.ptr);
  await steps(r);
  fs.writeFileSync(`${OUT}/timeline.json`, JSON.stringify({ W, H, DSF, FPS, title: o.title, frames, check: r.check }));
  console.log({ ...r.check, frames: frames.length, secs: +(frames.length / FPS).toFixed(1) });
  if (frames.length / FPS > 30) console.log('TOO LONG: keep a video at 30 s or less');
  await b.close();
};
