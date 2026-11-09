#!/usr/bin/env node
/* Break-it test (Steve, 2026-11-09): use a demo the way a student would and check that nothing breaks and known values stay exact.
   Static checks miss interaction bugs: the derivatives grapher shipped with zoom bugs that showed only after a zoom out and back in.

   NODE_PATH=/opt/node-tools/node_modules node tools/breakit.cjs derivatives pendulum     (or --all; --jobs 4 runs demos in parallel)
   In the cloud container set VD_THREE to a local three.min.js r128 (cdnjs is blocked).

   The generic sequence, at 1280x800 in Night unless noted, with a probe after every step:
     open; zoom far out and back in over the main canvas (wheel and the + and - keys); drag across it and back; arrow keys;
     press Play ten times fast; every slider to its minimum and maximum and back; odd values typed in every number and text box
     ('', 0, -1, 1e9, -1e9, 1e-9, abc); every option of every select; every checkbox on and off; every preset or stage button
     (not export, print, download or links); Projector on and off; Day theme and the Cool lab look; a 400 px phone and back;
     Reset all, which must put every control back to its opening value.
   A probe fails on: a page error or console error; NaN, Infinity or [object in the page text; a stage that went blank (it was
   not blank on open); sideways scroll on the phone; a broken known value (below). A zoom out and back in that does not return
   the picture to where it was is reported as a warning (some demos animate, so the picture may move anyway; look at it).

   Known values: tools/breakit/<demo>.cjs may export { checks: [{ name, fn }] }, where fn is a string of page code that returns
   true, false or a message. It runs at every probe, so it holds through every zoom, drag and odd input. Example: derivatives
   (f′(0) of x³ − 3x is drawn at −3 at any zoom). It may also export { steps: [{ name, fn }] }: extra demo specific sequences.

   Output: one line per demo and finding; pictures of each failing state and a JSON report in $VDCHECK_DIR/breakit
   (default /tmp/vdcheck/breakit). Exit 1 when any demo has a failure. */
'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(process.env.VDCHECK_DIR || '/tmp/vdcheck', 'breakit');
const argv = process.argv.slice(2);
const jobsAt = argv.indexOf('--jobs'), JOBS = jobsAt >= 0 ? Math.max(1, +argv[jobsAt + 1] || 1) : 1;
const isRedirect = (d) => /http-equiv="refresh"/i.test(fs.readFileSync(path.join(ROOT, 'demos', d + '.html'), 'utf8'));
const demos = (argv.includes('--all') ? fs.readdirSync(path.join(ROOT, 'demos')).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5))
  : argv.filter((a, i) => !a.startsWith('--') && argv[i - 1] !== '--jobs')).filter((d) => !isRedirect(d));
if (!demos.length) { console.error('usage: node tools/breakit.cjs demo... | --all [--jobs N]'); process.exit(2); }
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.bin': 'application/octet-stream' };
const SKIP_BTN = /export|worksheet|handout|download|print|copy|share|record|full ?screen|preferences|language|tools|help|about|how this works|reset all/i;
const TIMING = argv.includes('--timing');
const ODD = ['', '0', '-1', '1e9', '-1e9', '1e-9', 'abc'];
const ODD_TEXT = ['', 'abc', '((', '1/0', 'x^1000', 'sqrt(-1)', '9'.repeat(40)];

function serve() {
  const s = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split(/[?#]/)[0]).replace(/^\/+/, '');
    if (rel.split('/').includes('..')) { res.writeHead(403).end(); return; }
    let b; try { b = fs.readFileSync(path.join(ROOT, rel)); } catch (_) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', TYPES[path.extname(rel)] || 'application/octet-stream'); res.end(b);
  });
  return new Promise((r) => s.listen(0, '127.0.0.1', () => r({ s, base: `http://127.0.0.1:${s.address().port}/` })));
}

