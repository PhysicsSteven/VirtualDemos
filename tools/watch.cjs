#!/usr/bin/env node
/* Watch it like a student (Steve 2026-11-11, CLAUDE.md): a film strip of each demo at its own defaults, for a person or an agent
   to judge by eye. The break-it script finds things that break; this one only records what a student sees, so the judging is done
   by looking at the pictures (fresh-eyes first minute, time scale on screen, picture matches the physics).

   NODE_PATH=/opt/node-tools/node_modules VD_THREE=<three.min.js r128> node tools/watch.cjs demo... | --all [--jobs 2] [--out DIR]

   For each demo, at 1280x800 in Night (the first visit look), with nothing changed:
     open, then stage pictures at 1 s, 4 s and 10 s (what a student sees before touching anything);
     if nothing moved, press Play (or Release, Start, Go, Run) and take pictures 1 s, 4 s and 10 s later;
     then each setup or preset button in turn (up to 16): pictures 1 s and 5 s after the press (pressing Play first if it is still);
     a full page picture at open, and one at a 400 px phone.
   It writes DIR/<demo>/NN-<what>.png, and DIR/<demo>/watch.json with, for every picture, how much of the stage changed since the
   one before (motion), the stage text that looks like a time scale or rate ("1 s = 3 yr", "× 1,000", "days/s"), the page's control
   names and the visible text of the stage area. Default DIR is /tmp/vdcheck/watch. About 40 s a demo. */
'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const argv = process.argv.slice(2);
const opt = (k) => { const i = argv.indexOf(k); return i >= 0 ? argv[i + 1] : null; };
const OUT = opt('--out') || path.join(process.env.VDCHECK_DIR || '/tmp/vdcheck', 'watch');
const JOBS = Math.max(1, +(opt('--jobs') || 1));
const isRedirect = (d) => /http-equiv="refresh"/i.test(fs.readFileSync(path.join(ROOT, 'demos', d + '.html'), 'utf8'));
const demos = (argv.includes('--all') ? fs.readdirSync(path.join(ROOT, 'demos')).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5))
  : argv.filter((a, i) => !a.startsWith('--') && !['--jobs', '--out'].includes(argv[i - 1]))).filter((d) => !isRedirect(d));
if (!demos.length) { console.error('usage: node tools/watch.cjs demo... | --all [--jobs N] [--out DIR]'); process.exit(2); }
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.bin': 'application/octet-stream' };
const SKIP = /export|worksheet|handout|download|print|copy|share|record|full ?screen|preferences|language|tools|help|about|how this works|reset|clear|undo|delete|remove|fire|add|drop|step|pause|play|release|start|run\b|go\b|stop|zoom|fit|[+−-]$/i;

function serve() {
  const s = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split(/[?#]/)[0]).replace(/^\/+/, '');
    if (rel.split('/').includes('..')) { res.writeHead(403).end(); return; }
    let b; try { b = fs.readFileSync(path.join(ROOT, rel)); } catch (_) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', TYPES[path.extname(rel)] || 'application/octet-stream'); res.end(b);
  });
  return new Promise((r) => s.listen(0, '127.0.0.1', () => r({ s, base: `http://127.0.0.1:${s.address().port}/` })));
}

async function diff(cmp, a, b) {
  if (!a || !b) return null;
  return cmp.evaluate(async ([a, b]) => {
    const load = (u) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = u; });
    const [A, B] = await Promise.all([load(a), load(b)]);
    const w = Math.min(A.width, B.width), h = Math.min(A.height, B.height), c = document.createElement('canvas');
    c.width = w; c.height = h; const g = c.getContext('2d');
    g.drawImage(A, 0, 0); const da = g.getImageData(0, 0, w, h).data; g.clearRect(0, 0, w, h); g.drawImage(B, 0, 0); const db = g.getImageData(0, 0, w, h).data;
    let n = 0; for (let i = 0; i < da.length; i += 4) if (Math.abs(da[i] - db[i]) + Math.abs(da[i + 1] - db[i + 1]) + Math.abs(da[i + 2] - db[i + 2]) > 24) n++;
    return +(n / (w * h)).toFixed(4);
  }, ['data:image/png;base64,' + a.toString('base64'), 'data:image/png;base64,' + b.toString('base64')]);
}

