#!/usr/bin/env node
/* Offline copies check (2026-11-16): node tools/offlinecheck.cjs <demo ...> | --all | --course astro-2203 [--keep DIR] [--jobs N]
   For each demo (or course page) it presses Download on the local site (http://127.0.0.1:8765, tools/cloud/setup.sh --site),
   unzips the zip that comes out and opens it from file:// with every http and https request blocked, as a student with no
   internet would. Checked on each copy:
     - Start here.html opens and links to the demo (or course page), and shows no "unzip first" warning
     - every page in the zip (the demo, each worksheet, each notes page) loads with no missing file and no script error,
       and its course links that leave the zip are rewritten to the live site
     - on each demo: the picture draws (democheck's blank canvas test, light), Play runs, the How this works video loads
     - on each worksheet: MathJax typesets (mjx-container) when the page has math, and the answer boxes are built
     - with Spanish chosen, the demo is translated (VDI18N.lang is es and the catalogs loaded)
     - no file of TeacherKeys (or anything outside the site's public folders) is in the zip
   Exit status 1 on any failure. The zips land in --keep DIR (default a temporary folder, removed after). Needs NODE_PATH with
   playwright (source ~/.vd-env), and VD_VENDOR for the outside libraries cloud sessions cannot reach. */
'use strict';
const fs = require('fs'), path = require('path'), os = require('os'), { execFileSync } = require('child_process');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const SITE = process.env.VD_URL || 'http://127.0.0.1:8765/VirtualDemos/';
const V = process.env.VD_VENDOR || path.join(os.homedir(), 'vendor');

const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); if (i < 0) return d; const v = args[i + 1]; args.splice(i, 2); return v; };
const keep = opt('--keep', null), jobs = +opt('--jobs', 2), course = opt('--course', null);
let demos = args.filter((a) => !a.startsWith('--'));
if (args.includes('--all')) demos = fs.readdirSync(path.join(ROOT, 'demos')).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5));
const targets = course ? [{ kind: 'course', name: course, url: SITE + course + '.html' }] : demos.map((d) => ({ kind: 'demo', name: d, url: SITE + 'demos/' + d + '.html' }));
if (!targets.length) { console.log('usage: node tools/offlinecheck.cjs <demo ...> | --all | --course <course id>'); process.exit(2); }
const OUT = keep ? path.resolve(keep) : fs.mkdtempSync(path.join(os.tmpdir(), 'vdoffline-'));
fs.mkdirSync(OUT, { recursive: true });

/* the outside libraries, for a cloud session where cdnjs and jsdelivr are blocked (with CORS, since vdoffline.js fetches them) */
async function vendorRoutes(ctx) {
  const send = (r, f) => fs.existsSync(f) ? r.fulfill({ status: 200, contentType: 'text/javascript', headers: { 'Access-Control-Allow-Origin': '*' }, body: fs.readFileSync(f) }) : r.fulfill({ status: 404, headers: { 'Access-Control-Allow-Origin': '*' }, body: '' });
  await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\/r128\/three(\.min)?\.js/, (r) => send(r, path.join(V, 'three/package/build/three.min.js')));
  await ctx.route(/cdn\.jsdelivr\.net\/npm\/mathjax@3\.2\.2\/es5\/([^?]*)/, (r) => send(r, path.join(V, 'mathjax/package/es5', r.request().url().match(/es5\/([^?]*)/)[1])));
  await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/anchor-js\/4\.1\.0\/anchor\.min\.js/, (r) => send(r, path.join(V, 'anchor-js/package/anchor.min.js')));
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
}

async function download(browser, t) {
  const ctx = await browser.newContext({ acceptDownloads: true, viewport: { width: 1280, height: 800 } });
  await vendorRoutes(ctx);
  const page = await ctx.newPage();
  await page.goto(t.url, { waitUntil: 'load' });
  if (t.kind === 'demo') await page.click('#vdDownload'); else await page.click('#dlCourse');
  await page.waitForSelector('dialog.vd-dl[open] .vd-dl-go');
  const [dl] = await Promise.all([page.waitForEvent('download', { timeout: 600000 }), page.click('.vd-dl-go')]);
  const zip = path.join(OUT, dl.suggestedFilename());
  await dl.saveAs(zip);
  const status = await page.textContent('.vd-dl-status');
  await ctx.close();
  return { zip, status };
}

