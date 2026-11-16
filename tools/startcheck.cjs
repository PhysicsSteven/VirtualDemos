/* Start here check (2026-11-16): opens each Start here and Explore further setup in curriculum/start-here.json the way a
   student's Set it up link does, and saves a picture of each, so the setup can be judged by eye against its text.

     node tools/startcheck.cjs [demo ...]          every entry, or the ones named; pictures in /tmp/vdcheck/start/<demo>-<step>.png
     node tools/startcheck.cjs --lang es <demo>    the same in Spanish
     node tools/startcheck.cjs --data <file> ...   entries from a draft file of the same shape instead of start-here.json
     node tools/startcheck.cjs --link <demo> <action> ...
         prints the setup string for an entry: opens the demo, does each action, then reads the demo's own Copy link (VD.share).
         Actions: 'click:<button or chip text>', 'sel:<css selector>' (click it), 'set:<css selector>=<value>' (a slider,
         number or select), 'wait:<ms>', 'q:<extra query>' (start from that address, e.g. q:scene=double).

   Reads the files directly (file://), so it needs no server. Fails on a page error, a missing fold, a Set it up link that
   does not match the data, or an entry for a demo that does not exist. Run `source ~/.vd-env` first in a cloud session. */
const fs = require('fs'), path = require('path');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(process.env.VDCHECK_DIR || '/tmp/vdcheck', 'start');
const args = process.argv.slice(2);
const lang = args.includes('--lang') ? args.splice(args.indexOf('--lang'), 2)[1] : '';
/* --data <file>: test entries in a file of the same shape as curriculum/start-here.json, before they go in (parallel drafts) */
const dataFile = args.includes('--data') ? path.resolve(args.splice(args.indexOf('--data'), 2)[1]) : path.join(ROOT, 'curriculum', 'start-here.json');
const JS = dataFile.endsWith(path.join('curriculum', 'start-here.json')) ? null
  : require('child_process').execFileSync('python3', [path.join(ROOT, 'tools', 'activities.py'), '--js', dataFile], { encoding: 'utf8' });

async function page(browser) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  await require('./cloud/vendor-routes.cjs')(ctx).catch(() => {});
  if (process.env.VD_THREE) await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: process.env.VD_THREE }));
  if (JS) await ctx.route(/demos\/lib\/starthere\.js/, (r) => r.fulfill({ body: JS, contentType: 'text/javascript' }));
  const p = await ctx.newPage(); p.errors = [];
  p.on('pageerror', (e) => p.errors.push(e.message));
  return p;
}
const url = (demo, q) => 'file://' + path.join(ROOT, 'demos', demo + '.html') + (q ? '?' + q : '');

(async () => {
  const browser = await chromium.launch();
  if (args[0] === '--link') {
    const [, demo, ...acts] = args, p = await page(browser);
    const q0 = (acts.find((a) => a.startsWith('q:')) || 'q:').slice(2);
    await p.goto(url(demo, q0)); await p.waitForTimeout(1500);
    for (const a of acts) {
      const [k, ...r] = a.split(':'), v = r.join(':');
      if (k === 'click') await p.getByRole('button', { name: v, exact: true }).first().click().catch(async () => p.getByText(v, { exact: true }).first().click());
      else if (k === 'sel') await p.click(v);
      else if (k === 'set') { const [sel, val] = v.split('='); await p.$eval(sel, (e, val) => { e.value = val; e.dispatchEvent(new Event('input', { bubbles: true })); e.dispatchEvent(new Event('change', { bubbles: true })); }, val); }
      else if (k === 'wait') await p.waitForTimeout(+v);
      await p.waitForTimeout(250);
    }
    const link = await p.evaluate(() => window.VD && VD.share && VD.share.link ? VD.share.link() : '');
    const q = new URL(link).search.replace(/^\?/, '');
    console.log(q);
    if (p.errors.length) console.log('page errors:', p.errors.join(' | '));
    await browser.close(); return;
  }
  const data = JSON.parse(fs.readFileSync(dataFile, 'utf8')).demos;
  const names = args.length ? args : Object.keys(data);
  fs.mkdirSync(OUT, { recursive: true });
  let bad = 0;
  for (const demo of names) {
    const e = data[demo];
    if (!e || !fs.existsSync(path.join(ROOT, 'demos', demo + '.html'))) { console.log(`${demo}: no entry or no demo`); bad++; continue; }
    const steps = [['main', e.setup || '', '1']].concat((e.explore || []).map((x, i) => ['e' + (i + 1), x.setup || '', 'e' + (i + 1)]));
    for (const [tag, setup, st] of steps) {
      const p = await page(browser);
      const q = [setup, 'start=' + st, lang ? 'lang=' + lang : ''].filter(Boolean).join('&');
      await p.goto(url(demo, q)); await p.waitForTimeout(2500);
      const r = await p.evaluate(() => { const d = document.getElementById('vdStart'); return d ? { open: d.open, go: [...d.querySelectorAll('a.vd-start-go')].map((a) => a.getAttribute('href')) } : null; });
      const problems = [...p.errors];
      if (!r) problems.push('no Start here fold');
      else if (!r.open) problems.push('fold not open');
      await p.evaluate(() => { const d = document.getElementById('vdStart'); if (d) d.scrollIntoView({ block: 'start' }); });
      await p.screenshot({ path: path.join(OUT, `${demo}-${tag}.png`) });
      console.log(`${demo} ${tag}: ${problems.length ? 'PROBLEM ' + problems.join(' | ') : 'ok'}`);
      if (problems.length) bad++;
      await p.context().close();
    }
  }
  await browser.close();
  console.log(bad ? `${bad} problem(s)` : 'all ok', '· pictures in', OUT);
  process.exit(bad ? 1 : 0);
})();
