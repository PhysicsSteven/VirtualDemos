#!/usr/bin/env node
/* Screen reader check (Steve unparked the screen reader pass 2026-11-16). axe (contrast, names, ARIA rules) is already at 0 flags on
   every page; this checks what axe cannot: what a screen reader user actually gets from a running demo. It reads Chrome's own
   accessibility tree (the one NVDA, JAWS, VoiceOver and TalkBack read, through CDP Accessibility.getFullAXTree), and drives the page
   with the keyboard only.

   NODE_PATH=/opt/node-tools/node_modules node tools/srcheck.cjs pendulum ideal-gas     (or --all; --jobs 3; --tree prints the tree)
   In the cloud container set VD_THREE to a local three.min.js r128 (cdnjs is blocked); `source ~/.vd-env` does.

   Per demo, at 1280x800:
     names     every control a screen reader can reach (button, slider, check box, select, text box, tab, link, radio) has a name
     values    every slider says its value with its unit (aria-valuetext) when its readout shows one
     pictures  every canvas and drawn svg on show is in the tree as a picture (img or application) with a name, or hidden on purpose
     scene     the main picture has a description of what it shows now (VD.describe), and the description follows the state:
               it must change after Play runs for a while, or after a slider in the rail moves
     live      a polite live region exists, and pressing Play (Space) or moving a slider puts words in one within 2 s
     keyboard  Tab from the top reaches the main picture and every shown rail control, in page order, without a trap, and every stop
               has a visible focus mark
     landmarks one main, one banner, a complementary rail, one h1, and the picture is inside main
   --say prints the main picture's description at open and after the steps, and every announcement; --lang es runs in Spanish.
   A line per demo: PASS or the failing checks with the first few names; --json writes $VDCHECK_DIR/srcheck/report.json.
   Exit 1 when any demo fails a check. Warnings (an unnamed decorative canvas that is not hidden, a missing scene description on a
   demo the per demo sweep has not reached yet) do not fail it unless --strict. */
'use strict';
const fs = require('node:fs'), path = require('node:path'), http = require('node:http');
const { chromium } = require('playwright');
const ROOT = path.resolve(__dirname, '..');
const OUT = path.join(process.env.VDCHECK_DIR || '/tmp/vdcheck', 'srcheck');
const argv = process.argv.slice(2);
const jobsAt = argv.indexOf('--jobs'), JOBS = jobsAt >= 0 ? Math.max(1, +argv[jobsAt + 1] || 1) : 1;
const STRICT = argv.includes('--strict'), TREE = argv.includes('--tree'), JSONOUT = argv.includes('--json'), SAY = argv.includes('--say');
const langAt = argv.indexOf('--lang'), LANG = langAt >= 0 ? argv[langAt + 1] : '';
const isRedirect = (d) => /http-equiv="refresh"/i.test(fs.readFileSync(path.join(ROOT, 'demos', d + '.html'), 'utf8'));
const demos = (argv.includes('--all') ? fs.readdirSync(path.join(ROOT, 'demos')).filter((f) => f.endsWith('.html')).map((f) => f.slice(0, -5))
  : argv.filter((a, i) => !a.startsWith('--') && argv[i - 1] !== '--jobs' && argv[i - 1] !== '--lang')).filter((d) => !isRedirect(d));
if (!demos.length) { console.error('usage: node tools/srcheck.cjs demo... | --all [--jobs N] [--strict] [--tree] [--json] [--say] [--lang es]'); process.exit(2); }
const TYPES = { '.html': 'text/html', '.js': 'text/javascript', '.css': 'text/css', '.json': 'application/json', '.svg': 'image/svg+xml',
  '.png': 'image/png', '.jpg': 'image/jpeg', '.webp': 'image/webp', '.mp4': 'video/mp4', '.bin': 'application/octet-stream' };