/* [fraction of pixels that differ, fraction of pixels unlike the most common color] of two PNGs, in a blank page */
async function compare(cmp, a, b) {
  return cmp.evaluate(async ([a, b]) => {
    const load = (u) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = u; });
    const [A, B] = await Promise.all([load(a), load(b || a)]);
    const w = Math.min(A.width, B.width), h = Math.min(A.height, B.height), c = document.createElement('canvas');
    c.width = w; c.height = h; const g = c.getContext('2d');
    g.drawImage(A, 0, 0); const da = g.getImageData(0, 0, w, h).data;
    g.clearRect(0, 0, w, h); g.drawImage(B, 0, 0); const db = g.getImageData(0, 0, w, h).data;
    let n = 0; const hist = new Map();
    for (let i = 0; i < da.length; i += 4) {
      if (Math.abs(da[i] - db[i]) + Math.abs(da[i + 1] - db[i + 1]) + Math.abs(da[i + 2] - db[i + 2]) > 24) n++;
      const k = (db[i] >> 4) << 8 | (db[i + 1] >> 4) << 4 | (db[i + 2] >> 4); hist.set(k, (hist.get(k) || 0) + 1);
    }
    const top = Math.max(...hist.values());
    return [n / (w * h), 1 - top / (w * h)];
  }, ['data:image/png;base64,' + a.toString('base64'), b ? 'data:image/png;base64,' + b.toString('base64') : null]);
}

/* every visible control, keyed by a stable path, with its value */
const CONTROLS = () => {
  const vis = (e) => e.offsetParent !== null || e.getClientRects().length > 0;
  const key = (e, i) => e.id ? '#' + e.id : (e.name ? '[name=' + e.name + ']' : e.tagName.toLowerCase() + ':' + i);
  return [...document.querySelectorAll('input, select, textarea')].map((e, i) => ({ e, i })).filter(({ e }) => vis(e) && !e.disabled
    && !e.closest('.vd-prefs, [role=dialog], dialog, .vd-tools, header, nav'))
    .map(({ e, i }) => ({ key: key(e, i), tag: e.tagName.toLowerCase(), type: (e.type || '').toLowerCase(), value: e.type === 'checkbox' || e.type === 'radio' ? e.checked : e.value,
      min: e.min, max: e.max, step: e.step, options: e.tagName === 'SELECT' ? [...e.options].filter((o) => !o.disabled).map((o) => o.value) : null }));
};

