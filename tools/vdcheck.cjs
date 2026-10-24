#!/usr/bin/env node
/* The gate for the shared demo framework: a demo moved onto demos/lib must work and look exactly as it did.

   NODE_PATH=/opt/node-tools/node_modules node tools/vdcheck.cjs pendulum string-density
   options: --ref REF     compare with this commit (default origin/main)
            --full        every width and state (the pilot and every library edit); the default is the batch set
            --only after  no comparison: page errors, missing files and sideways scroll only

   Five checks, each comparing the demo served from REF ("before") with the working tree ("after"):
   1. CORE: the text between // ==CORE START== and // ==CORE END== is byte identical.
   2. Controls and styles: the set of every id, name, aria-label, button text, option text and label text is identical,
      and so is the computed style of every element (and its ::before and ::after) at 1280 and 400 px, with and without
      Projector, as the page opens. This makes moving CSS into the library provably change nothing.
   3. Tokens: the computed value of every -- custom property on :root is identical in light, dark and projector.
   4. Export: the demo's script in tools/vdcheck/<demo>.cjs (export: async (page) => {}) records readings; the
      vd-handoff:<demo> JSON written by Export to worksheet (without its time stamps) and the readings table's text,
      after the script's edit step (edit: async (page) => {}), are identical.
   5. Screenshots: full page, at 1280 and 400 px in light and dark (--full: 1440, 1280, 400 and 360 px, plus the extra
      states in tools/vdcheck/<demo>.cjs, states: [{ name, run }]), of the page as it opens, each Setups chip, and
      Projector on. Math.random is seeded, web fonts are blocked (both sides use the same system fonts), the clock is
      Playwright's paused fake clock, the page asks for reduced motion, and transitions and the caret are off. A
      screenshot passes when at most NOISE pixels differ (antialiasing after the projector resize); a diff image is saved.
   A screenshot that differs is taken again on both sides, and only a difference that repeats counts (a running
   simulation can be caught one frame apart).
   It also fails on any page error, a missing file under demos/ (handouts are built by Pages, so not served here), or sideways scroll at phone width. Output goes to $VDCHECK_DIR
   (default /tmp/vdcheck). */
'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http'), cp = require('node:child_process');
const { chromium } = require('playwright');

const ROOT = path.resolve(__dirname, '..');
const args = process.argv.slice(2), opt = (k, d) => { const i = args.indexOf(k); if (i < 0) return d; const v = args[i + 1]; args.splice(i, 2); return v; };
const flag = (k) => { const i = args.indexOf(k); if (i < 0) return false; args.splice(i, 1); return true; };
const REF = opt('--ref', 'origin/main'), ONLY = opt('--only', null), FULL = flag('--full'), OUT = process.env.VDCHECK_DIR || '/tmp/vdcheck';
const NOISE = 50;
const demos = args.filter((a) => !a.startsWith('--'));
if (!demos.length) { console.error('usage: node tools/vdcheck.cjs [--ref REF] [--full] [--only after] demo...'); process.exit(2); }

const VIEWS = FULL ? [['1440', 1440, 900], ['1280', 1280, 800], ['400', 400, 860], ['360', 360, 780]] : [['1280', 1280, 800], ['400', 400, 860]];
const THEMES = ['light', 'dark'];
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg' };
const T0 = new Date('2026-10-23T12:00:00Z');

function serve(read) {
  const s = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split(/[?#]/)[0]).replace(/^\/+/, '');
    if (rel.split('/').includes('..')) { res.writeHead(403).end(); return; }
    const b = read(rel);
    if (!b) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', TYPES[path.extname(rel)] || 'application/octet-stream'); res.end(b);
  });
  return new Promise((r) => s.listen(0, '127.0.0.1', () => r({ s, base: `http://127.0.0.1:${s.address().port}/` })));
}
const fromTree = (rel) => { try { return fs.readFileSync(path.join(ROOT, rel)); } catch (_) { return null; } };
const fromRef = (rel) => { try { return cp.execFileSync('git', ['show', `${REF}:${rel}`], { cwd: ROOT, maxBuffer: 64e6, stdio: ['ignore', 'pipe', 'ignore'] }); } catch (_) { return null; } };
const coreOf = (b) => { const m = b && b.toString().match(/\/\/ ==CORE START==([\s\S]*?)\/\/ ==CORE END==/); return m ? m[1] : null; };