function serve() {
  const s = http.createServer((req, res) => {
    const rel = decodeURIComponent(req.url.split(/[?#]/)[0]).replace(/^\/+/, '');
    if (rel.split('/').includes('..')) { res.writeHead(403).end(); return; }
    let b; try { b = fs.readFileSync(path.join(ROOT, rel)); } catch (_) { res.writeHead(404).end(); return; }
    res.setHeader('Content-Type', TYPES[path.extname(rel)] || 'application/octet-stream'); res.end(b);
  });
  return new Promise((r) => s.listen(0, '127.0.0.1', () => r({ s, base: `http://127.0.0.1:${s.address().port}/` })));
}

const CONTROL = new Set(['button', 'slider', 'checkbox', 'combobox', 'textbox', 'spinbutton', 'tab', 'link', 'radio', 'switch', 'menuitem',
  'listbox', 'option', 'searchbox', 'separator']);
const val = (p) => (p && p.value != null ? String(p.value) : '');

/* the tree as plain rows: role, name, description, value, valuetext, focusable, ignored, backend node id */
async function tree(page) {
  const cdp = await page.context().newCDPSession(page);
  const { nodes } = await cdp.send('Accessibility.getFullAXTree');
  await cdp.detach();
  return nodes.map((n) => {
    const props = {}; (n.properties || []).forEach((p) => { props[p.name] = p.value && p.value.value; });
    return { role: val(n.role), name: val(n.name).trim(), desc: val(n.description).trim(), value: val(n.value), ignored: !!n.ignored,
      focusable: !!props.focusable, hidden: !!props.hidden, live: props.live || '', valuetext: props.valuetext || '', id: n.backendDOMNodeId,
      kids: n.childIds || [], nodeId: n.nodeId, parent: n.parentId };
  });
}

/* the text of every live region now (aria-live, role status, alert, log), joined */
const liveText = (page) => page.evaluate(() => Array.from(document.querySelectorAll('[aria-live]:not([aria-live="off"]), [role="status"], [role="alert"], [role="log"]'))
  .filter((e) => !e.closest('[aria-hidden="true"], [hidden]')).map((e) => e.textContent.trim()).join(' | '));

async function check(browser, base, demo) {
  const ctx = await browser.newContext({ viewport: { width: 1280, height: 800 }, reducedMotion: 'no-preference' });
  await ctx.addInitScript(() => { try { localStorage.setItem('vd-theme', 'dark'); } catch (_) {} });
  await ctx.route(/fonts\.(googleapis|gstatic)\.com/, (r) => r.abort());
  if (process.env.VD_THREE) await ctx.route(/cdnjs\.cloudflare\.com\/ajax\/libs\/three\.js\//, (r) => r.fulfill({ path: process.env.VD_THREE }));
  await ctx.addInitScript(() => { window.__said = []; let was = ''; addEventListener('load', () => new MutationObserver(() => { const l = document.getElementById('vdLive'), t = l ? l.textContent.trim() : '';
    if (t && t !== was) window.__said.push(t); was = t; }).observe(document.body, { subtree: true, childList: true, characterData: true })); });
  const page = await ctx.newPage(), errs = [];
  page.on('pageerror', (e) => errs.push(String(e.message || e).slice(0, 160)));
  const fail = {}, warn = {}, add = (o, k, s) => { (o[k] = o[k] || []).push(s); };
  try {
    await page.goto(base + 'demos/' + demo + '.html' + (LANG ? '?lang=' + LANG : ''), { waitUntil: 'load', timeout: 90000 });
    await page.waitForTimeout(1500);
    const nodes = await tree(page), byId = new Map(nodes.map((n) => [n.nodeId, n]));
    if (TREE) nodes.filter((n) => !n.ignored && n.role !== 'generic' && n.role !== 'none' && n.role !== 'StaticText' && n.role !== 'InlineTextBox')
      .forEach((n) => console.log(`  ${n.role} "${n.name.slice(0, 90)}"${n.desc ? ' desc="' + n.desc.slice(0, 90) + '"' : ''}${n.valuetext ? ' vt="' + n.valuetext + '"' : ''}`));

    /* names */
    nodes.filter((n) => !n.ignored && CONTROL.has(n.role) && !n.name && n.role !== 'separator' && n.role !== 'option')
      .forEach((n) => add(fail, 'names', n.role + '#' + n.id));

    /* DOM facts the tree does not carry directly */
    const dom = await page.evaluate(() => {
      const shown = (e) => { if (e.closest('[hidden], [aria-hidden="true"], dialog:not([open])')) return false; const r = e.getBoundingClientRect(), s = getComputedStyle(e);
        return r.width > 8 && r.height > 8 && s.visibility !== 'hidden' && s.display !== 'none' && +s.opacity > 0.05; };
      const desc = (e) => (e.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean).map((i) => { const d = document.getElementById(i); return d ? d.textContent.trim() : ''; }).join(' ').trim();
      const tag = (e) => e.tagName.toLowerCase() + (e.id ? '#' + e.id : e.className && typeof e.className === 'string' ? '.' + e.className.split(' ')[0] : '');
      const pics = Array.from(document.querySelectorAll('.stage canvas, .stage svg, main canvas')).filter((e) => !e.closest('button, .vd-size, .vd-split, [role="separator"]') && shown(e));
      const top = pics.filter((e) => !(e.tagName === 'svg' && e.closest('svg') !== e)).filter((e) => !(e.tagName === 'svg' && e.closest('canvas')));
      const area = (e) => { const r = e.getBoundingClientRect(); return r.width * r.height * (e.tabIndex >= 0 || e.getAttribute('role') === 'application' ? 3 : 1); };
      top.sort((a, b) => area(b) - area(a));   /* the picture a student works with: the biggest, and a focusable one first */
      const main = top[0] || null;
      const sliders = Array.from(document.querySelectorAll('input[type="range"]')).filter(shown).map((s) => {
        const o = (s.id && document.querySelector('output[for~="' + s.id + '"]')) || null;
        return { id: tag(s), vt: s.getAttribute('aria-valuetext') || '', out: o ? o.textContent.trim() : '', hiddenAria: s.getAttribute('aria-hidden') === 'true' };
      });
      const rail = Array.from(document.querySelectorAll('aside.rail button, aside.rail input, aside.rail select, aside.rail summary, aside.rail a[href], aside.rail [tabindex="0"], .stage button, .stage input, .stage select, .stage [tabindex="0"]'))
        .filter((e) => shown(e) && !e.disabled && e.tabIndex >= 0 && !e.closest('[inert], details:not([open]) > :not(summary)'));
      rail.forEach((e, i) => e.setAttribute('data-sr-i', String(i)));
      if (main) main.setAttribute('data-sr-main', '');
      return {
        main: main ? { tag: tag(main), role: main.getAttribute('role') || '', label: main.getAttribute('aria-label') || '', desc: desc(main), hidden: main.getAttribute('aria-hidden') === 'true', tab: main.tabIndex >= 0, describe: !!main.vdDescribe } : null,
        pics: top.map((e) => ({ tag: tag(e), role: e.getAttribute('role') || '', label: (e.getAttribute('aria-label') || e.getAttribute('aria-labelledby') || (e.querySelector && e.querySelector(':scope > title') ? 't' : '')), hidden: !!e.closest('[aria-hidden="true"]') })),
        sliders, nrail: rail.length,
        live: document.querySelectorAll('[aria-live="polite"], [aria-live="assertive"], [role="status"], [role="log"]').length,
        mains: document.querySelectorAll('main, [role="main"]').length, h1: document.querySelectorAll('h1').length,
        aside: document.querySelectorAll('aside').length,
        inMain: main ? !!main.closest('main') : true,
      };
    });

    /* values */
    dom.sliders.forEach((s) => { if (!s.hiddenAria && s.out && /[^\d\s.,−\-+eE×·^⁰¹²³⁴⁵⁶⁷⁸⁹⁻]/.test(s.out) && !s.vt) add(fail, 'values', s.id + ' (' + s.out.slice(0, 20) + ')'); });

    /* pictures */
    dom.pics.forEach((p) => {
      if (p.hidden) return;
      if (!p.label) add(p.tag.startsWith('svg') ? warn : fail, 'pictures', p.tag + ' has no name');
      else if (p.tag.startsWith('canvas') && !/^(img|application|figure|graphics-document|button|slider)$/.test(p.role)) add(fail, 'pictures', p.tag + ' has no picture role');
    });

    /* landmarks */
    if (dom.mains !== 1) add(fail, 'landmarks', dom.mains + ' main');
    if (dom.h1 !== 1) add(fail, 'landmarks', dom.h1 + ' h1');
    if (!nodes.some((n) => n.role === 'banner' && !n.ignored)) add(warn, 'landmarks', 'no banner');
    if (!dom.aside) add(warn, 'landmarks', 'no rail');
    if (!dom.inMain) add(fail, 'landmarks', 'picture outside main');

    /* scene: the main picture tells what it shows now, and follows the state */
    let liveHeard = '';
    if (!dom.main) add(warn, 'scene', 'no picture');
    else if (dom.main.hidden) add(warn, 'scene', dom.main.tag + ' hidden');
    else {
      if (!dom.main.desc && !dom.main.describe) add(STRICT ? fail : warn, 'scene', dom.main.tag + ' has no description of what it shows now');
      const d0 = dom.main.desc, l0 = await liveText(page);
      /* Play for a while (Space on the body), then a rail slider one step: the description or a live region must change */
      await page.evaluate(() => { if (document.activeElement && document.activeElement.blur) document.activeElement.blur(); });
      await page.keyboard.press('Space'); await page.waitForTimeout(1600);
      let l1 = await liveText(page);
      if (l1 !== l0) liveHeard = 'play';
      await page.keyboard.press('Space'); await page.waitForTimeout(300);
      const sl = page.locator('aside.rail input[type="range"]:visible, .stage input[type="range"]:visible').first();
      if (await sl.count()) { await sl.focus(); await page.keyboard.press('ArrowRight'); await page.waitForTimeout(1600); await page.keyboard.press('ArrowLeft'); await page.waitForTimeout(400); }
      const l2 = await liveText(page);
      if (!liveHeard && l2 !== l1) liveHeard = 'slider';
      const d1 = await page.evaluate(async () => { const m = document.querySelector('[data-sr-main]'); if (!m) return ''; if (m.vdDescribe) { m.vdDescribe.refresh(); await new Promise((r) => setTimeout(r, 50)); }   /* i18n.js translates new words on the next tick */ return (m.getAttribute('aria-describedby') || '').split(/\s+/).filter(Boolean).map((i) => { const d = document.getElementById(i); return d ? d.textContent.trim() : ''; }).join(' ').trim(); });
      if (SAY) { console.log(`  ${demo} description at open: ${d0 || '(none)'}`); console.log(`  ${demo} after Play 1.6 s, Pause, a slider step: ${d1 || '(none)'}`);
        (await page.evaluate(() => window.__said)).forEach((t) => console.log(`  ${demo} said: ${t}`)); }
      if ((d0 || d1) && d0 === d1 && !liveHeard) add(warn, 'scene', 'description did not change after Play and a slider step');
    }

    /* live */
    if (!dom.live) add(fail, 'live', 'no live region');
    else if (!liveHeard) add(STRICT ? fail : warn, 'live', 'nothing announced after Play or a slider step');

    /* keyboard: Tab from the top */
    await page.evaluate(() => { document.activeElement && document.activeElement.blur && document.activeElement.blur(); window.scrollTo(0, 0); });
    await page.mouse.click(2, 2);
    const seen = new Set(), stops = [];
    let mainHit = false, noRing = [], prev = null, same = 0;
    for (let i = 0; i < 400; i++) {
      await page.keyboard.press('Tab');
      const f = await page.evaluate(() => {
        const a = document.activeElement; if (!a || a === document.body) return null;
        const has = (s) => (s.outlineStyle !== 'none' && parseFloat(s.outlineWidth) > 0) || (s.boxShadow && s.boxShadow !== 'none');
        const ring = has(getComputedStyle(a)) || has(getComputedStyle(a, '::before')) || has(getComputedStyle(a, '::after'));
        return { i: a.getAttribute('data-sr-i'), main: a.hasAttribute('data-sr-main') || !!a.querySelector('[data-sr-main]'), ring,
          tag: a.tagName.toLowerCase() + (a.id ? '#' + a.id : ''), key: a.id || a.getAttribute('data-sr-i') || a.outerHTML.slice(0, 60) };
      });
      if (!f) { if (stops.length) break; continue; }
      if (f.key === prev) { if (++same > 3) { add(fail, 'keyboard', 'focus stuck on ' + f.tag); break; } continue; } same = 0; prev = f.key;
      if (seen.has(f.key) && stops.length > 3 && f.key === stops[0]) break;
      seen.add(f.key); stops.push(f.key);
      if (f.main) mainHit = true;
      if (!f.ring) noRing.push(f.tag);
    }
    if (dom.main && !dom.main.hidden && !mainHit && dom.main.tab) add(fail, 'keyboard', 'Tab never reaches ' + dom.main.tag);
    const reached = await page.evaluate((seen) => Array.from(document.querySelectorAll('[data-sr-i]')).filter((e) => !seen.includes(e.getAttribute('data-sr-i')) && !seen.includes(e.id))
      .map((e) => e.tagName.toLowerCase() + (e.id ? '#' + e.id : '') + ' "' + (e.getAttribute('aria-label') || e.textContent || '').trim().slice(0, 24) + '"'), [...seen]);
    reached.slice(0, 6).forEach((r) => add(warn, 'keyboard', 'not reached: ' + r));
    noRing.slice(0, 4).forEach((r) => add(fail, 'keyboard', 'no focus mark: ' + r));
    errs.forEach((e) => add(fail, 'errors', e));
    return { demo, fail, warn, stops: stops.length, nrail: dom.nrail };
  } catch (e) {
    add(fail, 'open', String(e.message || e).slice(0, 160)); return { demo, fail, warn };
  } finally { await ctx.close(); }
}

(async () => {
  const { s, base } = await serve();
  const browser = await chromium.launch({ args: ['--use-gl=swiftshader', '--enable-unsafe-swiftshader'] });
  const results = [], queue = demos.slice();
  let bad = 0;
  async function worker() {
    while (queue.length) {
      const d = queue.shift(), r = await check(browser, base, d); results.push(r);
      const f = Object.keys(r.fail), w = Object.keys(r.warn);
      if (f.length) bad++;
      const fmt = (o) => Object.entries(o).map(([k, v]) => k + ' (' + v.length + '): ' + v.slice(0, 3).join('; ')).join(' | ');
      console.log((f.length ? 'FAIL ' : 'PASS ') + d + (f.length ? '  ' + fmt(r.fail) : '') + (w.length ? '  [warn ' + fmt(r.warn) + ']' : ''));
    }
  }
  await Promise.all(Array.from({ length: JOBS }, worker));
  await browser.close(); s.close();
  if (JSONOUT) { fs.mkdirSync(OUT, { recursive: true }); fs.writeFileSync(path.join(OUT, 'report.json'), JSON.stringify(results, null, 1)); console.log('report: ' + path.join(OUT, 'report.json')); }
  console.log(`${demos.length - bad} of ${demos.length} pass`);
  process.exit(bad ? 1 : 0);
})();