async function runDemo(browser, cmp, base, d) {
  const dir = path.join(OUT, d); fs.mkdirSync(dir, { recursive: true });
  const spec = fs.existsSync(path.join(__dirname, 'breakit', d + '.cjs')) ? require(path.join(__dirname, 'breakit', d + '.cjs')) : {};
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, colorScheme: 'dark', reducedMotion: 'no-preference' });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  if (process.env.VD_THREE) await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: process.env.VD_THREE }));
  const page = await ctx.newPage(), errs = [], found = [], seen = new Set();
  let shots = 0, steps = 0;
  page.on('pageerror', (e) => errs.push('page error: ' + e.message.split('\n')[0]));
  page.on('console', (m) => { if (m.type() === 'error' && !/fonts\.g|ERR_FAILED|Failed to load resource/.test(m.text())) errs.push('console error: ' + m.text().split('\n')[0]); });
  page.on('dialog', (dl) => dl.dismiss().catch(() => {}));
  page.on('popup', (p) => p.close().catch(() => {}));
  const t0 = Date.now();
  await page.goto(base + 'demos/' + d + '.html', { waitUntil: 'load' });
  await page.waitForTimeout(1200);
  /* the stage is the largest visible .stage (a demo with several scenes has one per scene), else the largest canvas */
  const stage = async () => (await page.evaluateHandle(() => {
    const big = (sel) => [...document.querySelectorAll(sel)].filter((e) => e.offsetParent !== null && e.clientWidth > 40)
      .sort((a, b) => b.clientWidth * b.clientHeight - a.clientWidth * a.clientHeight)[0];
    return big('.stage') || big('canvas') || null;
  })).asElement();
  const shot = async () => { const s = await stage(); if (!s) return null; try { return await s.screenshot({ animations: 'allow', timeout: 5000 }); } catch (e) { errs.push('the stage could not be photographed in 5 s (hidden, or the page is busy)'); return null; } };
  const open = await shot(), openInk = open ? (await compare(cmp, open))[1] : 0;
  const opening = await page.evaluate(CONTROLS);
  const canvasSel = await page.evaluate(() => {
    const cs = [...document.querySelectorAll('.stage canvas, canvas')].filter((c) => c.offsetParent !== null);
    cs.sort((a, b) => b.clientWidth * b.clientHeight - a.clientWidth * a.clientHeight);
    const c = cs[0]; if (!c) return null; if (!c.id) c.id = 'breakit-canvas'; return '#' + c.id;
  });

  async function probe(step, opt = {}) {
    steps++;
    await page.evaluate(() => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r)))).catch(() => {});
    if (TIMING) console.log('   ' + ((Date.now() - t0) / 1000).toFixed(1) + ' s  ' + step);
    const why = errs.splice(0);
    const page_ = await page.evaluate(() => {
      const t = document.body.innerText;
      const m = t.match(/[^\n]{0,30}(\bNaN\b|−?-?Infinity|\[object [A-Z]\w*\])[^\n]{0,20}/);
      return { bad: m ? m[0].trim() : '', sideways: document.documentElement.scrollWidth > innerWidth + 1 };
    }).catch((e) => ({ bad: '', sideways: false, gone: e.message }));
    if (page_.bad) why.push('shows "' + page_.bad + '"');
    if (opt.phone && page_.sideways) why.push('sideways scroll on a 400 px phone');
    for (const c of spec.checks || []) {
      const r = await page.evaluate(c.fn).catch((e) => 'threw ' + e.message.split('\n')[0]);
      if (r !== true && r !== null && r !== undefined) why.push(c.name + ': ' + (r === false ? 'broken' : r));
    }
    const s = await shot();
    if (s && openInk > 0.01) { const ink = (await compare(cmp, s))[1]; if (ink < 0.002) why.push('stage went blank'); }
    for (const w of why) {
      const k = w.replace(/[\d.]+/g, '#');
      if (seen.has(k)) continue; seen.add(k);
      const f = 'fail-' + (++shots) + '.png'; if (s) fs.writeFileSync(path.join(dir, f), s);
      found.push({ level: 'FAIL', step, what: w, picture: s ? path.join(dir, f) : null });
    }
    return s;
  }
  const warn = (step, what, s) => { const f = 'warn-' + (++shots) + '.png'; if (s) fs.writeFileSync(path.join(dir, f), s); found.push({ level: 'warn', step, what, picture: s ? path.join(dir, f) : null }); };
  const setVal = (key, v) => page.evaluate(([k, v]) => {
    const e = k.startsWith('#') || k.startsWith('[') ? document.querySelector(k) : document.querySelectorAll('input, select, textarea')[+k.split(':')[1]];
    if (!e) return; if (typeof v === 'boolean') { if (e.checked !== v) e.click(); return; }
    e.value = v; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true }));
  }, [key, v]);

  try {
    await probe('open');
    /* the main canvas: zoom far out and back in, drag and back, keys */
    if (canvasSel) {
      const box = await page.locator(canvasSel).boundingBox().catch(() => null);
      if (box && box.width > 80) {
        const cx = box.x + box.width / 2, cy = box.y + box.height / 2;
        await page.mouse.move(cx, cy);
        const before = await shot(); await page.waitForTimeout(300); const still = await shot();
        const moving = !before || !still || (await compare(cmp, before, still))[0] > 0.002;
        for (let i = 0; i < 4; i++) { await page.mouse.wheel(0, 120); await page.waitForTimeout(40); }
        await page.waitForTimeout(250); await probe('zoomed out 4 notches');
        for (let i = 0; i < 4; i++) { await page.mouse.wheel(0, -120); await page.waitForTimeout(40); }
        await page.waitForTimeout(400); const near = await probe('zoomed back in 4 notches');
        if (!moving && near) { const [dn] = await compare(cmp, before, near); if (dn > 0.02) warn('zoom out 4 notches and back', 'the picture differs from before by ' + (100 * dn).toFixed(1) + ' %: a short zoom out and back in does not return', near); }
        for (let i = 0; i < 60; i++) { await page.mouse.wheel(0, 120); await page.waitForTimeout(10); }
        await page.waitForTimeout(250); await probe('zoomed far out (60 wheel notches)');
        for (let i = 0; i < 60; i++) { await page.mouse.wheel(0, -120); await page.waitForTimeout(10); }
        await page.waitForTimeout(250); const back = await probe('zoomed back in (60 notches)');
        for (let i = 0; i < 60; i++) { await page.mouse.wheel(0, -120); await page.waitForTimeout(10); }
        await page.waitForTimeout(250); await probe('zoomed far in (60 notches)');
        for (let i = 0; i < 60; i++) { await page.mouse.wheel(0, 120); await page.waitForTimeout(10); }
        await page.waitForTimeout(250); const back2 = await probe('zoomed back out (60 notches)');
        if (!moving && back && back2) {
          const [d1] = await compare(cmp, before, back), [d2] = await compare(cmp, before, back2);
          if (Math.max(d1, d2) > 0.02) warn('zoom far out and back', 'the picture after 60 notches out and 60 back differs from before by ' + (100 * Math.max(d1, d2)).toFixed(1) + ' % (fine if the zoom stops at a limit; a bug if it should return)', back);
        }
        await page.mouse.move(cx, cy); await page.mouse.down(); await page.mouse.move(cx + box.width * 0.3, cy + box.height * 0.25, { steps: 8 });
        await page.mouse.move(cx - box.width * 0.45, cy - box.height * 0.45, { steps: 8 }); await probe('dragged across the canvas, past its edge');
        await page.mouse.move(cx, cy, { steps: 8 }); await page.mouse.up(); await probe('dragged back');
        await page.mouse.dblclick(cx, cy); await probe('double click');
        await page.locator(canvasSel).focus().catch(() => {});
        for (const k of ['ArrowLeft', 'ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown', '+', '+', '-', '-', 'PageUp', 'End', 'Home']) await page.keyboard.press(k);
        await probe('keys on the canvas');
      }
    }
    /* Play ten times fast */
    const play = await page.$('#play, #go, #run, #start, #playBtn');
    if (play && await play.isVisible()) { for (let i = 0; i < 10; i++) await play.click({ timeout: 2000 }).catch(() => {}); await page.waitForTimeout(400); await probe('Play pressed ten times fast'); }
    /* every control to its limits and back */
    for (const c of opening) {
      if (c.type === 'range') {
        await setVal(c.key, c.min || '0'); await page.waitForTimeout(250); await probe(c.key + ' at its minimum ' + (c.min || 0));
        await setVal(c.key, c.max || '100'); await page.waitForTimeout(250); await probe(c.key + ' at its maximum ' + (c.max || 100));
        await setVal(c.key, c.value);
      } else if (c.type === 'number' || (c.tag === 'input' && (c.type === 'text' || c.type === 'search')) || c.tag === 'textarea') {
        for (const v of (c.type === 'number' ? ODD : ODD_TEXT)) { await setVal(c.key, v); await page.waitForTimeout(120); await probe(c.key + ' typed "' + v.slice(0, 12) + '"'); }
        await setVal(c.key, c.value);
      } else if (c.tag === 'select') {
        for (const o of c.options) { await setVal(c.key, o); await page.waitForTimeout(250); await probe(c.key + ' = ' + o); }
        await setVal(c.key, c.value);
      } else if (c.type === 'checkbox') {
        await setVal(c.key, !c.value); await page.waitForTimeout(150); await probe(c.key + (c.value ? ' off' : ' on')); await setVal(c.key, c.value);
      } else if (c.type === 'radio' && !c.value) {
        await setVal(c.key, true); await page.waitForTimeout(150); await probe(c.key + ' chosen');
      }
    }
    /* every stage, panel and preset button once */
    const btns = await page.evaluate((skip) => [...document.querySelectorAll('main button, .stage button, .panel button, .chips button, button.chip, [role=tab]')]
      .filter((b) => b.offsetParent !== null && !b.disabled && !b.closest('header, nav, dialog, .vd-prefs') && !new RegExp(skip, 'i').test(b.textContent + ' ' + (b.title || '') + ' ' + b.id))
      .map((b, i) => { b.setAttribute('data-breakit', i); return [i, b.textContent.trim().slice(0, 30)]; }), SKIP_BTN.source);
    for (const [i, label] of btns.slice(0, 60)) {
      const b = await page.$('[data-breakit="' + i + '"]'); if (!b || !(await b.isVisible().catch(() => false))) continue;
      await b.click({ timeout: 2000 }).catch(() => {}); await page.waitForTimeout(200); await probe('pressed "' + label + '"');
    }
    for (const s of spec.steps || []) { await page.evaluate(s.fn).catch((e) => errs.push(s.name + ' threw ' + e.message)); await page.waitForTimeout(300); await probe(s.name); }
    /* projector, themes, looks, a phone */
    const proj = await page.$('#proj'); if (proj && await proj.isVisible()) { await proj.click(); await page.waitForTimeout(300); await probe('Projector on'); await proj.click(); }
    await page.evaluate(() => { window.VDTheme && VDTheme.set('light'); window.VDPrefs && VDPrefs.set({ look: 'lab' }); }); await page.waitForTimeout(300); await probe('Day theme, Cool lab look');
    await page.evaluate(() => { window.VDTheme && VDTheme.set('dark'); window.VDPrefs && VDPrefs.set({ look: 'warm' }); });
    await page.setViewportSize({ width: 400, height: 800 }); await page.waitForTimeout(500); await probe('400 px phone', { phone: true });
    await page.setViewportSize({ width: 1280, height: 800 }); await page.waitForTimeout(500); await probe('back to 1280 px');
    /* Reset all puts every control back */
    const ra = await page.$('#vdReset');
    if (ra && await ra.isVisible()) {
      await ra.click(); await page.waitForTimeout(600);
      const now = await page.evaluate(CONTROLS), was = new Map(opening.map((c) => [c.key, c.value]));
      const off = now.filter((c) => was.has(c.key) && String(was.get(c.key)) !== String(c.value)).map((c) => c.key + ' is ' + JSON.stringify(c.value) + ', opened at ' + JSON.stringify(was.get(c.key)));
      const s = await probe('Reset all');
      if (off.length) found.push({ level: 'FAIL', step: 'Reset all', what: 'did not restore ' + off.slice(0, 4).join('; ') + (off.length > 4 ? ' and ' + (off.length - 4) + ' more' : ''), picture: null });
    }
  } catch (e) { found.push({ level: 'FAIL', step: 'harness', what: 'could not finish: ' + e.message.split('\n')[0], picture: null }); }
  await ctx.close().catch(() => {});
  const r = { demo: d, seconds: Math.round((Date.now() - t0) / 1000), steps, controls: opening.length, findings: found };
  fs.writeFileSync(path.join(dir, 'report.json'), JSON.stringify(r, null, 1));
  return r;
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const { s, base } = await serve();
  const queue = demos.slice(), all = [];
  await Promise.all(Array.from({ length: Math.min(JOBS, demos.length) }, async () => {
    let browser = await chromium.launch(), cmp = await browser.newPage();
    while (queue.length) {
      const d = queue.shift();
      if (!browser.isConnected()) { browser = await chromium.launch(); cmp = await browser.newPage(); }
      const r = await runDemo(browser, cmp, base, d).catch((e) => ({ demo: d, seconds: 0, steps: 0, findings: [{ level: 'FAIL', step: 'harness', what: e.message.split('\n')[0] }] }));
      all.push(r);
      const fails = r.findings.filter((f) => f.level === 'FAIL').length, warns = r.findings.length - fails;
      console.log((fails ? 'FAIL ' : warns ? 'warn ' : 'pass ') + d.padEnd(28) + r.steps + ' steps, ' + r.seconds + ' s' + (fails ? ', ' + fails + ' failure(s)' : '') + (warns ? ', ' + warns + ' warning(s)' : ''));
      for (const f of r.findings) console.log('   ' + f.level.padEnd(5) + f.step + ': ' + f.what + (f.picture ? '  [' + f.picture + ']' : ''));
    }
    await browser.close();
  }));
  s.close();
  fs.writeFileSync(path.join(OUT, 'summary.json'), JSON.stringify(all, null, 1));
  const bad = all.filter((r) => r.findings.some((f) => f.level === 'FAIL')).length;
  console.log('\n' + all.length + ' demo(s), ' + bad + ' with failures. Pictures and reports in ' + OUT);
  process.exit(bad ? 1 : 0);
})();