const SEED = `(() => { let a = 20261023; Math.random = () => { a = (a + 0x6D2B79F5) | 0; let t = Math.imul(a ^ (a >>> 15), 1 | a); t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t; return ((t ^ (t >>> 14)) >>> 0) / 4294967296; }; })();`;

async function context(browser, w, h, theme, motion) {
  const ctx = await browser.newContext({ viewport: { width: w, height: h }, colorScheme: theme, reducedMotion: motion, deviceScaleFactor: 1 });
  await ctx.addInitScript(SEED);
  await ctx.clock.install({ time: T0 });
  await ctx.clock.pauseAt(new Date(T0.getTime() + 1000));
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  /* where cdnjs is blocked (cloud sessions), VD_THREE names a local three.min.js r128 to serve instead */
  if (process.env.VD_THREE) await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: process.env.VD_THREE }));
  return ctx;
}
async function openPage(ctx, base, demo, problems, label) {
  const page = await ctx.newPage();
  page.on('pageerror', (e) => problems.push(`${label}: page error: ${e.message}`));
  page.on('response', (r) => { if (r.status() >= 400 && r.url().startsWith(base + 'demos/')) problems.push(`${label}: ${r.status()} ${r.url().slice(base.length)}`); });
  page.on('dialog', (d) => d.accept());
  await page.goto(base + `demos/${demo}.html`, { waitUntil: 'load' });
  await page.clock.runFor(500);
  return page;
}

/* checks 2 and 3: what handouts, worksheet.js and key capture scripts rely on, and every colour the page draws with */
const CONTROLS = () => {
  const out = new Set(), t = (s) => (s || '').replace(/\s+/g, ' ').trim();
  for (const e of document.querySelectorAll('[id]')) out.add('id ' + e.id);
  for (const e of document.querySelectorAll('[name]')) out.add('name ' + e.getAttribute('name'));
  for (const e of document.querySelectorAll('[aria-label]')) out.add('aria ' + e.getAttribute('aria-label'));
  for (const e of document.querySelectorAll('button')) out.add('button ' + t(e.textContent));
  for (const e of document.querySelectorAll('option')) out.add('option ' + t(e.textContent));
  for (const e of document.querySelectorAll('label')) out.add('label ' + t(e.textContent));
  return [...out].sort();
};
/* every element's computed style, so a moved rule that changes anything, even inside a closed fold, is caught */
const STYLES = () => {
  const out = [], path = (e) => { const p = []; for (; e && e !== document.documentElement; e = e.parentElement) p.unshift(e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + ':' + [...e.parentElement.children].filter((c) => !/^(script|link|style)$/i.test(c.tagName)).indexOf(e)); return p.join('>'); };
  for (const e of [document.documentElement, ...document.querySelectorAll('body *')]) {
    if ((e.closest('svg') && e.tagName.toLowerCase() !== 'svg') || /^(script|link|style)$/i.test(e.tagName)) continue;
    for (const pseudo of [null, '::before', '::after']) {
      const cs = getComputedStyle(e, pseudo); if (pseudo && (cs.content === 'none' || cs.content === 'normal')) continue;
      const v = {}, ns = []; for (let i = 0; i < cs.length; i++) ns.push(cs[i]); for (const n of ns.sort()) v[n] = cs.getPropertyValue(n);
      out.push([path(e) + (pseudo || ''), JSON.stringify(v)]);
    }
  }
  return out;
};
const TOKENS = () => {
  const names = new Set();
  const walk = (rules) => { for (const r of rules) { if (r.style) for (const p of r.style) if (p.startsWith('--')) names.add(p); if (r.cssRules) walk(r.cssRules); } };
  for (const s of document.styleSheets) { try { walk(s.cssRules); } catch (_) {} }
  const cs = getComputedStyle(document.documentElement);
  return [...names].sort().map((n) => `${n}: ${cs.getPropertyValue(n).trim()}`);
};

