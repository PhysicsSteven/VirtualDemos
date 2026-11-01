#!/usr/bin/env node
/* Language catalogs for the site (demos/lib/i18n.js; how it works and how to add strings: demos/lib/i18n.md).

   NODE_PATH=/opt/node-tools/node_modules node tools/i18n.cjs harvest pendulum doppler     the English strings of these demos
                                                     harvest --demos                   every demo
                                                     harvest --site _site ws/pendulum  a worksheet, from a Jekyll build
                                                                                       (handouts are Markdown; Pages builds them)
                                                     harvest --site _site site notes/pendulum
   node tools/i18n.cjs leaks pendulum [-v]   the page in the test language (?lang=qps) through the same presses: English still
                                             showing (never harvested), page errors that only the test language has; -v also
                                             lists lookups that missed (canvas text, attributes, pieces of runs)
   node tools/i18n.cjs common     move strings found on many demos into en/common.js (run after harvesting every demo)
   node tools/i18n.cjs index      write the LANGS block of i18n.js from the language folders (run after adding a catalog)
   node tools/i18n.cjs check      every translation against its English: same tags, same {#} and {name}, nothing stale; coverage
   node tools/i18n.cjs todo es demo/pendulum   the English strings of a page with no translation yet, as JSON to fill in
   node tools/i18n.cjs merge es demo/pendulum filled.json   add translations from a filled todo file

   A harvest opens the page with ?i18n=collect (i18n.js records every string the page shows: text, attributes, canvas text,
   the title), then presses every Setups chip, every switch segment and tab, Play for a moment, and opens every fold,
   recording again after each, then the page's own extra steps if it has them (tools/i18n/<demo>.cjs, or ws-<slug>.cjs,
   exporting async (page, grab) => {}: drags, slider ends, long runs, warnings; call await grab(page) after each state). Literals in VDI18N.t('...') calls are added from the source. The result is
   demos/lib/i18n/en/<page>.js, an array in the order first seen. Strings with numbers are kept as patterns ({#}). */
'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const SITE = (() => { const i = process.argv.indexOf('--site'); if (i < 0) return null; const v = process.argv[i + 1]; process.argv.splice(i, 2); return v; })();
const NOCLICK = process.argv.includes('--no-click'), VERBOSE = process.argv.includes('-v');
const ROOT = path.resolve(__dirname, '..'), CAT = path.join(ROOT, 'demos/lib/i18n');
const args = process.argv.slice(2), cmd = args.shift();
const opt = (k, d) => { const i = args.indexOf(k); if (i < 0) return d; const v = args[i + 1]; args.splice(i, 2); return v; };
const flag = (k) => { const i = args.indexOf(k); if (i < 0) return false; args.splice(i, 1); return true; };

/* ---------- catalog files ---------- */
/* strings no language translates: numbers with SI symbols, single letters, symbols (they are left out of the catalogs) */
const UNITS = new Set(('m s g kg mg μg mm cm km nm μm pm fm Å Hz kHz MHz GHz THz V kV mV MV μV A mA μA kA Ω kΩ MΩ W kW MW mW μW J kJ MJ eV keV MeV GeV TeV ' +
  'K Pa kPa MPa GPa hPa N kN mN T mT μT G nT C μC nC pC F μF nF pF H mH μH L mL dB dBA rad mrad sr mol cd lm lx Bq kBq MBq GBq Ci mCi Gy mGy cGy Sv mSv μSv ' +
  'AU au pc kpc Mpc ly px pt ms μs ns ps fs min h atm bar mbar u Da kDa amu cal kcal Wh kWh rpm psi lb in ft mi mph c e x y z t E B M R P Q D S U X Y Z').split(' '));