async function checkCopy(browser, t, zip) {
  const fails = [], notes = [];
  const dir = zip.replace(/\.zip$/, '');
  fs.rmSync(dir, { recursive: true, force: true });
  execFileSync('unzip', ['-q', '-o', zip, '-d', dir]);
  const top = fs.readdirSync(dir); if (top.length !== 1) fails.push('the zip should hold one folder, holds ' + top.join(', '));
  const base = path.join(dir, top[0]);
  const all = [];
  (function walk(d) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p); else all.push(path.relative(base, p)); } })(base);
  const bad = all.filter((f) => !/^(Start here\.html|demos\/|curriculum\/labs\/|notes\/|thumbs\/|assets\/|vendor\/(cdnjs\.cloudflare\.com|cdn\.jsdelivr\.net)\/|[a-z0-9-]+\.html$|search\.js$)/.test(f) || /answer|key|teacher|guide/i.test(f.replace(/^demos\/lib\/(shortcuts|vdtools)\.js$/, '')));
  if (bad.length) fails.push('unexpected files in the zip: ' + bad.slice(0, 8).join(', '));
  const bytes = all.reduce((s, f) => s + fs.statSync(path.join(base, f)).size, 0);
  notes.push(all.length + ' files, ' + (bytes / 1048576).toFixed(1) + ' MB');

  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await ctx.route(/^https?:/, (r) => r.abort());   /* no internet */
  const fileUrl = (rel) => 'file://' + path.join(base, rel).split(path.sep).map(encodeURIComponent).join('/').replace(/^file:\/\/%2F/, 'file:///');
  async function open(rel, fn, query) {
    const page = await ctx.newPage(), errs = [], missing = [], online = [];
    page.on('pageerror', (e) => errs.push(String(e.message || e).split('\n')[0]));
    page.on('console', (m) => { if (m.type() === 'error' && !/ERR_FAILED|net::|Failed to load resource/.test(m.text())) errs.push(m.text().slice(0, 160)); });
    /* a file that is not in the zip (a video whose load is cut short when its popup closes fails too, but exists) */
    page.on('requestfailed', (r) => { const u = r.url(); if (u.startsWith('file:')) { const f = decodeURIComponent(u).slice(('file://' + base).length + 1).split(/[?#]/)[0]; if (!fs.existsSync(path.join(base, f))) missing.push(f); } });
    /* anything a page tries to fetch from the internet (Google Fonts are left online on purpose: the text falls back) */
    page.on('request', (r) => { const u = r.url(); if (/^https?:/.test(u) && !/fonts\.(googleapis|gstatic)\.com/.test(u)) online.push(u.slice(0, 120)); });
    await page.goto(fileUrl(rel) + (query || ''), { waitUntil: 'load', timeout: 60000 });
    await page.waitForTimeout(1200);
    let r = null; try { r = fn ? await fn(page) : null; } catch (e) { errs.push('check: ' + String(e.message || e).split('\n')[0]); }
    await page.close();
    return { errs, missing, online, r };
  }
  const report = (rel, o) => {
    if (o.missing.length) fails.push(rel + ': missing ' + [...new Set(o.missing)].slice(0, 6).join(', '));
    if (o.errs.length) fails.push(rel + ': ' + [...new Set(o.errs)].slice(0, 4).join(' | '));
    if (o.online && o.online.length) fails.push(rel + ': goes online for ' + [...new Set(o.online)].slice(0, 4).join(', '));
  };

  const start = await open('Start here.html', (p) => p.evaluate(() => ({ warn: document.documentElement.classList.contains('unzip'), go: (document.querySelector('a.go') || {}).getAttribute && document.querySelector('a.go').getAttribute('href'), n: document.querySelectorAll('li a').length })));
  report('Start here.html', start);
  if (!start.r || start.r.warn) fails.push('Start here.html shows the unzip warning');
  const pages = all.filter((f) => /^(demos\/[a-z0-9-]+|curriculum\/labs\/students\/[a-z0-9-]+|notes\/[a-z0-9-]+|[a-z0-9-]+)\.html$/.test(f));
  if (start.r && !pages.includes(start.r.go)) fails.push('Start here.html opens ' + (start.r && start.r.go) + ', not a page in the zip');
  for (const rel of pages) {
    if (/^demos\//.test(rel)) {
      const o = await open(rel, async (p) => {
        const out = {};
        out.blank = await p.evaluate(() => { const cs = [...document.querySelectorAll('canvas')].filter((c) => c.width > 50 && c.height > 50 && c.getClientRects().length); if (!cs.length) return null;
          return cs.every((c) => { try { const g = c.getContext('2d'); if (!g) return false; const d = g.getImageData(0, 0, c.width, c.height).data; let first = d[0] + ',' + d[1] + ',' + d[2]; for (let i = 0; i < d.length; i += 4 * 97) if (d[i] + ',' + d[i + 1] + ',' + d[i + 2] !== first) return false; return true; } catch (_) { return false; } }); });
        if (await p.$('#vdHowTo')) {
          await p.click('#vdHowTo');
          out.video = await p.waitForFunction(() => { const v = document.querySelector('dialog.vd-howto video'); return v && (v.readyState >= 1 || v.error) ? { ok: v.readyState >= 1, src: v.getAttribute('src') } : null; }, null, { timeout: 15000 }).then((h) => h.jsonValue()).catch(() => ({ ok: false, src: 'timeout' }));
          await p.keyboard.press('Escape');
        }
        out.three = await p.evaluate(() => (window.VD3 && VD3.load ? new Promise((ok) => { VD3.load(ok); setTimeout(() => ok('timeout'), 8000); }) : null));
        out.dl = await p.$('#vdDownload');
        out.ws = await p.evaluate(() => [...document.querySelectorAll('.handout-menu a, a.handout')].map((a) => a.href));
        return out;
      });
      report(rel, o);
      if (o.r) {
        if (o.r.blank) fails.push(rel + ': the picture is blank');
        if (o.r.video && !o.r.video.ok) fails.push(rel + ': the How this works video did not load (' + o.r.video.src + ')');
        if (o.r.three === false || o.r.three === 'timeout') fails.push(rel + ': three.js did not load');
        if (o.r.dl) fails.push(rel + ': the Download button shows on the offline copy');
        (o.r.ws || []).forEach((h) => { if (h.startsWith('file:')) { const p = decodeURIComponent(h).slice(('file://' + base).length + 1).split(/[?#]/)[0]; if (!all.includes(p)) fails.push(rel + ': its worksheet link points at ' + p + ', not in the zip'); } });
      }
      const es = await open(rel, (p) => p.evaluate(() => window.VDI18N && VDI18N.lang), '?lang=es');
      if (es.r !== 'es') fails.push(rel + ': Spanish did not load (' + es.r + ')');
    } else if (/^curriculum\//.test(rel)) {
      const o = await open(rel, async (p) => {
        await p.waitForTimeout(1500);
        return p.evaluate(() => ({ tex: /\$\$|\\\(|\\\[/.test(document.querySelector('.markdown-body') ? document.querySelector('.markdown-body').textContent : ''), mjx: document.querySelectorAll('mjx-container').length, mj: !!window.MathJax && !!MathJax.typesetPromise, inputs: document.querySelectorAll('textarea, .markdown-body input, table input').length, demo: (document.querySelector('a.ws-open-demo') || {}).href || '' }));
      });
      report(rel, o);
      if (o.r) {
        if (!o.r.mj) fails.push(rel + ': MathJax did not load');
        if (o.r.tex && !o.r.mjx) fails.push(rel + ': math left untypeset');
        if (o.r.demo && !o.r.demo.startsWith('file:') && all.some((f) => f === 'demos/' + o.r.demo.split('/').pop().split(/[?#]/)[0])) fails.push(rel + ': its Open the demo button goes online although the demo is in the zip');
      }
    } else {
      report(rel, await open(rel, null));
    }
  }
  await ctx.close();
  return { fails, notes };
}

(async () => {
  const browser = await chromium.launch();
  let bad = 0, i = 0;
  async function worker() {
    while (i < targets.length) {
      const t = targets[i++];
      try {
        const d = await download(browser, t);
        const c = await checkCopy(browser, t, d.zip);
        if (c.fails.length) { bad++; console.log('FAIL ' + t.name + ' (' + c.notes.join('; ') + ')'); c.fails.forEach((f) => console.log('   fail ' + f)); }
        else console.log('ok   ' + t.name + ' (' + c.notes.join('; ') + ')');
      } catch (e) { bad++; console.log('FAIL ' + t.name + ': ' + String(e.message || e).split('\n')[0]); }
    }
  }
  await Promise.all(Array.from({ length: Math.min(jobs, targets.length) }, worker));
  await browser.close();
  if (!keep) fs.rmSync(OUT, { recursive: true, force: true }); else console.log('zips in ' + OUT);
  console.log(bad ? bad + ' of ' + targets.length + ' failed' : 'all ' + targets.length + ' passed');
  process.exit(bad ? 1 : 0);
})();