async function behaviour(browser, base, demo, x, problems) {
  const r = { controls: null, tokens: {}, styles: {}, exported: null, table: null };
  for (const [w, h] of [[1280, 800], [400, 860]]) {
    const ctx = await context(browser, w, h, 'light', 'reduce'), page = await openPage(ctx, base, demo, problems, `styles ${w}`);
    r.styles[w] = await page.evaluate(STYLES);
    if (await page.locator('#proj').count()) { await page.click('#proj'); await page.clock.runFor(200); r.styles[w + ' projector'] = await page.evaluate(STYLES); }
    await ctx.close();
  }
  for (const theme of THEMES) {
    const ctx = await context(browser, 1280, 800, theme, 'reduce'), page = await openPage(ctx, base, demo, problems, `tokens ${theme}`);
    if (theme === 'light') r.controls = await page.evaluate(CONTROLS);
    r.tokens[theme] = await page.evaluate(TOKENS);
    if (await page.locator('#proj').count()) { await page.click('#proj'); await page.clock.runFor(200); r.tokens[theme + ' projector'] = await page.evaluate(TOKENS); }
    await ctx.close();
  }
  if (x.export) {
    const ctx = await context(browser, 1280, 800, 'light', 'no-preference'), page = await openPage(ctx, base, demo, problems, 'export');
    await x.export(page);
    await page.locator('#exportCsv, button:has-text("Export to worksheet")').first().click(); await page.clock.runFor(200);
    const raw = await page.evaluate((d) => localStorage.getItem('vd-handoff:' + d), demo);
    if (raw) { const j = JSON.parse(raw); delete j.sent; delete j.series; r.exported = JSON.stringify(j, null, 1); }
    if (x.edit) { await x.edit(page); await page.clock.runFor(200); }
    r.table = await page.evaluate(() => [...document.querySelectorAll('table.rows, #rowsTbl')].map((t) => [...t.querySelectorAll('tr')].map((tr) => [...tr.cells].map((c) => { const i = c.querySelector('input'); return i ? i.value : c.textContent.trim(); }).join(' | ')).join('\n')).join('\n\n'));
    await ctx.close();
  }
  return r;
}

async function shoot(browser, base, demo, x, tag, problems, only) {
  const shots = new Map();
  for (const [vw, w, h] of VIEWS) for (const theme of THEMES) {
    if (only && !only.has(`${vw}-${theme}`)) continue;
    const ctx = await context(browser, w, h, theme, 'reduce'), label = `${vw} ${theme}`;
    const snap = async (page, name) => {
      await page.clock.runFor(250); await page.evaluate(() => document.fonts.ready); await page.waitForTimeout(120);
      const key = `${vw}-${theme}-${name}`;
      shots.set(key, await page.screenshot({ fullPage: true, animations: 'disabled', caret: 'hide' }));
      if (w <= 400) { const sx = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth); if (sx > 0) problems.push(`${key}: sideways scroll ${sx}px`); }
    };
    let page = await openPage(ctx, base, demo, problems, label);
    await snap(page, 'open');
    const chips = await page.locator('#presets button').all();
    for (let i = 0; i < chips.length; i++) { if (!(await chips[i].isVisible())) continue; await chips[i].click(); await snap(page, `preset${i + 1}`); }
    await page.close();
    for (const s of (FULL ? x.states || [] : [])) { page = await openPage(ctx, base, demo, problems, label); await s.run(page); await snap(page, s.name); await page.close(); }
    page = await openPage(ctx, base, demo, problems, label);
    if (await page.locator('#proj').count()) { await page.click('#proj'); await page.clock.runFor(200); await snap(page, 'projector'); }
    await page.close(); await ctx.close();
  }
  if (only) return shots;
  const dir = path.join(OUT, demo, tag); fs.mkdirSync(dir, { recursive: true });
  for (const [k, b] of shots) fs.writeFileSync(path.join(dir, k + '.png'), b);
  return shots;
}