function trivial(k) {
  const words = k.replace(/<[^>]*>|\{#\d*\}|\{[A-Za-z_]\w*\}/g, ' ').split(/[^A-Za-zÀ-ɏͰ-ϿЀ-ӿ]+/).filter(Boolean);
  return words.every((w) => w.length === 1 || UNITS.has(w) || /^[Ͱ-Ͽ]+$/.test(w));
}
const file = (lang, pg) => path.join(CAT, lang, pg + '.js');
/* Liquid (Pages runs it on every file) must never see a brace next to a brace or a percent sign */
const safe = (s) => s.replace(/\{(?=[\x7b\x25])/g, '\\u007b').replace(/\x25(?=\})/g, '\\u0025');
function readCat(lang, pg) {
  const f = file(lang, pg); if (!fs.existsSync(f)) return null;
  const s = fs.readFileSync(f, 'utf8'), m = s.match(/VDI18N\.add\([^,]+,\s*'[^']*',\s*([\s\S]*)\);\s*$/);
  if (!m) throw new Error('cannot read ' + f);
  return JSON.parse(m[1]);
}
function writeCat(lang, pg, data, head) {
  const f = file(lang, pg); fs.mkdirSync(path.dirname(f), { recursive: true });
  let body;
  if (Array.isArray(data)) body = '[\n' + data.filter((k) => !trivial(k)).map((s) => safe(JSON.stringify(s))).join(',\n') + '\n]';
  else body = '{\n' + Object.keys(data).map((k) => safe(JSON.stringify(k)) + ':\n  ' + safe(JSON.stringify(data[k]))).join(',\n') + '\n}';
  const top = '/* ' + (head || (lang === 'en' ? 'English strings of ' + pg + ', harvested by tools/i18n.cjs (do not edit by hand: harvest again)' : pg + ' in ' + lang + ': English key, translation (tools/i18n.cjs todo and merge; see demos/lib/i18n.md)')) + ' */\n';
  fs.writeFileSync(f, top + "VDI18N.add('" + lang + "', '" + pg + "', " + body + ');\n');
}
const langs = () => fs.readdirSync(CAT).filter((d) => d !== 'en' && fs.statSync(path.join(CAT, d)).isDirectory());
function pagesOf(lang) {
  const out = [], dir = path.join(CAT, lang);
  (function walk(d, pre) { for (const f of fs.readdirSync(d)) { const p = path.join(d, f); if (fs.statSync(p).isDirectory()) walk(p, pre + f + '/'); else if (f.endsWith('.js')) out.push(pre + f.slice(0, -3)); } })(dir, '');
  return out.sort();
}

/* ---------- harvest ---------- */
const TYPES = { '.html': 'text/html', '.css': 'text/css', '.js': 'text/javascript', '.json': 'application/json', '.svg': 'image/svg+xml', '.png': 'image/png', '.jpg': 'image/jpeg', '.mp4': 'video/mp4', '.woff2': 'font/woff2' };
function serve(dir) {
  return new Promise((res) => {
    const srv = http.createServer((req, rsp) => {
      let p = decodeURIComponent(req.url.split('?')[0]).replace(/^\/VirtualDemos/, '');
      if (p.endsWith('/')) p += 'index.html';
      let f = path.join(p.startsWith('/demos/lib/') ? ROOT : dir, p);   /* the library (i18n.js, catalogs) always from the working tree */
      if (!fs.existsSync(f) && fs.existsSync(f + '.html')) f += '.html';
      if (!(f.startsWith(dir) || f.startsWith(ROOT)) || !fs.existsSync(f) || fs.statSync(f).isDirectory()) { rsp.writeHead(404); rsp.end(); return; }
      rsp.writeHead(200, { 'content-type': TYPES[path.extname(f)] || 'application/octet-stream' }); fs.createReadStream(f).pipe(rsp);
    });
    srv.listen(0, '127.0.0.1', () => res(srv));
  });
}
const urlOf = (pg) => pg === 'site' ? ['index.html', 'physics-1.html', 'physics-2.html', 'modern.html', 'astro.html', 'astro-2203.html', 'thermo.html', 'acoustics.html', 'medical-physics.html', 'openstax.html', 'notes/index.html']
  .concat(fs.existsSync(path.join(ROOT, 'topics')) ? fs.readdirSync(path.join(ROOT, 'topics')).filter((f) => f.endsWith('.html')).map((f) => 'topics/' + f) : [])
  : pg.startsWith('demo/') ? ['demos/' + pg.slice(5) + '.html'] : pg.startsWith('ws/') ? ['curriculum/labs/students/' + pg.slice(3) + '.html'] : pg.startsWith('notes/') ? ['notes/' + pg.slice(6) + '.html'] : [];
/* VDI18N.t('literal') in the page's own source */
function literals(pg) {
  const src = pg.startsWith('demo/') ? path.join(ROOT, 'demos', pg.slice(5) + '.html') : null;
  if (!src || !fs.existsSync(src)) return [];
  const out = [], re = /VDI18N\.t\(\s*(['"])((?:\\.|(?!\1).)*)\1/g; let m;
  const s = fs.readFileSync(src, 'utf8');
  while ((m = re.exec(s))) out.push(m[2].replace(/\\(['"\\])/g, '$1').replace(/\s+/g, ' ').trim());
  return out;
}
/* every Setups chip, switch segment, tab and view button; Play briefly; every fold opened (after each, step(page) runs) */
async function clickThrough(page, step) {
  const n = await page.evaluate(() => {
    const sel = '[data-p], .seg button, [role="tab"], .chips button, .viewbar button, .dimbar button, .scenes button, #sceneSeg button';
    const all = [...document.querySelectorAll(sel)].filter((b) => !b.closest('a') && !/^(vdFull|vdShare)$/.test(b.id));
    all.forEach((b, i) => b.setAttribute('data-i18n-h', i)); document.querySelectorAll('details').forEach((d) => { d.open = true; });
    return Math.min(all.length, 220);
  });
  for (let i = 0; i < n; i++) {
    await page.evaluate((i) => { const b = document.querySelector('[data-i18n-h="' + i + '"]'); if (b && !b.disabled) try { b.click(); } catch (_) {} }, i).catch(() => {});
    await page.waitForTimeout(40);
    if (i % 8 === 7) await step(page);
  }
  await step(page);
  await page.evaluate(() => { const p = document.querySelector('#play, #playBtn, .btn.primary'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(700); await step(page);
  await page.evaluate(() => { const p = document.querySelector('#play, #playBtn, .btn.primary'); if (p) p.click(); }).catch(() => {});
  await page.waitForTimeout(150); await step(page);
}
async function browserFor(br) {
  const ctx = await br.newContext({ viewport: { width: 1280, height: 800 }, acceptDownloads: true });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  /* routes added later win: the blanket block first, then the local copies */
  await ctx.route(/cdn\.jsdelivr\.net|cdnjs\.cloudflare\.com/, (r) => r.abort());
  if (process.env.VD_THREE) await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: process.env.VD_THREE }));
  if (process.env.VD_ANCHOR) await ctx.route(/anchor-js/, (r) => r.fulfill({ path: process.env.VD_ANCHOR }));
  if (process.env.VD_MATHJAX) await ctx.route(/cdn\.jsdelivr\.net\/npm\/mathjax@3\.2\.2\/es5\/tex-mml-chtml\.js/, (r) => r.fulfill({ path: process.env.VD_MATHJAX }));
  return ctx;
}
/* leaks: the page in the test language, through the same presses; English still showing, strings looked up with no
   translation, and page errors that English does not have */
async function leaks(list) {
  const { chromium } = require('playwright');
  const dir = SITE ? path.resolve(SITE) : ROOT;
  const srv = await serve(dir), base = 'http://127.0.0.1:' + srv.address().port + '/VirtualDemos/';
  const br = await chromium.launch();
  let total = 0;
  for (const pg of list) {
    const errs = { en: new Set(), qps: new Set() }, shown = new Set(), miss = new Set();
    for (const mode of ['en', 'qps']) {
      const ctx = await browserFor(br);
      for (const u of urlOf(pg)) {
        const page = await ctx.newPage();
        page.on('pageerror', (e) => errs[mode].add(e.message));
        page.on('dialog', (d) => d.dismiss().catch(() => {}));
        try { await page.goto(base + u + (mode === 'qps' ? '?lang=qps' : ''), { waitUntil: 'load', timeout: 30000 }); } catch (e) { errs[mode].add(e.message); await page.close(); continue; }
        await page.waitForTimeout(400);
        const step = mode === 'en' ? async () => {} : async (p) => {
          const r = await p.evaluate(() => {
            const out = [], tw = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT); let n;
            while ((n = tw.nextNode())) {
              const t = n.data.replace(/\s+/g, ' ').trim(), e = n.parentElement;
              if (!/[A-Za-z]{3}/.test(t) || /[⟦⟧]/.test(t) || !e || e.closest('script,style,code,pre,kbd,samp,textarea,[translate="no"],.notranslate,[data-i18n-skip],.vd-lang') || !e.getClientRects().length) continue;
              if (/[⟦⟧]/.test(e.textContent)) continue;
              out.push(t.slice(0, 90));
            }
            return { out, miss: Object.keys(window.__vdI18nMiss || {}) };
          }).catch(() => ({ out: [], miss: [] }));
          r.out.forEach((t) => shown.add(t)); r.miss.forEach((t) => miss.add(t));
        };
        await step(page);
        if (pg.startsWith('demo/') && !NOCLICK) await clickThrough(page, step);
        const more = path.join(ROOT, 'tools/i18n', pg.replace(/^demo\//, '').replace(/\//g, '-') + '.cjs');
        if (fs.existsSync(more)) { try { await require(more)(page, step); await step(page); } catch (e) { errs[mode].add('steps: ' + e.message); } }
        await page.close();
      }
      await ctx.close();
    }
    const newErr = [...errs.qps].filter((e) => !errs.en.has(e));
    const missOnly = [...miss].filter((m) => !shown.has(m) && /[A-Za-z]{3}/.test(m));
    total += shown.size + newErr.length;
    console.log(`${pg}: ${shown.size} English texts showing, ${newErr.length} page errors only in the test language` + (missOnly.length ? `, ${missOnly.length} other lookups missed (canvas, attributes, pieces)` : ''));
    for (const t of shown) console.log('   shown: ' + t);
    for (const e of newErr) console.log('   error: ' + e);
    if (VERBOSE) for (const m of missOnly) console.log('   missed: ' + m.slice(0, 90));
  }
  await br.close(); srv.close();
  if (total) process.exitCode = 1;
}
async function harvest(list) {
  const { chromium } = require('playwright');
  const dir = SITE ? path.resolve(SITE) : ROOT;
  const srv = await serve(dir), base = 'http://127.0.0.1:' + srv.address().port + '/VirtualDemos/';
  const br = await chromium.launch();
  const common = new Set(readCat('en', 'common') || []);
  for (const pg of list) {
    const ctx = await browserFor(br);
    const order = new Map(), errors = [];
    const grab = async (page) => { const s = await page.evaluate(() => Object.keys(window.__vdI18nSeen || {})).catch(() => []); for (const k of s) if (!order.has(k)) order.set(k, order.size); };
    for (const u of urlOf(pg)) {
      const page = await ctx.newPage();
      page.on('pageerror', (e) => errors.push(u + ': ' + e.message));
      page.on('dialog', (d) => d.dismiss().catch(() => {}));
      try { await page.goto(base + u + '?i18n=collect', { waitUntil: 'load', timeout: 30000 }); } catch (e) { errors.push(u + ': ' + e.message); await page.close(); continue; }
      await page.waitForTimeout(400); await grab(page);
      if (pg.startsWith('demo/') && !NOCLICK) await clickThrough(page, grab);
      /* more states for this page: tools/i18n/<demo>.cjs exports async (page, grab) => {} (drags, sliders, long runs, warnings) */
      const more = path.join(ROOT, 'tools/i18n', pg.replace(/^demo\//, '').replace(/\//g, '-') + '.cjs');
      if (fs.existsSync(more)) { try { await require(more)(page, grab); await grab(page); } catch (e) { errors.push('steps: ' + e.message); } }
      await page.close();
    }
    await ctx.close();
    for (const k of literals(pg)) if (!order.has(k)) order.set(k, order.size);
    const keep = [...order.keys()].filter((k) => !common.has(k));
    if (!order.size) { console.log(pg + ': nothing harvested' + (errors.length ? ' (' + errors[0] + ')' : '')); continue; }
    writeCat('en', pg, keep);
    console.log(pg + ': ' + keep.length + ' strings' + (order.size - keep.length ? ' (+' + (order.size - keep.length) + ' common)' : '') + (errors.length ? '; page errors: ' + errors.slice(0, 3).join(' | ') : ''));
  }
  await br.close(); srv.close();
}

/* ---------- common: strings on many demos ---------- */
function makeCommon() {
  const min = +opt('--min', 6);
  const pages = pagesOf('en').filter((p) => p !== 'common' && p !== 'site');
  const old = readCat('en', 'common') || [], count = new Map();
  const cats = {};
  for (const p of pages) { cats[p] = readCat('en', p); for (const k of new Set(cats[p])) count.set(k, (count.get(k) || 0) + 1); }
  const add = [...count].filter(([k, n]) => n >= min).map(([k]) => k);
  const all = [...new Set(old.concat(add))];
  writeCat('en', 'common', all, 'English strings shared by many pages (framework, theme, nav), from tools/i18n.cjs common');
  const set = new Set(all);
  for (const p of pages) { const rest = cats[p].filter((k) => !set.has(k)); writeCat('en', p, rest); }
  console.log('common: ' + all.length + ' strings (' + add.filter((k) => !old.includes(k)).length + ' new, on ' + min + '+ pages)');
}

/* ---------- index: the LANGS block of i18n.js ---------- */
function index() {
  const out = {};
  for (const l of langs()) {
    const meta = JSON.parse(fs.readFileSync(path.join(CAT, l, 'meta.json'), 'utf8'));
    out[l] = Object.assign({}, meta, { pages: pagesOf(l).filter((p) => p !== 'common') });
  }
  const f = path.join(ROOT, 'demos/lib/i18n.js'), s = fs.readFileSync(f, 'utf8');
  const block = '  var LANGS = ' + safe(JSON.stringify(out)) + ';\n';
  const t = s.replace(/(\/\* ==LANGS START==[^\n]*\n)[\s\S]*?(  \/\* ==LANGS END== \*\/)/, (a, b, c) => b + block + c);
  fs.writeFileSync(f, t);
  for (const l in out) console.log(l + ': ' + out[l].pages.length + ' pages');
}

/* ---------- check ---------- */
const tagsOf = (s) => (s.match(/<\/?[a-z0-9]+[^>]*>/gi) || []).map((t) => t.replace(/\s[^>]*/, '').toLowerCase()).join('');
const holes = (s) => (s.match(/\{#\d*\}/g) || []).length;
const names = (s) => (s.match(/\{[A-Za-z_]\w*\}/g) || []).sort().join('');
function check() {
  let bad = 0;
  const enCommon = new Set(readCat('en', 'common') || []), enSite = new Set(readCat('en', 'site') || []);
  for (const l of langs()) {
    const tot = { have: 0, need: 0 };
    for (const pg of pagesOf(l)) {
      const tr = readCat(l, pg), en = readCat('en', pg);
      const enSet = new Set(en || []);
      let have = 0;
      for (const k in tr) {
        const v = tr[k];
        if (!enSet.has(k) && !enCommon.has(k) && !(pg !== 'site' && enSite.has(k))) console.log(`${l}/${pg}: not on the page any more (harvest again or drop): ${k.slice(0, 80)}`);
        if (tagsOf(k) !== tagsOf(v)) { bad++; console.log(`${l}/${pg}: tags differ: ${k.slice(0, 60)} -> ${v.slice(0, 60)}`); }
        const nk = holes(k), nv = holes(v);
        if (nk !== nv && !/\{#\d+\}/.test(v)) { bad++; console.log(`${l}/${pg}: {#} count differs: ${k.slice(0, 60)}`); }
        if (names(k) !== names(v)) { bad++; console.log(`${l}/${pg}: {name} placeholders differ: ${k.slice(0, 60)}`); }
        if (/\{[\x7b\x25]|\x25\}/.test(v)) { bad++; console.log(`${l}/${pg}: Liquid would read this: ${v.slice(0, 60)}`); }
        if (enSet.has(k)) have++;
      }
      if (en) { tot.have += have; tot.need += en.length; console.log(`${l}/${pg}: ${have} of ${en.length} strings`); }
    }
    console.log(`${l}: ${tot.have} of ${tot.need} page strings translated`);
  }
  if (bad) { console.log(bad + ' problems'); process.exit(1); }
}

function todo(l, pg) {
  const en = readCat('en', pg) || [], tr = readCat(l, pg) || {};
  const out = {}; for (const k of en) if (!(k in tr)) out[k] = '';
  process.stdout.write(JSON.stringify(out, null, 1) + '\n');
}
function merge(l, pg, f) {
  const add = JSON.parse(fs.readFileSync(f, 'utf8')), tr = readCat(l, pg) || {}, en = readCat('en', pg) || Object.keys(add);
  for (const k in add) if (add[k]) tr[k] = add[k];
  const ordered = {}; for (const k of en) if (k in tr) ordered[k] = tr[k]; for (const k in tr) if (!(k in ordered)) ordered[k] = tr[k];
  writeCat(l, pg, ordered);
  console.log(l + '/' + pg + ': ' + Object.keys(ordered).length + ' translations');
}

(async () => {
  if (cmd === 'harvest') {
    let list = args.slice();
    if (flag('--demos') || list.includes('--demos')) list = fs.readdirSync(path.join(ROOT, 'demos')).filter((f) => f.endsWith('.html') && !/http-equiv="refresh"/i.test(fs.readFileSync(path.join(ROOT, 'demos', f), 'utf8'))).map((f) => 'demo/' + f.slice(0, -5));
    list = list.filter((x) => !x.startsWith('--')).map((x) => /\//.test(x) || x === 'site' ? x : 'demo/' + x);
    await harvest(list);
  } else if (cmd === 'leaks') {
    const list = args.filter((x) => !x.startsWith('-')).map((x) => /\//.test(x) || x === 'site' ? x : 'demo/' + x);
    await leaks(list);
  } else if (cmd === 'common') makeCommon();
  else if (cmd === 'index') index();
  else if (cmd === 'check') check();
  else if (cmd === 'todo') todo(args[0], args[1]);
  else if (cmd === 'merge') merge(args[0], args[1], args[2]);
  else { console.error('usage: see the top of tools/i18n.cjs'); process.exit(2); }
})().catch((e) => { console.error(e); process.exit(1); });
