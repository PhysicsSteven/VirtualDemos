#!/usr/bin/env node
/* Frame rate decay check (Steve, 2026-11-14): run a demo for a while under load and flag a frame rate that falls as it runs.
   Charged Particles in Matter fell from 60 to 5 fps after about 290 tracks (every frame redrew every track; fixed 5aaa799);
   no short check could see it, because it only showed after a minute of running.

   NODE_PATH=/opt/node-tools/node_modules node tools/perfcheck.cjs charged-particles            (or --all; --jobs 2; --seconds 60)
   In the cloud container set VD_THREE to a local three.min.js r128 (cdnjs is blocked).

   For each demo, at 1280x800 in Night: open, start it (Play if nothing moves) at its own defaults, the way a student leaves it
   running, and keep pressing any Fire, Launch, Add, Drop or Emit button once a second, so whatever piles up keeps piling up.
   --stress also turns every rate, speed or "per second" control to its top first (the worst case a student can choose).
   Every requestAnimationFrame callback is timed in the page. It then compares seconds 1 to 4 after the start with the last 10 s:
     FAIL  script time per frame doubled and reached 12 ms, or the page stopped drawing frames;
     warn  script time per frame grew by half and reached 4 ms, the JS heap grew more than 60 MB, or the page gained 2,000+ elements.
   Measured 2026-11-14 on Charged Particles at its defaults for 45 s: the version before 5aaa799 went 11 to 25 ms a frame (FAIL),
   the fixed one 5.7 to 4.6 ms (pass).
   Known values in tools/breakit/<demo>.cjs are checked again at the end, so a long run also catches drift (energy that creeps).
   Frame rates headless are low (software drawing) and noisy on a busy machine, so the check reads the change in script time
   within one run, not the frame rate;
   run it with few jobs on a quiet machine and rerun a flagged demo alone before believing it.
   tools/perfcheck/<demo>.cjs may export { load: 'page code' } run once a second instead of the button presses, or { skip: 'why' }.

   Output: one line per demo with start and end ms per frame, fps, heap; pictures at start and end and a JSON report in
   $VDCHECK_DIR/perfcheck. Exit 1 when any demo fails. */
'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(process.env.VDCHECK_DIR || '/tmp/vdcheck', 'perfcheck');
const argv = process.argv.slice(2);
const opt = (n, d) => { const i = argv.indexOf(n); return i >= 0 ? +argv[i + 1] || d : d; };
const JOBS = opt('--jobs', 1), SECONDS = Math.max(30, opt('--seconds', 60)), WIN = 10;
const fileArg = (i) => argv[i - 1] === '--jobs' || argv[i - 1] === '--seconds' || argv[i - 1] === '--file';
const isRedirect = (d) => /http-equiv="refresh"/i.test(fs.readFileSync(path.join(ROOT, 'demos', d + '.html'), 'utf8'));
const demos = (argv.includes('--all') ? fs.readdirSync(path.join(ROOT, 'demos')).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5))
  : argv.filter((a, i) => !a.startsWith('--') && !fileArg(i))).filter((d) => !isRedirect(d));
/* --file other.html tests that file in place of demos/<demo>.html (an older version, to see the check catch a known slowdown) */
const FILE = argv.includes('--file') ? path.resolve(argv[argv.indexOf('--file') + 1]) : null;
if (!demos.length) { console.error('usage: node tools/perfcheck.cjs demo... | --all [--jobs N] [--seconds S] [--stress] [--file old.html]'); process.exit(2); }
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.bin': 'application/octet-stream' };
const LOAD_BTN = /^(fire|launch|add|drop|emit|shoot|send|release|throw|spawn|inject|more)\b/i;
const STRESS = argv.includes('--stress');
const RATE = /rate|speed|warp|per ?s|\/s|fast|time ?scale|tracks|count|number|particles|molecules|how many/i;