/* text on the page that names a rate or time scale, and the stage's own visible text */
const TEXTS = () => {
  const vis = (e) => e.offsetParent !== null || e.getClientRects().length > 0;
  const main = document.querySelector('main') || document.body;
  const t = main.innerText || '';
  const rate = [...new Set(t.split('\n').map((l) => l.trim()).filter((l) => l.length < 120 && /(\b1 s\s*=|per second|\/\s?s\b|× ?[\d,.]+|[\d,.]+ ?×|\bspeed\b|slow motion|real time|time scale|sim(ulated)? time|days?\/s|yr\/s|years? per|s of|faster|slower)/i.test(l)))];
  const controls = [...document.querySelectorAll('main button, main label, main select, main summary, .stage button')].filter(vis)
    .map((e) => (e.getAttribute('aria-label') || e.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 40)).filter(Boolean);
  return { rate: rate.slice(0, 20), controls: [...new Set(controls)].slice(0, 80), text: t.replace(/\n{2,}/g, '\n').slice(0, 2500) };
};

async function runDemo(browser, cmp, base, d) {
  const dir = path.join(OUT, d); fs.rmSync(dir, { recursive: true, force: true }); fs.mkdirSync(dir, { recursive: true });
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, colorScheme: 'dark', reducedMotion: 'no-preference' });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  if (process.env.VD_THREE) await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: process.env.VD_THREE }));
  const page = await ctx.newPage(), errs = [], shots = [];
  page.on('pageerror', (e) => errs.push(e.message.split('\n')[0]));
  page.on('dialog', (dl) => dl.dismiss().catch(() => {}));
  page.on('popup', (p) => p.close().catch(() => {}));
  const t0 = Date.now();
  await page.goto(base + 'demos/' + d + '.html', { waitUntil: 'load' });
  const stage = async () => (await page.evaluateHandle(() => {
    const big = (sel) => [...document.querySelectorAll(sel)].filter((e) => e.offsetParent !== null && e.clientWidth > 40)
      .sort((a, b) => b.clientWidth * b.clientHeight - a.clientWidth * a.clientHeight)[0];
    return big('.stage') || big('canvas') || document.querySelector('main') || document.body;
  })).asElement();
  let n = 0, last = null;
  const shot = async (what, full) => {
    let b = null;
    try { b = full ? await page.screenshot({ timeout: 20000 }) : await (await stage()).screenshot({ animations: 'allow', timeout: 20000 }); } catch (e) { errs.push('picture failed: ' + what); }
    const f = String(++n).padStart(2, '0') + '-' + what.replace(/[^a-z0-9]+/gi, '-').replace(/^-|-$/g, '').toLowerCase().slice(0, 40) + '.png';
    if (b) fs.writeFileSync(path.join(dir, f), b);
    const motion = full ? null : await diff(cmp, last, b); if (!full && b) last = b;
    const tx = await page.evaluate(TEXTS).catch(() => ({ rate: [] }));
    shots.push({ file: f, what, motion, rate: tx.rate, ms: Date.now() - t0 });
    return motion;
  };
  const wait = (ms) => page.waitForTimeout(ms);
  const playBtn = () => page.evaluate(() => {
    const vis = (e) => e.offsetParent !== null && !e.disabled;
    const b = [...document.querySelectorAll('#play, #go, #run, #start, #playBtn, #release, main button, .stage button')].filter(vis)
      .find((e) => /^(▶\s*)?(play|release|start|go|run|launch|drop)\b/i.test((e.textContent || e.getAttribute('aria-label') || '').trim()));
    if (!b) return null; b.setAttribute('data-watch-play', '1'); return (b.textContent || '').trim().slice(0, 20);
  });
  try {
    await wait(1000); await shot('open full page', true);
    await shot('open 1 s'); await wait(3000); const m4 = await shot('open 4 s'); await wait(6000); const m10 = await shot('open 10 s');
    const info = await page.evaluate(TEXTS);
    let pressed = null;
    if (!(m4 > 0.003 || m10 > 0.003)) {
      pressed = await playBtn();
      if (pressed) { await page.click('[data-watch-play]', { timeout: 3000 }).catch(() => {}); await wait(1000); await shot('after ' + pressed + ' 1 s'); await wait(3000); await shot('after ' + pressed + ' 4 s'); await wait(6000); await shot('after ' + pressed + ' 10 s'); }
    }
    /* setups and presets: the chip rows and selects named setup or preset */
    const presets = await page.evaluate((skip) => {
      const vis = (e) => e.offsetParent !== null && !e.disabled;
      const out = [];
      [...document.querySelectorAll('.chips button, button.chip, [role=tab], .presets button, .setups button, [data-preset], [data-setup]')].filter(vis)
        .filter((b) => !b.closest('header, nav, dialog, .vd-prefs, .vd-tools') && !new RegExp(skip, 'i').test((b.textContent || '').trim()))
        .forEach((b, i) => { b.setAttribute('data-watch-p', 'b' + i); out.push({ kind: 'button', id: 'b' + i, label: (b.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 30) }); });
      [...document.querySelectorAll('main select')].filter(vis).forEach((s, i) => {
        const lab = ((s.labels && s.labels[0] && s.labels[0].textContent) || s.id || s.name || '') + ' ' + (s.getAttribute('aria-label') || '');
        if (!/setup|preset|scenario|case|planet|star|system|object|mode|example|target|world|body|scene/i.test(lab)) return;
        s.setAttribute('data-watch-s', 's' + i);
        [...s.options].filter((o) => !o.disabled && o.value !== s.value).slice(0, 8).forEach((o) => out.push({ kind: 'select', id: 's' + i, value: o.value, label: (lab.trim().split(/\s+/)[0] || 'select') + ': ' + o.textContent.trim().slice(0, 24) }));
      });
      return out;
    }, SKIP.source);
    for (const p of presets.slice(0, 16)) {
      /* find the button again by its label: some demos rebuild their setup buttons after every press */
      if (p.kind === 'button') await page.evaluate((label) => {
        const b = [...document.querySelectorAll('.chips button, button.chip, [role=tab], .presets button, .setups button, [data-preset], [data-setup]')]
          .find((e) => e.offsetParent !== null && !e.disabled && !e.closest('header, nav, dialog, .vd-prefs, .vd-tools') && (e.textContent || '').trim().replace(/\s+/g, ' ').slice(0, 30) === label);
        if (b) b.click();
      }, p.label).catch(() => {});
      else await page.evaluate(([id, v]) => { const s = document.querySelector('[data-watch-s="' + id + '"]'); if (s) { s.value = v; s.dispatchEvent(new Event('input', { bubbles: true })); s.dispatchEvent(new Event('change', { bubbles: true })); } }, [p.id, p.value]);
      await wait(1000); await shot('preset ' + p.label + ' 1 s'); await wait(4000); const mp = await shot('preset ' + p.label + ' 5 s');
      if (!(mp > 0.003) && await playBtn()) { await page.click('[data-watch-play]', { timeout: 3000 }).catch(() => {}); await wait(3000); await shot('preset ' + p.label + ' played 3 s'); }
    }
    await page.setViewportSize({ width: 400, height: 800 }); await wait(800); await shot('phone 400 px full page', true);
    fs.writeFileSync(path.join(dir, 'watch.json'), JSON.stringify({ demo: d, seconds: Math.round((Date.now() - t0) / 1000), pressed, presets: presets.map((p) => p.label), errors: errs, controls: info.controls, rateText: info.rate, stageText: info.text, shots }, null, 1));
  } catch (e) { fs.writeFileSync(path.join(dir, 'watch.json'), JSON.stringify({ demo: d, failed: e.message.split('\n')[0], errors: errs, shots }, null, 1)); }
  await ctx.close().catch(() => {});
  return { d, n: shots.length, s: Math.round((Date.now() - t0) / 1000), errs: errs.length };
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const { s, base } = await serve();
  const queue = demos.slice();
  await Promise.all(Array.from({ length: Math.min(JOBS, demos.length) }, async () => {
    let browser = await chromium.launch(), cmp = await browser.newPage();
    while (queue.length) {
      const d = queue.shift();
      if (!browser.isConnected()) { browser = await chromium.launch(); cmp = await browser.newPage(); }
      const r = await runDemo(browser, cmp, base, d).catch((e) => ({ d, n: 0, s: 0, errs: 1, e: e.message }));
      console.log(d.padEnd(30) + r.n + ' pictures, ' + r.s + ' s' + (r.errs ? ', ' + r.errs + ' error(s)' : '') + (r.e ? ' ' + r.e : ''));
    }
    await browser.close();
  }));
  s.close();
  console.log('Film strips in ' + OUT);
})();
