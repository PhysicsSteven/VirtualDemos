#!/usr/bin/env node
/* Before and after pictures for a visual change, so Steve can review it without opening the site (2026-11-01).

   NODE_PATH=/opt/node-tools/node_modules node tools/beforeafter.cjs pendulum [more demos] [--ref origin/main] [--out DIR]
   [--url 'demos/pendulum.html?setup=x'] (a page or state other than the demo as it opens; one demo only)
   In the cloud container set VD_THREE to a local three.min.js r128 (cdnjs is blocked).

   Serves the demo from REF ("before", default origin/main) and from the working tree ("after"), takes the page as it opens
   at 1280x800 and 400x860, light and dark, and writes one picture per demo: before on the left, after on the right, a row
   per size and theme, labeled. Output: DIR/<demo>-before-after.png (default /tmp/vdcheck/beforeafter). Attach it to the reply
   or save it under /mnt/project-files/ for Steve. */
'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http'), cp = require('node:child_process');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2), opt = (k, d) => { const i = args.indexOf(k); if (i < 0) return d; const v = args[i + 1]; args.splice(i, 2); return v; };
const REF = opt('--ref', 'origin/main'), OUT = opt('--out', path.join(process.env.VDCHECK_DIR || '/tmp/vdcheck', 'beforeafter')), URL = opt('--url', null);
const demos = args.filter((a) => !a.startsWith('--'));
if (!demos.length) { console.error('usage: node tools/beforeafter.cjs demo... [--ref REF] [--out DIR] [--url PATH]'); process.exit(2); }
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4' };
const fromTree = (rel) => { try { return fs.readFileSync(path.join(ROOT, rel)); } catch (_) { return null; } };
const fromRef = (rel) => { try { return cp.execFileSync('git', ['show', `${REF}:${rel}`], { cwd: ROOT, maxBuffer: 64e6, stdio: ['ignore', 'pipe', 'ignore'] }); } catch (_) { return null; } };
function serve(read) {
  const s = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split(/[?#]/)[0]).replace(/^\/+/, '');
    const b = rel.split('/').includes('..') ? null : read(rel);
    if (!b) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', TYPES[path.extname(rel)] || 'application/octet-stream'); res.end(b);
  });
  return new Promise((r) => s.listen(0, '127.0.0.1', () => r({ s, base: `http://127.0.0.1:${s.address().port}/` })));
}
const SIZES = [[1280, 800], [400, 860]], THEMES = ['light', 'dark'];

(async () => {
  fs.mkdirSync(OUT, { recursive: true });
  const before = await serve(fromRef), after = await serve(fromTree), browser = await chromium.launch(), comp = await browser.newPage();
  for (const d of demos) {
    const rel = URL || 'demos/' + d + '.html', rows = [];
    for (const [w, h] of SIZES) for (const theme of THEMES) {
      const pair = [];
      for (const side of [before, after]) {
        const ctx = await browser.newContext({ viewport: { width: w, height: h }, colorScheme: theme, reducedMotion: 'reduce' });
        await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
        if (process.env.VD_THREE) await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: process.env.VD_THREE }));
        await ctx.addInitScript((t) => { try { localStorage.setItem('vd-theme', t); } catch (_) {} }, theme);   /* the site's own switch */
        const p = await ctx.newPage();
        await p.goto(side.base + rel, { waitUntil: 'load' }).catch(() => {});
        await p.waitForTimeout(1500);
        pair.push((await p.screenshot()).toString('base64'));
        await ctx.close();
      }
      rows.push({ label: `${w} px, ${theme}`, pair });
    }
    const png = await comp.evaluate(async ({ rows, ref }) => {
      const load = (b) => new Promise((r) => { const i = new Image(); i.onload = () => r(i); i.src = 'data:image/png;base64,' + b; });
      const imgs = await Promise.all(rows.map((r) => Promise.all(r.pair.map(load))));
      const gap = 16, head = 34, W = Math.max(...imgs.map(([a, b]) => a.width + b.width)) + 3 * gap;
      const H = imgs.reduce((s, [a, b]) => s + Math.max(a.height, b.height) + head + gap, gap);
      const c = document.createElement('canvas'); c.width = W; c.height = H; const g = c.getContext('2d');
      g.fillStyle = '#888'; g.fillRect(0, 0, W, H); g.font = 'bold 20px sans-serif'; g.fillStyle = '#000';
      let y = gap;
      imgs.forEach(([a, b], i) => {
        g.fillText('Before (' + ref + '), ' + rows[i].label, gap, y + 24); g.fillText('After, ' + rows[i].label, 2 * gap + a.width, y + 24);
        g.drawImage(a, gap, y + head); g.drawImage(b, 2 * gap + a.width, y + head);
        y += Math.max(a.height, b.height) + head + gap;
      });
      return c.toDataURL('image/png').split(',')[1];
    }, { rows, ref: REF });
    const file = path.join(OUT, d + '-before-after.png');
    fs.writeFileSync(file, Buffer.from(png, 'base64'));
    console.log('wrote', file);
  }
  await browser.close(); before.s.close(); after.s.close();
})();