/* count differing pixels in the browser (no image library needed) and write a diff picture: changed pixels in red */
async function compare(browser, a, b, diffFile) {
  const page = await browser.newPage();
  const r = await page.evaluate(async ([a, b]) => {
    const load = (s) => new Promise((ok) => { const i = new Image(); i.onload = () => ok(i); i.src = 'data:image/png;base64,' + s; });
    const [A, B] = await Promise.all([load(a), load(b)]);
    if (A.width !== B.width || A.height !== B.height) return { n: -1, size: `${A.width}x${A.height} became ${B.width}x${B.height}` };
    const c = document.createElement('canvas'); c.width = A.width; c.height = A.height; const x = c.getContext('2d');
    x.drawImage(A, 0, 0); const da = x.getImageData(0, 0, c.width, c.height); x.drawImage(B, 0, 0); const db = x.getImageData(0, 0, c.width, c.height);
    let n = 0; for (let i = 0; i < da.data.length; i += 4) { if (da.data[i] !== db.data[i] || da.data[i + 1] !== db.data[i + 1] || da.data[i + 2] !== db.data[i + 2]) { n++; db.data[i] = 255; db.data[i + 1] = 0; db.data[i + 2] = 0; db.data[i + 3] = 255; } else { db.data[i + 3] = 50; } }
    x.putImageData(db, 0, 0); return { n, png: c.toDataURL('image/png').split(',')[1] };
  }, [a.toString('base64'), b.toString('base64')]);
  await page.close();
  if (r.png && r.n) fs.writeFileSync(diffFile, Buffer.from(r.png, 'base64'));
  return r;
}

function same(label, a, b, log) {
  if (JSON.stringify(a) === JSON.stringify(b)) return 0;
  if (Array.isArray(a) && Array.isArray(b)) {
    const A = new Set(a), B = new Set(b);
    for (const v of a) if (!B.has(v)) log(`${label}: lost ${v}`);
    for (const v of b) if (!A.has(v)) log(`${label}: added ${v}`);
  } else log(`${label}: differs\n--- before\n${a}\n--- after\n${b}`);
  return 1;
}