function serve() {
  const s = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split(/[?#]/)[0]).replace(/^\/+/, '');
    if (rel.split('/').includes('..')) { res.writeHead(403).end(); return; }
    let b; try { b = FILE && /^demos\/[^/]+\.html$/.test(rel) && demos.length === 1 ? fs.readFileSync(FILE) : fs.readFileSync(path.join(ROOT, rel)); } catch (_) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', TYPES[path.extname(rel)] || 'application/octet-stream'); res.end(b);
  });
  return new Promise((r) => s.listen(0, '127.0.0.1', () => r({ s, base: `http://127.0.0.1:${s.address().port}/` })));
}

/* times every animation frame callback; one record per frame: [time, ms of script in callbacks] */
const TIMER = () => {
  const raf = window.requestAnimationFrame.bind(window), rec = window.__perf = { frames: [], cur: -1, ms: 0 };
  window.requestAnimationFrame = (cb) => raf((t) => {
    if (t !== rec.cur) { if (rec.cur >= 0) rec.frames.push([rec.cur, rec.ms]); rec.cur = t; rec.ms = 0; }
    const a = performance.now(); try { cb(t); } finally { rec.ms += performance.now() - a; }
  });
};

const stats = (frames, from, to) => {
  const f = frames.filter(([t]) => t >= from && t < to);
  if (f.length < 3) return { fps: 0, ms: 0, p90: 0, n: f.length };
  const ms = f.map((x) => x[1]).sort((a, b) => a - b);
  return { fps: f.length / ((to - from) / 1000), ms: ms.reduce((a, b) => a + b, 0) / ms.length, p90: ms[Math.floor(ms.length * 0.9)], n: f.length };
};

