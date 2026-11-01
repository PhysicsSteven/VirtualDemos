#!/usr/bin/env node
/* Opening state check (Steve, 2026-10-28): a demo's opening state must not sit at equilibrium. The first press of Play,
   Release, Start, Launch or the like must visibly do something.

   NODE_PATH=/opt/node-tools/node_modules node tools/opencheck.cjs pendulum forces     (or --all)
   In the cloud container set VD_THREE to a local three.min.js r128 (cdnjs is blocked).

   For each demo, at 1280x800 with motion allowed: open the page and wait 1.5 s, then take two pictures of the stage 0.6 s apart.
   If they differ, the demo runs on open: pass. Otherwise press the play control (#play, #go, #run, #start, #playBtn, the first
   button of #startSeg, or a visible button whose text starts with Play, Release, Start, Launch, Run, Fire, Drop or Go, but not
   Start over or Restart) and take a picture every 0.15 s for 2.4 s (a quick fall shows too) with the button itself masked. It passes when more than 0.02 % of the
   stage's pixels changed in any of them. A control that reads Pause or Stop means the demo already runs. A demo with no play control
   is listed as "no play control" (sliders only, nothing to press), which is not a failure. Pictures go to
   $VDCHECK_DIR/opencheck (default /tmp/vdcheck/opencheck). Exit 1 when any demo fails. */
'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(process.env.VDCHECK_DIR || '/tmp/vdcheck', 'opencheck');
const args = process.argv.slice(2);
const isRedirect = (d) => /http-equiv="refresh"/i.test(fs.readFileSync(path.join(ROOT, 'demos', d + '.html'), 'utf8'));
const demos = (args.includes('--all') ? fs.readdirSync(path.join(ROOT, 'demos')).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5))
  : args.filter((a) => !a.startsWith('--'))).filter((d) => !isRedirect(d));
if (!demos.length) { console.error('usage: node tools/opencheck.cjs demo... | --all'); process.exit(2); }
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.bin': 'application/octet-stream' };
const THRESH = 0.0002;   /* 0.02 % of the stage: a small moving ball or a counter that ticks */

function serve() {
  const s = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split(/[?#]/)[0]).replace(/^\/+/, '');
    if (rel.split('/').includes('..')) { res.writeHead(403).end(); return; }
    let b; try { b = fs.readFileSync(path.join(ROOT, rel)); } catch (_) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', TYPES[path.extname(rel)] || 'application/octet-stream'); res.end(b);
  });
  return new Promise((r) => s.listen(0, '127.0.0.1', () => r({ s, base: `http://127.0.0.1:${s.address().port}/` })));
}

/* fraction of pixels that differ by more than a little, computed in a blank page */
async function diff(cmp, a, b) {
  return cmp.evaluate(async ([a, b]) => {
    const load = (u) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = u; });
    const [A, B] = await Promise.all([load(a), load(b)]);
    const w = Math.min(A.width, B.width), h = Math.min(A.height, B.height), c = document.createElement('canvas');
    c.width = w; c.height = h; const g = c.getContext('2d');
    g.drawImage(A, 0, 0); const da = g.getImageData(0, 0, w, h).data;
    g.clearRect(0, 0, w, h); g.drawImage(B, 0, 0); const db = g.getImageData(0, 0, w, h).data;
    let n = 0; for (let i = 0; i < da.length; i += 4) if (Math.abs(da[i] - db[i]) + Math.abs(da[i + 1] - db[i + 1]) + Math.abs(da[i + 2] - db[i + 2]) > 24) n++;
    return n / (w * h);
  }, ['data:image/png;base64,' + a.toString('base64'), 'data:image/png;base64,' + b.toString('base64')]);
}

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const { s, base } = await serve();
  let browser = await chromium.launch(), cmp = await browser.newPage();
  let fails = 0;
  for (const d of demos) {
    if (!browser.isConnected()) { browser = await chromium.launch(); cmp = await browser.newPage(); }
    const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, colorScheme: 'dark', reducedMotion: 'no-preference' });
    await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
    if (process.env.VD_THREE) await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: process.env.VD_THREE }));
    const page = await ctx.newPage(), errors = [];
    page.on('pageerror', (e) => errors.push(e.message));
    let verdict;
    try {
      await page.goto(base + 'demos/' + d + '.html', { waitUntil: 'load' });
      await page.waitForTimeout(1500);
      const stage = (await page.$('.stage')) || (await page.$('canvas')) || page;
      const shot = () => stage.screenshot({ animations: 'allow' });
      const s0 = await shot(); await page.waitForTimeout(600); const s1 = await shot();
      const idle = await diff(cmp, s0, s1);
      if (idle > THRESH) verdict = ['pass', 'runs on open (' + (100 * idle).toFixed(2) + ' % changed)'];
      else {
        const btn = await page.evaluateHandle(() => {
          const vis = (b) => b && b.offsetParent !== null && !b.disabled;
          for (const id of ['play', 'go', 'run', 'start', 'playBtn']) { const b = document.getElementById(id); if (vis(b)) return b; }
          const seg = document.querySelector('#startSeg button'); if (vis(seg)) return seg;
          return [...document.querySelectorAll('button')].find((b) => vis(b) && /^\s*(▶\s*)?(Play|Release|Start|Launch|Run|Fire|Drop|Go)\b/i.test(b.textContent)
            && !/^\s*(Start over|Restart)/i.test(b.textContent)) || null;
        });
        const el = btn.asElement();
        if (!el) verdict = ['info', 'no play control, nothing moves on open'];
        else {
          const label = (await el.textContent()).trim().slice(0, 30);
          if (/^(❚❚|⏸|Pause|Stop)/i.test(label)) { verdict = ['pass', 'runs on open ("' + label + '" showing)']; }
          else {
          await el.evaluate((b) => b.setAttribute('data-opencheck', '1'));
          const masked = () => stage.screenshot({ animations: 'allow', mask: [page.locator('[data-opencheck]')] });
          const m1 = await masked();
          await el.click(); await page.mouse.move(0, 0);
          let moved = 0, s2 = m1;
          for (let i = 0; i < 16 && moved <= THRESH; i++) { await page.waitForTimeout(150); s2 = await masked(); moved = Math.max(moved, await diff(cmp, m1, s2)); }
          fs.writeFileSync(path.join(OUT, d + '-before.png'), m1); fs.writeFileSync(path.join(OUT, d + '-after.png'), s2);
          verdict = moved > THRESH ? ['pass', '"' + label + '" moves it (' + (100 * moved).toFixed(2) + ' %)']
            : ['FAIL', '"' + label + '" changed only ' + (100 * moved).toFixed(3) + ' % of the stage: opening state looks like equilibrium'];
          }
        }
      }
    } catch (e) { verdict = ['FAIL', 'could not check: ' + e.message.split('\n')[0]]; }
    if (errors.length) verdict = ['FAIL', verdict[1] + '; page error: ' + errors[0]];
    if (verdict[0] === 'FAIL') fails++;
    console.log(verdict[0].padEnd(5) + ' ' + d.padEnd(28) + verdict[1]);
    await ctx.close().catch(() => {});
  }
  await browser.close(); s.close();
  if (fails) { console.log('\n' + fails + ' demo(s) failed the opening state check. Pictures in ' + OUT); process.exit(1); }
})();