(async () => {
  const browser = await chromium.launch({ headless: true });
  const after = await serve(fromTree), before = ONLY ? null : await serve(fromRef);
  let bad = 0;
  for (const demo of demos) {
    fs.rmSync(path.join(OUT, demo), { recursive: true, force: true });
    const xf = path.join(ROOT, 'tools', 'vdcheck', demo + '.cjs');
    const x = fs.existsSync(xf) ? require(xf) : {}, log = (m) => console.log(`  ${demo} ${m}`);
    const pa = [], A = await shoot(browser, after.base, demo, x, 'after', pa);
    if (ONLY) { for (const p of pa) log(p); bad += pa.length; console.log(`${demo}: ${A.size} screenshots, ${pa.length} problems`); continue; }
    const fails = [];
    const ca = coreOf(fromTree(`demos/${demo}.html`)), cb = coreOf(fromRef(`demos/${demo}.html`));
    if (ca !== cb) fails.push('CORE');
    const pb = [], Ba = await behaviour(browser, after.base, demo, x, pa), Bb = await behaviour(browser, before.base, demo, x, pb);
    if (same('controls', Bb.controls, Ba.controls, log)) fails.push('controls');
    let st = 0;
    for (const k of Object.keys(Bb.styles)) {
      const a = Ba.styles[k] || [], b = Bb.styles[k];
      if (a.length !== b.length) { log(`styles ${k}: ${b.length} elements became ${a.length}`); st++; continue; }
      let shown = 0;
      for (let i = 0; i < b.length; i++) {
        if (a[i][0] === b[i][0] && a[i][1] === b[i][1]) continue;
        st++; if (shown++ >= 8) continue;
        if (a[i][0] !== b[i][0]) { log(`styles ${k}: element ${b[i][0]} became ${a[i][0]}`); continue; }
        const pa = JSON.parse(a[i][1]), pb = JSON.parse(b[i][1]);
        const dd = [...new Set([...Object.keys(pa), ...Object.keys(pb)])].filter((n) => pa[n] !== pb[n]);
        log(`styles ${k}: ${b[i][0]}: ${dd.map((n) => `${n}: ${pb[n] === undefined ? 'unset' : JSON.stringify(pb[n])} became ${pa[n] === undefined ? 'unset' : JSON.stringify(pa[n])}`).join('; ')}`);
      }
    }
    if (st) fails.push('styles');
    /* a token the library declares only inside a rule switched off for this demo has no value: not a change */
    let tk = 0; for (const k of Object.keys(Bb.tokens)) tk += same(`tokens ${k}`, Bb.tokens[k], (Ba.tokens[k] || []).filter((v) => !/: $/.test(v) || Bb.tokens[k].includes(v)), log); if (tk) fails.push('tokens');
    if (x.export) {
      if (!Bb.exported) log('export: nothing was exported before the change (check the export script)');
      if (same('export JSON', Bb.exported, Ba.exported, log) + same('readings table', Bb.table, Ba.table, log)) fails.push('export');
    }
    const B = await shoot(browser, before.base, demo, x, 'before', pb);
    let diffs = 0, noise = 0;
    const differ = async (B, A, save) => {
      const out = new Map();
      for (const [k, b] of B) {
        const a = A.get(k);
        if (!a) { out.set(k, 'missing after the change'); continue; }
        if (a.equals(b)) continue;
        const r = await compare(browser, b, a, save ? path.join(OUT, demo, `diff-${k}.png`) : '/dev/null');
        if (r.n === 0) continue;
        if (r.n > 0 && r.n <= NOISE) { noise++; continue; }
        out.set(k, r.n < 0 ? r.size : r.n + ' pixels differ');
      }
      return out;
    };
    let bad1 = await differ(B, A, true);
    /* a state that runs the simulation can land one frame apart; take those widths and themes again, both sides, and
       count only what differs twice */
    if (bad1.size) {
      const again = new Set([...bad1.keys()].map((k) => k.split('-').slice(0, 2).join('-')));
      const A2 = await shoot(browser, after.base, demo, x, 'after', pa, again), B2 = await shoot(browser, before.base, demo, x, 'before', pb, again);
      const bad2 = await differ(new Map([...B2].filter(([k]) => bad1.has(k))), A2, false);
      for (const [k, m] of bad1) if (bad2.has(k)) { diffs++; log(`${k}: ${m}, and ${bad2.get(k)} on a second try`); } else log(`${k}: ${m} on the first try only (timing), same on a second try`);
    }
    for (const k of A.keys()) if (!B.has(k)) { log(`${k}: new state, not in ${REF}`); diffs++; }
    if (diffs) fails.push('screenshots');
    for (const p of pa) log(p);
    if (pa.length) fails.push('page');
    console.log(`${demo}: ${fails.length ? 'FAIL ' + fails.join(', ') : 'pass'} (CORE ${ca === cb ? 'same' : 'changed'}, ${Ba.controls.length} controls, ${Ba.styles[1280].length} styled elements, ${Object.values(Ba.tokens).reduce((s, v) => s + v.length, 0)} token values, export ${x.export ? (Ba.exported ? 'compared' : 'empty') : 'no script'}, ${B.size} screenshots, ${noise} of them within ${NOISE} px)`);
    bad += fails.length;
  }
  await browser.close(); after.s.close(); if (before) before.s.close();
  process.exit(bad ? 1 : 0);
})().catch((e) => { console.error(e); process.exit(1); });