async function runDemo(browser, base, d) {
  const dir = path.join(OUT, d); fs.mkdirSync(dir, { recursive: true });
  const spec = fs.existsSync(path.join(__dirname, 'breakit', d + '.cjs')) ? require(path.join(__dirname, 'breakit', d + '.cjs')) : {};
  const pspec = fs.existsSync(path.join(__dirname, 'perfcheck', d + '.cjs')) ? require(path.join(__dirname, 'perfcheck', d + '.cjs')) : {};
  if (pspec.skip) return { demo: d, skipped: pspec.skip, findings: [] };
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, colorScheme: 'dark', reducedMotion: 'no-preference' });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  if (process.env.VD_THREE) await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: process.env.VD_THREE }));
  await ctx.addInitScript(TIMER);
  const page = await ctx.newPage(), errs = [], found = [];
  page.on('pageerror', (e) => errs.push('page error: ' + e.message.split('\n')[0]));
  page.on('dialog', (dl) => dl.dismiss().catch(() => {}));
  page.on('popup', (p) => p.close().catch(() => {}));
  const cdp = await ctx.newCDPSession(page); await cdp.send('Performance.enable');
  const heap = async () => { const m = (await cdp.send('Performance.getMetrics')).metrics; const g = (k) => (m.find((x) => x.name === k) || {}).value || 0;
    /* elements in the document, not CDP's Nodes (that also counts detached nodes waiting for garbage collection) */
    return { mb: g('JSHeapUsedSize') / 1048576, nodes: await page.evaluate(() => document.getElementsByTagName('*').length).catch(() => 0) }; };
  const shot = async (f) => { try { await page.screenshot({ path: path.join(dir, f), timeout: 20000 }); } catch (_) {} };
  await page.goto(base + 'demos/' + d + '.html', { waitUntil: 'load' });
  await page.waitForTimeout(1500);
  /* start it: Play if the picture is still; every rate control to its top */
  const moving = await page.evaluate(() => new Promise((r) => { const n = window.__perf.frames.length; setTimeout(() => r(window.__perf.frames.length - n), 600); }));
  const changed = await page.evaluate(() => { const c = [...document.querySelectorAll('canvas')].filter((x) => x.offsetParent !== null)
    .sort((a, b) => b.width * b.height - a.width * a.height)[0]; return c ? c.toDataURL().length : 0; });
  await page.waitForTimeout(500);
  const changed2 = await page.evaluate(() => { const c = [...document.querySelectorAll('canvas')].filter((x) => x.offsetParent !== null)
    .sort((a, b) => b.width * b.height - a.width * a.height)[0]; return c ? c.toDataURL().length : 0; });
  const play = await page.$('#play, #go, #run, #start, #playBtn');
  if (play && await play.isVisible() && (moving < 5 || changed === changed2)) await play.click({ timeout: 2000 }).catch(() => {});
  const raised = !STRESS ? [] : await page.evaluate((src) => {
    const re = new RegExp(src, 'i'), out = [];
    const label = (e) => ((e.labels && e.labels[0] ? e.labels[0].textContent : '') + ' ' + e.id + ' ' + (e.getAttribute('aria-label') || '') + ' '
      + (e.closest('label, .row, .ctl') ? e.closest('label, .row, .ctl').textContent : '')).slice(0, 200);
    for (const e of document.querySelectorAll('input[type=range], select')) {
      if (e.offsetParent === null || e.disabled || e.closest('header, nav, dialog, .vd-prefs') || !re.test(label(e))) continue;
      if (e.tagName === 'SELECT') { const o = [...e.options].filter((x) => !x.disabled); if (!o.length || isNaN(parseFloat(o[o.length - 1].value))) continue; e.value = o.reduce((a, b) => (parseFloat(b.value) > parseFloat(a.value) ? b : a)).value; }
      else e.value = e.max || 100;
      e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true }));
      out.push((e.id || e.name || e.tagName.toLowerCase()) + '=' + e.value);
    }
    return out;
  }, RATE.source).catch(() => []);
  const loadBtns = await page.evaluate((src) => [...document.querySelectorAll('main button, .stage button, .panel button')]
    .filter((b) => b.offsetParent !== null && !b.disabled && !b.closest('header, nav, dialog, .vd-prefs') && new RegExp(src, 'i').test(b.textContent.trim()))
    .map((b, i) => { b.setAttribute('data-perf', i); return b.textContent.trim().slice(0, 20); }), LOAD_BTN.source).catch(() => []);
  const t0 = await page.evaluate(() => performance.now());
  await shot('start.png');
  const h0 = await heap();
  const end = Date.now() + SECONDS * 1000;
  let hWarm = null;
  while (Date.now() < end) {
    await page.waitForTimeout(1000);
    if (pspec.load) await page.evaluate(pspec.load).catch((e) => errs.push('load step threw ' + e.message));
    else for (let i = 0; i < loadBtns.length; i++) await page.evaluate((i) => { const b = document.querySelector('[data-perf="' + i + '"]'); if (b && !b.disabled) b.click(); }, i).catch(() => {});
    if (!hWarm && Date.now() > end - (SECONDS - 5) * 1000) hWarm = await heap();
  }
  /* how long the page takes to answer: a demo that stopped animating on its own answers at once; a frozen one doesn't */
  const lag = await (async () => { const a = Date.now(); await page.evaluate(() => new Promise((r) => setTimeout(r, 0))).catch(() => {}); return Date.now() - a; })();
  const t1 = await page.evaluate(() => performance.now());
  const frames = await page.evaluate(() => window.__perf.frames);
  const h1 = await heap();
  await shot('end.png');
  /* the first window is seconds 1 to 4 (before much has piled up); the last is the final 10 s */
  const a = stats(frames, t0 + 1000, t0 + 4000), b = stats(frames, t1 - WIN * 1000, t1);
  if (a.n >= 3 && b.n >= 3) {
    /* script time, not fps: headless software drawing caps fps near 10 for every demo, so fps can't tell a slowdown apart */
    if (b.ms >= 2 * a.ms && b.ms >= 12)
      found.push({ level: 'FAIL', what: 'slows as it runs: ' + a.ms.toFixed(1) + ' to ' + b.ms.toFixed(1) + ' ms of script a frame (' + a.fps.toFixed(0) + ' to ' + b.fps.toFixed(0) + ' fps here)' });
    else if (b.ms >= 1.5 * a.ms && b.ms >= 4)
      found.push({ level: 'warn', what: 'script time a frame grew: ' + a.ms.toFixed(1) + ' to ' + b.ms.toFixed(1) + ' ms' });
  } else if (a.n >= 3 && b.n < 3 && lag > 1000) found.push({ level: 'FAIL', what: 'froze: no frames in the last 10 s and the page took ' + (lag / 1000).toFixed(1) + ' s to answer (' + a.fps.toFixed(0) + ' fps at the start)' });
  const hb = hWarm || h0;
  if (h1.mb - hb.mb > 60) found.push({ level: 'warn', what: 'JS heap grew ' + (h1.mb - hb.mb).toFixed(0) + ' MB while running (' + hb.mb.toFixed(0) + ' to ' + h1.mb.toFixed(0) + ' MB)' });
  if (h1.nodes - hb.nodes > 2000) found.push({ level: 'warn', what: 'the page gained ' + (h1.nodes - hb.nodes) + ' elements while running' });
  for (const c of spec.checks || []) {
    const r = await page.evaluate(c.fn).catch((e) => 'threw ' + e.message.split('\n')[0]);
    if (r !== true && r !== null && r !== undefined) found.push({ level: 'FAIL', what: 'after ' + SECONDS + ' s: ' + c.name + ': ' + (r === false ? 'broken' : r) });
  }
  const bad = await page.evaluate(() => { const m = document.body.innerText.match(/[^\n]{0,30}(\bNaN\b|−?-?Infinity|\[object [A-Z]\w*\])[^\n]{0,20}/); return m ? m[0].trim() : ''; }).catch(() => '');
  if (bad) found.push({ level: 'FAIL', what: 'after ' + SECONDS + ' s shows "' + bad + '"' });
  for (const e of [...new Set(errs)].slice(0, 3)) found.push({ level: 'FAIL', what: e });
  await ctx.close().catch(() => {});
  const r = { demo: d, start: a, end: b, heap: [hb.mb, h1.mb], nodes: [hb.nodes, h1.nodes], raised, loadButtons: loadBtns, findings: found };
  fs.writeFileSync(path.join(dir, 'report.json'), JSON.stringify(r, null, 1));
  return r;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const { s, base } = await serve();
  const queue = demos.slice(), all = [];
  await Promise.all(Array.from({ length: Math.min(JOBS, demos.length) }, async () => {
    let browser = await chromium.launch();
    while (queue.length) {
      const d = queue.shift();
      if (!browser.isConnected()) browser = await chromium.launch();
      const r = await runDemo(browser, base, d).catch((e) => ({ demo: d, findings: [{ level: 'FAIL', what: 'harness: ' + e.message.split('\n')[0] }] }));
      all.push(r);
      const fails = r.findings.filter((f) => f.level === 'FAIL').length, warns = r.findings.length - fails;
      const num = r.start ? '  ' + r.start.ms.toFixed(1) + ' > ' + r.end.ms.toFixed(1) + ' ms/frame, ' + r.start.fps.toFixed(0) + ' > ' + r.end.fps.toFixed(0) + ' fps, heap '
        + r.heap[0].toFixed(0) + ' > ' + r.heap[1].toFixed(0) + ' MB' + (r.raised.length ? ', raised ' + r.raised.join(' ') : '') + (r.loadButtons.length ? ', pressed ' + r.loadButtons.join(', ') : '') : '';
      console.log((r.skipped ? 'skip ' : fails ? 'FAIL ' : warns ? 'warn ' : 'pass ') + d.padEnd(28) + (r.skipped || num));
      for (const f of r.findings) console.log('   ' + f.level.padEnd(5) + f.what);
    }
    await browser.close();
  }));
  s.close();
  fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(all, null, 1));
  const bad = all.filter((r) => r.findings.some((f) => f.level === 'FAIL')).length;
  console.log('\n' + all.length + ' demo(s), ' + bad + ' with failures. Pictures and reports in ' + OUT);
  process.exit(bad ? 1 : 0);
})();
